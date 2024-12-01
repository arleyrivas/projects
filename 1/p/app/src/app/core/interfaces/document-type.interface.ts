import { IDocumentFileName } from "./document-filename.interface";

export interface IDocumentType {
    id: number;
    type: string;
    filesName: IDocumentFileName[];
}