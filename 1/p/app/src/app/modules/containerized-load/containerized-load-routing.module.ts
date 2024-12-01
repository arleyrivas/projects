import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LockComponent } from 'src/app/shared/components/lock/lock.component';
import { ContainerizedLoadComponent } from './components/containerized-load/containerized-load.component';
import { ImportComponent } from './components/import/import.component';
import { InvoiceManagementBillingComponent } from './components/invoice-management-billing/invoice-management-billing.component';

import { AppointmentCreationComponent } from './components/appointment-creation/appointment-creation.component';
import { InvoiceProformaComponent } from './components/invoice-proforma/invoice-proforma.component';
import { InvoiceResumeComponent } from '../../shared/components/invoice-resume/invoice-resume.component';
import { billingFeatureSelector } from 'src/app/state/billing/billing.selectors';
import { UploadDocumentsComponent } from './components/upload-documents/UploadDocumentsComponent';
import { typesModulesDocumentation } from 'src/app/shared/enums/documentation-modules.enum';
import { GeneratePinComponent } from './components/generate-pin/generate-pin.component';
import { GeneratePinDisplayComponent } from './components/generate-pin-display/generate-pin-display.component';
import { InvoiceBookingManagementBillingComponent } from './components/invoice-booking-management-billing/invoice-booking-management-billing.component';
import { ExportComponent } from './components/export/export.component';
import { ExportacionComponent } from './components/exportacion/exportacion.component';
import { AssociateContainerComponent } from './components/associate-container/associate-container.component';
import { DisassociateContainerComponent } from './components/disassociate-container/disassociate-container.component';
import { NotificationsGuard } from 'src/app/shared/guard/notifications.guard';
const routes: Routes = [
  {
    path: "",
    component: ContainerizedLoadComponent,
    canActivate: [NotificationsGuard],
    data: {
       componentName: 'ContainerizedLoadComponent',
       privilegeName: 'CC,CC_TRUCK'
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
          detached: false,
          componentName: "LockComponent",
          privilegeName: "CC_CTA_BLOQ"
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
          detached: false,
          componentName: "LockComponent",
          privilegeName: "CC_CTA_DESBL"
        }
      },
      {
        path: "importacion",
        component: ImportComponent,
        data: {
          detached: false
        }
      },
      {
        path: "exportacion",
        component: ExportacionComponent,
        data: {
          detached: false
        }
      },
      {
        path: "appointment-datails",
        component: AppointmentCreationComponent
      },
      {
        path: "billing",
        component: InvoiceManagementBillingComponent,
        canActivate: [NotificationsGuard],
        data: {
          detached: false,
          componentName: "billing",
          privilegeName: "CC_IMP_FAC"
        }
      },
      {
        path: "proforma",
        component: InvoiceProformaComponent,
        data: {
          detached: false
        }
      },
      {
        path: "resume",
        component: InvoiceResumeComponent,
        data: {
          detached: false
        }
      },
      {
        path: "export",
        children: [
          {
            path: "billing",
            component: InvoiceBookingManagementBillingComponent,
            data: {
              detached: false,
              export: true
            }
          },
          {
            path: "proforma",
            component: InvoiceProformaComponent,
            data: {
              detached: false,
              export: true
            }
          },
          {
            path: "resume",
            component: InvoiceResumeComponent,
            data: {
              detached: false,
              export: true
            }
          },
        ]
      },
      {
        path: "billing",
        component: InvoiceManagementBillingComponent,
        canActivate: [NotificationsGuard],
        data: {
          detached: false,
          export: false,
        }
      },
      {
        path: "proforma",
        component: InvoiceProformaComponent,
        data: {
          detached: false,
          export: false
        }
      },
      {
        path: "resume",
        component: InvoiceResumeComponent,
        data: {
          detached: false,
          export: false
        }
      },
      {
        path:"documents",
        component: UploadDocumentsComponent,
        canActivate: [NotificationsGuard],
        data: {
          documentation_module: typesModulesDocumentation.IMPO_CC,
          componentName: "UploadDocumentsComponent",
          privilegeName: "CC_IMP_DOC"
        }
      },
      {
        path: "generar-pin",
        component: GeneratePinComponent,
        canActivate: [NotificationsGuard],
        data: {
          componentName: 'GeneratePinComponent',
          privilegeName: 'CC_IMP_PIN'
        },

      },
      {
        path: "pin",
        component: GeneratePinDisplayComponent
      },

      {
        path:"associate-container",
        component: AssociateContainerComponent,
        canActivate: [NotificationsGuard],
        data: {
          componentName: 'AssociateContainerComponent',
          privilegeName: 'CC_EXP_ASO'
        },
      },

      {
        path:"disassociate-container",
        component: DisassociateContainerComponent,
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerizedLoadRoutingModule { }
