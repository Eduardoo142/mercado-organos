import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Proveedor } from '../proveedores/proveedor.entity';

@Entity()
export class Organo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  estado: string;

  @Column({ type: 'decimal' })
  precio: number;

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.organos)
  proveedor: Proveedor;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaRegistro: Date;
}
