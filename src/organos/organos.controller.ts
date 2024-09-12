import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OrganosService } from './organos.service';
import { CreateOrganoDto } from './dto/create-organo.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Organo } from './organo.entity';

@ApiTags('organos')
@Controller('organos')
export class OrganosController {
  constructor(private readonly organosService: OrganosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo órgano' })
  @ApiResponse({ status: 201, description: 'Órgano creado exitosamente.', type: Organo })
  @ApiResponse({ status: 400, description: 'Solicitud incorrecta.' })
  create(@Body() createOrganoDto: CreateOrganoDto) {
    return this.organosService.create(createOrganoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener la lista de órganos' })
  @ApiResponse({ status: 200, description: 'Lista de órganos.', type: [Organo] })
  @ApiResponse({ status: 404, description: 'Órganos no encontrados.' })
  findAll() {
    return this.organosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un órgano por ID' })
  @ApiResponse({ status: 200, description: 'Órgano encontrado.', type: Organo })
  @ApiResponse({ status: 404, description: 'Órgano no encontrado.' })
  findOne(@Param('id') id: number) {
    return this.organosService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un órgano por ID' })
  @ApiResponse({ status: 200, description: 'Órgano actualizado.', type: Organo })
  @ApiResponse({ status: 404, description: 'Órgano no encontrado.' })
  update(@Param('id') id: number, @Body() updateOrganoDto: CreateOrganoDto) {
    return this.organosService.update(id, updateOrganoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un órgano por ID' })
  @ApiResponse({ status: 204, description: 'Órgano eliminado.' })
  @ApiResponse({ status: 404, description: 'Órgano no encontrado.' })
  remove(@Param('id') id: number) {
    return this.organosService.remove(id);
  }
}
