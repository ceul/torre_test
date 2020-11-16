import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employmentType'
})
export class EmploymentTypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value == 'full-time-employment'){
      return 'Empleo a tiempo completo'
    } else if (value == 'freelance-gigs'){
      return 'Freelancer'
    }
  }

}
