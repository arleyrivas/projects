import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, concatMap, EMPTY, map, mergeMap, of, switchMap, tap, withLatestFrom } from "rxjs";
import { INotificationPrivilegeResponse } from "src/app/core/dto/notification-privilege-response.dto";
import { INotificationPrivilege } from "src/app/core/dto/notification-privilege.dto";
import { ISecondPasswordGenerateResponse } from "src/app/core/dto/second-password-generate-response.dto";
import { ISecondPasswordGenerate } from "src/app/core/dto/second-password-generate.dto";
import { ISecondPasswordValidationResponse } from "src/app/core/dto/second-password-validation-response.dto";
import { ISecondPasswordValidation } from "src/app/core/dto/second-password-validation.dto";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { UtilService } from "src/app/shared/services/util.service";
import { retrieveApiGatewayData } from "../api-gateway/api-gateway.actions";
import { MatDialog } from "@angular/material/dialog";
import { SelectCompanyTypeDialogComponent } from "src/app/shared/components/select-company-type-dialog/select-company-type-dialog.component";
import { getImpersonalizated, setImpersonated } from "./shared.actions";
import { ICompanyType } from "src/app/core/interfaces/company-type.interface";
import { ICompany } from "src/app/core/interfaces/company.interface";
import { SelectCompanyTypeMempDialogComponent } from "src/app/shared/components/select-company-type-memp-dialog/select-company-type-memp-dialog.component";
import { IImpersonalizated } from "src/app/core/interfaces/impersonalizated-dto.interface";
import { ICustomer } from "src/app/core/dto/customer.dto";
import { ICustomerIdOrName } from "src/app/core/dto/customer-id-or-name.dto";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { IAgentIdOrNameSearch } from "src/app/core/interfaces/agent-id-or-name-search.interface";
import { IAllConsigneesDTO } from "src/app/core/dto/all-consignees.dto";
import { ITruckPin } from "src/app/core/interfaces/truck-pin.interface";
import { IGeneratePinDTO } from "src/app/core/dto/generate-pin.dto";
import { ITruck } from "src/app/core/interfaces/truck.interface";
import { IDocumentationTruck } from "src/app/core/interfaces/documentation-truck.interface";
import { ICapacityTruck } from "src/app/core/interfaces/capacity-truck.interface";
import { IPin } from "src/app/core/interfaces/pin.interface";
import { IValidationPin, IvalidationPinContainerized } from "src/app/core/interfaces/validation-pin.interface";
import { IDetachedLoad } from "src/app/core/interfaces/detached-load.interface";
import { IDriver, IDriverValidation } from "src/app/core/interfaces/driver.interface";
import { IDisponibilidadCitas } from "src/app/core/interfaces/disponibilidad-citas.interface";
import { IHorariosDisponibles, IHorariosDisponiblesCC } from "src/app/core/interfaces/storage-cita.interface";
import { IDataAppointmentCS } from "src/app/core/interfaces/data-appointment-cs.interface";
import { IContainerizedLoad } from "src/app/core/interfaces/containerized-load.interface";
import { IAgentRepresentation } from "src/app/core/interfaces/agent-representation.interface";
import { StorageserviceService } from "src/app/shared/services/storageservice.service";
import { setValidationPin } from "./shared.actions";
import { IDataAppointmentCC } from "src/app/core/interfaces/data-appointment-cc.interface";

@Injectable()
export class SharedEffects {

  getInvoicePDF$ = createEffect(() => this.actions$.pipe(
    ofType("[Billing] Get PDF Invoice"),
    mergeMap((action: { invoice: string }) =>
      this.utilService.getInvoicePDF(action.invoice).pipe(
        catchError(() => {
          this.matSnackBar.open("Error al generar la pre-factura en Pdf", "",
            {
              verticalPosition: "top",
              panelClass: ["error-snackbar"],
              duration: 3000
            }
          );

          return EMPTY;
        })
      )
    ),
    map(file => ({ type: "[Billing] Set PDF Invoice", file })),
    catchError(error => EMPTY)
  ));

