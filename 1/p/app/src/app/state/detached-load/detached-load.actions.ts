import { createAction, props } from "@ngrx/store";
import { INbrAgentAndConsigeeDTO } from "src/app/core/dto/nbr-agent-and-consigee.dto";
import { ICreateBreakbulk } from "src/app/core/dto/create-breakbulk.dto";
import { IGeneratePinDTO, INotificationGeneratePinDTOCS } from "src/app/core/dto/generate-pin.dto";
import { IDetachedLoad } from "src/app/core/interfaces/detached-load.interface";
import { IGeneratePinDeactivate } from "src/app/core/interfaces/generate-pin-deactivate.interface";
import { IInvoiceProforma } from "src/app/core/interfaces/invoice-proforma.interface";
import { ILockDTO } from "src/app/core/interfaces/lock-dto.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { ITruckPin } from "src/app/core/interfaces/truck-pin.interface";
import { IVesselVisit } from "src/app/core/interfaces/vessel-visit.interface";
import { ICausalCancelationAppointment } from "src/app/core/interfaces/ICausalCancelationAppointment.interface";

export const getDetachedLoad = createAction(
    "[Detached-load] Get Detached Load",
    props<{ nbr: string }>()
);

export const setDetachedLoad = createAction(
    "[Detached-load] Set Detached Load",
    props<{ detachedLoad: IDetachedLoad[] }>()
);

export const cleanDetachedLoad = createAction(
    "[Detached-load] Clean Detached Load"
);

export const getVesselVisit = createAction(
    "[Detached-load] Get Vessel Visit",
    props<{ vesselVisitID: string }>()
);

export const setVesselVisit = createAction(
    "[Detached-load] Set Vessel Visit",
    props<{ vesselVisit: IVesselVisit }>()
);

export const setLockUnit = createAction(
  "[Detached-load] Set Lock Unit",
  props<{ body: string, hasNotification: boolean, privilege: string, notificationData: string  }>()
);

export const unitLockedSuccess = createAction(
  "[Detached-load] Unit Locked Success"
);

export const setUnlockUnit = createAction(
  "[Detached-load] Set Unlock Unit",
  props<{ body: string, hasNotification: boolean, privilege: string, notificationData: string  }>()
);

export const unitUnlockedSuccess = createAction(
  "[Detached-load] Unit Unlocked Success"
);

export const setfirstSearch = createAction(
  "[Detached-load] Set First Search",
  props<{ search: boolean }>()
);

export const getDataAppointmentDetail = createAction(
  "[Detached-load] Get Appointment",
  props<{ truckVisitNbr: any }>()
);

export const setDataAppointmentDetail = createAction(
  "[Detached-load] Set Appointment",
  props<{ appointment: any }>()
);

export const getUpdateConsigneeCancelDraftBbk = createAction(
  "[Detached-load] get Update Consignee Cancel Draft Bbk",
  props<{ nbr: string }>()
);

export const setUpdateConsigneeCancelDraftBbk = createAction(
  "[Detached-load] set Update Consignee Cancel Draft Bbk",
  props<{ response: IRestResult<string> }>()
);

export const getCreateBreakbulkDraft = createAction(
  "[Detached-load] Get Create Breakbulk Draft",
  props<{ hbl: string }>()
);

export const setCreateBreakbulkDraft = createAction(
  "[Detached-load] Set Create Breakbulk Draft",
  props<{ response: IRestResult<any> }>()
);

export const getCreateBreakbulk = createAction(
  "[Detached-load] Get Create Breakbulk",
  props<{ body: ICreateBreakbulk }>()
);

export const setCreateBreakbulk = createAction(
  "[Detached-load] Set Create Breakbulk",
  props<{ response: IInvoiceProforma }>()
);

export const getCancelProformaDetachedLoad = createAction(
  "[Detached-load] Get Cancel Proforma Detached Load",
  props<{ breakbulkDraft: string, message: string }>()
);

export const setCancelProformaDetachedLoad = createAction(
  "[Detached-load] Set Cancel Proforma Detached Load",
  props<{ response: IRestResult<string> }>()
);

export const getFinalizeBbkInvoice = createAction(
  "[Detached-load] Get Finalize Bbk Invoice",
  props<{ breakbulkDraft: string }>()
);

export const setFinalizeBbkInvoice = createAction(
  "[Detached-load] Set Finalize Bbk Invoice",
  props<{ response: string }>()
);

export const setSelectedUnits = createAction(
  "[Detached-load] setSelectedUnits",
  props<{ units: IDetachedLoad[] }>()
);

export const setSelectedCustomer = createAction(
  "[Detached-load] set Selected Customer",
  props<{ customer: string }>()
);

export const getUpdateAgentAndConsigneeInHBl = createAction(
  "[Detached-load] Get Update Agent And Consignee In HBl",
  props<{ body: INbrAgentAndConsigeeDTO }>()
);

export const setUpdateAgentAndConsigneeInHBl = createAction(
  "[Detached-load] Set Update Agent And Consignee In HBl",
  props<{ response: string }>()
);

export const getConsigneeLoaded = createAction(
  "[Detached-load] Get Consignee Loaded",
  props<{ body: INbrAgentAndConsigeeDTO }>()
);

export const setConsigneeLoaded = createAction(
  "[Detached-load] Set Consignee Loaded",
  props<{ response: string }>()
);

export const cleanBillingData = createAction(
  "[Detached-load] clean Billing Data"
);

export const getGeneratePin = createAction(
  "[DETACHED-LOAD] Get Generate Pin",
  props<{ body: IGeneratePinDTO[], hasNotification: boolean, privilege: string, notificationData: INotificationGeneratePinDTOCS }>()
);

export const setGeneratePin = createAction(
  "[DETACHED-LOAD] Set Generate Pin",
  props<{ pins: ITruckPin[] }>()
);

export const cleanGeneratePin = createAction(
  "[DETACHED-LOAD] Clean Generate Pin"
);

export const getGeneratePinDeactivateTotal = createAction(
  "[Detached-load] Get Generate Pin Deactivate Total",
  props<{ body: IGeneratePinDeactivate, hasNotification: boolean, privilege: string, notificationData: string }>()
);

export const setGeneratePinDeactivateTotal = createAction(
  "[Detached-load] Set Generate Pin Deactivate Total"
);

export const cleanAppointmentData = createAction(
  "[Detached-load] clean Appointment Data"
);

export const setDataElementsDetachedLoad = createAction(
  "[Detached-load] set Data Elements Detached Load",
  props<{ elementsDetachedLoad: string }>()
);


export const getCausalCancellationAppointment = createAction(
  "[Detached-load] get Causal Cancellation Appointment"
);

export const setCausalCancellationAppointment = createAction(
  "[Detached-load] set Causal Cancellation Appointment",
  props<{ causalCancellationAppointment: ICausalCancelationAppointment[] }>()
);

export const getCancelAppointment = createAction(
  "[Detached-load] get Cancel Appointment",
  props<{ body: {driver: {cardId: string, name: string, license: string}, 
  appointmentsNbr: string}, parameters: {tvaNbr: string, causalCanAppointment: string, causalCanDescription: string, cargaContenerizada: boolean, hasNotification: boolean,
    userId: string, createdByLDAP: string, fullName: string, appointmentDate: string, createdByCompanyNameLDAP: string,
  truckVisitNbr: string, truck: string, containers: string[], siteAppointment: string, hbl: any
  } }>()
);

export const setCancelAppointment = createAction(
  "[Detached-load] set Cancel Appointment",
  props<{ response: any }>()
);