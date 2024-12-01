import { createReducer, on } from "@ngrx/store";
import { IServiceOrderStore } from "src/app/modules/services/interfaces/service-order-store.interface";
import { SetServiceAutorityType, addUnit, changeVoidDestinationUnit, cleanContainers, cleanDesignatedOfficial, cleanSaveServiceOrder, cleanSearchedCriteria, cleanServiceAutorityType, cleanServiceHistory, cleanServiceOrderInfo, cleanUnit, removeDesignatedOfficial, removeUnit, setContainers, setDesignatedOfficial, setPdfData, setSaveServiceOrder, setSearchedCriteria, setServiceHistory, setServiceHistoryInformation, setServiceHistoryPage, setServiceOrderInfo, setServiceType } from "./service-order.actions";
import { IVoidDestinationContainerSelected } from "src/app/modules/services/interfaces/void-destination-container-selected.interface";

export const initialState: IServiceOrderStore = {
  serviceTypes: [],
  serviceTypeInfo: [],
  selectedContainers: [],
  autorityTypes: null,
  serviceOrderResume: [],
  designatedOfficials: [],
  searchedCriteria: null,
  saveResult: [],
  containers: [],
  pdfData: null,
  history: [],
  historyInformation: null,
  historyPage: 0
};

export const serviceOrderReducer = createReducer(
  initialState,
  on(setServiceType, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.serviceTypes = action.serviceTypes;

    return newState;
  }),
  on(setServiceOrderInfo, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.serviceTypeInfo = action.serviceOrderInfo;

    return newState;
  }),
  on(SetServiceAutorityType, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.autorityTypes = action.authorityType;

    return newState;
  }),
  on(addUnit, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.selectedContainers = [...newState.selectedContainers, action.unit];

    return newState;
  }),
  on(removeUnit, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.selectedContainers = newState.selectedContainers.filter(value => value.serviceTypeInfo.unitNbr != action.unit.serviceTypeInfo.unitNbr);

    return newState;
  }),
  on(changeVoidDestinationUnit, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.selectedContainers = newState.selectedContainers.map(
      (value: IVoidDestinationContainerSelected) => {
        const newValue: IVoidDestinationContainerSelected = Object.assign({}, value);

        if(value.serviceTypeInfo.unitNbr === action.serviceTypeInfo.unitNbr) newValue.voidDestination = action.eventValue;

        return newValue;
      }
    );

    return newState;
  }),
  on(setSearchedCriteria, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.searchedCriteria = action.criteria;

    return newState;
  }),
  on(setSaveServiceOrder, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.saveResult = action.result;

    return newState;
  }),
  on(setContainers, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.containers = action.containers;

    return newState;
  }),
  on(setDesignatedOfficial, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.designatedOfficials = newState.designatedOfficials.filter(value => value.id != action.designatedOfficial[0].id);
    newState.designatedOfficials = [...newState.designatedOfficials, action.designatedOfficial[0]];

    return newState;
  }),
  on(cleanUnit, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.selectedContainers = [];

    return newState;
  }),
  on(cleanServiceOrderInfo, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.serviceTypeInfo = [];

    return newState;
  }),
  on(cleanServiceAutorityType, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.autorityTypes = null;

    return newState;
  }),
  on(cleanSaveServiceOrder, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.saveResult = [];

    return newState;
  }),
  on(cleanSearchedCriteria, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.searchedCriteria = null;

    return newState;
  }),
  on(cleanContainers, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.containers = [];

    return newState;
  }),
  on(cleanDesignatedOfficial, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.designatedOfficials = [];

    return newState;
  }),
  on(removeDesignatedOfficial, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.designatedOfficials = newState.designatedOfficials.filter(value => value.id != action.id);

    return newState;
  }),
  on(setPdfData, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.pdfData = action.pdfData;

    return newState;
  }),
  on(setServiceHistory, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    if(action.result.serviceOrders) newState.history = [...newState.history, ...action.result.serviceOrders];

    return newState;
  }),
  on(cleanServiceHistory, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.history = [];

    return newState;
  }),
  on(setServiceHistoryInformation, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.historyInformation = action.serviceInformation;

    return newState;
  }),
  on(setServiceHistoryPage, (state, action) => {
    const newState: IServiceOrderStore = Object.assign({}, state);

    newState.historyPage = action.page;

    return newState;
  }),
);
