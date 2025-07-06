import { Test, TestingModule } from '@nestjs/testing';
import { GetConvertedAmountService } from './get-converted-amount.service';
import { HttpModule } from '@nestjs/axios';

describe('GetConvertedAmountService', () => {
  let service: GetConvertedAmountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [GetConvertedAmountService],
    }).compile();

    service = module.get<GetConvertedAmountService>(GetConvertedAmountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
