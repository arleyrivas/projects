import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { privileges } from 'src/app/core/privileges.enum';

@Component({
  selector: 'app-administration-user-options',
  templateUrl: './administration-user-options.component.html',
  styleUrls: ['./administration-user-options.component.css']
})
export class AdministrationUserOptionsComponent implements OnInit {

  public privileges: typeof privileges = privileges;
  public createForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.createForm = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.pattern(/^[a-z\s\u00E0-\u00FC\u00f1\u00d1]*$/i)]),
      identification: new FormControl("", [Validators.required, Validators.pattern(/^\d+$/)]),
      name: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern(/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/)]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^\d+$/)]),
      charge: new FormControl("", [Validators.required]),
      enterprise: new FormControl("", [Validators.required]),
      Notification: new FormControl(false, [Validators.required, Validators.pattern(/^\d+$/)]),
      notificationPhone: new FormControl("", [Validators.required])
    });
  }

  public submit(): void {
  }
}
