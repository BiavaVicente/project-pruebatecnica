import { Injectable } from '@nestjs/common';
import {
  CreateGetDaysUntilMyBirthdayDto,
  GetDaysUntilMyBirthdayDto,
} from './dto/get-days-until-my-birthday.dto';
import { rindegastinoInterface } from './interface/rindegastino.interface';

@Injectable()
export class GetDaysUntilMyBirthdayService {
  private rindegastinos: rindegastinoInterface[] = [];

  private getBirthdayFromDate(birthdate: string): string {
    const [, mes, dia] = birthdate.split('-');
    return `${mes}-${dia}`;
  }
  private getDaysUntilBirthday(birthday: string): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentYear = today.getFullYear();
    const [mes, dia] = birthday.split('-').map(Number);
    const birthdayDate = new Date(currentYear, mes - 1, dia);
    if (birthdayDate < today) {
      birthdayDate.setFullYear(currentYear + 1);
    }

    const timeDifference = birthdayDate.getTime() - today.getTime();
    return timeDifference / (1000 * 3600 * 24);
  }

  create(createGetDaysUntilMyBirthdayDto: CreateGetDaysUntilMyBirthdayDto) {
    const { name, birthdate } = createGetDaysUntilMyBirthdayDto;
    const nameExists = this.rindegastinos.some((r) => r.name === name);
    const rindegastino: rindegastinoInterface = {
      name: name,
      birthdate: birthdate,
      birthday: this.getBirthdayFromDate(birthdate),
    };
    if (!nameExists) {
      this.rindegastinos.push(rindegastino);
    }
    return rindegastino;
  }

  findAll() {
    const resultado: (rindegastinoInterface & { daysUntilBirthday: number })[] =
      [];
    for (let i = 0; i < this.rindegastinos.length; i++) {
      const r = this.rindegastinos[i];
      resultado.push({
        ...r,
        daysUntilBirthday: this.getDaysUntilBirthday(r.birthday),
      });
    }

    return resultado;
  }

  getDays(GetDaysUntilMyBirthdayDto: GetDaysUntilMyBirthdayDto) {
    const daysUntilBirthday: number = this.getDaysUntilBirthday(
      this.getBirthdayFromDate(GetDaysUntilMyBirthdayDto.birthdate),
    );
    if (daysUntilBirthday === 0) {
      return 'Hoy es su cumpleaños, Felicidades';
    } else if (daysUntilBirthday === 1) {
      return `Queda ${daysUntilBirthday} dia para su cumpleaños`;
    }
    return `Quedan ${daysUntilBirthday} dias para su cumpleaños`;
  }
}
