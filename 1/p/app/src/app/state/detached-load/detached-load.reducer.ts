import { createReducer, on } from "@ngrx/store";
import { IDetachedLoadStore } from "src/app/core/interfaces/detached-load-store.interface";
import { cleanAppointmentData, cleanBillingData, cleanDetachedLoad, cleanGeneratePin, getDataAppointmentDetail, setCancelAppointment, setCausalCancellationAppointment, setCreateBreakbulk, setDataAppointmentDetail, setDataElementsDetachedLoad, setDetachedLoad, setFinalizeBbkInvoice, setGeneratePin, setSelectedCustomer, setSelectedUnits, setUpdateAgentAndConsigneeInHBl,  setVesselVisit, setfirstSearch } from "./detached-load.actions";

export const initialState: IDetachedLoadStore = {
  result: [],
  lastSearch: null,
  vesselVisit: null,
  firstSearch: false,
  truckVisitNbrData: null,
  invoiceProforma: null,
  selectedUnits: [],
  selectedCustomer: null,
  finalizeInvoice: null,
  loadedCustomer: '',
  truckResult: [],
  elementsDetachedLoad: '',
  causalCancellationAppointment: null,
  responseCancelAppointment: null,
};

export const DetachedLoadReducer = createReducer(
    initialState,
    on(setDetachedLoad, (state: IDetachedLoadStore, action) => {
        const newState: IDetachedLoadStore = Object.assign({}, state);

        newState.result = action.detachedLoad || [];
        if(action.detachedLoad.length) newState.lastSearch = action.detachedLoad[0].hbl

        return newState;
    }),
    on(cleanDetachedLoad, () => ({
      result: [],
      vesselVisit: null,
      firstSearch: false,
      truckVisitNbrData: null,
      invoiceProforma: null,
      selectedUnits: [],
      selectedCustomer: null,
      finalizeInvoice: null,
      truckResult: [],
      businessPortal: false,
      lastSearch: null,
      loadedCustomer: '',
      elementsDetachedLoad: '',
      causalCancellationAppointment: null,
      responseCancelAppointment: null,
    })),
    on(setVesselVisit, (state, action) => {
        const newState: IDetachedLoadStore = Object.assign({}, state);

        newState.vesselVisit = action.vesselVisit;

        return newState;
    }),
    on(setfirstSearch, (state: IDetachedLoadStore, action) => {
      const newState: IDetachedLoadStore = Object.assign({}, state);

      newState.firstSearch = action.search;

      return newState;
    }),
    on(getDataAppointmentDetail, (state, action) => {

      const newState: IDetachedLoadStore = { ...state, truckVisitNbrData: action.truckVisitNbr };
      return newState;
    }),
    on(setDataAppointmentDetail, (state, action) => {
      const newState: IDetachedLoadStore = Object.assign({}, state);

      newState.truckVisitNbrData = action.appointment;

      return newState;
    }),
    on(setCreateBreakbulk, (state, action) => {
      const newState: IDetachedLoadStore = Object.assign({}, state);

      newState.invoiceProforma = action.response;

      return newState;
    }),
    on(setSelectedUnits, (state, action) => {
      const newState: IDetachedLoadStore = Object.assign({}, state);

      newState.selectedUnits = action.units;

      return newState;
    }),
    on(setSelectedCustomer, (state, action) => {
      const newState: IDetachedLoadStore = Object.assign({}, state);

      newState.selectedCustomer = action.customer;

      return newState;
    }),
    on(cleanBillingData, (state, action) => {
      const newState: IDetachedLoadStore = Object.assign({}, state);

      newState.selectedCustomer = null;
      newState.selectedUnits = [];
      newState.invoiceProforma = null;

      return newState;
    }),
    on(setFinalizeBbkInvoice, (state, action) => {
      const newState: IDetachedLoadStore = Object.assign({}, state);

      newState.finalizeInvoice = action.response;

      return newState;
    }),
    on(setUpdateAgentAndConsigneeInHBl, (state, action) => {
      const newState: IDetachedLoadStore = Object.assign({}, state);
      newState.loadedCustomer = action.response;
      return newState;
    }),
    on(setGeneratePin, (state, action) => {
      const newState = Object.assign({}, state);

      newState.truckResult = action.pins;

      return newState;
    }),
    on(cleanGeneratePin, (state, action) => {
      const newState = Object.assign({}, state);

      newState.truckResult = [];

      return newState;
    }),
    on(cleanAppointmentData, (state, action) => {
      const newState: IDetachedLoadStore = Object.assign({}, state);

      newState.truckVisitNbrData = null;

      return newState;
    }),

    on(setDataElementsDetachedLoad, (state, action) => {
      const newState: IDetachedLoadStore = Object.assign({}, state);
      newState.elementsDetachedLoad = action.elementsDetachedLoad;

      return newState;
    }),

    on(setCausalCancellationAppointment, (state, action) => {
      const newState: IDetachedLoadStore = Object.assign({}, state);
      newState.causalCancellationAppointment = action.causalCancellationAppointment;

      return newState;
    }),

    on(setCancelAppointment, (state, action) => {
      const newState: IDetachedLoadStore = Object.assign({}, state);
      newState.responseCancelAppointment = action.response;

      return newState;
    }),
);
