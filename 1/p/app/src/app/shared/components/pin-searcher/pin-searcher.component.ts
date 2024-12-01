import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { mergeMap, of, Subject, Subscription, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { cleanDisponibilidadCitas, cleanDriver, cleanValidationPin, cleanValidationPinIndividual, getAgent, getAgentRepresentation, getCustomer, getEmptyEro, getHazardsByBooking, getPin, getValidateEro, getValidationPin, getValidationPinContainerized, setValidationBookingID, setValidationBookingSearchContainerized, setValidationPin, setValidationPinContainerized, setValidationPinSearchContainerized } from 'src/app/state/shared/shared.actions';
import { UtilService } from '../../services/util.service';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { IPin } from 'src/app/core/interfaces/pin.interface';
import { IPinDetalle } from 'src/app/core/interfaces/pin-detalle.interface';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { StorageserviceService } from '../../services/storageservice.service';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { cleanAppointmentData } from 'src/app/state/detached-load/detached-load.actions';
import { act } from '@ngrx/effects';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IBookingSearch, IContainerizedLoad } from 'src/app/core/interfaces/containerized-load.interface';
import { getVesselVisit } from 'src/app/state/containerized-load/containerized-load.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pin-searcher',
  templateUrl: './pin-searcher.component.html',
  styleUrls: ['./pin-searcher.component.css']
})
export class PinSearcherComponent implements OnInit, OnDestroy, OnChanges {
  public pinSearcherControl: FormControl = new FormControl();
  @Input() public indication: string = "(Introduce un valor y presione enter)";
  @Input() public hasCleanButton: boolean = false;
  @Input() public hasSearchButton: boolean = true;
  @Input() public inputPlaceholder: string = "Buscar por un valor";
  @Input() public regex!: RegExp;
  @Input() public isPlate: boolean = false;
  @Input() initialInputValue: string[] = [];
  @Output() public submitSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() public cleanEmmiter: EventEmitter<void> = new EventEmitter<void>();
  @Output() public cleanFormControlEmmiter: EventEmitter<() => void> = new EventEmitter<() => void>();
  obtuvoDatos = true;
  public userInfo!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>();
  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef;
  values: string[] = [];
  private storageSubscription!: Subscription;
  public isInputDisabled = false;
  private storeSubscription: Subscription | null = null;   
  isViewEditAppointment = false;
  @Input("loadType") public loadType: string = "";
  private nitAgent: string = "";
  private nitCustomer: string = "";
  public inputValueASC: string = "";
  private pinsConsulted: string[] = [];
  private isCalledCreateAppointment = false;
  private isCalledappointmentWasCreated = false;


