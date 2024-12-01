import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Subject, takeUntil } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { ICreateBreakbulk } from 'src/app/core/dto/create-breakbulk.dto';
import { IInvoiceCreate } from 'src/app/core/dto/invoice-create.dto';
import { IBookingInterface } from 'src/app/core/interfaces/booking.interface';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { IContainerizedLoad } from 'src/app/core/interfaces/containerized-load.interface';
import { IDetachedLoadStore } from 'src/app/core/interfaces/detached-load-store.interface';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { IInvoiceProformaTable } from 'src/app/core/interfaces/invoice-proforma-table.interface';
import { IInvoiceProforma } from 'src/app/core/interfaces/invoice-proforma.interface';
import { privileges } from 'src/app/core/privileges.enum';
import { cleanBillingData, getCancelProformaContainerizedLoad, getFinalizeInvoice, getInvoiceCreate, getUpdateAgentAndConsigneeInBl } from 'src/app/state/containerized-load/containerized-load.actions';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { getCancelProformaDetachedLoad, cleanBillingData as CScleanBillingData, getCreateBreakbulk, getCreateBreakbulkDraft, getFinalizeBbkInvoice, getUpdateConsigneeCancelDraftBbk } from 'src/app/state/detached-load/detached-load.actions';
import { detachedLoadFeatureSelector } from 'src/app/state/detached-load/detached-load.selectors';
import { cleanQueryResult } from 'src/app/state/queries/queries.actions';
import { cleanSelectedAgent, cleanSelectedCustomer } from 'src/app/state/shared/shared.actions';

@Component({
  selector: 'app-invoice-proforma',
  templateUrl: './invoice-proforma.component.html',
  styleUrls: ['./invoice-proforma.component.css']
})
export class InvoiceProformaComponent implements OnInit, OnDestroy {
  public privileges: typeof privileges = privileges;
  public destroy$: Subject<void> = new Subject<void>();
  public detached: boolean = false;
  public export: boolean = false;
  public invoiceProforma: IInvoiceProforma | null = null;
  public selectedContainers: any[] = [];
  public selectedUnits: IDetachedLoad[] = [];
  public selectedCustomer: string | null = null;
  public estimatedDate: string = "";
  public charges: boolean = true;
  public dataSource: MatTableDataSource<IInvoiceProformaTable> = new MatTableDataSource<IInvoiceProformaTable>([]);
  public displayedColumns: string[] = [];

  constructor(
    private readonly store: Store,
    private readonly activatedRoute: ActivatedRoute,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly router: Router,
    private readonly matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
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
              this.selectedUnits = result.selectedUnits;
              this.selectedCustomer = result.selectedCustomer?.split("/")[1] as string;

              this.estimatedDate = moment(result.invoiceProforma?.paidThruDay).format("YYYY-MM-DD");

              if(this.invoiceProforma) {
                if(this.invoiceProforma.error) {
                  this.matSnackBar.open(
                    this.invoiceProforma?.error as string,
                    "",
                    {
                      verticalPosition: "top",
                      panelClass: ["error-snackbar"],
                      duration: 5000
                    }
                  );

                  this.router.navigate(["/", "carga-suelta"]);
                  this.store.dispatch(CScleanBillingData());
                  this.store.dispatch(cleanBillingData());
                  this.store.dispatch(cleanSelectedCustomer());
                  this.store.dispatch(cleanSelectedAgent());

                  this.charges = false;
                }

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

                this.displayedColumns = ["container", "description", "quantity", "amount"];
                this.dataSource = new MatTableDataSource<IInvoiceProformaTable>(accumulatedDataSource);
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
              this.estimatedDate = moment(result.invoiceProforma?.paidThruDay).format("Y/MM/DD");

              if(this.invoiceProforma) {
                if(this.invoiceProforma.error) {
                  this.matSnackBar.open(
                    this.invoiceProforma?.error as string,
                    "",
                    {
                      verticalPosition: "top",
                      panelClass: ["error-snackbar"],
                      duration: 5000
                    }
                  );

                  this.router.navigate(["/", "carga-contenerizada"]);
                  this.store.dispatch(CScleanBillingData());
                  this.store.dispatch(cleanBillingData());
                  this.store.dispatch(cleanSelectedCustomer());
                  this.store.dispatch(cleanSelectedAgent());

                  this.charges = false;
                }

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

                this.displayedColumns = ["container", "description", "quantity", "amount"];
                this.dataSource = new MatTableDataSource<IInvoiceProformaTable>(accumulatedDataSource);
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

  public submit(): void {
    if(this.detached) {
      this.store.dispatch(getFinalizeBbkInvoice({
        breakbulkDraft: this.invoiceProforma?.draftNumber.toString() as string
      }));

      this.router.navigate(["/", "carga-suelta", "resume"]);
    } else {
      this.store.dispatch(getFinalizeInvoice({
        body: this.invoiceProforma as IInvoiceProforma
      }));

      if(this.export) {
        this.router.navigate(["/", "carga-contenerizada", "export", "resume"]);
      } else {
        this.router.navigate(["/", "carga-contenerizada", "resume"]);
      }
    }
  }

  public cancel(): void {
    if(this.detached) {
      this.store.dispatch(cleanQueryResult());
      this.store.dispatch(cleanSelectedCustomer());
     if (this.selectedUnits.length > 0 && !this.selectedUnits[0].consigneeName) {
        this.store.dispatch(getUpdateConsigneeCancelDraftBbk({
          nbr: this.base64EncryptionUtilService.encrypt(this.selectedUnits[0].hbl)
        }));
     } 
      this.store.dispatch(getCancelProformaDetachedLoad({
        breakbulkDraft: this.invoiceProforma?.draftNumber.toString() as string,
        message: ""
      }));

      this.router.navigate(["/", "carga-suelta", "billing"]);
    } else {
      this.store.dispatch(cleanQueryResult());
      this.store.dispatch(cleanSelectedCustomer());

      if(!this.export) {
        if (this.selectedContainers.length > 0 && !this.selectedContainers[0].consigneeName) {
          this.store.dispatch(getUpdateAgentAndConsigneeInBl({
            body: {
              agentId: null,
              blNbr: this.export ? this.selectedContainers[0].nbr : this.selectedContainers[0].blNumber,
              loadAgentId: null,
              nitConsignee: "",
            }
          })); 
        }
        
        this.store.dispatch(getCancelProformaContainerizedLoad({
          body: this.invoiceProforma as IInvoiceProforma
        }));

        this.router.navigate(["/", "carga-contenerizada", "billing"]);
      } else {
        this.router.navigate(["/", "carga-contenerizada", "export", "billing"]);
      }
    }
  }
}
