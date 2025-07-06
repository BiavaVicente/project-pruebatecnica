import { Injectable } from '@nestjs/common';
import { CreateGetDaysUntilMyBirthdayDto } from './dto/create-get-days-until-my-birthday.dto';
import { rindegastinoInterface } from './interface/rindegastino.interface';

@Injectable()
export class GetDaysUntilMyBirthdayService {

  //array para guardar los objetos rindegastinoInterface
  private rindegastinos: rindegastinoInterface[] = [];

//funcion para obtener el cumpleaños en formato MM-DD
  private getBirthdayFromDate(fechaNacimiento: string): string {
    // Extraer mes y día directamente del string para evitar problemas de zona horaria
    // fechaNacimiento esperado en formato 'YYYY-MM-DD'
    const [, mes, dia] = fechaNacimiento.split('-');// ojo importante ,aqui el formato en que se guarda la fechad ebera ser validado de alguna manera para que no pueda llegar de otra forma
    return `${mes}-${dia}`;
  }
//funcion para calcular los dias hasta el cumpleaños
  private getDaysUntilBirthday(birthday: string): number {
    const today = new Date();
    const currentYear = today.getFullYear();
    const birthdayDate = new Date(`${currentYear}-${birthday}`);
    
    // Si el cumpleaños ya pasó este año, calcular para el próximo año
    if (birthdayDate < today) {
      birthdayDate.setFullYear(currentYear + 1);
    }
    
    const timeDifference = birthdayDate.getTime() - today.getTime();
    return Math.ceil(timeDifference / (1000 * 3600 * 24)); // Convertir de milisegundos a días
  }    
//const { from, to, amount } = createGetConvertedAmountDto;
//funcion necesito ahora en la funciona de crear  tomar el dto aplicar al funcion de crear rindegastinoInterface y guardarlo en el array rindegastino
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

  //este sería opcional dejarlo 
  getDays(birthdate: string) {
    const daysUntilBirthday: number = this.getDaysUntilBirthday((this.getBirthdayFromDate(birthdate)));
    return `Quedan ${daysUntilBirthday} dias para su cumpleaños`;
  }
}

