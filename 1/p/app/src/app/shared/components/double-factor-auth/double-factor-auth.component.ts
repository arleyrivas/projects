import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface IDialogData {
  message: string;
  destination: string;
  type: string;
  error: string;
}

@Component({
  selector: 'app-double-factor-auth',
  templateUrl: './double-factor-auth.component.html',
  styleUrls: ['./double-factor-auth.component.css']
})
export class DoubleFactorAuthComponent implements OnInit {

  public codeFormControl: FormControl = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogData) { }

  ngOnInit(): void {
    this.codeFormControl = new FormControl("", [Validators.required, Validators.minLength(6)]);
  }

  public get getCodeFormControl(): string {
    return this.codeFormControl.value;
  }
}
