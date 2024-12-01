import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICSGeneratePinResult, ICSGeneratePinUnit, IGeneratePinResult, IGeneratePinUnit } from '../generate-pin/generate-pin-mockup.component';
import { Store } from '@ngrx/store';
import { getPDFPin } from 'src/app/state/shared/shared.actions';
import { MatDialog } from '@angular/material/dialog';
import { GeneratePinDeactivationDialogComponent } from 'src/app/modules/containerized-load/components/generate-pin-deactivation-dialog/generate-pin-deactivation-dialog.component';
import { getGeneratePinDeactivateTotal } from 'src/app/state/containerized-load/containerized-load.actions';
import { catchError, EMPTY, mergeMap, of, Subject, takeUntil } from 'rxjs';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { detachedLoadFeatureSelector } from 'src/app/state/detached-load/detached-load.selectors';
import { IDetachedLoadStore } from 'src/app/core/interfaces/detached-load-store.interface';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { privileges } from 'src/app/core/privileges.enum';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { getDetachedLoad } from 'src/app/state/detached-load/detached-load.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetachedLoadService } from '../../services/detached-load.service';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';

@Component({
  selector: 'app-generate-pin-display-item',
  templateUrl: './generate-pin-display-item.component.html',
  styleUrls: ['./generate-pin-display-item.component.css']
})
export class GeneratePinDisplayItemComponent {
  @ViewChild(MatSort) public sort!: MatSort;
  @Input() public pin!: ICSGeneratePinResult;
  @Input() public lastSearch!: string | null;
  public privileges: typeof privileges = privileges;
  public userInfo!: IAPIGatewayStore;
  public dataSource: MatTableDataSource<ICSGeneratePinUnit> = new MatTableDataSource<ICSGeneratePinUnit>();
  public destroy$: Subject<void> = new Subject<void>();
  public displayedColumns: string[] = [];
  public pinDeleted: boolean = true;
  public canPrint: boolean = false;

  constructor(
    private readonly store: Store,
    private readonly matSnackBar: MatSnackBar,
    private readonly matDialog: MatDialog,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly detachedLoadService: DetachedLoadService,
    private readonly _AESEncryptionUtilService: AESEncryptionUtilService,
  ) {}

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });

    this.displayedColumns = ["id", "weight", "quantity", "shipper"];
    this.dataSource = new MatTableDataSource<ICSGeneratePinUnit>(this.pin.units);
  }

  ngAfterViewInit() {
    this.ocultarBotones();
  }

  public print(): void {
    window.open(`${location.origin}/portal/api/pin/pdf/${this.pin.pin}`);
  }

  public deletePin(buttonElement: HTMLDivElement): void {
    this.detachedLoadService.getDetachedLoad(this.base64EncryptionUtilService.encrypt(this.lastSearch as string)).pipe(
      mergeMap(encryptedLots => {
        let lots = [];

        if(encryptedLots) lots = JSON.parse(this._AESEncryptionUtilService.decrypt(encryptedLots))

        return of(lots);
      }),
      
      catchError((error) => {
        this.matSnackBar.open(
          $localize`:@@ab92f57dc8a3b3c01d990936a91519492b55c5af0da4fa79d874dd78e5f522df: modules.search.error`,
          "",
          {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          }
        )

        return EMPTY;
      })
    ).subscribe({
      next: (result: IDetachedLoad[]) => {
        const lotsDate = result.filter((item) => !item.truck_visit_appt_nbr).length;
        if(lotsDate === result.length) {
          if(this.pinDeleted) {
            const dialogRef = this.matDialog.open(GeneratePinDeactivationDialogComponent, {
              disableClose: true,
              data: {
                multiple: true,
              }
            });
            dialogRef.afterClosed().subscribe({
              next: (value: string) => {
                  if(value) {
                      buttonElement.style.display = "none";
                      this.pinDeleted = true;
                      this.canPrint = true;
              
                    this.store.dispatch(getGeneratePinDeactivateTotal({
                          body: {
                            pinNbr: this.pin.pin,
                            id: null,
                            observation: value
                          },
                          hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CS_IMP_EPI")[0].notificable,
                          notificationData: {
                            userId: this.userInfo.empresa?.id,
                            userName: this.userInfo.userName, // ID Usuario logueado
                            fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, // Nombre y Apellido del usuario logueado
                            hbl: this.pin.nbr, // HBL del PIN eliminado
                            consigneeId: result[0].consigneeId,// Identificación del Cliente(Consignee)
                            consigneeName: result[0].consigneeName,// Nombre del Cliente(Consignee)
                            shipperId: this.pin.units[0].shipper?.split("/")[0],// Identificador Empresa de transporte a la que fue asociado el PIN
                            shipperName: this.pin.units[0].shipper?.split("/")[1],// Nombre de Empresa de transporte a la que fue asociado el PIN
                            operation: "Anular PIN", // Tipo de transacción,
                            containers: "",
                            createdAt: "",
                            agent: "",
                            observations: value,
                            container: "",
                            cargoQuantity:  this.pin.units.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0),
                            cargoWeigth: this.pin.units.reduce((previousValue, currentValue) => previousValue + currentValue.weight, 0)
                          },
                          privilege: "CS_IMP_EPI"
                    }));
                    this.pin.units.forEach((unit: ICSGeneratePinUnit) => unit.active = false);
                  }
               },
                error: error => console.error(error)
              });
          }
        } else{
          this.pinDeleted = true;
          buttonElement.style.display = "none";
          this.pinDeleted = true;
          this.canPrint = true;
          this.pin.units.forEach((unit: ICSGeneratePinUnit) => unit.active = false);
          this.matSnackBar.open(
            "Uno o mas Cargo-lots  tiene cita asociada, no se puede eliminar el pin",
            "",
            {
              verticalPosition: "top",
              panelClass: ["error-snackbar"],
              duration: 5000
            }
          );
        }
      }
    })
    //this.store.dispatch(getDetachedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch as string) }));

    /*
    this.store.select(detachedLoadFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IDetachedLoadStore) => {
        const lotsDate = result.result.filter((item) => !item.truck_visit_appt_nbr).length;

        if(lotsDate === result.result.length) {
          if(this.pinDeleted) {
          const dialogRef = this.matDialog.open(GeneratePinDeactivationDialogComponent, {
            disableClose: true,
            data: {
              multiple: true,
            }
          });

          dialogRef.afterClosed().subscribe({
            next: (value: string) => {
                if(value) {
                  buttonElement.style.display = "none";
            this.pinDeleted = true;
            this.canPrint = true;
           
            this.store.dispatch(getGeneratePinDeactivateTotal({
                  body: {
                    pinNbr: this.pin.pin,
                    id: null,
                    observation: value
                  },
                  hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CS_IMP_EPI")[0].notificable,
                  notificationData: {
                    userId: this.userInfo.empresa?.id,
                    userName: this.userInfo.userName, // ID Usuario logueado
                    fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, // Nombre y Apellido del usuario logueado
                    hbl: this.pin.nbr, // HBL del PIN eliminado
                    consigneeId: result.result[0].consigneeId,// Identificación del Cliente(Consignee)
                    consigneeName: result.result[0].consigneeName,// Nombre del Cliente(Consignee)
                    shipperId: this.pin.units[0].shipper?.split("/")[0],// Identificador Empresa de transporte a la que fue asociado el PIN
                    shipperName: this.pin.units[0].shipper?.split("/")[1],// Nombre de Empresa de transporte a la que fue asociado el PIN
                    operation: "Anular PIN", // Tipo de transacción,
                    containers: "",
                    createdAt: "",
                    agent: "",
                    observations: value,
                    container: "",
                    cargoQuantity:  this.pin.units.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0),
                    cargoWeigth: this.pin.units.reduce((previousValue, currentValue) => previousValue + currentValue.weight, 0)
                  },
                  privilege: "CS_IMP_EPI"
                }));
                this.pin.units.forEach((unit: ICSGeneratePinUnit) => unit.active = false);
                }
              },
              error: error => console.error(error)
            });
          } else {
            this.pinDeleted = true;

            this.matSnackBar.open(
              "Uno o mas Cargo-lots  tiene cita asociada, no se puede eliminar el pin",
              "",
              {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              }
            );

          }
          this.pinDeleted = false;
              }

        this.destroy$.next();
        this.destroy$.complete();
      },
      error: error => console.error(error)
    });
    */
  }


  private ocultarBotones(): void {
    if (this.pin) this.canPrint =  this.pin.units.every(unit => !unit.active);
    
    
  }
}
