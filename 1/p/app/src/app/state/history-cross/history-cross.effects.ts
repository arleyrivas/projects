import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { IHistoryCross } from "src/app/core/interfaces/history-cross.interface";
import { HistoryCrossService } from "src/app/modules/history-cross/services/history-cross.service";

@Injectable()
export class HistoryCrossEffects {

  getHistoryCross$ = createEffect(() => this.actions$.pipe(
    ofType("[History-Cross] Get History Cross"),
    mergeMap(
      (action: { customer: string, role: string, page: number }) =>
      this.historyCrossService.getHistoryCross(action.customer, action.role, action.page).pipe(
        catchError(_ => {
          this.matSnackBar.open("No se han encontrado resultados", "OK", { duration: 2000 });
          return of(_);
        })
      )
    ),
    map((crossedHistories: Array<IHistoryCross>) => ({ type: "[History-Cross] Set History Cross", crossedHistories }))
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly historyCrossService: HistoryCrossService,
    private readonly matSnackBar: MatSnackBar
  ) {}
}
