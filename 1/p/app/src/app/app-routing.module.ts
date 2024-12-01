import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PermissionsGuard } from './shared/guard/permissions.guard';
import { privileges } from "./core/privileges.enum";
import { DocumentalComponent } from './modules/documental/components/documental/documental.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", component: WelcomeComponent },
      {
        path: "carga-contenerizada",
        loadChildren: () =>
          import("./modules/containerized-load/containerized-load.module")
          .then(m => m.ContainerizedLoadModule),
        canActivate: [PermissionsGuard],
        data: {
          permissions: [privileges.CC, privileges.CC_TRUCK]
        }
      },
      {
        path: "carga-suelta",
        loadChildren: () =>
          import("./modules/detached-load/detached-load.module")
          .then(m => m.DetachedLoadModule),
        canActivate: [PermissionsGuard],
        data: {
          permissions: [privileges.CS]
        }
      },
      {
        path: "notas-credito",
        loadChildren: () =>
          import("./modules/credit-notes/credit-notes.module")
          .then(m => m.CreditNotesModule),
        canActivate: [PermissionsGuard],
        data: {
          permissions: [privileges.NOTA_CRED_BUS]
        }
      },
      {
        path: "historial",
        loadChildren: () =>
          import("./modules/history/history.module")
          .then(m => m.HistoryModule),
        canActivate: [PermissionsGuard],
        data: {
          permissions: [privileges.HIS_PIN, privileges.HIS_CIT]
        }
      },
      {
        path: "historial-cruces",
        loadChildren: () =>
          import("./modules/history-cross/history-cross.module")
          .then(m => m.HistoryCrossModule),
        data: {
          Permissions: [privileges.HIST_NOTA_CRED]
        }
      },
      {
        path: "servicios",
        loadChildren: () =>
          import("./modules/services/services.module")
          .then(m => m.ServicesModule),
        canActivate: [PermissionsGuard],
        data: {
          permissions: [privileges.SERV]
        }
      },
      {
        path: "administracion",
        loadChildren: () =>
          import("./modules/administration/administration.module")
          .then(m => m.AdministrationModule)
      },
      {
        path: "consultas",
        loadChildren: () =>
          import("./modules/queries/queries.module")
          .then(m => m.QueriesModule),
        canActivate: [PermissionsGuard],
        data: {
          permissions: [privileges.S_QRS, privileges.consultas]
        }
      },
      {
        path: "gestion-solicitudes",
        loadChildren: () =>
          import("./modules/request-management/request-management.module")
          .then(m => m.RequestManagementModule),
        canActivate: [PermissionsGuard],
        data: {
          permissions: [privileges.REQ_MAN]
        }
      },
      {
        path: "documental",
        loadChildren: () =>
          import("./modules/documental/documental.module")
          .then(m => m.DocumentalModule),
        data: {
          Permissions: [privileges.DOC_BUS]
        }
      },
      {
        path: "facturacion",
        loadChildren: () =>
          import("./modules/billing/billing.module")
          .then(m => m.BillingModule),
        data: {
          Permissions: [privileges.FAC]
        }
      },      
      {
        path: "gestion-empresa",
        loadChildren: () =>
          import("./modules/business-management/business-management.module")
          .then(m => m.BusinessManagementModule),
        data: {
          Permissions: [privileges.GE]
        }
      },
      {
        path: "gestion-solicitudes-sac",
        loadChildren: () =>
          import("./modules/sac-request-management/sac-request-management.module")
          .then(m => m.SacRequestManagementModule),
        data: {
          Permissions: [privileges.GS]
        }
      },
      { path: "**", redirectTo: "" }
    ]
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
