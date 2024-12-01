import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, concat, debounceTime, delay, EMPTY, forkJoin, interval, map, mergeMap, Observable, of, take, timeout } from "rxjs";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { Base64EncryptionUtilService } from "src/app/core/auth/services/base64-encryption-util.service";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { IServiceAutorityTypes } from "src/app/modules/services/interfaces/service-autority-types.interface";
import { IServiceOrderPayload } from "src/app/modules/services/interfaces/service-order-payload.interface";
import { IServiceTypeInfo } from "src/app/modules/services/interfaces/service-type-info.interface";
import { IServiceType } from "src/app/modules/services/interfaces/service-type.interface";
import { ServiceOrdersService } from "src/app/modules/services/services/service-orders.service";
import { addUnit, cleanContainers, cleanDesignatedOfficial, cleanSaveServiceOrder, cleanSearchedCriteria, cleanServiceAutorityType, cleanServiceOrderInfo, cleanUnit, getServiceAutorityType } from "./service-order.actions";
import { IServiceTypeDesignatedOfficial } from "src/app/modules/services/interfaces/service-type-designated-official.interface";
import { getPrivilegeNotification } from "../shared/shared.actions";
import { IServiceOrderNotificationData } from "src/app/core/interfaces/service-order-notification-data.interface";
import { IServiceHistory } from "src/app/modules/services/interfaces/service-history.interface";
import { IServiceHistoryDTO } from "src/app/modules/services/interfaces/service-history.dto";

@Injectable()
export class ServiceOrderEffects {
  getServiceType$ = createEffect(() => this.actions$.pipe(
    ofType("[SERVICE-ORDER] Get Service Type"),
    mergeMap(() =>
        this.servicesOrderService.getServiceType().pipe(
          mergeMap(result => {
            let newResult: IServiceType[] = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

            return of(newResult);
          }),
          catchError(error => {
            console.error(error);

            return EMPTY;
          })
        )
    ),
    map((result: IServiceType[]) => {
      return ({ type: "[SERVICES-ORDER] Set Service Type", serviceTypes: result });
    }),
    catchError(() => EMPTY)
  ));

  getServiceOrderInfo$ = createEffect(() => this.actions$.pipe(
    ofType("[SERVICE-ORDER] Get Service Order Info"),
    mergeMap((actions: { criteria: string, serviceType: string }) =>
        this.servicesOrderService.getServiceOrderInfo(
          actions.criteria,
          this.base64EncryptionUtilService.encrypt(actions.serviceType)
        ).pipe(
          mergeMap((result) => {
            let serviceTypeInfoResult: IServiceTypeInfo[] = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

            if(serviceTypeInfoResult.length) {
              if(serviceTypeInfoResult[0].Type_service.includes('HB')) {
                this.store.dispatch(addUnit({
                  unit: {
                    serviceOrder: actions.serviceType,
                    voidDestination: null,
                    serviceTypeInfo: serviceTypeInfoResult[0]
                  }
                }));

                this.router.navigate(['/', 'servicios', 'create']);
              }

              this.store.dispatch(getServiceAutorityType({
                serviceType: this.base64EncryptionUtilService.encrypt(actions.serviceType),
                chargeType: serviceTypeInfoResult[0].Type_service.includes("HB") ? this.base64EncryptionUtilService.encrypt("BBK") : this.base64EncryptionUtilService.encrypt("CNT")
              }));

              return of(serviceTypeInfoResult.map(
                (value: IServiceTypeInfo) => {
                  const newValue = Object.assign({}, value);

                  newValue.checkboxFormControl = this.servicesOrderService.getServiceCheckboxFormGroup();
                  newValue.selectFormControl = this.servicesOrderService.getServiceVoidDestinationFormGroup();

                  return newValue;
                }
              ));
            } else {
              this.matSnackbar.open(
              `No hay datos asociados a ${this.base64EncryptionUtilService.decrypt(actions.criteria)} para el tipo de servicio: ${actions.serviceType}`,
                "",
                {
                  verticalPosition: "top",
                  panelClass: ["error-snackbar"],
                  duration: 5000
                }
              );

              return of([]);
            }
          }),
          catchError(error => {
            console.error(error);

            return EMPTY;
          }),
        )
    ),
    map((result: IServiceTypeInfo[]) => {
      return ({ type: "[SERVICES-ORDER] Set Service Order Info", serviceOrderInfo: result });
    }),
    catchError(() => EMPTY)
  ));

