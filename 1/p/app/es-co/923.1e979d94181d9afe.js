"use strict";
(self["webpackChunkbussinessPortal"] = self["webpackChunkbussinessPortal"] || []).push([[923],{

/***/ 27923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SacRequestManagementModule": () => (/* binding */ SacRequestManagementModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__(36895);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2020/router.mjs + 5 modules
var router = __webpack_require__(77518);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subject.js + 1 modules
var Subject = __webpack_require__(77579);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(82722);
// EXTERNAL MODULE: ./src/app/core/privileges.enum.ts
var privileges_enum = __webpack_require__(9862);
// EXTERNAL MODULE: ./src/app/state/api-gateway/api-gateway.selectors.ts
var api_gateway_selectors = __webpack_require__(75868);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs
var core = __webpack_require__(94650);
// EXTERNAL MODULE: ./src/app/core/auth/services/AESEncryptionUtil.service.ts
var AESEncryptionUtil_service = __webpack_require__(3056);
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
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/snack-bar.mjs
var snack_bar = __webpack_require__(17009);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(61135);
;// CONCATENATED MODULE: ./src/app/modules/sac-request-management/services/StatesServiceRequestManagementSAC.service.ts


let StatesServiceRequestManagementSAC = /*#__PURE__*/(() => {
  class StatesServiceRequestManagementSAC {
    constructor() {
      this.isUpdateFilterCriterial = new BehaviorSubject/* BehaviorSubject */.X(null);
    }
    getStateIsUpdateFilterCriterial() {
      return this.isUpdateFilterCriterial.asObservable();
    }
    // getter
    getValueIsUpdateFilterCriterial() {
      return this.isUpdateFilterCriterial.getValue();
    }
    // Setter
    setValueIsUpdateFilterCriterial(filter) {
      this.isUpdateFilterCriterial.next(filter);
    }
    // reset
    resetValueIsUpdateFilterCriterial() {
      this.isUpdateFilterCriterial.next(null);
    }
    resetAllProperties() {
      this.isUpdateFilterCriterial.next(null);
    }
  }
  StatesServiceRequestManagementSAC.ɵfac = function StatesServiceRequestManagementSAC_Factory(t) {
    return new (t || StatesServiceRequestManagementSAC)();
  };
  StatesServiceRequestManagementSAC.ɵprov = /*@__PURE__*/core/* ɵɵdefineInjectable */.Yz7({
    token: StatesServiceRequestManagementSAC,
    factory: StatesServiceRequestManagementSAC.ɵfac,
    providedIn: 'root'
  });
  return StatesServiceRequestManagementSAC;
})();
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/form-field.mjs
var form_field = __webpack_require__(59549);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/input.mjs + 1 modules
var input = __webpack_require__(44144);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/select.mjs
var fesm2020_select = __webpack_require__(84385);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/core.mjs + 1 modules
var fesm2020_core = __webpack_require__(3238);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/datepicker.mjs
var datepicker = __webpack_require__(99602);
;// CONCATENATED MODULE: ./src/app/modules/sac-request-management/components/sac-request-management-filter/sac-request-management-filter.component.ts













function SacRequestManagementFilterComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-option", 23);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    core/* ɵɵproperty */.Q6J("value", type_r4.value);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(type_r4.name);
  }
}
function SacRequestManagementFilterComponent_mat_option_27_Template(rf, ctx) {
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
let SacRequestManagementFilterComponent = /*#__PURE__*/(() => {
  class SacRequestManagementFilterComponent {
    constructor(fb, matSnackBar, router, statesServiceRequestManagementSAC) {
      this.fb = fb;
      this.matSnackBar = matSnackBar;
      this.router = router;
      this.statesServiceRequestManagementSAC = statesServiceRequestManagementSAC;
      this.requestTypes = [{
        name: 'Todos',
        value: 'todos'
      }, {
        name: 'Nueva Empresa',
        value: 'nueva'
      }, {
        name: 'Actualización Datos Empresa',
        value: 'datosDocumental'
      }, {
        name: 'Solo Documental',
        value: 'documental'
      }];
      this.requestStatus = [{
        name: 'Todas',
        value: 'todas'
      }, {
        name: 'Pendientes',
        value: 'pendientes'
      }, {
        name: 'Cerradas',
        value: 'cerradas'
      }];
      const defaultDates = this.getDefaultDates();
      this.myForm = this.fb.group({
        requestType: [this.requestTypes[0].value, fesm2020_forms/* Validators.required */.kI.required],
        requestStatus: [this.requestStatus[0].value, fesm2020_forms/* Validators.required */.kI.required],
        startDate: [defaultDates.startDate, fesm2020_forms/* Validators.required */.kI.required],
        endDate: [defaultDates.endDate, fesm2020_forms/* Validators.required */.kI.required]
      }, {
        validators: this.dateRangeValidator()
      });
      this.emmitFormValue();
    }
    ngOnInit() {
      this.router.navigate(["/", "gestion-solicitudes-sac", "management"]);
    }
    getDefaultDates() {
      const currentDate = new Date();
      const endDate = currentDate.toISOString().split('T')[0];
      const startDate = new Date(currentDate);
      startDate.setDate(startDate.getDate() - 7);
      const formattedStartDate = startDate.toISOString().split('T')[0];
      return {
        startDate: formattedStartDate,
        endDate: endDate
      };
    }
    dateRangeValidator() {
      return control => {
        const startDate = new Date(control.get('startDate')?.value);
        const endDateValue = control.get('endDate')?.value;
        const endDate = new Date(`${endDateValue}T00:00:00`);
        // const endDate = new Date(control.get('endDate')?.value);
        if (!startDate || !endDate) {
          return null;
        }
        const timeDiff = endDate.getTime() - startDate.getTime();
        const dayDiff = timeDiff / (1000 * 3600 * 24);
        if (dayDiff > 30) {
          return {
            dateRange: 'La diferencia entre ambas fechas no puede ser mayor a 30 días.'
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
      this.emmitFormValue();
    }
    emmitFormValue() {
      let requestFilter = {
        requestType: this.myForm.get('requestType')?.value,
        requestStatus: this.myForm.get('requestStatus')?.value,
        startDate: this.formatDate(this.myForm.get('startDate')?.value),
        endDate: this.formatDate(this.myForm.get('endDate')?.value)
      };
      this.statesServiceRequestManagementSAC.setValueIsUpdateFilterCriterial(requestFilter);
    }
    formatDate(date) {
      return new Date(date).toISOString().slice(0, 10);
    }
  }
  SacRequestManagementFilterComponent.ɵfac = function SacRequestManagementFilterComponent_Factory(t) {
    return new (t || SacRequestManagementFilterComponent)(core/* ɵɵdirectiveInject */.Y36(fesm2020_forms/* FormBuilder */.qu), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(StatesServiceRequestManagementSAC));
  };
  SacRequestManagementFilterComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: SacRequestManagementFilterComponent,
    selectors: [["app-sac-request-management-filter"]],
    decls: 55,
    vars: 7,
    consts: [[1, ""], [1, "title-card"], [1, "card-title"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 83.36 1.91", 1, "welcome__line"], ["id", "Capa_1-2"], ["width", "31.37", "height", "1.91", 1, "cls-2"], ["x", "26.13", "width", "28.61", "height", "1.91", 1, "cls-3"], ["x", "54.74", "width", "28.61", "height", "1.91", 1, "cls-1"], [1, "myForm"], ["autocomplete", "off", 3, "formGroup"], ["id", "requestType", "formControlName", "requestType"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "requestStatus", "formControlName", "requestStatus"], ["matInput", "", "formControlName", "startDate", "placeholder", "Seleccione la fecha inicial", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "formControlName", "endDate", "placeholder", "Seleccione la fecha final", 3, "matDatepicker"], ["picker2", ""], [1, "sac-request__search-item", "sac-request__search-item_search-button"], [1, "sac-request__field-button", 3, "click"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 68.15 68.15", 1, "sac-request__field-button-icon"], ["width", "68.15", "height", "68.15", "rx", "4.87", "ry", "4.87", 1, "claseunicalupa"], ["d", "m43.28,25.86c0,10.57-8.6,19.17-19.17,19.17S4.95,36.43,4.95,25.86,13.55,6.69,24.11,6.69s19.17,8.6,19.17,19.17h0Zm15.63,34.79c-1.07,1.07-2.8,1.07-3.87,0l-15.54-15.55c1.43-1.14,2.73-2.44,3.87-3.87l15.55,15.55c1.07,1.06,1.07,2.8,0,3.87Z", 1, "cls-2"], [3, "value"]],
    template: function SacRequestManagementFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "mat-card")(2, "mat-card-content")(3, "div", 1)(4, "h2", 2);
        core/* ɵɵtext */._uU(5, "Solicitudes Creadas");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(6, "svg", 3)(7, "defs")(8, "style");
        core/* ɵɵtext */._uU(9, ".cls-1{fill:#c5c6c8;}.cls-2{fill:#7ba052;}.cls-3{fill:#4b8051;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(10, "g", 4);
        core/* ɵɵelement */._UZ(11, "rect", 5)(12, "rect", 6)(13, "rect", 7);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementContainerStart */.ynx(14, 8);
        core/* ɵɵelementStart */.TgZ(15, "form", 9);
        core/* ɵɵelementContainerStart */.ynx(16);
        core/* ɵɵelementStart */.TgZ(17, "mat-form-field", 0)(18, "mat-label");
        core/* ɵɵtext */._uU(19, "Tipo solicitud:");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(20, "mat-select", 10);
        core/* ɵɵtemplate */.YNc(21, SacRequestManagementFilterComponent_mat_option_21_Template, 2, 2, "mat-option", 11);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(22);
        core/* ɵɵelementStart */.TgZ(23, "mat-form-field", 0)(24, "mat-label");
        core/* ɵɵtext */._uU(25, "Estado solicitud");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(26, "mat-select", 12);
        core/* ɵɵtemplate */.YNc(27, SacRequestManagementFilterComponent_mat_option_27_Template, 2, 2, "mat-option", 11);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(28);
        core/* ɵɵelementStart */.TgZ(29, "mat-form-field", 0)(30, "mat-label");
        core/* ɵɵtext */._uU(31, "Fecha inicial");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(32, "input", 13)(33, "mat-datepicker-toggle", 14)(34, "mat-datepicker", null, 15);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(36);
        core/* ɵɵelementStart */.TgZ(37, "mat-form-field", 0)(38, "mat-label");
        core/* ɵɵtext */._uU(39, "Fecha final");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(40, "input", 16)(41, "mat-datepicker-toggle", 14)(42, "mat-datepicker", null, 17);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(44);
        core/* ɵɵelementStart */.TgZ(45, "li", 18)(46, "button", 19);
        core/* ɵɵlistener */.NdJ("click", function SacRequestManagementFilterComponent_Template_button_click_46_listener() {
          return ctx.onSubmit();
        });
        core/* ɵɵtext */._uU(47, " Buscar ");
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(48, "svg", 20)(49, "defs")(50, "style");
        core/* ɵɵtext */._uU(51, ".claseunicalupa{fill:transparent;}.cls-2{fill:none;fill-rule:evenodd;stroke:#f9f9f9;stroke-miterlimit:10;stroke-width:2px;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(52, "g", 4);
        core/* ɵɵelement */._UZ(53, "rect", 21)(54, "path", 22);
        core/* ɵɵelementEnd */.qZA()()()();
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA()()();
      }
      if (rf & 2) {
        const _r2 = core/* ɵɵreference */.MAs(35);
        const _r3 = core/* ɵɵreference */.MAs(43);
        core/* ɵɵadvance */.xp6(15);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.myForm);
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("ngForOf", ctx.requestTypes);
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("ngForOf", ctx.requestStatus);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("matDatepicker", _r2);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("for", _r2);
        core/* ɵɵadvance */.xp6(7);
        core/* ɵɵproperty */.Q6J("matDatepicker", _r3);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("for", _r3);
      }
    },
    dependencies: [common/* NgForOf */.sg, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatSuffix */.R9, input/* MatInput */.Nt, fesm2020_select/* MatSelect */.gD, fesm2020_core/* MatOption */.ey, datepicker/* MatDatepicker */.Mq, datepicker/* MatDatepickerInput */.hl, datepicker/* MatDatepickerToggle */.nW, card/* MatCard */.a8, card/* MatCardContent */.dn, fesm2020_forms/* ɵNgNoValidate */._Y, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* NgControlStatusGroup */.JL, fesm2020_forms/* FormGroupDirective */.sg, fesm2020_forms/* FormControlName */.u],
    styles: [".wrapper-sac-request[_ngcontent-%COMP%]{width:100%;height:100%;padding:.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;gap:.5rem}.header-sac-request[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.title-sac-request[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Gilroy-Light;margin:0;padding-left:.5rem;color:#78909c;font-weight:600}.sac-request[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.welcome__user[_ngcontent-%COMP%]{font-size:1.875rem;color:var(--primary-color)}.transaction-sac-request[_ngcontent-%COMP%]{display:grid;height:100vh}.other-component[_ngcontent-%COMP%]{padding:1rem;display:grid}.sac-request-form[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr 1fr auto 1fr}.sac-request__search-item[_ngcontent-%COMP%]{font-weight:300;display:flex;justify-content:space-between;align-items:center}.sac-request__search-item_search-button[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.sac-request__search-button-item[_ngcontent-%COMP%]{width:100%;font-weight:300;display:flex;justify-content:flex-end;align-items:center}.sac-request__field-button[_ngcontent-%COMP%]{width:7rem;height:2rem;border:none;outline:none;cursor:pointer;border-radius:.5rem;margin-left:.2rem 0rem;background-color:#92b975;color:#fff;transition:background-color .2s;font-size:1rem;display:flex;justify-content:space-around;align-items:center}.sac-request__field-button[_ngcontent-%COMP%]:disabled{background-color:#999}.sac-request__field-button-icon[_ngcontent-%COMP%]{width:2rem}.main-panel[_ngcontent-%COMP%]{height:100%}.sac-request-search[_ngcontent-%COMP%]{list-style:none;margin:0}.secondary-panel[_ngcontent-%COMP%]{flex:1;padding-right:1rem}.sac-request_line[_ngcontent-%COMP%]{width:35rem;margin-top:1rem}.title-card[_ngcontent-%COMP%]{width:max-content;margin-bottom:2rem}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.icon-title[_ngcontent-%COMP%], .sac-request_pin_tab-icono[_ngcontent-%COMP%]{width:1.5rem}.sac-request-icon[_ngcontent-%COMP%]{padding-top:.5rem}.sac-request_pin_tab-icono[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{width:1.5rem}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .sac-request_pin_tab-icono path, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .sac-request_pin_tab-icono[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:none;stroke:#231f20!important}.icon-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center}.mat-mdc-card-content[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child:not(.mat-mdc-card-footer){display:grid!important}.observations-column[_ngcontent-%COMP%]{width:auto;word-wrap:break-word}.mdc-data-table__cell[_ngcontent-%COMP%], .mdc-data-table__header-cell[_ngcontent-%COMP%]{padding:0 10px!important}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}.clickable-icon[_ngcontent-%COMP%], .clickable-icon[_ngcontent-%COMP%]:hover{cursor:pointer!important}"]
  });
  return SacRequestManagementFilterComponent;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/catchError.js
var catchError = __webpack_require__(70262);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/of.js
var of = __webpack_require__(39646);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/sort.mjs
var sort = __webpack_require__(96308);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/table.mjs + 2 modules
var table = __webpack_require__(7155);
// EXTERNAL MODULE: ./src/app/shared/constants/app.constants.ts
var app_constants = __webpack_require__(79512);
// EXTERNAL MODULE: ./src/app/shared/utils/utils.ts
var utils = __webpack_require__(54750);
// EXTERNAL MODULE: ./node_modules/xlsx/xlsx.mjs
var xlsx = __webpack_require__(80574);
// EXTERNAL MODULE: ./src/environments/environment.ts
var environment = __webpack_require__(92340);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/http.mjs
var http = __webpack_require__(80529);
;// CONCATENATED MODULE: ./src/app/modules/sac-request-management/services/sac-request.service.ts




let SacRequestService = /*#__PURE__*/(() => {
  class SacRequestService {
    constructor(httpClient, aesEncryptionUtilService) {
      this.httpClient = httpClient;
      this.aesEncryptionUtilService = aesEncryptionUtilService;
      this.apiBaseURL = environment/* environment.production */.N.production ? location.origin : 'portal-api';
    }
    getCustomerRequest(body) {
      return this.httpClient.post(`${this.apiBaseURL}/portal/api/business-management/request-sac`, body);
    }
    setUpdateRequestCustomerBySac(body) {
      return this.httpClient.post(`${this.apiBaseURL}/portal/api/business-management/updateRequestCustomerBySac`, {
        data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
      });
    }
    setCustomerByApprovalRequest(body) {
      return this.httpClient.post(`${this.apiBaseURL}/portal/api/business-management/customer/save-or-update`, {
        data: this.aesEncryptionUtilService.encrypt(JSON.stringify(body))
      });
    }
    getInfoCustomerApprovedChangeRequest() {
      return this.httpClient.get(`${this.apiBaseURL}/portal/api/business-management/request-approved`);
    }
  }
  SacRequestService.ɵfac = function SacRequestService_Factory(t) {
    return new (t || SacRequestService)(core/* ɵɵinject */.LFG(http/* HttpClient */.eN), core/* ɵɵinject */.LFG(AESEncryptionUtil_service/* AESEncryptionUtilService */.D));
  };
  SacRequestService.ɵprov = /*@__PURE__*/core/* ɵɵdefineInjectable */.Yz7({
    token: SacRequestService,
    factory: SacRequestService.ɵfac,
    providedIn: 'root'
  });
  return SacRequestService;
})();
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/button.mjs
var fesm2020_button = __webpack_require__(4859);
;// CONCATENATED MODULE: ./src/app/modules/sac-request-management/components/sac-request-changes-approved/sac-request-changes-approved.component.ts














function SacRequestChangesApprovedComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 29);
    core/* ɵɵtext */._uU(1, " Solicitud ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestChangesApprovedComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r19.requestNumber);
  }
}
function SacRequestChangesApprovedComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 29);
    core/* ɵɵtext */._uU(1, " Fecha Hora Solicitud ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestChangesApprovedComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r20.requestDateTime);
  }
}
function SacRequestChangesApprovedComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 29);
    core/* ɵɵtext */._uU(1, " NIT ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestChangesApprovedComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r21.nit);
  }
}
function SacRequestChangesApprovedComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 29);
    core/* ɵɵtext */._uU(1, " Nombre ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestChangesApprovedComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r22.updatedCompany);
  }
}
function SacRequestChangesApprovedComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 29);
    core/* ɵɵtext */._uU(1, " Campo a Modificar ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestChangesApprovedComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r23.fieldChanges);
  }
}
function SacRequestChangesApprovedComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 29);
    core/* ɵɵtext */._uU(1, " Valor a Aplicar ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestChangesApprovedComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r24.newValue);
  }
}
function SacRequestChangesApprovedComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 29);
    core/* ɵɵtext */._uU(1, " Analista SAC ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestChangesApprovedComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r25.sacAnalyst);
  }
}
function SacRequestChangesApprovedComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 29);
    core/* ɵɵtext */._uU(1, " Fecha Hora Aprobaci\u00F3n ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestChangesApprovedComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r26.lastUpdateTime);
  }
}
function SacRequestChangesApprovedComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 31);
  }
}
function SacRequestChangesApprovedComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "tr", 32);
    core/* ɵɵlistener */.NdJ("click", function SacRequestChangesApprovedComponent_tr_48_Template_tr_click_0_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r29);
      const row_r27 = restoredCtx.$implicit;
      const ctx_r28 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r28.selectRow(row_r27));
    });
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const row_r27 = ctx.$implicit;
    const ctx_r18 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵclassProp */.ekj("selected-row", ctx_r18.selectedRow === row_r27);
  }
}
let SacRequestChangesApprovedComponent = /*#__PURE__*/(() => {
  class SacRequestChangesApprovedComponent {
    constructor(sacRequestService, store, matSnackBar, aesEncryptionUtilService) {
      this.sacRequestService = sacRequestService;
      this.store = store;
      this.matSnackBar = matSnackBar;
      this.aesEncryptionUtilService = aesEncryptionUtilService;
      this.selectedRow = null; // Almacena la fila seleccionada
      this.destroy$ = new Subject/* Subject */.x();
      this.errorMessage = '';
      this.displayedColumns = ['requestNumber', 'requestDateTime', 'nit', 'fieldChanges', 'newValue', 'sacAnalyst', 'lastUpdateTime'];
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.resultRequest = [];
      this.resultRequestForDataSource = null;
    }
    ngOnInit() {
      this.getInfoCustomerApprovedChangeRequest();
    }
    getInfoCustomerApprovedChangeRequest() {
      this.sacRequestService.getInfoCustomerApprovedChangeRequest().pipe((0,takeUntil/* takeUntil */.R)(this.destroy$), (0,catchError/* catchError */.K)(error => {
        this.matSnackBar.open(" module.sac.request.management.tab.request.approved", '', {
          verticalPosition: 'top',
          panelClass: ['error-snackbar'],
          duration: 5000
        });
        return (0,of.of)('');
      })).subscribe(result => {
        this.resultRequest = JSON.parse(this.aesEncryptionUtilService.decrypt(result));
        this.resultRequest = this.getAllPropertiesForTable(this.resultRequest);
        this.resultRequestForDataSource = this.getAllPropertiesForDataSource(this.resultRequest);
        this.dataSource = new table/* MatTableDataSource */.by(this.resultRequestForDataSource);
        this.dataSource.sort = this.sort;
      });
    }
    getAllPropertiesForTable(request) {
      request = this.getDataByRequestFlow(request);
      request.forEach(request => {
        request.updatedClientProperties = this.transformDataToArray(request.requestInfo);
        request.updatedClientProperties = this.transformKeys(request.updatedClientProperties);
        if (request.updatedCompany == '') {
          const razonSocial = request.updatedClientProperties.find(item => item.key === app_constants/* FIELD_RAZON_SOCIAL */.h)?.value;
          request.updatedCompany = razonSocial ? razonSocial : '';
        }
      });
      return request;
    }
    getDataByRequestFlow(response) {
      response.forEach(request => {
        if (request.requestFlow != null && request.requestFlow) {
          const parsedObject = JSON.parse(request.requestFlow);
          if (parsedObject.length > 0) {
            const lastItem = parsedObject[parsedObject.length - 1];
            request.sacAnalyst = lastItem.user;
            request.lastUpdateTime = lastItem.date;
          }
        }
      });
      return response;
    }
    transformDataToArray(jsonString) {
      const parsedObject = JSON.parse(jsonString);
      const resultArray = [];
      for (const key in parsedObject) {
        if (parsedObject.hasOwnProperty(key)) {
          // Extraemos el valor de 'new' si esta presente
          const newValue = parsedObject[key].new;
          if (newValue !== null && newValue !== undefined) {
            resultArray.push({
              key: key,
              value: newValue.toString()
            });
          }
        }
      }
      return resultArray;
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
    getAllPropertiesForDataSource(request) {
      let transformedData = [];
      request.forEach(item => {
        item.updatedClientProperties.forEach(property => {
          let row = {
            requestNumber: item.requestNumber,
            requestDateTime: item.requestDateTime.slice(0, 16),
            nit: item.nit,
            updatedCompany: item.updatedCompany,
            fieldChanges: property.key,
            newValue: property.value,
            sacAnalyst: item.sacAnalyst,
            lastUpdateTime: (0,utils/* formatDateTime */.o0)(item.lastUpdateTime)
          };
          transformedData.push(row);
        });
      });
      return transformedData;
    }
    selectRow(row) {
      if (this.selectedRow === row) {
        this.selectedRow = null;
      } else {
        this.selectedRow = row;
      }
    }
    exportAsExcel() {
      let Heading = [['Solicitud', 'Fecha Hora Solicitud', 'NIT', 'Nombre', 'Campo', 'Valor']];
      // Creamos el libro de trabajo (workbook)
      const wb = xlsx/* utils.book_new */.P6.book_new();
      const ws = xlsx/* utils.json_to_sheet */.P6.json_to_sheet([]);
      // Agrego el encabezado
      xlsx/* utils.sheet_add_aoa */.P6.sheet_add_aoa(ws, Heading);
      let jsonArrayObject;
      if (this.selectedRow) {
        const filteredData = this.dataSource.data.filter(item => item.requestNumber === this.selectedRow.requestNumber);
        jsonArrayObject = filteredData.map(item => ({
          Solicitud: item.requestNumber,
          Fecha_Hora_Solicitud: item.requestDateTime,
          NIT: item.nit,
          Nombre: item.updatedCompany,
          Campo: item.fieldChanges,
          Valor: item.newValue
        }));
      } else {
        jsonArrayObject = this.dataSource.data.map(item => ({
          Solicitud: item.requestNumber,
          Fecha_Hora_Solicitud: item.requestDateTime,
          NIT: item.nit,
          Nombre: item.updatedCompany,
          Campo: item.fieldChanges,
          Valor: item.newValue
        }));
      }
      // agrego datos, comenzando desde la segunda fila
      xlsx/* utils.sheet_add_json */.P6.sheet_add_json(ws, jsonArrayObject, {
        origin: 'A2',
        skipHeader: true
      });
      // Ajustar el ancho de las columnas segun el contenido mas largo
      ws['!cols'] = [{
        wch: Math.max(...jsonArrayObject.map(item => item.Solicitud.length), 'Solicitud'.length)
      }, {
        wch: Math.max(...jsonArrayObject.map(item => item.Fecha_Hora_Solicitud.length), 'Fecha Hora Solicitud'.length)
      }, {
        wch: Math.max(...jsonArrayObject.map(item => item.NIT.length), 'NIT'.length)
      }, {
        wch: Math.max(...jsonArrayObject.map(item => item.Nombre.length), 'Nombre'.length)
      }, {
        wch: Math.max(...jsonArrayObject.map(item => item.Campo.length), 'Campo'.length)
      }, {
        wch: Math.max(...jsonArrayObject.map(item => item.Valor.length), 'Valor'.length)
      }];
      xlsx/* utils.book_append_sheet */.P6.book_append_sheet(wb, ws, 'Reporte cliente a actualizar');
      (0,xlsx/* writeFile */.NC)(wb, 'Reporte cliente a actualizar.xlsx');
    }
  }
  SacRequestChangesApprovedComponent.ɵfac = function SacRequestChangesApprovedComponent_Factory(t) {
    return new (t || SacRequestChangesApprovedComponent)(core/* ɵɵdirectiveInject */.Y36(SacRequestService), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(AESEncryptionUtil_service/* AESEncryptionUtilService */.D));
  };
  SacRequestChangesApprovedComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: SacRequestChangesApprovedComponent,
    selectors: [["app-sac-request-changes-approved"]],
    viewQuery: function SacRequestChangesApprovedComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
      }
    },
    decls: 60,
    vars: 3,
    consts: [[1, "content"], [1, "title-card"], [1, "card-title"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 83.36 1.91", 1, "welcome__line"], ["id", "Capa_1-2"], ["width", "31.37", "height", "1.91", 1, "cls-2"], ["x", "26.13", "width", "28.61", "height", "1.91", 1, "cls-3"], ["x", "54.74", "width", "28.61", "height", "1.91", 1, "cls-1"], [1, "container--request-approved"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "requestNumber"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "requestDateTime"], ["matColumnDef", "nit"], ["matColumnDef", "updatedCompany"], ["matColumnDef", "fieldChanges"], ["matColumnDef", "newValue"], ["matColumnDef", "sacAnalyst"], ["matColumnDef", "lastUpdateTime"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "selected-row", "click", 4, "matRowDef", "matRowDefColumns"], [1, "container--action"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 26.45 28.46", 1, "sac-request__field-button-icon"], ["d", "M0,21.24v6.23c0,.54.44.99.99.99h24.48c.54,0,.99-.44.99-.99v-6.23c0-.54-.44-.99-.99-.99h-2.41c-.54,0-.99.44-.99.99v2.83H4.38v-2.83c0-.54-.44-.99-.99-.99H.99c-.54,0-.99.44-.99.99ZM1.19,21.45h2v3.22c0,.33.27.6.6.6h18.88c.33,0,.6-.27.6-.6v-3.22h2v5.82H1.19v-5.82Z", 1, "import"], ["d", "M9.44,4.16h7.56c.58,0,1.05-.47,1.05-1.05V1.05c0-.58-.47-1.05-1.05-1.05h-7.56c-.58,0-1.05.47-1.05,1.05v2.05c0,.58.47,1.05,1.05,1.05ZM9.58,1.19h7.28v1.77h-7.28v-1.77Z", 1, "import"], ["d", "M8.33,9.81h-3.86c-.64,0-1.19.31-1.41.78-.17.38-.11.8.17,1.12l4.38,5.13h0l4.38,5.13c.28.33.73.52,1.24.52h0c.51,0,.96-.19,1.24-.52l8.75-10.26c.28-.33.34-.75.17-1.12-.22-.47-.77-.78-1.41-.78h-3.99v-3.64c0-.54-.44-.99-.99-.99h-7.68c-.54,0-.99.44-.99.99v3.64ZM8.93,11.01c.33,0,.6-.27.6-.6v-4.03h7.27v4.03c0,.33.27.6.6.6h4.59c.1,0,.19.02.24.04l-8.66,10.15s-.16.1-.33.1h0c-.17,0-.3-.06-.33-.1l-4.38-5.13h0l-4.29-5.03c.06-.02.14-.04.24-.04h4.46Z", 1, "import"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]],
    template: function SacRequestChangesApprovedComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        core/* ɵɵtext */._uU(3, "Reporte de cambios a realizar en SAP");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(4, "svg", 3)(5, "defs")(6, "style");
        core/* ɵɵtext */._uU(7, ".cls-1{fill:#c5c6c8;}.cls-2{fill:#7ba052;}.cls-3{fill:#4b8051;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(8, "g", 4);
        core/* ɵɵelement */._UZ(9, "rect", 5)(10, "rect", 6)(11, "rect", 7);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementStart */.TgZ(12, "div", 8)(13, "table", 9, 10);
        core/* ɵɵelementContainerStart */.ynx(15, 11);
        core/* ɵɵtemplate */.YNc(16, SacRequestChangesApprovedComponent_th_16_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(17, SacRequestChangesApprovedComponent_td_17_Template, 2, 1, "td", 13);
        core/* ɵɵtext */._uU(18, "> ");
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(19, 14);
        core/* ɵɵtemplate */.YNc(20, SacRequestChangesApprovedComponent_th_20_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(21, SacRequestChangesApprovedComponent_td_21_Template, 2, 1, "td", 13);
        core/* ɵɵtext */._uU(22, "> ");
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(23, 15);
        core/* ɵɵtemplate */.YNc(24, SacRequestChangesApprovedComponent_th_24_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(25, SacRequestChangesApprovedComponent_td_25_Template, 2, 1, "td", 13);
        core/* ɵɵtext */._uU(26, "> ");
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(27, 16);
        core/* ɵɵtemplate */.YNc(28, SacRequestChangesApprovedComponent_th_28_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(29, SacRequestChangesApprovedComponent_td_29_Template, 2, 1, "td", 13);
        core/* ɵɵtext */._uU(30, "> ");
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(31, 17);
        core/* ɵɵtemplate */.YNc(32, SacRequestChangesApprovedComponent_th_32_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(33, SacRequestChangesApprovedComponent_td_33_Template, 2, 1, "td", 13);
        core/* ɵɵtext */._uU(34, "> ");
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(35, 18);
        core/* ɵɵtemplate */.YNc(36, SacRequestChangesApprovedComponent_th_36_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(37, SacRequestChangesApprovedComponent_td_37_Template, 2, 1, "td", 13);
        core/* ɵɵtext */._uU(38, "> ");
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(39, 19);
        core/* ɵɵtemplate */.YNc(40, SacRequestChangesApprovedComponent_th_40_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(41, SacRequestChangesApprovedComponent_td_41_Template, 2, 1, "td", 13);
        core/* ɵɵtext */._uU(42, "> ");
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(43, 20);
        core/* ɵɵtemplate */.YNc(44, SacRequestChangesApprovedComponent_th_44_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(45, SacRequestChangesApprovedComponent_td_45_Template, 2, 1, "td", 13);
        core/* ɵɵtext */._uU(46, "> ");
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(47, SacRequestChangesApprovedComponent_tr_47_Template, 1, 0, "tr", 21);
        core/* ɵɵtemplate */.YNc(48, SacRequestChangesApprovedComponent_tr_48_Template, 1, 2, "tr", 22);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(49, "div", 23)(50, "button", 24);
        core/* ɵɵlistener */.NdJ("click", function SacRequestChangesApprovedComponent_Template_button_click_50_listener() {
          return ctx.exportAsExcel();
        });
        core/* ɵɵtext */._uU(51, " Descargar ");
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(52, "svg", 25)(53, "defs")(54, "style");
        core/* ɵɵtext */._uU(55, ".import{fill:#f5f5f5;stroke-width:0px;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(56, "g", 4);
        core/* ɵɵelement */._UZ(57, "path", 26)(58, "path", 27)(59, "path", 28);
        core/* ɵɵelementEnd */.qZA()()()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(13);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.dataSource);
        core/* ɵɵadvance */.xp6(34);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [fesm2020_button/* MatButton */.lW, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, sort/* MatSort */.YE, sort/* MatSortHeader */.nU],
    styles: [".container[_ngcontent-%COMP%]{padding:0rem}.title-card[_ngcontent-%COMP%]{width:max-content;margin-bottom:2rem;margin:1rem 0 2rem 2rem}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.container--request-approved[_ngcontent-%COMP%]{margin:3rem!important;max-height:70vh;overflow-y:auto;display:block}.mdc-data-table__header-cell[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}.container--action[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;padding-right:4rem;padding-bottom:2rem}.sac-request__field-button-icon[_ngcontent-%COMP%]{width:1.5rem}.selected-row[_ngcontent-%COMP%]{background-color:#b4ee9f!important}"]
  });
  return SacRequestChangesApprovedComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/sac-request-management/components/sac-request-management/sac-request-management.component.ts













function SacRequestManagementComponent_mat_tab_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 7)(1, "g", 8);
    core/* ɵɵelement */._UZ(2, "path", 9)(3, "path", 10)(4, "path", 11)(5, "path", 12)(6, "path", 13)(7, "path", 14)(8, "path", 15);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(9, "span");
    core/* ɵɵi18n */.SDv(10, 16);
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementComponent_mat_tab_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-sac-request-management-filter");
  }
}
function SacRequestManagementComponent_mat_tab_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, SacRequestManagementComponent_mat_tab_5_ng_template_1_Template, 11, 0, "ng-template", 5);
    core/* ɵɵtemplate */.YNc(2, SacRequestManagementComponent_mat_tab_5_ng_template_2_Template, 1, 0, "ng-template", 6);
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementComponent_mat_tab_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 7)(1, "g", 8);
    core/* ɵɵelement */._UZ(2, "path", 17)(3, "path", 18)(4, "path", 19)(5, "path", 20)(6, "path", 21)(7, "path", 22)(8, "path", 23);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(9, "span");
    core/* ɵɵi18n */.SDv(10, 24);
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementComponent_mat_tab_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, SacRequestManagementComponent_mat_tab_6_ng_template_1_Template, 11, 0, "ng-template", 5);
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 25);
    core/* ɵɵelement */._UZ(1, "router-outlet");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 26);
    core/* ɵɵelement */._UZ(1, "app-sac-request-changes-approved");
    core/* ɵɵelementEnd */.qZA();
  }
}
const _c4 = function (a0, a1) {
  return {
    "sac-request-management": a0,
    "": a1
  };
};
const _c5 = function (a0, a1) {
  return {
    "main-panel": a0,
    "": a1
  };
};
const _c6 = function (a0) {
  return [a0];
};
let SacRequestManagementComponent = /*#__PURE__*/(() => {
  class SacRequestManagementComponent {
    constructor(aesEncryptionUtilService, store) {
      this.aesEncryptionUtilService = aesEncryptionUtilService;
      this.store = store;
      this.privileges = privileges_enum/* privileges */.U;
      this.destroy$ = new Subject/* Subject */.x();
      this.isFirstTabSelected = true;
      this.havePermissionTabGS_CON_SOL = false;
      this.tabIndexes = {
        firstTab: 0,
        secondTab: 1
      };
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: APIGatewatStore => {
          this.userInfo = APIGatewatStore;
          this.havePermissionTabGS_CON_SOL = this.userInfo.privileges.filter(value => value.privilegeId === "GS_CON_SOL").length > 0;
        },
        error: error => console.error(error)
      });
    }
    onTabChange(event) {
      // Verificar cuál tab está seleccionado y asignar el índice fijo correspondiente
      if (event.index === this.getLogicalTabIndex('firstTab') && this.userInfo.privileges.filter(value => value.privilegeId === "GS_CON_SOL").length > 0) {
        this.isFirstTabSelected = true;
      } else if (event.index === this.getLogicalTabIndex('secondTab')) {
        this.isFirstTabSelected = false;
      }
    }
    // Función que retorna el índice lógico asignado a cada tab
    getLogicalTabIndex(tabName) {
      return this.tabIndexes[tabName];
    }
  }
  SacRequestManagementComponent.ɵfac = function SacRequestManagementComponent_Factory(t) {
    return new (t || SacRequestManagementComponent)(core/* ɵɵdirectiveInject */.Y36(AESEncryptionUtil_service/* AESEncryptionUtilService */.D), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh));
  };
  SacRequestManagementComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: SacRequestManagementComponent,
    selectors: [["app-sac-request-management"]],
    decls: 9,
    vars: 16,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym5$$SRC_APP_MODULES_SAC_REQUEST_MANAGEMENT_COMPONENTS_SAC_REQUEST_MANAGEMENT_SAC_REQUEST_MANAGEMENT_COMPONENT_TS___1 = goog.getMsg(" module.sac.request.management.tab.request ");
        i18n_0 = MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym5$$SRC_APP_MODULES_SAC_REQUEST_MANAGEMENT_COMPONENTS_SAC_REQUEST_MANAGEMENT_SAC_REQUEST_MANAGEMENT_COMPONENT_TS___1;
      } else {
        i18n_0 = " module.sac.request.management.tab.request ";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_73c9e2a4f62d091ab726c4d85a132d9fe0b8c3a212jkG9c7acc9f4e8b0324Lm6$$SRC_APP_MODULES_SAC_REQUEST_MANAGEMENT_COMPONENTS_SAC_REQUEST_MANAGEMENT_SAC_REQUEST_MANAGEMENT_COMPONENT_TS___3 = goog.getMsg(" module.sac.request.management.tab.request.approved ");
        i18n_2 = MSG_EXTERNAL_73c9e2a4f62d091ab726c4d85a132d9fe0b8c3a212jkG9c7acc9f4e8b0324Lm6$$SRC_APP_MODULES_SAC_REQUEST_MANAGEMENT_COMPONENTS_SAC_REQUEST_MANAGEMENT_SAC_REQUEST_MANAGEMENT_COMPONENT_TS___3;
      } else {
        i18n_2 = " module.sac.request.management.tab.request.approved ";
      }
      return [[3, "ngClass"], ["mat-stretch-tabs", "false", "mat-align-tabs", "start", 3, "selectedTabChange"], [4, "permissions"], ["class", "secondary-panel", 4, "ngIf"], ["class", "full-screen-panel", 4, "ngIf"], ["mat-tab-label", ""], ["matTabContent", "", "class", "form__customer"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 1, "sac-request-management__tab-icon"], ["transform", "translate(0.000000,512.000000) scale(0.100000,-0.100000)", "fill", "#000000", "stroke", "none"], ["d", "M2300 4945 c-387 -42 -745 -173 -1070 -390 -69 -45 -160 -113 -202 -149 -43 -36 -81 -66 -85 -66 -4 0 -57 50 -118 110 -122 120 -142 129 -189 88 -22 -20 -41 -85 -152 -528 -69 -278 -126 -520 -126 -538 0 -39 13 -57 51 -70 23 -8 121 13 547 119 457 114 522 132 542 155 42 47 32 67 -95 196 l-118 120 50 45 c128 115 410 274 596 337 182 61 433 106 597 106 53 0 67 4 87 25 16 15 25 36 25 55 0 19 -9 40 -25 55 -21 21 -33 25 -88 25 -335 0 -737 -116 -1043 -300 -151 -92 -353 -254 -382 -308 -22 -40 -6 -71 89 -168 50 -51 87 -94 82 -96 -20 -12 -714 -180 -720 -175 -5 6 163 700 175 720 2 5 44 -30 92 -77 122 -120 114 -121 307 42 242 205 555 368 859 447 204 53 331 69 569 69 236 0 345 -12 540 -60 785 -195 1409 -801 1621 -1574 57 -207 75 -338 80 -580 l4 -215 26 -22 c32 -29 66 -29 101 1 27 23 27 26 31 154 24 761 -340 1515 -953 1975 -496 372 -1098 539 -1705 472z"], ["d", "M2843 4630 c-47 -19 -57 -87 -18 -125 61 -62 160 7 129 90 -7 17 -55 45 -76 44 -7 0 -23 -4 -35 -9z"], ["d", "M2250 3655 c-186 -25 -337 -67 -452 -127 -93 -48 -171 -126 -188 -187 -7 -28 -10 -136 -8 -324 3 -314 2 -309 76 -383 155 -154 551 -248 972 -231 458 19 792 146 856 325 17 47 19 557 3 616 -6 23 -31 60 -61 92 -88 93 -257 164 -488 206 -151 27 -551 34 -710 13z m660 -164 c258 -45 450 -135 450 -211 0 -51 -112 -123 -265 -170 -256 -78 -658 -90 -946 -29 -162 35 -164 35 -193 6 -31 -31 -34 -75 -8 -106 34 -43 274 -88 522 -98 320 -12 678 48 848 142 l42 24 0 -134 c0 -129 -1 -134 -26 -164 -53 -63 -240 -132 -449 -167 -154 -26 -496 -26 -650 0 -209 35 -396 104 -449 167 l-26 31 0 258 0 258 24 30 c66 77 292 152 552 182 129 14 442 4 574 -19z"], ["d", "M194 2776 c-27 -23 -28 -27 -32 -151 -14 -405 91 -843 288 -1205 240 -441 597 -783 1052 -1010 678 -337 1470 -332 2148 13 139 70 337 201 442 291 43 36 81 66 85 66 4 0 57 -50 118 -110 122 -120 142 -129 189 -87 23 19 41 84 155 542 116 466 128 522 117 549 -26 65 -19 66 -591 -76 -456 -113 -523 -132 -543 -154 -42 -47 -32 -67 96 -196 l117 -120 -50 -45 c-138 -123 -419 -280 -625 -347 -176 -57 -407 -96 -572 -96 -49 0 -63 -4 -83 -25 -16 -15 -25 -36 -25 -55 0 -19 9 -40 25 -55 21 -21 33 -25 88 -25 100 0 260 18 392 45 327 66 664 231 925 454 103 89 125 119 115 159 -3 14 -47 67 -96 118 -50 51 -87 94 -82 96 20 12 714 180 720 175 5 -6 -163 -700 -175 -720 -2 -5 -44 30 -92 77 -122 119 -114 120 -304 -40 -255 -216 -560 -372 -886 -454 -199 -50 -323 -65 -555 -64 -238 0 -346 13 -565 70 -701 182 -1277 706 -1533 1394 -88 237 -127 455 -133 750 -5 215 -5 215 -30 238 -32 28 -66 28 -100 -2z"], ["d", "M1623 2454 c-24 -24 -25 -30 -21 -112 5 -98 18 -129 76 -188 204 -202 820 -293 1317 -193 208 42 356 106 446 194 59 57 72 88 77 187 4 82 3 88 -21 112 -34 34 -79 34 -112 1 -21 -21 -25 -33 -25 -89 0 -82 -23 -112 -123 -160 -177 -85 -377 -121 -677 -121 -300 0 -500 36 -677 121 -100 48 -123 78 -123 160 0 56 -4 68 -25 89 -33 33 -78 33 -112 -1z"], ["d", "M1623 1974 c-24 -24 -25 -30 -21 -112 5 -98 18 -129 76 -188 204 -202 820 -293 1317 -193 208 42 356 106 446 194 59 57 72 88 77 187 4 82 3 88 -21 112 -34 34 -79 34 -112 1 -21 -21 -25 -33 -25 -89 0 -82 -23 -112 -123 -160 -177 -85 -377 -121 -677 -121 -300 0 -500 36 -677 121 -100 48 -123 78 -123 160 0 56 -4 68 -25 89 -33 33 -78 33 -112 -1z"], ["d", "M2205 628 c-51 -27 -60 -84 -20 -123 62 -63 161 6 129 90 -7 17 -54 45 -76 45 -7 0 -22 -6 -33 -12z"], i18n_0, ["d", "M1922 4947 c-44 -14 -115 -78 -138 -124 -17 -34 -20 -70 -24 -313 l-5 -275 -84 -8 c-204 -18 -410 -79 -601 -178 -160 -83 -286 -175 -415 -304 -256 -256 -411 -560 -477 -935 -19 -109 -16 -411 6 -527 19 -103 63 -260 96 -343 41 -103 130 -265 198 -360 86 -122 261 -296 382 -382 241 -171 533 -280 816 -306 l79 -7 5 -275 c4 -243 7 -279 24 -313 24 -49 95 -110 144 -125 58 -17 2807 -17 2866 0 55 16 138 99 154 154 9 32 12 465 12 1875 l0 1834 -463 462 -462 463 -1040 -1 c-698 -1 -1051 -5 -1073 -12z m1998 -483 c0 -235 4 -349 12 -378 16 -55 99 -138 154 -154 29 -8 143 -12 378 -12 l336 0 0 -1775 0 -1776 -25 -24 -24 -25 -1391 0 -1391 0 -25 25 -24 24 2 258 3 258 85 7 c183 15 401 78 579 168 512 256 855 750 921 1325 17 152 14 202 -15 230 l-24 25 -776 0 -775 0 0 1055 0 1056 25 24 24 25 976 0 975 0 0 -336z m465 -84 l300 -300 -278 0 -278 0 -24 25 -25 24 0 276 c0 151 1 275 3 275 1 0 137 -135 302 -300z m-2625 -1043 l0 -742 -525 -525 -525 -525 -30 35 c-155 180 -276 433 -331 690 -30 139 -33 418 -6 555 65 329 212 603 443 826 250 240 577 392 909 422 22 2 46 4 53 5 9 2 12 -152 12 -741z m1595 -909 c-25 -212 -70 -369 -156 -543 -147 -299 -385 -537 -684 -684 -235 -116 -408 -156 -680 -155 -199 0 -306 17 -479 75 -163 54 -387 181 -495 280 l-34 31 524 524 524 524 743 0 743 0 -6 -52z"], ["d", "M2105 4535 l-25 -24 0 -831 0 -831 25 -24 24 -25 831 0 831 0 26 26 c26 26 26 27 19 138 -18 315 -108 588 -279 846 -276 416 -719 684 -1219 739 -159 18 -205 15 -233 -14z m325 -162 c277 -45 554 -185 766 -386 279 -264 439 -590 478 -974 l5 -53 -719 0 -720 0 0 720 0 720 48 -6 c26 -3 90 -12 142 -21z"], ["d", "M4000 3520 l0 -80 320 0 320 0 0 80 0 80 -320 0 -320 0 0 -80z"], ["d", "M4000 3040 l0 -80 320 0 320 0 0 80 0 80 -320 0 -320 0 0 -80z"], ["d", "M4000 2560 l0 -80 320 0 320 0 0 80 0 80 -320 0 -320 0 0 -80z"], ["d", "M3780 1906 c-155 -34 -256 -89 -370 -205 -67 -67 -95 -105 -128 -171 -62 -125 -77 -192 -76 -340 1 -107 5 -137 27 -205 38 -115 90 -199 182 -290 93 -93 160 -135 282 -178 80 -28 100 -31 213 -31 148 -1 216 14 338 76 251 125 409 405 389 689 -13 177 -81 323 -212 454 -139 139 -283 203 -475 210 -67 3 -128 -1 -170 -9z m321 -178 c149 -55 254 -147 319 -282 151 -314 -3 -668 -340 -782 -81 -28 -254 -25 -334 4 -179 65 -301 191 -362 372 -14 40 -19 84 -19 160 0 158 50 282 156 390 80 81 180 136 294 161 70 15 213 3 286 -23z"], ["d", "M3968 1283 l-208 -208 -88 88 c-48 48 -92 87 -98 87 -13 0 -104 -93 -104 -106 0 -5 58 -67 128 -137 114 -112 133 -127 162 -127 31 0 56 22 282 247 136 136 248 252 248 258 0 13 -92 105 -105 105 -6 0 -103 -93 -217 -207z"], i18n_2, [1, "secondary-panel"], [1, "full-screen-panel"]];
    },
    template: function SacRequestManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "div", 0)(2, "mat-card")(3, "mat-card-content")(4, "mat-tab-group", 1);
        core/* ɵɵlistener */.NdJ("selectedTabChange", function SacRequestManagementComponent_Template_mat_tab_group_selectedTabChange_4_listener($event) {
          return ctx.onTabChange($event);
        });
        core/* ɵɵtemplate */.YNc(5, SacRequestManagementComponent_mat_tab_5_Template, 3, 0, "mat-tab", 2);
        core/* ɵɵtemplate */.YNc(6, SacRequestManagementComponent_mat_tab_6_Template, 2, 0, "mat-tab", 2);
        core/* ɵɵelementEnd */.qZA()()()();
        core/* ɵɵtemplate */.YNc(7, SacRequestManagementComponent_div_7_Template, 2, 0, "div", 3);
        core/* ɵɵtemplate */.YNc(8, SacRequestManagementComponent_div_8_Template, 2, 0, "div", 4);
        core/* ɵɵelementEnd */.qZA();
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngClass", core/* ɵɵpureFunction2 */.WLB(6, _c4, ctx.isFirstTabSelected && ctx.havePermissionTabGS_CON_SOL, !ctx.isFirstTabSelected));
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngClass", core/* ɵɵpureFunction2 */.WLB(9, _c5, ctx.isFirstTabSelected, !ctx.isFirstTabSelected));
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(12, _c6, ctx.privileges.GS_CON_SOL));
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(14, _c6, ctx.privileges.GS_CON_CAMB));
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.isFirstTabSelected && ctx.havePermissionTabGS_CON_SOL);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", !(ctx.isFirstTabSelected && ctx.havePermissionTabGS_CON_SOL));
      }
    },
    dependencies: [common/* NgClass */.mk, common/* NgIf */.O5, router/* RouterOutlet */.lC, tabs/* MatTabContent */.Vc, tabs/* MatTabLabel */.uD, tabs/* MatTab */.uX, tabs/* MatTabGroup */.SP, card/* MatCard */.a8, card/* MatCardContent */.dn, permissions_directive/* PermissionsDirective */.$, SacRequestManagementFilterComponent, SacRequestChangesApprovedComponent],
    styles: [".sac-request-management[_ngcontent-%COMP%]{height:100vh;padding-left:1rem;display:grid;grid-template-columns:.5fr 1.4fr;grid-template-rows:1fr}.sac-request-management__tab-icon[_ngcontent-%COMP%]{width:1.3rem}.sac-request-management__tab-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{width:1.5rem;fill:#0009}.title[_ngcontent-%COMP%]{padding-top:1rem;color:#78909c}.header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.icon-title[_ngcontent-%COMP%]{width:1.5rem}.title-card[_ngcontent-%COMP%]{width:max-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.main-panel[_ngcontent-%COMP%], .secondary-panel[_ngcontent-%COMP%]{overflow-y:scroll;overflow-x:hidden!important}.secondary-panel[_ngcontent-%COMP%]{padding:1rem}.secondary-panel__actions[_ngcontent-%COMP%]{padding-bottom:1rem;display:flex;justify-content:flex-start;align-items:center}.not-found[_ngcontent-%COMP%]{color:#78909c;font-size:1.3rem;text-align:center;padding:1rem}button[_ngcontent-%COMP%]{color:#fff}  .mdc-tab__text-label{flex-direction:column!important}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .sac-request-management__tab-icon path, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .sac-request-management__tab-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#66bb6a}.sac-request-management.tab-one-layout[_ngcontent-%COMP%]   .main-panel[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.sac-request-management.tab-two-layout[_ngcontent-%COMP%]   .full-screen-panel[_ngcontent-%COMP%]{width:100%;height:100vh}"]
  });
  return SacRequestManagementComponent;
})();
// EXTERNAL MODULE: ./node_modules/@angular/animations/fesm2020/animations.mjs
var animations = __webpack_require__(37340);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/dialog.mjs + 1 modules
var dialog = __webpack_require__(65412);
;// CONCATENATED MODULE: ./src/app/modules/sac-request-management/components/sac-request-update-modal/sac-request-update-modal.component.ts









function SacRequestUpdateModalComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r0.getErrorMessage(), " ");
  }
}
function SacRequestUpdateModalComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 12)(1, "p", 13);
    core/* ɵɵtext */._uU(2, " Enviar correo a ");
    core/* ɵɵelementStart */.TgZ(3, "a", 14);
    core/* ɵɵlistener */.NdJ("click", function SacRequestUpdateModalComponent_div_12_Template_a_click_3_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r3);
      const ctx_r2 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r2.sendEmail($event));
    });
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r1.emailToNotification);
  }
}
let SacRequestUpdateModalComponent = /*#__PURE__*/(() => {
  class SacRequestUpdateModalComponent {
    constructor(fb, dialogData, dialogRef) {
      this.fb = fb;
      this.dialogData = dialogData;
      this.dialogRef = dialogRef;
      this.justification = '';
      this.emailToNotification = '';
    }
    ngOnInit() {
      this.formulario = this.fb.group({
        justification: [this.dialogData.messageTojustification || '', [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.maxLength */.kI.maxLength(250)]]
      });
      this.emailToNotification = this.dialogData.request.contactEmail ? this.dialogData.request.contactEmail : '';
      this.dialogData.showLinkForSendEmail;
    }
    onCancel() {
      if (this.dialogRef) {
        this.dialogRef.close(null);
      }
    }
    onAccept() {
      if (this.formulario.valid) {
        this.formulario.get('justification')?.value;
        this.dialogRef.close(this.formulario.get('justification')?.value);
      } else {
        this.formulario.markAllAsTouched();
      }
    }
    getErrorMessage() {
      const justificationControl = this.formulario.get('justification');
      if (justificationControl?.hasError('required')) {
        return 'La justificación es requerida';
      }
      if (justificationControl?.hasError('maxlength')) {
        return 'La justificación no puede exceder los 250 caracteres';
      }
      return '';
    }
    sendEmail(event) {
      event.preventDefault();
      const subject = encodeURIComponent('Solicitud ' + this.dialogData.request.requestNumber);
      window.location.href = `mailto:${this.emailToNotification}?subject=${subject}`;
    }
  }
  SacRequestUpdateModalComponent.ɵfac = function SacRequestUpdateModalComponent_Factory(t) {
    return new (t || SacRequestUpdateModalComponent)(core/* ɵɵdirectiveInject */.Y36(fesm2020_forms/* FormBuilder */.qu), core/* ɵɵdirectiveInject */.Y36(dialog/* MAT_DIALOG_DATA */.WI), core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialogRef */.so));
  };
  SacRequestUpdateModalComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: SacRequestUpdateModalComponent,
    selectors: [["app-sac-request-update-modal"]],
    decls: 18,
    vars: 5,
    consts: [[1, "modal-container"], [1, "modal-header"], [1, "modal-content", 3, "formGroup", "ngSubmit"], [1, "justification-section"], ["matInput", "", "formControlName", "justification", 1, "mat-mdc-input-element", "ng-tns-c112-20", "mat-mdc-form-field-textarea-control", "mat-mdc-form-field-input-control", "mdc-text-field__input", "cdk-text-field-autofill-monitored", "ng-touched", "ng-dirty", "ng-invalid"], [4, "ngIf"], [1, "bottom-section"], [1, "char-count"], ["class", "email-section", 4, "ngIf"], [1, "modal-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "email-section"], [1, "email-info"], [3, "click"]],
    template: function SacRequestUpdateModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "div", 1);
        core/* ɵɵtext */._uU(2, " ATENCION ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(3, "form", 2);
        core/* ɵɵlistener */.NdJ("ngSubmit", function SacRequestUpdateModalComponent_Template_form_ngSubmit_3_listener() {
          return ctx.onAccept();
        });
        core/* ɵɵelementStart */.TgZ(4, "p");
        core/* ɵɵtext */._uU(5, "Ingrese la justificaci\u00F3n general para auditor\u00EDa de la solicitud:");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(6, "div", 3);
        core/* ɵɵelement */._UZ(7, "textarea", 4);
        core/* ɵɵtemplate */.YNc(8, SacRequestUpdateModalComponent_mat_error_8_Template, 2, 1, "mat-error", 5);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(9, "div", 6)(10, "mat-hint", 7);
        core/* ɵɵtext */._uU(11);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(12, SacRequestUpdateModalComponent_div_12_Template, 5, 1, "div", 8);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(13, "div", 9)(14, "button", 10);
        core/* ɵɵlistener */.NdJ("click", function SacRequestUpdateModalComponent_Template_button_click_14_listener() {
          return ctx.onCancel();
        });
        core/* ɵɵtext */._uU(15, "Cancelar");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(16, "button", 11);
        core/* ɵɵtext */._uU(17, "Aceptar");
        core/* ɵɵelementEnd */.qZA()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.formulario);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("ngIf", ((tmp_1_0 = ctx.formulario.get("justification")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.formulario.get("justification")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.formulario.get("justification")) == null ? null : tmp_1_0.touched)));
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵtextInterpolate1 */.hij("", ((tmp_2_0 = ctx.formulario.get("justification")) == null ? null : tmp_2_0.value == null ? null : tmp_2_0.value.length) || 0, "/250");
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.dialogData.showLinkForSendEmail);
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵproperty */.Q6J("disabled", ctx.formulario.invalid);
      }
    },
    dependencies: [common/* NgIf */.O5, fesm2020_button/* MatButton */.lW, form_field/* MatHint */.bx, form_field/* MatError */.TO, input/* MatInput */.Nt, fesm2020_forms/* ɵNgNoValidate */._Y, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* NgControlStatusGroup */.JL, fesm2020_forms/* FormGroupDirective */.sg, fesm2020_forms/* FormControlName */.u],
    styles: [".modal-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;overflow:hidden}.modal-header[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:16px;font-weight:700;text-align:center;font-size:1rem;justify-content:center;display:flex}.modal-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;overflow:hidden;padding:16px}.justification-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-grow:1;height:100%;width:100%}.justification-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:8px}.justification-section[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{flex-grow:1;width:100%;height:100%;background-color:#fff;box-sizing:border-box;border:1px solid #4CAF50;padding:8px;overflow:hidden;resize:none}.full-width[_ngcontent-%COMP%]{width:100%!important;flex-grow:1;display:flex;flex-direction:column}mat-form-field[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column}textarea[_ngcontent-%COMP%]{flex-grow:1;resize:none;overflow-y:auto}textarea[_ngcontent-%COMP%]{flex-grow:1;width:100%;height:100%;box-sizing:border-box;resize:none;overflow-y:auto}[_ngcontent-%COMP%]::nn   .mdc-notched-outline[_ngcontent-%COMP%]   .ng-tns-c112-20[_ngcontent-%COMP%]   .mdc-notched-outline--notched[_ngcontent-%COMP%]   .mdc-notched-outline--no-label[_ngcontent-%COMP%]   .ng-star-inserted[_ngcontent-%COMP%] > textarea[_ngcontent-%COMP%]{flex-grow:1;width:100%;height:100%;box-sizing:border-box;resize:none;overflow-y:auto}.bottom-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:8px}.char-count[_ngcontent-%COMP%]{margin-right:16px}.email-section[_ngcontent-%COMP%]{flex-shrink:0}.email-info[_ngcontent-%COMP%]{margin:0;font-size:.9em}.email-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#1976d2;text-decoration:underline;cursor:pointer}.email-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none}.modal-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:16px}.modal-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:8px}@media (max-height: 400px){.modal-header[_ngcontent-%COMP%], .modal-content[_ngcontent-%COMP%]{padding:8px}.justification-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:4px}.bottom-section[_ngcontent-%COMP%]{margin-top:4px}.modal-actions[_ngcontent-%COMP%]{margin-top:8px}}.mat-mdc-form-field-flex[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.mat-mdc-form-field-infix[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:stretch;width:100%}.mat-mdc-form-field-flex[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}.mat-mdc-form-field-infix[_ngcontent-%COMP%]{flex-grow:1;width:100%;display:flex;align-items:stretch}.mat-mdc-form-field-textarea-control[_ngcontent-%COMP%]{flex-grow:1;width:100%;height:100%;box-sizing:border-box;resize:none;overflow-y:auto}  .custom-form-field .mat-mdc-form-field-infix{flex-grow:1;display:flex;align-items:stretch}  .custom-form-field .mat-mdc-form-field-textarea-control{width:100%;height:100%;resize:none}"]
  });
  return SacRequestUpdateModalComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/sac-request-management/enum/request-status.enum.ts
