import { Injectable } from '@nestjs/common';
import { GetTheNumberDto } from './dto/get-the-number.dto';

@Injectable()
export class GetTheNumberService {

  getConcatenado(CreateGetTheNumberDto : GetTheNumberDto): string {
    const { first, second } = CreateGetTheNumberDto;
    const results: number[] = [];
    for (let i = 1; i <= second && i <= 9; i++) {
      results.push(first * i);
    }
    const concatenatedResult = results.join('');
    return concatenatedResult;
  }

  
}
