import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id: string;

  @IsString({ message: 'La marca del auto debe ser un string' })
  @IsOptional()
  readonly brand: string;

  @IsString({ message: 'El modelo del auto debe ser un string' })
  @MinLength(3, {
    message: 'El modelo del auto debe tener al menos 3 caracteres',
  })
  @IsOptional()
  readonly model: string;
}