  constructor(private readonly store: Store, private utilService: UtilService, private storageService:StorageserviceService,
    private cdr: ChangeDetectorRef,  private readonly aesEncryptionUtilService: AESEncryptionUtilService, 
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly matSnackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    if (this.storageSubscription) {
      this.storageSubscription.unsubscribe();
    }
    this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
    
      if (action.action === 'cleanValidationPin'){
        this.cleanValues();
      }
      if (action.action === 'setPlaca'){
        if (action.placa === "true"){
          this.isInputDisabled = false;
        }
        else{
          if(this.loadType === 'cs'){
            this.isInputDisabled = true;
          }
        }
      }
      if (action.action === 'cleanPlaca' && !this.isViewEditAppointment){
        this.cleanValues();
        if (this.loadType === 'cs'){
          this.isInputDisabled = true;
        }else if (this.loadType === 'cc'){
          this.isCalledappointmentWasCreated = false;
        }
      }
      
      if (action.action === 'appointmentWasCreated'){
        if(this.loadType === 'cs'){
          this.isInputDisabled = true;
        }
       
        else if (this.loadType === 'cc'  && !this.isCalledappointmentWasCreated){
         
          this.values = [];
         
          this.initialInputValue.forEach((element) => {
            
            if (this.pinsConsulted.indexOf(element) === -1){
              this.processInputValue(element);
              this.pinsConsulted.push(element);
            }
          });
          
          this.isCalledappointmentWasCreated = true;
        }
      }

      if (action.action === 'viewEditAppointment'){
        this.cleanValues();
        this.isViewEditAppointment = true;
        this.isCalledCreateAppointment = false;
        this.isCalledappointmentWasCreated = false;
        if (this.storeSubscription) {
          this.storeSubscription.unsubscribe();
        }
      }
      
      if (action.action === 'viewCreateAppointment' && !this.isCalledCreateAppointment){


        this.values = [];
        this.isViewEditAppointment = false;
        this.initialInputValue.forEach((element) => {
          if (this.pinsConsulted.indexOf(element) === -1){
            this.processInputValue(element);
            this.pinsConsulted.push(element);
          }
        });
        this.isCalledCreateAppointment = true;
        /* this.storeSubscription = this.store.select(sharedFeatureSelector).pipe(
          takeUntil(this.destroy$)
        ).subscribe({
          next: (result: ISharedStore) => {
            if (result.groupValidationPin && result.groupValidationPin.length > 0 && action.action === 'viewCreateAppointment'){
              const pinN = result.groupValidationPin.map((group) => group.data.map((element) => element.data.map((element) => element.pinParaEliminar))).join(',');
              const pinNbr = Array.from(new Set(pinN.split(',').filter((element) => {
                return element !== "";
              })));
              if(pinNbr.length > 0){
                pinNbr.forEach((element) => {
                  if(this.initialInputValue.indexOf(element) !== -1){
                    this.processInputValue(element);
                  }
                });
              }
            }
          }}); */
        
      }

      if (action.action === 'cleanAssociateContainerForm'){
        this.loadData();
      }
      if (action.action === 'deleteContainer'){
        this.loadData();
      }
      if (action.action === 'viewEditAppointmentCC'){
        this.cleanValues();
        this.isViewEditAppointment = true;
        this.isCalledCreateAppointment = false;
        this.isCalledappointmentWasCreated = false;
        if (this.storeSubscription) {
          this.storeSubscription.unsubscribe();
        }
      }
      if (action.action === 'setContenedorType'){
        if (!this.isViewEditAppointment){
          this.isCalledCreateAppointment = false;
          this.isCalledappointmentWasCreated = false;
          this.pinsConsulted = [];
        }
      }

      if (action.action === 'setCantidadCarga'){
        if (!this.isViewEditAppointment){
          this.isCalledCreateAppointment = false;
          this.isCalledappointmentWasCreated = false;
          this.pinsConsulted = [];
        }
      }
      

      
      
      
    });
    const validators = [Validators.pattern(this.regex)];
    this.pinSearcherControl = new FormControl("", validators);
    this.cleanFormControlEmmiter.emit(this.cleanFormControl.bind(this));
    
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    
    
   
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isPlate']) {
      if (changes['isPlate'].currentValue === false){
        if(this.loadType === 'cs'){
          this.isInputDisabled = true;
        }
      } else{
        if(this.loadType !== 'cc'){
          this.isInputDisabled = false;
        }
      }
    }
  }

  
  public submit(): void {
    const inputElement = document.querySelector('input#inputValue') as HTMLInputElement;
    this.processInputValue(inputElement.value);
    inputElement.value = '';
  }

  public clean(): void {
    this.pinSearcherControl.reset();
    this.cleanEmmiter.emit();
    this.values = [];
    this.storageService.clearStorageValidationPin();
    this.storageService.cleanAll();
    this.store.dispatch(cleanAppointmentData());
    this.isInputDisabled = false;
    this.isCalledappointmentWasCreated = false;
    this.isCalledCreateAppointment = false;
    this.storageService.showAppointmentCard(false);

  }
  public cleanValues(): void{
    this.values = [];
    this.pinsConsulted = [];
    //this.isInputDisabled = false;
  }

  public cleanFormControl(): void {
    this.pinSearcherControl.reset();
  }

  public customValidator(value: string): boolean {
      //validar si es numerico
      if(!isNaN(Number(value))){
        return true;
      }
      return false;
    
  }



  public removeValue(index: number): void {
    const cantidad = this.values.length;
    if (cantidad > 1){
      if (!isNaN(Number(this.values[index]))) {
        if (!this.isViewEditAppointment){
          this.storageService.clearStorageValidationPinIndividual( this.values[index], false, this.loadType === 'cc'? true : false);
          this.updateSetContainerSelect(this.values[index]);
        }
        else{
          this.storageService.clearStorageValidationPinIndividual( this.values[index], true);
        }
      }else{
        if (this.loadType === 'cc'){
          this.storageService.clearStorageValidationPinIndividual( this.values[index], false, true);
          this.updateSetContainerSelect(this.values[index]);
        }
      }
    }else{
      if (!isNaN(Number(this.values[index]))) {
        if (!this.isViewEditAppointment){
          this.storageService.clearStorageValidationPin();
        }
        else{
          this.storageService.clearStorageValidationPin(true);
        }
        this.storageService.cleanAll();
        
      }else{
        if (this.loadType === 'cc'){
          this.storageService.clearStorageValidationPin();
          this.storageService.cleanAll();
        }
        if (this.loadType === 'asc'){
          this.storageService.clearStorageValidationPin();
          this.storageService.cleanAll();
        }
      }
    }
    this.store.dispatch(cleanAppointmentData());
    this.values.splice(index, 1);
  }

