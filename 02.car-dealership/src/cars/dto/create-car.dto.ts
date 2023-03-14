import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'La marca del auto debe ser un string' })
  readonly brand: string;
  @IsString({ message: 'El modelo del auto debe ser un string' })
  readonly model: string;
}
