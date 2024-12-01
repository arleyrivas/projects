export interface IBookingInterface {
  nbr: string;
  line: string;
  shipperId: string;
  shipperName: string;
  agent: string;
  carrierVisit: string;
  carrierVisitName: string;
  inVoyNbr: string;
  outVoyNbr: string;
  vesselId: string;
  vesselName: string;
  visitPhase: string;
  portOfLoading: string;
  portOfDischarge1: string;
  itemId: string;
  quantity: string;
  availableQuantity: string;
  equipmentType: string;
  equipmentTypeDescription: string;
  eqIsoGroup: string;
  isOog: string;
  seqNbr: string;
  unitNbr: string;
  transitState: string;
  isoType: string;
  twenty: boolean;
  truckingCompany: string;
  hasDebt: boolean;
  hasChargeableUnitEvents: boolean;
  category: string;
  hasPin: boolean;
  hasTruckVisitAppointment: boolean;
  onAccount: boolean;
  hasHolds: boolean | null;
  pin: string | null;
  holdDescription: string | null;
  yard: boolean;
  departed: boolean;
  powerPaidThruDay: string | null;
  storagePaidthruDay: string | null;
  retiro: boolean;
}
