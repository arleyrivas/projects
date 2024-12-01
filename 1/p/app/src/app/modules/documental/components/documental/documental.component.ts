import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPagination } from 'src/app/core/interfaces/pagination.interface';
import { cleanDocumentations, clearRequestTime, closeDocumentationInformation, getAllDocumentation, getDocumentationInformation, resetDocumentations } from 'src/app/state/documental/documental.actions';
import { documentalSelector } from 'src/app/state/documental/documental.selectors';
import { next, reset } from 'src/app/state/pagination/pagination.actions';
import { paginationFeatureSelector } from 'src/app/state/pagination/pagination.selectors';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-documental',
  templateUrl: './documental.component.html',
  styleUrls: ['./documental.component.css']
})
export class DocumentalComponent implements OnDestroy {

  public count: number = 0;
  public paginationSubscription: Subscription = new Subscription();

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.paginationSubscription = this.store.select(paginationFeatureSelector).subscribe({
      next: (pagination: IPagination) => {
        this.store.dispatch(getAllDocumentation({ pagination }));
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.paginationSubscription.unsubscribe();

    this.store.dispatch(closeDocumentationInformation());
    this.store.dispatch(cleanDocumentations());
    this.store.dispatch(reset());
    this.store.dispatch(clearRequestTime());
  }

  public loadMore(): void {
    this.store.dispatch(next());
  }
}
