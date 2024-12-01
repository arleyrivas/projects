"use strict";
(self["webpackChunkbussinessPortal"] = self["webpackChunkbussinessPortal"] || []).push([[828],{

/***/ 92828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "HistoryModule": () => (/* binding */ HistoryModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__(36895);
// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 9 modules
var shared_module = __webpack_require__(96158);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2020/router.mjs + 5 modules
var router = __webpack_require__(77518);
// EXTERNAL MODULE: ./src/app/core/privileges.enum.ts
var privileges_enum = __webpack_require__(9862);
// EXTERNAL MODULE: ./src/app/state/shared/shared.selectors.ts
var shared_selectors = __webpack_require__(13545);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subject.js + 1 modules
var Subject = __webpack_require__(77579);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(82722);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2020/forms.mjs
var fesm2020_forms = __webpack_require__(24006);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(15439);
// EXTERNAL MODULE: ./src/app/state/history/history.actions.ts
var history_actions = __webpack_require__(69639);
// EXTERNAL MODULE: ./src/app/state/shared/shared.actions.ts
var shared_actions = __webpack_require__(68438);
// EXTERNAL MODULE: ./src/app/state/api-gateway/api-gateway.selectors.ts
var api_gateway_selectors = __webpack_require__(75868);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs
var core = __webpack_require__(94650);
// EXTERNAL MODULE: ./node_modules/@ngrx/store/fesm2020/ngrx-store.mjs + 4 modules
var ngrx_store = __webpack_require__(55867);
;// CONCATENATED MODULE: ./src/app/modules/history/services/scroll.service.ts


let ScrollService = /*#__PURE__*/(() => {
  class ScrollService {
    constructor() {
      this.loadMoreSubject = new Subject/* Subject */.x();
      this.loadMore$ = this.loadMoreSubject.asObservable();
    }
    loadMore() {
      this.loadMoreSubject.next();
    }
  }
  ScrollService.ɵfac = function ScrollService_Factory(t) {
    return new (t || ScrollService)();
  };
  ScrollService.ɵprov = /*@__PURE__*/core/* ɵɵdefineInjectable */.Yz7({
    token: ScrollService,
    factory: ScrollService.ɵfac,
    providedIn: 'root'
  });
  return ScrollService;
})();
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/snack-bar.mjs
var snack_bar = __webpack_require__(17009);
;// CONCATENATED MODULE: ./src/app/modules/history/services/historypinstate.service.ts

let HistorypinstateService = /*#__PURE__*/(() => {
  class HistorypinstateService {
    constructor() {
      this.shouldReload = false;
    }
    get shouldReloadComponent() {
      return this.shouldReload;
    }
    set shouldReloadComponent(value) {
      this.shouldReload = value;
    }
    resetState() {
      this.shouldReload = false;
    }
  }
  HistorypinstateService.ɵfac = function HistorypinstateService_Factory(t) {
    return new (t || HistorypinstateService)();
  };
  HistorypinstateService.ɵprov = /*@__PURE__*/core/* ɵɵdefineInjectable */.Yz7({
    token: HistorypinstateService,
    factory: HistorypinstateService.ɵfac,
    providedIn: 'root'
  });
  return HistorypinstateService;
})();
// EXTERNAL MODULE: ./src/app/shared/services/storageservice.service.ts
var storageservice_service = __webpack_require__(91685);
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
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/card.mjs
var card = __webpack_require__(73546);
// EXTERNAL MODULE: ./src/app/shared/directives/permissions.directive.ts
var permissions_directive = __webpack_require__(4344);
// EXTERNAL MODULE: ./src/app/shared/directives/hour-restriction.directive.ts
var hour_restriction_directive = __webpack_require__(93419);
// EXTERNAL MODULE: ./src/app/modules/services/components/customer-searcher/customer-searcher.component.ts
var customer_searcher_component = __webpack_require__(19243);
// EXTERNAL MODULE: ./src/app/shared/components/truck-searcher/truck-searcher.component.ts
var truck_searcher_component = __webpack_require__(31589);
;// CONCATENATED MODULE: ./src/app/modules/history/components/history/history.component.ts


























function HistoryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 1)(1, "mat-card")(2, "mat-card-content")(3, "div", 2);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(4, "svg", 3)(5, "defs")(6, "style");
    core/* ɵɵtext */._uU(7, ".history_pin_tab-icono{fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(8, "g", 4);
    core/* ɵɵelement */._UZ(9, "circle", 5)(10, "circle", 6)(11, "polyline", 7)(12, "rect", 8)(13, "line", 9)(14, "line", 10)(15, "polygon", 11)(16, "path", 12)(17, "path", 13)(18, "path", 14)(19, "path", 15)(20, "line", 16)(21, "line", 17)(22, "line", 18)(23, "line", 19)(24, "line", 20)(25, "line", 21)(26, "line", 22)(27, "line", 23);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(28, "h2", 24);
    core/* ɵɵtext */._uU(29, "Historial");
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(30, "div", 25)(31, "mat-card")(32, "mat-card-content")(33, "div", 26)(34, "ul", 27)(35, "div", 28)(36, "h2", 29);
    core/* ɵɵtext */._uU(37, "Historial de Transacciones");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(38, "svg", 30)(39, "defs")(40, "style");
    core/* ɵɵtext */._uU(41, ".cls-1{fill:#c5c6c8;}.cls-2{fill:#7ba052;}.cls-3{fill:#4b8051;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(42, "g", 4);
    core/* ɵɵelement */._UZ(43, "rect", 31)(44, "rect", 32)(45, "rect", 33);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementContainerStart */.ynx(46);
    core/* ɵɵelementStart */.TgZ(47, "form", 34);
    core/* ɵɵelementContainerStart */.ynx(48);
    core/* ɵɵelementStart */.TgZ(49, "app-customer-searcher", 35);
    core/* ɵɵlistener */.NdJ("customerSelected", function HistoryComponent_div_0_Template_app_customer_searcher_customerSelected_49_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r4 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r4.onCustomerSelected($event));
    })("cleanCustomer", function HistoryComponent_div_0_Template_app_customer_searcher_cleanCustomer_49_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r6 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r6.clean($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(50);
    core/* ɵɵelementStart */.TgZ(51, "app-truck-searcher", 36);
    core/* ɵɵlistener */.NdJ("truckSearch", function HistoryComponent_div_0_Template_app_truck_searcher_truckSearch_51_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r7 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r7.multipleTruckSearch($event));
    })("cleanTrucker", function HistoryComponent_div_0_Template_app_truck_searcher_cleanTrucker_51_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r8 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r8.cleanTrucker($event));
    })("truckSearch", function HistoryComponent_div_0_Template_app_truck_searcher_truckSearch_51_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r9 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r9.onTruckSelectd($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(52);
    core/* ɵɵelementStart */.TgZ(53, "mat-form-field", 37)(54, "mat-label");
    core/* ɵɵtext */._uU(55, "Buscar Historial Por BL, HBL o BOOKING");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(56, "input", 38);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(57);
    core/* ɵɵelementStart */.TgZ(58, "mat-form-field", 37)(59, "mat-label");
    core/* ɵɵtext */._uU(60, "Tipo de carga*");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(61, "mat-select", 39)(62, "mat-option", 40);
    core/* ɵɵelementContainerStart */.ynx(63);
    core/* ɵɵi18n */.SDv(64, 41);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(65, "mat-option", 42);
    core/* ɵɵelementContainerStart */.ynx(66);
    core/* ɵɵi18n */.SDv(67, 43);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(68, "mat-option", 44);
    core/* ɵɵelementContainerStart */.ynx(69);
    core/* ɵɵi18n */.SDv(70, 45);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(71);
    core/* ɵɵelementStart */.TgZ(72, "mat-form-field", 37)(73, "mat-label");
    core/* ɵɵtext */._uU(74, "Estado*");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(75, "mat-select", 46)(76, "mat-option", 40);
    core/* ɵɵelementContainerStart */.ynx(77);
    core/* ɵɵi18n */.SDv(78, 47);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(79, "mat-option", 42);
    core/* ɵɵelementContainerStart */.ynx(80);
    core/* ɵɵi18n */.SDv(81, 48);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(82, "mat-option", 44);
    core/* ɵɵelementContainerStart */.ynx(83);
    core/* ɵɵi18n */.SDv(84, 49);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(85);
    core/* ɵɵelementStart */.TgZ(86, "mat-form-field", 37)(87, "mat-label");
    core/* ɵɵtext */._uU(88, "Desde");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(89, "input", 50);
    core/* ɵɵlistener */.NdJ("dateChange", function HistoryComponent_div_0_Template_input_dateChange_89_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r10 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r10.datePickerChange($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(90, "mat-datepicker-toggle", 51)(91, "mat-datepicker", null, 52);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(93);
    core/* ɵɵelementStart */.TgZ(94, "mat-form-field", 37)(95, "mat-label");
    core/* ɵɵtext */._uU(96, "Hasta");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(97, "input", 53);
    core/* ɵɵlistener */.NdJ("dateChange", function HistoryComponent_div_0_Template_input_dateChange_97_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r11 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r11.toDatePickerChange($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(98, "mat-datepicker-toggle", 51)(99, "mat-datepicker", null, 54);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(101);
    core/* ɵɵelementStart */.TgZ(102, "li", 55)(103, "button", 56);
    core/* ɵɵlistener */.NdJ("click", function HistoryComponent_div_0_Template_button_click_103_listener() {
      core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r12 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r12.search());
    });
    core/* ɵɵtext */._uU(104, " Buscar ");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(105, "div", 57);
    core/* ɵɵelement */._UZ(106, "router-outlet");
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const _r2 = core/* ɵɵreference */.MAs(92);
    const _r3 = core/* ɵɵreference */.MAs(100);
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    let tmp_5_0;
    core/* ɵɵadvance */.xp6(47);
    core/* ɵɵproperty */.Q6J("formGroup", ctx_r0.historyPinsFormGroup);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("data", ctx_r0.customerNit)("formatSelected", true)("requireValidator", false);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("data", ctx_r0.truckerNit)("consigneeId", (tmp_5_0 = ctx_r0.customerId) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "")("formatSelected", true);
    core/* ɵɵadvance */.xp6(38);
    core/* ɵɵproperty */.Q6J("matDatepicker", _r2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("for", _r2);
    core/* ɵɵadvance */.xp6(7);
    core/* ɵɵproperty */.Q6J("matDatepicker", _r3)("readonly", true);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("for", _r3);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("hourRestriction", "HIS_PIN")("hourRestrictionAPIGateway", ctx_r0.userInfo)("hourRestrictionCallback", ctx_r0.configure.bind(ctx_r0));
  }
}
function HistoryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 1)(1, "mat-card")(2, "mat-card-content")(3, "div", 2);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(4, "svg", 3)(5, "defs")(6, "style");
    core/* ɵɵtext */._uU(7, ".history_pin_tab-icono{fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(8, "g", 4);
    core/* ɵɵelement */._UZ(9, "circle", 5)(10, "circle", 6)(11, "polyline", 7)(12, "rect", 8)(13, "line", 9)(14, "line", 10)(15, "polygon", 11)(16, "path", 12)(17, "path", 13)(18, "path", 14)(19, "path", 15)(20, "line", 16)(21, "line", 17)(22, "line", 18)(23, "line", 19)(24, "line", 20)(25, "line", 21)(26, "line", 22)(27, "line", 23);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(28, "h2", 24);
    core/* ɵɵtext */._uU(29, "Historial");
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(30, "div", 25)(31, "mat-card")(32, "mat-card-content")(33, "div", 26)(34, "ul", 27)(35, "div", 28)(36, "h2", 29);
    core/* ɵɵtext */._uU(37, "Historial de Transacciones");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(38, "svg", 30)(39, "defs")(40, "style");
    core/* ɵɵtext */._uU(41, ".cls-1{fill:#c5c6c8;}.cls-2{fill:#7ba052;}.cls-3{fill:#4b8051;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(42, "g", 4);
    core/* ɵɵelement */._UZ(43, "rect", 31)(44, "rect", 32)(45, "rect", 33);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementContainerStart */.ynx(46);
    core/* ɵɵelementStart */.TgZ(47, "form", 34);
    core/* ɵɵelementContainerStart */.ynx(48);
    core/* ɵɵelementStart */.TgZ(49, "mat-form-field", 37)(50, "mat-label");
    core/* ɵɵtext */._uU(51, "Tipo de carga*");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(52, "mat-select", 39)(53, "mat-option", 40);
    core/* ɵɵelementContainerStart */.ynx(54);
    core/* ɵɵi18n */.SDv(55, 58);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(56, "mat-option", 42);
    core/* ɵɵelementContainerStart */.ynx(57);
    core/* ɵɵi18n */.SDv(58, 59);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(59, "mat-option", 44);
    core/* ɵɵelementContainerStart */.ynx(60);
    core/* ɵɵi18n */.SDv(61, 60);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(62);
    core/* ɵɵelementStart */.TgZ(63, "mat-form-field", 37)(64, "mat-label");
    core/* ɵɵtext */._uU(65, "Desde");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(66, "input", 50);
    core/* ɵɵlistener */.NdJ("dateChange", function HistoryComponent_div_1_Template_input_dateChange_66_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r15 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r15.datePickerChange($event, true));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(67, "mat-datepicker-toggle", 51)(68, "mat-datepicker", null, 52);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(70);
    core/* ɵɵelementStart */.TgZ(71, "mat-form-field", 37)(72, "mat-label");
    core/* ɵɵtext */._uU(73, "Hasta");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(74, "input", 53);
    core/* ɵɵlistener */.NdJ("dateChange", function HistoryComponent_div_1_Template_input_dateChange_74_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r17 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r17.toDatePickerChange($event, true));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(75, "mat-datepicker-toggle", 51)(76, "mat-datepicker", null, 54);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(78);
    core/* ɵɵelementStart */.TgZ(79, "mat-form-field", 37)(80, "mat-label");
    core/* ɵɵtext */._uU(81, "Buscar Por N\u00FAmero De Cita");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(82, "input", 61);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(83);
    core/* ɵɵelementStart */.TgZ(84, "mat-form-field", 37)(85, "mat-label");
    core/* ɵɵtext */._uU(86, "Buscar Por Placa");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(87, "input", 62);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(88);
    core/* ɵɵelementStart */.TgZ(89, "li", 55)(90, "button", 63);
    core/* ɵɵlistener */.NdJ("click", function HistoryComponent_div_1_Template_button_click_90_listener() {
      core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r18 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r18.searchAppointments());
    });
    core/* ɵɵtext */._uU(91, " Buscar ");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(92, "div", 57);
    core/* ɵɵelement */._UZ(93, "router-outlet");
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const _r13 = core/* ɵɵreference */.MAs(69);
    const _r14 = core/* ɵɵreference */.MAs(77);
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(47);
    core/* ɵɵproperty */.Q6J("formGroup", ctx_r1.historyAppointmentsFormGroup);
    core/* ɵɵadvance */.xp6(19);
    core/* ɵɵproperty */.Q6J("matDatepicker", _r13);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("for", _r13);
    core/* ɵɵadvance */.xp6(7);
    core/* ɵɵproperty */.Q6J("matDatepicker", _r14)("readonly", true);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("for", _r14);
    core/* ɵɵadvance */.xp6(15);
    core/* ɵɵproperty */.Q6J("hourRestriction", "HIS_CIT")("hourRestrictionAPIGateway", ctx_r1.userInfo)("hourRestrictionCallback", ctx_r1.configure.bind(ctx_r1, true))("disabled", ctx_r1.historyAppointmentsFormGroup.invalid);
  }
}
const _c18 = function (a0) {
  return [a0];
};
let HistoryComponent = /*#__PURE__*/(() => {
  class HistoryComponent {
    constructor(store, scrollService, router, matSnackbar, historyPinStateService, matSnackBar, storageService) {
      this.store = store;
      this.scrollService = scrollService;
      this.router = router;
      this.matSnackbar = matSnackbar;
      this.historyPinStateService = historyPinStateService;
      this.matSnackBar = matSnackBar;
      this.storageService = storageService;
      this.privileges = privileges_enum/* privileges */.U;
      this.customerNit = '';
      this.truckerNit = '';
      this.destroy$ = new Subject/* Subject */.x();
      this.historyPinsFormGroup = new fesm2020_forms/* FormGroup */.cw({});
      this.historyAppointmentsFormGroup = new fesm2020_forms/* FormGroup */.cw({});
      this.customerId = null;
      this.truckerId = null;
      this.bl = null;
      this.hbl = null;
      this.frghtKind = null;
      this.plate = null;
      this.appointmentNbr = null;
      this.page = 1;
      this.isInCurrentComponent = false;
      this.data = {
        "consigneeId": this.customerId,
        "company": this.truckerId,
        "tipo": "",
        "state": 0,
        "fromDate": "",
        "toDate": "",
        "bl": this.bl,
        "hbl": this.hbl,
        "frghtKind": this.frghtKind,
        "page": this.page,
        "cleanSelectedState": true
      };
      this.dataAppointments = {
        "frghtKind": this.frghtKind,
        "plate": this.plate,
        "appointmentNbr": this.appointmentNbr,
        "fromDate": "",
        "toDate": "",
        "page": this.page,
        "cleanSelectedState": true
      };
      this.cleanCustomerFunction = () => {};
      this.cleanTruckerFunction = () => {};
    }
    ngOnInit() {
      this.isInCurrentComponent = true;
      this.matSnackBar.dismiss();
      this.store.dispatch((0,shared_actions/* cleanSelectedCustomer */.mS)());
      this.store.dispatch((0,shared_actions/* cleanSelectedTrucker */.TS)());
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      if (this.hasPermission(this.privileges.HIS_CIT)) {
        this.navigateToHistoryAppointmentsComponent();
      }
      this.store.select(shared_selectors/* sharedFeatureSelector */.x).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          if (result.selectedCustomer) {
            const [customerId, customerName] = result.selectedCustomer.split('/');
            if (customerName) {
              this.customerNit = `${customerName}`;
            }
          }
          if (result.selectedTrucker) {
            const [truckerId, truckerName] = result.selectedTrucker.split('/');
            if (truckerName) {
              this.truckerNit = `${truckerName}`;
            }
          }
        }
      });
      this.historyPinsFormGroup = new fesm2020_forms/* FormGroup */.cw({
        blHbl: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }, [fesm2020_forms/* Validators.minLength */.kI.minLength(5), fesm2020_forms/* Validators.maxLength */.kI.maxLength(50)]),
        loadType: new fesm2020_forms/* FormControl */.NI('ALL'),
        stady: new fesm2020_forms/* FormControl */.NI('ALL'),
        from: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }, [fesm2020_forms/* Validators.required */.kI.required]),
        to: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }, [fesm2020_forms/* Validators.required */.kI.required])
      });
      this.historyAppointmentsFormGroup = new fesm2020_forms/* FormGroup */.cw({
        loadType: new fesm2020_forms/* FormControl */.NI('ALL'),
        from: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }, [fesm2020_forms/* Validators.required */.kI.required]),
        to: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }, [fesm2020_forms/* Validators.required */.kI.required]),
        appointmentNbr: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }, [fesm2020_forms/* Validators.minLength */.kI.minLength(4), fesm2020_forms/* Validators.maxLength */.kI.maxLength(10), fesm2020_forms/* Validators.pattern */.kI.pattern(/^[0-9]*$/)]),
        plate: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }, [fesm2020_forms/* Validators.minLength */.kI.minLength(6), fesm2020_forms/* Validators.maxLength */.kI.maxLength(6), this.plateValidator])
      });
      this.historyPinsFormGroup.controls["from"].setValue(moment().subtract(31, "day").format("YYYY-MM-DD"));
      this.historyPinsFormGroup.controls["to"].setValue(moment().format("YYYY-MM-DD"));
      this.historyAppointmentsFormGroup.controls["from"].setValue(moment().format("YYYY-MM-DD"));
      this.historyAppointmentsFormGroup.controls["to"].setValue(moment().add(15, "day").format("YYYY-MM-DD"));
      this.scrollService.loadMore$.pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(() => {
        this.loadMore();
      });
    }
    onCustomerSelected(selectedValue) {
      const [customerId, customerName] = selectedValue.split('/');
      if (customerName) {
        this.customerId = customerId;
        this.customerNit = customerName;
        this.page = 1;
      }
    }
    onTruckSelectd(selectedValue) {
      const [truckId, truckName] = selectedValue.split('/');
      if (truckName) {
        this.truckerId = truckId;
        this.truckerNit = truckName;
        this.page = 1;
      }
    }
    datePickerChange(event, historyAppointments = false) {
      let cantDiffDays = 31;
      let form = this.historyPinsFormGroup;
      if (historyAppointments) {
        form = this.historyAppointmentsFormGroup;
        cantDiffDays = 15;
      }
      const fromDateControl = form.controls["from"];
      const toDateControl = form.controls["to"];
      const fromDate = moment(fromDateControl.value);
      const value = form.controls["from"].value;
      const toDateValue = toDateControl.value ? moment(toDateControl.value) : null;
      if (toDateValue) {
        const diffDays = toDateValue.diff(fromDate, 'days');
        if (diffDays > cantDiffDays) {
          const newToDate = fromDate.add(cantDiffDays, "days").format("YYYY-MM-DD");
          toDateControl.setValue(newToDate);
        }
      } else {
        const newToDate = fromDate.add(cantDiffDays, "days").format("YYYY-MM-DD");
        toDateControl.setValue(newToDate);
      }
    }
    toDatePickerChange(event, historyAppointments = false) {
      let cantDiffDays = 31;
      let form = this.historyPinsFormGroup;
      if (historyAppointments) {
        form = this.historyAppointmentsFormGroup;
        cantDiffDays = 15;
      }
      const fromDateControl = form.controls["from"];
      const toDateControl = form.controls["to"];
      const toDate = moment(toDateControl.value);
      // Verificar si el control "from" ya tiene un valor
      const fromDateValue = fromDateControl.value ? moment(fromDateControl.value) : null;
      // Si ya hay un valor en "from", calcular la diferencia
      if (fromDateValue) {
        const diffDays = toDate.diff(fromDateValue, 'days');
        if (diffDays > cantDiffDays) {
          // Si la diferencia es mayor a 31 días, ajustar la fecha "from" para que sea 31 días antes de "to"
          const newFromDate = toDate.subtract(cantDiffDays, "days").format("YYYY-MM-DD");
          fromDateControl.setValue(newFromDate);
        }
      } else {
        // Si no hay valor en "from", ajustar la fecha "from" para que sea 31 días antes de "to"
        const newFromDate = toDate.subtract(cantDiffDays, "days").format("YYYY-MM-DD");
        fromDateControl.setValue(newFromDate);
      }
    }
    multipleTruckSearch(value) {
      this.trucker = value;
    }
    search() {
      this.page = 1;
      if (moment(this.historyPinsFormGroup.controls["from"].value).isBefore(this.historyPinsFormGroup.controls["to"].value)) {
        let blHbl = this.historyPinsFormGroup.get('blHbl')?.value || null;
        let loadType = this.historyPinsFormGroup.get('loadType')?.value || null;
        let stady = this.historyPinsFormGroup.get('stady')?.value || null;
        let fromDate = moment(this.historyPinsFormGroup.get("from")?.value).toISOString();
        let toDate = moment(this.historyPinsFormGroup.get("to")?.value).toISOString();
        // Ajusta la hora de la fecha a las 23:59:59
        let endOfDay = moment(toDate).utc().set({
          hour: 23,
          minute: 59,
          second: 59,
          millisecond: 0
        }).toISOString();
        let bl = null;
        let hbl = null;
        let frghtKind = "";
        if (loadType === "1") {
          //hbl = blHbl;
          frghtKind = "BBK";
        } else if (loadType === "0") {
          //bl = blHbl;
          frghtKind = "FCL";
        } else {
          //bl = blHbl;
          //hbl = blHbl;
          frghtKind = null;
        }
        this.data.consigneeId = this.customerId;
        this.data.company = this.truckerId;
        this.data.tipo = loadType;
        this.data.state = parseInt(stady);
        this.data.fromDate = fromDate;
        this.data.toDate = endOfDay;
        this.data.bl = bl;
        this.data.hbl = blHbl;
        this.data.frghtKind = frghtKind;
        this.data.page = this.page;
        //this.store.dispatch(reloadComponent());
        this.store.dispatch((0,history_actions/* saveParameters */.eB)({
          data: this.data
        }));
        this.store.dispatch((0,history_actions/* cleanHistoryPin */.bE)());
        this.store.dispatch((0,history_actions/* getHistoryPin */.Zs)(this.data));
      } else {
        this.matSnackbar.open("La fecha desde debe ser igual o anterior a la fecha hasta", "", {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        });
      }
    }
    clean(value) {
      this.cleanCustomerFunction = value;
      this.customerId = null;
      this.customerNit = '';
      this.store.dispatch((0,shared_actions/* cleanSelectedCustomer */.mS)());
    }
    cleanTrucker(value) {
      this.cleanTruckerFunction = value;
      this.truckerId = null;
      this.truckerNit = '';
      this.store.dispatch((0,shared_actions/* cleanSelectedTrucker */.TS)());
    }
    loadMore() {
      this.data.page += 1;
      this.store.dispatch((0,history_actions/* getHistoryPin */.Zs)(this.data));
    }
    configure(historyAppointments = false) {
      if (historyAppointments) {
        if (!this.isInCurrentComponent) {
          return; // Salir si no estás en el componente correcto
        }

        this.router.navigate(['/', 'historial', 'history-appointments']);
      } else {
        this.router.navigate(['/', 'historial', 'history-pin']);
      }
    }
    navigateToHistoryPinComponent() {
      this.historyPinStateService.shouldReloadComponent = true;
      this.router.navigate(['/', 'historial', 'history-pin']);
    }
    plateValidator(control) {
      const value = control.value || ''; // Maneja casos donde el valor es null o undefined
      if (!value) {
        return null;
      }
      const platePattern = /^[A-Za-z]{3}[0-9]{3}$/;
      const isValid = platePattern.test(value);
      return isValid ? null : {
        invalidPlate: true
      };
    }
    searchAppointments() {
      this.page = 1;
      if (moment(this.historyAppointmentsFormGroup.controls["from"].value).isBefore(this.historyAppointmentsFormGroup.controls["to"].value)) {
        this.dataForHistoryAppointmentsComponent();
        this.store.dispatch((0,history_actions/* saveAppointmentsParameters */.Rf)({
          data: this.dataAppointments
        }));
        this.store.dispatch((0,history_actions/* cleanHistoryAppointments */.jI)());
        this.store.dispatch((0,history_actions/* getHistoryAppointments */.sO)(this.dataAppointments));
        this.storageService.showHistoryAppointment(true);
      } else {
        this.matSnackbar.open("La fecha desde debe ser igual o anterior a la fecha hasta", "", {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        });
      }
    }
    hasPermission(privilegio) {
      const userPrivileges = this.userInfo.privileges.map(value => value.privilegeId);
      let hasPermission = false;
      if (this.userInfo && this.userInfo.privileges) {
        if (userPrivileges.includes(privilegio)) {
          hasPermission = true;
        }
      }
      return hasPermission;
    }
    dataForHistoryAppointmentsComponent(addDays = false, cantDays = 0) {
      let plate = this.historyAppointmentsFormGroup.get('plate')?.value || null;
      let appointmentNbr = this.historyAppointmentsFormGroup.get('appointmentNbr')?.value || null;
      let loadType = this.historyAppointmentsFormGroup.get('loadType')?.value || null;
      let fromDate = moment(this.historyAppointmentsFormGroup.get("from")?.value).toISOString();
      let toDate = moment(this.historyAppointmentsFormGroup.get("to")?.value).toISOString();
      let frghtKind = "";
      if (loadType === "1") {
        //hbl = blHbl;
        frghtKind = "S";
      } else if (loadType === "0") {
        //bl = blHbl;
        frghtKind = "C";
      } else {
        //bl = blHbl;
        //hbl = blHbl;
        frghtKind = null;
      }
      this.dataAppointments.frghtKind = frghtKind;
      this.dataAppointments.plate = plate;
      this.dataAppointments.appointmentNbr = appointmentNbr;
      if (addDays) {
        toDate = moment(toDate).add(cantDays, 'days').toISOString();
      }
      this.dataAppointments.fromDate = new Date(fromDate).toISOString().split('T')[0];
      this.dataAppointments.toDate = new Date(toDate).toISOString().split('T')[0];
      this.dataAppointments.page = this.page;
    }
    navigateToHistoryAppointmentsComponent() {
      this.dataForHistoryAppointmentsComponent(true, 15);
      this.dataAppointments.page = 1;
      this.store.dispatch((0,history_actions/* saveAppointmentsParameters */.Rf)({
        data: this.dataAppointments
      }));
      this.store.dispatch((0,history_actions/* cleanHistoryAppointments */.jI)());
      this.store.dispatch((0,history_actions/* getHistoryAppointments */.sO)(this.dataAppointments));
      this.router.navigate(['/', 'historial', 'history-appointments']);
    }
    ngOnDestroy() {
      this.isInCurrentComponent = false;
      this.destroy$.next();
      this.destroy$.complete();
    }
  }
  HistoryComponent.ɵfac = function HistoryComponent_Factory(t) {
    return new (t || HistoryComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(ScrollService), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(HistorypinstateService), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(storageservice_service/* StorageserviceService */.S));
  };
  HistoryComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: HistoryComponent,
    selectors: [["app-history"]],
    decls: 2,
    vars: 6,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_e408cfaa7ac65f2410dce4e1a8fee00bc138d2028ec182f0f9c4f266b9066a58$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__1 = goog.getMsg(" history.views.history-pin.ALL_OPTION ");
        i18n_0 = MSG_EXTERNAL_e408cfaa7ac65f2410dce4e1a8fee00bc138d2028ec182f0f9c4f266b9066a58$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__1;
      } else {
        i18n_0 = " history.views.history-pin.ALL_OPTION ";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6a513e29e056e00226708a2cc6afa3a3f94ea56f0332f21259e98100f1955887$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__3 = goog.getMsg(" history.views.history-pin.detached_load ");
        i18n_2 = MSG_EXTERNAL_6a513e29e056e00226708a2cc6afa3a3f94ea56f0332f21259e98100f1955887$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__3;
      } else {
        i18n_2 = " history.views.history-pin.detached_load ";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_d174c213cf10f476304b623a17fda282038bf727ae81b99655a1fd5166630356$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__5 = goog.getMsg(" history.views.history-pin.containerized_load ");
        i18n_4 = MSG_EXTERNAL_d174c213cf10f476304b623a17fda282038bf727ae81b99655a1fd5166630356$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__5;
      } else {
        i18n_4 = " history.views.history-pin.containerized_load ";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_e408cfaa7ac65f2410dce4e1a8fee00bc138d2028ec182f0f9c4f266b9066a58$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__7 = goog.getMsg(" history.views.history-pin.ALL_OPTION ");
        i18n_6 = MSG_EXTERNAL_e408cfaa7ac65f2410dce4e1a8fee00bc138d2028ec182f0f9c4f266b9066a58$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__7;
      } else {
        i18n_6 = " history.views.history-pin.ALL_OPTION ";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6a513e29e056e00226708a2cc6afa3a3f94ea56f0332f21259e98100f1955883$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__9 = goog.getMsg(" history.views.history-pin.assets ");
        i18n_8 = MSG_EXTERNAL_6a513e29e056e00226708a2cc6afa3a3f94ea56f0332f21259e98100f1955883$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__9;
      } else {
        i18n_8 = " history.views.history-pin.assets ";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_d174c213cf10f476304b623a17fda282038bf727ae81b99655a1fd5166630352$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__11 = goog.getMsg(" history.views.history-pin.inactive ");
        i18n_10 = MSG_EXTERNAL_d174c213cf10f476304b623a17fda282038bf727ae81b99655a1fd5166630352$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__11;
      } else {
        i18n_10 = " history.views.history-pin.inactive ";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_e408cfaa7ac65f2410dce4e1a8fee00bc138d2028ec182f0f9c4f266b9066a58$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__13 = goog.getMsg(" history.views.history-pin.ALL_OPTION ");
        i18n_12 = MSG_EXTERNAL_e408cfaa7ac65f2410dce4e1a8fee00bc138d2028ec182f0f9c4f266b9066a58$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__13;
      } else {
        i18n_12 = " history.views.history-pin.ALL_OPTION ";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6a513e29e056e00226708a2cc6afa3a3f94ea56f0332f21259e98100f1955887$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__15 = goog.getMsg(" history.views.history-pin.detached_load ");
        i18n_14 = MSG_EXTERNAL_6a513e29e056e00226708a2cc6afa3a3f94ea56f0332f21259e98100f1955887$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__15;
      } else {
        i18n_14 = " history.views.history-pin.detached_load ";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_d174c213cf10f476304b623a17fda282038bf727ae81b99655a1fd5166630356$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__17 = goog.getMsg(" history.views.history-pin.containerized_load ");
        i18n_16 = MSG_EXTERNAL_d174c213cf10f476304b623a17fda282038bf727ae81b99655a1fd5166630356$$SRC_APP_MODULES_HISTORY_COMPONENTS_HISTORY_HISTORY_COMPONENT_TS__17;
      } else {
        i18n_16 = " history.views.history-pin.containerized_load ";
      }
      return [["class", "wrapper-history", 4, "permissions"], [1, "wrapper-history"], [1, "header-history"], ["id", "history_pin", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 63.38 70.61", 1, "history_pin_tab-icono"], ["id", "Capa_1-2"], ["cx", "37.29", "cy", "44.53", "r", "14.02", 1, "history_pin_tab-icono"], ["cx", "37.29", "cy", "44.53", "r", "10.33", 1, "history_pin_tab-icono"], ["points", "45.71 55.95 50.21 60.45 53.21 57.45 48.71 52.95", 1, "history_pin_tab-icono"], ["x", "52.8", "y", "57.08", "width", "6.83", "height", "12.73", "transform", "translate(-28.4 58.33) rotate(-45)", 1, "history_pin_tab-icono"], ["x1", "53.6", "y1", "65.67", "x2", "58.23", "y2", "61.03", 1, "history_pin_tab-icono"], ["x1", "51.45", "y1", "63.51", "x2", "56.08", "y2", "58.88", 1, "history_pin_tab-icono"], ["points", "40.21 13.87 40.21 .25 54.14 13.87 40.21 13.87", 1, "history_pin_tab-icono"], ["d", "m52.84,52.5c.72,0,1.3-.57,1.3-1.27V13.87L40.21.25h-23.97c-.72,0-1.3.57-1.3,1.27v49.72c0,.7.58,1.27,1.3,1.27h6.29", 1, "history_pin_tab-icono"], ["d", "m14.95,5.15h-3.6c-.72,0-1.3.57-1.3,1.27v49.72c0,.7.58,1.27,1.3,1.27h14.27", 1, "history_pin_tab-icono"], ["d", "m10.05,10.05h-3.6c-.72,0-1.3.57-1.3,1.27v49.72c0,.7.58,1.27,1.3,1.27h36.6c.72,0,1.3-.57,1.3-1.27v-.88", 1, "history_pin_tab-icono"], ["d", "m5.15,14.95H1.55c-.72,0-1.3.57-1.3,1.27v49.72c0,.7.58,1.27,1.3,1.27h36.6c.72,0,1.3-.57,1.3-1.27v-3.63", 1, "history_pin_tab-icono"], ["x1", "21.06", "y1", "43.69", "x2", "20.5", "y2", "43.69", 1, "history_pin_tab-icono"], ["x1", "21.8", "y1", "37.92", "x2", "20.5", "y2", "37.92", 1, "history_pin_tab-icono"], ["x1", "26.35", "y1", "32.15", "x2", "20.5", "y2", "32.15", 1, "history_pin_tab-icono"], ["x1", "48.58", "y1", "32.15", "x2", "47.87", "y2", "32.15", 1, "history_pin_tab-icono"], ["x1", "48.58", "y1", "26.38", "x2", "20.5", "y2", "26.38", 1, "history_pin_tab-icono"], ["x1", "48.58", "y1", "20.61", "x2", "20.5", "y2", "20.61", 1, "history_pin_tab-icono"], ["x1", "36.94", "y1", "14.84", "x2", "20.5", "y2", "14.84", 1, "history_pin_tab-icono"], ["x1", "36.29", "y1", "9.07", "x2", "20.5", "y2", "9.07", 1, "history_pin_tab-icono"], [1, "title-history"], [1, "transaction-history"], [1, "main-panel"], [1, "history-search"], [1, "title-card"], [1, "card-title"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 83.36 1.91", 1, "welcome__line"], ["width", "31.37", "height", "1.91", 1, "cls-2"], ["x", "26.13", "width", "28.61", "height", "1.91", 1, "cls-3"], ["x", "54.74", "width", "28.61", "height", "1.91", 1, "cls-1"], [1, "history-form", 3, "formGroup"], [1, "", 3, "data", "formatSelected", "requireValidator", "customerSelected", "cleanCustomer"], [1, "", 3, "data", "consigneeId", "formatSelected", "truckSearch", "cleanTrucker"], [1, ""], ["matInput", "", "formControlName", "blHbl"], ["formControlName", "loadType"], ["value", "ALL"], i18n_0, ["value", "1"], i18n_2, ["value", "0"], i18n_4, ["formControlName", "stady"], i18n_6, i18n_8, i18n_10, ["matInput", "", "formControlName", "from", "placeholder", "Elige una fecha", 3, "matDatepicker", "dateChange"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "formControlName", "to", "placeholder", "Elige una fecha", 3, "matDatepicker", "readonly", "dateChange"], ["picker2", ""], [1, "history__search-item", "history__search-item_search-button"], [1, "history__field-button", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", "click"], [1, "secondary-panel"], i18n_12, i18n_14, i18n_16, ["matInput", "", "formControlName", "appointmentNbr"], ["matInput", "", "formControlName", "plate"], [1, "history__field-button", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", "disabled", "click"]];
    },
    template: function HistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, HistoryComponent_div_0_Template, 107, 15, "div", 0);
        core/* ɵɵtemplate */.YNc(1, HistoryComponent_div_1_Template, 94, 10, "div", 0);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(2, _c18, ctx.privileges.HIS_PIN));
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(4, _c18, ctx.privileges.HIS_CIT));
      }
    },
    dependencies: [router/* RouterOutlet */.lC, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatSuffix */.R9, input/* MatInput */.Nt, fesm2020_select/* MatSelect */.gD, fesm2020_core/* MatOption */.ey, datepicker/* MatDatepicker */.Mq, datepicker/* MatDatepickerInput */.hl, datepicker/* MatDatepickerToggle */.nW, card/* MatCard */.a8, card/* MatCardContent */.dn, fesm2020_forms/* ɵNgNoValidate */._Y, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* NgControlStatusGroup */.JL, fesm2020_forms/* FormGroupDirective */.sg, fesm2020_forms/* FormControlName */.u, permissions_directive/* PermissionsDirective */.$, hour_restriction_directive/* HourRestrictionDirective */.E, customer_searcher_component/* CustomerSearcherComponent */.p, truck_searcher_component/* TruckSearcherComponent */.X],
    styles: [".wrapper-history[_ngcontent-%COMP%]{width:100%;height:100%;padding:.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;gap:.5rem}.header-history[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.title-history[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Gilroy-Light;margin:0;padding-left:1rem;color:#78909c;font-weight:300}.history[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.welcome__user[_ngcontent-%COMP%]{font-size:1.875rem;color:var(--primary-color)}.transaction-history[_ngcontent-%COMP%]{display:grid;height:100vh;grid-template-columns:.7fr 1fr;grid-template-rows:1fr}.other-component[_ngcontent-%COMP%]{padding:1rem;display:grid}.history-form[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr 1fr auto 1fr}.history__search-item[_ngcontent-%COMP%]{font-weight:300;display:flex;justify-content:space-between;align-items:center}.history__search-item_search-button[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.history__search-button-item[_ngcontent-%COMP%]{width:100%;font-weight:300;display:flex;justify-content:flex-end;align-items:center}.history__field-button[_ngcontent-%COMP%]{width:7rem;height:2rem;border:none;outline:none;cursor:pointer;border-radius:.5rem;margin-left:.2rem;background-color:#92b975;color:#fff;transition:background-color .2s;font-size:1rem;display:flex;justify-content:space-around;align-items:center}.history__field-button[_ngcontent-%COMP%]:disabled{background-color:#999}.history__field-button-icon[_ngcontent-%COMP%]{width:2rem}.main-panel[_ngcontent-%COMP%]{height:100%}.history-search[_ngcontent-%COMP%]{list-style:none;margin:0}.secondary-panel[_ngcontent-%COMP%]{flex:1;padding-left:1rem;padding-right:1rem}.history_line[_ngcontent-%COMP%]{width:35rem;margin-top:1rem}.title-card[_ngcontent-%COMP%]{width:max-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.icon-title[_ngcontent-%COMP%], .history_pin_tab-icono[_ngcontent-%COMP%]{width:1.5rem}.history-icon[_ngcontent-%COMP%]{padding-top:.5rem}.history_pin_tab-icono[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{width:1.5rem}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .history_pin_tab-icono path, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .history_pin_tab-icono[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:none;stroke:#231f20!important}.icon-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}"]
  });
  return HistoryComponent;
})();
// EXTERNAL MODULE: ./node_modules/@angular/animations/fesm2020/animations.mjs
var animations = __webpack_require__(37340);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/table.mjs + 2 modules
var table = __webpack_require__(7155);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(50727);
;// CONCATENATED MODULE: ./src/app/state/history/history.selector.ts

