import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { AdministrationProfilePhoneComponent } from './components/administration-profile-phone/administration-profile-phone.component';
import { AdministrationActionsHoursComponent } from './components/administration-actions-hours/administration-actions-hours.component';
import { AdministrationNotificationSelectedComponent } from './components/administration-notification-selected/administration-notification-selected.component';
import { AdministrationUserComponent } from './components/administration-user/administration-user.component';
import { AdministrationUserOptionsComponent } from './components/administration-user-options/administration-user-options.component';
import { AdministrationSecondPasswordComponent } from './components/administration-second-password/administration-second-password.component';
import { AdministrationIpOptionsComponent } from './components/administration-ip-options/administration-ip-options.component';

const routes: Routes = [
  {
    path: "",
    component: AdministrationComponent,
    children: [
      {
        path: "actions/hours",
        component: AdministrationActionsHoursComponent
      },
      {
        path: "notification",
        component: AdministrationNotificationSelectedComponent
      },
      {
        path: "user",
        component: AdministrationUserComponent
      },
      {
        path: "user/notification",
        component: AdministrationProfilePhoneComponent
      },
      {
        path: "user/options",
        component: AdministrationUserOptionsComponent
      },
      {
        path: "second-password",
        component: AdministrationSecondPasswordComponent
      },
      {
        path: "ip-restriction",
        component: AdministrationIpOptionsComponent
      }

     ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
