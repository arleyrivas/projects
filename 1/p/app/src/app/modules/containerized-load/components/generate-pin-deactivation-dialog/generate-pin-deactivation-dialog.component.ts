import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

interface IGeneratePinDeactivationDialog {
  multiple: boolean;
  unit: string;
}

@Component({
  selector: 'app-generate-pin-deactivation-dialog',
  templateUrl: './generate-pin-deactivation-dialog.component.html',
  styleUrls: ['./generate-pin-deactivation-dialog.component.css']
})
export class GeneratePinDeactivationDialogComponent implements OnInit {
  public observationFormControl: FormControl = new FormControl();
  public message: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: IGeneratePinDeactivationDialog) {}

  ngOnInit(): void {
    this.observationFormControl = new FormControl({ value: "", disabled: false }, [Validators.required, Validators.minLength(20), Validators.maxLength(250)]);

    this.message = this.dialogData.multiple ? "El pin se anulará, Indique el motivo:" : `El Contenedor ${this.dialogData.unit} será eliminado del pin, indique el motivo:`;
  }
}
