import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesConfirmComponent } from '../services-confirm/services-confirm.component';
import { Store } from '@ngrx/store';
import { cleanServicesblSearch, cleanServicesImo, getServicesBl, setSelectedBl, setServicesBl } from 'src/app/state/services/services.actions';
import { servicesFeatureSelector } from 'src/app/state/services/services.selector';
import { Subject, takeUntil } from 'rxjs';
import { IServicesStore } from 'src/app/core/interfaces/services-store.interface';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { privileges } from 'src/app/core/privileges.enum';
import { setCustomer } from 'src/app/state/shared/shared.actions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { NotificationsService } from 'src/app/shared/services/notifications.service';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

interface IServiceHBL {
  bLNbr: string;
  nbr: string;
  cantidad: string;
  peso: string;
  agente: string;
  lineOp: string;
  visit: string;
  estado: string;
}

interface IServiceCreateHBL {
  cantActive: number;
  cantInactive: number;
  actives: string[];
  inactives: string[];
  vesselVisit: string;
  lineOperator: string;
  hbls: IServiceHBL[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnDestroy {
  public privileges: typeof privileges = privileges;
  public destroy$: Subject<void> = new Subject<void>();
  public serviceCreateHBL: IServiceCreateHBL | null = null;
  public userInfo!: IAPIGatewayStore;
  private tabPrivileges = ['SERV_CRE_HBL', 'ORD_SERV_BUS', 'HIS_SERV'];
 

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private notificationsPortalService: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    this.store.select(servicesFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (servicesStore: IServicesStore): void => {
        if(servicesStore.blSearch) {
          this.serviceCreateHBL = servicesStore.blSearch;
          
        } else {
          this.serviceCreateHBL = null;
        }
      },
      error: error => console.error(error)
    });
    if (!this.hasPermission(this.privileges.SERV_CRE_HBL)){
      this.tabPrivileges = ['ORD_SERV_BUS', 'HIS_SERV'];
    }
    this.notificationsPortalService.getNotificationByPrivileges(this.tabPrivileges[0]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public onTabChanged(event: MatTabChangeEvent): void {
    this.store.dispatch(cleanServicesblSearch());
    this.notificationsPortalService.getNotificationByPrivileges(this.tabPrivileges[event.index]);
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
