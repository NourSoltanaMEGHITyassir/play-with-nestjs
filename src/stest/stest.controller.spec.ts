import { Test, TestingModule } from '@nestjs/testing';
import { StestController } from './stest.controller';

describe('StestController', () => {
  let controller: StestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StestController],
    }).compile();

    controller = module.get<StestController>(StestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
