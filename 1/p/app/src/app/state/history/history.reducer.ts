import { createReducer, on } from "@ngrx/store";
import { IHistoryStore } from "src/app/core/interfaces/history.interface";
import { setHistoryPin, saveParameters, updateParameters, cleanHistoryPin, setHistoryAppointments,
    saveAppointmentsParameters, updateAppointmentsParameters, cleanHistoryAppointments
 } from "./history.actions";

export const initialState: IHistoryStore = {
    result: [],
    reloadFlag: false,
    parameters: null,
    resultAppointments: [],
    parametersAppointments: null
};





export const historyReducer = createReducer(
    initialState,
    /*on(setHistoryPin, (state, action) => {
        const newState = Object.assign({}, state);
        //newState.result = action.result;
        newState.result = [...state.result, ...result];
        return newState;
    }),*/
    
    on(setHistoryPin, (state, { result }) => {
        const newState = Object.assign({}, state);
        newState.result = [...state.result, ...result]; // Concatenar los nuevos resultados con los existentes
        return newState;
      }),
    on(saveParameters, (state, { data }) => ({
        ...state,
        parameters: data
    })),
    on(updateParameters, (state, { parameters }) => ({
        ...state,
        parameters
      })),
    on(cleanHistoryPin, (state, action) => {
        const newState = Object.assign({}, state);
    
        newState.result = [];
    
        return newState;
    }),
    on(setHistoryAppointments, (state, { result }) => {
        const newState = Object.assign({}, state);
        if (result){
            newState.resultAppointments = [...state.resultAppointments, ...result]; // Concatenar los nuevos resultados con los existentes
        }
        return newState;
      }),
    on(saveAppointmentsParameters, (state, { data }) => ({
        ...state,
        parametersAppointments: data
    })),
    on(updateAppointmentsParameters, (state, { parametersAppointments }) => ({
        ...state,
        parametersAppointments
      })),
    on(cleanHistoryAppointments, (state, action) => {
        const newState = Object.assign({}, state);
    
        newState.resultAppointments = [];
    
        return newState;
    })
);
