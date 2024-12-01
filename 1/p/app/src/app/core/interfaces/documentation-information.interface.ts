import { IDocumentObservations } from "./document-observations.interface"
import { IDocumentType } from "./document-type.interface"
import { IDocument } from "./document.interface"

export interface IDocumentationInformation {
    id: number,
    nbr: string,
    path: string,
    createdAt: string,
    active: boolean,
    locked: boolean,
    lockedDate: string,
    type: IDocumentType,
    files: IDocument[],
    companyName: string,
    comments: string,
    observations: string,
    createdBy: string,
    companyId: string,
    owner: string,
    ownerId: string,
    lastUploadFileDate: string,
    revised: number,
    role: string,
    notificador: string,
    newRegister: boolean,
    lockedBy: string,
    approved: boolean,
    typeCompany: string,
    mail: string,
    contactPerson: string,
    phoneNumber: string,
    rejected: boolean,
    requestTime: string,
    idCustomerRequest: string
}
