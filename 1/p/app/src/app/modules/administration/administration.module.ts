import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AdministrationComponent } from './components/administration/administration.component';
import { AdministrationUsersComponent } from './components/administration-users/administration-users.component';
import { AdministrationUserOptionsComponent } from './components/administration-user-options/administration-user-options.component';
import { AdministrationUserFormComponent } from './components/administration-user-form/administration-user-form.component';
import { AdministrationUsersAssignRolesComponent } from './components/administration-users-assign-roles/administration-users-assign-roles.component';
import { AdministrationUsersResetPasswordComponent } from './components/administration-users-reset-password/administration-users-reset-password.component';
import { AdministrationUserComponent } from './components/administration-user/administration-user.component';
import { AdministrationSecondPasswordComponent } from './components/administration-second-password/administration-second-password.component';
import { AdministrationActionsComponent } from './components/administration-actions/administration-actions.component';
import { AdministrationActionsHoursComponent } from './components/administration-actions-hours/administration-actions-hours.component';
import { AdministrationNotificationComponent } from './components/administration-notification/administration-notification.component';
import { AdministrationNotificationSelectedComponent } from './components/administration-notification-selected/administration-notification-selected.component';
import { AdministrationIpComponent } from './components/administration-ip/administration-ip.component';
import { AdministrationIpOptionsComponent } from './components/administration-ip-options/administration-ip-options.component';
import { AdministrationProfilePhoneComponent } from './components/administration-profile-phone/administration-profile-phone.component';
import { AdministrationProfileComponent } from './components/administration-profile/administration-profile.component';
import { AdministrationIpDialogComponent } from './components/administration-ip-dialog/administration-ip-dialog.component';
import { MatSortModule } from '@angular/material/sort';
import { AdministrationSecondPasswordMainComponent } from './components/administration-second-password-main/administration-second-password-main.component';

@NgModule({
  declarations: [
    AdministrationComponent,
    AdministrationUsersComponent,
    AdministrationUserOptionsComponent,
    AdministrationUserFormComponent,
    AdministrationUsersAssignRolesComponent,
    AdministrationUsersResetPasswordComponent,
    AdministrationUserComponent,
    AdministrationSecondPasswordComponent,
    AdministrationActionsComponent,
    AdministrationActionsHoursComponent,
    AdministrationNotificationComponent,
    AdministrationNotificationSelectedComponent,
    AdministrationIpComponent,
    AdministrationIpOptionsComponent,
    AdministrationProfilePhoneComponent,
    AdministrationProfileComponent,
    AdministrationIpDialogComponent,
    AdministrationSecondPasswordMainComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule
  ],
  providers: []
})
export class AdministrationModule { }
