import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

// Los decoradores convierten las clases en objetos que tienen cierta funcionalidad especifica
@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
