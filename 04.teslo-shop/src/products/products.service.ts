import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { DataSource, Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { validate as isUUID } from 'uuid';
import { ProductImage } from './entities';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('ProductsService');

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,

    private readonly dataSource: DataSource,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const { images = [], ...producDetails } = createProductDto;

      const product = this.productRepository.create({
        ...producDetails,
        images: images.map((image) =>
          this.productImageRepository.create({ url: image }),
        ),
        // como lo estoy creando aca, ORM va a inferir el productId ya que las instancias de el productImages la estamos creando desde el producto mismo
      });

      await this.productRepository.save(product);

      return { ...product, images: images };
    } catch (err) {
      this.handleDBExceptions(err);
    }
  }

  // TODO: Paginar
  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    const products = await this.productRepository.find({
      take: limit,
      skip: offset,
      relations: {
        images: true,
      },
    });

    // aplanamos para que en imagenes solo llegue url y no un objeto {id, url}
    return products.map(({ images, ...rest }) => ({
      ...rest,
      images: images.map((img) => img.url),
    }));
  }

  async findOne(term: string) {
    let product: Product;

    if (isUUID(term)) {
      product = await this.productRepository.findOneBy({ id: term });
    } else {
      // product = await this.productRepository.findOneBy({ slug: term });
      const queryBuilder = this.productRepository.createQueryBuilder('prod');
      product = await queryBuilder
        .where('LOWER(title) =:title or slug =:slug', {
          title: term.toLowerCase(),
          slug: term.toLowerCase(),
        })
        .leftJoinAndSelect('prod.images', 'prodImages')
        .getOne();
    }

    if (!product)
      throw new NotFoundException(`Product with term "${term}" not found`);
    return product;
  }

  async findOnePlain(term: string) {
    const { images = [], ...rest } = await this.findOne(term);
    return {
      ...rest,
      images: images.map((image) => image.url),
    };
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const { images, ...toUpdate } = updateProductDto;

    const product = await this.productRepository.preload({
      id: id,
      ...toUpdate,
    });

    if (!product) new NotFoundException(`product with id: ${id} not found`);

    // Create query runner
    // ! Se crea el query runner fuera del try catch ya que si sucede algun error se pueda hacer el rollback de la transacción y el release en el catch
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (images) {
        // se puede usar this.productRepository.delete()
        // pero vamos a usar el Query runner
        // vamos a borrar todas las productImages cuya columna productId sea igual al id
        await queryRunner.manager.delete(ProductImage, { product: { id } });

        product.images = images.map((image) =>
          this.productImageRepository.create({ url: image }),
        );
      } else {
        // TODO: Como resolvemos el product.images
      }

      await queryRunner.manager.save(product);

      await queryRunner.commitTransaction();

      await queryRunner.release();

      return this.findOnePlain(id);
    } catch (err) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      this.handleDBExceptions(err);
    }
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException('Ayuda!');
  }

  async deleteAllProducts() {
    const query = this.productImageRepository.createQueryBuilder('product');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }
}
