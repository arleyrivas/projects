import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap, Observable, of } from "rxjs";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { RoleService } from "src/app/core/auth/services/role.service";
import { IServiceBlDTO } from "src/app/core/dto/service-bl.dto";
import { IServiceImoDTO } from "src/app/core/dto/service-imo.dto";
import { IServicePackagetypesDTO } from "src/app/core/dto/service-package-types.dto";
import { IServicesSaveHblCriteria } from "src/app/core/dto/services-save-hbl-criteria.dto";
import { IAPIGatewayStore } from "src/app/core/interfaces/api-gateway-store.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { ServicesService } from "src/app/modules/services/services/services.service";
import { getServicesBl } from "./services.actions";
import { Base64EncryptionUtilService } from "src/app/core/auth/services/base64-encryption-util.service";
import { getPrivilegeNotification } from "../shared/shared.actions";

@Injectable()
export class ServicesEffects {
  getServicesBl$ = createEffect(() => this.actions$.pipe(
      ofType("[SERVICES] Get Services BL"),
      mergeMap((action: { criteria: string }) =>
          this.servicesService.getServicesBl(action.criteria).pipe(
            mergeMap((result: string) => {
              if(!result) {
                this.matSnackbar.open(
                  `El BL master ${action.criteria} no posee información disponible.`,
                  "",
                  {
                    verticalPosition: "top",
                    panelClass: ["error-snackbar"],
                    duration: 5000
                  }
                );

              return of(null);
            } else {
                const decryptedResult: IServiceBlDTO = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

                return of(decryptedResult);
            }
            }),
            catchError((error: { success: boolean, result: string, error: boolean }) => {
              if(error) {
                this.matSnackbar.open(
                  error.result,
                  "",
                  {
                    verticalPosition: "top",
                    panelClass: ["error-snackbar"],
                    duration: 5000
                  }
                )
              }

              return EMPTY;
            })
          ),
      ),
      map((result: IServiceBlDTO | null) => {
        return ({ type: "[SERVICES] Set Services BL", searchedBl: result });
      }),
      catchError(() => EMPTY)
  ));

  getServicesPackagetypes$ = createEffect(() => this.actions$.pipe(
    ofType("[SERVICES] Get Services Package Types"),
    mergeMap(() =>
        this.servicesService.getServicesPackagetypes().pipe(
          mergeMap((result: string) => {
            const decryptedResult: IServicePackagetypesDTO[] = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

            return of(decryptedResult);
          }),
          catchError((error: { success: boolean, result: string, error: boolean }) => {
            if(error) {
              this.matSnackbar.open(
                error.result,
                "",
                {
                  verticalPosition: "top",
                  panelClass: ["error-snackbar"],
                  duration: 5000
                }
              )
            }

            return EMPTY;
          })
        )
    ),
    map((result: IServicePackagetypesDTO[]) => {
      return ({ type: "[SERVICES] Set Services Package Types", packagesTypes: result });
    }),
    catchError(() => EMPTY)
  ));

  getServicesImo$ = createEffect(() => this.actions$.pipe(
    ofType("[SERVICES] Get Services Imo"),
    mergeMap((action: { criteria: string }) =>
        this.servicesService.getServicesImo(action.criteria).pipe(
          mergeMap((result: string) => {
            if(((result as unknown) as { error: string }).error) {
              this.matSnackbar.open(
                ((result as unknown) as { error: string }).error,
                "",
                {
                  verticalPosition: "top",
                  panelClass: ["error-snackbar"],
                  duration: 5000
                }
              )

            return of(null);
          } else {
              const decryptedResult: IServiceImoDTO[] | null = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

              return of(decryptedResult);
            }
          }),
          catchError((error: { success: boolean, result: string, error: boolean }) => {
            if(error) {
              this.matSnackbar.open(
                error.result,
                "",
                {
                  verticalPosition: "top",
                  panelClass: ["error-snackbar"],
                  duration: 5000
                }
              )
            }

            return EMPTY;
          })
        )
    ),
    map((result: IServiceImoDTO[] | null) => {
      return ({ type: "[SERVICES] Set Services Imo", imo: result });
    }),
    catchError(() => EMPTY)
  ));

  getServicesSaveHbl$ = createEffect(() => this.actions$.pipe(
    ofType("[SERVICES] Get Services Save Hbl"),
    mergeMap((action: { body: IServicesSaveHblCriteria, hasNotification: boolean, notificationInfo: string, privilege: string }) =>
        this.servicesService.getServicesSaveHbl(action.body).pipe(
          mergeMap((result: string) => {
            const decryptedResult: { response: string } = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

            this.store.dispatch(getServicesBl({ criteria: action.body.blNbr }));

            this.matSnackbar.open(
              `El Hbl ${action.body.hbl} se creó exitosamente.`,
              "",
              {
                verticalPosition: "top",
                panelClass: ["success-snackbar"],
                duration: 5000
              }
            )

            if(action.hasNotification) {
              this.store.dispatch(getPrivilegeNotification({
                body: {
                  companyId: null,
                  mailsNotifications: null,
                  notificationInfo: action.notificationInfo,
                  privilegeId: action.privilege
                }
              }));
            }

            return of(decryptedResult);
          }),
          catchError((error: { success: boolean, result: string, error: boolean }) => {
            if(error.error) {
              if(error.result){
                this.matSnackbar.open(
                  error.result,
                  "",
                  {
                    verticalPosition: "top",
                    panelClass: ["error-snackbar"],
                    duration: 5000
                  }
                )
              } else {
                {
                  this.matSnackbar.open(
                    "Error inesperado, contacte con servicio al cliente",
                    "",
                    {
                      verticalPosition: "top",
                      panelClass: ["error-snackbar"],
                      duration: 5000
                    }
                  )
                }
              }
            }

            return EMPTY;
          })
        )
    ),
    map((result: { response: string }) => {
      return ({ type: "[SERVICES] Set Services Save Hbl" });
    }),
    catchError(() => EMPTY)
  ));


  constructor(
    private readonly actions$: Actions,
    private readonly servicesService: ServicesService,
    private readonly store: Store,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService,
    private readonly matSnackbar: MatSnackBar
  ) { }
}
