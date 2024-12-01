import { Component, OnInit, AfterViewInit } from '@angular/core';

import { MatDialog } from "@angular/material/dialog";
import { Store } from '@ngrx/store';
import { LegalNoticesDialogComponent } from 'src/app/shared/components/legal-notices-dialog/legal-notices-dialog.component';
import { retrieveApiGatewayData } from 'src/app/state/api-gateway/api-gateway.actions';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { retrieveUser } from 'src/app/state/user/user.actions';
import { userFeatureSelector } from 'src/app/state/user/user.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

  constructor(
    private readonly matDialog: MatDialog,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(retrieveApiGatewayData());
  }

  ngAfterViewInit(): void {

  }
}
