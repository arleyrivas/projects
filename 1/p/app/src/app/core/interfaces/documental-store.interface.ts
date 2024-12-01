import { IDocumentHistory } from "./document-history.interface";
import { IDocumentationInformation } from "./documentation-information.interface";
import { IDocumentationRequestInformation } from "./documentation-request-information.interface";
import { IDocumentation } from "./documentation.interface";
import { IPagination } from "./pagination.interface";

export interface IDocumentalStore {
    documentations: IDocumentation[];
    information: IDocumentationInformation | null;
    approved: boolean;
    history: IDocumentHistory | null;
    requestTime: IDocumentationRequestInformation | null;
    rejectWarning: boolean;
}
