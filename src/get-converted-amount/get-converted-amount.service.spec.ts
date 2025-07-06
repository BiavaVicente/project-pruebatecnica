import { Test, TestingModule } from '@nestjs/testing';
import { GetConvertedAmountService } from './get-converted-amount.service';

describe('GetConvertedAmountService', () => {
  let service: GetConvertedAmountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetConvertedAmountService],
    }).compile();

    service = module.get<GetConvertedAmountService>(GetConvertedAmountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
