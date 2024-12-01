import { IDocumentFileName } from "./document-filename.interface";
import { IDocumentState } from "./document-state.interface";
import { IFile } from "./file.interface"

export interface IDocument {
    id: number,
    state: IDocumentState,
    files: IFile[],
    fileName: IDocumentFileName,
    addedFiles: string;
}