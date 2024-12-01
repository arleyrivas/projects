import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IAdministrationSecondPassword } from 'src/app/core/interfaces/administration-second-password.interface';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { getSecondPasswordMethod, updateSecondPasswordMethod } from 'src/app/state/administration/administration.actions';
import { administrationFeatureSelector } from 'src/app/state/administration/administration.selector';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-administration-second-password',
  templateUrl: './administration-second-password.component.html',
  styleUrls: ['./administration-second-password.component.css']
})
export class AdministrationSecondPasswordComponent implements OnInit {

  public user!: IAPIGatewayStore;
  public emailControl!: FormControl;
  public smsControl!: FormControl;

  public secondPasswordConfig!: IAdministrationSecondPassword;
  public dataSource: MatTableDataSource<string> = new MatTableDataSource<string>();
  public displayedColumns: string[] = ["description", "state"];
  public userInfo!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly matSnackBar: MatSnackBar,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService
  ) {}

  ngOnInit(): void {
    this.emailControl = new FormControl(false);
    this.smsControl = new FormControl(false);

    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });

    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: result => {
        this.user = result;

        this.store.dispatch(getSecondPasswordMethod({ nit: (result.empresa?.id as string) }));

        this.store.select(administrationFeatureSelector).subscribe({
          next: store => {
            if(store.secondPassword) {
              this.secondPasswordConfig = store.secondPassword as IAdministrationSecondPassword;

              this.emailControl.setValue(store.secondPassword.isSecondPasswordMail === "true" ? true : false);
              this.smsControl.setValue(store.secondPassword.isSecondPasswordSMS === "true" ? true : false);
            }
          },
          error: error => console.error(error)
        });
      },
      error: error => console.error(error)
    });
  }

  public submit(): void {
    const payload = {
      idCompany: this.secondPasswordConfig.idCompany,
      isSecondPasswordSMS: this.smsControl.value,
      isSecondPasswordMail: this.emailControl.value
    };

    if(this.smsControl.value || this.emailControl.value){
      //por el momento voy a ponerlo hasnotificacion como True, luego ya hay que recibirlo de admin
      //hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "ADMIN_SECOND_PASS")[0].notificable
      this.store.dispatch(updateSecondPasswordMethod({
        payload,
        nit: (this.user.empresa?.id as string),
        hasNotification: true,
        notificationData: this.base64EncryptionUtilService.encrypt(JSON.stringify({
          userName: this.user.userName,
          nit: this.userInfo.empresa?.id,
          fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,
          isSecondPasswordMail: payload.isSecondPasswordMail ? "Activo": "Inactivo",
          isSecondPasswordSMS: payload.isSecondPasswordSMS ? "Activo": "Inactivo"
        })),
        privilege: "ADMIN_SECOND_PASS"
      }));
    }else {
      this.matSnackBar.open("Debe configurar por lo menos un método de notificación de segunda clave", "",
            {
              verticalPosition: "top",
              duration: 3000,
              panelClass: ["error-snackbar"]
            }
          );
    }
  }

  public cancel(): void {
    this.store.dispatch(getSecondPasswordMethod({ nit: (this.user.empresa?.id as string) }));
  }
}
