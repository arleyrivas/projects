import { createFeatureSelector } from "@ngrx/store";
import { ICreditNotesStore } from "src/app/core/interfaces/credit-notes-store.interface";

export const creditNotesFeatureSelector = createFeatureSelector<ICreditNotesStore>("creditNotes");
