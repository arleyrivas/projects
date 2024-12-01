export interface IInvoiceCreate {
  units: string[];
  date: string | null;
  customerId: string | null;
  bl: string | null;
  bkg: string | null;
  notes: string | null;
}
