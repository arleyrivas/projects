import { IAdministrationActionsHours } from "./administration-action-hours.interface";

export interface IAdministrationActionsPrivileges {
  privilegio: string;
  diasRestriccion: IAdministrationActionsHours[];
}
