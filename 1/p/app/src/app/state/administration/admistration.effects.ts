import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, mergeMap, Observable, of } from "rxjs";
import { IAdministrationActionsDTO } from "src/app/core/dto/administration-action.dto";
import { IAdministrationCreateUserDTO } from "src/app/core/dto/administration-create-user.dto";
import { IAdministrationIpAddressDTO } from "src/app/core/dto/administration-ip-address.dto";
import { IAdministrationNotificationPrivilegeDTO } from "src/app/core/dto/administration-notification-privilege.dto";
import { IAdministrationSecondPasswordDTO } from "src/app/core/dto/administration-second-password.dto";
import { IAssignRoleDTO } from "src/app/core/dto/assign-role.dto";
import { IAdministrationActionsHours } from "src/app/core/interfaces/administration-action-hours.interface";
import { IAdministrationActions } from "src/app/core/interfaces/administration-actions.interface";
import { IAdministrationIpAddress } from "src/app/core/interfaces/administration-ip.interface";
import { IAdministrationNotification } from "src/app/core/interfaces/administration-notification.interface";
import { IAdministrationRole } from "src/app/core/interfaces/administration-role.interface";
import { IAdministrationSecondPassword } from "src/app/core/interfaces/administration-second-password.interface";
import { IAdministrationUserNotification } from "src/app/core/interfaces/administration-user-notification.interface";
import { IAdministrationUser } from "src/app/core/interfaces/administration-user.interface";
import { IHTTPResponse } from "src/app/core/interfaces/http-response.interface";
import { IInfoUser } from "src/app/core/interfaces/info-user.interface";
import { IInvoicesPayload } from "src/app/core/interfaces/invoices-payload.interface";
import { IInvoice } from "src/app/core/interfaces/invoices.interface";
import { IRestResultAlt } from "src/app/core/interfaces/rest-result-alt.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { AdministrationService } from "src/app/modules/administration/services/administration.service";
import { getAllIpAddress, getCompanyUsers, getSecondPasswordMethod, getUserWithUsernameAndEmail } from "./administration.actions";
import { IAdministrationDisableUserDTO } from "src/app/core/interfaces/administration-disable-user.interface";
import { INotificationUpdateDataDTO } from "src/app/core/dto/notification-update-data.dto";
import { Router } from "@angular/router";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { getPrivilegeNotification } from "../shared/shared.actions";

@Injectable()
export class AdministrationEffects {

  getActionPrivileges$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Get Action Privileges"),
    mergeMap(() =>
      this.administrationService.getActionPrivileges().pipe(
        mergeMap((result: string) => {
          const decryptedData: IAdministrationActions[] = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

          if(!decryptedData.length) {
            this.matSnackBar.open("No existen acciones para configurar", "",
              {
                verticalPosition: "top",
                duration: 3000,
                panelClass: ["success-snackbar"]
              }
            );
          }

          return of(decryptedData);
        }),
        catchError(() => {
          this.matSnackBar.open("Se presentó un inconveniente al consultar las acciones", "",
            {
              verticalPosition: "top",
              duration: 3000,
              panelClass: ["success-snackbar"]
            }
          );

          return EMPTY;
        })
      )
    ),
    map((result: IAdministrationActions[]) => ({ type: "[Administration] Set Action Privileges", actions: result })),
    catchError(error => EMPTY)
  ));

  getActionPrivilege$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Get Action Privilege"),
    mergeMap((action: { privilege: string }) =>
      this.administrationService.getActionPrivilege(action.privilege).pipe(
        mergeMap((result: string) => {
          return of(JSON.parse(this.aesEncryptionUtilService.decrypt(result)));
        }),
        catchError(() => {
          this.matSnackBar.open("No se ha encontrado el privilegio", "",
            {
              verticalPosition: "top",
              duration: 3000,
              panelClass: ["error-snackbar"]
            },
          );

          return EMPTY;
        })
      )
    ),
    map((result: IAdministrationActionsHours[]) => ({ type: "[Administration] Set Action Privilege", selectedAction: result })),
    catchError(error => EMPTY)
  ));

  saveActionPrivilege$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Save Action Privilege"),
    mergeMap((action: { payload: IAdministrationActionsDTO, hasNotification: boolean, notificationData: string, privilege: string }) =>
      this.administrationService.saveActionPrivilege(action.payload).pipe(
        mergeMap((result) => {
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
        catchError((result: { error: string }) => {
          let errorMessage: string = "";

          if(result.error) errorMessage = `Se presentó un inconveniente al almacenar el registro: ${result.error}`;
          else errorMessage = "Se presentó un inconveniente al almacenar el registro";

          this.matSnackBar.open(errorMessage, "",
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
    map((result: void) => {
      this.matSnackBar.open("Configuración guardada satisfactoriamente", "",
        {
          verticalPosition: "top",
          duration: 3000,
          panelClass: ["success-snackbar"]
        }
      );

      return ({ type: "[Administration] Set Save Action Privilege" });
    }),
    catchError(error => EMPTY)
  ));

  getPrivilegesNotifiableCompany$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Get Privileges Notifiable Company"),
    mergeMap(() =>
      this.administrationService.getPrivilegesNotifiableCompany().pipe(
        mergeMap((result: string) => {
          const decryptedResponse: IAdministrationNotification[] = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

          if(!decryptedResponse.length) {
            this.matSnackBar.open("No existen acciones para configurar", "",
              {
                verticalPosition: "top",
                duration: 3000,
                panelClass: ["success-snackbar"]
              }
            );
          }

          return of(decryptedResponse);
        }),
        catchError(() => {
          this.matSnackBar.open("Se presentó un inconveniente al consultar las acciones", "",
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
    map((result: IAdministrationNotification[]) => ({ type: "[Administration] Set Privileges Notifiable Company", notifications: result })),
    catchError(error => EMPTY)
  ));

  updatePrivilegesNotifiableCompany$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Update Privileges Notifiable Company"),
    mergeMap((action: { payload: IAdministrationNotificationPrivilegeDTO }) =>
      this.administrationService.updatePrivilegesNotifiableCompany(action.payload).pipe(
        catchError((result: { error: string }) => {
          let errorMessage: string = "";

          if(result.error) errorMessage = `Se presentó un inconveniente al almacenar el registro: ${result.error}`;
          else errorMessage = "Se presentó un inconveniente al almacenar el registro";

          this.matSnackBar.open(errorMessage, "",
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
    map((result: IRestResult<null>) => {
      this.matSnackBar.open("Configuración guardada satisfactoriamente", "",
        {
          verticalPosition: "top",
          duration: 3000,
          panelClass: ["success-snackbar"]
        }
      );

      return ({ type: "[Administration] Response Update Privileges Notifiable Company" });
    }),
    catchError(error => EMPTY)
  ));

  getSecondPasswordMethod$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Get Second Password Method"),
    mergeMap((action: { nit: string }) =>
      this.administrationService.getSecondPasswordMethod(action.nit).pipe(
        catchError(() => {
          this.matSnackBar.open("Ha ocurrido un problema al obtener los datos.", "",
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
    map((result: IRestResult<IRestResult<IAdministrationSecondPassword>>) => ({ type: "[Administration] Set Second Password Method", secondPassword: result.result?.result })),
    catchError(error => EMPTY)
  ));

  updateSecondPasswordMethod$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Update Second Password Method"),
    mergeMap((action: { payload: IAdministrationSecondPasswordDTO, nit: string, hasNotification: boolean, notificationData: string, privilege: string }) =>
      this.administrationService.updateSecondPasswordMethod(action.payload).pipe(
        mergeMap((result: IRestResult<IRestResult<null>>) => {
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

          if(result.error) {
            this.matSnackBar.open(`Se presentó un inconveniente al almacenar el registro: ${result.error}`, "",
            {
              verticalPosition: "top",
              duration: 3000,
              panelClass: ["error-snackbar"]
            }
          );
          } else {
            this.matSnackBar.open("Configuración guardada satisfactoriamente", "",
            {
              verticalPosition: "top",
              duration: 3000,
              panelClass: ["success-snackbar"]
            }
          );
          }

          this.store.dispatch(getSecondPasswordMethod({ nit: action.nit }));

          return of(result);
        }),
        catchError((result: { error: string }) => {
          let errorMessage: string = "";

          if(result.error) errorMessage = `Se presentó un inconveniente al almacenar el registro: ${result.error}`;
          else errorMessage = "Se presentó un inconveniente al almacenar el registro";

          this.matSnackBar.open(errorMessage, "",
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
    map((result: IRestResult<IRestResult<null>>) => ({ type: "[Administration] Response Update Second Password Method" })),
    catchError(error => EMPTY)
  ));

  getCompanyUsers$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Get Company Users"),
    mergeMap(() =>
      this.administrationService.getCompanyUsers().pipe(
        mergeMap((result: string) => {
          return of(JSON.parse(this.aesEncryptionUtilService.decrypt(result)));
        }),
        catchError((result: { error: string }) => {
          if(result.error) {
            this.matSnackBar.open(result.error, "",
              {
                verticalPosition: "top",
                duration: 3000,
                panelClass: ["error-snackbar"]
              }
            );
          } else {
            this.matSnackBar.open("No se han encontrado usuarios", "",
              {
                verticalPosition: "top",
                duration: 3000,
                panelClass: ["error-snackbar"]
              }
            );
          }

          return EMPTY;
        })
      )
    ),
    map((result: IRestResult<IAdministrationUser>) => ({ type: "[Administration] Set Company Users", users: result.result })),
    catchError(error => EMPTY)
  ));

  getUserWithUsernameAndEmail$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Get User With Username And Email"),
    mergeMap((action: { user: string, email: string | null }) =>
      this.administrationService.getUserWithUsernameAndEmail(action.user, action.email).pipe(
        mergeMap((result: string) => {
          return of(JSON.parse(this.aesEncryptionUtilService.decrypt(result)))
        }),
        catchError(() => {
          this.matSnackBar.open("No se ha encontrado el usuario.", "",
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
    map((result: IRestResult<IInfoUser[]>) => ({ type: "[Administration] Set User With Username And Email", user: result.result })),
    catchError(error => EMPTY)
  ));

  resetUserPassword$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Reset User Password"),
    mergeMap((action: { user: string, email: string }) =>
      this.administrationService.resetUserPassword(action.user).pipe(
        mergeMap((result: IRestResult<string>) => {
          if(result.error) {
            this.matSnackBar.open(`El reseteo de clave para el usuario ${action.user} no fue exitoso: ${(result.error as unknown) as string}`, "",
              {
                verticalPosition: "top",
                duration: 3000,
                panelClass: ["error-snackbar"]
              }
            );

            return of(result);
          } else {
            this.matSnackBar.open(`El correo de reseteo de clave fue enviado al correo del usuario ${action.user}`, "",
              {
                verticalPosition: "top",
                duration: 3000,
                panelClass: ["success-snackbar"]
              }
            );
          }

          return of(result);
        }),
        catchError(() => {
          this.matSnackBar.open(`El reseteo de clave para el usuario ${action.user} no fue exitoso`, "",
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
    map((result: IRestResult<string>) => ({ type: "[Administration] Response Reset User Password", user: result.result })),
    catchError(error => EMPTY)
  ));

  getCompanyRoles$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Get Company Roles"),
    mergeMap((action: { user: string }) =>
      this.administrationService.getCompanyRoles(action.user).pipe(
        mergeMap((result: string) => {
          return of(JSON.parse(this.aesEncryptionUtilService.decrypt(result)));
        }),
        catchError(() => {
          this.matSnackBar.open("No se han podido obtener los roles.", "",
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
    map((result: IRestResult<IAdministrationRole[]>) => ({ type: "[Administration] Set Company Roles", roles: result.result })),
    catchError(error => EMPTY)
  ));

  assignRoles$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Assign Roles"),
    mergeMap((action: { payload: IAssignRoleDTO, hasNotification: boolean, notificationData: string, privilege: string }) =>
      this.administrationService.assignRoles(action.payload).pipe(
      mergeMap((result: IRestResult<void>) => {
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

        if(result.error) {
          this.matSnackBar.open(`Se presentó un inconveniente al asignar roles al usuario: ${(result.error as unknown) as string}`, "",
          {
            verticalPosition: "top",
            duration: 3000,
            panelClass: ["error-snackbar"]
          }
        );
        } else {
          this.matSnackBar.open("Roles asignados al usuario de manera exitosa", "",
          {
            verticalPosition: "top",
            duration: 3000,
            panelClass: ["success-snackbar"]
          }
        );
        }

        return of(result);
      }),
        catchError(() => {
          this.matSnackBar.open("No se han podido establecer los roles.", "",
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
    map((result: IRestResult<void>) => ({ type: "[Administration] Response Assign Roles" })),
    catchError(error => EMPTY)
  ));

  setAllIpAddress$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Get All Ip Address"),
    mergeMap((action: { payload: IAdministrationIpAddressDTO }) =>
      this.administrationService.execIpAddressOperation(action.payload).pipe(
        catchError(() => {
          this.matSnackBar.open("No se ha podido ejecutar la operacion.", "",
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
    map((result: IAdministrationIpAddress[]) => ({ type: "[Administration] Set All Ip Address", address: result })),
    catchError(error => EMPTY)
  ));

  createIpAddress$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Create Ip Address"),
    mergeMap((action: { payload: IAdministrationIpAddressDTO }) =>
      this.administrationService.execIpAddressOperation(action.payload).pipe(
        catchError(() => {
          this.matSnackBar.open("No se ha podido ejecutar la operacion.", "",
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
    map((result: IAdministrationIpAddress[]) => {
      this.store.dispatch(getAllIpAddress({
        payload: {
          companyId: null,
          action: "SEARCH",
          ips: []
       }
      }));

      return ({ type: "[Administration] Response Create Ip Address" })
    }),
    catchError(error => EMPTY)
  ));

  deleteIpAddress$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Delete Ip Address"),
    mergeMap((action: { payload: IAdministrationIpAddressDTO }) =>
      this.administrationService.execIpAddressOperation(action.payload).pipe(
        catchError(() => {
          this.matSnackBar.open("No se ha podido ejecutar la operacion.", "",
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
    map((result: IAdministrationIpAddress[]) => {
      this.store.dispatch(getAllIpAddress({
        payload: {
          companyId: null,
          action: "SEARCH",
          ips: []
       }
      }));

      return ({ type: "[Administration] Response Delete Ip Address" })
    }),
    catchError(error => EMPTY)
  ));


  createUser$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Create User"),
    mergeMap((action: { body: IAdministrationCreateUserDTO, hasNotification: boolean, notificationData: string, privilege: string }) =>
      this.administrationService.createUser(action.body).pipe(
        mergeMap((result: IRestResult<IHTTPResponse<void>>) => {
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

          if(result.error) {
            this.matSnackBar.open("Se presentó un inconveniente al almacenar el registro: " + ((result.error as unknown) as string), "",
              {
                verticalPosition: "top",
                duration: 3000,
                panelClass: ["error-snackbar"]
              }
            );
          } else {
            this.matSnackBar.open("Usuario creado de manera exitosa", "",
              {
                verticalPosition: "top",
                duration: 3000,
                panelClass: ["success-snackbar"]
              }
            );

            this.router.navigate(["/", "administracion"]);
          }

          return of(result);
        }),
        catchError((error: { code: string, error: string, message: string }) => {
          this.matSnackBar.open("Se presentó un inconveniente al almacenar el registro: " + error.error, "",
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
    map((result: IRestResult<IHTTPResponse<void>>) => {
      this.store.dispatch(getCompanyUsers());

      return ({ type: "[Administration] Response Create User" });
    }),
    catchError(error => EMPTY)
  ));

  updateUser$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Update User"),
    mergeMap((action: { body: IInfoUser, hasNotification: boolean, notificationData: string, privilege: string }) =>
      this.administrationService.updateUser(action.body).pipe(
        mergeMap((result: IRestResult<IHTTPResponse<null>>) => {
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

          if(result.error) {
            this.matSnackBar.open(`Se presentó un inconveniente al almacenar el registro: ${((result.error as unknown) as string)}`, "",
              {
                verticalPosition: "top",
                duration: 3000,
                panelClass: ["error-snackbar"]
              }
            );
          } else {
            this.matSnackBar.open("Usuario almacenado de manera exitosa", "",
            {
              verticalPosition: "top",
              duration: 3000,
              panelClass: ["success-snackbar"]
            }
          );

            this.router.navigate(["/", "administracion"]);
          }

          return of(result);
        }),
        catchError((result: { error: string }) => {
          let errorMessage: string = "";

          if(result.error) errorMessage = `Se presentó un inconveniente al almacenar el registro: ${result.error}`;
          else errorMessage = "Se presentó un inconveniente al almacenar el registro";

          this.matSnackBar.open(errorMessage, "",
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
    map((result: IRestResult<IHTTPResponse<null>>) => {
      this.store.dispatch(getCompanyUsers());

      return ({ type: "[Administration] Response Update User" });
    }),
    catchError(error => EMPTY)
  ));

  disableUser$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Disable User"),
    mergeMap((action: { body: IAdministrationDisableUserDTO }) =>
      this.administrationService.disableUser(action.body).pipe(
        mergeMap((result: IRestResult<null>) => {
          if(result.error) {
            this.matSnackBar.open(`Se presentó un inconveniente al almacenar el registro: ${result.error}`, "",
            {
              verticalPosition: "top",
              duration: 3000,
              panelClass: ["error-snackbar"]
            }
          );
          } else {
            this.matSnackBar.open("Usuario inactivado de manera exitosa", "",
            {
              verticalPosition: "top",
              duration: 3000,
              panelClass: ["success-snackbar"]
            }
          );
          }

          return of(result);
        }),
        catchError((result: { error: string }) => {
          let errorMessage: string = "";

          if(result.error) errorMessage = `Se presentó un inconveniente al almacenar el registro: ${result.error}`;
          else errorMessage = "Se presentó un inconveniente al almacenar el registro";

          this.matSnackBar.open(errorMessage, "",
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
    map((result: IRestResult<null>) => {
      this.store.dispatch(getCompanyUsers());

      return ({ type: "[Administration] Response Disable User" });
    }),
    catchError(error => EMPTY)
  ));

  getUserNotification$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Get User Notification"),
    mergeMap((action: { user: string }) =>
      this.administrationService.getMobileNotification(action.user).pipe(
        mergeMap((result: IRestResult<IAdministrationUserNotification>) => {
          if(result.error) {
            this.matSnackBar.open(`No se han encontrado datos de notificacion: ${result.error}`, "",
              {
                verticalPosition: "top",
                duration: 3000,
                panelClass: ["error-snackbar"]
              }
            );
          }

          return of(result);
        }),
        catchError((result: { error: string }) => {
          this.matSnackBar.open(`No se han encontrado datos de notificacion: ${result.error}`, "",
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
    map((result: IRestResult<IAdministrationUserNotification>) => ({ type: "[Administration] Set User Notification", notification: result.result })),
    catchError(error => EMPTY)
  ));

  updateUserNotification$ = createEffect(() => this.actions$.pipe(
    ofType("[Administration] Update Notification Data"),
    mergeMap((action: { body: INotificationUpdateDataDTO, user: string }) =>
      this.administrationService.updateNotificationData(action.body).pipe(
        mergeMap((result: string) => {
          const decryptedResponse: IRestResult<boolean> = JSON.parse(this.aesEncryptionUtilService.decrypt(result));

          if(decryptedResponse.error) {
            this.matSnackBar.open(`Se presentó un inconveniente al almacenar el registro: ${decryptedResponse.error}`, "",
            {
              verticalPosition: "top",
              duration: 3000,
              panelClass: ["error-snackbar"]
            }
          );
          }

          this.store.dispatch(getUserWithUsernameAndEmail({ user: action.user, email: null }));

          return of(decryptedResponse);
        }),
        catchError((result: { error: string }) => {
          let errorMessage: string = "";

          if(result.error) errorMessage = `Se presentó un inconveniente al almacenar el registro: ${result.error}`;
          else errorMessage = "Se presentó un inconveniente al almacenar el registro";

          this.matSnackBar.open(errorMessage, "",
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
    map((result: IRestResult<boolean>) => ({ type: "[Administration] Response Update Notification Data" })),
    catchError(error => EMPTY)
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly administrationService: AdministrationService,
    private readonly matSnackBar: MatSnackBar,
    private readonly router: Router,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService
  ) {}
}
