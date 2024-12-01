import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { IQueryPayload } from "src/app/core/interfaces/query-payload.interface";
import { IQueryResponse } from "src/app/core/interfaces/query-response.interface";
import { IQuery } from "src/app/core/interfaces/query.interface";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class QueriesService {

  public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';

  constructor(
    private httpClient: HttpClient,
    private aesEncryptionUtilService: AESEncryptionUtilService
  ) { }

  public getAllQueries(): Observable<IQuery[]> {
    return this.httpClient.get<IQuery[]>(`${this.apiBaseURL}/portal/api/application/cXVlcnlNb2R1bGVDb25maWd1dGFyaW9uLmpzb24=`);
  }

  public exectureQuery(payload: IQueryPayload): Observable<IQueryResponse> {
    return this.httpClient.post<IQueryResponse>(`${this.apiBaseURL}/portal/api/execute`, {
      data: this.aesEncryptionUtilService.encrypt(JSON.stringify(payload))
    });
  }

  public executeDamageReport(container: string, id: string): Observable<IQueryResponse> {
    return this.httpClient.get<IQueryResponse>(`${this.apiBaseURL}/portal/api/container/getContainerDamageReport/${container}/${id}`);
  }
}
