import { Component, OnInit } from '@angular/core';
import { IGeneratePinUnit, unitsMockup } from './generate-pin-mockup.component';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { GeneratePinResultComponent } from '../generate-pin-result/generate-pin-result.component';
import { Store } from '@ngrx/store';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { Subject, takeUntil } from 'rxjs';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { IContainerizedLoad } from 'src/app/core/interfaces/containerized-load.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { cleanTruckers } from 'src/app/state/shared/shared.actions';
import { getGeneratePin, setOperationStuck } from 'src/app/state/containerized-load/containerized-load.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { privileges } from 'src/app/core/privileges.enum';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';

interface IContainerTruckSelected {
  unitNbr: string;
  BlData: IContainerizedLoad,
  trucker: string | null;
  selected: boolean;
  disabled: boolean;
  checkbox?: MatCheckbox;
  control?: FormControl;
  cleanControl?: () => void;
}

@Component({
  selector: 'app-generate-pin',
  templateUrl: './generate-pin.component.html',
  styleUrls: ['./generate-pin.component.css']
})
export class GeneratePinComponent implements OnInit {
  public destroy$: Subject<void> = new Subject<void>();
  public CCdestroy$: Subject<void> = new Subject<void>();
  public units!: IGeneratePinUnit[];
  public customerId!: string;
  public userInfo!: IAPIGatewayStore;
  public trucker!: string;
  public privileges: typeof privileges = privileges;
  public containersTruck: IContainerTruckSelected[] = [];
  public containersTruckSelected: IContainerTruckSelected[] = [];
  public truckFormControl!: FormControl;
  public invalid: boolean = true;
  public truckValid: boolean = true;
  public truckAsignned: boolean = false;

  constructor(
    private readonly store: Store,
    private readonly matSnackBar: MatSnackBar,
    private readonly matDialog: MatDialog,
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

    this.store.select(containerizedLoadFeatureSelector).pipe(
      takeUntil(this.CCdestroy$)
    ).subscribe({
      next: (result: IContainerizedLoadStore) => {
        if(result.result.length) {
          if(result.result)
            if(result.result.length)
              this.customerId = result.result[0].consigneeId;

          let filteredResult = result.result.filter((item) => item.yard);
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
            this.containersTruck = filteredResult.map((value: IContainerizedLoad) => ({
              unitNbr: value.unitNbr,
              trucker: null,
              BlData: value,
              selected: false,
              disabled: false
            }));
            

            this.CCdestroy$.next();
            this.CCdestroy$.complete();
          } else {
            this.matSnackBar.open(
              "Los contenedores asociados al BL no cumplen las condiciones",
              "",
              {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              }
            );

            this.CCdestroy$.next();
            this.CCdestroy$.complete();

            this.router.navigate(["/", "carga-contenerizada"]);
          }
        }
      },
      error: error => console.error(error)
    });

