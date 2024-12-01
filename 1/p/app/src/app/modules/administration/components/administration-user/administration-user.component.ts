import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IAdministrationCreateUserDTO } from 'src/app/core/dto/administration-create-user.dto';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IInfoUser } from 'src/app/core/interfaces/info-user.interface';
import { createUser, getUserWithUsernameAndEmail } from 'src/app/state/administration/administration.actions';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-administration-user',
  templateUrl: './administration-user.component.html',
  styleUrls: ['./administration-user.component.css']
})
export class AdministrationUserComponent implements OnInit {

  public user!: IInfoUser;
  public createForm: FormGroup = new FormGroup({});
  public userInfo!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService
    ) {}

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });

    this.createForm = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.pattern(/^\S*$/)]),
      identification: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
      name: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)]),
      lastName: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.pattern(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)]),
      email: new FormControl("", [Validators.required, Validators.maxLength(50), Validators.pattern(/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/)]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(20)]),
      charge: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.pattern(/[^\W_]/g)]),
      enterprise: new FormControl("", [Validators.required]),
      Notification: new FormControl(false, [Validators.required]),
      notificationPhone: new FormControl("", [Validators.required, Validators.pattern(/^\d+$/), Validators.maxLength(20)])
    });

    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: store => {
        this.enterpriseControl.setValue(`${store.empresa?.id} - ${store.empresa?.companyName}`);
      },
      error: error => console.error(error)
    });
  }

  public get usernameControl(): AbstractControl {
    return this.createForm.controls["username"];
  }

  public get identificationControl(): AbstractControl {
    return this.createForm.controls["identification"];
  }

  public get nameControl(): AbstractControl {
    return this.createForm.controls["name"];
  }

  public get lastNameControl(): AbstractControl {
    return this.createForm.controls["lastName"];
  }

  public get emailControl(): AbstractControl {
    return this.createForm.controls["email"];
  }

  public get phoneControl(): AbstractControl {
    return this.createForm.controls["phone"];
  }

  public get chargeControl(): AbstractControl {
    return this.createForm.controls["charge"];
  }

  public get enterpriseControl(): AbstractControl {
    return this.createForm.controls["enterprise"];
  }

  public get NotificationControl(): AbstractControl {
    return this.createForm.controls["Notification"];
  }

  public get notificationPhoneControl(): AbstractControl {
    return this.createForm.controls["notificationPhone"];
  }

  public submit(): void {
    const payload: IAdministrationCreateUserDTO = {
      empresa: {
          id: ""
      },
      userName: this.usernameControl.value,
      licencia: this.identificationControl.value,
      nombres: this.nameControl.value,
      apellidos: this.lastNameControl.value,
      correo: this.emailControl.value,
      celular: this.phoneControl.value,
      cargo: this.chargeControl.value.trim(),
      telexNumber: this.notificationPhoneControl.value,
      info: this.NotificationControl.value,
      activo: "TRUE",
      shadowFlag: "0",
      createdBySAC: false
    }

    this.store.dispatch(createUser({
      body: payload,
      hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_CU")[0].notificable,
      notificationData: this.base64EncryptionUtilService.encrypt(JSON.stringify({
        userName: this.userInfo.userName,// Usuario que está logueado
        nit: this.userInfo.empresa?.id,// ID Usuario
        fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,// Nombre y Apellido del usuario logueado
        createdUserNit: payload.empresa.id,// ID Usuario
        createdUserUserName: payload.userName,// Identificación Usuario
        createdUserName: payload.nombres,// Nombre
        createdUserLastName: payload.apellidos,// Apellido
        createdUserEmail: payload.correo,// Correo electrónico (protegido como se guarda en el log)
        createdUserSecondPasswordPhoneNumber: payload.telexNumber,// Celular Segunda clave (protegido con 4 dígitos)
        createdUserPhoneNumber: payload.celular,// Celular Asignado
        createdUserNotificable: payload.info,// Indicador si el usuario es Notificable
        createdUserCharge: payload.cargo// Cargo
      })),
      privilege: "ADM_GU_CU"
    }));
  }

  public cancel(): void {
    this.router.navigate(["/", "administracion"]);
  }
}