var RequestStatus = /*#__PURE__*/(() => {
  (function (RequestStatus) {
    RequestStatus["Creada"] = "1Creada";
    RequestStatus["CambioAprobado"] = "1CambioAprobado";
    RequestStatus["Rechazada"] = "8Rechazada";
    RequestStatus["Aprobada"] = "9Aprobada";
  })(RequestStatus || (RequestStatus = {}));
  return RequestStatus;
})();
// EXTERNAL MODULE: ./src/app/shared/services/util.service.ts
var util_service = __webpack_require__(22203);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/icon.mjs
var icon = __webpack_require__(97392);
;// CONCATENATED MODULE: ./src/app/modules/sac-request-management/components/sac-request-management-result/sac-request-management-result.component.ts
























function SacRequestManagementResultComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 23);
    core/* ɵɵtext */._uU(1, "Solicitud");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementResultComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 24);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r24.requestNumber);
  }
}
function SacRequestManagementResultComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 23);
    core/* ɵɵtext */._uU(1, "Fecha Hora Solicitud");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementResultComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 24);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r25.requestDateTime);
  }
}
function SacRequestManagementResultComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 23);
    core/* ɵɵtext */._uU(1, "Empresa Solicitante");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementResultComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 24);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r26.requestingCompany);
  }
}
function SacRequestManagementResultComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 23);
    core/* ɵɵtext */._uU(1, "Empresa Actualizada");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementResultComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 24);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r27.updatedCompany);
  }
}
function SacRequestManagementResultComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 23);
    core/* ɵɵtext */._uU(1, "Analista SAC ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementResultComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 24);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r28.sacAnalyst);
  }
}
function SacRequestManagementResultComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 23);
    core/* ɵɵtext */._uU(1, "Fecha Hora actualizaci\u00F3n");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementResultComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 24);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "date");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind3 */.Dn7(2, 1, element_r29.lastUpdateDateTime, "yyyy-MM-dd HH:mm:ss", "UTC"));
  }
}
function SacRequestManagementResultComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 23);
    core/* ɵɵtext */._uU(1, "Estado");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementResultComponent_td_31_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 27)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".sync-1{fill:#777677;stroke-width:0px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 28);
    core/* ɵɵelement */._UZ(6, "path", 29)(7, "path", 30);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
}
function SacRequestManagementResultComponent_td_31_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 31)(2, "g", 32);
    core/* ɵɵelement */._UZ(3, "path", 33)(4, "path", 34)(5, "path", 35)(6, "path", 36)(7, "path", 37)(8, "path", 38)(9, "path", 39)(10, "path", 40)(11, "path", 41)(12, "path", 42);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
}
function SacRequestManagementResultComponent_td_31_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 43)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".cancel-1{fill:#333;stroke-width:0px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 28);
    core/* ɵɵelement */._UZ(6, "path", 44)(7, "path", 45);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
}
function SacRequestManagementResultComponent_td_31_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 46)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".simple-check-1{fill:#333;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 28);
    core/* ɵɵelement */._UZ(6, "path", 47);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
}
function SacRequestManagementResultComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 24)(1, "div", 25);
    core/* ɵɵtemplate */.YNc(2, SacRequestManagementResultComponent_td_31_ng_container_2_Template, 8, 0, "ng-container", 26);
    core/* ɵɵtemplate */.YNc(3, SacRequestManagementResultComponent_td_31_ng_container_3_Template, 13, 0, "ng-container", 26);
    core/* ɵɵtemplate */.YNc(4, SacRequestManagementResultComponent_td_31_ng_container_4_Template, 8, 0, "ng-container", 26);
    core/* ɵɵtemplate */.YNc(5, SacRequestManagementResultComponent_td_31_ng_container_5_Template, 7, 0, "ng-container", 26);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r30 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", element_r30.status == "1Creada");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r30.status == "1CambioAprobado");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r30.status == "8Rechazada");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r30.status == "9Aprobada");
  }
}
function SacRequestManagementResultComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 23);
    core/* ɵɵtext */._uU(1, "Docs");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementResultComponent_td_34_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "a", 48);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(2, "svg", 49)(3, "g", 50);
    core/* ɵɵelement */._UZ(4, "path", 51)(5, "path", 52)(6, "path", 53)(7, "path", 54)(8, "path", 55)(9, "path", 56)(10, "path", 57)(11, "path", 58);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const element_r35 = core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r36 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("href", ctx_r36.openDocumentsSelected(element_r35.documents), core/* ɵɵsanitizeUrl */.LSH);
  }
}
function SacRequestManagementResultComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 24)(1, "div", 25);
    core/* ɵɵtemplate */.YNc(2, SacRequestManagementResultComponent_td_34_ng_container_2_Template, 12, 1, "ng-container", 26);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r35 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", element_r35.documents.length > 0);
  }
}
function SacRequestManagementResultComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 23);
    core/* ɵɵtext */._uU(1, "Detalle");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementResultComponent_td_37_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-icon");
    core/* ɵɵtext */._uU(1, "keyboard_arrow_down");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementResultComponent_td_37_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-icon");
    core/* ɵɵtext */._uU(1, "keyboard_arrow_up");
    core/* ɵɵelementEnd */.qZA();
  }
}
function SacRequestManagementResultComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 24);
    core/* ɵɵtemplate */.YNc(1, SacRequestManagementResultComponent_td_37_mat_icon_1_Template, 2, 0, "mat-icon", 26);
    core/* ɵɵtemplate */.YNc(2, SacRequestManagementResultComponent_td_37_mat_icon_2_Template, 2, 0, "mat-icon", 26);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !element_r38.selected && element_r38.status != "8Rechazada" && element_r38.status != "9Aprobada");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r38.selected && element_r38.status != "8Rechazada" && element_r38.status != "9Aprobada");
  }
}
function SacRequestManagementResultComponent_td_39_table_3_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr", 67)(1, "td", 68);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "td", 68);
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "td", 68);
    core/* ɵɵtext */._uU(6);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(7, "td", 68);
    core/* ɵɵtext */._uU(8);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const request_r47 = ctx.$implicit;
    const element_r41 = core/* ɵɵnextContext */.oxw(2).$implicit;
    const ctx_r46 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r46.getValueForKey(request_r47.fieldName));
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(request_r47.oldValue);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(request_r47.newValue);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(element_r41.modifiedByUser);
  }
}
function SacRequestManagementResultComponent_td_39_table_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "table", 63)(1, "thead")(2, "tr")(3, "th", 64)(4, "strong");
    core/* ɵɵtext */._uU(5, "Campo");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(6, "th", 64)(7, "strong");
    core/* ɵɵtext */._uU(8, "Valor Anterior");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(9, "th", 64)(10, "strong");
    core/* ɵɵtext */._uU(11, "Valor Nuevo");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(12, "th", 64)(13, "strong");
    core/* ɵɵtext */._uU(14, "Modificado Por");
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵelementStart */.TgZ(15, "tr")(16, "th");
    core/* ɵɵelement */._UZ(17, "hr");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(18, "th");
    core/* ɵɵelement */._UZ(19, "hr");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(20, "th");
    core/* ɵɵelement */._UZ(21, "hr");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(22, "th");
    core/* ɵɵelement */._UZ(23, "hr");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(24, "tr");
    core/* ɵɵelement */._UZ(25, "th", 65);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(26, "tbody");
    core/* ɵɵtemplate */.YNc(27, SacRequestManagementResultComponent_td_39_table_3_tr_27_Template, 9, 4, "tr", 66);
    core/* ɵɵelementStart */.TgZ(28, "tr");
    core/* ɵɵelement */._UZ(29, "th", 65);
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const element_r41 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(27);
    core/* ɵɵproperty */.Q6J("ngForOf", element_r41.requestInfoForDetail);
  }
}
function SacRequestManagementResultComponent_td_39_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 69)(1, "button", 70);
    core/* ɵɵlistener */.NdJ("click", function SacRequestManagementResultComponent_td_39_div_4_Template_button_click_1_listener() {
      core/* ɵɵrestoreView */.CHM(_r52);
      const element_r41 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r50 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r50.openDialog(element_r41, 0));
    });
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "button", 71);
    core/* ɵɵlistener */.NdJ("click", function SacRequestManagementResultComponent_td_39_div_4_Template_button_click_3_listener() {
      core/* ɵɵrestoreView */.CHM(_r52);
      const element_r41 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r53 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r53.openDialog(element_r41, 1));
    });
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r41 = core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r43 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r43.getMessageToBotton(element_r41, 0));
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r43.getMessageToBotton(element_r41, 1));
  }
}
function SacRequestManagementResultComponent_td_39_table_5_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr", 67)(1, "td", 68);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "td", 68);
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const request_r57 = ctx.$implicit;
    const ctx_r56 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r56.getValueForKey(request_r57.fieldName));
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(request_r57.newValue);
  }
}
function SacRequestManagementResultComponent_td_39_table_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "table", 63)(1, "thead")(2, "tr")(3, "th", 64)(4, "strong");
    core/* ɵɵtext */._uU(5, "Campo Modificado");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(6, "th", 64)(7, "strong");
    core/* ɵɵtext */._uU(8, "Valor");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelement */._UZ(9, "th", 64);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(10, "tr")(11, "th");
    core/* ɵɵelement */._UZ(12, "hr");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(13, "th");
    core/* ɵɵelement */._UZ(14, "hr");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(15, "tr");
    core/* ɵɵelement */._UZ(16, "th", 65);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(17, "tbody");
    core/* ɵɵtemplate */.YNc(18, SacRequestManagementResultComponent_td_39_table_5_tr_18_Template, 5, 2, "tr", 66);
    core/* ɵɵelementStart */.TgZ(19, "tr", 67);
    core/* ɵɵelement */._UZ(20, "td", 68)(21, "td", 68);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(22, "tr");
    core/* ɵɵelement */._UZ(23, "th", 65);
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const element_r41 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(18);
    core/* ɵɵproperty */.Q6J("ngForOf", element_r41.requestInfoForDetail);
  }
}
function SacRequestManagementResultComponent_td_39_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 69)(1, "button", 72);
    core/* ɵɵlistener */.NdJ("click", function SacRequestManagementResultComponent_td_39_div_6_Template_button_click_1_listener() {
      core/* ɵɵrestoreView */.CHM(_r61);
      const element_r41 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r59 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r59.openDialog(element_r41, 1));
    });
    core/* ɵɵtext */._uU(2, " Cambios Aplicados SAP ");
    core/* ɵɵelementEnd */.qZA()();
  }
}
function SacRequestManagementResultComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 24)(1, "div", 59)(2, "div", 60);
    core/* ɵɵtemplate */.YNc(3, SacRequestManagementResultComponent_td_39_table_3_Template, 30, 1, "table", 61);
    core/* ɵɵtemplate */.YNc(4, SacRequestManagementResultComponent_td_39_div_4_Template, 5, 2, "div", 62);
    core/* ɵɵtemplate */.YNc(5, SacRequestManagementResultComponent_td_39_table_5_Template, 24, 1, "table", 61);
    core/* ɵɵtemplate */.YNc(6, SacRequestManagementResultComponent_td_39_div_6_Template, 3, 0, "div", 62);
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const element_r41 = ctx.$implicit;
    const ctx_r20 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵattribute */.uIk("colspan", ctx_r20.displayedColumns.length);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("@detailExpand", element_r41.selected ? "expanded" : "collapsed");
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", element_r41.status == "1Creada" && element_r41.requestInfoForDetail.length > 0);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r41.status == "1Creada");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r41.status == "1CambioAprobado" && element_r41.requestInfoForDetail.length > 0);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r41.status == "1CambioAprobado");
  }
}
function SacRequestManagementResultComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 73);
  }
}
function SacRequestManagementResultComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "tr", 74);
    core/* ɵɵlistener */.NdJ("click", function SacRequestManagementResultComponent_tr_41_Template_tr_click_0_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r64);
      const row_r62 = restoredCtx.$implicit;
      const ctx_r63 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r63.toggleRow(row_r62));
    });
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const row_r62 = ctx.$implicit;
    core/* ɵɵclassProp */.ekj("example-expanded-row", row_r62.selected);
  }
}
function SacRequestManagementResultComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 75);
  }
}
const _c0 = function () {
  return ["expandedDetail"];
};
let SacRequestManagementResultComponent = /*#__PURE__*/(() => {
  class SacRequestManagementResultComponent {
    constructor(matDialog, sacRequestService, statesServiceRequestManagementSAC, utilService, aesEncryptionUtilService, store, matSnackBar) {
      this.matDialog = matDialog;
      this.sacRequestService = sacRequestService;
      this.statesServiceRequestManagementSAC = statesServiceRequestManagementSAC;
      this.utilService = utilService;
      this.aesEncryptionUtilService = aesEncryptionUtilService;
      this.store = store;
      this.matSnackBar = matSnackBar;
      this.displayedColumns = [];
      this.errorMessage = '';
      this.expandedElement = null;
      this.ftpServerIp = '';
      this.newStatusToRequest = '';
      this.hasApprovedChanges = false;
      this.destroy$ = new Subject/* Subject */.x();
      this.dataSource = new table/* MatTableDataSource */.by(this.resultRequestFilter);
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: APIGatewatStore => {
          this.userInfo = APIGatewatStore;
        },
        error: error => console.error(error)
      });
      this.displayedColumns = ['requestNumber', 'requestDateTime', 'requestingCompany', 'updatedCompany', 'sacAnalyst', 'lastUpdateDateTime', 'status', 'documentsLinkIcon', 'detailIndicator'];
      this.statesServiceRequestManagementSAC.getStateIsUpdateFilterCriterial().pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(result => {
        if (result !== null) {
          this.filterDefault = result;
          this.getRequestByFilter(result);
        }
      });
      this.getFtpServerIp();
    }
    toggleRow(element) {
      element.selected = !element.selected;
    }
    applyFilter(event) {
      const filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    openDialog(request, action) {
      const message = this.getMessageByStatus(request, action);
      const dataToSend = {
        request: request,
        messageTojustification: message,
        showLinkForSendEmail: this.canActiveLinkForSendEmail()
      };
      const dialogRef = this.matDialog.open(SacRequestUpdateModalComponent, {
        width: '600px',
        height: '500px',
        disableClose: true,
        data: dataToSend
      });
      dialogRef.afterClosed().pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(justification => {
        if (justification != null && justification.length > 0) {
          let timeToUpdate = (0,utils/* parseCustomDateStringToDate */.s_)((0,utils/* getCurrentDateInString */.i3)());
          const localTimeToUpdate = new Date(timeToUpdate.getTime() - timeToUpdate.getTimezoneOffset() * 60000);
          //Evito ir a actualizar el cliente si no hay modificaciones
          if (this.newStatusToRequest == RequestStatus.Aprobada && request.requestInfoForDetail && request.requestInfoForDetail.length > 0) {
            this.customer = this.generateCustomerByRequestInfoForDetail(request, timeToUpdate);
          }
          let requestToUpdate = this.getDataRequestToUpdate(request, timeToUpdate, justification, localTimeToUpdate);
          this.setUpdateRequestCustomerBySac(requestToUpdate);
        }
      });
    }
    canActiveLinkForSendEmail() {
      if (this.newStatusToRequest == RequestStatus.Aprobada || this.newStatusToRequest == RequestStatus.Rechazada || this.newStatusToRequest == RequestStatus.CambioAprobado) {
        return true;
      }
      return false;
    }
    getDataRequestToUpdate(request, timeToUpdate, justification, localTimeToUpdate) {
      let requestToUpdate = {
        id: request.gkeyRequest,
        requestStatus: this.newStatusToRequest,
        requestFlow: this.getNewRequestFlow(request, this.newStatusToRequest, justification, localTimeToUpdate),
        finalizedAt: null
      };
      if (this.newStatusToRequest == RequestStatus.Rechazada || this.newStatusToRequest == RequestStatus.Aprobada) {
        requestToUpdate.finalizedAt = timeToUpdate;
      }
      return requestToUpdate;
    }
    getNewRequestFlow(request, newStatus, justification, timeToUpdate) {
      let newRequestFlow = {
        user: this.userInfo.userName,
        date: timeToUpdate,
        remark: justification,
        state: newStatus
      };
      const requestFlowArray = request.request_flow ? JSON.parse(request.request_flow) : [];
      requestFlowArray.push(newRequestFlow);
      const updatedRequestFlowString = JSON.stringify(requestFlowArray);
      return updatedRequestFlowString;
    }
    getMessageByStatus(request, action) {
      let newStatus = '';
      if (request.status.toLowerCase() == '1creada' && request.requestInfoForDetail.length > 0 && action == 1) {
        newStatus = 'aprobar cambios';
        this.newStatusToRequest = RequestStatus.CambioAprobado;
        this.hasApprovedChanges = false;
      }
      if (request.status.toLowerCase() == '1creada' && request.requestInfoForDetail.length > 0 && action == 0) {
        newStatus = 'rechazar cambios';
        this.newStatusToRequest = RequestStatus.Rechazada;
        this.hasApprovedChanges = false;
      }
      if (request.status.toLowerCase() == '1creada' && request.requestInfoForDetail.length == 0 && action == 1) {
        newStatus = 'aprobar solicitud';
        this.newStatusToRequest = RequestStatus.Aprobada;
        this.hasApprovedChanges = false;
      }
      if (request.status.toLowerCase() == '1creada' && request.requestInfoForDetail.length == 0 && action == 0) {
        newStatus = 'rechazar solicitud';
        this.newStatusToRequest = RequestStatus.Rechazada;
        this.hasApprovedChanges = false;
      }
      if (request.status.toLowerCase() == '1cambioaprobado' && action == 1) {
        newStatus = 'cambios aplicados sap';
        this.newStatusToRequest = RequestStatus.Aprobada;
        this.hasApprovedChanges = true;
      }
      switch (newStatus) {
        case 'rechazar cambios':
          return 'Su solicitud no procede';
        case 'aprobar cambios':
          return 'Cordial saludo\nEstimados\n\nSolicitud atendida. El cliente entrará en proceso de creación estimado en 48 horas hábiles a partir del momento de recibido. Sugerimos validar el estado del cliente en Aguadulce Conecta–Módulo Registro Cliente.';
        case 'cambios aplicados sap':
          return 'La solicitud fue aprobada';
        case 'rechazar solicitud':
          return 'Su solicitud no procede';
        case 'aprobar solicitud':
          return 'La solicitud fue aprobada';
      }
      return '';
    }
    getMessageToBotton(request, action) {
      if (request.status.toLowerCase() == '1creada' && request.requestInfoForDetail.length > 0 && action == 1) {
        return 'Aprobar Cambios';
      }
      if (request.status.toLowerCase() == '1creada' && request.requestInfoForDetail.length > 0 && action == 0) {
        return 'Rechazar Cambios';
      }
      if (request.status.toLowerCase() == '1creada' && request.requestInfoForDetail.length == 0 && action == 1) {
        return 'Aprobar Solicitud';
      }
      if (request.status.toLowerCase() == '1creada' && request.requestInfoForDetail.length == 0 && action == 0) {
        return 'Rechazar Solicitud';
      }
      if (request.status.toLowerCase() == '1cambioaprobado' && action == 1) {
        return 'Cambios Aplicados SAP';
      }
      return '';
    }
    getRequestByFilter(filterDefault) {
      if (filterDefault == null) return;
      this.sacRequestService.getCustomerRequest(filterDefault).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$), (0,catchError/* catchError */.K)(error => {
        this.errorMessage = 'Error al obtener tipos de documentos';
        return (0,of.of)('');
      })).subscribe(result => {
        this.resultRequestFilter = JSON.parse(this.aesEncryptionUtilService.decrypt(result));
        this.resultRequestFilter = this.updatePropertiesResultRequest(this.resultRequestFilter);
        this.resultRequestFilter = this.getDataByRequestFlow(this.resultRequestFilter);
        this.dataSource = new table/* MatTableDataSource */.by(this.resultRequestFilter);
        this.dataSource.sort = this.sort;
      });
    }
    setCustomerByApprovalRequest(customer) {
      this.sacRequestService.setCustomerByApprovalRequest(customer).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$), (0,catchError/* catchError */.K)(error => {
        this.errorMessage = '';
        this.matSnackBar.open("Se presento un problema al guardar los datos de la empresa.", "", {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 7000
        });
        return (0,of.of)(false);
      })).subscribe(result => {
        if (result) {
          this.matSnackBar.open('Se han guardado los datos de la empresa exitosamente', "", {
            verticalPosition: "top",
            duration: 7000,
            panelClass: ["success-snackbar"]
          });
          this.getRequestByFilter(this.filterDefault);
        }
      });
    }
    generateCustomerByRequestInfoForDetail(request, timeUpdate) {
      let customer = {
        id: request.gkeyCustomer ? request.gkeyCustomer : null,
        nit: '',
        treatment: '',
        personType: '',
        initials: '',
        districtCode: '',
        representativeEmail: '',
        operationalContactName: '',
        operationalContactMobile: '',
        operationalContactEmail: '',
        treasuryContactName: '',
        treasuryContactMobile: '',
        secondaryTreasuryEmail: '',
        requestNumber: request.requestNumber,
        lastSapUpdate: timeUpdate
      };
      request.requestInfoForDetail.forEach(change => {
        switch (change.fieldName) {
          case 'nit':
            customer.nit = change.newValue;
            break;
          case 'tratamiento':
            customer.treatment = change.newValue;
            break;
          case 'tipoPersona':
            customer.personType = change.newValue;
            break;
          case 'sigla':
            customer.initials = change.newValue;
            break;
          case 'codigoDistrito':
            customer.districtCode = change.newValue;
            break;
          case 'correoRepresentante':
            customer.representativeEmail = change.newValue;
            break;
          case 'nombreContactoOperativo':
            customer.operationalContactName = change.newValue;
            break;
          case 'telefonoMovilContacto':
            customer.operationalContactMobile = change.newValue;
            break;
          case 'correoContacto':
            customer.operationalContactEmail = change.newValue;
            break;
          case 'nombreContactoTesoreria':
            customer.treasuryContactName = change.newValue;
            break;
          case 'telefonoMovilTesoreria':
            customer.treasuryContactMobile = change.newValue;
            break;
          case 'correoTesoreria2':
            customer.secondaryTreasuryEmail = change.newValue;
            break;
          default:
            break;
        }
      });
      if (request.requestType && request.requestType.toLowerCase() == 'create') {
        customer.lastCompletedUpdateDate = timeUpdate;
      }
      return customer;
    }
    setUpdateRequestCustomerBySac(requestToUpdate) {
      this.sacRequestService.setUpdateRequestCustomerBySac(requestToUpdate).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$), (0,catchError/* catchError */.K)(error => {
        console.log(error);
        this.matSnackBar.open("Se presento un problema al actualizar la solicitud", "", {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 7000
        });
        return (0,of.of)(false);
      })).subscribe(resp => {
        this.matSnackBar.open('Solicitud actualizada exitosamente', "", {
          verticalPosition: "top",
          duration: 7000,
          panelClass: ["success-snackbar"]
        });
        if (this.newStatusToRequest == '9Aprobada' && this.hasApprovedChanges) {
          this.setCustomerByApprovalRequest(this.customer);
        } else {
          this.getRequestByFilter(this.filterDefault);
        }
      });
    }
    updatePropertiesResultRequest(response) {
      response.forEach(request => {
        request.requestInfoForDetail = this.parseFieldChanges(request.requestInfo);
      });
      return response;
    }
    parseFieldChanges(jsonString) {
      // Validación inicial para manejar null o undefined
      if (!jsonString) {
        return [];
      }
      try {
        const parsedObject = JSON.parse(jsonString);
        const fieldChanges = Object.keys(parsedObject).map(fieldName => {
          const fieldData = parsedObject[fieldName];
          return {
            fieldName: fieldName,
            oldValue: fieldData.old != null ? fieldData.old : '',
            newValue: fieldData.new
          };
        });
        return fieldChanges;
      } catch (error) {
        console.error('Error parseando JSON:', error);
        return [];
      }
    }
    getDataByRequestFlow(response) {
      response.forEach(request => {
        if (request.request_flow != null) {
          const parsedObject = JSON.parse(request.request_flow);
          if (parsedObject.length > 0) {
            const lastItem = parsedObject[parsedObject.length - 1];
            request.sacAnalyst = lastItem.user;
            request.lastUpdateDateTime = lastItem.date;
          }
        }
      });
      return response;
    }
    getValueForKey(key) {
      return app_constants/* keyValueMap */.m[key] || key;
    }
    openDocumentsSelected(pathDocuments) {
      // Remuevo GESTION_CLIENTES/ ya que la carpeta compartida del ftp esta sin esto
      const partToRemove = 'GESTION_CLIENTES/';
      const modifiedString = pathDocuments.replace(partToRemove, '');
      const fileUrl = `file://${this.ftpServerIp}${modifiedString}/`;
      try {
        return fileUrl;
      } catch (error) {
        console.error("No se pudo abrir el archivo: ruta", error);
        console.error("fileUrl:", fileUrl);
      }
      return '';
    }
    getFtpServerIp() {
      this.utilService.getFtpServerIp().pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: value => {
          this.ftpServerIp = this.aesEncryptionUtilService.decrypt(value);
        },
        error: err => {
          console.error('Error consultado el peso maximo para documentos permitidos: ', err);
        }
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
      this.statesServiceRequestManagementSAC.resetAllProperties();
    }
  }
  SacRequestManagementResultComponent.ɵfac = function SacRequestManagementResultComponent_Factory(t) {
    return new (t || SacRequestManagementResultComponent)(core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw), core/* ɵɵdirectiveInject */.Y36(SacRequestService), core/* ɵɵdirectiveInject */.Y36(StatesServiceRequestManagementSAC), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f), core/* ɵɵdirectiveInject */.Y36(AESEncryptionUtil_service/* AESEncryptionUtilService */.D), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux));
  };
  SacRequestManagementResultComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: SacRequestManagementResultComponent,
    selectors: [["app-sac-request-management-result"]],
    viewQuery: function SacRequestManagementResultComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
      }
    },
    decls: 43,
    vars: 5,
    consts: [[1, "wrapper"], [1, "queries__filter"], ["matPrefix", "", 1, "queries__filter-icon"], ["matInput", "", "placeholder", "Ingrese valor para filtrar", 3, "keyup"], ["input", ""], [1, "sac-request-cross"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource"], ["requestTable", ""], ["matColumnDef", "requestNumber"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "requestDateTime"], ["matColumnDef", "requestingCompany"], ["matColumnDef", "updatedCompany"], ["matColumnDef", "sacAnalyst"], ["matColumnDef", "lastUpdateDateTime"], ["matColumnDef", "status"], ["matColumnDef", "documentsLinkIcon"], ["matColumnDef", "detailIndicator"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "sac-request-cross__table-actions"], [4, "ngIf"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 413.24 413.24", 1, "sac-request-cross__icon-x"], ["id", "Capa_1-2"], ["d", "m380.58,143.21l-90.83-11.53c-6.62-.84-9.47-8.86-4.86-13.69l18.28-19.15c-26.66-18.06-60.17-28.85-96.55-28.85-71.89,0-130.18,61.04-130.3,136.4l-76.32-.06C.16,92.34,92.6,0,206.62,0c53.68,0,102.57,20.47,139.31,54.03l14.03-14.7c4.61-4.83,12.75-2.36,13.9,4.21l15.78,90.2c.94,5.4-3.61,10.16-9.05,9.47Z", 1, "sync-1"], ["d", "m32.65,270.03l90.83,11.53c6.62.84,9.47,8.86,4.86,13.69l-18.28,19.15c26.66,18.06,60.17,28.85,96.55,28.85,71.89,0,130.18-61.04,130.3-136.4l76.32.06c-.16,113.97-92.6,206.32-206.62,206.32-53.68,0-102.57-20.47-139.31-54.03l-14.03,14.7c-4.61,4.83-12.75,2.36-13.9-4.21l-15.78-90.2c-.94-5.4,3.61-10.16,9.05-9.47Z", 1, "sync-1"], ["id", "Capa_2", "version", "1.0", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 282.000000 300.000000", "preserveAspectRatio", "xMidYMid meet", 1, "sac-request-cross__icon-x"], ["transform", "translate(0.000000,300.000000) scale(0.100000,-0.100000)", "fill", "#000000", "stroke", "none"], ["d", "M643 2760 c-39 -23 -51 -46 -59 -105 l-7 -45 -84 0 c-83 0 -86 -1 -119 -34 -33 -33 -34 -37 -34 -110 0 -62 3 -78 16 -83 32 -12 49 11 54 76 3 40 10 65 20 71 9 6 220 9 540 7 l525 -2 1 -42 1 -43 -298 0 c-200 0 -306 -4 -323 -11 -35 -16 -49 -58 -44 -129 7 -99 -10 -94 350 -100 l312 -5 4 -40 c5 -56 26 -90 66 -109 28 -13 69 -16 230 -16 l196 0 0 -459 0 -458 -77 -5 c-154 -10 -280 -88 -212 -131 12 -7 30 -3 70 16 30 15 78 32 108 38 158 33 333 -56 408 -209 25 -51 28 -68 28 -157 0 -88 -3 -107 -27 -157 -35 -76 -104 -148 -175 -184 -53 -26 -67 -29 -163 -29 -93 0 -111 3 -162 27 -154 72 -243 247 -209 410 7 34 22 79 32 101 24 47 22 81 -7 85 -50 7 -104 -122 -104 -252 0 -98 17 -160 64 -238 l35 -58 -584 0 c-567 0 -585 1 -595 19 -7 13 -10 324 -10 939 0 990 2 953 -50 937 -20 -6 -20 -8 -20 -946 0 -1038 -4 -981 64 -1013 30 -14 101 -16 659 -16 l624 0 44 -24 c171 -96 394 -63 536 80 169 169 174 441 12 618 l-49 54 0 831 c0 913 3 874 -60 906 -25 13 -126 15 -762 15 -708 0 -734 -1 -765 -20z m1507 -79 c7 -13 10 -286 10 -816 l0 -796 -30 16 c-16 8 -36 15 -45 15 -13 0 -15 55 -15 497 l0 497 -257 258 -257 258 -448 0 -448 0 0 33 c0 18 5 38 12 45 9 9 187 12 740 12 709 0 728 0 738 -19z m-386 -559 c-114 -2 -171 1 -180 9 -11 9 -14 49 -14 183 l0 171 180 -180 180 -180 -166 -3z m-266 206 l-4 -43 -292 -3 -292 -2 0 45 0 45 296 0 295 0 -3 -42z"], ["d", "M2372 2505 c-17 -14 -36 -43 -42 -63 -8 -25 -10 -229 -8 -629 l3 -592 42 -43 c33 -34 42 -52 45 -83 2 -33 7 -41 27 -43 28 -4 41 12 41 53 0 23 11 41 40 70 l40 39 0 623 0 623 -28 31 c-23 25 -38 33 -78 36 -43 5 -54 2 -82 -22z m96 -61 c19 -13 22 -24 22 -90 l0 -74 -45 0 -45 0 0 72 c0 52 4 76 17 90 20 22 23 22 51 2z m22 -634 l0 -400 -45 0 -45 0 0 400 0 400 45 0 45 0 0 -400z m0 -513 c0 -33 -6 -49 -25 -67 -24 -23 -25 -23 -45 -5 -15 13 -20 31 -20 67 l0 48 45 0 45 0 0 -43z"], ["d", "M591 1931 c-7 -13 -7 -23 2 -35 11 -15 64 -16 611 -14 546 3 600 4 609 20 8 12 7 21 -2 32 -12 14 -78 16 -612 16 -573 0 -599 -1 -608 -19z"], ["d", "M597 1772 c-21 -23 -21 -27 -1 -46 14 -14 83 -16 608 -16 447 0 595 3 604 12 16 16 15 33 -4 52 -14 14 -82 16 -603 16 -557 0 -589 -1 -604 -18z"], ["d", "M591 1602 c-6 -11 -6 -24 0 -35 9 -16 53 -17 614 -17 600 0 604 0 610 20 16 51 27 50 -616 50 -563 0 -599 -1 -608 -18z"], ["d", "M1020 1448 c-23 -8 -26 -40 -6 -57 9 -8 70 -11 197 -9 l184 3 3 24 c2 13 -1 28 -7 34 -13 13 -338 17 -371 5z"], ["d", "M597 1192 c-21 -23 -21 -27 -1 -46 13 -13 45 -16 193 -16 183 0 201 4 201 42 0 32 -35 38 -208 38 -151 0 -171 -2 -185 -18z"], ["d", "M569 930 l-30 -30 3 -196 c4 -254 -17 -234 247 -234 261 0 241 -20 241 244 0 264 18 246 -240 246 l-192 0 -29 -30z m389 -217 l-3 -168 -167 -3 -168 -2 0 170 0 170 170 0 170 0 -2 -167z"], ["d", "M765 742 c-95 -50 -118 -79 -77 -101 16 -9 37 -2 109 34 102 50 122 68 106 93 -17 29 -45 23 -138 -26z"], ["d", "M2083 892 c-12 -2 -57 -34 -100 -72 l-78 -68 -39 29 c-60 44 -93 39 -150 -18 -49 -51 -62 -78 -51 -113 10 -33 211 -200 240 -200 18 0 65 36 163 122 75 66 143 128 150 136 26 32 14 77 -33 130 -46 51 -64 60 -102 54z m65 -148 c-7 -7 -64 -58 -127 -113 -98 -85 -117 -98 -131 -88 -40 28 -149 123 -149 129 -1 4 11 22 27 39 l27 31 45 -36 c25 -20 54 -36 66 -36 12 0 57 32 105 74 l84 75 33 -32 c26 -25 30 -34 20 -43z"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 376.49 356.22", 1, "sac-request-cross__icon-check"], ["d", "m355.39,23.21c-17.99-19.51-34.3-32.67-53.81-14.71L9.96,277.35c-19.51,17.99-7.35,35.16,10.64,54.68h0c17.99,19.52,35,33.99,54.51,15.99L366.72,79.18c19.52-17.99,6.66-36.46-11.33-55.97Z", 1, "cancel-1"], ["d", "m21.1,23.21C39.09,3.71,55.4-9.46,74.91,8.5l291.62,268.85c19.51,17.99,7.35,35.16-10.64,54.68h0c-17.99,19.52-35,33.99-54.51,15.99L9.77,79.18C-9.76,61.19,3.11,42.72,21.1,23.21Z", 1, "cancel-1"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 85.81 67.12", 1, "sac-request-cross__icon-check"], ["d", "m81.34,4.92c-3.81-4.14-7.27-6.93-11.41-3.12L27.66,40.77l-10.67-12.21c-3.7-4.23-7.44-1.83-11.68,1.88-4.24,3.7-7.37,7.3-3.66,11.54l11.02,12.61,9,10.29c2.42,2.77,6.65,3,9.36.5l10.05-9.26,42.67-39.33c4.14-3.81,1.41-7.73-2.4-11.87Z", 1, "simple-check-1"], ["target", "_blank", 3, "href"], ["version", "1.0", "id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 1, "sac-request-cross__icon-check"], ["transform", "translate(0.000000,512.000000) scale(0.100000,-0.100000)", "fill", "#000000", "stroke", "none"], ["d", "M935 5109 c-31 -18 -905 -891 -921 -921 -21 -40 -21 -906 0 -947 35 -66 137 -66 172 0 11 23 14 99 14 414 l0 385 320 0 c369 0 393 4 474 86 82 81 86 105 86 474 l0 320 1186 0 1186 0 34 -34 34 -34 0 -977 0 -978 -83 -86 c-137 -142 -204 -256 -249 -423 -28 -103 -30 -318 -5 -408 8 -30 15 -56 14 -57 -1 -1 -27 6 -57 14 -37 11 -100 16 -195 16 -167 0 -250 -18 -391 -88 l-90 -45 -223 0 -223 0 -34 -34 c-24 -25 -34 -43 -34 -66 0 -23 10 -41 34 -66 l34 -34 112 0 113 0 -104 -108 c-57 -59 -122 -134 -144 -167 -86 -130 -145 -321 -145 -471 0 -66 21 -220 36 -258 6 -15 -60 -16 -800 -16 -876 0 -848 -2 -874 55 -9 19 -12 242 -12 891 0 939 2 906 -55 932 -53 24 -114 4 -134 -45 -8 -21 -11 -259 -9 -918 3 -881 3 -890 24 -936 31 -66 78 -114 142 -146 l57 -28 881 -5 882 -5 46 -62 c244 -324 723 -427 1084 -232 107 57 169 109 343 285 210 214 270 307 321 496 28 103 30 318 5 408 -8 30 -15 56 -14 57 1 1 27 -5 57 -13 211 -55 474 -8 667 118 83 54 349 308 433 414 349 436 192 1095 -315 1325 -267 121 -591 97 -830 -60 l-60 -40 -5 902 c-5 835 -6 905 -23 941 -29 66 -83 123 -145 153 l-57 28 -1270 2 c-905 2 -1276 -1 -1290 -8z m-55 -575 l0 -236 -29 -29 -29 -29 -239 0 -238 0 265 265 c146 146 266 265 267 265 2 0 3 -106 3 -236z m3515 -1479 c39 -8 106 -32 150 -54 140 -70 236 -166 305 -306 108 -218 89 -467 -51 -672 -43 -64 -288 -313 -364 -370 -163 -124 -397 -174 -573 -121 l-43 13 84 83 84 84 66 4 c78 5 163 33 226 74 26 16 117 100 202 187 173 175 207 229 230 357 52 299 -224 576 -524 527 -130 -22 -184 -56 -360 -230 -87 -85 -172 -177 -188 -203 -39 -61 -68 -154 -73 -230 l-3 -59 -84 -85 -84 -85 -13 43 c-53 176 -3 410 121 573 57 76 306 321 370 364 156 106 341 144 522 106z m-32 -413 c92 -41 151 -133 151 -237 0 -97 -26 -140 -176 -292 -73 -73 -135 -133 -139 -133 -4 0 -7 24 -6 53 1 71 -18 133 -59 189 -58 80 -139 120 -244 119 -33 0 -60 3 -60 7 0 13 263 268 290 282 81 43 164 47 243 12z m-399 -529 c29 -28 35 -55 24 -98 -11 -42 -841 -872 -883 -883 -42 -11 -70 -4 -99 25 -29 28 -35 55 -24 98 11 42 841 872 883 883 42 11 70 4 99 -25z m-856 -375 l43 -13 -84 -83 -84 -84 -66 -4 c-78 -5 -163 -33 -226 -74 -26 -16 -117 -100 -202 -187 -173 -175 -207 -229 -230 -357 -52 -299 224 -576 524 -527 130 22 184 56 360 230 87 85 172 177 188 203 39 61 68 154 73 230 l3 59 84 85 84 85 13 -43 c53 -176 3 -410 -121 -573 -57 -76 -306 -321 -370 -364 -205 -140 -454 -159 -672 -52 -137 68 -237 168 -306 306 -113 228 -85 490 74 700 56 75 305 319 370 364 68 46 162 87 243 105 79 18 234 15 302 -6z m-331 -506 c-1 -176 133 -309 310 -305 29 1 53 -2 53 -6 0 -4 -60 -66 -133 -139 -152 -150 -195 -176 -292 -176 -146 0 -259 113 -259 259 0 97 26 140 176 292 73 73 135 133 139 133 4 0 7 -26 6 -58z"], ["d", "M1469 4031 c-38 -39 -40 -97 -5 -138 l24 -28 732 -3 732 -2 34 34 c37 37 43 70 20 115 -8 15 -26 32 -41 39 -19 9 -209 12 -746 12 l-721 0 -29 -29z"], ["d", "M731 3486 c-67 -37 -65 -143 4 -174 20 -9 296 -12 1131 -12 l1106 0 34 34 c50 50 42 121 -17 152 -40 20 -2221 21 -2258 0z"], ["d", "M51 2926 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83 124 -149 87z"], ["d", "M731 2926 c-67 -37 -65 -143 4 -174 19 -9 223 -12 810 -12 587 0 791 3 810 12 29 13 55 55 55 88 0 33 -26 75 -55 88 -40 18 -1591 16 -1624 -2z"], ["d", "M2734 2930 c-56 -22 -72 -108 -30 -157 24 -27 27 -28 145 -31 l121 -4 35 35 c38 38 44 70 21 116 -8 15 -26 32 -41 39 -30 14 -219 15 -251 2z"], ["d", "M731 2366 c-67 -37 -65 -143 4 -174 38 -18 2049 -17 2085 1 14 7 33 29 43 49 16 33 16 40 4 71 -31 72 53 67 -1087 67 -832 -1 -1030 -3 -1049 -14z"], ["d", "M731 1806 c-68 -38 -64 -146 6 -175 21 -8 141 -11 437 -9 l408 3 24 28 c33 38 33 96 0 134 l-24 28 -414 2 c-330 2 -418 0 -437 -11z"], [1, "example-element-detail"], [1, "table-border-rounded"], ["class", "sac-request-cross__sub-table", 4, "ngIf"], ["class", "botton-actions", 4, "ngIf"], [1, "sac-request-cross__sub-table"], [1, "sac-request-cross__table-header-item", "sac-request-cross__table-body-item__darken"], [1, "sac-request-cross__table-space_min"], ["class", "credits", 4, "ngFor", "ngForOf"], [1, "credits"], [1, "sac-request-cross__table-body-item", "sac-request-cross__table-body-item__darken", "sac-request-cross__table-body-outlined"], [1, "botton-actions"], ["mat-flat-button", "", 1, "services-confirm__cancel-button", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "botton-actions__confirm", "customer-message-agreement-dialog__action", 3, "click"], ["mat-flat-button", "", 1, "services-confirm__cancel-button", "botton-actions__confirm_sap", "sac-request__field-button", "customer-message-agreement-dialog__action", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]],
    template: function SacRequestManagementResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
        core/* ɵɵtext */._uU(3, "Filtro");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(4, "mat-icon", 2);
        core/* ɵɵtext */._uU(5, "search");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(6, "input", 3, 4);
        core/* ɵɵlistener */.NdJ("keyup", function SacRequestManagementResultComponent_Template_input_keyup_6_listener($event) {
          return ctx.applyFilter($event);
        });
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(8, "div", 5)(9, "table", 6, 7);
        core/* ɵɵelementContainerStart */.ynx(11, 8);
        core/* ɵɵtemplate */.YNc(12, SacRequestManagementResultComponent_th_12_Template, 2, 0, "th", 9);
        core/* ɵɵtemplate */.YNc(13, SacRequestManagementResultComponent_td_13_Template, 2, 1, "td", 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(14, 11);
        core/* ɵɵtemplate */.YNc(15, SacRequestManagementResultComponent_th_15_Template, 2, 0, "th", 9);
        core/* ɵɵtemplate */.YNc(16, SacRequestManagementResultComponent_td_16_Template, 2, 1, "td", 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(17, 12);
        core/* ɵɵtemplate */.YNc(18, SacRequestManagementResultComponent_th_18_Template, 2, 0, "th", 9);
        core/* ɵɵtemplate */.YNc(19, SacRequestManagementResultComponent_td_19_Template, 2, 1, "td", 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(20, 13);
        core/* ɵɵtemplate */.YNc(21, SacRequestManagementResultComponent_th_21_Template, 2, 0, "th", 9);
        core/* ɵɵtemplate */.YNc(22, SacRequestManagementResultComponent_td_22_Template, 2, 1, "td", 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(23, 14);
        core/* ɵɵtemplate */.YNc(24, SacRequestManagementResultComponent_th_24_Template, 2, 0, "th", 9);
        core/* ɵɵtemplate */.YNc(25, SacRequestManagementResultComponent_td_25_Template, 2, 1, "td", 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(26, 15);
        core/* ɵɵtemplate */.YNc(27, SacRequestManagementResultComponent_th_27_Template, 2, 0, "th", 9);
        core/* ɵɵtemplate */.YNc(28, SacRequestManagementResultComponent_td_28_Template, 3, 5, "td", 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(29, 16);
        core/* ɵɵtemplate */.YNc(30, SacRequestManagementResultComponent_th_30_Template, 2, 0, "th", 9);
        core/* ɵɵtemplate */.YNc(31, SacRequestManagementResultComponent_td_31_Template, 6, 4, "td", 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(32, 17);
        core/* ɵɵtemplate */.YNc(33, SacRequestManagementResultComponent_th_33_Template, 2, 0, "th", 9);
        core/* ɵɵtemplate */.YNc(34, SacRequestManagementResultComponent_td_34_Template, 3, 1, "td", 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(35, 18);
        core/* ɵɵtemplate */.YNc(36, SacRequestManagementResultComponent_th_36_Template, 2, 0, "th", 9);
        core/* ɵɵtemplate */.YNc(37, SacRequestManagementResultComponent_td_37_Template, 3, 2, "td", 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(38, 19);
        core/* ɵɵtemplate */.YNc(39, SacRequestManagementResultComponent_td_39_Template, 7, 6, "td", 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(40, SacRequestManagementResultComponent_tr_40_Template, 1, 0, "tr", 20);
        core/* ɵɵtemplate */.YNc(41, SacRequestManagementResultComponent_tr_41_Template, 1, 2, "tr", 21);
        core/* ɵɵtemplate */.YNc(42, SacRequestManagementResultComponent_tr_42_Template, 1, 0, "tr", 22);
        core/* ɵɵelementEnd */.qZA()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(9);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.dataSource);
        core/* ɵɵadvance */.xp6(31);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", core/* ɵɵpureFunction0 */.DdM(4, _c0));
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, icon/* MatIcon */.Hw, fesm2020_button/* MatButton */.lW, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatPrefix */.qo, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, sort/* MatSort */.YE, sort/* MatSortHeader */.nU, common/* DatePipe */.uU],
    styles: [".sac-request-cross[_ngcontent-%COMP%]{width:100%;height:100%;padding:1rem;padding-bottom:0;display:grid;grid-template-columns:1fr;grid-template-rows:auto auto 1fr}.sac-request-cross__search-button[_ngcontent-%COMP%]{margin-bottom:1.25rem;color:#fff!important}.wrapper[_ngcontent-%COMP%]{width:100%;height:100%;padding:1rem .5rem .5rem;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;gap:.5rem}.header[_ngcontent-%COMP%]{margin-left:1rem;text-align:left!important}.sac-request-cross__table-body-item[_ngcontent-pkg-c345][_ngcontent-%COMP%]{text-align:left!important}.title-header[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Gilroy-Light;margin:0;padding-left:1rem;color:#78909c;font-weight:300}.icon-title[_ngcontent-%COMP%]{width:1.5rem}.title-card[_ngcontent-%COMP%]{width:max-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.queries__filter[_ngcontent-%COMP%]{width:100%}.table-border-rounded[_ngcontent-%COMP%]{width:100%;background-color:#f1f2f6;border-radius:.5rem}.sac-request-cross__table[_ngcontent-%COMP%]{width:100%;border-collapse:separate;border-spacing:0}.sac-request-cross__sub-table[_ngcontent-%COMP%]{width:100%;border-collapse:separate;border-spacing:0;margin:0}.sac-request-cross__table-header[_ngcontent-%COMP%]{background-color:#92b976;color:#fff}.sac-request-cross__table-header-item[_ngcontent-%COMP%]{padding:.5rem;font-weight:500;text-align:left}.sac-request-cross__table-body-item[_ngcontent-%COMP%]{text-align:left}.sac-request-cross__table-body-item[_ngcontent-%COMP%]    > {text-align:left}.sac-request-cross__table-body-item__darken[_ngcontent-%COMP%]{background-color:#f1f2f6}.sac-request-cross__table-header-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem;margin-left:2rem}.sac-request-cross__table-header-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.sac-request-cross__table-body-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}.sac-request-cross__table-body-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}.sac-request-cross__table-body-outlined[_ngcontent-%COMP%]:last-child{border-right:1px solid #78909c;border-right:0;text-align:left!important}.sac-request-cross__sub-table-header-item[_ngcontent-%COMP%]{padding:.5rem;font-weight:500;text-align:center}.sac-request-cross__sub-table-header-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.sac-request-cross__sub-table-header-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.sac-request-cross__sub-table-body-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.sac-request-cross__sub-table-body-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.sac-request-cross__table-outlined[_ngcontent-%COMP%]{border:1px solid #78909c}.sac-request-cross__table-space[_ngcontent-%COMP%]{padding:.5rem}.sac-request-cross__table-space_min[_ngcontent-%COMP%]{padding:.25rem}.sac-request-cross__table-body-item[_ngcontent-%COMP%]{padding:.5rem}.sac-request-cross__title[_ngcontent-%COMP%]{margin-bottom:1rem;display:flex;justify-content:flex-start;align-content:center}.sac-request-cross__title-text[_ngcontent-%COMP%]{color:#777;margin:0;font-weight:600}.sac-request-cross__thead[_ngcontent-%COMP%]{position:sticky;top:0;left:0}.title-icon[_ngcontent-%COMP%]{width:2rem;margin-right:1rem}.sac-request-cross__icon-check[_ngcontent-%COMP%], .sac-request-cross__icon-x[_ngcontent-%COMP%]{width:2rem}.sac-request-cross__table-actions[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr;justify-items:center;align-items:center}.example-detail-row[_ngcontent-%COMP%]{height:0}.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.example-element-detail[_ngcontent-%COMP%]{overflow:hidden;display:flex}.detail-table[_ngcontent-%COMP%]{background:#b7b7b773;text-align:center}.botton-actions[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center;margin-top:5px}.botton-actions[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-left:1.5rem;margin-bottom:1rem}.botton-actions__confirm[_ngcontent-%COMP%]{color:#fff;background-color:#92b975;font-size:1rem;font-family:Gilroy-ExtraBold;border:transparent solid!important}.sac-request__field-button[_ngcontent-%COMP%]   .botton-actions__confirm[_ngcontent-%COMP%]{width:7rem;height:2rem;border:none;outline:none;cursor:pointer;border-radius:.5rem;margin-left:.2rem 0rem;background-color:#92b975;color:#fff;transition:background-color .2s;font-size:1rem;display:flex;justify-content:space-around;align-items:center}.sac-request__field-button.botton-actions__confirm_sap[_ngcontent-%COMP%]{background-color:#e64d4d;color:#fff}  .mat-mdc-raised-button.mat-primary{background-color:#92b975!important;color:#fff;border-radius:.5rem;padding-left:1rem}  .mat-mdc-raised-button:not(:disabled){color:#fff!important;background-color:#92b975!important;border-radius:.5rem}  .mat-mdc-raised-button:not(:disabled){color:#fff!important;background-color:#92b975!important}  .mdc-data-table__cell{text-align:left!important}  .sac-request-cross__table-body-item[_ngcontent-igk-c345]{text-align:left!important}  .sac-request-cross__table-body-item{background-color:#ff0;text-align:left}  .header{text-align:left!important}  .mdc-tab__text-label{flex-direction:column!important}  .mdc-data-table__header-cell{text-align:center!important;font-family:Gilroy-ExtraBold;color:#66bb6a;font-size:1rem}  .mdc-data-table__row{background-color:#dfe6e91a!important;border:transparent solid!important;border-bottom:.25rem transparent solid!important}  .mdc-data-table__row:hover{background-color:#7ba0521a!important}  .mdc-data-table__row td{font-family:Gilroy-Light;color:#666!important}  .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}  .success-snackbar .mdc-snackbar__surface{color:#155724!important;background-color:#d4edda!important;border-color:#c3e6cb!important}  .success-snackbar .mdc-snackbar__surface .mdc-button__label{color:#155724!important}  .success-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#155724!important}  .warning-snackbar .mdc-snackbar__surface{color:#856404!important;background-color:#fff3cd!important;border-color:#ffeeba!important}  .warning-snackbar .mdc-snackbar__surface .mdc-button__label{color:#856404!important}  .warning-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#856404!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:transparent!important;--mat-mdc-button-persistent-ripple-color: currentColor !important}"],
    data: {
      animation: [(0,animations/* trigger */.X$)('detailExpand', [(0,animations/* state */.SB)('collapsed', (0,animations/* style */.oB)({
        height: '0px',
        minHeight: '0'
      })), (0,animations/* state */.SB)('expanded', (0,animations/* style */.oB)({
        height: '*'
      })), (0,animations/* transition */.eR)('expanded <=> collapsed', (0,animations/* animate */.jt)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
    }
  });
  return SacRequestManagementResultComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/guard/notifications.guard.ts
var notifications_guard = __webpack_require__(34418);
;// CONCATENATED MODULE: ./src/app/modules/sac-request-management/sac-request-management-routing.module.ts






const routes = [{
  path: "",
  component: SacRequestManagementComponent,
  canActivate: [notifications_guard/* NotificationsGuard */.t],
  data: {
    componentName: "SacRequestManagementComponent",
    privilegeName: "GS"
  },
  children: [{
    path: "management",
    component: SacRequestManagementResultComponent
  }]
}];
let SacRequestManagementRoutingModule = /*#__PURE__*/(() => {
  class SacRequestManagementRoutingModule {}
  SacRequestManagementRoutingModule.ɵfac = function SacRequestManagementRoutingModule_Factory(t) {
    return new (t || SacRequestManagementRoutingModule)();
  };
  SacRequestManagementRoutingModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: SacRequestManagementRoutingModule
  });
  SacRequestManagementRoutingModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [router/* RouterModule.forChild */.Bz.forChild(routes), router/* RouterModule */.Bz]
  });
  return SacRequestManagementRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(SacRequestManagementRoutingModule, {
    imports: [router/* RouterModule */.Bz],
    exports: [router/* RouterModule */.Bz]
  });
})();
// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 9 modules
var shared_module = __webpack_require__(96158);
;// CONCATENATED MODULE: ./src/app/modules/sac-request-management/sac-request-management.module.ts










let SacRequestManagementModule = /*#__PURE__*/(() => {
  class SacRequestManagementModule {}
  SacRequestManagementModule.ɵfac = function SacRequestManagementModule_Factory(t) {
    return new (t || SacRequestManagementModule)();
  };
  SacRequestManagementModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: SacRequestManagementModule
  });
  SacRequestManagementModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [common/* CommonModule */.ez, SacRequestManagementRoutingModule, shared_module/* SharedModule */.m, sort/* MatSortModule */.JX]
  });
  return SacRequestManagementModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(SacRequestManagementModule, {
    declarations: [SacRequestManagementComponent, SacRequestManagementFilterComponent, SacRequestManagementResultComponent, SacRequestUpdateModalComponent, SacRequestChangesApprovedComponent],
    imports: [common/* CommonModule */.ez, SacRequestManagementRoutingModule, shared_module/* SharedModule */.m, sort/* MatSortModule */.JX]
  });
})();

/***/ })

}]);