import { IInvoiceProformaTaxes } from "./invoice-proforma-taxes.interface";

export interface IInvoiceProformaCharge {
  taxes: IInvoiceProformaTaxes,
  entityId: string,
  tariffId: string,
  description: string,
  eventPerformedFrom: number,
  eventPerformedTo: string | null,
  extractClass: string,
  rateBilled: number,
  quantityBilled: number,
  amount: number,
  isFlatRate: string,
  flatRateAmount: number,
  quantity: number,
  quantityUnit: string,
  customerTariffId: string,
  notes: string | null,
  created: number,
  creator: string,
  relatedInvoiceDraftNumber: string | null,
  eventTypeId: string
}
