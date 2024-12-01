import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditNotesComponent } from './components/credit-notes/credit-notes.component';
import { NotificationsGuard } from 'src/app/shared/guard/notifications.guard';

const routes: Routes = [
  { path: "", component: CreditNotesComponent,
    canActivate: [NotificationsGuard],
    data: {
      componentName: 'CreditNotesComponent',
      privilegeName: 'NOTA_CRED_BUS'
    }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditNotesRoutingModule { }
