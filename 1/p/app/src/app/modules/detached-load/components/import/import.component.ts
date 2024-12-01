import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getDataUnitNbr } from 'src/app/state/containerized-load/containerized-load.actions';
import { containerizedLoadFeatureSelector, selectDataUnitNbr } from 'src/app/state/containerized-load/containerized-load.selectors';
import { privileges } from "../../../../core/privileges.enum";
import { MatDialog } from '@angular/material/dialog';
import { DialogPayComponent } from '../dialog-pay/dialog-pay.component';
import { cleanPdfFile, cleanPdfInvoice, getPdfInvoice } from 'src/app/state/shared/shared.actions';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { UtilService } from 'src/app/shared/services/util.service';
import { CommunicationService } from '../../services/communication.service';
import { SelectedInvoiceComponent } from 'src/app/modules/billing/components/selected-invoice/selected-invoice.component';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IInvoiceProforma } from 'src/app/core/interfaces/invoice-proforma.interface';
import { IContainerizedLoad } from 'src/app/core/interfaces/containerized-load.interface';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { IInvoiceProformaTable } from 'src/app/core/interfaces/invoice-proforma-table.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { detachedLoadFeatureSelector } from 'src/app/state/detached-load/detached-load.selectors';
import { IDetachedLoadStore } from 'src/app/core/interfaces/detached-load-store.interface';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { IInvoiceProformaParameter } from 'src/app/core/interfaces/invoice-proforma-parameter.interface';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  public destroy$: Subject<void> = new Subject<void>();
  public privileges: typeof privileges = privileges;
  public invoices: IInvoiceProforma[] = [];
  public user!: IAPIGatewayStore;
  public invoiceBL: string = "";

  constructor(
    private readonly store: Store,
    private readonly matDialog: MatDialog,
    private readonly utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (apiGatewayStore: IAPIGatewayStore) => {
        this.user = apiGatewayStore;
      },
      error: error => console.error(error)
    });

    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe(next => {
      if(next.file) {
        window.open(this.utilService.pdfReceipt(next.file));
        this.store.dispatch(cleanPdfInvoice());
      }
    });

    this.store.select(detachedLoadFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IDetachedLoadStore) => {
        this.invoiceBL = result.result[0].hbl;
      },
      error: error => console.error(error)
    });

    this.store.select(containerizedLoadFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IContainerizedLoadStore) => {
        this.invoices = result.unitNbrData;
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  public pay(invoice: any[]): void {
    const payMatDialog = this.matDialog.open(SelectedInvoiceComponent, {
      data: {
        invoices: invoice,
        invoicesToPay: invoice.map(invoice => ({
          finalNbr: invoice.finalNumber,
          draftNbr: invoice.draftNumber,
          currency: invoice.currency,
          totalTotal: invoice.totalTotal
        })),
        clientID: this.user.userName
      }
    });
  }

  public print(invoice: string | null): void {
    this.store.dispatch(getPdfInvoice({ invoice: invoice as string }));
  }
}
