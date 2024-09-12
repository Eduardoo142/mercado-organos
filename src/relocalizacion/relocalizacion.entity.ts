import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Cliente } from '../clientes/cliente.entity';

@Entity('relocalizaciones')
export class Relocalizacion {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'ID único de la relocalización' })
  id: number;

  @ManyToOne(() => Cliente, { nullable: false })
  @ApiProperty({ description: 'ID del cliente que solicita la relocalización' })
  cliente: Cliente;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty({ description: 'Dirección de la nueva ubicación' })
  nuevaDireccion: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  @ApiProperty({ description: 'Información adicional sobre la relocalización' })
  informacionAdicional?: string;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty({ description: 'Riesgos asociados a la relocalización' })
  riesgos: string;

  @Column({ type: 'boolean', default: false })
  @ApiProperty({ description: 'Estado de confirmación de la relocalización' })
  confirmado: boolean;
}
