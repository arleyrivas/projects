export interface IGeneratePinDeactivatePartial {
  id: number | null;
  unitNbr: string;
  isoType: string;
  active: boolean;
  deleted: boolean;
  twenty: boolean;
  cargoQuantity: number | null;
  cargoWeigth: number | null;
  destination: number | null;
  truckVisitAppointmetId: number | null;
  observation: string;
  truckingCompanyLDAP: string;
  truckingCompanyNameLDAP: string;
  createdByLDAP: string;
  createdByCompanyNameLDAP: string;
  mailsNotifications: string[];
  observations: string;
  createdDate: string;
}
