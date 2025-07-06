import { PartialType } from '@nestjs/mapped-types';
import { CreateGetTheNumberDto } from './create-get-the-number.dto';

export class UpdateGetTheNumberDto extends PartialType(CreateGetTheNumberDto) {}
