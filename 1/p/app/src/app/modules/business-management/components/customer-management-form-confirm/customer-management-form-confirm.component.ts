import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { catchError, of, Subject, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { ICreateCustomerRequest, IformaDataPresentationResum, IValueChangeCustomer } from 'src/app/core/interfaces/business-management.interface';
import { getFormattedDate, parseCustomDateStringToDate } from 'src/app/shared/utils/utils';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { StatesServiceBusinessManagement } from '../../services/states.service';
import { BusinessManagementService } from '../../services/business-management.service';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilService } from 'src/app/shared/services/util.service';
import { Router } from '@angular/router';
import { StringToNotification } from 'src/app/shared/utils/string-to-notification';
import { keyValueMap } from 'src/app/shared/constants/app.constants';
import { INotificationPrivilege } from 'src/app/core/dto/notification-privilege.dto';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';


import { IGeneratePdfForRequestCustomer } from 'src/app/core/dto/business-management-generate-pdf.dto';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
interface ResponseData {
  rowTitle: any; // Correspondiente a 'Solicitud: ${information.requestNumber}'
  rowDescription: any;
  rowBodyInfoCompany:any;
  rowBodyDocuments:any;
}



interface ICustomerManagementFormConfirm {
  action: string;
  customerData: IValueChangeCustomer;
  informationCustomerRequest: ICreateCustomerRequest;
  documents: IformaDataPresentationResum [];
  hasNotification: boolean, 
  notificationData: any
  privilege: string
}

interface ICustomerManagementNotification {
  action: string;
  customerData: IformaDataPresentationResum [];
  documentData: IformaDataPresentationResum [];
}

@Component({
  selector: 'app-customer-management-form-confirm',
  templateUrl: './customer-management-form-confirm.component.html',
  styleUrls: ['./customer-management-form-confirm.component.css']
})
export class CustomerManagementFormConfirmComponent implements OnInit, OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();
  public user!: IAPIGatewayStore;
  dataCompanyWithChanges: IformaDataPresentationResum [] = [];
  valueChangeCustomer!:IValueChangeCustomer;
  currentDateWithFormat = '';
  documentsByUploadFile: IformaDataPresentationResum [] = [];

  messageAction: string = '';
  messageActionNotification: string = '';
  messageActionForPDF: string = '';
  messageActionAcept: string = '';
  razonSocialValue: string = '';
  emailSacNotificaction: string = '';
  initCreateCustomer: boolean = true;
  isCreateNewRequest = false;
  userCreator : string = '';

  customerRequest: ICreateCustomerRequest = {
    requestId: null,
    customerId:  null,
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
    finalizedAt: null,
    representedByAgent: null,
    requestType: null

  };

  constructor(
    public dialogRef: MatDialogRef<CustomerManagementFormConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: ICustomerManagementFormConfirm,
    private readonly store: Store,
    private statesServiceBusinessManagement: StatesServiceBusinessManagement,
    private businessManagementService: BusinessManagementService,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly matSnackBar: MatSnackBar,
    private readonly utilService: UtilService,
    private router: Router,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService,
    
  ) {}
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


    this.valueChangeCustomer = this.dialogData.customerData;
    this.currentDateWithFormat = getFormattedDate();

    if(this.dialogData.action == 'create'){
      this.messageAction = $localize`:@@67c1e8e64f86ae352ecebdfff2bfcd868edaec15dd9bf276eab3dcf303c9fe8b: module.business.management.customer.management.form.confirm.text.action.create`;
      this.messageActionAcept = $localize`:@@25b1fc1b4dba6b01bf6e77407edbcfb07d5f3bb5007fcd43f28bd6d3da75cbab: module.business.management.customer.management.form.confirm.text.action.confirmation.create`;

      this.messageActionNotification = $localize`:@@d4e8f9c3a1b2c4e7d8f9b3e1a7d6b8c5f2e3a9b7c4e1f8a3b2c7e9d1f3b6a8: module.business.management.customer.management.form.confirm.text.action.create.notification`;
      this.messageActionForPDF = $localize`:@@15b6d3f482c9a0e41b8d7a3c6d5e1c2f9b7a4c8e5gaL9d8abc6f4b7a39e2Xm8: module.business.management.customer.management.form.confirm.text.action.create.pdf`;
    } else {
      this.messageAction = $localize`:@@74abf7fa7e75ebf581c90ea1b2bcf7dae3cdd1210168ff2d6ef56fa6ae00512f: module.business.management.customer.management.form.confirm.text.action.edit`;
      this.messageActionAcept = $localize`:@@8f30f8eeaa3269cc4257609747c263c268c73cfee06ef4da89f8b45fc21b4cf4: module.business.management.customer.management.form.confirm.text.action.confirmation.edit`;
      
      this.messageActionNotification = $localize`:@@b5a7c9c3f1b4e48a3f1b7c9e7d8f6a8b9c4e7f1a3d8b7e9f3c4b7a8d9e6f7c2: module.business.management.customer.management.form.confirm.text.action.edit.notification`;
      this.messageActionForPDF = $localize`:@@f2b3c5d874e9a0f23b1d6a94d72e4a5b8a6f4b3c9beJ4d1ccc7a3d5c82b614Pn4: module.business.management.customer.management.form.confirm.text.action.edit.pdf`;
    } 

    this.userCreator = this.user.userName + ' con nombre: ' +  this.user.nombres + " " + this.user.apellidos;
    this.razonSocialValue = this.getValueByKey(this.valueChangeCustomer, 'razonSocial');
    this.messageAction = this.replaceValuesCustomerAction(this.razonSocialValue, this.userCreator, this.currentDateWithFormat);



    //Obtengo valores ingresados a mostrar en el resumen
    this.dataCompanyWithChanges = this.getNonNullValues();
    this.dataCompanyWithChanges = this.updateValueToPresentation(this.dataCompanyWithChanges);
    this.dataCompanyWithChanges = this.transformKeys(this.dataCompanyWithChanges);
    this.documentsByUploadFile = this.dialogData.documents;
  }

  // this.messageAction = $localizenewLocal;

  updateValueToPresentation(datosClienteToPresentation: IformaDataPresentationResum []): IformaDataPresentationResum[]{
    datosClienteToPresentation.forEach(item => {
            switch (item.key) {
              case 'tratamiento':
                switch (item.value) {
                  case 'Senor':
                    item.value = 'Señor';
                    break;
                  case 'Senora':
                    item.value = 'Señora';
                    break;
                }
                break;
              case 'tipoPersona':
                switch (item.value) {
                  case 'N':
                    item.value = 'Natural';
                    break;
                  case 'J':
                    item.value = 'Jurídica';
                    break;
                }
                break;
            }
          });

    return datosClienteToPresentation;
 }


  accept(): void {
    this.getEmailsSacToNotification();

    this.statesServiceBusinessManagement.setIsAcceptCreateRequest(true);
    this.statesServiceBusinessManagement.getStateIdDocumentationObservable().pipe(
      takeUntil(this.destroy$)
    ).subscribe( (value) => {
      if( value != null) { 

        if(this.initCreateCustomer){
          this.createRequestCustomer(value);
          this.initCreateCustomer = false;
          this.statesServiceBusinessManagement.setIdDocumentation(null);
        }

      } 
      
    });
  }

  cancel(): void {
    this.statesServiceBusinessManagement.setIsAcceptCreateRequest(false);
    this.dialogRef.close(0); 
  }

  replaceValuesCustomerAction(company: string, userCreator: string, currentDate: string): string {
    return this.messageAction
      .replace('{{value1}}', company)
      .replace('{{value2}}', userCreator)
      .replace('{{value3}}', currentDate);
  }

  replaceValuesCustomerActionNotification(company: string, userCreator: string, currentDate: string, requestId: string): string {
    return this.messageActionNotification
      .replace('{{value1}}', company)
      .replace('{{value2}}', userCreator)
      .replace('{{value3}}', currentDate)
      .replace('{{value4}}', requestId);
  }
 
  replaceValuesCustomerActionForPDF(company: string, userCreator: string, currentDate: string): string {
    return this.messageActionForPDF
      .replace('{{value1}}', company)
      .replace('{{value2}}', userCreator)
      .replace('{{value3}}', currentDate)
  }

  getValueByKey(obj: IValueChangeCustomer, key: string): string {
    const value = obj[key];
    if (!value) {
      return '';
    }
    const valueFind = value.new !== null ? value.new : value.old;
    return valueFind != null ? valueFind.toString() : '';
  }

  getNonNullValues(): { key: string, value: string }[] {
    return Object.keys(this.valueChangeCustomer)
      .filter(key => this.valueChangeCustomer[key].new !== null)
      .map(key => ({
        key,
        value: this.valueChangeCustomer[key].new as string
      }));
  }

 

  createRequestCustomer(value : string): void {
    if(!this.isCreateNewRequest){
      this.isCreateNewRequest = true;

      this.customerRequest.requestId = String(value);
      this.customerRequest.createdAt = parseCustomDateStringToDate(this.statesServiceBusinessManagement.getTimeSaveDocuments());
      this.customerRequest.customerId = this.dialogData.informationCustomerRequest.customerId;
      this.customerRequest.creatorId = this.dialogData.informationCustomerRequest.creatorId;
      this.customerRequest.creatorUserId = this.dialogData.informationCustomerRequest.creatorUserId;
      this.customerRequest.contactName = this.dialogData.informationCustomerRequest.contactName;
      this.customerRequest.contactEmail = this.dialogData.informationCustomerRequest.contactEmail;
      this.customerRequest.contactPhone = this.dialogData.informationCustomerRequest.contactPhone;
      this.customerRequest.requestStatus = this.dialogData.informationCustomerRequest.requestStatus;
      this.customerRequest.requestInfo = this.dialogData.informationCustomerRequest.requestInfo;
      this.customerRequest.infoStatus = this.dialogData.informationCustomerRequest.infoStatus;
      this.customerRequest.requestFlow = this.dialogData.informationCustomerRequest.requestFlow;
      this.customerRequest.representedByAgent = parseInt( this.statesServiceBusinessManagement.getRepresentedByAgent() );
      this.customerRequest.requestType = this.statesServiceBusinessManagement.getRequestType();


      //LLAMAR SERVICIOS PARA CREAR SOLICITUD, NOTIFICAR Y DESCARGAR PDF, AL FINALIZAR RESETEAR VALUES
      this.businessManagementService.createCustomerRequest(this.customerRequest)
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {   
          this.matSnackBar.open(
                $localize`:@@c855cf2bfdbbe99f94acd4bcec3feb4fb85bcafeda11dee2ec592a0b1b4316aa: modules.business.management.customer.management.form.confirm.create.request.error`,
                "",
                {
                  verticalPosition: "top",
                  panelClass: ["error-snackbar"],
                  duration: 7000
                }
              );
          this.statesServiceBusinessManagement.resetAllProperties();
          return of(null);
        })
      )
      .subscribe( (resp) => {
        this.matSnackBar.open(
          $localize`:@@a3d5ef9b7a9fc29d74b1c9e8c73adb5f12edb4a8fd7eab29c8f1b78a9c6531df: modules.business.management.customer.management.form.confirm.create.request.success`,
          "",
          {
            verticalPosition: "top",
            duration: 7000,
            panelClass: ["success-snackbar"]
          }
        );


        // Proceso de generación de documentos.
        let requestToPdf: IGeneratePdfForRequestCustomer = {
          "requestNumber": value,
          "description":  this.replaceValuesCustomerActionForPDF(this.razonSocialValue, this.userCreator, this.currentDateWithFormat),
          "infoCompany": this.dataCompanyWithChanges,
          "documents": this.documentsByUploadFile
        }

      
        this.generatePdfAndDownload(this.generateDataForPDF(requestToPdf));


        if(this.dialogData.hasNotification) {
          this.messageActionNotification = this.replaceValuesCustomerActionNotification(this.razonSocialValue, this.userCreator, this.currentDateWithFormat, value);

          const bodyNotification: ICustomerManagementNotification = {
            action: this.messageActionNotification,
            customerData: StringToNotification.replaceAccentsInArray(this.dataCompanyWithChanges),
            documentData: StringToNotification.replaceAccentsInArray(this.documentsByUploadFile)
          }

          let body:INotificationPrivilege = {
            companyId: null,
            mailsNotifications: this.emailSacNotificaction,
            notificationInfo: this.base64EncryptionUtilService.toBase64(JSON.stringify(bodyNotification)),
            privilegeId: this.dialogData.privilege
          };

          this.utilService.notifyPrivilegeListUsert(body).pipe(
            takeUntil(this.destroy$)
          ).subscribe({ next: () => {} });
        }

        this.statesServiceBusinessManagement.resetAllProperties();
        this.reloadComponentAfterConfirm();
        if(resp!.length){
          this.dialogRef.close(1);
        }
      })

    }
  }
  
  toBase64(str: string): string {
    const utf8Bytes = new TextEncoder().encode(str);
    const binaryString = String.fromCharCode(...utf8Bytes);
    return btoa(binaryString);
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


  reloadComponentAfterConfirm() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  transformKeys(dataCustomerChange: IformaDataPresentationResum[]): IformaDataPresentationResum[] {
    return dataCustomerChange.map(item => {
      const newKey = keyValueMap[item.key] || item.key;
      return { key: newKey, value: item.value };
    });
  }

  generateDataForPDF(information : IGeneratePdfForRequestCustomer): ResponseData {
  
    let title =  { text: `Solicitud: ${information.requestNumber}`, style: 'header' };

    let description = { 
      text: information.description,  margin: [0, 10, 0, 10]
    }

    let bodyInfoCompany: any = [];
    information.infoCompany.map ( item => {
      let row = [{ text: item.key, bold: true }, item.value];
      bodyInfoCompany.push(row);
    });

    if(bodyInfoCompany.length == 0) {
      let row = [{ text: 'Sin Cambios en la Información de la Empresa'}, ''];
      bodyInfoCompany.push(row);
    }

    let bodyDocuments: any = [];
    information.documents.map(item => {
      // Documento: título en negrita y valor en una nueva línea
      bodyDocuments.push({ text: item.key, bold: true });
      bodyDocuments.push({ text: item.value, margin: [0, 2, 0, 10] });
      
      // Separador de línea entre documentos
      bodyDocuments.push({ canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1 }] });
    });

    let responseData : ResponseData = {
        rowTitle : title,
        rowDescription: description,
        rowBodyInfoCompany: bodyInfoCompany,
        rowBodyDocuments: bodyDocuments
    };

    return responseData;
  }


  public generatePdfAndDownload( dataForPdf: ResponseData): void {
    
    this.getBase64ImageFromURL('assets/img/headerPdf.jpg').then((logoDataUrl: string) => {

      this.getBase64ImageFromURL('assets/img/footerPdf.jpg').then((footerDataUrl: string) => {
      
          // creo el contenido dinamico segun si rowBodyInfoCompany tiene datos o no (para solicitudes de status Documental)
          const companyTableTitle = { 
            text: 'Información Modificada de la Empresa', 
            style: 'subheader' 
          };

          const companyTableContent =  {
            layout: 'lightHorizontalLines',
            table: {
              headerRows: 0,
              widths: ['*', '*'],
              body: dataForPdf.rowBodyInfoCompany
            }
          };
        
          
        let pdfBody: any  = {

          // Margen global para respetar el header y el footer
          pageMargins: [40, 80, 40, 80],  // [left, top (header), right, bottom (footer)]

          header: {
            image: logoDataUrl,  // Imagen del header en Base64
            width: 530,  // Ancho del logo para que ocupe el 100% del espacio
            alignment: 'center',
            margin: [5, 10, 0, 0],  // Eliminar márgenes extra para que se quede dentro del margen global
          },
          
          content: [          
          dataForPdf.rowTitle,          
          dataForPdf.rowDescription,
          companyTableTitle,
          companyTableContent,
            { text: 'Documentos Cargados', style: 'subheader'},
            ...dataForPdf.rowBodyDocuments  // Desplegar los documentos con líneas separadoras
          ],
          footer: {
              stack: [
                {
                  image: footerDataUrl,  // Imagen del footer en Base64
                  width: 530, 
                  alignment: 'center',
                  margin: [15, 0, 0, 15],  // Eliminar márgenes extra
                },
               
              ],
              margin: [20, 10, 0, 50],
              alignment: 'center'
          },
          styles: {
            header: {
              fontSize: 18,
              bold: true,
              margin: [0, 25, 0, 10],
              color: '#ffffff',
              background: '#4caf50',
              alignment: 'center'
            },
            subheader: {
              fontSize: 16,
              bold: true,
              margin: [0, 15, 0, 15],
              alignment: 'center'
            }
          },
          defaultStyle: {
            columnGap: 20
          }
      };
    
      const pdf = pdfMake.createPdf(pdfBody);
      pdf.download(dataForPdf.rowTitle.text);
      });
    });
  }

  // Función para convertir una imagen local en Base64
public getBase64ImageFromURL(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.crossOrigin = 'Anonymous';  // Importante para evitar problemas de CORS si es necesario
    img.src = url;
    img.onload = () => {
      let canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      let ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);
      let dataURL = canvas.toDataURL('image/jpeg');  // Obtener la imagen como Base64
      resolve(dataURL);
    };
    img.onerror = (error) => {
      reject(error);
    };
  });
}


}
