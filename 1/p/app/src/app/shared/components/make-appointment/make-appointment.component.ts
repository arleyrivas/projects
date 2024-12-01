import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { StorageserviceService } from '../../services/storageservice.service';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { first, firstValueFrom, Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { IDetachedLoadStore } from 'src/app/core/interfaces/detached-load-store.interface';
import { privileges } from 'src/app/core/privileges.enum';
import { cleanDetachedLoad, getCancelAppointment, getCausalCancellationAppointment, getDataAppointmentDetail, setDataElementsDetachedLoad } from 'src/app/state/detached-load/detached-load.actions';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAppointmentMessageComponent } from '../confirm-appointment-message/confirm-appointment-message.component';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { cleanDisponibilidadCitas, cleanDriver, cleanItemCheckeados, cleanTruck, cleanTypeContainer, cleanValidationBookingSearchContainerized, cleanValidationPin, cleanValidationPinContainerized, getBreakBulk, getConfigurationPortal, getPrivilegeNotification, getValidacionDriver, getValidacionServiceDriver, getValidationPin } from 'src/app/state/shared/shared.actions';
import { UtilService } from '../../services/util.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { detachedLoadFeatureSelector } from 'src/app/state/detached-load/detached-load.selectors';
import { ICausalCancelationAppointment } from 'src/app/core/interfaces/ICausalCancelationAppointment.interface';
import { FormControl } from '@angular/forms';
import { CargoItem, IDataAppointmentCS } from 'src/app/core/interfaces/data-appointment-cs.interface';
import { MatTableDataSource } from '@angular/material/table';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { IBookingSearch, IContainerizedLoad, IPinSearch } from 'src/app/core/interfaces/containerized-load.interface';
import { getDataAppointmentDetail as  getDataAppointmentDetailCC} from 'src/app/state/containerized-load/containerized-load.actions';
import { setDataElementsContainerizedLoad } from 'src/app/state/containerized-load/containerized-load.actions';
import { CutoffDialogComponent } from '../cutoff-dialog/cutoff-dialog.component';
import { ICapacityTruck } from 'src/app/core/interfaces/capacity-truck.interface';
import { IContainer, IDataAppointmentCC } from 'src/app/core/interfaces/data-appointment-cc.interface';
import { ConfirmDeleteContainerComponent } from '../confirm-delete-container/confirm-delete-container.component';
import { IDriverValidation } from 'src/app/core/interfaces/driver.interface';
import { IDocumentationTruck } from 'src/app/core/interfaces/documentation-truck.interface';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { CausalCancellationDialogComponent } from '../causal-cancellation-dialog/causal-cancellation-dialog.component';

interface HBLValue {
  hbl: string;
  value: number;
  unds: number;
  unitNbr?: string;
  id?: string;
}
interface HBLResults{
  hbl: string;
  totalCarga: number;
  totalUnds: number;

}

@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.css']
})
export class MakeAppointmentComponent implements OnInit, OnDestroy{
  public recentHBL: string = "";
  public notFoundText: string = "";
  public privileges: typeof privileges = privileges;
  public userInfo!: IAPIGatewayStore;
  public detachedLoadStore: Observable<IDetachedLoadStore> = new Observable();
  private storageSubscription!: Subscription;
  public destroy$: Subject<void> = new Subject<void>();
  @Input("loadType") public loadType: string = "";
  @Input("firstLoad") public firstLoad = { action: "", value: 0, operation: "", id: "", hbl: "", unds: 0, unitNbr: "", holdConsigneeActive: false, siteAppointment: "" };
  @Input("placa") public placa: string = "";
  @Input("type") public type: string = "";
  @Input("origin") public origin: string = "";
  //@Input("siteAppointment") public siteAppointment: string = "";
  public listHbl: string[] = [];
  public hblValues: HBLValue[] = [];
  public hblResults: HBLResults[] = [];
  public showMakeAppointment = true;
  public showEditAppointment = false;
  public hblList: string[] = [];
  public showButtonCrearCita = false;
  public showButtonEditarCita = false;
  public driver: {"cardId":string,"name": string,"license": string, "licenseExpiration": number} = {cardId: '', name: '', license: '', "licenseExpiration": 0};
  public driverCopy: {"cardId":string,"name": string,"license": string, "licenseExpiration": number} = {cardId: '', name: '', license: '', "licenseExpiration": 0};
  public dataCita: {fechaSeleccionada: string, franjaHorariaSeleccionada: string} = {fechaSeleccionada: '', franjaHorariaSeleccionada: ''};
  public dataTypeTransporte: {privado: boolean, values: string[]} = {privado: false, values: []};
  public pinNbr: string[] = [];
  public cargoLots: any[] = [];
  public pinInfoList: string[] = [];
  public errorValidation = false;
  public initialWeight = 0;
  public showPlate = false;
  public capacity =  "0.00";
  public disponible = "0.00";
  public capacityCopy =  "0.00";
  public disponibleCopy = "0.00";
  public soat = "";
  public tecnomecanica = "";
  public infoPin = false;
  public setCleanValues = false;
  dataExistsInChild: boolean = false;
  isPlate: boolean = false;
  appointmentDate: string = "";
  appointmentNbr: string = "";
  public causals: ICausalCancelationAppointment[] = [];
  public causalSearcherFormControl: FormControl = new FormControl();
  public causalSelected: string = "";
  public causalSelectedDescription: string = "";
  public infoAppointmentEdit: IDataAppointmentCS[] = [];
  public infoAppointmentEditCC: IDataAppointmentCC[] = [];
  public dataSource: MatTableDataSource<CargoItem> = new MatTableDataSource<CargoItem>([]);
  public displayedColumns: string[] = [];
  public peso = 0;
  public manifestLists: string[] = [];
  public enterSubmit = false;
  public showManifestError = false;
  public showManifestErrorText = "";
  public titleContenerized = "";
  public capacityContenerized = {
    capacityExport: 0, capacityImport: 0
  }
  public listContainers: {"id": string, "type": string, "value": number, "holdConsigneeActive": boolean}[] = [];
  public isContainersImport = false;
  public isContainersExport = false;
  public containerList: string = '';
  public unitsList: string[] = [];
  private pinSearchContainerized: IPinSearch[] = [];
  private bookingSearchContainerized: IBookingSearch[] = [];
  private isHazards = false;
  public siteAppointment: string | null = null;
  public isPermissionCreateAppointmentCS = false;
  public isPermissionCreateAppointmentCC = false;
  public isPermissionEditAppointmentCS = false;
  public isPermissionEditAppointmentCC = false;
  public isPermissionDeleteAppointmentCC = false;
  private firstEdit = true;
  private firstEditDisponibilityTruckByHistory = true;
  private disponibilityOrigin = "0.00";
  private firstSetDisponibilityTruck = true;
  private listPin: string[] = [];
  public dataSourceCC: MatTableDataSource<IContainer> = new MatTableDataSource<IContainer>([]);
  private listContainersWithHazards: string [] = [];
  public isHoldConsigneeActive =  false;
  


 
  

