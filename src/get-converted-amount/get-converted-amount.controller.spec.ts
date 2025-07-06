import { Test, TestingModule } from '@nestjs/testing';
import { GetConvertedAmountController } from './get-converted-amount.controller';
import { GetConvertedAmountService } from './get-converted-amount.service';

describe('GetConvertedAmountController', () => {
  let controller: GetConvertedAmountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetConvertedAmountController],
      providers: [GetConvertedAmountService],
    }).compile();

    controller = module.get<GetConvertedAmountController>(GetConvertedAmountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
