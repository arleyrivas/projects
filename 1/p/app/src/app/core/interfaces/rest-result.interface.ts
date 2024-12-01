export interface IRestResult<T> {
    success: string | null;
    result: T | null;
    error: boolean | string | null;
}
