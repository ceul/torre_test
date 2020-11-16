import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'openTo'
})
export class OpenToPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value == 'mentoring'){
      return 'Dar una mentoriá'
    } else if( value == 'full-time-employment'){
      return 'Empleo de tiempo completo'
    } else if (value == 'part-time-employment') {
      return 'Empleo de medio tiempo'
    } else if (value == 'advising'){
      return 'Dar asesorias'
    } else if (value == 'freelance-gigs'){
      return 'Freelance / contratista'
    } else if (value == 'internships'){
      return 'Practicas'
    } else if( value == 'hiring'){
      return 'Contratar Talento'
    }
  }

}
