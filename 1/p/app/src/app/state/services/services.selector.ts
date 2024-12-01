import { createFeatureSelector } from "@ngrx/store";
import { IServicesStore } from "src/app/core/interfaces/services-store.interface";

export const servicesFeatureSelector = createFeatureSelector<IServicesStore>("services");
