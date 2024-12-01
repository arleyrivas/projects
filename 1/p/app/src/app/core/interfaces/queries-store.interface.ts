import { IQueryResponse } from "./query-response.interface";
import { IQuery } from "./query.interface";

export interface IQueriesStore {
  queries: IQuery[];
  result: IQueryResponse | null;
}
