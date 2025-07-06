import { Module } from '@nestjs/common';
import { GetDaysUntilMyBirthdayService } from './get-days-until-my-birthday.service';
import { GetDaysUntilMyBirthdayController } from './get-days-until-my-birthday.controller';

@Module({
  controllers: [GetDaysUntilMyBirthdayController],
  providers: [GetDaysUntilMyBirthdayService],
})
export class GetDaysUntilMyBirthdayModule {}
