import { IHistoryCrossInvoiceCredit } from "./history-cross-invoice-credit.interface";

export interface IHistoryCrossInvoice {
  id?: string;
  selected?: boolean;
  finalNbr: string;
  amount: number;
  balance: number;
  status: string;
  transNbr?: string;
  tranDate?: string;
  agentShip?: string;
  credits: IHistoryCrossInvoiceCredit[];
}
