import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { Base64EncryptionUtilService } from "src/app/core/auth/services/base64-encryption-util.service";
import { ICreditNoteCross } from "src/app/core/interfaces/credit-note-cross.interface";
import { IInvoice } from "src/app/core/interfaces/invoices.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class CreditNotesService {
  public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly _AESEncryptionUtilService: AESEncryptionUtilService
    ) {}

  public getCreditNoteCrosses(customer: string, page: number): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/creditNotes/searchByClient/${customer}/${page}`, {});
  }

  public getInvoices(customer: string, page: number): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/creditNotes/getInvoices/${customer}/${page}`, {});
  }

  public crossing(clientId: string, invoiceList: string, creditNotesList: string): Observable<IRestResult<string>> {
    const body = {
      clientId: clientId,
      noteList: creditNotesList,
      invoiceList: invoiceList
    };

    return this.httpClient.post<IRestResult<string>>(`${this.apiBaseURL}/portal/api/creditNotes/crossing`, {
      data: this._AESEncryptionUtilService.encrypt(JSON.stringify(body))
    });
  }
}
