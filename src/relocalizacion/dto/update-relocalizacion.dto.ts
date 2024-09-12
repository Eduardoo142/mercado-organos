import { ApiProperty } from '@nestjs/swagger';

export class UpdateRelocalizacionDto {
  @ApiProperty({ description: 'ID del cliente que solicita la relocalización', required: false })
  readonly clienteId?: number;

  @ApiProperty({ description: 'Dirección de la nueva ubicación', required: false })
  readonly nuevaDireccion?: string;

  @ApiProperty({ description: 'Información adicional sobre la relocalización', required: false })
  readonly informacionAdicional?: string;

  @ApiProperty({ description: 'Riesgos asociados a la relocalización', required: false })
  readonly riesgos?: string;

  @ApiProperty({ description: 'Estado de confirmación de la relocalización', required: false })
  readonly confirmado?: boolean;
}
