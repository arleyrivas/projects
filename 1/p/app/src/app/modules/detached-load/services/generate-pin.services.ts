import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGeneratePinDeactivateTotal } from "src/app/core/dto/generate-pin-deactivate-total.dto";
import { IGeneratePinDTO } from "src/app/core/dto/generate-pin.dto";
import { IGeneratePinDeactivate } from "src/app/core/interfaces/generate-pin-deactivate.interface";
import { ITruckPin } from "src/app/core/interfaces/truck-pin.interface";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root"
})
export class GeneratePinService {
  public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';

  constructor(
      private readonly httpClient: HttpClient
  ) { }

  public generatePin(body: IGeneratePinDTO): Observable<ITruckPin> {
      return this.httpClient.post<ITruckPin>(`${this.apiBaseURL}/portal/api/pin`, body);
  }

  public deletePins(body: IGeneratePinDeactivate): Observable<IGeneratePinDeactivateTotal> {
    return this.httpClient.put<IGeneratePinDeactivateTotal>(`${this.apiBaseURL}/portal/api/pin/deactivate-total`, body);
  }
}
