import { IsNumber, IsDefined, IsNotEmpty, Min, IsEnum } from 'class-validator';
import { CurrencyCode } from '../enum/currency.enum';
import { Type } from 'class-transformer';
export class GetConvertedAmountDto {
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(CurrencyCode)
  from: string;

  @IsDefined()
  @IsNotEmpty()
  @IsEnum(CurrencyCode)
  to: string;

  @Type(() => Number)
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  amount: number;
}
