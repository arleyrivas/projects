import { IInvoice } from "./invoices.interface";
import { IPaymentPayuRequest } from "./payment-payu-request.interface";

export interface IPayuStore {
  invoices: IInvoice[];
  checkLockedInvoices: boolean;
  invoicesChecked: boolean;
  paymentData: IPaymentPayuRequest | null;
  paid: boolean;
  payUrl: string | null;
}
