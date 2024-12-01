import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessManagementComponent } from './components/business-management/business-management.component';
import { typesModulesDocumentation } from 'src/app/shared/enums/documentation-modules.enum';
import { NotificationsGuard } from 'src/app/shared/guard/notifications.guard';


const routes: Routes = [
  {
    path: "",
    component: BusinessManagementComponent,
    canActivate: [NotificationsGuard],
    data: {
      documentation_module: typesModulesDocumentation.GEST_CLIE_NEW,
      componentName: 'BusinessManagementComponent',
      privilegeName: 'GE'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessManagementRoutingModule { }
