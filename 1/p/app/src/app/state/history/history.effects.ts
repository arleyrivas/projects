import { E } from "@angular/cdk/keycodes";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { EMPTY, catchError, map, mergeMap, of, tap } from "rxjs";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { UtilService } from "src/app/shared/services/util.service";
import { ITruckPin } from "src/app/core/interfaces/truck-pin.interface";
import { IAppointment } from "src/app/core/interfaces/appointment.interface";


@Injectable()
export class HistoryEffects {
  
    getHistoryPin$ = createEffect(() => this.actions$.pipe(
        ofType("[History] Get History Pin"),
        mergeMap((action: {consigneeId: string | null, company: string | null, tipo: string, state: Number, 
            fromDate: string, toDate: string , bl: string | null, 
            hbl: string | null, frghtKind: string | null, page: number}) =>
            this.utilService.getHistorialPin(action, action.page).pipe(
                    catchError((error) => {
                        console.error(error);
                        return EMPTY;
                    })
                )
            ),
            map((result: ITruckPin[]) => {
                return { type: "[History] Set History Pin", result };
            
            }),
            catchError(error => EMPTY)
    ));

    getHistoryAppointments$ = createEffect(() => this.actions$.pipe(
        ofType("[History] Get History Appointments"),
        mergeMap((action: {plate: string | null, appointmentNbr: string | null,
            fromDate: string, toDate: string , frghtKind: string | null, page: number}) =>
                
            this.utilService.getHistoryAppointments(action, action.page).pipe(
                    catchError((error) => {
                        console.error(error);
                        return EMPTY;
                    })
                )
            ),
            map((resp:string) => {
                if (resp){
                    const result = JSON.parse(this.aesEncryptionUtilService.decrypt(resp));
                    return { type: "[History] Set History Appointments", result };
                }else{
                    const result: IAppointment[] = [];
                    return { type: "[History] Set History Appointments",  result };
                }
                
            }),
            catchError((error) => {
                console.error("Error calling service:", error);
                return of();
            })
    ));



    constructor(
        private readonly actions$: Actions,
        private readonly utilService: UtilService,
        private readonly matSnackBar: MatSnackBar,
        private readonly matDialog: MatDialog,
        private readonly store: Store,
        private readonly aesEncryptionUtilService: AESEncryptionUtilService
      ) {}
  
}