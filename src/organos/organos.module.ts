import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganosService } from './organos.service';
import { OrganosController } from './organos.controller';
import { Organo } from './organo.entity';
import { Proveedor } from '../proveedores/proveedor.entity';
import { ProveedoresModule } from '../proveedores/proveedores.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Organo, Proveedor]), 
    ProveedoresModule,
  ],
  providers: [OrganosService],
  controllers: [OrganosController],
})
export class OrganosModule {}
