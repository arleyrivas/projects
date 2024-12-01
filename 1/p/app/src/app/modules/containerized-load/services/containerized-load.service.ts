import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { IContainerizedLoad } from "src/app/core/interfaces/containerized-load.interface";
import { ILockDTO } from "src/app/core/interfaces/lock-dto.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { environment } from "src/environments/environment";
import { Base64EncryptionUtilService } from "src/app/core/auth/services/base64-encryption-util.service";
import { INbrAgentAndConsigeeDTO } from "src/app/core/dto/nbr-agent-and-consigee.dto";
import { ICustomerContract } from "src/app/core/interfaces/customer-contract.interface";
import { IInvoiceCreate } from "src/app/core/dto/invoice-create.dto";
import { IInvoiceProforma } from "src/app/core/interfaces/invoice-proforma.interface";
import { ICreateBreakbulk } from "src/app/core/dto/create-breakbulk.dto";
import { IBookingInterface } from "src/app/core/interfaces/booking.interface";

@Injectable({
    providedIn: "root"
})
export class ContainerizedLoadService {
  public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';

  constructor(
      private readonly httpClient: HttpClient,
      private readonly _AESEncryptionUtilService: AESEncryptionUtilService,
      private readonly encode: Base64EncryptionUtilService
  ) { }

  public getContainerizedLoad(search: string): Observable<string> {
      return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/billOfLading/search`, { data: search });
  }

  public getBooking(search: string): Observable<IBookingInterface[]> {
    return this.httpClient.get<IBookingInterface[]>(`${this.apiBaseURL}/portal/api/booking/getBookingByAgent/${search}`);
  }

  public lockUnit(body: string): Observable<IRestResult<string>> {
    return this.httpClient.post<IRestResult<string>>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/updateHoldByUnits/UNIT/BLOQ`, { data: body });
  }

  public unlockUnit(body: string): Observable<IRestResult<string>> {
      return this.httpClient.post<IRestResult<string>>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/updateHoldByUnits/UNIT/DESBL`, { data: body });
  }

  public getInvoice(invoice: string): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/info`, {
      data: this._AESEncryptionUtilService.encrypt(invoice)
    });
  }

  public getDataUnitNbr(unitNbr: string): Observable<string> {
    let uniNb = this.encode.encrypt(unitNbr);
    const url = `${this.apiBaseURL}/portal/api/invoice/unit-nbr/${uniNb}`;
    return this.httpClient.get<string>(`${url}`);
  }

  public getDataAppointmentDetail(truckVisitNbr: string): Observable<string> {
    //console.log("truckVisitNbr", truckVisitNbr);
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/info`, {
      data: this._AESEncryptionUtilService.encrypt(truckVisitNbr)
    });
  }

  public getCustomerContract(nit: string): Observable<IRestResult<ICustomerContract>> {
    return this.httpClient.get<IRestResult<ICustomerContract>>(`${this.apiBaseURL}/portal/api/customer-contract/${nit}`);
  }

  public updateAgentAndConsigneeInBl(body: INbrAgentAndConsigeeDTO): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/billOfLading/updateAgentAndConsigneeInBl`, body);
  }

  public invoiceCreate(body: IInvoiceCreate): Observable<IInvoiceProforma> {
    return this.httpClient.post<IInvoiceProforma>(`${this.apiBaseURL}/portal/api/invoice/create`, body);
  }

  public cancelProformaContainerizedLoad(body: IInvoiceProforma): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/invoice/cancel`, body);
  }

  public finalizeInvoice(body: IInvoiceProforma): Observable<IInvoiceProforma> {
    return this.httpClient.put<IInvoiceProforma>(`${this.apiBaseURL}/portal/api/invoice/finalize-invoice`, body);
  }
}
