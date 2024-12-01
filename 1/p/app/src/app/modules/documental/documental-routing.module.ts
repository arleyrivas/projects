import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentalComponent } from './components/documental/documental.component';
import { NotificationsGuard } from 'src/app/shared/guard/notifications.guard';

const routes: Routes = [
  { path: "", component: DocumentalComponent,
    canActivate: [NotificationsGuard],
    data: {
      componentName: "DocumentalComponent",
      privilegeName: "DOC_BUS"
    },
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentalRoutingModule { }
