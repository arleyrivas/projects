import { IAPIGatewayEnterprise } from "./api-gateway-enterprise"
import { IAPIGatewayPrivilege } from "./api-gateway-privilege.interface"

export interface IAPIGatewayStore {
  userName: string,
  nombres: string,
  correo: string,
  apellidos: string,
  empresa: IAPIGatewayEnterprise | null,
  privileges: IAPIGatewayPrivilege[],
  passwordExpiring: boolean;
}
