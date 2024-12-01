import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { IInvoiceProforma } from 'src/app/core/interfaces/invoice-proforma.interface';
import { getPdfInvoice } from 'src/app/state/shared/shared.actions';
import { IInvoiceProformaTable } from '../invoice-resume/invoice-resume.component';
import { SelectedInvoiceComponent } from 'src/app/modules/billing/components/selected-invoice/selected-invoice.component';
import { privileges } from 'src/app/core/privileges.enum';
import { IInvoiceProformaParameter } from 'src/app/core/interfaces/invoice-proforma-parameter.interface';
import * as moment from 'moment';
import { IDetachedLoadStore } from 'src/app/core/interfaces/detached-load-store.interface';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute, Data } from '@angular/router';
import { detachedLoadFeatureSelector } from 'src/app/state/detached-load/detached-load.selectors';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { InvoicePrintMessageComponent } from '../invoice-print-message/invoice-print-message.component';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.css']
})
export class InvoiceItemComponent {
  public destroy$: Subject<void> = new Subject<void>();
  public privileges: typeof privileges = privileges;
  @Input("invoice") public invoiceProforma!: IInvoiceProforma;
  @Input("user") public currentUser!: string;
  public dataSource: MatTableDataSource<IInvoiceProformaTable> = new MatTableDataSource<IInvoiceProformaTable>([]);
  public displayedColumns: string[] = [];
  public accumulatedDataSource: IInvoiceProformaTable[] = [];
  public detached: boolean = false;
  public selectedCustomer: string | null = null;

  constructor(
    private readonly store: Store,
    private readonly matDialog: MatDialog,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value: Data) => {
        this.detached = value["detached"];

        if(this.detached) {
          this.store.select(detachedLoadFeatureSelector).pipe(
            takeUntil(this.destroy$)
          ).subscribe({
            next: (result: IDetachedLoadStore) => {
              if(result.selectedCustomer) {
                this.selectedCustomer = result.selectedCustomer?.split("/")[1] as string;
              } else if(result.result[0].consigneeName) {
                this.selectedCustomer = result.result[0].consigneeName;
              }

              if(this.invoiceProforma) {
                let dataSource: IInvoiceProformaTable[] = [];
                let accumulatedDataSource: IInvoiceProformaTable[] = [];

                  dataSource = this.invoiceProforma.charges.charge.map((element) => ({
                      container: result.result[0].hbl,
                      description: element.description,
                      quantity: element.quantity.toString(),
                      amount: (element.amount + element.taxes.tax[0].amount).toString()
                  }));

                  dataSource.forEach((element: IInvoiceProformaTable) => {
                      let currentDescription = element.description;
                      let isAccumulated = false;

                      isAccumulated = !!accumulatedDataSource.filter((element: IInvoiceProformaTable) => element.description === currentDescription).length;

                      if(isAccumulated) {
                          accumulatedDataSource = accumulatedDataSource.map((accumulatedElement: IInvoiceProformaTable) => {
                              const newElement: IInvoiceProformaTable = Object.assign({}, accumulatedElement);

                              if(accumulatedElement.description === element.description) {
                                newElement.quantity = (parseInt(element.quantity) + parseInt(accumulatedElement.quantity)).toString();
                                newElement.amount = (parseInt(element.amount) + parseInt(accumulatedElement.amount)).toString();
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
              if(result.selectedCustomer) {
                this.selectedCustomer = result.selectedCustomer?.split("/")[1] as string;
              } else if (result.result.length > 0 &&   result.result[0].consigneeName) {
                
                this.selectedCustomer = result.result[0].consigneeName;
              } else if (this.invoiceProforma && this.invoiceProforma.customer) {
                this.selectedCustomer = this.invoiceProforma.customer.name;
              }

              if(this.invoiceProforma) {
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
        clientID: this.currentUser
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
        this.store.dispatch(getPdfInvoice({ invoice: invoice as string }));

      },
      error: error => console.error(error)
    });
  }

  public formatearFecha(date: number): string {
    return moment(date).format("Y/MM/DD");
  }
}
