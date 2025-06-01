import { Test, TestingModule } from '@nestjs/testing';
import { StripersController } from './stripers.controller';
import { StripersService } from './stripers.service';

describe('StripersController', () => {
  let controller: StripersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StripersController],
      providers: [StripersService],
    }).compile();

    controller = module.get<StripersController>(StripersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
