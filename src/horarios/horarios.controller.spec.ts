import { Test, TestingModule } from '@nestjs/testing';
import { HorariosController } from './horarios.controller';
import { HorariosService } from './horarios.service';

describe('HorariosController', () => {
  let controller: HorariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HorariosController],
      providers: [HorariosService],
    }).compile();

    controller = module.get<HorariosController>(HorariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
