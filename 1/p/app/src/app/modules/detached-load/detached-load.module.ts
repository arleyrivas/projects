import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetachedLoadRoutingModule } from './detached-load-routing.module';
import { ImportComponent } from './components/import/import.component';
import { AppointmentCreationComponent } from './components/appointment-creation/appointment-creation.component';
import { DetachedLoadComponent } from './components/detached-load/detached-load.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetachedLoadResultComponent } from './components/detached-load-result/detached-load-result.component';
import { DialogPayComponent } from './components/dialog-pay/dialog-pay.component';
import { DetachedLoadDocumentComponent } from './components/detached-load-document/detached-load-document.component';
import { ServicesModule } from '../services/services.module';
import { GeneratePinComponent } from './components/generate-pin/generate-pin.component';
import { GeneratePinDisplayComponent } from './components/generate-pin-display/generate-pin-display.component';
import { GeneratePinDisplayItemComponent } from './components/generate-pin-display-item/generate-pin-display-item.component';
import { GeneratePinResultComponent } from './components/generate-pin-result/generate-pin-result.component';
import { GeneratePinResultItemComponent } from './components/generate-pin-result-item/generate-pin-result-item.component';


@NgModule({
  declarations: [
    ImportComponent,
    AppointmentCreationComponent,
    DetachedLoadComponent,
    DetachedLoadResultComponent,
    DialogPayComponent,
    DetachedLoadDocumentComponent,
    GeneratePinComponent,
    GeneratePinDisplayComponent,
    GeneratePinDisplayItemComponent,
    GeneratePinResultComponent,
    GeneratePinResultItemComponent
  ],
  imports: [
    CommonModule,
    DetachedLoadRoutingModule,
    SharedModule,
    ServicesModule
  ],
  exports: [
    GeneratePinDisplayItemComponent,
    AppointmentCreationComponent
  ]
})
export class DetachedLoadModule { }
