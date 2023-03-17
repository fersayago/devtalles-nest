import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`No se encontro el auto con id ${id}`);
    }

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const createdCar: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(createdCar);
    return createdCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    
  }
}
