export interface IGeneratePinUnitsTrucksDTO {
  nbr?: string;
  truckId?: string;
  truckName?: string;
  twenty?: boolean;
  isoType?: string;
  quantity?: number;
  commodity?: string;
  cargoQuantity?: number | null;
  cargoWeigth?: number | null;
  destination?: string | null;
  truckVisitAppointmetId?: string | null;
}
