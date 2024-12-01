import { IAdministrationRole } from "../interfaces/administration-role.interface";

export interface IAssignRoleDTO {
  "userName": string,
  "correo": string,
  "roles": IAdministrationRole[]
}
