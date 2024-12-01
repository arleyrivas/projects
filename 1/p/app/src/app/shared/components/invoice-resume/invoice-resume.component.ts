import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { IContainerizedLoad } from 'src/app/core/interfaces/containerized-load.interface';
import { IDetachedLoadStore } from 'src/app/core/interfaces/detached-load-store.interface';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { IInvoiceProforma } from 'src/app/core/interfaces/invoice-proforma.interface';
import { privileges } from 'src/app/core/privileges.enum';
import { SelectedInvoiceComponent } from 'src/app/modules/billing/components/selected-invoice/selected-invoice.component';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { detachedLoadFeatureSelector } from 'src/app/state/detached-load/detached-load.selectors';
import { cleanPdfInvoice, getPdfInvoice } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { UtilService } from '../../services/util.service';
import * as moment from 'moment';
import { IInvoiceProformaParameter } from 'src/app/core/interfaces/invoice-proforma-parameter.interface';
import { InvoicePrintMessageComponent } from '../invoice-print-message/invoice-print-message.component';

export interface IInvoiceProformaTable {
  container: string;
  description: string;
  quantity: string;
  amount: string;
}

@Component({
  selector: 'app-invoice-resume',
  templateUrl: './invoice-resume.component.html',
  styleUrls: ['./invoice-resume.component.css']
})
export class InvoiceResumeComponent implements OnInit, OnDestroy {
  public privileges: typeof privileges = privileges;
  public destroy$: Subject<void> = new Subject<void>();
  public detached: boolean = false;
  public export: boolean = false;
  public invoiceProforma: IInvoiceProforma | null = null;
  public selectedContainers: any[] = [];
  public selectedUnits: IDetachedLoad[] = [];
  public selectedCustomer: string | null = null;
  public invoice!: string;
  public charges: boolean = true;
  public dataSource: MatTableDataSource<IInvoiceProformaTable> = new MatTableDataSource<IInvoiceProformaTable>([]);
  public displayedColumns: string[] = [];
  public accumulatedDataSource: IInvoiceProformaTable[] = [];
  public invoiceBL: string = "";
  public finalizeInvoice: string = "";

