import { Injectable } from '@nestjs/common';
import { BRANDS_SEED, CARS_SEED } from './data';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}
  populateDB() {
    // CARS_SEED;
    this.carsService.fillCarsWithSeedData(CARS_SEED);

    // BRANDS_SEED;
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);

    return 'SEED excecuted';
  }
}
