import { createFeatureSelector, createSelector  } from "@ngrx/store";
import { IContainerizedLoadStore } from "src/app/core/interfaces/containerized-load-store.interface";
import { IPayuStore } from "src/app/core/interfaces/payu-store.interface";

export const payuFeatureSelector = createFeatureSelector<IPayuStore>("payu");
