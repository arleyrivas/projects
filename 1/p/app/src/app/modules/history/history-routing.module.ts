import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './components/history/history.component';
import { HistoryPinComponent } from './components/history-pin/history-pin.component';
import { HistoryAppointmentsComponent } from './components/history-appointments/history-appointments.component';
import { NotificationsGuard } from 'src/app/shared/guard/notifications.guard';

const routes: Routes = [
  { path: "", component: HistoryComponent,
    canActivate: [NotificationsGuard],
    data: {
      componentName: "HistoryComponent",
      privilegeName: "HIS_PIN,HIS_CIT"
    },
    children: [
      {
        path: "history-pin",
        component: HistoryPinComponent,
      },
      {
        path: "history-appointments",
        component: HistoryAppointmentsComponent
      }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
