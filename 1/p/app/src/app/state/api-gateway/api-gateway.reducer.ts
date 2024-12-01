import { createReducer, on } from "@ngrx/store";
import { IAPIGatewayStore } from "src/app/core/interfaces/api-gateway-store.interface";
import { saveApiGatewayData } from "./api-gateway.actions";

export const initialState: IAPIGatewayStore = {
  userName: "",
  nombres: "",
  correo: "",
  apellidos: "",
  empresa: null,
  privileges: [],
  passwordExpiring: false
};

export const apiGatewayReducer = createReducer(
    initialState,
    on(saveApiGatewayData, (state, action) => Object.assign({}, action.apiGatewayData)),
);
