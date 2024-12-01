import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap, of } from "rxjs";
import { IDetachedLoad } from "src/app/core/interfaces/detached-load.interface";
import { ILockDTO } from "src/app/core/interfaces/lock-dto.interface";
import { IVesselVisit } from "src/app/core/interfaces/vessel-visit.interface";
import { DetachedLoadService } from "src/app/modules/detached-load/services/detached-load.service";
import { UtilService } from "src/app/shared/services/util.service";
import { cleanBillingData, getCancelProformaDetachedLoad, setfirstSearch } from "./detached-load.actions";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { cleanSelectedAgent, cleanSelectedCustomer, getPrivilegeNotification } from "../shared/shared.actions";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { ICreateBreakbulk } from "src/app/core/dto/create-breakbulk.dto";
import { IInvoiceProforma } from "src/app/core/interfaces/invoice-proforma.interface";
import { Router } from "@angular/router";
import { cleanBillingData as CCcleanBillingData} from 'src/app/state/containerized-load/containerized-load.actions';
import { INbrAgentAndConsigeeDTO } from "src/app/core/dto/nbr-agent-and-consigee.dto";
import { IGeneratePinDTO, INotificationGeneratePinDTOCS } from "src/app/core/dto/generate-pin.dto";
import { ITruckPin } from "src/app/core/interfaces/truck-pin.interface";
import { IGeneratePinDeactivateTotal } from "src/app/core/dto/generate-pin-deactivate-total.dto";
import { IGeneratePinDeactivate } from "src/app/core/interfaces/generate-pin-deactivate.interface";
import { GeneratePinService } from "src/app/modules/detached-load/services/generate-pin.services";
import { Base64EncryptionUtilService } from "src/app/core/auth/services/base64-encryption-util.service";
import { ICausalCancelationAppointment } from "src/app/core/interfaces/ICausalCancelationAppointment.interface";

@Injectable()
export class DetachedLoadEffects {

    $getContainerizedLoad = createEffect(() => this.actions$.pipe(
        ofType("[Detached-load] Get Detached Load"),
        mergeMap((action: { nbr: string }) =>
            this.detachedLoadService.getDetachedLoad((action.nbr)).pipe(
              mergeMap(encryptedLots => {
                let lots = [];

                this.store.dispatch(setfirstSearch({ search: true }));
                if(encryptedLots) lots = JSON.parse(this._AESEncryptionUtilService.decrypt(encryptedLots))

                return of(lots);
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
        map((detachedLoad: IDetachedLoad[]) => ({ type: "[Detached-load] Set Detached Load", detachedLoad })),
        catchError(() => EMPTY)
    ));

    $getVesselVisit = createEffect(() => this.actions$.pipe(
        ofType("[Detached-load] Get Vessel Visit"),
        mergeMap((action: { vesselVisitID: string }) =>
            this.utilService.getVesselVisit(action.vesselVisitID).pipe(
              mergeMap(result => {
                return of(JSON.parse(this._AESEncryptionUtilService.decrypt(result)));
              }),
              catchError(error => {
                  console.error(error)
                  return EMPTY;
                }
              )
            )
        ),
        map((vesselVisit: IVesselVisit) => ({ type: "[Detached-load] Set Vessel Visit", vesselVisit })),
        catchError(() => EMPTY)
    ));

    $lockUnit = createEffect(() => this.actions$.pipe(
      ofType("[Detached-load] Set Lock Unit"),
      mergeMap((action: { body: ILockDTO, hasNotification: boolean, privilege: string, notificationData: string }) =>
          this.detachedLoadService.lockUnit(action.body).pipe(
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
                $localize`:@@39f23f20f1199efb97c66e8e422781e9b5e282f2f3c7f7c5e2314ee09b071f26: modules.detached-load.lock.query.error`,
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
      map(_ => ({ type: "[Detached-load] Unit Locked Success" })),
      catchError(() => EMPTY)
  ));

  $unlockUnit = createEffect(() => this.actions$.pipe(
      ofType("[Detached-load] Set Unlock Unit"),
      mergeMap((action: { body: ILockDTO, hasNotification: boolean, privilege: string, notificationData: string  }) =>
          this.detachedLoadService.unlockUnit(action.body).pipe(
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
                $localize`:@@f1765de45a7fec4a4b5fb68f751431803d87d528288c82c8df4b4f04d96b66c6: modules.detached-load.unlock.error`,
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
      map(_ => ({ type: "[Detached-load] Unit Unlocked Success" })),
      catchError(() => EMPTY)
  ));

  $getDataAppointmentDetail = createEffect(() => this.actions$.pipe(
    ofType("[Detached-load] Get Appointment"),
    mergeMap((action: { truckVisitNbr: string }) =>
          this.detachedLoadService.getDataAppointmentDetail(action.truckVisitNbr).pipe(
            mergeMap((result: string) => {
              return of(JSON.parse(this._AESEncryptionUtilService.decrypt(result)));
            }),
            catchError(error => {
              console.error(error);

              return EMPTY;
            })
          )
    ),
    map((appointment: any) => ({ type: "[Detached-load] Set Appointment", appointment })),
    catchError(() => EMPTY)
  ));

  $getUpdateConsigneeCancelDraftBbk = createEffect(() => this.actions$.pipe(
    ofType("[Detached-load] get Update Consignee Cancel Draft Bbk"),
    mergeMap((action: { nbr: string }) =>
          this.detachedLoadService.updateConsigneeCancelDraftBbk(action.nbr).pipe(
            catchError(error => {
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
    map((response: IRestResult<string>) => ({ type: "[Detached-load] set Update Consignee Cancel Draft Bbk", response })),
    catchError(() => EMPTY)
  ));

  $getCreateBreakbulkDraft = createEffect(() => this.actions$.pipe(
    ofType("[Detached-load] Get Create Breakbulk Draft"),
    mergeMap((action: { hbl: string }) =>
          this.detachedLoadService.createBreakbulkDraft(action.hbl).pipe(
            catchError(error => {
              console.error(error);

              return EMPTY;
            })
          )
    ),
    map((response: IRestResult<any>) => ({ type: "[Detached-load] Set Create Breakbulk Draft", response })),
    catchError(() => EMPTY)
  ));

  $getCreateBreakbulk = createEffect(() => this.actions$.pipe(
    ofType("[Detached-load] Get Create Breakbulk"),
    mergeMap((action: { body: ICreateBreakbulk }) =>
          this.detachedLoadService.createBreakbulk(action.body).pipe(
            mergeMap((result: IInvoiceProforma) => {
              if(result.totalTotal === 0) {
                

                this.router.navigate(["/", "carga-suelta"]);
                this.store.dispatch(getCancelProformaDetachedLoad({ breakbulkDraft: result.draftNumber.toString() as string,
                  message: "No hay cargos facturables a la fecha"
                 }));
                this.store.dispatch(CCcleanBillingData());
                this.store.dispatch(cleanBillingData());
                this.store.dispatch(cleanSelectedCustomer());
                this.store.dispatch(cleanSelectedAgent());

                return EMPTY;
              } 
              
              return of(result);
            }),
            catchError(error => {
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

              this.router.navigate(["/", "carga-suelta"]);
              this.store.dispatch(CCcleanBillingData());
              this.store.dispatch(cleanBillingData());
              this.store.dispatch(cleanSelectedCustomer());
              this.store.dispatch(cleanSelectedAgent());

              return EMPTY;
            })
          )
    ),
    map((response: IInvoiceProforma) => ({ type: "[Detached-load] Set Create Breakbulk", response })),
    catchError(() => EMPTY)
  ));

  $getCancelProformaDetachedLoad = createEffect(() => this.actions$.pipe(
    ofType("[Detached-load] Get Cancel Proforma Detached Load"),
    mergeMap((action: { breakbulkDraft: string, message: string }) =>
          
          this.detachedLoadService.cancelProformaDetachedLoad(action.breakbulkDraft).pipe(
            mergeMap((result: string) => {
              let message = result as string;
              if (action.message !== "") {
                message = action.message;
                 this.matSnackBar.open(
                  message,
                  "",
                  {
                    verticalPosition: "top",
                    panelClass: ["error-snackbar"],
                    duration: 5000
                  }
                );
              }else{
                this.matSnackBar.open(
                  message,
                  "",
                  {
                    verticalPosition: "top",
                    panelClass: ["success-snackbar"],
                    duration: 5000
                  }
                );
  
              }
              
              return EMPTY;
            }),
            catchError(error => {
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
    map((response: string) => ({ type: "[Detached-load] Set Cancel Proforma Detached Load", response })),
    catchError(() => EMPTY)
  ));

  $getFinalizeBbkInvoice = createEffect(() => this.actions$.pipe(
    ofType("[Detached-load] Get Finalize Bbk Invoice"),
    mergeMap((action: { breakbulkDraft: string }) =>
          this.detachedLoadService.finalizeBbkInvoice(action.breakbulkDraft).pipe(
            catchError(error => {
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
    map((response: string) => ({ type: "[Detached-load] Set Finalize Bbk Invoice", response })),
    catchError(() => EMPTY)
  ));

  $updateAgentAndConsigneeInHBl = createEffect(() => this.actions$.pipe(
    ofType("[Detached-load] Get Update Agent And Consignee In HBl"),
    mergeMap((action: { body: INbrAgentAndConsigeeDTO }) =>
        this.detachedLoadService.updateAgentAndConsigneeInHBl(action.body).pipe(
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

    map((response: string) => ({ type: "[Detached-load] Set Update Agent And Consignee In HBl", response }) ),
    catchError(() => EMPTY)
  ));


  $getGeneratePin = createEffect(() => this.actions$.pipe(
    ofType("[DETACHED-LOAD] Get Generate Pin"),
    mergeMap((action: { body: IGeneratePinDTO[], hasNotification: boolean, privilege: string, notificationData: INotificationGeneratePinDTOCS }) =>
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
              action.notificationData.createdByCompanyNameLDAP = result[0].createdByCompanyNameLDAP;
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
      return ({ type: "[DETACHED-LOAD] Set Generate Pin", pins: response });
    }),
    catchError(() => EMPTY)
));

$getGeneratePinDeactivateTotal = createEffect(() => this.actions$.pipe(
  ofType("[Detached-load] Get Generate Pin Deactivate Total"),
  mergeMap((action: { body: IGeneratePinDeactivate, hasNotification: boolean, privilege: string, notificationData: string }) =>
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
            this.store.dispatch(getPrivilegeNotification({
              body: {
                companyId: null,
                mailsNotifications: null,
                notificationInfo: action.notificationData,
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
    return ({ type: "[Detached-load] Set Generate Pin Deactivate Total" });
  }),
  catchError(() => EMPTY)
));


getCausalCancellationAppointment$ = createEffect(() => this.actions$.pipe(
  ofType("[Detached-load] get Causal Cancellation Appointment"),
  mergeMap(() =>
    this.utilService.getCausalCancellationAppointment().pipe(
      catchError((error) => {
        console.error(error);

        return EMPTY;
      })
    )
  ),
  map((response: string) => ({ type: "[Detached-load] set Causal Cancellation Appointment", causalCancellationAppointment: JSON.parse(this._AESEncryptionUtilService.decrypt(response)) })),
  catchError(error => EMPTY)
));

$getCancelAppointment = createEffect(() => this.actions$.pipe(
  ofType("[Detached-load] get Cancel Appointment"),
  mergeMap((action: { body: {driver: {cardId: string, name: string, license: string}, 
                             appointmentsNbr: string}, 
                             parameters: {tvaNbr: string, causalCanAppointment: string, causalCanDescription: string, 
                              cargaContenerizada: boolean, hasNotification: boolean, userId: string, createdByLDAP: string, fullName: string, appointmentDate: string, createdByCompanyNameLDAP: string,
                              truckVisitNbr: string, truck: string, containers: string[], siteAppointment: string, hbl: any
                             }}) =>
      this.utilService.getCancelAppointment(action.body, action.parameters.tvaNbr, action.parameters.causalCanAppointment, action.parameters.causalCanDescription,
        action.parameters.cargaContenerizada).pipe(
        mergeMap((result: any) => {
          if(result && (result.state === "Canceled" || result.id)){
            this.matSnackBar.open(
              "Se canceló la cita correctamente",
              "",
              {
                verticalPosition: "top",
                panelClass: ["success-snackbar"],
                duration: 5000
              }
            );
            if(action.parameters.hasNotification) {
              if( action.parameters.cargaContenerizada){
                this.store.dispatch(getPrivilegeNotification({
                  body: {
                    companyId: null,
                    mailsNotifications: null,
                    notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify({
                      userId: action.parameters.userId,
                      createdByLDAP: action.parameters.createdByLDAP, 
                      fullName: action.parameters.fullName, 
                      containers: action.parameters.containers, 
                      appointmentDate: action.parameters.appointmentDate,
                      name: action.body.driver.name,
                      cardId: action.body.driver.cardId,
                      licensy:  action.body.driver.cardId,
                      truck: action.parameters.truck,
                      createdByCompanyNameLDAP: action.parameters.createdByCompanyNameLDAP,
                      truckVisitNbr: action.parameters.truckVisitNbr,
                      location: action.parameters.siteAppointment,
                      driver: action.body.driver
                    })),
                    privilegeId: "CC_CIT_ELI"
                  }
                }));
              }else{
                this.store.dispatch(getPrivilegeNotification({
                  body: {
                    companyId: null,
                    mailsNotifications: null,
                    notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify({
                      userId: action.parameters.userId,
                      createdByLdap: action.parameters.createdByLDAP, 
                      fullName: action.parameters.fullName, 
                      containers: action.parameters.containers, 
                      appointmentDate: action.parameters.appointmentDate,
                      name: action.body.driver.name,
                      cardId: action.body.driver.cardId,
                      licensy:  action.body.driver.cardId,
                      truck: action.parameters.truck,
                      createdByCompanyNameLDAP: action.parameters.createdByCompanyNameLDAP,
                      truckVisitAppointmentNbr: action.parameters.truckVisitNbr, 
                      location: action.parameters.siteAppointment,
                      driver: action.body.driver,
                      hbl: action.parameters.hbl
                    })),
                    privilegeId: "CS_CIT_ELI"
                  }
                }));
              }
             
            }
          }
          else{
            this.matSnackBar.open(
              "No se pudo cancelar la cita",
              "",
              {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
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
  map((response: any) => {
    return ({ type: "[Detached-load] set Cancel Appointment", response: response });
  }),
  catchError(() => EMPTY)
));


  constructor(
      private readonly actions$: Actions,
      private readonly detachedLoadService: DetachedLoadService,
      private readonly matSnackBar: MatSnackBar,
      private readonly utilService: UtilService,
      private readonly store: Store,
      private readonly _AESEncryptionUtilService: AESEncryptionUtilService,
      private readonly router: Router,
      private readonly generatePinService: GeneratePinService,
      private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
  ) { }
}
