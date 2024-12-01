import { createAction, props } from "@ngrx/store";
import { IAPIGatewayStore } from "src/app/core/interfaces/api-gateway-store.interface";

export const retrieveApiGatewayData = createAction(
    "[Global] Get Api Gateway Data"
);

export const saveApiGatewayData = createAction(
    "[Global] Save Api Gateway Data",
    props<{ apiGatewayData: IAPIGatewayStore }>()
);
