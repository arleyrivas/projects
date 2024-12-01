import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "historyCrossStatus" })
export class historyCrossStatusPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        switch(value) {
            case "ERROR":
                return "close";
            break;

            default:
                return "check";
            break;
        }
    }
}
