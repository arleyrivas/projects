import { createAction, props } from "@ngrx/store";
import { INbrAgentAndConsigeeDTO } from "src/app/core/dto/nbr-agent-and-consigee.dto";
import { IGeneratePinDTO, INotificationGeneratePinDTO } from "src/app/core/dto/generate-pin.dto";
import { IInvoiceCreate } from "src/app/core/dto/invoice-create.dto";
import { IContainerizedLoad } from "src/app/core/interfaces/containerized-load.interface";
import { ICustomerContract } from "src/app/core/interfaces/customer-contract.interface";
import { IGeneratePinDeactivate, INotificationGeneratePinDeactivate } from "src/app/core/interfaces/generate-pin-deactivate.interface";
import { IInvoiceManage } from "src/app/core/interfaces/invoice-manage.interface";
import { IInvoiceProforma } from "src/app/core/interfaces/invoice-proforma.interface";
import { ILockDTO } from "src/app/core/interfaces/lock-dto.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { ITruckPin } from "src/app/core/interfaces/truck-pin.interface";
import { IVesselVisit } from "src/app/core/interfaces/vessel-visit.interface";
import { IBookingInterface } from "src/app/core/interfaces/booking.interface";

export const getContainerizedLoad = createAction(
    "[Containerized-load] Get Containerized Load",
    props<{ nbr: string }>()
);

export const setContainerizedLoad = createAction(
    "[Containerized-load] Set Containerized Load",
    props<{ containerizedLoad: IContainerizedLoad[] }>()
);

export const cleanContainerizedLoad = createAction(
    "[Containerized-load] Clean Containerized Load"
);

export const getBooking = createAction(
  "[Containerized-load] Get Booking",
  props<{ nbr: string }>()
);

export const setBooking = createAction(
  "[Containerized-load] Set Booking",
  props<{ booking: IBookingInterface[] }>()
);

export const cleanBooking = createAction(
  "[Containerized-load] Clean Booking"
);

export const getVesselVisit = createAction(
    "[Containerized-load] Get Vessel Visit",
    props<{ vesselVisitID: string }>()
);

export const setVesselVisit = createAction(
    "[Containerized-load] Set Vessel Visit",
    props<{ vesselVisit: IVesselVisit }>()
);

export const cleanVesselVisit = createAction(
  "[Containerized-load] Clean Vessel Visit"
);

export const getInvoice = createAction(
  "[Containerized-load] Get Invoice",
  props<{ invoice: string }>()
);

export const setInvoice = createAction(
  "[Containerized-load] Set Invoice",
  props<{ invoice: IInvoiceManage }>()
);

export const setLockUnit = createAction(
    "[Containerized-load] Set Lock Unit",
    props<{ body: string, hasNotification: boolean, privilege: string, notificationData: string  }>()
);

export const unitLockedSuccess = createAction(
    "[Containerized-load] Unit Locked Success"
);

export const setUnlockUnit = createAction(
    "[Containerized-load] Set Unlock Unit",
    props<{ body: string, hasNotification: boolean, privilege: string, notificationData: string  }>()
);

export const unitUnlockedSuccess = createAction(
    "[Containerized-load] Unit Unlocked Success"
);

export const setFirstSearch = createAction(
  "[Containerized-load] Set FirstSearch",
  props<{ search: boolean }>()
);

export const setFirstBookingSearch = createAction(
  "[Containerized-load] Set First Booking Search",
  props<{ search: boolean }>()
);

export const getDataUnitNbr = createAction(
    "[Containerized-load] Get Invoices",
    props<{ unitNbr: any }>()
);

export const setDataUnitNbr = createAction(
  "[Containerized-load] Set Invoices",
  props<{ invoices: any }>()
);

export const cleanDataUnitNbr = createAction(
  "[Containerized-load] clean Invoices"
);

export const getDataAppointmentDetail = createAction(
"[Containerized-load] Get Appointment",
props<{ truckVisitNbr: any }>()
);

export const setDataAppointmentDetail = createAction(
"[Containerized-load] Set Appointment",
props<{ appointment: any }>()
);

export const getCustomerContract = createAction(
  "[Containerized-load] get Customer Contract",
  props<{ nit: string }>()
  );

export const setCustomerContract = createAction(
  "[Containerized-load] Set Customer Contract",
  props<{ response: IRestResult<ICustomerContract> }>()
);

export const getUpdateAgentAndConsigneeInBl = createAction(
  "[Containerized-load] Get Update Agent And Consignee In Bl",
  props<{ body: INbrAgentAndConsigeeDTO }>()
);

export const setUpdateAgentAndConsigneeInBl = createAction(
  "[Containerized-load] Set Update Agent And Consignee In Bl",
  props<{ response: string }>()
);

export const getInvoiceCreate = createAction(
  "[Containerized-load] Get Invoice Create",
  props<{ body: IInvoiceCreate }>()
);

export const setInvoiceCreate = createAction(
  "[Containerized-load] Set Invoice Create",
  props<{ response: IInvoiceProforma }>()
);

export const getCancelProformaContainerizedLoad = createAction(
  "[Containerized-load] Get Cancel Proforma Containerized Load",
  props<{ body: IInvoiceProforma }>()
);

export const setCancelProformaContainerizedLoad = createAction(
  "[Containerized-load] Set Cancel Proforma Containerized Load",
  props<{ response: IRestResult<string> }>()
);

export const getFinalizeInvoice = createAction(
  "[Containerized-load] Get Finalize Invoice",
  props<{ body: IInvoiceProforma }>()
);

export const setFinalizeInvoice = createAction(
  "[Containerized-load] Set Finalize Invoice",
  props<{ response: IInvoiceProforma }>()
);

export const setSelectedUnit = createAction(
  "[Containerized-load] Set Selected Unit",
  props<{ unit: string }>()
);

export const setSelectedContainers = createAction(
  "[Containerized-load] Set Selected Containers",
  props<{ containers: IContainerizedLoad[] | IBookingInterface[] }>()
);

export const setSelectedCustomer = createAction(
  "[Containerized-load] Set Selected Customer",
  props<{ customer: string }>()
);

export const cleanBillingData = createAction(
  "[Containerized-load] Clean Billing Data"
);

export const getConsigneeLoaded = createAction(
  "[Containerized-load] Get Consignee Loaded",
  props<{ body: INbrAgentAndConsigeeDTO }>()
);

export const setConsigneeLoaded = createAction(
  "[Containerized-load] Set Consignee Loaded",
  props<{ response: string }>()
);
export const getGeneratePin = createAction(
  "[Containerized-load] Get Generate Pin",
  props<{ body: IGeneratePinDTO[], hasNotification: boolean, privilege: string, notificationData: INotificationGeneratePinDTO }>()
);

export const setGeneratePin = createAction(
  "[Containerized-load] Set Generate Pin",
  props<{ pins: ITruckPin[] }>()
);

export const cleanGeneratePin = createAction(
  "[Containerized-load] Clean Generate Pin"
);

export const getGeneratePinDeactivatePartial = createAction(
  "[Containerized-load] Get Generate Pin Deactivate Partial",
  props<{ body: IGeneratePinDeactivate, hasNotification: boolean, privilege: string, notificationData: INotificationGeneratePinDeactivate }>()
);

export const setGeneratePinDeactivatePartial = createAction(
  "[Containerized-load] Set Generate Pin Deactivate Partial"
);

export const getGeneratePinDeactivateTotal = createAction(
  "[Containerized-load] Get Generate Pin Deactivate Total",
  props<{ body: IGeneratePinDeactivate, hasNotification: boolean, privilege: string, notificationData: INotificationGeneratePinDeactivate }>()
);

export const setGeneratePinDeactivateTotal = createAction(
  "[Containerized-load] Set Generate Pin Deactivate Total"
);

export const setOperationStuck = createAction(
  "[Containerized-load] Set Operation Stuck",
  props<{ operationStuck: boolean }>()
);

export const setDataElementsContainerizedLoad = createAction(
  "[Containerized-load] set Data Elements Containerized Load",
  props<{ elementsContainerizedLoad: string }>()
);

export const setDocumentationContainer = createAction(
  "[Containerized-load] Set Documentation Container",
  props<{ documentationContainer: {show: boolean, nbr: string} }>()
);
