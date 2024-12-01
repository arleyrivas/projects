import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IHistoryCross } from "src/app/core/interfaces/history-cross.interface";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class HistoryCrossService {

  public baseURL: string = environment.production ? location.origin : 'portal-api';

  constructor(private readonly httpClient: HttpClient) {}

  public getHistoryCross(customer: string, role: string, page: number): Observable<Array<IHistoryCross>> {
    return this.httpClient.post<Array<IHistoryCross>>(`${this.baseURL}/portal/api/historyCross/getHistoryCross/${customer}/${role}/${page}`, {});
  }
}
