import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "creditNotesState" })
export class CreditNotesState implements PipeTransform {
    transform(value: any, ...args: any[]) {
        switch(value) {
            case "0":
                return "PENDIENTE";
            break;

            default:
                return "NO DEFINIDO";
            break;
        }
    }
}
