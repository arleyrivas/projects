import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataUpdateRoutingModule } from './data-update-routing.module';
import { DataUpdateComponent } from './components/data-update/data-update.component';


@NgModule({
  declarations: [
    DataUpdateComponent
  ],
  imports: [
    CommonModule,
    DataUpdateRoutingModule
  ]
})
export class DataUpdateModule { }
