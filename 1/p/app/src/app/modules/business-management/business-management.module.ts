import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BusinessManagementComponent } from './components/business-management/business-management.component';
import { BusinessManagementRoutingModule } from './business-management-routing.module';
import { CustomerManagementFormComponent } from './components/customer-management-form/customer-management-form.component';
import { MessageEditCustomerDialogComponent } from './components/message-edit-customer-dialog/message-edit-customer-dialog.component';
import { CustomerRequestManagementComponentComponent } from './components/customer-request-management-component/customer-request-management-component.component';
import { CustomerManagementFormConfirmComponent } from './components/customer-management-form-confirm/customer-management-form-confirm.component';
import { CustomerRequestInProgressMessageComponent } from './components/customer-request-in-progress-message/customer-request-in-progress-message.component';
import { MatSortModule } from '@angular/material/sort';
import { CustomerRequestLoadDocumentsComponent } from './components/customer-request-load-documents/customer-request-load-documents.component';
import { ServicesModule } from '../services/services.module';
import { PendingFieldsAndDocumentsComponentComponent } from './components/pending-fields-and-documents-component/pending-fields-and-documents-component.component';


@NgModule({
  declarations: [
    BusinessManagementComponent,
    CustomerManagementFormComponent,
    MessageEditCustomerDialogComponent,
    CustomerRequestManagementComponentComponent,
    CustomerManagementFormConfirmComponent,
    CustomerRequestInProgressMessageComponent,
    CustomerRequestLoadDocumentsComponent,
    PendingFieldsAndDocumentsComponentComponent,
  ],
  imports: [
    CommonModule,
    BusinessManagementRoutingModule,
    SharedModule,
    MatSortModule,
    ServicesModule
  ]
})
export class BusinessManagementModule { }
