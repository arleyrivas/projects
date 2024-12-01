import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap, of } from "rxjs";
import { UtilService } from "src/app/shared/services/util.service";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { PayuService } from "src/app/shared/services/payu.services";
import { IInvoice } from "src/app/core/interfaces/invoices.interface";
import { IPaymentPayuRequest } from "src/app/core/interfaces/payment-payu-request.interface";
import { IPayUN4Request } from "src/app/core/interfaces/payuN4Request.interface";
import { IInvoiceToPay } from "src/app/core/interfaces/invoice-to-pay.interface";

@Injectable()
export class PayuEffects {

  getCheckLockedInvoices$ = createEffect(() => this.actions$.pipe(
    ofType("[PayU] Get Check Locked Invoices"),
    mergeMap((action: { invoices: IInvoice[], invoicesToPay: IInvoiceToPay[] }) =>
        this.payuService.checkLockedInvoices(action.invoices, action.invoicesToPay).pipe(
          catchError(error => {

            this.matSnackBar.open(
              "No se puede efectuar el pago ya que hay facturas en proceso actualmente.",
              "",
              {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              }
            )

            return EMPTY;
          })
        )
    ),
    map((result: boolean) => {
      return ({ type: "[PayU] Set Check Locked Invoices", checkLockedInvoices: result });
    }),
    catchError(() => EMPTY)
  ));

  getPaymentData$ = createEffect(() => this.actions$.pipe(
    ofType("[PayU] Get Payment Data"),
    mergeMap((action: { customerId: string, selectedInvoicesToPay: IInvoice[], invoicesToPay: IInvoiceToPay[], totalAmount: string }) =>
        {
          return this.payuService.loadFormData(action.customerId, action.selectedInvoicesToPay, action.invoicesToPay, action.totalAmount).pipe(
            catchError(error => {

              this.matSnackBar.open(
                "No se puede efectuar el pago.",
                "",
                {
                  verticalPosition: "top",
                  panelClass: ["error-snackbar"],
                  duration: 5000
                }
              )

              return EMPTY;
            })
          )
        }
    ),
    map((result: IPaymentPayuRequest) => {
      return ({ type: "[PayU] Set Payment Data", paymentData: result });
    }),
    catchError(() => EMPTY)
  ));

  getPayInvoices$ = createEffect(() => this.actions$.pipe(
    ofType("[PayU] Get Pay Invoices"),
    mergeMap((action: { payUN4Request: IPayUN4Request }) =>
        this.payuService.payInvoices(action.payUN4Request)
    ),
    map((result: boolean) => {
      return ({ type: "[PayU] Set Pay Invoices", paid: result });
    }),
    catchError(() => EMPTY)
  ));

  getPayuGateway$ = createEffect(() => this.actions$.pipe(
    ofType("[PayU] Get Payu Gateway"),
    mergeMap((action) =>
        this.payuService.payuGateway().pipe(
          catchError((error) => {
            console.error(error);

            return EMPTY;
          })
        )
    ),
    map((result: string) => {
      return ({ type: "[PayU] Set Payu Gateway", payuGateway: result });
    }),
    catchError(() => EMPTY)
  ));


  constructor(
    private readonly actions$: Actions,
    private readonly matSnackBar: MatSnackBar,
    private readonly payuService: PayuService,
    private readonly aesService: AESEncryptionUtilService
  ) { }
}
