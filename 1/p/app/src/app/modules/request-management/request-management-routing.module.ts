import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestManagementComponent } from './components/request-management/request-management.component';
import { NotificationsGuard } from 'src/app/shared/guard/notifications.guard';

const routes: Routes = [
  { path: "", component: RequestManagementComponent,
    canActivate: [NotificationsGuard],
    data: {
      componentName: "RequestManagementComponent",
      privilegeName: "REQ_MAN"
    },
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestManagementRoutingModule { }
