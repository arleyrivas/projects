import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value) {
      case "0":
        return "Pendiente de Pago";
      break;

      case "1":
        return "Pagada";
      break;

      default:
        return "Pendiente de Pago";
      break;
    }
  }

}
