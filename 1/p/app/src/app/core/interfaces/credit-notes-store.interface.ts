import { ICreditNoteCross } from "./credit-note-cross.interface";
import { IInvoice } from "./invoices.interface";

export interface ICreditNotesStore {
  crosses: ICreditNoteCross[];
  invoices: IInvoice[];
  selectedCrosses: ICreditNoteCross[];
  selectedInvoices: IInvoice[];
  totalCrosses: number;
  totalInvoices: number;
}
