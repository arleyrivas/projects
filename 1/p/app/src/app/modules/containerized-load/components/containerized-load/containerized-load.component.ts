import { Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { IContainerizedLoad } from 'src/app/core/interfaces/containerized-load.interface';
import { ShiftsAvailableDialogComponent } from 'src/app/shared/components/shifts-available-dialog/shifts-available-dialog.component';
import { cleanBooking, cleanContainerizedLoad, getBooking, getContainerizedLoad, setDocumentationContainer } from 'src/app/state/containerized-load/containerized-load.actions';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { privileges } from "../../../../core/privileges.enum";
import { Router } from '@angular/router';
import { CommunicationService } from '../../services/communication.service'; // Reemplaza con la ruta correcta
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { StorageserviceService } from 'src/app/shared/services/storageservice.service';
import { cleanSharedLoad } from 'src/app/state/shared/shared.actions';
import { MakeAppointmentComponent } from 'src/app/shared/components/make-appointment/make-appointment.component';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-containerized-load',
  templateUrl: './containerized-load.component.html',
  styleUrls: ['./containerized-load.component.css']
})
export class ContainerizedLoadComponent implements OnInit, OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();
  public recentBL: string = "";
  public notFoundText: string = "";
  public notFoundTextB: string = "";
  public privileges: typeof privileges = privileges;
  public firstSearch: boolean = false;
  public userInfo!: IAPIGatewayStore;
  public isImport: boolean = true;
  public showContent: boolean = false;
  public containerizedLoadStore: Observable<IContainerizedLoadStore> = new Observable();
  public loadType: string = "cc";
  public verModuloCitas = false;
  private storageSubscription!: Subscription;
  public showMakeAppointment = false;
  public firstLoad = { action: "", value: 0, operation: "", id: "", hbl: "", unds: 0, unitNbr: "", holdConsigneeActive: false, siteAppointment: "" };
  public placa: string = "";
  public titleTab = "";
  public viewModuleAsociateContainer = false;
  public showButtonsAsociateContainer = false;
  @ViewChild('makeAppointmentContainer', { read: ViewContainerRef }) makeAppointmentContainer!: ViewContainerRef;
  private makeAppointmentRef!: ComponentRef<MakeAppointmentComponent> | null;
  public origin = "";
  private isStorageData = false;
  public siteAppointment = "";
  private tabPrivilegesAgent = ['CC_IMP_BUS', 'CC_EXP_BUS'];
  private tabPrivilegesTruck = ['CC_CIT_BUS','CC_EXP_BAS'];
  public selectedTabIndex: number = 0;

  constructor(
    private readonly matDialog: MatDialog,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly store: Store,
    private readonly router: Router,
    private communicationService: CommunicationService,
    private storageService:StorageserviceService,
    private resolver: ComponentFactoryResolver,
    private notificationsPortalService: NotificationsService,

  ) { }

  ngOnInit(): void {
    this.containerizedLoadStore = this.store.select(containerizedLoadFeatureSelector);

    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    //this.notificationsPortalService.getNotificationByPrivileges("CC_EXP_ASO");
    this.notificationsPortalService.getNotificationByPrivileges(this.tabPrivilegesAgent[0]);

    if  (this.hasPermission(this.privileges.CC_CIT_BUS)){ 
      this.verModuloCitas = true;
      this.titleTab = "Crear Cita";
      let entryInStorage = false;
      const storageData = this.storageService.getData();
      this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
        entryInStorage = true;
        
        if(action.action === 'setContenedorType'){
          
          this.showMakeAppointment = true;
          this.siteAppointment = action.siteAppointment;
          this.showMakeAppointmentComponent();
        }
        if(action.action === 'showAppointmentCard' && action.value === true){
          this.showContent = true;
          this.showMakeAppointment = false;
        }
        if (action.action === 'appointmentWasCreated'){
          this.showContent = true;
          this.showMakeAppointment = false;
          this.titleTab = "Crear Cita";
          this.makeAppointmentRef?.destroy();
          this.makeAppointmentRef = null;  
        }
        if (action.action === 'cleanValidationPin'){
          this.showMakeAppointment = false;
        }

        if (action.action === 'viewEditAppointmentCC'){
          this.showContent = true;
          this.titleTab = "Editar Cita";
          this.showMakeAppointment = true;
          this.showMakeAppointmentComponent(true);
         
        }
        if (action.action === 'continueOperation'){
          this.titleTab = "Crear Cita";
          this.hideMakeAppointment();
        }
      });

      if (storageData && !entryInStorage){
        if (storageData.origen === 'history'){
          this.titleTab = "Editar Cita";
          this.showMakeAppointment = true;
          this.origin = storageData.origen;
          this.storageService.setData({'origen': storageData.origen});
          
          this.isStorageData = true;
          
        }
      }

      if (this.origin !== 'history'){
        this.notificationsPortalService.getNotificationByPrivileges(this.tabPrivilegesTruck[0]);
    
      }
    }

    if (this.hasPermission(this.privileges.CC_EXP_BAS)){
      this.viewModuleAsociateContainer = true;
      this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
        let entryInStorage = false;
        entryInStorage = true;
        if (action.action === 'setBooking'){
          this.showButtonsAsociateContainer = true;
        }
        if (action.action === 'cleanValidationPin'){
          this.showButtonsAsociateContainer = false;
          this.showContent = false;
        }
        if (action.action === 'cleanAssociateContainerForm'){
          this.showButtonsAsociateContainer = false;
        }

        if (action.action === 'deleteContainer'){
          this.showButtonsAsociateContainer = false;
        }
       
      });
    }
  }


  showMakeAppointmentComponent(destroy: boolean = false) {
    
    // Destruye el componente si ya existe
   
    if (this.makeAppointmentRef && !destroy) {
      return;
    }
   

    if (this.makeAppointmentRef && destroy) {
      this.makeAppointmentRef.destroy();
    }
   
    // Crea el componente de forma manual
    const factory = this.resolver.resolveComponentFactory(MakeAppointmentComponent);
    this.makeAppointmentRef = this.makeAppointmentContainer.createComponent(factory);
    
    // Pasar los valores a los @Input del componente
    this.makeAppointmentRef.instance.loadType = this.loadType;
    this.makeAppointmentRef.instance.firstLoad = this.firstLoad;
    this.makeAppointmentRef.instance.placa = this.placa;
    this.makeAppointmentRef.instance.type = this.titleTab;
    this.makeAppointmentRef.instance.origin = this.origin;

    
    
  }

  // Método para destruir el componente manualmente
  hideMakeAppointment() {
    
    if (this.makeAppointmentRef) {
      this.makeAppointmentRef.destroy();
      this.makeAppointmentRef = null; 
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    this.store.dispatch(cleanContainerizedLoad());
    this.storageService.clearStorageValidationPin();
    this.store.dispatch(cleanSharedLoad());
  }

  //metodo para que cuando se cambie de tab se cambie el valor de isImport
  public onTabChanged(event: MatTabChangeEvent): void {
    
    this.showContent = false;
    this.selectedTabIndex = event.index;

    this.store.dispatch(cleanContainerizedLoad());
    this.router.navigate(["/", "carga-contenerizada"]);
    
    /* if (event.index === 0) {
      this.loadType = "cc";
    } else if(event.index === 1) {
      this.loadType = "asc";
    } */
    
    this.notificationsPortalService.getNotificationByPrivileges(this.tabPrivilegesTruck[event.index]);
    this.notificationsPortalService.getNotificationByPrivileges(this.tabPrivilegesAgent[event.index]);
  
    if (event.index === 1) {
      this.isImport = false;
    } else {
      this.isImport = true;
    }
    //transporte
    this.storageService.clearStorageValidationPin();
    //this.storageService
  }

  public showContentEvent(): void {
    this.showContent = true;
  }

  public submit(value: string): void {
    this.showContent = true;
    this.router.navigate(["/", "carga-contenerizada"]);

    this.communicationService.updateVerificacion(0);
    this.recentBL = value;
    this.notFoundText = $localize`:@@7dd607c481845f915b0a6491eddde3a3eb5e69e3eea5e81236ac7578f7f67d1f: agent.views.agent-import-search.NOT_RESULT ${this.recentBL}:searchBL:`;

    this.store.dispatch(getContainerizedLoad({ nbr: this.base64EncryptionUtilService.encrypt(value) }));
  }

  public clean(): void {
    this.store.dispatch(cleanContainerizedLoad());
    this.router.navigate(["/", "carga-contenerizada"]);
  }

  public submitBooking(value: string): void {
    this.showContent = true;
    this.router.navigate(["/", "carga-contenerizada"]);

    this.recentBL = value;
    this.notFoundTextB = $localize`:@@7dd607c481845f915b0a6491eddde3a3eb5e69e3eea5e81236ac7578f7f67d1f: agent.views.agent-import-search.NOT_RESULT ${this.recentBL}:searchBL:`;

    this.store.dispatch(getBooking({ nbr: this.base64EncryptionUtilService.encrypt(value) }));
  }

  public cleanBooking(): void {
    this.store.dispatch(cleanBooking());
    this.router.navigate(["/", "carga-contenerizada"]);
  }

  public lockState(results: Array<IContainerizedLoad>): boolean {
    return !results.filter(value => value.hasHoldConsignee && !value.holdConsigneeActive).length;
  }

  public unlockState(results: Array<IContainerizedLoad>): boolean {
    if(results.filter(value => value.holdConsigneeActive && value.truck_visit_appt_nbr).length)
      return false;
    else
      return true;
  }

  public billing(): void {
    this.router.navigate(['/', 'carga-contenerizada', 'billing']);
  }

  public bookingBilling(): void {
    this.router.navigate(['/', 'carga-contenerizada', 'export','billing']);
  }

  public blockUnit(): void {
    this.router.navigate(['/', 'carga-contenerizada', 'lock']);
  }

  public unlockUnit(): void {
    this.router.navigate(['/', 'carga-contenerizada', 'unlock']);
  }

  public generatePin(): void {
    this.router.navigate(['/', 'carga-contenerizada', 'generar-pin']);
  }

  public click(emptyIncome: boolean) {
    this.matDialog.open(ShiftsAvailableDialogComponent, {
      width: "45.313rem",
      data: {
        emptyIncome
      }
    });
  }

  public hasPermission(privilegio: string): boolean {
    const userPrivileges: string[] = this.userInfo.privileges.map(value => value.privilegeId);
    let hasPermission: boolean = false;
    if(this.userInfo && this.userInfo.privileges) {
      if(userPrivileges.includes(privilegio)) {
        hasPermission = true;
      }
    }
    return hasPermission;
  }

  public navigateToAssociateContainer(): void {
    this.showContent = true;
    this.storageService.setAsoaciateContainer(true);
    this.router.navigate(['/', 'carga-contenerizada', 'associate-container']);
   
  }

  public navigateToDisassociateContainer(): void {
    this.showContent = true;
    this.storageService.setDisassociateContainer(true);
    this.router.navigate(['/', 'carga-contenerizada', 'disassociate-container']);
   
  }

  public navigateToDocumentationContainer(): void {
    this.showContent = true;
    this.storageService.setNavigateToContainerDocumentation(true);
    this.store.dispatch(setDocumentationContainer({documentationContainer: {show: true, nbr: this.recentBL}}));
    this.router.navigate(['/', 'carga-contenerizada', 'documents']);
  }


  ngAfterViewInit(): void {
    if (this.isStorageData){
        this.showMakeAppointment = true;
        this.isStorageData = false;
        this.showMakeAppointmentComponent(true);
    }
  }


 
}
