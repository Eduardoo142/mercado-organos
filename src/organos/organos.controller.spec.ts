import { Test, TestingModule } from '@nestjs/testing';
import { OrganosController } from './organos.controller';

describe('OrganosController', () => {
  let controller: OrganosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganosController],
    }).compile();

    controller = module.get<OrganosController>(OrganosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
