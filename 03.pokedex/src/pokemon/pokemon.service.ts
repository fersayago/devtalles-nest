import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {
  private defaultLimit: number;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly configService: ConfigService,
  ) {
    this.defaultLimit = configService.get<number>('defaultLimit');
  }

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();
    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto);
      return pokemon;
    } catch (err) {
      this.handleExceptions(err);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = this.defaultLimit, offset = 0 } = paginationDto;
    return this.pokemonModel
      .find()
      .limit(limit)
      .skip(offset)
      .sort({
        no: 1,
      })
      .select('-__v');
  }

  async findOne(term: string) {
    let pokemon: Pokemon;

    // validamos que el id recibido sea un nro
    if (!isNaN(+term)) {
      pokemon = await this.pokemonModel.findOne({ no: term });
    }

    //validamos que lo que recibimos es un objeto de mongo y que todavia no exista pokemon
    if (!pokemon && isValidObjectId(term)) {
      pokemon = await this.pokemonModel.findById(term);
    }

    // Si no encontramos pokemon revisamos con nombre
    if (!pokemon) {
      pokemon = await this.pokemonModel.findOne({
        name: term.toLowerCase().trim(),
      });
    }

    if (!pokemon)
      throw new NotFoundException(
        `Pokemon with id, name or no: "${term}" not found`,
      );

    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {
    try {
      const pokemon = await this.findOne(term);

      if (updatePokemonDto.name)
        updatePokemonDto.name = updatePokemonDto.name.toLowerCase();

      await pokemon.updateOne(updatePokemonDto, {
        new: true,
      });

      return {
        ...pokemon.toJSON(),
        ...updatePokemonDto,
      };
    } catch (err) {
      this.handleExceptions(err);
    }
  }

  async remove(id: string) {
    // ! Validamos y eliminamos en dos consultas
    // // const pokemon = await this.findOne(id);
    // // await pokemon.deleteOne();
    // return id;

    // ! Eliminamos en una consulta sin validar
    // const result = await this.pokemonModel.findByIdAndDelete(id);

    // ! Validamos y eliminamos en una consulta
    const { deletedCount } = await this.pokemonModel.deleteOne({
      _id: id,
    });

    if (deletedCount === 0)
      throw new BadRequestException(
        `No se encontro pokemon con el id "${id}" para eliminar`,
      );

    return;
  }

  private handleExceptions(error: any) {
    if (error.code === 11000)
      throw new BadRequestException(
        `Pokemon already exists in database with term: ${JSON.stringify(
          error.keyValue,
        )}`,
      );

    console.log(error);
    throw new InternalServerErrorException(
      `Can't create or update Pokemon - Check server logs`,
    );
  }
}
