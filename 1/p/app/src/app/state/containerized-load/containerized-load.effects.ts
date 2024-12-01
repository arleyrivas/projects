import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap, of } from "rxjs";
import { IContainerizedLoad } from "src/app/core/interfaces/containerized-load.interface";
import { ILockDTO } from "src/app/core/interfaces/lock-dto.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { IVesselVisit } from "src/app/core/interfaces/vessel-visit.interface";
import { ContainerizedLoadService } from "src/app/modules/containerized-load/services/containerized-load.service";
import { UtilService } from "src/app/shared/services/util.service";
import { setFirstBookingSearch, setFirstSearch } from "./containerized-load.actions";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { IInvoiceManage } from "src/app/core/interfaces/invoice-manage.interface";
import { getPrivilegeNotification } from "../shared/shared.actions";
import { ICustomerContract } from "src/app/core/interfaces/customer-contract.interface";
import { INbrAgentAndConsigeeDTO } from "src/app/core/dto/nbr-agent-and-consigee.dto";
import { IInvoiceCreate } from "src/app/core/dto/invoice-create.dto";
import { IInvoiceProforma } from "src/app/core/interfaces/invoice-proforma.interface";
import { IGeneratePinDTO, INotificationGeneratePinDTO } from "src/app/core/dto/generate-pin.dto";
import { ITruckPin } from "src/app/core/interfaces/truck-pin.interface";
import { IGeneratePinDeactivate, INotificationGeneratePinDeactivate } from "src/app/core/interfaces/generate-pin-deactivate.interface";
import { IGeneratePinDeactivatePartial } from "src/app/core/dto/generate-pin-deactivate-partial.dto";
import { GeneratePinService } from "src/app/modules/containerized-load/services/generate-pin.service";
import { IGeneratePinDeactivateTotal } from "src/app/core/dto/generate-pin-deactivate-total.dto";
import { Router } from "@angular/router";
import { IBookingInterface } from "src/app/core/interfaces/booking.interface";
import { Base64EncryptionUtilService } from "src/app/core/auth/services/base64-encryption-util.service";

@Injectable()
export class ContainerizedLoadEffects {

