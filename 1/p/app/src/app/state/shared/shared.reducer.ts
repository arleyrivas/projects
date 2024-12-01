import { createReducer, on } from "@ngrx/store";
import { ISharedStore } from "src/app/core/interfaces/shared.interface";
import { cleanPdfFile, setPdfFile, setPdfInvoice, setSecondPassword, setSecondPasswordValidation, setValidateHourRestriction, setHasDoubleFactor, setImpersonated, setCompanyTypeList, setCompaniesByTypeAndFilter, setImpersonalizated, setCustomer, setSelectedCustomer, setAgent, setSelectedAgent, cleanSelectedCustomer, setAllConsignees, cleanSelectedAgent, setTruckers, cleanTruckers, setSelectedTrucker, cleanSelectedTrucker, setIdleTimeout, cleanCustomer, cleanPdfInvoice, setTruck, setVehicleDocumentation, setCapacityTruck, setPin, setValidationPin, cleanValidationPin, cleanValidationPinIndividual, cleanPlate, setItemCheckeados, cleanItemCheckeados, setDrivers, setSelectedDriver, setValidationDriver, setValidationServiceDriver, setCitasDisponibles, setHoarriosDisponbiles, setBreakBulk, cleanDriver, cleanDisponibilidadCitas, cleanSharedLoad, cleanTruck, setValidationPinContainerized, cleanValidationPinContainerized, cleanValidationPinContainerizedIndividual, setItemCheckeadosContenerized, cleanItemCheckeadosContenerized, setTypeContainer, setCitasDisponiblesCC, setHorariosDisponiblesCC, setValidationPinSearchContainerized, setValidationBookingSearchContainerized, setConfigurationPortal, setValidationBookingID, setEmptyEro, setValidateEro, setHazardsByBooking, cleanValidationBookingID, cleanHazardsByBooking, setValidateContainer, setPhysicalContainer, setforBooking, setValidateDigitCheck, setAgentRepresentation, setEquipmentTye, deleteTypeContainer, cleanTypeContainer, cleanValidateDigitCheck, cleanforBooking, cleanPhysicalContainer, cleanValidateContainer, cleanEmptyEro, cleanValidateEro, cleanAgent, cleanValidationBookingSearchContainerized, setAppointmentCC, setNotificationsPortal} from "./shared.actions";
import { state } from "@angular/animations";

export const initialState: ISharedStore = {
  file: "",
  spinnerAutoClose: true,
  hourRestriction: null,
  restrictionMessage: null,
  secondPassword: null,
  secondPasswordValidation: null,
  hasDoubleFactor: false,
  impersonated: false,
  companyTypes: [],
  companies: [],
  Impersonalizated: null,
  customer: [],
  selectedCustomer: null,
  agent: [],
  truckers: [],
  selectedAgent: null,
  allConsignees: [],
  selectedTrucker: null,
  idleTimeout: null,
  truck: null,
  documentationTruck: null,
  capacityTruck: null,
  pin: null,
  validationPin: [],
  groupValidationPin: [],
  itemCheckeados : [],
  driver: [],
  selectedDriver: null,
  validationDriver: [],
  validationServiceDriver: [],
  disponibilidadCitas: [],
  horariosDisponibles: [],
  infoApointment: null,
  validationPinContainerized: [],
  groupValidationPinContainerized: [],
  itemCheckeadosContainerized: [],
  typeContainer: [],
  horariosDisponiblesCC: [],
  pinSearchContainerized: [],
  bookingSearchContainerized: [],
  configurationPortal: null,
  bookingID: [],
  emptyEro: [],
  validateEro: [],
  hazardsByBooking: [],
  validateContainer: null,
  physicalContainer: null,
  forBooking: null,
  digitCheck: null,
  agentRepresentation: null,
  equipmentType: null,
  infoAppointmentCC: null,
  notificationsPortal: [],

};

