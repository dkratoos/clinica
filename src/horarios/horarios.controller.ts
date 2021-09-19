import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { Horario } from './entities/horario.entity';
import { Horarios } from './entities/horarios.entity';

@Controller('horarios')
export class HorariosController {
  constructor(private readonly horariosService: HorariosService) {}

  @Get()
  async findAll(): Promise<Horarios> {
    return this.horariosService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Horario> {
    return this.horariosService.find(id);
  }

  @Post()
  async create(@Body('item') item: Horario): Promise<void> {
    this.horariosService.create(item);
  }

  @Put()
  async update(@Body('item') item: Horario): Promise<void> {
    this.horariosService.update(item);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.horariosService.delete(id);
  }
}
