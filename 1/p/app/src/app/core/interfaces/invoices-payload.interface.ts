export interface IInvoicesPayload {
  client: string | null;
  finalNbr: string | null;
  container: string | null;
  fromDate: string | null;
  toDate: string | null;
  state: string;
}
