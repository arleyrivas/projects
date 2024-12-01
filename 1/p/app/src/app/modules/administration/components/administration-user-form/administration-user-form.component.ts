import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IAdministrationCreateUserDTO } from 'src/app/core/dto/administration-create-user.dto';
import { IAdministrationNotificationDTO } from 'src/app/core/dto/administration-notification.dto';
import { IAdministrationDisableUserDTO } from 'src/app/core/interfaces/administration-disable-user.interface';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IInfoUser } from 'src/app/core/interfaces/info-user.interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { privileges } from 'src/app/core/privileges.enum';
import { createUser, disableUser, getCompanyUsers, updateNotificationData, updateUser } from 'src/app/state/administration/administration.actions';
import { administrationFeatureSelector } from 'src/app/state/administration/administration.selector';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-administration-user-form',
  templateUrl: './administration-user-form.component.html',
  styleUrls: ['./administration-user-form.component.css']
})
export class AdministrationUserFormComponent implements OnInit {
  public privileges: typeof privileges = privileges;
  public user!: IInfoUser;
  public agent!: IAPIGatewayStore;
  public createForm!: FormGroup;
  public userInfo!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly store: Store,
    private readonly matSnackBar: MatSnackBar,
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
      notificationPhone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9*]*$/), Validators.maxLength(20)])
    });

    this.store.select(administrationFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: store => {
        this.user = store.selectedUser.filter(item => item.userName === store.selectedUserName)[0];

        if(this.user) {
          this.usernameControl.setValue(this.user.userName);
          this.identificationControl.setValue(this.user.licencia);
          this.nameControl.setValue(this.user.nombres.trim());
          this.lastNameControl.setValue(this.user.apellidos.trim());
          this.emailControl.setValue(this.user.correo.trim());
          this.phoneControl.setValue(this.user.celular);
          this.chargeControl.setValue(this.user.cargo.trim());
          this.enterpriseControl.setValue(`${this.user.empresa.id} - ${this.user.empresa.nombre}`);
          this.NotificationControl.setValue("true" === this.user.info ? this.user.info : false);
          this.notificationPhoneControl.setValue(this.user.telexNumber);
        }
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
      const payload: IInfoUser = Object.assign({}, this.user);

      payload.userName = this.usernameControl.value;
      payload.licencia = this.identificationControl.value;
      payload.nombres = this.nameControl.value;
      payload.apellidos = this.lastNameControl.value;
      payload.correo = this.emailControl.value;
      payload.celular = this.phoneControl.value;
      payload.cargo = this.chargeControl.value.trim();
      payload.info = this.NotificationControl.value;

      if(this.notificationPhoneControl.value.includes("*")) payload.telexNumber = this.user.telexNumber;
      else

      if(this.notificationPhoneControl.value.includes("*")) {
        if(this.notificationPhoneControl.value === this.user.telexNumber) {
          payload.telexNumber = this.user.telexNumber;
        } else {
          this.matSnackBar.open("El número de telefono de notificación es invalido", "",
          {
            verticalPosition: "top",
            duration: 3000,
            panelClass: ["error-snackbar"]
          }
        );
        }
      } else {
        payload.telexNumber = this.notificationPhoneControl.value;
      }
      //console.log("hasnotificacion: ", this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_EU")[0].notificable)
      //has notificacion se pone true, confirmar
      //hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_EU")[0].notificable
      let isActive = payload.activo;
      let celSecondPasswordLock = payload.shadowFlag;
      if (isActive === "TRUE"){
        isActive = "Si";
      }else{
        isActive = "No"
      }
      if (celSecondPasswordLock === "1"){
        celSecondPasswordLock = "Si"
      } else{
        celSecondPasswordLock = "No"
      }
      this.store.dispatch(updateUser({
        body: payload,
        hasNotification: true,
        notificationData: this.base64EncryptionUtilService.encrypt(JSON.stringify({
          userNameLogueado: this.userInfo.userName,// Usuario que está logueado
          nit: this.userInfo.empresa?.id,// ID Usuario
          userName: payload.userName,
          name: payload.nombres,
          apellidos: payload.apellidos,
          fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,// Nombre y Apellido del usuario logueado
          updatedUserNit: payload.empresa.id,// ID Usuario
          email: payload.correo,// Correo electrónico (protegido como se guarda en el log)
          celularProtegido: payload.telexNumber,// Celular Segunda clave (protegido con 4 dígitos)
          celular: payload.celular,// Celular Asignado
          isNotification: payload.info ? "Si": "No",// Indicador si el usuario es Notificable
          cargo: payload.cargo,// Cargo
          isActive: isActive,
          cedula: payload.licencia,
          isSecondPasswordSMS: celSecondPasswordLock //celular segunda clave bloqueado, si o no
        })),
        privilege: "ADM_GU_EU"
      }));
  }

  public updateNotificationPhoneState(lock: string): void {
    const payload: IAdministrationNotificationDTO = {
      "isLocked": lock,
      "mobileNotification": this.user.telexNumber,
      "username": this.user.userName
    }

    this.store.dispatch(updateNotificationData({ body: payload, user: this.user.userName }));
  }

  public disableUser(): void {
    const payload: IAdministrationDisableUserDTO = {
      userName: this.user.userName
    }
    this.store.dispatch(disableUser({ body: payload }));
    this.cancel();
  }

  public goToModule(module: string): void {
    this.router.navigate(["/", module]).then(() => {
      const currentRoute = this.router.url;

      this.router.navigateByUrl("/administration", { skipLocationChange: true }).then(() =>
      this.router.navigate([currentRoute])
    );
    });
  }

  public cancel(): void {
    this.router.navigate(["/", "administracion"]);
  }
}
