import { createAction, props } from "@ngrx/store";
import { INotificationPrivilegeResponse } from "src/app/core/dto/notification-privilege-response.dto";
import { INotificationPrivilege } from "src/app/core/dto/notification-privilege.dto";
import { ISecondPasswordGenerateResponse } from "src/app/core/dto/second-password-generate-response.dto";
import { ISecondPasswordGenerate } from "src/app/core/dto/second-password-generate.dto";
import { ISecondPasswordValidationResponse } from "src/app/core/dto/second-password-validation-response.dto";
import { ISecondPasswordValidation } from "src/app/core/dto/second-password-validation.dto";
import { ICompanyTypePrivilegesDTO } from "src/app/core/dto/company-type-privileges.dto";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { ICompanyType } from "src/app/core/interfaces/company-type.interface";
import { ICompany } from "src/app/core/interfaces/company.interface";
import { IImpersonalizated } from "src/app/core/interfaces/impersonalizated-dto.interface";
import { ICustomer } from "src/app/core/dto/customer.dto";
import { IAgentIdOrNameSearch } from "src/app/core/interfaces/agent-id-or-name-search.interface";
import { IAllConsigneesDTO } from "src/app/core/dto/all-consignees.dto";
import { ITruckPin } from "src/app/core/interfaces/truck-pin.interface";
import { IGeneratePinDTO } from "src/app/core/dto/generate-pin.dto";
import { ITruck } from "src/app/core/interfaces/truck.interface";
import { IDocumentationTruck } from "src/app/core/interfaces/documentation-truck.interface";
import { ICapacityTruck } from "src/app/core/interfaces/capacity-truck.interface";
import { IPin } from "src/app/core/interfaces/pin.interface";
import { IDetachedLoad } from "src/app/core/interfaces/detached-load.interface";
import { IGrantGroupDetachedLoad } from "src/app/core/interfaces/group-detached-load.interface";
import { IItemCheckeados, IItemCheckeadosContenerized, ISetContenedorType } from "src/app/core/interfaces/item-checkeados.interface";
import { IDriver, IDriverValidation } from "src/app/core/interfaces/driver.interface";
import { IDisponibilidadCitas } from "src/app/core/interfaces/disponibilidad-citas.interface";
import { IHorariosDisponibles, IHorariosDisponiblesCC } from "src/app/core/interfaces/storage-cita.interface";
import { IDataAppointmentCS } from "src/app/core/interfaces/data-appointment-cs.interface";
import { IBookingSearch, IContainerizedLoad, IHazards, IPinSearch } from "src/app/core/interfaces/containerized-load.interface";
import { IConfigurationPortal } from "src/app/core/interfaces/configuration-portal.interface";
import { IPhysicalContainer } from "src/app/core/interfaces/physical-container.interface";
import { IAgentRepresentation } from "src/app/core/interfaces/agent-representation.interface";
import { IEquipmentType } from "src/app/core/interfaces/equipment-type.interface";
import { IDataAppointmentCC } from "src/app/core/interfaces/data-appointment-cc.interface";
import { INotificationsPortal } from "src/app/core/interfaces/notifications-portal.interface";

export const getPdfInvoice = createAction(
  "[Billing] Get PDF Invoice",
  props<{ invoice: string }>()
);

export const setPdfInvoice = createAction(
  "[Billing] Set PDF Invoice",
  props<{ file: string }>()
);

export const cleanPdfInvoice = createAction(
  "[Billing] clean PDF Invoice"
);

export const getPdfFile = createAction(
  "[Queries] Get PDF File",
  props<{ url: string }>()
);

export const setPdfFile = createAction(
  "[Queries] Set PDF File",
  props<{ file: string }>()
);

export const cleanPdfFile = createAction(
  "[Global] cleanPdfFile"
);

export const getCompanyTypePrivileges = createAction(
  "[Global] Get Company Type Privileges",
  props<{ body: ICompanyTypePrivilegesDTO }>()
);

export const setCompanyTypePrivileges = createAction(
  "[Global] Set Company Type Privileges",
  props<{ file: string }>()
);

export const setHasDoubleFactor = createAction(
  "[Doble-Authentication] Set Has Double Factor",
  props<{ hasDoubleFactor: boolean }>()
);

export const getSecondPassword = createAction(
  "[Doble-Authentication] Get Second Password",
  props<{ body: ISecondPasswordGenerate }>()
);

export const setSecondPassword = createAction(
  "[Doble-Authentication] Set Second Password",
  props<{ response: ISecondPasswordGenerateResponse | null }>()
);

export const getSecondPasswordValidation = createAction(
  "[Doble-Authentication] Get Second Password Validation",
  props<{ body: ISecondPasswordValidation }>()
);

export const setSecondPasswordValidation = createAction(
  "[Doble-Authentication] Set Second Password Validation",
  props<{ response: ISecondPasswordValidationResponse | null }>()
);

export const getPrivilegeNotification = createAction(
  "[Notification] Get Privilege Notification",
  props<{ body: INotificationPrivilege }>()
);

export const setPrivilegeNotification = createAction(
  "[Notification] Set Privilege Notification",
  props<{ response: INotificationPrivilegeResponse }>()
);

export const getAgent = createAction(
  "[GLOBAL] Get Agent",
  props<{ idOrName: string }>()
);

export const setAgent = createAction(
  "[GLOBAL] Set Agent",
  props<{ response: IAgentIdOrNameSearch[] }>()
);

export const cleanAgent = createAction(
  "[GLOBAL] Clean Agent"
);

export const setSelectedAgent = createAction(
  "[GLOBAL] Set Selected Agent",
  props<{ agent: string }>()
);

export const getValidateHourRestriction = createAction(
  "[Hour-Restriction] Get Validate Hour Restriction",
  props<{ privilege: string }>()
);

export const setValidateHourRestriction = createAction(
  "[Hour-Restriction] Set Validate Hour Restriction",
  props<{ response: IRestResult<string> }>()
);

export const getSwitchUser = createAction(
  "[Sidebar] Get Switch User",
  props<{ companyId: string, companyName: string, companyType: string, companyTypeName: string | null }>()
);

export const setSwitchUser = createAction(
  "[Sidebar] Set Switch User"
);

export const getBackToInitialUser = createAction(
  "[Sidebar] Get Back To Initial User",
  props<{ isMemp: boolean }>()
);

export const setBackToInitialUser = createAction(
  "[Sidebar] Set Back To Initial User"
);

export const getCompanyTypeList = createAction(
  "[Sidebar] Get Company Type List"
);

export const setCompanyTypeList = createAction(
  "[Sidebar] Set Company Type List",
  props<{ result: ICompanyType[] }>()
);

export const getCompaniesByTypeAndFilter = createAction(
  "[Sidebar] Get Companies By Type And Filter",
  props<{ companyType: string, filter: string, validate: boolean }>()
);

export const setCompaniesByTypeAndFilter = createAction(
  "[Sidebar] Set Companies By Type And Filter",
  props<{ result: ICompany[] }>()
);

export const setImpersonated = createAction(
  "[Sidebar] set Impersonated",
  props<{ impersonated: boolean }>()
);

export const getImpersonalizated = createAction(
  "[Sidebar] Get Impersonalizated"
);

export const setImpersonalizated = createAction(
  "[Sidebar] Set Impersonalizated",
  props<{ impersonalizated: IImpersonalizated }>()
);

export const getCustomer = createAction(
  "[GLOBAL] Get Customer",
  props<{ idOrName: string, agent: string | null }>()
);

export const setCustomer = createAction(
  "[GLOBAL] Set Customer",
  props<{ customer: ICustomer[] }>()
);

export const cleanCustomer = createAction(
  "[GLOBAL] Clean Customer"
);

export const setSelectedCustomer = createAction(
  "[GLOBAL] Set Selected Customer",
  props<{ selectedCustomer: string }>()
);

export const cleanSelectedCustomer = createAction(
  "[GLOBAL] Clean Selected Customer"
);

export const cleanSelectedAgent = createAction(
  "[GLOBAL] Clean Selected Agent"
);

export const getAllConsignees = createAction(
  "[GLOBAL] Get All Consignees"
);

export const setAllConsignees = createAction(
  "[GLOBAL] Set All Consignees",
  props<{ allConsignees: IAllConsigneesDTO }>()
);

export const getTruckers = createAction(
  "[GLOBAL] Get Truckers",
  props<{ criteria: string, consigneeId: string }>()
);

export const setTruckers = createAction(
  "[GLOBAL] Set Truckers",
  props<{ response: IAgentIdOrNameSearch[] }>()
);

export const cleanTruckers = createAction(
  "[GLOBAL] Clean Truckers"
);

export const getPDFPin = createAction(
  "[GLOBAL] Get PDF Pin",
  props<{ pinNbr: string }>()
);

export const setPDFPin = createAction(
  "[GLOBAL] Set PDF Pin"
);

export const setSelectedTrucker = createAction(
  "[GLOBAL] Set Selected Trucker",
  props<{ selectedTrucker: string }>()
);

export const cleanSelectedTrucker = createAction(
  "[GLOBAL] Clean Selected Trucker"
);

export const getIdleTimeout = createAction(
  "[GLOBAL] Get Idle Timeout"
);

export const setIdleTimeout = createAction(
  "[GLOBAL] Set Idle Timeout",
  props<{ idleTimeout: string }>()
);

export const getPlate = createAction(
  "[GLOBAL] Get Plate",
  props<{ placa: string}>()
);

export const setTruck = createAction(
  "[GLOBAL] Set Truck",
  props<{ response: ITruck }>()
);

export const getVehicleDocumentation = createAction(
  "[GLOBAL] Get Vehicle Documentation",
  props<{ placa: string}>()
);

export const setVehicleDocumentation = createAction(
  "[GLOBAL] Set Vehicle Documentation",
  props<{ documentationTruck: IDocumentationTruck[] }>()
);

export const getCapacityTruck = createAction(
  "[GLOBAL] Get Capacity Truck",
  props<{ placa: string}>()
);

export const setCapacityTruck = createAction(
  "[GLOBAL] Set Capacity Truck",
  props<{ response: ICapacityTruck[] }>()
);

export const getPin = createAction(
  "[GLOBAL] Get Pin",
  props<{ pin: string}>()
);

export const setPin = createAction(
  "[GLOBAL] Set Pin",
  props<{ response: IPin }>()
);

export const getValidationPin = createAction(
  "[GLOBAL] Get Validation Pin",
  props<{ agente: string | null, destination: string | null , hbl: string, isGroup: string , pinParaEliminar: string}>()
);

export const setValidationPin = createAction(
  "[GLOBAL] Set Validation Pin",
  props<{ validation: IDetachedLoad[] }>()
);

export const getValidationPinContainerized = createAction(
  "[GLOBAL] Get Validation Pin Containerized",
  props<{ blNbr: string | null, edoNbr: string | null , eroNbr: string, pinContainerized: [] , pinNbr: string}>()
);


export const setValidationPinContainerized = createAction(
  "[GLOBAL] Set Validation Pin Containerized",
  props<{ validation: IContainerizedLoad[] }>()
);

export const setValidationPinSearchContainerized = createAction(
  "[GLOBAL] Set Validation Pin Search Containerized",
  props<{ validation: IPinSearch[] }>()
);

export const setValidationBookingSearchContainerized = createAction(
  "[GLOBAL] Set Validation Booking Search Containerized",
  props<{ validation: IBookingSearch[] }>()
);

export const cleanValidationBookingSearchContainerized = createAction(
  "[GLOBAL] Clean Validation Booking Search Containerized"
);

export const setGroupValidationPin = createAction(
  "[GLOBAL] Set Group Validation Pin",
  props<{ data: IGrantGroupDetachedLoad }>()
);

export const cleanValidationPin = createAction(
  "[GLOBAL] Clean Validation Pin"
);

export const cleanValidationPinIndividual = createAction(
  "[GLOBAL] Clean Validation Pin Individual",
  props<{ pin: string }>()
);

