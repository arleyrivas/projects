import { createAction, props } from "@ngrx/store";
import { IInvoicesPayload } from "src/app/core/interfaces/invoices-payload.interface";
import { IInvoice } from "src/app/core/interfaces/invoices.interface";

export const getInvoices = createAction(
  "[Billing] Get Invoices",
  props<{ payload: IInvoicesPayload, page: number, quantity: number }>()
);

export const setInvoices = createAction(
  "[Billing] Set Invoices",
  props<{ result: Array<IInvoice> }>()
);

export const cleanInvoices = createAction(
  "[Billing] Clean Invoices"
);
