import { createAction, props } from "@ngrx/store"
import { IServiceBlDTO } from "src/app/core/dto/service-bl.dto";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { IServiceOrderNotificationData } from "src/app/core/interfaces/service-order-notification-data.interface";
import { IServiceAutorityTypes } from "src/app/modules/services/interfaces/service-autority-types.interface";
import { IServiceHistoryDTO } from "src/app/modules/services/interfaces/service-history.dto";
import { IServiceHistory } from "src/app/modules/services/interfaces/service-history.interface";
import { IServiceOrderPayload } from "src/app/modules/services/interfaces/service-order-payload.interface";
import { IServiceOrdersPDF } from "src/app/modules/services/interfaces/service-orders-pdf.interface";
import { IServiceTypeDesignatedOfficial } from "src/app/modules/services/interfaces/service-type-designated-official.interface";
import { IServiceTypeInfo } from "src/app/modules/services/interfaces/service-type-info.interface";
import { IServiceType } from "src/app/modules/services/interfaces/service-type.interface";
import { IVoidDestinationContainerSelected } from "src/app/modules/services/interfaces/void-destination-container-selected.interface";

export const getServiceType = createAction(
  "[SERVICE-ORDER] Get Service Type"
);

export const setServiceType = createAction(
  "[SERVICES-ORDER] Set Service Type",
  props<{ serviceTypes: IServiceType[] }>()
);

export const getServiceOrderInfo = createAction(
  "[SERVICE-ORDER] Get Service Order Info",
  props<{ criteria: string, serviceType: string }>()
);

export const setServiceOrderInfo = createAction(
  "[SERVICES-ORDER] Set Service Order Info",
  props<{ serviceOrderInfo: IServiceTypeInfo[] }>()
);

export const cleanServiceOrderInfo = createAction(
  "[SERVICES-ORDER] Clean Service Order Info"
);

export const getServiceAutorityType = createAction(
  "[SERVICE-ORDER] Get Service Autority Type",
  props<{ serviceType: string, chargeType: string }>()
);

export const SetServiceAutorityType = createAction(
  "[SERVICES-ORDER] Set Service Autority Type",
  props<{ authorityType: IServiceAutorityTypes }>()
);

export const cleanServiceAutorityType = createAction(
  "[SERVICES-ORDER] Clean Service Autority Type"
);

export const getSaveServiceOrder = createAction(
  "[SERVICE-ORDER] Get Save Service Order",
  props<{ payloads: IServiceOrderPayload[], hasNotification: boolean, notificationData: IServiceOrderNotificationData, privilege: string }>()
);

export const setSaveServiceOrder = createAction(
  "[SERVICES-ORDER] Set Save Service Order",
  props<{ result: IRestResult<string>[] }>()
);

export const cleanSaveServiceOrder = createAction(
  "[SERVICES-ORDER] Clean Save Service Order"
);

export const setSearchedCriteria = createAction(
  "[SERVICES-ORDER] Set Searched Criteria",
  props<{ criteria: string }>()
);

export const cleanSearchedCriteria = createAction(
  "[SERVICES-ORDER] Clean Searched Criteria",
);

export const addUnit = createAction(
  "[SERVICES-ORDER] Add Unit",
  props<{ unit: IVoidDestinationContainerSelected }>()
);

export const removeUnit = createAction(
  "[SERVICES-ORDER] Remove Unit",
  props<{ unit: IVoidDestinationContainerSelected }>()
);

export const cleanUnit = createAction(
  "[SERVICES-ORDER] Clean Units"
);

export const changeVoidDestinationUnit = createAction(
  "[SERVICES-ORDER] Change Void Destination Unit",
  props<{ eventValue: string | null, serviceTypeInfo: IServiceTypeInfo }>()
);

export const setContainers = createAction(
  "[SERVICES-ORDER] Set Containers",
  props<{ containers: string[] }>()
);

export const cleanContainers = createAction(
  "[SERVICES-ORDER] Clean Containers"
);

export const getDesignatedOfficial = createAction(
  "[SERVICE-ORDER] Get Service Type Designated Official",
  props<{ criteria: string }>()
);

export const setDesignatedOfficial = createAction(
  "[SERVICE-ORDER] Set Service Type Designated Official",
  props<{ designatedOfficial: IServiceTypeDesignatedOfficial[] }>()
);

export const removeDesignatedOfficial = createAction(
  "[SERVICE-ORDER] Remove Service Type Designated Official",
  props<{ id: string }>()
);

export const cleanDesignatedOfficial = createAction(
  "[SERVICE-ORDER] Clean Service Type Designated Official"
);

export const setPdfData = createAction(
  "[SERVICE-ORDER] Set Pdf Data",
  props<{ pdfData: IServiceOrdersPDF | null }>()
);

export const getServiceHistory = createAction(
  "[SERVICE-HISTORY] Get Service History",
  props<{ page: number, body: IServiceHistoryDTO }>()
);

export const setServiceHistory = createAction(
  "[SERVICE-HISTORY] Set Service History",
  props<{ result: IServiceHistory }>()
);

export const cleanServiceHistory = createAction(
  "[SERVICE-HISTORY] Clean Service History"
);

export const setServiceHistoryInformation = createAction(
  "[SERVICE-HISTORY] Set Service History Information",
  props<{ serviceInformation: IServiceHistoryDTO }>()
);

export const setServiceHistoryPage = createAction(
  "[SERVICE-HISTORY] Set Service History Page",
  props<{ page: number }>()
);
