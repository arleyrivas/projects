import { createReducer, on } from "@ngrx/store";
import { IContainerizedLoadStore } from "src/app/core/interfaces/containerized-load-store.interface";
import { IPayuStore } from "src/app/core/interfaces/payu-store.interface";
import { setCheckLockedInvoices, setInvoices, setPayInvoices, setPaymentData, setPayuGateway } from "./payu.actions";

export const initialState: IPayuStore = {
  invoices: [],
  checkLockedInvoices: false,
  invoicesChecked: false,
  paymentData: null,
  paid: false,
  payUrl: null
};

export const payuReducer = createReducer(
    initialState,
    on(setInvoices, (state, action) => {
      const newState = Object.assign({}, state);

      newState.invoices = action.invoices;

      return newState;
    }),
    on(setCheckLockedInvoices, (state, action) => {
      const newState = Object.assign({}, state);

      newState.checkLockedInvoices = action.checkLockedInvoices;

      return newState;
    }),
    on(setPaymentData, (state, action) => {
      const newState = Object.assign({}, state);

      newState.paymentData = action.paymentData;
      newState.checkLockedInvoices = false;

      return newState;
    }),
    on(setPayInvoices, (state, action) => {
      const newState = Object.assign({}, state);

      newState.paid = action.paid;
      newState.paymentData = null;

      return newState;
    }),
    on(setPayuGateway, (state, action) => {
      const newState = Object.assign({}, state);

      newState.payUrl = action.payuGateway;

      return newState;
    })
);
