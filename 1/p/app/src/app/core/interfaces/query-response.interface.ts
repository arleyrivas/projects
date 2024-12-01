import { IQueryResult } from "./query-result.interface";

export interface IQueryResponse {
  success: boolean;
  result: Array<IQueryResult> | string | any,
  "error": string | null
}
