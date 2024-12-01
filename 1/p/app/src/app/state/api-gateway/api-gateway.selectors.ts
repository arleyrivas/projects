import { createFeatureSelector } from "@ngrx/store";
import { IAPIGatewayStore } from "src/app/core/interfaces/api-gateway-store.interface";

export const apiGatewayFeatureSelector = createFeatureSelector<IAPIGatewayStore>("apiGateway");
