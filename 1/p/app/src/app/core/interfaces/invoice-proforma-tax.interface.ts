import { IInvoiceProformaTaxRate } from "./invoice-proforma-tax-rate.interface";

export interface IInvoiceProformaTax {
  taxRate: IInvoiceProformaTaxRate;
  amount: number;
  created: number;
  creator: string;
}
