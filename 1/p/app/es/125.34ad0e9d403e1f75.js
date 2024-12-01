"use strict";
(self["webpackChunkbussinessPortal"] = self["webpackChunkbussinessPortal"] || []).push([[125],{

/***/ 29125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BusinessManagementModule": () => (/* binding */ BusinessManagementModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__(36895);
// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 9 modules
var shared_module = __webpack_require__(96158);
// EXTERNAL MODULE: ./src/app/core/privileges.enum.ts
var privileges_enum = __webpack_require__(9862);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs
var core = __webpack_require__(94650);
// EXTERNAL MODULE: ./node_modules/@ngrx/store/fesm2020/ngrx-store.mjs + 4 modules
var ngrx_store = __webpack_require__(55867);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/tabs.mjs
var tabs = __webpack_require__(3848);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/card.mjs
var card = __webpack_require__(73546);
// EXTERNAL MODULE: ./src/app/shared/directives/permissions.directive.ts
var permissions_directive = __webpack_require__(4344);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2020/forms.mjs
var fesm2020_forms = __webpack_require__(24006);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(82722);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/catchError.js
var catchError = __webpack_require__(70262);
// EXTERNAL MODULE: ./src/app/state/api-gateway/api-gateway.selectors.ts
var api_gateway_selectors = __webpack_require__(75868);
;// CONCATENATED MODULE: ./src/app/modules/business-management/errors/validation-message.ts
let campoRequerido = 'Campo requerido';
let emailNoValido = 'El formato del correo electrónico no es valido';
const VALIDATION_MESSAGE_BUSINESS_MANAGEMENT = {
  tratamiento: [{
    type: 'required',
    message: campoRequerido
  }],
  tipoPersona: [{
    type: 'required',
    message: campoRequerido
  }],
  nit: [{
    type: 'required',
    message: campoRequerido
  },
  // { type: 'minlength', message: 'Longitud permitida es de 10 dígitos' },
  // { type: 'maxlength', message: 'Longitud permitida es de 10 dígitos' },
  {
    type: 'pattern',
    message: 'Longitud permitida es de 10 dígitos'
  }],
  razonSocial: [{
    type: 'minlength',
    message: 'Longitud mínima es de 5 caracteres'
  }, {
    type: 'required',
    message: campoRequerido
  }, {
    type: 'maxlength',
    message: 'Longitud máxima es de 60 caracteres'
  }],
  sigla: [{
    type: 'required',
    message: campoRequerido
  }, {
    type: 'minlength',
    message: 'Longitud mínima es de 5 caracteres'
  }, {
    type: 'maxlength',
    message: 'Longitud máxima es de 10 caracteres'
  }],
  direccion: [{
    type: 'minlength',
    message: 'Longitud mínima es de 5 caracteres'
  }, {
    type: 'maxlength',
    message: 'Longitud máxima es de 68 caracteres'
  }],
  codigoDistrito: [{
    type: 'required',
    message: campoRequerido
  },
  // { type: 'minlength', message: 'Longitud mínima es de 1 caracteres' },
  // { type: 'maxlength', message: 'Longitud máxima es de 10 caracteres' },
  {
    type: 'pattern',
    message: 'Longitud máxima es de 10 dígitos'
  }],
  pais: [],
  departamento: [{
    type: 'required',
    message: campoRequerido
  }],
  ciudad: [{
    type: 'required',
    message: campoRequerido
  }],
  telefonoMovil: [{
    type: 'required',
    message: campoRequerido
  }, {
    type: 'pattern',
    message: 'El número debe ser de 10 dígitos'
  }],
  correoRepresentante: [{
    type: 'required',
    message: campoRequerido
  }, {
    type: 'minlength',
    message: 'Longitud mínima es de 5 caracteres'
  }, {
    type: 'maxlength',
    message: 'Longitud máxima es de 50 caracteres'
  }, {
    type: 'pattern',
    message: emailNoValido
  }],
  correoFactura1: [{
    type: 'required',
    message: campoRequerido
  }, {
    type: 'minlength',
    message: 'Longitud mínima es de 5 caracteres'
  }, {
    type: 'maxlength',
    message: 'Longitud máxima es de 50 caracteres'
  }, {
    type: 'pattern',
    message: emailNoValido
  }],
  correoFactura2: [{
    type: 'minlength',
    message: 'Longitud mínima es de 5 caracteres'
  }, {
    type: 'maxlength',
    message: 'Longitud máxima es de 50 caracteres'
  }, {
    type: 'pattern',
    message: emailNoValido
  }],
  nombreContactoOperativo: [{
    type: 'required',
    message: campoRequerido
  }, {
    type: 'minlength',
    message: 'Longitud mínima es de 3 caracteres'
  }, {
    type: 'maxlength',
    message: 'Longitud máxima es de 69 caracteres'
  }, {
    type: 'pattern',
    message: 'Valor no valido'
  }],
  telefonoMovilContacto: [{
    type: 'required',
    message: campoRequerido
  }, {
    type: 'pattern',
    message: 'El número debe ser de 10 dígitos'
  }],
  correoContacto: [{
    type: 'required',
    message: campoRequerido
  }, {
    type: 'minlength',
    message: 'Longitud mínima es de 5 caracteres'
  }, {
    type: 'maxlength',
    message: 'Longitud máxima es de 50 caracteres'
  }, {
    type: 'pattern',
    message: emailNoValido
  }],
  nombreContactoTesoreria: [{
    type: 'required',
    message: campoRequerido
  }, {
    type: 'minlength',
    message: 'Longitud mínima es de 3 caracteres'
  }, {
    type: 'maxlength',
    message: 'Longitud máxima es de 69 caracteres'
  }, {
    type: 'pattern',
    message: 'Valor no valido'
  }],
  telefonoMovilTesoreria: [{
    type: 'required',
    message: campoRequerido
  }, {
    type: 'pattern',
    message: 'El número debe ser de 10 dígitos'
  }],
  correoTesoreria1: [{
    type: 'required',
    message: campoRequerido
  }, {
    type: 'minlength',
    message: 'Longitud mínima es de 5 caracteres'
  }, {
    type: 'maxlength',
    message: 'Longitud máxima es de 50 caracteres'
  }, {
    type: 'pattern',
    message: emailNoValido
  }],
  correoTesoreria2: [{
    type: 'minlength',
    message: 'Longitud mínima es de 5 caracteres'
  }, {
    type: 'maxlength',
    message: 'Longitud máxima es de 50 caracteres'
  }, {
    type: 'pattern',
    message: emailNoValido
  }]
};
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subject.js + 1 modules
var Subject = __webpack_require__(77579);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(50727);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/of.js
var of = __webpack_require__(39646);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/dialog.mjs + 1 modules
var dialog = __webpack_require__(65412);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/button.mjs
var fesm2020_button = __webpack_require__(4859);
;// CONCATENATED MODULE: ./src/app/modules/business-management/components/message-edit-customer-dialog/message-edit-customer-dialog.component.ts




let MessageEditCustomerDialogComponent = /*#__PURE__*/(() => {
  class MessageEditCustomerDialogComponent {
    constructor(dialogRef, dialogData) {
      this.dialogRef = dialogRef;
      this.dialogData = dialogData;
      this.message = '';
    }
    ngOnInit() {
      if (this.dialogData.selectOption == 'myCompany' || !this.dialogData.isAgent) {
        this.message = "Revise los datos de su empresa. Por favor, modifique solo los campos que desea actualizar y cargue los documentos requeridos para la actualizaci\xF3n.";
      } else {
        this.message = "Se presentar\xE1n los datos de la empresa en el formulario. Por favor, modifique solo los campos que desea actualizar y cargue los documentos requeridos para la actualizaci\xF3n.";
      }
    }
  }
  MessageEditCustomerDialogComponent.ɵfac = function MessageEditCustomerDialogComponent_Factory(t) {
    return new (t || MessageEditCustomerDialogComponent)(core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialogRef */.so), core/* ɵɵdirectiveInject */.Y36(dialog/* MAT_DIALOG_DATA */.WI));
  };
  MessageEditCustomerDialogComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: MessageEditCustomerDialogComponent,
    selectors: [["app-message-edit-customer-dialog"]],
    decls: 8,
    vars: 1,
    consts: [["mat-dialog-title", "", 1, "customer-message-agreement-dialog__title"], [1, "customer-message-agreement-dialog__actions"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 1, "customer-message-agreement-dialog__action"]],
    template: function MessageEditCustomerDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "h2", 0);
        core/* ɵɵtext */._uU(1, "Alerta");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(2, "mat-dialog-content")(3, "p");
        core/* ɵɵtext */._uU(4);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(5, "mat-dialog-actions", 1)(6, "button", 2);
        core/* ɵɵtext */._uU(7, "Aceptar");
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵtextInterpolate1 */.hij(" ", ctx.message, " ");
      }
    },
    dependencies: [dialog/* MatDialogClose */.ZT, dialog/* MatDialogTitle */.uh, dialog/* MatDialogContent */.xY, dialog/* MatDialogActions */.H8, fesm2020_button/* MatButton */.lW],
    styles: [".customer-message-agreement-dialog__title[_ngcontent-%COMP%]{background-color:#92b976;color:#fff}.customer-message-agreement-dialog__actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.customer-message-agreement-dialog__action[_ngcontent-%COMP%]{color:#fff!important}"]
  });
  return MessageEditCustomerDialogComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/utils/utils.ts
var utils = __webpack_require__(54750);
;// CONCATENATED MODULE: ./src/app/shared/utils/string-to-notification.ts
let StringToNotification = /*#__PURE__*/(() => {
  class StringToNotification {
    static replaceAccents(text) {
      if (typeof text !== 'string') {
        text = String(text); // Convierto el texto a string si no lo es, para en nombres de docum y telefonos
      }

      return text.split('').map(char => this.accentMap[char] || char).join('');
    }
    static replaceAccentsOld(text) {
      return text.split('').map(char => this.accentMap[char] || char).join('');
    }
    static replaceAccentsInArray(dataArray) {
      return dataArray.map(item => ({
        key: this.replaceAccents(item.key),
        value: this.replaceAccents(item.value)
      }));
    }
  }
  StringToNotification.accentMap = {
    // Acentos en vocales minúsculas
    'á': 'aacute',
    'é': 'eacute',
    'í': 'iacute',
    'ó': 'oacute',
    'ú': 'uacute',
    'ü': 'uuml',
    // Acentos en vocales mayúsculas
    'Á': 'Aacute',
    'É': 'Eacute',
    'Í': 'Iacute',
    'Ó': 'Oacute',
    'Ú': 'Uacute',
    'Ü': 'Uuml',
    // Ñ y ñ
    'ñ': 'ntilde',
    'Ñ': 'Ntilde',
    // Otros caracteres especiales
    '¿': 'iquest',
    '¡': 'iexcl',
    // Variantes con acentos
    'à': 'agrave',
    'è': 'egrave',
    'ì': 'igrave',
    'ò': 'ograve',
    'ù': 'ugrave',
    'À': 'Agrave',
    'È': 'Egrave',
    'Ì': 'Igrave',
    'Ò': 'Ograve',
    'Ù': 'Ugrave',
    // Otros acentos y diéresis
    'ã': 'atilde',
    'õ': 'otilde',
    'Ã': 'Atilde',
    'Õ': 'Otilde'
  };
  return StringToNotification;
})();
// EXTERNAL MODULE: ./src/app/shared/constants/app.constants.ts
var app_constants = __webpack_require__(79512);
// EXTERNAL MODULE: ../node_modules/pdfmake/build/pdfmake.js
var pdfmake = __webpack_require__(50212);
// EXTERNAL MODULE: ../node_modules/pdfmake/build/vfs_fonts.js
var vfs_fonts = __webpack_require__(36037);
// EXTERNAL MODULE: ./src/app/modules/business-management/services/states.service.ts
var states_service = __webpack_require__(56814);
// EXTERNAL MODULE: ./src/environments/environment.ts
var environment = __webpack_require__(92340);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/http.mjs
var http = __webpack_require__(80529);
// EXTERNAL MODULE: ./src/app/core/auth/services/AESEncryptionUtil.service.ts
var AESEncryptionUtil_service = __webpack_require__(3056);
;// CONCATENATED MODULE: ./src/app/modules/business-management/services/business-management.service.ts




let BusinessManagementService = /*#__PURE__*/(() => {
  class BusinessManagementService {
    constructor(httpClient, aesEncryptionUtilService) {
      this.httpClient = httpClient;
      this.aesEncryptionUtilService = aesEncryptionUtilService;
      this.apiBaseURL = environment/* environment.production */.N.production ? location.origin : 'portal-api';
    }
    getBusinessManagementDocuments(body) {
      return this.httpClient.post(`${this.apiBaseURL}/portal/api/business-management/documents`, body);
    }
    getInfoCustomer(body) {
      return this.httpClient.post(`${this.apiBaseURL}/portal/api/business-management/customer`, {
        data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
      });
    }
    createCustomerRequest(body) {
      return this.httpClient.post(`${this.apiBaseURL}/portal/api/business-management/customer-request`, {
        data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
      });
    }
    getCustomerRequest(body) {
      return this.httpClient.post(`${this.apiBaseURL}/portal/api/business-management/request-by-company`, body);
    }
    getInfoCustomerByRequest(gkeyCustomerRequest) {
      return this.httpClient.post(`${this.apiBaseURL}/portal/api/business-management/info-customer-by-request`, {
        data: this.aesEncryptionUtilService.encrypt(JSON.stringify(gkeyCustomerRequest))
      });
    }
  }
  BusinessManagementService.ɵfac = function BusinessManagementService_Factory(t) {
    return new (t || BusinessManagementService)(core/* ɵɵinject */.LFG(http/* HttpClient */.eN), core/* ɵɵinject */.LFG(AESEncryptionUtil_service/* AESEncryptionUtilService */.D));
  };
  BusinessManagementService.ɵprov = /*@__PURE__*/core/* ɵɵdefineInjectable */.Yz7({
    token: BusinessManagementService,
    factory: BusinessManagementService.ɵfac,
    providedIn: 'root'
  });
  return BusinessManagementService;
})();
// EXTERNAL MODULE: ./src/app/core/auth/services/base64-encryption-util.service.ts
var base64_encryption_util_service = __webpack_require__(46602);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/snack-bar.mjs
var snack_bar = __webpack_require__(17009);
// EXTERNAL MODULE: ./src/app/shared/services/util.service.ts
var util_service = __webpack_require__(22203);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2020/router.mjs + 5 modules
var router = __webpack_require__(77518);
;// CONCATENATED MODULE: ./src/app/modules/business-management/components/customer-management-form-confirm/customer-management-form-confirm.component.ts




















function CustomerManagementFormConfirmComponent_div_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 15);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 16)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".cls-1{fill:#92b975;stroke-width:0px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 3);
    core/* ɵɵelement */._UZ(6, "polygon", 17);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(7, "div", 18)(8, "p", 19)(9, "strong");
    core/* ɵɵtext */._uU(10);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(11);
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(10);
    core/* ɵɵtextInterpolate1 */.hij("", item_r3.key, ":");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", item_r3.value, "");
  }
}
function CustomerManagementFormConfirmComponent_div_11_div_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 15)(1, "div");
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(2, "svg", 16)(3, "defs")(4, "style");
    core/* ɵɵtext */._uU(5, ".cls-1{fill:#92b975;stroke-width:0px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(6, "g", 3);
    core/* ɵɵelement */._UZ(7, "polygon", 17);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(8, "div", 18)(9, "p", 19)(10, "strong");
    core/* ɵɵtext */._uU(11);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(12);
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(11);
    core/* ɵɵtextInterpolate1 */.hij("", item_r5.key, ": ");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(item_r5.value);
  }
}
function CustomerManagementFormConfirmComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 11)(1, "p", 12);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "h3");
    core/* ɵɵtext */._uU(4, "Informaci\u00F3n de la Empresa");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "div", 13);
    core/* ɵɵtemplate */.YNc(6, CustomerManagementFormConfirmComponent_div_11_div_6_Template, 12, 2, "div", 14);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(7, "br")(8, "br");
    core/* ɵɵelementStart */.TgZ(9, "h3");
    core/* ɵɵtext */._uU(10, "Documentos a Cargar");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(11, "div", 13);
    core/* ɵɵtemplate */.YNc(12, CustomerManagementFormConfirmComponent_div_11_div_12_Template, 13, 2, "div", 14);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(13, "p");
    core/* ɵɵtext */._uU(14);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r0.messageAction);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.dataCompanyWithChanges);
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.documentsByUploadFile);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r0.messageActionAcept);
  }
}
pdfmake.vfs = vfs_fonts/* pdfMake.vfs */.I.vfs;
let CustomerManagementFormConfirmComponent = /*#__PURE__*/(() => {
  class CustomerManagementFormConfirmComponent {
    constructor(dialogRef, dialogData, store, statesServiceBusinessManagement, businessManagementService, base64EncryptionUtilService, matSnackBar, utilService, router, aesEncryptionUtilService) {
      this.dialogRef = dialogRef;
      this.dialogData = dialogData;
      this.store = store;
      this.statesServiceBusinessManagement = statesServiceBusinessManagement;
      this.businessManagementService = businessManagementService;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.matSnackBar = matSnackBar;
      this.utilService = utilService;
      this.router = router;
      this.aesEncryptionUtilService = aesEncryptionUtilService;
      this.destroy$ = new Subject/* Subject */.x();
      this.dataCompanyWithChanges = [];
      this.currentDateWithFormat = '';
      this.documentsByUploadFile = [];
      this.messageAction = '';
      this.messageActionNotification = '';
      this.messageActionForPDF = '';
      this.messageActionAcept = '';
      this.razonSocialValue = '';
      this.emailSacNotificaction = '';
      this.initCreateCustomer = true;
      this.isCreateNewRequest = false;
      this.userCreator = '';
      this.customerRequest = {
        requestId: null,
        customerId: null,
        creatorId: null,
        creatorUserId: null,
        createdAt: null,
        contactName: null,
        contactEmail: null,
        contactPhone: null,
        requestStatus: null,
        requestInfo: null,
        infoStatus: null,
        requestFlow: null,
        finalizedAt: null,
        representedByAgent: null,
        requestType: null
      };
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: apiGatewayStore => {
          this.user = apiGatewayStore;
          this.destroy$.next();
          this.destroy$.complete();
        },
        error: error => console.error(error)
      });
      this.valueChangeCustomer = this.dialogData.customerData;
      this.currentDateWithFormat = (0,utils/* getFormattedDate */.L0)();
      if (this.dialogData.action == 'create') {
        this.messageAction = "Se esta solicitando crear la empresa {{value1}} por el usuario {{value2}} el {{value3}} con los siguientes valores.";
        this.messageActionAcept = "Si est\xE1 de acuerdo con la creaci\xF3n oprima Aceptar, sino oprima Cancelar";
        this.messageActionNotification = "Se solicito crear la empresa {{value1}} por el usuario {{value2}} el {{value3}} con los siguientes valores. Solicitud # {{value4}}";
        this.messageActionForPDF = "Se solicito crear la empresa {{value1}} por el usuario {{value2}} el {{value3}} con los siguientes valores.";
      } else {
        this.messageAction = " Los datos de la empresa {{value1}} ser\xE1n modificados por el usuario {{value2}} el {{value3}}.";
        this.messageActionAcept = "Por favor, revise la informaci\xF3n modificada. Si todo es correcto, oprima Aceptar para confirmar los cambios. \n                  Si necesita realizar ajustes, oprima Cancelar para regresar y editar la informaci\xF3n.";
        this.messageActionNotification = " Los datos de la empresa {{value1}} fueron solicitados a modificar por el usuario {{value2}} el {{value3}} en sus siguientes valores. Solicitud # {{value4}}";
        this.messageActionForPDF = " Los datos de la empresa {{value1}} fueron solicitados a modificar por el usuario {{value2}} el {{value3}} en sus siguientes valores.";
      }
      this.userCreator = this.user.userName + ' con nombre: ' + this.user.nombres + " " + this.user.apellidos;
      this.razonSocialValue = this.getValueByKey(this.valueChangeCustomer, 'razonSocial');
      this.messageAction = this.replaceValuesCustomerAction(this.razonSocialValue, this.userCreator, this.currentDateWithFormat);
      //Obtengo valores ingresados a mostrar en el resumen
      this.dataCompanyWithChanges = this.getNonNullValues();
      this.dataCompanyWithChanges = this.updateValueToPresentation(this.dataCompanyWithChanges);
      this.dataCompanyWithChanges = this.transformKeys(this.dataCompanyWithChanges);
      this.documentsByUploadFile = this.dialogData.documents;
    }
    // this.messageAction = $localizenewLocal;
    updateValueToPresentation(datosClienteToPresentation) {
      datosClienteToPresentation.forEach(item => {
        switch (item.key) {
          case 'tratamiento':
            switch (item.value) {
              case 'Senor':
                item.value = 'Señor';
                break;
              case 'Senora':
                item.value = 'Señora';
                break;
            }
            break;
          case 'tipoPersona':
            switch (item.value) {
              case 'N':
                item.value = 'Natural';
                break;
              case 'J':
                item.value = 'Jurídica';
                break;
            }
            break;
        }
      });
      return datosClienteToPresentation;
    }
    accept() {
      this.getEmailsSacToNotification();
      this.statesServiceBusinessManagement.setIsAcceptCreateRequest(true);
      this.statesServiceBusinessManagement.getStateIdDocumentationObservable().pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(value => {
        if (value != null) {
          if (this.initCreateCustomer) {
            this.createRequestCustomer(value);
            this.initCreateCustomer = false;
            this.statesServiceBusinessManagement.setIdDocumentation(null);
          }
        }
      });
    }
    cancel() {
      this.statesServiceBusinessManagement.setIsAcceptCreateRequest(false);
      this.dialogRef.close(0);
    }
    replaceValuesCustomerAction(company, userCreator, currentDate) {
      return this.messageAction.replace('{{value1}}', company).replace('{{value2}}', userCreator).replace('{{value3}}', currentDate);
    }
    replaceValuesCustomerActionNotification(company, userCreator, currentDate, requestId) {
      return this.messageActionNotification.replace('{{value1}}', company).replace('{{value2}}', userCreator).replace('{{value3}}', currentDate).replace('{{value4}}', requestId);
    }
    replaceValuesCustomerActionForPDF(company, userCreator, currentDate) {
      return this.messageActionForPDF.replace('{{value1}}', company).replace('{{value2}}', userCreator).replace('{{value3}}', currentDate);
    }
    getValueByKey(obj, key) {
      const value = obj[key];
      if (!value) {
        return '';
      }
      const valueFind = value.new !== null ? value.new : value.old;
      return valueFind != null ? valueFind.toString() : '';
    }
    getNonNullValues() {
      return Object.keys(this.valueChangeCustomer).filter(key => this.valueChangeCustomer[key].new !== null).map(key => ({
        key,
        value: this.valueChangeCustomer[key].new
      }));
    }
    createRequestCustomer(value) {
      if (!this.isCreateNewRequest) {
        this.isCreateNewRequest = true;
        this.customerRequest.requestId = String(value);
        this.customerRequest.createdAt = (0,utils/* parseCustomDateStringToDate */.s_)(this.statesServiceBusinessManagement.getTimeSaveDocuments());
        this.customerRequest.customerId = this.dialogData.informationCustomerRequest.customerId;
        this.customerRequest.creatorId = this.dialogData.informationCustomerRequest.creatorId;
        this.customerRequest.creatorUserId = this.dialogData.informationCustomerRequest.creatorUserId;
        this.customerRequest.contactName = this.dialogData.informationCustomerRequest.contactName;
        this.customerRequest.contactEmail = this.dialogData.informationCustomerRequest.contactEmail;
        this.customerRequest.contactPhone = this.dialogData.informationCustomerRequest.contactPhone;
        this.customerRequest.requestStatus = this.dialogData.informationCustomerRequest.requestStatus;
        this.customerRequest.requestInfo = this.dialogData.informationCustomerRequest.requestInfo;
        this.customerRequest.infoStatus = this.dialogData.informationCustomerRequest.infoStatus;
        this.customerRequest.requestFlow = this.dialogData.informationCustomerRequest.requestFlow;
        this.customerRequest.representedByAgent = parseInt(this.statesServiceBusinessManagement.getRepresentedByAgent());
        this.customerRequest.requestType = this.statesServiceBusinessManagement.getRequestType();
        //LLAMAR SERVICIOS PARA CREAR SOLICITUD, NOTIFICAR Y DESCARGAR PDF, AL FINALIZAR RESETEAR VALUES
        this.businessManagementService.createCustomerRequest(this.customerRequest).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$), (0,catchError/* catchError */.K)(error => {
          this.matSnackBar.open("Se presento un error al generar la solicitud, Por favor, intente de nuevo o comuniquese con servicio al cliente.", "", {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 7000
          });
          this.statesServiceBusinessManagement.resetAllProperties();
          return (0,of.of)(null);
        })).subscribe(resp => {
          this.matSnackBar.open("Se ha creado la solicitud satisfactoriamente.", "", {
            verticalPosition: "top",
            duration: 7000,
            panelClass: ["success-snackbar"]
          });
          // Proceso de generación de documentos.
          let requestToPdf = {
            "requestNumber": value,
            "description": this.replaceValuesCustomerActionForPDF(this.razonSocialValue, this.userCreator, this.currentDateWithFormat),
            "infoCompany": this.dataCompanyWithChanges,
            "documents": this.documentsByUploadFile
          };
          this.generatePdfAndDownload(this.generateDataForPDF(requestToPdf));
          if (this.dialogData.hasNotification) {
            this.messageActionNotification = this.replaceValuesCustomerActionNotification(this.razonSocialValue, this.userCreator, this.currentDateWithFormat, value);
            const bodyNotification = {
              action: this.messageActionNotification,
              customerData: StringToNotification.replaceAccentsInArray(this.dataCompanyWithChanges),
              documentData: StringToNotification.replaceAccentsInArray(this.documentsByUploadFile)
            };
            let body = {
              companyId: null,
              mailsNotifications: this.emailSacNotificaction,
              notificationInfo: this.base64EncryptionUtilService.toBase64(JSON.stringify(bodyNotification)),
              privilegeId: this.dialogData.privilege
            };
            this.utilService.notifyPrivilegeListUsert(body).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
              next: () => {}
            });
          }
          this.statesServiceBusinessManagement.resetAllProperties();
          this.reloadComponentAfterConfirm();
          if (resp.length) {
            this.dialogRef.close(1);
          }
        });
      }
    }
    toBase64(str) {
      const utf8Bytes = new TextEncoder().encode(str);
      const binaryString = String.fromCharCode(...utf8Bytes);
      return btoa(binaryString);
    }
    getEmailsSacToNotification() {
      this.utilService.getEmailsSacToNotification().pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: value => {
          this.emailSacNotificaction = this.aesEncryptionUtilService.decrypt(value);
        },
        error: err => {}
      });
    }
    reloadComponentAfterConfirm() {
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/', {
        skipLocationChange: true
      }).then(() => {
        this.router.navigate([currentUrl]);
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    transformKeys(dataCustomerChange) {
      return dataCustomerChange.map(item => {
        const newKey = app_constants/* keyValueMap */.m[item.key] || item.key;
        return {
          key: newKey,
          value: item.value
        };
      });
    }
    generateDataForPDF(information) {
      let title = {
        text: `Solicitud: ${information.requestNumber}`,
        style: 'header'
      };
      let description = {
        text: information.description,
        margin: [0, 10, 0, 10]
      };
      let bodyInfoCompany = [];
      information.infoCompany.map(item => {
        let row = [{
          text: item.key,
          bold: true
        }, item.value];
        bodyInfoCompany.push(row);
      });
      if (bodyInfoCompany.length == 0) {
        let row = [{
          text: 'Sin Cambios en la Información de la Empresa'
        }, ''];
        bodyInfoCompany.push(row);
      }
      let bodyDocuments = [];
      information.documents.map(item => {
        // Documento: título en negrita y valor en una nueva línea
        bodyDocuments.push({
          text: item.key,
          bold: true
        });
        bodyDocuments.push({
          text: item.value,
          margin: [0, 2, 0, 10]
        });
        // Separador de línea entre documentos
        bodyDocuments.push({
          canvas: [{
            type: 'line',
            x1: 0,
            y1: 0,
            x2: 515,
            y2: 0,
            lineWidth: 1
          }]
        });
      });
      let responseData = {
        rowTitle: title,
        rowDescription: description,
        rowBodyInfoCompany: bodyInfoCompany,
        rowBodyDocuments: bodyDocuments
      };
      return responseData;
    }
    generatePdfAndDownload(dataForPdf) {
      this.getBase64ImageFromURL('assets/img/headerPdf.jpg').then(logoDataUrl => {
        this.getBase64ImageFromURL('assets/img/footerPdf.jpg').then(footerDataUrl => {
          // creo el contenido dinamico segun si rowBodyInfoCompany tiene datos o no (para solicitudes de status Documental)
          const companyTableTitle = {
            text: 'Información Modificada de la Empresa',
            style: 'subheader'
          };
          const companyTableContent = {
            layout: 'lightHorizontalLines',
            table: {
              headerRows: 0,
              widths: ['*', '*'],
              body: dataForPdf.rowBodyInfoCompany
            }
          };
          let pdfBody = {
            // Margen global para respetar el header y el footer
            pageMargins: [40, 80, 40, 80],
            header: {
              image: logoDataUrl,
              width: 530,
              alignment: 'center',
              margin: [5, 10, 0, 0] // Eliminar márgenes extra para que se quede dentro del margen global
            },

            content: [dataForPdf.rowTitle, dataForPdf.rowDescription, companyTableTitle, companyTableContent, {
              text: 'Documentos Cargados',
              style: 'subheader'
            }, ...dataForPdf.rowBodyDocuments // Desplegar los documentos con líneas separadoras
            ],

            footer: {
              stack: [{
                image: footerDataUrl,
                width: 530,
                alignment: 'center',
                margin: [15, 0, 0, 15] // Eliminar márgenes extra
              }],

              margin: [20, 10, 0, 50],
              alignment: 'center'
            },
            styles: {
              header: {
                fontSize: 18,
                bold: true,
                margin: [0, 25, 0, 10],
                color: '#ffffff',
                background: '#4caf50',
                alignment: 'center'
              },
              subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 15, 0, 15],
                alignment: 'center'
              }
            },
            defaultStyle: {
              columnGap: 20
            }
          };
          const pdf = pdfmake.createPdf(pdfBody);
          pdf.download(dataForPdf.rowTitle.text);
        });
      });
    }
    // Función para convertir una imagen local en Base64
    getBase64ImageFromURL(url) {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.crossOrigin = 'Anonymous'; // Importante para evitar problemas de CORS si es necesario
        img.src = url;
        img.onload = () => {
          let canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          let ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0);
          let dataURL = canvas.toDataURL('image/jpeg'); // Obtener la imagen como Base64
          resolve(dataURL);
        };
        img.onerror = error => {
          reject(error);
        };
      });
    }
  }
  CustomerManagementFormConfirmComponent.ɵfac = function CustomerManagementFormConfirmComponent_Factory(t) {
    return new (t || CustomerManagementFormConfirmComponent)(core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialogRef */.so), core/* ɵɵdirectiveInject */.Y36(dialog/* MAT_DIALOG_DATA */.WI), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(states_service/* StatesServiceBusinessManagement */.Z), core/* ɵɵdirectiveInject */.Y36(BusinessManagementService), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(AESEncryptionUtil_service/* AESEncryptionUtilService */.D));
  };
  CustomerManagementFormConfirmComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: CustomerManagementFormConfirmComponent,
    selectors: [["app-customer-management-form-confirm"]],
    decls: 17,
    vars: 1,
    consts: [["mat-dialog-title", ""], [1, "customer-managemen__header"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 360.76 360.76", 1, "customer-managemen-check-icon"], ["id", "Capa_1-2"], ["x", "0", "width", "360.76", "height", "360.76", "rx", "4.49", "ry", "4.49", 1, "cls-1"], ["d", "m296.58,93.79c-11.53-12.5-21.99-20.94-34.49-9.43l-127.81,117.83-32.27-36.9c-11.2-12.79-22.5-5.52-35.31,5.67-12.81,11.19-22.28,22.08-11.07,34.89l33.33,38.12,27.2,31.11c7.33,8.38,20.12,9.07,28.3,1.52l30.39-28.01,129-118.93c12.52-11.53,4.27-23.37-7.27-35.88Z", 1, "cls-2"], [1, "customer-managemen__title-text"], ["mat-dialog-content", "", 4, "ngIf"], [1, "customer-message-agreement-dialog__actions"], ["mat-flat-button", "", 1, "services-confirm__cancel-button", 3, "click"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 1, "customer-message-agreement-dialog__action", 3, "click"], ["mat-dialog-content", ""], [1, "customer-managemen__paragraph"], [1, "customer-managemen__selected-lists"], ["class", "customer-managemen__selected-list-item", 4, "ngFor", "ngForOf"], [1, "customer-managemen__selected-list-item"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 284.31 402.33", 1, "customer-managemen__arrow-icon"], ["points", "120.51 0 0 0 163.81 201.17 0 402.33 120.51 402.33 284.31 201.17 120.51 0", 1, "cls-1"], [1, "customer-managemen__selected-list-text"], [1, "customer-managemen__selected-list-title"]],
    template: function CustomerManagementFormConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "h2", 0)(1, "div", 1);
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(2, "svg", 2)(3, "defs")(4, "style");
        core/* ɵɵtext */._uU(5, ".cls-1{fill:transparent;}.cls-1,.cls-2{stroke-width:0px;}.cls-2{fill:#fff;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(6, "g", 3);
        core/* ɵɵelement */._UZ(7, "rect", 4)(8, "path", 5);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementStart */.TgZ(9, "span", 6);
        core/* ɵɵtext */._uU(10, "Confirmaci\u00F3n");
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵtemplate */.YNc(11, CustomerManagementFormConfirmComponent_div_11_Template, 15, 4, "div", 7);
        core/* ɵɵelementStart */.TgZ(12, "mat-dialog-actions", 8)(13, "button", 9);
        core/* ɵɵlistener */.NdJ("click", function CustomerManagementFormConfirmComponent_Template_button_click_13_listener() {
          return ctx.cancel();
        });
        core/* ɵɵtext */._uU(14, "Cancelar");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(15, "button", 10);
        core/* ɵɵlistener */.NdJ("click", function CustomerManagementFormConfirmComponent_Template_button_click_15_listener() {
          return ctx.accept();
        });
        core/* ɵɵtext */._uU(16, "Aceptar");
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(11);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.documentsByUploadFile.length > 0 || ctx.dataCompanyWithChanges.length > 0);
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, dialog/* MatDialogClose */.ZT, dialog/* MatDialogTitle */.uh, dialog/* MatDialogContent */.xY, dialog/* MatDialogActions */.H8, fesm2020_button/* MatButton */.lW],
    styles: ["h2[_ngcontent-%COMP%]{padding:1rem;margin:0;background-color:#92b976!important;display:flex;justify-content:flex-start;align-items:center}h3[_ngcontent-%COMP%]{display:flex;justify-content:center;font-size:1.5rem;font-weight:700}.customer-managemen__header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.customer-managemen-check-icon[_ngcontent-%COMP%]{width:3rem}.customer-managemen__title-text[_ngcontent-%COMP%]{font-size:2rem;color:#fff}.customer-managemen__paragraph[_ngcontent-%COMP%]{width:auto;padding:1.5rem;font-size:1rem;font-weight:300;line-height:normal}.customer-managemen__selected-lists[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap}.customer-managemen__selected-list-item[_ngcontent-%COMP%]{display:flex;align-items:center;width:50%;box-sizing:border-box;padding:.5rem}.customer-managemen__selected-list-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.customer-managemen__arrow-icon[_ngcontent-%COMP%]{width:1rem;margin-right:1rem}"]
  });
  return CustomerManagementFormConfirmComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/business-management/components/customer-request-in-progress-message/customer-request-in-progress-message.component.ts



let CustomerRequestInProgressMessageComponent = /*#__PURE__*/(() => {
  class CustomerRequestInProgressMessageComponent {
    constructor() {
      this.message = '';
    }
    ngOnInit() {
      this.message = "Actualmente tiene una solicitud en curso. Por favor, espere su procesamiento.";
    }
  }
  CustomerRequestInProgressMessageComponent.ɵfac = function CustomerRequestInProgressMessageComponent_Factory(t) {
    return new (t || CustomerRequestInProgressMessageComponent)();
  };
  CustomerRequestInProgressMessageComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: CustomerRequestInProgressMessageComponent,
    selectors: [["app-customer-request-in-progress-message"]],
    decls: 8,
    vars: 1,
    consts: [["mat-dialog-title", "", 1, "customer-message-agreement-dialog__title"], [1, "customer-message-agreement-dialog__actions"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 1, "customer-message-agreement-dialog__action"]],
    template: function CustomerRequestInProgressMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "h2", 0);
        core/* ɵɵtext */._uU(1, "Alerta");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(2, "mat-dialog-content")(3, "p");
        core/* ɵɵtext */._uU(4);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(5, "mat-dialog-actions", 1)(6, "button", 2);
        core/* ɵɵtext */._uU(7, "Aceptar");
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵtextInterpolate1 */.hij(" ", ctx.message, " ");
      }
    },
    dependencies: [dialog/* MatDialogClose */.ZT, dialog/* MatDialogTitle */.uh, dialog/* MatDialogContent */.xY, dialog/* MatDialogActions */.H8, fesm2020_button/* MatButton */.lW],
    styles: [".customer-message-agreement-dialog__title[_ngcontent-%COMP%]{background-color:#92b976;color:#fff}.customer-message-agreement-dialog__actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.customer-message-agreement-dialog__action[_ngcontent-%COMP%]{color:#fff!important}"]
  });
  return CustomerRequestInProgressMessageComponent;
})();
// EXTERNAL MODULE: ./src/app/state/shared/shared.actions.ts
var shared_actions = __webpack_require__(68438);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/icon.mjs
var icon = __webpack_require__(97392);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/list.mjs
var list = __webpack_require__(96338);
;// CONCATENATED MODULE: ./src/app/modules/business-management/components/pending-fields-and-documents-component/pending-fields-and-documents-component.component.ts








function PendingFieldsAndDocumentsComponentComponent_mat_card_6_mat_list_item_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-list-item")(1, "div")(2, "div", 8)(3, "mat-icon", 9);
    core/* ɵɵtext */._uU(4, "error_outline");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "span", 10);
    core/* ɵɵtext */._uU(6);
    core/* ɵɵelementEnd */.qZA()()()();
  }
  if (rf & 2) {
    const field_r3 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵtextInterpolate */.Oqu(field_r3);
  }
}
function PendingFieldsAndDocumentsComponentComponent_mat_card_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
    core/* ɵɵtext */._uU(3, "Campos Inv\u00E1lidos");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(4, "mat-card-content")(5, "mat-list");
    core/* ɵɵtemplate */.YNc(6, PendingFieldsAndDocumentsComponentComponent_mat_card_6_mat_list_item_6_Template, 7, 1, "mat-list-item", 7);
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.invalidFields);
  }
}
function PendingFieldsAndDocumentsComponentComponent_mat_card_7_mat_list_item_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-list-item")(1, "div", 11)(2, "div", 8)(3, "mat-icon", 9);
    core/* ɵɵtext */._uU(4, "description");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "span");
    core/* ɵɵtext */._uU(6);
    core/* ɵɵelementEnd */.qZA()()()();
  }
  if (rf & 2) {
    const doc_r5 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵtextInterpolate */.Oqu(doc_r5);
  }
}
function PendingFieldsAndDocumentsComponentComponent_mat_card_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
    core/* ɵɵtext */._uU(3, "Documentos Faltantes por Cargar");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(4, "mat-card-content")(5, "mat-list");
    core/* ɵɵtemplate */.YNc(6, PendingFieldsAndDocumentsComponentComponent_mat_card_7_mat_list_item_6_Template, 7, 1, "mat-list-item", 7);
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.missingRequiredDocuments);
  }
}
let PendingFieldsAndDocumentsComponentComponent = /*#__PURE__*/(() => {
  class PendingFieldsAndDocumentsComponentComponent {
    constructor(statesServiceBusinessManagement) {
      this.statesServiceBusinessManagement = statesServiceBusinessManagement;
      this.invalidFields = [];
      this.missingRequiredDocuments = [];
    }
    ngOnInit() {
      this.invalidFields = this.statesServiceBusinessManagement.getInvalidFields();
      this.missingRequiredDocuments = this.statesServiceBusinessManagement.getMissingRequiredDocuments();
    }
  }
  PendingFieldsAndDocumentsComponentComponent.ɵfac = function PendingFieldsAndDocumentsComponentComponent_Factory(t) {
    return new (t || PendingFieldsAndDocumentsComponentComponent)(core/* ɵɵdirectiveInject */.Y36(states_service/* StatesServiceBusinessManagement */.Z));
  };
  PendingFieldsAndDocumentsComponentComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: PendingFieldsAndDocumentsComponentComponent,
    selectors: [["app-pending-fields-and-documents-component"]],
    decls: 11,
    vars: 2,
    consts: [[1, "modal-container"], ["mat-dialog-title", "", 1, "title"], [1, "mat-typography"], [1, "description"], [4, "ngIf"], [1, "customer-message-agreement-dialog__actions"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 1, "customer-message-agreement-dialog__action"], [4, "ngFor", "ngForOf"], ["mat-line", ""], ["mat-list-icon", "", "color", "warn"], [1, "value--field"], [1, ""]],
    template: function PendingFieldsAndDocumentsComponentComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "h2", 1);
        core/* ɵɵtext */._uU(2, "Atenci\u00F3n");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(3, "mat-dialog-content", 2)(4, "p", 3);
        core/* ɵɵtext */._uU(5, "Por favor complete los siguientes campos y/o cargue los documentos requeridos para generar su solicitud:");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(6, PendingFieldsAndDocumentsComponentComponent_mat_card_6_Template, 7, 1, "mat-card", 4);
        core/* ɵɵtemplate */.YNc(7, PendingFieldsAndDocumentsComponentComponent_mat_card_7_Template, 7, 1, "mat-card", 4);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(8, "mat-dialog-actions", 5)(9, "button", 6);
        core/* ɵɵtext */._uU(10, "Aceptar");
        core/* ɵɵelementEnd */.qZA()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.invalidFields.length > 0);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.missingRequiredDocuments.length > 0);
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, icon/* MatIcon */.Hw, dialog/* MatDialogClose */.ZT, dialog/* MatDialogTitle */.uh, dialog/* MatDialogContent */.xY, dialog/* MatDialogActions */.H8, fesm2020_button/* MatButton */.lW, list/* MatList */.i$, list/* MatListItem */.Tg, card/* MatCard */.a8, card/* MatCardContent */.dn, card/* MatCardHeader */.dk, card/* MatCardTitle */.n5],
    styles: [".value--field[_ngcontent-%COMP%]{margin-bottom:5px}.title[_ngcontent-%COMP%]{font-size:24px;font-weight:700;background-color:#fcf7dd;text-align:center}.modal-container[_ngcontent-%COMP%]{padding:20px;max-width:auto}.description[_ngcontent-%COMP%]{font-size:16px;margin-bottom:20px;color:#333}mat-card[_ngcontent-%COMP%]{margin-bottom:20px;box-shadow:0 4px 8px #0000001a}mat-card-title[_ngcontent-%COMP%]{color:#3f51b5;font-size:18px;font-weight:700}mat-list-item[_ngcontent-%COMP%]{border-bottom:1px solid #e0e0e0}mat-list-item[_ngcontent-%COMP%]:last-child{border-bottom:none}mat-icon[_ngcontent-%COMP%]{margin-right:10px}button[_ngcontent-%COMP%]{margin-top:20px}.customer-message-agreement-dialog__title[_ngcontent-%COMP%]{background-color:#92b976;color:#fff}.customer-message-agreement-dialog__actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.customer-message-agreement-dialog__action[_ngcontent-%COMP%]{color:#fff!important}"]
  });
  return PendingFieldsAndDocumentsComponentComponent;
})();
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/form-field.mjs
var form_field = __webpack_require__(59549);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/input.mjs + 1 modules
var input = __webpack_require__(44144);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/select.mjs
var fesm2020_select = __webpack_require__(84385);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/core.mjs + 1 modules
var fesm2020_core = __webpack_require__(3238);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/radio.mjs
var fesm2020_radio = __webpack_require__(71948);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/expansion.mjs + 1 modules
var expansion = __webpack_require__(37084);
// EXTERNAL MODULE: ./src/app/modules/services/components/customer-searcher/customer-searcher.component.ts
var customer_searcher_component = __webpack_require__(19243);
// EXTERNAL MODULE: ./src/app/shared/components/upload-file/upload-file.component.ts
var upload_file_component = __webpack_require__(75288);
;// CONCATENATED MODULE: ./src/app/modules/business-management/components/customer-management-form/customer-management-form.component.ts



































const _c0 = ["secondaryContent"];
const _c1 = ["hijo"];
function CustomerManagementFormComponent_mat_card_2_mat_form_field_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "mat-form-field")(1, "mat-label");
    core/* ɵɵtext */._uU(2, "Ingresar NIT del cliente");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "input", 13);
    core/* ɵɵlistener */.NdJ("input", function CustomerManagementFormComponent_mat_card_2_mat_form_field_6_Template_input_input_3_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r6.onInput($event));
    })("keydown.enter", function CustomerManagementFormComponent_mat_card_2_mat_form_field_6_Template_input_keydown_enter_3_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r8 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r8.onEnter($event));
    });
    core/* ɵɵelementEnd */.qZA()();
  }
}
function CustomerManagementFormComponent_mat_card_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "app-customer-searcher", 14);
    core/* ɵɵlistener */.NdJ("customerSelected", function CustomerManagementFormComponent_mat_card_2_ng_container_9_Template_app_customer_searcher_customerSelected_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r9 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r9.onCustomerSelected($event));
    })("cleanCustomer", function CustomerManagementFormComponent_mat_card_2_ng_container_9_Template_app_customer_searcher_cleanCustomer_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r11 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r11.clean($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r5 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("controlDisabled", false)("searcher", !ctx_r5.consignee)("agent", ctx_r5.userInfo.empresa.id)("data", ctx_r5.fullConsignee);
  }
}
function CustomerManagementFormComponent_mat_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "mat-card")(1, "mat-radio-group", 9);
    core/* ɵɵlistener */.NdJ("change", function CustomerManagementFormComponent_mat_card_2_Template_mat_radio_group_change_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r12 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r12.onSelectionChange($event));
    });
    core/* ɵɵelementStart */.TgZ(2, "mat-radio-button", 10);
    core/* ɵɵtext */._uU(3, "Actualizar Datos de mi Empresa");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(4, "mat-radio-button", 11);
    core/* ɵɵtext */._uU(5, "Registrar Cliente o Actualizar Datos de Cliente con Mandato Vencido");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(6, CustomerManagementFormComponent_mat_card_2_mat_form_field_6_Template, 4, 0, "mat-form-field", 1);
    core/* ɵɵelementStart */.TgZ(7, "mat-radio-button", 12);
    core/* ɵɵtext */._uU(8, "Actualizar Datos de Cliente con Mandato Activo");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(9, CustomerManagementFormComponent_mat_card_2_ng_container_9_Template, 2, 4, "ng-container", 1);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.selectedOption == "newClient");
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.userInfo.empresa && ctx_r0.selectedOption == "activeClient");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_19_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r57 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r57.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_19_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_19_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r57 = ctx.$implicit;
    const ctx_r56 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r56.hasFormError("tratamiento", validation_r57.type) && ctx_r56.invalidField("tratamiento") && !ctx_r56.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_19_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r14 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r14.messageValidation["tratamiento"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r60 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r60.getMessageBeforeChange("tratamiento"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_20_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r15 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r15.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_30_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r62 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r62.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_30_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_30_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r62 = ctx.$implicit;
    const ctx_r61 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r61.hasFormError("tipoPersona", validation_r62.type) && ctx_r61.invalidField("tipoPersona") && !ctx_r61.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_30_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r16 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r16.messageValidation["tipoPersona"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_31_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r65 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r65.getMessageBeforeChange("tipoPersona"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_31_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_31_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r17 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r17.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_38_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r67 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r67.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_38_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_38_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r67 = ctx.$implicit;
    const ctx_r66 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r66.hasFormError("nit", validation_r67.type) && ctx_r66.invalidField("nit") && !ctx_r66.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_38_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_38_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r18 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r18.messageValidation["nit"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_39_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r70 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r70.getMessageBeforeChange("nit"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_39_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_39_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r19 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r19.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_46_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r72 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r72.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_46_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_46_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r72 = ctx.$implicit;
    const ctx_r71 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r71.hasFormError("razonSocial", validation_r72.type) && !ctx_r71.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_46_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r20 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r20.messageValidation["razonSocial"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r75 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r75.getMessageBeforeChange("razonSocial"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_47_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_47_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r21 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r21.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_54_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r77 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r77.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_54_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_54_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r77 = ctx.$implicit;
    const ctx_r76 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r76.hasFormError("sigla", validation_r77.type) && !ctx_r76.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_54_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_54_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r22 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r22.messageValidation["sigla"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_55_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r80 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r80.getMessageBeforeChange("sigla"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_55_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_55_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r23 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r23.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_61_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r82 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r82.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_61_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_61_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r82 = ctx.$implicit;
    const ctx_r81 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r81.hasFormError("direccion", validation_r82.type) && !ctx_r81.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_61_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_61_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r24 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r24.messageValidation["direccion"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_62_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r85 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r85.getMessageBeforeChange("direccion"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_62_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_62_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r25 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r25.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_69_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r87 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r87.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_69_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_69_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r87 = ctx.$implicit;
    const ctx_r86 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r86.hasFormError("codigoDistrito", validation_r87.type) && !ctx_r86.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_69_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_69_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r26 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r26.messageValidation["codigoDistrito"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_70_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r90 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r90.getMessageBeforeChange("codigoDistrito"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_70_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_70_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r27 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r27.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_option_83_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-option", 53);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const dept_r91 = ctx.$implicit;
    core/* ɵɵproperty */.Q6J("value", dept_r91.depName);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(dept_r91.depName);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_84_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r93 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r93.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_84_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_84_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r93 = ctx.$implicit;
    const ctx_r92 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r92.hasFormError("departamento", validation_r93.type) && !ctx_r92.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_84_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_84_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r29 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r29.messageValidation["departamento"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_85_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r96 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r96.getMessageBeforeChange("departamento"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_85_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_85_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r30 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r30.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_option_92_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-option", 53);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const city_r97 = ctx.$implicit;
    core/* ɵɵproperty */.Q6J("value", city_r97.name);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(city_r97.name);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_93_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r99 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r99.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_93_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_93_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r99 = ctx.$implicit;
    const ctx_r98 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r98.hasFormError("ciudad", validation_r99.type) && !ctx_r98.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_93_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_93_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r32 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r32.messageValidation["ciudad"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_94_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r102 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r102.getMessageBeforeChange("ciudad"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_94_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_94_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r33 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r33.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_100_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r104 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r104.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_100_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_100_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r104 = ctx.$implicit;
    const ctx_r103 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r103.hasFormError("telefonoMovil", validation_r104.type) && !ctx_r103.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_100_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_100_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r34 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r34.messageValidation["telefonoMovil"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_101_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r107 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r107.getMessageBeforeChange("telefonoMovil"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_101_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_101_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r35 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r35.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_106_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r109 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r109.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_106_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_106_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r109 = ctx.$implicit;
    const ctx_r108 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r108.hasFormError("correoRepresentante", validation_r109.type) && !ctx_r108.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_106_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_106_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r36 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r36.messageValidation["correoRepresentante"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_107_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r112 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r112.getMessageBeforeChange("correoRepresentante"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_107_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_107_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r37 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r37.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_117_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r114 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r114.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_117_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_117_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r114 = ctx.$implicit;
    const ctx_r113 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r113.hasFormError("correoFactura1", validation_r114.type) && !ctx_r113.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_117_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_117_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r38 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r38.messageValidation["correoFactura1"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_118_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r117 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r117.getMessageBeforeChange("correoFactura1"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_118_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_118_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r39 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r39.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_124_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r119 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r119.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_124_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_124_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r119 = ctx.$implicit;
    const ctx_r118 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r118.hasFormError("correoFactura2", validation_r119.type) && !ctx_r118.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_124_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_124_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r40 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r40.messageValidation["correoFactura2"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_125_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r122 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r122.getMessageBeforeChange("correoFactura2"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_125_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_125_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r41 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r41.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_135_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r124 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r124.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_135_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_135_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r124 = ctx.$implicit;
    const ctx_r123 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r123.hasFormError("nombreContactoOperativo", validation_r124.type) && !ctx_r123.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_135_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_135_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r42 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r42.messageValidation["nombreContactoOperativo"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_136_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r127 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r127.getMessageBeforeChange("nombreContactoOperativo"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_136_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_136_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r43 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r43.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_141_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r129 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r129.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_141_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_141_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r129 = ctx.$implicit;
    const ctx_r128 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r128.hasFormError("telefonoMovilContacto", validation_r129.type) && !ctx_r128.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_141_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_141_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r44 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r44.messageValidation["telefonoMovilContacto"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_142_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r132 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r132.getMessageBeforeChange("telefonoMovilContacto"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_142_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_142_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r45 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r45.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_148_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r134 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r134.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_148_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_148_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r134 = ctx.$implicit;
    const ctx_r133 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r133.hasFormError("correoContacto", validation_r134.type) && !ctx_r133.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_148_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_148_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r46 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r46.messageValidation["correoContacto"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_149_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r137 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r137.getMessageBeforeChange("correoContacto"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_149_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_149_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r47 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r47.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_159_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r139 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r139.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_159_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_159_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r139 = ctx.$implicit;
    const ctx_r138 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r138.hasFormError("nombreContactoTesoreria", validation_r139.type) && !ctx_r138.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_159_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_159_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r48 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r48.messageValidation["nombreContactoTesoreria"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_160_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r142 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r142.getMessageBeforeChange("nombreContactoTesoreria"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_160_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_160_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r49 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r49.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_165_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r144 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r144.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_165_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_165_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r144 = ctx.$implicit;
    const ctx_r143 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r143.hasFormError("telefonoMovilTesoreria", validation_r144.type) && !ctx_r143.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_165_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_165_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r50 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r50.messageValidation["telefonoMovilTesoreria"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_166_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r147 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r147.getMessageBeforeChange("telefonoMovilTesoreria"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_166_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_166_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r51 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r51.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_172_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r149 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r149.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_172_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_172_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r149 = ctx.$implicit;
    const ctx_r148 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r148.hasFormError("correoTesoreria1", validation_r149.type) && !ctx_r148.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_172_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_172_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r52 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r52.messageValidation["correoTesoreria1"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_173_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r152 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r152.getMessageBeforeChange("correoTesoreria1"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_173_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_173_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r53 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r53.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_179_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const validation_r154 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", validation_r154.message, " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_error_179_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_error_179_ng_container_3_span_1_Template, 2, 1, "span", 51);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const validation_r154 = ctx.$implicit;
    const ctx_r153 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r153.hasFormError("correoTesoreria2", validation_r154.type) && !ctx_r153.receivedForm);
  }
}
function CustomerManagementFormComponent_div_11_mat_error_179_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 49)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, CustomerManagementFormComponent_div_11_mat_error_179_ng_container_3_Template, 2, 1, "ng-container", 50);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r54 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r54.messageValidation["correoTesoreria2"]);
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_180_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r157 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r157.getMessageBeforeChange("correoTesoreria2"), " ");
  }
}
function CustomerManagementFormComponent_div_11_mat_hint_180_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-hint");
    core/* ɵɵtemplate */.YNc(1, CustomerManagementFormComponent_div_11_mat_hint_180_span_1_Template, 2, 1, "span", 1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r55 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r55.receivedForm);
  }
}
const _c2 = function (a0) {
  return {
    "my--form__margin": a0
  };
};
const _c3 = function () {
  return {
    "edit-input": true
  };
};
const _c4 = function (a0) {
  return {
    "input-red": a0
  };
};
function CustomerManagementFormComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r159 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(0, "div", 15)(1, "form", 16);
    core/* ɵɵlistener */.NdJ("ngSubmit", function CustomerManagementFormComponent_div_11_Template_form_ngSubmit_1_listener() {
      core/* ɵɵrestoreView */.CHM(_r159);
      const ctx_r158 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r158.onSubmit());
    });
    core/* ɵɵelementStart */.TgZ(2, "mat-accordion")(3, "mat-expansion-panel")(4, "mat-expansion-panel-header")(5, "mat-panel-title", 17);
    core/* ɵɵtext */._uU(6, " Informaci\u00F3n de la Empresa ");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(7, "div", 18)(8, "mat-form-field", 19)(9, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(10);
    core/* ɵɵtext */._uU(11, " Tratamiento ");
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(12, "mat-select", 20)(13, "mat-option", 21);
    core/* ɵɵtext */._uU(14, "Empresa");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(15, "mat-option", 22);
    core/* ɵɵtext */._uU(16, "Se\u00F1or");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(17, "mat-option", 23);
    core/* ɵɵtext */._uU(18, "Se\u00F1ora");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵtemplate */.YNc(19, CustomerManagementFormComponent_div_11_mat_error_19_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(20, CustomerManagementFormComponent_div_11_mat_hint_20_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(21, "mat-form-field", 19)(22, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(23);
    core/* ɵɵtext */._uU(24, " Tipo Persona ");
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(25, "mat-select", 25)(26, "mat-option", 26);
    core/* ɵɵtext */._uU(27, "Jur\u00EDdica");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(28, "mat-option", 27);
    core/* ɵɵtext */._uU(29, "Natural");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵtemplate */.YNc(30, CustomerManagementFormComponent_div_11_mat_error_30_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(31, CustomerManagementFormComponent_div_11_mat_hint_31_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(32, "div")(33, "mat-form-field", 19)(34, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(35);
    core/* ɵɵtext */._uU(36, " Nit ");
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(37, "input", 28);
    core/* ɵɵtemplate */.YNc(38, CustomerManagementFormComponent_div_11_mat_error_38_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(39, CustomerManagementFormComponent_div_11_mat_hint_39_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(40, "div")(41, "mat-form-field", 19)(42, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(43);
    core/* ɵɵtext */._uU(44, " Raz\u00F3n Social ");
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(45, "input", 29);
    core/* ɵɵtemplate */.YNc(46, CustomerManagementFormComponent_div_11_mat_error_46_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(47, CustomerManagementFormComponent_div_11_mat_hint_47_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(48, "div", 18)(49, "mat-form-field", 19)(50, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(51);
    core/* ɵɵtext */._uU(52, " Sigla o identificador adicional ");
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(53, "input", 30);
    core/* ɵɵtemplate */.YNc(54, CustomerManagementFormComponent_div_11_mat_error_54_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(55, CustomerManagementFormComponent_div_11_mat_hint_55_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(56, "mat-form-field", 19)(57, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(58);
    core/* ɵɵtext */._uU(59, " Direcci\u00F3n ");
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(60, "input", 31);
    core/* ɵɵtemplate */.YNc(61, CustomerManagementFormComponent_div_11_mat_error_61_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(62, CustomerManagementFormComponent_div_11_mat_hint_62_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(63, "div", 18)(64, "mat-form-field", 19)(65, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(66);
    core/* ɵɵtext */._uU(67, " C\u00F3digo del distrito en el RUT ");
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(68, "input", 32);
    core/* ɵɵtemplate */.YNc(69, CustomerManagementFormComponent_div_11_mat_error_69_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(70, CustomerManagementFormComponent_div_11_mat_hint_70_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(71, "mat-form-field", 19)(72, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(73);
    core/* ɵɵtext */._uU(74, " Pa\u00EDs ");
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(75, "input", 33);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(76, "div", 18)(77, "mat-form-field", 19)(78, "mat-label");
    core/* ɵɵtext */._uU(79, "Departamento");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(80, "mat-select", 34)(81, "mat-option", 35);
    core/* ɵɵtext */._uU(82, "Seleccione un departamento");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(83, CustomerManagementFormComponent_div_11_mat_option_83_Template, 2, 2, "mat-option", 36);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(84, CustomerManagementFormComponent_div_11_mat_error_84_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(85, CustomerManagementFormComponent_div_11_mat_hint_85_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(86, "mat-form-field", 19)(87, "mat-label");
    core/* ɵɵtext */._uU(88, "Ciudad");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(89, "mat-select", 37)(90, "mat-option", 35);
    core/* ɵɵtext */._uU(91, "Seleccione una ciudad");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(92, CustomerManagementFormComponent_div_11_mat_option_92_Template, 2, 2, "mat-option", 36);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(93, CustomerManagementFormComponent_div_11_mat_error_93_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(94, CustomerManagementFormComponent_div_11_mat_hint_94_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(95, "div", 18)(96, "mat-form-field", 19)(97, "mat-label");
    core/* ɵɵtext */._uU(98, "Tel\u00E9fono m\u00F3vil para notificaciones");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(99, "input", 38);
    core/* ɵɵtemplate */.YNc(100, CustomerManagementFormComponent_div_11_mat_error_100_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(101, CustomerManagementFormComponent_div_11_mat_hint_101_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(102, "mat-form-field", 19)(103, "mat-label");
    core/* ɵɵtext */._uU(104, "Correo representante Legal");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(105, "input", 39);
    core/* ɵɵtemplate */.YNc(106, CustomerManagementFormComponent_div_11_mat_error_106_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(107, CustomerManagementFormComponent_div_11_mat_hint_107_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵelementStart */.TgZ(108, "mat-expansion-panel")(109, "mat-expansion-panel-header")(110, "mat-panel-title", 17);
    core/* ɵɵtext */._uU(111, " Informaci\u00F3n Factura Electr\u00F3nica ");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(112, "div")(113, "mat-form-field", 19)(114, "mat-label");
    core/* ɵɵtext */._uU(115, "Correo factura electr\u00F3nica 1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(116, "input", 40);
    core/* ɵɵtemplate */.YNc(117, CustomerManagementFormComponent_div_11_mat_error_117_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(118, CustomerManagementFormComponent_div_11_mat_hint_118_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(119, "div")(120, "mat-form-field", 19)(121, "mat-label");
    core/* ɵɵtext */._uU(122, "Correo factura electr\u00F3nica 2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(123, "input", 41);
    core/* ɵɵtemplate */.YNc(124, CustomerManagementFormComponent_div_11_mat_error_124_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(125, CustomerManagementFormComponent_div_11_mat_hint_125_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵelementStart */.TgZ(126, "mat-expansion-panel")(127, "mat-expansion-panel-header")(128, "mat-panel-title", 17);
    core/* ɵɵtext */._uU(129, " Datos de Contacto Operativo ");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(130, "div", 18)(131, "mat-form-field", 19)(132, "mat-label");
    core/* ɵɵtext */._uU(133, "Nombre contacto operativo");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(134, "input", 42);
    core/* ɵɵtemplate */.YNc(135, CustomerManagementFormComponent_div_11_mat_error_135_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(136, CustomerManagementFormComponent_div_11_mat_hint_136_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(137, "mat-form-field", 19)(138, "mat-label");
    core/* ɵɵtext */._uU(139, "Tel\u00E9fono m\u00F3vil");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(140, "input", 43);
    core/* ɵɵtemplate */.YNc(141, CustomerManagementFormComponent_div_11_mat_error_141_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(142, CustomerManagementFormComponent_div_11_mat_hint_142_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(143, "div")(144, "mat-form-field", 19)(145, "mat-label");
    core/* ɵɵtext */._uU(146, "Correo electr\u00F3nico");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(147, "input", 44);
    core/* ɵɵtemplate */.YNc(148, CustomerManagementFormComponent_div_11_mat_error_148_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(149, CustomerManagementFormComponent_div_11_mat_hint_149_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵelementStart */.TgZ(150, "mat-expansion-panel")(151, "mat-expansion-panel-header")(152, "mat-panel-title", 17);
    core/* ɵɵtext */._uU(153, " Datos de Contacto Tesorer\u00EDa ");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(154, "div", 18)(155, "mat-form-field", 19)(156, "mat-label");
    core/* ɵɵtext */._uU(157, "Nombre contacto tesorer\u00EDa");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(158, "input", 45);
    core/* ɵɵtemplate */.YNc(159, CustomerManagementFormComponent_div_11_mat_error_159_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(160, CustomerManagementFormComponent_div_11_mat_hint_160_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(161, "mat-form-field", 19)(162, "mat-label");
    core/* ɵɵtext */._uU(163, "Tel\u00E9fono m\u00F3vil");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(164, "input", 46);
    core/* ɵɵtemplate */.YNc(165, CustomerManagementFormComponent_div_11_mat_error_165_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(166, CustomerManagementFormComponent_div_11_mat_hint_166_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(167, "div")(168, "mat-form-field", 19)(169, "mat-label");
    core/* ɵɵtext */._uU(170, "Correo electr\u00F3nico 1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(171, "input", 47);
    core/* ɵɵtemplate */.YNc(172, CustomerManagementFormComponent_div_11_mat_error_172_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(173, CustomerManagementFormComponent_div_11_mat_hint_173_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(174, "div")(175, "mat-form-field", 19)(176, "mat-label");
    core/* ɵɵtext */._uU(177, "Correo electr\u00F3nico 2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(178, "input", 48);
    core/* ɵɵtemplate */.YNc(179, CustomerManagementFormComponent_div_11_mat_error_179_Template, 4, 1, "mat-error", 24);
    core/* ɵɵtemplate */.YNc(180, CustomerManagementFormComponent_div_11_mat_hint_180_Template, 2, 1, "mat-hint", 1);
    core/* ɵɵelementEnd */.qZA()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    let tmp_2_0;
    let tmp_4_0;
    let tmp_7_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_14_0;
    let tmp_16_0;
    let tmp_19_0;
    let tmp_22_0;
    let tmp_24_0;
    let tmp_26_0;
    let tmp_28_0;
    let tmp_30_0;
    let tmp_32_0;
    let tmp_34_0;
    let tmp_36_0;
    let tmp_38_0;
    let tmp_40_0;
    let tmp_42_0;
    let tmp_44_0;
    core/* ɵɵproperty */.Q6J("ngClass", core/* ɵɵpureFunction1 */.VKq(46, _c2, !ctx_r1.isAgent));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("formGroup", ctx_r1.formulario);
    core/* ɵɵadvance */.xp6(18);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_2_0 = ctx_r1.formulario.get("tratamiento")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.formulario.get("tratamiento")) == null ? null : tmp_2_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("tratamiento"));
    core/* ɵɵadvance */.xp6(10);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_4_0 = ctx_r1.formulario.get("tipoPersona")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx_r1.formulario.get("tipoPersona")) == null ? null : tmp_4_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("tipoPersona"));
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("ngClass", core/* ɵɵpureFunction0 */.DdM(48, _c3));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_7_0 = ctx_r1.formulario.get("nit")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx_r1.formulario.get("nit")) == null ? null : tmp_7_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("nit"));
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("ngClass", core/* ɵɵpureFunction1 */.VKq(49, _c4, ctx_r1.tipoPresentacion === "1"));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_10_0 = ctx_r1.formulario.get("razonSocial")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx_r1.formulario.get("razonSocial")) == null ? null : tmp_10_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("razonSocial"));
    core/* ɵɵadvance */.xp6(7);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_12_0 = ctx_r1.formulario.get("sigla")) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx_r1.formulario.get("sigla")) == null ? null : tmp_12_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("sigla"));
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_14_0 = ctx_r1.formulario.get("direccion")) == null ? null : tmp_14_0.invalid) && ((tmp_14_0 = ctx_r1.formulario.get("direccion")) == null ? null : tmp_14_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("direccion"));
    core/* ɵɵadvance */.xp6(7);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_16_0 = ctx_r1.formulario.get("codigoDistrito")) == null ? null : tmp_16_0.invalid) && ((tmp_16_0 = ctx_r1.formulario.get("codigoDistrito")) == null ? null : tmp_16_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("codigoDistrito"));
    core/* ɵɵadvance */.xp6(13);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.departaments);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_19_0 = ctx_r1.formulario.get("departamento")) == null ? null : tmp_19_0.invalid) && ((tmp_19_0 = ctx_r1.formulario.get("departamento")) == null ? null : tmp_19_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("departamento"));
    core/* ɵɵadvance */.xp6(7);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.filteredCiudades);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_22_0 = ctx_r1.formulario.get("ciudad")) == null ? null : tmp_22_0.invalid) && ((tmp_22_0 = ctx_r1.formulario.get("ciudad")) == null ? null : tmp_22_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("ciudad"));
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_24_0 = ctx_r1.formulario.get("telefonoMovil")) == null ? null : tmp_24_0.invalid) && ((tmp_24_0 = ctx_r1.formulario.get("telefonoMovil")) == null ? null : tmp_24_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("telefonoMovil"));
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_26_0 = ctx_r1.formulario.get("correoRepresentante")) == null ? null : tmp_26_0.invalid) && ((tmp_26_0 = ctx_r1.formulario.get("correoRepresentante")) == null ? null : tmp_26_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("correoRepresentante"));
    core/* ɵɵadvance */.xp6(10);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_28_0 = ctx_r1.formulario.get("correoFactura1")) == null ? null : tmp_28_0.invalid) && ((tmp_28_0 = ctx_r1.formulario.get("correoFactura1")) == null ? null : tmp_28_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("correoFactura1"));
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_30_0 = ctx_r1.formulario.get("correoFactura2")) == null ? null : tmp_30_0.invalid) && ((tmp_30_0 = ctx_r1.formulario.get("correoFactura2")) == null ? null : tmp_30_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("correoFactura2"));
    core/* ɵɵadvance */.xp6(10);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_32_0 = ctx_r1.formulario.get("nombreContactoOperativo")) == null ? null : tmp_32_0.invalid) && ((tmp_32_0 = ctx_r1.formulario.get("nombreContactoOperativo")) == null ? null : tmp_32_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("nombreContactoOperativo"));
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_34_0 = ctx_r1.formulario.get("telefonoMovilContacto")) == null ? null : tmp_34_0.invalid) && ((tmp_34_0 = ctx_r1.formulario.get("telefonoMovilContacto")) == null ? null : tmp_34_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("telefonoMovilContacto"));
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_36_0 = ctx_r1.formulario.get("correoContacto")) == null ? null : tmp_36_0.invalid) && ((tmp_36_0 = ctx_r1.formulario.get("correoContacto")) == null ? null : tmp_36_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("correoContacto"));
    core/* ɵɵadvance */.xp6(10);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_38_0 = ctx_r1.formulario.get("nombreContactoTesoreria")) == null ? null : tmp_38_0.invalid) && ((tmp_38_0 = ctx_r1.formulario.get("nombreContactoTesoreria")) == null ? null : tmp_38_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("nombreContactoTesoreria"));
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_40_0 = ctx_r1.formulario.get("telefonoMovilTesoreria")) == null ? null : tmp_40_0.invalid) && ((tmp_40_0 = ctx_r1.formulario.get("telefonoMovilTesoreria")) == null ? null : tmp_40_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("telefonoMovilTesoreria"));
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_42_0 = ctx_r1.formulario.get("correoTesoreria1")) == null ? null : tmp_42_0.invalid) && ((tmp_42_0 = ctx_r1.formulario.get("correoTesoreria1")) == null ? null : tmp_42_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("correoTesoreria1"));
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_44_0 = ctx_r1.formulario.get("correoTesoreria2")) == null ? null : tmp_44_0.invalid) && ((tmp_44_0 = ctx_r1.formulario.get("correoTesoreria2")) == null ? null : tmp_44_0.touched));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.isFormModified("correoTesoreria2"));
  }
}
function CustomerManagementFormComponent_ng_template_12_div_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(0, "div", 55);
    core/* ɵɵelement */._UZ(1, "app-upload-file", 56, 57);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r160 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("module", ctx_r160.routeData.documentation_module)("formValid", ctx_r160.onSubmit.bind(ctx_r160))("validateForm", ctx_r160.validateForm.bind(ctx_r160))("nbr", ctx_r160.nbr)("ownerId", ctx_r160.ownerId)("owner", ctx_r160.owner)("tab", ctx_r160.tab)("documentsTypes", ctx_r160.documentsTypes);
  }
}
function CustomerManagementFormComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵtemplate */.YNc(0, CustomerManagementFormComponent_ng_template_12_div_0_Template, 3, 8, "div", 54);
  }
  if (rf & 2) {
    const ctx_r3 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r3.documentsTypes.length > 0 && ctx_r3.reload && ctx_r3.customerRequestFlag == "0");
  }
}
let CustomerManagementFormComponent = /*#__PURE__*/(() => {
  class CustomerManagementFormComponent {
    showSecondaryComponent() {
      this.componentChange.emit();
    }
    constructor(store, fb, utilService, businessManagementService, matDialog, statesServiceBusinessManagement, router, matSnackBar, aesEncryptionUtilService) {
      this.store = store;
      this.fb = fb;
      this.utilService = utilService;
      this.businessManagementService = businessManagementService;
      this.matDialog = matDialog;
      this.statesServiceBusinessManagement = statesServiceBusinessManagement;
      this.router = router;
      this.matSnackBar = matSnackBar;
      this.aesEncryptionUtilService = aesEncryptionUtilService;
      this.documentsByUploadFile = [];
      this.reload = false;
      this.destroy$ = new Subject/* Subject */.x();
      this.routeData = {
        documentation_module: 'GEST_CLIE_NEW'
      };
      this.nbr = 'null';
      this.receivedDepartment = [];
      this.receivedCity = [];
      this.tab = 'GE_REG_ACT';
      this.isSubscribed = false;
      this.subscriptions = new Subscription/* Subscription */.w0();
      this.validatedCliente = false;
      this.secondaryContent = new core/* EventEmitter */.vpe();
      this.componentChange = new core/* EventEmitter */.vpe();
      this.messageValidation = VALIDATION_MESSAGE_BUSINESS_MANAGEMENT;
      this.clientHaveCitie = '';
      this.departmentClient = '';
      this.action = '';
      this.valueChangesCustomer = {};
      this.ownerId = '';
      this.owner = '';
      this.informationCustomerRequest = this.defaultCustomerRequest();
      this.customerRequestNotificationData = this.defaultCustomerRequest();
      this.panelOpenState = false;
      this.selectedOption = 'activeClient';
      this.showForm = false;
      this.isAgent = false;
      this.errorMessage = '';
      this.cities = [];
      this.documentsTypes = [];
      this.filteredCiudades = [];
      this.departaments = [];
      this.tipoPresentacion = '';
      this.requestDocument = {
        nit: '',
        companyType: '',
        mandato: '-1'
      };
      this.customerReq = {
        principalNit: '',
        secondaryNit: ''
      };
      this.customerRequestFlag = '0';
      this.consignee = '';
      this.nitConsignee = '';
      this.fullConsignee = '';
      // public consigneeToSave: boolean = false;
      this.cleanCustomerFunction = () => {};
      this.consultClient = 0;
      this.invalidFields = [];
    }
    ngAfterViewInit() {
      // Emitimos el contenido secundario al componente padre después de que la vista se haya inicializado
      this.secondaryContent.emit(this.secondaryContentTemplate);
    }
    ngAfterViewChecked() {
      if (this.uploadFileComponent && !this.isSubscribed) {
        this.isSubscribed = true;
        this.uploadFileComponent.documentsLoad$.pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(listDocuments => {
          this.documentsByUploadFile = listDocuments;
        });
      }
    }
    ngOnInit() {
      if (this.receivedForm) {
        this.initializeForm();
        this.initializeFormByInput(this.receivedForm);
      } else {
        this.secondaryContent.emit(this.secondaryContentTemplate);
        this.initializeForm();
        this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
          next: APIGatewatStore => {
            this.userInfo = APIGatewatStore;
            this.isUserAgent();
          },
          error: error => console.error(error)
        });
        this.statesServiceBusinessManagement.getStateIsCancelCreateRequest().pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(isCancel => {
          if (isCancel) {
            this.reloadComponentAfterConfirm();
          }
        });
      }
    }
    filterCiudades(departamentoCode) {
      if (this.validatedCliente) {
        let departmentSelected = this.departaments.filter(element => element.depName === departamentoCode);
        this.filteredCiudades = this.cities.filter(ciudad => ciudad.code === (departmentSelected[0]?.depCode ? departmentSelected[0].depCode : ''));
        this.formulario.get('ciudad')?.setValue(''); // Reset ciudad cuando cambio el departamento
        if (this.formulario.get('departamento')?.value) {
          this.formulario.get('ciudad')?.enable();
        }
      }
    }
    initializeForm() {
      this.formulario = this.fb.group({
        tratamiento: ['', fesm2020_forms/* Validators.required */.kI.required],
        tipoPersona: ['', fesm2020_forms/* Validators.required */.kI.required],
        nit: ['', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^\d{10}$/)]],
        razonSocial: ['', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(5), fesm2020_forms/* Validators.maxLength */.kI.maxLength(60)]],
        sigla: ['', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(5), fesm2020_forms/* Validators.maxLength */.kI.maxLength(10)]],
        direccion: ['', [fesm2020_forms/* Validators.minLength */.kI.minLength(5), fesm2020_forms/* Validators.maxLength */.kI.maxLength(68)]],
        codigoDistrito: ['', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(1), fesm2020_forms/* Validators.maxLength */.kI.maxLength(10), fesm2020_forms/* Validators.pattern */.kI.pattern(/^\d{1,10}$/)]],
        pais: [{
          value: 'Colombia',
          disabled: true
        }],
        departamento: ['', fesm2020_forms/* Validators.required */.kI.required],
        ciudad: [{
          value: '',
          disabled: true
        }, fesm2020_forms/* Validators.required */.kI.required],
        telefonoMovil: ['', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(10), fesm2020_forms/* Validators.maxLength */.kI.maxLength(10), fesm2020_forms/* Validators.pattern */.kI.pattern(/^\d{10}$/)]],
        correoRepresentante: ['', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(5), fesm2020_forms/* Validators.maxLength */.kI.maxLength(50), fesm2020_forms/* Validators.pattern */.kI.pattern(/^(?:[^ ]+[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5})?$/)]],
        correoFactura1: ['', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(5), fesm2020_forms/* Validators.maxLength */.kI.maxLength(50), fesm2020_forms/* Validators.pattern */.kI.pattern(/^(?:[^ ]+[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5})?$/)]],
        correoFactura2: ['', [fesm2020_forms/* Validators.minLength */.kI.minLength(5), fesm2020_forms/* Validators.maxLength */.kI.maxLength(50), fesm2020_forms/* Validators.pattern */.kI.pattern(/^(?:[^ ]+[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5})?$/)]],
        nombreContactoOperativo: ['', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(3), fesm2020_forms/* Validators.maxLength */.kI.maxLength(69), fesm2020_forms/* Validators.pattern */.kI.pattern(/^[a-zA-Z\s]*$/)]],
        telefonoMovilContacto: ['', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(10), fesm2020_forms/* Validators.maxLength */.kI.maxLength(10), fesm2020_forms/* Validators.pattern */.kI.pattern(/^\d{10}$/)]],
        correoContacto: ['', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(5), fesm2020_forms/* Validators.maxLength */.kI.maxLength(50), fesm2020_forms/* Validators.pattern */.kI.pattern(/^(?:[^ ]+[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5})?$/)]],
        nombreContactoTesoreria: ['', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(3), fesm2020_forms/* Validators.maxLength */.kI.maxLength(69), fesm2020_forms/* Validators.pattern */.kI.pattern(/^[a-zA-Z\s]*$/)]],
        telefonoMovilTesoreria: ['', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(10), fesm2020_forms/* Validators.maxLength */.kI.maxLength(10), fesm2020_forms/* Validators.pattern */.kI.pattern(/^\d{10}$/)]],
        correoTesoreria1: ['', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(5), fesm2020_forms/* Validators.maxLength */.kI.maxLength(50), fesm2020_forms/* Validators.pattern */.kI.pattern(/^(?:[^ ]+[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5})?$/)]],
        correoTesoreria2: ['', [fesm2020_forms/* Validators.minLength */.kI.minLength(5), fesm2020_forms/* Validators.maxLength */.kI.maxLength(50), fesm2020_forms/* Validators.pattern */.kI.pattern(/^(?:[^ ]+[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5})?$/)]]
      });
      this.formulario.get('departamento')?.valueChanges.pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(departamentoCode => {
        this.filterCiudades(departamentoCode);
      });
    }
    onSelectionChange(event) {
      this.selectedOption = event.value ? event.value : this.selectedOption;
      if (this.selectedOption == 'myCompany') {
        this.reloadComponentUploadDocument();
        this.requestDocument.nit = this.userInfo.empresa?.id;
        this.requestDocument.mandato = '-1';
        this.ownerId = this.userInfo.empresa?.id;
        this.owner = this.userInfo.empresa?.companyName;
        const typeCompany = (0,utils/* getCompanyTypeSelected */.GY)(this.userInfo.empresa?.tiposEmpresas);
        this.requestDocument.companyType = (0,utils/* getCompanyTypeName */.RT)(typeCompany.companyTypeId);
        this.getCustomerData(this.userInfo.empresa?.id);
        this.consultClient = 0;
        this.consignee = '';
      }
    }
    // si no es un agencia por defecto cargue los valores al formulario
    isUserAgent() {
      let verifyIsAgent = false;
      this.userInfo.empresa?.tiposEmpresas.forEach(tipoEmpresa => {
        if (tipoEmpresa.companyTypeId.includes('06') && tipoEmpresa.selected) {
          verifyIsAgent = true;
        }
      });
      this.isAgent = verifyIsAgent;
      if (!this.isAgent) {
        this.selectedOption = 'myCompany';
      }
      if (!this.isAgent && this.userInfo.empresa?.id) {
        const typeCompany = (0,utils/* getCompanyTypeSelected */.GY)(this.userInfo.empresa?.tiposEmpresas);
        this.requestDocument.companyType = (0,utils/* getCompanyTypeName */.RT)(typeCompany.companyTypeId);
        this.requestDocument.nit = this.userInfo.empresa?.id;
        this.requestDocument.mandato = '-1';
        this.ownerId = this.userInfo.empresa?.id;
        this.owner = this.userInfo.empresa?.companyName;
        this.ownerId = this.userInfo.empresa?.id;
        this.owner = this.userInfo.empresa?.companyName;
        this.getCustomerData(this.userInfo.empresa?.id);
        this.consultClient = 0;
        this.consignee = '';
      }
    }
    onSubmit() {
      this.getInvalidFields();
      if (!this.validateForm()) {
        return (0,of.of)(false);
      }
      this.compareFormDataWithBackup();
      if (this.action == 'create') {
        this.owner = this.formulario.get('razonSocial')?.value;
      }
      this.informationCustomerRequest.customerId = this.formulario.get('nit')?.value;
      this.informationCustomerRequest.creatorId = this.userInfo.empresa?.id;
      this.informationCustomerRequest.creatorUserId = this.userInfo.userName;
      this.informationCustomerRequest.contactName = this.userInfo.nombres + " " + this.userInfo.apellidos;
      this.informationCustomerRequest.contactEmail = this.userInfo.correo;
      this.informationCustomerRequest.contactPhone = null;
      this.informationCustomerRequest.requestStatus = '1Creada';
      this.informationCustomerRequest.requestInfo = JSON.stringify(this.filterObjectsWithNewValue(this.valueChangesCustomer));
      this.informationCustomerRequest.infoStatus = this.getStatusForSave(this.valueChangesCustomer);
      this.informationCustomerRequest.requestFlow = null;
      const dialogRef = this.matDialog.open(CustomerManagementFormConfirmComponent, {
        width: "55rem",
        data: {
          action: this.action,
          customerData: this.valueChangesCustomer,
          documents: this.documentsByUploadFile,
          informationCustomerRequest: this.informationCustomerRequest,
          hasNotification: true,
          notificationData: this.customerRequestNotificationData,
          privilege: privileges_enum/* privileges.GE_REG_ACT */.U.GE_REG_ACT
        }
      });
      const dialogSubscription = dialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
          this.showForm = false;
          this.selectedOption = '';
          this.reloadComponentAfterConfirm();
        } else if (result === 0) {}
      });
      this.subscriptions.add(dialogSubscription);
      dialogRef.afterClosed().subscribe(() => {
        this.subscriptions.unsubscribe();
      });
      return (0,of.of)(true);
    }
    validateForm() {
      this.showFieldOrDocumentsPending();
      if (this.formulario.invalid) {
        this.formulario.markAllAsTouched();
        return false;
      }
      return true;
    }
    showFieldOrDocumentsPending() {
      this.invalidFields = [];
      //Recuperamos los campos incorrectos en el formulario
      if (this.formulario.invalid) {
        this.invalidFields = this.getInvalidFields();
      }
      this.statesServiceBusinessManagement.setInvalidFields(this.invalidFields);
      let missingRequiredDocuments = this.statesServiceBusinessManagement.getMissingRequiredDocuments();
      if (this.invalidFields.length > 0 || missingRequiredDocuments.length > 0) {
        if (this.matDialog.openDialogs.length === 0) {
          this.matDialog.open(PendingFieldsAndDocumentsComponentComponent, {
            width: '50%'
          });
        }
      }
    }
    onInput(event) {
      const input = event.target;
      const maxDigits = 12;
      // Solo permito numeros
      let sanitizedValue = input.value.replace(/[^0-9]/g, '');
      if (sanitizedValue.length > maxDigits) {
        sanitizedValue = sanitizedValue.slice(0, maxDigits);
      }
      // Actualizo el valor del input
      input.value = sanitizedValue;
    }
    onEnter(input) {
      const inputElement = input.target;
      this.ownerId = inputElement.value;
      if (this.ownerId.length < 9 || this.ownerId.length > 12) {
        this.matSnackBar.open('El nit no es valido', '', {
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['error-snackbar']
        });
        return;
      }
      if (this.selectedOption == 'newClient') {
        this.reloadComponentUploadDocument();
        this.requestDocument.companyType = 'cliente';
        this.requestDocument.nit = this.ownerId;
        this.formulario.reset();
        this.getCustomerData(this.ownerId, this.userInfo.empresa?.id);
        this.consultClient = 0;
        this.consignee = '';
      }
    }
    hasFormError(campo, tipoError) {
      if (!!this.receivedForm) return false;
      return this.formulario.get(campo)?.errors?.hasOwnProperty(tipoError);
    }
    // Método para obtener el mensaje
    getMessageBeforeChange(campo) {
      if (!!this.receivedForm || this.tipoPresentacion == '2' || this.tipoPresentacion == '0') return '';
      if (!this.isFormModified(campo)) {
        return '';
      }
      const campoValue = this.backupDataResult[campo];
      if (!campoValue) {
        return 'Sin dato previo';
      }
      let message = `Dato anterior: ${campoValue}`;
      if (this.tipoPresentacion === '1' && this.formulario.get(campo)?.value != campoValue) {
        return this.transforMessage(message);
      }
      return '';
    }
    isFormModified(campo) {
      if (!!this.receivedForm) return false;
      if (campo == 'tratamiento') {
        return this.transformDataInFieldTratamiento(this.formulario.get(campo)?.value) !== this.backupDataResult[campo];
      }
      return this.formulario.get(campo)?.value !== this.backupDataResult[campo];
    }
    transformDataInFieldTratamiento(value) {
      switch (value) {
        case 'empresa':
          return 'Empresa';
        case 'Senor':
          return 'Señor';
        case 'senor':
          return 'Señor';
        case 'Senora':
          return 'Señora';
        case 'senora':
          return 'Señora';
        default:
          return value;
      }
    }
    transforMessage(message) {
      switch (message) {
        case 'Dato anterior: J':
          return 'Dato anterior: Jurídica';
        case 'Dato anterior: N':
          return 'Dato anterior: Natural';
        default:
          return message;
      }
    }
    get emailField() {
      return this.formulario.get('razonSocial');
    }
    invalidField(campo) {
      return this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched;
    }
    assignServiceResponseToForm(data, dataRequest) {
      if (data.departamento && data.ciudad) {
        this.departmentClient = data.departamento;
        this.clientHaveCitie = data.ciudad;
      }
      this.action = data.nit == "" ? 'create' : 'update';
      if (data.tipoPresentacion == '1') {
        this.formulario.patchValue({
          tratamiento: data.tratamiento || '',
          tipoPersona: data.tipoPersona || '',
          nit: data.nit || '',
          razonSocial: data.razonSocial || '',
          sigla: data.sigla || '',
          direccion: data.direccion || '',
          codigoDistrito: data.distrito || '',
          pais: 'Colombia',
          departamento: data.departamento ? data.departamento : '',
          ciudad: data.departamento ? data.ciudad : '',
          telefonoMovil: data.telefono1 || '',
          correoRepresentante: data.email || '',
          correoFactura1: data.correoFE1 || '',
          correoFactura2: data.correoFE2 || '',
          nombreContactoOperativo: data.nombreC1 || '',
          telefonoMovilContacto: data.telefonoC1 || '',
          correoContacto: data.mailC1 || '',
          nombreContactoTesoreria: data.nombreC2 || '',
          telefonoMovilTesoreria: data.telefonoC2 || '',
          correoTesoreria1: data.mailC1 || '',
          correoTesoreria2: data.mailC2 || ''
        });
        this.formulario.get('nit')?.disable();
        this.matDialog.open(MessageEditCustomerDialogComponent, {
          width: "25rem",
          data: {
            selectOption: this.selectedOption,
            isAgent: this.isAgent
          }
        });
      }
      if (data.tipoPresentacion == '2') {
        this.formulario.patchValue({
          nit: data.nit || '',
          pais: 'Colombia'
        });
        this.formulario.get('nit')?.disable();
      }
      if (data.tipoPresentacion == '0') {
        this.formulario.patchValue({
          nit: dataRequest.principalNit || '',
          pais: 'Colombia'
        });
        this.formulario.get('nit')?.disable();
      }
      if (this.action == 'update') {
        this.owner = data.razonSocial;
      }
    }
    generateBackupInfo(data) {
      data.tratamiento;
      this.backupDataResult = {
        tipoPersona: data.tipoPersona || '',
        nit: data.nit || '',
        tratamiento: data.tratamiento || '',
        razonSocial: data.razonSocial || '',
        sigla: data.sigla || '',
        direccion: data.direccion || '',
        codigoDistrito: data.distrito || '',
        pais: 'Colombia',
        departamento: data.departamento || '',
        ciudad: data.ciudad || '',
        telefonoMovil: data.telefono1 || '',
        correoRepresentante: data.email || '',
        correoFactura1: data.correoFE1 || '',
        correoFactura2: data.correoFE2 || '',
        nombreContactoOperativo: data.nombreC1 || '',
        telefonoMovilContacto: data.telefonoC1 || '',
        correoContacto: data.mailC1 || '',
        nombreContactoTesoreria: data.nombreC2 || '',
        telefonoMovilTesoreria: data.telefonoC2 || '',
        correoTesoreria1: data.mailC1 || '',
        correoTesoreria2: data.mailC2 || ''
      };
    }
    compareFormDataWithBackup() {
      const formValues = this.formulario.value;
      // Incluyo en nit como valor con cambio ya que este no se permite editar, debe quedar dentro de la solicitud
      if (this.tipoPresentacion == '0') {
        this.valueChangesCustomer['nit'] = {
          new: this.formulario.get('nit')?.value,
          old: null
        };
      }
      for (const key in formValues) {
        if (formValues.hasOwnProperty(key)) {
          let newValue = this.backupDataResult[key] != (this.formulario.get(key)?.value ? this.formulario.get(key)?.value : '') ? this.formulario.get(key)?.value : null;
          this.valueChangesCustomer[key] = {
            new: newValue,
            old: this.backupDataResult[key] ? this.backupDataResult[key] : null
          };
        }
      }
    }
    filterObjectsWithNewValue(obj) {
      // Se utiliza Object.entries para iterar sobre las propiedades del objeto
      const filteredEntries = Object.entries(obj).filter(([key, value]) => {
        return value.new !== null && value.new !== '';
      });
      // Convertimos el array filtrado de nuevo a un objeto
      const filteredObject = Object.fromEntries(filteredEntries);
      return filteredObject;
    }
    getStatusForSave(valueChangesCustomer) {
      if (this.tipoPresentacion == '0') {
        return 'Nueva';
      }
      if (this.hasAtLeastOneValue(valueChangesCustomer)) {
        return 'DatosDocumental';
      }
      return 'Documental';
    }
    hasAtLeastOneValue(obj) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const value = obj[key];
          if (value.new !== null) {
            return true;
          }
        }
      }
      return false;
    }
    resetData() {
      this.showForm = false;
      this.validatedCliente = false;
      this.formulario.reset();
      this.filteredCiudades = [];
      this.initializeForm();
    }
    getCustomerData(principalNit, secondaryNit) {
      this.resetData();
      this.customerReq.principalNit = principalNit;
      this.customerReq.secondaryNit = secondaryNit ? secondaryNit : '';
      this.businessManagementService.getInfoCustomer(this.customerReq).pipe((0,catchError/* catchError */.K)(error => {
        // mirar si le mostramos este mensaje al usuario o algo generico: error obteniendo información, por favor intente nuevamente
        this.errorMessage = 'Error al obtener información del cliente';
        return (0,of.of)('');
      })).subscribe(response => {
        if (response.length) {
          let resp = JSON.parse(this.aesEncryptionUtilService.decrypt(response));
          if (resp.length > 0 && resp[0].request_flag) {
            let customerData = resp[0];
            this.customerRequestFlag = customerData.request_flag;
            this.departmentClient = '';
            this.clientHaveCitie = '';
            if (customerData.request_flag == '1') {
              this.matDialog.open(CustomerRequestInProgressMessageComponent, {
                width: '25rem'
              });
            } else {
              this.tipoPresentacion = customerData.tipoPresentacion ? customerData.tipoPresentacion : '';
              /*Enviar el mandato != -1 solo aplica cuando un agente quiere actualizar un cliente
               0 es una agencia sin mandato, 1 es una agencia con mandato  -1  cualquier otro caso
              */
              if (this.selectedOption == 'myCompany') {
                this.requestDocument.mandato = '-1';
              } else if (this.selectedOption == 'activeClient') {
                switch (customerData.tipoPresentacion) {
                  case '0':
                    this.requestDocument.mandato = '-1';
                    break;
                  case '1':
                    this.requestDocument.mandato = '1';
                    break;
                  case '2':
                    this.requestDocument.mandato = '0';
                    break;
                  default:
                    this.requestDocument.mandato = '-1';
                }
              } else if (this.selectedOption == 'newClient') {
                switch (customerData.tipoPresentacion) {
                  case '0':
                    this.requestDocument.mandato = '0'; //  Mandar 0 si el cliente es nuevo, estoy en segunda opción 
                    break;
                  case '1':
                    this.requestDocument.mandato = '1';
                    break;
                  case '2':
                    this.requestDocument.mandato = '0';
                    break;
                  default:
                    this.requestDocument.mandato = '-1';
                }
              }
              this.getTypesDocuments(this.requestDocument);
              this.getInfoDepartments();
              this.getInforCities();
              this.showForm = true;
              this.assignServiceResponseToForm(customerData, this.customerReq);
              this.generateBackupInfo(customerData);
            }
          }
        } else {
          this.documentsTypes = [];
        }
      });
    }
    getInfoDepartments() {
      this.utilService.getDepartments().pipe((0,catchError/* catchError */.K)(error => {
        // mirar si le mostramos este mensaje al usuario o algo generico: error obteniendo información, por favor intente nuevamente
        this.errorMessage = 'Error al obtener departamentos';
        return (0,of.of)([]);
      })).subscribe(resp => {
        this.departaments = resp.sort((a, b) => {
          if (a.depName < b.depName) {
            return -1;
          }
          if (a.depName > b.depName) {
            return 1;
          }
          return 0;
        });
      });
    }
    getInforCities() {
      this.utilService.getCities().pipe((0,catchError/* catchError */.K)(error => {
        // mirar si le mostramos este mensaje al usuario o algo generico: error obteniendo información, por favor intente nuevamente
        this.errorMessage = 'Error al obtener las ciudades/municipios';
        return (0,of.of)([]);
      })).subscribe(resp => {
        this.cities = resp.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        this.asignateCities();
      });
    }
    asignateCities() {
      this.validatedCliente = true;
      if (!this.clientHaveCitie || this.tipoPresentacion != '1') return;
      let departmentSelected = this.departaments.filter(element => element.depName === this.departmentClient);
      this.filteredCiudades = this.cities.filter(ciudad => ciudad.code === (departmentSelected[0]?.depCode ? departmentSelected[0].depCode : ''));
      this.formulario.get('ciudad')?.setValue(this.clientHaveCitie);
      this.formulario.get('ciudad')?.enable();
    }
    getTypesDocuments(requestDocument) {
      this.businessManagementService.getBusinessManagementDocuments(requestDocument).pipe((0,catchError/* catchError */.K)(error => {
        this.errorMessage = 'Error al obtener tipos de documentos';
        return (0,of.of)([]);
      })).subscribe(resp => {
        this.documentsTypes = resp;
        this.reload = true;
        //Seteamos los nuevos valores necesarios a guardar al momento de registrar la solicitud
        const requestType = this.documentsTypes[0].request_type ? this.documentsTypes[0].request_type : '';
        this.statesServiceBusinessManagement.setRequestType(requestType);
        this.statesServiceBusinessManagement.setRepresentedByAgent(requestDocument.mandato);
      });
    }
    ngOnDestroy() {
      this.isSubscribed = false;
      this.backupDataResult = {};
      this.destroy$.next();
      this.destroy$.complete();
    }
    reloadComponentUploadDocument() {
      this.reload = false;
      setTimeout(() => {
        this.reload = true;
      }, 500);
    }
    reloadComponentAfterConfirm() {
      const currentUrl = this.router.url;
      this.statesServiceBusinessManagement.resetAllProperties();
      this.router.navigateByUrl('/', {
        skipLocationChange: true
      }).then(() => {
        this.destroy$.next();
        this.destroy$.complete();
        this.router.navigate([currentUrl]);
      });
    }
    initializeFormByInput(form) {
      this.departaments = this.receivedDepartment ? this.receivedDepartment : [];
      this.filteredCiudades = this.receivedCity ? this.receivedCity : [];
      this.reload = true;
      this.showForm = true;
      this.formulario = this.receivedForm;
      this.formulario.patchValue(this.receivedForm.value);
      this.formulario.disable();
    }
    onCustomerSelected(selectedValue) {
      if (this.consultClient == 0) {
        if (selectedValue.split('/')[1] && selectedValue.split('/')[1] != '') {
          this.nitConsignee = selectedValue.split('/')[1] ? selectedValue.split('/')[0] : '';
          this.ownerId = this.nitConsignee;
          this.consignee = selectedValue.split('/')[1] ? selectedValue.split('/')[1] : '';
          this.fullConsignee = this.nitConsignee + '/' + this.consignee;
          if (this.selectedOption == 'activeClient') {
            this.reloadComponentUploadDocument();
            this.requestDocument.companyType = 'cliente';
            this.requestDocument.nit = this.ownerId;
            this.formulario.reset();
            this.getCustomerData(this.nitConsignee, this.userInfo.empresa?.id);
            this.consultClient = 1;
          }
        }
      }
    }
    clean(value) {
      this.cleanCustomerFunction = value;
      this.ownerId = '';
      this.nitConsignee = '';
      this.consignee = '';
      this.fullConsignee = '';
      this.store.dispatch((0,shared_actions/* cleanSelectedCustomer */.mS)());
    }
    defaultCustomerRequest() {
      return {
        requestId: null,
        customerId: null,
        creatorId: null,
        creatorUserId: null,
        createdAt: null,
        contactName: null,
        contactEmail: null,
        contactPhone: null,
        requestStatus: null,
        requestInfo: null,
        infoStatus: null,
        requestFlow: null,
        finalizedAt: null
      };
    }
    getInvalidFields() {
      let invalidFields = [];
      Object.keys(this.formulario.controls).forEach(key => {
        const control = this.formulario.get(key);
        if (control && control.invalid) {
          let field = app_constants/* keyValueMap */.m[key] || key;
          invalidFields.push(field);
        }
      });
      return invalidFields;
    }
  }
  CustomerManagementFormComponent.ɵfac = function CustomerManagementFormComponent_Factory(t) {
    return new (t || CustomerManagementFormComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(fesm2020_forms/* FormBuilder */.qu), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f), core/* ɵɵdirectiveInject */.Y36(BusinessManagementService), core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw), core/* ɵɵdirectiveInject */.Y36(states_service/* StatesServiceBusinessManagement */.Z), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(AESEncryptionUtil_service/* AESEncryptionUtilService */.D));
  };
  CustomerManagementFormComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: CustomerManagementFormComponent,
    selectors: [["app-customer-management-form"]],
    viewQuery: function CustomerManagementFormComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(_c0, 5);
        core/* ɵɵviewQuery */.Gf(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.secondaryContentTemplate = _t.first);
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.uploadFileComponent = _t.first);
      }
    },
    inputs: {
      nbr: "nbr",
      receivedForm: "receivedForm",
      receivedDepartment: "receivedDepartment",
      receivedCity: "receivedCity"
    },
    outputs: {
      secondaryContent: "secondaryContent",
      componentChange: "componentChange"
    },
    decls: 14,
    vars: 2,
    consts: [[1, "title-card"], [4, "ngIf"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 83.36 1.91", 1, "welcome__line"], ["id", "Capa_1-2"], ["width", "31.37", "height", "0.91", 1, "cls-2"], ["x", "26.13", "width", "28.61", "height", "0.91", 1, "cls-3"], ["x", "54.74", "width", "28.61", "height", "0.91", 1, "cls-1"], ["class", "my--form", 3, "ngClass", 4, "ngIf"], ["secondaryContent", ""], ["aria-label", "Select an option", 1, "select__option", 3, "change"], ["value", "myCompany"], ["value", "newClient"], ["value", "activeClient", "checked", ""], ["matInput", "", "type", "text", "placeholder", "Ingresar NIT del cliente", 3, "input", "keydown.enter"], [1, "service-orders-create__customer-searcher", 3, "controlDisabled", "searcher", "agent", "data", "customerSelected", "cleanCustomer"], [1, "my--form", 3, "ngClass"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "section__form"], [1, "my--form__two--columns"], ["appearance", "fill", 1, "business-management__input"], ["id", "tratamiento", "formControlName", "tratamiento"], ["value", "Empresa"], ["value", "Senor"], ["value", "Senora"], ["class", "business-managemen-form__form-error", 4, "ngIf"], ["id", "tipoPersona", "formControlName", "tipoPersona"], ["value", "J"], ["value", "N"], ["matInput", "", "type", "number", "id", "nit", "formControlName", "nit", 3, "ngClass"], ["matInput", "", "type", "text", "id", "razonSocial", "formControlName", "razonSocial", 3, "ngClass"], ["matInput", "", "type", "text", "id", "sigla", "formControlName", "sigla"], ["matInput", "", "type", "text", "id", "direccion", "formControlName", "direccion"], ["matInput", "", "type", "number", "id", "codigoDistrito", "formControlName", "codigoDistrito"], ["matInput", "", "type", "text", "id", "pais", "formControlName", "pais", "value", "Colombia"], ["id", "departamento", "formControlName", "departamento"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "ciudad", "formControlName", "ciudad"], ["matInput", "", "type", "number", "id", "telefonoMovil", "formControlName", "telefonoMovil"], ["matInput", "", "type", "email", "id", "correoRepresentante", "formControlName", "correoRepresentante"], ["matInput", "", "type", "email", "id", "correoFactura1", "formControlName", "correoFactura1"], ["matInput", "", "type", "email", "id", "correoFactura2", "formControlName", "correoFactura2"], ["matInput", "", "type", "text", "id", "nombreContactoOperativo", "formControlName", "nombreContactoOperativo"], ["matInput", "", "type", "number", "id", "telefonoMovilContacto", "formControlName", "telefonoMovilContacto"], ["matInput", "", "type", "email", "id", "correoContacto", "formControlName", "correoContacto"], ["matInput", "", "type", "text", "id", "nombreContactoTesoreria", "formControlName", "nombreContactoTesoreria"], ["matInput", "", "type", "number", "id", "telefonoMovilTesoreria", "formControlName", "telefonoMovilTesoreria"], ["matInput", "", "type", "email", "id", "correoTesoreria1", "formControlName", "correoTesoreria1"], ["matInput", "", "type", "email", "id", "correoTesoreria2", "formControlName", "correoTesoreria2"], [1, "business-managemen-form__form-error"], [4, "ngFor", "ngForOf"], ["class", "form-text text-danger", 4, "ngIf"], [1, "form-text", "text-danger"], [3, "value"], ["secondary-content", "", 4, "ngIf"], ["secondary-content", ""], [3, "module", "formValid", "validateForm", "nbr", "ownerId", "owner", "tab", "documentsTypes"], ["hijo", ""]],
    template: function CustomerManagementFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div")(1, "div", 0);
        core/* ɵɵtemplate */.YNc(2, CustomerManagementFormComponent_mat_card_2_Template, 10, 2, "mat-card", 1);
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(3, "svg", 2)(4, "defs")(5, "style");
        core/* ɵɵtext */._uU(6, " .cls-1 { fill: #c5c6c8; } .cls-2 { fill: #7ba052; } .cls-3 { fill: #4b8051; } ");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(7, "g", 3);
        core/* ɵɵelement */._UZ(8, "rect", 4)(9, "rect", 5)(10, "rect", 6);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵtemplate */.YNc(11, CustomerManagementFormComponent_div_11_Template, 181, 51, "div", 7);
        core/* ɵɵtemplate */.YNc(12, CustomerManagementFormComponent_ng_template_12_Template, 1, 1, "ng-template", null, 8, core/* ɵɵtemplateRefExtractor */.W1O);
        core/* ɵɵelementEnd */.qZA();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.isAgent);
        core/* ɵɵadvance */.xp6(9);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.showForm && ctx.reload);
      }
    },
    dependencies: [common/* NgClass */.mk, common/* NgForOf */.sg, common/* NgIf */.O5, icon/* MatIcon */.Hw, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatHint */.bx, form_field/* MatError */.TO, input/* MatInput */.Nt, fesm2020_select/* MatSelect */.gD, fesm2020_core/* MatOption */.ey, fesm2020_radio/* MatRadioGroup */.VQ, fesm2020_radio/* MatRadioButton */.U0, card/* MatCard */.a8, expansion/* MatAccordion */.pp, expansion/* MatExpansionPanel */.ib, expansion/* MatExpansionPanelHeader */.yz, expansion/* MatExpansionPanelTitle */.yK, fesm2020_forms/* ɵNgNoValidate */._Y, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NumberValueAccessor */.wV, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* NgControlStatusGroup */.JL, fesm2020_forms/* FormGroupDirective */.sg, fesm2020_forms/* FormControlName */.u, customer_searcher_component/* CustomerSearcherComponent */.p, upload_file_component/* UploadFileComponent */.R],
    styles: [".section__form[_ngcontent-%COMP%]{font-weight:700;font-size:1.1rem}.edit-input[_ngcontent-%COMP%]{color:#66bb6a}.my--form[_ngcontent-%COMP%]{overflow:hidden}  .mdc-tab__text-label{flex-direction:column!important}.containerized-load__tab-icon[_ngcontent-%COMP%]{width:1rem}.containerized-load__tab-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{width:1.5rem;fill:#0009}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .containerized-load__tab-icon path, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .containerized-load__tab-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#66bb6a}.title[_ngcontent-%COMP%]{padding-top:1rem;color:#78909c}.header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.icon-title[_ngcontent-%COMP%]{width:1.5rem}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.secondary-panel[_ngcontent-%COMP%]{padding:1rem}button[_ngcontent-%COMP%]{color:#fff}.submit-button[_ngcontent-%COMP%]{margin:0 .25rem;color:#fff!important}  .mdc-data-table__header-cell{text-align:center!important;font-family:Gilroy-ExtraBold;color:#66bb6a;font-size:1rem}  .mdc-data-table__row{background-color:#dfe6e91a!important;border:transparent solid!important;border-bottom:.25rem transparent solid!important}  .mdc-data-table__row:hover{background-color:#7ba0521a!important}  .mdc-data-table__row td{font-family:Gilroy-Light;color:#666!important}  .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem;cursor:pointer!important}  .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}  .success-snackbar .mdc-snackbar__surface{color:#155724!important;background-color:#d4edda!important;border-color:#c3e6cb!important}  .success-snackbar .mdc-snackbar__surface .mdc-button__label{color:#155724!important}  .success-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#155724!important}  .warning-snackbar .mdc-snackbar__surface{color:#856404!important;background-color:#fff3cd!important;border-color:#ffeeba!important}  .warning-snackbar .mdc-snackbar__surface .mdc-button__label{color:#856404!important}  .warning-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#856404!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:transparent!important;--mat-mdc-button-persistent-ripple-color: currentColor !important}mat-card[_ngcontent-%COMP%]{margin:20px;padding:20px}.form-section[_ngcontent-%COMP%]{margin-bottom:20px}mat-form-field[_ngcontent-%COMP%]{width:100%}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{margin-top:20px}.select__option[_ngcontent-%COMP%]{display:flex;flex-direction:column}mat-radio-button[_ngcontent-%COMP%]{margin-bottom:.5rem}mat-form-field[_ngcontent-%COMP%]{margin-top:.5rem}.administration-user-form__required[_ngcontent-%COMP%]{font-size:.7rem;color:#666}.business-management__input[_ngcontent-%COMP%]{width:100%}.business-managemen-form__form-error[_ngcontent-%COMP%]{color:#d63031;margin:0;display:flex;align-items:center}.mat-expansion-panel[_ngcontent-%COMP%]{color:#071451!important;font-weight:700!important;font-size:1.5rem!important}.mat-mdc-form-field-hint[_ngcontent-%COMP%]{font-weight:700!important;font-size:.8rem!important}.mdc-text-field[_ngcontent-%COMP%]:not(.mdc-text-field--disabled)   .mdc-text-field__input[_ngcontent-%COMP%]{color:#b80e0ede!important}.my--form__margin[_ngcontent-%COMP%]{margin-top:2rem}input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.my--form__two--columns[_ngcontent-%COMP%]{display:flex;gap:.5rem}.my--form__two--columns[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{flex:1!important}"]
  });
  return CustomerManagementFormComponent;
})();
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/sort.mjs
var sort = __webpack_require__(96308);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/table.mjs + 2 modules
var table = __webpack_require__(7155);
;// CONCATENATED MODULE: ./src/app/modules/business-management/components/customer-request-load-documents/customer-request-load-documents.component.ts












function CustomerRequestLoadDocumentsComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelement */._UZ(1, "app-upload-file", 7, 8);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("module", ctx_r0.routeData.documentation_module)("formValid", ctx_r0.onSubmit.bind(ctx_r0))("validateForm", ctx_r0.validateForm.bind(ctx_r0))("nbr", ctx_r0.nbr)("tab", ctx_r0.tab)("documentsTypes", ctx_r0.documentsTypes);
  }
}
let CustomerRequestLoadDocumentsComponent = /*#__PURE__*/(() => {
  class CustomerRequestLoadDocumentsComponent {
    constructor(dialogData, store, businessManagementService, fb, aesEncryptionUtilService) {
      this.dialogData = dialogData;
      this.store = store;
      this.businessManagementService = businessManagementService;
      this.fb = fb;
      this.aesEncryptionUtilService = aesEncryptionUtilService;
      this.destroy$ = new Subject/* Subject */.x();
      this.routeData = {
        documentation_module: 'GEST_CLIE_NEW'
      };
      this.nbr = 'null';
      this.documentsTypes = [];
      this.tab = 'GE_CON_SOL';
      this.receivedDepartment = [];
      this.receivedCity = [];
      this.dataRequestInfo = '';
      this.customerReq = {
        principalNit: '',
        secondaryNit: ''
      };
      this.errorMessage = '';
      this.requestDocument = {
        nit: '',
        companyType: '',
        mandato: '-1'
      };
      this.filledForm = this.fb.group({
        tratamiento: [],
        tipoPersona: [],
        nit: [],
        razonSocial: [],
        sigla: [],
        direccion: [],
        codigoDistrito: [],
        pais: [],
        departamento: [],
        ciudad: [],
        telefonoMovil: [],
        correoRepresentante: [],
        correoFactura1: [],
        correoFactura2: [],
        nombreContactoOperativo: [],
        telefonoMovilContacto: [],
        correoContacto: [],
        nombreContactoTesoreria: [],
        telefonoMovilTesoreria: [],
        correoTesoreria1: [],
        correoTesoreria2: []
      });
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: apiGatewayStore => {
          this.user = apiGatewayStore;
          this.destroy$.next();
          this.destroy$.complete();
        },
        error: error => console.error(error)
      });
      this.request = this.dialogData.rowSelect;
      this.nbr = this.request.request;
      this.createParametersRequestDocument();
      this.getInfoCustomerByRequest(this.request.gkeyRequest);
    }
    validateForm() {
      return true;
    }
    onSubmit() {
      return (0,of.of)(true);
    }
    createParametersRequestDocument() {
      /* si el nit de la solicitud es diferente al nit de la empresa que estoy logueado es un cliente
       si el nit es igual tomar como tipo de empresa (companyType) la que tiene selected el usuario logueado
       si es multiempresa igual aplica ya que debo seleccionar una */
      if (this.request.nit == this.user.empresa?.id) {
        const typeCompany = (0,utils/* getCompanyTypeSelected */.GY)(this.user.empresa?.tiposEmpresas);
        this.requestDocument.companyType = (0,utils/* getCompanyTypeName */.RT)(typeCompany.companyTypeId);
      } else {
        this.requestDocument.companyType = 'cliente';
      }
      this.requestDocument.nit = this.request.nit;
      this.requestDocument.mandato = '-1';
    }
    getTypesDocuments(requestDocument) {
      this.businessManagementService.getBusinessManagementDocuments(requestDocument).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$), (0,catchError/* catchError */.K)(error => {
        this.errorMessage = 'Error al obtener tipos de documentos';
        return (0,of.of)([]);
      })).subscribe(resp => {
        this.documentsTypes = resp;
      });
    }
    getInfoCustomerByRequest(gkeyRequest) {
      let customerRequestGkey = {
        gkeyCustomerRequest: gkeyRequest
      };
      this.businessManagementService.getInfoCustomerByRequest(customerRequestGkey).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$), (0,catchError/* catchError */.K)(error => {
        // mirar si le mostramos este mensaje al usuario o algo generico: error obteniendo información, por favor intente nuevamente
        this.errorMessage = 'Error al obtener información del cliente';
        return (0,of.of)('');
      })).subscribe(resp => {
        if (resp.length) {
          let response = JSON.parse(this.aesEncryptionUtilService.decrypt(resp));
          //Trabajamos con el tipo de mandato que se registro desde la creacion de la solicitud
          this.requestDocument.mandato = response[0].represented_by_agent;
          this.getTypesDocuments(this.requestDocument);
          this.assignServiceResponseToForm(response[0]);
        } else {
          this.mapDataFormRequest();
        }
      });
    }
    assignServiceResponseToForm(data) {
      //seteamos los valores que vienen del cliente y luego los que venga de requestInfo con this.mapDataFormRequest();
      this.filledForm.patchValue({
        tratamiento: data.tratamiento || '',
        tipoPersona: data.tipoPersona || '',
        nit: data.nit || '',
        razonSocial: data.razonSocial || '',
        sigla: data.sigla || '',
        direccion: data.direccion || '',
        codigoDistrito: data.distrito || '',
        pais: data.pais || 'Colombia',
        departamento: data.departamento || '',
        ciudad: data.ciudad || '',
        telefonoMovil: data.telefono1 || '',
        correoRepresentante: data.email || '',
        correoFactura1: data.correoFE1 || '',
        correoFactura2: data.correoFE2 || '',
        nombreContactoOperativo: data.nombreC1 || '',
        telefonoMovilContacto: data.telefonoC1 || '',
        correoContacto: data.mailC1 || '',
        nombreContactoTesoreria: data.nombreC2 || '',
        telefonoMovilTesoreria: data.telefonoC2 || '',
        correoTesoreria1: data.mailC1 || '',
        correoTesoreria2: data.mailC2 || ''
      });
      this.mapDataFormRequest();
      this.defineDepartmentAndCity();
    }
    mapDataFormRequest() {
      this.dataRequestInfo = this.request.information ? this.request.information : '';
      const parsedObject = JSON.parse(this.dataRequestInfo);
      //Mapeamos todos los valores a partir de information si existe esa key en filledForm
      Object.entries(parsedObject).forEach(([key, value]) => {
        if (this.filledForm.controls[key] && value.new) {
          this.filledForm.controls[key].setValue(value.new);
        }
      });
    }
    defineDepartmentAndCity() {
      let deparment = {
        depCode: '',
        depName: this.filledForm.value.departamento
      };
      this.receivedDepartment.push(deparment);
      let city = {
        code: '',
        name: this.filledForm.value.ciudad
      };
      this.receivedCity.push(city);
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
  }
  CustomerRequestLoadDocumentsComponent.ɵfac = function CustomerRequestLoadDocumentsComponent_Factory(t) {
    return new (t || CustomerRequestLoadDocumentsComponent)(core/* ɵɵdirectiveInject */.Y36(dialog/* MAT_DIALOG_DATA */.WI), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(BusinessManagementService), core/* ɵɵdirectiveInject */.Y36(fesm2020_forms/* FormBuilder */.qu), core/* ɵɵdirectiveInject */.Y36(AESEncryptionUtil_service/* AESEncryptionUtilService */.D));
  };
  CustomerRequestLoadDocumentsComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: CustomerRequestLoadDocumentsComponent,
    selectors: [["app-customer-request-load-documents"]],
    decls: 10,
    vars: 5,
    consts: [[1, "container--modal"], [1, "container--modal__title"], [1, "container--modal__content"], [1, "main-panel"], [3, "receivedForm", "receivedDepartment", "receivedCity"], [1, "secondary-panel"], [4, "ngIf"], [3, "module", "formValid", "validateForm", "nbr", "tab", "documentsTypes"], ["hijo", ""]],
    template: function CustomerRequestLoadDocumentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "div", 1)(2, "h2")(3, "strong");
        core/* ɵɵtext */._uU(4);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵelementStart */.TgZ(5, "div", 2)(6, "div", 3);
        core/* ɵɵelement */._UZ(7, "app-customer-management-form", 4);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(8, "div", 5);
        core/* ɵɵtemplate */.YNc(9, CustomerRequestLoadDocumentsComponent_ng_container_9_Template, 3, 6, "ng-container", 6);
        core/* ɵɵelementEnd */.qZA()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵtextInterpolate1 */.hij("Solicitud: ", ctx.nbr, " ");
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵproperty */.Q6J("receivedForm", ctx.filledForm)("receivedDepartment", ctx.receivedDepartment)("receivedCity", ctx.receivedCity);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.nbr != "" && ctx.documentsTypes.length);
      }
    },
    dependencies: [common/* NgIf */.O5, upload_file_component/* UploadFileComponent */.R, CustomerManagementFormComponent],
    styles: [".container--modal[_ngcontent-%COMP%]{width:100%;height:100%;padding:.5rem}.container--modal__content[_ngcontent-%COMP%]{display:flex}.container--modal__title[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:3rem}.container--modal__title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.6rem}.main-panel[_ngcontent-%COMP%]{width:45%;padding-right:.5rem}.secondary-panel[_ngcontent-%COMP%]{width:55%}"]
  });
  return CustomerRequestLoadDocumentsComponent;
})();
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/datepicker.mjs
var datepicker = __webpack_require__(99602);
;// CONCATENATED MODULE: ./src/app/modules/business-management/components/customer-request-management-component/customer-request-management-component.component.ts





























