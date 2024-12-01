import { IHistoryCrossInvoice } from "./history-cross-invoice.interface";

export interface IHistoryCross {
  transNbr: string;
  tranDate: string;
  agentShip: string;
  invoices: IHistoryCrossInvoice[];
}
