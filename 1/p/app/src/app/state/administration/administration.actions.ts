import { createAction, props } from "@ngrx/store";
import { IAdministrationActionsDTO } from "src/app/core/dto/administration-action.dto";
import { IAdministrationCreateUserDTO } from "src/app/core/dto/administration-create-user.dto";
import { IAdministrationIpAddressDTO } from "src/app/core/dto/administration-ip-address.dto";
import { IAdministrationNotificationPrivilegeDTO } from "src/app/core/dto/administration-notification-privilege.dto";
import { IAdministrationSecondPasswordDTO } from "src/app/core/dto/administration-second-password.dto";
import { IAssignRoleDTO } from "src/app/core/dto/assign-role.dto";
import { INotificationUpdateDataDTO } from "src/app/core/dto/notification-update-data.dto";
import { IAdministrationActionsHours } from "src/app/core/interfaces/administration-action-hours.interface";
import { IAdministrationActions } from "src/app/core/interfaces/administration-actions.interface";
import { IAdministrationDisableUserDTO } from "src/app/core/interfaces/administration-disable-user.interface";
import { IAdministrationIpAddress } from "src/app/core/interfaces/administration-ip.interface";
import { IAdministrationNotification } from "src/app/core/interfaces/administration-notification.interface";
import { IAdministrationRole } from "src/app/core/interfaces/administration-role.interface";
import { IAdministrationSecondPassword } from "src/app/core/interfaces/administration-second-password.interface";
import { IAdministrationUserNotification } from "src/app/core/interfaces/administration-user-notification.interface";
import { IAdministrationUser } from "src/app/core/interfaces/administration-user.interface";
import { IInfoUser } from "src/app/core/interfaces/info-user.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";

export const getActionPrivileges = createAction(
  "[Administration] Get Action Privileges"
);

export const setActionPrivileges = createAction(
  "[Administration] Set Action Privileges",
  props<{ actions: IAdministrationActions[] }>()
);

export const getActionPrivilege = createAction(
  "[Administration] Get Action Privilege",
  props<{ privilege: string }>()
);

export const setActionPrivilege = createAction(
  "[Administration] Set Action Privilege",
  props<{ selectedAction: IAdministrationActionsHours[] }>()
);

export const setPrivilegeName = createAction(
  "[Administration] Set Privilege Name",
  props<{ privilege: IAdministrationActions }>()
);

export const saveActionPrivilege = createAction(
  "[Administration] Save Action Privilege",
  props<{ payload: IAdministrationActionsDTO, hasNotification: boolean, notificationData: string, privilege: string }>()
);

export const setSaveActionPrivilege = createAction(
  "[Administration] Set Save Action Privilege"
);

export const getPrivilegesNotifiableCompany = createAction(
  "[Administration] Get Privileges Notifiable Company"
);

export const setPrivilegesNotifiableCompany = createAction(
  "[Administration] Set Privileges Notifiable Company",
  props<{ notifications: IAdministrationNotification[] }>()
);

export const updatePrivilegesNotifiableCompany = createAction(
  "[Administration] Update Privileges Notifiable Company",
  props<{ payload: IAdministrationNotificationPrivilegeDTO }>()
);

export const responseUpdatePrivilegesNotifiableCompany = createAction(
  "[Administration] Response Update Privileges Notifiable Company",
  props<{ result: IRestResult<null> }>()
);

export const selectPrivilegesNotificableCompany = createAction(
  "[Administration] Select Privileges Notifiable Company",
  props<{ notification: IAdministrationNotification }>()
);

export const removePrivilegesNotificableCompany = createAction(
  "[Administration] Remove Privileges Notifiable Company",
  props<{ privilegeName: string }>()
);

export const clearPrivilegesNotificableCompany = createAction(
  "[Administration] Clear Privileges Notifiable Company"
);

export const getSecondPasswordMethod = createAction(
  "[Administration] Get Second Password Method",
  props<{ nit: string }>()
);

