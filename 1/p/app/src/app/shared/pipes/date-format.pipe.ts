import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string | number, type: string): string {
    const date = moment(value);

    switch(type) {
      case 'dateAndHour':
        return date.format("L LT");

      case 'date':
        return date.format("L");

      case 'long':
        return date.format("YYYY/MM/DD hh:mm:ss A");

      case 'time':
        return date.format("LTS");

      case 'classic':
        return date.format("YYYY/MM/DD");

      default:
        return date.format("YYYY/MM/DD");
    }
  }
}
