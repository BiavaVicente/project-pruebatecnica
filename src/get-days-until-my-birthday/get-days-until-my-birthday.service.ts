import { Injectable } from '@nestjs/common';
import { CreateGetDaysUntilMyBirthdayDto, GetDaysUntilMyBirthdayDto } from './dto/get-days-until-my-birthday.dto';
import { rindegastinoInterface } from './interface/rindegastino.interface';

@Injectable()
export class GetDaysUntilMyBirthdayService {

  private rindegastinos: rindegastinoInterface[] = [];

  private getBirthdayFromDate(fechaNacimiento: string): string {
    const [, mes, dia] = fechaNacimiento.split('-');
    return `${mes}-${dia}`;
  }
  private getDaysUntilBirthday(birthday: string): number {
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthdayDate = new Date(`${currentYear}-${birthday}`);
    
    if (birthdayDate < today) {
      birthdayDate.setFullYear(currentYear + 1);
    }
    
    const timeDifference = birthdayDate.getTime() - today.getTime();
    return Math.ceil(timeDifference / (1000 * 3600 * 24)); 
  }    

  create(createGetDaysUntilMyBirthdayDto: CreateGetDaysUntilMyBirthdayDto) {
    const {name, birthdate} = createGetDaysUntilMyBirthdayDto;
    const nameExists = this.rindegastinos.some(r => r.name === name);
    const rindegastino: rindegastinoInterface = {
      name: name,
      birthdate: birthdate,
      birthday: this.getBirthdayFromDate(birthdate),  
    }
    if (!nameExists){
    this.rindegastinos.push(rindegastino);
    }
    return rindegastino;
  }

  findAll() {
    return this.rindegastinos.map(r => ({
      ...r,
      daysUntilBirthday: this.getDaysUntilBirthday(r.birthday),
    }));
  }
 
  getDays(GetDaysUntilMyBirthdayDto: GetDaysUntilMyBirthdayDto) {
    const daysUntilBirthday: number = this.getDaysUntilBirthday((this.getBirthdayFromDate(GetDaysUntilMyBirthdayDto.birthdate)));
    return `Quedan ${daysUntilBirthday} dias para su cumpleaños`;
  }
}

