import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UploadFileService } from './services/upload-file.service';
import { UploadFileInterfaces,AlertMessage, IFilesName, IDocument, InfoFile, IRevision } from './interfaces/upload-file.interface';
import { FormControl} from '@angular/forms';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable, of, Subject, Subscription, takeUntil } from 'rxjs';
import { UtilService } from '../../services/util.service';
import { typesModulesDocumentation } from '../../enums/documentation-modules.enum';
import { getCurrentDateInString } from '../../utils/utils';
import { StatesServiceBusinessManagement } from 'src/app/modules/business-management/services/states.service';
import { IformaDataPresentationResum } from 'src/app/core/interfaces/business-management.interface';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent  implements OnInit, OnDestroy{
    @ViewChild('fileInput')  fileInput!: ElementRef;
    @Input() module?: string;
    @Input() nbr?: string;
    @Input() ownerId?: string;
    @Input() owner?: string;
    @Input() tab?: string;
    @Input() formValid?: () =>  Observable<boolean>;
    @Input() documentsTypes?: IFilesName[] = [];
    @Input() validateForm?: () => boolean; 
    

    bottonActionComponent: string= '';
    private acceptSubscription!: Subscription;


    private _arraySizeSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    arraySize$ = this._arraySizeSubject.asObservable();

    private _finishSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    finish$ = this._finishSubject.asObservable();

    private documentsSubject = new BehaviorSubject<IformaDataPresentationResum[]>([]);
    documentsLoad$ = this.documentsSubject.asObservable();
    
    respondeSaveDocumentation!: IDocument;


    displayedColumns: string[] = ['Icon', 'Documento', 'Nombre', 'Fecha','CargadoPor', 'Acciones'];
    dataSource = new MatTableDataSource<UploadFileInterfaces>();
    pdfFiles: UploadFileInterfaces[] = []; // los que voy cargando
    typeControl = new FormControl();
    private consigneeLoadValid: boolean = true;
    
    private acceptSubscriptionConsigneeValid!: Subscription;
    
    panelOpenState = false;
    fileUploadQueue: any;
    file:any;
    optionSelect: IFilesName[] =[];
    selectedValue: string = '';
    countFile:Number=0;
    alert:AlertMessage = {showAlert:false,message:"",clase:""};
    documentServe: IDocument[] = []; 
    currentDateForGestCliEncode: string = '';
    currentDateForGestCli: string = '';
    hasRejectFiles :number = 0;
    isBlockFile: boolean = false;
    revisions:IRevision[]=[];
    maxAllowedDocumentSize: number = 0;

    public destroy$: Subject<void> = new Subject<void>();
    constructor(
                private uploadFileService: UploadFileService,
                private base64EncryptionUtilService: Base64EncryptionUtilService,
                private readonly utilService: UtilService,
                private statesServiceBusinessManagement: StatesServiceBusinessManagement
              ) {
    }


  ngOnInit(){
    this.documentsSubject.next([]);
      this.dataSource.data = this.pdfFiles;
      this.getFiles();
      this.getMaxAllowedDocumentSize();

     if(this.documentsTypes!.length){
      this.documentsTypesOrderByOrderName();
     }

     // validar y definir los valores a los inputs por defecto para evitar errores: 
    this.module = this.module ?? '';
    this.nbr = this.nbr ?? '';
    this.ownerId = this.ownerId ?? '';
    this.owner = this.owner ?? '';
    this.tab = this.tab ?? '';
    this.bottonActionComponent = this.tab == 'GE_REG_ACT'? 'Crear Solicitud': 'Actualizar Documentos';
    this.documentsTypes = this.documentsTypes ?? [];
    this.formValid = this.formValid ?? (() => of(false));
    this.validateForm = this.validateForm ?? (() => false);
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const dataTransfer = event.dataTransfer;
    if (dataTransfer) {
      this.handleFiles(dataTransfer.files);
    }
 }

 onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;
    target.classList.add('active');
 }

 onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;
    target.classList.remove('active');
 }

  onFileSelected(event: any): void {
    this.handleFiles(event.target.files);
    this.fileInput.nativeElement.value = '';
  }

  handleFiles(lfiles: FileList): void {
    if(this.hasRejectFiles > 0)
    {
        this.showAlertTime($localize`:@@8FA09A65018E319583B33D77E522B073B9B895CB59E60977DA9E39E61DF8A728: module.documental.upload.file.reject.message`,"alerta");
    }else{
      const files: FileList = lfiles;
      if(this.typeControl.value)
      {
        for (let i = 0; i < files.length; i++) {
          if ( (files[i].size > this.maxAllowedDocumentSize) || (files[i].size == 0) ) {
            this.showAlertTime($localize`:@@8ECB347690B77C129A17211383304CD88EE0D9F8F4361D6A605CBDF87C9C5EEF: module.documental.upload.file.size.message`,'alerta');
            return;
          }
          if (files[i].type === 'application/pdf') {
            this.pdfFiles.unshift({icon:"cloud_upload",type:this.typeControl.value,file:files[i],status:"",isLoad:false,document:{fileName: files[i].name}});
            this._arraySizeSubject.next(this.pdfFiles.filter((pdf) => !pdf.isLoad).length);
             // Actualiza el BehaviorSubject con la nueva lista de documentos
            this.updateDocumentsSubject();
            this.dataSource.data = this.pdfFiles;
            this.pdfFiles.filter((pdf) => !pdf.isLoad).length > 0
          } else {
            this.showAlertTime($localize`:@@EF8128F3C4E2F73CD95DDB90F8AE55BE57BCEA685ACB86ED389D59F845B9D56D: module.documental.upload.file.type.message`,"alerta");
          }
        }
      }else{
        this.showAlertTime($localize`:@@C4F32E1D3E5EDD80BAF801E5863A4B71B217AC0133D42677EC3EFCA037011D8A: module.documental.upload.file.document.message`,"alerta");
      }
    }
  }


private saveFiles(): void {
  // Verificar si hay archivos que no se han cargado
  const filesToUpload = this.pdfFiles.filter((pdf) => !pdf.isLoad);

  // Actualiza el BehaviorSubject con la nueva lista de documentos
  this.updateDocumentsSubject();

  // Si no hay archivos para cargar, no hacemos nada
  if (filesToUpload.length === 0) {
    return;
  }

  // Se define la función que manejará la carga y el guardado de cada archivo
  const uploadAndSaveFile = (pdf: UploadFileInterfaces): Promise<void> => {
    const formData = new FormData();

    const fileFound = this.documentServe[0].files.find(
      (file) => file.fileName.name === pdf.type
    );

    if (fileFound) {
      fileFound.files.push({ fileName: pdf.file.name });
    }

    if ( this.nbr === 'null' && this.module === typesModulesDocumentation.GEST_CLIE_NEW &&  this.documentServe[0]?.nbr != 'REQUEST') {
      this.documentServe[0].nbr = 'REQUEST';
      this.documentServe[0].ownerId = this.ownerId!;
      this.documentServe[0].owner = this.owner!;
    }

    formData.append('file', pdf.file);
    formData.append('documentation', 
                     this.base64EncryptionUtilService.b64EncodeUnicode(JSON.stringify(this.documentServe[0]))
                    );

    return new Promise<void>((resolve, reject) => {
      //se suben los documentos al server FTP

      if ( this.nbr === 'null' && this.module === typesModulesDocumentation.GEST_CLIE_NEW ) {
        this.uploadFileService
          .uploadFile(formData, this.currentDateForGestCliEncode)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (data: string) => {
              resolve();
            },
            error(err) {
              console.log(err);
              reject(err);
            },
          });
        this.documentServe[0].nbr = 'REQUEST-' + this.currentDateForGestCli;
      }
      else {
        this.uploadFileService.uploadFile(formData)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (data: string) => {
            resolve();
          },
          error(err) {
            console.log(err);
            reject(err);
          },
        });
      }
    });
  };
 // Realizar la carga y guardado de cada archivo en secuencia
  const uploadPromises = filesToUpload.reduce((chain, pdf) => {
    return chain.then(() =>
      uploadAndSaveFile(pdf).catch((error) => {
        console.error(`Error cargando ${pdf.type}:`);
        console.error(`Error name ${pdf.file.name}:`);
        return Promise.resolve(); // Resuelve la promesa para continuar el encadenamiento
      })
    );
  }, Promise.resolve());



  // Al finalizar todas las cargas y guardados, se actualiza la lista de archivos
  uploadPromises
    .then(() => {
      // Una vez que todos los archivos han sido cargados exitosamente,
      // actualizamos su estado a 'isLoad: true' para evitar su re-carga.
      filesToUpload.forEach((pdf) => (pdf.isLoad = true));

      //Se realiza el guardado en la BD
      this.uploadFileService.saveFiles(this.documentServe[0])
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if ( this.nbr === 'null' && this.module === typesModulesDocumentation.GEST_CLIE_NEW ) {
            this.respondeSaveDocumentation = JSON.parse( this.base64EncryptionUtilService.b64DecodeUnicode(response) );

            if (this.statesServiceBusinessManagement.getIdDocumentation() == null) {
              this.statesServiceBusinessManagement.setIdDocumentation( this.currentDateForGestCli );
            }
          }

          this.consigneeLoadValid = false;
          if (
            this.consigneeLoadValid ||
            this.module === typesModulesDocumentation.OS_DES_VAC
          ) {
            this.getFiles();
          }
          if (this.nbr != 'null' && this.module === typesModulesDocumentation.GEST_CLIE_NEW) {
              this.statesServiceBusinessManagement.setLoadDocumentsFromGESTCLIE(true); ////flag para llamar a notificar
          }
          this.showAlertTime(
            $localize`:@@9550731151441BAE3AAAB1A8048E57E006181F29F57349282CFE79F000000001: module.documental.upload.file.load.message`,
            'exitoso'
          );
          this._finishSubject.next(true);
        },
        error(err) {},
      });
    })
    .catch((err) => {
      this.showAlertTime(
        $localize`:@@9550731151441BAE3AAAB1A8048E57E006181F29F57349282CFE79F000000002: module.documental.upload.file.notLoad.message`,
        'alerta'
      );
    });
}


  uploadFiles():void{
    let isSaveFiles = true;

   
    if( (this.module == typesModulesDocumentation.GEST_CLIE_NEW) ){
      
      let missingRequiredDocuments = this.getMissingRequiredDocuments();
      this.statesServiceBusinessManagement.setMissingRequiredDocuments(missingRequiredDocuments);
      
      this.validateForm!(); //Hacemos que valide el formulario 

      if(this.validateExistDocumentRequired()){
        this.formValid!()
        .pipe(takeUntil(this.destroy$))
        .subscribe( isValid => {
          if (isValid) {
            if(this.nbr === 'null'){

              this.acceptSubscription =  this.statesServiceBusinessManagement.getStateIsAcceptCreateRequest()
                .pipe(takeUntil(this.destroy$))
                .subscribe( isAccept => {
                  if(isAccept && isSaveFiles){
                      this.currentDateForGestCli = getCurrentDateInString();
                      this.statesServiceBusinessManagement.setTimeSaveDocuments(this.currentDateForGestCli);
                      this.currentDateForGestCliEncode = this.base64EncryptionUtilService.b64EncodeUnicode(this.currentDateForGestCli);

                      this.saveFiles();
                      isSaveFiles = false;
                  } else {
                    // cancelo la suscripción si el modal fue cancelado
                    if (this.acceptSubscription) {
                      this.acceptSubscription.unsubscribe();
                    }
                  }
                  
              })
            } else {
              //Cuando se cargan documentos a una solicitudes.
              if(isSaveFiles){
                
                this.saveFiles();
                // this.statesServiceBusinessManagement.setLoadDocumentsFromGESTCLIE(true);

                isSaveFiles = false;
              }
            }
          }
        });
      } else{
        this.showAlertTime($localize`:@@facc1c7badcf5eaba3082eb97a0bcbce9af03b83a6f1fab4e6ff596419942d0a: module.documental.upload.file.document.message.documents.required`, "alerta");
      }

    } else if (!this.typeControl.value) {
      this.showAlertTime($localize`:@@C4F32E1D3E5EDD80BAF801E5863A4B71B217AC0133D42677EC3EFCA037011D8A: module.documental.upload.file.document.message`, "alerta");
    }
    else {
      this.acceptSubscriptionConsigneeValid = this.formValid!()
      .pipe(takeUntil(this.destroy$))
      .subscribe( isValid => {
        if (isValid) {
          if(this.consigneeLoadValid){
              this.saveFiles();
          }
        }else {
          if (this.acceptSubscriptionConsigneeValid) {
            this.acceptSubscriptionConsigneeValid.unsubscribe();
          }
        }
      });
    }
  }

  getFiles():void {

    this.consigneeLoadValid = true;
      this.pdfFiles=[];
      this.documentServe=[];
      this.hasRejectFiles = 0;
      
      this.uploadFileService.getFile(this.module!,this.base64EncryptionUtilService.b64EncodeUnicode(this.nbr!))
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: string) => {
          this.documentServe = JSON.parse(this.base64EncryptionUtilService.b64DecodeUnicode(data));
          if(this.documentsTypes!.length > 0){
            this.optionSelect = this.documentsTypes!;
          }
          else{

              this.optionSelect = this.documentServe[0].type.filesName;

              this.optionSelect.sort((a, b) => {
                if (a.order! < b.order!) {
                    return -1;
                }
                if (a.order! > b.order!) {
                    return 1;
                }
                return 0;
              });
          }

          if(this.documentServe[0].observations != null){
            this.revisions =  JSON.parse(this.documentServe[0].observations).revision;
            this.revisions.sort((a, b) =>{
                if (a.date !== undefined && b.date !== undefined) {
                  let dateA = new Date(a.date);
                  let dateB = new Date(b.date);
                  return dateB.getTime() - dateA.getTime(); // Orden descendente
              } else {
                  return 0;
              }
            });
          }

          this.documentServe[0].files.forEach((files) => {
            files.files.forEach((element:InfoFile ) => {
              if(!element.deleted) {
                const newFile = new File([''], element.fileName, { type: 'application/pdf' });
                this.pdfFiles.push({icon:this.getIcon(element), type:files.fileName.name, file:newFile, status:this.getIcon(element), isLoad:true, document:element});
                this._arraySizeSubject.next(this.pdfFiles.filter((pdf) => !pdf.isLoad).length);



                if(element.rejected){
                  this.hasRejectFiles = this.hasRejectFiles+1;
                }

              }

            });
          });
          this.pdfFiles.sort((fileOne, fileTwo) => {
            if (fileOne.document?.createdAt !== undefined && fileTwo.document?.createdAt !== undefined) {
                return fileTwo.document.createdAt - fileOne.document.createdAt;
            } else {
                return 0;
            }
          });

          // Actualiza el BehaviorSubject con la nueva lista de documentos
          this.updateDocumentsSubject();

          this.dataSource.data = this.pdfFiles;
          if(this.hasRejectFiles > 0)
          {
            this.showAlertTime($localize`:@@8FA09A65018E319583B33D77E522B073B9B895CB59E60977DA9E39E61DF8A728: module.documental.upload.file.reject.message`,"alerta");
          }

        },
        error: error =>{
          console.error(error)
        }
      });

  }

  public deleteFileLoad(file:UploadFileInterfaces,index:number ):void{

    if(file.isLoad){
      if(this.module == typesModulesDocumentation.GEST_CLIE_NEW){
        this.uploadFileService.deleteFileFromServer(file.document.id ?? 0)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (data: string) => {
            if(data){
              this.showAlertTime($localize`:@@5FDA94F0C82B40AD1EC4C71B1535B3EB3A079CAAE090D50DF683973E08A2F46F: module.documental.upload.file.delete.message`,"exitoso");
                this.pdfFiles.splice(index,1)

                // Actualiza el BehaviorSubject con la nueva lista de documentos
                this.updateDocumentsSubject();

                this.dataSource.data = this.pdfFiles;
                this._arraySizeSubject.next(this.pdfFiles.filter((pdf) => !pdf.isLoad).length);
              for (let i = 0; i < this.documentServe[0].files.length; i++) {
                const filesElement = this.documentServe[0].files[i];
                // Filtrar los archivos cuyo id no coincide con el id a eliminar
                filesElement.files = filesElement.files.filter(doc => doc.id !== file.document.id);
              }

              this.hasRejectFiles = (this.pdfFiles.filter(doc => doc.document.rejected)).length; // validar si me retorna los rechazados
              }
          },
          error: error =>{
            console.error(error)
          }
        });
      }
      else{
        this.uploadFileService.deleteFile(file.document.id ?? 0,this.documentServe[0].id)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (data: string) => {
            if(data){
              this.showAlertTime($localize`:@@5FDA94F0C82B40AD1EC4C71B1535B3EB3A079CAAE090D50DF683973E08A2F46F: module.documental.upload.file.delete.message`,"exitoso");
                this.pdfFiles.splice(index,1)

                // Actualiza el BehaviorSubject con la nueva lista de documentos
                this.updateDocumentsSubject();

                this.dataSource.data = this.pdfFiles;
                this._arraySizeSubject.next(this.pdfFiles.filter((pdf) => !pdf.isLoad).length);
              for (let i = 0; i < this.documentServe[0].files.length; i++) {
                const filesElement = this.documentServe[0].files[i];
                // Filtrar los archivos cuyo id no coincide con el id a eliminar
                filesElement.files = filesElement.files.filter(doc => doc.id !== file.document.id);
              }

              this.hasRejectFiles = (this.pdfFiles.filter(doc => doc.document.rejected)).length; // validar si me retorna los rechazados
              }
          },
          error: error =>{
            console.error(error)
          }
        });
      }
    }else{
      this.pdfFiles.splice(index,1)
      this.dataSource.data = this.pdfFiles;
      this._arraySizeSubject.next(this.pdfFiles.filter((pdf) => !pdf.isLoad).length);
      this.updateDocumentsSubject();
      this.showAlertTime($localize`:@@5FDA94F0C82B40AD1EC4C71B1535B3EB3A079CAAE090D50DF683973E08A2F46F: module.documental.upload.file.delete.message`,"exitoso");
    }
  }

  showAlertTime(mesasge:string,clase:string):void {
    this.alert.message = mesasge;
    this.alert.showAlert = true;
    this.alert.clase = clase;
    setTimeout(() => {
      this.alert.showAlert = false;
    }, 4000);
  }

  getIcon(infoFile: InfoFile): string {
    if (infoFile.approved) {
       return 'done_all';
    } else if (infoFile.rejected) {
       return 'block';
    } if(infoFile.approved == null && !infoFile.rejected == null ){
      return 'cloud_done'
    }
    else{
       return 'done';
    }
  }


  private getMaxAllowedDocumentSize(): void{

    this.utilService.getMaxAllowedDocumentSize()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (value) => {
            this.maxAllowedDocumentSize = value;
      },
      error: (err) => {
        console.error('Error consultado el peso maximo para documentos permitidos: ', err);
      }
    }
    )
  }

  cancel(){
    this.statesServiceBusinessManagement.setIsCancelCreateRequest(true);
  }


  private updateDocumentsSubject(): void {

    // Extrae los nombres de los archivos PDF de la lista y emite los valores nuevos
     const documentNames = this.pdfFiles.map(file => file.document.fileName);
    //  this.documentsSubject.next(documentNames);

     const keyValueArray: IformaDataPresentationResum[] = this.pdfFiles.map(item => {
      return {
        key: item.type,
        value: item.document.fileName
      };
    });
    this.documentsSubject.next(keyValueArray);
  }

  documentsTypesOrderByOrderName(): void {
    this.documentsTypes!.sort((a, b) => {
      if (a.file_order! < b.file_order!) {
          return -1;
      }
      if (a.file_order! > b.file_order!) {
          return 1;
      }
      return 0;
    });
  }


  validateExistDocumentRequired(): boolean {

    if(this.module == typesModulesDocumentation.GEST_CLIE_NEW){

        const obligatoryDocuments = this.documentsTypes!.filter(doc => doc.obligatorio === 'S'); 

        for (let doc of obligatoryDocuments) {
          // Comprobamos si existe al menos un elemento en pdfFiles cuyo tipo coincide con el nombre del documento
          const exists: boolean = this.dataSource.filteredData.some(item => item.type === doc.name);
          if (!exists) {
            // Si algún documento obligatorio no está en el pdfFiles
            return false;
          }
        }
        return true;
    } 
    return false;
  }

  getMissingRequiredDocuments(): string [] {

    let missingRequiredDocuments : string [] = [];
    
    if(this.module == typesModulesDocumentation.GEST_CLIE_NEW){

        const obligatoryDocuments = this.documentsTypes!.filter(doc => doc.obligatorio === 'S'); 

        for (let doc of obligatoryDocuments) {
          // Comprobamos si existe al menos un elemento en pdfFiles cuyo tipo coincide con el nombre del documento
          const exists: boolean = this.dataSource.filteredData.some(item => item.type === doc.name);
          if (!exists) {
            // Si algún documento obligatorio no está en el pdfFiles
            missingRequiredDocuments.push(doc.name);  
          }
        }
    } 

    return missingRequiredDocuments;
  }


  ngOnDestroy(): void {
    this.consigneeLoadValid = true;
    this.destroy$.next();
    this.destroy$.complete();
  }

}
