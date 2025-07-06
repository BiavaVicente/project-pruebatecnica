import { Module } from '@nestjs/common';
import { GetTheNumberService } from './get-the-number.service';
import { GetTheNumberController } from './get-the-number.controller';

@Module({
  controllers: [GetTheNumberController],
  providers: [GetTheNumberService],
})
export class GetTheNumberModule {}
