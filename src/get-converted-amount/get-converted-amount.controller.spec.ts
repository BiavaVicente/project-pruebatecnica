import { Test, TestingModule } from '@nestjs/testing';
import { GetConvertedAmountController } from './get-converted-amount.controller';
import { GetConvertedAmountService } from './get-converted-amount.service';
import { HttpModule } from '@nestjs/axios';

describe('GetConvertedAmountController', () => {
  let controller: GetConvertedAmountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [GetConvertedAmountController],
      providers: [GetConvertedAmountService],
    }).compile();

    controller = module.get<GetConvertedAmountController>(GetConvertedAmountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
