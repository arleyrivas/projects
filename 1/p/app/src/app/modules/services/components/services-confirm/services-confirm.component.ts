import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IServicesSaveHblCriteria } from 'src/app/core/dto/services-save-hbl-criteria.dto';
import { IAPIGatewayPrivilege } from 'src/app/core/interfaces/api-gateway-privilege.interface';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { cleanServicesImo, getServicesSaveHbl } from 'src/app/state/services/services.actions';
import { setCustomer } from 'src/app/state/shared/shared.actions';

interface IServicesConfirmData {
  hbl: string;
  packageType: string;
  packageTypeName: string;
  weight: string;
  customer: string;
  quantity: number;
  containers: string;
  customerName: string;
  unDescription: string;
  body: IServicesSaveHblCriteria;
}

@Component({
  selector: 'app-services-confirm',
  templateUrl: './services-confirm.component.html',
  styleUrls: ['./services-confirm.component.css']
})
export class ServicesConfirmComponent implements OnInit, OnDestroy {
  public user!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>;

  constructor(
    private readonly store: Store,
    public matDialogRef: MatDialogRef<ServicesConfirmComponent>,
    private base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly router: Router,
    @Inject(MAT_DIALOG_DATA) public dialogData: IServicesConfirmData,
  ) {}

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (apiGatewayStore: IAPIGatewayStore) => {
        this.user = apiGatewayStore;
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public submit(): void {
    this.store.dispatch(getServicesSaveHbl({
      body: this.dialogData.body,
      hasNotification: this.user.privileges.filter((value: IAPIGatewayPrivilege) => value.privilegeId === "SERV_CRE_HBL")[0].notificable,
      notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify({
        username: this.user.userName,
        name: `${this.user.nombres} ${this.user.apellidos}`,
        nit: this.user.empresa?.id,
        bl: this.dialogData.body.blNbr,
        hbl: this.dialogData.body.hbl,
        document1166: this.dialogData.body.infoRegisterDian,
        customerId: this.dialogData.body.shipper,
        customerName: this.dialogData.customerName,
        weight: this.dialogData.body.weight,
        quantity: this.dialogData.body.quantity,
        unNumber: this.dialogData.body.unNumber,
        unDescription: this.dialogData.unDescription,
        containers: this.dialogData.body.containers
      })),
      privilege: "SERV_CRE_HBL"
    }));

    this.matDialogRef.close();
    this.store.dispatch(setCustomer({ customer: [] }));
    this.store.dispatch(cleanServicesImo());
    this.router.navigate(['/', 'servicios']);
  }

  public cancel(): void {
    this.matDialogRef.close();
  }
}
