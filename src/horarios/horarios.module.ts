import { Global, Module } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { HorariosController } from './horarios.controller';

@Global()
@Module({
  providers: [HorariosService],
  controllers: [HorariosController],
})
export class HorariosModule {}
