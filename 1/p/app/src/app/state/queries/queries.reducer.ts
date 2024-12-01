import { createReducer, on } from "@ngrx/store";
import { IQueriesStore } from "src/app/core/interfaces/queries-store.interface";
import { cleanQueryResult, setAllQueries, setDamageReport, setExecuteQuery } from "./queries.actions";

export const initialState: IQueriesStore = {
  queries: [],
  result: null
};

export const queriesReducer = createReducer(
  initialState,
  on(setAllQueries, (state, action) => ({ queries: action.queries, result: null })),
  on(setExecuteQuery, setDamageReport, (state, action) => ({ queries: state.queries, result: action.result })),
  on(cleanQueryResult, (state, action) => ({ queries: state.queries, result: null }))
);
