import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-pay',
  templateUrl: './dialog-pay.component.html',
  styleUrls: ['./dialog-pay.component.css']
})

export class DialogPayComponent {

  public displayedColumns: Array<string> = ["invoice", "account", "credit", "amount"];
  public dataSource: Array<any> = [];
  public total: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(){
    this.dataSource.push(this.data.fac.fac);
    this.total = this.dataSource.reduce((acc, item) => acc = acc + parseFloat(item.totalTotal), 0);
  }
}
