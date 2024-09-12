import { Test, TestingModule } from '@nestjs/testing';
import { RelocalizacionController } from './relocalizacion.controller';

describe('RelocalizacionController', () => {
  let controller: RelocalizacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelocalizacionController],
    }).compile();

    controller = module.get<RelocalizacionController>(RelocalizacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
