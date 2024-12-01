import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { IInvoiceProforma } from 'src/app/core/interfaces/invoice-proforma.interface';
import { privileges } from 'src/app/core/privileges.enum';
import { UtilService } from 'src/app/shared/services/util.service';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { cleanPdfInvoice } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';

@Component({
  selector: 'app-exportacion',
  templateUrl: './exportacion.component.html',
  styleUrls: ['./exportacion.component.css']
})
export class ExportacionComponent  implements OnInit{
  public privileges: typeof privileges = privileges;
  public destroy$: Subject<void> = new Subject<void>();
  public user!: IAPIGatewayStore;
  public invoices: IInvoiceProforma[] = [];
  public invoiceBL: string = "";

  constructor(
    private readonly store: Store,
    private readonly utilService: UtilService) {
      
  }

  ngOnInit(): void {
    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe(next => {
      if(next.file) {
        window.open(this.utilService.pdfReceipt(next.file));
        this.store.dispatch(cleanPdfInvoice());
      }
    });

    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (apiGatewayStore: IAPIGatewayStore) => {
        this.user = apiGatewayStore;
      },
      error: error => console.error(error)
    });

    this.store.select(containerizedLoadFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IContainerizedLoadStore) => {
        this.invoiceBL = result.selectedUnit as string;
        this.invoices = result.unitNbrData;
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