export const cleanValidationPinContainerized = createAction(
  "[GLOBAL] Clean Validation Pin Containerized"
);

export const cleanValidationPinContainerizedIndividual = createAction(
  "[GLOBAL] Clean Validation Pin Containerized Individual",
  props<{ pin: string }>()
);

export const cleanPlate = createAction(
  "[GLOBAL] Clean Plate"
);

export const setItemCheckeados = createAction(
  "[GLOBAL] Set Item Checkeados",
  props<{ data: IItemCheckeados }>()
);

export const cleanItemCheckeados = createAction(
  "[GLOBAL] Clean Item Checkeados"
);

export const getDrivers = createAction(
  "[GLOBAL] Get Drivers",
  props<{ criteria: string }>()
);

export const setSelectedDriver = createAction(
  "[GLOBAL] Set Selected Driver",
  props<{ selectedDriver: string }>()
);

export const setDrivers = createAction(
  "[GLOBAL] set Drivers",
  props<{ response: IDriver[] }>()
);

export const getValidacionDriver = createAction(
  "[GLOBAL] Get Validacion Driver",
  props<{ license: string }>()
);

export const getValidacionServiceDriver = createAction(
  "[GLOBAL] Get Validation Service Driver",
  props<{ license: string }>()
);

export const setValidationDriver = createAction(
  "[GLOBAL] Set Validacion Driver",
  props<{ response: IDriverValidation[] }>()
);

export const setValidationServiceDriver = createAction(
  "[GLOBAL] Set Validation Service Driver",
  props<{ response: IDriverValidation[] }>()
);

export const getCitasDisponibles = createAction(
  "[GLOBAL] Get Citas Disponibles"
);

export const setCitasDisponibles = createAction(
  "[GLOBAL] Set Citas Disponibles",
  props<{ response: IDisponibilidadCitas[] }>()
);

export const getHorariosDisponibles = createAction(
  "[GLOBAL] Get Horarios Disponibles",
  props<{ data: any }>()
);

export const setHoarriosDisponbiles = createAction(
  "[GLOBAL] Set Horarios Disponibles",
  props<{ response: IHorariosDisponibles[] }>()
);

export const getBreakBulk = createAction(
  "[GLOBAL] Get Break Bulk",
  props<{ data: IDataAppointmentCS }>()
);

export const setBreakBulk = createAction(
  "[GLOBAL] Set Break Bulk",
  props<{ infoApointment: {data:IDataAppointmentCS, type: ""} }>()
);

export const cleanDriver = createAction(
  "[GLOBAL] Clean Driver"
);

export const cleanDisponibilidadCitas = createAction(
  "[GLOBAL] Clean Disponibilidad Citas"
);

export const cleanSharedLoad = createAction(
  "[GLOBAL] Clean Shared Load"
);

export const cleanTruck = createAction(
  "[GLOBAL] Clean Truck"
);

export const setItemCheckeadosContenerized = createAction(
  "[GLOBAL] Set Item Checkeados Contenerized",
  props<{ data: IItemCheckeadosContenerized }>()
);

export const cleanItemCheckeadosContenerized = createAction(
  "[GLOBAL] Clean Item Checkeados Contenerized"
);

export const setTypeContainer = createAction(
  "[GLOBAL] Set Type Container",
  props<{ data: ISetContenedorType }>()
);

export const deleteTypeContainer = createAction(
  "[GLOBAL] Delete Type Container",
  props<{ pinOrBooking: string }>()
);

export const cleanTypeContainer = createAction(
  "[GLOBAL] Clean Type Container"
);

export const getCitasDisponiblesCC = createAction(
  "[GLOBAL] Get Citas Disponibles CC",
  props<{ siteAppointment: string }>()
);

export const setCitasDisponiblesCC = createAction(
  "[GLOBAL] Set Citas Disponibles CC",
  props<{ response: IDisponibilidadCitas[] }>()
);

export const getHorariosDisponiblesCC = createAction(
  "[GLOBAL] Get Horarios Disponibles CC",
  props<{ data: any }>()
);