export const sharedReducer = createReducer(
  initialState,
  on(setPdfInvoice, setPdfFile, (state, action) => {
    const newState = Object.assign({}, state);

    newState.file = action.file;

    return newState;
  }),
  on(cleanPdfFile, (state, action) => {
    const newState = Object.assign({}, state);

    newState.file = "";

    return newState;
  }),
  on(setValidateHourRestriction, (state, action) => {
    const newState = Object.assign({}, state);

    newState.hourRestriction = action.response.success;
    newState.restrictionMessage = action.response.result;

    return newState;
  }),
  on(setHasDoubleFactor, (state, action) => {
    const newState = Object.assign({}, state);

    newState.hasDoubleFactor = action.hasDoubleFactor;

    return newState;
  }),
  on(setSecondPassword, (state, action) => {
    const newState = Object.assign({}, state);
    newState.secondPassword = action.response;
    newState.secondPasswordValidation = null;
    newState.hourRestriction = null;
    newState.restrictionMessage = null;

    return newState;
  }),
  on(setSecondPasswordValidation, (state, action) => {
    const newState = Object.assign({}, state);

    newState.secondPasswordValidation = action.response;
    newState.secondPassword = null;

    return newState;
  }),
  on(setImpersonated, (state, action) => {
    const newState = Object.assign({}, state);

    newState.impersonated = action.impersonated;

    return newState;
  }),
  on(setCompanyTypeList, (state, action) => {
    const newState = Object.assign({}, state);

    newState.companyTypes = action.result;

    return newState;
  }),
  on(setCompaniesByTypeAndFilter, (state, action) => {
    const newState = Object.assign({}, state);

    newState.companies = action.result;

    return newState;
  }),
  on(setImpersonalizated, (state, action) => {
    const newState = Object.assign({}, state);

    newState.Impersonalizated = action.impersonalizated;

    return newState;
  }),
  on(setCustomer, (state, action) => {
    const newState = Object.assign({}, state);

    newState.customer = action.customer;

    return newState;
  }),
  on(setSelectedCustomer, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedCustomer = action.selectedCustomer;

    return newState;
  }),
  on(setAgent, (state, action) => {
    const newState = Object.assign({}, state);

    newState.agent = action.response;

    return newState;
  }),
  on(setSelectedAgent, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedAgent = action.agent;

    return newState;
  }),
  on(cleanSelectedCustomer, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedCustomer = null;

    return newState;
  }),
  on(cleanSelectedAgent, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedAgent = null;

    return newState;
  }),
  on(setAllConsignees, (state, action) => {
    const newState = Object.assign({}, state);

    newState.allConsignees = action.allConsignees.agentRepresentations.agentRepresentation;

    return newState;
  }),

  on(setTruckers, (state, action) => {
    const newState = Object.assign({}, state);

    newState.truckers = action.response;

    return newState;
  }),
  on(cleanTruckers, (state, action) => {
    const newState = Object.assign({}, state);

    newState.truckers = [];

    return newState;
  }),
  on(setSelectedTrucker, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedTrucker = action.selectedTrucker;

    return newState;
  }),
  on(cleanSelectedTrucker, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedTrucker = null;
    return newState;
  }),
  on(setIdleTimeout, (state, action) => {
    const newState = Object.assign({}, state);

    newState.idleTimeout = action.idleTimeout;

    return newState;
  }),
  on(cleanCustomer, (state, action) => {
    const newState = Object.assign({}, state);

    newState.customer = [];

    return newState;
  }),
  on(cleanPdfInvoice, (state, action) => {
    const newState = Object.assign({}, state);

    newState.file = "";

    return newState;
  }),
  on(setTruck, (state, action) => {
    const newState = Object.assign({}, state);
    newState.truck = action.response
    if (!action.response){
      newState.documentationTruck = [];
      newState.capacityTruck = [];
    }

    return newState;
  }),
  on(setVehicleDocumentation, (state, action) => {
    const newState = Object.assign({}, state);
    newState.documentationTruck = action.documentationTruck
    return newState;
  }),
  on(setCapacityTruck, (state, action) => {
    const newState = Object.assign({}, state);
    newState.capacityTruck = action.response
    return newState;
  }),
  on(setPin, (state, action) => {
    const newState = Object.assign({}, state);
    newState.pin = action.response
    return newState;
  }),
  on(setValidationPin, (state, action) => {
    const newState = Object.assign({}, state);
    newState.validationPin = action.validation
    let validation = action.validation
    
    const data = {data: action.validation};
    const updatedGroupValidationPin = state.groupValidationPin ? [...state.groupValidationPin] : [];
    // Verificar si el dato ya existe con el mismo pin para eliminar
    const exists = updatedGroupValidationPin.some(item =>
      item.data[0].data.some(pin => pin.pinParaEliminar === action.validation[0].pinParaEliminar)
    );
    
    if (exists) {
      return newState;
    }
    updatedGroupValidationPin.push({ data: [data] });
  
    newState.groupValidationPin = updatedGroupValidationPin;
    return newState;
    
    
  }),
  on(cleanValidationPin, (state, action) => {
    const newState = Object.assign({}, state);

    newState.validationPin = [];
    newState.groupValidationPin = [];

    return newState;
  }),
  on(cleanValidationPinIndividual, (state, action) =>{

    const newState = Object.assign({}, state);
    const updatedGroupValidationPin = newState.groupValidationPin?.map(group => {
      const filteredData = group.data.map(dataGroup => ({
        ...dataGroup,
        data: dataGroup.data.filter(item => item.pinParaEliminar !== action.pin)
      })).filter(dataGroup => dataGroup.data.length > 0);

      return {
        ...group,
        data: filteredData
      };
    }).filter(group => group.data.length > 0);
    if(updatedGroupValidationPin){
      newState.groupValidationPin = updatedGroupValidationPin;
    }
    
    return newState;
  }),
  on(cleanPlate, (state, action) => {
    const newState = Object.assign({}, state);

    newState.truck = null;
    newState.documentationTruck = [];
    newState.capacityTruck = [];

    return newState;
  }),
  on(setItemCheckeados, (state, action) => {
    const newState = Object.assign({}, state);
    //solo agregar si no existe
    if (state.itemCheckeados && state.itemCheckeados.length > 0){
      const exists = state.itemCheckeados.some(item => item.data === action.data.data);
      if (!exists){
        newState.itemCheckeados = [...state.itemCheckeados, action.data];
      }
    } else{
      newState.itemCheckeados = [action.data];
    }
    

    return newState;
  }),
  on(cleanItemCheckeados, (state, action) => {
    const newState = Object.assign({}, state);

    newState.itemCheckeados = [];

    return newState;
  }),
  on(setDrivers, (state, action) => {
    const newState = Object.assign({}, state);
    newState.driver = action.response;

    return newState;
  }),
  on(setSelectedDriver, (state, action) => {
    const newState = Object.assign({}, state);

    newState.selectedDriver = action.selectedDriver;

    return newState;
  }),

  on(setValidationDriver, (state, action) => {
    const newState = Object.assign({}, state);

    newState.validationDriver = action.response;

    return newState;
  }),

  on(setValidationServiceDriver, (state, action) => {
    const newState = Object.assign({}, state);

    newState.validationServiceDriver = action.response;

    return newState;
  }),

  on(setCitasDisponibles, (state, action) => {
    const newState = Object.assign({}, state);

    newState.disponibilidadCitas = action.response;

    return newState;
  }),

  on(setHoarriosDisponbiles, (state, action) => {
    const newState = Object.assign({}, state);

    newState.horariosDisponibles = action.response;

    return newState;
  }),

  on(setBreakBulk, (state, action) => {
    const newState = Object.assign({}, state);
    newState.infoApointment = action.infoApointment.data;

    return newState;
  }),
  on(cleanDriver, (state, action) => {
    const newState = Object.assign({}, state);
  
    newState.driver = [];
    newState.validationDriver = [];
    newState.validationServiceDriver = [];
    newState.selectedDriver = null;

    return newState;
  }),
  on(cleanDisponibilidadCitas, (state, action) => {
    const newState = Object.assign({}, state);

    newState.disponibilidadCitas = [];

    return newState;
  }),
  on(cleanTruck, (state, action) => {
    const newState = Object.assign({}, state);

    newState.truck = null;
    newState.documentationTruck = [];
    newState.capacityTruck = [];

    return newState;
  }),
  on(setValidationPinContainerized, (state, action) => {
    const newState = Object.assign({}, state);
    newState.validationPinContainerized = action.validation
    let validation = action.validation
    
    const data = {data: action.validation};
   
    const updatedGroupValidationPin = state.groupValidationPinContainerized ? [...state.groupValidationPinContainerized] : [];
    // Verificar si el dato ya existe con el mismo pin para eliminar
    const exists = updatedGroupValidationPin.some(item =>
      item.data[0].data.some(pin => pin.pinParaEliminar === action.validation[0].pinParaEliminar)
    );
    if (exists) {
      return newState;
    }
    updatedGroupValidationPin.push({ data: [data] });
    newState.groupValidationPinContainerized = updatedGroupValidationPin;
    return newState;
  }),
  on(cleanValidationPinContainerized, (state, action) => {
    const newState = Object.assign({}, state);

    newState.validationPinContainerized = [];
    newState.groupValidationPinContainerized = [];
    newState.pinSearchContainerized = [];

    return newState;
  }),
  on(cleanValidationPinContainerizedIndividual, (state, action) =>{
    const newState = Object.assign({}, state);
    const updatedGroupValidationPin = newState.groupValidationPinContainerized?.map(group => {
      const filteredData = group.data.map(dataGroup => ({
        ...dataGroup,
        data: dataGroup.data.filter(item => item.pinParaEliminar !== action.pin)
      })).filter(dataGroup => dataGroup.data.length > 0);

      return {
        ...group,
        data: filteredData
      };
    }).filter(group => group.data.length > 0);
    if(updatedGroupValidationPin){
      newState.groupValidationPinContainerized = updatedGroupValidationPin;
    }
    

    return newState;
  }),
  on(setItemCheckeadosContenerized, (state, action) => {
    const newState = Object.assign({}, state);
    //solo agregar si no existe
    if (state.itemCheckeadosContainerized && state.itemCheckeadosContainerized.length > 0){
      const exists = state.itemCheckeadosContainerized.some(item => item.data === action.data.data);
      if (!exists){
        newState.itemCheckeadosContainerized = [...state.itemCheckeadosContainerized, action.data];
      }
    } else{
      newState.itemCheckeadosContainerized = [action.data];
    }
    

    return newState;
  }),
  on(cleanItemCheckeadosContenerized, (state, action) => {
    const newState = Object.assign({}, state);

    newState.itemCheckeadosContainerized = [];

    return newState;
  }),
  on(setTypeContainer, (state, action) => {
    const newState = Object.assign({}, state);
    if (state.typeContainer && state.typeContainer.length > 0){
      const exists = state.typeContainer.some(item => item.id === action.data.id);
     
      if (action.data.operation === 'substract' && exists){
        newState.typeContainer = state.typeContainer.filter(item => item.id !== action.data.id);
      }else{
        newState.typeContainer = [...state.typeContainer, action.data];
      }
    } else{
      newState.typeContainer = [action.data];
    }
   
    return newState;
  }),

  on(deleteTypeContainer, (state, action) => {
    const newState = Object.assign({}, state);
    if(state.typeContainer && state.typeContainer.length > 0){
      newState.typeContainer = state.typeContainer.filter(item => item.pinOrBooking !== action.pinOrBooking);
    }
    return newState;
  }),

  on(cleanTypeContainer, (state, action) => {
    const newState = Object.assign({}, state);

    newState.typeContainer = [];

    return newState;
  }),

  on(setCitasDisponiblesCC, (state, action) => {
    const newState = Object.assign({}, state);

    newState.disponibilidadCitas = action.response;

    return newState;
  }),
  on(setHorariosDisponiblesCC, (state, action) => {
    const newState = Object.assign({}, state);

    newState.horariosDisponiblesCC = action.response;

    return newState;
  }),
  on(setValidationPinSearchContainerized, (state, action) => {

    const newState = Object.assign({}, state);
    //solo agregar si no existe
    
    if (state.pinSearchContainerized && state.pinSearchContainerized.length > 0){
      
      const exists = state.pinSearchContainerized.some(item => item.id === action.validation[0].id);
      if (!exists){
        newState.pinSearchContainerized = [...state.pinSearchContainerized, 
          ...(Array.isArray(action.validation) ? action.validation : [action.validation])];
      }
    } else{
      newState.pinSearchContainerized = Array.isArray(action.validation) ? action.validation : [action.validation];
    }

    return newState;

  }),

  on(setValidationBookingSearchContainerized, (state, action) => {
      
      const newState = Object.assign({}, state);
      //solo agregar si no existe
      if (state.bookingSearchContainerized && state.bookingSearchContainerized.length > 0){
        const exists = state.bookingSearchContainerized.some(item => item.pinParaEliminar === action.validation[0].pinParaEliminar);
        if (!exists){
          newState.bookingSearchContainerized = [
            ...state.bookingSearchContainerized,
            ...(Array.isArray(action.validation) ? action.validation : [action.validation])
          ];
        }
      } else{
        newState.bookingSearchContainerized =  Array.isArray(action.validation) 
        ? action.validation 
        : [action.validation];
      }
  
      return newState;
  
    }),

  on(cleanValidationBookingSearchContainerized, (state, action) => {
    const newState = Object.assign({}, state);

    newState.bookingSearchContainerized = [];

    return newState;
  }),

  on(setConfigurationPortal, (state, action) => {
    const newState = Object.assign({}, state);
    newState.configurationPortal = action.response;
    return newState;
  }),

  on(setValidationBookingID, (state, action) => {
    const newState = Object.assign({}, state);
    newState.bookingID = action.validation;
    return newState;
  }),

  on(setEmptyEro, (state, action) => {
    const newState = Object.assign({}, state);
    newState.emptyEro = action.response;
    return newState;
  }),

  on(setValidateEro, (state, action) => {
    const newState = Object.assign({}, state);
    newState.validateEro = action.response;
    return newState;
  }),

  on(setHazardsByBooking, (state, action) => {
    const newState = Object.assign({}, state);
    newState.hazardsByBooking = action.response;
    return newState;
  }),

  on(cleanValidationBookingID, (state, action) => {
    const newState = Object.assign({}, state);

    newState.bookingID = [];

    return newState;
  }),

  on(cleanHazardsByBooking, (state, action) => {
    const newState = Object.assign({}, state);

    newState.hazardsByBooking = [];

    return newState;
  }),

  on(setValidateContainer, (state, action) => {
    const newState = Object.assign({}, state);
    newState.validateContainer = action.response;
    return newState;
  }),

  on(setPhysicalContainer, (state, action) => {
    const newState = Object.assign({}, state);
    newState.physicalContainer = action.response;
    return newState;
  }),

  on(setforBooking, (state, action) => {
    const newState = Object.assign({}, state);
    newState.forBooking = action.response;
    return newState;
  }),

  on(setValidateDigitCheck, (state, action) => {
    const newState = Object.assign({}, state);
    newState.digitCheck = action.response;
    return newState;
  }),

  on(setAgentRepresentation, (state, action) => {
    const newState = Object.assign({}, state);
    newState.agentRepresentation = action.response;
    return newState;
  }),

  on(setEquipmentTye, (state, action) => {
    const newState = Object.assign({}, state);
    newState.equipmentType = action.response;
    return newState;
  }),

  on(cleanValidateDigitCheck, (state, action) => {
    const newState = Object.assign({}, state);
    newState.digitCheck = null;
    return newState;
  }),

  on(cleanforBooking, (state, action) => {
    const newState = Object.assign({}, state);
    newState.forBooking = null;
    return newState;
  }),

  on(cleanPhysicalContainer, (state, action) => {
    const newState = Object.assign({}, state);
    newState.physicalContainer = null;
    return newState;
  }),

  on(cleanValidateContainer, (state, action) => {
    const newState = Object.assign({}, state);
    newState.validateContainer = null;
    return newState;
  }),

  on(cleanEmptyEro, (state, action) => {
    const newState = Object.assign({}, state);
    newState.emptyEro = [];
    return newState;
  }),

  on(cleanValidateEro, (state, action) => {
    const newState = Object.assign({}, state);
    newState.validateEro = [];
    return newState;
  }),

  on(cleanAgent, (state, action) => {
    const newState = Object.assign({}, state);
    newState.agent = [];
    return newState;
  }),

  on(setAppointmentCC, (state, action) => {
    const newState = Object.assign({}, state);
    newState.infoAppointmentCC = action.infoApointment.data;
    return newState;
  }),

  on(setNotificationsPortal, (state, action) => {
    const newState = Object.assign({}, state);
    newState.notificationsPortal = action.response;
    return newState;
  }),

  
  on(cleanSharedLoad, (state) => ({
    ...state,
    file: "",
    spinnerAutoClose: true,
    hourRestriction: null,
    restrictionMessage: null,
    secondPassword: null,
    secondPasswordValidation: null,
    hasDoubleFactor: false,
    impersonated: false,
    companyTypes: [],
    companies: [],
    Impersonalizated: null,
    customer: [],
    selectedCustomer: null,
    agent: [],
    truckers: [],
    selectedAgent: null,
    allConsignees: [],
    selectedTrucker: null,
    idleTimeout: null,
    truck: null,
    documentationTruck: null,
    capacityTruck: null,
    pin: null,
    validationPin: [],
    groupValidationPin: [],
    itemCheckeados : [],
    driver: [],
    selectedDriver: null,
    validationDriver: [],
    validationServiceDriver: [],
    disponibilidadCitas: [],
    horariosDisponibles: [],
    infoApointment: null,
    validationPinContainerized: [],
    groupValidationPinContainerized: [],
    itemCheckeadosContainerized: [],
    typeContainer: [],
    horariosDisponiblesCC: [],
    pinSearchContainerized: [],
    bookingSearchContainerized: [],
    configurationPortal: null,
    bookingID: [],
    emptyEro: [],
    validateEro: [],
    hazardsByBooking: [],
    validateContainer: null,
    physicalContainer: null,
    forBooking: null,
    digitCheck: null,
    agentRepresentation: null,
    equipmentType: null,
    infoAppointmentCC: null,
    notificationsPortal: state.notificationsPortal
  })),
);
