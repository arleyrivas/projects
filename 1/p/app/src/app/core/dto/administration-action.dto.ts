import { IAdministrationActionsPrivileges } from "../interfaces/administration-action-privileges.interface";

export interface IAdministrationActionsDTO {
  "nit": string;
  "privilegios": IAdministrationActionsPrivileges[];
}
