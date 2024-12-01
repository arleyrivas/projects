import { IInvoiceToPay } from "./invoice-to-pay.interface";
import { IInvoice } from "./invoices.interface";

export interface IPayUN4Request {
  invoicesToPay:  IInvoiceToPay[];
  referenceCode: string;
  status: string | null;
  customerId: string;
}
