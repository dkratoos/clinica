import { Controller, Get, Body } from '@nestjs/common';
import { DisponibilityService } from './disponibility.service';

@Controller('/disponibility')
export class DisponibilityController {
  constructor(private readonly disponibilityService: DisponibilityService) {}

  @Get('/')
  async findDisponibility(
    @Body('interval')
    interval: {
      start: string;
      end: number;
    },
  ): Promise<Array<string>> {
    return this.disponibilityService.findDisponibility(interval);
  }
}
