import { createFeatureSelector } from "@ngrx/store";
import { IQueriesStore } from "src/app/core/interfaces/queries-store.interface";

export const queriesFeatureSelector = createFeatureSelector<IQueriesStore>("queries");
