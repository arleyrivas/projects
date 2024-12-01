import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { IServiceBlDTO } from 'src/app/core/dto/service-bl.dto';
import { IServiceImoDTO } from 'src/app/core/dto/service-imo.dto';
import { IServicePackagetypesDTO } from 'src/app/core/dto/service-package-types.dto';
import { IServicesSaveHblCriteria } from 'src/app/core/dto/services-save-hbl-criteria.dto';
import { IRestResult } from 'src/app/core/interfaces/rest-result.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';

  constructor(
    private readonly aesEncryptionUtilService: AESEncryptionUtilService,
    private readonly httpClient: HttpClient
    ) { }

  public getServicesBl(criteria: string): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/services/bl`, { data: this.aesEncryptionUtilService.encrypt(criteria) });
  }

  public getServicesPackagetypes(): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/services/packagetypes`);
  }

  public getServicesImo(criteria: string): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/services/bl/imo`, { data: this.aesEncryptionUtilService.encrypt(criteria) });
  }

  public getServicesSaveHbl(criteria: IServicesSaveHblCriteria): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/services/saveHbl`, { data: this.aesEncryptionUtilService.encrypt(JSON.stringify(criteria)) });
  }
}
