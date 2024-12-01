export interface IInvoiceProformaTaxRate {
  value: string;
  effectiveDate: number;
  rate: number;
  taxId: string;
  facilityId: string;
  facilityName: string | null;
  created: number;
  creator: string;
  changer: string | null;
  changed: string | null;
}
