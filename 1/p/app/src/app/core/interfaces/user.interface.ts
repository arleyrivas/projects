import { IPermission } from "./permission.interface";

export interface IUser {
    "id"?: string | null,
    "userName": string,
    "name": string,
    "lastName": string,
    "idDocument"?: string | null,
    "email": string,
    "companyName": string,
    "permissions": Array<IPermission>,
    "n4UserId": string,
    "active": boolean,
    "nit": string,
    "description"?: string | null
}
