import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICSGeneratePinUnit, IGeneratePinUnit, unitsMockup } from './generate-pin-mockup.component';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { GeneratePinResultComponent } from '../generate-pin-result/generate-pin-result.component';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { detachedLoadFeatureSelector } from 'src/app/state/detached-load/detached-load.selectors';
import { IDetachedLoadStore } from 'src/app/core/interfaces/detached-load-store.interface';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { cleanTruckers } from 'src/app/state/shared/shared.actions';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { Router } from '@angular/router';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { getGeneratePin } from 'src/app/state/detached-load/detached-load.actions';
import { privileges } from 'src/app/core/privileges.enum';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-generate-pin',
  templateUrl: './generate-pin.component.html',
  styleUrls: ['./generate-pin.component.css']
})
export class GeneratePinComponent implements OnInit, OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();
  public privileges: typeof privileges = privileges;
  public dataSource: MatTableDataSource<ICSGeneratePinUnit> = new MatTableDataSource<ICSGeneratePinUnit>();
  public displayedColumns: string[] = [];
  public units!: ICSGeneratePinUnit[];
  public showUnits: boolean = false;
  public userInfo!: IAPIGatewayStore;
  public lots!: IDetachedLoad[];
  public trucker!: string;
  public multipletrucker: string = "";
  public unitTrucker: string = "";
  public multipleChecked: boolean = false;
  public unitChecked: boolean = false;
  public truckFormControl!: FormControl;
  public truckValid: boolean = true;
  public cleanTruckerFunction: () => void = () => {};

  constructor(
    private readonly store: Store,
    private readonly matDialog: MatDialog,
    private readonly matSnackBar: MatSnackBar,
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

    this.store.select(detachedLoadFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IDetachedLoadStore) => {
        if(result.truckResult) {
          if(result.truckResult.length) {
            if(result.truckResult[0].pinContainerized) {
              if(result.truckResult[0].pinContainerized.length) {
                const dialog = this.matDialog.open(GeneratePinResultComponent, {
                  width: "60rem",
                  disableClose: true,
                  data: {
                    pins: result.truckResult[0]
                  }
                });

                dialog.afterClosed().subscribe({
                  next: (value) => {
                    this.router.navigate(["/", "carga-suelta", "pin"]);
                  },
                  error: error => console.error(error)
                });
              }
            }
          }
        }

        this.lots = result.result;

        if(this.lots.length) {
          let filteredResult = this.lots.filter((item) => item.yard);
          filteredResult = filteredResult.filter((item) => !item.hasHolds);
          filteredResult = filteredResult.filter((item) => !item.hasPin);
          filteredResult = filteredResult.filter((item) => !item.truck_visit_appt_nbr);

          filteredResult.forEach((value) => {
            if(!value.onAccount) {
              if(value.hasChargeableUnitEvents || value.hasDebt || value.storageDaysOwed != 0) {
                filteredResult = filteredResult.filter((item) => item.unitNbr != value.unitNbr);
              }
            }
          });

          if(filteredResult.length) {
            this.lots = filteredResult;

            this.displayedColumns = ["no", "weight", "quantity"];
            this.dataSource = new MatTableDataSource<ICSGeneratePinUnit>(filteredResult.map((value: IDetachedLoad) => ({
              quantity: value.cargoQuantity as number,
              weight: value.cargoWeigth as number
            })));
          } else {
            this.matSnackBar.open(
              "Los lots asociados al HBL no cumplen las condiciones",
              "",
              {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              }
            );

            this.router.navigate(["/", "carga-suelta"]);
          }
        }
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    this.store.dispatch(cleanTruckers());
  }

  public submit(): void {
    if(this.trucker) {
      if(this.trucker.split("/")[1]) {
        this.store.dispatch(getGeneratePin({
          body: [
            {
               "nbr": this.lots[0].nbr,
               "isUnit":false,
               "isBooking":false,
               "isEdo":false,
               "isEro":false,
               "consignee": this.lots[0].id as string,
               "unitsTrucks": this.lots.map((item) => ({
                    "nbr": item.unitNbr,
                    "truckId": this.trucker.split("/")[0],
                    "truckName": this.trucker.split("/")[1],
                    "twenty":false,
                    "isoType":"",
                    "quantity":0,
                    "commodity":"",
                    "cargoQuantity": item.cargoQuantity,
                    "cargoWeigth": item.cargoWeigth,
                    "destination":null,
                    "truckVisitAppointmetId":null
                 })),
               "frghtKind":"BBK",
               "isGroup":0,
               "emailNotification":{
                  "name": this.userInfo.userName,
                  "mail": null
               }
            }
         ],
          hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CS_IMP_PIN")[0].notificable,
          privilege: "CS_IMP_PIN",
          notificationData:{
            userId: this.userInfo.empresa?.id,// ID Usuario logueado
            createdByLDAP: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,// Nombre y Apellido del usuario logueado
            blNbr: this.lots[0].hbl,// HBL
            consigneeId: this.lots[0].consigneeId,// Identificación del Cliente(Consignee)
            consigneeName: this.lots[0].consigneeName,// Nombre del Cliente(Consignee)
            truckId: this.trucker.split("/")[1],// Identificador Empresa de transporte a la que fue asociado el PIN
            truckingCompanyNameLDAP: this.trucker.split("/")[1],// Nombre de Empresa de transporte a la que fue asociado el PIN
            totalLots: this.lots.length,// Número total Cargo-lots
            cargoWeigth: this.lots.reduce((previousValue, currentValue) => previousValue + currentValue.cargoWeigth, 0),// Suma pesos de los Cargo-lots del pin
            cargoQuantity: this.lots.reduce((previousValue, currentValue) => previousValue + currentValue.cargoQuantity, 0),// Suma cantidades de los Cargo-lots del pin
            createdByCompanyNameLDAP: ""
          }
        }));
      } else {
        this.matSnackBar.open(
          "Error, no ha seleccionado empresa de transporte",
          "",
          {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          }
        );
      }
    } else {
      this.matSnackBar.open(
        "Error, no ha seleccionado empresa de transporte",
        "",
        {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        }
      );
    }
  }

  public cancel(): void {
    this.router.navigate(["/", "carga-suelta"]);
  }

  public unitTruckSearch(value: string): void {
    this.trucker = value;
  }

  public clean(value: () => void): void {
    this.cleanTruckerFunction = value;
  }

  public toggleShowUnits(): void {
    this.showUnits = !this.showUnits;
  }

  public setTruckFormControl(value: FormControl): void {
    this.truckFormControl = value;
    if (value.errors) {
      this.truckValid = false;
    } else{
      this.truckValid = true;
    }
  }
}
