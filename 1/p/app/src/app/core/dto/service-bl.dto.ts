import { IServiceBlHbl } from "./service-bl-hbl.dto";

export interface IServiceBlDTO {
  cantActive: number;
  cantInactive: number;
  actives: string[];
  inactives: string[];
  vesselVisit: string;
  lineOperator: string;
  hbls: IServiceBlHbl[];
}
