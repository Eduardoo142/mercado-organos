import { ApiProperty } from '@nestjs/swagger';

export class CreateRelocalizacionDto {
  @ApiProperty({ description: 'ID del cliente que solicita la relocalización' })
  readonly clienteId: number;

  @ApiProperty({ description: 'Dirección de la nueva ubicación' })
  readonly nuevaDireccion: string;

  @ApiProperty({ description: 'Información adicional sobre la relocalización', required: false })
  readonly informacionAdicional?: string;

  @ApiProperty({ description: 'Riesgos asociados a la relocalización' })
  readonly riesgos: string;

  @ApiProperty({ description: 'Estado de confirmación de la relocalización', default: false })
  readonly confirmado: boolean;
}
