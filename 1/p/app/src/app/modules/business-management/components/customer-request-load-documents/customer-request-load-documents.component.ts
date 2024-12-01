import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { catchError, Observable, of, Subject, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { CustomerRequest, ICustomerRequestGkey, IInfoCustomerRequest, IRequestDetails, ParsedObject } from 'src/app/core/interfaces/business-management.interface';
import { IDocumentRouteData } from 'src/app/core/interfaces/document-type-file-route.interfaces';
import { MandatoryDocumentation } from 'src/app/core/interfaces/mandatory-documentation.interface';
import { IFilesName } from 'src/app/shared/components/upload-file/interfaces/upload-file.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { BusinessManagementService } from '../../services/business-management.service';
import { getCompanyTypeName, getCompanyTypeSelected } from 'src/app/shared/utils/utils';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICity } from 'src/app/core/interfaces/city.interfaces';
import { IDepartment } from 'src/app/core/interfaces/department.interface';
import { ICompanyType } from 'src/app/core/interfaces/company-type.interface';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';

@Component({
  selector: 'app-customer-request-load-documents',
  templateUrl: './customer-request-load-documents.component.html',
  styleUrls: ['./customer-request-load-documents.component.css']
})
export class CustomerRequestLoadDocumentsComponent implements OnInit {
  public destroy$: Subject<void> = new Subject<void>();
  public user!: IAPIGatewayStore;

  public routeData: IDocumentRouteData = { documentation_module : 'GEST_CLIE_NEW' };
  public nbr: string = 'null';
  public documentsTypes: IFilesName []= [];   
  public request!: IRequestDetails;   
  public tab: string = 'GE_CON_SOL';  

  //inputs to provider 
  filledForm: FormGroup;
  receivedDepartment: IDepartment [] = [];
  receivedCity: ICity [] = [];
  
  public dataRequestInfo: string = '';
  
  customerReq:CustomerRequest = {
    principalNit: '',
    secondaryNit: '',
  };
  
  errorMessage: string = '';
  
  requestDocument: MandatoryDocumentation = {
    nit: '',
    companyType: '',
    mandato: '-1'
  };


  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private readonly store: Store,
    private businessManagementService: BusinessManagementService,
    private fb: FormBuilder,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService,
   ){
      this.filledForm = this.fb.group({
          tratamiento:              [],
          tipoPersona:              [],
          nit:                      [],
          razonSocial:              [],
          sigla:                    [],
          direccion:                [],
          codigoDistrito:           [],
          pais:                     [],
          departamento:             [],
          ciudad:                   [],
          telefonoMovil:            [],
          correoRepresentante:      [],
          correoFactura1:           [],
          correoFactura2:           [],
          nombreContactoOperativo:  [],
          telefonoMovilContacto:    [],
          correoContacto:           [],
          nombreContactoTesoreria:  [],
          telefonoMovilTesoreria:   [],
          correoTesoreria1:         [],
          correoTesoreria2:         [],
        });
    }

  ngOnInit(): void {

    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (apiGatewayStore: IAPIGatewayStore) => {
        this.user = apiGatewayStore;

        this.destroy$.next();
        this.destroy$.complete();
      },
      error: error => console.error(error)
    });

    this.request = this.dialogData.rowSelect;
    this.nbr = this.request.request;

    this.createParametersRequestDocument();
    this.getInfoCustomerByRequest(this.request.gkeyRequest);
  }


  validateForm() {
    return true;
  }

  public onSubmit(): Observable<boolean> {
      return of(true);
  }

  private createParametersRequestDocument(){
    /* si el nit de la solicitud es diferente al nit de la empresa que estoy logueado es un cliente
     si el nit es igual tomar como tipo de empresa (companyType) la que tiene selected el usuario logueado
     si es multiempresa igual aplica ya que debo seleccionar una */
    if(this.request.nit == this.user.empresa?.id){
      const typeCompany: ICompanyType = getCompanyTypeSelected(this.user.empresa?.tiposEmpresas!);

      this.requestDocument.companyType = getCompanyTypeName(typeCompany.companyTypeId);
    }else{
      this.requestDocument.companyType = 'cliente';
    }
    this.requestDocument.nit = this.request.nit;
    this.requestDocument.mandato = '-1';
  }

  private getTypesDocuments( requestDocument: MandatoryDocumentation ) {
    this.businessManagementService.getBusinessManagementDocuments(requestDocument)
    .pipe(
      takeUntil(this.destroy$),
      catchError(error => {
        this.errorMessage = 'Error al obtener tipos de documentos'; 
        return of([]);
      })
    )
    .subscribe( resp => {
      this.documentsTypes = resp;
    });
  }
  

  


  getInfoCustomerByRequest(gkeyRequest: string) :void {
    let customerRequestGkey: ICustomerRequestGkey = {
          gkeyCustomerRequest: gkeyRequest
    }
    
    this.businessManagementService.getInfoCustomerByRequest(customerRequestGkey)
    .pipe(
      takeUntil(this.destroy$),
      catchError(error => {
          // mirar si le mostramos este mensaje al usuario o algo generico: error obteniendo información, por favor intente nuevamente
        this.errorMessage = 'Error al obtener información del cliente'; 
        return of(''); 
      })
    )
    .subscribe( resp => {
      if(resp.length){
        let response: IInfoCustomerRequest[] = JSON.parse(this.aesEncryptionUtilService.decrypt(resp));
        //Trabajamos con el tipo de mandato que se registro desde la creacion de la solicitud
        this.requestDocument.mandato = response[0].represented_by_agent;
        this.getTypesDocuments(this.requestDocument);

        this.assignServiceResponseToForm(response[0]);
      } else {
        this.mapDataFormRequest();
      }
    });
  }


  assignServiceResponseToForm( data: IInfoCustomerRequest) {
    //seteamos los valores que vienen del cliente y luego los que venga de requestInfo con this.mapDataFormRequest();
    this.filledForm.patchValue({
      tratamiento: data.tratamiento || '',
      tipoPersona: data.tipoPersona || '',
      nit: data.nit || '',
      razonSocial: data.razonSocial || '',
      sigla: data.sigla || '',
      direccion: data.direccion || '',
      codigoDistrito: data.distrito || '',
      pais: data.pais || 'Colombia', 
      departamento: data.departamento|| '',
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
      });

      this.mapDataFormRequest();
      this.defineDepartmentAndCity();
  }


  mapDataFormRequest(){
    
    this.dataRequestInfo = this.request.information? this.request.information : '';
    const parsedObject: ParsedObject = JSON.parse(this.dataRequestInfo);

    //Mapeamos todos los valores a partir de information si existe esa key en filledForm
    Object.entries(parsedObject).forEach(([key, value]) => {
      if (this.filledForm.controls[key] && value.new) {
        this.filledForm.controls[key].setValue(value.new);
      }
    });
  }

  defineDepartmentAndCity(){
    let deparment: IDepartment = {depCode: '', depName: this.filledForm.value.departamento};
    this.receivedDepartment.push(deparment);

    let city: ICity = {code:'', name: this.filledForm.value.ciudad};
    this.receivedCity.push(city);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
