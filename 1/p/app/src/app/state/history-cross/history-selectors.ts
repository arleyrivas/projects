import { createFeatureSelector } from "@ngrx/store";
import { IHistoryCrossStore } from "src/app/core/interfaces/history-cross-store";

export const historyCrossFeatureSelector = createFeatureSelector<IHistoryCrossStore>("historyCross");
