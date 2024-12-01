import { Component, Input } from '@angular/core';
import { IInvoiceManage } from 'src/app/core/interfaces/invoice-manage.interface';

@Component({
  selector: 'app-invoice-management',
  templateUrl: './invoice-management.component.html',
  styleUrls: ['./invoice-management.component.css']
})
export class InvoiceManagementComponent {

  @Input() public invoice!: IInvoiceManage;

  constructor() { }
}
