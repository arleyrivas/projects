import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { getDataUnitNbr } from 'src/app/state/containerized-load/containerized-load.actions';
import { selectTruckVisitNbrData } from 'src/app/state/containerized-load/containerized-load.selectors';
import { CommunicationService } from '../../services/communication.service';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { StorageserviceService } from 'src/app/shared/services/storageservice.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { privileges } from 'src/app/core/privileges.enum';
@Component({
  selector: 'app-appointment-creation',
  templateUrl: './appointment-creation.component.html',
  styleUrls: ['./appointment-creation.component.css']
})
export class AppointmentCreationComponent {
  public destroy$: Subject<void> = new Subject<void>();
  public data: any;
  private subscription: Subscription = new Subscription();
  ELEMENT_DATA: any[] = [];
  public verificacion: number=0;
  displayedColumns: string[] = ['position', 'container', 'size', 'transaction'];
  dataSource = this.ELEMENT_DATA;
  public showCard = true;
  private storageSubscription!: Subscription;
  public isTransport: boolean = false;
  public userInfo!: IAPIGatewayStore;
  public privileges: typeof privileges = privileges;

  constructor(private readonly store: Store,
              private communicationService: CommunicationService,
              private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private storageService:StorageserviceService,
    private utilServices: UtilService
    ) { }

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    if  (this.hasPermission(this.privileges.CS_CIT_BUS)){
      this.isTransport = true;
    }
    this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
      if(action.action === 'showAppointmentCard' && action.value === false){
        this.showCard = false;
        this.isTransport = true;
      }else if(action.action === 'showAppointmentCard' && action.value === true){
        this.showCard = true;
        this.isTransport = true;
      }else if(action.action === 'cleanValidationPinIndividual'){
        this.showCard = false;
        this.isTransport = true;
      }
    });
    if (!this.isTransport){
      this.loadInfo();
      this.subscription = this.communicationService.verificacion$.subscribe(
        (value) => (this.verificacion = value)
      );
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
    this.data = null;
  }
  loadInfo(): void {
    this.store.select(selectTruckVisitNbrData).subscribe((truckVisitNbrData: any) => {
      if (truckVisitNbrData) {
        this.data = truckVisitNbrData;
        this.buildElementData();
      }
    });
  }

  buildElementData() {
    // Construye ELEMENT_DATA a partir de la variable data
    this.ELEMENT_DATA = []

    if(this.data.firstAppointmentExport != null &&
      this.data.firstAppointmentExport != undefined &&
      this.data.firstAppointmentExport != "" &&
      this.data.firstAppointmentExport != 0){
      let sizeT = 0;
      if(this.data.firstContainerExportTwenty == '1'){
        sizeT = 20;
      }else{
        sizeT = 40;
      }
      let data = {
        position: this.data.firstAppointmentExport,
        container: this.data.firstContainerExport,
        size: sizeT,
        transaction: 'EXPORT'
      }
      this.ELEMENT_DATA.push(data);
    }

    if(this.data.secondAppointmentExport != null &&
      this.data.secondAppointmentExport != undefined &&
      this.data.secondAppointmentExport != "" &&
      this.data.secondAppointmentExport != 0){
      let sizeT = 0;
      if(this.data.secondContainerExportTwenty == '1'){
        sizeT = 20;
      }else{
        sizeT = 40;
      }
      let data = {
        position: this.data.secondAppointmentExport,
        container: this.data.secondContainerExport,
        size: sizeT,
        transaction: 'EXPORT'
      }
      this.ELEMENT_DATA.push(data);
    }

    if(this.data.firstAppointmentImport != null &&
      this.data.firstAppointmentImport != undefined &&
      this.data.firstAppointmentImport != "" &&
      this.data.firstAppointmentImport != 0){
      let sizeT = 0;
      if(this.data.firstContainerImportTwenty == '1'){
        sizeT = 20;
      }else{
        sizeT = 40;
      }
      let data = {
        position: this.data.firstAppointmentImport,
        container: this.data.firstContainerImport,
        size: sizeT,
        transaction: 'IMPORT'
      }
      this.ELEMENT_DATA.push(data);
    }

    if(this.data.secondAppointmentImport != null &&
      this.data.secondAppointmentImport != undefined &&
      this.data.secondAppointmentImport != "" &&
      this.data.secondAppointmentImport != 0){
      let sizeT = 0;
      if(this.data.secondContainerImportTwenty == '1'){
        sizeT = 20;
      }else{
        sizeT = 40;
      }
      let data = {
        position: this.data.secondAppointmentImport,
        container: this.data.secondContainerImport,
        size: sizeT,
        transaction: 'IMPORT'
      }
      this.ELEMENT_DATA.push(data);
    }

/*
      {
        container: this.data.firstContainerExport,
        position: this.data.secondAppointmentExport,
        size: this.getSize(this.data.firstContainerExportTwenty),
        transaction: 'EXPORT'
      },
      {
        position: this.data.secondAppointmentExport,
        container: this.data.secondContainerExport,
        size: this.getSize(this.data.secondContainerExportTwenty),
        transaction: 'EXPORT'
      },
      {
        position: this.data.firstAppointmentImport,
        container: this.data.firstContainerImport,
        size: this.getSize(this.data.firstContainerImportTwenty),
        transaction: 'IMPORT'
      },
      {
        position: this.data.secondAppointmentImport,
        container: this.data.secondContainerImport,
        size: this.getSize(this.data.secondContainerImportTwenty),
        transaction: 'IMPORT'
      }
    ];*/


    this.ELEMENT_DATA = this.ELEMENT_DATA.filter(item => item.container !== undefined && item.container !== '');
    // Asigna el nuevo ELEMENT_DATA a la fuente de datos
    this.dataSource = this.ELEMENT_DATA;
  }

  getSize(containerTwenty: string): string {
    return containerTwenty === '1' ? "20''" : "40''";
  }

  getTransaction(appointment: string): string {
    return appointment === 'EXPORT' ? 'EXPORT' : 'IMPORT';
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
}
