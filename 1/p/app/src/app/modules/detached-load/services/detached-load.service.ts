import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { INbrAgentAndConsigeeDTO } from "src/app/core/dto/nbr-agent-and-consigee.dto";
import { ICreateBreakbulk } from "src/app/core/dto/create-breakbulk.dto";
import { IDetachedLoad } from "src/app/core/interfaces/detached-load.interface";
import { IInvoiceProforma } from "src/app/core/interfaces/invoice-proforma.interface";
import { ILockDTO } from "src/app/core/interfaces/lock-dto.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
export class DetachedLoadService {

  public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';

  constructor(private readonly httpClient: HttpClient) { }

  public getDetachedLoad(search: string): Observable<string> {
      return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/breakbulk/search`, { data: search });
  }

  public lockUnit(body: ILockDTO): Observable<IRestResult<string>> {
    return this.httpClient.post<IRestResult<string>>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/updateHoldByUnits/BBULK/BLOQ`, { data: body });
  }

  public unlockUnit(body: ILockDTO): Observable<IRestResult<string>> {
      return this.httpClient.post<IRestResult<string>>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/updateHoldByUnits/BBULK/DESBL`, { data: body });
  }

  public getDataAppointmentDetail(truckVisitNbr: string): Observable<string> {
    const url = `${this.apiBaseURL}/portal/api/breakbulk/appointment/${truckVisitNbr}`;
    return this.httpClient.get<string>(`${url}`);
  }

  public updateConsigneeCancelDraftBbk(nbr: string): Observable<IRestResult<string>> {
    return this.httpClient.get<IRestResult<string>>(`${this.apiBaseURL}/portal/api/billOfLading/updateConsigneeCancelDraftBbk/${nbr}`);
  }

  public createBreakbulkDraft(hbl: string): Observable<IRestResult<any>> {
    return this.httpClient.get<IRestResult<any>>(`${this.apiBaseURL}/portal/api/breakbulk/draft/${hbl}`);
  }

  public createBreakbulk(body: ICreateBreakbulk): Observable<IInvoiceProforma> {
    return this.httpClient.post<IInvoiceProforma>(`${this.apiBaseURL}/portal/api/invoice/createBbk`, body);
  }

  public cancelProformaDetachedLoad(breakbulkDraft: string): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/invoice/cancelBBK`, {
      data: breakbulkDraft
    });
  }

  public finalizeBbkInvoice(breakBulkDraft: string): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/invoice/finalizeBbk/${breakBulkDraft}`, {});
  }

  public updateAgentAndConsigneeInHBl(body: INbrAgentAndConsigeeDTO): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/billOfLading/updateAgentAndConsigneeInBl`, body);
  }
}
