import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataUpdateComponent } from './components/data-update/data-update.component';

const routes: Routes = [
  { path: "", component: DataUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataUpdateRoutingModule { }