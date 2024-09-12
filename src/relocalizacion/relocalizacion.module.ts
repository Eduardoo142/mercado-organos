import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Relocalizacion } from './relocalizacion.entity';
import { RelocalizacionService } from './relocalizacion.service';
import { RelocalizacionController } from './relocalizacion.controller';
import { ClientesModule } from '../clientes/clientes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Relocalizacion]),
    ClientesModule,
  ],
  providers: [RelocalizacionService],
  controllers: [RelocalizacionController],
})
export class RelocalizacionModule {}
