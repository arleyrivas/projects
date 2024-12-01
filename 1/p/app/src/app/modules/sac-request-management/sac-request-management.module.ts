import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacRequestManagementRoutingModule } from './sac-request-management-routing.module';
import { SacRequestManagementComponent } from './components/sac-request-management/sac-request-management.component';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from 'src/app/shared/shared.module';
import { SacRequestManagementFilterComponent } from './components/sac-request-management-filter/sac-request-management-filter.component';
import { SacRequestManagementResultComponent } from './components/sac-request-management-result/sac-request-management-result.component';
import { SacRequestUpdateModalComponent } from './components/sac-request-update-modal/sac-request-update-modal.component';
import { SacRequestChangesApprovedComponent } from './components/sac-request-changes-approved/sac-request-changes-approved.component';



@NgModule({
  declarations: [
    SacRequestManagementComponent,
    SacRequestManagementFilterComponent,
    SacRequestManagementResultComponent,
    SacRequestUpdateModalComponent,
    SacRequestChangesApprovedComponent
  ],
  imports: [
    CommonModule,
    SacRequestManagementRoutingModule,
    SharedModule,
    MatSortModule
  ]
})
export class SacRequestManagementModule { }
