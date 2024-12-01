import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap, of } from "rxjs";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { CreditNotesService } from "src/app/modules/credit-notes/services/credit-notes.service";

@Injectable()
export class CreditNotesEffects {
//"[Credit-Notes] Get Execute Crossing"
  getCreditNotes$ = createEffect(() => this.actions$.pipe(
    ofType("[Credit-Notes] Get Credit Note Crosses"),
    mergeMap((action: { customer: string, page: number }) => this.creditNotesService.getCreditNoteCrosses(action.customer, action.page).pipe(
      mergeMap(encryptedResponse => {
        let response = [];

        if(encryptedResponse) response = JSON.parse(this._AESEncryptionUtilService.decrypt(encryptedResponse));

        if(!response.length) {
          this.matSnackBar.open(
            "No se encontraron Facturas y/o Notas Crédito para realizar el cruce.",
            "",
            {
              verticalPosition: "top",
              panelClass: ["error-snackbar"],
              duration: 5000
            }
          );
        }

        return of(response);
      }),
      catchError(() => {
        this.matSnackBar.open(
          "No se encontraron Facturas y/o Notas Crédito para realizar el cruce.",
          "",
          {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          }
        );

        return EMPTY;
      })
    )),
    map(crosses => ({ type: "[Credit-Notes] Set Credit Note Crosses", crosses })),
    catchError(() => EMPTY)
  ));

  getInvoices$ = createEffect(() => this.actions$.pipe(
    ofType("[Credit-Notes] Get Invoices"),
    mergeMap((action: { customer: string, page: number }) => this.creditNotesService.getInvoices(action.customer, action.page).pipe(
      mergeMap(encryptedResponse => {
        let response = [];

        if(encryptedResponse) response = JSON.parse(this._AESEncryptionUtilService.decrypt(encryptedResponse));

        if(!response.length) {
          this.matSnackBar.open(
            "No se encontraron Facturas y/o Notas Crédito para realizar el cruce.",
            "",
            {
              verticalPosition: "top",
              panelClass: ["error-snackbar"],
              duration: 5000
            }
          );
        }

        return of(response);
      }),
      catchError(() => {
        this.matSnackBar.open(
          "No se encontraron Facturas y/o Notas Crédito para realizar el cruce.",
          "",
          {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          }
        );

        return EMPTY;
      })
    )),
    map(invoices => ({ type: "[Credit-Notes] Set Invoices", invoices })),
    catchError(() => EMPTY)
  ));

  getExecuteCrossing = createEffect(() => this.actions$.pipe(
    ofType("[Credit-Notes] Get Execute Crossing"),
    mergeMap((action: { clientId: string, invoiceList: string, creditNotesList: string }) =>
      this.creditNotesService.crossing(action.clientId, action.invoiceList, action.creditNotesList).pipe(
        catchError(() => {
          this.matSnackBar.open(
            $localize`:@@c660af4130e61ebdb65ddc1d47f1ea676c360936a86dd24f180a4a3e87eda77c: modules.credit-notes.error`,
            "OK",
            {
              verticalPosition: "top",
              panelClass: ["error-snackbar"],
              duration: 5000
            }
          );

          return EMPTY;
        })
      )),
      map((response: IRestResult<string>) => {
        this.matSnackBar.open(response.result as string, "",
          {
            verticalPosition: "top",
            panelClass: ["success-snackbar"],
            duration: 5000
          }
      );

        return ({ type: "[Credit-Notes] Set Execute Crossing", response });
      })
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly creditNotesService: CreditNotesService,
    private readonly matSnackBar: MatSnackBar,
    private readonly _AESEncryptionUtilService: AESEncryptionUtilService
  ) {}
}
