import { Module } from '@nestjs/common';
import { DisponibilityService } from './disponibility.service';
import { DisponibilityController } from './disponibility.controller';
import { HorariosService } from '../horarios/horarios.service';

@Module({
  providers: [DisponibilityService, HorariosService],
  controllers: [DisponibilityController],
})
export class DisponibilityModule {}
