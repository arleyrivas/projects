import { AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, Type, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { catchError, takeUntil } from 'rxjs/operators';

import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { ICity } from 'src/app/core/interfaces/city.interfaces';
import { IDepartment } from 'src/app/core/interfaces/department.interface';
import { UtilService } from 'src/app/shared/services/util.service';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { BusinessManagementService } from '../../services/business-management.service';
import { MandatoryDocumentation } from 'src/app/core/interfaces/mandatory-documentation.interface';
import { VALIDATION_MESSAGE_BUSINESS_MANAGEMENT } from '../../errors/validation-message';

import { CustomerData, ICustomerDTO } from 'src/app/core/dto/gestion-customer.dto';
import { IValueChangeCustomer, CustomerRequest, FormDataCustomer, ICreateCustomerRequest, IformaDataPresentationResum } from 'src/app/core/interfaces/business-management.interface';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { IDocumentRouteData } from 'src/app/core/interfaces/document-type-file-route.interfaces';
import { MessageEditCustomerDialogComponent } from '../message-edit-customer-dialog/message-edit-customer-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CustomerManagementFormConfirmComponent } from '../customer-management-form-confirm/customer-management-form-confirm.component';
import { IFilesName } from 'src/app/shared/components/upload-file/interfaces/upload-file.interface';
import { UploadFileComponent } from 'src/app/shared/components/upload-file/upload-file.component';
import { StatesServiceBusinessManagement } from '../../services/states.service';
import { privileges } from 'src/app/core/privileges.enum';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { CustomerRequestInProgressMessageComponent } from '../customer-request-in-progress-message/customer-request-in-progress-message.component';
import { getCompanyTypeName, getCompanyTypeSelected } from 'src/app/shared/utils/utils';
import { cleanSelectedCustomer } from 'src/app/state/shared/shared.actions';
import { ICompanyType } from 'src/app/core/interfaces/company-type.interface';
import { keyValueMap } from 'src/app/shared/constants/app.constants';
import { PendingFieldsAndDocumentsComponentComponent } from '../pending-fields-and-documents-component/pending-fields-and-documents-component.component';

@Component({
  selector: 'app-customer-management-form',
  templateUrl: './customer-management-form.component.html',
  styleUrls: ['./customer-management-form.component.css']
})
export class CustomerManagementFormComponent implements OnInit, AfterViewInit, AfterViewChecked  {
 

  @ViewChild('secondaryContent') secondaryContentTemplate!: TemplateRef<any>;

  @ViewChild('hijo') uploadFileComponent: UploadFileComponent | undefined;

  public documentsByUploadFile: IformaDataPresentationResum[] = [];
  reload = false;

  public destroy$: Subject<void> = new Subject<void>();
  
  public routeData: IDocumentRouteData = { documentation_module : 'GEST_CLIE_NEW' };
  @Input() nbr?: string = 'null';
  @Input() receivedForm!: FormGroup;
  @Input() receivedDepartment: IDepartment [] = [];
  @Input() receivedCity: ICity [] = [];
  public tab: string = 'GE_REG_ACT';
  private isSubscribed = false;
  private subscriptions: Subscription = new Subscription();
  validatedCliente: boolean = false;


  @Output() secondaryContent = new EventEmitter<TemplateRef<any>>();

  @Output() componentChange = new EventEmitter<Type<any>>();



  showSecondaryComponent() {
    this.componentChange.emit();
  }
  
  public messageValidation = VALIDATION_MESSAGE_BUSINESS_MANAGEMENT;

  clientHaveCitie: string = '';
  departmentClient: string = '';
  
  action: string = '';
  valueChangesCustomer: IValueChangeCustomer = {};
  ownerId: string = '';
  owner: string = ''

 informationCustomerRequest: ICreateCustomerRequest = this.defaultCustomerRequest();
 customerRequestNotificationData: ICreateCustomerRequest = this.defaultCustomerRequest();

  public panelOpenState = false;
  public userInfo!: IAPIGatewayStore;
  public selectedOption: string = 'activeClient';
  showForm: boolean = false;
  isAgent: boolean = false; 

  errorMessage: string = '';
  public cities: ICity [] = []; 
  public documentsTypes: IFilesName []= []; 
  public filteredCiudades: ICity [] = []; 

  public departaments: IDepartment[] = [];
  formulario!: FormGroup;

  backupDataResult!: CustomerData;
  tipoPresentacion: string ='';
  
  requestDocument: MandatoryDocumentation = {
    nit: '',
    companyType: '',
    mandato: '-1'
  };

  customerReq:CustomerRequest  = {
    principalNit: '',
    secondaryNit: '',
  };
    customerRequestFlag: string = '0';

    public consignee: string = '';
    public nitConsignee: string = '';
    public fullConsignee: string =  '';
    // public consigneeToSave: boolean = false;
    public cleanCustomerFunction: () => void = () => {};
    private consultClient: number = 0;
    private invalidFields: string [] = [];
 
  constructor(
    private readonly store: Store,
    private fb: FormBuilder,
    private utilService: UtilService,
    private businessManagementService: BusinessManagementService,
    private readonly matDialog: MatDialog,
    private statesServiceBusinessManagement: StatesServiceBusinessManagement,
    private router: Router,
    private readonly matSnackBar: MatSnackBar,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService
  ){}
  ngAfterViewInit(): void {
    // Emitimos el contenido secundario al componente padre después de que la vista se haya inicializado
    this.secondaryContent.emit(this.secondaryContentTemplate);
  }

  ngAfterViewChecked() {
    if (this.uploadFileComponent && !this.isSubscribed) {
      this.isSubscribed = true; 
      this.uploadFileComponent.documentsLoad$
      .pipe(takeUntil(this.destroy$))
      .subscribe(listDocuments => {
        this.documentsByUploadFile = listDocuments;
      });
    }
    
  }

  ngOnInit(): void {
    if (this.receivedForm) {
      this.initializeForm();
      this.initializeFormByInput(this.receivedForm!);
    }
    else{
    this.secondaryContent.emit(this.secondaryContentTemplate);

    this.initializeForm();


    this.store.select(apiGatewayFeatureSelector)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => {
        this.userInfo = APIGatewatStore
        this.isUserAgent();        
      },
      error: error => console.error(error)
    });

    this.statesServiceBusinessManagement
      .getStateIsCancelCreateRequest()
      .pipe(takeUntil(this.destroy$))
      .subscribe((isCancel) => {
        if (isCancel) {
          this.reloadComponentAfterConfirm();
        }
      });
    }

  }


  private filterCiudades(departamentoCode: string): void {
    
    if(this.validatedCliente){
      let departmentSelected: IDepartment [] = this.departaments.filter( element =>  element.depName === departamentoCode);
      this.filteredCiudades = this.cities.filter( (ciudad) => ciudad.code === (departmentSelected[0]?.depCode ? departmentSelected[0].depCode : '') );

      this.formulario.get('ciudad')?.setValue(''); // Reset ciudad cuando cambio el departamento
      if(this.formulario.get('departamento')?.value){
        this.formulario.get('ciudad')?.enable();
      }
    }
  }

  initializeForm(){
    this.formulario = this.fb.group({
      tratamiento:              ['', Validators.required],
      tipoPersona:              ['', Validators.required],
      nit:                      ['', [Validators.required,       Validators.pattern(/^\d{10}$/)]],
      razonSocial:              ['', [Validators.required,       Validators.minLength(5), Validators.maxLength(60)]],
      sigla:                    ['', [Validators.required,       Validators.minLength(5), Validators.maxLength(10)]],
      direccion:                ['', [Validators.minLength(5),   Validators.maxLength(68)]],
      codigoDistrito:           ['', [Validators.required,       Validators.minLength(1), Validators.maxLength(10), Validators.pattern(/^\d{1,10}$/)]],
      pais:                     [{ value:'Colombia', disabled: true }],
      departamento:             ['', Validators.required],
      ciudad:                   [{ value:'', disabled: true}, Validators.required],
      telefonoMovil:            ['', [Validators.required,    Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d{10}$/)]],
      correoRepresentante:      ['', [Validators.required,    Validators.minLength(5), Validators.maxLength(50), Validators.pattern(/^(?:[^ ]+[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*[.][a-zA-Z]{2,5})?$/)]],
      correoFactura1:           ['', [Validators.required,    Validators.minLength(5), Validators.maxLength(50), Validators.pattern(/^(?:[^ ]+[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*[.][a-zA-Z]{2,5})?$/)]],
      correoFactura2:           ['', [Validators.minLength(5),Validators.maxLength(50), Validators.pattern(/^(?:[^ ]+[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*[.][a-zA-Z]{2,5})?$/)]],
      nombreContactoOperativo:  ['', [Validators.required,    Validators.minLength(3), Validators.maxLength(69), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      telefonoMovilContacto:    ['', [Validators.required,    Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d{10}$/)]],
      correoContacto:           ['', [Validators.required,    Validators.minLength(5), Validators.maxLength(50), Validators.pattern(/^(?:[^ ]+[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*[.][a-zA-Z]{2,5})?$/)]],
      nombreContactoTesoreria:  ['', [Validators.required,    Validators.minLength(3), Validators.maxLength(69), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      telefonoMovilTesoreria:   ['', [Validators.required,    Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d{10}$/)]],
      correoTesoreria1:         ['', [Validators.required,    Validators.minLength(5), Validators.maxLength(50), Validators.pattern(/^(?:[^ ]+[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*[.][a-zA-Z]{2,5})?$/)]],
      correoTesoreria2:         ['', [Validators.minLength(5),Validators.maxLength(50), Validators.pattern(/^(?:[^ ]+[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)*[.][a-zA-Z]{2,5})?$/)]]
    });

    
    this.formulario.get('departamento')?.valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe(departamentoCode => {
        this.filterCiudades(departamentoCode);
    });
  }

  public onSelectionChange(event: any): void {
    this.selectedOption = event.value?event.value:this.selectedOption;
    
    if(this.selectedOption == 'myCompany') {
      this.reloadComponentUploadDocument();
      this.requestDocument.nit = this.userInfo.empresa?.id!;
      this.requestDocument.mandato = '-1';
      this.ownerId = this.userInfo.empresa?.id!;
      this.owner = this.userInfo.empresa?.companyName!;

      const typeCompany: ICompanyType = getCompanyTypeSelected(this.userInfo.empresa?.tiposEmpresas!);
      this.requestDocument.companyType = getCompanyTypeName(typeCompany.companyTypeId);

      this.getCustomerData(this.userInfo.empresa?.id!);
      this.consultClient = 0;
      this.consignee = '';
    }
    
  }


  // si no es un agencia por defecto cargue los valores al formulario
  private isUserAgent(): void {
    let verifyIsAgent: boolean = false; 
    this.userInfo.empresa?.tiposEmpresas.forEach( (tipoEmpresa) => {
      if(tipoEmpresa.companyTypeId.includes('06') && tipoEmpresa.selected){
        verifyIsAgent = true;
      }
    });

    this.isAgent = verifyIsAgent;
    
    if(!this.isAgent){this.selectedOption = 'myCompany';}

    if(!this.isAgent && this.userInfo.empresa?.id){

      const typeCompany: ICompanyType = getCompanyTypeSelected(this.userInfo.empresa?.tiposEmpresas!);
      this.requestDocument.companyType = getCompanyTypeName(typeCompany.companyTypeId);
      this.requestDocument.nit = this.userInfo.empresa?.id!;
      this.requestDocument.mandato = '-1';

      this.ownerId = this.userInfo.empresa?.id!;
      this.owner = this.userInfo.empresa?.companyName!;

      this.ownerId = this.userInfo.empresa?.id!;
      this.owner = this.userInfo.empresa?.companyName!;

      this.getCustomerData(this.userInfo.empresa?.id!);
      this.consultClient = 0;
      this.consignee = '';
    }
  }
  

public onSubmit(): Observable<boolean> {

  this.getInvalidFields();
    if (!this.validateForm()) {
      return of(false);
    }

    this.compareFormDataWithBackup();

    if(this.action == 'create'){
      this.owner = this.formulario.get('razonSocial')?.value;
    }

    this.informationCustomerRequest.customerId = this.formulario.get('nit')?.value;
    this.informationCustomerRequest.creatorId = this.userInfo.empresa?.id;
    this.informationCustomerRequest.creatorUserId = this.userInfo.userName;
    this.informationCustomerRequest.contactName = this.userInfo.nombres + " " + this.userInfo.apellidos;
    this.informationCustomerRequest.contactEmail = this.userInfo.correo;
    this.informationCustomerRequest.contactPhone = null;
    this.informationCustomerRequest.requestStatus = '1Creada';
    this.informationCustomerRequest.requestInfo = JSON.stringify(this.filterObjectsWithNewValue(this.valueChangesCustomer));
    this.informationCustomerRequest.infoStatus = this.getStatusForSave(this.valueChangesCustomer);
    this.informationCustomerRequest.requestFlow = null;



    const dialogRef = this.matDialog.open(CustomerManagementFormConfirmComponent, {
      width: "55rem",
      data:{
        action: this.action,
        customerData: this.valueChangesCustomer,
        documents: this.documentsByUploadFile,
        informationCustomerRequest: this.informationCustomerRequest,
        hasNotification: true,
        notificationData: this.customerRequestNotificationData,
        privilege: privileges.GE_REG_ACT
      }
    });
    const dialogSubscription = dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {

        this.showForm=false;
        this.selectedOption = '';
        this.reloadComponentAfterConfirm();
   
      } else if (result === 0) {
      }
    });
    this.subscriptions.add(dialogSubscription);

    dialogRef.afterClosed().subscribe(() => {
      this.subscriptions.unsubscribe(); 
    });

    return of(true);
  }

 
  validateForm() {
    
    
    this.showFieldOrDocumentsPending();

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return false;
    }
    return true;
  }


  showFieldOrDocumentsPending(): void {
    this.invalidFields = [];
    //Recuperamos los campos incorrectos en el formulario
    if (this.formulario.invalid) {
      this.invalidFields =  this.getInvalidFields();
    }
    this.statesServiceBusinessManagement.setInvalidFields(this.invalidFields);
    let missingRequiredDocuments: string [] = this.statesServiceBusinessManagement.getMissingRequiredDocuments();

    if( this.invalidFields.length > 0 || missingRequiredDocuments.length > 0 ){
      if (this.matDialog.openDialogs.length === 0) { 
        this.matDialog.open(PendingFieldsAndDocumentsComponentComponent, {
          width: '50%'
        });
      }
    }
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const maxDigits = 12;
  
    // Solo permito numeros
    let sanitizedValue = input.value.replace(/[^0-9]/g, '');
  
    if (sanitizedValue.length > maxDigits) {
      sanitizedValue = sanitizedValue.slice(0, maxDigits);
    }
  
    // Actualizo el valor del input
    input.value = sanitizedValue;
  } 

  onEnter(input: Event) {
    const inputElement = input.target as HTMLInputElement;
    this.ownerId = inputElement.value;
    if(this.ownerId.length < 9 || this.ownerId.length > 12){
      this.matSnackBar.open(
            'El nit no es valido',
            '',
            {
              verticalPosition: 'top',
              duration: 5000,
              panelClass: ['error-snackbar'],
            }
          );
          return;
    }

    
    if(this.selectedOption == 'newClient'){
      this.reloadComponentUploadDocument();
      this.requestDocument.companyType = 'cliente';
      this.requestDocument.nit = this.ownerId;
  
      this.formulario.reset();
      this.getCustomerData(this.ownerId, this.userInfo.empresa?.id!);
      this.consultClient = 0;
      this.consignee = '';
    }
  }


  hasFormError(campo: string, tipoError: string): boolean | undefined {
    if(!!this.receivedForm) return false
    return this.formulario.get(campo)?.errors?.hasOwnProperty(tipoError);
  }

  // Método para obtener el mensaje
getMessageBeforeChange(campo: string): string {
  if(!!this.receivedForm || this.tipoPresentacion == '2' || this.tipoPresentacion == '0') return '';    
  
  if (!this.isFormModified(campo)) {
    return '';
  }

  const campoValue = this.backupDataResult[campo as keyof CustomerData];
  if (!campoValue) {
    return 'Sin dato previo';
  }

  let message = `Dato anterior: ${campoValue}`;
  
  if (this.tipoPresentacion === '1' && this.formulario.get(campo)?.value!= campoValue) {
    return this.transforMessage(message);
  }

  return '';
}

isFormModified(campo: string): boolean {
  if(!!this.receivedForm) return false;  
  if( campo == 'tratamiento')  {
    return this.transformDataInFieldTratamiento (this.formulario.get(campo)?.value)!== this.backupDataResult[campo as keyof CustomerData];
  }
    return this.formulario.get(campo)?.value !== this.backupDataResult[campo as keyof CustomerData];
}

transformDataInFieldTratamiento(value: string){
  switch (value) {
    case ('empresa'):
      return 'Empresa';
    case ('Senor'):
      return 'Señor';
    case ('senor'):
        return 'Señor';
    case ('Senora'):
        return 'Señora';
    case ('senora'):
        return 'Señora';
    default:
      return value;
  }
}


transforMessage(message: string): string {
  switch (message) {
    case 'Dato anterior: J':
      return 'Dato anterior: Jurídica';
    case 'Dato anterior: N':
      return 'Dato anterior: Natural';
    default:
      return message;
  }
}

  get emailField() {
    return this.formulario.get('razonSocial');
  }

  invalidField(campo: string): boolean | undefined {
    return this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched;
  }



  assignServiceResponseToForm( data: ICustomerDTO, dataRequest: CustomerRequest) {

    if(data.departamento && data.ciudad){
      this.departmentClient = data.departamento; 
      this.clientHaveCitie = data.ciudad; 
    }
   
    this.action = data.nit == "" ? 'create' : 'update';
    if(data.tipoPresentacion=='1'){
      this.formulario.patchValue({
        tratamiento: data.tratamiento || '',
        tipoPersona: data.tipoPersona || '',
        nit: data.nit || '',
        razonSocial: data.razonSocial || '',
        sigla: data.sigla || '',
        direccion: data.direccion || '',
        codigoDistrito: data.distrito || '',
        pais: 'Colombia', 
        departamento: data.departamento? data.departamento : '',
        ciudad: data.departamento? data.ciudad : '', 
        telefonoMovil: data.telefono1 || '',
        correoRepresentante: data.email || '',
        correoFactura1: data.correoFE1 || '',
        correoFactura2: data.correoFE2 || '',
        nombreContactoOperativo: data.nombreC1 || '',
        telefonoMovilContacto: data.telefonoC1 || '',
        correoContacto: data.mailC1 || '',
        nombreContactoTesoreria: data.nombreC2 || '',
        telefonoMovilTesoreria: data.telefonoC2 || '',
        correoTesoreria1: data.mailC1 || '',
        correoTesoreria2: data.mailC2 || ''
        });
      this.formulario.get('nit')?.disable();

     this.matDialog.open(MessageEditCustomerDialogComponent, {
        width: "25rem",
        data:{
          selectOption:  this.selectedOption,
          isAgent: this.isAgent
        }
      });
      
    }

    if(data.tipoPresentacion=='2'){
      this.formulario.patchValue({
        nit: data.nit || '',
        pais: 'Colombia', 
      });
      this.formulario.get('nit')?.disable();
    }
    if(data.tipoPresentacion=='0'){
      this.formulario.patchValue({
        nit: dataRequest.principalNit || '',
        pais: 'Colombia', 
      });
      this.formulario.get('nit')?.disable();
    }

    if(this.action == 'update'){
      this.owner = data.razonSocial!;
    }
  }

    generateBackupInfo(data: ICustomerDTO){
      data.tratamiento
      this.backupDataResult = {
        tipoPersona: data.tipoPersona || '',
        nit: data.nit || '',
        tratamiento: data.tratamiento  || '',
        razonSocial: data.razonSocial || '',
        sigla: data.sigla || '',
        direccion: data.direccion || '',
        codigoDistrito: data.distrito || '',
        pais: 'Colombia', 
        departamento:  data.departamento || '',
        ciudad: data.ciudad || '',
        telefonoMovil: data.telefono1 || '',
        correoRepresentante: data.email || '',
        correoFactura1: data.correoFE1 || '',
        correoFactura2: data.correoFE2 || '',
        nombreContactoOperativo: data.nombreC1 || '',
        telefonoMovilContacto: data.telefonoC1 || '',
        correoContacto: data.mailC1 || '',
        nombreContactoTesoreria: data.nombreC2 || '',
        telefonoMovilTesoreria: data.telefonoC2 || '',
        correoTesoreria1: data.mailC1 || '',
        correoTesoreria2: data.mailC2 || ''
      }
    }


  compareFormDataWithBackup() {
    const formValues: FormDataCustomer = this.formulario.value;
    
    // Incluyo en nit como valor con cambio ya que este no se permite editar, debe quedar dentro de la solicitud
    if(this.tipoPresentacion == '0' ){
        this.valueChangesCustomer['nit'] = {
          new: this.formulario.get('nit')?.value,
          old: null
        }
    }

    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {

        let newValue = ((this.backupDataResult[key as keyof CustomerData])  !=  (this.formulario.get(key)?.value ? this.formulario.get(key)?.value: '')) ? (this.formulario.get(key)?.value) : null; 
        this.valueChangesCustomer[key] = {
          new: newValue,
          old: this.backupDataResult[key as keyof CustomerData] ?  this.backupDataResult[key as keyof CustomerData]! : null
        };
      }
    }
  }


  filterObjectsWithNewValue(obj: IValueChangeCustomer): IValueChangeCustomer {
    // Se utiliza Object.entries para iterar sobre las propiedades del objeto
    const filteredEntries = Object.entries(obj).filter(([key, value]) => {
      return value.new !== null && value.new !== '';
    });
  
    // Convertimos el array filtrado de nuevo a un objeto
    const filteredObject: IValueChangeCustomer = Object.fromEntries(filteredEntries);
  
    return filteredObject;
  }


  getStatusForSave(valueChangesCustomer : IValueChangeCustomer): string {
    if(this.tipoPresentacion == '0'){
      return 'Nueva'
    }
    if(this.hasAtLeastOneValue(valueChangesCustomer)){
      return 'DatosDocumental'
    }
    return 'Documental';
  }

  
  hasAtLeastOneValue(obj: IValueChangeCustomer): boolean { 
    for (const key in obj) {

      if( obj.hasOwnProperty(key) ) {
        const value = obj[key];
        if(value.new !== null) {
          return true;
        }
      }
    }
    return false; 
  }
  

  

  resetData(){
    this.showForm = false; 
    this.validatedCliente = false;

    this.formulario.reset();
    this.filteredCiudades = [];
    this.initializeForm();

  }

  getCustomerData(principalNit: string, secondaryNit?: string) :void {

    this.resetData();

    this.customerReq.principalNit = principalNit;
    this.customerReq.secondaryNit = secondaryNit ? secondaryNit : '';
   
    this.businessManagementService.getInfoCustomer(this.customerReq)
    .pipe(
      catchError(error => {
          // mirar si le mostramos este mensaje al usuario o algo generico: error obteniendo información, por favor intente nuevamente
        this.errorMessage = 'Error al obtener información del cliente'; 
        return of(''); 
      })
    )
    .subscribe( response => {
     
      if(response.length){
        let resp =  JSON.parse(this.aesEncryptionUtilService.decrypt(response));
        
        if(resp.length > 0 && resp[0].request_flag){

          let customerData: ICustomerDTO = resp[0];

          this.customerRequestFlag = customerData.request_flag;
          this.departmentClient = '';
          this.clientHaveCitie = '';
          
          if(customerData.request_flag == '1'){  
          this.matDialog.open(CustomerRequestInProgressMessageComponent, {
              width: '25rem'
            });
        
          } else  {
            
            this.tipoPresentacion = customerData.tipoPresentacion ? customerData.tipoPresentacion : '';
            
            /*Enviar el mandato != -1 solo aplica cuando un agente quiere actualizar un cliente
             0 es una agencia sin mandato, 1 es una agencia con mandato  -1  cualquier otro caso
            */

             if(this.selectedOption == 'myCompany' ) {
              this.requestDocument.mandato = '-1';
             } 
             else if(this.selectedOption == 'activeClient') {

              switch (customerData.tipoPresentacion){
                case '0':
                  this.requestDocument.mandato = '-1';
                  break;

                case '1':
                  this.requestDocument.mandato = '1';
                  break;

                case '2':
                  this.requestDocument.mandato = '0';
                  break;

                default:
                   this.requestDocument.mandato = '-1';
              }

            } else if(this.selectedOption == 'newClient') {

              switch (customerData.tipoPresentacion){
                case '0':
                  this.requestDocument.mandato = '0'; //  Mandar 0 si el cliente es nuevo, estoy en segunda opción 
                  break;
                case '1':
                  this.requestDocument.mandato = '1';
                  break;
                case '2':
                  this.requestDocument.mandato = '0';
                  break;
                default:
                    this.requestDocument.mandato = '-1';
              }

            }

            this.getTypesDocuments(this.requestDocument);
            this.getInfoDepartments();
            this.getInforCities();
            this.showForm = true; 
      
            this.assignServiceResponseToForm(customerData, this.customerReq);
            this.generateBackupInfo(customerData);
          }
        }
        
      }else{
        this.documentsTypes = [];
      }

    });
  }


  private getInfoDepartments(): void{
    this.utilService.getDepartments().pipe(
      catchError(error => {
          // mirar si le mostramos este mensaje al usuario o algo generico: error obteniendo información, por favor intente nuevamente
        this.errorMessage = 'Error al obtener departamentos'; 
        return of([]); 
      })
    )
    .subscribe((resp) => {
      this.departaments = resp.sort( (a, b) =>{
        if (a.depName < b.depName) {
          return -1;
        }
        if (a.depName > b.depName) {
            return 1;
        }
        return 0;
      });
    });
  }
  

  private getInforCities():void {
    this.utilService.getCities().pipe(
      catchError(error => {
        // mirar si le mostramos este mensaje al usuario o algo generico: error obteniendo información, por favor intente nuevamente
        this.errorMessage = 'Error al obtener las ciudades/municipios'; 
        return of([]);
      })
    )
    .subscribe((resp) => {
      this.cities = resp.sort( (a, b) =>{
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
      });
      this.asignateCities();
    });


  }
  asignateCities(){
    this.validatedCliente = true;

    if(!this.clientHaveCitie || this.tipoPresentacion != '1') return;

    let departmentSelected: IDepartment [] = this.departaments.filter( element =>  element.depName ===  this.departmentClient);
    
    this.filteredCiudades = this.cities.filter( (ciudad) => ciudad.code === (departmentSelected[0]?.depCode ? departmentSelected[0].depCode : '') );
    this.formulario.get('ciudad')?.setValue(this.clientHaveCitie);
    this.formulario.get('ciudad')?.enable();
  }

  private getTypesDocuments( requestDocument: MandatoryDocumentation ) {
    this.businessManagementService.getBusinessManagementDocuments(requestDocument)
    .pipe(
      catchError(error => {
        this.errorMessage = 'Error al obtener tipos de documentos'; 
        return of([]);
      })
    )
    .subscribe( resp => {
      this.documentsTypes = resp;
      this.reload = true;
      
      //Seteamos los nuevos valores necesarios a guardar al momento de registrar la solicitud
      const requestType = this.documentsTypes[0].request_type ? this.documentsTypes[0].request_type: '';
      this.statesServiceBusinessManagement.setRequestType(requestType);
      this.statesServiceBusinessManagement.setRepresentedByAgent(requestDocument.mandato);
    });
  }

  ngOnDestroy(): void {
    this.isSubscribed = false;
    this.backupDataResult = {};
    this.destroy$.next();
    this.destroy$.complete();
  }

  reloadComponentUploadDocument() {
    this.reload = false; 
    setTimeout(() => {
      this.reload = true;
    }, 500);
  }

  reloadComponentAfterConfirm() {
    const currentUrl = this.router.url;
    this.statesServiceBusinessManagement.resetAllProperties();

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.destroy$.next();
      this.destroy$.complete();
      this.router.navigate([currentUrl]);
    });
  }



  initializeFormByInput(form: FormGroup): void {
    this.departaments =  this.receivedDepartment ? this.receivedDepartment : [];
    this.filteredCiudades = this.receivedCity ? this.receivedCity : [];

    this.reload= true;
    this.showForm = true; 
    this.formulario = this.receivedForm;
    this.formulario.patchValue(this.receivedForm.value);

    this.formulario.disable();  
  }

  
  onCustomerSelected(selectedValue: string) {

    if( this.consultClient == 0){
      
      if(selectedValue.split('/')[1] && selectedValue.split('/')[1] != ''){
        this.nitConsignee = selectedValue.split('/')[1] ? selectedValue.split('/')[0] : '';
        this.ownerId =  this.nitConsignee;
        this.consignee = selectedValue.split('/')[1] ? selectedValue.split('/')[1] : '';
        this.fullConsignee = this.nitConsignee + '/' + this.consignee;
        
        if(this.selectedOption == 'activeClient'){
       
          this.reloadComponentUploadDocument();
          this.requestDocument.companyType = 'cliente';
          this.requestDocument.nit = this.ownerId;
          
          this.formulario.reset();
          
          this.getCustomerData(this.nitConsignee, this.userInfo.empresa?.id!);
          this.consultClient = 1;
        }
        
      }
    }
  }

  public clean (value: () => void): void {
      this.cleanCustomerFunction = value;
      this.ownerId = '';
      this.nitConsignee = '';
      this.consignee = '';
      this.fullConsignee = '';
      
      this.store.dispatch(cleanSelectedCustomer());
  }


  private defaultCustomerRequest() : ICreateCustomerRequest {
    return { 
            requestId: null,
            customerId: null,
            creatorId: null,
            creatorUserId: null,
            createdAt: null,
            contactName: null,
            contactEmail: null,
            contactPhone: null,
            requestStatus: null,
            requestInfo: null,
            infoStatus: null,
            requestFlow: null,
            finalizedAt: null
    };
  }


  private getInvalidFields(): string[] {
    let invalidFields: string[] = [];
  
    Object.keys(this.formulario.controls).forEach(key => {
      const control = this.formulario.get(key);
      if (control && control.invalid) {
        let field = keyValueMap[key] || key;
        invalidFields.push(field);
      }
    });

    return invalidFields;
  }

}
   