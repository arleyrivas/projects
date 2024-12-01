import { createAction, props } from "@ngrx/store"
import { IServiceBlDTO } from "src/app/core/dto/service-bl.dto";
import { IServiceImoDTO } from "src/app/core/dto/service-imo.dto";
import { IServicePackagetypesDTO } from "src/app/core/dto/service-package-types.dto";
import { IServicesSaveHblCriteria } from "src/app/core/dto/services-save-hbl-criteria.dto";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";

export const getServicesBl = createAction(
  "[SERVICES] Get Services BL",
  props<{ criteria: string }>()
);

export const setServicesBl = createAction(
  "[SERVICES] Set Services BL",
  props<{ searchedBl: IServiceBlDTO | null }>()
);

export const getServicesPackagetypes = createAction(
  "[SERVICES] Get Services Package Types"
);

export const setServicesPackagetypes = createAction(
  "[SERVICES] Set Services Package Types",
  props<{ packagesTypes: IServicePackagetypesDTO[] }>()
);

export const getServicesImo = createAction(
  "[SERVICES] Get Services Imo",
  props<{ criteria: string }>()
);

export const SetServicesImo = createAction(
  "[SERVICES] Set Services Imo",
  props<{ imo: IServiceImoDTO[] }>()
);

export const cleanServicesImo = createAction(
  "[SERVICES] Clean Services Imo"
);

export const getServicesSaveHbl = createAction(
  "[SERVICES] Get Services Save Hbl",
  props<{ body: IServicesSaveHblCriteria, hasNotification: boolean, notificationInfo: string, privilege: string }>()
);

export const setServicesSaveHbl = createAction(
  "[SERVICES] Set Services Save Hbl"
);

export const setSelectedCustomer = createAction(
  "[GLOBAL] Set Selected Customer",
  props<{ customer: string }>()
);

export const setSelectedBl = createAction(
  "[GLOBAL] Set Selected Bl",
  props<{ bl: string | null }>()
);

export const cleanServicesblSearch = createAction(
  "[SERVICES] Clean Services blSearch"
);
