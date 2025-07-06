import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GetDaysUntilMyBirthdayService } from './get-days-until-my-birthday.service';
import { CreateGetDaysUntilMyBirthdayDto } from './dto/create-get-days-until-my-birthday.dto';

@Controller('getDaysUntilMyBirthday')
export class GetDaysUntilMyBirthdayController {
  constructor(private readonly getDaysUntilMyBirthdayService: GetDaysUntilMyBirthdayService) {}

  @Post('addRindegastino')
  create(@Body() createGetDaysUntilMyBirthdayDto: CreateGetDaysUntilMyBirthdayDto) {
    return this.getDaysUntilMyBirthdayService.create(createGetDaysUntilMyBirthdayDto);
  }

  @Get('all')
  findAll() {
    return this.getDaysUntilMyBirthdayService.findAll();
  }

  @Get('days')
  getDays(@Query('birthdate') birthdate: string) {  
    return this.getDaysUntilMyBirthdayService.getDays(birthdate);
  }
}
