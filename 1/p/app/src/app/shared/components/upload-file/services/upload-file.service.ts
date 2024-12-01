import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { IDocument } from '../interfaces/upload-file.interface';
@Injectable({
    providedIn: 'root'
  })
  
export class UploadFileService {
    public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';
    constructor(private http: HttpClient) { }

  uploadFile(formData:FormData, currentDateForGestCli?:string): Observable<string> { 
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    if(currentDateForGestCli == null ){ 
      return this.http.post<string>(`${this.apiBaseURL}/portal/api/uploadFile/bnVsbA==`,formData,{ headers });
    }else{
      return this.http.post<string>(`${this.apiBaseURL}/portal/api/uploadFile/${currentDateForGestCli}`, formData,{ headers });
    }
  }

  getFile(module:string,nbr:string): Observable<string>{
    return this.http.get<string>(`${this.apiBaseURL}/portal/api/documentation/type/${module}/nbr/${nbr}`);
  }

  deleteFile(id:number,idbl:number){
    return this.http.delete<string>(`${this.apiBaseURL}/portal/api/documentation/removeFileById/${idbl}/${id}`);
  }
  
  deleteFileFromServer(id:number){
    return this.http.delete<string>(`${this.apiBaseURL}/portal/api/documentation/file/${id}`);
  }
  saveFiles(request:IDocument){
    return this.http.post<string>(`${this.apiBaseURL}/portal/api/documentation`,request);   
  }
  
}
