import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  // La inyección de dependencias se realiza en el constructor
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    console.log({ id });
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Param('id') id: string, @Body() body: any) {
    return body;
  }

  @Patch(':id')
  updateCar(@Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return {
      method: 'delete',
      id,
    };
  }
}
