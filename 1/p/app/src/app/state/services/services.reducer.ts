import { createReducer, on } from "@ngrx/store";
import { SetServicesImo, cleanServicesImo, cleanServicesblSearch, setSelectedBl, setSelectedCustomer, setServicesBl, setServicesPackagetypes } from "./services.actions";
import { IServicesStore } from "src/app/core/interfaces/services-store.interface";

export const initialState: IServicesStore = {
 blSearch: null,
 imo: [],
 packageTypes: [],
 selectedCustomer: null,
  selectedBl: null
};

export const servicesReducer = createReducer(
  initialState,
  on(setServicesBl, (state, action) => {
    const newState = Object.assign({}, state);

    newState.blSearch = action.searchedBl;

    return newState;
  }),
  on(setServicesPackagetypes, (state, action) => {
    const newState = Object.assign({}, state);

    newState.packageTypes = action.packagesTypes;

    return newState;
  }),
  on(SetServicesImo, (state, action) => {
    const newState = Object.assign({}, state);

    newState.imo = action.imo;

    return newState;
  }),
  on(cleanServicesImo, (state, action) => {
    const newState = Object.assign({}, state);

    newState.imo = [];

    return newState;
  }),
  on(setSelectedCustomer, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedCustomer = action.customer;

    return newState;
  }),
  on(setSelectedBl, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedBl = action.bl;

    return newState;
  }),
  on(cleanServicesblSearch, (state, action) => {
    const newState = Object.assign({}, state);

    newState.blSearch = null;

    return newState;
  }),
);
