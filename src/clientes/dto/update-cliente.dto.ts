import { IsNotEmpty, IsString, IsEmail, IsOptional, IsPhoneNumber, IsDate, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClienteDto {
    @ApiProperty({ description: 'Nombre del cliente' })
    @IsNotEmpty()
    @IsString()
    nombre?: string;
  
    @ApiProperty({ description: 'Email del cliente' })
    @IsNotEmpty()
    @IsEmail()
    email?: string;
  
    @ApiProperty({ description: 'Teléfono del cliente' })
    @IsPhoneNumber()
    telefono?: string;
  
    @ApiProperty({ description: 'Dirección del cliente' })
    @IsOptional()
    @IsString()
    direccion?: string;
  
    @ApiProperty({ description: 'Fecha de nacimiento del cliente' })
    @IsOptional()
    @IsDateString()
    fechaNacimiento?: string;
  
    @ApiProperty({ description: 'Documento de identidad del cliente' })
    @IsString()
    documentoIdentidad?: string;
  }
  