  constructor(
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly store: Store,
    private readonly router: Router,
    private storageService:StorageserviceService,
    private readonly matDialog: MatDialog,
    private utilServices: UtilService,
    private readonly matSnackBar: MatSnackBar,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService,
    private cdr: ChangeDetectorRef,
    
    
  ) {

   }
  
  
  ngOnInit(): void {
    this.listHbl = [];
    this.isHoldConsigneeActive = false;
    this.hblValues = [];
    this.hblResults = [];
    this.showManifestError = false;
    this.showManifestErrorText = "";
   
    
    if (this.loadType === 'cs' && this.type === 'Editar Cita'){
      this.showPlate = true;
      this.showEditAppointment = true;
    }
    else if(this.loadType === 'cc' && this.type === 'Editar Cita'){
      this.showPlate = true;
      this.showEditAppointment = true;
    }
    else{
      this.showEditAppointment = false;
    }
  
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    this.isPermissionCreateAppointmentCS = this.hasPermission(this.privileges.CS_CIT_CRE);
    this.isPermissionCreateAppointmentCC = this.hasPermission(this.privileges.CC_CIT_CRE);
    this.isPermissionEditAppointmentCS = this.hasPermission(this.privileges.CS_CIT_EDI);
    this.isPermissionEditAppointmentCC = this.hasPermission(this.privileges.CC_CIT_EDI);
    this.isPermissionDeleteAppointmentCC = this.hasPermission(this.privileges.CC_CIT_ECO);
    

    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: ISharedStore) => {
        if (result){
          let documentationSubscription: Subscription | undefined;
          let capacitySubscription: Subscription | undefined;
          if (result.groupValidationPin && this.loadType === 'cs'){
            const pinN = result.groupValidationPin.map((group) => group.data.map((element) => element.data.map((element) => element.pinParaEliminar))).join(',');
            const shippers = result.groupValidationPin.map((group) => group.data.map((element) => element.data.map((element) => element.id))).join(',');
            //recorrer y asignarlo a un array, pero si no existe ya en el array
            this.pinNbr = Array.from(new Set(pinN.split(',').filter((element) => {
              return element !== "";
            })));
            this.pinInfoList = Array.from(new Set(shippers.split(',').filter((element) => {
              return element !== "";
            })));
          }
          if (this.loadType === 'cs' && this.type === 'Editar Cita' && result.infoApointment){
            this.infoAppointmentEdit[0] = result.infoApointment;
            this.appointmentDate = result.infoApointment.appointmentDate;
            this.appointmentNbr = result.infoApointment.nbr;
            this.peso = 0;
            this.manifestLists = [];
            
            if (this.firstEdit){
              this.placa = result.infoApointment.truck;
              this.storageService.setIsEditInMakeAppointment();
              
              
              
            }
            
           
            this.displayedColumns = ['numero','blitem', 'cargoWeigth', 'cargoQuantity'];
            
            if (this.dataSource.data.length === 0){
              this.dataSource.data = result.infoApointment.cargoLots.map((item, index) => {
                return { ...item, numero: index + 1 }; 
              });
            }
            result.infoApointment.cargoLots.forEach((item, index) => {
             
              if (item.manifestNbr.length > 0){
                //consultar si hay comas en el manifiesto
                
                if (item.manifestNbr.includes(',')){
                  const manifest = item.manifestNbr.split(',');
                  manifest.forEach((element) => {
                    if (!this.manifestLists.includes(element)){
                      this.manifestLists.push(element);
                    }
                  });
                }
                else{
                  if (!this.manifestLists.includes(item.manifestNbr)){
                    this.manifestLists.push(item.manifestNbr);
                  }
                }
              }
              this.peso += parseFloat(item.cargoWeigth.toString());
             
            });
            if (this.driver.license === ""){
              this.driver = {cardId: result.infoApointment.driver.cardId, name: result.infoApointment.driver.name, license: result.infoApointment.driver.license, licenseExpiration: 0};
            }
          }

          if (this.loadType === 'cs' && this.type === 'Editar Cita' && result.truck && this.firstEdit){
            this.firstEdit = false;
            this.placa = result.truck.license;
            
           
            // Cancelar la suscripción anterior si existe
            if (documentationSubscription) {
              documentationSubscription.unsubscribe();
            }
            if (capacitySubscription) {
              capacitySubscription.unsubscribe();
            }
            capacitySubscription = this.utilServices.getCapacityTruck(result.truck.id).subscribe({
              next: (resultCapacity: string) =>{
                const capacity: ICapacityTruck[] = JSON.parse(this.aesEncryptionUtilService.decrypt(resultCapacity));
                const capacityFloat =  parseFloat(capacity[0].vehcapacidad);
                this.storageService.setCapacityTruckDos(capacityFloat.toFixed(2));
                this.storageService.setDisponibilityTruck(capacityFloat.toFixed(2));
                
              }
            });
            documentationSubscription = this.utilServices.getDocumentationTruck(result.truck.id).subscribe({
              next: (documentacion: IDocumentationTruck[]) =>{
                
                if (documentacion && documentacion.length > 0){
                  this.storageService.setTecnomecanica(documentacion[0].data);
                  if (documentacion.length > 1){
                    this.storageService.setSoat(documentacion[1].data);
                  }
                } else{
                  this.storageService.setTecnomecanica("");
                  this.storageService.setSoat("");
                }
                this.evaluationShowButtonCrearCita();
              },
              error : (error) => {
                console.error(error)
              }
            }

            );
          }
          if (result.groupValidationPinContainerized && this.loadType === 'cc'){
            this.isContainersExport = false;
            this.isContainersImport = false;
            const pinN = result.groupValidationPinContainerized.map((group) => group.data.map((element) => element.data.map((element) => element.pinParaEliminar))).join(',');
            const shippers = result.groupValidationPinContainerized.map((group) => group.data.map((element) => element.data.map((element) => element.shipperId))).join(',');
            /* const countHazards = result.groupValidationPinContainerized.reduce((total, group) => {
              return total + group.data.reduce((subTotal, element) => {
                this.siteAppointment = element.data[0].siteAppointment;
                return subTotal + (element.data.some((el) => el.isHazard) ? 1 : 0);
              }, 0);
            }, 0); */
            let countHazards = 0;
            result.groupValidationPinContainerized.forEach(group => {
              group.data.forEach(groupItem => {
                groupItem.data.forEach(itemG => {
                  if (this.listContainers.some(itemLC => itemLC.id === itemG.unitNbr)){
                    this.siteAppointment = itemG.siteAppointment;
                  }
                  if (itemG.isHazard){
                    countHazards++
                    
                    if (itemG.unitNbr && !this.listContainersWithHazards.includes(itemG.unitNbr)){
                      this.listContainersWithHazards.push(itemG.unitNbr);
                    } 
                  }
                })
              })
            })
            if (countHazards > 0){
              this.isHazards = true;
              
            }
            //recorrer y asignarlo a un array, pero si no existe ya en el array
            this.pinNbr = Array.from(new Set(pinN.split(',').filter((element) => {
              return element !== "";
            })));
            this.pinInfoList = Array.from(new Set(shippers.split(',').filter((element) => {
              return element !== "";
            })));

            this.updateContainerTitle(result);
            if (result.pinSearchContainerized && result.pinSearchContainerized.length > 0){
              this.pinSearchContainerized = result.pinSearchContainerized;
            }
            
            if (result.bookingSearchContainerized && result.bookingSearchContainerized.length > 0){
              this.bookingSearchContainerized = result.bookingSearchContainerized;
            }
           
          }

          if (this.loadType === 'cc' && result.truck){
            this.placa = result.truck.license;
            
          }

          if (this.loadType === 'cc' && this.type === 'Editar Cita' && result.infoAppointmentCC){
            this.infoAppointmentEditCC[0] = result.infoAppointmentCC;
            this.appointmentDate = result.infoAppointmentCC.appointmentDate;
            this.appointmentNbr = result.infoAppointmentCC.nbr;
            this.siteAppointment = result.infoAppointmentCC.siteAppointment;
            this.manifestLists = [];

            if (this.firstEdit){
              this.placa = result.infoAppointmentCC.truck;
              this.storageService.setIsEditInMakeAppointment();
            }

            this.displayedColumns = ['numberFile', 'number','container', 'size', 'transation', 'action'];

            if (this.dataSourceCC.data.length === 0){
              this.dataSourceCC.data = result.infoAppointmentCC.containers.map((item, index) => {
                return { ...item, numberFile: index + 1, action: "delete",equipmentType: "", pinNbr: "", transType: "", line: ""}; 
              });
            }

            if (result.infoAppointmentCC.manifestNbr.length > 0){
              //consultar si hay comas en el manifiesto
              
              if (result.infoAppointmentCC.manifestNbr.includes(',')){
                const manifest = result.infoAppointmentCC.manifestNbr.split(',');
                manifest.forEach((element) => {
                  if (!this.manifestLists.includes(element)){
                    this.manifestLists.push(element);
                  }
                });
              }
              else{
                if (!this.manifestLists.includes(result.infoAppointmentCC.manifestNbr)){
                  this.manifestLists.push(result.infoAppointmentCC.manifestNbr);
                }
              }
            }
           
            if (this.driver.license === ""){
              this.driver = {cardId: result.infoAppointmentCC.driver.cardId, name: result.infoAppointmentCC.driver.name, license: result.infoAppointmentCC.driver.license, licenseExpiration: 0};
            }
          }

          if (this.loadType === 'cc' && this.type === 'Editar Cita' && result.truck && this.firstEdit){
            this.firstEdit = false;
            this.placa = result.truck.license;
            // Cancelar la suscripción anterior si existe
            if (documentationSubscription) {
              documentationSubscription.unsubscribe();
            }
            if (capacitySubscription) {
              capacitySubscription.unsubscribe();
            }

            capacitySubscription = this.utilServices.getCapacityTruck(result.truck.id).subscribe({
              next: (resultCapacity: string) =>{
                const capacity: ICapacityTruck[] = JSON.parse(this.aesEncryptionUtilService.decrypt(resultCapacity));
                const capacityFloat =  parseFloat(capacity[0].vehcapacidad);
                this.storageService.setCapacityTruckDos(capacityFloat.toFixed(2));
               
                this.storageService.setDisponibilityTruck(capacityFloat.toFixed(2));
              }
            });
            documentationSubscription = this.utilServices.getDocumentationTruck(result.truck.id).subscribe({
              next: (documentacion: IDocumentationTruck[]) =>{
              
                if (documentacion && documentacion.length > 0){
                  this.storageService.setTecnomecanica(documentacion[0].data);
                  if (documentacion.length > 1){
                    this.storageService.setSoat(documentacion[1].data);
                  }
                } else{
                  this.storageService.setTecnomecanica("");
                  this.storageService.setSoat("");
                }
                this.evaluationShowButtonCrearCita();
              },
              error : (error) => {
                console.error(error)
              }
            }

            );
          }
        
         
         
        }
      },
      error: error => console.error(error)
    }); 
    

    this.store.select(detachedLoadFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IDetachedLoadStore) => {
        if(result.causalCancellationAppointment){
          this.causals = result.causalCancellationAppointment;
        }
      }});
    if  (this.loadType === 'cs') {
      let capturaDatos = false;
      this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
        
        if(action.action === 'setCantidadCarga'){
          capturaDatos = true;
          
          //buscar si hbl no esta en el array
          if (!this.listHbl.includes(action.hbl)){
            if (action.holdConsigneeActive){
              this.isHoldConsigneeActive = true;
            }
            this.listHbl.push(action.hbl);
          }
       
          if (action.operation === "substract"){
            //eliminar la carga y las unidades del array, donde consida la carga, unidades y hbl, una vez
            //eliminado, se actualiza el total de carga y unidades
            this.hblValues = this.hblValues.filter((element) => {
              if (element.id === action.id){
                return false;
              }
              return true;
            });
            this.removeElementFromTable(action);
            this.calcularCargaYUnds(action.hbl);
          }
          else if (action.operation === "add"){
            this.hblValues.push({hbl: action.hbl, value: action.value, unds: action.unds, id: action.id, unitNbr: action.unitNbr});
            this.calcularCargaYUnds(action.hbl);
            if (parseFloat(this.disponible) > 0){
              this.addElementToTable(action);
            }
           
          }
        }
        else if (this.firstLoad.action === 'setCantidadCarga' && !capturaDatos){
          capturaDatos = true;
          if (!this.listHbl.includes(this.firstLoad.hbl)){
            if (this.firstLoad.holdConsigneeActive){
              this.isHoldConsigneeActive = true;
            }
            this.listHbl.push(this.firstLoad.hbl);
          }
          if (this.firstLoad.operation === "substract"){
            //eliminar la carga y las unidades del array, donde consida la carga, unidades y hbl, una vez
            //eliminado, se actualiza el total de carga y unidades
            this.hblValues = this.hblValues.filter((element) => {
              if (element.id === this.firstLoad.id){
                return false;
              }
              return true;
            });
            this.calcularCargaYUnds(this.firstLoad.hbl);
            
            
          }
          else if (this.firstLoad.operation === "add"){
            this.hblValues.push({hbl: this.firstLoad.hbl, value: this.firstLoad.value, unds: this.firstLoad.unds, id: this.firstLoad.id, unitNbr: this.firstLoad.unitNbr});
            this.calcularCargaYUnds(this.firstLoad.hbl);
          }
        }
        //esta parte me genera duda, por el this.type !== 'Editar Cita'
        if(action.action === 'cleanAll' && this.type !== 'Editar Cita'){
         
          this.cleanValues();
        }
        if (action.action === 'setCapacityTruckDos'){
          this.capacity = action.value;
          this.capacityCopy = action.value;
        }
        if (action.action === 'setDisponibilityTruck' && parseFloat(action.value) > 0){
         
          this.disponible = action.value;
         
          
          if(this.firstSetDisponibilityTruck){
            this.disponibilityOrigin = this.disponible;
            this.firstSetDisponibilityTruck = false;
          }
          
          if(this.firstEditDisponibilityTruckByHistory){
          
            
            this.disponible = (parseFloat(this.disponible) - this.peso).toFixed(2);
            
            this.storageService.setDisponibilityTruckByHistory(this.disponible);
            this.firstEditDisponibilityTruckByHistory = false;
          }/* else if(action.origin !== "history"){
            
            this.disponible = (parseFloat(this.disponible) - this.peso).toFixed(2);
            
          } */
         
          if (this.disponibleCopy === "0.00"){
           
            this.disponibleCopy = this.disponible;
          } 
        }
        if (action.action === 'setTecnomecanica'){
          this.tecnomecanica = action.value;
        }
        if (action.action === 'setSoat'){
         
          this.soat = action.value;
        }
        if (action.action === 'cleanValidationPinIndividual'){
          this.removeElementFromTableByPin(action.key)
        }
        if (action.action === 'setPin'){
          if (!this.listPin.includes(action.value)){
            this.listPin.push(action.value);
          }
         
        }
        if (action.action === 'cleanValidationPin'){
          this.removeElementFromTableByPinAll();
        }
      });
    }
    else if(this.loadType === 'cc'){
      this.showPlate = true;
      this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
        
        
        if (action.action === 'setTecnomecanica'){
          this.tecnomecanica = action.value;
          if (action.value !== ''){
            this.isPlate = false;
            this.evaluationShowButtonCrearCita();
          }
        }
        if (action.action === 'setSoat'){
          this.soat = action.value;
          if (action.value !== ''){
            this.isPlate = false;
            this.evaluationShowButtonCrearCita();
          }
        }
        //esta parte me genera duda, por el this.type !== 'Editar Cita'
        if(action.action === 'cleanAll' && this.type !== 'Editar Cita'){
          this.cleanValues();
        }
       
        if (action.action === 'cleanValidationPinIndividual'){
          this.removeElementFromTableByPinCC(action.key);
        }

        if (action.action === 'setContenedorType'){
          
          if (action.operation === "add"){
            
            this.addElementToTable(action);
          }
          if (action.operation === "substract"){
            this.removeElementFromTable(action);
          }
          
        }
        if (action.action === 'setPin'){
          if (!this.listPin.includes(action.value)){
            this.listPin.push(action.value);
          }
        }

        if (action.action === 'cleanValidationPin'){
          this.removeElementFromTableByPinAll();
        }
        
      });
      
    }

    
  }

  //metodo para obtener el total de carga y unidades por hbl
  public getTotalHBL(hbl: string): number[]{
    let totalCarga = 0;
    let totalUnds = 0;
    this.hblValues.forEach((element) => {
      if (element.hbl === hbl){
        totalCarga += element.value;
        totalCarga = Math.round((totalCarga + Number.EPSILON) * 100) / 100;
        totalUnds += element.unds;
        totalUnds = Math.round((totalUnds + Number.EPSILON) * 100) / 100;
      }
    });
    return [totalCarga, totalUnds];
  }
  public getHblResult(hbl: string) {
    return this.hblResults.find(result => result.hbl === hbl);
  }

  public calcularCargaYUnds(hbl: string): void {
    const totalCarga = this.getTotalHBL(hbl)[0];
    const totalUnds = this.getTotalHBL(hbl)[1];
    //buscar si hbl no esta en el array
    if (!this.hblResults.some((element) => element.hbl === hbl)){
      this.hblResults.push({hbl: hbl, totalCarga: totalCarga, totalUnds: totalUnds});
    } else {
      this.hblResults.forEach((element) => {
        if (element.hbl === hbl){
          element.totalCarga = totalCarga;
          element.totalUnds = totalUnds;
        }
      });
      
    }
    this.isZero();
  }
  //metodo para averiguar si carga y unidades son 0 en hblresults
  public isZeroHbl(hbl: string): boolean {
    const totalCarga = this.getTotalHBL(hbl)[0];
    const totalUnds = this.getTotalHBL(hbl)[1];
    if (totalCarga === 0 && totalUnds === 0){
      return true;
    }
    return false;
  }

  //metodo para consultar si carga y unidades son 0 por hbl
  public isZero(): void {
    let isZero = 0;
    this.listHbl.forEach((element) => {
      if (this.isZeroHbl(element)){
        isZero += 1;
      }
    });
    if (this.type === 'Crear Cita'){
      if (isZero === this.listHbl.length) {
        this.cleanValues();
        
      } else {
        this.showMakeAppointment = true;
      }
    }
  }

  onDriverSelected(selectedValue: string) {
    
    if(selectedValue){
      const dataDriver = selectedValue.split('-');
      if (dataDriver.length > 1){
        const nameDriver = dataDriver[0];
        const licenceDriver = dataDriver[1];
        const cardIdDriver = dataDriver[2];
        const dataNameDriver = nameDriver.split(': ');
        const name = dataNameDriver[1];
        const dataLicenceDriver = licenceDriver.split(': ');
        const license = dataLicenceDriver[1];
        const dataCardIdDriver = cardIdDriver.split(': ');
        const cardId = dataCardIdDriver[1];
        
        this.driver = {cardId: cardId, name: name, license: license, licenseExpiration: 0};
        this.driverCopy = {cardId: cardId, name: name, license: license, licenseExpiration: 0};
      }
      else{
        
        this.driver = {cardId: '', name: '', license: '', licenseExpiration: 0};
      }
    }else{
     
      this.driver = {cardId: '', name: '', license: '', licenseExpiration: 0};
    }
    if(this.loadType === 'cs'){
      this.evaluarShowButtonCrearCita();
    }
    else if(this.loadType === 'cc'){
      
      this.evaluationDriver();
    }
   
  }
  onErrorDriver(error: string) {
    
    if (error === "errorDriver" && this.loadType === 'cc'){
     
      this.driver = {cardId: '', name: '', license: '', licenseExpiration: 0};
      this.evaluationDriver();
    }
    if (error === "sinError" && this.loadType === 'cc'){
      
      this.driver = this.driverCopy;
      this.evaluationDriver();
    }
  }

  onCleanDriver(): void {
    
    this.driver = {cardId: '', name: '', license: '', licenseExpiration: 0};
    this.evaluarShowButtonCrearCita();
  }

  handleDataFromChild(data: any) {
    this.errorValidation = false;
    if (data && data.fechaSeleccionada && data.franjaHorariaSeleccionada){
      this.dataCita = {fechaSeleccionada: data.fechaSeleccionada, franjaHorariaSeleccionada: data.franjaHorariaSeleccionada};
    }else{
      this.dataCita = {fechaSeleccionada: '', franjaHorariaSeleccionada: ''};
      
    }
    if(this.loadType === 'cs'){
      this.evaluarShowButtonCrearCita();
    } else if(this.loadType === 'cc'){
      this.evaluationShowButtonCrearCita();
    }
   
  }

  handleDataTypeTransporte(data: any) {
    
    this.showManifestError = false;
    this.showManifestErrorText = "";
    if (data && (data.privado || data.values)){
      const privado = data.privado;
      const values = data.values;
      this.dataTypeTransporte = {privado: privado, values: values};
    } else{
      this.dataTypeTransporte = {privado: false, values: []};
    }
    if(this.loadType === 'cs'){
      this.evaluarShowButtonCrearCita();
    } else if(this.loadType === 'cc'){
      this.evaluationTypeTransport();
    }
    
  }

  async evaluarShowButtonCrearCita(): Promise<void> {
    let editAppointment = false;
    if (this.type === 'Editar Cita'){
      editAppointment = true;
    }
    await this.validations();
    let isCorrectInEdit = false;
    if (this.type === 'Editar Cita'  && this.causalSelected !== ""){
      isCorrectInEdit = true;
    }
    
    //esperar a que se cargue la data
    
    if (!this.errorValidation && ((this.dataCita.fechaSeleccionada && this.dataCita.franjaHorariaSeleccionada) || (isCorrectInEdit)) && this.driver.cardId && 
      this.driver.name && this.driver.license && (this.dataTypeTransporte.privado || this.dataTypeTransporte.values.length > 0)){
        if(!editAppointment){
          this.showButtonCrearCita = true;
        }else{
          
          if (this.soat === '' && this.tecnomecanica === ''){
            this.showButtonEditarCita = true;
          }
        }
      
    }else{
      if(!editAppointment){
        this.showButtonCrearCita = false;
      }else{
        this.showButtonEditarCita = false;
      }
      
    }
    
  }

  evaluationShowButtonCrearCita(): void {
    
    if (this.loadType === 'cc' && this.type === 'Crear Cita'){
      
      if(this.driver.cardId && this.driver.name && this.driver.license && this.dataCita.fechaSeleccionada 
        && this.dataCita.franjaHorariaSeleccionada && (this.dataTypeTransporte.privado || this.dataTypeTransporte.values.length > 0) && this.placa && this.soat === ''
        && this.tecnomecanica === '' && this.isPlate){
        this.showButtonCrearCita = true;

      }else{
        this.showButtonCrearCita = false;
      }
    }
    if ((this.loadType === 'cs' || this.loadType === 'cc') && this.type === 'Editar Cita'){
     
    
      if(this.driver.cardId && this.driver.name && this.driver.license &&  (this.dataTypeTransporte.privado || this.dataTypeTransporte.values.length > 0) && this.placa && this.soat === ''
        && this.tecnomecanica === '' && this.isPlate && this.causalSelected !== ""){
          this.showButtonEditarCita = true;
        }
      else{
        
        this.showButtonEditarCita = false;
      }
    }
    
  }

  async validations(confirmation: boolean = false): Promise<void> {
    if (this.loadType === 'cc'){
      return;
    }
    if(this.driver.license){
      const validationDriverString = await firstValueFrom(this.utilServices.getValidationDriver(this.driver.license));
      const validationDriver: IDriverValidation[] = JSON.parse(this.aesEncryptionUtilService.decrypt(validationDriverString));
      if (validationDriver && validationDriver.length > 0){
        if (validationDriver[0].data && validationDriver[0].data.length > 0){
          this.errorValidation = true;
       
        }else { this.errorValidation = false;}
      }
      if (!this.errorValidation){
        const validationServiceDriverString = await firstValueFrom(this.utilServices.getValidationServiceDriver(this.driver.license));
        const validationServiceDriver: IDriverValidation[] = JSON.parse(this.aesEncryptionUtilService.decrypt(validationServiceDriverString));
        if (validationServiceDriver && validationServiceDriver.length > 0){
          if (validationServiceDriver[0].data && validationServiceDriver[0].data.length > 0){
            this.errorValidation = true;
            
          }else { this.errorValidation = false;}
        }
      }else{this.errorValidation = false;}
      
      
      if (confirmation && !this.errorValidation && this.placa !== '' && ((this.dataCita.fechaSeleccionada && this.dataCita.franjaHorariaSeleccionada) || (this.type === 'Editar Cita'))){
        
        const validationCapacityTruckString = await firstValueFrom(this.utilServices.getCapacityTruck(this.placa));
        const validationCapacityTruck: ICapacityTruck[] = JSON.parse(this.aesEncryptionUtilService.decrypt(validationCapacityTruckString));
        if(validationCapacityTruck && validationCapacityTruck.length > 0){
          this.initialWeight =  parseFloat(validationCapacityTruck[0].vehcapacidad);
          if (this.type === 'Editar Cita'){
           
            
            this.initialWeight = parseFloat(this.disponibleCopy);
          }
        }
        let validationWeight = await firstValueFrom(this.utilServices.getWeight({truck: this.placa, appointmentDate: this.setAppointmentDate()}));
       
        if (validationWeight){
          let errorWeight = false;
          for(let i = 0; i < validationWeight.length; i++){
            if(validationWeight[i].license && validationWeight[i].license !== this.driver.cardId && this.type === 'Crear Cita'){
              this.errorValidation = true;
              const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym9: shared.make.appointment.existing.citation.driver`;
              this.showMessage(message, "error");
              return;
            }
            else if(validationWeight[i].existsCompany === 1 && this.type === 'Crear Cita'){
              this.errorValidation = true;
              
              const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym10: shared.make.appointment.existing.citation`;
              this.showMessage(message, "error");
              return;
            } else{
              if(validationWeight[i].weight){
                if (this.assessErrorCapacityTruck(validationWeight[i].weight)){
                  errorWeight = true;
                }
              }
            }
            

          }
          if (errorWeight){
            this.errorValidation = true;
            const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym11: shared.make.appointment.truck.capacity`;
            this.showMessage(message, "error");
            return;
          }

        } 
        if(!this.errorValidation){
          let weight = 0;
     
          this.hblResults.forEach((element) => {
            weight += element.totalCarga;
          });
          weight = parseFloat(weight.toFixed(2));
         
          const decimal = parseFloat("0.02");
          if (weight > (parseFloat(this.initialWeight.toFixed(2)) + decimal)){
            this.errorValidation = true;
            const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym11: shared.make.appointment.truck.capacity`;
            this.showMessage(message, "error");
            return;
          }
        }
        if(!this.errorValidation && this.hblValues && this.hblValues.length > 0){
          const units = this.hblValues
          .filter(element => element.unitNbr)
          .map(element => element.unitNbr)
          .join(',');
          
          const validationCheckHours = await firstValueFrom(this.utilServices.getCheckHours({units: units, appointmentDate: this.setAppointmentDate()}));
          if(validationCheckHours){
            if(validationCheckHours.error && validationCheckHours.error === 'true'){
              this.errorValidation = true;
              const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym12: shared.make.appointment.quote.editing.period.expired`;
              this.showMessage(message, "error");
              return;
            }
          } 
        }
        if(!this.errorValidation && this.dataTypeTransporte.values.length > 0){
          
          await this.evaluationManifest();
        }
        
      }

      

    }
        
  }
  setAppointmentDate(): string {
    const startTime = this.dataCita.franjaHorariaSeleccionada.split(' a ')[0];
    const [hours, minutes] = startTime.split(':').map(Number);
    let combinedDate = new Date(this.dataCita.fechaSeleccionada);

    combinedDate.setHours(hours);
    combinedDate.setMinutes(minutes);
    if(this.type === 'Editar Cita'){
      combinedDate = new Date(this.appointmentDate);
    }

    //const appointmentDate = new Date(combinedDate.getTime() - (5 * 60 * 60 * 1000)).toISOString();
    const appointmentDate = combinedDate.toISOString();
    return appointmentDate;
  }

 


  async createAppointment(): Promise<void> {
    await this.validations(true);
    await this.saveValidate();
    
    if (!this.errorValidation && this.matDialog.openDialogs.length === 0 && this.type === 'Crear Cita'){
      
      const dialoReg = this.matDialog.open(ConfirmAppointmentMessageComponent, {
        width: "50rem",
        data: {
          loadType: this.loadType,
        }
      });
  
      dialoReg.afterClosed().subscribe(result => {
        if (result){
          if(this.loadType === 'cs'){
            this.submit();
          }else if(this.loadType === 'cc'){

            this.submitCC();
          }
        }else{
          this.cancel();
        }
      }); 
    }
    else if(!this.errorValidation && this.type === 'Editar Cita'){
      if(!this.enterSubmit && this.loadType === 'cs'){
        this.submit();
      }else if(!this.enterSubmit && this.loadType === 'cc'){
        this.submitCC();
      }
    }
  }

  showMessage(message: string, type:string): void {
    if (type === "error"){
      this.matSnackBar.open(
        message,
        "",
        {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        }
      );
    }
    else if(type === "success"){
      this.matSnackBar.open(
        message,
        "",
        {
          verticalPosition: "top",
          panelClass: ["success-snackbar"],
          duration: 5000
        }
      )
      
    }
  }

  assessErrorCapacityTruck(value: number): boolean {
    let weight = 0;
    this.hblResults.forEach((element) => {
      weight += element.totalCarga;
    });
   

    const totalWeight = parseFloat(value.toFixed(2)) + parseFloat(weight.toFixed(2));
    
    if (totalWeight > this.initialWeight){
      return true;
    }
    return false;
  }

  async submit(): Promise<void> {
    // lógica de submit
    
    let privateTransportAproved = await this.evaluationPrivateTransport();
    
    if (!privateTransportAproved){
      return;
    }

    this.enterSubmit = true;

    let startTime = this.dataCita.franjaHorariaSeleccionada.split(' a ')[0];
    
    const [hours, minutes] = startTime.split(':').map(Number);
    let combinedDate = new Date(this.dataCita.fechaSeleccionada);
   
    if(combinedDate){
      combinedDate.setHours(hours);
      combinedDate.setMinutes(minutes);
    }
    if(this.type === 'Editar Cita'){
      combinedDate = new Date(this.appointmentDate);
    }
    //const appointmentDate = new Date(combinedDate.getTime() - (5 * 60 * 60 * 1000)).toISOString();
    
    const appointmentDate = combinedDate.toISOString();
   
    
    this.cargoLots = [];
    let isHazard = ""
    this.hblValues.forEach((element) => {
        if(element.unitNbr){
          if(isHazard === ""){
            isHazard = element.unitNbr;
          }else{
            isHazard = isHazard + "," + element.unitNbr;
          }
        }else{
          if(isHazard === ""){
            isHazard = "undefined";
          }else{
            isHazard = isHazard + "," + "undefined";
          }
        }
        this.cargoLots.push({id: null, peso: element.value, cantidad: element.unds, destino: null, 
          separacion: null, deudas: null, permisos: null,
          facturacion: null, cargoLotId: element.unitNbr, truckId: null, truckName: null
        });
    });
    const manifestNbr = this.dataTypeTransporte.values.length > 0  ? this.dataTypeTransporte.values.join(',') : "1";
  
    const infoBL = this.hblResults.map((element) => {
      return {blitem: element.hbl, qty: element.totalUnds};
    });
    //si un qty esta en 0, elimino el elemento
    for (let i = 0; i < infoBL.length; i++){
      if (infoBL[i].qty === 0){
        infoBL.splice(i, 1);
      }
    }
    //convertir infoBl a string
    const infoBlString = JSON.stringify(infoBL);
    
    const uniquePinNbr = Array.from(new Set(this.pinNbr));
    let dataToSend = {};
    if (this.driver && this.driver.cardId && this.driver.license){
      this.driver.cardId = this.driver.cardId.trim();
      this.driver.license = this.driver.license.trim();
    }
    dataToSend = {
      "pinNbr": uniquePinNbr.join(','),
      "appointmentDate": appointmentDate,
      "driver": this.driver,
      "truck": this.placa,
      "cargoLots": this.cargoLots,
      "pinInfoList": this.pinInfoList,
      "manifestNbr": manifestNbr,
      "isHazard": isHazard,
      "informationAppointment": infoBlString
    } 

    if (this.type === 'Editar Cita'){
      let weightOfEdit = 0;
      this.hblResults.forEach((element) => {
        weightOfEdit += element.totalCarga;
      });
      weightOfEdit = parseFloat(weightOfEdit.toFixed(2));
      dataToSend = {
        "pinNbr": infoBL.length > 0 ? uniquePinNbr.join(','): "",
        "appointmentDate": appointmentDate,
        "driver": this.driver,
        "truck": this.placa,
        "cargoLots": this.cargoLots,
        "pinInfoList": this.pinInfoList,
        "manifestNbr": manifestNbr,
        "isHazard": isHazard.length > 0 ? isHazard: "undefined",
        "informationAppointment": infoBlString,
        "truckVisitNbr": this.infoAppointmentEdit[0].nbr,
        "weight": weightOfEdit,
        "initialWeight": this.initialWeight,
        "cCACode": this.causalSelected,
        "cCADescription": this.causalSelectedDescription,
      }
    }
    let hasNotification = false;
    try{
      if(this.type === 'Crear Cita'){
      hasNotification = this.userInfo.privileges.filter(value => value.privilegeId === "CS_CIT_CRE")[0].notificable;}
      else{
        hasNotification = this.userInfo.privileges.filter(value => value.privilegeId === "CS_CIT_EDI")[0].notificable;
      }
    }catch(error){
      console.error(error);
      hasNotification = false;
    }
    
    if (this.type === 'Crear Cita'){
      this.utilServices.getBreakBulk({data: dataToSend}).subscribe({
        next: (result) => {
          if (result){
           
          if (result.state && result.state === "CREATED "){
            this.storageService.appointmentWasCreated();
              if(hasNotification) {
                
                this.store.dispatch(getPrivilegeNotification({
                  body: {
                    companyId: null,
                    mailsNotifications: null,
                    notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify(this.makeNotificationData(this.makeDataAppointmentDetail(result)))),
                    privilegeId: "CS_CIT_CRE"
                  }
                }));
              }
              this.clickAppointment(result);
          }else if(result.error && typeof result.error === 'string'){
            this.showMessage(result.error, "error");
            this.enterSubmit = false;
          }
          }else{
            const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym13: shared.make.error.appointment`;
            this.showMessage(message, "error");
            this.enterSubmit = false;
          }
        },
        error: (error) => {
          this.showMessage(error.error.error, "error");
          this.enterSubmit = false;
        }
      }); 
    }else{
      this.utilServices.getUpdateBreakBulk({data: dataToSend}).subscribe({
        next: (result) => {
          if (result){
        
           
            if (result.state && result.state === "CREATED "){
              this.storageService.appointmentWasCreated();
             
                if(hasNotification) {
                  this.store.dispatch(getPrivilegeNotification({
                    body: {
                      companyId: null,
                      mailsNotifications: null,
                      notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify(this.makeNotificationData(this.makeDataAppointmentDetail(result)))),
                      privilegeId: "CS_CIT_EDI"
                    }
                  }));
                }
                this.clickAppointment(result);
            } else if(result.error && typeof result.error === 'string' ) {
              this.showMessage(result.error, "error");
              this.enterSubmit = false;
            }
            
            else{
              const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym13: shared.make.error.appointment`;
              //this.showMessage(message, "error");
              //this.enterSubmit = false;
              if (hasNotification){
                const mergedArray = [
                  ...this.dataSource.data.map(item => ({
                    bl_nbr: item.blitem,
                    cargo_quantity: item.cargoQuantity,
                    cargo_weigth: item.cargoWeigth
                  })),
                  
                ];
                this.store.dispatch(getPrivilegeNotification({
                  body: {
                    companyId: null,
                    mailsNotifications: null,
                    notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify(
                      { userId: this.userInfo.empresa?.id,
                        createdByLdap: this.userInfo.userName, 
                        fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, 
                        hbl: this.hblResults, 
                        appointmentDate: appointmentDate,
                        driver: this.driver,
                        truck: this.placa,
                        createdByCompanyNameLDAP: this.userInfo.empresa?.companyName,
                        truckVisitAppointmentNbr: this.appointmentNbr,
                        cargoLots: mergedArray
                      }
                    )),
                    privilegeId: "CS_CIT_EDI"
                  }
                }))
              }
              this.cancel(true);
            }
          }else{
            const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym13: shared.make.error.appointment`;
            this.showMessage(message, "error");
            this.enterSubmit = false;
            this.cancel(true);
          }
        },
        error: (error) => {
          this.showMessage(error.error.error, "error");
          this.enterSubmit = false;
          this.cancel(true);
        }
      }); 
    }
  }

  cancel(existEdit: boolean = false, isDeleteContainer: boolean = false, deleteContainer: string = ""): void {
    
    if (this.type === 'Editar Cita' && this.origin !== 'history' && this.loadType === "cs"){
      this.clickAppointment(this.infoAppointmentEdit[0], true);
      this.storageService.clearStorageValidationPin();
      this.storageService.viewCreateAppointment();
     
    }else if(this.type === 'Editar Cita' && this.origin === 'history'){
      if (!existEdit){
        this.continueHistory();
      }else{
        this.clickAppointment(this.infoAppointmentEdit[0], true);
        this.storageService.viewCreateAppointment();
      }
    }else if(this.loadType === "cc" && this.type === 'Editar Cita' && this.origin !== 'history'){
      this.placa = "";
      this.storageService.cleanPlaca();
      this.storageService.clearContainersSelected();
      let isLastContainerRemoved = false;
      if (isDeleteContainer){
        this.infoAppointmentEditCC[0].containers = this.infoAppointmentEditCC[0].containers.filter(container => container.number !== deleteContainer);
        
        if (this.infoAppointmentEditCC[0].containers.length === 0){
          isLastContainerRemoved = true;
        }
      }
      this.clickAppointment(this.infoAppointmentEditCC[0], true, isLastContainerRemoved);
    }
    this.storageService.cleanMakeAppointment();
  }

  continueHistory(): void{
    this.storageService.clearStorageValidationPin();
    this.storageService.cleanPlaca();
    this.storageService.cleanValues();
    this.storageService.cleanAll();
    this.storageService.continueOperation();
    this.router.navigate(['historial']);
  }

  cleanValues(): void {
    
    this.hblValues = [];
    this.hblResults = [];
    this.listHbl = [];
    this.isHoldConsigneeActive = false;
   
    if (this.origin !== 'history'){
      this.showButtonCrearCita = false;
      
      this.dataCita = {fechaSeleccionada: '', franjaHorariaSeleccionada: ''};
      this.dataTypeTransporte = {privado: false, values: []};
    
      this.driver = {cardId: '', name: '', license: '', licenseExpiration: 0};
      this.driverCopy = {cardId: '', name: '', license: '', licenseExpiration: 0};
    
      this.store.dispatch(cleanDriver());
      this.store.dispatch(cleanDisponibilidadCitas());
      if (this.loadType !== 'cc'){
        this.showMakeAppointment = false;
      }
      if(this.loadType === 'cc'){
        this.placa = '';
        this.soat = '';
        this.tecnomecanica = '';
        this.store.dispatch(cleanTruck());
      }
      this.showManifestError = false;
      this.showManifestErrorText = "";
    }else if((this.origin === 'history') || (this.type === 'Editar Cita' && this.loadType === 'cs')){
      
      this.disponible = (parseFloat(this.disponibilityOrigin) - this.peso).toFixed(2);
      this.firstEditDisponibilityTruckByHistory = true;
      this.storageService.setDisponibilityTruckByHistory(this.disponibilityOrigin);
      
    }
    
    

  }
  public clickAppointment(element: any, isCancel: boolean = false, isLastContainerRemoved: boolean = false): void {
    
    this.enterSubmit = false;
    if (this.loadType === 'cs'){
      
      if(isCancel){
        this.driver = element.driver;
      }
      const dataAppointment = this.makeDataAppointmentDetail(element);


      let appointment: string = dataAppointment.truck_visit_appt_nbr;
      this.store.dispatch(getDataAppointmentDetail({ truckVisitNbr: appointment }));
      const encryptedValue = this.aesEncryptionUtilService.encrypt(JSON.stringify(dataAppointment));
      this.store.dispatch(setDataElementsDetachedLoad({ elementsDetachedLoad: encryptedValue }));
      this.store.dispatch(getConfigurationPortal());
      localStorage.setItem('loadType', 'cs');
      this.store.dispatch(cleanValidationPin());
      this.store.dispatch(cleanItemCheckeados());
      this.storageService.cleanPlaca();
      this.store.dispatch(cleanDriver());
      this.storageService.cleanValues();
      this.storageService.cleanAll();
      this.storageService.continueOperation();
      this.driver = {cardId: '', name: '', license: '', licenseExpiration: 0};
      this.driverCopy = {cardId: '', name: '', license: '', licenseExpiration: 0};
      this.placa = "";
      this.placa = '';
      this.soat = '';
      this.tecnomecanica = '';
      this.listContainers  = [];
      this.isContainersImport = false;
      this.isContainersExport = false;
      this.containerList = '';
      this.unitsList = [];
      this.pinSearchContainerized = [];
      this.bookingSearchContainerized = [];
      this.isHazards = false;
      this.siteAppointment = null;
      this.listContainersWithHazards = [];
     
      if (this.origin !== 'history'){
        this.storageService.showAppointmentCard(true);
        this.router.navigate(['carga-suelta', 'appointment-creation'], {});
      }
      else if(this.origin === 'history'){
        this.router.navigate(['historial']);
      }
      if(this.type === 'Editar Cita'){
        this.getPines(Array.from(new Set(this.pinNbr)));
        
      }
      this.storageService.viewCreateAppointment();

    }else if(this.loadType === 'cc'){
      
      
      if (element.skipEmptyRule){
        if (this.matDialog.openDialogs.length === 0){
          const dialoReg = this.matDialog.open(ModalDialogComponent, {
            width: "50rem",
            data: {
              loadType: this.loadType,
              message:  $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym54: shared.modal.dialog.double.cycle.apply`
            }
          });
          dialoReg.afterClosed().subscribe(result => {
            if (result){}else{}
            
          }); 
        }
      }
      this.storageService.appointmentWasCreated();
      let appointment: string = element.truckVisitNbr;
      if (this.type === 'Editar Cita' && element.nbr){
        appointment = element.nbr;
      }
     
      this.store.dispatch(getDataAppointmentDetailCC({ truckVisitNbr: appointment }));
      //renombrar propiedad del objeto
      let updatedElement = {
        ...element,         // Copiar todas las propiedades de `element`
        truckVisit: element.truckVisitNbr,
        lastContainerRemoved: isLastContainerRemoved 
      };
      if (this.type === 'Editar Cita' && element.nbr){
         updatedElement = {
          ...element,         // Copiar todas las propiedades de `element`
          truckVisit: element.nbr, // Renombrar truckVisitNbr a visitNumber
          
        };
      }
     
      
      
     
      
      const encryptedValue = this.aesEncryptionUtilService.encrypt(JSON.stringify(updatedElement));
      this.store.dispatch(setDataElementsContainerizedLoad({ elementsContainerizedLoad: encryptedValue }));
      localStorage.setItem('loadType', 'cc');
      this.storageService.cleanAll();
      this.store.dispatch(cleanValidationPinContainerized());
      this.store.dispatch(cleanValidationBookingSearchContainerized());
      this.driver = {cardId: '', name: '', license: '', licenseExpiration: 0};
      this.driverCopy = {cardId: '', name: '', license: '', licenseExpiration: 0};
      this.placa = "";
      this.placa = '';
      this.soat = '';
      this.tecnomecanica = '';
      this.listContainers  = [];
      this.isContainersImport = false;
      this.isContainersExport = false;
      this.containerList = '';
      this.unitsList = [];
      this.pinSearchContainerized = [];
      this.bookingSearchContainerized = [];
      this.isHazards = false;
      this.siteAppointment = null;
      this.listContainersWithHazards = [];
      this.store.dispatch(cleanTruck());
      this.store.dispatch(cleanTypeContainer());
      this.store.dispatch(cleanDriver());
      if (this.origin !== 'history'){
        this.storageService.showAppointmentCard(true);
        this.router.navigate(['carga-contenerizada', 'appointment-datails'], {});
      }
      else if(this.origin === 'history'){
        this.router.navigate(['historial']);
      }
      
    }
  }
  

  public makeDataAppointmentDetail(element: any): any {
    let appointmentDate = "";
    if (this.type === 'Editar Cita'){
      appointmentDate = element.appointmentDate;
    }else{
      appointmentDate = element.date;
    }
    let dateSplit = [];
    let hour = [];
    let dateString = "";
    if (typeof appointmentDate === 'string') {
      const date = (appointmentDate).split(' ');
      dateSplit = date[0].split('-');
      hour = date[1].split(':');
      dateString = `${dateSplit[0]}-${dateSplit[1]}-${dateSplit[2]} ${hour[0]}:${hour[1]}:00`
    }
    else if (typeof appointmentDate === 'number') {
      // Si la fecha viene en número (milisegundos)
      const dateN = new Date(appointmentDate);
      let year = dateN.getFullYear();
      let month = ('0' + (dateN.getMonth() + 1)).slice(-2); // Los meses empiezan desde 0
      let day = ('0' + dateN.getDate()).slice(-2);
      let hours = ('0' + dateN.getHours()).slice(-2);
      let minutes = ('0' + dateN.getMinutes()).slice(-2);
      let seconds = ('0' + dateN.getSeconds()).slice(-2);
      dateString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    
    
    
     
    const data = {
      "requested_time": dateString,
      "truck_visit_appt_nbr": element.nbr ? element.nbr: element.truckVisitAppointmentNbr, 
      "driver_license_nbr": this.type === 'Crear Cita' ? element.driverCardId: element.driver.cardId,
      "driver_name": this.driver.name,
      "truck_license_nbr": this.type === 'Crear Cita' ? element.truckLicense: element.truck,
      "gateAppt": this.type === 'Crear Cita' ?  element.gateAppt.map((element: any) => {
        return {
          "state": element.state,
          "nbr": element.nbr,
          "date": this.formatDate(new Date(element.date)),
          "slotStartTime": element.slotStartTime,
          "truckLicense": element.truckLicense,
          "truckingCompany": element.truckingCompany,
          "billoflading": element.billOfLoading,
          "blitem": element.blItem,
          "qty": element.qty
        }
      }): "",
      "cargoLots": this.type === 'Editar Cita' ? element.cargoLots: "",
    }
    return data
  }

  public makeNotificationData(data:any, cargaContenerizada: boolean = false, listContainersAll: any[] = [], deletedContainer: string = ""): any {
    if (!cargaContenerizada){
      
      return {
        userId: this.userInfo.empresa?.id,
        createdByLdap: this.userInfo.userName, 
        fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, 
        hbl: this.hblResults, 
        appointmentDate: data.requested_time,
        driver: { cardId: data.driver_license_nbr, name: data.driver_name, license: data.driver_license_nbr},
        driver_name: data.driver_name,
        identification: data.driver_license_nbr,
        licensy:  data.driver_license_nbr,
        truck: data.truck_license_nbr,
        createdByCompanyNameLDAP: this.userInfo.empresa?.companyName,
        truckVisitAppointmentNbr: data.truck_visit_appt_nbr,
        cargoLots: data.cargoLots ? data.cargoLots: "",
      }
    }
    else{
      
      let containers = this.listContainers;
      if (listContainersAll.length > 0){
        containers = listContainersAll.flat();
      } 
      
      if (deletedContainer !== ""){
        return {
          userId: this.userInfo.empresa?.id,
          createdByLDAP: this.userInfo.userName, 
          fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, 
          deletedContainer: deletedContainer,
          appointmentDate: this.appointmentDate,
          truckVisitNbr: this.appointmentNbr
        }
      }
      return {
        userId: this.userInfo.empresa?.id,
        createdByLDAP: this.userInfo.userName, 
        fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, 
        containers: containers, 
        appointmentDate: data.appointmentDate,
        name: data.driver.name,
        cardId: data.driver.cardId,
        licensy:  data.driver.cardId,
        truck: data.truck,
        createdByCompanyNameLDAP: data.createdByCompanyNameLDAP,
        truckVisitNbr: data.truckVisitNbr,
        location: data.siteAppointment,
        driver: data.driver
      }
    }
    
  }

   public formatDate(date: Date): string {
    const year = date.getUTCFullYear();
    const month = ('0' + (date.getUTCMonth() + 1)).slice(-2); // Months are zero indexed
    const day = ('0' + date.getUTCDate()).slice(-2);
    const hours = ('0' + date.getUTCHours()).slice(-2);
    const minutes = ('0' + date.getUTCMinutes()).slice(-2);
    const seconds = ('0' + date.getUTCSeconds()).slice(-2);
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0'); // Ensure single digit
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  onDataStatusChanged({status, message}: {status: boolean, message: string}) {
    this.dataExistsInChild = status;
    this.errorValidation = false;
   
   
    if (!this.dataExistsInChild){
      this.tecnomecanica = "";
      this.soat = "";
      this.capacity = "0.00";
      this.disponible = "0.00";
      this.firstEdit = true;
      this.firstSetDisponibilityTruck = true;
      this.firstEditDisponibilityTruckByHistory = true; 
      this.storageService.setPlaca("false")
      
    }
    if (message === "vacio"){
      if(this.loadType === 'cs'){
        this.storageService.cleanPlaca();
      }
      //this.storageService.cleanAll();
      this.storageService.setPlaca("false")
      this.isPlate = false;
      this.evaluationShowButtonCrearCita();
    }
    if (message === "true"){
      this.setCleanValues = false;
      this.isPlate = true;
      this.evaluationShowButtonCrearCita();
      this.storageService.setPlaca("true")
    }

    if (message === "false"){
      this.isPlate = false;
      this.storageService.setPlaca("false");
      this.evaluationShowButtonCrearCita();
      
    }
  }

  continue(): void {
    if (this.loadType === "cs" && this.origin !== 'history'){
      this.storageService.clearStorageValidationPin();
      this.storageService.cleanPlaca();
      this.storageService.cleanValues();
      this.storageService.cleanAll();
      this.storageService.continueOperation();
      this.router.navigate(["/", "carga-suelta"]);
    }else if(this.origin === 'history'){
      this.continueHistory();
    }else if(this.loadType === "cc" && this.origin !== 'history'){
      
      this.storageService.clearStorageValidationPin();
      this.storageService.cleanPlaca();
      this.storageService.cleanValues();
      this.storageService.cleanAll();
      this.storageService.continueOperation();
      this.router.navigate(["/", "carga-contenerizada"]);
    }
  }

  onCausalSelected(event: any, causal: { code: string; description: string; }) {
    if (event.isUserInput) {
      this.causalSearcherFormControl.setValue(causal.description);
      this.causalSelected = causal.code;
      this.causalSelectedDescription = causal.description;
      this.evaluarShowButtonCrearCita();
      this.evaluationShowButtonCrearCita();
    }
  }

  private getPines(pines: string[]): void {
    if (pines && pines.length > 0){
      pines.forEach((element) => {
        this.utilServices.getPin(element).subscribe({
          next: (encryptedResponse: string) => {
            const decryptedResponse = JSON.parse(this.aesEncryptionUtilService.decrypt(encryptedResponse));
            const result = decryptedResponse;
            if (result && result.length > 0){
              this.store.dispatch(getValidationPin({
                agente: result[0].agent, destination: result[0].destination ,hbl: result[0].hbl, isGroup: result[0].isGroup, pinParaEliminar: element
              }));
            }
          },
          error : (error) => {
            console.error(error)
          }
        })    
      });
    }
  }

  addElementToTable(newElement: any) {
    // Agregar el nuevo elemento al array
    if (this.type === 'Editar Cita' && this.loadType === 'cs'){
      const dataNewElement = {blitem: newElement.hbl, cargoWeigth: newElement.value, cargoQuantity: newElement.unds, apptNbr:"", billoflading: "",
        cargoLotId: newElement.unitNbr, manifestNbr: "", pin: newElement.pin};
      const updatedData = [...this.dataSource.data, { ...dataNewElement, numero: this.dataSource.data.length + 1 }];
      this.dataSource.data = updatedData;
    } else if(this.type === 'Editar Cita' && this.loadType === 'cc'){
      
      const transation = newElement.category === 'retiro' ? 'IMPORT' : newElement.category === 'ingreso' ? 'EXPORT': '';
      let  transType = ""; 
      if(transation === 'IMPORT'){
        transType = "PUI";
      }
      if(transation === 'EXPORT'){
        transType = newElement.retiro ? "PUE" : "DOE";
      }
      if(newElement.eroNbr){
        transType = "PUM";
      }
      if(newElement.edoNbr){
        transType = "DOM";
      }
     
      const dataNewElement = {number: '', container: newElement.id, size: newElement.value, transation: transation, equipmentType: newElement.isoType, pinNbr: newElement.pinOrBooking, 
        transType: transType , line: newElement.line
      };
      const updatedData = [...this.dataSourceCC.data, { ...dataNewElement, numberFile: this.dataSourceCC.data.length + 1}]
      this.dataSourceCC.data = updatedData;
    }
  }

  removeElementFromTable(elementToRemove: any) {
    // Filtrar el array para excluir el elemento que deseas eliminar
    if (this.type === 'Editar Cita' && this.loadType === 'cs'){
      const dataForRemove = {blitem: elementToRemove.hbl, cargoWeigth: elementToRemove.value, cargoQuantity: elementToRemove.unds, apptNbr:"", billoflading: "",
        cargoLotId: elementToRemove.unitNbr, manifestNbr: "", pin: elementToRemove.pin};
      
      const updatedData = this.dataSource.data.filter(item => {
        return !(item.cargoLotId === dataForRemove.cargoLotId && item.blitem === dataForRemove.blitem && item.cargoWeigth === dataForRemove.cargoWeigth && item.cargoQuantity === dataForRemove.cargoQuantity);
      });
      // Actualizar el dataSource con el nuevo array
      this.dataSource.data = updatedData;
    
      // Opcional: Recalcular el campo `numero` para que sigan siendo consecutivos
      this.dataSource.data.forEach((item, index) => {
        item.numero = index + 1;
      });
    } else if(this.type === 'Editar Cita' && this.loadType === 'cc'){
      
      const transation = elementToRemove.category === 'retiro' ? 'IMPORT' : elementToRemove.category === 'ingreso' ? 'EXPORT': '';
      const dataForRemove = {number: '', container: elementToRemove.id, size: elementToRemove.value, transation: transation};
      const updatedData = this.dataSourceCC.data.filter(item => {
        return !(item.container === dataForRemove.container && item.size === dataForRemove.size && item.transation === dataForRemove.transation);
      });
      this.dataSourceCC.data = updatedData;
      this.dataSourceCC.data.forEach((item, index) => {item.numberFile = index + 1;});
    }
  }

  removeElementFromTableByPinAll(): void{
    
    
    if((this.origin === 'history' && this.listPin.length > 0 && this.loadType === 'cs') || ( this.type === 'Editar Cita' && this.loadType === 'cs' && this.listPin.length > 0)){
      this.listPin.forEach((pin) =>{
        this.removeElementFromTableByPin(pin);
      });
    }
    else if ((this.origin === 'history' && this.listPin.length > 0 && this.loadType === 'cc') || ( this.type === 'Editar Cita' && this.loadType === 'cc' && this.listPin.length > 0)){
      this.listPin.forEach((pin) =>{
        this.removeElementFromTableByPinCC(pin);
      });
    }
  }

  removeElementFromTableByPin(pin: string): void{
    if((this.origin === 'history' && pin !== '' && pin !== undefined) || (this.type === 'Editar Cita' && this.loadType === 'cs' && pin !== '' && pin !== undefined)){
      const updatedData = this.dataSource.data.filter(item => {
        return !(item.pin === pin);
      });
      // Actualizar el dataSource con el nuevo array
      this.dataSource.data = updatedData;
      this.dataSource.data.forEach((item, index) => {
        item.numero = index + 1;
      });
    }
  }
  

  removeElementFromTableByPinCC(pin: string): void{
    if((this.origin === 'history' && pin !== '' && pin !== undefined && this.loadType === 'cc') || (this.type === 'Editar Cita' && this.loadType === 'cc' && pin !== '' && pin !== undefined)){
      const updatedData = this.dataSourceCC.data.filter(item => {
        return !(item.pinNbr === pin);
      });
      // Actualizar el dataSource con el nuevo array
      this.dataSourceCC.data = updatedData;
      this.dataSource.data.forEach((item, index) => {
        item.numero = index + 1;
      });
    }
  }

  private updateContainerTitle(result: ISharedStore): void{
    if (result.typeContainer && result.typeContainer.length > 0){
     
      let isImport = false;
      let isExport = false;
      this.showMakeAppointment = true;
      const listContainersMoment: string[] = [];
      result.typeContainer.forEach((element) => { 
        
        const title = element.category === 'ingreso' ? "Exportación": "Importación";
        if (!listContainersMoment.includes(element.id)){
          listContainersMoment.push(element.id);
        }
        if (title === "Importación"){
          isImport = true;
          this.isContainersImport = true;
          if (!this.listContainers.includes({id: element.id, type: title, value: element.value, holdConsigneeActive: element.holdConsigneeActive})){
            this.listContainers.push({id: element.id, type: title, value: element.value, holdConsigneeActive: element.holdConsigneeActive});
            this.siteAppointment = element.siteAppointment;
          }
        } else{
          isExport = true;
          this.isContainersExport = true;
          if (!this.listContainers.includes({id: element.id, type: title, value: element.value, holdConsigneeActive: element.holdConsigneeActive})){
            this.listContainers.push({id: element.id, type: title, value: element.value, holdConsigneeActive: element.holdConsigneeActive});
            this.siteAppointment = element.siteAppointment;
          }
        }
        if (this.titleContenerized === '') {
          this.titleContenerized = "Crear Cita Para ".concat(title);  
        }else{
          if (!this.titleContenerized.includes(title)){
            this.titleContenerized = this.titleContenerized.concat(" / ").concat(title);
          }
        }
      });
      if (!isImport && this.titleContenerized.includes("Importación")){
        this.titleContenerized = this.titleContenerized.replace("Importación", "");
        if (this.titleContenerized.includes(" / ")){
          this.titleContenerized = this.titleContenerized.replace(" / ", "");
        }
      }
      if (!isExport && this.titleContenerized.includes("Exportación")){
        this.titleContenerized = this.titleContenerized.replace("Exportación", "");
        if (this.titleContenerized.includes(" / ")){
          this.titleContenerized = this.titleContenerized.replace(" / ", "");
        }
      }
     
      this.evaluationCapacityContenerized(listContainersMoment);
    }else{
      this.titleContenerized = '';
      this.showMakeAppointment = false;
      this.listContainers = [];
      this.isContainersExport = false;
      this.isContainersImport = false;
    }
  }

  private evaluationCapacityContenerized(list: any):void{
   
    //eliminar los repetidos
    this.listContainers = this.listContainers.filter((item, index, self) =>
      index === self.findIndex((t) => (
        t.id === item.id && t.type === item.type
      ))
    );
    //si no esta en lis, eliminar de listContainers
    let capacityExport = 0;
    let capacityImport = 0;
    this.listContainers.forEach((element) => {
      if (list.includes(element.id)){
        if (element.type === "Importación"){
          capacityImport += element.value;
        }else if(element.type === 'Exportación'){
          capacityExport += element.value;
        }
      }
    });
    //si no esta en lis, eliminar de listContainers
    this.listContainers = this.listContainers.filter((element) => list.includes(element.id));
    
    let entryBloqueo = false;
    
    if (capacityImport + 20 > 40){
      entryBloqueo = true;
      //this.storageService.setBloqueoCheckbox(true, "all", "import");
    }
    if (capacityImport + 40 > 40){
      entryBloqueo = true;
      //this.storageService.setBloqueoCheckbox(true, "40", "import");
      
    }
    if (!entryBloqueo){
      //this.storageService.setBloqueoCheckbox(false, "all", "import");
    }

    if (capacityExport + 20 > 40){
      entryBloqueo = true;
      //this.storageService.setBloqueoCheckbox(true, "all", "export");
    }
    if (capacityExport + 40 > 40){
      entryBloqueo = true;
      //this.storageService.setBloqueoCheckbox(true, "40", "export");
    }
    if (!entryBloqueo){
      //this.storageService.setBloqueoCheckbox(false, "all", "export");
    }
    
    this.unitsList = list;
    this.ajustarContainerList();
  }

  private evaluationDriver(): void{
    this.errorValidation = false;
    if (this.driver.cardId && this.driver.name && this.driver.license){
      
      //this.evaluationManifest();
    }else{
      this.showButtonCrearCita = false;
    }
  }

  private evaluationTypeTransport(): void{
    if (this.dataTypeTransporte.values.length > 0 && (this.driver.cardId && this.driver.name && this.driver.license)){
      
      this.evaluationManifest();
    }else{
     
      if (!this.dataTypeTransporte.privado){
        this.showButtonCrearCita = false;
        if (this.type === 'Editar Cita'){
        
          this.showButtonEditarCita = false;
        }
        
      }else{
        
        if(this.driver.cardId && this.driver.name && this.driver.license){
          //this.evaluationPrivateTransport();
          if (this.soat === '' && this.tecnomecanica === ''){
            this.showButtonCrearCita = true;
          }
          if (this.type === 'Editar Cita'){
            
            if (this.soat === '' && this.tecnomecanica === '' && this.causalSelected){
              this.showButtonEditarCita = true;
            }
          }
        }
      }
    }
  }
  async  evaluationPrivateTransport(): Promise<boolean>{
    let validationPrivateAproved = false;
    if (this.dataTypeTransporte.privado && this.placa !== ''){
    
       const validationPrivate = await firstValueFrom(this.utilServices.getValidationPrivateTransport(this.placa));
      
        if (validationPrivate && validationPrivate.length > 0){
          if (validationPrivate[0].data && validationPrivate[0].data.length > 0){
            this.errorValidation = true;
            //this.showButtonCrearCita = false;
            const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym14: shared.make.non.authorized.vehicle`;
            this.showMessage(message, "error");
            validationPrivateAproved = false;
            return validationPrivateAproved;
          }else{
            this.errorValidation = false;
            validationPrivateAproved = true;
          }
        }else{
          validationPrivateAproved = true;
        }
    }{
      validationPrivateAproved = true;
      return validationPrivateAproved;
    }
  }

  private ajustarContainerList(): void{
    let units = '';
    let removedFinalComma = false;
    let unitsExport = this.listContainers.filter((element) => element.type === 'Exportación');
    let unitsImport = this.listContainers.filter((element) => element.type === 'Importación');
    for (let i = 0; i < unitsExport.length; i++) {
        units +=  unitsExport[i].id + ",";
        removedFinalComma = true;
    }

    if (removedFinalComma) {
        units = units.substring(0, units.length - 1);
        removedFinalComma = false;
    }

    units += "-";

    for (var i = 0; i < unitsImport.length; i++) {
        units += unitsImport[i].id + ",";
        removedFinalComma = true;
    }

    if (units !== '' && removedFinalComma) {
        units = units.substring(0, units.length - 1);
    } else if (units === '') {
        units = 'null';
    }
    this.containerList = units;
    
  }

  async evaluationManifest(): Promise<void>{
    if (this.dataTypeTransporte.values.length > 0){
      
      for (let i = 0; i < this.dataTypeTransporte.values.length; i++){
        try{
          const validationManifest = await firstValueFrom(this.utilServices.getManitfest({driver: this.driver, truck: this.placa, manifestNbr: this.dataTypeTransporte.values[i]}));
          this.evaluationShowButtonCrearCita();
        }
        catch(error){
          this.errorValidation = true;
          this.showButtonCrearCita = false;
          
          if (error instanceof HttpErrorResponse) {
            if (error.error?.error){
              this.showManifestError = true;
              this.showManifestErrorText = "Radicado: ".concat(this.dataTypeTransporte.values[i]).concat(", ").concat(error.error.error);
              this.showMessage(error.error.error, "error");
            }else{
              const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym15: shared.make.non.manifest.error`;
              this.showMessage(message, "error");
            }
          } else if (error instanceof Error) {
            const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym16: shared.make.non.unexpected.error`;
            this.showMessage(message, "error");
          } else {
            const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym17: shared.make.non.unknown.error`;
            this.showMessage(message, "error");
          }
          return;
        }
      }
    }
    if(this.dataTypeTransporte.privado){
      this.evaluationShowButtonCrearCita();
    }
  }


  async allValidations(): Promise<void> {
    
    if (this.loadType === 'cc'){
    //validacion conductor
      if(this.driver.license){
        const validationDriverString = await firstValueFrom(this.utilServices.getValidationDriver(this.driver.license));
        const validationDriver: IDriverValidation[] = JSON.parse(this.aesEncryptionUtilService.decrypt(validationDriverString));
        if (validationDriver && validationDriver.length > 0){
          if (validationDriver[0].data && validationDriver[0].data.length > 0){
            this.errorValidation = true;
            this.showButtonCrearCita = false;
            const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym18: shared.make.non.authorized.driver`;
            this.showMessage(message, "error");
            return;
        
          }else{
            this.errorValidation = false;
          }
        }
        if (!this.errorValidation){
          const validationServiceDriverString = await firstValueFrom(this.utilServices.getValidationServiceDriver(this.driver.license));
          const validationServiceDriver: IDriverValidation[] = JSON.parse(this.aesEncryptionUtilService.decrypt(validationServiceDriverString));
          if (validationServiceDriver && validationServiceDriver.length > 0){
            if (validationServiceDriver[0].data && validationServiceDriver[0].data.length > 0){
              this.errorValidation = true;
              this.showButtonCrearCita = false;
              const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym18: shared.make.non.authorized.driver`;
              this.showMessage(message, "error");
              return;
            }else { 
              this.errorValidation = false;
            }
          }
        }else{
          this.errorValidation = false;
        }
       
        await this.evaluationManifest();

        if(!this.errorValidation && this.placa !== '' && (this.dataCita.fechaSeleccionada && this.dataCita.franjaHorariaSeleccionada) && this.driver.cardId && 
          this.driver.name && this.driver.license && (this.dataTypeTransporte.privado || this.dataTypeTransporte.values.length > 0) && this.tecnomecanica === '' && this.soat === ''){
    
            const units = this.listContainers.map((element) => element.id).join(',');
            
            const validationCheckHours = await firstValueFrom(this.utilServices.getCheckHours({units: units , appointmentDate: this.setAppointmentDate()}));
            if(validationCheckHours){
              if(validationCheckHours.error && validationCheckHours.error === 'true'){
                this.errorValidation = true;
                const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym12: shared.make.appointment.quote.editing.period.expired`;
                this.showMessage(message, "error");
                this.showButtonCrearCita = false;
                return;
              }
            } 


            //
          
        }

       
      }else{
        this.showButtonCrearCita = false;
      }
    }
  }


  async saveValidate(): Promise<void> {
    if (this.loadType !== 'cc'){
      return;
    }
    if (!this.errorValidation && this.placa !== '' && (this.dataCita.fechaSeleccionada && this.dataCita.franjaHorariaSeleccionada) && this.driver.cardId && 
        this.driver.name && this.driver.license && (this.dataTypeTransporte.privado || this.dataTypeTransporte.values.length > 0) && this.tecnomecanica === '' && 
        this.soat === '')
      {
  
      const unitsImport: {"unitNbr": string, "orderNbr": string, "twenty": boolean, "isDropOffExport": boolean}[] = [];
      const unitsExport:  {unitNbr: string, orderNbr: string, twenty: boolean, vesselVisitId: string, shipperId: string, fechaCierreDocumental: number, earlyArrival: number, line: string}[] = [];
      
      
      
      if(this.isContainersImport){
        const listUnitsImportsId = this.listContainers.filter((element) => element.type === 'Importación').map((element) => element.id);
        this.pinSearchContainerized.forEach((element) => {
            const retiro = element.type_pin === '1' ? true: false;
            element.pinContainerized.forEach((elementTwo) => {
            if (!listUnitsImportsId.includes(elementTwo.unitNbr)) return;
            const unitImport = {"unitNbr": "", "orderNbr": this.pinNbr[0], "twenty": false, "isDropOffExport": false};
            unitImport.unitNbr = elementTwo.unitNbr;
            unitImport.twenty = elementTwo.twenty;
            unitImport.isDropOffExport = retiro;
           
            //revisar si el unitImport no existe en unitsImport
            if (!unitsImport.some(item => item.unitNbr === unitImport.unitNbr)){
              unitsImport.push(unitImport);
            }
          });
        });
      }
      const bookingInfo: any = this.bookingSearchContainerized;
      let bookingDateValidationList: {early: boolean, documentalValidation: boolean, unitNbr: string}[] = [];
      let isHazardBooking = false;
      
      if (bookingInfo !== null && bookingInfo !== undefined && typeof bookingInfo === 'object' && bookingInfo !== null){
        const appDate = new Date(this.setAppointmentDate()).getTime();
        let visitDummy: boolean | null = null;
        const lisContainersId = this.listContainers.map((element) => element.id);
        for (let i = 0; i < bookingInfo.length; i++){
          const element = bookingInfo[i];
          
          
          if (lisContainersId.includes(element.unitNbr)) {
            const unitExport = {unitNbr: "", orderNbr: "", twenty: false, vesselVisitId: "", shipperId: "", fechaCierreDocumental: 0, earlyArrival: 0, line: ""};
            unitExport.unitNbr = element.unitNbr;
            unitExport.orderNbr = element.bookingNbr;
            unitExport.twenty = element.twenty;
            unitExport.vesselVisitId = element.vesselVisitId;
            unitExport.shipperId = element.shipperId;
            unitExport.fechaCierreDocumental = new Date(element.fechaCierreDocumental).getTime();
            unitExport.earlyArrival = new Date(element.earlyArrival).getTime();
            unitExport.line = element.line;
            if (element.isHazard){
              isHazardBooking = true;
            }
            if (!unitsExport.some(item => item.unitNbr === unitExport.unitNbr)){
              unitsExport.push(unitExport);
            }
            let early = false;
            let documentalValidation = false;
            if (unitExport.earlyArrival >= appDate){
              early = true;
            }
            if (unitExport.fechaCierreDocumental <= appDate){
              documentalValidation = true;
            }
            if (element.visitDummy !== null && element.visitDummy !== undefined){
              visitDummy = element.visitDummy;
            }
            if ((early || documentalValidation) && !visitDummy){
              bookingDateValidationList.push({early: early, documentalValidation: documentalValidation, unitNbr: element.unitNbr});
            } 
          }
        };
      }
      
      if (!isHazardBooking && this.listContainersWithHazards.length > 0){
        this.listContainersWithHazards.forEach(itemNbr =>{
          if (unitsImport.some(unit => unit.unitNbr === itemNbr)){
            isHazardBooking = true;
            return;
          }
        });
      }
      
      if (bookingDateValidationList.length > 0){
        if (this.matDialog.openDialogs.length === 0){
          const dialoReg = this.matDialog.open(CutoffDialogComponent, {
            width: "50rem",
            data: {
              bookingDateValidationList: bookingDateValidationList,
            }
          });
          const resultDialog = await dialoReg.afterClosed().toPromise();
          if (resultDialog){
            const body = {
              "pinNbr":  Array.from(new Set(this.pinNbr)).join(','),
              "appointmentDate": this.setAppointmentDate(),
              "driver": this.driver,
              "truck": this.placa,
              "unitsImport": unitsImport,
              "unitsExport": unitsExport,
              "unitsEro": [],
              "unitsEdo": [],
              "isHazard": isHazardBooking,
              "typeOfTransport": this.dataTypeTransporte.privado ? "private-transport" : "with-manifest"
            }
          
            const saveValidate = await firstValueFrom(this.utilServices.getSaveValidateAppointmentCC(body));
            
          
            if (saveValidate && saveValidate.error){
              this.errorValidation = true;
              this.enterSubmit = false;
              this.showButtonCrearCita = false;
              this.showMessage(saveValidate.error, "error");
              return;
            } 
          } else{
            this.errorValidation = true;
            this.enterSubmit = false;
            this.showButtonCrearCita = false;

          }
        }
      }else{
        const body = {
          "pinNbr":  Array.from(new Set(this.pinNbr)).join(','),
          "appointmentDate": this.setAppointmentDate(),
          "driver": this.driver,
          "truck": this.placa,
          "unitsImport": unitsImport,
          "unitsExport": unitsExport,
          "unitsEro": [],
          "unitsEdo": [],
          "isHazard": isHazardBooking,
          "typeOfTransport": this.dataTypeTransporte.privado ? "private-transport" : "with-manifest"
        }
      
       const saveValidate = await firstValueFrom(this.utilServices.getSaveValidateAppointmentCC(body));
      
        if (saveValidate && saveValidate.error){
          this.errorValidation = true;
          this.enterSubmit = false;
          this.showButtonCrearCita = false;
          this.showMessage(saveValidate.error, "error");
          return;
        } 
      }
    }
  }


  async submitCC(): Promise<void> {
    await this.allValidations();
   
    if (this.errorValidation && this.loadType === 'cc'){
      return;
    }

    if(this.loadType === 'cc'){
      let privateTransport = await this.evaluationPrivateTransport();
      
      if (!privateTransport){
        return;
      }
      
      
    
      let hasNotification = this.userInfo.privileges.filter(value => value.privilegeId === "CC_CIT_CRE")[0].notificable;
      
      if (this.type === 'Crear Cita'){
        let body  = this.processUnits(true);
        this.utilServices.getSaveAppointmentCC({data: body}).subscribe({
          next: (result) => {
            if (result){
                if (result.id){
                  if(hasNotification) {
                    this.store.dispatch(getPrivilegeNotification({
                      body: {
                        companyId: null,
                        mailsNotifications: null,
                        notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify(this.makeNotificationData(result, true))),
                        privilegeId: "CC_CIT_CRE"
                      }
                    }));
                  }
                  this.clickAppointment(result);
                }
                else if(result.error){
                  this.showMessage(result.error, "error");
                  this.enterSubmit = false;
                }
            }else{
              const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym13: shared.make.error.appointment`;
              this.showMessage(message, "error");
              this.enterSubmit = false;
            }
          },
          error: (error) => {
            const errorMessage = error.error.error;
            const navisExceptionIndex = errorMessage.indexOf('Navis exception:');
            if (navisExceptionIndex !== -1) {
              const mensajeCortado = errorMessage.substring(navisExceptionIndex + 'Navis exception:'.length).trim();
              // Muestra solo el mensaje cortado en el popup
              this.showMessage(mensajeCortado, "error");
            } else {
              // Si no existe "Navis exception:", muestra el mensaje completo o uno alternativo
              this.showMessage(error.error.error, "error");
            }
            this.enterSubmit = false;
          }
        });
      }else{
        hasNotification = this.userInfo.privileges.filter(value => value.privilegeId === "CC_CIT_EDI")[0].notificable;
       
        let combinedDate = new Date(this.appointmentDate);
        const appointmentDate = combinedDate.toISOString();

        const appointmentData: {
            "unitNbr": string,
            "orderNbr": string,
            "twenty": boolean,
            "equipmentType": string,
            "pinNbr": string,
            "transType":string,
            "line": string,
          }[] = [];
        let isHazardCC = this.infoAppointmentEditCC[0].isHazard;
        const typeOfTransport = this.dataTypeTransporte.privado ? "private-transport" : "with-manifest";
        
        const listContainersExist: string[] = [];
        const listContainersNew: string[] = [];
        let includImport = false;
        let includExport = false;
        this.infoAppointmentEditCC[0].containers.forEach ((item) => {
          if(!listContainersExist.includes(item.container)) listContainersExist.push(item.container);
        });
        this.dataSourceCC.data.forEach((item) => {
          if (!listContainersExist.includes(item.container) && !listContainersNew.includes(item.container)){
            listContainersNew.push(item.container);
            if (item.transation === 'EXPORT'){
              includExport = true;
              
            }
            if (item.transation === 'IMPORT'){
              includImport = true;
            }
            appointmentData.push({unitNbr: item.container, orderNbr: item.pinNbr ? item.pinNbr: "", twenty: item.size === 20 ? true : false, 
              equipmentType: item.equipmentType ? item.equipmentType: "", pinNbr: item.pinNbr ? item.pinNbr: "", transType: item.transType ? item.transType: "",
              line: item.line? item.line: ""
            });
          }
        });
        
        let body = {};
        let isHazard = this.infoAppointmentEditCC[0].containers.map(c => c.container).join(',') + (',');
        let hasIsHazard = this.infoAppointmentEditCC[0].isHazard;
        if (appointmentData.length > 0){
          if ((includImport && !includExport) || (includImport && includExport)){
            isHazard = hasIsHazard
          }
        }

        body = {
          "truckVisitNbr":  this.infoAppointmentEditCC[0].nbr,
          "driverCardId": this.driver.cardId,
          "license": this.placa,
          "appointmentData": appointmentData,
          "date": appointmentDate,
          "manifestNbr": this.dataTypeTransporte.values.length > 0  ? this.dataTypeTransporte.values.join(',') : "1",
          "cCACode": this.causalSelected,
          "rule": this.siteAppointment,
          "isHazard":isHazard,
          "typeOfTransport": "private-transport"
        }
        
        const listContainersAll: string[][] = [];
        listContainersAll.push(listContainersExist);
        listContainersAll.push(listContainersNew);
        this.utilServices.truckVisitAppointmentCCUpdate(body).subscribe({
          next: (result) => {
            if (result){
              if (result.id){
                if(hasNotification) {
                  this.store.dispatch(getPrivilegeNotification({
                    body: {
                      companyId: null,
                      mailsNotifications: null,
                      notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify(this.makeNotificationData(result, true, listContainersAll))),
                      privilegeId: "CC_CIT_EDI"
                    }
                  }));
                }
                this.clickAppointment(result);
              }
              else if(result.error){
                this.showMessage(result.error, "error");
                this.enterSubmit = false;
              }
            }else{
              const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym52: shared.make.error.edit.appointment.cc`;
              this.showMessage(message, "error");
              this.enterSubmit = false;
            }
          },
          error: (error) => {
            const errorMessage = error.error.error;
            if (errorMessage){
              const navisExceptionIndex = errorMessage.indexOf('Navis exception:');
              if (navisExceptionIndex !== -1) {
                const mensajeCortado = errorMessage.substring(navisExceptionIndex + 'Navis exception:'.length).trim();
                // Muestra solo el mensaje cortado en el popup
                this.showMessage(mensajeCortado, "error");
              } else {
                // Si no existe "Navis exception:", muestra el mensaje completo o uno alternativo
                this.showMessage(error.error.error, "error");
              }
            }else{
              const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym16: shared.make.non.unexpected.error`;
              this.showMessage(message, "error");
            }
            
            this.enterSubmit = false;
          }
        });
        
      }

    }
  }

  private processUnits(save: boolean = false): any{
    const unitsImport: {"unitNbr": string, "orderNbr": string, "twenty": boolean, "isDropOffExport": boolean}[] = [];
    const unitsExport:  {unitNbr: string, orderNbr: string, twenty: boolean, vesselVisitId: string, shipperId: string, fechaCierreDocumental: number, earlyArrival: number, line: string}[] = [];
      
    
   
    if(this.isContainersImport){
      const listUnitsImportsId = this.listContainers.filter((element) => element.type === 'Importación').map((element) => element.id);
      this.pinSearchContainerized.forEach((element) => {
          const retiro = element.type_pin === '1' ? true: false;
          element.pinContainerized.forEach((elementTwo) => {
            if (!listUnitsImportsId.includes(elementTwo.unitNbr)) return;
            const unitImport = {"unitNbr": "", "orderNbr": this.pinNbr[0], "twenty": false, "isDropOffExport": false};
            unitImport.unitNbr = elementTwo.unitNbr;
            unitImport.twenty = elementTwo.twenty;
            unitImport.isDropOffExport = retiro;
            //revisar si el unitImport no existe en unitsImport
            if (!unitsImport.some(item => item.unitNbr === unitImport.unitNbr)){
              unitsImport.push(unitImport);
            }
          });
      });
    }


    /* this.bookingSearchContainerized.forEach((element) => {
      const unitExport = {unitNbr: "", orderNbr: "", twenty: false, vesselVisitId: "", shipperId: "", fechaCierreDocumental: 0, earlyArrival: 0, line: ""};
      unitExport.unitNbr = element.unitNbr;
      unitExport.orderNbr = element.bookingNbr;
      unitExport.twenty = element.twenty;
      unitExport.vesselVisitId = element.vesselVisitId;
      unitExport.shipperId = element.shipperId;
      unitExport.fechaCierreDocumental = new Date(element.fechaCierreDocumental).getTime();
      unitExport.earlyArrival = new Date(element.earlyArrival).getTime();
      unitExport.line = element.line;
      //revisar si el unitExport no existe en unitsExport
      if (!unitsExport.some(item => item.unitNbr === unitExport.unitNbr)){
        unitsExport.push(unitExport);
      }
    }); */
    const bookingInfo: any = this.bookingSearchContainerized;
    
    let isHazardBooking = false;
    if (bookingInfo !== null && bookingInfo !== undefined && typeof bookingInfo === 'object' && bookingInfo !== null){
      const lisContainersId = this.listContainers.map((element) => element.id);
      for (let i = 0; i < bookingInfo.length; i++){
        const element = bookingInfo[i];
       
        if (lisContainersId.includes(element.unitNbr)){
          const unitExport = {unitNbr: "", orderNbr: "", twenty: false, vesselVisitId: "", shipperId: "", fechaCierreDocumental: 0, earlyArrival: 0, line: ""};
          unitExport.unitNbr = element.unitNbr;
          unitExport.orderNbr = element.bookingNbr;
          unitExport.twenty = element.twenty;
          unitExport.vesselVisitId = element.vesselVisitId;
          unitExport.shipperId = element.shipperId;
          unitExport.fechaCierreDocumental = new Date(element.fechaCierreDocumental).getTime();
          unitExport.earlyArrival = new Date(element.earlyArrival).getTime();
          unitExport.line = element.line;
          if (element.isHazard){
            isHazardBooking = true;
          }
          //revisar si el unitExport no existe en unitsExport
          if (!unitsExport.some(item => item.unitNbr === unitExport.unitNbr)){
            unitsExport.push(unitExport);
          }
        }
        
      }
      
    }

    if (!isHazardBooking && this.listContainersWithHazards.length > 0){
      this.listContainersWithHazards.forEach(itemNbr =>{
        if (unitsImport.some(unit => unit.unitNbr === itemNbr)){
          isHazardBooking = true;
          return;
        }
      });
    }
 
    let body = {}
    if (save){
      body = {
        "pinNbr":  0,
        "appointmentDate": this.setAppointmentDate(),
        "driver": this.driver,
        "truck": this.placa,
        "unitsImport": unitsImport,
        "unitsExport": unitsExport,
        "unitsEro": [],
        "unitsEdo": [],
        "isHazard": isHazardBooking,
        "typeOfTransport": this.dataTypeTransporte.privado ? "private-transport" : "with-manifest",
        "pinInfoList": this.pinInfoList,
        "manifestNbr": this.dataTypeTransporte.values.length > 0  ? this.dataTypeTransporte.values.join(',') : "1",
        "rule": this.siteAppointment
      }
    }else{
      body = {
        "pinNbr":  0,
        "appointmentDate": this.setAppointmentDate(),
        "driver": this.driver,
        "truck": this.placa,
        "unitsImport": unitsImport,
        "unitsExport": unitsExport,
        "unitsEro": [],
        "unitsEdo": [],
        "isHazard": isHazardBooking,
        "typeOfTransport": this.dataTypeTransporte.privado ? "private-transport" : "with-manifest"
      }
    }
    

    return body;
  }

  public hasPermission(privilegio: string): boolean {
    const userPrivileges: string[] = this.userInfo.privileges.map(value => value.privilegeId);
    let hasPermission: boolean = false;
    if(this.userInfo && this.userInfo.privileges) {
      if(userPrivileges.includes(privilegio)) {
        hasPermission = true;
      }
    }
    return hasPermission;
  }

  public desassociateContainer(element: IContainer){
    let hasNotification = this.userInfo.privileges.filter(value => value.privilegeId === "CC_CIT_ECO")[0].notificable;
    if (this.dataSourceCC && this.dataSourceCC.data && this.dataSourceCC.data.length === 1){
      this.deleteAppointment(element.number);
    }else{
      if (this.matDialog.openDialogs.length === 0){
        const dialoReg = this.matDialog.open(ConfirmDeleteContainerComponent, {
          width: "50rem",
          data: {
            loadType: this.loadType,
          }
        });
    
        dialoReg.afterClosed().subscribe(result => {
          if (result){
            if(this.loadType === 'cc'){
              this.utilServices.canceltruckVisitAppointmentCC(element.number, this.appointmentNbr).subscribe({
                next: (result) => {
                  if (result){
                    this.showMessage(result, "success");
                    this.cancel(false,true,element.number);
                    if(hasNotification) {
                      this.store.dispatch(getPrivilegeNotification({
                        body: {
                          companyId: null,
                          mailsNotifications: null,
                          notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify(this.makeNotificationData(result, true, [], element.container))),
                          privilegeId: "CC_CIT_ECO"
                        }
                      }));
                    }
                  }else{
                   
                  }
                },
                error: (error) => {
                  const errorMessage = error.error.error;
                  if (errorMessage){
                    const navisExceptionIndex = errorMessage.indexOf('Navis exception:');
                    if (navisExceptionIndex !== -1) {
                      const mensajeCortado = errorMessage.substring(navisExceptionIndex + 'Navis exception:'.length).trim();
                      // Muestra solo el mensaje cortado en el popup
                      this.showMessage(mensajeCortado, "error");
                    } else {
                      // Si no existe "Navis exception:", muestra el mensaje completo o uno alternativo
                      this.showMessage(error.error.error, "error");
                    }
                  }else{
                    const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym16: shared.make.non.unexpected.error`;
                    this.showMessage(message, "error");
                  }
                  
                  this.enterSubmit = false;
                }
            });
            }
              
          }
          else{}
        }); 
      } 
    }
    

    
    
  }

  
 private resetVariables(){
 
    this.recentHBL = "";
    this.notFoundText = "";
    this.privileges = privileges;
    this.loadType = "";
    this.firstLoad = { action: "", value: 0, operation: "", id: "", hbl: "", unds: 0, unitNbr: "", holdConsigneeActive: false, siteAppointment: "" };
    this.placa = "";
    this.type = "";
    //this.origin = "";
    this.listHbl = [];
    this.isHoldConsigneeActive = false;
    this.hblValues = [];
    this.hblResults = [];
    this.showMakeAppointment = true;
    this.showEditAppointment = false;
    this.hblList = [];
    this.showButtonCrearCita = false;
    this.showButtonEditarCita = false;
    this.driver = {cardId: '', name: '', license: '', "licenseExpiration": 0};
    this.driverCopy = {cardId: '', name: '', license: '', "licenseExpiration": 0};
    this.dataCita = {fechaSeleccionada: '', franjaHorariaSeleccionada: ''};
    this.dataTypeTransporte = {privado: false, values: []};
    this.pinNbr = [];
    this.cargoLots = [];
    this.pinInfoList = [];
    this.errorValidation = false;
    this.initialWeight = 0;
    this.showPlate = false;
    this.capacity =  "0.00";
    this.disponible = "0.00";
    this.capacityCopy =  "0.00";
    this.disponibleCopy = "0.00";
    this.soat = "";
    this.tecnomecanica = "";
    this.infoPin = false;
    this.setCleanValues = false;
    this.dataExistsInChild = false;
    this.isPlate = false;
    this.appointmentDate = "";
    this.appointmentNbr = "";
    this.causals = [];
    this.causalSearcherFormControl = new FormControl();
    this.causalSelected = "";
    this.causalSelectedDescription = "";
    this.infoAppointmentEdit = [];
    this.infoAppointmentEditCC = [];
    this.dataSource = new MatTableDataSource<CargoItem>([]);
    this.displayedColumns = [];
    this.peso = 0;
    this.manifestLists = [];
    this.enterSubmit = false;
    this.showManifestError = false;
    this.showManifestErrorText = "";
    this.titleContenerized = "";
    this.capacityContenerized = {
      capacityExport: 0, capacityImport: 0
    }
    this.listContainers  = [];
    this.isContainersImport = false;
    this.isContainersExport = false;
    this.containerList = '';
    this.unitsList = [];
    this.pinSearchContainerized = [];
    this.bookingSearchContainerized = [];
    this.isHazards = false;
    this.siteAppointment = null;
    this.isPermissionCreateAppointmentCS = false;
    this.isPermissionCreateAppointmentCC = false;
    this.isPermissionEditAppointmentCS = false;
    this.isPermissionEditAppointmentCC = false;
    this.isPermissionDeleteAppointmentCC = false;
    this.firstEdit = true;
    this.firstEditDisponibilityTruckByHistory = true;
    this.disponibilityOrigin = "0.00";
    this.firstSetDisponibilityTruck = true;
    this.listPin = [];
    this.dataSourceCC = new MatTableDataSource<IContainer>([]);
 }

 public deleteAppointment(numberAppointment: string = ""): void {
    this.store.dispatch(getCausalCancellationAppointment());
    this.openDialog(numberAppointment);
 }

 public openDialog(numberAppointment: string): void {
  if (this.matDialog.openDialogs.length === 0){
    const dialogRef = this.matDialog.open(CausalCancellationDialogComponent, {
      width: '750px',
      data: { 
        loadType: this.loadType,
        origen: this.origin,
      },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      
      if (result && result.response){
        let hasNotification = this.userInfo.privileges.filter(value => value.privilegeId === "CC_CIT_ELI")[0].notificable;
        let containers: string [] = [];
        
        if (this.dataSourceCC.data.length > 0){
          this.dataSourceCC.data.forEach((itemCont) => {
            containers.push(itemCont.container)
          });
        } 
        
        this.store.dispatch(getCancelAppointment({body: {driver: {cardId: this.driver.cardId, name: this.driver.name, license: this.driver.license}, 
          appointmentsNbr: numberAppointment}, parameters: {tvaNbr:  this.base64EncryptionUtilService.encrypt((this.appointmentNbr)), 
          causalCanAppointment: result.response, causalCanDescription: "undefined", cargaContenerizada: true, hasNotification: hasNotification,
          userId: this.userInfo.empresa?.id ? this.userInfo.empresa?.id : "", createdByLDAP:  this.userInfo.userName, fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, appointmentDate: this.appointmentDate,
          createdByCompanyNameLDAP: this.userInfo.empresa?.companyName ? this.userInfo.empresa?.companyName: "",
          truckVisitNbr: this.appointmentNbr,
          truck: this.placa, 
          containers: containers,
          siteAppointment: this.siteAppointment ? this.siteAppointment: "", hbl: {}}}));
          this.store.dispatch(cleanValidationPin());
          this.store.dispatch(cleanItemCheckeados());
          this.storageService.cleanPlaca();
          this.store.dispatch(cleanDriver());
          this.storageService.cleanValues();
          this.storageService.cleanAll();
          this.storageService.continueOperation();
          this.driver = {cardId: '', name: '', license: '', licenseExpiration: 0};
          this.driverCopy = {cardId: '', name: '', license: '', licenseExpiration: 0};
          this.placa = "";
          this.placa = '';
          this.soat = '';
          this.tecnomecanica = '';
          this.listContainers  = [];
          this.isContainersImport = false;
          this.isContainersExport = false;
          this.containerList = '';
          this.unitsList = [];
          this.pinSearchContainerized = [];
          this.bookingSearchContainerized = [];
          this.isHazards = false;
          this.siteAppointment = null;
          this.listContainersWithHazards = [];
          if (this.origin !== 'history'){
            this.router.navigate(['carga-contenerizada'], {});
          }
          else if(this.origin === 'history'){
            this.router.navigate(['historial']);
          }
        }

      
    });
  }
  
}
  
 
  ngOnDestroy(): void {
   
    this.type = "";
    if (this.storageSubscription) {
      this.storageSubscription.unsubscribe();
    }
    //this.resetVariables();
    this.destroy$.next();
    this.destroy$.complete();
  
  }
}
