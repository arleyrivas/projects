import { createFeatureSelector } from "@ngrx/store";
import { IAdministrationStore } from "src/app/core/interfaces/administration-store";

export const administrationFeatureSelector = createFeatureSelector<IAdministrationStore>("administration");
