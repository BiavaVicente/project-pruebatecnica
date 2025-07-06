import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetConvertedAmountModule } from './get-converted-amount/get-converted-amount.module';
import { GetDaysUntilMyBirthdayModule } from './get-days-until-my-birthday/get-days-until-my-birthday.module';
import { GetTheNumberModule } from './get-the-number/get-the-number.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GetConvertedAmountModule,
    GetDaysUntilMyBirthdayModule,
    GetTheNumberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
