import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { IAdministrationActionsDTO } from 'src/app/core/dto/administration-action.dto';
import { IAdministrationActionsHours } from 'src/app/core/interfaces/administration-action-hours.interface';
import { saveActionPrivilege, setPrivilegeName } from 'src/app/state/administration/administration.actions';
import { administrationFeatureSelector } from 'src/app/state/administration/administration.selector';
import { privileges } from "../../../../core/privileges.enum";

import { IAdministrationStore  }  from "src/app/core/interfaces/administration-store";
import { MatSnackBar } from '@angular/material/snack-bar';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IAdministrationActionsPrivileges } from 'src/app/core/interfaces/administration-action-privileges.interface';

@Component({
  selector: 'app-administration-actions-hours',
  templateUrl: './administration-actions-hours.component.html',
  styleUrls: ['./administration-actions-hours.component.css']
})
export class AdministrationActionsHoursComponent implements OnInit {

  public privileges: typeof privileges = privileges;

  public weekFormGroup!: FormGroup;
  public saturdayFormGroup!: FormGroup;
  public sundayFormGroup!: FormGroup;
  public numbers!: number[];
  public privilege: string = "";
  public description: string = "";
  public descriptionReal: string = "";

  public mondayFriday!: IAdministrationActionsHours;
  public saturday!: IAdministrationActionsHours;
  public sunday!: IAdministrationActionsHours;

