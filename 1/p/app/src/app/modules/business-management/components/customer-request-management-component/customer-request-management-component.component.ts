import { AfterViewInit, Component, EventEmitter, OnInit, Output, TemplateRef, Type, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IRequestCompany, IRequestDetails, IRequestFlow, IRespondeRequestCompany } from 'src/app/core/interfaces/business-management.interface';
import { BusinessManagementService } from '../../services/business-management.service';
import { catchError, of, Subject, Subscription, takeUntil } from 'rxjs';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { Store } from '@ngrx/store';
import { privileges } from 'src/app/core/privileges.enum';
import { MatDialog } from '@angular/material/dialog';
import { CustomerRequestLoadDocumentsComponent } from '../customer-request-load-documents/customer-request-load-documents.component';
import { StatesServiceBusinessManagement } from '../../services/states.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilService } from 'src/app/shared/services/util.service';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { formatLocalDateISO } from 'src/app/shared/utils/utils';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';

@Component({
  selector: 'app-customer-request-management-component',
  templateUrl: './customer-request-management-component.component.html',
  styleUrls: ['./customer-request-management-component.component.css'],
})
export class CustomerRequestManagementComponentComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('secondaryContent') secondaryContentTemplate!: TemplateRef<any>;

  @Output() secondaryContent = new EventEmitter<TemplateRef<any>>();

  @Output() componentChange = new EventEmitter<Type<any>>();

  @ViewChild(MatSort) sort!: MatSort;

  myForm!: FormGroup;
  public dataSource: MatTableDataSource<IRequestDetails> = new MatTableDataSource<IRequestDetails>([]);
  public displayedColumns: Array<string> = [];
  errorMessage: string = '';
  public userInfo!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>();
  public privileges: typeof privileges = privileges;
  emailSacNotificaction: string = '';
  nbr: string = '';
  requestCompany: IRespondeRequestCompany[] = [];
  private subscription: Subscription | null = null;
  isSearchFilter: boolean = false;

  requestWithObservations!: IRequestDetails[];

  showSecondaryComponent() {
    this.componentChange.emit();
  }

  statusOptions: { name: string, value: string }[] = [
    { name: 'Todas', value: 'todas' },
    { name: 'En proceso', value: 'enproceso' },
    { name: 'Aprobadas', value: 'aprobada' },
    { name: 'Rechazadas', value: 'rechazada' },
  ];

  constructor(
    private fb: FormBuilder,
    private businessManagementService: BusinessManagementService,
    private readonly store: Store,
    private readonly matDialog: MatDialog,
    private readonly matSnackBar: MatSnackBar,
    private statesServiceBusinessManagement: StatesServiceBusinessManagement,
    private readonly utilService: UtilService,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService,
  ) {  }

  ngAfterViewInit(): void {
    // Emitimos el contenido secundario al componente padre después de que la vista se haya inicializado
    this.secondaryContent.emit(this.secondaryContentTemplate);
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.store
      .select(apiGatewayFeatureSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (APIGatewatStore: IAPIGatewayStore) => {
          this.userInfo = APIGatewatStore;
        },
        error: (error) => console.error(error),
      });

    this.displayedColumns = [
      'request', 
      'lastUpdate', 
      'creator', 
      'status', 
      'nit', 
      'name', 
      'observations', 
      'view'
    ];
    const today = new Date();
    const fifteenDaysAgo = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 15
    );

    this.myForm = this.fb.group({
        startDate: [ fifteenDaysAgo.toISOString(),   [Validators.required]],
        endDate: [formatLocalDateISO(today), [Validators.required]],
        status: [this.statusOptions[0].value, [Validators.required]],
      },{
        validators: this.dateRangeValidator(),
      });
   
  }

  public onSubmit() {
    if (this.myForm.invalid) {
      const errors = this.myForm.errors;
  
      if (errors) {
        this.matSnackBar.open(
          `${errors['dateRange']}`,
          '',
          {
            verticalPosition: 'top',
            duration: 3000,
            panelClass: ['error-snackbar'],
          }
        );
      }
      return;
    }
    
    let request: IRequestCompany = {
      nit: this.userInfo.empresa?.id!,
      startDate: this.formatDate(this.myForm.get('startDate')?.value),
      endDate: this.formatDate(this.myForm.get('endDate')?.value),
      status: this.myForm.get('status')?.value, 
    };
    this.getCustomerRequest(request);
  }

  formatDate(date: string): string {
    return new Date(date).toISOString().slice(0, 10);
  }
  
   dateRangeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const startDate = new Date(control.get('startDate')?.value);

      const endDateValue = control.get('endDate')?.value;
      const endDate = new Date(`${endDateValue}T00:00:00`);  
  
      if (!startDate || !endDate) {
        return null;
      }
  
      const timeDiff = endDate.getTime() - startDate.getTime();
      const dayDiff = timeDiff / (1000 * 3600 * 24); 
  
      if (dayDiff > 15) {
        return { dateRange: 'La diferencia entre ambas fechas no puede ser mayor a 15 días.' };
      }
  
      if (startDate > endDate) {
        return { dateRange: 'La fecha inicial no puede ser mayor a la fecha final.' };
      }
      return null;
    };
  }


  loadNewDocuments( element: IRequestDetails ){
    this.getEmailsSacToNotification();
    this.nbr = element.request;
    const dialogRef = this.matDialog.open(CustomerRequestLoadDocumentsComponent, {
      width: "75%",
      height: "85%",
      disableClose: true,
      data:{
        rowSelect: element,
        hasNotification: true, 
        notificationData: null,
        privilege: privileges.GE_CON_SOL
      }
    });
    this.statesServiceBusinessManagement
      .getStateIsCancelCreateRequest()
      .pipe(takeUntil(this.destroy$))
      .subscribe((isCancel) => {
        if (isCancel) {
          this.matDialog.closeAll();
          this.statesServiceBusinessManagement.resetAllProperties();
        }
      });

      //Cierro el modal si ya se dio en cargar documentos
    let subscriptionGetStateLoadDocumentsFromGESTCLIE = this.statesServiceBusinessManagement.getStateLoadDocumentsFromGESTCLIE()
      .pipe(takeUntil(this.destroy$))
      .subscribe((isLoad) => {
        if(isLoad){
    
          let body = {
            companyId: null,
            mailsNotifications: this.emailSacNotificaction,
            notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify({'nbr':this.nbr})),
            privilegeId: this.privileges.GE_CON_SOL
          };

          if (this.subscription) {
                this.subscription.unsubscribe();
          }

          this.subscription = this.utilService.notifyPrivilegeListUsert(body).pipe(
              takeUntil(this.destroy$))
            .subscribe({
              next: () => {},
              error: (err) => console.error(err)
          });
    
          this.matSnackBar.open(
            $localize`:@@f2e3cd8a61b472d3b92e17f4c8a9e5d6f9b1cd2a4d8f5a2e9c5b7f8d1a3e924b: modules.business.management.customer.request.management.component.update.documents.success`,
            "",
            {
              verticalPosition: "top",
              duration: 7000,
              panelClass: ["success-snackbar"]
            }
          );
          this.matDialog.closeAll();
          
          this.statesServiceBusinessManagement.resetAllProperties();
        }
      })

    dialogRef.afterClosed().subscribe(result => {
          subscriptionGetStateLoadDocumentsFromGESTCLIE.unsubscribe();
         

          this.matDialog.closeAll();
          this.statesServiceBusinessManagement.resetAllProperties();
    })
  }

  private getCustomerRequest(filterParamenter: IRequestCompany) {
    this.businessManagementService.getCustomerRequest(filterParamenter)
      .pipe(
        catchError((error) => {
          this.errorMessage = 'Error al obtener las solicitudes de la empresa';
          return of('');
        })
      )
      .subscribe((response) => {
        let resp: IRespondeRequestCompany [] =  JSON.parse(this.aesEncryptionUtilService.decrypt(response));
        //Ordenamos la lista por fechas
        let result =  resp.sort((a, b) => {
          if (a.last_update === null) return 1;
          if (b.last_update === null) return -1;
          return new Date(b.last_update).getTime() - new Date(a.last_update).getTime();
      });
        this.validateDataCustomerRequest(result);
        
      let requestWithView: IRequestDetails[]=  this.validateDataCustomerRequest(result);
      this.requestWithObservations = this.getDataByRequestFlow(requestWithView);
      
      this.dataSource = new MatTableDataSource<IRequestDetails>(this.requestWithObservations);
      this.dataSource.sort = this.sort;
      this.isSearchFilter = true;
      });
  }

  validateDataCustomerRequest( request: IRespondeRequestCompany[]): IRequestDetails[] {
    const newArray: IRequestDetails[] = request.map((item) => {
      if( item.name == null && item.information && item.information.length > 0 ){
        item.name = this.getRazonSocialNew(item.information!); 
      }

      let view = false;
      if (item.status === '1Creada') {
        view = true;
      }
      return {
        ...item,
        observations: item.observations ?? '',
        request_flow: item.request_flow ?? '',
        view: view,
      };
    });
    return newArray;  
  }


  private  getRazonSocialNew(jsonString: string): string  {
    const data = JSON.parse(jsonString);
    if(data.razonSocial){
      return data.razonSocial?.new || '';
    } else{
      return ''
    }
  }


  private getEmailsSacToNotification():void{
    this.utilService.getEmailsSacToNotification().pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => {
        this.emailSacNotificaction = this.aesEncryptionUtilService.decrypt(value);
      },
      error: (err) => {
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  

  getDataByRequestFlow(response: IRequestDetails[]) : IRequestDetails [] {
    response.forEach( request => {
      if(request.request_flow != null){ 
        if(request.request_flow.length! > 0){ 

          const parsedObject = JSON.parse(request.request_flow);  
          if(parsedObject.length > 0){
            const lastItem: IRequestFlow = parsedObject[parsedObject.length - 1]; 
            request.observations = lastItem.remark;
            request.last_update = lastItem.date;
          }
        }
      }
    })
    return response;
   
  }

  getStatus( status: string): string  {
    
    switch (status) {
      case ('1Creada'):
        return 'Creada';
      case ('1CambioAprobado'):
        return 'Cambio Aprobado';
      case ('9Aprobada'):
        return 'Aprobado';
      case ('8Rechazada'):
        return 'Rechazada';
        default:
          return status;
    }
    
  }
 formatDateByDiferencesFormat(dateString: string): string {
    if (!dateString) return ''; 
    if (!dateString.includes('T'))  return dateString.slice(0, 16);
    return dateString.replace('T', ' ').slice(0, 16);
  }

}

