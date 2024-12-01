import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IAdministrationNotificationDTO } from 'src/app/core/dto/administration-notification.dto';
import { IAdministrationDisableUserDTO } from 'src/app/core/interfaces/administration-disable-user.interface';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IInfoUser } from 'src/app/core/interfaces/info-user.interface';
import { disableUser, updateNotificationData, updateUser } from 'src/app/state/administration/administration.actions';
import { administrationFeatureSelector } from 'src/app/state/administration/administration.selector';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-administration-profile-phone',
  templateUrl: './administration-profile-phone.component.html',
  styleUrls: ['./administration-profile-phone.component.css']
})
export class AdministrationProfilePhoneComponent implements OnInit {
  public user!: IInfoUser;
  public profileForm!: FormGroup;
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

    this.store.select(administrationFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: store => {
        this.profileForm = new FormGroup({
          username: new FormControl("", [Validators.required]),
          identification: new FormControl("", [Validators.required, Validators.pattern(/^\d+$/)]),
          name: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/)]),
          lastName: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/)]),
          email: new FormControl("", [Validators.required]),
          phone: new FormControl("", [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(10)]),
          charge: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/)]),
          enterprise: new FormControl("", [Validators.required]),
          notificationPhone: new FormControl("", [Validators.required])
        });

        this.user = store.selectedUser.filter(item => item.userName === store.selectedUserName)[0];

        if(this.user) {
          this.usernameControl.setValue(this.user.userName);
          this.identificationControl.setValue(this.user.licencia);
          this.nameControl.setValue(this.user.nombres);
          this.lastNameControl.setValue(this.user.apellidos);
          this.emailControl.setValue(this.user.correo ? "**************************" : "");
          this.phoneControl.setValue(this.user.celular);
          this.chargeControl.setValue(this.user.cargo);
          this.enterpriseControl.setValue(`${this.user.empresa.id} - ${this.user.empresa.nombre}`);
          this.notificationPhoneControl.setValue(this.user.telexNumber);
        }
      },
      error: error => console.error(error)
    });
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

  public submit(): void {
    const payload: IInfoUser = Object.assign({}, this.user);

    payload.userName = this.usernameControl.value;
    payload.licencia = this.identificationControl.value;
    payload.nombres = this.nameControl.value;
    payload.apellidos = this.lastNameControl.value;
    payload.correo = this.user.correo;
    payload.celular = this.phoneControl.value;
    payload.cargo = this.chargeControl.value;
    payload.info = this.user.info;
    payload.telexNumber = this.notificationPhoneControl.value;
    //console.log("hasnotification: ",  this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_EU")[0].notificable);
    //hasNotification:  this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_EU")[0].notificable
    this.store.dispatch(updateUser({
      body: payload,
      hasNotification: true,
      notificationData: this.base64EncryptionUtilService.encrypt(JSON.stringify({
        userName: this.userInfo.userName,// Usuario que está logueado
        nit: this.userInfo.empresa?.id,// ID Usuario
        fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,// Nombre y Apellido del usuario logueado
        updatedUserNit: payload.empresa.id,// ID Usuario
        updatedUserUserName: payload.userName,// Identificación Usuario
        updatedUserName: payload.nombres,// Nombre
        updatedUserLastName: payload.apellidos,// Apellido
        updatedUserEmail: payload.correo,// Correo electrónico (protegido como se guarda en el log)
        updatedUserSecondPasswordPhoneNumber: payload.telexNumber,// Celular Segunda clave (protegido con 4 dígitos)
        updatedUserPhoneNumber: payload.celular,// Celular Asignado
        updatedUserNotificable: payload.info,// Indicador si el usuario es Notificable
        updatedUserCharge: payload.cargo// Cargo
      })),
      privilege: "ADM_GU_EU"
    }));
    this.cancel();
  }

  public get usernameControl(): AbstractControl {
    return this.profileForm.controls["username"];
  }

  public get identificationControl(): AbstractControl {
    return this.profileForm.controls["identification"];
  }

  public get nameControl(): AbstractControl {
    return this.profileForm.controls["name"];
  }

  public get lastNameControl(): AbstractControl {
    return this.profileForm.controls["lastName"];
  }

  public get emailControl(): AbstractControl {
    return this.profileForm.controls["email"];
  }

  public get phoneControl(): AbstractControl {
    return this.profileForm.controls["phone"];
  }

  public get chargeControl(): AbstractControl {
    return this.profileForm.controls["charge"];
  }

  public get enterpriseControl(): AbstractControl {
    return this.profileForm.controls["enterprise"];
  }

  public get NotificationControl(): AbstractControl {
    return this.profileForm.controls["Notification"];
  }

  public get notificationPhoneControl(): AbstractControl {
    return this.profileForm.controls["notificationPhone"];
  }

  public cancel(): void {
    this.router.navigate(['/', 'administracion']);
  }
}
