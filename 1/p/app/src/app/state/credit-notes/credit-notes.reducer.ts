import { createReducer, on } from "@ngrx/store";
import { ICreditNotesStore } from "src/app/core/interfaces/credit-notes-store.interface";
import { calculateCreditNotesTotal, calculateInvoicesTotal, clean, removeCreditNoteCross, removeInvoice, selectCreditNoteCross, selectInvoice, setCreditNoteCrosses, setInvoices } from "./credit-notes.actions";

export const initialState: ICreditNotesStore = {
  crosses: [],
  invoices: [],
  selectedCrosses: [],
  selectedInvoices: [],
  totalCrosses: 0,
  totalInvoices: 0
};

export const creditNotesReducer = createReducer(
  initialState,
  on(setCreditNoteCrosses, (state, action) => ({
    crosses: [...state.crosses, ...action.crosses],
    invoices: state.invoices,
    selectedCrosses: state.selectedCrosses,
    selectedInvoices: state.selectedInvoices,
    totalCrosses: 0,
    totalInvoices: 0
  })),
  on(setInvoices, (state, action) => ({
    crosses: state.crosses,
    invoices: [...state.invoices, ...action.invoices],
    selectedCrosses: state.selectedCrosses,
    selectedInvoices: state.selectedInvoices,
    totalCrosses: 0,
    totalInvoices: 0
  })),
  on(selectCreditNoteCross, (state, action) => {
    const newState = Object.assign({}, state);

    newState.crosses = newState.crosses.map(item => {
      const newItem = Object.assign({}, item);

      if(newItem.final_nbr === action.cross.final_nbr) newItem.selected = true;

      return newItem;
    });

    newState.selectedCrosses = [...state.selectedCrosses, action.cross];

    return newState;
  }),
  on(selectInvoice, (state, action) => {
    const newState = Object.assign({}, state);

    newState.invoices = newState.invoices.map(item => {
      const newItem = Object.assign({}, item);

      if(newItem.finalNumber === action.invoice.finalNumber) newItem.selected = true;

      return newItem;
    });

    newState.selectedInvoices = [...state.selectedInvoices, action.invoice];

    return newState;
  }),
  on(removeCreditNoteCross, (state, action) => {
    const newState = Object.assign({}, state);

    newState.crosses = newState.crosses.map(item => {
      const newItem = Object.assign({}, item);

      if(newItem.final_nbr === action.id) newItem.selected = false;

      return newItem;
    });

    newState.selectedCrosses = state.selectedCrosses.filter(item => !(item.final_nbr === action.id));

    return newState;
  }),
  on(removeInvoice, (state, action) => {
    const newState = Object.assign({}, state);

    newState.invoices = newState.invoices.map(item => {
    const newItem = Object.assign({}, item);

    if(newItem.finalNumber === action.id) newItem.selected = false;

      return newItem;
    });

    newState.selectedInvoices = state.selectedInvoices.filter(item => !(item.finalNumber === action.id))

    return newState;
  }),
  on(calculateCreditNotesTotal, (state) => {
    const newState = Object.assign({}, state);

    newState.totalCrosses = newState.selectedCrosses.reduce((accumulator, currentValue) => accumulator + currentValue.TOTAL, 0);

    return newState;
  }),
  on(calculateInvoicesTotal, (state) => {
    const newState = Object.assign({}, state);

    newState.totalInvoices = newState.selectedInvoices.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.totalTotal), 0);

    return newState;
  }),
  on(clean, (state) => {
    return {
      crosses: [],
      invoices: [],
      selectedCrosses: [],
      selectedInvoices: [],
      totalCrosses: 0,
      totalInvoices: 0
    }
  })
);
