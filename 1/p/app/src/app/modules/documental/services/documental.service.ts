import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { IDocumentationInformation } from 'src/app/core/interfaces/documentation-information.interface';
import { IDocumentation } from 'src/app/core/interfaces/documentation.interface';
import { environment } from 'src/environments/environment';

// Document
// https://172.20.115.30:8446/businessPortal/api/documentation/2/20

// Document Search
// https://172.20.115.30:8446/businessPortal/api/documentation/search/MjUwTVNDVUI4NTQ4Nw==

// Document Information
// https://172.20.115.30:8446/businessPortal/api/documentation/get-and-lock/:id

// Document Time
//https://172.20.115.30:8446/businessPortal/api/documentation/documentalTime

// Aprobar
// https://172.20.115.30:8446/businessPortal/api/documentation/notificate

// Desaprobar
// https://172.20.115.30:8446/businessPortal/api/documentation/notificate/not-approved

// Unlock
// https://172.20.115.30:8446/businessPortal/api/documentation/unlock/60297

@Injectable({
  providedIn: 'root'
})
export class DocumentalService {

  public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';
  public execSearch: Subject<null> = new Subject();

  constructor(
    private readonly httpClient: HttpClient,
    private readonly aesService:AESEncryptionUtilService
  ) { }

    public getExecSearch(): Subject<null> {
      return this.execSearch;
    }

  public getAllDocumentation(skip: number, amount: number): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/documentation/paginate`, { data: skip });
  }

  public searchDocumentation(nbr: string): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/documentation/search`, { data: nbr });
  }

  public getDocumentationInformation(id: string): Observable<IDocumentationInformation> {
    let _ID =  this.aesService.encrypt(id);
    return this.httpClient.post<IDocumentationInformation>(`${this.apiBaseURL}/portal/api/documentation/get-and-lock`, {data:_ID});
  }

  public getDocumentalTime(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiBaseURL}/portal/api/documentation/documentalTime`);
  }

  public approveDocumentation(documentationInformation: IDocumentationInformation): Observable<IDocumentationInformation> {
    return this.httpClient.put<IDocumentationInformation>(`${this.apiBaseURL}/portal/api/documentation/notificate`, documentationInformation);
  }

  public notApproveDocumentation(documentationInformation: IDocumentationInformation): Observable<IDocumentationInformation> {
    return this.httpClient.put<IDocumentationInformation>(`${this.apiBaseURL}/portal/api/documentation/notificate/not-approved`, documentationInformation);
  }

  public unlockInformation(information: IDocumentationInformation): Observable<IDocumentationInformation> {
    return this.httpClient.post<IDocumentationInformation>(`${this.apiBaseURL}/portal/api/documentation/unlock`, information);
  }
}
