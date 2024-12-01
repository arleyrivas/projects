import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IHistoryCrossInvoice } from 'src/app/core/interfaces/history-cross-invoice.interface';
import { IHistoryCross } from 'src/app/core/interfaces/history-cross.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { cleanHistoryCrosses, getHistoryCross } from 'src/app/state/history-cross/history-cross.actions';
import { historyCrossFeatureSelector } from 'src/app/state/history-cross/history-selectors';
import { cleanCustomer } from 'src/app/state/shared/shared.actions';
import { v4 } from "uuid";

@Component({
  selector: 'app-history-cross',
  templateUrl: './history-cross.component.html',
  styleUrls: ['./history-cross.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class HistoryCrossComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  public page: number = 0;
  public selectedHistoryCrossInvoice: IHistoryCrossInvoice | null = null;
  public displayedColumns: string[] = [];
  public dataSource: any = new MatTableDataSource([]);
  public historyCrossSubscription: Subscription = new Subscription();
  public userInfo!: IAPIGatewayStore;
  public customer: string | null = null;
  public selectedCustomer: string | null = null;
  public role: string | null = null;
  public isAgent: boolean = false;

  constructor(
    private readonly store: Store,
    private readonly matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => {
        this.userInfo = APIGatewatStore;
        this.isAgent = APIGatewatStore.empresa?.tiposEmpresas.filter((value) => value.selected)[0].companyTypeId === "06";
        this.role = this.isAgent ? "AGENT" : "SHIPPER";

        this.selectedCustomer = this.userInfo.empresa?.id + "/" + this.userInfo.userName

        this.store.dispatch(cleanHistoryCrosses());
        this.store.dispatch(getHistoryCross({
          customer: this.selectedCustomer.split("/")[0] as string,
          role: this.role,
          page: 0
        }));
      },
      error: error => console.error(error)
    });

    this.historyCrossSubscription = this.store.select(historyCrossFeatureSelector).subscribe({
      next: store => {
        const initialElement = store.result;
        let finalInvoices: IHistoryCrossInvoice[] = [];

        initialElement.forEach(historyCross => {
            historyCross.invoices.forEach((element: IHistoryCrossInvoice) => {
                element.agentShip = historyCross.agentShip;
                element.tranDate = historyCross.tranDate;
                element.transNbr = historyCross.transNbr;

                finalInvoices = [...finalInvoices, element];
            });
        });

        this.displayedColumns = ['transNbr', 'finalNbr', 'tranDate', 'amount', 'balance', 'agentShip', 'Estado'];
        this.dataSource = new MatTableDataSource(finalInvoices);
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (item: any, property: any) => {
          switch (property) {
            case 'tranDate': {
              let newDate = new Date(item.tranDate);
              return newDate;
            }
            default: {
              return item[property];
            }
          }
        };
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.historyCrossSubscription.unsubscribe();
    this.store.dispatch(cleanHistoryCrosses());
  }

  public customerSearch(value: string): void {
    this.customer = value;

    if(!value) {
      this.store.dispatch(cleanCustomer());
    }
  }

  public selectCustomer(): void {
    if(this.customer && this.customer.split("/")[1]) {
      this.selectedCustomer = this.customer;
      this.role = "SHIPPER";

      this.page = 0;
      this.store.dispatch(cleanHistoryCrosses());
      this.store.dispatch(getHistoryCross({ customer: this.selectedCustomer?.split("/")[0], role: this.role as string, page: this.page }));
    } else {
      this.store.dispatch(cleanHistoryCrosses());
      this.store.dispatch(getHistoryCross({
        customer: this.userInfo.empresa?.id as string,
        role: "AGENT",
        page: 0
      }));
    }
  }

  public loadMore(): void {
    if(this.selectedCustomer && this.selectedCustomer?.split("/")[1]) {
      this.page = this.page + 1;
      this.store.dispatch(getHistoryCross({ customer: this.selectedCustomer?.split("/")[0], role: this.role as string, page: this.page }));
    }
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public toggleRow(element: any) {
      element.selected = !element.selected
  }
}
