import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IInvoiceToPay } from 'src/app/core/interfaces/invoice-to-pay.interface';
import { IInvoice } from 'src/app/core/interfaces/invoices.interface';
import { IPaymentPayuRequest } from 'src/app/core/interfaces/payment-payu-request.interface';
import { IPayuStore } from 'src/app/core/interfaces/payu-store.interface';
import { getCheckLockedInvoices, getPayInvoices, getPaymentData, getPayuGateway, setCheckLockedInvoices, setPayInvoices, setPaymentData } from 'src/app/state/payu/payu.actions';
import { payuFeatureSelector } from 'src/app/state/payu/payu.selectors';

interface IinvoiceDialogData {
  invoices: Array<IInvoice>;
  invoicesToPay: IInvoiceToPay[];
  clientID: string;
}

@Component({
  selector: 'app-selected-invoice',
  templateUrl: './selected-invoice.component.html',
  styleUrls: ['./selected-invoice.component.css']
})
export class SelectedInvoiceComponent implements OnInit, OnDestroy {
  @ViewChild("ngPayuForm") public ngPayuForm!: ElementRef<HTMLFormElement>;

  public displayedColumns: Array<string> = ["invoice", "account", "credit", "amount"];
  public selectedInvoiceSubscription: Subscription = new Subscription();
  public dataSource: Array<any> = [];
  public total: number = 0;
  public csrf: string = "";
  public payuRequest!: IPaymentPayuRequest;
  public payuGateway: string = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IinvoiceDialogData,
    private readonly store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getPayuGateway());
    this.csrf = this.getCookie("XSRF-TOKEN");
    let url = window.location.href;
    document.cookie = "urlPostPay=" + url;
    this.dataSource = this.data.invoices;
    this.total = this.dataSource.reduce((acc, item) => acc = acc + parseFloat(item.totalTotal), 0);
  }

  ngOnDestroy(): void {
    this.selectedInvoiceSubscription.unsubscribe();
  }

  public pay(): void {
    this.store.dispatch(getCheckLockedInvoices({
      invoices: this.data.invoices,
      invoicesToPay: this.data.invoicesToPay
    }));

    this.selectedInvoiceSubscription = this.store.select(payuFeatureSelector).subscribe({
      next: (payuStore: IPayuStore) => {
        if(payuStore.checkLockedInvoices) {
          this.store.dispatch(getPaymentData({
            customerId: this.data.clientID,
            selectedInvoicesToPay: this.data.invoices,
            invoicesToPay: this.data.invoicesToPay,
            totalAmount: this.data.invoices.reduce((acc, item) => acc = acc + parseFloat(item.totalTotal), 0).toFixed(2)
          }));
        }

        if(payuStore.paymentData) {
          this.payuRequest = payuStore.paymentData;

          this.store.dispatch(getPayInvoices(
          {
            payUN4Request: {
              customerId: this.data.clientID,
              invoicesToPay: this.data.invoicesToPay,
              referenceCode: payuStore.paymentData.referenceCode,
              status: null
            }
          }));
        }

        if(payuStore.paid) {
          this.store.dispatch(setPayInvoices({ paid: false }));
          this.ngPayuForm.nativeElement.action = payuStore.payUrl as string;
          this.ngPayuForm.nativeElement.submit();
        }
      },
      error: error => console.error(error)
    });
  }

  public getCookie(value: string): string {
    return document.cookie.split(";").filter(item => {
      const splittedToken = item.split("=");

      if(splittedToken[0].trim() === value) return true;
      return false;
    })[0].split("=")[1];
  }
}
