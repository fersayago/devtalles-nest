import { Injectable } from '@nestjs/common';
import { BRANDS_SEED, CARS_SEED } from './data';

@Injectable()
export class SeedService {
  populateDB() {
    // CARS_SEED;
    // BRANDS_SEED;

    return 'SEED excecuted';
  }
}
