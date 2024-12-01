import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError, EMPTY } from "rxjs";
import { INotificationPrivilegeResponse } from "src/app/core/dto/notification-privilege-response.dto";
import { INotificationPrivilege } from "src/app/core/dto/notification-privilege.dto";
import { ISecondPasswordGenerateResponse } from "src/app/core/dto/second-password-generate-response.dto";
import { ISecondPasswordGenerate } from "src/app/core/dto/second-password-generate.dto";
import { ISecondPasswordValidationResponse } from "src/app/core/dto/second-password-validation-response.dto";
import { ISecondPasswordValidation } from "src/app/core/dto/second-password-validation.dto";
import { ICompanyTypePrivilegesDTO } from "src/app/core/dto/company-type-privileges.dto";
import { ILockDTO } from "src/app/core/interfaces/lock-dto.interface";
import { IRestResult } from "src/app/core/interfaces/rest-result.interface";
import { IVesselVisit } from "src/app/core/interfaces/vessel-visit.interface";
import { environment } from "src/environments/environment";
import { ICompanyTypePrivileges } from "src/app/core/interfaces/company-type-privileges.interface";
import { ICompanyType } from "src/app/core/interfaces/company-type.interface";
import { ICompany } from "src/app/core/interfaces/company.interface";
import { IImpersonalizated } from "src/app/core/interfaces/impersonalizated-dto.interface";
import { ICustomer } from "src/app/core/dto/customer.dto";
import { ICustomerIdOrName } from "src/app/core/dto/customer-id-or-name.dto";
import { AESEncryptionUtilService } from "src/app/core/auth/services/AESEncryptionUtil.service";
import { Base64EncryptionUtilService } from "src/app/core/auth/services/base64-encryption-util.service";
import { IAgentIdOrNameSearch } from "src/app/core/interfaces/agent-id-or-name-search.interface";
import { IAllConsigneesDTO } from "src/app/core/dto/all-consignees.dto";
import { IGeneratePinDTO } from "src/app/core/dto/generate-pin.dto";
import { ITruckPin } from "src/app/core/interfaces/truck-pin.interface";
import { IHistoryPinDTO } from "src/app/core/dto/history-pin.dto";
import { ICity } from "src/app/core/interfaces/city.interfaces";
import { IDepartment } from "src/app/core/interfaces/department.interface";
import { ITruck } from "src/app/core/interfaces/truck.interface";
import { IDocumentationTruck } from "src/app/core/interfaces/documentation-truck.interface";
import { ICapacityTruck } from "src/app/core/interfaces/capacity-truck.interface";
import { IPin } from "src/app/core/interfaces/pin.interface";
import { IPinDetalle } from "src/app/core/interfaces/pin-detalle.interface";
import { IValidationPin, IvalidationPinContainerized } from "src/app/core/interfaces/validation-pin.interface";
import { IDetachedLoad } from "src/app/core/interfaces/detached-load.interface";
import { IDriver, IDriverValidation } from "src/app/core/interfaces/driver.interface";
import { IDisponibilidadCitas } from "src/app/core/interfaces/disponibilidad-citas.interface";
import {  IAppointmentCheckHours, IAppointmentResponse, IAppointmentWeight, IHorariosDisponibles, IHorariosDisponiblesCC } from "src/app/core/interfaces/storage-cita.interface";
import { IDataAppointmentCS } from "src/app/core/interfaces/data-appointment-cs.interface";
import { IHistoryAppointmentDTO } from "src/app/core/dto/history-appointments.dto";
import { IAppointment } from "src/app/core/interfaces/appointment.interface";
import { IContainerizedLoad } from "src/app/core/interfaces/containerized-load.interface";
import { IAgentRepresentation } from "src/app/core/interfaces/agent-representation.interface";

@Injectable({
    providedIn: "root"
})
export class UtilService {

    public readonly apiBaseURL: string = environment.production ? location.origin : 'portal-api';

    constructor(
        private readonly httpClient: HttpClient,
        private readonly aesEncryptionUtilService: AESEncryptionUtilService,
        private readonly base64EncryptionUtilService: Base64EncryptionUtilService
    ) { }

    public getVesselVisit(vesselVisitID: string): Observable<string> {
        return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/vessel-visit/${vesselVisitID}`);
    }

    public getBusinessPortal(user: string, password: string): Observable<any> {
      return EMPTY;
  }

    public getInvoicePDF(invoice: string): Observable<string> {
      return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/invoice/financial/pdf/${invoice}`);
    }

    public getPdfFile(url: string): Observable<string> {
      return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/container/getPDFByLink/${btoa(url)}`);
    }

    public pdfReceipt(data: any): string {
      var byteCharacters = atob(data);
      var byteNumbers = new Array(byteCharacters.length);
      for (var i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      var file = new Blob([byteArray], { type: 'application/pdf;base64' });
      var fileURL = URL.createObjectURL(file);

      return fileURL;
    }

    public getCompanyTypePrivileges(body: ICompanyTypePrivilegesDTO): Observable<IRestResult<ICompanyTypePrivileges[]>> {
      return this.httpClient.post<IRestResult<ICompanyTypePrivileges[]>>(`${this.apiBaseURL}/portal/api/`, body);
    }

    public printReceipt(codeReference: string) {
      window.open(`${this.apiBaseURL}/portal/api/invoice/pdf/receipt/${codeReference}`, "_blank");
    }

    public generateSecondPassword(body: ISecondPasswordGenerate): Observable<ISecondPasswordGenerateResponse> {
      return this.httpClient.post<ISecondPasswordGenerateResponse>(`${this.apiBaseURL}/portal/api/privilege/second-password-generate`, {
        data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
      });
    }

    public generateSecondValidation(body: ISecondPasswordValidation): Observable<ISecondPasswordValidationResponse> {
      return this.httpClient.post<ISecondPasswordValidationResponse>(`${this.apiBaseURL}/portal/api/privilege/second-password-validation`, {
        data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
      });
    }

    public notifyPrivilege(body: INotificationPrivilege): Observable<string> {
      return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/privilege/notify-privilege`, {
        data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
      });
    }

    public notifyPrivilegeListUsert(body: INotificationPrivilege): Observable<string> {
      return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/privilege/notify-list-users-by-privilege`, {
        data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
      });
    }

    public validateHourRestriction(privilege: string): Observable<IRestResult<string>> {
      return this.httpClient.post<IRestResult<string>>(`${this.apiBaseURL}/portal/api/privilege/is-privilege-restricted`, {
        data: this.aesEncryptionUtilService.encrypt(privilege)
      })
    }

    public switchUser(companyId: string, companyName: string, companyType: string, companyTypeName?: string | null): Observable<void> {
      if(companyTypeName)
        return this.httpClient.get<void>(`${this.apiBaseURL}/portal/j_spring_security_switch_user?companyId=${companyId}&companyname=${companyName.replace(" ", "%20")}&companyType=${companyType}&companyTypeName=${companyTypeName}`);
      else
        return this.httpClient.get<void>(`${this.apiBaseURL}/portal/j_spring_security_switch_user?companyId=${companyId}&companyname=${companyName.replace(" ", "%20")}&companyType=${companyType}`);
    }

    public backToInitialUser(): Observable<void> {
      return this.httpClient.get<void>(`${this.apiBaseURL}/portal/j_spring_security_exit_user`);
    }

    public getCompanyTypesList(): Observable<ICompanyType[]> {
      return this.httpClient.get<ICompanyType[]>(`${this.apiBaseURL}/portal/api/company/types`);
    }

    public getcompaniesByTypeAndFilter(companyType: string, filter: string, validate: boolean): Observable<ICompany[]> {
      return this.httpClient.post<ICompany[]>(`${this.apiBaseURL}/portal/api/company/companiesByTypeAndFilter`, {
        "type": companyType,
        "filter": filter,
        "validate": validate
    });
    }

    public getImpersonalizated(): Observable<IImpersonalizated> {
      return this.httpClient.get<IImpersonalizated>(`${this.apiBaseURL}/portal/api/user/impersonalizated`);
    }

    public getAllConsignees(): Observable<IAllConsigneesDTO> {
      return this.httpClient.get<IAllConsigneesDTO>(`${this.apiBaseURL}/portal/api/agent/consignee`);
    }

    public getCustomer(_idOrName: string, _agent: string | null): Observable<string> {
      if(_agent) {
        return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/services/shippersWithRuler`, {
          data: this.aesEncryptionUtilService.encrypt(JSON.stringify({
            idOrName: _idOrName,
            agentGkey: _agent
          }))
        });
      } else {
        return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/services/shippersWithRuler`, {
          data: this.aesEncryptionUtilService.encrypt(JSON.stringify({
            idOrName: _idOrName,
            agentGkey: "null"
          }))
        });
      }
    }

    public getAgent(idOrName: string): Observable<IAgentIdOrNameSearch[]> {
        return this.httpClient.get<IAgentIdOrNameSearch[]>(`${this.apiBaseURL}/portal/api/agent/idOrName/${this.base64EncryptionUtilService.encrypt(idOrName)}`);
    }


    public getTruckers(idOrName: string, consigneeId: string): Observable<IAgentIdOrNameSearch[]> {
      return this.httpClient.post<IAgentIdOrNameSearch[]>(`${this.apiBaseURL}/portal/api/truckingCompany/byConsigneeAndIdOrName`, {
        idName: idOrName,
        consigneeId: consigneeId
      });
  }

  public generatePin(body: IGeneratePinDTO[]): Observable<ITruckPin[]> {
    return this.httpClient.post<ITruckPin[]>(`${this.apiBaseURL}/portal/api/pin`, body);
  }

  public getPDFPin(pinNbr: string): Observable<void> {
    return this.httpClient.get<void>(`${this.apiBaseURL}/portal/api/pin/pdf/${pinNbr}`);
  }
    public getIdleTimeout(): Observable<string> {
      return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/application/idle-timeout`);

  }

  public getHistorialPin(body: IHistoryPinDTO, page:number): Observable<ITruckPin[]> {
    return this.httpClient.post<ITruckPin[]>(`${this.apiBaseURL}/portal/api/pin/historyPin/filter/${page}/20`, body);
  }

  public getMaxAllowedDocumentSize(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiBaseURL}/portal/api/application/max-allowed-document-size`).pipe(
      catchError(error => {
        return  throwError(() => new Error('Error obteniendo la propiedad Max-Allowed-Document-Size'));
      })
    );
  }

  public getFtpServerIp(): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/application/ftp-server-ip`).pipe(
      catchError(error => {
        return  throwError(() => new Error('Error obteniendo la propiedad documentos.ftp.url'));
      })
    );
  }

  public getEmailsSacToNotification(): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/application/notification-mails-sac`).pipe(
      catchError(error => {
        return  throwError(() => new Error('Error obteniendo los correos a notificar'));
      })
    );
  }

    public getRegularExpression(one: string, two: string): string {
      var lengthOne = one.length;
      var lengthTwo = two.length;
      var arrayOne = one.split('');
      var arrayTwo = two.split('');
      var response = "";
      if (lengthOne === 1 && lengthTwo === 1) {
          if (arrayOne[0] === arrayTwo[0]) {
              response = "(" + arrayOne[0] + ")";
          } else {
              response = "([" + arrayOne[0] + "-" + arrayTwo[0] + "])";
          }
      }
      if (lengthOne === 1 && lengthTwo === 2) {
          response = "([" + arrayOne[0] + "-9]|";
          for (var i = 1; i < (arrayTwo[0] as any); i++) {
              response = response + i + "[0-9]|";
          }
          response = response + arrayTwo[0] + "[0-" + arrayTwo[1] + "])";
      }
      if (lengthOne === 1 && lengthTwo === 3) {
          response = "([" + arrayOne[0] + "-9]|[1-9][0-9]|";
          var initOne = parseInt(arrayTwo[1]) - 1;
          if (arrayTwo[0] === "1") {
            if(initOne >= 0)
            {
               response = response + "1[0-" + initOne + "][0-9]|";
            }
          }
          if (arrayTwo[0] === "2") {
              response = response + "1[0-9][0-9]|";
              response = response + "2[0-" + initOne + "][0-9]|";
          }
          response = response + arrayTwo[0] + arrayTwo[1] + "[0-" + arrayTwo[2] + "])";
      }
      if (lengthOne === 2 && lengthTwo === 2) {
          if (arrayOne[0] === arrayTwo[0]) {
              response = "("+arrayOne[0] + "[" + arrayOne[1] + "-" + arrayTwo[1] + "])";
          } else {
              response = "(" + arrayOne[0] + "[" + arrayOne[1] + "-9]|";
              var init = parseInt(arrayOne[0]) + 1;
              for (var i = init; i < (arrayTwo[0] as any); i++) {
                  response = response + i + "[0-9]|";
              }
              response = response + arrayTwo[0] + "[0-" + arrayTwo[1] + "])";
          }
      }
      if (lengthOne === 2 && lengthTwo === 3) {
          var initOne = parseInt(arrayOne[0]) + 1;
          response = "(" + arrayOne[0] + "[" + arrayOne[1] + "-9]|[" + initOne + "-9][0-9]|";
          var initTwo = parseInt(arrayTwo[1]) - 1;
          if (arrayTwo[0] === "1") {
              response = response + "1[0-" + initTwo + "][0-9]|";
          }
          if (arrayTwo[0] === "2") {
              response = response + "1[0-9][0-9]|";
              response = response + "2[0-" + initTwo + "][0-9]|";
          }
          response = response + arrayTwo[0] + arrayTwo[1] + "[0-" + arrayTwo[2] + "])";
      }
      if (lengthOne === 3 && lengthTwo === 3) {
          var initOne = parseInt(arrayOne[1]) + 1;
          var initTwo = parseInt(arrayTwo[1]) - 1;

          if(arrayOne[0] === arrayTwo[0] && arrayOne[1] === arrayTwo[1])
          {
            response = "(" + arrayOne[0] + arrayOne[1] + "[" + arrayOne[2] + "-"+ arrayTwo[2] + "])";
          }
          else
          {
            response = "(" + arrayOne[0] + arrayOne[1] + "[" + arrayOne[2] + "-9]|";
            if (arrayTwo[0] === "1") {
              if(initOne <= initTwo)
              {
                response = response + "1[" + initOne + "-" + initTwo + "][0-9]|";
              }
            }
            if (arrayTwo[0] === "2") {
                response = response + "1[" + initOne + "-9][0-9]|";
                response = response + "2[0-" + initTwo + "][0-9]|";
            }
            response = response + arrayTwo[0] + arrayTwo[1] + "[0-" + arrayTwo[2] + "])";
          }

      }
      return response;
  }

  public getCities(): Observable<ICity[]>{
    return this.httpClient.get<ICity[]>(`${this.apiBaseURL}/portal/api/business-management/cities`);
  }

  public getDepartments(): Observable<IDepartment[]>{
    return this.httpClient.get<IDepartment[]>(`${this.apiBaseURL}/portal/api/business-management/departments`);
  }
  
  public getPlate(plate:string): Observable<ITruck> {
    return this.httpClient.get<ITruck>(`${this.apiBaseURL}/portal/api/trucks/${plate}`);
  }

  public getDocumentationTruck(plate:string, typeTransport: string = ''): Observable<IDocumentationTruck[]> {
   
    if (typeTransport === ''){
      return this.httpClient.get<IDocumentationTruck[]>(`${this.apiBaseURL}/portal/api/trucks/validation/service/${plate}`);
    }
    else{
      return this.httpClient.get<IDocumentationTruck[]>(`${this.apiBaseURL}/portal/api/trucks/validation/service/${plate}/${typeTransport}`);
    }
    
  }

  public getCapacityTruck(plate:string): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/breakbulk/capacity/${plate}`);
  }

  public getPin(pin:string): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/breakbulk/pin/${pin}`);
    
  }

  public getPinContenerized(pin:string): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/pin/search/${pin}`);
  }

  public getValidacionPin(body: IValidationPin): Observable<string>{
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/breakbulk/validation`, body);
  }

  public getValidacionPinContenerized(body: IvalidationPinContainerized): Observable<string>{
    let unitList = body.pinContainerized;
    let list = "";
    for (var i = 0; i < unitList.length; i++) {
        list = list + "'" + unitList[i].unitNbr + "',";
    }
    //convertir a string y quitar la ultima coma
    let unitListString = list.substring(0, list.length - 1);
    let blNbr = body.blNbr ? body.blNbr : "";
   
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/pin/searchunitsinfo/${this.base64EncryptionUtilService.encrypt(blNbr)}/${this.base64EncryptionUtilService.encrypt(unitListString)}`);
  }

  public getDrivers(idOrName: string): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/driver/${this.base64EncryptionUtilService.encrypt(idOrName)}`);
  }

  public getValidationDriver(license: string): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/driver/validation/${license}`);
  }

  public getValidationServiceDriver(license: string): Observable<string> {
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/driver/validation/service/${license}`);
  }

  public getDiasDisponibles(contenerized: boolean = false, siteAppointment: string = ""): Observable<string> {
    let type = 'CS';
    if (contenerized){
      type = 'CC';
      if (siteAppointment === 'AGUADULCE' || siteAppointment === ""){
        return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/truckVisitConfiguration/true/${type}`);
      }else{
        return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/truckVisitConfiguration/false/${type}`);
      }
      
    }else{
      return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/truckVisitConfiguration/true/${type}`);
    }
    
  }

  public getStorageCita(body: any): Observable<any[]> {
    return this.httpClient.post<any>(`${this.apiBaseURL}/portal/api/breakbulk/getStorage`, body);
  }

  public getHorariosDisponibles(body: any): Observable<any> {
    return this.httpClient.get<IHorariosDisponibles[]>(`${this.apiBaseURL}/portal/api/truckVisitConfiguration/validation/breakbulk/${body.data.date}/${body.data.placa}`);
  }

  public getWeight(body: any): Observable<IAppointmentWeight[]> {
    return this.httpClient.post<IAppointmentWeight[]>(`${this.apiBaseURL}/portal/api/breakbulk/weight`, body);
  }

  public getCheckHours(body: any): Observable<IAppointmentCheckHours> {
    return this.httpClient.post<IAppointmentCheckHours>(`${this.apiBaseURL}/portal/api/truckVisitConfiguration/checkHours`, body);
  }

  public getManitfest(body: any): Observable<{}> {
    return this.httpClient.post<{}>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/validateManifest`, body);
  }

  public getBreakBulk(body: any): Observable<IAppointmentResponse>{
    return this.httpClient.post<IAppointmentResponse>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/break-bulk`, body.data);
  }

  public getCausalCancellationAppointment(): Observable<any>{
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/getCausalCancellationAppointment`);
  }

  public getCancelAppointment(body: any, tvaNbr: string, causalCanAppointment:string, causalCanDescription:string, cargaContenerizada: boolean = false): Observable<any>{
    if (!cargaContenerizada){
      return this.httpClient.post<any>(`${this.apiBaseURL}/portal/api/breakbulk/removeAppointmentById/${tvaNbr}/${causalCanAppointment}/drive/${causalCanDescription}`, body);
    }
    else{
      return this.httpClient.delete<any>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/cancel/truckVisitAppointment/${tvaNbr}/${causalCanAppointment}/${causalCanDescription}`);
    }
  }

  public getHistoryAppointments(body: IHistoryAppointmentDTO, page:number): Observable<string> {
    return this.httpClient.post<string>(`${this.apiBaseURL}/portal/api/user/history/${page}`, body);
  }

  public getUpdateBreakBulk(body: any): Observable<any>{
    return this.httpClient.post<any>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/update/breakbulk`, body.data);
  }

  public getBookingSearch(booking:string): Observable<any>{
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/booking/search/${booking}` );
  }

  public getHorariosDisponiblesCC(body: any): Observable<any> {
    let siteAppointment = "AGUADULCE";
    if (body.data.siteAppointment === "" || body.data.siteAppointment === 'AGUADULCE'){
      siteAppointment = "AGUADULCE";
    }else{
      siteAppointment = body.data.siteAppointment;
    }
    return this.httpClient.get<IHorariosDisponiblesCC[]>(`${this.apiBaseURL}/portal/api/truckVisitConfiguration/validation/${body.data.date}/${siteAppointment}/${body.data.units}`);
  }

  public getSaveValidateAppointmentCC(body: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/save-validate`, body);
  }

  public getSaveAppointmentCC(body: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiBaseURL}/portal/api/truckVisitAppointment`, body.data);
  }

  public getValidationPlanilla(bookin: string, container: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/documentation/planilla/${bookin}/${container}`);
  }

  public getValidationSecurity(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/activeSecurity/`);
  }

  public getValidationReefer(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/activeReefer/`);
  }

  public getValidationPrivateTransport(placa:string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/trucks/validation/service/${placa}/private-transport`);
  }

  public getConfigurationPortal(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/application/bW9kdWxlQ29uZmlndXJhdGlvbi5qc29u`);
  }

  public getBookingById(booking:string): Observable<any>{
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/booking/getBookingById/${booking}`);
  }

  public getEmptyEro(booking:string): Observable<any>{
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/empty/ero/${booking}`);
  }

  public getValidateEro(booking:string): Observable<any>{
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/validate/ero/${booking}`);
  }

  public getHazardsByBooking(booking:string): Observable<any>{
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/booking/getHazardsByBooking/${booking}`);
  }

  public getValidateContainer(container:string): Observable<any>{
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/container/validate/${container}`);
  }

  public getIsInOrderContainer(container: string): Observable<any>{
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/container/is-in-order/${container}`);
  }

  public getPhysicalContainer(container: string): Observable<any>{
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/container/physical/${container}`);
  }

  public getForBookingContainer(container: string): Observable<any>{
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/container/for-booking/${container}`);
  }

  public getValidateDigitCheck(digit:string): Observable<any>{
    return this.httpClient.get<any>(`${this.apiBaseURL}/portal/api/container/validate/digitCheck/${digit}`);
  }

  public getAgentRepresentation(idOrName: string, agentGkey: string): Observable<IAgentRepresentation>{
    return this.httpClient.get<IAgentRepresentation>(`${this.apiBaseURL}/portal/api/shipper/idOrName/${idOrName}/agent/${agentGkey}`);
  }

  public getEquipmentType(typeEquipment: string): Observable<string>{
    return this.httpClient.get<string>(`${this.apiBaseURL}/portal/api/equipment-type/${typeEquipment}`);
  }

  public getCreateAssotiation(body: any, reference: string, transferTemplateNbr: string, documenType: string): Observable<any>{
    return this.httpClient.post<any>(`${this.apiBaseURL}/portal/api/container/reference/${reference}/${transferTemplateNbr}/${documenType}`, body);
  }

  public putDesasociateContainer(body: any, container:string): Observable<any>{
    return this.httpClient.put<any>(`${this.apiBaseURL}/portal/api/container/cancel-preadvise/${container}`, body);
  }

  public truckVisitAppointmentCCUpdate(body: any): Observable<any>{
    return this.httpClient.post<any>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/update`, body);
  }
  public getNotificationsPortal(privilegesList: string){
    return this.httpClient.post<any>(`${this.apiBaseURL}/portal/api/notification/filterNotificationsByPrivileges`, {
      data: this.aesEncryptionUtilService.encrypt(JSON.stringify({
        privilegesList: privilegesList
      }))
    });
  }
  

  public canceltruckVisitAppointmentCC(appointment: string, truckVisit: string): Observable<any>{
    return this.httpClient.delete<any>(`${this.apiBaseURL}/portal/api/truckVisitAppointment/cancel/${appointment}/from/${truckVisit}`);
  }







}
