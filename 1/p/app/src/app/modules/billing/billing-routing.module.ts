import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './components/billing/billing.component';
import { NotificationsGuard } from 'src/app/shared/guard/notifications.guard';

const routes: Routes = [
  {
    path: "",
    component: BillingComponent,
    canActivate: [NotificationsGuard],
    data: {
      componentName: 'BillingComponent',
      privilegeName: 'FAC'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
