import { Component, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IGeneratePinResult, IGeneratePinUnit } from '../generate-pin/generate-pin-mockup.component';
import { Store } from '@ngrx/store';
import { cleanGeneratePin, getContainerizedLoad, getGeneratePinDeactivatePartial, getGeneratePinDeactivateTotal } from 'src/app/state/containerized-load/containerized-load.actions';
import { MatDialog } from '@angular/material/dialog';
import { GeneratePinDeactivationDialogComponent } from '../generate-pin-deactivation-dialog/generate-pin-deactivation-dialog.component';
import { privileges } from 'src/app/core/privileges.enum';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { catchError, EMPTY, mergeMap, of, Subject, takeUntil } from 'rxjs';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContainerizedLoadService } from '../../services/containerized-load.service';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { IContainerizedLoad } from 'src/app/core/interfaces/containerized-load.interface';

@Component({
  selector: 'app-generate-pin-display-item',
  templateUrl: './generate-pin-display-item.component.html',
  styleUrls: ['./generate-pin-display-item.component.css']
})
export class GeneratePinDisplayItemComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) public sort!: MatSort;
  @ViewChild("multipleButtonElement") public multipleButtonElement!: ElementRef<HTMLDivElement>;
  @ViewChildren("buttonElement") public buttonElement!: QueryList<ElementRef<HTMLDivElement>>;
  @Input() public pin!: IGeneratePinResult;
  @Input() public lastSearch!: string | null;
  public destroy$: Subject<void> = new Subject<void>();
  public privileges: typeof privileges = privileges;
  public userInfo!: IAPIGatewayStore;
  public dataSource: MatTableDataSource<IGeneratePinUnit> = new MatTableDataSource<IGeneratePinUnit>([]);
  public displayedColumns: string[] = [];
  public deletedUnits: number = 0;
  public canPrint: boolean = false;
  public unitDeleted: boolean = true;
  public pinDeleted: boolean = true;

  constructor(
    private readonly store: Store,
    private readonly matSnackBar: MatSnackBar,
    private readonly matDialog: MatDialog,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private contanerizedLoadService: ContainerizedLoadService,
    private readonly aesService: AESEncryptionUtilService
  ) {}

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });

    if(this.pin) {
      this.displayedColumns = ["item", "container", "shipper", "action"];
      this.dataSource = new MatTableDataSource<IGeneratePinUnit>(this.pin.units);
      
    }
  }

  ngAfterViewInit() {
    this.ocultarBotones();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    
  }

  public print(): void {
    if(this.pin) window.open(`${location.origin}/portal/api/pin/pdf/${this.pin.pin}`);
  }

  public deleteUnit(unit: IGeneratePinUnit, buttonElement: HTMLDivElement): void {
    this.contanerizedLoadService.getContainerizedLoad(this.base64EncryptionUtilService.encrypt(this.lastSearch as string)).pipe(
      mergeMap(encryptedContainers => {
        let containers = [];

        if(encryptedContainers) containers = JSON.parse(this.aesService.decrypt(encryptedContainers))
        return of(containers);
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
      next: (result: IContainerizedLoad[]) => {
        
        const container = result.filter((item) => item.unitNbr === unit.unit)[0];
        if(!container.truck_visit_appt_nbr){
          if(!container.truck_visit_appt_nbr){
            if(this.unitDeleted) {
              const dialogRef = this.matDialog.open(GeneratePinDeactivationDialogComponent, {
                disableClose: false,
                data: {
                  multiple: false,
                  unit: unit.unit
                }
              });
              
              dialogRef.afterClosed().subscribe({
                next: (value: string) => {
                  if(!container.truck_visit_appt_nbr) {
                    if(value) {
                      buttonElement.style.display = "none";
                      unit.active = false;
                      this.deletedUnits = this.deletedUnits + 1;
                      
                      const cantUnitsInActive = this.pin.units.filter((item) => !item.active).length;
                      if(this.pin.units.length === this.deletedUnits) {
                        this.canPrint = true;
                        this.multipleButtonElement.nativeElement.style.display = "none";
                      } else if(cantUnitsInActive === this.pin.units.length) {
                        this.canPrint = true;
                        this.multipleButtonElement.nativeElement.style.display = "none";
                      }
  
                      if(this.pin.units.length > 1) {
  
                        if(this.pin.units.length === this.deletedUnits) this.unitDeleted = false;
                        else this.unitDeleted = true;
                        this.store.dispatch(getGeneratePinDeactivatePartial({
                          body: {
                            pinNbr: null,
                            id: unit.id as number,
                            observation: value
                          },
                          hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_ECP")[0].notificable,
                          notificationData: {
                            userId: this.userInfo.empresa?.id,
                            userName: this.userInfo.userName,// ID Usuario logueado
                            fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,// Nombre y Apellido del usuario logueado
                            hbl: result[0].blNumber,// BL del PIN afectado
                            consigneeId: result[0].consigneeId,// Identificación del Cliente(Consignee)
                            consigneeName: result[0].consigneeName,// Nombre del Cliente(Consignee)
                            shipperId: this.pin.units[0].shipper?.split("/")[0],// Identificador Empresa de transporte a la que fue asociado el PIN
                            shipperName: unit.shipper,// Nombre de Empresa de transporte a la que fue asociado el PIN
                            operation: "Elimina contenedor de PIN", // Tipo de transacción
                            containers: this.pin.units.map((item) => item.unit).toString(),// Lista de contenedores eliminados del PIN (si se elimina el PIN se deben incluir los contenedores que tenía separados por coma)
                            observations: value,
                            agent: "",
                            createdAt: "",
                            cargoQuantity: 0,
                            cargoWeigth: 0,
                            container: unit.unit
                          },
                          privilege: "CC_IMP_ECP"
                        }));
                      } else {
                      this.multipleButtonElement.nativeElement.style.display = "none";
                      this.canPrint = true;
  
                      if(this.pin.units.length === this.deletedUnits) this.unitDeleted = false;
                      else this.unitDeleted = true;
                      this.store.dispatch(getGeneratePinDeactivateTotal({
                          body: {
                            pinNbr: this.pin.pin,
                            id: null,
                            observation: value
                          },
                          hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_EPI")[0].notificable,
                          notificationData: {
                            userId: this.userInfo.empresa?.id,
                            userName: this.userInfo.userName, // ID Usuario logueado
                            fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, // Nombre y Apellido del usuario logueado
                            hbl: this.pin.nbr, // HBL del PIN eliminado
                            consigneeId: result[0].consigneeId,// Identificación del Cliente(Consignee)
                            consigneeName: result[0].consigneeName,// Nombre del Cliente(Consignee)
                            shipperId: (this.pin.units[0].id)?.toString(),// Identificador Empresa de transporte a la que fue asociado el PIN
                            shipperName: this.pin.units[0].shipper,// Nombre de Empresa de transporte a la que fue asociado el PIN
                            operation: "Anular PIN", // Tipo de transacción,
                            container: unit.unit,
                            observations: value,
                            createdAt: "",
                            agent: "",
                            cargoQuantity: 0,
                            cargoWeigth: 0,
                            containers: unit.unit,
                            
                          },
                          privilege: "CC_IMP_EPI"
                        }));
                      }
                    }else{
                      this.unitDeleted = true;
                    }
                  } 
                  
                },
                error: error => console.error(error)
              });
  
              this.unitDeleted = false;
            }
          }
        } 
        else {
          this.unitDeleted = true;
          buttonElement.style.display = "none";
          unit.active = false;
          this.deletedUnits = this.deletedUnits + 1;
          const cantUnitsInActive = this.pin.units.filter((item) => !item.active).length;
          if(this.pin.units.length === this.deletedUnits) {
            this.canPrint = true;
            this.multipleButtonElement.nativeElement.style.display = "none";
          }else if(cantUnitsInActive === this.pin.units.length) {
            this.canPrint = true;
            this.multipleButtonElement.nativeElement.style.display = "none";
          }
          this.matSnackBar.open(
            "El contenedor tiene cita asociada, no se puede eliminar",
            "",
            {
              verticalPosition: "top",
              panelClass: ["error-snackbar"],
              duration: 5000
            }
          );
        }
      }
    });
        
       
                  
    
   /* this.store.dispatch(getContainerizedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch as string) }));

    this.store.select(containerizedLoadFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IContainerizedLoadStore) => {
        const container = result.result.filter((item) => item.unitNbr === unit.unit)[0];
        if(!container.truck_visit_appt_nbr){
          if(this.unitDeleted) {
            const dialogRef = this.matDialog.open(GeneratePinDeactivationDialogComponent, {
              disableClose: false,
              data: {
                multiple: false,
                unit: unit.unit
              }
            });
            console.log("info: ", container.truck_visit_appt_nbr);
            dialogRef.afterClosed().subscribe({
              next: (value: string) => {
                if(!container.truck_visit_appt_nbr) {
                  if(value) {
                    buttonElement.style.display = "none";
                    unit.active = false;
                    this.deletedUnits = this.deletedUnits + 1;
                    
                    const cantUnitsInActive = this.pin.units.filter((item) => !item.active).length;
                    if(this.pin.units.length === this.deletedUnits) {
                      this.canPrint = true;
                      this.multipleButtonElement.nativeElement.style.display = "none";
                    } else if(cantUnitsInActive === this.pin.units.length) {
                      this.canPrint = true;
                      this.multipleButtonElement.nativeElement.style.display = "none";
                    }

                    if(this.pin.units.length > 1) {

                      if(this.pin.units.length === this.deletedUnits) this.unitDeleted = false;
                      else this.unitDeleted = true;
                      this.store.dispatch(getGeneratePinDeactivatePartial({
                        body: {
                          pinNbr: null,
                          id: unit.id as number,
                          observation: value
                        },
                        hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_ECP")[0].notificable,
                        notificationData: {
                          userId: this.userInfo.empresa?.id,
                          userName: this.userInfo.userName,// ID Usuario logueado
                          fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,// Nombre y Apellido del usuario logueado
                          hbl: result.result[0].blNumber,// BL del PIN afectado
                          consigneeId: result.result[0].consigneeId,// Identificación del Cliente(Consignee)
                          consigneeName: result.result[0].consigneeName,// Nombre del Cliente(Consignee)
                          shipperId: this.pin.units[0].shipper?.split("/")[0],// Identificador Empresa de transporte a la que fue asociado el PIN
                          shipperName: unit.shipper,// Nombre de Empresa de transporte a la que fue asociado el PIN
                          operation: "Elimina contenedor de PIN", // Tipo de transacción
                          containers: this.pin.units.map((item) => item.unit).toString(),// Lista de contenedores eliminados del PIN (si se elimina el PIN se deben incluir los contenedores que tenía separados por coma)
                          observations: value,
                          agent: "",
                          createdAt: "",
                          cargoQuantity: 0,
                          cargoWeigth: 0,
                          container: unit.unit
                        },
                        privilege: "CC_IMP_ECP"
                      }));
                    } else {
                    this.multipleButtonElement.nativeElement.style.display = "none";
                    this.canPrint = true;

                    if(this.pin.units.length === this.deletedUnits) this.unitDeleted = false;
                    else this.unitDeleted = true;
                    this.store.dispatch(getGeneratePinDeactivateTotal({
                        body: {
                          pinNbr: this.pin.pin,
                          id: null,
                          observation: value
                        },
                        hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_EPI")[0].notificable,
                        notificationData: {
                          userId: this.userInfo.empresa?.id,
                          userName: this.userInfo.userName, // ID Usuario logueado
                          fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, // Nombre y Apellido del usuario logueado
                          hbl: this.pin.nbr, // HBL del PIN eliminado
                          consigneeId: result.result[0].consigneeId,// Identificación del Cliente(Consignee)
                          consigneeName: result.result[0].consigneeName,// Nombre del Cliente(Consignee)
                          shipperId: (this.pin.units[0].id)?.toString(),// Identificador Empresa de transporte a la que fue asociado el PIN
                          shipperName: this.pin.units[0].shipper,// Nombre de Empresa de transporte a la que fue asociado el PIN
                          operation: "Anular PIN", // Tipo de transacción,
                          container: unit.unit,
                          observations: value,
                          createdAt: "",
                          agent: "",
                          cargoQuantity: 0,
                          cargoWeigth: 0,
                          containers: unit.unit,
                          
                        },
                        privilege: "CC_IMP_EPI"
                      }));
                    }
                  }else{
                    this.unitDeleted = true;
                  }
                } 
                
              },
              error: error => console.error(error)
            });

            this.unitDeleted = false;
          }
        }
        else {
          this.unitDeleted = true;
          buttonElement.style.display = "none";
          unit.active = false;
          this.deletedUnits = this.deletedUnits + 1;
          const cantUnitsInActive = this.pin.units.filter((item) => !item.active).length;
          if(this.pin.units.length === this.deletedUnits) {
            this.canPrint = true;
            this.multipleButtonElement.nativeElement.style.display = "none";
          }else if(cantUnitsInActive === this.pin.units.length) {
            this.canPrint = true;
            this.multipleButtonElement.nativeElement.style.display = "none";
          }
          this.matSnackBar.open(
            "El contenedor tiene cita asociada, no se puede eliminar",
            "",
            {
              verticalPosition: "top",
              panelClass: ["error-snackbar"],
              duration: 20000
            }
          );
        }
          this.destroy$.next();
          this.destroy$.complete();
      },
      error: error => console.error(error)
    });*/
  }

  public deletePin(buttonElement: HTMLDivElement): void {

    this.contanerizedLoadService.getContainerizedLoad(this.base64EncryptionUtilService.encrypt(this.lastSearch as string)).pipe(
      mergeMap(encryptedContainers => {
        let containers = [];

        if(encryptedContainers) containers = JSON.parse(this.aesService.decrypt(encryptedContainers))
        return of(containers);
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
      next: (result: IContainerizedLoad[]) => {
        const pinContainersUnits = this.pin.units.map((item) => item.unit);
        const filteredContainers = result.filter((item) => pinContainersUnits.includes(item.unitNbr, 0));
        const containersDate = filteredContainers.filter((item) => !item.truck_visit_appt_nbr).length;
        if(containersDate === filteredContainers.length) {
          //no hay contenedores con cita
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
                  //buttonElement.style.display = "none";
                  this.multipleButtonElement.nativeElement.style.display = "none";
                  this.canPrint = true;
                  this.buttonElement.toArray().forEach((result: ElementRef<HTMLDivElement>) => {
                    result.nativeElement.style.display = "none";
                  });
                  if(this.pin){
                    this.pin.units.forEach((unit) => {
                      unit.active = false;
                    });
                  }
                  this.store.dispatch(getGeneratePinDeactivateTotal({
                    body: {
                      pinNbr: this.pin.pin,
                      id: null,
                      observation: value
                    },
                    hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_EPI")[0].notificable,
                    notificationData: {
                      userId: this.userInfo.empresa?.id,
                      userName: this.userInfo.userName, // ID Usuario logueado
                      fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, // Nombre y Apellido del usuario logueado
                      hbl: this.pin.nbr, // HBL del PIN eliminado
                      consigneeId: result[0].consigneeId,// Identificación del Cliente(Consignee)
                      consigneeName: result[0].consigneeName,// Nombre del Cliente(Consignee)
                      shipperId: (this.pin.units[0].id)?.toString(),// Identificador Empresa de transporte a la que fue asociado el PIN
                      shipperName: this.pin.units[0].shipper,// Nombre de Empresa de transporte a la que fue asociado el PIN
                      operation: "Anular PIN", // Tipo de transacción
                      containers: this.pin.units.map(value => value.unit).toString(),
                      observations: value,
                      createdAt: "",
                      agent: "",
                      container: "",
                      cargoQuantity: 0,
                      cargoWeigth: 0
                    },
                    privilege: "CC_IMP_EPI"
                  }));
                  
                }
              }}
            )
          }

        }else{
          //hay contenedores con cita
          this.pinDeleted = true;

          this.matSnackBar.open(
              "Uno o mas contenedores tiene cita asociada, no se puede eliminar el pin",
              "",
              {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              }
          );
        }
      } });

    /*this.store.dispatch(getContainerizedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch as string) }));

    this.store.select(containerizedLoadFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IContainerizedLoadStore) => {
        if(this.pinDeleted) {
          const dialogRef = this.matDialog.open(GeneratePinDeactivationDialogComponent, {
            disableClose: true,
            data: {
              multiple: true,
            }
          });

          dialogRef.afterClosed().subscribe({
            next: (value: string) => {
              const pinContainersUnits = this.pin.units.map((item) => item.unit);

              const filteredContainers = result.result.filter((item) => pinContainersUnits.includes(item.unitNbr, 0));
              const containersDate = filteredContainers.filter((item) => !item.truck_visit_appt_nbr).length;


              if(containersDate === filteredContainers.length) {
                if(value) {
                  buttonElement.style.display = "none";
                  this.multipleButtonElement.nativeElement.style.display = "none";
                  this.canPrint = true;
                  this.buttonElement.toArray().forEach((result: ElementRef<HTMLDivElement>) => {
                    result.nativeElement.style.display = "none";
                  });

                  this.store.dispatch(getGeneratePinDeactivateTotal({
                          body: {
                            pinNbr: this.pin.pin,
                            id: null,
                            observation: value
                          },
                          hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_EPI")[0].notificable,
                          notificationData: {
                            userId: this.userInfo.empresa?.id,
                            userName: this.userInfo.userName, // ID Usuario logueado
                            fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, // Nombre y Apellido del usuario logueado
                            hbl: this.pin.nbr, // HBL del PIN eliminado
                            consigneeId: result.result[0].consigneeId,// Identificación del Cliente(Consignee)
                            consigneeName: result.result[0].consigneeName,// Nombre del Cliente(Consignee)
                            shipperId: (this.pin.units[0].id)?.toString(),// Identificador Empresa de transporte a la que fue asociado el PIN
                            shipperName: this.pin.units[0].shipper,// Nombre de Empresa de transporte a la que fue asociado el PIN
                            operation: "Anular PIN", // Tipo de transacción
                            containers: this.pin.units.map(value => value.unit).toString(),
                            observations: value,
                            createdAt: "",
                            agent: "",
                            container: "",
                            cargoQuantity: 0,
                            cargoWeigth: 0
                          },
                          privilege: "CC_IMP_EPI"
                        }));
                }
              } else {
                  this.pinDeleted = true;

                  this.matSnackBar.open(
                          "Uno o mas contenedores tiene cita asociada, no se puede eliminar el pin",
                          "",
                          {
                            verticalPosition: "top",
                            panelClass: ["error-snackbar"],
                            duration: 5000
                          }
                    );
              }
            },
            error: error => console.error(error)
          });

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
    if (this.canPrint) this.multipleButtonElement.nativeElement.style.display = "none";
    
  }

  
}
