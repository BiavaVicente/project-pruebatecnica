import { Controller, Get, Query } from '@nestjs/common';
import { GetConvertedAmountService } from './get-converted-amount.service';
import { CreateGetConvertedAmountDto } from './dto/create-get-converted-amount.dto';

@Controller('get-converted-amount')
export class GetConvertedAmountController {
  constructor(private readonly getConvertedAmountService: GetConvertedAmountService) {}



  @Get()
  getconverted(@Query() CreateGetConvertedAmountDto: CreateGetConvertedAmountDto)  {
    return this.getConvertedAmountService.getconverted(CreateGetConvertedAmountDto);
  }


}
