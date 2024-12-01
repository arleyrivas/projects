import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryCrossComponent } from './components/history-cross/history-cross.component';
import { NotificationsGuard } from 'src/app/shared/guard/notifications.guard';

const routes: Routes = [
  {
    path: "",
    component: HistoryCrossComponent,
    canActivate: [NotificationsGuard],
    data: {
      componentName: "HistoryCrossComponent",
      privilegeName: "HIST_NOTA_CRED"
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryCrossRoutingModule { }
