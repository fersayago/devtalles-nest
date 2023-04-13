import { IsString } from 'class-validator';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  url: string;

  @ManyToOne(() => Product, (product) => product.images)
  product: Product;
}
