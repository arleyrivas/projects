import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IInvoicesPayload } from "src/app/core/interfaces/invoices-payload.interface";
import { IInvoice } from "src/app/core/interfaces/invoices.interface";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class BillingService {

  public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';

  constructor(private readonly httpClient: HttpClient) { }

  public getInvoices(page: number, quantity: number, payload: IInvoicesPayload): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/invoice/all`, {
      ...payload,
      page: page + ""
    });
  }
}