export const setSecondPasswordMethod = createAction(
  "[Administration] Set Second Password Method",
  props<{ secondPassword: IAdministrationSecondPassword }>()
);

export const updateSecondPasswordMethod = createAction(
  "[Administration] Update Second Password Method",
  props<{ payload: IAdministrationSecondPasswordDTO, nit: string, hasNotification: boolean, notificationData: string, privilege: string }>()
);

export const responseUpdateSecondPasswordMethod = createAction(
  "[Administration] Response Update Second Password Method"
);

// USUARIOS

export const getCompanyUsers = createAction(
  "[Administration] Get Company Users"
);

export const setCompanyUsers = createAction(
  "[Administration] Set Company Users",
  props<{ users: IAdministrationUser[] }>()
);

export const getUserNotification = createAction(
  "[Administration] Get User Notification",
  props<{ user: string }>()
);

export const setUserNotification = createAction(
  "[Administration] Set User Notification",
  props<{ notification: IAdministrationUserNotification }>()
);

export const updateNotificationData = createAction(
  "[Administration] Update Notification Data",
  props<{ body: INotificationUpdateDataDTO, user: string }>()
);

export const responseUpdateNotificationData = createAction(
  "[Administration] Response Update Notification Data"
);

export const createUser = createAction(
  "[Administration] Create User",
  props<{ body: IAdministrationCreateUserDTO, hasNotification: boolean, notificationData: string, privilege: string }>()
);

export const responseCreateUser = createAction(
  "[Administration] Response Create User"
);

export const updateUser = createAction(
  "[Administration] Update User",
  props<{ body: IInfoUser, hasNotification: boolean, notificationData: string, privilege: string }>()
);

export const responseUpdateUser = createAction(
  "[Administration] Response Update User"
);

export const disableUser = createAction(
  "[Administration] Disable User",
  props<{ body: IAdministrationDisableUserDTO }>()
);

export const responseDisableUser = createAction(
  "[Administration] Response Disable User"
);

export const getUserWithUsernameAndEmail = createAction(
  "[Administration] Get User With Username And Email",
  props<{ user: string, email: string | null }>()
);

export const setUserWithUsernameAndEmail = createAction(
  "[Administration] Set User With Username And Email",
  props<{ user: IInfoUser[] }>()
);

export const resetUserPassword = createAction(
  "[Administration] Reset User Password",
  props<{ user: string }>()
);

export const responseResetUserPassword = createAction(
  "[Administration] Response Reset User Password",
  props<{ user: string }>()
);

export const getCompanyRoles = createAction(
  "[Administration] Get Company Roles",
  props<{ user: string }>()
);

export const setCompanyRoles = createAction(
  "[Administration] Set Company Roles",
  props<{ roles: IAdministrationRole[] }>()
);

export const assignRoles = createAction(
  "[Administration] Assign Roles",
  props<{ payload: IAssignRoleDTO, hasNotification: boolean, notificationData: string, privilege: string }>()
);

export const responseAssignRoles = createAction(
  "[Administration] Response Assign Roles"
);

export const getAllIpAddress = createAction(
  "[Administration] Get All Ip Address",
  props<{ payload: IAdministrationIpAddressDTO }>()
);

export const setAllIpAddress = createAction(
  "[Administration] Set All Ip Address",
  props<{ address: IAdministrationIpAddress[] }>()
);

export const createIpAddress = createAction(
  "[Administration] Create Ip Address",
  props<{ payload: IAdministrationIpAddressDTO }>()
);

export const responseCreateIpAddress = createAction(
  "[Administration] Response Create Ip Address"
);

export const deleteIpAddress = createAction(
  "[Administration] Delete Ip Address",
  props<{ payload: IAdministrationIpAddressDTO }>()
);

export const responseDeleteIpAddress = createAction(
  "[Administration] Response Delete Ip Address"
);

