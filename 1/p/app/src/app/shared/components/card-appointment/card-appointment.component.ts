import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { detachedLoadFeatureSelector, selectTruckVisitNbrData } from 'src/app/state/detached-load/detached-load.selectors';
import { Subject, Subscription, take, takeUntil } from 'rxjs';
import { Router  } from '@angular/router';
import { CommunicationService } from '../../../modules/detached-load/services/communication.service';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { IAppointmentResponseCargoLots } from 'src/app/core/interfaces/storage-cita.interface';
import { getCancelAppointment, getCausalCancellationAppointment } from 'src/app/state/detached-load/detached-load.actions';
import { CausalCancellationDialogComponent } from 'src/app/shared/components/causal-cancellation-dialog/causal-cancellation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { StorageserviceService } from 'src/app/shared/services/storageservice.service';
import { privileges } from 'src/app/core/privileges.enum';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { getAppointmentCC, getBreakBulk, getPrivilegeNotification } from 'src/app/state/shared/shared.actions';
import { CargoItem } from 'src/app/core/interfaces/data-appointment-cs.interface';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';
import { IContainer, IDataAppointmentCC } from 'src/app/core/interfaces/data-appointment-cc.interface';

interface Cargo {
  id: number;
  unit_nbr: string;
  iso_type: string;
  is_active: boolean;
  is_deleted: boolean;
  is_twenty: boolean;
  pin_id: number;
  trucking_company_id: number;
  trucking_company_ldap: string;
  trucking_company_name_ldap: string;
  cargo_quantity: number;
  cargo_weigth: number;
  truck_visit_appointmentbbk_id: number;
  bl_nbr: string;
}
interface CargoCS {
  billoflading: string;
  blitem: string;
  cargo_quantity: number;
  cargo_weigth: number;
  id: number;
  is_active: boolean;
  is_deleted: boolean;
  is_twenty: boolean;
  iso_type: string;
  pin_id: number
  qty: string;
  truck_visit_appointmentbbk_id: number;
  trucking_company_id: number;
  trucking_company_ldap: string;
  trucking_company_name_ldap: string;
  unit_nbr: string;
  apptNbr: string;
  state: string;
}


interface CargoGrouped {
  [bl_nbr: string]: Cargo;
}

@Component({
  selector: 'app-card-appointment',
  templateUrl: './card-appointment.component.html',
  styleUrls: ['./card-appointment.component.css']
})
export class CardAppointmentComponent {
  @Input() public origen: string = "";
  public loadType: string = "";
  public retrievedData: any;
  public data: any;
  private subscription: Subscription = new Subscription();
  public verificacion: number=0;
  public canPrint: boolean = true;
  private nbr: string = "";
  public privileges: typeof privileges = privileges;
  public userInfo!: IAPIGatewayStore;
  public is_cs_cit_eli: boolean = false;
  public isCanceled: boolean = false;
  public showButtonEditAppointment = false;
  public is_cs_cit_eli_origins: boolean = false;
  public showButtonEditAppointment_origins = false;
  public dataComplete: any;
  public appointmentDate: string = "";
  public conductor: string = "";
  public cardId: string = "";
  public placa: string = "";
  public units: string[] = [];
  public is_cc_cit_eli: boolean = false;
  public is_cc_cit_eli_origins: boolean = false;
  public is_cc_cit_edi: boolean = false;
  public is_cs_cit_edi: boolean = false;
  public isUsed: boolean = false;
  public isExpired: boolean = false;
  public message: string = "";
  public destroy$: Subject<void> = new Subject<void>();
  public hoursBeforeEditAppointment: number = 0;
  public state: string = "";
  public license: string = "";
  private hideDialogCancel: boolean = false;
  public showCard: boolean = false;
  private unsubscribe$ = new Subject<void>();
  private truckVisitNbrAnt = "";
  private storageSubscription!: Subscription;
  public isLastContainerRemoved: boolean = false;


  constructor(private readonly store: Store,
    private communicationService: CommunicationService, private router: Router,  private readonly aesEncryptionUtilService: AESEncryptionUtilService,
    private dialog: MatDialog, private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private storageService:StorageserviceService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    if (this.userInfo && this.userInfo.privileges){
      this.is_cs_cit_eli = this.userInfo.privileges.some((value) => value.privilegeId === 'CS_CIT_ELI');
      this.showButtonEditAppointment = this.userInfo.privileges.some((value) => value.privilegeId === 'CS_CIT_EDI' || value.privilegeId === 'CC_CIT_EDI');
      this.is_cs_cit_eli_origins = this.is_cs_cit_eli;
      this.showButtonEditAppointment_origins = this.showButtonEditAppointment;
      
      this.is_cc_cit_eli = this.userInfo.privileges.some((value) => value.privilegeId === 'CC_CIT_ELI');
      this.is_cc_cit_eli_origins = this.is_cc_cit_eli;
      this.is_cc_cit_edi = this.userInfo.privileges.some((value) => value.privilegeId === 'CC_CIT_EDI');
      this.is_cs_cit_edi = this.userInfo.privileges.some((value) => value.privilegeId === 'CS_CIT_EDI');
     

      
    }
    

    this.loadInfo();

    
    
    this.subscription = this.communicationService.verificacion$.subscribe(
      (value) => (this.verificacion = value)
    );
  }
  

  isArray(variable: any): boolean {
    return Array.isArray(variable);
  }
  async loadInfo() {
    this.loadType = localStorage.getItem('loadType') || "";
   
    if (this.loadType === "cs"){
      this.store.select(detachedLoadFeatureSelector).subscribe((response) =>{
        let uniqueHblArray = [];
        if (response.truckVisitNbrData) {
          this.showCard = true;
          if(Array.isArray(response.truckVisitNbrData)){
            this.dataComplete = response.truckVisitNbrData;
            uniqueHblArray = response.truckVisitNbrData.reduce((acc: CargoCS[], current: CargoCS) => {
              // Verificar si ya existe un objeto con este hbl en el array acumulado
              if (!acc.some(obj => obj.blitem === current.blitem)) {
                acc.push(current);
              }
              
              return acc;
            }, []);
            if (uniqueHblArray.length > 0){
              this.state = uniqueHblArray[0].state;
            }
            
            
          }else{
            this.data = null;
            this.retrievedData = null;
          }
          // Construye ELEMENT_DATA a partir de la variable data
          //this.buildElementData();
        }else{
          this.data = null;
          this.retrievedData = null;
        }

        if (response.elementsDetachedLoad){
          const decryptedValue = this.aesEncryptionUtilService.decrypt(response.elementsDetachedLoad);
          //let retrieved: string = localStorage.getItem('elementsDetachedLoad') || "";
          if (decryptedValue){
                this.retrievedData = JSON.parse(decryptedValue);
                this.data = uniqueHblArray;
               
                if (this.data.length === 0){
                  this.showButtonEditAppointment = false;
                }
                if (this.state === "") this.getMessageState(this.retrievedData.state);
                else this.getMessageState(this.state);
                
                this.appointmentDate = this.retrievedData.requested_time;
                if (this.appointmentDate === '' && Array.isArray(this.dataComplete) && this.dataComplete.length > 0 && this.dataComplete[0].appointment_date){
                  this.appointmentDate = this.dataComplete[0].appointment_date;
                }
                const appointmentDate = new Date(this.retrievedData.requested_time);
                this.evaluationShowButtonEditAppointment();
                
                
               
          }
       
        }

      }
      );
    }else if (this.loadType === "cc"){
      this.store.select(containerizedLoadFeatureSelector).pipe(takeUntil(this.unsubscribe$)).subscribe((response) =>{
      
        let uniqueHblArray: {"number": string , "container": string, "size": number, "transation": string}[] = [];
        if (response.truckVisitNbrData) {
          
          const companyIdLdap = response.truckVisitNbrData.companyIdLdap;
          const companyUser = this.userInfo.empresa?.id;
          
          
          if (companyIdLdap && companyUser){
            if (companyIdLdap !== companyUser){
              this.dataComplete = null;
              this.retrievedData = null;
              return;
            }else{
              //this.showCard = true;
            }
            
          }
          //this.showCard = true;
          this.dataComplete = response.truckVisitNbrData;
          
          
          if (response.truckVisitNbrData.canceled){
            this.state = "CANCEL";
          }
          this.appointmentDate = response.truckVisitNbrData.appointmentDate;
          this.conductor = response.truckVisitNbrData.name;
          this.cardId = response.truckVisitNbrData.cardId;
          this.placa = response.truckVisitNbrData.truck;
          this.license = response.truckVisitNbrData.license;
          
          const createdByLDAP = response.truckVisitNbrData.createdByLDAP;
          this.hideDialogCancel = false;
          if (!createdByLDAP && this.appointmentDate && this.state !== "CANCEL" && this.state !== "USED" && this.state !== "EXPIRED"){
            this.hideDialogCancel = true;
            if (response.truckVisitNbrData.truckVisitNbr !== this.truckVisitNbrAnt){
              this.openDialogError();
              this.truckVisitNbrAnt = response.truckVisitNbrData.truckVisitNbr;
            }
            this.showCard = true;
          }
          if (response.truckVisitNbrData.firstAppointmentExport){
            const size = response.truckVisitNbrData.firstContainerExportTwenty === "1" ? 20 : 40;
            const firstContainerExport = {"number":response.truckVisitNbrData.firstAppointmentExport, "container": response.truckVisitNbrData.firstContainerExport,
              "size": size  ,"transation": "EXPORT"
            };
            //si no esta en el array lo agrega
            if (!uniqueHblArray.some(obj => obj.number === firstContainerExport.number)) {
              this.units.push(response.truckVisitNbrData.firstContainerExport);
              uniqueHblArray.push(firstContainerExport);
            }
            
          }
          if (response.truckVisitNbrData.firstAppointmentImport){
            const tamano = response.truckVisitNbrData.firstContainerImportTwenty === "1" ? 20 : 40;
            const firstContainerImport = {"number":response.truckVisitNbrData.firstAppointmentImport, "container": response.truckVisitNbrData.firstContainerImport,
              "size": tamano, "transation": "IMPORT"
            };
            //si no esta en el array lo agrega
            if (!uniqueHblArray.some(obj => obj.number === firstContainerImport.number)) {
              this.units.push(response.truckVisitNbrData.firstContainerImport);
              uniqueHblArray.push(firstContainerImport);
            }
          }

          if (response.truckVisitNbrData.secondAppointmentExport){
            const tamano = response.truckVisitNbrData.secondContainerExportTwenty === "1" ? 20 : 40;
            const secondContainerExport = {"number":response.truckVisitNbrData.secondAppointmentExport, "container": response.truckVisitNbrData.secondContainerExport,
              "size": tamano, "transation": "EXPORT"
            };
            //si no esta en el array lo agrega
            if (!uniqueHblArray.some(obj => obj.number === secondContainerExport.number)) {
              this.units.push(response.truckVisitNbrData.secondContainerExport);
              uniqueHblArray.push(secondContainerExport);
            }
          }

          if (response.truckVisitNbrData.secondAppointmentImport){
            const tamano = response.truckVisitNbrData.secondContainerImportTwenty === "1" ? 20 : 40;
            const secondContainerImport = {"number":response.truckVisitNbrData.secondAppointmentImport, "container": response.truckVisitNbrData.secondContainerImport,
              "size": tamano,"transation": "IMPORT"
            };
            //si no esta en el array lo agrega
            if (!uniqueHblArray.some(obj => obj.number === secondContainerImport.number)) {
              this.units.push(response.truckVisitNbrData.secondContainerImport);
              uniqueHblArray.push(secondContainerImport);
            }
          }    
         
         
        }else{
          this.data = null;
          this.retrievedData = null;
        }

        if (response.elementsContainerizedLoad){
          const decryptedValue = this.aesEncryptionUtilService.decrypt(response.elementsContainerizedLoad);
          if(decryptedValue){
            this.showCard = true;
            this.retrievedData = JSON.parse(decryptedValue);
            
            if (this.retrievedData.lastContainerRemoved){
              this.isLastContainerRemoved = true;
              this.getMessageState("CANCEL");
            }else{
              this.isLastContainerRemoved = false;
              this.message = "";
            }
           
            this.data = uniqueHblArray;
            if (this.retrievedData && this.retrievedData.siteAppointment !== ''){
              if (this.retrievedData.siteAppointment === 'EXTERNO1') this.retrievedData.siteAppointment = 'Agunsa'
              if (this.retrievedData.siteAppointment === 'EXTERNO2') this.retrievedData.siteAppointment = 'Patio ZAL'
              if (this.retrievedData.siteAppointment === 'EXTERNO3') this.retrievedData.siteAppointment = 'CY de Colombia SAS'
            }
           
            if (this.state !== "") this.getMessageState(this.retrievedData.state);
            else this.getMessageState(this.state);
            if (this.retrievedData.driver){
              if (this.conductor === '' && this.retrievedData.driver && this.retrievedData.driver.name) this.conductor = this.retrievedData.driver.name;
              if (this.cardId === '' && this.retrievedData.driver && this.retrievedData.driver.cardId) this.cardId = this.retrievedData.driver.cardId;
              if (this.license === '' && this.retrievedData.driver && this.retrievedData.driver.license) this.license = this.retrievedData.driver.license;
            }
            if (this.placa === '' && this.retrievedData.truck) this.placa = this.retrievedData.truck;
            if (this.appointmentDate === '' && this.retrievedData.appointmentDate) this.appointmentDate = this.retrievedData.appointmentDate;
            if (this.retrievedData.containers && Array.isArray(this.retrievedData.containers) && this.retrievedData.containers.length > 0){
                this.retrievedData.containers.forEach( (elementContainer: IContainer) => {
                  //si no esta en el array lo agrega
                  
                  if (typeof elementContainer === 'object' && elementContainer !== null && !uniqueHblArray.some(obj => obj.number === elementContainer.number)) {
                    this.units.push(elementContainer.container);
                    uniqueHblArray.push(elementContainer);
                  }
                });
                //if (!this.data) this.data = uniqueHblArray;
                if (!this.dataComplete) this.dataComplete = this.retrievedData;
                
            }
            
            this.evaluationShowButtonEditAppointment();
            
            if (this.hideDialogCancel){
              this.showButtonEditAppointment = false;
              this.canPrint = false;
            }
            //this.cdr.detectChanges();
            //const appointmentDate = new Date(this.retrievedData.requested_time);
          }
        }
      });
    }
    else{
      this.store.select(selectTruckVisitNbrData).subscribe((truckVisitNbrData: Cargo[]) => {
      
        if (truckVisitNbrData) {
          this.data = truckVisitNbrData;
          const encryptedValue = localStorage.getItem('elementsDetachedLoad') || "";
          const decryptedValue = this.aesEncryptionUtilService.decrypt(encryptedValue);
          //let retrieved: string = localStorage.getItem('elementsDetachedLoad') || "";
          this.retrievedData = JSON.parse(decryptedValue);
          // Construye ELEMENT_DATA a partir de la variable data
          //this.buildElementData();
        }else{
          this.data = null;
          this.retrievedData = null;
        }
      });
    }

    this.store.select(sharedFeatureSelector).subscribe((response) =>{
      if (response.configurationPortal){
        if (response.configurationPortal["truckVisitEdit.parameter.hours"]){
          this.hoursBeforeEditAppointment = Math.abs(response.configurationPortal["truckVisitEdit.parameter.hours"]);
          this.evaluationShowButtonEditAppointment();
        }
      }
    });

    
  }

  async editAppointment(nbr: string){
    if (this.loadType === "cs"){
      this.nbr = nbr;
      this.store.dispatch(getBreakBulk({data: {nbr: nbr, appointmentDate: this.data[0].appointment_date, 
        driver: {cardId: this.retrievedData.driver_license_nbr, name: this.retrievedData.driver_name, license: this.retrievedData.driver_license_nbr}, 
        truck: this.data[0].truck, cargoLots: this.makeCargoLostLits(this.dataComplete), pinInfoList: this.makePinInfoList(this.dataComplete), manifestNbr: this.retrievedData.manifest_nbr, isHazard: this.retrievedData.is_hazard, informationAppointment: this.retrievedData.information_appointment}}));
      this.store.dispatch(getCausalCancellationAppointment());
      this.storageService.viewEditAppointment();
      const combinedDate = new Date(this.retrievedData.requested_time);
      const appointmentDate = combinedDate.toISOString();
      //const validationCheckHours = await firstValueFrom(this.utilServices.getCheckHours({units: units, appointmentDate: this.setAppointmentDate()}));
      this.storageService.setData({'origen': this.origen});
      this.router.navigate(["/", "carga-suelta"], { state: {'origen': this.origen} });
    } else if (this.loadType === 'cc'){
      this.nbr = nbr;
      this.license =  this.license !== ''? this.license.trim(): this.license;
      
      this.store.dispatch(getAppointmentCC({data: {nbr: nbr, appointmentDate: this.dataComplete.appointmentDate, 
        driver: {cardId: this.cardId, name: this.conductor, license: this.license}, 
        truck: this.placa, containers: this.data, manifestNbr: this.dataComplete.manifestNbr ? this.dataComplete.manifestNbr: "1",
        isHazard: this.dataComplete.isHazard, firstAppointmentImportOrder: this.dataComplete.firstAppointmentImportOrder,
        firstAppointmentExportOrder: this.dataComplete.firstAppointmentExportOrder, secondAppointmentImportOrder: this.dataComplete.secondAppointmentImportOrder,
        secondAppointmentExportOrder: this.dataComplete.secondAppointmentExportOrder, siteAppointment: this.retrievedData.siteAppointment}}));
      this.store.dispatch(getCausalCancellationAppointment());
      this.storageService.viewEditAppointmentCC(this.data);
      this.storageService.setData({'origen': this.origen});
      this.router.navigate(["/", "carga-contenerizada"], { state: {'origen': this.origen} });


    }
  }

