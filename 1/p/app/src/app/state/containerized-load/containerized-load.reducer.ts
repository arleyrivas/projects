import { createReducer, on } from "@ngrx/store";
import { IContainerizedLoadStore } from "src/app/core/interfaces/containerized-load-store.interface";

import { cleanContainerizedLoad, setContainerizedLoad, setFirstSearch, setInvoice, setVesselVisit,
   getDataUnitNbr, setDataUnitNbr, getDataAppointmentDetail, setDataAppointmentDetail,
    cleanDataUnitNbr, getCustomerContract, setCustomerContract, setInvoiceCreate, setFinalizeInvoice,
     setSelectedContainers, setSelectedCustomer, cleanBillingData, setSelectedUnit, setGeneratePin, cleanGeneratePin, setUpdateAgentAndConsigneeInBl,
     setFirstBookingSearch,
     cleanBooking,
     setOperationStuck,
     setBooking,
     setDataElementsContainerizedLoad,
     cleanVesselVisit,
     setDocumentationContainer} from "./containerized-load.actions";

export const initialState: IContainerizedLoadStore = {
  result: [],
  resultBooking: [],
  vesselVisit: null,
  firstSearch: false,
  firstBookingSearch: false,
  selectedInvoice: null,
  unitNbrData: [],
  truckVisitNbrData: null,
  customerContract: null,
  invoiceProforma: null,
  selectedContainers: [],
  selectedCustomer: null,
  loadedCustomer: '',
  selectedUnit: null,
  truckResult: [],
  lastSearch: null,
  operationStuck: false,
  elementsContainerizedLoad: null,
  setDocumentacionContainer: null
};

export const ContainerizedLoadReducer = createReducer(
    initialState,
    on(setContainerizedLoad, (state: IContainerizedLoadStore, action) => {
        const newState: IContainerizedLoadStore = Object.assign({}, state);
        if (action.containerizedLoad.length){
          newState.lastSearch = action.containerizedLoad[0].blNumber;
        }
       
        newState.result = action.containerizedLoad || [];

        return newState;
    }),
    on(cleanContainerizedLoad, () => ({
      result: [],
      resultBooking: [],
      vesselVisit: null,
      firstSearch: false,
      firstBookingSearch: false,
      selectedInvoice: null,
      unitNbrData: null,
      truckVisitNbrData: null,
      customerContract: null,
      invoiceProforma: null,
      selectedContainers: [],
      selectedCustomer: null,
      selectedUnit: null,
      truckResult: [],
      lastSearch: null,
      loadedCustomer: '',
      operationStuck: false,
      elementsContainerizedLoad: null,
      setDocumentacionContainer: null
    })),
    on(cleanBooking, (state, action) => {
      const newState: IContainerizedLoadStore = Object.assign({}, state);

      newState.resultBooking = [];

      return newState;
    }),
    on(setVesselVisit, (state, action) => {
        const newState: IContainerizedLoadStore = Object.assign({}, state);

        newState.vesselVisit = action.vesselVisit;

        return newState;
    }),
    on(setFirstSearch, (state, action) => {
      const newState: IContainerizedLoadStore = Object.assign({}, state);

      newState.firstSearch = action.search;

      return newState;
    }),
    on(setFirstBookingSearch, (state, action) => {
      const newState: IContainerizedLoadStore = Object.assign({}, state);

      newState.firstBookingSearch = action.search;

      return newState;
    }),
    on(setInvoice, (state, action) => {
      const newState: IContainerizedLoadStore = Object.assign({}, state);

      newState.selectedInvoice = action.invoice;

    return newState;
  }),
  on(setDataUnitNbr, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);

    newState.unitNbrData = action.invoices;

    return newState;
  }),
  on(cleanDataUnitNbr, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);

    newState.unitNbrData = [];

    return newState;
  }),
  on(getDataAppointmentDetail, (state, action) => {

    const newState: IContainerizedLoadStore = { ...state, truckVisitNbrData: action.truckVisitNbr };
    return newState;
  }),
  on(setDataAppointmentDetail, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);
    newState.truckVisitNbrData = action.appointment;

    return newState;
  }),
  on(setCustomerContract, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);

    newState.customerContract = action.response.result;

    return newState;
  }),
  on(setInvoiceCreate, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);

    newState.invoiceProforma = action.response;

    return newState;
  }),
  on(setFinalizeInvoice, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);
    newState.invoiceProforma = action.response;

    return newState;
  }),
  on(setSelectedContainers, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);

    newState.selectedContainers = action.containers;

    return newState;
  }),
  on(setSelectedCustomer, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);

    newState.selectedCustomer = action.customer;

    return newState;
  }),
  on(cleanBillingData, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);

    newState.invoiceProforma = null;
    newState.selectedContainers = [];
    newState.selectedCustomer = null;

    return newState;
  }),
  on(setUpdateAgentAndConsigneeInBl, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);
    newState.loadedCustomer = action.response;
    return newState;
  }),
  on(setSelectedUnit, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);

    newState.selectedUnit = action.unit;

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
  on(setOperationStuck, (state, action) => {
    const newState = Object.assign({}, state);

    newState.operationStuck = action.operationStuck;

    return newState;
  }),
  on(setBooking, (state, action) => {
    const newState = Object.assign({}, state);

    newState.resultBooking = action.booking;

    return newState;
  }),
  on(setDataElementsContainerizedLoad, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);
    newState.elementsContainerizedLoad = action.elementsContainerizedLoad;

    return newState;
  }),

  on(cleanVesselVisit, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);
    newState.vesselVisit = null;

    return newState;
  }),

  on(setDocumentationContainer, (state, action) => {
    const newState: IContainerizedLoadStore = Object.assign({}, state);
    newState.setDocumentacionContainer = { showDocumentation: action.documentationContainer.show, nbr: action.documentationContainer.nbr };

    return newState;
  }),
);
