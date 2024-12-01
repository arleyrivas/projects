import { AbstractControl, ValidationErrors } from "@angular/forms"

export class CustomValidators {

    constructor() { }

    public static ip(control: AbstractControl): ValidationErrors | null {
        if(!control.value) return null;

        if(control.value.split(".").length === 4) return null;

        return { dotError: true };
    }
}
