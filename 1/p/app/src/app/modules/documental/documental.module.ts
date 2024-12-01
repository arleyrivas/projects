import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentalComponent } from './components/documental/documental.component';
import { DocumentalRoutingModule } from './documental-routing.module';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { DocumentInformationComponent } from './components/document-information/document-information.component';
import { DocumentalCommentComponent } from './components/documental-comment/documental-comment.component';
import { DocumentalSearchComponent } from './components/documental-search/documental-search.component';
import { DocumentalHistoryComponent } from './components/documental-history/documental-history.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { DocumentalEffects } from 'src/app/state/documental/documental.effects';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgScrollbarReachedModule } from 'ngx-scrollbar/reached-event';

@NgModule({
  declarations: [
    DocumentalComponent,
    DocumentListComponent,
    DocumentInformationComponent,
    DocumentalCommentComponent,
    DocumentalSearchComponent,
    DocumentalHistoryComponent
  ],
  imports: [
    CommonModule,
    DocumentalRoutingModule,
    SharedModule,
    EffectsModule.forFeature([DocumentalEffects]),
    NgScrollbarModule,
    NgScrollbarReachedModule
  ]
})
export class DocumentalModule { }
