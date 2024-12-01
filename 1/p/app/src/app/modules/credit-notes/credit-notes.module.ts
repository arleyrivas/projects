import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditNotesRoutingModule } from './credit-notes-routing.module';
import { CreditNotesComponent } from './components/credit-notes/credit-notes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgScrollbarReachedModule } from 'ngx-scrollbar/reached-event';
import { CreditNotesState } from './pipes/credit-notes-status.pipe';
import { CreditNotesConfirmComponent } from './components/credit-notes-confirm/credit-notes-confirm.component';


@NgModule({
  declarations: [
    CreditNotesComponent,
    CreditNotesState,
    CreditNotesConfirmComponent
  ],
  imports: [
    CommonModule,
    CreditNotesRoutingModule,
    SharedModule,
    NgScrollbarModule,
    NgScrollbarReachedModule
  ]
})
export class CreditNotesModule { }
