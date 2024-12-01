import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IDocumentalStore } from "src/app/core/interfaces/documental-store.interface";
import { IDocumentation } from "src/app/core/interfaces/documentation.interface";

export const documentalSelector = createFeatureSelector<IDocumentalStore>("documental");

export const selectDocumentations = createSelector(
  documentalSelector,
  (state: any) => state.documentations
);
