import { IAdministrationIpAddress } from "../interfaces/administration-ip.interface";

export interface IAdministrationIpAddressDTO {
  "companyId": string | null,
  "action": string,
  "ips": IAdministrationIpAddress[]
}