  getPdfFile$ = createEffect(() => this.actions$.pipe(
    ofType("[Queries] Get PDF File"),
    mergeMap((action: { url: string }) =>
      this.utilService.getPdfFile(action.url).pipe(
        catchError(() => {
          this.matSnackBar.open("Error al generar el Pdf", "",
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
    map(file => ({ type: "[Queries] Set PDF File", file })),
    catchError(error => EMPTY)
  ));
// /user/impersonalizated
  getSecondPassword$ = createEffect(() => this.actions$.pipe(
    ofType("[Doble-Authentication] Get Second Password"),
    mergeMap((action: { body: ISecondPasswordGenerate }) =>
      this.utilService.generateSecondPassword(action.body)
    ),
    map((response: ISecondPasswordGenerateResponse) => ({ type: "[Doble-Authentication] Set Second Password", response })),
    catchError(error => EMPTY)
  ));

  getSecondPasswordValidation$ = createEffect(() => this.actions$.pipe(
    ofType("[Doble-Authentication] Get Second Password Validation"),
    mergeMap((action: { body: ISecondPasswordValidation }) =>
      this.utilService.generateSecondValidation(action.body)
    ),
    map((response: ISecondPasswordValidationResponse) => ({ type: "[Doble-Authentication] Set Second Password Validation", response })),
    catchError(error => EMPTY)
  ));

  getPrivilegeNotification$ = createEffect(() => this.actions$.pipe(
    ofType("[Notification] Get Privilege Notification"),
    mergeMap((action: { body: INotificationPrivilege }) =>
      this.utilService.notifyPrivilege(action.body).pipe(
        mergeMap((result: string) => {
          return of(JSON.parse(this.aesEncryptionUtilService.decrypt(result)));
        }),
        catchError(error => {
          console.error(error);

          return EMPTY;
        })
      )
    ),
    map((response: INotificationPrivilegeResponse) => ({ type: "[Notification] Set Privilege Notification", response })),
    catchError(error => EMPTY)
  ));

  validateHourRestriction$ = createEffect(() => this.actions$.pipe(
    ofType("[Hour-Restriction] Get Validate Hour Restriction"),
    mergeMap((action: { privilege: string }) =>
      this.utilService.validateHourRestriction(action.privilege)
    ),
    map((response: IRestResult<string>) => ({ type: "[Hour-Restriction] Set Validate Hour Restriction", response })),
    catchError(error => EMPTY)
  ));

  getAgent$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Agent"),
    mergeMap((action: { idOrName: string }) =>
      this.utilService.getAgent(action.idOrName)
    ),
    map((response: IAgentIdOrNameSearch[]) => ({ type: "[GLOBAL] Set Agent", response })),
    catchError(error => EMPTY)
  ));

  getTruckers$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Truckers"),
    mergeMap((action: { criteria: string, consigneeId: string }) =>
      this.utilService.getTruckers(action.criteria, action.consigneeId).pipe(
        catchError((error) => {
          console.error(error);

          return EMPTY;
        })
      )
    ),
    map((response: IAgentIdOrNameSearch[]) => ({ type: "[GLOBAL] Set Truckers", response })),
    catchError(error => EMPTY)
  ));


  getAllConsignees$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get All Consignees"),
    mergeMap(() =>
      this.utilService.getAllConsignees().pipe(
        catchError((error) => {
          console.error(error);

          return EMPTY;
        })
      )
    ),
    map((response: IAllConsigneesDTO) => ({ type: "[GLOBAL] Set All Consignees", allConsignees: response })),
    catchError(error => EMPTY)
  ));

  switchUser$ = createEffect(() => this.actions$.pipe(
    ofType("[Sidebar] Get Switch User"),
    mergeMap((action: { companyId: string, companyName: string, companyType: string, companyTypeName: string }) =>
      this.utilService.switchUser(action.companyId, action.companyName, action.companyType, action.companyTypeName).pipe(
        catchError((error) => {
          this.store.dispatch(getImpersonalizated());
          this.store.dispatch(setImpersonated({ impersonated: false }));
          this.store.dispatch(retrieveApiGatewayData());

          return EMPTY;
        })
      )
    ),
    map(() => {
      return ({ type: "[Sidebar] Set Switch User" });
    }),
    catchError(error => EMPTY)
  ));

  backToInitialUser$ = createEffect(() => this.actions$.pipe(
    ofType("[Sidebar] Get Back To Initial User"),
    mergeMap((action: { isMemp: boolean }) =>
      this.utilService.backToInitialUser().pipe(
        catchError((error) => {
          this.store.dispatch(getImpersonalizated());
          this.store.dispatch(setImpersonated({ impersonated: true }));
          this.store.dispatch(retrieveApiGatewayData());

          if(action.isMemp) {
            this.matDialog.open(SelectCompanyTypeMempDialogComponent, {
              width: "40rem",
              disableClose: true
            });
          } else {
            this.matDialog.open(SelectCompanyTypeDialogComponent, {
              width: "40rem",
              disableClose: true
            });
          }

          return EMPTY;
        })
      )
    ),
    map(() => {
      return ({ type: "[Sidebar] Set Back To Initial User" });
    }),
    catchError(error => EMPTY)
  ));

  companyTypeList$ = createEffect(() => this.actions$.pipe(
    ofType("[Sidebar] Get Company Type List"),
    mergeMap(() =>
      this.utilService.getCompanyTypesList().pipe(
        catchError((error) => {
          console.error(error);

          return EMPTY;
        })
      )
    ),
    map((result: ICompanyType[]) => {
      return ({ type: "[Sidebar] Set Company Type List", result });
    }),
    catchError(error => EMPTY)
  ));

  getCompaniesByTypeAndFilter$ = createEffect(() => this.actions$.pipe(
    ofType("[Sidebar] Get Companies By Type And Filter"),
    mergeMap((action: { companyType: string, filter: string, validate: boolean }) =>
      this.utilService.getcompaniesByTypeAndFilter(action.companyType, action.filter, action.validate).pipe(
        catchError((error) => {
          console.error("error");
          console.error(error);

          return EMPTY;
        })
      )
    ),
    map((result: ICompany[]) => {
      return ({ type: "[Sidebar] Set Companies By Type And Filter", result });
    }),
    catchError(error => EMPTY)
  ));

  getImpersonalizated$ = createEffect(() => this.actions$.pipe(
    ofType("[Sidebar] Get Impersonalizated"),
    mergeMap(() =>
      this.utilService.getImpersonalizated().pipe(
        catchError((error) => {
          console.error(error);

          return EMPTY;
        })
      )
    ),
    map((result: IImpersonalizated) => {
      return ({ type: "[Sidebar] Set Impersonalizated", impersonalizated: result });
    }),
    catchError(error => EMPTY)
  ));

  getCustomer$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Customer"),
    mergeMap((action: { idOrName: string, agent: string | null }) =>
      this.utilService.getCustomer(action.idOrName, action.agent).pipe(
        mergeMap((result: string) => {
          const decryptedResult: ICustomerIdOrName = JSON.parse(this.aesEncryptionUtilService.decrypt(result));
          return of(decryptedResult);
        }),
        catchError((error) => {
          console.error(error);

          return EMPTY;
        })
      )
    ),
    map((result: ICustomerIdOrName) => {
      return ({ type: "[GLOBAL] Set Customer", customer: result.agentRepresentation });
    }),
    catchError(error => EMPTY)
  ));

  $getGeneratePin = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Generate Pin"),
    mergeMap((action: { body: IGeneratePinDTO[] }) =>
        this.utilService.generatePin(action.body).pipe(
          catchError((error) => {
            console.error(error);

            return EMPTY;
          })
        )
    ),
    map((response: ITruckPin[]) => {
      return ({ type: "[GLOBAL] Set Generate Pin", pins: response });
    }),
    catchError(() => EMPTY)
  ));

  $getPDFPin = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get PDF Pin"),
    mergeMap((action: { pinNbr: string }) =>
        this.utilService.getPDFPin(action.pinNbr).pipe(
          catchError((error) => {
            console.error(error);

            return EMPTY;
          })
        )
    ),
    map((response: void) => {
      return ({ type: "[GLOBAL] Set PDF Pin" });
    }),
    catchError(() => EMPTY)
  ));
  getIdleTimeout$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Idle Timeout"),
    mergeMap(() =>
      this.utilService.getIdleTimeout().pipe(
        catchError((error) => {
          console.error(error);

          return EMPTY;
        })
      )
    ),
    map((result: string) => {
      return ({ type: "[GLOBAL] Set Idle Timeout", idleTimeout: result });
    }),
    catchError(error => EMPTY)

  ));


  getPlate$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Plate"),
    mergeMap((action: { placa: string }) =>
      this.utilService.getPlate(action.placa).pipe(
        mergeMap((result: ITruck) => {
          return of(result);
        })
      )
    ),
    map((result: ITruck) => {
      return ({ type: "[GLOBAL] Set Truck", response: result });
    }),
    catchError(error => EMPTY)
  ));

  getVehicleDocumentation$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Vehicle Documentation"),
    mergeMap((action: { placa: string }) =>
      this.utilService.getDocumentationTruck(action.placa).pipe(
        mergeMap((result: IDocumentationTruck[]) => {
          return of(result);
        })
      )
    ),
    map((result: IDocumentationTruck[]) => {
      return ({ type: "[GLOBAL] Set Vehicle Documentation", documentationTruck: result });
    }),
    catchError(error => EMPTY)
  ));

  getCapacityTruck$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Capacity Truck"),
    mergeMap((action: { placa: string }) =>
      this.utilService.getCapacityTruck(action.placa).pipe(
        mergeMap((result: string) => {
          const decryptedResponse: ICapacityTruck[] = JSON.parse(this.aesEncryptionUtilService.decrypt(result));
          return of(decryptedResponse);
        })
      )
    ),
    map((result: ICapacityTruck[]) => {
      return ({ type: "[GLOBAL] Set Capacity Truck", response: result });
    }),
    catchError(error => EMPTY)
  ));
