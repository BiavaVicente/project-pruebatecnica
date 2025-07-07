import { Test, TestingModule } from '@nestjs/testing';
import { GetDaysUntilMyBirthdayService } from './get-days-until-my-birthday.service';

describe('GetDaysUntilMyBirthdayService', () => {
  let service: GetDaysUntilMyBirthdayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetDaysUntilMyBirthdayService],
    }).compile();

    service = module.get<GetDaysUntilMyBirthdayService>(
      GetDaysUntilMyBirthdayService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
