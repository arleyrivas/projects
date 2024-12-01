import { createReducer, on } from "@ngrx/store";
import { IAdministrationStore } from "src/app/core/interfaces/administration-store";
import { assignRoles, clearPrivilegesNotificableCompany, getUserWithUsernameAndEmail, removePrivilegesNotificableCompany, selectPrivilegesNotificableCompany, setActionPrivilege, setActionPrivileges, setAllIpAddress, setCompanyRoles, setCompanyUsers, setPrivilegeName, setPrivilegesNotifiableCompany, setSecondPasswordMethod, setUserNotification, setUserWithUsernameAndEmail } from "./administration.actions";

export const initialState: IAdministrationStore = {
  users: [],
  selectedUser: [],
  companyRoles: [],
  notification: null,
  actions: [],
  privilege: null,
  selectedAction: [],
  notifications: [],
  selectedNotifications: [],
  secondPassword: null,
  address: [],
  selectedUserName: ""
};

export const administrationReducer = createReducer(
  initialState,
  on(setCompanyUsers, (state, action) => {
    const newState = Object.assign({}, state);

    newState.users = action.users;

    return newState;
  }),
  on(setUserWithUsernameAndEmail, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedUser = action.user;

    return newState;
  }),
  on(setUserNotification, (state, action) => {
    const newState = Object.assign({}, state);

    newState.notification = action.notification;

    return newState;
  }),
  on(setCompanyRoles, (state, action) => {
    const newState = Object.assign({}, state);

    newState.companyRoles = action.roles;

    return newState;
  }),
  on(setActionPrivileges, (state, action) => {
    const newState = Object.assign({}, state);

    newState.actions = action.actions;

    return newState;
  }),
  on(setActionPrivilege, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedAction = action.selectedAction;

    return newState;
  }),
  on(setPrivilegeName, (state, action) => {
    const newState = Object.assign({}, state);

    newState.privilege = action.privilege;

    return newState;
  }),
  on(setPrivilegesNotifiableCompany, (state, action) => {
    const newState = Object.assign({}, state);

    newState.notifications = action.notifications;

    return newState;
  }),
  on(selectPrivilegesNotificableCompany, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedNotifications = [...newState.selectedNotifications, action.notification];

    return newState;
  }),
  on(removePrivilegesNotificableCompany, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedNotifications = newState.selectedNotifications.filter(value => action.privilegeName !== value.privilegeName);

    return newState;
  }),
  on(clearPrivilegesNotificableCompany, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedNotifications = [];

    return newState;
  }),
  on(setSecondPasswordMethod, (state, action) => {
    const newState = Object.assign({}, state);

    newState.secondPassword = action.secondPassword;

    return newState;
  }),
  on(setAllIpAddress, (state, action) => {
    const newState = Object.assign({}, state);

    newState.address = action.address;

    return newState;
  }),
  on(getUserWithUsernameAndEmail, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedUserName = action.user;

    return newState;
  })
);
