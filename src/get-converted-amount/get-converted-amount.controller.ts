import { Controller, Get, Query } from '@nestjs/common';
import { GetConvertedAmountService } from './get-converted-amount.service';
import { GetConvertedAmountDto } from './dto/get-converted-amount.dto';

@Controller('getConvertedAmount')
export class GetConvertedAmountController {
  constructor(private readonly getConvertedAmountService: GetConvertedAmountService) {}



  @Get()
  getconverted(@Query() GetConvertedAmountDto: GetConvertedAmountDto)  {
    return this.getConvertedAmountService.getconverted(GetConvertedAmountDto);
  }


}
