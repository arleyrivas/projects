import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { detachedLoadFeatureSelector, selectTruckVisitNbrData } from 'src/app/state/detached-load/detached-load.selectors';
import { firstValueFrom, Subscription } from 'rxjs';
import { Router  } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';
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
import { UtilService } from 'src/app/shared/services/util.service';
import { getBreakBulk } from 'src/app/state/shared/shared.actions';

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
}

interface CargoGrouped {
  [bl_nbr: string]: Cargo;
}

@Component({
  selector: 'app-appointment-creation',
  templateUrl: './appointment-creation.component.html',
  styleUrls: ['./appointment-creation.component.css']
})
export class AppointmentCreationComponent implements OnInit, OnDestroy {
  public loadType: string = "";
  public retrievedData: any;
  public data: any;
  private subscription: Subscription = new Subscription();
  public verificacion: number=0;
  public canPrint: boolean = false;
  private nbr: string = "";
  public privileges: typeof privileges = privileges;
  public userInfo!: IAPIGatewayStore;
  public is_cs_cit_eli: boolean = false;
  public showButtonEditAppointment = false;
  public showCard = true;
  private storageSubscription!: Subscription;
  public isTransport: boolean = false;
  constructor(private readonly store: Store,
    private communicationService: CommunicationService, private router: Router,  private readonly aesEncryptionUtilService: AESEncryptionUtilService,
    private dialog: MatDialog, private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private storageService:StorageserviceService,
    private utilServices: UtilService) { }

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
      }else if(action.action === 'cleanValidationPinIndividual' || action.action === 'cleanValidationPin'){
        this.showCard = false;
        this.isTransport = true;
      }
      
    });

    
    /* this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
     if (this.userInfo && this.userInfo.privileges){
      this.is_cs_cit_eli = this.userInfo.privileges.some((value) => value.privilegeId === 'CS_CIT_ELI');
      this.showButtonEditAppointment = this.userInfo.privileges.some((value) => value.privilegeId === 'CS_CIT_EDI');
    }*/
   if (!this.isTransport){
      this.loadInfo();
    
      this.subscription = this.communicationService.verificacion$.subscribe(
        (value) => (this.verificacion = value)
      ); 
    }
  }
  ngOnDestroy(): void {
    if (!this.isTransport && this.subscription){
      this.subscription.unsubscribe(); 
    }
  }

 
  async loadInfo() {


    //localStorage.setItem('elementsDetachedLoad', '');
   
    
   this.store.select(selectTruckVisitNbrData).subscribe((truckVisitNbrData: any) => {

      if (truckVisitNbrData) {
        
        this.data = truckVisitNbrData;
        let retrieved: string = localStorage.getItem('elementsDetachedLoad') || "";
       
        this.retrievedData = JSON.parse(retrieved);
        // Construye ELEMENT_DATA a partir de la variable data
        //this.buildElementData();

      }else{
        this.data = null;
        this.retrievedData = null;
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


  
}
