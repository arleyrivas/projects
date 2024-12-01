import { createReducer, on } from "@ngrx/store";
import { IBillingStore } from "src/app/core/interfaces/billing-store.interface";
import { cleanInvoices, setInvoices } from "./billing.actions";

export const initialState: IBillingStore = {
  result: [],
};

export const billingReducer = createReducer(
  initialState,
  on(setInvoices, (state, action) => ({ result: [...state.result, ...action.result] })),
  on(cleanInvoices, () => ({ result: [] })),
);
