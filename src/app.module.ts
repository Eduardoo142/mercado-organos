import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organo } from './organos/organo.entity';
import { Proveedor } from './proveedores/proveedor.entity';
import { Cliente } from './clientes/cliente.entity';
import { Relocalizacion } from './relocalizacion/relocalizacion.entity';
import { OrganosModule } from './organos/organos.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ClientesModule } from './clientes/clientes.module';
import { ConfigModule } from '@nestjs/config';
import { RelocalizacionController } from './relocalizacion/relocalizacion.controller';
import { RelocalizacionModule } from './relocalizacion/relocalizacion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Organo, Proveedor, Cliente, Relocalizacion],
      synchronize: true,
    }),
    OrganosModule,
    ProveedoresModule,
    ClientesModule,
    RelocalizacionModule,
  ],
  controllers: [],
})
export class AppModule {}
