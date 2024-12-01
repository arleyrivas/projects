import { createFeatureSelector, createSelector  } from "@ngrx/store";
import { IContainerizedLoadStore } from "src/app/core/interfaces/containerized-load-store.interface";

export const containerizedLoadFeatureSelector = createFeatureSelector<IContainerizedLoadStore>("containerizedLoad");
export const selectDataUnitNbr = createSelector(
  containerizedLoadFeatureSelector,
  (state:any) => state.unitNbrData
);
export const selectTruckVisitNbrData = createSelector(
containerizedLoadFeatureSelector,
(state: IContainerizedLoadStore) => state.truckVisitNbrData
);
