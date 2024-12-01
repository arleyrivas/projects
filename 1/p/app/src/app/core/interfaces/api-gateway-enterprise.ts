import { ICompanyType } from "./company-type.interface";

export interface IAPIGatewayEnterprise {
  id: string;
  companyName: string;
  allowStaffAnotherAgency: boolean;
  tiposEmpresas: ICompanyType[];
}
