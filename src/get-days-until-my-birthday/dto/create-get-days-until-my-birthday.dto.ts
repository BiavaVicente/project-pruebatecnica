import { IsString, IsDateString, IsDefined, IsNotEmpty } from 'class-validator';

export class CreateGetDaysUntilMyBirthdayDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  @IsDefined()
  @IsNotEmpty()
  birthdate: string;
}

