import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hora'
})
export class HoraPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    const dataHora = value.split(' ');
    return dataHora[1];
  }

}
