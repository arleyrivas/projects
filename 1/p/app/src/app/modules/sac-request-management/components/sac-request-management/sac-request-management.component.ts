import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { privileges } from 'src/app/core/privileges.enum';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-sac-request-management',
  templateUrl: './sac-request-management.component.html',
  styleUrls: ['./sac-request-management.component.css']
})
export class SacRequestManagementComponent implements OnInit {

  public privileges: typeof privileges = privileges;
  public destroy$: Subject<void> = new Subject<void>();
  public userInfo!: IAPIGatewayStore;

  isFirstTabSelected: boolean = true;

  havePermissionTabGS_CON_SOL: boolean = false;


  constructor(
    private readonly aesEncryptionUtilService: AESEncryptionUtilService,
    private readonly store: Store,
  ) { 
  }



  ngOnInit(): void {
    this.store
    .select(apiGatewayFeatureSelector)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => {
        this.userInfo = APIGatewatStore;
        this.havePermissionTabGS_CON_SOL = this.userInfo.privileges.filter(value => value.privilegeId === "GS_CON_SOL").length > 0;
      },
      error: (error) => console.error(error),
    });
  }

  tabIndexes: { [key: string]: number } = {
    firstTab: 0,  
    secondTab: 1 
  };



   onTabChange(event: any) {
    // Verificar cuál tab está seleccionado y asignar el índice fijo correspondiente
    if (event.index === this.getLogicalTabIndex('firstTab') && 
    this.userInfo.privileges.filter(value => value.privilegeId === "GS_CON_SOL").length>0) {
      this.isFirstTabSelected = true;
    } else if (event.index === this.getLogicalTabIndex('secondTab') ) {
      this.isFirstTabSelected = false;
    }
  }

  
  // Función que retorna el índice lógico asignado a cada tab
  getLogicalTabIndex(tabName: 'firstTab' | 'secondTab'): number {
    return this.tabIndexes[tabName];
  }
}


  