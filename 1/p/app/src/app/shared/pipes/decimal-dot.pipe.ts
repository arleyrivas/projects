import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalDot'
})
export class DecimalDotPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toFixed(2).replace(/,/g, '.');
  }

}
