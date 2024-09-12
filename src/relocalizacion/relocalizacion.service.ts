import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Relocalizacion } from './relocalizacion.entity';
import { CreateRelocalizacionDto } from './dto/create-relocalizacion.dto';
import { UpdateRelocalizacionDto } from './dto/update-relocalizacion.dto';
import { Cliente } from '../clientes/cliente.entity';

@Injectable()
export class RelocalizacionService {
  constructor(
    @InjectRepository(Relocalizacion)
    private readonly relocalizacionRepository: Repository<Relocalizacion>,
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async create(createRelocalizacionDto: CreateRelocalizacionDto): Promise<Relocalizacion> {
    const cliente = await this.clienteRepository.findOneBy({ id: createRelocalizacionDto.clienteId });

    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${createRelocalizacionDto.clienteId} no encontrado`);
    }

    const relocalizacion = this.relocalizacionRepository.create({
      ...createRelocalizacionDto,
      cliente,
    });

    return this.relocalizacionRepository.save(relocalizacion);
  }

  async findAll(): Promise<Relocalizacion[]> {
    return this.relocalizacionRepository.find({ relations: ['cliente'] });
  }

  async findOne(id: number): Promise<Relocalizacion> {
    const relocalizacion = await this.relocalizacionRepository.findOne({ where: { id }, relations: ['cliente'] });
    if (!relocalizacion) {
      throw new NotFoundException(`Relocalización con ID ${id} no encontrada`);
    }
    return relocalizacion;
  }

  async update(id: number, updateRelocalizacionDto: UpdateRelocalizacionDto): Promise<Relocalizacion> {
    const relocalizacion = await this.relocalizacionRepository.preload({
      id,
      ...updateRelocalizacionDto,
    });

    if (!relocalizacion) {
      throw new NotFoundException(`Relocalización con ID ${id} no encontrada`);
    }

    if (updateRelocalizacionDto.clienteId) {
      const cliente = await this.clienteRepository.findOneBy({ id: updateRelocalizacionDto.clienteId });
      if (!cliente) {
        throw new NotFoundException(`Cliente con ID ${updateRelocalizacionDto.clienteId} no encontrado`);
      }
      relocalizacion.cliente = cliente;
    }

    return this.relocalizacionRepository.save(relocalizacion);
  }

  async remove(id: number): Promise<void> {
    const result = await this.relocalizacionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Relocalización con ID ${id} no encontrada`);
    }
  }
}
