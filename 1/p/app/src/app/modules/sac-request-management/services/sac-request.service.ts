import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { Customer } from 'src/app/core/interfaces/customer.interface';
import { IRequestFilterSac, IRequestDetailSAC, IRequestToUpdateBySac, ICustomerApprovedChangeRequest } from 'src/app/core/interfaces/sac-request-management';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SacRequestService {
  public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';


  constructor(
    private readonly httpClient: HttpClient,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService
  ) { }


  public getCustomerRequest( body: IRequestFilterSac): Observable<string>{
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/business-management/request-sac`, body);
  }
 
  public setUpdateRequestCustomerBySac( body: IRequestToUpdateBySac): Observable<boolean>{
    return this.httpClient.post<boolean>(`${this.apiBaseURL}/portal/api/business-management/updateRequestCustomerBySac`, {
      data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
    });
  }

  public setCustomerByApprovalRequest( body: Customer): Observable<boolean>{
    return this.httpClient.post<any>(`${this.apiBaseURL}/portal/api/business-management/customer/save-or-update`, {
      data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
    });
  }

  public getInfoCustomerApprovedChangeRequest(): Observable<string>{
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/business-management/request-approved`);
  }

}
