import { Injectable } from "@angular/core";
import { IServiceTypeInfo } from "../interfaces/service-type-info.interface";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { IServiceAutorityTypes } from "../interfaces/service-autority-types.interface";
import { IServiceOrderPayload } from "../interfaces/service-order-payload.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { IServiceType } from "../interfaces/service-type.interface";
import { IServiceTypeDesignatedOfficial } from "../interfaces/service-type-designated-official.interface";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { IServiceHistoryDTO } from "../interfaces/service-history.dto";
import { IServiceHistory } from "../interfaces/service-history.interface";

@Injectable({
    providedIn: "root"
})
export class ServiceOrdersService {
  public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';

    constructor(
      private readonly httpClient: HttpClient,
      private readonly aesEncryptionUtilService: AESEncryptionUtilService,
    ) { }

    public getServiceCriteriaTitle(criteriaType: string): string | null {
        if(criteriaType.includes("BL")) return "BL";
        else if((criteriaType.includes("HB"))) return "HBL";
        else if((criteriaType.includes("BK"))) return "BOOKING";

        return null;
    }

    public getUnitServiceState(serviceTypeInfo: IServiceTypeInfo[], criteria: number): number {
        return serviceTypeInfo.filter(value => value.Active === criteria).length;
    }

    public getServiceCheckboxFormGroup(): FormControl {
        return new FormControl({ value: false, disabled: false });
    }

    public getServiceVoidDestinationFormGroup(): FormControl {
        return new FormControl({ value: "", disabled: true });
    }

    public getServiceType(): Observable<string> {
      return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/services/getServiceType`);
    }

    public getServiceOrderInfo(criteria: string, serviceType: string): Observable<string> {
      return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/services/getInfoForServiceOrder`, {
        data: this.aesEncryptionUtilService.encrypt(JSON.stringify(
          {
            criteria,
            serviceType
          }
        ))
      });
    }

    public getServiceAutorityType(serviceType: string, chargeType: string): Observable<string> {
      return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/services/getServiceInfo`, {
        data: this.aesEncryptionUtilService.encrypt(JSON.stringify({
          serviceType,
          chargeType
        }))
      });
    }

    public getServiceHistory(page: number, body: IServiceHistoryDTO): Observable<string> {
      return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/services/searchServiceHistory/${page}`, body);
    }

    public saveServiceOrder(body: IServiceOrderPayload): Observable<string> {
      return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/services/saveServiceOrder`, {
        data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
      });
    }

    public getDesignatedOfficials(customer: string): Observable<string> {
      return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/services/getStaff`, {
        data: this.aesEncryptionUtilService.encrypt(JSON.stringify({
          customer
        }))
      });
    }
}
