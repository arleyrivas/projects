export interface ITruckPinPinContainerized {
  id: number;
  unitNbr: string;
  isoType: string;
  active: boolean;
  deleted: boolean;
  twenty: boolean;
  cargoQuantity: number | null;
  cargoWeigth: number | null;
  destination: string;
  truckVisitAppointmetId: string;
  observation: string;
  truckingCompanyLDAP: string;
  truckingCompanyNameLDAP: string;
  typePin: string;
}
