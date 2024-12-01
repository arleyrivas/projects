import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { ICustomerIdOrName } from 'src/app/core/dto/customer-id-or-name.dto';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IContainerizedLoad, IContainerizedTwo, IHazards } from 'src/app/core/interfaces/containerized-load.interface';
import { IPhysicalContainer } from 'src/app/core/interfaces/physical-container.interface';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { AlertAssociateContainerComponent } from 'src/app/shared/components/alert-associate-container/alert-associate-container.component';
import { StorageserviceService } from 'src/app/shared/services/storageservice.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { cleanforBooking, cleanPhysicalContainer, cleanSelectedAgent, cleanSelectedCustomer, cleanValidateContainer, cleanValidateDigitCheck, getAgent, setEquipmentTye } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';

@Component({
  selector: 'app-associate-container',
  templateUrl: './associate-container.component.html',
  styleUrls: ['./associate-container.component.css']
})
export class AssociateContainerComponent implements OnInit, OnDestroy {
  @Input() public controlDisabled: boolean = false;
  public destroy$: Subject<void> = new Subject<void>();
  public currentUser!: IAPIGatewayStore;
  public customer: string = "";
  public nit: string = "";
  public nitAgent: string = "";
  public agent: string = "";
  public nitCustomer: string = "";
  public customerAsignned: boolean = false;
  public agentAsignned: boolean = false;
  customerSearcherControl!: FormControl;
  agentSearcherControl!: FormControl;
  public customerValid: boolean = true;
  public agentValid: boolean  = true;
  equipmentTypeList: string[] = [];
  public associateFormGroup: FormGroup = new FormGroup({});
  public showContainerError = false;
  public showContainerErrorText = "";
  private continueProcess = true;
  public showTypeDocument = true;
  public nitAgentBefore: string = "";
  public container: string = "";
  public showFormNumber = false;
  public showTypeEquipment = false;
  public isErrorDigit = false;
  public equipmetTypeValid = true;
  public equipmentTypeErrorText: string[] = [];
  public equipmentTypeValue = "";
  public equipmentTypePreviousValue = "";
  public infoBooking: IContainerizedLoad[] = [];
  public infoBookingPrevious: IContainerizedLoad[] = [];
  public availableQuantity: number = 0;
  public validateEquipmentsTypeIso = false;
  private archisoList: string[] = [];
  private lengthHazards: number = 0;
  public hazardList: {reference: string, hazard: IHazards[], description: string, eQuipmentType: string, temperature: number, archiso: string}[] = [];
  public hazardListPrevious: {reference: string, hazard: IHazards[], description: string, eQuipmentType: string, temperature: number, archiso: string}[] = [];
  public filterHazardList: {reference: string, hazard: IHazards[], description: string, eQuipmentType: string, temperature: number, archiso: string}[] = [];
  public oOGList: {reference: string, overdimensionLeft: number, overdimensionRight: number, overdimensionBack: number, overdimensionTop: number, 
    overdimensionFront:number, archiso: string}[] = [];
  public showFormWeight = false;
  public minWeight = 0;
  public errorWeight = "";
  public temperatureValue = 0;
  public imoValue = "";
  public isImoSelected = false;
  public isTemperatureControlled: string = "";
  private overdimensionLeft = "";
  private overdimensionRight = "";
  private overdimensionFront = "";
  private overdimensionBack = "";
  private overdimensionTop = "";
  public showCheckbox = false;
  public enableButtonMake = false;
  public userInfo!: IAPIGatewayStore;
  public isPermission = false;
  public differences: string = "";
  public nbrBooking = "";
  private storageSubscription!: Subscription;
  public isViewComponent = true;
  public isConteinerValid = false;
  private isAgentData = false;
  public isCalled = false;
  public isCalledAgent = false;
  public archetype = "";
  public isCleanForm = false;
  private physicalContainerId: string = "";
  private physicalContainer!: IPhysicalContainer;

  
  constructor(
    private readonly matDialog: MatDialog,
    private readonly store: Store,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly matSnackBar: MatSnackBar,
    private cdr: ChangeDetectorRef, private utilServices: UtilService,
    private storageService:StorageserviceService,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService) { }

