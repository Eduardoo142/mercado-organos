import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Plataforma de Comercio y Servicios')
    .setDescription('Documentación de la API para la plataforma de comercio y servicios de donación de órganos.')
    .setVersion('1.0')
    .addTag('proveedores')
    .addTag('clientes')
    .addTag('organos')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