/* 
  $getValidationPin = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Validation Pin"),
    switchMap((body: IValidationPin) =>
      this.utilService.getValidacionPin(body).pipe(
        map((result: string) => {
          const decryptedResponse = JSON.parse(this.aesEncryptionUtilService.decrypt(result));
          return { decryptedResponse, body }; // Pasar both decrypted response and body
        }),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
    map(({ decryptedResponse, body }) => {
      // Acceder a una propiedad del body
      console.log("response", decryptedResponse);
      const propertyFromBody = body.pinParaEliminar;
      decryptedResponse.map((item: any) => {
        item.pinParaEliminar = propertyFromBody;
      });
      return ({ type: "[GLOBAL] Set Validation Pin", validation: decryptedResponse, additionalProperty: propertyFromBody });
    }),
    catchError(() => EMPTY)
  )); */

  $getValidationPin = createEffect(() => this.actions$.pipe(
    
    ofType("[GLOBAL] Get Validation Pin"),
    switchMap((body: IValidationPin) =>
      this.utilService.getValidacionPin(body).pipe(
        map((response: string) => ({ body, response })),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
    map(({ body, response }) => {
      // Acceder a una propiedad del body
      const propertyFromBody = body.pinParaEliminar;
      let decryptedResponse: IDetachedLoad[] = JSON.parse(this.aesEncryptionUtilService.decrypt(response));
      decryptedResponse.map(item => {
        item.pinParaEliminar = propertyFromBody
      })
      
      return ({ type: "[GLOBAL] Set Validation Pin", validation: response, additionalProperty: propertyFromBody });
    }),
    catchError(() => EMPTY)
  ));

  $setValidationPin = createEffect(() =>
    this.actions$.pipe(
      ofType(setValidationPin),  // Escucha la acción updateState
      tap(action => {
        this.storageService.setDataPin(action.validation);
      })
    ),
    { dispatch: false } // No despacha ninguna acción nueva
  );

  getDrivers$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Drivers"),
    mergeMap((action: { criteria: string}) =>
      this.utilService.getDrivers(action.criteria).pipe(
        mergeMap((result: string) => {
          return of(JSON.parse(this.aesEncryptionUtilService.decrypt(result)));
        }),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
   
    map((result: IDriver[]) => { 
      return ({ type: "[GLOBAL] set Drivers", response: result });
    }),
    catchError(() => EMPTY)
  ));

  getValidationDrivers$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Validacion Driver"),
    mergeMap((action: { license: string}) =>
      this.utilService.getValidationDriver(action.license).pipe(
        mergeMap((result: string) => {
          return of(JSON.parse(this.aesEncryptionUtilService.decrypt(result)));
        }),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
   
    map((result: IDriverValidation[]) => { 
      return ({ type: "[GLOBAL] Set Validacion Driver", response: result });
    }),
    catchError(() => EMPTY)
  ));


  getValidationServiceDrivers$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Validation Service Driver"),
    mergeMap((action: { license: string}) =>
      this.utilService.getValidationServiceDriver(action.license).pipe(
        mergeMap((result: string) => {
          return of(JSON.parse(this.aesEncryptionUtilService.decrypt(result)));
        }),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
   
    map((result: IDriverValidation[]) => { 
      return ({ type: "[GLOBAL] Set Validation Service Driver", response: result });
    }),
    catchError(() => EMPTY)
  ));


  getCitasDisponibles$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Citas Disponibles"),
    mergeMap(() =>
      this.utilService.getDiasDisponibles().pipe(
        mergeMap((result: string) => {
          return of(JSON.parse(this.aesEncryptionUtilService.decrypt(result)));
        }),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
   
    map((result: IDisponibilidadCitas[]) => { 
      return ({ type: "[GLOBAL] Set Citas Disponibles", response: result });
    }),
    catchError(() => EMPTY)
  ));

  $getStorageCita = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Horarios Disponibles"),
    switchMap((body) =>
      this.utilService.getHorariosDisponibles(body).pipe(
        map((response: string) => ({ body, response })),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
    map(({ body, response }) => {
      // Acceder a una propiedad del body
     /*  const propertyFromBody = body.pinParaEliminar;
      response.map(item => {
        item.pinParaEliminar = propertyFromBody
      }) */
     //dejar solo los de dlv_quota > 1
     let decryptedResponse = JSON.parse(this.aesEncryptionUtilService.decrypt(response));
     response = decryptedResponse.filter((item: IHorariosDisponibles) => item.dlv_quota > 0);
      
      
      return ({ type: "[GLOBAL] Set Horarios Disponibles", response: response });
    }),
    catchError(() => EMPTY)
  ));
  $getBreakBulk = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Break Bulk"),
    map((body: IDataAppointmentCS) => {
      return { type: "[GLOBAL] Set Break Bulk", infoApointment: body };
    }),
    catchError(() => EMPTY)
  ));

  $getValidationPinContainerized = createEffect(() => this.actions$.pipe(
    
    ofType("[GLOBAL] Get Validation Pin Containerized"),
    concatMap((body: IvalidationPinContainerized) =>
      this.utilService.getValidacionPinContenerized(body).pipe(
        map((response: string) => ({ body, response })),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
    map(({ body, response }) => {
      // Acceder a una propiedad del body
      const propertyFromBody = body.pinNbr;
      let decryptedResponse = JSON.parse(this.aesEncryptionUtilService.decrypt(response));
      
      decryptedResponse.map((item: IContainerizedLoad) => {
        item.pinParaEliminar = propertyFromBody
      });
      return ({ type: "[GLOBAL] Set Validation Pin Containerized", validation: decryptedResponse, additionalProperty: propertyFromBody });
    }),
    catchError(() => EMPTY)
  ));


  getCitasDisponiblesCC$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Citas Disponibles CC"),
    switchMap((action: { siteAppointment: string }) => 
      this.utilService.getDiasDisponibles(true, action.siteAppointment).pipe(
        mergeMap((result:string) => {
          return of(JSON.parse(this.aesEncryptionUtilService.decrypt(result)));
        }),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
   
    map((result: IDisponibilidadCitas[]) => { 
      return ({ type: "[GLOBAL] Set Citas Disponibles CC", response: result });
    }),
    catchError(() => EMPTY)
  ));

  $getHorariosDisponiblesCC = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Horarios Disponibles CC"),
    switchMap((body) =>
      this.utilService.getHorariosDisponiblesCC(body).pipe(
        map((response: IHorariosDisponiblesCC[]) => ({ body, response })),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
    map(({ body, response }) => {
      // Acceder a una propiedad del body
     /*  const propertyFromBody = body.pinParaEliminar;
      response.map(item => {
        item.pinParaEliminar = propertyFromBody
      }) */
     //dejar solo los de dlv_quota > 1
      response = response.filter((item) => (item.ingreso > 0 || item.retiro > 0 || item.retiroDTA > 0 || item.contenedores.length > 0));
      response.map((item) => {
        if (typeof item.contenedores === 'string'){
          item.contenedores = JSON.parse(item.contenedores);
        }
        return item;
      });
      return ({ type: "[GLOBAL] Set Horarios Disponibles CC", response: response });
    }),
    catchError(() => EMPTY)
  ));


  getConfigurationPortal$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Configuration Portal"),
    mergeMap(() =>
      this.utilService.getConfigurationPortal().pipe(
        mergeMap((result: {}) => {
          return of(result);
        }),
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
   
    map((result: {}) => { 
      return ({ type: "[GLOBAL] Set Configuration Portal", response: result });
    }),
    catchError(() => EMPTY)
  ));

  $getEmptyEro = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Empty Ero"),
    mergeMap((action: { booking: string }) =>
      this.utilService.getEmptyEro(action.booking).pipe(
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
    map(response => ({ type: "[GLOBAL] Set Empty Ero", response })),
    catchError(error => EMPTY)
  ));

  $getValidateEro = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Validate Ero"),
    mergeMap((action: { booking: string }) =>
      this.utilService.getValidateEro(action.booking).pipe(
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
    map(response => ({ type: "[GLOBAL] Set Validate Ero", response })),
    catchError(() => EMPTY)
  ));

  $getHazardsByBooking = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Hazards By Booking"),
    mergeMap((action: { booking: string }) =>
      this.utilService.getHazardsByBooking(action.booking).pipe(
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
    ),
    map(response => ({ type: "[GLOBAL] Set Hazards By Booking", response })),
    catchError(error => EMPTY)
  ));

  getValidateContainer$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Validate Container"),
    mergeMap((action: { container: string }) =>
      this.utilService.getValidateContainer(action.container)
    ),
    map((response: number) => ({ type: "[GLOBAL] Set Validate Container", response })),
    catchError(error => EMPTY)
  ));

  getPhysicalContainer$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Physical Container"),
    mergeMap((action: { container: string }) =>
      this.utilService.getPhysicalContainer(action.container)
    ),
    map((response: {}) => ({ type: "[GLOBAL] Set Physical Container", response })),
    catchError(error => EMPTY)
  ));

  getforBooking$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get For Booking"),
    mergeMap((action: { container: string }) =>
      this.utilService.getForBookingContainer(action.container)
    ),
    map((response: {}) => ({ type: "[GLOBAL] Set For Booking", response })),
    catchError(error => EMPTY)
  ));

  getValidateDigitCheck$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Validate DigitCheck"),
    mergeMap((action: { container: string }) =>
      this.utilService.getValidateDigitCheck(action.container)
    ),
    map((response: boolean) => ({ type: "[GLOBAL] Set Validate DigitCheck", response })),
    catchError(error => EMPTY)
  ));

  getAgentRepresentation$ = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Agent Representation"),
    mergeMap((action: { idOrName: string, agent: string}) =>
      this.utilService.getAgentRepresentation(action.idOrName, action.agent)
    ),
    map((result: IAgentRepresentation) => {
      return ({ type: "[GLOBAL] Set Agent Representation", response: result });
    }),
    catchError(error => EMPTY)
  ));

  $getAppointmentCC = createEffect(() => this.actions$.pipe(
    ofType("[GLOBAL] Get Appointment CC"),
    map((body: IDataAppointmentCC) => {
      return { type: "[GLOBAL] Set Appointment CC", infoApointment: body };
    }),
    catchError(() => EMPTY)
  ));

  



  

  constructor(
    private readonly actions$: Actions,
    private readonly utilService: UtilService,
    private readonly matSnackBar: MatSnackBar,
    private readonly matDialog: MatDialog,
    private readonly store: Store,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService,
    private storageService:StorageserviceService,
  ) {}
}
