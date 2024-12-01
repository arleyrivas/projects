import { createAction, props } from "@ngrx/store";
import { IInvoiceToPay } from "src/app/core/interfaces/invoice-to-pay.interface";
import { IInvoice } from "src/app/core/interfaces/invoices.interface";
import { IPaymentPayuRequest } from "src/app/core/interfaces/payment-payu-request.interface";
import { IPayUN4Request } from "src/app/core/interfaces/payuN4Request.interface";

export const setInvoices = createAction(
  "[PayU] Set Invoices",
  props<{ invoices: IInvoice[] }>()
);

export const getCheckLockedInvoices = createAction(
  "[PayU] Get Check Locked Invoices",
  props<{ invoices: IInvoice[], invoicesToPay: IInvoiceToPay[] }>()
);

export const setCheckLockedInvoices = createAction(
  "[PayU] Set Check Locked Invoices",
  props<{ checkLockedInvoices: boolean }>()
);

export const getPaymentData = createAction(
  "[PayU] Get Payment Data",
  props<{
    customerId: string,
    selectedInvoicesToPay: IInvoice[],
    invoicesToPay: IInvoiceToPay[],
    totalAmount: string
  }>()
);

export const setPaymentData = createAction(
  "[PayU] Set Payment Data",
  props<{ paymentData: IPaymentPayuRequest | null }>()
);

export const getPayInvoices = createAction(
  "[PayU] Get Pay Invoices",
  props<{ payUN4Request: IPayUN4Request }>()
);

export const setPayInvoices = createAction(
  "[PayU] Set Pay Invoices",
  props<{ paid: boolean }>()
);

export const getPayuGateway = createAction(
  "[PayU] Get Payu Gateway"
);

export const setPayuGateway = createAction(
  "[PayU] Set Payu Gateway",
  props<{ payuGateway: string }>()
);