    $getContainerizedLoad = createEffect(() => this.actions$.pipe(
        ofType("[Containerized-load] Get Containerized Load"),
        mergeMap((action: { nbr: string }) =>
            this.containerizedLoadService.getContainerizedLoad(action.nbr).pipe(
              mergeMap(encryptedContainers => {
                let containers = [];

                this.store.dispatch(setFirstSearch({ search: true }));
                if(encryptedContainers) containers = JSON.parse(this.aesService.decrypt(encryptedContainers))

                return of(containers);
              }),
              catchError((error) => {
                this.matSnackBar.open(
                  $localize`:@@ab92f57dc8a3b3c01d990936a91519492b55c5af0da4fa79d874dd78e5f522df: modules.search.error`,
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
        map((containerizedLoad: IContainerizedLoad[]) => ({ type: "[Containerized-load] Set Containerized Load", containerizedLoad })),
        catchError(() => EMPTY)
    ));

    $getBooking = createEffect(() => this.actions$.pipe(
      ofType("[Containerized-load] Get Booking"),
      mergeMap((action: { nbr: string }) =>
          this.containerizedLoadService.getBooking(action.nbr).pipe(
            mergeMap(containers => {
              this.store.dispatch(setFirstBookingSearch({ search: true }));

              return of(containers);
            }),
            catchError((error) => {
              this.matSnackBar.open(
                $localize`:@@ab92f57dc8a3b3c01d990936a91519492b55c5af0da4fa79d874dd78e5f522df: modules.search.error`,
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
      map((booking: IBookingInterface[]) => ({ type: "[Containerized-load] Set Booking", booking })),
      catchError(() => EMPTY)
  ));

    $getVesselVisit = createEffect(() => this.actions$.pipe(
        ofType("[Containerized-load] Get Vessel Visit"),
        mergeMap((action: { vesselVisitID: string }) =>
            this.utilService.getVesselVisit(action.vesselVisitID).pipe(
              mergeMap(result => {
                return of(JSON.parse(this.aesService.decrypt(result)));
              }),
              catchError(error => {
                  console.error(error)
                  return EMPTY;
                }
              )
            )
        ),
        map((vesselVisit: IVesselVisit) => ({ type: "[Containerized-load] Set Vessel Visit", vesselVisit })),
        catchError(() => EMPTY)
    ));

    $getInvoice = createEffect(() => this.actions$.pipe(
      ofType("[Containerized-load] Get Invoice"),
      mergeMap((action: { invoice: string }) =>
          this.containerizedLoadService.getInvoice(action.invoice).pipe(
            mergeMap((encryptedResponse) => {
              let response;

              if(encryptedResponse) response = JSON.parse(this.aesService.decrypt(encryptedResponse))[0];

              return of(response);
            })
          )
      ),
      map((invoice: IInvoiceManage) => ({ type: "[Containerized-load] Set Invoice", invoice })),
      catchError(() => EMPTY)
  ));

    $lockUnit = createEffect(() => this.actions$.pipe(
        ofType("[Containerized-load] Set Lock Unit"),
        mergeMap((action: { body: string, hasNotification: boolean, privilege: string, notificationData: string }) =>
            this.containerizedLoadService.lockUnit(action.body).pipe(
              mergeMap(_ => {
                this.matSnackBar.open(
                  $localize`:@@da521ee309134d050ab6cac892fda4a5ecc7f560a2e6eb043b488e548a34bae0: modules.containerized-load.lock.success`,
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
                      notificationInfo: action.notificationData,
                      privilegeId: action.privilege
                    }
                  }));
                }

                return of(_);
              }),
              catchError(_ => {
                this.matSnackBar.open(
                  $localize`:@@3be4c29d16c0aee2f710f8d7e450a91f9bbc738a7958fa450e3e1135e5302f8a: modules.containerized-load.lock.query.error`,
                  "",
                  {
                    verticalPosition: "top",
                    panelClass: ["error-snackbar"],
                    duration: 5000
                  }
                );

                return EMPTY;
              })
            )
        ),
        map(_ => ({ type: "[Containerized-load] Unit Locked Success" })),
        catchError(() => EMPTY)
    ));

    $unlockUnit = createEffect(() => this.actions$.pipe(
        ofType("[Containerized-load] Set Unlock Unit"),
        mergeMap((action: { body: string, hasNotification: boolean, privilege: string, notificationData: string }) =>
            this.containerizedLoadService.unlockUnit(action.body).pipe(
              mergeMap(_ => {
                this.matSnackBar.open(
                  $localize`:@@505c641093ae81c9605a30581b4522f3b0429a695aa3181f48b59a6ea7bb40bd: modules.containerized-load.unlock.success`,
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
                      notificationInfo: action.notificationData,
                      privilegeId: action.privilege
                    }
                  }));
                }

                return of(_);
              }),
              catchError(_ => {
                this.matSnackBar.open(
                  $localize`:@@a151ef4ee5b045fe217990f0050023ed36e4be764a410f7bbb23ea7922609f3a: modules.containerized-load.unlock.query.error`,
                  "",
                  {
                    verticalPosition: "top",
                    panelClass: ["error-snackbar"],
                    duration: 5000
                  }
                );

                return EMPTY;
              })
            )
        ),
        map(_ => ({ type: "[Containerized-load] Unit Unlocked Success" })),
        catchError(() => EMPTY)
    ));

    $getDataUnitNbr = createEffect(() => this.actions$.pipe(
      ofType("[Containerized-load] Get Invoices"),
      mergeMap((action: { unitNbr: string }) =>
          this.containerizedLoadService.getDataUnitNbr(action.unitNbr).pipe(
            mergeMap((result: string) => {
              return of(JSON.parse(this.aesService.decrypt(result)));
            }),
            catchError(() => EMPTY)
          )
      ),
      map((invoices: any) => ({ type: "[Containerized-load] Set Invoices", invoices })),
      catchError(() => EMPTY)
  ));

  $getCustomerContract = createEffect(() => this.actions$.pipe(
    ofType("[Containerized-load] get Customer Contract"),
    mergeMap((action: { nit: string }) =>
        this.containerizedLoadService.getCustomerContract(action.nit).pipe(
          catchError(() => EMPTY)
        )
    ),
    map((invoices: IRestResult<ICustomerContract>) => ({ type: "[Containerized-load] Set Customer Contract", invoices })),
    catchError(() => EMPTY)
  ));


  $updateAgentAndConsigneeInBl = createEffect(() => this.actions$.pipe(
    ofType("[Containerized-load] Get Update Agent And Consignee In Bl"),
    mergeMap((action: { body: INbrAgentAndConsigeeDTO }) =>
        this.containerizedLoadService.updateAgentAndConsigneeInBl(action.body).pipe(
          catchError((error) => {
            console.log(error);
            this.matSnackBar.open(
              $localize`:@@9550731151441BAE3AAAB1A8048E57E006181F29F57349282CFE79F000000004: module.documental.upload.file.notConsignee.message`,
              "",
              {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              }
            );

            return EMPTY;
          })
        )
    ),

    map((response: string) => ({ type: "[Containerized-load] Set Update Agent And Consignee In Bl", response }) ),
    //map((invoices: IRestResult<boolean>) => ({ type: "[Containerized-load] Set Update Agent And Consignee In Bl", invoices })),
    catchError(() => EMPTY)
  ));

  $getInvoiceCreate = createEffect(() => this.actions$.pipe(
    ofType("[Containerized-load] Get Invoice Create"),
    mergeMap((action: { body: IInvoiceCreate }) =>
        this.containerizedLoadService.invoiceCreate(action.body).pipe(
          catchError((error) => {
            console.log(error);

            this.matSnackBar.open(
              error.error.error,
              "",
              {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              }
            );

            return EMPTY;
          })
        )
    ),
    map((response: IInvoiceProforma) => ({ type: "[Containerized-load] Set Invoice Create", response })),
    catchError(() => EMPTY)
  ));

  $cancelProformaContainerizedLoad = createEffect(() => this.actions$.pipe(
    ofType("[Containerized-load] Get Cancel Proforma Containerized Load"),
    mergeMap((action: { body: IInvoiceProforma }) =>
        this.containerizedLoadService.cancelProformaContainerizedLoad(action.body).pipe(
          mergeMap((result: string) => {
            this.matSnackBar.open(
              result as string,
              "",
              {
                verticalPosition: "top",
                panelClass: ["success-snackbar"],
                duration: 5000
              }
            );

            return EMPTY;
          }),
          catchError((error) => {
            console.error(error);

            this.matSnackBar.open(
              "Hubo un error al cancelar la factura. Por favor intente nuevamente o contacte a Servicio al Cliente",
              "",
              {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              }
            );

            return EMPTY;
          })
        )
    ),
    map((response: string) => ({ type: "[Containerized-load] Set Cancel Proforma Containerized Load", response })),
    catchError(() => EMPTY)
  ));

  $getFinalizeInvoice = createEffect(() => this.actions$.pipe(
    ofType("[Containerized-load] Get Finalize Invoice"),
    mergeMap((action: { body: IInvoiceProforma }) =>
        this.containerizedLoadService.finalizeInvoice(action.body).pipe(
          catchError((error) => {
            console.error(error);

            this.matSnackBar.open(
              "No se pudo generar la factura para la(s) unidad(es). Por favor intente nuevamente o contacte a Servicio al Cliente",
              "",
              {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              }
            );

            return EMPTY;
          })
        )
    ),
    map((response: IInvoiceProforma) => ({ type: "[Containerized-load] Set Finalize Invoice", response })),
    catchError(() => EMPTY)
  ));

  $getDataAppointmentDetail = createEffect(() => this.actions$.pipe(
      ofType("[Containerized-load] Get Appointment"),
      mergeMap((action: { truckVisitNbr: string }) =>
          this.containerizedLoadService.getDataAppointmentDetail(action.truckVisitNbr).pipe(
            mergeMap((encryptedResponse) => {
              let response;

              if(encryptedResponse) response = JSON.parse(this.aesService.decrypt(encryptedResponse))[0];
              
              return of(response);
            })
          )
      ),
      map((appointment: any) => ({ type: "[Containerized-load] Set Appointment", appointment })),
      catchError(() => EMPTY)
  ));

  $getGeneratePin = createEffect(() => this.actions$.pipe(
    ofType("[Containerized-load] Get Generate Pin"),
    mergeMap((action: { body: IGeneratePinDTO[], hasNotification: boolean, privilege: string, notificationData: INotificationGeneratePinDTO }) =>
        this.utilService.generatePin(action.body).pipe(
          mergeMap((result: ITruckPin[]) => {
            this.matSnackBar.open(
              "Se generó el pin correctamente",
              "",
              {
                verticalPosition: "top",
                panelClass: ["success-snackbar"],
                duration: 5000
              }
            );

            if(action.hasNotification) {
              action.notificationData.agent = result[0].createdByCompanyNameLDAP;
              this.store.dispatch(getPrivilegeNotification({
                body: {
                  companyId: null,
                  mailsNotifications: null,
                  notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify(action.notificationData)),
                  privilegeId: action.privilege
                }
              }));
            }

            return of(result);
          }),
          catchError((error) => {
            console.error(error);

            return EMPTY;
          })
        )
    ),
    map((response: ITruckPin[]) => {
      return ({ type: "[Containerized-load] Set Generate Pin", pins: response });
    }),
    catchError(() => EMPTY)
  ));

  $getGeneratePinDeactivatePartial = createEffect(() => this.actions$.pipe(
    ofType("[Containerized-load] Get Generate Pin Deactivate Partial"),
    mergeMap((action: { body: IGeneratePinDeactivate, hasNotification: boolean, privilege: string, notificationData: INotificationGeneratePinDeactivate }) =>
        this.generatePinService.deletePin(action.body).pipe(
          mergeMap((result: IGeneratePinDeactivatePartial) => {
            this.matSnackBar.open(
              `Se eliminó el contenedor ${result.unitNbr} del pin correctamente`,
              "",
              {
                verticalPosition: "top",
                panelClass: ["success-snackbar"],
                duration: 5000
              }
            );

            if(action.hasNotification) {
              action.notificationData.createdAt = result.createdDate;
              action.notificationData.agent = result.createdByCompanyNameLDAP;
              this.store.dispatch(getPrivilegeNotification({
                body: {
                  companyId: null,
                  mailsNotifications: null,
                  notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify(action.notificationData)),
                  privilegeId: action.privilege
                }
              }));
            }

            return of(result);
          }),
          catchError((error) => {
            console.error(error);

            this.matSnackBar.open(
              error.error.error,
               "",
               {
                 verticalPosition: "top",
                 panelClass: ["error-snackbar"],
                 duration: 5000
               }
             );

            return EMPTY;
          })
        )
    ),
    map((response: IGeneratePinDeactivatePartial) => {
      return ({ type: "[Containerized-load] Set Generate Pin Deactivate Partial" });
    }),
    catchError(() => EMPTY)
  ));

