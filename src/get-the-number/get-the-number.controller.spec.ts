import { Test, TestingModule } from '@nestjs/testing';
import { GetTheNumberController } from './get-the-number.controller';
import { GetTheNumberService } from './get-the-number.service';

describe('GetTheNumberController', () => {
  let controller: GetTheNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetTheNumberController],
      providers: [GetTheNumberService],
    }).compile();

    controller = module.get<GetTheNumberController>(GetTheNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
