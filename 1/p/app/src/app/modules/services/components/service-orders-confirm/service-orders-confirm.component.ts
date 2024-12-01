import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { cleanDesignatedOfficial, cleanSearchedCriteria, cleanServiceAutorityType, cleanServiceOrderInfo, cleanUnit, getSaveServiceOrder, setContainers, setPdfData } from 'src/app/state/service-order/service-order.actions';
import { IServiceOrderPayload } from '../../interfaces/service-order-payload.interface';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IServiceTypeDesignatedOfficial } from '../../interfaces/service-type-designated-official.interface';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';

interface IServiceOrdersConfirmData {
  criteria: string;
  customer: string;
  customerName: string;
  serviceType: string;
  autorityType: string;
  inspectionType: string;
  requires_crew: string;
  container: string;
  containers: string[];
  crew: string |  null;
  officials: IServiceTypeDesignatedOfficial[];
  observation: string;
  payloads: IServiceOrderPayload[];
  BlAndBooking: boolean;
}

@Component({
  selector: 'app-service-orders-confirm',
  templateUrl: './service-orders-confirm.component.html',
  styleUrls: ['./service-orders-confirm.component.css']
})
export class ServiceOrdersConfirmComponent implements OnInit {
  public destroy$: Subject<void> = new Subject<void>();
  public currentDate: Date = new Date();
  public user!: IAPIGatewayStore;

  constructor(
    public matDialogRef: MatDialogRef<ServiceOrdersConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: IServiceOrdersConfirmData,
    private readonly store: Store,
    private readonly router: Router,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService
  ) {}

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (apiGatewayStore: IAPIGatewayStore) => {
        this.user = apiGatewayStore;
        this.currentDate = new Date();

        this.destroy$.next();
        this.destroy$.complete();
      },
      error: error => console.error(error)
    });
  }

  public submit(): void {
    this.store.dispatch(setPdfData({
      pdfData: {
        idOrderServices: this.dialogData.containers.toString(),
        company: this.user.empresa?.companyName + " - " + this.user.empresa?.id,
        userCreator: this.user.nombres + " " + this.user.apellidos,
        dateCreation: new Date().toLocaleTimeString(),
        nbr: this.dialogData.criteria,
        client: this.dialogData.customer,
        service: this.dialogData.serviceType,
        authority: this.dialogData.autorityType,
        typeInspection: this.dialogData.inspectionType,
        crewRequired: this.dialogData.requires_crew,
        containers: this.dialogData.container.split(",").join(", "),
        observations: this.dialogData.observation,
        officials: this.dialogData.officials.map(function (official) {
          return official.id.concat(", ",official.name,", ",official.comp_name);
        }),
        tagContOrHbl: this.dialogData.BlAndBooking ? 'CONTENEDORES' : 'HBL'
      }
    }));

    this.store.dispatch(setContainers({
      containers: this.dialogData.containers
    }));

    this.store.dispatch(getSaveServiceOrder({
      payloads: this.dialogData.payloads,
      hasNotification: this.user.privileges.filter(value => value.privilegeId === "ORD_SERV_BUS_SOL")[0].notificable,
      notificationData: {
        user: this.user.userName,
        name: `${this.user.nombres}  ${this.user.apellidos}`,
        nit: this.user.empresa?.id as string,
        nbr: this.dialogData.criteria,
        containers: this.dialogData.container,
        customer: this.dialogData.customer,
        serviceType: this.dialogData.serviceType,
        autorityType: this.dialogData.autorityType,
        inspectionType: this.dialogData.inspectionType,
        officials: this.dialogData.officials.map(function (official) {
          return official.id.concat(", ",official.name,", ",official.comp_name);
        }),
        observations: this.dialogData.observation,
        serviceOrdersRef: null
      },
      privilege: "ORD_SERV_BUS_SOL"
    }));

    this.router.navigate(['/', 'servicios', 'resume']);
    this.matDialogRef.close();
  }

  public cancel(): void {
    this.matDialogRef.close();
  }
}
