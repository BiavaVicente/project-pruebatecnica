import { Controller, Get, Query } from '@nestjs/common';
import { GetTheNumberService } from './get-the-number.service';
import { CreateGetTheNumberDto } from './dto/create-get-the-number.dto';

@Controller('getthenumber')
export class GetTheNumberController {
  constructor(private readonly getTheNumberService: GetTheNumberService) {}

  @Get()
  getConcatenado(@Query() CreateGetTheNumberDto : CreateGetTheNumberDto) {
    return this.getTheNumberService.getConcatenado(CreateGetTheNumberDto);
  }
}
