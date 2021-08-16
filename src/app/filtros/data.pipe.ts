import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value: String, ...args: string[]): Date {
    return new Date(value.replace(' ', 'T'));
  }

}