  ngOnInit(): void {
    
    //this.store.dispatch(cleanSelectedCustomer());
    //this.store.dispatch(cleanSelectedAgent());
    this.continueProcess = true;

    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IAPIGatewayStore) => {
        this.currentUser = result;
      },
      error: (error) => console.error(error)
    });
    this.isPermission = this.hasPermission("CC_EXP_ASO");

    

    this.associateFormGroup = new FormGroup({
      typeDocument: new FormControl({ value: "", disabled: this.container === '',  }, [Validators.required]),
      formNumber: new FormControl({value: "", disabled: false}, [Validators.required, ]),
      typeEquipment: new FormControl({ value: "", disabled: false }, [Validators.required]),
      itemIso: new FormControl({ value: "", disabled: false }, [Validators.required]),
      weight: new FormControl({ value: "", disabled: false }, [Validators.required]),
      temperature: new FormControl({ value: "", disabled: true }),
      imo: new FormControl({ value: "", disabled: true }),
      overdimensionLeft: new FormControl({ value: "", disabled: true }),
      overdimensionRight: new FormControl({ value: "", disabled: true }),
      overdimensionFront: new FormControl({ value: "", disabled: true }),
      overdimensionBack: new FormControl({ value: "", disabled: true }),
      overdimensionTop: new FormControl({ value: "", disabled: true }),
      checkboxAcceptTypeEquipment: new FormControl({ value: "", disabled: false }),
      checkBoxAcceptTemperature: new FormControl({ value: "", disabled: false }),
      checkBoxAcceptImo: new FormControl({ value: "", disabled: false }),
      checkBoxAcceptOverdimension: new FormControl({ value: "", disabled: false }),
      checkBoxTemperature: new FormControl({ value: "", disabled: true }),
      checkBoxImo: new FormControl({ value: "", disabled: true }),
      checkBoxOverdimension: new FormControl({ value: "", disabled: true }),
      checkBoxAcceptOverdimensionTwo: new FormControl({ value: "", disabled: true }),

      
    });

    this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
     
      if (action.action === 'cleanValidationPin'){
         this.isViewComponent = false;
         this.isAgentData = false;
         this.nitAgent = "";
         this.agent = "";
         this.nitCustomer = "";
         this.customer = "";
         this.isCalled = false;
         this.nitAgentBefore = "";
         this.cleanAll();
         this.isCleanForm = true;
        
         
      }
      if (action.action === 'setAsoaciateContainer'){
       this.isViewComponent = true;
      }
     });

     // Escucha los cambios en el select 'typeDocument'
     this.associateFormGroup.get('typeDocument')?.valueChanges.subscribe(value => {
      if (value === '3' || value === '4' || value === '5') {
        this.showFormNumber = true;  // Muestra el campo si la opción es válida
        this.showTypeEquipment = true;
        this.enableField('formNumber');
        this.associateFormGroup.get('formNumber')?.setValidators(Validators.required); // Agrega la validación si es necesario
        this.associateFormGroup.get('formNumber')?.updateValueAndValidity();
      } else {
        this.showFormNumber = false;  // Oculta el campo si es 'other' o cualquier otra opción
        this.showTypeEquipment = true;
        this.associateFormGroup.get('formNumber')?.clearValidators();  // Elimina la validación
        this.associateFormGroup.get('formNumber')?.updateValueAndValidity();
      }
      this.evaluationShowButtonMake();
    });

    this.associateFormGroup.get('formNumber')?.valueChanges.subscribe(value => {
      this.evaluationShowButtonMake();
    });

    this.associateFormGroup.get('typeEquipment')?.valueChanges.subscribe(value => {
      if(value !== "" && value.length > 3 && value !== this.equipmentTypePreviousValue && this.isConteinerValid){
      this.isImoSelected = false;
      this.evaluationEquipmentType(value);}
      else{
        this.equipmentTypeErrorText = [];
        this.validateEquipmentsTypeIso = false;
        this.equipmentTypePreviousValue = "";
        this.showFormWeight = false;
        this.associateFormGroup.patchValue({temperature: ""});
        this.associateFormGroup.patchValue({imo: ""});
        this.associateFormGroup.patchValue({overdimensionLeft: ""});
        this.associateFormGroup.patchValue({overdimensionRight: ""});
        this.associateFormGroup.patchValue({overdimensionFront: ""});
        this.associateFormGroup.patchValue({overdimensionBack: ""});
        this.associateFormGroup.patchValue({overdimensionTop: ""});
        this.associateFormGroup.patchValue({weight: ""});
        this.associateFormGroup.patchValue({checkBoxTemperature: false});
        this.associateFormGroup.patchValue({checkBoxImo: false});
        this.associateFormGroup.patchValue({checkBoxOverdimension: false});
        this.associateFormGroup.patchValue({checkBoxAcceptTypeEquipment: false});
        this.associateFormGroup.patchValue({checkBoxAcceptTemperature: false});
        this.associateFormGroup.patchValue({checkBoxAcceptImo: false});
        this.associateFormGroup.patchValue({checkBoxAcceptOverdimension: false});
        this.evaluationShowButtonMake();
        this.isImoSelected = false;



      }

      
    });
    

    this.associateFormGroup.get('itemIso')?.valueChanges.subscribe(value => {
      this.getValueItemIso(value);
      this.weightControl(value);
      this.evaluationShowButtonMake();
    });

    this.associateFormGroup.get('weight')?.valueChanges.subscribe(value => {
      this.evaluationShowButtonMake();
    });

    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: ISharedStore) => {
        if (result){
          if (result.bookingID && (this.infoBooking.length === 0 || this.infoBooking !== result.bookingID)){
            
            this.infoBooking = result.bookingID;
            result.bookingID.forEach((booking) => {
              
              if (this.customer === "" && booking.shipperName && booking.shipperId){
                this.customer = booking.shipperName;
                this.nit = booking.shipperId;
                this.nitCustomer = booking.shipperId;
                this.customerAsignned = true;
               
                
              }
              if (booking.availableQuantity && parseInt(booking.availableQuantity) > this.availableQuantity){
                this.availableQuantity = parseInt(booking.availableQuantity);
              }
              const availableQuantityMoment = booking.availableQuantity ? parseInt(booking.availableQuantity): 0;
              
              if (booking.archiso && booking.archiso !== "" && !this.archisoList.includes(booking.archiso) && availableQuantityMoment > 0){
                this.archisoList.push(booking.archiso);
              }
              if (availableQuantityMoment > 0){
                  const description = $localize `:@@7fcf610b963f40681e3afc16bc197c0b7a7096d82953ac38baf0230553fcd7a7: export.ExportController.CREATE_PREADVISE_NOT_IMO`;
                  if (booking.reference && booking.equipmentType && this.hazardList.some((hazard) => hazard.reference === booking.reference) === false){
                     
                      this.hazardList.push({reference: booking.reference, hazard: [], description: description,
                        eQuipmentType: booking.equipmentType, temperature: booking.tempReqdC ? parseFloat(booking.tempReqdC) : 0, archiso: booking.archiso? booking.archiso: ""
                      });
                  }
                  this.hazardListPrevious = this.hazardList;
                  if(booking.reference && booking.isOog && (booking.oogLeftCm || booking.oogRightCm || booking.oogBackCm || booking.oogFrontCm || booking.oogTopCm) &&
                    this.oOGList.some((oOG) => oOG.reference === booking.reference) === false){
                      this.oOGList.push({
                          reference: booking.reference, 
                          overdimensionLeft: booking.oogLeftCm ? parseInt(booking.oogLeftCm) : 0, 
                          overdimensionRight: booking.oogRightCm ? parseInt(booking.oogRightCm) : 0,
                          overdimensionBack: booking.oogBackCm ? parseInt(booking.oogBackCm) : 0, 
                          overdimensionTop: booking.oogTopCm ? parseInt(booking.oogTopCm) : 0,
                          overdimensionFront: booking.oogFrontCm ? parseInt(booking.oogFrontCm) : 0,
                          archiso: booking.archiso ? booking.archiso : ""
                      });
                    }  
              }
              if(booking.equipmentType && availableQuantityMoment > 0){
                if (!this.equipmentTypeList.includes(booking.equipmentType)){
                  this.equipmentTypeList.push(booking.equipmentType);
                }
              }
              
            });
          }
         
          if (result.agent && result.agent.length > 0 && this.agentValid){
            
            this.agent = result.agent[0].name;
            this.nitAgent = result.agent[0].id;
           
            const notes = result.agent[0].notes;
            if (this.nitCustomer !== "" && notes !== "" && this.nitAgent !== this.nitAgentBefore) {
              this.nitAgentBefore = this.nitAgent;
              
              this.utilServices.getCustomer(this.nitCustomer, this.nitAgent).subscribe({
                next: (result) => {
                  if (result){
                    const decryptedResult: ICustomerIdOrName = JSON.parse(this.aesEncryptionUtilService.decrypt(result));
                    if(decryptedResult.agentRepresentation && decryptedResult.agentRepresentation.length > 0){
                      if (decryptedResult.agentRepresentation[0].oea){
                        this.showTypeDocument = false;
                      }
                    }
                  }
                },
                error: (error) => {
                  console.error(error);
                }
              }); 
            }
          }
          
         
          if (result.physicalContainer && this.associateFormGroup.get('typeEquipment')?.value === ""){
            this.physicalContainer = result.physicalContainer;
            this.physicalContainerId = result.physicalContainer.id;
            if(result.physicalContainer.type){
              this.associateFormGroup.patchValue({typeEquipment: result.physicalContainer.type});
              this.showContainerErrorText = "";
              this.showContainerError = false;
            }else{
              this.continueProcess = false;
              this.showContainerError = true;
              const message = $localize `:@@9658a01222d6c620937fda0d05cd9b0611a131890838f477a132856eb9c7c18a: export.views.export-preadvice_form.UNIT_ADD_BOOKING_ERROR`;
              const messageTwo = $localize `:@@96ff6c96b30acfd34846101f23e2b4fedf380c172638ad4a4e22a78f13ab7753: export.views.export-preadvice_form.EQUIPMENT_TYPE_NOT_IN_BOOKING`;
              const combinedMessage = `${message}\n${messageTwo}`;
              this.showContainerErrorText = combinedMessage;
              this.showTypeEquipment = false;
              
            }
            
          }

          if (result.hazardsByBooking){
            this.lengthHazards = result.hazardsByBooking.length;
            if (this.lengthHazards > 0 ){
              result.hazardsByBooking.forEach((hazard) => {
                if (hazard.reference !== "" && typeof hazard.reference === 'string'){
                  this.hazardList.forEach((hazardList) => {
                    if (hazardList.reference === hazard.reference && hazardList.hazard.length === 0){
                      hazardList.hazard.push(hazard);
                      hazardList.description = hazard.imdgDescription;
                    }
                  });
                }
              })
              
              ;
            }
          if (this.continueProcess){
            if (result.validateContainer !== null && result.digitCheck !== null){
              if (result.validateContainer !== 10 && !result.digitCheck){
                this.isErrorDigit = true;
                this.disableField('typeDocument');
                this.disableField('typeEquipment');
                const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym30: modules.share.containers.search.invalid.digit.verification`;
                const messageWithNumber = `${message} ${result.validateContainer}`;
                const messageTwo = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym31: modules.share.containers.search.invalid.digit.option`;
                const combinedMessage = `${messageWithNumber}\n${messageTwo}`;
                this.showMessage(combinedMessage, "warning");
                //this.continueProcess = false;
              }
              else{
                this.isErrorDigit = false;
                this.enableField('typeDocument');
                this.enableField('typeEquipment');
              }
            }
            
          }


        }}}});
  
    
  
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  onCustomerControlChange(control: FormControl) {
    this.customerSearcherControl = control;
   
   this.customerSearcherControl.statusChanges.subscribe(status => {
      
      if (!this.customerSearcherControl.valid && !this.customerAsignned) {
        this.customerValid = false;
        this.isCalled = false;
        this.nitCustomer = ""
       
      } else{
        this.customerValid = true;
        if (this.customerSearcherControl.value.includes("/") && !this.isCalled){
          const customerData = this.customerSearcherControl.value.split("/");
          this.isCalled = true;
          this.nitCustomer = customerData[0];
          if (this.nitCustomer !== "" && this.nitAgent !== ""){
            this.utilServices.getCustomer(this.nitCustomer, this.nitAgent).subscribe({
              next: (result) => {
                if (result){
                  const decryptedResult: ICustomerIdOrName = JSON.parse(this.aesEncryptionUtilService.decrypt(result));
                  if(decryptedResult.agentRepresentation && decryptedResult.agentRepresentation.length > 0){
                    if (decryptedResult.agentRepresentation[0].oea){
                      this.showTypeDocument = false;
                    }
                  }
                }
              },
              error: (error) => {
                console.error(error);
              }
            }); 
          }
        }
      }
    }); 

    
  }

  onAgentControlChange(control: FormControl) {
    this.agentSearcherControl = control;
    this.agentSearcherControl.statusChanges.subscribe(status => {
      if (!this.agentSearcherControl.valid && !this.agentAsignned) {
        this.agentValid = false;
        this.isCalledAgent = false;
        this.nitAgent = "";
        this.nitCustomer = "";
       
      } else{
        this.agentValid = true;
        if (this.agentSearcherControl.value.includes("/") && !this.isCalledAgent){
          const customerData = this.agentSearcherControl.value.split("/");
          this.isCalledAgent = true;
          this.nitAgent = customerData[0]
          this.isAgentData = true;
          this.cdr.detectChanges(); // Forzar detección de cambios
        }
      }
    }); 
    
   
  
  }

  onContainerSearch(container: string) {
    this.container = container;
    if (container === ""){
     this.cleanAll(true);
    }else{
      this.isConteinerValid = true;
      this.isCleanForm = false;
      this.associateFormGroup.get('typeEquipment')?.patchValue("");
      this.store.dispatch(cleanPhysicalContainer());
      this.store.dispatch(cleanValidateContainer());
      

    }

  }

  enableField(field: string){
    this.associateFormGroup.get(field)?.enable();
  }

  disableField(field: string, isEmit: boolean = true){
    if (isEmit){
      this.associateFormGroup.get(field)?.disable();
    }else{
      this.associateFormGroup.get(field)?.disable({ emitEvent: false });
    }
    
  }

  public showMessage(message: string, type:string): void {
    const config = {
      verticalPosition: "top" as MatSnackBarVerticalPosition,
      duration: 5000,
      panelClass: [""]
    };
    if (type === "error"){
      config.panelClass = ["error-snackbar"];
    }
    else if(type === "warning"){
      config.panelClass = ["warning-snackbar"];
    }
    else if(type === "success"){
      config.panelClass = ["success-snackbar"];
    }
    this.matSnackBar.open(message, "", config);
  }

  onNumberInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 14) {
      input.value = input.value.slice(0, 14);  // Limita la entrada a los primeros 14 dígitos
    }
  }

  evaluationEquipmentType(value: string){
    this.equipmentTypePreviousValue = value;
    this.utilServices.getEquipmentType(value).subscribe({
      next: (encryptedResponse) => {
        if (encryptedResponse){
          
          const result = JSON.parse(this.aesEncryptionUtilService.decrypt(encryptedResponse));
          
          this.equipmetTypeValid = true;
          //eliminar repetidos de la lista, que sean iguales en todos los campos
          this.filterHazardList = this.hazardList.filter((hazard, index, self) =>
            index === self.findIndex((t) => (
              t.reference === hazard.reference && t.description === hazard.description && t.eQuipmentType === hazard.eQuipmentType
            ))
          );
   
          //this.filterHazardList = this.filterHazardList.filter((hazard) => hazard.eQuipmentType === value.toString());
          this.filterHazardList = this.filterHazardList.filter((hazard) => hazard.archiso === result.archetype);
          
          const filterHazardListFirst = this.filterHazardList;

          if (this.filterHazardList.length > 1){
            this.filterHazardList = this.filterHazardList.filter((hazard) => hazard.eQuipmentType === value.toString());
          }
          
          if (this.filterHazardList.length === 0 && filterHazardListFirst.length > 1){
            this.filterHazardList = filterHazardListFirst;
          }

          if(result.reefer && result.reefer.isTemperatureControlled){
            this.isTemperatureControlled = result.reefer.isTemperatureControlled;
          }
          
         
          

          if(this.availableQuantity > 0){
            
            this.store.dispatch(setEquipmentTye({response: result}));
            
            if(result.archetype && result.archetype !== "" && this.archisoList.includes(result.archetype)){
              this.validateEquipmentsTypeIso = true;
              this.minWeight = result.tareWeightKg;
              this.archetype = result.archetype;
              this.associateFormGroup.get('weight')?.setValidators(Validators.min(this.minWeight)); // Agrega la validación si es necesario
              this.associateFormGroup.get('weight')?.updateValueAndValidity();
              this.getValueTemperature(value.toString());
              
              //this.getValueOverdimension(value.toString());
              
              this.getValueOverdimension(result.archetype, value.toString());
              this.enableField('itemIso');
              this.enableField('weight');
              
              this.getValueItemIso(result.archetype, false); 
             
              
              this.errorWeight = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym40: modules.containerized.load.associate.containerbooking.weight.invalid ${this.minWeight}`;
              if (this.physicalContainer && !this.equipmentTypeList.includes(this.physicalContainer.type)){
                this.disableField('typeEquipment', false);
              }    
            }else{
              
              if (this.associateFormGroup.get('typeEquipment')?.value){
                this.associateFormGroup.get('typeEquipment')?.setErrors({invalid: true});
                this.equipmetTypeValid = false;
                this.equipmentTypeErrorText.push($localize `:@@96ff6c96b30acfd34846101f23e2b4fedf380c172638ad4a4e22a78f13ab7753: export.views.export-preadvice_form.EQUIPMENT_TYPE_NOT_IN_BOOKING`);
                this.showFormWeight = false;
                
              }
              
            }
            
            
            
          }
          else{
            this.equipmetTypeValid = false;
            const messageError = $localize `:@@9658a01222d6c620937fda0d05cd9b0611a131890838f477a132856eb9c7c18a: export.views.export-preadvice_form.UNIT_ADD_BOOKING_ERROR`;
            if (!this.isCleanForm){
              this.equipmentTypeErrorText.push(messageError);
            }
            
          }
          
          if((this.filterHazardList.length === 0 || this.filterHazardList.length === 1 || this.lengthHazards === 0) && this.equipmetTypeValid){
            this.validateEquipmentsTypeIso = false;
            this.weightControl(this.minWeight);
            
          }else{
            this.associateFormGroup.patchValue({weight: ""});
            this.associateFormGroup.patchValue({itemIso: ""});
          }
          this.associateFormGroup.patchValue({weight: this.minWeight});
          this.enableField('checkboxAcceptTypeEquipment');
          this.enableField('checkBoxAcceptTemperature');
          this.enableField('checkBoxAcceptImo');
          this.enableField('checkBoxAcceptOverdimension');

          
        }
        else{
        
          this.equipmetTypeValid = false;
          this.equipmentTypeErrorText.push($localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym39: modules.containerized.load.associate.containerbooking.type.equipment.invalid`);
        }
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
    this.associateFormGroup.get('typeEquipment')?.setValue(input.value, { emitEvent: false });
  }

  weightControl(value: number){
    if (value){
      
      this.showFormWeight = true;
      this.associateFormGroup.get('weight')?.setValidators(Validators.required); // Agrega la validación si es necesario
      this.associateFormGroup.get('weight')?.updateValueAndValidity();
    } else{
      this.showFormWeight = false;
      this.associateFormGroup.get('weight')?.clearValidators();  // Elimina la validación
      this.associateFormGroup.get('weight')?.updateValueAndValidity();
    }
  }

  getValueItemIso(value: string, isSelect:boolean = true){
    if(value !== "" && isSelect){
      const itemSelected = this.filterHazardList.find((hazard) => hazard.reference === value);
      if (itemSelected && itemSelected.description !== ""){
        const descriptionIMO = $localize `:@@7fcf610b963f40681e3afc16bc197c0b7a7096d82953ac38baf0230553fcd7a7: export.ExportController.CREATE_PREADVISE_NOT_IMO`;
        if(itemSelected.description.includes(descriptionIMO)){
          this.isImoSelected = false;
          this.associateFormGroup.patchValue({imo: ""});
          this.associateFormGroup.patchValue({checkBoxImo: false});
          const descriptionIMO = $localize `:@@7fcf610b963f40681e3afc16bc197c0b7a7096d82953ac38baf0230553fcd7a7: export.ExportController.CREATE_PREADVISE_NOT_IMO`;
          const itemSelected = this.filterHazardList.find((hazard) => hazard.description.includes(descriptionIMO));
          
          if(this.oOGList.length > 0){
     
            this.oOGList.forEach((oOG) => {
              if(oOG.archiso === itemSelected?.archiso && itemSelected?.reference === oOG.reference){
                if (oOG.overdimensionLeft > 0) this.associateFormGroup.patchValue({overdimensionLeft:   oOG.overdimensionLeft.toString()});
                if (oOG.overdimensionRight > 0) this.associateFormGroup.patchValue({overdimensionRight: oOG.overdimensionRight.toString()});
                if (oOG.overdimensionFront > 0) this.associateFormGroup.patchValue({overdimensionFront: oOG.overdimensionFront.toString()});
                if (oOG.overdimensionBack > 0) this.associateFormGroup.patchValue({overdimensionBack: oOG.overdimensionBack.toString()});
                if (oOG.overdimensionTop > 0) this.associateFormGroup.patchValue({overdimensionTop: oOG.overdimensionTop.toString()});
                this.associateFormGroup.patchValue({checkBoxOverdimension: true});
                
              }});
            }
          

        }else{
          this.isImoSelected = true;
          this.imoValue = itemSelected.description;
          this.associateFormGroup.patchValue({imo: this.imoValue});
          this.associateFormGroup.patchValue({checkBoxImo: true});
          this.associateFormGroup.patchValue({overdimensionLeft:   ""});
          this.associateFormGroup.patchValue({overdimensionRight: ""});
          this.associateFormGroup.patchValue({overdimensionFront: ""});
          this.associateFormGroup.patchValue({overdimensionBack: ""});
          this.associateFormGroup.patchValue({overdimensionTop: ""});
          this.associateFormGroup.patchValue({checkBoxOverdimension: false});


        }
      }
    } else if(value !== "" &&  !isSelect && !this.isImoSelected){
      
     
      const itemSelected = this.filterHazardList.find((hazard) => hazard.archiso === value);
     
      if (itemSelected){
        this.isImoSelected = true;
        this.imoValue = itemSelected.description;
        const descriptionIMO = $localize `:@@7fcf610b963f40681e3afc16bc197c0b7a7096d82953ac38baf0230553fcd7a7: export.ExportController.CREATE_PREADVISE_NOT_IMO`;
        
        
        if (this.imoValue !== descriptionIMO){
          this.associateFormGroup.patchValue({imo: this.imoValue});
          this.associateFormGroup.patchValue({checkBoxImo: true});
        }
        
      }
      


    }
  }

  getValueTemperature(equipmentTypeValue: string){
    
    if(this.hazardList.length > 0 && this.isTemperatureControlled === "Y"){
      this.hazardList.forEach((hazard) => {
        if(hazard.eQuipmentType === equipmentTypeValue){
          this.temperatureValue = hazard.temperature;
          this.associateFormGroup.patchValue({temperature: this.temperatureValue});
          this.associateFormGroup.patchValue({checkBoxTemperature: true});
        }
      });
    }else{
      this.associateFormGroup.patchValue({temperature: ""});
      this.associateFormGroup.patchValue({checkBoxTemperature: false});
      this.temperatureValue = 0;
    }
  }

  getValueOverdimension(archiso: string, equipmentTypeValue: string){
    
    if(this.oOGList.length > 0){
     
      this.oOGList.forEach((oOG) => {
        const itemB = this.filterHazardList.find((hazard) => hazard.eQuipmentType === equipmentTypeValue);
        let isSetOgg = false;
        if(oOG.archiso === archiso && itemB?.reference === oOG.reference){
          if (oOG.overdimensionLeft > 0) this.associateFormGroup.patchValue({overdimensionLeft:   oOG.overdimensionLeft.toString()});
          if (oOG.overdimensionRight > 0) this.associateFormGroup.patchValue({overdimensionRight: oOG.overdimensionRight.toString()});
          if (oOG.overdimensionFront > 0) this.associateFormGroup.patchValue({overdimensionFront: oOG.overdimensionFront.toString()});
          if (oOG.overdimensionBack > 0) this.associateFormGroup.patchValue({overdimensionBack: oOG.overdimensionBack.toString()});
          if (oOG.overdimensionTop > 0) this.associateFormGroup.patchValue({overdimensionTop: oOG.overdimensionTop.toString()});
          this.associateFormGroup.patchValue({checkBoxOverdimension: true});
          isSetOgg = true;
        }

        if (!isSetOgg && !itemB){
          const descriptionIMO = $localize `:@@7fcf610b963f40681e3afc16bc197c0b7a7096d82953ac38baf0230553fcd7a7: export.ExportController.CREATE_PREADVISE_NOT_IMO`;
          const itemSelected = this.filterHazardList.find((hazard) => hazard.description.includes(descriptionIMO));
         
          if(oOG.archiso === archiso && itemSelected?.reference === oOG.reference){
            if (oOG.overdimensionLeft > 0) this.associateFormGroup.patchValue({overdimensionLeft:   oOG.overdimensionLeft.toString()});
            if (oOG.overdimensionRight > 0) this.associateFormGroup.patchValue({overdimensionRight: oOG.overdimensionRight.toString()});
            if (oOG.overdimensionFront > 0) this.associateFormGroup.patchValue({overdimensionFront: oOG.overdimensionFront.toString()});
            if (oOG.overdimensionBack > 0) this.associateFormGroup.patchValue({overdimensionBack: oOG.overdimensionBack.toString()});
            if (oOG.overdimensionTop > 0) this.associateFormGroup.patchValue({overdimensionTop: oOG.overdimensionTop.toString()});
            this.associateFormGroup.patchValue({checkBoxOverdimension: true});
            isSetOgg = true;
          }
        }
      });
      
    }
  }

  public hasPermission(privilegio: string): boolean {
    const userPrivileges: string[] = this.currentUser.privileges.map(value => value.privilegeId);
    let hasPermission: boolean = false;
    if(this.currentUser && this.currentUser.privileges) {
      if(userPrivileges.includes(privilegio)) {
        hasPermission = true;
      }
    }
    return hasPermission;
  }

  public cancel(): void {
    this.cleanForm();
  }

  private evaluationShowButtonMake(): void {
    let document = true;
    if (this.showFormNumber){
      document = this.associateFormGroup.get('formNumber')?.value ? true : false;
    }else if (this.showTypeDocument){
      document = this.associateFormGroup.get('typeDocument')?.value ? true : false;
    }

    if (this.nitCustomer !== "" && this.nitAgent !== "" && this.container !== ""
      && this.associateFormGroup.get('typeEquipment')?.value 
      && this.associateFormGroup.get('weight')?.value && this.showFormWeight && document && this.associateFormGroup.get('weight')?.valid){
      this.enableButtonMake = true;
    } else{
      this.enableButtonMake = false;
    }
  }

  public submit(): void{
    if (this.associateFormGroup.get('checkboxAcceptTypeEquipment')?.value === true && this.associateFormGroup.get('checkBoxAcceptTemperature')?.value === true
    && this.associateFormGroup.get('checkBoxAcceptImo')?.value === true && this.associateFormGroup.get('checkBoxAcceptOverdimension')?.value === true){
      this.makeAssociation();
    }else{
      this.openAlert();
    }
  }

  private openAlert(): void{
    if(this.matDialog.openDialogs.length === 0 ){
      const dialoReg = this.matDialog.open(AlertAssociateContainerComponent, {
        width: "50rem",
        data: {}
      });

      dialoReg.afterClosed().subscribe(result => {
        if (result){
          if (result.data !== "" && result.success){
            this.differences = result.data;
            this.makeAssociation();
          }
        }else{
          
        }
      }); 

    }
    
  }
  private getDataOOG(): {}{
    if(this.associateFormGroup.get('overdimensionLeft')?.value || this.associateFormGroup.get('overdimensionRight')?.value || this.associateFormGroup.get('overdimensionFront')?.value || this.associateFormGroup.get('overdimensionBack')?.value || this.associateFormGroup.get('overdimensionTop')?.value){
      this.associateFormGroup.patchValue({checkBoxOverdimension: true});
      const ogg = {
        leftCm: this.associateFormGroup.get('overdimensionLeft')?.value,
        rightCm: this.associateFormGroup.get('overdimensionRight')?.value,
        topCm: this.associateFormGroup.get('overdimensionTop')?.value,
        frontCm:  this.associateFormGroup.get('overdimensionFront')?.value,
        backCm: this.associateFormGroup.get('overdimensionBack')?.value,
      }
      return ogg;  
    }
    else{
      return {};
    }
  }

  private cleanForm(): void{ 
    this.cleanAll();
    this.associateFormGroup.patchValue({checkboxAcceptTypeEquipment: false});
    this.isViewComponent = false;
    this.storageService.cleanAssociateContainerForm();
    this.availableQuantity = 0;
    this.isCleanForm = true;
  }
  

  private makeAssociation(): void{
    //se crea la asociación
    
    let nbrBooking = "";
    let eqStatus = ""
    let carrierVisit = "";
    let line = "";
    let reference = "";
    let transferTemplateNbr = this.associateFormGroup.get('formNumber')?.value;
    let typeDocument = this.associateFormGroup.get('typeDocument')?.value;
   
    
    if(transferTemplateNbr === ""){
      transferTemplateNbr = null;
    }
    if (typeDocument === "" || typeDocument === null){
      typeDocument = "0";
    }
    if (this.infoBooking.length > 0){
      let items: IContainerizedTwo [] = [];
      this.infoBooking.forEach((booking) => {
        if (booking && booking.nbr && booking.eqStatus && booking.reference){
          nbrBooking = booking.nbr;
          eqStatus = booking.eqStatus;
          carrierVisit = booking.carrierVisit;
          reference = booking.reference;
          line = booking.line;
          items.push({quantity: booking.quantity, availableQuantity: booking.availableQuantity,
            equipmentType: booking.equipmentType, equipmentTypeDescription: booking.equipmentTypeDescription,
            heightMm: booking.heightMm, lengthMm: booking.lengthMm, eqIsoGroup: booking.eqIsoGroup,
            isOog: booking.isOog, seqNbr: booking.seqNbr, archiso: booking.archiso, reference: booking.reference,
            reefer: booking.reefer,
            hazards: booking.hazards,
            grossWeight: this.associateFormGroup.get('weight')?.value,
             ogg: {
              oogLeftCm: booking.oogLeftCm,
              oogRightCm: booking.oogRightCm,
              oogTopCm: booking.oogTopCm,
              oogFrontCm: booking.oogFrontCm,
              isOog: booking.isOog
              },
            
          });

          
          
        }
      });
      let reefer = {};
      if (this.temperatureValue > 0 && this.temperatureValue !== null){
        reefer = {tempReq: this.temperatureValue};
      }
      let hazard = [];
      if (this.isImoSelected){
        let listImoValue = this.imoValue.split(" ");
        if (listImoValue[0] !== "" && listImoValue[0] !== "No" && listImoValue[0] !== "N"){
          hazard.push({ imdg: listImoValue[0] });
        }
        
      }
      
    
      
      
      let newBooking = {
        nbr: nbrBooking,
        eqStatus: eqStatus,
        carrierVisit: carrierVisit,
        line: line,
        items: items,
        units: [{
          booking: {id: nbrBooking},
          id: this.container,
          line: line,
          reefer: reefer,
          contents: { weightKg: this.associateFormGroup.get('weight')?.value},
          container: {type: this.associateFormGroup.get('typeEquipment')?.value,
            id: this.container, archetype: this.archetype
          },
          hazards: {
                hazard: hazard
            },
          oog: this.getDataOOG(),
         

        }],
        agentId: this.nitAgent,
        shipperId: this.nitCustomer,
        shipperName: this.customer,
        
      };


      this.utilServices.getCreateAssotiation(newBooking, this.base64EncryptionUtilService.encrypt(reference),
      this.base64EncryptionUtilService.encrypt(transferTemplateNbr), typeDocument).subscribe({
        next: (result) => {
        
          if (result){
            this.showMessage($localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym42: modules.containerized.load.associate.containerbooking.success`, "success");
            //this.storageService.clearStorageValidationPin();
            //this.storageService.cleanAll();
            this.cleanForm();
          }
        },
        error: (error) => {
          console.error(error);
        }
       });

     


    }

  }

  private cleanAll(isError:boolean = false): void{
    this.store.dispatch(cleanValidateDigitCheck());
      this.store.dispatch(cleanforBooking());
      this.store.dispatch(cleanPhysicalContainer());
      this.store.dispatch(cleanValidateContainer());
      this.isConteinerValid = false;
      this.associateFormGroup.get('typeDocument')?.patchValue("");  
      this.associateFormGroup.get('typeEquipment')?.patchValue("");
      this.associateFormGroup.get('weight')?.patchValue("");
      this.associateFormGroup.get('itemIso')?.patchValue("");
      this.associateFormGroup.get('formNumber')?.patchValue("");
      this.associateFormGroup.patchValue({temperature: ""});
      this.associateFormGroup.patchValue({imo: ""});
      this.associateFormGroup.patchValue({overdimensionLeft: ""});
      this.associateFormGroup.patchValue({overdimensionRight: ""});
      this.associateFormGroup.patchValue({overdimensionFront: ""});
      this.associateFormGroup.patchValue({overdimensionBack: ""});
      this.associateFormGroup.patchValue({overdimensionTop: ""});
      this.associateFormGroup.patchValue({checkBoxTemperature: false});
      this.associateFormGroup.patchValue({checkBoxImo: false});
      this.associateFormGroup.patchValue({checkBoxOverdimension: false});
      this.associateFormGroup.patchValue({checkBoxAcceptTypeEquipment: false});
      this.associateFormGroup.patchValue({checkBoxAcceptTemperature: false});
      this.associateFormGroup.patchValue({checkBoxAcceptImo: false});
      this.associateFormGroup.patchValue({checkBoxAcceptOverdimension: false});
      const weightControl = this.associateFormGroup.get('weight');
      this.minWeight = 0;
      if (weightControl?.disabled) {
        weightControl.enable({ emitEvent: false });  // Habilitar temporalmente
        weightControl.patchValue("");                // Asignar valor
        weightControl.disable({ emitEvent: false }); // Deshabilitar de nuevo
      } else {
        weightControl?.patchValue("");
      }
     
      if(!isError){
        this.oOGList = [];
        this.filterHazardList = [];
        this.hazardList = [];
        this.hazardListPrevious = [];
        this.archisoList = [];
      }
      
      this.disableField('typeDocument');
      this.disableField('typeEquipment');
      this.disableField('formNumber');
      this.disableField('itemIso');
      this.disableField('weight');
      this.disableField('temperature');
      this.disableField('imo');
      this.disableField('overdimensionLeft');
      this.disableField('overdimensionRight');
      this.disableField('overdimensionFront');
      this.disableField('overdimensionBack');
      this.disableField('overdimensionTop');
      this.disableField('checkboxAcceptTypeEquipment');
      this.disableField('checkBoxAcceptTemperature');
      this.disableField('checkBoxAcceptImo');
      this.disableField('checkBoxAcceptOverdimension');
  }

  private cleanFields(): void{
    this.associateFormGroup.get('typeDocument')?.patchValue("");  
    this.associateFormGroup.get('typeEquipment')?.patchValue("");
    this.associateFormGroup.patchValue({weight: ""});
    this.associateFormGroup.get('weight')?.patchValue("");
    this.associateFormGroup.get('itemIso')?.patchValue("");
    this.associateFormGroup.get('formNumber')?.patchValue("");
    this.associateFormGroup.patchValue({temperature: ""});
    this.associateFormGroup.patchValue({imo: ""});
    this.associateFormGroup.patchValue({overdimensionLeft: ""});
    this.associateFormGroup.patchValue({overdimensionRight: ""});
    this.associateFormGroup.patchValue({overdimensionFront: ""});
    this.associateFormGroup.patchValue({overdimensionBack: ""});
    this.associateFormGroup.patchValue({overdimensionTop: ""});
    this.associateFormGroup.patchValue({checkBoxTemperature: false});
    this.associateFormGroup.patchValue({checkBoxImo: false});
    this.associateFormGroup.patchValue({checkBoxOverdimension: false});
    this.associateFormGroup.patchValue({checkBoxAcceptTypeEquipment: false});
    this.associateFormGroup.patchValue({checkBoxAcceptTemperature: false});
    this.associateFormGroup.patchValue({checkBoxAcceptImo: false});
    this.associateFormGroup.patchValue({checkBoxAcceptOverdimension: false});
    
  }



  }