const customer_request_management_component_component_c0 = ["secondaryContent"];
function CustomerRequestManagementComponentComponent_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-option", 23);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const status_r5 = ctx.$implicit;
    core/* ɵɵproperty */.Q6J("value", status_r5.value);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(status_r5.name);
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 44);
    core/* ɵɵtext */._uU(1, " Solicitud ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 45);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r26.request, " ");
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 44);
    core/* ɵɵtext */._uU(1, " \u00DAltima Actualizaci\u00F3n ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 45);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    const ctx_r11 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r11.formatDateByDiferencesFormat(element_r27.last_update), " ");
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_10_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 44);
    core/* ɵɵtext */._uU(1, " Creador ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 45);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r28.creator, " ");
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_13_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 44);
    core/* ɵɵtext */._uU(1, " Estado ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 45);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    const ctx_r15 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r15.getStatus(element_r29.status), " ");
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_16_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 44);
    core/* ɵɵtext */._uU(1, " NIT ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_17_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 45);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r30 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r30.nit, " ");
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 44);
    core/* ɵɵtext */._uU(1, " Nombre ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 45);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r31.name, " ");
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 46);
    core/* ɵɵtext */._uU(1, " Observaciones ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_23_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 47);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r32 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r32.observations, " ");
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_25_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 48);
    core/* ɵɵtext */._uU(1, " Ver ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_26_div_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 52);
    core/* ɵɵlistener */.NdJ("click", function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_26_div_1__svg_svg_1_Template__svg_svg_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r38);
      const element_r33 = core/* ɵɵnextContext */.oxw(2).$implicit;
      const ctx_r36 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r36.loadNewDocuments(element_r33));
    });
    core/* ɵɵelementStart */.TgZ(1, "defs")(2, "style");
    core/* ɵɵtext */._uU(3, ".edit-1{fill:#606060;fill-rule:evenodd;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(4, "g", 4);
    core/* ɵɵelement */._UZ(5, "path", 53)(6, "path", 54)(7, "path", 55)(8, "path", 56)(9, "path", 57)(10, "path", 58);
    core/* ɵɵelementEnd */.qZA()();
  }
}
const customer_request_management_component_component_c1 = function (a0) {
  return [a0];
};
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_26_div_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 50);
    core/* ɵɵtemplate */.YNc(1, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_26_div_1__svg_svg_1_Template, 11, 0, "svg", 51);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r34 = core/* ɵɵnextContext */.oxw(4);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(1, customer_request_management_component_component_c1, ctx_r34.privileges.GE_CON_SOL));
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_26_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 45);
    core/* ɵɵtemplate */.YNc(1, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_26_div_1_Template, 2, 3, "div", 49);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r33 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r33.view);
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 59);
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 60);
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "table", 27, 28);
    core/* ɵɵelementContainerStart */.ynx(3, 29);
    core/* ɵɵtemplate */.YNc(4, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_4_Template, 2, 0, "th", 30);
    core/* ɵɵtemplate */.YNc(5, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_5_Template, 2, 1, "td", 31);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(6, 32);
    core/* ɵɵtemplate */.YNc(7, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_7_Template, 2, 0, "th", 30);
    core/* ɵɵtemplate */.YNc(8, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_8_Template, 2, 1, "td", 31);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(9, 33);
    core/* ɵɵtemplate */.YNc(10, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_10_Template, 2, 0, "th", 30);
    core/* ɵɵtemplate */.YNc(11, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_11_Template, 2, 1, "td", 31);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(12, 34);
    core/* ɵɵtemplate */.YNc(13, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_13_Template, 2, 0, "th", 30);
    core/* ɵɵtemplate */.YNc(14, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_14_Template, 2, 1, "td", 31);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(15, 35);
    core/* ɵɵtemplate */.YNc(16, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_16_Template, 2, 0, "th", 30);
    core/* ɵɵtemplate */.YNc(17, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_17_Template, 2, 1, "td", 31);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(18, 36);
    core/* ɵɵtemplate */.YNc(19, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_19_Template, 2, 0, "th", 30);
    core/* ɵɵtemplate */.YNc(20, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_20_Template, 2, 1, "td", 31);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(21, 37);
    core/* ɵɵtemplate */.YNc(22, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_22_Template, 2, 0, "th", 38);
    core/* ɵɵtemplate */.YNc(23, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_23_Template, 2, 1, "td", 39);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(24, 40);
    core/* ɵɵtemplate */.YNc(25, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_th_25_Template, 2, 0, "th", 41);
    core/* ɵɵtemplate */.YNc(26, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_td_26_Template, 2, 1, "td", 31);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵtemplate */.YNc(27, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_tr_27_Template, 1, 0, "tr", 42);
    core/* ɵɵtemplate */.YNc(28, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_tr_28_Template, 1, 0, "tr", 43);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r6 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("dataSource", ctx_r6.dataSource);
    core/* ɵɵadvance */.xp6(26);
    core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx_r6.displayedColumns);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx_r6.displayedColumns);
  }
}
function CustomerRequestManagementComponentComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(0, "div", 24);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵelementStart */.TgZ(2, "div", 25);
    core/* ɵɵtemplate */.YNc(3, CustomerRequestManagementComponentComponent_ng_template_48_ng_container_3_Template, 29, 3, "ng-container", 26);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r4 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r4.isSearchFilter);
  }
}
let CustomerRequestManagementComponentComponent = /*#__PURE__*/(() => {
  class CustomerRequestManagementComponentComponent {
    showSecondaryComponent() {
      this.componentChange.emit();
    }
    constructor(fb, businessManagementService, store, matDialog, matSnackBar, statesServiceBusinessManagement, utilService, base64EncryptionUtilService, aesEncryptionUtilService) {
      this.fb = fb;
      this.businessManagementService = businessManagementService;
      this.store = store;
      this.matDialog = matDialog;
      this.matSnackBar = matSnackBar;
      this.statesServiceBusinessManagement = statesServiceBusinessManagement;
      this.utilService = utilService;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.aesEncryptionUtilService = aesEncryptionUtilService;
      this.secondaryContent = new core/* EventEmitter */.vpe();
      this.componentChange = new core/* EventEmitter */.vpe();
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.displayedColumns = [];
      this.errorMessage = '';
      this.destroy$ = new Subject/* Subject */.x();
      this.privileges = privileges_enum/* privileges */.U;
      this.emailSacNotificaction = '';
      this.nbr = '';
      this.requestCompany = [];
      this.subscription = null;
      this.isSearchFilter = false;
      this.statusOptions = [{
        name: 'Todas',
        value: 'todas'
      }, {
        name: 'En proceso',
        value: 'enproceso'
      }, {
        name: 'Aprobadas',
        value: 'aprobada'
      }, {
        name: 'Rechazadas',
        value: 'rechazada'
      }];
    }
    ngAfterViewInit() {
      // Emitimos el contenido secundario al componente padre después de que la vista se haya inicializado
      this.secondaryContent.emit(this.secondaryContentTemplate);
      this.dataSource.sort = this.sort;
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: APIGatewatStore => {
          this.userInfo = APIGatewatStore;
        },
        error: error => console.error(error)
      });
      this.displayedColumns = ['request', 'lastUpdate', 'creator', 'status', 'nit', 'name', 'observations', 'view'];
      const today = new Date();
      const fifteenDaysAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 15);
      this.myForm = this.fb.group({
        startDate: [fifteenDaysAgo.toISOString(), [fesm2020_forms/* Validators.required */.kI.required]],
        endDate: [(0,utils/* formatLocalDateISO */.Qs)(today), [fesm2020_forms/* Validators.required */.kI.required]],
        status: [this.statusOptions[0].value, [fesm2020_forms/* Validators.required */.kI.required]]
      }, {
        validators: this.dateRangeValidator()
      });
    }
    onSubmit() {
      if (this.myForm.invalid) {
        const errors = this.myForm.errors;
        if (errors) {
          this.matSnackBar.open(`${errors['dateRange']}`, '', {
            verticalPosition: 'top',
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
        return;
      }
      let request = {
        nit: this.userInfo.empresa?.id,
        startDate: this.formatDate(this.myForm.get('startDate')?.value),
        endDate: this.formatDate(this.myForm.get('endDate')?.value),
        status: this.myForm.get('status')?.value
      };
      this.getCustomerRequest(request);
    }
    formatDate(date) {
      return new Date(date).toISOString().slice(0, 10);
    }
    dateRangeValidator() {
      return control => {
        const startDate = new Date(control.get('startDate')?.value);
        const endDateValue = control.get('endDate')?.value;
        const endDate = new Date(`${endDateValue}T00:00:00`);
        if (!startDate || !endDate) {
          return null;
        }
        const timeDiff = endDate.getTime() - startDate.getTime();
        const dayDiff = timeDiff / (1000 * 3600 * 24);
        if (dayDiff > 15) {
          return {
            dateRange: 'La diferencia entre ambas fechas no puede ser mayor a 15 días.'
          };
        }
        if (startDate > endDate) {
          return {
            dateRange: 'La fecha inicial no puede ser mayor a la fecha final.'
          };
        }
        return null;
      };
    }
    loadNewDocuments(element) {
      this.getEmailsSacToNotification();
      this.nbr = element.request;
      const dialogRef = this.matDialog.open(CustomerRequestLoadDocumentsComponent, {
        width: "75%",
        height: "85%",
        disableClose: true,
        data: {
          rowSelect: element,
          hasNotification: true,
          notificationData: null,
          privilege: privileges_enum/* privileges.GE_CON_SOL */.U.GE_CON_SOL
        }
      });
      this.statesServiceBusinessManagement.getStateIsCancelCreateRequest().pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(isCancel => {
        if (isCancel) {
          this.matDialog.closeAll();
          this.statesServiceBusinessManagement.resetAllProperties();
        }
      });
      //Cierro el modal si ya se dio en cargar documentos
      let subscriptionGetStateLoadDocumentsFromGESTCLIE = this.statesServiceBusinessManagement.getStateLoadDocumentsFromGESTCLIE().pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(isLoad => {
        if (isLoad) {
          let body = {
            companyId: null,
            mailsNotifications: this.emailSacNotificaction,
            notificationInfo: this.base64EncryptionUtilService.encrypt(JSON.stringify({
              'nbr': this.nbr
            })),
            privilegeId: this.privileges.GE_CON_SOL
          };
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
          this.subscription = this.utilService.notifyPrivilegeListUsert(body).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
            next: () => {},
            error: err => console.error(err)
          });
          this.matSnackBar.open("Documentos actualizados exitosamente.", "", {
            verticalPosition: "top",
            duration: 7000,
            panelClass: ["success-snackbar"]
          });
          this.matDialog.closeAll();
          this.statesServiceBusinessManagement.resetAllProperties();
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        subscriptionGetStateLoadDocumentsFromGESTCLIE.unsubscribe();
        this.matDialog.closeAll();
        this.statesServiceBusinessManagement.resetAllProperties();
      });
    }
    getCustomerRequest(filterParamenter) {
      this.businessManagementService.getCustomerRequest(filterParamenter).pipe((0,catchError/* catchError */.K)(error => {
        this.errorMessage = 'Error al obtener las solicitudes de la empresa';
        return (0,of.of)('');
      })).subscribe(response => {
        let resp = JSON.parse(this.aesEncryptionUtilService.decrypt(response));
        //Ordenamos la lista por fechas
        let result = resp.sort((a, b) => {
          if (a.last_update === null) return 1;
          if (b.last_update === null) return -1;
          return new Date(b.last_update).getTime() - new Date(a.last_update).getTime();
        });
        this.validateDataCustomerRequest(result);
        let requestWithView = this.validateDataCustomerRequest(result);
        this.requestWithObservations = this.getDataByRequestFlow(requestWithView);
        this.dataSource = new table/* MatTableDataSource */.by(this.requestWithObservations);
        this.dataSource.sort = this.sort;
        this.isSearchFilter = true;
      });
    }
    validateDataCustomerRequest(request) {
      const newArray = request.map(item => {
        if (item.name == null && item.information && item.information.length > 0) {
          item.name = this.getRazonSocialNew(item.information);
        }
        let view = false;
        if (item.status === '1Creada') {
          view = true;
        }
        return {
          ...item,
          observations: item.observations ?? '',
          request_flow: item.request_flow ?? '',
          view: view
        };
      });
      return newArray;
    }
    getRazonSocialNew(jsonString) {
      const data = JSON.parse(jsonString);
      if (data.razonSocial) {
        return data.razonSocial?.new || '';
      } else {
        return '';
      }
    }
    getEmailsSacToNotification() {
      this.utilService.getEmailsSacToNotification().pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: value => {
          this.emailSacNotificaction = this.aesEncryptionUtilService.decrypt(value);
        },
        error: err => {}
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    getDataByRequestFlow(response) {
      response.forEach(request => {
        if (request.request_flow != null) {
          if (request.request_flow.length > 0) {
            const parsedObject = JSON.parse(request.request_flow);
            if (parsedObject.length > 0) {
              const lastItem = parsedObject[parsedObject.length - 1];
              request.observations = lastItem.remark;
              request.last_update = lastItem.date;
            }
          }
        }
      });
      return response;
    }
    getStatus(status) {
      switch (status) {
        case '1Creada':
          return 'Creada';
        case '1CambioAprobado':
          return 'Cambio Aprobado';
        case '9Aprobada':
          return 'Aprobado';
        case '8Rechazada':
          return 'Rechazada';
        default:
          return status;
      }
    }
    formatDateByDiferencesFormat(dateString) {
      if (!dateString) return '';
      if (!dateString.includes('T')) return dateString.slice(0, 16);
      return dateString.replace('T', ' ').slice(0, 16);
    }
  }
  CustomerRequestManagementComponentComponent.ɵfac = function CustomerRequestManagementComponentComponent_Factory(t) {
    return new (t || CustomerRequestManagementComponentComponent)(core/* ɵɵdirectiveInject */.Y36(fesm2020_forms/* FormBuilder */.qu), core/* ɵɵdirectiveInject */.Y36(BusinessManagementService), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(states_service/* StatesServiceBusinessManagement */.Z), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(AESEncryptionUtil_service/* AESEncryptionUtilService */.D));
  };
  CustomerRequestManagementComponentComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: CustomerRequestManagementComponentComponent,
    selectors: [["app-customer-request-management-component"]],
    viewQuery: function CustomerRequestManagementComponentComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(customer_request_management_component_component_c0, 5);
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.secondaryContentTemplate = _t.first);
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
      }
    },
    outputs: {
      secondaryContent: "secondaryContent",
      componentChange: "componentChange"
    },
    decls: 50,
    vars: 6,
    consts: [[1, ""], [1, "title-card"], [1, "card-title"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 266.72 10", 1, "welcome__line"], ["id", "Capa_1-2"], ["width", "110.74", "height", "10", 1, "cls-2"], ["x", "82.26", "width", "87.22", "height", "10", 1, "cls-3"], ["x", "159.48", "width", "87.22", "height", "10", 1, "cls-1"], [1, "myForm"], ["autocomplete", "off", 3, "formGroup"], ["matInput", "", "formControlName", "startDate", "placeholder", "Seleccione la fecha inicial", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "formControlName", "endDate", "placeholder", "Seleccione la fecha final", 3, "matDatepicker"], ["picker2", ""], ["id", "status", "formControlName", "status"], [3, "value", 4, "ngFor", "ngForOf"], [1, "history__search-item", "history__search-item_search-button"], [1, "history__field-button", 3, "click"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 68.15 68.15", 1, "history__field-button-icon"], ["width", "68.15", "height", "68.15", "rx", "4.87", "ry", "4.87", 1, "claseunicalupa"], ["d", "m43.28,25.86c0,10.57-8.6,19.17-19.17,19.17S4.95,36.43,4.95,25.86,13.55,6.69,24.11,6.69s19.17,8.6,19.17,19.17h0Zm15.63,34.79c-1.07,1.07-2.8,1.07-3.87,0l-15.54-15.55c1.43-1.14,2.73-2.44,3.87-3.87l15.55,15.55c1.07,1.06,1.07,2.8,0,3.87Z", 1, "cls-2"], ["secondaryContent", ""], [3, "value"], ["secondary-content", ""], [1, "secondary-panel"], [4, "ngIf"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "request"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "lastUpdate"], ["matColumnDef", "creator"], ["matColumnDef", "status"], ["matColumnDef", "nit"], ["matColumnDef", "name"], ["matColumnDef", "observations"], ["mat-header-cell", "", "mat-sort-header", "", "class", "observations-column", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "observations-column", 4, "matCellDef"], ["matColumnDef", "view", 1, "clickable-icon"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "observations-column"], ["mat-cell", "", 1, "observations-column"], ["mat-header-cell", ""], ["class", "billing__payment", 4, "ngIf"], [1, "billing__payment"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 79.25 79.26", 3, "click", 4, "permissions"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 79.25 79.26", 3, "click"], ["d", "m77.21,24.94c-2.72-2.72-7.13-2.72-9.85,0-.84.84-6.17,6.18-6.99,6.99V13.54c0-1.86-.72-3.61-2.04-4.93l-6.57-6.57c-1.32-1.32-3.07-2.04-4.93-2.04H6.97C3.12,0,0,3.13,0,6.97v65.33c0,3.84,3.12,6.97,6.97,6.97h46.44c3.84,0,6.97-3.13,6.97-6.97v-20.65l16.84-16.85c2.72-2.72,2.72-7.13,0-9.85h0ZM46.44,4.65c.44,0,1.28-.08,2.04.68l6.57,6.57c.74.74.68,1.54.68,2.04h-9.29V4.65h0Zm9.29,67.65c0,1.28-1.04,2.32-2.32,2.32H6.97c-1.28,0-2.32-1.04-2.32-2.32V6.97c0-1.28,1.04-2.32,2.32-2.32h34.83v11.61c0,1.28,1.04,2.32,2.32,2.32h11.61v18.01l-6.85,6.86-3.28,3.28c-.25.25-.45.57-.56.91l-3.28,9.85c-.28.84-.06,1.76.56,2.38.62.62,1.54.84,2.38.56l9.85-3.28c.34-.11.65-.3.91-.56l.28-.28v16h0Zm-5.21-23.93l3.28,3.28-1.25,1.25-4.93,1.64,1.64-4.93,1.25-1.25h0Zm6.57,0l-3.28-3.28c1.75-1.75,9.52-9.52,11.16-11.17l3.28,3.28-11.16,11.17h0Zm16.84-16.85l-2.39,2.4-3.28-3.28,2.39-2.4c.91-.91,2.38-.91,3.28,0,.91.91.91,2.37,0,3.28Z", 1, "edit-1"], ["d", "m44.12,23.22H11.61c-1.28,0-2.32,1.04-2.32,2.32s1.04,2.32,2.32,2.32h32.51c1.28,0,2.32-1.04,2.32-2.32s-1.04-2.32-2.32-2.32Z", 1, "edit-1"], ["d", "m34.83,32.51H11.61c-1.28,0-2.32,1.04-2.32,2.32s1.04,2.32,2.32,2.32h23.22c1.28,0,2.32-1.04,2.32-2.32s-1.04-2.32-2.32-2.32Z", 1, "edit-1"], ["d", "m34.83,41.8H11.61c-1.28,0-2.32,1.04-2.32,2.32s1.04,2.32,2.32,2.32h23.22c1.28,0,2.32-1.04,2.32-2.32s-1.04-2.32-2.32-2.32Z", 1, "edit-1"], ["d", "m34.83,51.09H11.61c-1.28,0-2.32,1.04-2.32,2.32s1.04,2.32,2.32,2.32h23.22c1.28,0,2.32-1.04,2.32-2.32s-1.04-2.32-2.32-2.32Z", 1, "edit-1"], ["d", "m44.12,65.33h-13.93c-1.28,0-2.32,1.04-2.32,2.32s1.04,2.32,2.32,2.32h13.93c1.28,0,2.32-1.04,2.32-2.32s-1.04-2.32-2.32-2.32Z", 1, "edit-1"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function CustomerRequestManagementComponentComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "mat-card")(2, "mat-card-content")(3, "div", 1)(4, "h2", 2);
        core/* ɵɵtext */._uU(5, "Solicitudes");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(6, "svg", 3)(7, "defs")(8, "style");
        core/* ɵɵtext */._uU(9, " .cls-1 { fill: #c5c6c8; } .cls-2 { fill: #7ba052; } .cls-3 { fill: #4b8051; } ");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(10, "g", 4);
        core/* ɵɵelement */._UZ(11, "rect", 5)(12, "rect", 6)(13, "rect", 7);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementContainerStart */.ynx(14, 8);
        core/* ɵɵelementStart */.TgZ(15, "form", 9);
        core/* ɵɵelementContainerStart */.ynx(16);
        core/* ɵɵelementStart */.TgZ(17, "mat-form-field", 0)(18, "mat-label");
        core/* ɵɵtext */._uU(19, "Fecha inicial");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(20, "input", 10)(21, "mat-datepicker-toggle", 11)(22, "mat-datepicker", null, 12);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(24);
        core/* ɵɵelementStart */.TgZ(25, "mat-form-field", 0)(26, "mat-label");
        core/* ɵɵtext */._uU(27, "Fecha final");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(28, "input", 13)(29, "mat-datepicker-toggle", 11)(30, "mat-datepicker", null, 14);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementStart */.TgZ(32, "mat-form-field", 0)(33, "mat-label");
        core/* ɵɵtext */._uU(34, "Estado");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(35, "mat-select", 15);
        core/* ɵɵtemplate */.YNc(36, CustomerRequestManagementComponentComponent_mat_option_36_Template, 2, 2, "mat-option", 16);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementContainerStart */.ynx(37);
        core/* ɵɵelementStart */.TgZ(38, "li", 17)(39, "button", 18);
        core/* ɵɵlistener */.NdJ("click", function CustomerRequestManagementComponentComponent_Template_button_click_39_listener() {
          return ctx.onSubmit();
        });
        core/* ɵɵtext */._uU(40, " Buscar ");
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(41, "svg", 19)(42, "defs")(43, "style");
        core/* ɵɵtext */._uU(44, ".claseunicalupa{fill:transparent;}.cls-2{fill:none;fill-rule:evenodd;stroke:#f9f9f9;stroke-miterlimit:10;stroke-width:2px;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(45, "g", 4);
        core/* ɵɵelement */._UZ(46, "rect", 20)(47, "path", 21);
        core/* ɵɵelementEnd */.qZA()()()();
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵtemplate */.YNc(48, CustomerRequestManagementComponentComponent_ng_template_48_Template, 4, 1, "ng-template", null, 22, core/* ɵɵtemplateRefExtractor */.W1O);
      }
      if (rf & 2) {
        const _r0 = core/* ɵɵreference */.MAs(23);
        const _r1 = core/* ɵɵreference */.MAs(31);
        core/* ɵɵadvance */.xp6(15);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.myForm);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("matDatepicker", _r0);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("for", _r0);
        core/* ɵɵadvance */.xp6(7);
        core/* ɵɵproperty */.Q6J("matDatepicker", _r1);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("for", _r1);
        core/* ɵɵadvance */.xp6(7);
        core/* ɵɵproperty */.Q6J("ngForOf", ctx.statusOptions);
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatSuffix */.R9, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, fesm2020_select/* MatSelect */.gD, fesm2020_core/* MatOption */.ey, datepicker/* MatDatepicker */.Mq, datepicker/* MatDatepickerInput */.hl, datepicker/* MatDatepickerToggle */.nW, card/* MatCard */.a8, card/* MatCardContent */.dn, sort/* MatSort */.YE, sort/* MatSortHeader */.nU, fesm2020_forms/* ɵNgNoValidate */._Y, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* NgControlStatusGroup */.JL, fesm2020_forms/* FormGroupDirective */.sg, fesm2020_forms/* FormControlName */.u, permissions_directive/* PermissionsDirective */.$],
    styles: [".wrapper-history[_ngcontent-%COMP%]{width:100%;height:100%;padding:.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;gap:.5rem}.header-history[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.title-history[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Gilroy-Light;margin:0;padding-left:.5rem;color:#78909c;font-weight:600}.history[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.welcome__user[_ngcontent-%COMP%]{font-size:1.875rem;color:var(--primary-color)}.transaction-history[_ngcontent-%COMP%]{display:grid;height:100vh}*/[_ngcontent-%COMP%]   .other-component[_ngcontent-%COMP%]{padding:1rem;display:grid}.history-form[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr 1fr auto 1fr}.history__search-item[_ngcontent-%COMP%]{font-weight:300;display:flex;justify-content:space-between;align-items:center}.history__search-item_search-button[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.history__search-button-item[_ngcontent-%COMP%]{width:100%;font-weight:300;display:flex;justify-content:flex-end;align-items:center}.history__field-button[_ngcontent-%COMP%]{width:7rem;height:2rem;border:none;outline:none;cursor:pointer;border-radius:.5rem;margin-left:.2rem 0rem;background-color:#92b975;color:#fff;transition:background-color .2s;font-size:1rem;display:flex;justify-content:space-around;align-items:center}.history__field-button[_ngcontent-%COMP%]:disabled{background-color:#999}.history__field-button-icon[_ngcontent-%COMP%]{width:2rem}.main-panel[_ngcontent-%COMP%]{height:100%}.history-search[_ngcontent-%COMP%]{list-style:none;margin:0}.secondary-panel[_ngcontent-%COMP%]{flex:1;padding-right:1rem}.history_line[_ngcontent-%COMP%]{width:35rem;margin-top:1rem}.title-card[_ngcontent-%COMP%]{display:inline-block;width:-moz-fit-content;width:fit-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0;padding:.5rem}.icon-title[_ngcontent-%COMP%], .history_pin_tab-icono[_ngcontent-%COMP%]{width:1.5rem}.history-icon[_ngcontent-%COMP%]{padding-top:.5rem}.history_pin_tab-icono[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{width:1.5rem}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .history_pin_tab-icono path, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .history_pin_tab-icono[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:none;stroke:#231f20!important}.icon-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center}.mat-mdc-card-content[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child:not(.mat-mdc-card-footer){display:grid!important}.observations-column[_ngcontent-%COMP%]{width:auto;word-wrap:break-word}.mdc-data-table__cell[_ngcontent-%COMP%], .mdc-data-table__header-cell[_ngcontent-%COMP%]{padding:0 10px!important}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}.clickable-icon[_ngcontent-%COMP%], .clickable-icon[_ngcontent-%COMP%]:hover{cursor:pointer!important}"]
  });
  return CustomerRequestManagementComponentComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/business-management/components/business-management/business-management.component.ts









