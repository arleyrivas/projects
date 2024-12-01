import { IInvoiceProformaCharges } from "./invoice-proforma-charges.interface"
import { IInvoiceProformaCustomer } from "./invoice-proforma-customer"
import { IInvoiceProformaParameters } from "./invoice-proforma-parameters.interface"




export interface IInvoiceProforma {
  "error": string | null,
  "charges": IInvoiceProformaCharges,
  "payments": string | null,
  "discounts": string | null,
  "draftNumber": number,
  "finalNumber": string | null,
  "finalizedDate": string | null,
  "status": string,
  "isMerged": string,
  "effectiveDate": number,
  "invoiceTypeId": string,
  "currency": string,
  "payeeCustomerId": string,
  "payeeCustomerName": string | null,
  "payeeCustomerRole": string,
  "totalCharges": number,
  "totalDiscounts": number,
  "totalTaxes": number,
  "totalTotal": number,
  "totalCredits": number,
  "totalCreditTaxes": number,
  "totalPaid": number,
  "totalOwed": number,
  "totalUnRounded": number,
  "customerReference": string | null,
  "contactName": string | null,
  "addressLine1": string,
  "addressLine2": string | null,
  "addressLine3": string | null,
  "city": string,
  "mailCode": string,
  "emailAddress": string,
  "facilityId": string,
  "facilityName": string | null,
  "notes": string | null,
  "created": number,
  "creator": string,
  "changed": number,
  "changer": string,
  "vesselVisitId": string | null,
  "agentId": string | null,
  "bookingOrBl": string | null,
  "paidThruDay": number,
  "parameters": IInvoiceProformaParameters
  "customer": IInvoiceProformaCustomer,
}
