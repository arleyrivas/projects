import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, Subscription, take, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { IGrantGroupDetachedLoad, IGroupDetachedLoad } from 'src/app/core/interfaces/group-detached-load.interface';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { StorageserviceService } from '../../services/storageservice.service';
import { UtilService } from '../../services/util.service';
import { IDocumentationTruck } from "src/app/core/interfaces/documentation-truck.interface";
import { ICapacityTruck } from 'src/app/core/interfaces/capacity-truck.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { IItemCheckeados } from 'src/app/core/interfaces/item-checkeados.interface';
import { cleanAgent, cleanDriver, cleanEmptyEro, cleanHazardsByBooking, cleanTruck, cleanValidateEro, cleanValidationBookingID, cleanValidationBookingSearchContainerized, cleanValidationPin, cleanValidationPinContainerized, cleanValidationPinIndividual } from 'src/app/state/shared/shared.actions';
import { IGroupContainerizedLoad } from 'src/app/core/interfaces/group-contanerized-load.interface';
import { IContainerizedLoad } from 'src/app/core/interfaces/containerized-load.interface';
import { cleanVesselVisit } from 'src/app/state/containerized-load/containerized-load.actions';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';


@Component({
  selector: 'app-vehicle-searcher',
  templateUrl: './vehicle-searcher.component.html',
  styleUrls: ['./vehicle-searcher.component.css']
})
export class VehicleSearcherComponent implements OnInit, OnDestroy {
  public capacity =  "0.00";
  public disponible = "0.00";
  public capacityCopy =  "0.00";
  public disponibleCopy = "0.00";
  public soat = "";
  public tecnomecanica = "";
  public infoPin = false;
  public dataPin:IGroupDetachedLoad [] = [];
  public dataPinContainerized:IGroupContainerizedLoad [] = [];
  public dataBookingASC: IContainerizedLoad[] = [];
  public setCleanValues = false;
  @Input("loadType") public loadType: string = "";
  @Input("origin") public origin: string = "";
  public userInfo!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>();
  private storageSubscription!: Subscription;
  dataExistsInChild: boolean = false;
  listaPinesEliminados: string[] = [];  
  itemCheckeados: IItemCheckeados[] = [];
  isPlate: boolean = false;
  showPlate: boolean = false;
  isViewEditAppointment: boolean = false;
  placa = "";
  pinNbr: string[] = [];
  pinNbrInvisible: {"pinNbr": string, invisible: boolean}[] = [];
  private storeSubscription: Subscription | null = null; 
  private previousTruckId: string | null = null;
  public isPlateValid: boolean = false; 
  private isCalled: boolean = false;
  private typeTransport = false;
  public placeHolderPinSearcher = "Ingrese PIN, booking o Número de orden";
  private setIsEditInMakeAppointment = false;
  private isFirstEditAppointment = true;
  private isCalledCreateAppointment = false;
  private listPintsDeleted: string[] = [];
  private plateDeleted: string = "";
  private isCalledCreateAppointmentCC = false;
  
   
  constructor(private readonly store: Store, private storageService:StorageserviceService, 
     private utilService: UtilService,  private readonly matSnackBar: MatSnackBar,
     private readonly matDialog: MatDialog,private cdr: ChangeDetectorRef,
     private readonly aesEncryptionUtilService: AESEncryptionUtilService,){
    
  }

