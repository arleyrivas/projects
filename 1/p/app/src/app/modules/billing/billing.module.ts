import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './components/billing/billing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BillingRoutingModule } from './billing-routing.module';
import { SelectedInvoiceComponent } from './components/selected-invoice/selected-invoice.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgScrollbarReachedModule } from 'ngx-scrollbar/reached-event';
import { StatePipe } from './pipes/state.pipe';

@NgModule({
  declarations: [
    BillingComponent,
    SelectedInvoiceComponent,
    StatePipe
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    SharedModule,
    NgScrollbarModule,
    NgScrollbarReachedModule
  ]
})
export class BillingModule { }