  $getGeneratePinDeactivateTotal = createEffect(() => this.actions$.pipe(
    ofType("[Containerized-load] Get Generate Pin Deactivate Total"),
    mergeMap((action: { body: IGeneratePinDeactivate, hasNotification: boolean, privilege: string, notificationData: INotificationGeneratePinDeactivate }) =>
        this.generatePinService.deletePins(action.body).pipe(
          mergeMap((result: IGeneratePinDeactivateTotal) => {
            this.matSnackBar.open(
              `Se desactivó el PIN ${action.body.pinNbr} correctamente`,
              "",
              {
                verticalPosition: "top",
                panelClass: ["success-snackbar"],
                duration: 5000
              }
            );

            if(action.hasNotification) {
              action.notificationData.createdAt = result.createdAt;
              action.notificationData.hbl = result.blNbr;
              action.notificationData.agent = result.createdByCompanyNameLDAP;
              this.store.dispatch(getPrivilegeNotification({
                body: {
                  companyId: null,
                  mailsNotifications: null,
                  notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify(action.notificationData)),
                  privilegeId: action.privilege
                }
              }));
            }

            return of(result);
          }),
          catchError((error) => {
            console.error(error);

            this.matSnackBar.open(
             error.error.error,
              "",
              {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              }
            );

            return EMPTY;
          })
        )
    ),
    map((response: IGeneratePinDeactivateTotal) => {
      return ({ type: "[Containerized-load] Set Generate Pin Deactivate Total" });
    }),
    catchError(() => EMPTY)
  ));

    constructor(
      private readonly store: Store,
      private readonly actions$: Actions,
      private readonly containerizedLoadService: ContainerizedLoadService,
      private readonly matSnackBar: MatSnackBar,
      private readonly utilService: UtilService,
      private readonly aesService: AESEncryptionUtilService,
      private readonly generatePinService: GeneratePinService,
      private readonly router: Router,
      private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    ) { }
}
