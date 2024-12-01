import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface IOptionSelected {
  selectOption: string;
  isAgent: boolean;
}
@Component({
  selector: 'app-message-edit-customer-dialog',
  templateUrl: './message-edit-customer-dialog.component.html',
  styleUrls: ['./message-edit-customer-dialog.component.css']
})
export class MessageEditCustomerDialogComponent implements OnInit {
  message: string = '';
  constructor(
    public dialogRef: MatDialogRef<MessageEditCustomerDialogComponent>,
   @Inject(MAT_DIALOG_DATA) public dialogData: IOptionSelected,
 ){}
 
 ngOnInit(): void {
   
      if(this.dialogData.selectOption == 'myCompany' || !this.dialogData.isAgent ){
        this.message = $localize`:@@947831f6e4ce9da20c3c1bbcf5sf151ad3663dddd8ace484cebfce11c70c224ad: module.business.management.customer.management.form.confirm.text.action.edit.my.company`;
      }else{
        this.message = $localize`:@@581176f6e4ce9da20c3c1bbcf5151ad3663dddd8ace484cebfce11c70c225be2: module.business.management.customer.management.form.confirm.text.action.edit`;
      }

  }
}
