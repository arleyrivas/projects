import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SacRequestManagementComponent } from './components/sac-request-management/sac-request-management.component';
import { SacRequestManagementResultComponent } from './components/sac-request-management-result/sac-request-management-result.component';
import { NotificationsGuard } from 'src/app/shared/guard/notifications.guard';

const routes: Routes = [
  {
    path: "",
    component: SacRequestManagementComponent,
    canActivate: [NotificationsGuard],
    data: {
      componentName: "SacRequestManagementComponent",
      privilegeName: "GS"
    },
    children: [
      {
        path: "management",
        component: SacRequestManagementResultComponent,
        
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SacRequestManagementRoutingModule { }
