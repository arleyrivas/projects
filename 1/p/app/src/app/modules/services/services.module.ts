import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './components/services/services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesConfirmComponent } from './components/services-confirm/services-confirm.component';
import { ServicesCreateHblFormComponent } from './components/services-create-hbl-form/services-create-hbl-form.component';
import { CustomerSearcherComponent } from './components/customer-searcher/customer-searcher.component';
import { ServiceOrdersComponent } from './components/service-orders/service-orders.component';
import { ServiceOrdersConfirmComponent } from './components/service-orders-confirm/service-orders-confirm.component';
import { ServiceOrdersCreateComponent } from './components/service-orders-create/service-orders-create.component';
import { ServiceOrdersResumeComponent } from './components/service-orders-resume/service-orders-resume.component';
import { ServiceCreateHblComponent } from './components/service-create-hbl/service-create-hbl.component';
import { ServiceHistoryComponent } from './components/service-history/service-history.component';
import { ServiceHistoryTableComponent } from './components/service-history-table/service-history-table.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgScrollbarReachedModule } from 'ngx-scrollbar/reached-event';
import { ServiceOrdersTabsComponent } from './components/service-orders-tabs/service-orders-tabs.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ServicesConfirmComponent,
    ServicesCreateHblFormComponent,
    ServiceOrdersComponent,
    ServiceOrdersConfirmComponent,
    ServiceOrdersCreateComponent,
    ServiceOrdersResumeComponent,
    ServiceCreateHblComponent,
    ServiceHistoryComponent,
    ServiceHistoryTableComponent,
    ServiceOrdersTabsComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    NgScrollbarModule,
    NgScrollbarReachedModule
  ],
  exports: []
})
export class ServicesModule { }
