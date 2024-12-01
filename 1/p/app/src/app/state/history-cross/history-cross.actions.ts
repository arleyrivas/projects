import { createAction, props } from "@ngrx/store";
import { IHistoryCross } from "src/app/core/interfaces/history-cross.interface";

export const getHistoryCross = createAction(
  "[History-Cross] Get History Cross",
  props<{ customer: string, role: string, page: number }>()
);

export const setHistoryCross = createAction(
  "[History-Cross] Set History Cross",
  props<{ crossedHistories: Array<IHistoryCross> }>()
);

export const cleanHistoryCrosses = createAction(
  "[History-Cross] Clean History Crosses"
);
