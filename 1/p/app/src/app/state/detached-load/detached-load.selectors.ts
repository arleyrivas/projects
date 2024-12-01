import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IDetachedLoadStore } from "src/app/core/interfaces/detached-load-store.interface";

export const detachedLoadFeatureSelector = createFeatureSelector<IDetachedLoadStore>("detachedLoad");
export const selectTruckVisitNbrData = createSelector(
  detachedLoadFeatureSelector,
  (state: IDetachedLoadStore) => state.truckVisitNbrData,
  );
