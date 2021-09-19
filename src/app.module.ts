import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HorariosModule } from './horarios/horarios.module';
import { DisponibilityModule } from './disponibility/disponibility.module';

@Module({
  imports: [CacheModule.register(), HorariosModule, DisponibilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
