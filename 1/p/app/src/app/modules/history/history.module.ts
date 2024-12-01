import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './components/history/history.component';
import { ServicesModule } from '../services/services.module';
import { HistoryPinComponent } from './components/history-pin/history-pin.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgScrollbarReachedModule } from 'ngx-scrollbar/reached-event';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSortModule } from '@angular/material/sort';
import { ContainerizedLoadModule } from '../containerized-load/containerized-load.module';
import { DetachedLoadModule } from '../detached-load/detached-load.module';
import { HistoryAppointmentsComponent } from './components/history-appointments/history-appointments.component';


@NgModule({
  declarations: [
    HistoryComponent,
    HistoryPinComponent,
    HistoryAppointmentsComponent,
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    ServicesModule,
    NgScrollbarModule,
    NgScrollbarReachedModule,
    MatBadgeModule, 
    MatButtonModule, 
    MatIconModule,
    ContainerizedLoadModule,
    DetachedLoadModule,
  ]
})
export class HistoryModule { }
