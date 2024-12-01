import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueriesComponent } from './components/queries/queries.component';
import { NotificationsGuard } from 'src/app/shared/guard/notifications.guard';

const routes: Routes = [
  { path: "", component: QueriesComponent,
    canActivate: [NotificationsGuard],
    data: {
      componentName: "QueriesComponent",
      privilegeName: "S_QRS,consultas"
    },
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueriesRoutingModule { }
