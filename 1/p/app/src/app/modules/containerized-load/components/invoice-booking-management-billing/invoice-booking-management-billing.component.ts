import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { ICustomer } from 'src/app/core/dto/customer.dto';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IBookingInterface } from 'src/app/core/interfaces/booking.interface';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { cleanQueryResult, getExecuteQuery } from 'src/app/state/queries/queries.actions';
import { cleanCustomer, cleanSelectedAgent, cleanSelectedCustomer } from 'src/app/state/shared/shared.actions';
import { ClientMessageAgreementDialogComponent } from '../client-message-agreement-dialog/client-message-agreement-dialog.component';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { queriesFeatureSelector } from 'src/app/state/queries/queries.selectors';
import { IQueriesStore } from 'src/app/core/interfaces/queries-store.interface';
import { cleanBillingData, getInvoiceCreate, getUpdateAgentAndConsigneeInBl, setSelectedContainers, setSelectedCustomer } from 'src/app/state/containerized-load/containerized-load.actions';
import * as moment from 'moment';

@Component({
  selector: 'app-invoice-booking-management-billing',
  templateUrl: './invoice-booking-management-billing.component.html',
  styleUrls: ['./invoice-booking-management-billing.component.css']
})
export class InvoiceBookingManagementBillingComponent {
  @Input() public detached: boolean = false;
  @ViewChildren("containerCheckbox") public containersCheckboxes!: QueryList<MatCheckbox>;
  public destroy$: Subject<void> = new Subject<void>();
  public invoiceManagementBillingFormGroup: FormGroup = new FormGroup({});
  public readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  public displayedColumns: string[] = [];
  public emails: string[] = [];
  public customerId: string = "";
  public customerName: string = "";
  public selectedCustomer: string = "";
  public selectedContainers: IBookingInterface[] = [];
  public containers: IBookingInterface[] = [];
  public clientMessageAgreement: boolean = true;
  public currentUser!: IAPIGatewayStore;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly matDialog: MatDialog,
    private readonly store: Store,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly matSnackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.store.dispatch(cleanBillingData());
    this.store.dispatch(cleanSelectedCustomer());
    this.store.dispatch(cleanSelectedAgent());

    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IAPIGatewayStore) => {
        this.currentUser = result;
      },
      error: (error) => console.error(error)
    });

    this.store.select(containerizedLoadFeatureSelector).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result: IContainerizedLoadStore) => {
          this.customerId = result.resultBooking[0].shipperId;
          this.customerName = result.resultBooking[0].shipperName;
          this.containers = result.resultBooking.filter(value => value.yard);

          if(this.customerId) {
            this.store.dispatch(getExecuteQuery({
              payload: {
                "queryName": "getListEmailBilling",
                "parameters": [
                  {
                    "parameterId": 1,
                    "value": this.customerId,
                    "type": "String"
                  }
                ]
              }
            }));
          }

          if(result.resultBooking[0].onAccount) {
            if(this.clientMessageAgreement) {
              this.matDialog.open(ClientMessageAgreementDialogComponent, {
                width: "25rem"
              });

              this.clientMessageAgreement = false;
            }
          }


          this.displayedColumns = ["selected", "number", "unitNbr", "twenty"];
          this.dataSource = new MatTableDataSource<any>(this.containers);
        },
        error: error => console.error(error)
      });

    this.store.select(queriesFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IQueriesStore) => {
        if(result.result?.result.length) {
          this.emails = result.result.result[0].email_address.split(";");
        }
      },
      error: error => console.error(error)
    });

    this.invoiceManagementBillingFormGroup = new FormGroup({
      observations: new FormControl({ value: "", disabled: false }, [Validators.maxLength(250)])
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    this.store.dispatch(cleanQueryResult());
    this.store.dispatch(cleanCustomer());
    this.store.dispatch(cleanSelectedCustomer());
  }

  public submit(): void {
      if(this.selectedContainers.length) {
        this.store.dispatch(setSelectedCustomer({
          customer: `${this.customerId}/${this.customerName}`
        }))

        this.store.dispatch(setSelectedContainers({
          containers: this.selectedContainers
        }))

        this.store.dispatch(getInvoiceCreate({
          body: {
            bkg: this.selectedContainers[0].nbr,
            bl: null,
            customerId: this.customerId,
            date: null,
            units: this.selectedContainers.map((value: IBookingInterface) => value.unitNbr),
            notes: this.invoiceManagementBillingFormGroup.controls["observations"].value
          }
        }));

        this.router.navigate(["/", "carga-contenerizada", "export", "proforma"]);
    }
  }

  public cancel(): void {
    this.store.dispatch(cleanQueryResult());
    this.store.dispatch(cleanSelectedCustomer());

    let url: string[] = this.router.url.split("/");
    url.pop();

    this.router.navigate(url);
  }

  public matCheckboxSelectAllChange(event: MatCheckboxChange): void {
    if(event.checked) {
      this.containersCheckboxes.toArray().forEach((result: MatCheckbox) => {
        result.checked = true;
      });

      this.selectedContainers = this.containers;
    } else {
      this.containersCheckboxes.toArray().forEach((result: MatCheckbox) => {
        result.checked = false;
      });

      this.selectedContainers = [];
    }
  }

  public matCheckboxChange(event: MatCheckboxChange, container: IBookingInterface): void {
    if(event.checked) {
      this.selectedContainers = [...this.selectedContainers, container];
    } else {
      this.selectedContainers = this.selectedContainers.filter((value: IBookingInterface) => value.unitNbr != container.unitNbr);
    }
  }
}
