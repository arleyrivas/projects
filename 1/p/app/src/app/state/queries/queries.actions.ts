import { createAction, props } from "@ngrx/store";
import { IQueryPayload } from "src/app/core/interfaces/query-payload.interface";
import { IQueryResponse } from "src/app/core/interfaces/query-response.interface";
import { IQuery } from "src/app/core/interfaces/query.interface";

export const getAllQueries = createAction(
  "[Queries] Get All Queries"
);

export const setAllQueries = createAction(
  "[Queries] Set All Queries",
  props<{ queries: IQuery[] }>()
);

export const getExecuteQuery = createAction(
  "[Queries] Get Execute Query",
  props<{ payload: IQueryPayload }>()
);

export const setExecuteQuery = createAction(
  "[Queries] Set Execute Query",
  props<{ result: IQueryResponse }>()
);

export const getDamageReport = createAction(
  "[Queries] Get Damage Report",
  props<{ container: string, id: string }>()
);

export const setDamageReport = createAction(
  "[Queries] Set Damage Report",
  props<{ result: IQueryResponse }>()
);

export const cleanQueryResult = createAction(
  "[Queries] Clean Query Result"
);
