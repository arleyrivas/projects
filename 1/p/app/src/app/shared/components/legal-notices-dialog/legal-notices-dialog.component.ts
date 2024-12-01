import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { FormGroup, FormControl } from "@angular/forms";
import { Store } from '@ngrx/store';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-legal-notices-dialog',
  templateUrl: './legal-notices-dialog.component.html',
  styleUrls: ['./legal-notices-dialog.component.css']
})
export class LegalNoticesDialogComponent implements OnInit {
  public userInfo: Observable<IAPIGatewayStore> = new Observable();
  public valid: boolean = false;
  public acceptCheckboxes: FormGroup = new FormGroup({
    accept1: new FormControl(false),
    accept2: new FormControl(false)
  });

  constructor(
    private readonly location: Location,
    private readonly store: Store
  ) {}

  public ngOnInit(): void {
    this.userInfo = this.store.select(apiGatewayFeatureSelector);

    this.acceptCheckboxes.valueChanges.subscribe({
      next: values => this.valid = values.accept1 && values.accept2,
      error: error => console.error(error)
    });
  }

  public back(): void {
    location.href = "/portal/logout";
  }
}
