import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { IPermission } from "../../interfaces/permission.interface";
import { IUser } from "../../interfaces/user.interface";
import { environment } from "src/environments/environment";
import { IRestResult } from "../../interfaces/rest-result.interface";
import { IAPIGatewayStore } from "../../interfaces/api-gateway-store.interface";

@Injectable()
export class RoleService {

    public apiBaseURL: string = location.origin;

    constructor(private readonly httpClient: HttpClient) { }

    public getUser(): Observable<string> {
        return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/user`);
    }

    public getPermissions(): Observable<IPermission> {
        return this.httpClient.get<IPermission>(`${this.apiBaseURL}/portal/api/user/role`);
    }

    public existsAdminCompany(): Observable<boolean> {
        return this.httpClient.get<boolean>(`${this.apiBaseURL}/portal/api/user/exists-admin-Company`);
    }
}