export const setHorariosDisponiblesCC = createAction(
  "[GLOBAL] Set Horarios Disponibles CC",
  props<{ response: IHorariosDisponiblesCC[] }>()
);

export const getConfigurationPortal = createAction(
  "[GLOBAL] Get Configuration Portal"
);

export const setConfigurationPortal = createAction(
  "[GLOBAL] Set Configuration Portal",
  props<{ response: IConfigurationPortal }>()
);

export const setValidationBookingID = createAction(
  "[GLOBAL] Set Validation Booking ID",
  props<{ validation: IContainerizedLoad[] }>()
);


export const getEmptyEro = createAction(
  "[GLOBAL] Get Empty Ero",
  props<{ booking: string }>()
);

export const setEmptyEro = createAction(
  "[GLOBAL] Set Empty Ero",
  props<{ response: [] }>()
);

export const cleanEmptyEro = createAction(
  "[GLOBAL] Clean Empty Ero"
);

export const getValidateEro = createAction(
  "[GLOBAL] Get Validate Ero",
  props<{ booking: string }>()
);

export const setValidateEro = createAction(
  "[GLOBAL] Set Validate Ero",
  props<{ response: [] }>()
);

export const cleanValidateEro = createAction(
  "[GLOBAL] Clean Validate Ero"
);

export const getHazardsByBooking = createAction(
  "[GLOBAL] Get Hazards By Booking",
  props<{ booking: string }>()
);

export const setHazardsByBooking = createAction(
  "[GLOBAL] Set Hazards By Booking",
  props<{ response: IHazards[] }>()
);

export const cleanValidationBookingID = createAction(
  "[GLOBAL] Clean Validation BookingID"
);

export const cleanHazardsByBooking = createAction(
  "[GLOBAL] Clean HazardsByBooking"
);

export const getValidateContainer = createAction(
  "[GLOBAL] Get Validate Container",
  props<{ container: string }>()
);

export const setValidateContainer = createAction(
  "[GLOBAL] Set Validate Container",
  props<{ response: number }>()
);

export const cleanValidateContainer = createAction(
  "[GLOBAL] Clean Validate Container"
);

export const getPhysicalContainer = createAction(
  "[GLOBAL] Get Physical Container",
  props<{ container: string }>()
);

export const setPhysicalContainer = createAction(
  "[GLOBAL] Set Physical Container",
  props<{ response: IPhysicalContainer }>()
);


export const cleanPhysicalContainer = createAction(
  "[GLOBAL] Clean Physical Container"
);

export const getforBooking = createAction(
  "[GLOBAL] Get For Booking",
  props<{ container: string }>()
);

export const setforBooking = createAction(
  "[GLOBAL] Set For Booking",
  props<{ response: any }>()
);

export const cleanforBooking = createAction(
  "[GLOBAL] Clean For Booking"
);

export const getValidateDigitCheck = createAction(
  "[GLOBAL] Get Validate DigitCheck",
  props<{ container: string }>()
);

export const setValidateDigitCheck = createAction(
  "[GLOBAL] Set Validate DigitCheck",
  props<{ response: boolean }>()
);

export const cleanValidateDigitCheck = createAction(
  "[GLOBAL] Clean Validate DigitCheck"
);

export const getAgentRepresentation = createAction(
  "[GLOBAL] Get Agent Representation",
  props<{ idOrName: string, agent: string}>()
);

export const setAgentRepresentation = createAction(
  "[GLOBAL] Set Agent Representation",
  props<{ response: IAgentRepresentation }>()
);

export const setEquipmentTye = createAction(
  "[GLOBAL] Set Equipment Type",
  props<{ response: IEquipmentType }>()
);

export const getAppointmentCC = createAction(
  "[GLOBAL] Get Appointment CC",
  props<{ data: IDataAppointmentCC }>()
);

export const setAppointmentCC = createAction(
  "[GLOBAL] Set Appointment CC",
  props<{ infoApointment: {data:IDataAppointmentCC, type: ""} }>()
);

export const setNotificationsPortal = createAction(
  "[GLOBAL] Set Notifications Portal",
  props<{ response: INotificationsPortal[] }>()
);


