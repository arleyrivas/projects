import { IInfoUserEnterprise } from "./info-user-enterprise.interface";
import { IInfoUserRole } from "./info-user-role.interface";

export interface IInfoUser {
  userName: string;
  nombres: string;
  apellidos: string;
  cargo: string;
  correo: string;
  celular: string;
  licencia: string;
  activo: string;
  info: string;
  telexNumber: string;
  shadowFlag: string;
  description: string | null;
  entryDN: string | null;
  createUser: string | null;
  empresa: IInfoUserEnterprise,
  roles: IInfoUserRole[],
  createdBySAC: string | null;
}
