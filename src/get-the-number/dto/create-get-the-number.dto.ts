import { IsInt, IsDefined, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateGetTheNumberDto {
    @Type(() => Number)
    @IsInt()
    @IsDefined()
    @IsNotEmpty()
    first: number;

    @Type(() => Number)
    @IsInt()
    @IsDefined()
    @IsNotEmpty()
    second: number;
}
