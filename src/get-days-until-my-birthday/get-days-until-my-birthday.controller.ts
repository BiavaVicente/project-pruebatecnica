import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { GetDaysUntilMyBirthdayService } from './get-days-until-my-birthday.service';
import {
  CreateGetDaysUntilMyBirthdayDto,
  GetDaysUntilMyBirthdayDto,
} from './dto/get-days-until-my-birthday.dto';

@Controller('getDaysUntilMyBirthday')
export class GetDaysUntilMyBirthdayController {
  constructor(
    private readonly getDaysUntilMyBirthdayService: GetDaysUntilMyBirthdayService,
  ) {}

  @Post('addRindegastino')
  create(
    @Body() createGetDaysUntilMyBirthdayDto: CreateGetDaysUntilMyBirthdayDto,
  ) {
    return this.getDaysUntilMyBirthdayService.create(
      createGetDaysUntilMyBirthdayDto,
    );
  }

  @Get('all')
  findAll() {
    return this.getDaysUntilMyBirthdayService.findAll();
  }

  @Get('days')
  getDays(@Query() GetDaysUntilMyBirthdayDto: GetDaysUntilMyBirthdayDto) {
    return this.getDaysUntilMyBirthdayService.getDays(
      GetDaysUntilMyBirthdayDto,
    );
  }
}
