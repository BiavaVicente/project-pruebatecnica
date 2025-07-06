import { Test, TestingModule } from '@nestjs/testing';
import { GetTheNumberService } from './get-the-number.service';

describe('GetTheNumberService', () => {
  let service: GetTheNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetTheNumberService],
    }).compile();

    service = module.get<GetTheNumberService>(GetTheNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
