import { Test, TestingModule } from '@nestjs/testing';
import { RelocalizacionService } from './relocalizacion.service';

describe('RelocalizacionService', () => {
  let service: RelocalizacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelocalizacionService],
    }).compile();

    service = module.get<RelocalizacionService>(RelocalizacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