  deleteAppointment(nbr: string){
    //eliminar apointment nbr
    this.nbr = nbr;
    this.store.dispatch(getCausalCancellationAppointment());
    if (!this.hideDialogCancel){this.openDialog();}
    else {this.cancelAppointment("99");}
  }
  print(nbr: string){
    this.nbr = nbr;
    if (this.loadType === "cs"){
      window.open(`${location.origin}/portal/api/truckVisitAppointment/breakbulk/pdf/${this.nbr}`);
    }else if (this.loadType === "cc"){
      const unistParam = this.units.join(',');
      let paramSiteAppointment = this.retrievedData.siteAppointment;
      if (this.retrievedData.siteAppointment === 'Agunsa') paramSiteAppointment = "EXTERNO1";
      if (this.retrievedData.siteAppointment === 'Patio ZAL') paramSiteAppointment = "EXTERNO2";
      if (this.retrievedData.siteAppointment === 'CY de Colombia SAS') paramSiteAppointment = "EXTERNO3";
      window.open(`${location.origin}/portal/api/truckVisitAppointment/pdf/${paramSiteAppointment}/${this.nbr};units=${unistParam}`);
    }
    
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(CausalCancellationDialogComponent, {
      width: '750px',
      data: { 
        loadType: this.loadType,
        origen: this.origen,
      },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      
      if (result && result.response){
         this.cancelAppointment(result.response);
      }else{
        
      }
      
    });
  }

