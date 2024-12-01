import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable, Subscription } from 'rxjs';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { IBillingStore } from 'src/app/core/interfaces/billing-store.interface';
import { IInvoice } from 'src/app/core/interfaces/invoices.interface';
import { UtilService } from 'src/app/shared/services/util.service';
import { cleanInvoices, getInvoices } from 'src/app/state/billing/billing.actions';
import { billingFeatureSelector } from 'src/app/state/billing/billing.selectors';
import { cleanCustomer, cleanPdfFile, cleanPdfInvoice, getPdfInvoice, getPrivilegeNotification, getSecondPassword } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { SelectedInvoiceComponent } from '../selected-invoice/selected-invoice.component';
import { privileges } from 'src/app/core/privileges.enum';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { getCheckLockedInvoices, getPayInvoices, getPaymentData, setCheckLockedInvoices, setInvoices, setPayInvoices } from 'src/app/state/payu/payu.actions';
import { payuFeatureSelector } from 'src/app/state/payu/payu.selectors';
import { IPayuStore } from 'src/app/core/interfaces/payu-store.interface';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';

interface IDateRange {
  from: string;
  to: string;
}

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;

  public clientID: string = "";
  public dataSource: any = new MatTableDataSource([]);
  public displayedColumns: Array<string> = [];
  public selectedField: number = 2;
  public containerControl: FormControl = new FormControl("");
  public invoiceControl: FormControl = new FormControl("");
  public stateControl: FormControl = new FormControl("");
  public dateFormGroup: FormGroup = new FormGroup({});
  public page: number = 0;
  public to: string = "";
  public privileges: typeof privileges = privileges;
  public billingStore$: Observable<IBillingStore> = new Observable();
  public billingSubscription: Subscription = new Subscription();
  public sharedSubscription: Subscription = new Subscription();
  public apiGatewaySubscription: Subscription = new Subscription();
  public customer: string | null = null;
  public currentUser!: IAPIGatewayStore;
  public isAgent: boolean = false;

  constructor(
    private readonly store: Store,
    private readonly matDialog: MatDialog,
    private readonly matSnackBar: MatSnackBar,
    private readonly utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.sharedSubscription = this.store.select(sharedFeatureSelector).subscribe(next => {
      if(next.file) {
        window.open(this.utilService.pdfReceipt(next.file));
        this.store.dispatch(cleanPdfInvoice());
      }
    });

		this.invoiceControl = new FormControl({ value: "", disabled: false }, [Validators.maxLength(20), Validators.pattern(/^[\w]+$/)]);
		this.containerControl = new FormControl({ value: "", disabled: false }, [Validators.minLength(11), Validators.maxLength(11),   Validators.pattern(/^[a-zA-Z]{4}[0-9]{7}$/)]);
		this.stateControl = new FormControl({ value: "", disabled: false });

    this.dateFormGroup = new FormGroup({
			from: new FormControl({ value: "", disabled: false }, [Validators.required]),
			to: new FormControl({ value: "", disabled: false }, [Validators.required])
		});

    this.dateFormGroup.controls["from"].setValue(moment().subtract(31, "day").format("YYYY-MM-DD"));
    this.dateFormGroup.controls["to"].setValue(moment().format("YYYY-MM-DD"));

    this.apiGatewaySubscription = this.store.select(apiGatewayFeatureSelector).subscribe({
      next: store => {
        this.clientID = (store.empresa?.id as string);
        this.isAgent = store.empresa?.tiposEmpresas.filter((value) => value.selected)[0].companyTypeId === "06";
        this.currentUser = store;

        this.stateControl.setValue("0");
        this.store.dispatch(cleanInvoices());

        if(this.isAgent) this.customer = "null";
        else this.customer = `${store.empresa?.id as string}/${store.userName}`

        this.store.dispatch(getInvoices({ page: 0, quantity: 20, payload: {
          "client": this.customer,
          "finalNbr": "null",
          "container": "null",
          "fromDate": moment().subtract(31, "day").toISOString(),
          "toDate": moment().toISOString(),
          "state": "0"
        } }));
      },
      error: error => console.error(error)
    });

    this.billingStore$ = this.store.select(billingFeatureSelector);
    this.billingSubscription = this.billingStore$.subscribe({
      next: (billingStore: IBillingStore) => {
        this.dataSource = new MatTableDataSource(billingStore.result);
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (item: any, property: any) => {
          switch (property) {
            case 'finalizedDate': {
              let newDate = new Date(item.finalizedDate);
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

    this.displayedColumns = ["selected", "finalNumber", "finalizedDate", "totalTotal", "name", "statusPay", "pay"];

    /*this.containerControl.valueChanges.subscribe({
      next: (value: string) => {
        let numberQuantity: number = 0;
        let letterQuantity: number = 0;

        for(let i = 0 ; i < value.length ; i++) {
          const ascii = value.charCodeAt(i);

          if((ascii > 64 && ascii < 91) || (ascii > 96 && ascii < 123)) letterQuantity++;
          if(ascii > 47 && ascii < 58) numberQuantity++;
        }

        if(numberQuantity < 8 && letterQuantity < 5) this.containerControl.setErrors({});
        else this.containerControl.setErrors({ invoiceError: "El texto solamente puede permitir 4 letras y 7 dígitos y con una longitud máxima de 10 caracteres" });
      },
      error: error => console.error(error)
    });*/
  }

  ngAfterViewInit() { }

  ngOnDestroy(): void {
    this.billingSubscription.unsubscribe();
    this.sharedSubscription.unsubscribe();
    this.apiGatewaySubscription.unsubscribe();
    this.store.dispatch(cleanPdfFile());
  }

  public customerSearch(value: string): void {
    this.customer = value;

    if(!value) {
      this.store.dispatch(cleanCustomer());
    }
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public datePickerChange(event: any): void {
    const value = this.dateFormGroup.controls["from"].value;

    this.dateFormGroup.controls["to"].setValue(moment(value).add(31, "day").format("YYYY-MM-DD"));
  }

  public search(): void {
    this.page = 0;
    this.store.dispatch(cleanInvoices());

    this.fetch();
  }

  public next(): void {
    this.page = this.page + 1;
    this.fetch();
  }

  public fetch(): void {
    let customer = this.customer;
    if (this.customer && this.customer.split("/")[1]){
      customer = this.customer.split("/")[0] ?? "null";
    }
    if (customer === ""){
      customer = null;
    }
    this.store.dispatch(getInvoices({ page: this.page, quantity: 20, payload: {
      "client": customer,
      "finalNbr": this.invoiceControl.value ? this.invoiceControl.value : "null",
      "container": this.containerControl.value ? this.containerControl.value : "null",
      "fromDate": moment(this.dateFormGroup.get("from")?.value).toISOString(),
      "toDate": moment(this.dateFormGroup.get("to")?.value).toISOString(),
      "state": this.stateControl.value ? this.stateControl.value : "null"
    } }));
    
    /*if(this.customer && this.customer.split("/")[1]) {
      this.store.dispatch(getInvoices({ page: this.page, quantity: 20, payload: {
        "client": this.customer.split("/")[0] ?? "null",
        "finalNbr": this.invoiceControl.value ? this.invoiceControl.value : "null",
        "container": this.containerControl.value ? this.containerControl.value : "null",
        "fromDate": moment(this.dateFormGroup.get("from")?.value).toISOString(),
        "toDate": moment(this.dateFormGroup.get("to")?.value).toISOString(),
        "state": this.stateControl.value ? this.stateControl.value : "null"
      } }));
    } else {
      this.store.dispatch(getInvoices({ page: 0, quantity: 20, payload: {
        "client": "null",
        "finalNbr": "null",
        "container": "null",
        "fromDate": moment().subtract(31, "day").toISOString(),
        "toDate": moment().toISOString(),
        "state": "0"
      } }));
    }*/
  }

  public pay(): void {
    const invoices: IInvoice[] = this.dataSource.data.filter((invoice: IInvoice) => invoice.selected);

    if(invoices.length) {
      const payMatDialog = this.matDialog.open(SelectedInvoiceComponent, {
        data: {
          invoices,
          invoicesToPay: invoices.map(invoice => ({
            finalNbr: invoice.finalNumber,
            draftNbr: invoice.draftNumber,
            currency: invoice.currency_id,
            totalTotal: invoice.totalTotal
          })),
          clientID: this.clientID
        }
      });
    } else {
      this.matSnackBar.open("Debe seleccionar al menos una factura para realizar el pago", "OK", {
        duration: 5000,
        panelClass: ["error-snackbar"],
        verticalPosition: "top"
      });
    }
  }

  public getInvoicePDF(invoice: string): void {
    this.store.dispatch(getPdfInvoice({ invoice }));
  }

  public printInvoicePDF(referenceCode: string | undefined): void {
    console.log("referenceCode", referenceCode);
    if(referenceCode) this.utilService.printReceipt(referenceCode);
    else {
      this.matSnackBar.open(
        "No se puede visualizar el recibo de pago",
        "",
        {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        }
      )
    }
  }

  public checkboxSelectAll(event: MatCheckboxChange): void {
    this.dataSource = new MatTableDataSource(this.dataSource.data.map((value: IInvoice) => {
      const newValue: IInvoice = Object.assign({}, value);

      newValue.selected = event.checked;

      return newValue;
    }));
  }

  public checkboxSelectOne(event: MatCheckboxChange, element: IInvoice): void {
    this.dataSource = new MatTableDataSource(this.dataSource.data.map((value: IInvoice) => {
      const newValue: IInvoice = Object.assign({}, value);

      if(newValue.finalNumber == element.finalNumber) {
        newValue.selected = event.checked;
      }

      return newValue;
    }));
  }
}
