import { IParameter } from "./parameter.interface";
import { IResponseColumn } from "./response-column.interface";

export interface IQuery {
  responseColumns: IResponseColumn[],
  name: string,
  queryName: string,
  id: number,
  privilege: string,
  parameters: IParameter[]
}
