import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function boostrap() {
  // Crea nuestra aplicación de Nest en nuestro Modulo principal
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // el whitelist solo deja la data que espero recibir mediante el dto eliminando el resto de parametros
      whitelist: true,
      // no permite recibir parametros extras aparte de los declarados en el DTO
      forbidNonWhitelisted: true,
    }),
  );

  // Hace en listening en el puerto 3000
  await app.listen(3000);
}
boostrap();
