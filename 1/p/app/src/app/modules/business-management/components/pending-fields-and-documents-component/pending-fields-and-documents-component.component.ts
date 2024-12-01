import { Component, OnInit } from '@angular/core';
import { StatesServiceBusinessManagement } from '../../services/states.service';

@Component({
  selector: 'app-pending-fields-and-documents-component',
  templateUrl: './pending-fields-and-documents-component.component.html',
  styleUrls: ['./pending-fields-and-documents-component.component.css'],
})
export class PendingFieldsAndDocumentsComponentComponent implements OnInit {
  invalidFields: string[] = [];
  missingRequiredDocuments: string[] = [];
  constructor(
    private statesServiceBusinessManagement: StatesServiceBusinessManagement
  ) {}

  ngOnInit(): void {
    this.invalidFields = this.statesServiceBusinessManagement.getInvalidFields();
    this.missingRequiredDocuments = this.statesServiceBusinessManagement.getMissingRequiredDocuments();
  }
}
