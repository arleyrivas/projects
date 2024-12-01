import { IAdministrationActionsHours } from "./administration-action-hours.interface";
import { IAdministrationActions } from "./administration-actions.interface";
import { IAdministrationIpAddress } from "./administration-ip.interface";
import { IAdministrationNotification } from "./administration-notification.interface";
import { IAdministrationRole } from "./administration-role.interface";
import { IAdministrationSecondPassword } from "./administration-second-password.interface";
import { IAdministrationUserNotification } from "./administration-user-notification.interface";
import { IAdministrationUser } from "./administration-user.interface";
import { IInfoUser } from "./info-user.interface";

export interface IAdministrationStore {
  users: IAdministrationUser[],
  selectedUser: IInfoUser[],
  companyRoles: IAdministrationRole[],
  notification: IAdministrationUserNotification | null,
  actions: IAdministrationActions[],
  privilege: IAdministrationActions | null,
  selectedAction: IAdministrationActionsHours[],
  notifications: IAdministrationNotification[],
  selectedNotifications: IAdministrationNotification[],
  secondPassword: IAdministrationSecondPassword | null,
  address: IAdministrationIpAddress[],
  selectedUserName: string
}
