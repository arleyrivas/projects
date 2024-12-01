import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { IInvoiceToPay } from "src/app/core/interfaces/invoice-to-pay.interface";
import { IInvoice } from "src/app/core/interfaces/invoices.interface";
import { IPaymentPayuRequest } from "src/app/core/interfaces/payment-payu-request.interface";
import { IPayUN4Request } from "src/app/core/interfaces/payuN4Request.interface";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class PayuService {

  public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService
  ) { }

  public checkLockedInvoices(invoices: IInvoice[], invoicesToPay: IInvoiceToPay[]): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.apiBaseURL}/portal/api/payu/check-locked`, { invoicesToPay: invoicesToPay });
  }

  public loadFormData(customerId: string, selectedInvoicesToPay: IInvoice[], invoicesToPay: IInvoiceToPay[], totalAmount: string): Observable<IPaymentPayuRequest> {
    return this.httpClient.post<IPaymentPayuRequest>(`${this.apiBaseURL}/portal/api/payu/form-data`,{
      customerId: customerId,
      invoicesToPay: invoicesToPay,
      totalAmount: totalAmount
    });
  }

  public payInvoices(payuRequest: IPayUN4Request): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.apiBaseURL}/portal/api/payu/pay`, payuRequest);
  }

  public payuGateway(): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/application/payu-gateway`);
  }
}
