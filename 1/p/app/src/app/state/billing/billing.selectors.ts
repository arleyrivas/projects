import { createFeatureSelector } from "@ngrx/store";
import { IBillingStore } from "src/app/core/interfaces/billing-store.interface";

export const billingFeatureSelector = createFeatureSelector<IBillingStore>("billing");
