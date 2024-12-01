import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IGeneratePinResult, IGeneratePinUnit } from '../generate-pin/generate-pin-mockup.component';

@Component({
  selector: 'app-generate-pin-result-item',
  templateUrl: './generate-pin-result-item.component.html',
  styleUrls: ['./generate-pin-result-item.component.css']
})
export class GeneratePinResultItemComponent implements OnInit {
  @ViewChild(MatSort) public sort!: MatSort;
  @Input() public pin!: IGeneratePinResult;
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<IGeneratePinUnit> = new MatTableDataSource<IGeneratePinUnit>([]);

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = ["unit", "size", "shipper"];
    this.dataSource = new MatTableDataSource<IGeneratePinUnit>(this.pin.units);
    this.dataSource.sort = this.sort;
  }
}