function BusinessManagementComponent_mat_tab_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 8)(1, "g", 9);
    core/* ɵɵelement */._UZ(2, "path", 10)(3, "path", 11)(4, "path", 12)(5, "path", 13)(6, "path", 14)(7, "path", 15)(8, "path", 16)(9, "path", 17)(10, "path", 18)(11, "path", 19)(12, "path", 20)(13, "path", 21)(14, "path", 22)(15, "path", 23)(16, "path", 24)(17, "path", 25)(18, "path", 26)(19, "path", 27)(20, "path", 28)(21, "path", 29)(22, "path", 30)(23, "path", 31)(24, "path", 32)(25, "path", 33)(26, "path", 34)(27, "path", 35)(28, "path", 36)(29, "path", 37)(30, "path", 38);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(31, "span");
    core/* ɵɵi18n */.SDv(32, 39);
    core/* ɵɵelementEnd */.qZA();
  }
}
function BusinessManagementComponent_mat_tab_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "app-customer-management-form", 40);
    core/* ɵɵlistener */.NdJ("secondaryContent", function BusinessManagementComponent_mat_tab_5_ng_template_2_Template_app_customer_management_form_secondaryContent_0_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r5.onSecondaryContent($event));
    });
    core/* ɵɵelementEnd */.qZA();
  }
}
function BusinessManagementComponent_mat_tab_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, BusinessManagementComponent_mat_tab_5_ng_template_1_Template, 33, 0, "ng-template", 6);
    core/* ɵɵtemplate */.YNc(2, BusinessManagementComponent_mat_tab_5_ng_template_2_Template, 1, 0, "ng-template", 7);
    core/* ɵɵelementEnd */.qZA();
  }
}
function BusinessManagementComponent_mat_tab_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 42)(1, "g", 9);
    core/* ɵɵelement */._UZ(2, "path", 43)(3, "path", 44)(4, "path", 45)(5, "path", 46)(6, "path", 47)(7, "path", 48)(8, "path", 49)(9, "path", 50)(10, "path", 51)(11, "path", 52)(12, "path", 53)(13, "path", 54)(14, "path", 55)(15, "path", 56)(16, "path", 57)(17, "path", 58)(18, "path", 59)(19, "path", 60)(20, "path", 61)(21, "path", 62)(22, "path", 63)(23, "path", 64)(24, "path", 65)(25, "path", 66);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(26, "span");
    core/* ɵɵi18n */.SDv(27, 67);
    core/* ɵɵelementEnd */.qZA();
  }
}
function BusinessManagementComponent_mat_tab_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "app-customer-request-management-component", 40);
    core/* ɵɵlistener */.NdJ("secondaryContent", function BusinessManagementComponent_mat_tab_6_ng_template_2_Template_app_customer_request_management_component_secondaryContent_0_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r9 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r9.onSecondaryContent($event));
    });
    core/* ɵɵelementEnd */.qZA();
  }
}
function BusinessManagementComponent_mat_tab_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, BusinessManagementComponent_mat_tab_6_ng_template_1_Template, 28, 0, "ng-template", 6);
    core/* ɵɵtemplate */.YNc(2, BusinessManagementComponent_mat_tab_6_ng_template_2_Template, 1, 0, "ng-template", 41);
    core/* ɵɵelementEnd */.qZA();
  }
}
function BusinessManagementComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainer */.GkF(0);
  }
}
const business_management_component_c4 = function (a0, a1) {
  return {
    "business-management": a0,
    "business-management-secund-tab": a1
  };
};
const _c5 = function (a0) {
  return [a0];
};
let BusinessManagementComponent = /*#__PURE__*/(() => {
  class BusinessManagementComponent {
    constructor(store) {
      this.store = store;
      this.privileges = privileges_enum/* privileges */.U;
      this.isSecundTab = false;
    }
    onComponentChange(component) {
      this.currentComponent = component;
    }
    onTabChange(event) {
      this.isSecundTab = event.index == 1 ? true : false;
    }
    onSecondaryContent(template) {
      this.secondaryContentTemplate = template;
    }
  }
  BusinessManagementComponent.ɵfac = function BusinessManagementComponent_Factory(t) {
    return new (t || BusinessManagementComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh));
  };
  BusinessManagementComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: BusinessManagementComponent,
    selectors: [["app-business-management"]],
    decls: 9,
    vars: 11,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_71c22gt602384abe8dd7081c95b2086676a47ae47277f5c1647465sde7aqDEra7$$SRC_APP_MODULES_BUSINESS_MANAGEMENT_COMPONENTS_BUSINESS_MANAGEMENT_BUSINESS_MANAGEMENT_COMPONENT_TS___1 = goog.getMsg(" module.business.management.tab.register ");
        i18n_0 = MSG_EXTERNAL_71c22gt602384abe8dd7081c95b2086676a47ae47277f5c1647465sde7aqDEra7$$SRC_APP_MODULES_BUSINESS_MANAGEMENT_COMPONENTS_BUSINESS_MANAGEMENT_BUSINESS_MANAGEMENT_COMPONENT_TS___1;
      } else {
        i18n_0 = "Registro o Actualizaci\xF3n";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_21asw98a6s7d68as7d388bc28abe8dd7081c95asd45q5dsdf58ec86eaweca14x$$SRC_APP_MODULES_BUSINESS_MANAGEMENT_COMPONENTS_BUSINESS_MANAGEMENT_BUSINESS_MANAGEMENT_COMPONENT_TS___3 = goog.getMsg(" module.business.management.tab.request ");
        i18n_2 = MSG_EXTERNAL_21asw98a6s7d68as7d388bc28abe8dd7081c95asd45q5dsdf58ec86eaweca14x$$SRC_APP_MODULES_BUSINESS_MANAGEMENT_COMPONENTS_BUSINESS_MANAGEMENT_BUSINESS_MANAGEMENT_COMPONENT_TS___3;
      } else {
        i18n_2 = "Consultar Solicitudes";
      }
      return [[1, "form__customer", 3, "ngClass"], [1, "main-panel"], ["mat-stretch-tabs", "false", "mat-align-tabs", "start", 3, "selectedTabChange"], [4, "permissions"], [1, "secondary-panel"], [4, "ngTemplateOutlet"], ["mat-tab-label", ""], ["matTabContent", "", "class", "form__customer"], ["id", "Capa_2", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 1, "business-management__tab-icon"], ["transform", "translate(0.000000,512.000000) scale(0.100000,-0.100000)", "fill", "#000000", "stroke", "none"], ["d", "M662 5038 l3 -83 1648 -3 1647 -2 0 85 0 85 -1650 0 -1651 0 3 -82z"], ["d", "M500 4705 l0 -85 1650 0 1650 0 0 -245 0 -245 -924 0 -925 0 -73 142 c-67 131 -76 144 -117 165 l-44 23 -791 0 -792 0 -44 -22 c-33 -17 -51 -35 -68 -68 l-22 -44 0 -2096 0 -2096 23 -44 c16 -33 34 -51 67 -68 l45 -22 2027 2 2027 3 28 21 c63 47 73 75 73 210 l0 122 73 22 c304 92 572 343 684 642 56 149 67 214 67 388 -1 191 -25 294 -109 468 l-55 114 0 340 c0 379 -6 435 -65 571 -50 118 -92 181 -180 275 -107 113 -203 176 -387 250 l-28 12 0 285 c0 318 -1 322 -67 372 -34 26 -44 28 -150 32 l-113 3 0 273 c0 266 -1 273 -22 305 -13 18 -36 43 -51 54 l-28 21 -1680 3 -1679 2 0 -85z m1250 -546 c68 -138 96 -172 158 -189 24 -6 409 -10 1130 -10 l1092 0 0 -243 0 -244 -112 -6 c-62 -4 -149 -16 -193 -27 -81 -21 -223 -83 -275 -120 -28 -20 -44 -20 -1704 -20 l-1676 0 0 495 0 495 758 0 758 0 64 -131z m2533 -896 c123 -43 189 -85 287 -183 93 -92 148 -183 191 -315 20 -64 23 -94 27 -329 l4 -259 -53 45 c-30 24 -69 55 -86 67 l-33 22 0 168 c0 191 -10 246 -68 355 -101 194 -327 319 -543 302 -231 -19 -432 -172 -510 -389 -19 -53 -23 -89 -27 -250 l-4 -188 -52 -39 c-28 -21 -66 -51 -85 -66 l-33 -27 5 249 c5 281 13 329 77 459 103 213 282 347 545 409 11 3 76 4 145 2 110 -2 136 -6 213 -33z m-943 -126 c0 -2 -24 -40 -54 -84 -29 -45 -67 -116 -84 -159 -55 -142 -62 -210 -62 -578 l0 -331 -50 -100 c-120 -241 -147 -500 -80 -760 26 -101 114 -280 179 -366 204 -268 529 -429 867 -429 l74 0 0 -80 0 -80 -1980 0 -1980 0 0 1485 0 1485 1585 0 c872 0 1585 -2 1585 -3z m873 -200 c111 -50 209 -170 236 -288 12 -51 15 -249 4 -249 -5 0 -30 9 -58 19 -195 74 -479 74 -689 1 -33 -11 -63 -20 -68 -20 -11 0 -10 151 2 223 25 153 127 274 276 327 84 29 216 24 297 -13z m57 -652 c101 -27 257 -105 342 -173 163 -130 268 -297 318 -505 24 -101 27 -284 5 -386 -74 -355 -356 -634 -713 -708 -107 -22 -318 -13 -422 17 -339 98 -594 387 -651 735 -17 111 -7 278 25 388 97 331 349 563 697 642 84 19 309 13 399 -10z"], ["d", "M500 3795 l0 -165 80 0 80 0 0 165 0 165 -80 0 -80 0 0 -165z"], ["d", "M830 3795 l0 -165 80 0 80 0 0 165 0 165 -80 0 -80 0 0 -165z"], ["d", "M1160 3795 l0 -165 80 0 80 0 0 165 0 165 -80 0 -80 0 0 -165z"], ["d", "M1076 2824 c-3 -9 -6 -202 -6 -430 l0 -414 35 0 35 0 0 390 0 390 475 0 475 0 0 -980 0 -980 -235 0 -235 0 0 -40 0 -40 510 0 510 0 0 40 c0 29 -4 40 -15 40 -13 0 -15 97 -15 809 0 723 -2 811 -16 825 -13 14 -47 16 -220 16 l-204 0 0 183 c0 129 -4 187 -12 195 -9 9 -144 12 -544 12 -476 0 -533 -2 -538 -16z m1454 -1239 l0 -785 -180 0 -180 0 0 785 0 785 180 0 180 0 0 -785z"], ["d", "M2280 2210 l0 -40 70 0 70 0 0 40 0 40 -70 0 -70 0 0 -40z"], ["d", "M2280 1980 l0 -40 70 0 70 0 0 40 0 40 -70 0 -70 0 0 -40z"], ["d", "M2280 1740 l0 -40 70 0 70 0 0 40 0 40 -70 0 -70 0 0 -40z"], ["d", "M2280 1510 l0 -40 70 0 70 0 0 40 0 40 -70 0 -70 0 0 -40z"], ["d", "M2280 1270 l0 -40 70 0 70 0 0 40 0 40 -70 0 -70 0 0 -40z"], ["d", "M2280 1040 l0 -40 70 0 70 0 0 40 0 40 -70 0 -70 0 0 -40z"], ["d", "M1266 2634 c-23 -23 -23 -265 0 -288 23 -23 245 -23 268 0 13 12 16 40 16 144 0 104 -3 132 -16 144 -12 13 -40 16 -134 16 -94 0 -122 -3 -134 -16z m204 -144 l0 -80 -70 0 -70 0 0 80 0 80 70 0 70 0 0 -80z"], ["d", "M1700 2631 c-13 -26 -13 -256 0 -282 10 -17 22 -19 130 -19 65 0 125 3 134 6 14 5 16 28 16 154 0 126 -2 149 -16 154 -9 3 -69 6 -134 6 -108 0 -120 -2 -130 -19z m210 -141 l0 -80 -70 0 -70 0 0 80 0 80 70 0 70 0 0 -80z"], ["d", "M1262 2158 c-7 -7 -12 -44 -12 -95 l0 -83 40 0 40 0 0 60 0 60 70 0 70 0 0 -100 0 -100 40 0 40 0 0 123 c0 82 -4 127 -12 135 -8 8 -53 12 -138 12 -85 0 -130 -4 -138 -12z"], ["d", "M1702 2158 c-15 -15 -17 -250 -2 -279 10 -17 22 -19 133 -19 67 0 128 4 135 8 9 7 12 44 10 153 l-3 144 -130 3 c-93 2 -134 -1 -143 -10z m208 -138 l0 -80 -70 0 -70 0 0 80 0 80 70 0 70 0 0 -80z"], ["d", "M740 1891 c-14 -4 -35 -22 -47 -40 l-23 -34 0 -545 c0 -533 0 -545 21 -578 13 -22 33 -37 57 -44 24 -7 156 -10 383 -8 330 3 348 4 369 23 49 43 50 55 50 526 l0 442 -54 61 c-30 34 -85 94 -123 134 l-68 72 -270 -1 c-149 -1 -281 -4 -295 -8z m510 -174 c0 -67 4 -107 12 -115 8 -8 47 -12 110 -12 l98 0 0 -423 c0 -316 -3 -426 -12 -435 -9 -9 -101 -12 -355 -12 -328 0 -343 1 -353 19 -15 30 -14 1053 2 1069 9 9 79 12 255 12 l243 0 0 -103z m130 -10 l44 -47 -47 0 -47 0 0 52 c0 28 1 49 3 47 1 -2 22 -26 47 -52z"], ["d", "M890 1470 l0 -40 220 0 220 0 0 40 0 40 -220 0 -220 0 0 -40z"], ["d", "M890 1230 l0 -40 220 0 220 0 0 40 0 40 -220 0 -220 0 0 -40z"], ["d", "M890 1000 l0 -40 220 0 220 0 0 40 0 40 -220 0 -220 0 0 -40z"], ["d", "M1702 1688 c-18 -18 -17 -272 2 -287 9 -8 56 -11 142 -9 l129 3 0 150 0 150 -130 3 c-93 2 -134 -1 -143 -10z m208 -138 l0 -80 -70 0 -70 0 0 80 0 80 70 0 70 0 0 -80z"], ["d", "M1702 1218 c-18 -18 -17 -272 2 -287 9 -8 56 -11 142 -9 l129 3 0 150 0 150 -130 3 c-93 2 -134 -1 -143 -10z m208 -143 l0 -75 -70 0 -70 0 0 75 0 75 70 0 70 0 0 -75z"], ["d", "M220 460 l0 -30 80 0 80 0 0 30 0 30 -80 0 -80 0 0 -30z"], ["d", "M520 460 l0 -30 220 0 220 0 0 30 0 30 -220 0 -220 0 0 -30z"], ["d", "M220 350 l0 -30 370 0 370 0 0 30 0 30 -370 0 -370 0 0 -30z"], ["d", "M220 240 l0 -30 150 0 150 0 0 30 0 30 -150 0 -150 0 0 -30z"], ["d", "M680 240 l0 -30 150 0 150 0 0 30 0 30 -150 0 -150 0 0 -30z"], ["d", "M3945 2140 c-166 -24 -297 -92 -420 -215 -103 -102 -159 -196 -196 -331 -31 -111 -31 -269 0 -378 97 -348 418 -579 766 -552 104 7 182 29 280 76 349 168 507 590 356 951 -128 306 -462 497 -786 449z m232 -175 c204 -48 374 -213 428 -415 19 -71 19 -219 0 -290 -52 -197 -218 -363 -415 -415 -72 -19 -210 -19 -285 0 -252 64 -434 298 -435 557 0 263 186 502 442 564 72 17 190 17 265 -1z"], ["d", "M3999 1813 c-52 -8 -132 -66 -164 -117 -27 -44 -30 -58 -30 -126 0 -68 4 -82 30 -126 18 -29 50 -61 77 -79 l47 -30 0 -172 1 -173 85 0 85 0 0 173 c0 173 0 174 24 185 140 63 181 262 79 381 -53 63 -152 98 -234 84z m86 -169 c8 -4 23 -20 31 -36 30 -57 -6 -118 -69 -118 -41 0 -63 15 -76 50 -24 69 43 131 114 104z"], i18n_0, [3, "secondaryContent"], ["matTabContent", ""], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 1, "business-management__tab-icon"], ["d", "M140 4497 c-30 -16 -51 -37 -67 -67 l-23 -43 0 -1611 0 -1611 23 -40 c12 -22 38 -50 56 -62 l34 -23 1274 0 c1412 0 1305 -5 1360 67 23 30 28 48 31 108 l4 73 172 5 c182 6 262 19 408 67 79 26 227 94 285 131 19 11 27 11 60 -5 22 -11 69 -21 114 -24 64 -4 84 -1 136 20 l62 25 31 -32 c30 -31 30 -32 15 -68 -8 -20 -15 -57 -15 -83 0 -105 1 -106 319 -426 303 -306 330 -328 389 -313 38 9 249 220 263 262 7 24 8 42 0 66 -16 48 -571 599 -631 626 -55 25 -135 27 -191 5 l-41 -17 -29 29 -29 29 26 64 c23 56 26 75 22 140 -3 43 -13 92 -23 112 l-17 35 66 135 c114 233 151 410 143 674 -3 91 -13 192 -22 235 -126 575 -574 1007 -1144 1104 -55 9 -152 16 -233 16 l-138 0 0 142 c0 170 -14 212 -84 253 l-43 25 -1260 0 -1260 0 -43 -23z m2557 -109 c22 -20 23 -28 23 -164 l0 -142 -37 -6 c-77 -14 -241 -69 -328 -111 -281 -135 -512 -362 -652 -638 -48 -96 -108 -284 -127 -396 -21 -124 -21 -349 0 -472 95 -557 518 -1008 1067 -1135 l77 -18 0 -58 c0 -45 -5 -63 -20 -78 -20 -20 -33 -20 -1260 -20 -1227 0 -1240 0 -1260 20 -20 20 -20 33 -20 1604 l0 1583 21 27 20 26 1237 0 1236 0 23 -22z m485 -417 c468 -81 859 -414 1008 -859 51 -153 65 -241 65 -417 0 -280 -65 -493 -220 -726 -354 -531 -1058 -718 -1641 -434 -361 175 -612 501 -701 907 -25 117 -25 390 1 508 56 257 176 481 350 655 106 106 198 173 326 239 255 131 532 174 812 127z m908 -2201 c-1 -74 -67 -165 -139 -189 -36 -12 -104 -15 -113 -5 -4 3 28 36 70 73 43 38 97 93 122 124 47 60 60 60 60 -3z m303 -334 c18 -7 43 -25 57 -40 l24 -27 -92 -92 -91 -91 -30 29 c-73 69 -61 184 22 220 41 18 70 18 110 1z m265 -433 l-93 -93 -97 97 -98 98 92 92 93 93 97 -97 98 -98 -92 -92z m242 -58 l65 -65 -93 -93 -92 -92 -67 68 -68 67 90 90 c49 49 92 90 95 90 3 0 35 -29 70 -65z"], ["d", "M382 4204 c-25 -17 -29 -51 -8 -80 13 -18 30 -19 253 -22 267 -3 286 1 291 55 6 59 -12 63 -278 63 -197 0 -239 -3 -258 -16z"], ["d", "M1260 4200 c-35 -35 -19 -83 33 -95 12 -3 287 -4 610 -3 569 3 589 4 603 22 21 29 17 63 -8 80 -20 14 -95 16 -620 16 -585 0 -598 0 -618 -20z"], ["d", "M377 3892 c-22 -24 -21 -55 1 -75 17 -15 64 -17 473 -17 341 0 458 3 467 12 17 17 15 64 -4 82 -14 14 -70 16 -468 16 -426 0 -454 -1 -469 -18z"], ["d", "M1508 3899 c-21 -12 -24 -69 -6 -87 16 -16 200 -16 216 0 20 20 15 76 -7 88 -25 13 -181 13 -203 -1z"], ["d", "M376 3584 c-21 -21 -20 -57 2 -77 15 -14 42 -17 154 -17 118 0 137 2 151 18 21 23 22 56 1 76 -12 13 -41 16 -154 16 -113 0 -142 -3 -154 -16z"], ["d", "M922 3588 c-17 -17 -15 -64 4 -82 13 -14 60 -16 363 -16 324 0 349 1 364 18 21 23 22 56 1 76 -13 14 -61 16 -368 16 -260 0 -355 -3 -364 -12z"], ["d", "M400 3293 c-43 -15 -53 -73 -18 -97 20 -14 90 -16 568 -16 601 0 590 -1 590 60 0 61 11 60 -585 59 -297 0 -547 -3 -555 -6z"], ["d", "M382 2974 c-25 -17 -29 -51 -8 -79 11 -15 30 -19 99 -23 47 -2 102 -1 121 2 64 12 85 57 46 96 -18 18 -33 20 -128 20 -81 0 -113 -4 -130 -16z"], ["d", "M980 2970 c-26 -26 -25 -52 1 -76 19 -17 39 -19 226 -19 204 0 205 0 224 24 21 26 18 58 -9 79 -11 9 -72 12 -219 12 -190 0 -204 -1 -223 -20z"], ["d", "M377 2662 c-22 -24 -21 -55 1 -75 15 -14 41 -17 134 -17 99 0 117 3 131 18 22 24 21 55 -1 75 -15 14 -41 17 -134 17 -99 0 -117 -3 -131 -18z"], ["d", "M976 2658 c-21 -29 -20 -51 2 -71 27 -25 412 -25 436 -1 21 21 20 57 -2 77 -16 15 -47 17 -220 17 -196 0 -201 -1 -216 -22z"], ["d", "M376 2354 c-21 -21 -20 -57 2 -77 17 -15 71 -17 575 -17 492 0 557 2 571 16 19 18 21 65 4 82 -9 9 -150 12 -574 12 -498 0 -564 -2 -578 -16z"], ["d", "M380 2050 c-11 -11 -20 -29 -20 -40 0 -11 9 -29 20 -40 18 -18 33 -20 148 -20 99 0 132 3 150 16 28 19 29 57 2 84 -18 18 -33 20 -150 20 -117 0 -132 -2 -150 -20z"], ["d", "M933 2055 c-31 -21 -31 -68 -1 -89 19 -14 66 -16 315 -16 280 0 294 1 313 20 24 24 25 49 6 76 -14 18 -31 19 -313 22 -259 2 -301 1 -320 -13z"], ["d", "M377 1742 c-21 -23 -22 -56 -1 -76 14 -14 89 -16 673 -16 498 0 660 3 669 12 17 17 15 64 -4 82 -14 14 -88 16 -668 16 -620 0 -654 -1 -669 -18z"], ["d", "M377 1432 c-22 -24 -21 -55 1 -75 16 -15 47 -17 224 -17 186 0 206 2 221 18 22 24 21 55 -1 75 -16 15 -47 17 -224 17 -186 0 -206 -2 -221 -18z"], ["d", "M1093 1424 c-15 -24 -15 -29 -2 -53 l15 -26 502 -3 c335 -1 509 1 522 8 27 15 28 75 1 90 -13 6 -194 10 -520 10 l-501 0 -17 -26z"], ["d", "M2825 3819 c-481 -65 -862 -412 -966 -878 -84 -377 32 -772 306 -1046 399 -399 1035 -442 1485 -99 307 233 481 631 440 1003 -56 513 -407 904 -903 1005 -99 21 -271 28 -362 15z m25 -1123 l0 -1013 -49 8 c-125 19 -261 71 -381 144 -59 36 -59 36 -40 55 11 11 20 31 20 44 0 38 -35 56 -107 56 -59 0 -66 2 -93 33 -17 17 -53 66 -81 107 l-51 75 92 5 c76 4 94 8 106 24 19 27 18 52 -6 76 -18 18 -33 20 -135 20 l-114 0 -20 63 c-10 35 -22 84 -26 110 l-7 47 138 0 c77 0 144 4 150 8 23 15 35 51 24 72 -18 34 -45 40 -184 40 l-136 0 0 64 c0 35 3 84 6 110 l7 46 105 0 c117 0 142 11 142 60 0 43 -16 50 -118 50 l-94 0 6 31 c3 17 25 68 48 115 l41 84 123 0 c135 0 154 7 154 59 0 42 -17 50 -110 53 l-85 3 70 70 c39 39 99 89 134 113 61 40 66 42 141 42 86 0 104 10 102 59 -1 27 3 30 61 46 51 13 124 29 160 34 4 1 7 -455 7 -1013z m375 984 c324 -86 594 -337 701 -654 109 -318 50 -684 -150 -944 -57 -74 -176 -187 -248 -235 -135 -89 -318 -153 -470 -164 l-88 -6 0 1018 0 1018 88 -6 c48 -3 123 -16 167 -27z"], ["d", "M2440 3325 c-18 -22 -15 -66 6 -82 10 -7 44 -13 79 -13 70 0 98 15 98 53 0 47 -18 57 -98 57 -52 0 -76 -4 -85 -15z"], ["d", "M2296 2985 c-23 -23 -20 -61 6 -79 18 -13 51 -16 153 -16 71 0 135 4 141 8 24 16 33 48 21 73 -12 24 -15 24 -159 27 -123 2 -149 0 -162 -13z"], ["d", "M2413 2655 c-30 -21 -34 -51 -11 -80 18 -23 26 -25 103 -25 78 0 85 2 104 26 27 34 26 40 -4 69 -21 22 -33 25 -97 25 -49 0 -81 -5 -95 -15z"], ["d", "M2370 2310 c-11 -11 -20 -29 -20 -40 0 -11 9 -29 20 -40 17 -17 33 -20 115 -20 88 0 98 2 120 25 14 13 25 29 25 35 0 6 -11 22 -25 35 -22 23 -32 25 -120 25 -82 0 -98 -3 -115 -20z"], ["d", "M2497 1972 c-20 -22 -22 -65 -4 -81 22 -18 70 -22 96 -9 61 32 34 108 -38 108 -24 0 -44 -7 -54 -18z"], i18n_2];
    },
    template: function BusinessManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-content")(4, "mat-tab-group", 2);
        core/* ɵɵlistener */.NdJ("selectedTabChange", function BusinessManagementComponent_Template_mat_tab_group_selectedTabChange_4_listener($event) {
          return ctx.onTabChange($event);
        });
        core/* ɵɵtemplate */.YNc(5, BusinessManagementComponent_mat_tab_5_Template, 3, 0, "mat-tab", 3);
        core/* ɵɵtemplate */.YNc(6, BusinessManagementComponent_mat_tab_6_Template, 3, 0, "mat-tab", 3);
        core/* ɵɵelementEnd */.qZA()()()();
        core/* ɵɵelementStart */.TgZ(7, "div", 4);
        core/* ɵɵtemplate */.YNc(8, BusinessManagementComponent_ng_container_8_Template, 1, 0, "ng-container", 5);
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngClass", core/* ɵɵpureFunction2 */.WLB(4, business_management_component_c4, !ctx.isSecundTab, ctx.isSecundTab));
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(7, _c5, ctx.privileges.GE_REG_ACT));
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(9, _c5, ctx.privileges.GE_CON_SOL));
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("ngTemplateOutlet", ctx.secondaryContentTemplate);
      }
    },
    dependencies: [common/* NgClass */.mk, common/* NgTemplateOutlet */.tP, tabs/* MatTabContent */.Vc, tabs/* MatTabLabel */.uD, tabs/* MatTab */.uX, tabs/* MatTabGroup */.SP, card/* MatCard */.a8, card/* MatCardContent */.dn, permissions_directive/* PermissionsDirective */.$, CustomerManagementFormComponent, CustomerRequestManagementComponentComponent],
    styles: [".business-management[_ngcontent-%COMP%]{height:100vh;padding-left:1rem;display:grid;grid-template-columns:.7fr 1fr;grid-template-rows:1fr}.business-management-secund-tab[_ngcontent-%COMP%]{height:100vh;padding-left:1rem;display:grid;grid-template-columns:.38fr 1.36fr;grid-template-rows:1fr}.business-management__tab-icon[_ngcontent-%COMP%]{width:1.3rem}.business-management__tab-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{width:1.5rem;fill:#0009}.title[_ngcontent-%COMP%]{padding-top:1rem;color:#78909c}.header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.icon-title[_ngcontent-%COMP%]{width:1.5rem}.title-card[_ngcontent-%COMP%]{width:max-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.main-panel[_ngcontent-%COMP%], .secondary-panel[_ngcontent-%COMP%]{overflow-y:scroll;overflow-x:hidden!important}.secondary-panel[_ngcontent-%COMP%]{padding:1rem}.secondary-panel__actions[_ngcontent-%COMP%]{padding-bottom:1rem;display:flex;justify-content:flex-start;align-items:center}.not-found[_ngcontent-%COMP%]{color:#78909c;font-size:1.3rem;text-align:center;padding:1rem}button[_ngcontent-%COMP%]{color:#fff}  .mdc-tab__text-label{flex-direction:column!important}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .business-management__tab-icon path, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .business-management__tab-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#66bb6a}"]
  });
  return BusinessManagementComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/enums/documentation-modules.enum.ts
