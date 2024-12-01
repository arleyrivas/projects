import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  [x: string]: any;
  creditNotes: string,
  invoices: string,
  creditNotesTotal: number,
  invoicesTotal: number,
}

@Component({
  selector: 'app-credit-notes-confirm',
  templateUrl: './credit-notes-confirm.component.html',
  styleUrls: ['./credit-notes-confirm.component.css']
})
export class CreditNotesConfirmComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  public factura(param: any) {
    return param.map((o: any) => o.finalNumber).join()
  }

  public nota(param: any) {
    return param.map((o: any) => o.final_nbr).join()
  }
}
