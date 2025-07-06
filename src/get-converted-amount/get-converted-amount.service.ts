import { Injectable, BadRequestException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CreateGetConvertedAmountDto } from './dto/create-get-converted-amount.dto';

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
      // Si el error viene de la API, propaga el mensaje de la API
      if (error.response && error.response.data) {
        const apiMsg = error.response.data.description || error.response.data.message || JSON.stringify(error.response.data);
        throw new BadRequestException(`[OpenExchangeRates API Error]: ${apiMsg}`);
      }
      // Si es otro error, muestra el mensaje real del error
      throw new BadRequestException(`Error interno: ${error.message || error}`);
    }
  }

  async getconverted(createGetConvertedAmountDto: CreateGetConvertedAmountDto) {
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