  private cancelAppointment(codCausal: string): void{
    let hasNotification = this.userInfo.privileges.filter(value => value.privilegeId === "CC_CIT_ELI")[0].notificable;
    const listApptNbr = this.data.map((value:CargoCS) => value.apptNbr);
        //convertir la lista de apptNbr en un string separado por comas
        const apptNbrString = listApptNbr.join(",");
        //queda la duda si cardID siempre es igual a license
        const cargaContenerizada = this.loadType === "cc" ? true : false;
        let containers: string [] = [];
        if (cargaContenerizada){
          if (this.data.length > 0){
            this.data.forEach((itemCont: IContainer) => {
              containers.push(itemCont.container)
            });
          } 
        }
        
        const userId = this.userInfo.empresa?.id ? this.userInfo.empresa?.id : "";
       
        let infoDriver = {carId: this.retrievedData.driver_license_nbr, name: this.retrievedData.driver_name, license: this.retrievedData.driver_license_nbr};
        if (!this.retrievedData.driver_license_nbr){
          infoDriver.carId = this.cardId;
          infoDriver.name = this.conductor;
          infoDriver.license = this.license;
        }

        
       let truckForNotification = this.retrievedData.truck;
       let truckVisitNbrForNotification = this.retrievedData.truckVisitNbr;
       let createdCompanyForNotification = this.retrievedData.createdByCompanyNameLDAP;
       let appointmentDateForNotification = this.retrievedData.appointmentDate;
       if (this.loadType === "cs"){
        truckForNotification = this.retrievedData.truck_license_nbr;
        truckVisitNbrForNotification = this.retrievedData.truck_visit_appt_nbr;
        createdCompanyForNotification = this.userInfo.empresa?.companyName ? this.userInfo.empresa?.companyName : "";
        appointmentDateForNotification = this.retrievedData.requested_time;
       }
       
      
       this.store.dispatch(getCancelAppointment({body: {driver: {cardId: infoDriver.carId, name: infoDriver.name, license: infoDriver.license}, 
          appointmentsNbr: apptNbrString}, parameters: {tvaNbr:  this.base64EncryptionUtilService.encrypt((this.nbr)), 
          causalCanAppointment: codCausal, causalCanDescription: "undefined", cargaContenerizada: cargaContenerizada, hasNotification:hasNotification,
          userId: userId, createdByLDAP:  this.userInfo.userName, fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, appointmentDate: appointmentDateForNotification,
          createdByCompanyNameLDAP: createdCompanyForNotification,
          truckVisitNbr: truckVisitNbrForNotification,
          truck: truckForNotification, 
          containers: containers,
          siteAppointment: this.retrievedData.siteAppointment,
          hbl: this.data}}));
          if(this.loadType === "cs"){
            this.storageService.clearStorageValidationPin();
            this.storageService.cleanPlaca();
            this.storageService.cleanValues();
            this.storageService.cleanAll();
            if (this.origen === "carga-suelta"){
            this.router.navigate(["/", "carga-suelta"]);
            }else if(this.origen === "history"){
              this.router.navigate(["/", "historial"]);
            }
          } else if(this.loadType === "cc"){
            this.storageService.clearStorageValidationPin();
            this.storageService.cleanPlaca();
            this.storageService.cleanValues();
            this.storageService.cleanAll();
            
            if (this.origen === "carga-contenerizada"){
              this.router.navigate(["/", "carga-contenerizada"]);
            }else if(this.origen === "history"){
              this.router.navigate(["/", "historial"]);
            }
          }
  }

