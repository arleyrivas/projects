import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICSGeneratePinResult, ICSGeneratePinUnit, IGeneratePinResult, pinsMockup } from '../generate-pin/generate-pin-mockup.component';
import { ITruckPinPinContainerized } from 'src/app/core/interfaces/truck-pin-pin-containerized.interface';
import { ITruckPin } from 'src/app/core/interfaces/truck-pin.interface';
import * as moment from 'moment';

interface IGeneratePinResultDialog {
  pins: ITruckPin;
}

@Component({
  selector: 'app-generate-pin-result',
  templateUrl: './generate-pin-result.component.html',
  styleUrls: ['./generate-pin-result.component.css']
})
export class GeneratePinResultComponent implements OnInit {
  public pins!: ICSGeneratePinResult;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: IGeneratePinResultDialog) {}

  ngOnInit(): void {
    this.pins = {
      pin: this.dialogData.pins.pinNbr,
      nbr: this.dialogData.pins.blNbr,
      createdAt: this.dialogData.pins.createdAt,
      units: this.dialogData.pins.pinContainerized.map((value) => ({
        quantity: value.cargoQuantity as number,
        weight: value.cargoWeigth as number,
        destination: value.destination || "Sin Destino",
        shipper: value.truckingCompanyNameLDAP
      }))
    };
  }

  public defaultDateformat(date: string): string {
    return moment(date, "DD-MM-YYYY").format("YYYY/MM/DD");
  }
}
