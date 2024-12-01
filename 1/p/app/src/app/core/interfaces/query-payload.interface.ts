import { IPayloadParameter } from "./payload-parameter.interface";

export interface IQueryPayload {
  queryName: string;
  parameters: Array<IPayloadParameter>;
};
