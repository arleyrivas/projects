export interface IHTTPResponse<T> {
  statusCode: string;
  message: string;
  data: T | null;
}
