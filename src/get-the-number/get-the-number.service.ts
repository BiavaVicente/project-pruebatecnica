import { Injectable } from '@nestjs/common';
import { CreateGetTheNumberDto } from './dto/create-get-the-number.dto';

@Injectable()
export class GetTheNumberService {

  getConcatenado(CreateGetTheNumberDto : CreateGetTheNumberDto): string {
    const { first, second } = CreateGetTheNumberDto;
    const results: number[] = [];
    //debo tomar el second y contar desde 1 hasta ese numero pero detenerme al llegar a 9, luego debo multiplicar el first por numeros incrementales desde 1 hasta el numero que obtuve y guardar cada uno de esos resultados en el array
    for (let i = 1; i <= second && i <= 9; i++) {
      results.push(first * i);
    }
    //luego debo concatenar los numeros del array en un string
    const concatenatedResult = results.join('');
    return concatenatedResult;
  }

  
}