var documentation_modules_enum = __webpack_require__(92666);
// EXTERNAL MODULE: ./src/app/shared/guard/notifications.guard.ts
var notifications_guard = __webpack_require__(34418);
;// CONCATENATED MODULE: ./src/app/modules/business-management/business-management-routing.module.ts






const routes = [{
  path: "",
  component: BusinessManagementComponent,
  canActivate: [notifications_guard/* NotificationsGuard */.t],
  data: {
    documentation_module: documentation_modules_enum/* typesModulesDocumentation.GEST_CLIE_NEW */.c.GEST_CLIE_NEW,
    componentName: 'BusinessManagementComponent',
    privilegeName: 'GE'
  }
}];
let BusinessManagementRoutingModule = /*#__PURE__*/(() => {
  class BusinessManagementRoutingModule {}
  BusinessManagementRoutingModule.ɵfac = function BusinessManagementRoutingModule_Factory(t) {
    return new (t || BusinessManagementRoutingModule)();
  };
  BusinessManagementRoutingModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: BusinessManagementRoutingModule
  });
  BusinessManagementRoutingModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [router/* RouterModule.forChild */.Bz.forChild(routes), router/* RouterModule */.Bz]
  });
  return BusinessManagementRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(BusinessManagementRoutingModule, {
    imports: [router/* RouterModule */.Bz],
    exports: [router/* RouterModule */.Bz]
  });
})();
// EXTERNAL MODULE: ./src/app/modules/services/services.module.ts + 14 modules
var services_module = __webpack_require__(73102);
;// CONCATENATED MODULE: ./src/app/modules/business-management/business-management.module.ts














let BusinessManagementModule = /*#__PURE__*/(() => {
  class BusinessManagementModule {}
  BusinessManagementModule.ɵfac = function BusinessManagementModule_Factory(t) {
    return new (t || BusinessManagementModule)();
  };
  BusinessManagementModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: BusinessManagementModule
  });
  BusinessManagementModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [common/* CommonModule */.ez, BusinessManagementRoutingModule, shared_module/* SharedModule */.m, sort/* MatSortModule */.JX, services_module.ServicesModule]
  });
  return BusinessManagementModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(BusinessManagementModule, {
    declarations: [BusinessManagementComponent, CustomerManagementFormComponent, MessageEditCustomerDialogComponent, CustomerRequestManagementComponentComponent, CustomerManagementFormConfirmComponent, CustomerRequestInProgressMessageComponent, CustomerRequestLoadDocumentsComponent, PendingFieldsAndDocumentsComponentComponent],
    imports: [common/* CommonModule */.ez, BusinessManagementRoutingModule, shared_module/* SharedModule */.m, sort/* MatSortModule */.JX, services_module.ServicesModule]
  });
})();

/***/ })

}]);