public checkComma(event: KeyboardEvent, inputElement: HTMLInputElement): void {
    if (event.key === ',' || event.key === 'Enter') {
      let inputValue = "";
      if (event.key === ','){
        inputValue = inputElement.value.slice(0, -1); // Elimina la coma del valor
      } else{
        inputValue = inputElement.value
      }

      this.processInputValue(inputValue);
      inputElement.value = '';
      event.preventDefault(); // Evita que la coma se agregue al input
      
  }
}

public onBlur(event: FocusEvent, inputElement: HTMLInputElement): void {
  let inputValue = inputElement.value;
  this.processInputValue(inputValue);
  inputElement.value = '';
}


public existInValues(value: string): boolean {
  const index = this.values.indexOf(value);
  if (index > -1) {
    return true;
  }
  return false;
}

public processInputValue(inputValue: string): void {
    if (inputValue) {
      
      //this.storageService.showAppointmentCard(false);
      let isNotNmber = false;
      if (this.loadType === 'cs' && isNaN(Number(inputValue))){
        isNotNmber = true;
      }
      
      if (isNotNmber) {
        inputValue = `tachado:${inputValue}`;
        if (!this.existInValues(inputValue)){
          this.values.push(inputValue);
        }
      }else{
        if (!this.existInValues(inputValue)){
          if (this.loadType === 'cs'){
           
            this.utilService.getPin(inputValue).subscribe({
              next: (encryptedResponse: string) => {
                this.handleResponse(encryptedResponse, inputValue);
              },
              error : (error) => {
                console.error(error)
              }
            });
          }
          else if(this.loadType === 'cc'){
            const isNumber = !isNaN(Number(inputValue));
            
            if (isNumber){
              let isPinC = false;
              this.utilService.getPinContenerized(this.base64EncryptionUtilService.encrypt(inputValue)).subscribe({
                next:(encryptedResponse: string) => {
                  if(encryptedResponse){
                    isPinC = true;
                    this.handleResponse(encryptedResponse, inputValue, true);
                  }else{
                    if (!isPinC){
                      this.utilService.getBookingSearch(this.base64EncryptionUtilService.encrypt(inputValue)).subscribe({
                        next:(encryptedResponse: string) => {
                          if(encryptedResponse){
                            this.handleResponse(encryptedResponse, inputValue, true, true);
                          }
                          else{

                          }
                        },
                        error : (error) => {
                          console.error(error)
                        }
                      });
                    }
                  }
                },
                error : (error) => {
                  console.error(error)
                }
              });
              
            }
            else{
              this.utilService.getBookingSearch(this.base64EncryptionUtilService.encrypt(inputValue)).subscribe({
                next:(encryptedResponse: string) => {
                  if(encryptedResponse){
                    this.handleResponse(encryptedResponse, inputValue, true, true);
                  }
                },
                error : (error) => {
                  console.error(error)
                }
              });
            }
          }

          else if(this.loadType === 'asc'){
            this.utilService.getBookingById(this.base64EncryptionUtilService.encrypt(inputValue)).subscribe({
              next:(encryptedResponse: string) => {
                if(encryptedResponse){
                  this.handleResponseASC(encryptedResponse, inputValue, false);
                }
              },
              error : (error) => {
                console.error(error)
              }
            });
          }
        }
        
     
      }
      
     
    }
}


