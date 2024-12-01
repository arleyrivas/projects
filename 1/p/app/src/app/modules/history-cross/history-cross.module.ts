import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryCrossRoutingModule } from './history-cross-routing.module';
import { HistoryCrossComponent } from './components/history-cross/history-cross.component';
import { historyCrossStatusPipe } from './pipes/history-cross-status.pipes';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgScrollbarReachedModule } from 'ngx-scrollbar/reached-event';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    HistoryCrossComponent,
    historyCrossStatusPipe
  ],
  imports: [
    CommonModule,
    HistoryCrossRoutingModule,
    SharedModule,
    NgScrollbarModule,
    NgScrollbarReachedModule
  ]
})
export class HistoryCrossModule { }
