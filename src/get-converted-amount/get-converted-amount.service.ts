import { Injectable, BadRequestException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { GetConvertedAmountDto } from './dto/get-converted-amount.dto';

@Injectable()
export class GetConvertedAmountService {
  constructor(private readonly http: HttpService) {}

  private async getExchangeRate(from: string, to: string): Promise<number> {
    const appId = process.env.OPENEXCHANGERATES_APP_ID;
    const url = `https://openexchangerates.org/api/latest.json?app_id=${appId}`;
    try {
      const response = await firstValueFrom(this.http.get(url));
      const rates = response.data.rates;
      const fromRate = rates[from];
      const toRate = rates[to];
      const exchangeRate = fromRate / toRate;
      return exchangeRate;
    } catch (error) {
      if (error.response && error.response.data) {
        const apiMsg =
          error.response.data.description ||
          error.response.data.message ||
          JSON.stringify(error.response.data);
        console.error('[OpenExchangeRates API Error]: ' + apiMsg);
        throw new BadRequestException(
          `[OpenExchangeRates API Error]: ${apiMsg}`,
        );
      }
      console.error('Error interno: ' + (error.message || error));
      throw new BadRequestException(`Error interno: ${error.message || error}`);
    }
  }

  async getconverted(createGetConvertedAmountDto: GetConvertedAmountDto) {
    const { from, to, amount } = createGetConvertedAmountDto;
    const exchangerate: number = await this.getExchangeRate(from, to);
    const convertedAmount = amount / exchangerate;
    return {
      from,
      to,
      amount,
      exchangerate,
      convertedAmount,
    };
  }
}
