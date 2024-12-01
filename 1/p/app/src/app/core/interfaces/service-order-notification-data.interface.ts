export interface IServiceOrderNotificationData {
  user: string;
  name: string;
  nit: string;
  nbr: string;
  containers: string;
  customer: string;
  serviceType: string;
  autorityType: string;
  inspectionType: string,
  officials: string[];
  observations: string;
  serviceOrdersRef: string[] | null;
};