  constructor(
    private readonly store: Store,
    private readonly activatedRoute: ActivatedRoute,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly router: Router,
    private readonly matSnackBar: MatSnackBar,
    private readonly matDialog: MatDialog,
    private readonly utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe(next => {
      if(next.file) {
        window.open(this.utilService.pdfReceipt(next.file));
        this.store.dispatch(cleanPdfInvoice());
      }
    });

    this.activatedRoute.data.pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value: Data) => {
        this.detached = value["detached"];
        this.export = value["export"];

        if(this.detached) {
          this.store.select(detachedLoadFeatureSelector).pipe(
            takeUntil(this.destroy$)
          ).subscribe({
            next: (result: IDetachedLoadStore) => {
              this.invoiceProforma = result.invoiceProforma;
              this.selectedCustomer = result.selectedCustomer?.split("/")[1] as string;
              if(result.finalizeInvoice) this.invoice = result.finalizeInvoice as string;

              if(this.invoiceProforma) {
                  if (this.invoice && !this.invoiceProforma.finalNumber) {
                    this.invoiceProforma.finalNumber = this.invoice;
                  }
                  this.invoiceBL = this.invoiceProforma.parameters.parameter.filter((value: IInvoiceProformaParameter) => value.metafieldId === "bexuBlNbr")[0].value as string;
                  let dataSource: IInvoiceProformaTable[] = [];
                  let accumulatedDataSource: IInvoiceProformaTable[] = [];

                  dataSource = this.invoiceProforma.charges.charge.map((element) => ({
                      container: result.result[0].hbl,
                      description: element.description,
                      quantity: element.quantity.toString(),
                      amount: (element.amount + element.taxes.tax[0].amount).toString()
                  }));

                  dataSource.forEach((element: IInvoiceProformaTable) => {
                      let currentContainer = element.container;
                      let currentDescription = element.description;
                      let isAccumulated = false;

                      isAccumulated = !!accumulatedDataSource.filter((element: IInvoiceProformaTable) => {
                        if(element.container === currentContainer)
                          if(element.description === currentDescription)
                            return true;
                          else return false;
                        else return false;
                      }).length;

                      if(isAccumulated) {
                          accumulatedDataSource = accumulatedDataSource.map((accumulatedElement: IInvoiceProformaTable) => {
                              const newElement: IInvoiceProformaTable = Object.assign({}, accumulatedElement);

                              if(accumulatedElement.container === element.container) {
                                if(accumulatedElement.description === element.description) {
                                  newElement.quantity = (parseInt(element.quantity) + parseInt(accumulatedElement.quantity)).toString();
                                  newElement.amount = (parseInt(element.amount) + parseInt(accumulatedElement.amount)).toString();
                                }
                              }

                              return newElement;
                          });
                      } else {
                          accumulatedDataSource = [...accumulatedDataSource, element];
                      }
                  });

                  this.accumulatedDataSource = accumulatedDataSource;
                }
            },
            error: error => console.error(error)
          });
        } else {
          this.store.select(containerizedLoadFeatureSelector).pipe(
            takeUntil(this.destroy$)
          ).subscribe({
            next: (result: IContainerizedLoadStore) => {
              this.invoiceProforma = result.invoiceProforma;
              this.selectedContainers = result.selectedContainers;
              this.selectedCustomer = result.selectedCustomer?.split("/")[1] as string;

              if(this.invoiceProforma) {
                this.invoiceBL = this.invoiceProforma.parameters.parameter.filter((value: IInvoiceProformaParameter) => value.metafieldId === "bexuBlNbr")[0].value as string;
                let dataSource: IInvoiceProformaTable[] = [];
                let accumulatedDataSource: IInvoiceProformaTable[] = [];

                dataSource = this.invoiceProforma.charges.charge.map((element) => ({
                    container: element.entityId,
                    description: element.description,
                    quantity: element.quantity.toString(),
                    amount: (element.amount + element.taxes.tax[0].amount).toString()
                }));

                dataSource.forEach((element: IInvoiceProformaTable) => {
                    let currentContainer = element.container;
                    let currentDescription = element.description;
                    let isAccumulated = false;

                    isAccumulated = !!accumulatedDataSource.filter((element: IInvoiceProformaTable) => {
                      if(element.container === currentContainer)
                        if(element.description === currentDescription)
                          return true;
                        else return false;
                      else return false;
                    }).length;

                    if(isAccumulated) {
                        accumulatedDataSource = accumulatedDataSource.map((accumulatedElement: IInvoiceProformaTable) => {
                            const newElement: IInvoiceProformaTable = Object.assign({}, accumulatedElement);

                            if(accumulatedElement.container === element.container) {
                              if(accumulatedElement.description === element.description) {
                                newElement.quantity = (parseInt(element.quantity) + parseInt(accumulatedElement.quantity)).toString();
                                newElement.amount = (parseInt(element.amount) + parseInt(accumulatedElement.amount)).toString();
                              }
                            }

                            return newElement;
                        });
                    } else {
                        accumulatedDataSource = [...accumulatedDataSource, element];
                    }
                });

                this.accumulatedDataSource = accumulatedDataSource;
              }
            },
            error: error => console.error(error)
          });
        }
      },
      error: error => console.error(error)
    });
    
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  public pay(invoice: any[], numeroFactura:string = ''): void {
    const payMatDialog = this.matDialog.open(SelectedInvoiceComponent, {
      data: {
        invoices: invoice,
        invoicesToPay: invoice.map(invoice => ({
          finalNbr: invoice.finalNumber,
          draftNbr: invoice.draftNumber,
          currency: invoice.currency,
          totalTotal: invoice.totalTotal
        })),
        clientID: this.selectedCustomer?.split("/")[0]
      }
    });
  }
  

  public print(invoice: string | null): void {
    const matDialogRef = this.matDialog.open(InvoicePrintMessageComponent, {
      disableClose: true,
      width: "40rem"
    });

    matDialogRef.afterClosed().subscribe({
      next: () => {
        if(this.invoice) {
          this.store.dispatch(getPdfInvoice({ invoice: this.invoice as string }));
        } else {
          this.store.dispatch(getPdfInvoice({ invoice: invoice as string }));
        }
      },
      error: error => console.error(error)
    });
  }

  public formatearFecha(date: number): string {
    return moment(date).format("YYYY-MM-DD");
  }
}
