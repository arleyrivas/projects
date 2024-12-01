import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LockComponent } from 'src/app/shared/components/lock/lock.component';
import { DetachedLoadComponent } from './components/detached-load/detached-load.component';
import { AppointmentCreationComponent } from './components/appointment-creation/appointment-creation.component';
import { ImportComponent } from './components/import/import.component';
import { InvoiceManagementBillingComponent } from '../containerized-load/components/invoice-management-billing/invoice-management-billing.component';
import { InvoiceProformaComponent } from '../containerized-load/components/invoice-proforma/invoice-proforma.component';
import { InvoiceResumeComponent } from 'src/app/shared/components/invoice-resume/invoice-resume.component';
import { DetachedLoadDocumentComponent } from './components/detached-load-document/detached-load-document.component';
import { typesModulesDocumentation } from 'src/app/shared/enums/documentation-modules.enum';
import { GeneratePinComponent } from './components/generate-pin/generate-pin.component';
import { GeneratePinDisplayComponent } from './components/generate-pin-display/generate-pin-display.component';
import { NotificationsGuard } from 'src/app/shared/guard/notifications.guard';
const routes: Routes = [
  {
    path: "",
    component: DetachedLoadComponent,
    canActivate: [NotificationsGuard],
    data: {
       componentName: 'DetachedLoadComponent',
       privilegeName: 'CS,CS_CIT_BUS,CS_IMP_BUS'
    },
    children: [
      {
        path: "lock",
        component: LockComponent,
        canActivate: [NotificationsGuard],
        data: {
          title: "Bloquear",
          action: "Bloquear",
          actionIcon: "lock",
          lock: true,
          detached: true,
          componentName: "LockComponent",
          privilegeName: "CS_CTA_BLOQ"
        }
      },
      {
        path: "unlock",
        component: LockComponent,
        canActivate: [NotificationsGuard],
        data: {
          title: "Desbloquear",
          action: "Desbloquear",
          actionIcon: "lock_open",
          lock: false,
          detached: true,
          componentName: "LockComponent",
          privilegeName: "CS_CTA_DESBL"
        }
      },
      {
        path: "appointment-creation",
        component: AppointmentCreationComponent
      },
      {
        path: "importacion",
        component: ImportComponent,
        data: {
          detached: true
        }
      },
      {
        path: "billing",
        component: InvoiceManagementBillingComponent,
        canActivate: [NotificationsGuard],
        data: {
          detached: true,
          componentName: "InvoiceManagementBillingComponent",
          privilegeName: "CS_IMP_FAC"
        }
      },
      {
        path: "proforma",
        component: InvoiceProformaComponent,
        data: {
          detached: true
        }
      },
      {
        path: "resume",
        component: InvoiceResumeComponent,
        data: {
          detached: true
        }
      },
      {
        path:"documents",
        component: DetachedLoadDocumentComponent,
        canActivate: [NotificationsGuard],
        data: {
          documentation_module: typesModulesDocumentation.IMPO_CS,
          componentName: "DetachedLoadDocumentComponent",
          privilegeName: "CS_IMP_DOC"
        }
      },
      {
        path: "generar-pin",
        component: GeneratePinComponent,
        canActivate: [NotificationsGuard],
        data: {
          componentName: 'GeneratePinComponent',
          privilegeName: 'CS_IMP_PIN'
        },
      },
      {
        path: "pin",
        component: GeneratePinDisplayComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetachedLoadRoutingModule { }
