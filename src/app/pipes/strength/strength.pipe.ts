import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strength',
  standalone: true
})
export class StrengthPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 5) {
      return value + 'weakest';
    } else if (value > 5 && value < 20) {
      return value + "strong";
    } else {
      return value + "strongest";
    }
  }

}
