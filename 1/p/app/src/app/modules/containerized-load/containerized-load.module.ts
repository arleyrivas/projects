import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerizedLoadRoutingModule } from './containerized-load-routing.module';
import { ImportComponent } from './components/import/import.component';
import { AssociateContainerComponent } from './components/associate-container/associate-container.component';
import { AppointmentCreationComponent } from './components/appointment-creation/appointment-creation.component';
import { ExportComponent } from './components/export/export.component';
import { ContainerizedLoadComponent } from './components/containerized-load/containerized-load.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JoyrideModule } from 'ngx-joyride';
import { ContainerizedLoadResultComponent } from './components/containerized-load-result/containerized-load-result.component';
import { InvoiceManagementComponent } from './components/invoice-management/invoice-management.component';
import { DialogPayComponent } from './components/dialog-pay/dialog-pay.component';
import { ClientMessageAgreementDialogComponent } from './components/client-message-agreement-dialog/client-message-agreement-dialog.component';
import { InvoiceProformaComponent } from './components/invoice-proforma/invoice-proforma.component';
import { InvoiceManagementBillingComponent } from './components/invoice-management-billing/invoice-management-billing.component';
import { ServicesModule } from '../services/services.module';
import { UploadDocumentsComponent } from './components/upload-documents/UploadDocumentsComponent';
import { GeneratePinComponent } from './components/generate-pin/generate-pin.component';
import { GeneratePinDisplayComponent } from './components/generate-pin-display/generate-pin-display.component';
import { GeneratePinDisplayItemComponent } from './components/generate-pin-display-item/generate-pin-display-item.component';
import { GeneratePinResultComponent } from './components/generate-pin-result/generate-pin-result.component';
import { GeneratePinResultItemComponent } from './components/generate-pin-result-item/generate-pin-result-item.component';
import { GeneratePinTruckUnitComponent } from './components/generate-pin-truck-unit/generate-pin-truck-unit.component';
import { GeneratePinDeactivationDialogComponent } from './components/generate-pin-deactivation-dialog/generate-pin-deactivation-dialog.component';
import { BookingLoadResultComponent } from './components/booking-load-result/booking-load-result.component';
import { InvoiceBookingManagementBillingComponent } from './components/invoice-booking-management-billing/invoice-booking-management-billing.component';
import { ExportacionComponent } from './components/exportacion/exportacion.component';
import { DisassociateContainerComponent } from './components/disassociate-container/disassociate-container.component';

@NgModule({
  declarations: [
    ImportComponent,
    AssociateContainerComponent,
    AppointmentCreationComponent,
    ExportComponent,
    ContainerizedLoadComponent,
    ContainerizedLoadResultComponent,
    InvoiceManagementComponent,
    DialogPayComponent,
    ClientMessageAgreementDialogComponent,
    InvoiceProformaComponent,
    InvoiceManagementBillingComponent,
    UploadDocumentsComponent,
    GeneratePinComponent,
    GeneratePinDisplayComponent,
    GeneratePinDisplayItemComponent,
    GeneratePinResultComponent,
    GeneratePinResultItemComponent,
    GeneratePinTruckUnitComponent,
    GeneratePinDeactivationDialogComponent,
    BookingLoadResultComponent,
    InvoiceBookingManagementBillingComponent,
    ExportacionComponent,
    DisassociateContainerComponent,
  ],
  imports: [
    CommonModule,
    ContainerizedLoadRoutingModule,
    JoyrideModule.forRoot(),
    SharedModule,
    ServicesModule
  ],
  exports: [
    GeneratePinDisplayItemComponent,
    AppointmentCreationComponent,
  ]
})
export class ContainerizedLoadModule { }
