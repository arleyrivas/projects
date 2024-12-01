import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IRequestDetailsToSac, IRequestFilterSac, IRequestDetailSAC, FieldChange, IRequestFlow, IRequestToUpdateBySac, IRequestByChangeStatus } from 'src/app/core/interfaces/sac-request-management';
import { SacRequestUpdateModalComponent } from '../sac-request-update-modal/sac-request-update-modal.component';
import { SacRequestService } from '../../services/sac-request.service';
import { catchError, of, Subject, takeUntil } from 'rxjs';
import { StatesServiceRequestManagementSAC } from '../../services/StatesServiceRequestManagementSAC.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { Store } from '@ngrx/store';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { getCurrentDateInString, parseCustomDateStringToDate } from 'src/app/shared/utils/utils';
import { Customer } from 'src/app/core/interfaces/customer.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestStatus } from '../../enum/request-status.enum';
import { keyValueMap } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-sac-request-management-result',
  templateUrl: './sac-request-management-result.component.html',
  styleUrls: ['./sac-request-management-result.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SacRequestManagementResultComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<IRequestDetailSAC>;

    private filterDefault?: IRequestFilterSac;
    private resultRequestFilter!: IRequestDetailSAC [];
    errorMessage: string = '';
    expandedElement: IRequestDetailsToSac | null = null;
    ftpServerIp: string = '';
    newStatusToRequest = '';
    hasApprovedChanges: boolean = false;
    customer!: Customer;

    public destroy$: Subject<void> = new Subject<void>();
    public userInfo!: IAPIGatewayStore;


    constructor(
      private readonly matDialog: MatDialog,
      private sacRequestService: SacRequestService,
      private statesServiceRequestManagementSAC: StatesServiceRequestManagementSAC,
      private readonly utilService: UtilService,
      private readonly aesEncryptionUtilService: AESEncryptionUtilService,
      private readonly store: Store,
      private readonly matSnackBar: MatSnackBar,

    ) { 
      this.dataSource = new MatTableDataSource(this.resultRequestFilter);
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

      this.displayedColumns = ['requestNumber', 'requestDateTime', 
        'requestingCompany', 'updatedCompany', 'sacAnalyst', 'lastUpdateDateTime', 
        'status', 'documentsLinkIcon', 'detailIndicator'];

      this.statesServiceRequestManagementSAC.getStateIsUpdateFilterCriterial()
      .pipe(takeUntil(this.destroy$))
      .subscribe( result => {
       
        if(result !== null){
          this.filterDefault = result;
          this.getRequestByFilter(result);
        }
      })

      this.getFtpServerIp();
     }
  
     public toggleRow(element: any) {
       element.selected = !element.selected
    }


    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }



    openDialog(request: IRequestDetailSAC, action:number): void {
      const message: string = this.getMessageByStatus(request, action)
      const dataToSend: IRequestByChangeStatus = {
        request: request,
        messageTojustification: message,
        showLinkForSendEmail: this.canActiveLinkForSendEmail()
      }
      const dialogRef = this.matDialog.open(SacRequestUpdateModalComponent, {
        width: '600px',
        height: '500px',
        disableClose: true,
        data: dataToSend
      });
  
      dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(     
        justification => {
        if (justification != null && justification.length > 0) {
          

          let timeToUpdate: Date = parseCustomDateStringToDate(getCurrentDateInString());

          const localTimeToUpdate = new Date(timeToUpdate.getTime() - (timeToUpdate.getTimezoneOffset() * 60000));

          //Evito ir a actualizar el cliente si no hay modificaciones
          if(this.newStatusToRequest ==  RequestStatus.Aprobada && request.requestInfoForDetail && request.requestInfoForDetail.length > 0) {
            this.customer = this.generateCustomerByRequestInfoForDetail(request, timeToUpdate);
          }
          
          let requestToUpdate: IRequestToUpdateBySac = this.getDataRequestToUpdate(request, timeToUpdate, justification, localTimeToUpdate )

          this.setUpdateRequestCustomerBySac(requestToUpdate);
        }
      });
    }

    canActiveLinkForSendEmail(): boolean{
      if(  this.newStatusToRequest == RequestStatus.Aprobada 
        || this.newStatusToRequest == RequestStatus.Rechazada 
        || this.newStatusToRequest == RequestStatus.CambioAprobado){
        return true;
      }
      return false;
    }


    getDataRequestToUpdate(request: IRequestDetailSAC, timeToUpdate: Date, justification: string, localTimeToUpdate: Date ): IRequestToUpdateBySac {
      
      let requestToUpdate: IRequestToUpdateBySac = {
        id : request.gkeyRequest,
        requestStatus : this.newStatusToRequest,
        requestFlow  : this.getNewRequestFlow(request, this.newStatusToRequest, justification, localTimeToUpdate),
        finalizedAt: null,
      }

      if(this.newStatusToRequest == RequestStatus.Rechazada || this.newStatusToRequest == RequestStatus.Aprobada){
        requestToUpdate.finalizedAt = timeToUpdate;
      }

      return requestToUpdate;
    }


    getNewRequestFlow( request: IRequestDetailSAC, newStatus: string, justification:string, timeToUpdate: Date) : string{
        let newRequestFlow: IRequestFlow = {
            user: this.userInfo.userName,
            date: timeToUpdate,
            remark: justification,
            state: newStatus
        }

        const requestFlowArray: IRequestFlow[] = request.request_flow ? JSON.parse(request.request_flow) : [];

        requestFlowArray.push(newRequestFlow);

        const updatedRequestFlowString = JSON.stringify(requestFlowArray);
      
      return updatedRequestFlowString;

    }

    getMessageByStatus(request: IRequestDetailSAC, action: number): string { //action 1 = boton derecha OK, 0 = boton izquierda KO
     
      let newStatus = '';

      if(request.status.toLowerCase() == '1creada' && request.requestInfoForDetail!.length > 0 && action == 1 ){
        newStatus = 'aprobar cambios';
        this.newStatusToRequest = RequestStatus.CambioAprobado;
        this.hasApprovedChanges = false;
      } 

      if(request.status.toLowerCase() == '1creada' && request.requestInfoForDetail!.length > 0 && action == 0 ){
        newStatus = 'rechazar cambios';
        this.newStatusToRequest = RequestStatus.Rechazada;
        this.hasApprovedChanges = false;
      }

      if(request.status.toLowerCase() == '1creada' && request.requestInfoForDetail!.length == 0 && action == 1 ){
        newStatus = 'aprobar solicitud';
        this.newStatusToRequest = RequestStatus.Aprobada;
        this.hasApprovedChanges = false;
      } 
      
      if(request.status.toLowerCase() == '1creada'&& request.requestInfoForDetail!.length == 0 && action == 0 ){
        newStatus = 'rechazar solicitud';
        this.newStatusToRequest = RequestStatus.Rechazada;
        this.hasApprovedChanges = false;
      }

      if(request.status.toLowerCase() == '1cambioaprobado' && action == 1 ){
        newStatus = 'cambios aplicados sap';
        this.newStatusToRequest = RequestStatus.Aprobada;
        this.hasApprovedChanges = true;
      } 
      

      switch(newStatus){
        case ('rechazar cambios'):
          return 'Su solicitud no procede';
        case ('aprobar cambios'):
          return 'Cordial saludo\nEstimados\n\nSolicitud atendida. El cliente entrará en proceso de creación estimado en 48 horas hábiles a partir del momento de recibido. Sugerimos validar el estado del cliente en Aguadulce Conecta–Módulo Registro Cliente.';
        case ('cambios aplicados sap'):
          return 'La solicitud fue aprobada';
        case ('rechazar solicitud'):
          return 'Su solicitud no procede';
        case ('aprobar solicitud'):
          return 'La solicitud fue aprobada';
      }

      return '';

    }


    getMessageToBotton(request: IRequestDetailSAC, action: number): string { //action 1 = boton derecha aprobar, 0 = boton izquierda negar
        if(request.status.toLowerCase() == '1creada' && request.requestInfoForDetail!.length > 0 && action == 1 ){ 
          return 'Aprobar Cambios';
        } 
        if(request.status.toLowerCase() == '1creada' && request.requestInfoForDetail!.length > 0 && action == 0 ){
          return 'Rechazar Cambios';
        } 
        if(request.status.toLowerCase() == '1creada' &&  request.requestInfoForDetail!.length == 0 && action == 1 ){
          return 'Aprobar Solicitud';
        } 
        if(request.status.toLowerCase() == '1creada'&& request.requestInfoForDetail!.length == 0 && action == 0 ){
          return 'Rechazar Solicitud';
        }
        if(request.status.toLowerCase() == '1cambioaprobado' && action == 1 ){
          return 'Cambios Aplicados SAP';
        } 
        return '';
    }


  getRequestByFilter(filterDefault :IRequestFilterSac){
    if(filterDefault == null) return

    this.sacRequestService.getCustomerRequest(filterDefault).pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.errorMessage = 'Error al obtener tipos de documentos'; 
        return of('');
      })
    ).subscribe( result => {
      this.resultRequestFilter = JSON.parse(this.aesEncryptionUtilService.decrypt(result));
      
      this.resultRequestFilter = this.updatePropertiesResultRequest(this.resultRequestFilter);

      this.resultRequestFilter  = this.getDataByRequestFlow(this.resultRequestFilter);
     
      this.dataSource = new MatTableDataSource(this.resultRequestFilter);
      this.dataSource.sort = this.sort;
    })
  }
  
  setCustomerByApprovalRequest(customer: Customer) {
    this.sacRequestService.setCustomerByApprovalRequest(customer).pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.errorMessage = ''; 
        this.matSnackBar.open(
          "Se presento un problema al guardar los datos de la empresa.",
          "",
          {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 7000
          }
        );
        return of(false);
      })
    ).subscribe( result => {
      if(result){
        this.matSnackBar.open(
          'Se han guardado los datos de la empresa exitosamente',
          "",
          {
            verticalPosition: "top",
            duration: 7000,
            panelClass: ["success-snackbar"]
          }
        );
        this.getRequestByFilter(this.filterDefault!);
      }
    });
  } 

  generateCustomerByRequestInfoForDetail( request: IRequestDetailSAC, timeUpdate: Date): Customer{

    let customer: Customer = {
      id: request.gkeyCustomer ? request.gkeyCustomer : null,
      nit: '',
      treatment: '',
      personType: '',
      initials: '',
      districtCode: '',
      representativeEmail: '',
      operationalContactName: '',
      operationalContactMobile: '',
      operationalContactEmail: '',
      treasuryContactName: '',
      treasuryContactMobile: '',
      secondaryTreasuryEmail: '',
      requestNumber: request.requestNumber, 
      lastSapUpdate: timeUpdate,
    };

    request.requestInfoForDetail!.forEach(change => {
      switch (change.fieldName) {
        case 'nit':
          customer.nit = change.newValue;
          break;
        case 'tratamiento':
          customer.treatment = change.newValue;
          break;
        case 'tipoPersona':
          customer.personType = change.newValue;
          break;
        case 'sigla':
          customer.initials = change.newValue;
          break;
        case 'codigoDistrito':
          customer.districtCode = change.newValue;
          break;
        case 'correoRepresentante':
          customer.representativeEmail = change.newValue;
          break;
        case 'nombreContactoOperativo':
          customer.operationalContactName = change.newValue;
          break;
        case 'telefonoMovilContacto':
          customer.operationalContactMobile = change.newValue;
          break;
        case 'correoContacto':
          customer.operationalContactEmail = change.newValue;
          break;
        case 'nombreContactoTesoreria':
          customer.treasuryContactName = change.newValue;
          break;
        case 'telefonoMovilTesoreria':
          customer.treasuryContactMobile = change.newValue;
          break;
        case 'correoTesoreria2':
          customer.secondaryTreasuryEmail = change.newValue;
          break;
        default:
          break;
      }
    });
  
    if(request.requestType && request.requestType.toLowerCase() == 'create'){
      customer.lastCompletedUpdateDate = timeUpdate;
    }
    return customer;
  }
  setUpdateRequestCustomerBySac(requestToUpdate :IRequestToUpdateBySac){

    this.sacRequestService.setUpdateRequestCustomerBySac(requestToUpdate)
    .pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        console.log(error)
        this.matSnackBar.open(
          "Se presento un problema al actualizar la solicitud",
          "",
          {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 7000
          }
        );
        return of(false);
      })
    )
    .subscribe( resp => {
      this.matSnackBar.open(
        'Solicitud actualizada exitosamente',
        "",
        {
          verticalPosition: "top",
          duration: 7000,
          panelClass: ["success-snackbar"]
        }
      );
      if(this.newStatusToRequest == '9Aprobada' && this.hasApprovedChanges){
        this.setCustomerByApprovalRequest(this.customer);
      }else{
        this.getRequestByFilter(this.filterDefault!);
      }
    });
  }

  updatePropertiesResultRequest( response: IRequestDetailSAC []) :IRequestDetailSAC [] {
    response.forEach( request => {
          request.requestInfoForDetail = this.parseFieldChanges(request.requestInfo);
      }
    )
    return response;
  }


  parseFieldChanges(jsonString: string | null | undefined): FieldChange[] {
      // Validación inicial para manejar null o undefined
      if (!jsonString) {
        return [];
      }
    
      try {
        const parsedObject = JSON.parse(jsonString);
        
        const fieldChanges = Object.keys(parsedObject).map(fieldName => {
          const fieldData = parsedObject[fieldName];
          return {
            fieldName: fieldName,
            oldValue: fieldData.old != null ? fieldData.old : '', 
            newValue: fieldData.new,
          };
        });
    
        return fieldChanges;
      } catch (error) {
        console.error('Error parseando JSON:', error);
        return [];
      }
    }
  
  getDataByRequestFlow(response: IRequestDetailSAC []) : IRequestDetailSAC [] {

    response.forEach( request => { 
      if(request.request_flow != null){ 

        const parsedObject: IRequestFlow[] = JSON.parse(request.request_flow); 
        if(parsedObject.length > 0){
          const lastItem: IRequestFlow = parsedObject[parsedObject.length - 1]; 
          request.sacAnalyst = lastItem.user;
          request.lastUpdateDateTime = lastItem.date;
        }
      }
      
    })
      return response;
  }

  
  getValueForKey(key: string): string {
    return keyValueMap[key] || key; 
  }

  openDocumentsSelected(pathDocuments: string) : string {

    // Remuevo GESTION_CLIENTES/ ya que la carpeta compartida del ftp esta sin esto
    const partToRemove = 'GESTION_CLIENTES/';
    const modifiedString = pathDocuments.replace(partToRemove, '');
    
    const fileUrl = `file://${this.ftpServerIp}${modifiedString}/`;
 
    try {
      return fileUrl;
    } catch (error) {
      console.error("No se pudo abrir el archivo: ruta", error);
      console.error("fileUrl:", fileUrl)
    }
    return '';
  }


  
  private getFtpServerIp(): void{
    this.utilService.getFtpServerIp()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (value) => {
            this.ftpServerIp = this.aesEncryptionUtilService.decrypt(value);
      },
      error: (err) => {
        console.error('Error consultado el peso maximo para documentos permitidos: ', err);
      }
    })
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.statesServiceRequestManagementSAC.resetAllProperties();
  }
}
