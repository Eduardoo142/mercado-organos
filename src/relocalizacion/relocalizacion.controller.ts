import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { RelocalizacionService } from './relocalizacion.service';
import { CreateRelocalizacionDto } from './dto/create-relocalizacion.dto';
import { UpdateRelocalizacionDto } from './dto/update-relocalizacion.dto';
import { Relocalizacion } from './relocalizacion.entity';

@ApiTags('relocalizaciones')
@Controller('relocalizaciones')
export class RelocalizacionController {
  constructor(private readonly relocalizacionService: RelocalizacionService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva relocalización' })
  @ApiResponse({ status: 201, description: 'Relocalización creada exitosamente', type: Relocalizacion })
  @ApiResponse({ status: 400, description: 'Error en la solicitud' })
  create(@Body() createRelocalizacionDto: CreateRelocalizacionDto): Promise<Relocalizacion> {
    return this.relocalizacionService.create(createRelocalizacionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las relocalizaciones' })
  @ApiResponse({ status: 200, description: 'Relocalizaciones encontradas', type: [Relocalizacion] })
  findAll(): Promise<Relocalizacion[]> {
    return this.relocalizacionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una relocalización por ID' })
  @ApiResponse({ status: 200, description: 'Relocalización encontrada', type: Relocalizacion })
  @ApiResponse({ status: 404, description: 'Relocalización no encontrada' })
  findOne(@Param('id') id: number): Promise<Relocalizacion> {
    return this.relocalizacionService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una relocalización por ID' })
  @ApiResponse({ status: 200, description: 'Relocalización actualizada exitosamente', type: Relocalizacion })
  @ApiResponse({ status: 404, description: 'Relocalización no encontrada' })
  update(@Param('id') id: number, @Body() updateRelocalizacionDto: UpdateRelocalizacionDto): Promise<Relocalizacion> {
    return this.relocalizacionService.update(id, updateRelocalizacionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una relocalización por ID' })
  @ApiResponse({ status: 204, description: 'Relocalización eliminada exitosamente' })
  @ApiResponse({ status: 404, description: 'Relocalización no encontrada' })
  remove(@Param('id') id: number): Promise<void> {
    return this.relocalizacionService.remove(id);
  }
}
