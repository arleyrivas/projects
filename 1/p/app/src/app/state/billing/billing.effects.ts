import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap, of } from "rxjs";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { IInvoicesPayload } from "src/app/core/interfaces/invoices-payload.interface";
import { IInvoice } from "src/app/core/interfaces/invoices.interface";
import { BillingService } from "src/app/modules/billing/services/billing.service";
import { UtilService } from "src/app/shared/services/util.service";

@Injectable()
export class BillingEffects {

  getInvoices$ = createEffect(() => this.actions$.pipe(
    ofType("[Billing] Get Invoices"),
    mergeMap((action: { payload: IInvoicesPayload, page: number, quantity: number }) =>
      this.billingService.getInvoices(action.page, action.quantity, action.payload).pipe(
        mergeMap((result: string) => {
          const decryptedResponse: IInvoice[] = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

          return of(decryptedResponse);
        }),
        catchError(() => {
          this.matSnackBar.open("No se han encontrado facturas para visualizar", "OK",
            {
              verticalPosition: "top",
              panelClass: ["error-snackbar"],
              duration: 3000
            }
          );

          return EMPTY;
        })
      )
    ),
    map((result: IInvoice[]) => ({ type: "[Billing] Set Invoices", result })),
    catchError(error => EMPTY)
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly billingService: BillingService,
    private readonly utilService: UtilService,
    private readonly matSnackBar: MatSnackBar,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService
  ) {}
}
