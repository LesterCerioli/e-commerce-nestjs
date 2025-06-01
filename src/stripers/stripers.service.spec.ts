import { Test, TestingModule } from '@nestjs/testing';
import { StripersService } from './stripers.service';

describe('StripersService', () => {
  let service: StripersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StripersService],
    }).compile();

    service = module.get<StripersService>(StripersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
