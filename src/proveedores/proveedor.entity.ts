import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Organo } from '../organos/organo.entity';

@Entity()
export class Proveedor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  edad: number;

  @Column({ nullable: true })
  direccion: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaRegistro: Date;

  @Column({ type: 'float'})
  calificacion: number;

  @OneToMany(() => Organo, (organo) => organo.proveedor)
  organos: Organo[];
}