    this.store.select(containerizedLoadFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IContainerizedLoadStore) => {
        if(result.truckResult) {
          if(result.truckResult.length) {
            if(result.truckResult[0].pinContainerized) {
              if(result.truckResult[0].pinContainerized.length) {
                const dialog = this.matDialog.open(GeneratePinResultComponent, {
                  width: "60rem",
                  disableClose: true,
                  data: {
                    pins: result.truckResult
                  }
                });

                dialog.afterClosed().subscribe({
                  next: (value) => {
                    this.router.navigate(["/", "carga-contenerizada", "pin"]);
                  },
                  error: error => console.error(error)
                });
              }
            }
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
    
    const validateTruckers = this.containersTruckSelected.filter((value) => value.trucker && value.trucker.split("/")[1]).length;
    const containersTruck = this.containersTruckSelected.filter((value) => value.selected);

    if(containersTruck.length) {
      if(validateTruckers) {
        this.store.dispatch(setOperationStuck({ operationStuck: true }));

        this.store.dispatch(getGeneratePin({
          body: [
            {
                "nbr": containersTruck[0].BlData.blNumber,
                "isUnit":false,
                "isBooking":false,
                "isEdo":false,
                "isEro":false,
                "consignee": containersTruck[0].BlData.consigneeId as string,
                "unitsTrucks": containersTruck.map((item) => ({
                  "nbr": item.BlData.unitNbr,
                  "truckId": item.trucker ? item.trucker.split("/")[0] : "",
                  "truckName": item.trucker ? item.trucker.split("/")[1] : "",
                  "twenty": item.BlData.twenty,
                  "isoType": item.BlData.isoType,
                  })),
                "frghtKind":"FCL",
                "isGroup":0,
                "emailNotification":{
                  "name": this.userInfo.userName,
                  "mail": null
                }
            }
          ],
          hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_PIN")[0].notificable,
          privilege: "CC_IMP_PIN",
          notificationData: {
            userId: this.userInfo.empresa?.id, // ID Usuario logueado
            userfullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,// Nombre y Apellido del usuario logueado
            bl: containersTruck[0].BlData.blNumber,// BL del contenedor o contenedores
            consigneeId: containersTruck[0].BlData.consigneeId, // Identificación del Cliente(Consignee)
            consigneeName: containersTruck[0].BlData.consigneeName,// Nombre del Cliente(Consignee)
            agent: "",
            truckName: [...new Set(containersTruck.map(item => item.trucker ? item.trucker.split("/")[1] : "").filter(Boolean))].join(", "),// Nombre de la empresa de transporte
            nbr: containersTruck.map((item) => item.BlData.unitNbr).join(", "),// Número de contenedor o contenedores

          }
        }))
      } else {
        this.matSnackBar.open(
          "Error, no ha seleccionado contenedores o uno los seleccionados no tienen empresa de transporte asociada",
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
        "Debe seleccionar al menos un contenedor para hacer el proceso",
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
    this.router.navigate(["/", "carga-contenerizada"]);
  }

  public addUnit(unit: IContainerTruckSelected): void {
    const existUnit = this.containersTruckSelected.filter((value: IContainerTruckSelected) => value.unitNbr === unit.unitNbr).length;

    if(existUnit) {
      this.containersTruckSelected = this.containersTruckSelected.map((value: IContainerTruckSelected) => {
        const newValue: IContainerTruckSelected = Object.assign({}, value);

        if(newValue.unitNbr === unit.unitNbr) {
          newValue.trucker = unit.trucker;
          newValue.selected = unit.selected;
        }

        return newValue;
      });

      this.invalid = !!!this.containersTruckSelected.filter((value) => value.selected).length;
    } else {
      this.containersTruckSelected = [...this.containersTruckSelected, unit];
      this.invalid = !!!this.containersTruckSelected.filter((value) => value.selected).length;
    }
  }

  public multipleTruckSearch(value: string): void {
    this.trucker = value;
  }

  public matChecboxMultipleChange(event: MatCheckboxChange, checkbox: MatCheckbox): void {
    if(this.trucker && this.trucker.split("/")[1]) {
      if(event.checked) {
        this.containersTruckSelected = this.containersTruckSelected.map((value) => {
          const newValue: IContainerTruckSelected = Object.assign({}, value);

          newValue.trucker = this.trucker;
          newValue.selected = true;

          if(newValue.checkbox) {
            newValue.checkbox.checked = true;
            newValue.checkbox.disabled = true;
          }

          if(newValue.control) {
            newValue.control.disable();
            newValue.control.setValue(newValue.trucker);
          }
          this.truckAsignned = true;

          return newValue;
        });

        this.invalid = !!!this.containersTruckSelected.filter((value) => value.selected).length;
        if (!this.invalid && !this.truckValid){
          this.invalid = true;
        }
      } else {
        this.containersTruckSelected = this.containersTruckSelected.map((value) => {
          const newValue: IContainerTruckSelected = Object.assign({}, value);

          newValue.trucker = null;
          newValue.selected = false;

          if(newValue.checkbox) {
            newValue.checkbox.checked = false;
            newValue.checkbox.disabled = false;
          }

          if(newValue.control) {
            newValue.control.enable();
            newValue.control.setValue(null);

            if(newValue.cleanControl) newValue.cleanControl();
          }


          this.truckAsignned = true;

          return newValue;
        });

        this.invalid = !!!this.containersTruckSelected.filter((value) => value.selected).length;
        if (!this.invalid && !this.truckValid){
          this.invalid = true;
        }
      }
    } else {
      checkbox.checked = false;

      this.matSnackBar.open(
        "Error, no ha seleccionado contenedores o uno los seleccionados no tienen empresa de transporte asociada",
        "",
        {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        }
      );
    }
  }

  public setTruckFormControl(value: FormControl): void {
    this.truckFormControl = value;
    if (value.errors) {
      this.truckValid = false;
      this.invalid = true;
      
    } else{
      this.truckValid = true;
    }
    if (this.truckValid){
      this.invalid = !!!this.containersTruckSelected.filter((value) => value.selected).length;
    }else{
      this.invalid = true;
    }
  }

  
}
