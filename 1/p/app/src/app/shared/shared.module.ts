import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from './modules/material.module';

import { LegalNoticesDialogComponent } from './components/legal-notices-dialog/legal-notices-dialog.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from '../core/interceptors/loading.interceptor';
import { RejectWarningDialogComponent } from './components/reject-warning-dialog/reject-warning-dialog.component';
import { AfterIfDirective } from './directives/after-if.directive';
import { ShiftsAvailableDialogComponent } from './components/shifts-available-dialog/shifts-available-dialog.component';
import { LoadOperationsComponent } from './components/load-operations/load-operations.component';
import { LoadSearchResultComponent } from './components/load-search-result/load-search-result.component';
import { SearchComponent } from './components/search/search.component';
import { LockComponent } from './components/lock/lock.component';
import { RouterModule } from '@angular/router';
import { PermissionsDirective } from './directives/permissions.directive';
import { NotificationDirective } from './directives/notification.directive';
import { HourRestrictionDirective } from './directives/hour-restriction.directive';
import { DoubleFactorAuthenticationDirective } from './directives/double-factor-authentication.directive';
import { DoubleFactorAuthComponent } from './components/double-factor-auth/double-factor-auth.component';
import { SelectCompanyTypeDialogComponent } from './components/select-company-type-dialog/select-company-type-dialog.component';
import { SelectCompanyTypeMempDialogComponent } from './components/select-company-type-memp-dialog/select-company-type-memp-dialog.component';
import { AgentSearcherComponent } from './components/agent-searcher/agent-searcher.component';
import { InvoiceResumeComponent } from './components/invoice-resume/invoice-resume.component';
import { InvoiceItemComponent } from './components/invoice-item/invoice-item.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { TruckSearcherComponent } from './components/truck-searcher/truck-searcher.component';
import { CustomerSearcherComponent } from '../modules/services/components/customer-searcher/customer-searcher.component';
import { InvoicePrintMessageComponent } from './components/invoice-print-message/invoice-print-message.component';
import { VehicleSearcherComponent } from './components/vehicle-searcher/vehicle-searcher.component';
import { CustomDayDirective } from './directives/highlight-date.directive';
import { AppointmentDialogComponent } from './components/appointment-dialog/appointment-dialog.component';
import { InfoPinAppointmentComponent } from './components/info-pin-appointment/info-pin-appointment.component';
import { CalendarioAppointmentComponent } from './components/calendario-appointment/calendario-appointment.component';
import { DriverSearcherComponent } from './components/driver-searcher/driver-searcher.component';
import { TypeTransportComponent } from './components/type-transport/type-transport.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationsVentanaComponent } from './components/notifications-ventana/notifications-ventana.component';
import { SearchPlateComponent } from './components/search-plate/search-plate.component';
import { PinSearcherComponent } from './components/pin-searcher/pin-searcher.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgScrollbarReachedModule } from 'ngx-scrollbar/reached-event';
import { MakeAppointmentComponent } from './components/make-appointment/make-appointment.component';
import { DecimalDotPipe } from './pipes/decimal-dot.pipe';
import { ConfirmAppointmentMessageComponent } from './components/confirm-appointment-message/confirm-appointment-message.component';
import { CausalCancellationDialogComponent } from './components/causal-cancellation-dialog/causal-cancellation-dialog.component';
import { CardAppointmentComponent } from './components/card-appointment/card-appointment.component';
import { ContainersSearcherComponent } from './components/containers-searcher/containers-searcher.component';
import { AlertAssociateContainerComponent } from './components/alert-associate-container/alert-associate-container.component';
import { RemoveContainerDialogComponent } from './components/remove-container-dialog/remove-container-dialog.component';
import { CutoffDialogComponent } from './components/cutoff-dialog/cutoff-dialog.component';
import { ConfirmDeleteContainerComponent } from './components/confirm-delete-container/confirm-delete-container.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

import { NotificationsDialogComponent } from './components/notifications-dialog/notifications-dialog.component';
import { ColumnNamePipe } from './pipes/column-name.pipe';


@NgModule({
  declarations: [
    LegalNoticesDialogComponent,
    DateFormatPipe,
    RejectWarningDialogComponent,
    AfterIfDirective,
    ShiftsAvailableDialogComponent,
    SearchComponent,
    LoadSearchResultComponent,
    LoadOperationsComponent,
    LockComponent,
    PermissionsDirective,
    NotificationDirective,
    HourRestrictionDirective,
    DoubleFactorAuthenticationDirective,
    DoubleFactorAuthComponent,
    SelectCompanyTypeDialogComponent,
    SelectCompanyTypeMempDialogComponent,
    AgentSearcherComponent,
    InvoiceResumeComponent,
    InvoiceItemComponent,
    CustomerSearcherComponent,
    UploadFileComponent,
    TruckSearcherComponent,
    InvoicePrintMessageComponent,
    VehicleSearcherComponent,
    CustomDayDirective,
    AppointmentDialogComponent,
    AppointmentDialogComponent,
    InfoPinAppointmentComponent,
    CalendarioAppointmentComponent,
    DriverSearcherComponent,
    TypeTransportComponent,
    NotificationsComponent,
    NotificationsVentanaComponent,
    SearchPlateComponent,
    PinSearcherComponent,
    MakeAppointmentComponent,
    DecimalDotPipe,
    ConfirmAppointmentMessageComponent,
    CausalCancellationDialogComponent,
    CardAppointmentComponent,
    ContainersSearcherComponent,
    AlertAssociateContainerComponent,
    RemoveContainerDialogComponent,
    CutoffDialogComponent,
    ConfirmDeleteContainerComponent,
    ModalDialogComponent,
    NotificationsDialogComponent,
    ColumnNamePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxSpinnerModule.forRoot({ type: "ball-clip-rotate" }),
    NgScrollbarModule,
    NgScrollbarReachedModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DateFormatPipe,
    NgxSpinnerModule,
    AfterIfDirective,
    ShiftsAvailableDialogComponent,
    SearchComponent,
    LoadSearchResultComponent,
    LoadOperationsComponent,
    LockComponent,
    PermissionsDirective,
    SelectCompanyTypeDialogComponent,
    SelectCompanyTypeMempDialogComponent,
    DoubleFactorAuthenticationDirective,
    DoubleFactorAuthComponent,
    HourRestrictionDirective,
    AgentSearcherComponent,
    InvoiceResumeComponent,
    InvoiceItemComponent,
    CustomerSearcherComponent,
    UploadFileComponent,
    TruckSearcherComponent,
    VehicleSearcherComponent,
    CustomDayDirective,
    AppointmentDialogComponent,
    InfoPinAppointmentComponent,
    CalendarioAppointmentComponent,
    DriverSearcherComponent,
    TypeTransportComponent,
    NotificationsComponent,
    NotificationsVentanaComponent,
    SearchPlateComponent,
    PinSearcherComponent,
    MakeAppointmentComponent,
    ConfirmAppointmentMessageComponent,
    CausalCancellationDialogComponent,
    CardAppointmentComponent,
    ContainersSearcherComponent,
    AlertAssociateContainerComponent,
    RemoveContainerDialogComponent,
    CutoffDialogComponent,
    ConfirmDeleteContainerComponent,
    ModalDialogComponent,
    NotificationsDialogComponent,
    ColumnNamePipe
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ]
})
export class SharedModule { }
