import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organo } from './organo.entity';
import { CreateOrganoDto } from './dto/create-organo.dto';
import { UpdateOrganoDto } from './dto/update-organo.dto';
import { Proveedor } from '../proveedores/proveedor.entity';

@Injectable()
export class OrganosService {
  constructor(
    @InjectRepository(Organo)
    private readonly organoRepository: Repository<Organo>,
    @InjectRepository(Proveedor)
    private readonly proveedorRepository: Repository<Proveedor>,
  ) {}

  async create(createOrganoDto: CreateOrganoDto): Promise<Organo> {
    const proveedor = await this.proveedorRepository.findOneBy({ id: createOrganoDto.proveedorId });

    if (!proveedor) {
      throw new NotFoundException('Proveedor no encontrado');
    }

    const organo = this.organoRepository.create({
      ...createOrganoDto,
      proveedor,
    });

    return this.organoRepository.save(organo);
  }

  async findAll(): Promise<Organo[]> {
    return this.organoRepository.find({ relations: ['proveedor'] });
  }

  async findOne(id: number): Promise<Organo> {
    const organo = await this.organoRepository.findOne({
      where: { id },
      relations: ['proveedor'],
    });
    if (!organo) {
      throw new NotFoundException(`Órgano con ID ${id} no encontrado`);
    }
    return organo;
  }

  async update(id: number, updateOrganoDto: UpdateOrganoDto): Promise<Organo> {
    const organo = await this.organoRepository.preload({
      id,
      ...updateOrganoDto,
    });

    if (!organo) {
      throw new NotFoundException(`Órgano con ID ${id} no encontrado`);
    }

    return this.organoRepository.save(organo);
  }

  async remove(id: number): Promise<void> {
    const organo = await this.findOne(id);
    await this.organoRepository.remove(organo);
  }
}
