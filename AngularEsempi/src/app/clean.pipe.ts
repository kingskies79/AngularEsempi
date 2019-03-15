import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {


  transform(value: any, args?: any): any {
    let word = '';
    if (value) {
      console.log(value);
      switch (value) {
        case 'boo':
          return '$%#@!';
        case 'damn':
          return '$%#@!';
        case 'hell':
          return '$%#@!';
        default:
          return value;
      }
      word = value;
      console.log(value);

    } else {
      word = args;
    }
    return word;
  }

}
