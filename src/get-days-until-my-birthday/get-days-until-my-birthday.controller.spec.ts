import { Test, TestingModule } from '@nestjs/testing';
import { GetDaysUntilMyBirthdayController } from './get-days-until-my-birthday.controller';
import { GetDaysUntilMyBirthdayService } from './get-days-until-my-birthday.service';

describe('GetDaysUntilMyBirthdayController', () => {
  let controller: GetDaysUntilMyBirthdayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetDaysUntilMyBirthdayController],
      providers: [GetDaysUntilMyBirthdayService],
    }).compile();

    controller = module.get<GetDaysUntilMyBirthdayController>(
      GetDaysUntilMyBirthdayController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