private handleResponse(encryptedResponse: string, inputValue: string, isContainerized: boolean = false, isBooking: boolean = false): void{
  const tachadoPrefix = 'tachado:';
  const decryptedResponse = JSON.parse(this.aesEncryptionUtilService.decrypt(encryptedResponse));
  const result = decryptedResponse;
  
  if (result && result.length > 0){
    if (inputValue.startsWith(tachadoPrefix)) {
      const index = this.values.indexOf(inputValue);
      if (index > -1) {
        this.values.splice(index, 1);
      }
      inputValue = inputValue.slice(tachadoPrefix.length);
      
    }
    if (!this.existInValues(inputValue)){
      this.values.push(inputValue);
    }
    this.storageService.setPin(inputValue);
    if (!isContainerized){
      this.storageService.setContanerized(false);
      this.utilService.getValidacionPin({
        agente: result[0].agent, destination: result[0].destination ,hbl: result[0].hbl, isGroup: result[0].isGroup, pinParaEliminar: inputValue
      }
      ).subscribe({
        next: (response: string) =>{
          
          const decryptedRes: IDetachedLoad[]  = JSON.parse(this.aesEncryptionUtilService.decrypt(response));
         
          
          
          if (decryptedRes && decryptedRes.length > 0){
            decryptedRes.map(item=> {
              item.pinParaEliminar = inputValue;
            })
            this.store.dispatch(setValidationPin({validation: decryptedRes}));
          }
          else{
            if (this.existInValues(inputValue)){
              this.values = this.values.filter((element) => {
                return element !== inputValue;
              });
            }
            inputValue = `tachado:${inputValue}`;
            if (!this.existInValues(inputValue)){
              this.values.push(inputValue);
            }
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
      /*  this.store.dispatch(getValidationPin({
          agente: result[0].agent, destination: result[0].destination ,hbl: result[0].hbl, isGroup: result[0].isGroup, pinParaEliminar: inputValue
        })); */
      }else{
        
        this.storageService.setContanerized(true);
        if (!isBooking){
          
          this.store.dispatch(setValidationPinSearchContainerized({validation: result}));
          this.store.dispatch(getValidationPinContainerized({blNbr: result[0].blNbr, edoNbr: result[0].edoNbr, eroNbr: result[0].eroNbr, pinContainerized: result[0].pinContainerized, pinNbr: inputValue}));
        }else{
          
          const copyResult = result;
          copyResult.map((item: IBookingSearch) => {
            if(item.carrier && item.carrier !== ""){
              item.visitDummy = item.carrier.startsWith("DUMMY");
            }
          });
          this.store.dispatch(setValidationBookingSearchContainerized({validation: copyResult}));
          result.map((item: IContainerizedLoad) => {
            item.pinParaEliminar = inputValue;
            if(item.carrierVisit && item.carrierVisit !== ""){
              item.visitDummy = item.carrierVisit.startsWith("DUMMY");
            }
          });
          
          this.store.dispatch(setValidationPinContainerized({validation: result}));
        }
      }
  }
  else{
    inputValue = `tachado:${inputValue}`;
    if (!this.existInValues(inputValue)){
      this.values.push(inputValue);
    }
  }
}

private handleResponseASC(encryptedResponse: string, inputValue: string, isUpdate:boolean): void{
  const tachadoPrefix = 'tachado:';
  const decryptedResponse = JSON.parse(this.aesEncryptionUtilService.decrypt(encryptedResponse));
  const result = decryptedResponse;
   
  
  
  if (result && result.body && result.body.length > 0){
    if (inputValue.startsWith(tachadoPrefix)) {
      const index = this.values.indexOf(inputValue);
      if (index > -1) {
        this.values.splice(index, 1);
      }
      inputValue = inputValue.slice(tachadoPrefix.length);
      
    }
    if (this.values.length > 0 && !isUpdate){
      return;
    }
    if (!this.existInValues(inputValue) && !isUpdate){
      this.values.push(inputValue);
    }
    
    const arrayBooking: IContainerizedLoad[] = result.body;
    /* let isEmptyBooking = false;
    if (arrayBooking.length > 0){
      for (const booking of arrayBooking) {
        if (booking.vesselId.includes("DUMMY")){
          isEmptyBooking = true;
          break;
        }
      }
    } */
    if (arrayBooking.length > 0){
      

      arrayBooking.forEach((booking) => {
        if(booking.agentId){
          this.nitAgent = booking.agentId;
          return;
        }
        else{
          this.nitAgent = "";
          return;
        }
      });
      arrayBooking.forEach((booking) => {
        if(booking.shipperId){
          this.nitCustomer = booking.shipperId;
          return;
      }});
      
      this.store.dispatch(setValidationBookingID ({validation: arrayBooking}));
      this.storageService.setBooking(true);
      this.store.dispatch(getEmptyEro({booking: this.base64EncryptionUtilService.encrypt(inputValue)}));
      this.store.dispatch(getValidateEro({booking: this.base64EncryptionUtilService.encrypt(inputValue)}));
      this.store.dispatch(getHazardsByBooking({booking: this.base64EncryptionUtilService.encrypt(inputValue)}));
      this.store.dispatch(getVesselVisit({ vesselVisitID: arrayBooking[0].carrierVisit }));
     
      if(this.nitAgent && this.nitAgent !== ""){
        this.store.dispatch(getAgent({ idOrName: this.nitAgent }));
      }
      this.inputValueASC = inputValue;
      

    }

    /* if (isEmptyBooking){
      if (this.existInValues(inputValue)){
        const index = this.values.indexOf(inputValue);
        if (index > -1) {
          this.values.splice(index, 1);
        }
      }
    } */
  }
  else{
    inputValue = `tachado:${inputValue}`;
    if (!this.existInValues(inputValue)){
      this.values.push(inputValue);
    }
  }
}

updateSetContainerSelect(value: string){
  this.storageService.setContainersSelected(this.storageService.getContainersSelected().filter((element) => {
    return element.pinOrBooking !== value;
  }));
}


private loadData(): void {
  if(this.loadType === 'asc'){
    this.utilService.getBookingById(this.base64EncryptionUtilService.encrypt(this.inputValueASC)).subscribe({
      next:(encryptedResponse: string) => {
        if(encryptedResponse){
          this.handleResponseASC(encryptedResponse, this.inputValueASC, true);
        }
      },
      error : (error) => {
        console.error(error)
      }
    });
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
}


ngOnDestroy(): void {
  if (this.storageSubscription) {
    this.storageSubscription.unsubscribe();
  }
  this.destroy$.next();
  this.destroy$.complete();
}

 

}
