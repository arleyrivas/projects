import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './components/services/services.component';
import { ServicesCreateHblFormComponent } from './components/services-create-hbl-form/services-create-hbl-form.component';
import { ServiceOrdersComponent } from './components/service-orders/service-orders.component';
import { ServiceOrdersCreateComponent } from './components/service-orders-create/service-orders-create.component';
import { ServiceOrdersResumeComponent } from './components/service-orders-resume/service-orders-resume.component';
import { ServiceHistoryTableComponent } from './components/service-history-table/service-history-table.component';
import { ServiceOrdersTabsComponent } from './components/service-orders-tabs/service-orders-tabs.component';
import { typesModulesDocumentation } from 'src/app/shared/enums/documentation-modules.enum';
import { NotificationsGuard } from 'src/app/shared/guard/notifications.guard';

const routes: Routes = [
  {
    path: "",
    component: ServicesComponent,
    canActivate: [NotificationsGuard],
    data: {
      componentName: "ServicesComponent",
      privilegeName: "SERV"
    },
    children: [
      {
        path: "create-hbl",
        component: ServicesCreateHblFormComponent
      },
      {
        path: "create",
        component: ServiceOrdersTabsComponent, 
        data: {
          documentation_module: typesModulesDocumentation.OS_DES_VAC 
        }
      },
      {
        path: "resume",
        component: ServiceOrdersResumeComponent 
      },
      {
        path: "history",
        component: ServiceHistoryTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
