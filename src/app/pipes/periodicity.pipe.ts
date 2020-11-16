import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'periodicity'
})
export class PeriodicityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == 'hourly') {
      return 'Por hora'
    } else if (value == "yearly") {
      return 'Anualmente'
    } else if( value ="monthly"){
      return 'Mensualmente'
    }

  }

}
