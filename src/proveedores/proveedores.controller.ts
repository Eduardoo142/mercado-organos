import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Proveedor } from './proveedor.entity';

@ApiTags('proveedores')
@Controller('proveedores')
export class ProveedoresController {
  constructor(private readonly proveedoresService: ProveedoresService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo proveedor' })
  @ApiResponse({ status: 201, description: 'Proveedor creado exitosamente.', type: Proveedor })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  create(@Body() createProveedorDto: CreateProveedorDto) {
    return this.proveedoresService.create(createProveedorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener la lista de proveedores' })
  @ApiResponse({ status: 200, description: 'Lista de proveedores.', type: [Proveedor] })
  @ApiResponse({ status: 404, description: 'Proveedores no encontrados.' })
  findAll() {
    return this.proveedoresService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un proveedor por ID' })
  @ApiResponse({ status: 200, description: 'Proveedor encontrado.', type: Proveedor })
  @ApiResponse({ status: 404, description: 'Proveedor no encontrado.' })
  findOne(@Param('id') id: number) {
    return this.proveedoresService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un proveedor por ID' })
  @ApiResponse({ status: 200, description: 'Proveedor actualizado.', type: Proveedor })
  @ApiResponse({ status: 404, description: 'Proveedor no encontrado.' })
  update(@Param('id') id: number, @Body() updateProveedorDto: CreateProveedorDto) {
    return this.proveedoresService.update(id, updateProveedorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un proveedor por ID' })
  @ApiResponse({ status: 204, description: 'Proveedor eliminado.' })
  @ApiResponse({ status: 404, description: 'Proveedor no encontrado.' })
  remove(@Param('id') id: number) {
    return this.proveedoresService.remove(id);
  }
}
