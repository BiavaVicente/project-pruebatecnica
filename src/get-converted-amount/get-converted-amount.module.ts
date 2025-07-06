import { Module } from '@nestjs/common';
import { GetConvertedAmountService } from './get-converted-amount.service';
import { GetConvertedAmountController } from './get-converted-amount.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [GetConvertedAmountController],
  providers: [GetConvertedAmountService],
})
export class GetConvertedAmountModule {}
