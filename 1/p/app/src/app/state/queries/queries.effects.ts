import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap, of } from "rxjs";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { IQueryPayload } from "src/app/core/interfaces/query-payload.interface";
import { IQueryResponse } from "src/app/core/interfaces/query-response.interface";
import { IQuery } from "src/app/core/interfaces/query.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { QueriesService } from "src/app/modules/queries/services/queries.service";

@Injectable()
export class QueriesEffects {

  getAllQueries$ = createEffect(() => this.actions$.pipe(
    ofType("[Queries] Get All Queries"),
    mergeMap(() => this.queriesService.getAllQueries()),
    map((queries: IQuery[]) => ({ type: "[Queries] Set All Queries", queries })),
    catchError(error => EMPTY)
  ));

  executeQuery$ = createEffect(() => this.actions$.pipe(
    ofType("[Queries] Get Execute Query"),
    mergeMap((action: { payload: IQueryPayload }) =>
      this.queriesService.exectureQuery(action.payload).pipe(
        mergeMap((result) => {
          if(result.error) {
            this.matSnackBar.open(result.result as string, "",
              {
                verticalPosition: "top",
                duration: 3000,
                panelClass: ["error-snackbar"]
              }
            );
          }

          return of(result);
        }),
        catchError((error) => {
          console.error(error);

          return EMPTY;
        })
      )
    ),
    map((result: IQueryResponse) => ({ type: "[Queries] Set Execute Query", result })),
    catchError(error => EMPTY)
  ));

  executeDamageReport$ = createEffect(() => this.actions$.pipe(
    ofType("[Queries] Get Damage Report"),
    mergeMap((action: { container: string, id: string }) =>
    this.queriesService.executeDamageReport(action.container, action.id).pipe(
      mergeMap((result: IQueryResponse) => {
        if(result.error === "true") {
          this.matSnackBar.open(result.result as string, "",
            {
              verticalPosition: "top",
              duration: 3000,
              panelClass: ["error-snackbar"]
            }
          );
        }

        return of(result);
      }),
      catchError(() => {
        this.matSnackBar.open("Se presento un error al realizar la consulta", "",
            {
              verticalPosition: "top",
              duration: 3000,
              panelClass: ["error-snackbar"]
            }
          );

          return EMPTY;
      })
      )
    ),
    map((result: IQueryResponse) => ({ type: "[Queries] Set Damage Report", result })),
    catchError(error => EMPTY)
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly matSnackBar: MatSnackBar,
    private readonly queriesService: QueriesService,
    private aesEncryptionUtilService: AESEncryptionUtilService
  ) {}
}
