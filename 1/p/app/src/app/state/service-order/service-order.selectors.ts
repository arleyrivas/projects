import { createFeatureSelector } from "@ngrx/store";
import { IServiceOrderStore } from "src/app/modules/services/interfaces/service-order-store.interface";

export const servicesOrderFeatureSelector = createFeatureSelector<IServiceOrderStore>("serviceOrder");
