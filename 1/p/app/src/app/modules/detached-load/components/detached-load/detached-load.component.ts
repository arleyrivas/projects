import { Component, OnInit, OnDestroy, OnChanges, ChangeDetectorRef, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IDetachedLoadStore } from 'src/app/core/interfaces/detached-load-store.interface';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { cleanDetachedLoad, getDetachedLoad } from 'src/app/state/detached-load/detached-load.actions';
import { detachedLoadFeatureSelector } from 'src/app/state/detached-load/detached-load.selectors';
import { privileges } from "../../../../core/privileges.enum";
import { Router } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { StorageserviceService } from 'src/app/shared/services/storageservice.service';
import { cleanSharedLoad } from 'src/app/state/shared/shared.actions';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MakeAppointmentComponent } from 'src/app/shared/components/make-appointment/make-appointment.component';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-detached-load',
  templateUrl: './detached-load.component.html',
  styleUrls: ['./detached-load.component.css']
})
export class DetachedLoadComponent implements  OnInit, OnDestroy {
  public recentHBL: string = "";
  public notFoundText: string = "";
  public privileges: typeof privileges = privileges;
  public userInfo!: IAPIGatewayStore;
  public detachedLoadStore: Observable<IDetachedLoadStore> = new Observable();
  public loadType: string = "cs";
  public verModuloCitas = false;
  public verModuloImport = false;
  private storageSubscription!: Subscription;
  public destroy$: Subject<void> = new Subject<void>();
  public showMakeAppointment = false;
  public firstLoad = { action: "", value: 0, operation: "", id: "", hbl: "", unds: 0, unitNbr: "", holdConsigneeActive: false, siteAppointment: "" };
  public placa: string = "";
  public titleTab = "";
  @ViewChild('makeAppointmentContainer', { read: ViewContainerRef }) makeAppointmentContainer!: ViewContainerRef;
  private makeAppointmentRef!: ComponentRef<MakeAppointmentComponent> | null;
  private isStorageData = false;
  public origin = "";
  private sendData = false;
  
  

  constructor(
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly store: Store,
    private readonly router: Router,
    private communicationService: CommunicationService,
    private storageService:StorageserviceService,
    private cdr: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver,
    private notificationsPortalService: NotificationsService,
  ) { 
   
  }

  
  ngOnInit(): void {
   
    this.detachedLoadStore = this.store.select(detachedLoadFeatureSelector);
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    //this.notificationsPortalService.getNotificationByPrivileges(this.privileges.CS_IMP_BUS);
    //this.notificationsPortalService.getNotificationByPrivileges(this.privileges.CS_CIT_BUS);
    if (this.hasPermission(this.privileges.CS_IMP_BUS)){
      this.verModuloImport = true;
    }
    
    if  (this.hasPermission(this.privileges.CS_CIT_BUS)){ 
      this.verModuloCitas = true;
      this.titleTab = "Crear Cita";
     
      
      
      let entryInStorage = false;
      const storageData = this.storageService.getData();
      this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
        entryInStorage = true;
        
        if(action.action === 'setCantidadCarga'){
          this.showMakeAppointment = true;
          this.firstLoad = action;
          this.placa = action.placa;
          this.showMakeAppointmentComponent();
        }
        if (action.action === 'viewEditAppointment'){
          
          this.titleTab = "Editar Cita";
          this.showMakeAppointment = true;
          this.showMakeAppointmentComponent(true);
         
        }
        if (action.action === 'viewCreateAppointment'){
          
          this.makeAppointmentRef?.destroy();
          this.makeAppointmentRef = null;  
          this.titleTab = "Crear Cita";
         
        }
        if (action.action === 'continueOperation'){
          this.titleTab = "Crear Cita";
          this.hideMakeAppointment();
        }
        if (action.action === 'cleanAll'){
          this.sendData = true;
        }
        if (action.action === 'cleanValidationPin' && this.titleTab !== 'Editar Cita'){
          this.makeAppointmentRef?.destroy();
          this.makeAppointmentRef = null;  
        }

        
        
      });
      
      if (storageData && !entryInStorage){
        if (storageData.origen === 'history'){
          this.titleTab = "Editar Cita";
          this.showMakeAppointment = true;
          this.origin = storageData.origen;
          this.storageService.setData({'origen': storageData.origen});
          
          this.isStorageData = true;
          //this.showMakeAppointmentComponent(true);
        }
      }
      
    }

   
  }

  ngOnDestroy(): void {
    this.store.dispatch(cleanDetachedLoad());
    this.store.dispatch(cleanSharedLoad());
    if (this.storageSubscription) {
      this.storageSubscription.unsubscribe();
    }
    this.destroy$.next();
    this.destroy$.complete();
    
  }

  ngAfterViewInit(): void {
    if (this.isStorageData){
        this.showMakeAppointment = true;
        this.isStorageData = false;
        this.showMakeAppointmentComponent(true);
    }
  }

  public submit(value: string): void {
    this.router.navigate(["/", "carga-suelta"]);

    this.recentHBL = value;
    this.communicationService.updateVerificacion(0);
    this.notFoundText = $localize`:@@7dd607c481845f915b0a6491eddde3a3eb5e69e3eea5e81236ac7578f7f67d1f: agent.views.agent-import-search.NOT_RESULT ${this.recentHBL}:searchBL:`;

    this.store.dispatch(getDetachedLoad({ nbr: this.base64EncryptionUtilService.encrypt(value) }));
  }

  public clean(): void {
    this.store.dispatch(cleanDetachedLoad());
    this.router.navigate(["/", "carga-suelta"]);
  }

  public billing(): void {
    this.router.navigate(['/', 'carga-suelta', 'billing']);
  }

  public blockUnit(): void {
    this.router.navigate(['/', 'carga-suelta', 'lock']);
  }

  public unlockUnit(): void {
    this.router.navigate(['/', 'carga-suelta', 'unlock']);
  }

  public generatePin(): void {
    this.router.navigate(['/', 'carga-suelta', 'generar-pin']);
  }

  public lockState(results: Array<IDetachedLoad>): boolean {
    return !results.filter(value => !value.holdConsigneeActive).length;
  }

  public unlockState(results: Array<IDetachedLoad>): boolean {
    if(results.filter(value => value.holdConsigneeActive && value.truck_visit_appt_nbr).length)
      return false;
    else
      return true;
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

  public onTabChanged(event: MatTabChangeEvent): void {
    this.storageService.clearStorageValidationPin();
    this.storageService.cleanPlaca();
    this.storageService.cleanValues();
    this.storageService.cleanAll();
    this.showMakeAppointment = false;
    this.hideMakeAppointment();
    this.router.navigate(["/", "carga-suelta"]);
  }

  showMakeAppointmentComponent(destroy: boolean = false) {
    
    
    
   
    if (this.makeAppointmentRef && !destroy) {
     
      if (this.sendData){
        this.makeAppointmentRef.instance.placa = this.placa;
        this.makeAppointmentRef.instance.origin = this.origin;
        this.makeAppointmentRef.instance.loadType = this.loadType;
      }
      
      //this.makeAppointmentRef.instance.firstLoad = this.firstLoad;
      //this.makeAppointmentRef.instance.type = this.titleTab;
      
      this.sendData = false;
      return;
    }
   
    // Destruye el componente si ya existe
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

 
}