  getServiceAutorityType$ = createEffect(() => this.actions$.pipe(
    ofType("[SERVICE-ORDER] Get Service Autority Type"),
    mergeMap((actions: { serviceType: string, chargeType: string }) =>
        this.servicesOrderService.getServiceAutorityType(actions.serviceType, actions.chargeType).pipe(
          mergeMap(result => {
            let serviceTypeInfoResult: IServiceAutorityTypes = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

            return of(serviceTypeInfoResult);
          }),
          catchError(error => {
            console.error(error);

            return EMPTY;
          })
        )
    ),
    map((result: IServiceAutorityTypes) => {
      console.log("🚀 ~ ServiceOrderEffects ~ map ~ result:", result);
      return ({ type: "[SERVICES-ORDER] Set Service Autority Type", authorityType: result });
      
    }),
    catchError(() => EMPTY)
  ));

  getServiceHistory$ = createEffect(() => this.actions$.pipe(
    ofType("[SERVICE-HISTORY] Get Service History"),
    mergeMap((actions: { page: number, body: IServiceHistoryDTO }) =>
        this.servicesOrderService.getServiceHistory(actions.page, actions.body).pipe(
          mergeMap((result: string) => {
            let serviceTypeInfoResult: IServiceHistory = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

            if(!serviceTypeInfoResult.serviceOrders.length || !serviceTypeInfoResult.serviceOrders) {
              this.matSnackbar.open(
                "No se encontraron ordenes de servicio para los criterios ingresados",
                "",
                {
                  verticalPosition: "top",
                  panelClass: ["error-snackbar"],
                  duration: 5000
                }
              );
            }

            return of(serviceTypeInfoResult);
          }),
          catchError(error => {
            console.error(error);

            return EMPTY;
          })
        )
    ),
    map((result: IServiceHistory) => {
      return ({ type: "[SERVICE-HISTORY] Set Service History", result });
    }),
    catchError(() => EMPTY)
  ));

  getSaveServiceOrder$ = createEffect(() => this.actions$.pipe(
    ofType("[SERVICE-ORDER] Get Save Service Order"),
    mergeMap((actions: { payloads: IServiceOrderPayload[], hasNotification: boolean, notificationData: IServiceOrderNotificationData, privilege: string }) => {
      let observables: Observable<IRestResult<string>>[] = [];

      actions.payloads.forEach((payload, index) => {
        const currentDelay: number = index * 1000;

        observables = [
          ...observables,
          interval(currentDelay).pipe(
            take(1),
            mergeMap(result => this.servicesOrderService.saveServiceOrder(payload).pipe(
              delay(1000),
              mergeMap(result => {
                let serviceTypeInfoResult: IRestResult<string> = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

                return of(serviceTypeInfoResult);
              }),
              catchError(error => {
                return of(error.error);
              })
            ))
          )
        ];
      });

      return forkJoin(observables).pipe(
        mergeMap(value => {
          this.store.dispatch(cleanSaveServiceOrder());
          this.store.dispatch(cleanDesignatedOfficial());
          this.store.dispatch(cleanServiceAutorityType());
          this.store.dispatch(cleanSearchedCriteria());
          this.store.dispatch(cleanServiceOrderInfo());

          let successServicesOrders: string[] = [];

          value.forEach((result: IRestResult<string>) => {
            if(result.success === "true") successServicesOrders = [...successServicesOrders, result.result as string];
          });

          if(actions.hasNotification) {
            if(successServicesOrders.length) {
              this.store.dispatch(getPrivilegeNotification({
                body: {
                  companyId: null,
                  mailsNotifications: null,
                  notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify({
                    ...actions.notificationData,
                    serviceOrdersRef: successServicesOrders.toString()
                  })),
                  privilegeId: actions.privilege
                }
              }));
            }
          }

          return of(value);
        }),
        catchError(error => {
          return of(error.error);
        })
      );
    }),
    map((result: IRestResult<string>[]) => {
      return ({ type: "[SERVICES-ORDER] Set Save Service Order", result: result });
    }),
    catchError(() => EMPTY)
  ));

  getDesignatedOfficials$ = createEffect(() => this.actions$.pipe(
    ofType("[SERVICE-ORDER] Get Service Type Designated Official"),
    mergeMap((actions: { criteria: string }) =>
        this.servicesOrderService.getDesignatedOfficials(
          this.base64EncryptionUtilService.encrypt(actions.criteria)
        ).pipe(
          mergeMap(result => {
            let serviceTypeInfoResult: IServiceTypeDesignatedOfficial[] = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

            return of(serviceTypeInfoResult);
          }),
          catchError(error => {
            this.matSnackbar.open(
              error.error.error,
              "",
              {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              }
            );

            console.error(error);

            return EMPTY;
          })
        )
    ),
    map((result: IServiceTypeDesignatedOfficial[]) => {
      return ({ type: "[SERVICE-ORDER] Set Service Type Designated Official", designatedOfficial: result });
    }),
    catchError(() => EMPTY)
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly servicesOrderService: ServiceOrdersService,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService,
    private readonly matSnackbar: MatSnackBar,
    private readonly router: Router,
  ) { }
}
