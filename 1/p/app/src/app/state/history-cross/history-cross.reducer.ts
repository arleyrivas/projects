import { createReducer, on } from "@ngrx/store";
import { IHistoryCrossStore } from "src/app/core/interfaces/history-cross-store";
import { cleanHistoryCrosses, setHistoryCross } from "./history-cross.actions";

export const initialState: IHistoryCrossStore = {
  result: []
};

export const historyCrossReducer = createReducer(
  initialState,
  on(setHistoryCross, (state, action) => ({ result: [...state.result, ...action.crossedHistories] })),
  on(cleanHistoryCrosses, (state, action) => {
    const newState = Object.assign({}, state);

    newState.result = [];

    return newState;
  })
);
