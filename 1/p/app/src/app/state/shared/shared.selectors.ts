import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ISharedStore } from "src/app/core/interfaces/shared.interface";

export const sharedFeatureSelector = createFeatureSelector<ISharedStore>("shared");

export const selectSpinnerAutoClose = createSelector(
  sharedFeatureSelector,
  (state: ISharedStore) => state.spinnerAutoClose
);
