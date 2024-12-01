import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatesServiceBusinessManagement {
  private idDocumentationSubject: BehaviorSubject<string | null>;
  private isAcceptCreateRequest: BehaviorSubject<boolean | null>;
  private isCancelCreateRequest: BehaviorSubject<boolean | null>;
  private timeSaveDocuments: string = '';
  private loadDocumentsFromGESTCLIE: BehaviorSubject<boolean | null>;
  private invalidFields: string[] = [];
  private missingRequiredDocuments: string[] = [];
  private representedByAgent: string = '';
  private requestType: string = '';

  constructor() {
    this.idDocumentationSubject = new BehaviorSubject<string | null>(null);
    this.isAcceptCreateRequest = new BehaviorSubject<boolean | null>(null);
    this.isCancelCreateRequest = new BehaviorSubject<boolean | null>(false);
    this.loadDocumentsFromGESTCLIE = new BehaviorSubject<boolean | null>(false);
  }

  getStateIdDocumentationObservable(): Observable<string | null> {
    return this.idDocumentationSubject.asObservable();
  }
  getStateIsAcceptCreateRequest(): Observable<boolean | null> {
    return this.isAcceptCreateRequest.asObservable();
  }

  getStateIsCancelCreateRequest(): Observable<boolean | null> {
    return this.isCancelCreateRequest.asObservable();
  }

  getStateLoadDocumentsFromGESTCLIE(): Observable<boolean | null> {
    return this.loadDocumentsFromGESTCLIE.asObservable();
  }

  // getter
  getIdDocumentation(): string | null {
    return this.idDocumentationSubject.getValue();
  }

  getIsAcceptCreateRequest(): boolean | null {
    return this.isAcceptCreateRequest.getValue();
  }

  getTimeSaveDocuments(): string | null {
    return this.timeSaveDocuments;
  }

  getIsCancelCreateRequest(): boolean | null {
    return this.isCancelCreateRequest.getValue();
  }

  getLoadDocumentsFromGESTCLIE(): boolean | null {
    return this.loadDocumentsFromGESTCLIE.getValue();
  }

  getInvalidFields(): string[] {
    return this.invalidFields;
  }

  getMissingRequiredDocuments(): string[] {
    return this.missingRequiredDocuments;
  }

  getRepresentedByAgent(): string {
    return this.representedByAgent;
  }

  getRequestType(): string {
    return this.requestType;
  }

  // Setter

  setIdDocumentation(newId: string | null): void {
    this.idDocumentationSubject.next(newId);
  }

  setIsAcceptCreateRequest(newAction: boolean): void {
    this.isAcceptCreateRequest.next(newAction);
  }

  setIsCancelCreateRequest(action: boolean): void {
    this.isCancelCreateRequest.next(action);
  }

  setTimeSaveDocuments(date: string): void {
    this.timeSaveDocuments = date;
  }

  setLoadDocumentsFromGESTCLIE(action: boolean): void {
    this.loadDocumentsFromGESTCLIE.next(action);
  }

  setInvalidFields(fields: string[]) {
    if (Array.isArray(fields)) {
      this.invalidFields = fields;
    }
  }

  setMissingRequiredDocuments(documents: string[]) {
    if (Array.isArray(documents)) {
      this.missingRequiredDocuments = documents;
    }
  }

  setRepresentedByAgent(representedByAgent: string): void {
    this.representedByAgent = representedByAgent;
  }

  setRequestType(requestType: string): void {
    this.requestType = requestType;
  }

  // reset

  resetIdDocumentation(): void {
    this.idDocumentationSubject.next(null);
  }

  resetIsAcceptCreateRequest(): void {
    this.isAcceptCreateRequest.next(null);
  }

  resetTimeSaveDocuments(): void {
    this.timeSaveDocuments = '';
  }

  resetIsCancelCreateRequest(): void {
    this.isCancelCreateRequest.next(null);
  }

  resetLoadDocumentsFromGESTCLIE(): void {
    this.loadDocumentsFromGESTCLIE.next(null);
  }

  resetAllProperties(): void {
    this.idDocumentationSubject.next(null);
    this.isAcceptCreateRequest.next(null);
    this.isCancelCreateRequest.next(false);
    this.loadDocumentsFromGESTCLIE.next(false);
    this.timeSaveDocuments = '';
    this.invalidFields = [];
    this.missingRequiredDocuments = [];
    this.representedByAgent = '';
    this.requestType = '';
  }
}
