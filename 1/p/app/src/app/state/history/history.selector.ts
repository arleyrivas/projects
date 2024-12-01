import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IHistoryStore } from "src/app/core/interfaces/history.interface";


export const historyFeatureSelector = createFeatureSelector<IHistoryStore>('history');


