import { IsNotEmpty, IsString, IsOptional, IsPhoneNumber, IsEmail, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateProveedorDto {

  @ApiProperty({ description: 'Nombre del proveedor' })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Edad del proveedor' })
  @IsNumber()
  edad: number;

  @ApiProperty({ description: 'Dirección del proveedor' })
  @IsOptional()
  @IsString()
  direccion?: string;

  @ApiProperty({ description: 'Calificación del proveedor' })
  @IsOptional()
  @IsNumber()
  calificacion: number;
}
