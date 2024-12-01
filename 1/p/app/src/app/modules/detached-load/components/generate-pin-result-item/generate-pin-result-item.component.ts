import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICSGeneratePinUnit, IGeneratePinResult, IGeneratePinUnit } from '../generate-pin/generate-pin-mockup.component';

@Component({
  selector: 'app-generate-pin-result-item',
  templateUrl: './generate-pin-result-item.component.html',
  styleUrls: ['./generate-pin-result-item.component.css']
})
export class GeneratePinResultItemComponent implements OnInit {
  @ViewChild(MatSort) public sort!: MatSort;
  @Input() public pinNumber!: string;
  @Input() public pin!: ICSGeneratePinUnit[];
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<ICSGeneratePinUnit> = new MatTableDataSource<ICSGeneratePinUnit>([]);

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = ["id", "weight", "quantity", "shipper"];
    this.dataSource = new MatTableDataSource<ICSGeneratePinUnit>(this.pin);
    this.dataSource.sort = this.sort;
  }
}
