import { Controller, Get, Query } from '@nestjs/common';
import { GetTheNumberService } from './get-the-number.service';
import { GetTheNumberDto } from './dto/get-the-number.dto';

@Controller('getTheNumber')
export class GetTheNumberController {
  constructor(private readonly getTheNumberService: GetTheNumberService) {}

  @Get()
  getConcatenado(@Query() GetTheNumberDto: GetTheNumberDto) {
    return this.getTheNumberService.getConcatenado(GetTheNumberDto);
  }
}
