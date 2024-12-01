import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { MandatoryDocumentation } from 'src/app/core/interfaces/mandatory-documentation.interface';

import { ICustomerDTO } from 'src/app/core/dto/gestion-customer.dto';
import { CustomerRequest, ICreateCustomerRequest, ICustomerRequestGkey, IInfoCustomerRequest, IRequestCompany, IRespondeRequestCompany } from 'src/app/core/interfaces/business-management.interface';
import { IGeneratePdfForRequestCustomer } from 'src/app/core/dto/business-management-generate-pdf.dto';

@Injectable({
  providedIn: 'root'
})
export class BusinessManagementService {
  public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';

  constructor(
      private readonly httpClient: HttpClient,
      private readonly aesEncryptionUtilService: AESEncryptionUtilService
  ) { }


  public getBusinessManagementDocuments(body: MandatoryDocumentation ): Observable<any[]>{
    return this.httpClient.post<any[]>(`${this.apiBaseURL}/portal/api/business-management/documents`, body);
  }

  public getInfoCustomer(body: CustomerRequest ): Observable<string>{
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/business-management/customer`, {
      data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
    });
  }

  public createCustomerRequest(body: ICreateCustomerRequest): Observable<string>{
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/business-management/customer-request`, {
      data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
    });
  }

  public getCustomerRequest(body: IRequestCompany): Observable<string>{
  return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/business-management/request-by-company`, body);
  }


  public getInfoCustomerByRequest(gkeyCustomerRequest: ICustomerRequestGkey): Observable<string>{
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/business-management/info-customer-by-request`, {
      data: this.aesEncryptionUtilService.encrypt(JSON.stringify(gkeyCustomerRequest))
    });
  }

}

  
