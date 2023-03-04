import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function boostrap() {
  // Crea nuestra aplicación de Nest en nuestro Modulo principal
  const app = await NestFactory.create(AppModule);
  // Hace en listening en el puerto 3000
  await app.listen(3000);
}
boostrap();
