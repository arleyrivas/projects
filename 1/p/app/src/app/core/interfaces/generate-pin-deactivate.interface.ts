export interface IGeneratePinDeactivate {
  pinNbr: string | null;
  id: number | null;
  observation: string;
}


export interface INotificationGeneratePinDeactivate{
  userName: string;
  fullName: string;
  hbl: string | undefined;
  shipperId: string | undefined;
  shipperName: string | undefined;
  containers: string;
  observations: string;
  agent: string;
  createdAt: string;
  container: string | undefined
  cargoWeigth: number | null;
  cargoQuantity: number | null;
  consigneeId: string | null;
  consigneeName: string | undefined;
  operation: string | undefined;
  userId: string | undefined;
}