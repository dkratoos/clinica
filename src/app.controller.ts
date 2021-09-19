import { Controller, Get, CACHE_MANAGER, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'this.appService.getHello();';
  }
}
