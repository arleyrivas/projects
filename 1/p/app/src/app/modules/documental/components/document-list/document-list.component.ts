import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IDocumentalStore } from 'src/app/core/interfaces/documental-store.interface';
import { IDocumentation } from 'src/app/core/interfaces/documentation.interface';
import { clearRequestTime, getDocumentationInformation, saveRequestTime } from 'src/app/state/documental/documental.actions';
import { documentalSelector, selectDocumentations } from 'src/app/state/documental/documental.selectors';
import { DocumentalService } from '../../services/documental.service';
import { IUser } from 'src/app/core/interfaces/user.interface';
import * as moment from "moment-timezone"
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  public documentsSubscription: Subscription = new Subscription();
  public documentations: IDocumentation[] = [];
  public userSubscription: Subscription = new Subscription();
  public userInfo!: IAPIGatewayStore;
  public documentSelectedID: string = "";

  constructor(
    private readonly store: Store,
    private readonly ngxSpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.documentsSubscription = this.store.select(selectDocumentations).subscribe({
      next: (documentations: IDocumentation[]) => {
        this.documentations = documentations;
        this.ngxSpinnerService.hide()
      },
      error: error => console.error(error)
    });

    this.userSubscription = this.store.select(apiGatewayFeatureSelector).subscribe({
      next: user => this.userInfo = user,
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.documentsSubscription.unsubscribe();
  }

  public showInformation(document: IDocumentation): void {
    this.store.dispatch(getDocumentationInformation({ document }));

    this.store.dispatch(saveRequestTime({
      requestTime: {
        user: this.userInfo.userName,
        name: this.userInfo.nombres,
        date_begin: moment().tz("America/Bogota").format("YYYY/MM/DD HH:mm:ss"),
        date_end: "",
        end_state: null
      }
    }));

    this.documentSelectedID = document.id;
  }
}
