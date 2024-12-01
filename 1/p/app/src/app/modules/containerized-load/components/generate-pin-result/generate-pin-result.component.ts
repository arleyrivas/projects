import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IGeneratePinResult, pinsMockup } from '../generate-pin/generate-pin-mockup.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ITruckPin } from 'src/app/core/interfaces/truck-pin.interface';
import * as moment from 'moment';

interface IGeneratePinResultDialog {
  pins: ITruckPin[]
}

@Component({
  selector: 'app-generate-pin-result',
  templateUrl: './generate-pin-result.component.html',
  styleUrls: ['./generate-pin-result.component.css']
})
export class GeneratePinResultComponent implements OnInit {
  public pins: IGeneratePinResult[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: IGeneratePinResultDialog) {}

  ngOnInit(): void {
    if(this.dialogData.pins.length) this.pins = this.dialogData.pins.map((value: ITruckPin) => ({
      pin: value.pinNbr,
      units: value.pinContainerized.map((pinValue) => ({
        unit: pinValue.unitNbr,
        size: pinValue.twenty ? "20" : "40",
        shipper: pinValue.truckingCompanyNameLDAP,
        active: pinValue.active
      }))
    }));
  }

  public defaultDateformat(date: string): string {
    return moment(date, "DD-MM-YYYY").format("YYYY/MM/DD");
  }
}
