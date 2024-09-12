import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrganoDto {

  @ApiProperty({ description: 'Nombre del órgano' })
  @IsNotEmpty()
  @IsString()
  nombre?: string;

  @ApiProperty({ description: 'Estado del órgano' })
  @IsNotEmpty()
  @IsString()
  estado?: string;

  @ApiProperty({ description: 'Precio del órgano' })
  @IsNotEmpty()
  @IsNumber()
  precio?: number;

  @ApiProperty({ description: 'Id del proveedor' })
  @IsNotEmpty()
  proveedorId: number;

  @ApiProperty({ description: 'Descripción del órgano' })
  @IsOptional()
  @IsString()
  descripcion?: string;
}



  