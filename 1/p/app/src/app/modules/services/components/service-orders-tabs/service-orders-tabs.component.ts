import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription, of, takeUntil } from 'rxjs';
import { IDocumentRouteData } from 'src/app/core/interfaces/document-type-file-route.interfaces';
import { servicesOrderFeatureSelector } from 'src/app/state/service-order/service-order.selectors';
import { IServiceOrderStore } from '../../interfaces/service-order-store.interface';

@Component({
  selector: 'app-service-orders-tabs',
  templateUrl: './service-orders-tabs.component.html',
  styleUrls: ['./service-orders-tabs.component.css']
})
export class ServiceOrdersTabsComponent implements OnInit, OnDestroy {
  public routerSubscription: Subscription = new Subscription();
  public destroy$: Subject<void> = new Subject<void>();

  public routeData: IDocumentRouteData = { documentation_module : '' };
  

  public nbr: string = '';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store
  ){}

  ngOnInit(): void {
    this.routerSubscription = this.activatedRoute.data
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (data) => {
        this.routeData = data as IDocumentRouteData;
      },
    });

    this.store.select(servicesOrderFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (servicesOrderStore: IServiceOrderStore) => {
        this.nbr= servicesOrderStore.searchedCriteria?servicesOrderStore.searchedCriteria:'';
      },
      error: error => console.error(error)
    });
  }

  public consigneeValid(): Observable<boolean>{
    return of(true);

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