  public prueba!: IAdministrationStore;
  public respuesta!: string;
  public userInfo!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly matSnackBar: MatSnackBar,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService
  ) { }

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });

    this.store.select(administrationFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: store => {
        if(store.privilege) {
          this.privilege = store.privilege.nombre;
          this.description = store.privilege.accion;
          this.descriptionReal = store.privilege.descripcion
        }

        this.mondayFriday = store.selectedAction.filter(value => value.diaRestriccion === "LV")[0];
        this.saturday = store.selectedAction.filter(value => value.diaRestriccion === "S")[0];
        this.sunday = store.selectedAction.filter(value => value.diaRestriccion === "D")[0];

        this.weekFormGroup = new FormGroup({
          from: new FormControl(this.mondayFriday?.horaDesde || "0", [Validators.required, Validators.minLength(0)]),
          to: new FormControl(this.mondayFriday?.horaHasta || "0", [Validators.required, Validators.minLength(0)])
        });

        this.saturdayFormGroup = new FormGroup({
          from: new FormControl(this.saturday?.horaDesde || "0", [Validators.required, Validators.minLength(0)]),
          to: new FormControl(this.saturday?.horaHasta || "0", [Validators.required, Validators.minLength(0)])
        });

        this.sundayFormGroup = new FormGroup({
          from: new FormControl(this.sunday?.horaDesde || "0", [Validators.required, Validators.minLength(0)]),
          to: new FormControl(this.sunday?.horaHasta || "0", [Validators.required, Validators.minLength(0)])
        });

        this.changeFormState(!!this.mondayFriday, this.weekFormGroup);
        this.changeFormState(!!this.saturday, this.saturdayFormGroup);
        this.changeFormState(!!this.sunday, this.sundayFormGroup);
      },
      error: error => console.error(error)
    });
  }

  public get weekFromControl(): AbstractControl {
    return this.weekFormGroup.controls["from"];
  }

  public get weekToControl(): AbstractControl {
    return this.weekFormGroup.controls["to"];
  }

  public get saturdayFromControl(): AbstractControl {
    return this.saturdayFormGroup.controls["from"];
  }

  public get saturdayToControl(): AbstractControl {
    return this.saturdayFormGroup.controls["to"];
  }

  public get sundayFromControl(): AbstractControl {
    return this.sundayFormGroup.controls["from"];
  }

  public get sundayToControl(): AbstractControl {
    return this.sundayFormGroup.controls["to"];
  }

  public changeFormState(checked: boolean, form: FormGroup): void {
    if(checked) {
      form.enable();
    } else {
      form.disable();
    }
  }

  public submit(weekTag: MatCheckbox, saturdayTag: MatCheckbox, sundayTag: MatCheckbox): void {
    const payload: IAdministrationActionsDTO = {
      nit: "",
      privilegios: [
        {
          privilegio: this.privilege,
          diasRestriccion: []
        }
      ]
    };

    if(weekTag.checked) {
      if(this.weekFromControl.value <= this.weekToControl.value) {
        payload.privilegios[0].diasRestriccion = [
          ...payload.privilegios[0].diasRestriccion,
          {
            diaRestriccion: "LV",
            horaDesde: this.convertTwoZeros(this.weekFromControl.value),
            horaHasta: this.convertTwoZeros(this.weekToControl.value)
          }
        ];
      } else {
        this.weekFormGroup.setErrors({ FromFieldIsGreaterThanToField: "Configuración errada, horario inicial es mayor al horario final" });
      }
    }

    if(saturdayTag.checked) {
      if(this.saturdayFromControl.value <= this.saturdayToControl.value) {
        payload.privilegios[0].diasRestriccion = [
          ...payload.privilegios[0].diasRestriccion,
          {
            diaRestriccion: "S",
            horaDesde: this.convertTwoZeros(this.saturdayFromControl.value),
            horaHasta: this.convertTwoZeros(this.saturdayToControl.value)
          }
        ]
      } else this.saturdayFormGroup.setErrors({ FromFieldIsGreaterThanToField: "Configuración errada, horario inicial es mayor al horario final" });
    }

    if(sundayTag.checked) {
      if(this.sundayFromControl.value <= this.sundayToControl.value) {
        payload.privilegios[0].diasRestriccion = [
          ...payload.privilegios[0].diasRestriccion,
          {
            diaRestriccion: "D",
            horaDesde: this.convertTwoZeros(this.sundayFromControl.value),
            horaHasta: this.convertTwoZeros(this.sundayToControl.value)
          }
        ];
      } else this.sundayFormGroup.setErrors({ FromFieldIsGreaterThanToField: "Configuración errada, horario inicial es mayor al horario final" });
    }

    if(this.weekFormGroup.invalid || this.saturdayFormGroup.invalid || this.sundayFormGroup.invalid) {
      this.matSnackBar.open("Configuración errada, horario inicial es mayor al horario final", "",
        {
          verticalPosition: "top",
          duration: 3000,
          panelClass: ["error-snackbar"]
        }
      );
    } else {
     
      this.store.dispatch(saveActionPrivilege({
        payload,
        hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "ADMIN_ACTIONS")[0].notificable,
        notificationData: this.base64EncryptionUtilService.encrypt(JSON.stringify({
          userName: this.userInfo.userName,                                // Usuario que está logueado
          nit: this.userInfo.empresa?.id,                                  // ID Usuario
          fullName: this.quitarTildes(`${this.userInfo.nombres} ${this.userInfo.apellidos}`), // Nombre y Apellido del usuario logueado
          interval: this.layouNotification(payload.privilegios[0]),
          restriccion: this.quitarTildes(this.descriptionReal) ,
          accion: this.quitarTildes(this.description)
        })),
        privilege: "ADMIN_ACTIONS"
      }));
      this.cancel();
    }
  }

  public convertTwoZeros(number: string) {
    const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const convertedNumber = parseInt(number);

    if(numbers.includes(convertedNumber)) return "0" + convertedNumber;
    return convertedNumber.toString();
  }

  public cancel(): void {
    this.router.navigate(['/', 'administracion']);
  }


  private layouNotification(privilegios: IAdministrationActionsPrivileges){
    let resultado: any[] = [];
    const diasSemanaCompleto: { [key: string]: string[] } = {
      "LV": ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
      "S": ["Sabado"],
      "D": ["Domingo"]
    };
    privilegios.diasRestriccion.forEach((restriccion: any) => {
      const dias = diasSemanaCompleto[restriccion.diaRestriccion] || [];
      dias.forEach((dia: string) => {
          resultado.push({
              diaDeLaSemana: dia,
              horaInicio: "".concat(restriccion.horaDesde).concat(":").concat("00"),
              horaFin: "".concat(restriccion.horaHasta).concat(":").concat("00")
          });
      });
    });
    return resultado;
  }

  private quitarTildes(texto: string): string {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}
