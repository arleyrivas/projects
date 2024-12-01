import { createAction, props } from "@ngrx/store";
import { ICreditNoteCross } from "src/app/core/interfaces/credit-note-cross.interface";
import { IInvoice } from "src/app/core/interfaces/invoices.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";

export const getCreditNoteCrosses = createAction(
  "[Credit-Notes] Get Credit Note Crosses",
  props<{ customer: string, page: number }>()
);

export const setCreditNoteCrosses = createAction(
  "[Credit-Notes] Set Credit Note Crosses",
  props<{ crosses: ICreditNoteCross[] }>()
);

export const getInvoices = createAction(
  "[Credit-Notes] Get Invoices",
  props<{ customer: string, page: number }>()
);

export const setInvoices = createAction(
  "[Credit-Notes] Set Invoices",
  props<{ invoices: IInvoice[] }>()
);

export const cleanInvoices = createAction(
  "[Credit-Notes] Clean Invoices"
);


export const selectCreditNoteCross = createAction(
  "[Credit-Notes] Select Credit Note Cross",
  props<{ cross: ICreditNoteCross }>()
);

export const removeCreditNoteCross = createAction(
  "[Credit-Notes] Remove Credit Note Cross",
  props<{ id: string }>()
);

export const selectInvoice = createAction(
  "[Credit-Notes] Select Invoice",
  props<{ invoice: IInvoice }>()
);

export const removeInvoice = createAction(
  "[Credit-Notes] Remove Invoice",
  props<{ id: string }>()
);

export const calculateCreditNotesTotal = createAction(
  "[Credit-Notes] Calculate Credit Notes Total"
);

export const calculateInvoicesTotal = createAction(
  "[Credit-Notes] Calculate Invoices Total"
);

export const getExecuteCrossing = createAction(
  "[Credit-Notes] Get Execute Crossing",
  props<{clientId: string,  invoiceList: string, creditNotesList: string }>()
);

export const setExecuteCrossing = createAction(
  "[Credit-Notes] Set Execute Crossing",
  props<{ result: IRestResult<string> }>()
);

export const clean = createAction(
  "[Credit-Notes] Clean"
);