  public makeNotificationData(data:any, cargaContenerizada: boolean = false, dataContainers: {number: "", container: "", size: "", transaction: ""}[] = []): any {
    if (!cargaContenerizada){
      return {
        userId: this.userInfo.empresa?.id,
        userName: this.userInfo.userName, 
        fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, 
        hbl: "", 
        date: data.requested_time,
        driver: data.driver_name,
        identification: data.driver_license_nbr,
        licensy:  data.driver_license_nbr,
        truck: data.truck_license_nbr,
        truckingCompany: data.gateAppt ? data.gateAppt[0].truckingCompany: `${data.companyIdLdap} - ${data.createdByCompanyNameLDAP}`,
        truck_visit_appt_nbr: data.truck_visit_appt_nbr,
      }
    }
    else{
      
      let containers: string [] = [];
      if (dataContainers.length > 0){
        dataContainers.forEach((itemCont) => {
          containers.push(itemCont.container)
        });
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

  public continue(){
    if (this.loadType === "cs"){
      this.storageService.clearStorageValidationPin();
      this.storageService.cleanPlaca();
      this.storageService.cleanValues();
      this.storageService.cleanAll();
      this.storageService.continueOperation();
      if (this.origen === "carga-suelta"){
        this.router.navigate(["/", "carga-suelta"]);
      }else if(this.origen === "history"){
        this.router.navigate(["/", "historial"]);
      }

    }
    else if (this.loadType === "cc"){
      this.storageService.clearStorageValidationPin();
      this.storageService.cleanPlaca();
      this.storageService.cleanValues();
      this.storageService.cleanAll();
      this.storageService.continueOperation();
      if (this.origen === "carga-contenerizada"){
        this.router.navigate(["/", "carga-contenerizada"]);
      }
      
    }
  }

  private makeCargoLostLits(data: any): CargoItem[] {
    
    let dataGrouped: CargoItem[] = [];
    if (data.length > 0){
      data.forEach((item:any) => {
        dataGrouped.push({apptNbr: item.apptNbr, billoflading: item.billoflading, blitem: item.blitem, cargoQuantity: item.cargoQuantity,
                          cargoWeigth: item.cargoWeigth, cargoLotId: item.cargoLotId, manifestNbr: item.manifestNbr, pin: ""});
      });
      
    }
    return dataGrouped;
  }

  private makePinInfoList(data: any): string[] {
    let dataGrouped: string[] = [];
    if (data.length > 0){
      data.forEach((item:any) => {
        dataGrouped.push(item.pinNbr);
      });
      
    }
    return dataGrouped;
  }

  private evaluationShowButtonEditAppointment(): void{
    
    if(this.appointmentDate !== "" && this.hoursBeforeEditAppointment > 0){
      const appointmentDate = new Date(this.appointmentDate);
      const currentDate = new Date();
      const difference = appointmentDate.getTime() - currentDate.getTime();
      const hours = difference / (1000 * 3600);
     
      if (hours < this.hoursBeforeEditAppointment){
        this.showButtonEditAppointment = false;
      }else{
        this.showButtonEditAppointment = this.showButtonEditAppointment_origins;
        this.canPrint = this.showButtonEditAppointment_origins;
        
      }
      
      if(this.data && this.data.length === 0){
        this.showButtonEditAppointment = false;
      }
    }
      if (this.retrievedData.state === "CANCEL" || this.retrievedData.state === "USED" || this.retrievedData.state === "EXPIRED"
        || this.state === "CANCEL" || this.state === "USED" || this.state === "EXPIRED"
      ){
        this.is_cs_cit_eli = false;
        this.is_cc_cit_eli = false;
        this.canPrint = false;
        
        this.showButtonEditAppointment = false;
      }

     
   
  }

  private getMessageState(state: string): void{
    if (state === "CANCEL"){
      this.isCanceled = true;
      const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym19: shared.card.appointment.state.cancel`;
      this.message = message;
    }else if(state === "USED"){
      this.isUsed = true;
      
      const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym20: shared.card.appointment.state.used`;
      this.message = message;
    }else if(state === "EXPIRED"){
      this.isExpired = true;
      const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym21: shared.card.appointment.state.expired`;
      this.message = message;
    }
  }

  private openDialogError(): void{
    if (this.dialog.openDialogs.length === 0 && this.hideDialogCancel){
      
      const dialoReg = this.dialog.open(ModalDialogComponent, {
        width: "50rem",
        data: {
          loadType: this.loadType,
          message:  $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym53: shared.modal.dialog.badly.created.quote`
        }
      });
      this.showButtonEditAppointment = false;
      this.canPrint = false;
      dialoReg.afterClosed().subscribe(result => {
        if (result){}else{}
        
      }); 
    }
  }

  ngOnDestroy(): void {
    localStorage.removeItem('loadType');
    this.hideDialogCancel = false;
    this.subscription.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }

 
  
}
