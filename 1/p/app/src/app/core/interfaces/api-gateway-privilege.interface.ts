import { IAPIGatewayHourRestriction } from "./api-gateway-hour-restriction.interface";

export interface IAPIGatewayPrivilege {
  "privilegeId": string,
  "dobleFactorAutenticacion": boolean,
  "notificable": boolean,
  "diasRestriccion": IAPIGatewayHourRestriction[]
}
