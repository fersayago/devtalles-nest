import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'La marca del auto debe ser un string' })
  readonly brand: string;
  @IsString({ message: 'El modelo del auto debe ser un string' })
  @MinLength(3, {
    message: 'El modelo del auto debe tener al menos 3 caracteres',
  })
  readonly model: string;
}