const historyFeatureSelector = (0,ngrx_store/* createFeatureSelector */.ZF)('history');
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/sort.mjs
var sort = __webpack_require__(96308);
// EXTERNAL MODULE: ./src/app/modules/containerized-load/components/generate-pin-display-item/generate-pin-display-item.component.ts
var generate_pin_display_item_component = __webpack_require__(83811);
// EXTERNAL MODULE: ./src/app/modules/detached-load/components/generate-pin-display-item/generate-pin-display-item.component.ts
var generate_pin_display_item_generate_pin_display_item_component = __webpack_require__(34263);
// EXTERNAL MODULE: ./src/app/state/containerized-load/containerized-load.actions.ts
var containerized_load_actions = __webpack_require__(50175);
// EXTERNAL MODULE: ./src/app/state/detached-load/detached-load.actions.ts
var detached_load_actions = __webpack_require__(38013);
// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
var platform_browser = __webpack_require__(11481);
// EXTERNAL MODULE: ./src/app/core/auth/services/base64-encryption-util.service.ts
var base64_encryption_util_service = __webpack_require__(46602);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/icon.mjs
var icon = __webpack_require__(97392);
// EXTERNAL MODULE: ./node_modules/ngx-scrollbar/fesm2020/ngx-scrollbar.mjs + 3 modules
var ngx_scrollbar = __webpack_require__(52598);
// EXTERNAL MODULE: ./node_modules/ngx-scrollbar/fesm2020/ngx-scrollbar-reached-event.mjs
var ngx_scrollbar_reached_event = __webpack_require__(17876);
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/a11y.mjs
var a11y = __webpack_require__(12687);
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/coercion.mjs
var coercion = __webpack_require__(21281);
;// CONCATENATED MODULE: ./node_modules/@angular/material/fesm2020/badge.mjs








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let nextId = 0;
// Boilerplate for applying mixins to MatBadge.
/** @docs-private */
const _MatBadgeBase = /*#__PURE__*/(0,fesm2020_core/* mixinDisabled */.Id)(class {});
const BADGE_CONTENT_CLASS = 'mat-badge-content';
/** Directive to display a text badge. */
let MatBadge = /*#__PURE__*/(() => {
  class MatBadge extends _MatBadgeBase {
    /** The color of the badge. Can be `primary`, `accent`, or `warn`. */
    get color() {
      return this._color;
    }
    set color(value) {
      this._setColor(value);
      this._color = value;
    }
    /** Whether the badge should overlap its contents or not */
    get overlap() {
      return this._overlap;
    }
    set overlap(val) {
      this._overlap = (0,coercion/* coerceBooleanProperty */.Ig)(val);
    }
    /** The content for the badge */
    get content() {
      return this._content;
    }
    set content(newContent) {
      this._updateRenderedContent(newContent);
    }
    /** Message used to describe the decorated element via aria-describedby */
    get description() {
      return this._description;
    }
    set description(newDescription) {
      this._updateHostAriaDescription(newDescription);
    }
    /** Whether the badge is hidden. */
    get hidden() {
      return this._hidden;
    }
    set hidden(val) {
      this._hidden = (0,coercion/* coerceBooleanProperty */.Ig)(val);
    }
    constructor(_ngZone, _elementRef, _ariaDescriber, _renderer, _animationMode) {
      super();
      this._ngZone = _ngZone;
      this._elementRef = _elementRef;
      this._ariaDescriber = _ariaDescriber;
      this._renderer = _renderer;
      this._animationMode = _animationMode;
      this._color = 'primary';
      this._overlap = true;
      /**
       * Position the badge should reside.
       * Accepts any combination of 'above'|'below' and 'before'|'after'
       */
      this.position = 'above after';
      /** Size of the badge. Can be 'small', 'medium', or 'large'. */
      this.size = 'medium';
      /** Unique id for the badge */
      this._id = nextId++;
      /** Whether the OnInit lifecycle hook has run yet */
      this._isInitialized = false;
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        const nativeElement = _elementRef.nativeElement;
        if (nativeElement.nodeType !== nativeElement.ELEMENT_NODE) {
          throw Error('matBadge must be attached to an element node.');
        }
      }
    }
    /** Whether the badge is above the host or not */
    isAbove() {
      return this.position.indexOf('below') === -1;
    }
    /** Whether the badge is after the host or not */
    isAfter() {
      return this.position.indexOf('before') === -1;
    }
    /**
     * Gets the element into which the badge's content is being rendered. Undefined if the element
     * hasn't been created (e.g. if the badge doesn't have content).
     */
    getBadgeElement() {
      return this._badgeElement;
    }
    ngOnInit() {
      // We may have server-side rendered badge that we need to clear.
      // We need to do this in ngOnInit because the full content of the component
      // on which the badge is attached won't necessarily be in the DOM until this point.
      this._clearExistingBadges();
      if (this.content && !this._badgeElement) {
        this._badgeElement = this._createBadgeElement();
        this._updateRenderedContent(this.content);
      }
      this._isInitialized = true;
    }
    ngOnDestroy() {
      // ViewEngine only: when creating a badge through the Renderer, Angular remembers its index.
      // We have to destroy it ourselves, otherwise it'll be retained in memory.
      if (this._renderer.destroyNode) {
        this._renderer.destroyNode(this._badgeElement);
      }
      this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
    }
    /** Creates the badge element */
    _createBadgeElement() {
      const badgeElement = this._renderer.createElement('span');
      const activeClass = 'mat-badge-active';
      badgeElement.setAttribute('id', `mat-badge-content-${this._id}`);
      // The badge is aria-hidden because we don't want it to appear in the page's navigation
      // flow. Instead, we use the badge to describe the decorated element with aria-describedby.
      badgeElement.setAttribute('aria-hidden', 'true');
      badgeElement.classList.add(BADGE_CONTENT_CLASS);
      if (this._animationMode === 'NoopAnimations') {
        badgeElement.classList.add('_mat-animation-noopable');
      }
      this._elementRef.nativeElement.appendChild(badgeElement);
      // animate in after insertion
      if (typeof requestAnimationFrame === 'function' && this._animationMode !== 'NoopAnimations') {
        this._ngZone.runOutsideAngular(() => {
          requestAnimationFrame(() => {
            badgeElement.classList.add(activeClass);
          });
        });
      } else {
        badgeElement.classList.add(activeClass);
      }
      return badgeElement;
    }
    /** Update the text content of the badge element in the DOM, creating the element if necessary. */
    _updateRenderedContent(newContent) {
      const newContentNormalized = `${newContent ?? ''}`.trim();
      // Don't create the badge element if the directive isn't initialized because we want to
      // append the badge element to the *end* of the host element's content for backwards
      // compatibility.
      if (this._isInitialized && newContentNormalized && !this._badgeElement) {
        this._badgeElement = this._createBadgeElement();
      }
      if (this._badgeElement) {
        this._badgeElement.textContent = newContentNormalized;
      }
      this._content = newContentNormalized;
    }
    /** Updates the host element's aria description via AriaDescriber. */
    _updateHostAriaDescription(newDescription) {
      this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this.description);
      if (newDescription) {
        this._ariaDescriber.describe(this._elementRef.nativeElement, newDescription);
      }
      this._description = newDescription;
    }
    /** Adds css theme class given the color to the component host */
    _setColor(colorPalette) {
      const classList = this._elementRef.nativeElement.classList;
      classList.remove(`mat-badge-${this._color}`);
      if (colorPalette) {
        classList.add(`mat-badge-${colorPalette}`);
      }
    }
    /** Clears any existing badges that might be left over from server-side rendering. */
    _clearExistingBadges() {
      // Only check direct children of this host element in order to avoid deleting
      // any badges that might exist in descendant elements.
      const badges = this._elementRef.nativeElement.querySelectorAll(`:scope > .${BADGE_CONTENT_CLASS}`);
      for (const badgeElement of Array.from(badges)) {
        if (badgeElement !== this._badgeElement) {
          badgeElement.remove();
        }
      }
    }
  }
  MatBadge.ɵfac = function MatBadge_Factory(t) {
    return new (t || MatBadge)(core/* ɵɵdirectiveInject */.Y36(core/* NgZone */.R0b), core/* ɵɵdirectiveInject */.Y36(core/* ElementRef */.SBq), core/* ɵɵdirectiveInject */.Y36(a11y/* AriaDescriber */.$s), core/* ɵɵdirectiveInject */.Y36(core/* Renderer2 */.Qsj), core/* ɵɵdirectiveInject */.Y36(core/* ANIMATION_MODULE_TYPE */.QbO, 8));
  };
  MatBadge.ɵdir = /* @__PURE__ */core/* ɵɵdefineDirective */.lG2({
    type: MatBadge,
    selectors: [["", "matBadge", ""]],
    hostAttrs: [1, "mat-badge"],
    hostVars: 20,
    hostBindings: function MatBadge_HostBindings(rf, ctx) {
      if (rf & 2) {
        core/* ɵɵclassProp */.ekj("mat-badge-overlap", ctx.overlap)("mat-badge-above", ctx.isAbove())("mat-badge-below", !ctx.isAbove())("mat-badge-before", !ctx.isAfter())("mat-badge-after", ctx.isAfter())("mat-badge-small", ctx.size === "small")("mat-badge-medium", ctx.size === "medium")("mat-badge-large", ctx.size === "large")("mat-badge-hidden", ctx.hidden || !ctx.content)("mat-badge-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: ["matBadgeDisabled", "disabled"],
      color: ["matBadgeColor", "color"],
      overlap: ["matBadgeOverlap", "overlap"],
      position: ["matBadgePosition", "position"],
      content: ["matBadge", "content"],
      description: ["matBadgeDescription", "description"],
      size: ["matBadgeSize", "size"],
      hidden: ["matBadgeHidden", "hidden"]
    },
    features: [core/* ɵɵInheritDefinitionFeature */.qOj]
  });
  return MatBadge;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let MatBadgeModule = /*#__PURE__*/(() => {
  class MatBadgeModule {}
  MatBadgeModule.ɵfac = function MatBadgeModule_Factory(t) {
    return new (t || MatBadgeModule)();
  };
  MatBadgeModule.ɵmod = /* @__PURE__ */core/* ɵɵdefineNgModule */.oAB({
    type: MatBadgeModule
  });
  MatBadgeModule.ɵinj = /* @__PURE__ */core/* ɵɵdefineInjector */.cJS({
    imports: [a11y/* A11yModule */.rt, fesm2020_core/* MatCommonModule */.BQ, fesm2020_core/* MatCommonModule */.BQ]
  });
  return MatBadgeModule;
})();
/*#__PURE__*/(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=badge.mjs.map
;// CONCATENATED MODULE: ./src/app/modules/history/components/history-pin/history-pin.component.ts




























const _c0 = ["dynamicContainer"];
function HistoryPinComponent_div_0_th_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 26);
    core/* ɵɵtext */._uU(1, "Carga");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryPinComponent_div_0_td_13_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵelement */._UZ(1, "mat-icon", 28);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    const ctx_r5 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("innerHTML", ctx_r5.getLoadIcon(element_r22.frghtKind, element_r22.activeCount), core/* ɵɵsanitizeHtml */.oJD);
  }
}
function HistoryPinComponent_div_0_th_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 29);
    core/* ɵɵtext */._uU(1, "Pin");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryPinComponent_div_0_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵlistener */.NdJ("click", function HistoryPinComponent_div_0_td_16_Template_td_click_0_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r25);
      const element_r23 = restoredCtx.$implicit;
      const ctx_r24 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r24.nextStory(element_r23));
    });
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r23.pinNbr);
  }
}
function HistoryPinComponent_div_0_th_18_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 29);
    core/* ɵɵtext */._uU(1, "Bl/Hbl");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryPinComponent_div_0_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵlistener */.NdJ("click", function HistoryPinComponent_div_0_td_19_Template_td_click_0_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r28);
      const element_r26 = restoredCtx.$implicit;
      const ctx_r27 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r27.nextStory(element_r26));
    });
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r26.blNbr);
  }
}
function HistoryPinComponent_div_0_th_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 29);
    core/* ɵɵtext */._uU(1, "Empresa");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryPinComponent_div_0_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵlistener */.NdJ("click", function HistoryPinComponent_div_0_td_22_Template_td_click_0_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r31);
      const element_r29 = restoredCtx.$implicit;
      const ctx_r30 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r30.nextStory(element_r29));
    });
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r29.truckingCompanyNameLDAP);
  }
}
function HistoryPinComponent_div_0_th_24_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 29);
    core/* ɵɵtext */._uU(1, "Creado Por");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryPinComponent_div_0_td_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵlistener */.NdJ("click", function HistoryPinComponent_div_0_td_25_Template_td_click_0_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r34);
      const element_r32 = restoredCtx.$implicit;
      const ctx_r33 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r33.nextStory(element_r32));
    });
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r32 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r32.createdByLDAP);
  }
}
function HistoryPinComponent_div_0_th_27_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 29);
    core/* ɵɵtext */._uU(1, "Fecha");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryPinComponent_div_0_td_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵlistener */.NdJ("click", function HistoryPinComponent_div_0_td_28_Template_td_click_0_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r37);
      const element_r35 = restoredCtx.$implicit;
      const ctx_r36 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r36.nextStory(element_r35));
    });
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r35 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r35.formattedDate);
  }
}
function HistoryPinComponent_div_0_th_30_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 26);
    core/* ɵɵtext */._uU(1, "Contenedores");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryPinComponent_div_0_td_31_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "mat-icon", 35);
    core/* ɵɵlistener */.NdJ("click", function HistoryPinComponent_div_0_td_31_mat_icon_4_Template_mat_icon_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r44);
      const element_r38 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r42 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r42.toggleRow(element_r38));
    });
    core/* ɵɵtext */._uU(1, "keyboard_arrow_down");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryPinComponent_div_0_td_31_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "mat-icon", 35);
    core/* ɵɵlistener */.NdJ("click", function HistoryPinComponent_div_0_td_31_mat_icon_5_Template_mat_icon_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r47);
      const element_r38 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r45 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r45.toggleRow(element_r38));
    });
    core/* ɵɵtext */._uU(1, "keyboard_arrow_up");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryPinComponent_div_0_td_31_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-icon", 36);
    core/* ɵɵtext */._uU(1, "keyboard_arrow_up");
    core/* ɵɵelementEnd */.qZA();
  }
}
const _c1 = function (a0) {
  return {
    "active-count-zero": a0
  };
};
function HistoryPinComponent_div_0_td_31_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27)(1, "div", 31);
    core/* ɵɵelement */._UZ(2, "div", 32);
    core/* ɵɵelementContainerStart */.ynx(3);
    core/* ɵɵtemplate */.YNc(4, HistoryPinComponent_div_0_td_31_mat_icon_4_Template, 2, 0, "mat-icon", 33);
    core/* ɵɵtemplate */.YNc(5, HistoryPinComponent_div_0_td_31_mat_icon_5_Template, 2, 0, "mat-icon", 33);
    core/* ɵɵtemplate */.YNc(6, HistoryPinComponent_div_0_td_31_mat_icon_6_Template, 2, 0, "mat-icon", 34);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("matBadge", element_r38.activeCount)("ngClass", core/* ɵɵpureFunction1 */.VKq(5, _c1, element_r38.activeCount === "0"));
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", !element_r38.selected && element_r38.activeCount !== "0");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r38.selected && element_r38.activeCount !== "0");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r38.activeCount === "0");
  }
}
function HistoryPinComponent_div_0_td_33_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr", 43)(1, "td", 44);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "td", 44);
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "td", 44);
    core/* ɵɵtext */._uU(6);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const pinContainerizedElement_r50 = ctx.$implicit;
    const element_r48 = core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r49 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(pinContainerizedElement_r50.unitNbr);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r49.getTamano(pinContainerizedElement_r50.twenty, element_r48.frghtKind));
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r49.getTipo(element_r48));
  }
}
function HistoryPinComponent_div_0_td_33_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27)(1, "div", 37)(2, "div", 38)(3, "table", 39)(4, "thead")(5, "tr")(6, "th", 40);
    core/* ɵɵtext */._uU(7, "Contenedor");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(8, "th", 40);
    core/* ɵɵtext */._uU(9, "Tama\u00F1o");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(10, "th", 40);
    core/* ɵɵtext */._uU(11, "Tipo");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(12, "tr")(13, "th");
    core/* ɵɵelement */._UZ(14, "hr");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(15, "th");
    core/* ɵɵelement */._UZ(16, "hr");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(17, "th");
    core/* ɵɵelement */._UZ(18, "hr");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(19, "th");
    core/* ɵɵelement */._UZ(20, "hr");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(21, "tr");
    core/* ɵɵelement */._UZ(22, "th", 41);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(23, "tbody");
    core/* ɵɵtemplate */.YNc(24, HistoryPinComponent_div_0_td_33_tr_24_Template, 7, 3, "tr", 42);
    core/* ɵɵelementStart */.TgZ(25, "tr");
    core/* ɵɵelement */._UZ(26, "th", 41);
    core/* ɵɵelementEnd */.qZA()()()()()();
  }
  if (rf & 2) {
    const element_r48 = ctx.$implicit;
    const ctx_r18 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵattribute */.uIk("colspan", ctx_r18.displayedColumns.length);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("@detailExpand", element_r48.selected ? "expanded" : "collapsed");
    core/* ɵɵadvance */.xp6(23);
    core/* ɵɵproperty */.Q6J("ngForOf", element_r48.pinContainerized);
  }
}
function HistoryPinComponent_div_0_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 45);
  }
}
function HistoryPinComponent_div_0_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 46);
  }
  if (rf & 2) {
    const row_r52 = ctx.$implicit;
    core/* ɵɵclassProp */.ekj("example-expanded-row", row_r52.selected);
    core/* ɵɵproperty */.Q6J("ngClass", core/* ɵɵpureFunction1 */.VKq(3, _c1, row_r52.activeCount === "0"));
  }
}
function HistoryPinComponent_div_0_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 47);
  }
}
const _c2 = function () {
  return ["expandedDetail"];
};
function HistoryPinComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 3)(1, "mat-form-field", 4)(2, "mat-label");
    core/* ɵɵtext */._uU(3, "Filtro");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(4, "mat-icon", 5);
    core/* ɵɵtext */._uU(5, "search");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "input", 6, 7);
    core/* ɵɵlistener */.NdJ("keyup", function HistoryPinComponent_div_0_Template_input_keyup_6_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r55);
      const ctx_r54 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r54.submit($event));
    });
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(8, "ng-scrollbar", 8);
    core/* ɵɵlistener */.NdJ("reachedBottom", function HistoryPinComponent_div_0_Template_ng_scrollbar_reachedBottom_8_listener() {
      core/* ɵɵrestoreView */.CHM(_r55);
      const ctx_r56 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r56.onScroll());
    });
    core/* ɵɵelementStart */.TgZ(9, "table", 9, 10);
    core/* ɵɵelementContainerStart */.ynx(11, 11);
    core/* ɵɵtemplate */.YNc(12, HistoryPinComponent_div_0_th_12_Template, 2, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(13, HistoryPinComponent_div_0_td_13_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(14, 14);
    core/* ɵɵtemplate */.YNc(15, HistoryPinComponent_div_0_th_15_Template, 2, 0, "th", 15);
    core/* ɵɵtemplate */.YNc(16, HistoryPinComponent_div_0_td_16_Template, 2, 1, "td", 16);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(17, 17);
    core/* ɵɵtemplate */.YNc(18, HistoryPinComponent_div_0_th_18_Template, 2, 0, "th", 15);
    core/* ɵɵtemplate */.YNc(19, HistoryPinComponent_div_0_td_19_Template, 2, 1, "td", 16);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(20, 18);
    core/* ɵɵtemplate */.YNc(21, HistoryPinComponent_div_0_th_21_Template, 2, 0, "th", 15);
    core/* ɵɵtemplate */.YNc(22, HistoryPinComponent_div_0_td_22_Template, 2, 1, "td", 16);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(23, 19);
    core/* ɵɵtemplate */.YNc(24, HistoryPinComponent_div_0_th_24_Template, 2, 0, "th", 15);
    core/* ɵɵtemplate */.YNc(25, HistoryPinComponent_div_0_td_25_Template, 2, 1, "td", 16);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(26, 20);
    core/* ɵɵtemplate */.YNc(27, HistoryPinComponent_div_0_th_27_Template, 2, 0, "th", 15);
    core/* ɵɵtemplate */.YNc(28, HistoryPinComponent_div_0_td_28_Template, 2, 1, "td", 16);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(29, 21);
    core/* ɵɵtemplate */.YNc(30, HistoryPinComponent_div_0_th_30_Template, 2, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(31, HistoryPinComponent_div_0_td_31_Template, 7, 7, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(32, 22);
    core/* ɵɵtemplate */.YNc(33, HistoryPinComponent_div_0_td_33_Template, 27, 3, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵtemplate */.YNc(34, HistoryPinComponent_div_0_tr_34_Template, 1, 0, "tr", 23);
    core/* ɵɵtemplate */.YNc(35, HistoryPinComponent_div_0_tr_35_Template, 1, 5, "tr", 24);
    core/* ɵɵtemplate */.YNc(36, HistoryPinComponent_div_0_tr_36_Template, 1, 0, "tr", 25);
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(9);
    core/* ɵɵproperty */.Q6J("dataSource", ctx_r0.dataSource);
    core/* ɵɵadvance */.xp6(25);
    core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx_r0.displayedColumns);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx_r0.displayedColumns);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matRowDefColumns", core/* ɵɵpureFunction0 */.DdM(4, _c2));
  }
}
const _c3 = function (a0) {
  return {
    display: a0
  };
};
let HistoryPinComponent = /*#__PURE__*/(() => {
  class HistoryPinComponent {
    constructor(store, sanitizer, cdr, scrollService, resolver, historyPinStateService, router, base64EncryptionUtilService) {
      this.store = store;
      this.sanitizer = sanitizer;
      this.cdr = cdr;
      this.scrollService = scrollService;
      this.resolver = resolver;
      this.historyPinStateService = historyPinStateService;
      this.router = router;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.destroy$ = new Subject/* Subject */.x();
      this.displayedColumns = [];
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.page = 0;
      this.existData = false;
      this.detailPin = false;
      this.historyPinSubscription = new Subscription/* Subscription */.w0();
      this.pin = {
        pin: "",
        units: []
      };
      this.selectedState = new Map(); // Mantener el estado seleccionado localmente
      this.lastSearch = null;
    }
    ngOnInit() {
      this.loadData();
    }
    submit(event) {
      const filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    standardDateFormat(date) {
      if (date) return moment(date, "DD/MM/YYYY").format("YYYY/MM/DD");else return "";
    }
    getActiveCount(pincontainerized) {
      const valor = pincontainerized.filter(item => item.active).length;
      if (valor > 0) {
        return "+" + valor + "";
      } else {
        return "" + valor + "";
      }
    }
    getTamano(twenty, frghtKind) {
      if (frghtKind === "FCL") {
        if (twenty) {
          return "20'";
        } else {
          return "40'";
        }
      } else {
        return "BBK";
      }
    }
    getTipo(element) {
      if (element.bkgNbr === null && element.edoNbr === null && element.eroNbr === null) {
        return "IMPO";
      } else {
        return "EXPO";
      }
    }
    getLoadIcon(frghtKind, activeCount) {
      let svg = '';
      if (frghtKind === "FCL") {
        if (activeCount != "0") {
          svg = `<svg id="container-carga" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.89 40.65">
        <defs>
        <style>
        .container-carga-1{stroke-width:.5px;fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;}
        .container-carga-2{stroke-width:.25px;fill:#66bb6a;stroke:none ;stroke-linecap:round;stroke-linejoin:round;}
        </style>
        </defs>
        <g id="container-carga-1-2">
        <rect class="container-carga-1" x=".25" y=".25" width="81.39" height="40.15" rx="2.45" ry="2.45"/>
        <rect class="container-carga-2" x="6.9" y="6.62" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="16.87" y="6.94" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="26.94" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="37.01" y="6.52" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="47.68" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="57.88" y="6.52" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="68.07" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        </g></svg>`;
        } else {
          svg = `<svg id="container-carga-inactive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.89 40.65">
        <defs>
        <style>
        .container-carga-1-inactive{stroke-width:.5px;fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;}
        .container-carga-2-inactive{stroke-width:.25px;fill:#231f20;stroke:none ;stroke-linecap:round;stroke-linejoin:round;}
        </style>
        </defs>
        <g id="container-carga-1-2">
        <rect class="container-carga-1-inactive" x=".25" y=".25" width="81.39" height="40.15" rx="2.45" ry="2.45"/>
        <rect class="container-carga-2-inactive" x="6.9" y="6.62" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="16.87" y="6.94" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="26.94" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="37.01" y="6.52" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="47.68" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="57.88" y="6.52" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="68.07" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        </g></svg>`;
        }
      } else {
        if (activeCount != "0") {
          svg = `<svg id="cargasuelta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.69 74.74">
        <defs>
        <style>
        .cargasuelta-1{fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;}
        .cargasuelta-2{fill:#66bb6a;}
        </style>
        </defs>
        <g id="cargasuelta_1-2">
        <polygon class="cargasuelta-1" points="39.34 40.15 19.8 53.45 .25 40.15 19.8 26.85 39.34 40.15"/>
        <polygon class="cargasuelta-2" points="58.89 26.85 39.34 40.15 19.8 26.85 39.34 13.55 58.89 26.85"/>
        <polyline class="cargasuelta-1" points="62.34 51.21 62.34 61.19 39.34 74.49 16.34 61.19 16.34 51.21"/>
        <polygon class="cargasuelta-1" points="39.34 13.55 19.8 26.85 .25 13.55 19.8 .25 39.34 13.55"/>
        <polygon class="cargasuelta-1" points="78.44 40.15 58.89 53.45 39.34 40.15 58.89 26.85 78.44 40.15"/>
        <polygon class="cargasuelta-1" points="78.44 13.55 58.89 26.85 39.34 13.55 58.89 .25 78.44 13.55"/>
        <line class="cargasuelta-1" x1="39.34" y1="74.49" x2="39.34" y2="40.15"/>
        </g>
        </svg>`;
        } else {
          svg = `<svg id="cargasuelta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.69 74.74">
          <defs>
          <style>
          .cargasuelta-1-inactive{fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;}
          .cargasuelta-2-inactive{fill:#231f20;}
          </style>
          </defs>
          <g id="cargasuelta_1-2">
          <polygon class="cargasuelta-1-inactive" points="39.34 40.15 19.8 53.45 .25 40.15 19.8 26.85 39.34 40.15"/>
          <polygon class="cargasuelta-2-inactive" points="58.89 26.85 39.34 40.15 19.8 26.85 39.34 13.55 58.89 26.85"/>
          <polyline class="cargasuelta-1-inactive" points="62.34 51.21 62.34 61.19 39.34 74.49 16.34 61.19 16.34 51.21"/>
          <polygon class="cargasuelta-1-inactive" points="39.34 13.55 19.8 26.85 .25 13.55 19.8 .25 39.34 13.55"/>
          <polygon class="cargasuelta-1-inactive" points="78.44 40.15 58.89 53.45 39.34 40.15 58.89 26.85 78.44 40.15"/>
          <polygon class="cargasuelta-1-inactive" points="78.44 13.55 58.89 26.85 39.34 13.55 58.89 .25 78.44 13.55"/>
          <line class="cargasuelta-1-inactive" x1="39.34" y1="74.49" x2="39.34" y2="40.15"/>
          </g>
          </svg>`;
        }
      }
      return this.sanitizer.bypassSecurityTrustHtml(svg);
    }
    onScroll() {
      //this.scrollService.loadMore();
      if (this.parameters) {
        this.parameters.page += 1;
        this.parameters.cleanSelectedState = false;
        this.store.dispatch((0,history_actions/* updateParameters */.LO)({
          parameters: this.parameters
        }));
        this.store.dispatch((0,history_actions/* getHistoryPin */.Zs)(this.parameters));
      }
    }
    toggleRow(element) {
      element.selected = !element.selected;
      const key = `${element.id}-${element.pinContainerized}`; // Utilizar una clave única que combine id y pinContainerized
      this.selectedState.set(key, element.selected);
    }
    nextStory(element) {
      if (element.activeCount != "0") {
        if (element.frghtKind === "FCL") {
          const pin = {
            pin: element.pinNbr,
            units: element.pinContainerized.map(pinValue => ({
              id: pinValue.id,
              unit: pinValue.unitNbr,
              size: pinValue.twenty ? "20" : "40",
              shipper: pinValue.truckingCompanyNameLDAP,
              active: pinValue.active
            }))
          };
          this.pin = pin;
          this.detailPin = true;
          this.loadDynamicComponent(this.pin, element.blNbr);
        } else {
          // carga suelta
          const pin = {
            nbr: element.blNbr,
            pin: element.pinNbr,
            units: element.pinContainerized.map(value => ({
              quantity: value.cargoQuantity,
              weight: value.cargoWeigth,
              destination: value.destination || "Sin Destino",
              shipper: `${value.truckVisitAppointmetId}/${value.truckingCompanyNameLDAP}`,
              active: value.active
            })),
            createdAt: element.createdAt
          };
          this.detailPin = true;
          this.loadDynamicComponentDetached(pin, element.blNbr);
        }
      }
    }
    loadDynamicComponent(pin, blNbr) {
      this.dynamicContainer.clear();
      const factory = this.resolver.resolveComponentFactory(generate_pin_display_item_component/* GeneratePinDisplayItemComponent */.a);
      const componentRef = this.dynamicContainer.createComponent(factory);
      componentRef.instance.pin = pin;
      componentRef.instance.lastSearch = blNbr;
      this.lastSearch = blNbr;
      this.store.dispatch((0,containerized_load_actions/* getContainerizedLoad */.M8)({
        nbr: this.base64EncryptionUtilService.encrypt(blNbr)
      }));
    }
    loadDynamicComponentDetached(pin, blNbr) {
      this.dynamicContainer.clear();
      const factory = this.resolver.resolveComponentFactory(generate_pin_display_item_generate_pin_display_item_component/* GeneratePinDisplayItemComponent */.a);
      const componentRef = this.dynamicContainer.createComponent(factory);
      componentRef.instance.pin = pin;
      componentRef.instance.lastSearch = blNbr;
      this.lastSearch = blNbr;
      this.store.dispatch((0,detached_load_actions/* getDetachedLoad */.fJ)({
        nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch)
      }));
    }
    loadData() {
      this.historyPinSubscription = this.store.select(historyFeatureSelector).subscribe({
        next: store => {
          if (store.parameters) {
            this.parameters = {
              ...store.parameters
            }; // Guardar los parámetros
            if (this.parameters.cleanSelectedState) {
              this.selectedState.clear();
            }
          }
          if (this.detailPin) {
            this.reloadComponent();
            return;
          }
          this.detailPin = false;
          this.displayedColumns = ['carga', 'pinNbr', 'blNbr', 'truckingCompanyNameLDAP', 'createdByLDAP', 'formattedDate', 'activeCount'];
          const initialElement = store.result;
          let historyPines = [];
          initialElement.forEach(historyPin => {
            historyPines = [...historyPines, historyPin];
          });
          const resultWithActiveCount = historyPines.map(item => ({
            ...item,
            activeCount: this.getActiveCount(item.pinContainerized),
            formattedDate: this.standardDateFormat(item.createdAt),
            selected: this.selectedState.get(`${item.id}-${item.pinContainerized}`) || false // Restaurar el estado seleccionado
          }));
          /*const resultWithActiveCount = store.result.map(item => ({
            ...item,
            activeCount: this.getActiveCount(item.pinContainerized),
            formattedDate: this.standardDateFormat(item.createdAt)
          }));*/
          this.dataSource.data = resultWithActiveCount;
          if (store.result.length > 0) {
            this.existData = true;
          } else {
            this.existData = false;
          }
          this.cdr.detectChanges();
          this.dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
              case 'formattedDate':
                {
                  let newDate = new Date(item.formattedDate);
                  return newDate;
                }
              default:
                {
                  return item[property];
                }
            }
          };
          this.dataSource.sort = this.sort;
          this.cdr.detectChanges();
        },
        error: error => console.error(error)
      });
    }
    reloadComponent() {
      this.detailPin = false;
      this.loadData();
    }
    getBadgeColor(activeCount) {
      return activeCount === "0" ? 'red' : 'green'; // Cambia los colores según tus necesidades
    }

    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
      if (this.historyPinSubscription) {
        this.historyPinSubscription.unsubscribe();
      }
      this.store.dispatch((0,history_actions/* cleanHistoryPin */.bE)());
      //this.store.dispatch(cleanGeneratePin());
      //this.store.dispatch(getContainerizedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch as string) }));
      //this.store.dispatch(setOperationStuck({ operationStuck: false }));
    }
  }

  HistoryPinComponent.ɵfac = function HistoryPinComponent_Factory(t) {
    return new (t || HistoryPinComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(platform_browser/* DomSanitizer */.H7), core/* ɵɵdirectiveInject */.Y36(core/* ChangeDetectorRef */.sBO), core/* ɵɵdirectiveInject */.Y36(ScrollService), core/* ɵɵdirectiveInject */.Y36(core/* ComponentFactoryResolver */._Vd), core/* ɵɵdirectiveInject */.Y36(HistorypinstateService), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L));
  };
  HistoryPinComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: HistoryPinComponent,
    selectors: [["app-history-pin"]],
    viewQuery: function HistoryPinComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
        core/* ɵɵviewQuery */.Gf(_c0, 5, core/* ViewContainerRef */.s_b);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.dynamicContainer = _t.first);
      }
    },
    decls: 4,
    vars: 4,
    consts: [["class", "history-pins", 4, "ngIf"], [1, "display-pin", 3, "ngStyle"], ["dynamicContainer", ""], [1, "history-pins"], [1, "queries__filter"], ["matPrefix", "", 1, "queries__filter-icon"], ["matInput", "", "placeholder", "Ingrese valor para filtrar", 3, "keyup"], ["input", ""], [1, "manage-history", 3, "reachedBottom"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource"], ["invoicesTable", ""], ["matColumnDef", "carga"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "pinNbr"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "blNbr"], ["matColumnDef", "truckingCompanyNameLDAP"], ["matColumnDef", "createdByLDAP"], ["matColumnDef", "formattedDate"], ["matColumnDef", "activeCount"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "ngClass", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "innerHTML"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "click"], [1, "history-cross__table-actions"], ["matBadgeOverlap", "false", 1, "demo-section", 3, "matBadge", "ngClass"], [3, "click", 4, "ngIf"], ["style", "visibility: hidden;", 4, "ngIf"], [3, "click"], [2, "visibility", "hidden"], [1, "example-element-detail"], [1, "table-border-rounded"], [1, "history-cross__sub-table"], [1, "history-cross__table-header-item", "history-cross__table-body-item__darken"], [1, "history-cross__table-space_min"], ["class", "credits", 4, "ngFor", "ngForOf"], [1, "credits"], [1, "history-cross__table-body-item", "history-cross__table-body-item__darken", "history-cross__table-body-outlined"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "ngClass"], ["mat-row", "", 1, "example-detail-row"]],
    template: function HistoryPinComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, HistoryPinComponent_div_0_Template, 37, 5, "div", 0);
        core/* ɵɵelementStart */.TgZ(1, "div", 1);
        core/* ɵɵelementContainer */.GkF(2, null, 2);
        core/* ɵɵelementEnd */.qZA();
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", ctx.existData && !ctx.detailPin);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngStyle", core/* ɵɵpureFunction1 */.VKq(2, _c3, ctx.detailPin ? "block" : "none"));
      }
    },
    dependencies: [common/* NgClass */.mk, common/* NgForOf */.sg, common/* NgIf */.O5, common/* NgStyle */.PC, icon/* MatIcon */.Hw, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatPrefix */.qo, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, sort/* MatSort */.YE, sort/* MatSortHeader */.nU, ngx_scrollbar/* NgScrollbar */.KC, ngx_scrollbar_reached_event/* NgScrollbarReachedBottom */.kv, MatBadge],
    styles: [".wrapper[_ngcontent-%COMP%]{width:100%;height:100%;padding:.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;gap:.5rem}.header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.title-header[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Gilroy-Light;margin:0;padding-left:1rem;color:#78909c;font-weight:300}.icon-title[_ngcontent-%COMP%]{width:1.5rem}.title-card[_ngcontent-%COMP%]{width:max-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.queries__filter[_ngcontent-%COMP%]{width:100%}.table-border-rounded[_ngcontent-%COMP%]{width:100%;background-color:#f1f2f6;border-radius:.5rem}.history-cross__table[_ngcontent-%COMP%]{width:100%;border-collapse:separate;border-spacing:0}.history-cross__sub-table[_ngcontent-%COMP%]{width:100%;border-collapse:separate;border-spacing:0;margin:0}.history-cross__table-header[_ngcontent-%COMP%]{background-color:#92b976;color:#fff}.history-cross__table-header-item[_ngcontent-%COMP%]{padding:1rem;font-weight:500;text-align:center}.history-cross__table-body-item[_ngcontent-%COMP%]{text-align:center}.history-cross__table-body-item__darken[_ngcontent-%COMP%]{background-color:#f1f2f6}.history-cross__table-header-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.history-cross__table-header-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.history-cross__table-body-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}.history-cross__table-body-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}.history-cross__table-body-outlined[_ngcontent-%COMP%]:last-child{border-right:1px solid #78909c;border-right:0}.history-cross__sub-table-header-item[_ngcontent-%COMP%]{padding:1rem;font-weight:500;text-align:center}.history-cross__sub-table-header-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.history-cross__sub-table-header-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.history-cross__sub-table-body-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.history-cross__sub-table-body-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.history-cross__table-outlined[_ngcontent-%COMP%]{border:1px solid #78909c}.history-cross__table-space[_ngcontent-%COMP%]{padding:.5rem}.history-cross__table-space_min[_ngcontent-%COMP%]{padding:.25rem}.history-cross__table-body-item[_ngcontent-%COMP%]{padding:1rem}.history-cross__title[_ngcontent-%COMP%]{margin-bottom:1rem;display:flex;justify-content:flex-start;align-content:center}.history-cross__title-text[_ngcontent-%COMP%]{color:#777;margin:0;font-weight:600}.history-cross__thead[_ngcontent-%COMP%]{position:sticky;top:0;left:0}.title-icon[_ngcontent-%COMP%]{width:2rem;margin-right:1rem}.history-cross__icon-check[_ngcontent-%COMP%], .history-cross__icon-x[_ngcontent-%COMP%]{width:2rem}.history-cross__table-actions[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr;justify-items:center;align-items:center}.example-detail-row[_ngcontent-%COMP%]{height:0}.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.example-element-detail[_ngcontent-%COMP%]{overflow:hidden;display:flex}.detail-table[_ngcontent-%COMP%]{background:#b7b7b773;text-align:center}  .mdc-tab__text-label{flex-direction:column!important}  .mdc-data-table__header-cell{text-align:center!important;font-family:Gilroy-ExtraBold;color:#66bb6a;font-size:1rem}  .mdc-data-table__row{background-color:#dfe6e91a!important;border:transparent solid!important;border-bottom:.25rem transparent solid!important}  .mdc-data-table__row:hover{background-color:#7ba0521a!important}  .mdc-data-table__row td{font-family:Gilroy-Light;color:#666!important}  .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}  .success-snackbar .mdc-snackbar__surface{color:#155724!important;background-color:#d4edda!important;border-color:#c3e6cb!important}  .success-snackbar .mdc-snackbar__surface .mdc-button__label{color:#155724!important}  .success-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#155724!important}  .warning-snackbar .mdc-snackbar__surface{color:#856404!important;background-color:#fff3cd!important;border-color:#ffeeba!important}  .warning-snackbar .mdc-snackbar__surface .mdc-button__label{color:#856404!important}  .warning-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#856404!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:transparent!important;--mat-mdc-button-persistent-ripple-color: currentColor !important}.manage-history[_ngcontent-%COMP%]{height:100vh}.history-pins[_ngcontent-%COMP%]{width:100%;height:100%;padding-bottom:0}.hidden-icon[_ngcontent-%COMP%]{background-color:#9d9c9c}  .mdc-data-table__row.active-count-zero{background-color:#ececec!important}  .mat-badge.active-count-zero .mat-badge-content{background-color:#d0d0cf!important;color:#000!important}"],
    data: {
      animation: [(0,animations/* trigger */.X$)('detailExpand', [(0,animations/* state */.SB)('collapsed', (0,animations/* style */.oB)({
        height: '0px',
        minHeight: '0'
      })), (0,animations/* state */.SB)('expanded', (0,animations/* style */.oB)({
        height: '*'
      })), (0,animations/* transition */.eR)('expanded <=> collapsed', (0,animations/* animate */.jt)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
    }
  });
  return HistoryPinComponent;
})();
// EXTERNAL MODULE: ./src/app/core/auth/services/AESEncryptionUtil.service.ts
var AESEncryptionUtil_service = __webpack_require__(3056);
// EXTERNAL MODULE: ./src/app/shared/components/card-appointment/card-appointment.component.ts
var card_appointment_component = __webpack_require__(52937);
;// CONCATENATED MODULE: ./src/app/modules/history/components/history-appointments/history-appointments.component.ts





