  ngOnInit(): void {
    
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    
    if (this.loadType === "asc"){
      this.placeHolderPinSearcher = "Ingrese Booking o Número de orden";
    }
    this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
     
      this.evaluationSubscriptions(action);
      
    });
    this.showPlate = true;
    
    
    
    
  }

  public evaluationSubscriptions(action: any){
    
    if(action.action === 'cleanValidationPin'){
        if (this.isViewEditAppointment){
          if (this.dataPin.length > 0){
            this.dataPin.forEach((group) => {
              group.data.forEach((element) => {
                if (element.pinParaEliminar){
                  //comprobar que no este en la lista de pines invisibles
                  //const index = this.pinNbrInvisible.findIndex(item => item.pinNbr === element.pinParaEliminar);
                  //if (index === -1){
                    //this.store.dispatch(cleanValidationPinIndividual({pin: element.pinParaEliminar}));
                    //this.pinNbrInvisible.push({pinNbr: element.pinParaEliminar, invisible: true});
                  //}else{
                    //this.pinNbrInvisible[index].invisible = true;
                  //}
                  
                };
              });
            });
          }
        }
        
        this.loadData();
       
        if(this.capacity !== "0.00"){
          this.capacity = this.capacityCopy;
          this.disponible = this.disponibleCopy;
        
          
          this.storageService.setCapacityTruckDos(this.capacity);
         
          this.storageService.setDisponibilityTruck(this.disponible, this.origin);
        }
       
        this.store.dispatch(cleanValidationBookingID());
        this.store.dispatch(cleanHazardsByBooking());
        this.store.dispatch(cleanEmptyEro());
        this.store.dispatch(cleanValidateEro());
        this.store.dispatch(cleanVesselVisit());
        this.store.dispatch(cleanAgent());
        if (!this.isViewEditAppointment){
          this.listPintsDeleted = [];
          this.pinNbr = [];
        
          this.store.dispatch(cleanDriver());
        }
    }
    if (action.action === 'cleanValidationPinIndividual'){
        if (action.key){
          if (this.isViewEditAppointment) {
            this.setPinInvisible(action.key);
          }else{
            this.listPintsDeleted = this.listPintsDeleted.filter(element => element !== action.key);
            this.pinNbr = this.pinNbr.filter(element => element !== action.key);
          }
          this.loadData(action.key);
        }
    }
    if(action.action === 'setCantidadCarga'){
        if (!this.isViewEditAppointment){
          this.plateDeleted = this.placa;
          this.isCalledCreateAppointment = false;
        }
        if (action.operation === "substract"){
          
          if(!this.isViewEditAppointment){
            this.showPlate = true;
          }
         
          this.disponible = (parseFloat(this.disponible) + action.value).toFixed(2);
          this.storageService.setDisponibilityTruck(this.disponible, this.origin);
        } else if (action.operation === "add"){
          //evaluar si al restar la cantidad de carga es menor a 0
         
          const resta = parseFloat(this.disponible) - action.value;
          
          if (resta >= 0){
            this.disponible = (parseFloat(this.disponible) - action.value).toFixed(2);
            this.storageService.setDisponibilityTruck(this.disponible, this.origin);
          }
          else{
            //this.storageService.setPlacaValida(false);
            this.storageService.setCheckedMatCheckbox(false, action.id);
            this.matSnackBar.open(
              "No es posible agregar este item, la cantidad de carga supera la disponibilidad del vehículo",
              "",
              {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              }
            );
          }
        }
        
    }
    if (action.action === 'cleanValues'){
      
      this.tecnomecanica = "";
      this.soat = "";
      this.capacity = "0.00";
      this.disponible = "0.00";
      this.capacityCopy = this.capacity;
      this.disponibleCopy = this.disponible;
      this.setCleanValues = true;
      this.showPlate = true;
      this.isViewEditAppointment = false;
      this.storageService.setCapacityTruckDos(this.capacity);
     
      this.storageService.setDisponibilityTruck(this.disponible, this.origin);
    }
    if (action.action === 'viewEditAppointment'){
      this.isCalledCreateAppointment = false;
      this.showPlate = false;
      this.setIsEditInMakeAppointment = true;
      this.storageService.cleanAll();
      this.isCalled = true;
      //this.store.dispatch(cleanValidationPin());
      this.isViewEditAppointment = true;
    
      
      this.pinNbr = [];
      //poner invisible las propiedades de los pines
      if (this.dataPin.length > 0){
        
        this.dataPin.forEach((group, groupIndex) => {
          const filteredData = group.data.filter((element) => {
            if (element.pinParaEliminar) {
              // Comprobar que no esté en la lista de pines invisibles
              const index = this.pinNbrInvisible.findIndex(item => item.pinNbr === element.pinParaEliminar);
              if (index === -1) {
                if (this.listaPinesEliminados.indexOf(element.pinParaEliminar) === -1){
                  this.listaPinesEliminados.push(element.pinParaEliminar);
                }
                if (this.listPintsDeleted.indexOf(element.pinParaEliminar) === -1){
                  this.listPintsDeleted.push(element.pinParaEliminar);
                }
              }
              // Devolver false para eliminar el elemento
              return false;
            }
            // Devolver true para mantener el elemento
            return true;
          });
        // Actualizar el array de 'data' dentro del grupo
          this.dataPin[groupIndex].data = [...filteredData];
        });
      }
      if (this.listaPinesEliminados.length > 0){
        this.listaPinesEliminados.forEach((pin) => {
          this.store.dispatch(cleanValidationPinIndividual({pin: pin}));
        });
      }
      if (this.placa !== ""){
        this.plateDeleted = this.placa;
        this.store.dispatch(cleanTruck());
      }
    }
  
    
    if (action.action === 'viewCreateAppointment' && this.loadType === "cs" && !this.isCalledCreateAppointment){
      this.showPlate = true;
      this.isViewEditAppointment = false;
      this.isCalled = true;
     
      if (this.plateDeleted !== "") {
        
        this.store.dispatch(cleanTruck());
        this.placa = this.plateDeleted;
        this.plateDeleted = "";
      }
      
      if (this.listPintsDeleted.length > 0){
        this.listPintsDeleted.forEach((pin) => {
          if(this.pinNbr.indexOf(pin) === -1){
           
            this.pinNbr.push(pin);
          }
        });
      }
      this.isCalledCreateAppointment = true;
     
      this.cdr.detectChanges();
    }

    if (action.action === 'setPin'){
      if (this.dataPin.length > 0){
        this.dataPin.map((group) => group.data.map((element) => {
          if(action.value === element.pinParaEliminar){
            //si esta en la lista de pines invisibles y tiene invisible en true se cambia a false
           // this.pinNbrInvisible.map((item) => {
           //   if (item.pinNbr === action.value && item.invisible){
           //     item.invisible = false;
             // }
           // });       
          }
        }
        ));
      }
    }
    
    if (action.action === 'setDataPin' && this.origin === "history"){
      this.store.select(sharedFeatureSelector).pipe(
        take(1)
      ).subscribe({
        next: (result: ISharedStore) => {
          this.fillDataPin(undefined, result);
        }});
    }
    
    if(action.action === 'setResetItemCheckeados' && this.origin !== 'history' && !this.isViewEditAppointment && !this.setIsEditInMakeAppointment){
      this.capacity = this.capacityCopy;
      
    
      this.disponible = this.disponibleCopy;
    }

    if(action.action === 'continueOperation'){
      this.placa = "";
      //this.pinNbrInvisible = [];
      this.pinNbr = [];
      this.dataPin = [];
      this.capacity = "0.00";
      this.disponible = "0.00";
      this.store.dispatch(cleanValidationPin());
      this.store.dispatch(cleanTruck());
      this.isCalled = true;
    }

    if(action.action === 'setContanerized' && action.value){
     this.loadData();

    }
    if (action.action === 'setPrivateTransport'){
      this.typeTransport = action.value;
      this.isCalled = true;
    }

    if (action.action === 'setBooking'){
      this.loadData();
    }

    if ((action.action === 'setDisponibilityTruckByHistory' && this.origin === "history") || (action.action === 'setDisponibilityTruckByHistory' && this.isViewEditAppointment)){
     
      this.disponible = action.value;
     
      if(this.isFirstEditAppointment){
        this.disponibleCopy = this.disponible;
        this.isFirstEditAppointment = false;
      }
      
      
    }

    if (action.action === 'setIsEditInMakeAppointment'){
      this.setIsEditInMakeAppointment = true;
      this.isCalledCreateAppointmentCC = false;
      this.isCalledCreateAppointment = false;
    }

    if (action.action === 'setPlacaValida'){
      if (this.isViewEditAppointment){
        this.isFirstEditAppointment = true;
        
      }
    }

    if (action.action === 'appointmentWasCreated' && this.loadType === "cc" && !this.isCalledCreateAppointmentCC){
    
     
      if (this.listPintsDeleted.length > 0){
        
        this.listPintsDeleted.forEach((pin) => {
          if(this.pinNbr.indexOf(pin) === -1){
           
            this.pinNbr.push(pin);
          }
        });
      }
     
      this.isCalledCreateAppointmentCC = true;
      this.isViewEditAppointment = false;
      this.cdr.detectChanges();
      
    }

    if (action.action === 'viewEditAppointmentCC'){
      this.isCalledCreateAppointment = false;
      this.showPlate = false;
      this.setIsEditInMakeAppointment = true;
      this.storageService.cleanAll();
      this.isCalled = true;
      this.isViewEditAppointment = true;
  
      this.pinNbr = [];
     
      if (this.dataPinContainerized.length > 0){
        
        this.dataPinContainerized.forEach((group, groupIndex) => {
          const filteredData = group.data.filter((element) => {
            if (element.pinParaEliminar) {
              // Comprobar que no esté en la lista de pines invisibles
              const index = this.pinNbrInvisible.findIndex(item => item.pinNbr === element.pinParaEliminar);
              if (index === -1) {
                if (this.listaPinesEliminados.indexOf(element.pinParaEliminar) === -1){
                  this.listaPinesEliminados.push(element.pinParaEliminar);
                }
                if (this.listPintsDeleted.indexOf(element.pinParaEliminar) === -1){
                  this.listPintsDeleted.push(element.pinParaEliminar);
                }
              }
              // Devolver false para eliminar el elemento
              return false;
            }
            // Devolver true para mantener el elemento
            return true;
          });
        // Actualizar el array de 'data' dentro del grupo
          this.dataPinContainerized[groupIndex].data = [...filteredData];
        }); 
      }
      if (this.listaPinesEliminados.length > 0){
       
        this.store.dispatch(cleanValidationPinContainerized());
        this.store.dispatch(cleanValidationBookingSearchContainerized());
      }
    }

    if (action.action === 'setContenedorType'){
      if (!this.isViewEditAppointment){
        this.isCalledCreateAppointmentCC = false;
      }
    }

    if (action.action === 'cleanMakeAppointment'){
      
      this.soat = "";
      this.tecnomecanica = "";
    }
   

    
    const storageData = this.storageService.getData();
    if (storageData){
      if (storageData.origen === 'history'){
        this.showPlate = false;
        
      }
    }
  }

  public loadData(pinAEliminar: string = ""){
  
    if (this.loadType === "cs"){
      if (this.storeSubscription) {
        this.storeSubscription.unsubscribe();
      }
      let capacitySubscription: Subscription;
      let documentationSubscription: Subscription;
      this.storeSubscription = this.store.select(sharedFeatureSelector).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result: ISharedStore) => {
          this.fillDataPin(pinAEliminar, result);
          
          if(result.truck){
            
            if ((result.truck.id !== this.previousTruckId) || (this.isCalled)){
              
              this.placa = result.truck.id;
              this.isCalled = false;
              
              // Cancelar la suscripción anterior si existe
              if (documentationSubscription) {
                documentationSubscription.unsubscribe();
              }

              documentationSubscription = this.utilService.getDocumentationTruck(result.truck.id).subscribe({
                next: (documentacion: IDocumentationTruck[]) =>{
                  //console.log("documentacion =>", documentacion);
                  if (documentacion && documentacion.length > 0){
                    this.tecnomecanica = documentacion[0].data;
                    this.soat = documentacion[1].data;
                    this.storageService.setTecnomecanica(this.tecnomecanica);
                   
                    this.storageService.setSoat(this.soat);
                    this.isPlateValid = false;
                  } else{
                    
                    this.storageService.setPlacaValida(true, result.truck?.license  || "");
                    this.storageService.setTecnomecanica("");
                    this.storageService.setSoat("");
                    this.soat = "";
                    this.tecnomecanica = "";
                    this.isPlateValid = true;
                  }
                },
                error : (error) => {
                  console.error(error)
                }
              }

              );

              // Cancelar la suscripción anterior si existe
              if (capacitySubscription) {
                capacitySubscription.unsubscribe();
              }

              //revisar este punto, despues de dar cancelar en editar cita cs y habiendo cambiado placa
              capacitySubscription = this.utilService.getCapacityTruck(result.truck.id).subscribe({
                next: (resultCapacity: string) =>{
                  const capacity: ICapacityTruck[] = JSON.parse(this.aesEncryptionUtilService.decrypt(resultCapacity));
                  const capacityFloat =  parseFloat(capacity[0].vehcapacidad);
                  
                 /*  if (this.isViewEditAppointment){
                    if(this.capacity === "0.00"){
                      this.storageService.setCapacityTruckDos(capacityFloat.toFixed(2));
                      console.log("this.disponible =>", this.disponible);
                      this.storageService.setDisponibilityTruck(capacityFloat.toFixed(2), this.origin);
                    }else{
                      this.storageService.setCapacityTruckDos(this.capacity);
                      console.log("this.disponible =>", this.disponible);
                      this.storageService.setDisponibilityTruck(this.disponible, this.origin);
                    }
                  } */
                  if((this.capacity === "0.00" && !this.setCleanValues && this.origin !== 'history' && !this.isViewEditAppointment) || 
                      (!this.setCleanValues && this.origin !== 'history' && !this.isViewEditAppointment && result.truck && result.truck.id !== this.previousTruckId)){
                    this.capacity = capacityFloat.toFixed(2);
                    
                    
                    this.disponible = this.capacity;
                    
                    this.capacityCopy = this.capacity;
                    this.disponibleCopy = this.disponible;
                    this.storageService.setCapacityTruck(capacityFloat); 
                  }
                  
                },
                error : (error) => {
                  console.error(error)
                }
              });
            }
            this.previousTruckId = result.truck.id;
            
           
           
          }else{
            this.capacity = "0.00";
            this.disponible = "0.00";
            this.storageService.setCapacityTruckDos(this.capacity);
            
            this.storageService.setDisponibilityTruck(this.disponible, this.origin);
          }
          this.cdr.detectChanges();
          
          
         
        },
        error: error => console.error(error)
      });

    }
    else if (this.loadType === "cc"){
      if (this.storeSubscription) {
        this.storeSubscription.unsubscribe();
      }  
      this.storeSubscription = this.store.select(sharedFeatureSelector).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result: ISharedStore) => {
          if (result.groupValidationPinContainerized && result.groupValidationPinContainerized.length > 0){
            this.dataPinContainerized = [];
            let existePinAEliminar = false;
           
            result.groupValidationPinContainerized.forEach(firstData => {
              firstData.data.forEach(secondData => {
                
                this.infoPin = true;
                secondData.data.forEach(infoPin =>{
                  
                  if (infoPin.pinParaEliminar && this.listPintsDeleted.indexOf(infoPin.pinParaEliminar) === -1 && !this.isViewEditAppointment){
                    this.listPintsDeleted.push(infoPin.pinParaEliminar);
                  }
                  if (pinAEliminar !== "" && pinAEliminar === infoPin.pinParaEliminar){
                    existePinAEliminar = true;
                  }
                  if (pinAEliminar !== "" && pinAEliminar === infoPin.pinParaEliminar && this.listaPinesEliminados.indexOf(infoPin.pinParaEliminar) === -1){
                  } else{
                    infoPin.invisible = false;
                    if (infoPin.pinParaEliminar){
                      const index = this.listaPinesEliminados.indexOf(infoPin.pinParaEliminar);
                      if (index > -1){
                        this.listaPinesEliminados.splice(index, 1);
                      }
                    }
                  }
                });
                const exists = this.dataPinContainerized.some(item => item.data === secondData.data);
                if (!exists) {
                  this.dataPinContainerized.push(secondData);
                }
                
               });
            });
          }

          if(result.truck){
            
            if ((result.truck.id !== this.previousTruckId) || (this.isCalled)){
              this.previousTruckId = result.truck.id;
              this.placa = result.truck.id;
              this.isCalled = false;
              const messageTypeTransport = this.typeTransport ? "private-transport" : "with-manifest";
              //this.utilService.getDocumentationTruck(result.truck.id, messageTypeTransport)
              this.utilService.getDocumentationTruck(result.truck.id).subscribe({
                next: (documentacion: IDocumentationTruck[]) =>{
                  
                  if (documentacion && documentacion.length > 0){
                    this.tecnomecanica = documentacion[0].data;
                    this.storageService.setTecnomecanica(this.tecnomecanica);
                    if (documentacion.length > 1){
                      this.soat = documentacion[1].data;
                      this.storageService.setSoat(this.soat);
                    }
                    this.isPlateValid = false;
                  } else{
                    
                    this.storageService.setPlacaValida(true, result.truck?.license  || "");
                    this.storageService.setTecnomecanica("");
                    this.storageService.setSoat("");
                    this.isPlateValid = true;
                  }
                },
                error : (error) => {
                  console.error(error)
                }
              }

              )
            }
          }
        }});
    }
    else if (this.loadType === "asc"){
      
      this.storeSubscription = this.store.select(sharedFeatureSelector).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result: ISharedStore) => {
          if (result && result.bookingID){
            this.dataBookingASC = result.bookingID;
            
           
          }
        }
      });
    }
    
  }

  
  public submit(event:any){
    this.infoPin = true;
  }

  onDataStatusChanged({status, message}: {status: boolean, message: string}) {
    this.dataExistsInChild = status;
    if (!this.dataExistsInChild){
      this.tecnomecanica = "";
      this.soat = "";
      this.capacity = "0.00";
      this.disponible = "0.00";
      this.storageService.setPlaca("false");
      this.storageService.setCapacityTruckDos(this.capacity);
      this.storageService.setDisponibilityTruck(this.disponible, this.origin);
      this.isCalled = true;
      this.isPlate = false;
    }
    if (message === "vacio"){
      this.storageService.cleanPlaca();
      this.storageService.cleanAll();
      this.storageService.setPlaca("false");
      this.isPlate = false;
      this.storageService.setCapacityTruckDos(this.capacity);
      this.storageService.setDisponibilityTruck(this.disponible, this.origin);
      this.isCalled = true;
      this.isPlateValid = false;
      
      
    }
    if (message === "true"){
      this.setCleanValues = false;
      this.isPlate = true;
      this.storageService.setPlaca("true");

    }
  }

  trackByFn(index: number, item: any): any {
    return item.data[0].pinParaEliminar; // O la propiedad que identifique de manera única el item
  }

  setPinInvisible(pinNbr: string = ""){
    let isDeleted = false;
    if (this.dataPin.length > 0){
        
      this.dataPin.forEach((group, groupIndex) => {
        if(group && group.data){
          const filteredData = group.data.filter((element) => {
            if (element.pinParaEliminar && element.pinParaEliminar === pinNbr) {
              isDeleted = true;
              return false;
            }
            // Devolver true para mantener el elemento
            return true;
          });
        }
        
      });
    }
    if (isDeleted) {
      if (this.listaPinesEliminados.indexOf(pinNbr) === -1){
        this.listaPinesEliminados.push(pinNbr);
      }
      if (this.listPintsDeleted.indexOf(pinNbr) === -1){
        this.listPintsDeleted.push(pinNbr);
      }
      this.store.dispatch(cleanValidationPinIndividual({pin: pinNbr}));
    }
  }

  private fillDataPin(pinAEliminar: string = "", result: ISharedStore){
    if (result.groupValidationPin && result.groupValidationPin.length > 0){
      this.dataPin = [];
      let existePinAEliminar = false;
     
      result.groupValidationPin.forEach(firstData => {
         firstData.data.forEach(secondData => {
          this.infoPin = true;
          secondData.data.forEach(infoPin =>{
            
            if (infoPin.pinParaEliminar && this.listPintsDeleted.indexOf(infoPin.pinParaEliminar) === -1 && !this.isViewEditAppointment){
              this.listPintsDeleted.push(infoPin.pinParaEliminar);
             
            }
            if (pinAEliminar !== "" && pinAEliminar === infoPin.pinParaEliminar){
              existePinAEliminar = true;
            }
            if (pinAEliminar !== "" && pinAEliminar === infoPin.pinParaEliminar && this.listaPinesEliminados.indexOf(infoPin.pinParaEliminar) === -1){
            } else{
              infoPin.invisible = false;
              if (infoPin.pinParaEliminar){
                const index = this.listaPinesEliminados.indexOf(infoPin.pinParaEliminar);
                if (index > -1){
                  this.listaPinesEliminados.splice(index, 1);
                }
              }
            } 
          });
          const exists = this.dataPin.some(item => item.data === secondData.data);
          if (!exists) {
            if(this.pinNbrInvisible.length > 0 && secondData.data[0].pinParaEliminar && this.pinNbrInvisible.findIndex(item => item.pinNbr === secondData.data[0].pinParaEliminar) !== -1 
               && this.pinNbrInvisible.find(item => item.pinNbr === secondData.data[0].pinParaEliminar)?.invisible){
                secondData.data.map((element) => element.invisible = true);
            }
            else if(this.pinNbrInvisible.length > 0 && secondData.data[0].pinParaEliminar && this.pinNbrInvisible.findIndex(item => item.pinNbr === secondData.data[0].pinParaEliminar) !== -1 
            && !this.pinNbrInvisible.find(item => item.pinNbr === secondData.data[0].pinParaEliminar)?.invisible){
              secondData.data.map((element) => element.invisible = false);
            }
            this.dataPin.push(secondData);
          }
         });
        
      });
      if (result.itemCheckeados){
        this.itemCheckeados = result.itemCheckeados;
        if (pinAEliminar !== ""){
          if (!existePinAEliminar){
            //encontrar el pin a eliminar en itemCheckeados
            const index = result.itemCheckeados.findIndex(item => item.pin === pinAEliminar);
            if (index > -1){
              //sustraer la informacion del pin a eliminar
              const item = result.itemCheckeados[index];
             
              //recorrer los cargoweigth de los itemsCheckeados y sumar a la cantidad de carga disponible
              Object.values(item.cargoWeigth).map(dataCargoWeigth => {
                const dataId = Object.keys(item.cargoWeigth).find(key => item.cargoWeigth[key] === dataCargoWeigth);
               
               
                const clave = Object.keys(item.data).find(key => key === dataId);
               
                const valueCheckeado = clave ? item.data[clave] : undefined;
               
                if (dataId && valueCheckeado){
                  this.storageService.setCantidadCarga(dataCargoWeigth, "substract", dataId, item.hbl, item.unds, item.unitSequence, item.placa, item.unitNbr);
                }
              });
              //eliminar el itemCheckeado
              result.itemCheckeados.splice(index, 1);
              
            }
          }
        }
      }
     
    } 
    
  }

  
  
  

  ngOnDestroy() {
    if (this.storageSubscription) {
      this.storageSubscription.unsubscribe();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }

  



  



  
  

 
}
