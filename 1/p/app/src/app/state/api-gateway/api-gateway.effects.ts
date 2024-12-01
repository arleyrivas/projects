import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap, Observable, of } from "rxjs";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { RoleService } from "src/app/core/auth/services/role.service";
import { IAPIGatewayStore } from "src/app/core/interfaces/api-gateway-store.interface";
import { NotificationsService } from "src/app/shared/services/notifications.service";

@Injectable()
export class APIGatewayEffects {
    retrieveApiGatewayData$ = createEffect(() => this.actions$.pipe(
        ofType("[Global] Get Api Gateway Data"),
        mergeMap(() =>
            this.roleService.getUser().pipe(
              mergeMap(result => {
                const decryptedData = JSON.parse(this.aesService.decrypt(result));

                return of(decryptedData);
              })
            )
        ),
        map((result: IAPIGatewayStore) => {
          this.notificationsService.makeListNotificationsString(result.privileges)
          return ({ type: "[Global] Save Api Gateway Data", apiGatewayData: result });
        }),
        catchError(() => EMPTY)
    ));

    constructor(
        private readonly roleService: RoleService,
        private readonly actions$: Actions,
        private readonly aesService: AESEncryptionUtilService,
        private readonly matSnackBar: MatSnackBar,
        private notificationsService: NotificationsService

    ) { }
}