const history_appointments_component_c0 = ["dynamicContainer"];
function HistoryAppointmentsComponent_div_0_th_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 22);
    core/* ɵɵtext */._uU(1, "Carga");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryAppointmentsComponent_div_0_td_13_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 23);
    core/* ɵɵelement */._UZ(1, "mat-icon", 24);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    const ctx_r5 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("innerHTML", ctx_r5.getLoadIcon(element_r18.tipoTrx, element_r18.state), core/* ɵɵsanitizeHtml */.oJD);
  }
}
function HistoryAppointmentsComponent_div_0_th_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵtext */._uU(1, "N\u00FAmero de cita");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryAppointmentsComponent_div_0_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 26);
    core/* ɵɵlistener */.NdJ("click", function HistoryAppointmentsComponent_div_0_td_16_Template_td_click_0_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r21);
      const element_r19 = restoredCtx.$implicit;
      const ctx_r20 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r20.clickAppointment(element_r19));
    });
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r19.appointmentNbr);
  }
}
function HistoryAppointmentsComponent_div_0_th_18_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵtext */._uU(1, "Placa");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryAppointmentsComponent_div_0_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 26);
    core/* ɵɵlistener */.NdJ("click", function HistoryAppointmentsComponent_div_0_td_19_Template_td_click_0_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r24);
      const element_r22 = restoredCtx.$implicit;
      const ctx_r23 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r23.clickAppointment(element_r22));
    });
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r22.placa);
  }
}
function HistoryAppointmentsComponent_div_0_th_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵtext */._uU(1, "Conductor");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryAppointmentsComponent_div_0_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 26);
    core/* ɵɵlistener */.NdJ("click", function HistoryAppointmentsComponent_div_0_td_22_Template_td_click_0_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r27);
      const element_r25 = restoredCtx.$implicit;
      const ctx_r26 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r26.clickAppointment(element_r25));
    });
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate2 */.AsE("", element_r25.license, ":", element_r25.conductor, "");
  }
}
function HistoryAppointmentsComponent_div_0_th_24_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵtext */._uU(1, "Fecha cita");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryAppointmentsComponent_div_0_td_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 26);
    core/* ɵɵlistener */.NdJ("click", function HistoryAppointmentsComponent_div_0_td_25_Template_td_click_0_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r30);
      const element_r28 = restoredCtx.$implicit;
      const ctx_r29 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r29.clickAppointment(element_r28));
    });
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r28.cita);
  }
}
function HistoryAppointmentsComponent_div_0_th_27_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵtext */._uU(1, "Estado");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryAppointmentsComponent_div_0_td_28_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 23);
    core/* ɵɵelement */._UZ(1, "mat-icon", 24);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    const ctx_r15 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("innerHTML", ctx_r15.getLoadIconState(element_r31.state), core/* ɵɵsanitizeHtml */.oJD);
  }
}
function HistoryAppointmentsComponent_div_0_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 27);
  }
}
function HistoryAppointmentsComponent_div_0_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 28);
  }
  if (rf & 2) {
    const row_r32 = ctx.$implicit;
    core/* ɵɵproperty */.Q6J("ngClass", row_r32.state === "CANCEL" || row_r32.state === "USED" ? "active-count-zero" : row_r32.siteAppointment === "EXTERNO1" ? "active-external-patio-one" : row_r32.siteAppointment === "EXTERNO2" ? "active-external-patio-two" : row_r32.siteAppointment === "EXTERNO3" ? "active-external-patio-tre" : "");
  }
}
function HistoryAppointmentsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 2)(1, "mat-form-field", 3)(2, "mat-label");
    core/* ɵɵtext */._uU(3, "Filtro");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(4, "mat-icon", 4);
    core/* ɵɵtext */._uU(5, "search");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "input", 5, 6);
    core/* ɵɵlistener */.NdJ("keyup", function HistoryAppointmentsComponent_div_0_Template_input_keyup_6_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r34);
      const ctx_r33 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r33.submit($event));
    });
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(8, "ng-scrollbar", 7);
    core/* ɵɵlistener */.NdJ("reachedBottom", function HistoryAppointmentsComponent_div_0_Template_ng_scrollbar_reachedBottom_8_listener() {
      core/* ɵɵrestoreView */.CHM(_r34);
      const ctx_r35 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r35.onScroll());
    });
    core/* ɵɵelementStart */.TgZ(9, "table", 8, 9);
    core/* ɵɵelementContainerStart */.ynx(11, 10);
    core/* ɵɵtemplate */.YNc(12, HistoryAppointmentsComponent_div_0_th_12_Template, 2, 0, "th", 11);
    core/* ɵɵtemplate */.YNc(13, HistoryAppointmentsComponent_div_0_td_13_Template, 2, 1, "td", 12);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(14, 13);
    core/* ɵɵtemplate */.YNc(15, HistoryAppointmentsComponent_div_0_th_15_Template, 2, 0, "th", 14);
    core/* ɵɵtemplate */.YNc(16, HistoryAppointmentsComponent_div_0_td_16_Template, 2, 1, "td", 15);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(17, 16);
    core/* ɵɵtemplate */.YNc(18, HistoryAppointmentsComponent_div_0_th_18_Template, 2, 0, "th", 14);
    core/* ɵɵtemplate */.YNc(19, HistoryAppointmentsComponent_div_0_td_19_Template, 2, 1, "td", 15);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(20, 17);
    core/* ɵɵtemplate */.YNc(21, HistoryAppointmentsComponent_div_0_th_21_Template, 2, 0, "th", 14);
    core/* ɵɵtemplate */.YNc(22, HistoryAppointmentsComponent_div_0_td_22_Template, 2, 2, "td", 15);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(23, 18);
    core/* ɵɵtemplate */.YNc(24, HistoryAppointmentsComponent_div_0_th_24_Template, 2, 0, "th", 14);
    core/* ɵɵtemplate */.YNc(25, HistoryAppointmentsComponent_div_0_td_25_Template, 2, 1, "td", 15);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(26, 19);
    core/* ɵɵtemplate */.YNc(27, HistoryAppointmentsComponent_div_0_th_27_Template, 2, 0, "th", 14);
    core/* ɵɵtemplate */.YNc(28, HistoryAppointmentsComponent_div_0_td_28_Template, 2, 1, "td", 12);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵtemplate */.YNc(29, HistoryAppointmentsComponent_div_0_tr_29_Template, 1, 0, "tr", 20);
    core/* ɵɵtemplate */.YNc(30, HistoryAppointmentsComponent_div_0_tr_30_Template, 1, 1, "tr", 21);
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(9);
    core/* ɵɵproperty */.Q6J("dataSource", ctx_r0.dataSource);
    core/* ɵɵadvance */.xp6(20);
    core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx_r0.displayedColumns);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx_r0.displayedColumns);
  }
}
function HistoryAppointmentsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div");
    core/* ɵɵelement */._UZ(1, "app-card-appointment", 29);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("origen", "history");
  }
}
let HistoryAppointmentsComponent = /*#__PURE__*/(() => {
  class HistoryAppointmentsComponent {
    constructor(store, sanitizer, cdr, scrollService, resolver, historyAppointmentStateService, router, base64EncryptionUtilService, storageService, aesEncryptionUtilService) {
      this.store = store;
      this.sanitizer = sanitizer;
      this.cdr = cdr;
      this.scrollService = scrollService;
      this.resolver = resolver;
      this.historyAppointmentStateService = historyAppointmentStateService;
      this.router = router;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.storageService = storageService;
      this.aesEncryptionUtilService = aesEncryptionUtilService;
      this.destroy$ = new Subject/* Subject */.x();
      this.displayedColumns = [];
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.page = 0;
      this.existData = false;
      this.detailAppointments = false;
      this.historyAppointmentSubscription = new Subscription/* Subscription */.w0();
      this.selectedState = new Map(); // Mantener el estado seleccionado localmente
      this.lastSearch = null;
      this.showCardAppointment = false;
    }
    ngOnInit() {
      this.existData = true;
      this.loadData();
    }
    submit(event) {
      const filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    standardDateFormat(date) {
      if (date) return moment(date, "DD/MM/YYYY").format("YYYY/MM/DD");else return "";
    }
    getLoadIcon(frghtKind, state = '') {
      let svg = '';
      if (state === 'CANCEL' || state === 'USED') {
        state = "0";
      }
      if (frghtKind === "C") {
        if (state != "0") {
          svg = `<svg id="container-carga" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.89 40.65">
        <defs>
        <style>
        .container-carga-1{stroke-width:.5px;fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;}
        .container-carga-2{stroke-width:.25px;fill:#66bb6a;stroke:none ;stroke-linecap:round;stroke-linejoin:round;}
        </style>
        </defs>
        <g id="container-carga-1-2">
        <rect class="container-carga-1" x=".25" y=".25" width="81.39" height="40.15" rx="2.45" ry="2.45"/>
        <rect class="container-carga-2" x="6.9" y="6.62" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="16.87" y="6.94" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="26.94" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="37.01" y="6.52" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="47.68" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="57.88" y="6.52" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="68.07" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        </g></svg>`;
        } else {
          svg = `<svg id="container-carga-inactive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.89 40.65">
        <defs>
        <style>
        .container-carga-1-inactive{stroke-width:.5px;fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;}
        .container-carga-2-inactive{stroke-width:.25px;fill:#231f20;stroke:none ;stroke-linecap:round;stroke-linejoin:round;}
        </style>
        </defs>
        <g id="container-carga-1-2">
        <rect class="container-carga-1-inactive" x=".25" y=".25" width="81.39" height="40.15" rx="2.45" ry="2.45"/>
        <rect class="container-carga-2-inactive" x="6.9" y="6.62" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="16.87" y="6.94" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="26.94" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="37.01" y="6.52" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="47.68" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="57.88" y="6.52" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="68.07" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        </g></svg>`;
        }
      } else {
        if (state != "0") {
          svg = `<svg id="cargasuelta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.69 74.74">
        <defs>
        <style>
        .cargasuelta-1{fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;}
        .cargasuelta-2{fill:#66bb6a;}
        </style>
        </defs>
        <g id="cargasuelta_1-2">
        <polygon class="cargasuelta-1" points="39.34 40.15 19.8 53.45 .25 40.15 19.8 26.85 39.34 40.15"/>
        <polygon class="cargasuelta-2" points="58.89 26.85 39.34 40.15 19.8 26.85 39.34 13.55 58.89 26.85"/>
        <polyline class="cargasuelta-1" points="62.34 51.21 62.34 61.19 39.34 74.49 16.34 61.19 16.34 51.21"/>
        <polygon class="cargasuelta-1" points="39.34 13.55 19.8 26.85 .25 13.55 19.8 .25 39.34 13.55"/>
        <polygon class="cargasuelta-1" points="78.44 40.15 58.89 53.45 39.34 40.15 58.89 26.85 78.44 40.15"/>
        <polygon class="cargasuelta-1" points="78.44 13.55 58.89 26.85 39.34 13.55 58.89 .25 78.44 13.55"/>
        <line class="cargasuelta-1" x1="39.34" y1="74.49" x2="39.34" y2="40.15"/>
        </g>
        </svg>`;
        } else {
          svg = `<svg id="cargasuelta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.69 74.74">
          <defs>
          <style>
          .cargasuelta-1-inactive{fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;}
          .cargasuelta-2-inactive{fill:#231f20;}
          </style>
          </defs>
          <g id="cargasuelta_1-2">
          <polygon class="cargasuelta-1-inactive" points="39.34 40.15 19.8 53.45 .25 40.15 19.8 26.85 39.34 40.15"/>
          <polygon class="cargasuelta-2-inactive" points="58.89 26.85 39.34 40.15 19.8 26.85 39.34 13.55 58.89 26.85"/>
          <polyline class="cargasuelta-1-inactive" points="62.34 51.21 62.34 61.19 39.34 74.49 16.34 61.19 16.34 51.21"/>
          <polygon class="cargasuelta-1-inactive" points="39.34 13.55 19.8 26.85 .25 13.55 19.8 .25 39.34 13.55"/>
          <polygon class="cargasuelta-1-inactive" points="78.44 40.15 58.89 53.45 39.34 40.15 58.89 26.85 78.44 40.15"/>
          <polygon class="cargasuelta-1-inactive" points="78.44 13.55 58.89 26.85 39.34 13.55 58.89 .25 78.44 13.55"/>
          <line class="cargasuelta-1-inactive" x1="39.34" y1="74.49" x2="39.34" y2="40.15"/>
          </g>
          </svg>`;
        }
      }
      return this.sanitizer.bypassSecurityTrustHtml(svg);
    }
    onScroll() {
      //this.scrollService.loadMore();
      if (this.parameters) {
        this.parameters.page += 1;
        this.parameters.cleanSelectedState = false;
        this.store.dispatch((0,history_actions/* updateAppointmentsParameters */.E6)({
          parametersAppointments: this.parameters
        }));
        this.store.dispatch((0,history_actions/* getHistoryAppointments */.sO)(this.parameters));
      }
    }
    loadData() {
      this.showCardAppointment = false;
      this.historyAppointmentSubscription = this.store.select(historyFeatureSelector).subscribe({
        next: store => {
          if (store.parametersAppointments) {
            this.parameters = {
              ...store.parametersAppointments
            }; // Guardar los parámetros
            if (this.parameters.cleanSelectedState) {
              this.selectedState.clear();
            }
          }
          if (this.detailAppointments) {
            this.reloadComponent();
            return;
          }
          this.detailAppointments = false;
          this.displayedColumns = ['tipoTrx', 'appointmentNbr', 'placa', 'conductor', 'cita', 'state'];
          const initialElement = store.resultAppointments;
          let historyAppointments = [];
          initialElement.forEach(historyAppointment => {
            historyAppointments = [...historyAppointments, historyAppointment];
          });
          this.dataSource.filter = "";
          //const sortedData = historyAppointments.sort((a, b) => Number(b.appointmentNbr) - Number(a.appointmentNbr));
          this.dataSource.data = historyAppointments;
          if (store.resultAppointments.length > 0) {
            this.existData = true;
          } else {
            this.existData = false;
          }
          this.cdr.detectChanges();
          this.dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
              case 'cita':
                {
                  let newDate = new Date(item.cita);
                  return newDate;
                }
              default:
                {
                  return item[property];
                }
            }
          };
          this.dataSource.sort = this.sort;
          this.cdr.detectChanges();
        },
        error: error => console.error(error)
      });
      this.storageSubscription = this.storageService.getStorageChanges().subscribe(action => {
        if (action.action === 'showHistoryAppointment') {
          if (action.value) {
            this.detailAppointments = true;
            this.showCardAppointment = false;
          }
        }
      });
    }
    reloadComponent() {
      this.detailAppointments = false;
      this.loadData();
    }
    clickAppointment(elemet) {
      this.storageService.showHistoryAppointment(false);
      this.showCardAppointment = true;
      let appointment = elemet.appointmentNbr;
      this.storageService.cleanAll();
      let loadType = "cc";
      if (elemet.tipoTrx === "S") {
        loadType = "cs";
        const encryptedValue = this.aesEncryptionUtilService.encrypt(JSON.stringify(this.makeAppointmentDetail(elemet, loadType)));
        this.store.dispatch((0,detached_load_actions/* getDataAppointmentDetail */.yg)({
          truckVisitNbr: appointment
        }));
        this.store.dispatch((0,detached_load_actions/* setDataElementsDetachedLoad */.UR)({
          elementsDetachedLoad: encryptedValue
        }));
        this.store.dispatch((0,shared_actions/* getConfigurationPortal */.s2)());
      } else if (elemet.tipoTrx === "C") {
        loadType = "cc";
        const encryptedValue = this.aesEncryptionUtilService.encrypt(JSON.stringify(this.makeAppointmentDetail(elemet, loadType)));
        this.store.dispatch((0,containerized_load_actions/* getDataAppointmentDetail */.yg)({
          truckVisitNbr: appointment
        }));
        this.store.dispatch((0,containerized_load_actions/* setDataElementsContainerizedLoad */.rU)({
          elementsContainerizedLoad: encryptedValue
        }));
        this.store.dispatch((0,shared_actions/* getConfigurationPortal */.s2)());
      }
      localStorage.setItem('loadType', loadType);
    }
    makeAppointmentDetail(apointment, loadType) {
      const date = apointment.cita.split(' ');
      const dateSplit = date[0].split('-');
      const hour = date[1].split(':');
      const data = {
        "requested_time": `${dateSplit[0]}-${dateSplit[1]}-${dateSplit[2]} ${hour[0]}:${hour[1]}:00`,
        "truck_visit_appt_nbr": apointment.appointmentNbr,
        "truckVisit": apointment.appointmentNbr,
        "driver_license_nbr": apointment.license,
        "driver_name": apointment.conductor,
        "truck_license_nbr": apointment.placa,
        "state": apointment.state,
        "siteAppointment": apointment.siteAppointment ? apointment.siteAppointment : ""
      };
      return data;
    }
    getLoadIconState(state = '') {
      let svg = '';
      if (state === 'CANCEL') {
        svg = `<svg id="state-cancel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376.49 356.22" width="10" height="10">
      <defs><style>.cancel-1{fill:#333;stroke-width:0px;}</style></defs>
      <g id="state-cancel-2">
      <path class="cancel-1" d="m355.39,23.21c-17.99-19.51-34.3-32.67-53.81-14.71L9.96,277.35c-19.51,17.99-7.35,35.16,10.64,54.68h0c17.99,19.52,35,33.99,54.51,15.99L366.72,79.18c19.52-17.99,6.66-36.46-11.33-55.97Z"/><path class="cancel-1" d="m21.1,23.21C39.09,3.71,55.4-9.46,74.91,8.5l291.62,268.85c19.51,17.99,7.35,35.16-10.64,54.68h0c-17.99,19.52-35,33.99-54.51,15.99L9.77,79.18C-9.76,61.19,3.11,42.72,21.1,23.21Z"/>
      </g>
      </svg>`;
      } else if (state === 'USED') {
        svg = `<svg id="state-used" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 413.24 413.24" width="10" height="10">
      <defs><style>.sync-1{fill:#777677;stroke-width:0px;}</style></defs>
      <g id="state-used-2">
      <path class="sync-1" d="m380.58,143.21l-90.83-11.53c-6.62-.84-9.47-8.86-4.86-13.69l18.28-19.15c-26.66-18.06-60.17-28.85-96.55-28.85-71.89,0-130.18,61.04-130.3,136.4l-76.32-.06C.16,92.34,92.6,0,206.62,0c53.68,0,102.57,20.47,139.31,54.03l14.03-14.7c4.61-4.83,12.75-2.36,13.9,4.21l15.78,90.2c.94,5.4-3.61,10.16-9.05,9.47Z"/><path class="sync-1" d="m32.65,270.03l90.83,11.53c6.62.84,9.47,8.86,4.86,13.69l-18.28,19.15c26.66,
      18.06,60.17,28.85,96.55,28.85,71.89,0,130.18-61.04,130.3-136.4l76.32.06c-.16,113.97-92.6,206.32-206.62,206.32-53.68,0-102.57-20.47-139.31-54.03l-14.03,14.7c-4.61,4.83-12.75,2.36-13.9-4.21l-15.78-90.2c-.94-5.4,3.61-10.16,9.05-9.47Z"/>
      </g>
      </svg>`;
      } else if (state === 'CREATED') {
        svg = `<svg id="state-create" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.81 67.12" width="10" height="10">
            <defs><style>.simple-check-1{fill:#66bb6a;}</style></defs>
            <g id="state-create-2">
            <path class="simple-check-1" d="m81.34,4.92c-3.81-4.14-7.27-6.93-11.41-3.12L27.66,40.77l-10.67-12.21c-3.7-4.23-7.44-1.83-11.68,1.88-4.24,3.7-7.37,7.3-3.66,11.54l11.02,12.61,9,10.29c2.42,2.77,6.65,3,9.36.5l10.05-9.26,42.67-39.33c4.14-3.81,1.41-7.73-2.4-11.87Z"/>
            </g>
            </svg>`;
      } else if (state === 'EXPIRED') {
        svg = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" width="10" height="10">
       <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> 
       <path d="M2380 5114 c-19 -2 -78 -9 -130 -14 -330 -36 -695 -160 -990 -336 -375 -224 -680 -529 -904 -904 -175 -292 -291 -632 -338 -990 -16 -123 -16 -497 0
        -620 47 -358 163 -698 338 -990 224 -375 529 -680 904 -904 290 -173 639 -293 980 -336 133 -17 375 -23 493 -12 95 8 113 13 149 38 106 75 114 221 18 308 -55
         50 -92 57 -260 49 -951 -40 -1831 573 -2129 1483 -96 294 -130 585 -101 875 25 250 102 523 209 743 207 424 572 790 996 997 524 255 1136 287 1685 86 429 
         -157 802 -450 1055 -827 l63 -95 -308 -5 -308 -5 -43 -30 c-117 -83 -117 -247 0 -330 l43 -30 360 -3 c407 -3 466 3 590 61 182 86 313 252 353 448 13 63 15 
         139 13 431 l-3 355 -27 40 c-41 62 -90 88 -168 88 -78 0 -127 -26 -168 -88 l-27 -40 -3 -310 -3 -309 -51 74 c-88 125 -158 209 -278 332 -394 405 -888 658 
         -1455 747 -124 19 -467 33 -555 23z"/> <path d="M2492 4349 c-45 -13 -108 -80 -121 -126 -7 -25 -11 -297 -11 -808 l0 -770 -380 -380 c-256 -257 -384 -392
          -395 -417 -29 -71 -13 -161 38 -217 52 -56 151 -76 225 -46 41 18 820 787 875 865 l32 45 0 865 0 865 -24 38 c-47 76 -151 113 -239 86z"/> <path d="M4839 
          2250 c-49 -9 -104 -44 -128 -83 -28 -45 -81 -247 -81 -308 0 -96 60 -169 159 -190 44 -9 60 -8 96 6 95 36 118 72 163 250 31 125 32 169 2 225 -39 75 -123 115 -211 100z"/>
           <path d="M4390 1339 c-35 -14 -81 -60 -159 -159 -95 -118 -111 -180 -72 -265 33 -72 102 -115 183 -115 72 0 119 32 206 138 105 129 115 150 110 228 -4 70 -20 98 -82 148 -31 25 
           -47 31 -99 33 -34 2 -73 -2 -87 -8z"/> <path d="M3670 691 c-46 -15 -245 -119 -269 -142 -95 -90 -70 -253 48 -316 76 -40 120 -33 270 42 136 68 166 95 190 164 23 71 5 140 -53 197 
           -54 55 -121 74 -186 55z"/> 
           </g> 
           </svg>`;
      }
      return this.sanitizer.bypassSecurityTrustHtml(svg);
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
      if (this.historyAppointmentSubscription) {
        this.historyAppointmentSubscription.unsubscribe();
      }
      this.store.dispatch((0,history_actions/* cleanHistoryAppointments */.jI)());
    }
  }
  HistoryAppointmentsComponent.ɵfac = function HistoryAppointmentsComponent_Factory(t) {
    return new (t || HistoryAppointmentsComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(platform_browser/* DomSanitizer */.H7), core/* ɵɵdirectiveInject */.Y36(core/* ChangeDetectorRef */.sBO), core/* ɵɵdirectiveInject */.Y36(ScrollService), core/* ɵɵdirectiveInject */.Y36(core/* ComponentFactoryResolver */._Vd), core/* ɵɵdirectiveInject */.Y36(HistorypinstateService), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(storageservice_service/* StorageserviceService */.S), core/* ɵɵdirectiveInject */.Y36(AESEncryptionUtil_service/* AESEncryptionUtilService */.D));
  };
  HistoryAppointmentsComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: HistoryAppointmentsComponent,
    selectors: [["app-history-appointments"]],
    viewQuery: function HistoryAppointmentsComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
        core/* ɵɵviewQuery */.Gf(history_appointments_component_c0, 5, core/* ViewContainerRef */.s_b);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.dynamicContainer = _t.first);
      }
    },
    decls: 2,
    vars: 2,
    consts: [["class", "history-appointments", 4, "ngIf"], [4, "ngIf"], [1, "history-appointments"], [1, "queries__filter"], ["matPrefix", "", 1, "queries__filter-icon"], ["matInput", "", "placeholder", "Ingrese valor para filtrar", 3, "keyup"], ["input", ""], [1, "manage-history", 3, "reachedBottom"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource"], ["invoicesTable", ""], ["matColumnDef", "tipoTrx"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "appointmentNbr"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "placa"], ["matColumnDef", "conductor"], ["matColumnDef", "cita"], ["matColumnDef", "state"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "innerHTML"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass"], [3, "origen"]],
    template: function HistoryAppointmentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, HistoryAppointmentsComponent_div_0_Template, 31, 3, "div", 0);
        core/* ɵɵtemplate */.YNc(1, HistoryAppointmentsComponent_div_1_Template, 2, 1, "div", 1);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", ctx.existData && !ctx.showCardAppointment);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.showCardAppointment);
      }
    },
    dependencies: [common/* NgClass */.mk, common/* NgIf */.O5, icon/* MatIcon */.Hw, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatPrefix */.qo, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, sort/* MatSort */.YE, sort/* MatSortHeader */.nU, card_appointment_component/* CardAppointmentComponent */.W, ngx_scrollbar/* NgScrollbar */.KC, ngx_scrollbar_reached_event/* NgScrollbarReachedBottom */.kv],
    styles: [".wrapper[_ngcontent-%COMP%]{width:100%;height:100%;padding:.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;gap:.5rem}.header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.title-header[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Gilroy-Light;margin:0;padding-left:1rem;color:#78909c;font-weight:300}.icon-title[_ngcontent-%COMP%]{width:1.5rem}.title-card[_ngcontent-%COMP%]{width:max-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.queries__filter[_ngcontent-%COMP%]{width:100%}.table-border-rounded[_ngcontent-%COMP%]{width:100%;background-color:#f1f2f6;border-radius:.5rem}.history-cross__table[_ngcontent-%COMP%]{width:100%;border-collapse:separate;border-spacing:0}.history-cross__sub-table[_ngcontent-%COMP%]{width:100%;border-collapse:separate;border-spacing:0;margin:0}.history-cross__table-header[_ngcontent-%COMP%]{background-color:#92b976;color:#fff}.history-cross__table-header-item[_ngcontent-%COMP%]{padding:1rem;font-weight:500;text-align:center}.history-cross__table-body-item[_ngcontent-%COMP%]{text-align:center}.history-cross__table-body-item__darken[_ngcontent-%COMP%]{background-color:#f1f2f6}.history-cross__table-header-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.history-cross__table-header-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.history-cross__table-body-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}.history-cross__table-body-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}.history-cross__table-body-outlined[_ngcontent-%COMP%]:last-child{border-right:1px solid #78909c;border-right:0}.history-cross__sub-table-header-item[_ngcontent-%COMP%]{padding:1rem;font-weight:500;text-align:center}.history-cross__sub-table-header-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.history-cross__sub-table-header-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.history-cross__sub-table-body-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.history-cross__sub-table-body-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.history-cross__table-outlined[_ngcontent-%COMP%]{border:1px solid #78909c}.history-cross__table-space[_ngcontent-%COMP%]{padding:.5rem}.history-cross__table-space_min[_ngcontent-%COMP%]{padding:.25rem}.history-cross__table-body-item[_ngcontent-%COMP%]{padding:1rem}.history-cross__title[_ngcontent-%COMP%]{margin-bottom:1rem;display:flex;justify-content:flex-start;align-content:center}.history-cross__title-text[_ngcontent-%COMP%]{color:#777;margin:0;font-weight:600}.history-cross__thead[_ngcontent-%COMP%]{position:sticky;top:0;left:0}.title-icon[_ngcontent-%COMP%]{width:2rem;margin-right:1rem}.history-cross__icon-check[_ngcontent-%COMP%], .history-cross__icon-x[_ngcontent-%COMP%]{width:2rem}.history-cross__table-actions[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr;justify-items:center;align-items:center}.example-detail-row[_ngcontent-%COMP%]{height:0}.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.example-element-detail[_ngcontent-%COMP%]{overflow:hidden;display:flex}.detail-table[_ngcontent-%COMP%]{background:#b7b7b773;text-align:center}  .mdc-tab__text-label{flex-direction:column!important}  .mdc-data-table__header-cell{text-align:center!important;font-family:Gilroy-ExtraBold;color:#66bb6a;font-size:1rem}  .mdc-data-table__row{background-color:#dfe6e91a!important;border:transparent solid!important;border-bottom:.25rem transparent solid!important}  .mdc-data-table__row:hover{background-color:#7ba0521a!important}  .mdc-data-table__row td{font-family:Gilroy-Light;color:#666!important}  .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}  .success-snackbar .mdc-snackbar__surface{color:#155724!important;background-color:#d4edda!important;border-color:#c3e6cb!important}  .success-snackbar .mdc-snackbar__surface .mdc-button__label{color:#155724!important}  .success-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#155724!important}  .warning-snackbar .mdc-snackbar__surface{color:#856404!important;background-color:#fff3cd!important;border-color:#ffeeba!important}  .warning-snackbar .mdc-snackbar__surface .mdc-button__label{color:#856404!important}  .warning-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#856404!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:transparent!important;--mat-mdc-button-persistent-ripple-color: currentColor !important}.manage-history[_ngcontent-%COMP%]{height:100vh}.history-appointments[_ngcontent-%COMP%]{width:100%;height:100%;padding-bottom:0}.hidden-icon[_ngcontent-%COMP%]{background-color:#9d9c9c}  .mdc-data-table__row.active-count-zero{background-color:#ececec!important}  .mat-badge.active-count-zero .mat-badge-content{background-color:#d0d0cf!important;color:#000!important}  .mdc-data-table__row.active-external-patio-one{background-color:#d2dec9!important}  .mdc-data-table__row.active-external-patio-one:hover{background-color:#f5f5f5!important}  .mdc-data-table__row.active-external-patio-two{background-color:#d6eaf8!important}  .mdc-data-table__row.active-external-patio-two:hover{background-color:#f5f5f5!important}  .mdc-data-table__row.active-external-patio-tre{background-color:#f3dd92!important}  .mdc-data-table__row.active-external-patio-tre:hover{background-color:#f5f5f5}"]
  });
  return HistoryAppointmentsComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/guard/notifications.guard.ts
var notifications_guard = __webpack_require__(34418);
;// CONCATENATED MODULE: ./src/app/modules/history/history-routing.module.ts







const routes = [{
  path: "",
  component: HistoryComponent,
  canActivate: [notifications_guard/* NotificationsGuard */.t],
  data: {
    componentName: "HistoryComponent",
    privilegeName: "HIS_PIN,HIS_CIT"
  },
  children: [{
    path: "history-pin",
    component: HistoryPinComponent
  }, {
    path: "history-appointments",
    component: HistoryAppointmentsComponent
  }]
}];
let HistoryRoutingModule = /*#__PURE__*/(() => {
  class HistoryRoutingModule {}
  HistoryRoutingModule.ɵfac = function HistoryRoutingModule_Factory(t) {
    return new (t || HistoryRoutingModule)();
  };
  HistoryRoutingModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: HistoryRoutingModule
  });
  HistoryRoutingModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [router/* RouterModule.forChild */.Bz.forChild(routes), router/* RouterModule */.Bz]
  });
  return HistoryRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(HistoryRoutingModule, {
    imports: [router/* RouterModule */.Bz],
    exports: [router/* RouterModule */.Bz]
  });
})();
// EXTERNAL MODULE: ./src/app/modules/services/services.module.ts + 14 modules
var services_module = __webpack_require__(73102);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/button.mjs
var fesm2020_button = __webpack_require__(4859);
// EXTERNAL MODULE: ./src/app/modules/containerized-load/containerized-load.module.ts + 21 modules
var containerized_load_module = __webpack_require__(48868);
// EXTERNAL MODULE: ./src/app/modules/detached-load/detached-load.module.ts + 11 modules
var detached_load_module = __webpack_require__(6799);
;// CONCATENATED MODULE: ./src/app/modules/history/history.module.ts















let HistoryModule = /*#__PURE__*/(() => {
  class HistoryModule {}
  HistoryModule.ɵfac = function HistoryModule_Factory(t) {
    return new (t || HistoryModule)();
  };
  HistoryModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: HistoryModule
  });
  HistoryModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [common/* CommonModule */.ez, HistoryRoutingModule, shared_module/* SharedModule */.m, services_module.ServicesModule, ngx_scrollbar/* NgScrollbarModule */.kb, ngx_scrollbar_reached_event/* NgScrollbarReachedModule */.bb, MatBadgeModule, fesm2020_button/* MatButtonModule */.ot, icon/* MatIconModule */.Ps, containerized_load_module.ContainerizedLoadModule, detached_load_module.DetachedLoadModule]
  });
  return HistoryModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(HistoryModule, {
    declarations: [HistoryComponent, HistoryPinComponent, HistoryAppointmentsComponent],
    imports: [common/* CommonModule */.ez, HistoryRoutingModule, shared_module/* SharedModule */.m, services_module.ServicesModule, ngx_scrollbar/* NgScrollbarModule */.kb, ngx_scrollbar_reached_event/* NgScrollbarReachedModule */.bb, MatBadgeModule, fesm2020_button/* MatButtonModule */.ot, icon/* MatIconModule */.Ps, containerized_load_module.ContainerizedLoadModule, detached_load_module.DetachedLoadModule]
  });
})();

/***/ })

}]);