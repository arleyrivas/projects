import { ITruckPinPinContainerized } from "./truck-pin-pin-containerized.interface";

export interface ITruckPin {
  id: number;
  pinNbr: string;
  unitNbr: string;
  blNbr: string;
  bkgNbr: string;
  edoNbr: string;
  eroNbr: string;
  isoType: string;
  createdByLDAP: string;
  createdByCompanyLDAP: string;
  truckingCompanyLDAP: string;
  truckingCompanyNameLDAP: string;
  consignee: string;
  frghtKind: string;
  isGroup: number;
  active: boolean;
  deleted: boolean;
  twenty: boolean;
  pinBreakBulk: [];
  truckVisitBreakBulk: [];
  pinContainerized: ITruckPinPinContainerized[];
  mailsNotifications: [];
  createdByCompanyNameLDAP: string;
  observations: string;
  createdAt: string;
  selected?: boolean;
}
