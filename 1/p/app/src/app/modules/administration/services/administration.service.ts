import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { IAdministrationActionsDTO } from "src/app/core/dto/administration-action.dto";
import { IAdministrationCreateUserDTO } from "src/app/core/dto/administration-create-user.dto";
import { IAdministrationIpAddressDTO } from "src/app/core/dto/administration-ip-address.dto";
import { IAdministrationNotificationPrivilegeDTO } from "src/app/core/dto/administration-notification-privilege.dto";
import { IAdministrationSecondPasswordDTO } from "src/app/core/dto/administration-second-password.dto";
import { IAssignRoleDTO } from "src/app/core/dto/assign-role.dto";
import { INotificationUpdateDataDTO } from "src/app/core/dto/notification-update-data.dto";
import { IAdministrationActionsHours } from "src/app/core/interfaces/administration-action-hours.interface";
import { IAdministrationActions } from "src/app/core/interfaces/administration-actions.interface";
import { IAdministrationDisableUserDTO } from "src/app/core/interfaces/administration-disable-user.interface";
import { IAdministrationIpAddress } from "src/app/core/interfaces/administration-ip.interface";
import { IAdministrationNotification } from "src/app/core/interfaces/administration-notification.interface";
import { IAdministrationRole } from "src/app/core/interfaces/administration-role.interface";
import { IAdministrationSecondPassword } from "src/app/core/interfaces/administration-second-password.interface";
import { IAdministrationUserNotification } from "src/app/core/interfaces/administration-user-notification.interface";
import { IAdministrationUser } from "src/app/core/interfaces/administration-user.interface";
import { IHTTPResponse } from "src/app/core/interfaces/http-response.interface";
import { IInfoUser } from "src/app/core/interfaces/info-user.interface";
import { IRestResultAlt } from "src/app/core/interfaces/rest-result-alt.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { environment } from "src/environments/environment";

// GET  /api/user/company
// GET  /api/user/notification/mobile/cecuero
// POST /api/user/mobile/info/update
// POST /api/user-management/user
// GET  /api/user-management/user/get-info-user-by-username-and-email/JJMARIN/elvis.fontalvo@gmail.com
// POST /api/user/mobile/info/update
// GET  /api/user-management/rol/roles-by-company-id/8002546105
// GET  /api/user-management/password/reset-password-user/JJMARIN
// POST /api/user-management/user/assign-roles

@Injectable({
  providedIn: "root"
})
export class AdministrationService {

  public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService
  ) {}

  // Acciones

  public getActionPrivileges(): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/privilege`);
  }

  public getActionPrivilege(privilege: string): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/privilege/name`, {
      data: this.aesEncryptionUtilService.encrypt(privilege)
    });
  }

  public saveActionPrivilege(payload: IAdministrationActionsDTO): Observable<void> {
    return this.httpClient.post<void>(`${this.apiBaseURL}/portal/api/privilege/save`, {
      data: this.aesEncryptionUtilService.encrypt(JSON.stringify(payload))
    });
  }

  // Notificaciones

  public getPrivilegesNotifiableCompany(): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/privilege/privileges-notifiable-company`);
  }

  public updatePrivilegesNotifiableCompany(payload: IAdministrationNotificationPrivilegeDTO): Observable<IRestResult<null>> {
    return this.httpClient.post<IRestResult<null>>(`${this.apiBaseURL}/portal/api/privilege/update-privileges-notifiable-company`, {
      data: this.aesEncryptionUtilService.encrypt(JSON.stringify(payload))
    });
  }

  // Segunda Clave - TODO: Estandarizar respuesta del servidor

  public getSecondPasswordMethod(nit: string): Observable<IRestResult<IRestResult<IAdministrationSecondPassword>>> {
    return this.httpClient.get<IRestResult<IRestResult<IAdministrationSecondPassword>>>(`${this.apiBaseURL}/portal/api/user-management/company/second-password-method/${nit}`);
  }

  public updateSecondPasswordMethod(payload: IAdministrationSecondPasswordDTO): Observable<IRestResult<IRestResult<null>>> {
    return this.httpClient.post<IRestResult<IRestResult<null>>>(`${this.apiBaseURL}/portal/api/user-management/company/second-password-method`, payload);
  }

  // Usuarios

  public getCompanyUsers(): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/user/company`);
  }

  public createUser(body: IAdministrationCreateUserDTO): Observable<IRestResult<IHTTPResponse<void>>> {
    return this.httpClient.post<IRestResult<IHTTPResponse<void>>>(`${this.apiBaseURL}/portal/api/user-management/user`, body);
  }

  public updateUser(body: IInfoUser): Observable<IRestResult<IHTTPResponse<null>>> {
    return this.httpClient.put<IRestResult<IHTTPResponse<null>>>(`${this.apiBaseURL}/portal/api/user-management/user`, {
      data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
    });
  }

  public disableUser(body: IAdministrationDisableUserDTO): Observable<IRestResult<null>> {
    return this.httpClient.post<IRestResult<null>>(`${this.apiBaseURL}/portal/api/user-management/user/disable`, body);
  }

  public getUserWithUsernameAndEmail(user: string, email: string | null): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/user-management/user/get-info-user-by-username-and-email/${user}/${email}`);
  }

  public getMobileNotification(user: string): Observable<IRestResult<IAdministrationUserNotification>> {
    return this.httpClient.get<IRestResult<IAdministrationUserNotification>>(`${this.apiBaseURL}/portal/api/user/notification/mobile/${user}`);
  }

  public updateNotificationData(body: INotificationUpdateDataDTO): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/user/mobile/info/update`, body);
  }

  public getCompanyRoles(id: string): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/user-management/rol/roles-by-company-id/${id}`);
  }

  public assignRoles(body: IAssignRoleDTO): Observable<IRestResult<void>> {
    return this.httpClient.post<IRestResult<void>>(`${this.apiBaseURL}/portal/api/user-management/user/assign-roles`, {
      data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
    });
  }

  public resetUserPassword(user: string): Observable<IRestResult<string>> {
    return this.httpClient.get<IRestResult<string>>(`${this.apiBaseURL}/portal/api/user-management/password/reset-password-user/${user}`);
  }

  // Restriccion IP

  public execIpAddressOperation(payload: IAdministrationIpAddressDTO): Observable<IAdministrationIpAddress[]> {
    return this.httpClient.post<IAdministrationIpAddress[]>(`${this.apiBaseURL}/portal/api/privilege/action-ip-restrictions`, payload);
  }
}
