"use strict";
(self["webpackChunkbussinessPortal"] = self["webpackChunkbussinessPortal"] || []).push([[77],{

/***/ 41077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CreditNotesModule": () => (/* binding */ CreditNotesModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__(36895);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2020/router.mjs + 5 modules
var router = __webpack_require__(77518);
// EXTERNAL MODULE: ./src/app/state/credit-notes/credit-notes.actions.ts
var credit_notes_actions = __webpack_require__(6469);
// EXTERNAL MODULE: ./node_modules/@ngrx/store/fesm2020/ngrx-store.mjs + 4 modules
var ngrx_store = __webpack_require__(55867);
;// CONCATENATED MODULE: ./src/app/state/credit-notes/credit-notes.selectors.ts

const creditNotesFeatureSelector = (0,ngrx_store/* createFeatureSelector */.ZF)("creditNotes");
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/table.mjs + 2 modules
var table = __webpack_require__(7155);
// EXTERNAL MODULE: ./node_modules/xlsx/xlsx.mjs
var xlsx = __webpack_require__(80574);
// EXTERNAL MODULE: ./src/app/state/shared/shared.selectors.ts
var shared_selectors = __webpack_require__(13545);
// EXTERNAL MODULE: ./src/app/state/shared/shared.actions.ts
var shared_actions = __webpack_require__(68438);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/dialog.mjs + 1 modules
var dialog = __webpack_require__(65412);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs
var core = __webpack_require__(94650);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/button.mjs
var fesm2020_button = __webpack_require__(4859);
;// CONCATENATED MODULE: ./src/app/modules/credit-notes/components/credit-notes-confirm/credit-notes-confirm.component.ts




let CreditNotesConfirmComponent = /*#__PURE__*/(() => {
  class CreditNotesConfirmComponent {
    constructor(data) {
      this.data = data;
    }
    factura(param) {
      return param.map(o => o.finalNumber).join();
    }
    nota(param) {
      return param.map(o => o.final_nbr).join();
    }
  }
  CreditNotesConfirmComponent.ɵfac = function CreditNotesConfirmComponent_Factory(t) {
    return new (t || CreditNotesConfirmComponent)(core/* ɵɵdirectiveInject */.Y36(dialog/* MAT_DIALOG_DATA */.WI));
  };
  CreditNotesConfirmComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: CreditNotesConfirmComponent,
    selectors: [["app-credit-notes-confirm"]],
    decls: 78,
    vars: 6,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_336b97c66f5f59c308503100c34b7d0de3fdcb57ee910f5d96a233413ab3afc5$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_1 = goog.getMsg(" credit.notes.view.modal.confirm.label.MESSAGE ");
        i18n_0 = MSG_EXTERNAL_336b97c66f5f59c308503100c34b7d0de3fdcb57ee910f5d96a233413ab3afc5$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_1;
      } else {
        i18n_0 = "Por favor verifique los datos ingresados antes de aceptar el cruce de las facturas con las notas cr\xE9dito no podra ser modificada.";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_cdec109185967c3535991076d15e0ed23ae8c1d18665ef128a074a41b06851a3$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_3 = goog.getMsg(" credit.notes.view.modal.confirm.label.CREDIT_NOTE_SELECTED ");
        i18n_2 = MSG_EXTERNAL_cdec109185967c3535991076d15e0ed23ae8c1d18665ef128a074a41b06851a3$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_3;
      } else {
        i18n_2 = "NOTAS CR\xC9DITO SELECIONADAS";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_502f21f1bd858b1479649dfb8525673cc29d899ef4337706f6bf8457be361404$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_5 = goog.getMsg(" credit.notes.view.modal.confirm.label.total.CREDIT_NOTE_SELECTED ");
        i18n_4 = MSG_EXTERNAL_502f21f1bd858b1479649dfb8525673cc29d899ef4337706f6bf8457be361404$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_5;
      } else {
        i18n_4 = "TOTAL NOTAS CR\xC9DITO A CRUZAR";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_cb3d39cffa57b116b051dc05cff5646f5627dc49bfb8f212f8957c3d88e72f80$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_7 = goog.getMsg(" credit.notes.view.modal.confirm.label.INVOICE_SELECTED ");
        i18n_6 = MSG_EXTERNAL_cb3d39cffa57b116b051dc05cff5646f5627dc49bfb8f212f8957c3d88e72f80$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_7;
      } else {
        i18n_6 = "FACTURAS SELECIONADAS";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_e4a8cdfaccdcdddc3cf451f486b93929ac48047ee6fdd903b86a65d45160cf3f$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_9 = goog.getMsg(" credit.notes.view.modal.confirm.label.total.INVOICE_SELECTED ");
        i18n_8 = MSG_EXTERNAL_e4a8cdfaccdcdddc3cf451f486b93929ac48047ee6fdd903b86a65d45160cf3f$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_9;
      } else {
        i18n_8 = "TOTAL FACTURAS A PAGAR";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_ee74057a60799201c59e5103fbc958f7c5d9e2fda2a17367539595e84f0303c4$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_11 = goog.getMsg(" credit.notes.view.modal.confirm.button.CANCEL ");
        i18n_10 = MSG_EXTERNAL_ee74057a60799201c59e5103fbc958f7c5d9e2fda2a17367539595e84f0303c4$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_11;
      } else {
        i18n_10 = "Cancelar";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_b9cb841f8007d88990f031b06543b15c11423b06605b170171f548c9dd68b79e$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_13 = goog.getMsg(" credit.notes.view.modal.confirm.button.ACCEPT ");
        i18n_12 = MSG_EXTERNAL_b9cb841f8007d88990f031b06543b15c11423b06605b170171f548c9dd68b79e$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CONFIRM_CREDIT_NOTES_CONFIRM_COMPONENT_TS_13;
      } else {
        i18n_12 = "Aceptar";
      }
      return [["mat-dialog-title", ""], [1, "credit-notes__header"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 360.76 360.76", 1, "credit-notes-check-icon"], ["id", "Capa_1-2"], ["x", "0", "width", "360.76", "height", "360.76", "rx", "4.49", "ry", "4.49", 1, "cls-1"], ["d", "m296.58,93.79c-11.53-12.5-21.99-20.94-34.49-9.43l-127.81,117.83-32.27-36.9c-11.2-12.79-22.5-5.52-35.31,5.67-12.81,11.19-22.28,22.08-11.07,34.89l33.33,38.12,27.2,31.11c7.33,8.38,20.12,9.07,28.3,1.52l30.39-28.01,129-118.93c12.52-11.53,4.27-23.37-7.27-35.88Z", 1, "cls-2"], [1, "credit-notes__title-text"], ["mat-dialog-content", ""], [1, "credit-notes__paragraph"], i18n_0, [1, "credit-notes__selected-lists"], [1, "credit-notes__selected-list"], [1, "credit-notes__selected-list-item"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 284.31 402.33", 1, "credit-notes__arrow-icon"], ["points", "120.51 0 0 0 163.81 201.17 0 402.33 120.51 402.33 284.31 201.17 120.51 0", 1, "cls-1"], [1, "credit-notes__selected-list-text"], [1, "credit-notes__selected-list-title"], i18n_2, [1, "credit-notes__invoices-nbr"], i18n_4, i18n_6, i18n_8, ["mat-dialog-actions", ""], [1, "credit-notes__footer"], ["mat-raised-button", "", 3, "mat-dialog-close"], i18n_10, ["mat-flat-button", "", "color", "primary", "cdkFocusInitial", "", 1, "credit-notes__dialog-accept-button", 3, "mat-dialog-close"], i18n_12];
    },
    template: function CreditNotesConfirmComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "h1", 0)(1, "div", 1);
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
        core/* ɵɵelementStart */.TgZ(11, "div", 7)(12, "p", 8);
        core/* ɵɵi18n */.SDv(13, 9);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(14, "div", 10)(15, "ul", 11)(16, "li", 12);
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(17, "svg", 13)(18, "defs")(19, "style");
        core/* ɵɵtext */._uU(20, ".cls-1{fill:#92b975;stroke-width:0px;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(21, "g", 3);
        core/* ɵɵelement */._UZ(22, "polygon", 14);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementStart */.TgZ(23, "div", 15)(24, "p", 16);
        core/* ɵɵelementContainerStart */.ynx(25);
        core/* ɵɵi18n */.SDv(26, 17);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(27, "span", 18);
        core/* ɵɵtext */._uU(28);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵelementStart */.TgZ(29, "li", 12);
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(30, "svg", 13)(31, "defs")(32, "style");
        core/* ɵɵtext */._uU(33, ".cls-1{fill:#92b975;stroke-width:0px;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(34, "g", 3);
        core/* ɵɵelement */._UZ(35, "polygon", 14);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementStart */.TgZ(36, "div", 15)(37, "p", 16);
        core/* ɵɵelementContainerStart */.ynx(38);
        core/* ɵɵi18n */.SDv(39, 19);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(40, "span", 18);
        core/* ɵɵtext */._uU(41);
        core/* ɵɵelementEnd */.qZA()()()();
        core/* ɵɵelementStart */.TgZ(42, "ul", 11)(43, "li", 12);
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(44, "svg", 13)(45, "defs")(46, "style");
        core/* ɵɵtext */._uU(47, ".cls-1{fill:#92b975;stroke-width:0px;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(48, "g", 3);
        core/* ɵɵelement */._UZ(49, "polygon", 14);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementStart */.TgZ(50, "div", 15)(51, "p", 16);
        core/* ɵɵelementContainerStart */.ynx(52);
        core/* ɵɵi18n */.SDv(53, 20);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(54, "span", 18);
        core/* ɵɵtext */._uU(55);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵelementStart */.TgZ(56, "li", 12);
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(57, "svg", 13)(58, "defs")(59, "style");
        core/* ɵɵtext */._uU(60, ".cls-1{fill:#92b975;stroke-width:0px;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(61, "g", 3);
        core/* ɵɵelement */._UZ(62, "polygon", 14);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementStart */.TgZ(63, "div", 15)(64, "p", 16);
        core/* ɵɵelementContainerStart */.ynx(65);
        core/* ɵɵi18n */.SDv(66, 21);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(67, "span", 18);
        core/* ɵɵtext */._uU(68);
        core/* ɵɵelementEnd */.qZA()()()()();
        core/* ɵɵelement */._UZ(69, "hr");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(70, "div", 22)(71, "div", 23)(72, "button", 24);
        core/* ɵɵelementContainerStart */.ynx(73);
        core/* ɵɵi18n */.SDv(74, 25);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(75, "button", 26);
        core/* ɵɵelementContainerStart */.ynx(76);
        core/* ɵɵi18n */.SDv(77, 27);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(28);
        core/* ɵɵtextInterpolate */.Oqu(ctx.nota(ctx.data.creditNotes));
        core/* ɵɵadvance */.xp6(13);
        core/* ɵɵtextInterpolate */.Oqu(ctx.data.creditNotesTotal);
        core/* ɵɵadvance */.xp6(14);
        core/* ɵɵtextInterpolate */.Oqu(ctx.factura(ctx.data.invoices));
        core/* ɵɵadvance */.xp6(13);
        core/* ɵɵtextInterpolate */.Oqu(ctx.data.invoicesTotal);
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵproperty */.Q6J("mat-dialog-close", false);
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵproperty */.Q6J("mat-dialog-close", true);
      }
    },
    dependencies: [dialog/* MatDialogClose */.ZT, dialog/* MatDialogTitle */.uh, dialog/* MatDialogContent */.xY, dialog/* MatDialogActions */.H8, fesm2020_button/* MatButton */.lW],
    styles: ["h1[_ngcontent-%COMP%]{padding:1rem;margin:0;background-color:#92b976!important;display:flex;justify-content:flex-start;align-items:center}.credit-notes__header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.credit-notes-check-icon[_ngcontent-%COMP%]{width:3rem}.credit-notes__title-text[_ngcontent-%COMP%]{font-size:2rem;color:#fff}.credit-notes__paragraph[_ngcontent-%COMP%]{width:50rem;padding:1.5rem;font-size:1.5rem;font-weight:300;line-height:normal}.credit-notes__paragraph-em[_ngcontent-%COMP%]{font-weight:500}.credit-notes__selected-lists[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.credit-notes__selected-list[_ngcontent-%COMP%]{width:30rem;padding:0;margin:0;list-style:none}.credit-notes__selected-list-title[_ngcontent-%COMP%]{margin:0;font-weight:500}.credit-notes__selected-list-item[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr;grid-template-rows:1fr}.credit-notes__invoices-nbr[_ngcontent-%COMP%]{overflow-wrap:anywhere}.credit-notes__arrow-icon[_ngcontent-%COMP%]{width:1.5rem;margin-right:1rem}.credit-notes__arrow-icon_wrap[_ngcontent-%COMP%]{width:3rem}.credit-notes__dialog-accept-button[_ngcontent-%COMP%]{color:#fff!important}.credit-notes__footer[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}"]
  });
  return CreditNotesConfirmComponent;
})();
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(15439);
// EXTERNAL MODULE: ./src/app/core/privileges.enum.ts
var privileges_enum = __webpack_require__(9862);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/sort.mjs
var sort = __webpack_require__(96308);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subject.js + 1 modules
var Subject = __webpack_require__(77579);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(50727);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(82722);
// EXTERNAL MODULE: ./src/app/state/api-gateway/api-gateway.selectors.ts
var api_gateway_selectors = __webpack_require__(75868);
// EXTERNAL MODULE: ./src/app/shared/services/util.service.ts
var util_service = __webpack_require__(22203);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/snack-bar.mjs
var snack_bar = __webpack_require__(17009);
// EXTERNAL MODULE: ./src/app/core/auth/services/base64-encryption-util.service.ts
var base64_encryption_util_service = __webpack_require__(46602);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/icon.mjs
var icon = __webpack_require__(97392);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/checkbox.mjs
var fesm2020_checkbox = __webpack_require__(56709);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/form-field.mjs
var form_field = __webpack_require__(59549);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/input.mjs + 1 modules
var input = __webpack_require__(44144);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/card.mjs
var card = __webpack_require__(73546);
// EXTERNAL MODULE: ./src/app/shared/directives/permissions.directive.ts
var permissions_directive = __webpack_require__(4344);
// EXTERNAL MODULE: ./src/app/modules/services/components/customer-searcher/customer-searcher.component.ts
var customer_searcher_component = __webpack_require__(19243);
// EXTERNAL MODULE: ./node_modules/ngx-scrollbar/fesm2020/ngx-scrollbar.mjs + 3 modules
var ngx_scrollbar = __webpack_require__(52598);
// EXTERNAL MODULE: ./node_modules/ngx-scrollbar/fesm2020/ngx-scrollbar-reached-event.mjs
var ngx_scrollbar_reached_event = __webpack_require__(17876);
// EXTERNAL MODULE: ./src/app/shared/pipes/date-format.pipe.ts
var date_format_pipe = __webpack_require__(21428);
;// CONCATENATED MODULE: ./src/app/modules/credit-notes/pipes/credit-notes-status.pipe.ts

let CreditNotesState = /*#__PURE__*/(() => {
  class CreditNotesState {
    transform(value, ...args) {
      switch (value) {
        case "0":
          return "PENDIENTE";
          break;
        default:
          return "NO DEFINIDO";
          break;
      }
    }
  }
  CreditNotesState.ɵfac = function CreditNotesState_Factory(t) {
    return new (t || CreditNotesState)();
  };
  CreditNotesState.ɵpipe = /*@__PURE__*/core/* ɵɵdefinePipe */.Yjl({
    name: "creditNotesState",
    type: CreditNotesState,
    pure: true
  });
  return CreditNotesState;
})();
;// CONCATENATED MODULE: ./src/app/modules/credit-notes/components/credit-notes/credit-notes.component.ts


































const _c0 = ["creditNotesTable"];
const _c1 = ["invoicesTable"];
function CreditNotesComponent_ng_container_37_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "app-customer-searcher", 72);
    core/* ɵɵlistener */.NdJ("customerSearch", function CreditNotesComponent_ng_container_37_ng_container_1_Template_app_customer_searcher_customerSearch_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r37);
      const ctx_r36 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r36.customerSearch($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "button", 73);
    core/* ɵɵlistener */.NdJ("click", function CreditNotesComponent_ng_container_37_ng_container_1_Template_button_click_2_listener() {
      core/* ɵɵrestoreView */.CHM(_r37);
      const ctx_r38 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r38.selectCustomer());
    });
    core/* ɵɵelementStart */.TgZ(3, "mat-icon");
    core/* ɵɵtext */._uU(4, "search");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r35 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("controlDisabled", !ctx_r35.isAgent)("searcher", ctx_r35.isAgent)("data", ctx_r35.userInfo.empresa.id + "/" + ctx_r35.userInfo.userName);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("disabled", !ctx_r35.isAgent);
  }
}
function CreditNotesComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, CreditNotesComponent_ng_container_37_ng_container_1_Template, 5, 4, "ng-container", 28);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.userInfo.empresa);
  }
}
function CreditNotesComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "th", 74)(1, "mat-checkbox", 75);
    core/* ɵɵlistener */.NdJ("change", function CreditNotesComponent_th_49_Template_mat_checkbox_change_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r40);
      const ctx_r39 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r39.selectAllCreditNotes($event.checked));
    });
    core/* ɵɵelementEnd */.qZA()();
  }
}
function CreditNotesComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 76)(1, "mat-checkbox", 77);
    core/* ɵɵlistener */.NdJ("change", function CreditNotesComponent_td_50_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r43);
      const element_r41 = restoredCtx.$implicit;
      const ctx_r42 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r42.creditNotesCheckboxChange($event, element_r41.final_nbr));
    });
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r41 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("checked", element_r41.selected);
  }
}
function CreditNotesComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 78);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 79);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function CreditNotesComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 76);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r44 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r44.final_nbr);
  }
}
function CreditNotesComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 78);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 80);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function CreditNotesComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 76);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "dateFormat");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r45 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind2 */.xi3(2, 1, element_r45.finalized_date, "classic"));
  }
}
function CreditNotesComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 78);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 81);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function CreditNotesComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 76);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "number");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r46 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind1 */.lcZ(2, 1, element_r46.TOTAL));
  }
}
function CreditNotesComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 78);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 82);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function CreditNotesComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 76);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "number");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r47 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind1 */.lcZ(2, 1, element_r47.CUSTDFF_BALANCECREDIT));
  }
}
function CreditNotesComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 74);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 83);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function CreditNotesComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 76);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "creditNotesState");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r48 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind1 */.lcZ(2, 1, element_r48.status_used));
  }
}
function CreditNotesComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 84);
  }
}
function CreditNotesComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 85);
  }
}
function CreditNotesComponent_button_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 86);
    core/* ɵɵlistener */.NdJ("click", function CreditNotesComponent_button_68_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r51);
      const ctx_r50 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r50.exportAsPDF());
    });
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 87)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".cls-1{fill:#92b976;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 3);
    core/* ɵɵelement */._UZ(6, "path", 88)(7, "path", 89)(8, "path", 90);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(9, "span");
    core/* ɵɵtext */._uU(10, "Descargar Notas Cr\u00E9ditos y Facturas");
    core/* ɵɵelementEnd */.qZA()();
  }
}
function CreditNotesComponent_th_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "th", 74)(1, "mat-checkbox", 75);
    core/* ɵɵlistener */.NdJ("change", function CreditNotesComponent_th_83_Template_mat_checkbox_change_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r53);
      const ctx_r52 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r52.selectAllInvoices($event.checked));
    });
    core/* ɵɵelementEnd */.qZA()();
  }
}
function CreditNotesComponent_td_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 76)(1, "mat-checkbox", 77);
    core/* ɵɵlistener */.NdJ("change", function CreditNotesComponent_td_84_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r56);
      const element_r54 = restoredCtx.$implicit;
      const ctx_r55 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r55.invoiceCheckboxChange($event, element_r54.finalNumber));
    });
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r54 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("checked", element_r54.selected);
  }
}
function CreditNotesComponent_th_86_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 78);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 91);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function CreditNotesComponent_td_87_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 76);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r57 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r57.finalNumber);
  }
}
function CreditNotesComponent_th_89_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 78);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 92);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function CreditNotesComponent_td_90_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 76);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "dateFormat");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r58 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind2 */.xi3(2, 1, element_r58.finalizedDate, "classic"));
  }
}
function CreditNotesComponent_th_92_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 78);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 93);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function CreditNotesComponent_td_93_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 76);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "number");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r59 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind1 */.lcZ(2, 1, element_r59.balance));
  }
}
function CreditNotesComponent_th_95_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 74);
    core/* ɵɵtext */._uU(1, "Factura");
    core/* ɵɵelementEnd */.qZA();
  }
}
function CreditNotesComponent_td_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 76)(1, "div", 94);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(2, "svg", 95);
    core/* ɵɵlistener */.NdJ("click", function CreditNotesComponent_td_96_Template__svg_svg_click_2_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r62);
      const element_r60 = restoredCtx.$implicit;
      const ctx_r61 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r61.downloadBill(element_r60.finalNumber));
    });
    core/* ɵɵelementStart */.TgZ(3, "defs")(4, "style");
    core/* ɵɵtext */._uU(5, ".claseunicadescarganotacredito{fill:#92b976;stroke-width:0px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(6, "g", 3);
    core/* ɵɵelement */._UZ(7, "path", 96)(8, "path", 97)(9, "path", 98);
    core/* ɵɵelementEnd */.qZA()()()();
  }
}
function CreditNotesComponent_tr_97_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 84);
  }
}
function CreditNotesComponent_tr_98_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 85);
  }
}
function CreditNotesComponent_li_106_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "li", 99);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const cross_r64 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(cross_r64.final_nbr);
  }
}
function CreditNotesComponent_li_128_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "li", 99);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const cross_r65 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(cross_r65.finalNumber);
  }
}
function CreditNotesComponent_button_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 100);
    core/* ɵɵlistener */.NdJ("click", function CreditNotesComponent_button_139_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r67);
      const ctx_r66 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r66.cross());
    });
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 101)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".cls-1{fill-rule:evenodd;}.cls-1,.cls-2{fill:#ffffff;stroke-width:0px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 3);
    core/* ɵɵelement */._UZ(6, "path", 102)(7, "polygon", 103)(8, "polygon", 104)(9, "path", 105);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(10, "span");
    core/* ɵɵelementContainerStart */.ynx(11);
    core/* ɵɵi18n */.SDv(12, 106);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r34 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵproperty */.Q6J("disabled", !ctx_r34.selectedCreditNotes.length || !ctx_r34.selectedInvoices.length);
  }
}
const _c22 = function (a0) {
  return [a0];
};
let CreditNotesComponent = /*#__PURE__*/(() => {
  class CreditNotesComponent {
    constructor(store, router, utilService, matDialog, matSnackBar, base64EncryptionUtilService) {
      this.store = store;
      this.router = router;
      this.utilService = utilService;
      this.matDialog = matDialog;
      this.matSnackBar = matSnackBar;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.creditNotesTable = new sort/* MatSort */.YE();
      this.invoicesTable = new sort/* MatSort */.YE();
      this.destroy$ = new Subject/* Subject */.x();
      this.privileges = privileges_enum/* privileges */.U;
      this.creditNotes = [];
      this.invoices = [];
      this.creditNotesDatasource = new table/* MatTableDataSource */.by([]);
      this.invoiceDatasource = new table/* MatTableDataSource */.by([]);
      this.selectedCreditNotes = [];
      this.selectedInvoices = [];
      this.creditNotesPage = 0;
      this.invoicePage = 0;
      this.creditNotesTotal = 0;
      this.invoicesTotal = 0;
      this.customer = null;
      this.selectedCustomer = null;
      this.isAgent = false;
      this.creditNotesDisplayedColumns = ["creditNotesSelected", "final_nbr", "finalized_date", "TOTAL", "CUSTDFF_BALANCECREDIT", "Estado"];
      this.invoiceDisplayedColumns = ["invoiceSelected", "finalNumber", "finalizedDate", "balance", "bill"];
      this.sharedSubscription = new Subscription/* Subscription */.w0();
      this.creditNotesSubscription = new Subscription/* Subscription */.w0();
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).subscribe({
        next: APIGatewatStore => {
          this.userInfo = APIGatewatStore;
          this.isAgent = APIGatewatStore.empresa?.tiposEmpresas.filter(value => value.selected)[0].companyTypeId === "06";
          if (!this.isAgent) {
            this.store.dispatch((0,credit_notes_actions/* getCreditNoteCrosses */.MG)({
              customer: this.base64EncryptionUtilService.encrypt(this.userInfo.empresa?.id),
              page: 0
            }));
            this.store.dispatch((0,credit_notes_actions/* getInvoices */.sA)({
              customer: this.base64EncryptionUtilService.encrypt(this.userInfo.empresa?.id),
              page: 0
            }));
          }
        },
        error: error => console.error(error)
      });
      this.store.dispatch((0,credit_notes_actions/* clean */.ru)());
      this.store.select(shared_selectors/* sharedFeatureSelector */.x).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(next => {
        if (next.file) {
          window.open(this.utilService.pdfReceipt(next.file));
          this.store.dispatch((0,shared_actions/* cleanPdfInvoice */.I2)());
        }
      });
      this.store.select(creditNotesFeatureSelector).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: store => {
          this.creditNotes = store.crosses;
          this.invoices = store.invoices;
          this.selectedCreditNotes = store.selectedCrosses;
          this.selectedInvoices = store.selectedInvoices;
          this.creditNotesTotal = store.totalCrosses;
          this.invoicesTotal = store.totalInvoices;
          this.creditNotesDatasource = new table/* MatTableDataSource */.by(this.creditNotes);
          this.invoiceDatasource = new table/* MatTableDataSource */.by(this.invoices);
          this.creditNotesDatasource.sort = this.creditNotesTable;
          this.invoiceDatasource.sort = this.invoicesTable;
          this.creditNotesDatasource.sortingDataAccessor = (item, property) => {
            switch (property) {
              case 'finalized_date':
                {
                  let newDate = new Date(item.finalized_date);
                  return newDate;
                }
              default:
                {
                  return item[property];
                }
            }
          };
          this.invoiceDatasource.sortingDataAccessor = (item, property) => {
            switch (property) {
              case 'finalizedDate':
                {
                  let newDate = new Date(item.finalizedDate);
                  return newDate;
                }
              default:
                {
                  return item[property];
                }
            }
          };
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
      this.store.dispatch((0,shared_actions/* cleanPdfFile */.Yd)());
    }
    customerSearch(value) {
      this.customer = value;
      if (!value) {
        this.store.dispatch((0,shared_actions/* cleanCustomer */.n6)());
      }
    }
    selectCustomer() {
      if (this.customer && this.customer.split("/")[0]) {
        this.selectedCustomer = this.customer;
        this.store.dispatch((0,credit_notes_actions/* clean */.ru)());
        this.creditNotesPage = 0;
        this.invoicePage = 0;
        this.store.dispatch((0,credit_notes_actions/* getCreditNoteCrosses */.MG)({
          customer: this.base64EncryptionUtilService.encrypt(this.selectedCustomer.split("/")[0]),
          page: 0
        }));
        this.store.dispatch((0,credit_notes_actions/* getInvoices */.sA)({
          customer: this.base64EncryptionUtilService.encrypt(this.selectedCustomer.split("/")[0]),
          page: 0
        }));
      } else {
        this.matSnackBar.open("El campo de busqueda de cliente es requerido", "", {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        });
      }
    }
    reload() {
      this.store.dispatch((0,credit_notes_actions/* clean */.ru)());
      if (this.isAgent) {
        if (this.selectedCustomer && this.selectedCustomer.split("/")[1]) {
          this.store.dispatch((0,credit_notes_actions/* getCreditNoteCrosses */.MG)({
            customer: this.base64EncryptionUtilService.encrypt(this.selectedCustomer.split("/")[0]),
            page: 0
          }));
          this.store.dispatch((0,credit_notes_actions/* getInvoices */.sA)({
            customer: this.base64EncryptionUtilService.encrypt(this.selectedCustomer.split("/")[0]),
            page: 0
          }));
        } else {
          this.matSnackBar.open("El campo de busqueda de cliente es requerido", "", {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          });
        }
      } else {
        this.store.dispatch((0,credit_notes_actions/* getCreditNoteCrosses */.MG)({
          customer: this.base64EncryptionUtilService.encrypt(this.userInfo.empresa?.id),
          page: 0
        }));
        this.store.dispatch((0,credit_notes_actions/* getInvoices */.sA)({
          customer: this.base64EncryptionUtilService.encrypt(this.userInfo.empresa?.id),
          page: 0
        }));
      }
    }
    exportAsPDF() {
      var indice;
      var indice2;
      let Heading = [['N', 'Creacion', 'Monto', 'Saldo', 'Estado']];
      let HeadingFaccturacion = [['N', 'Creacion', 'Monto']];
      //Had to create a new workbook and then add the header
      const wb = xlsx/* utils.book_new */.P6.book_new();
      // const wb2 = utils.book_new();
      const ws = xlsx/* utils.json_to_sheet */.P6.json_to_sheet([]);
      const ws2 = xlsx/* utils.json_to_sheet */.P6.json_to_sheet([]);
      xlsx/* utils.sheet_add_aoa */.P6.sheet_add_aoa(ws, Heading);
      xlsx/* utils.sheet_add_aoa */.P6.sheet_add_aoa(ws2, HeadingFaccturacion);
      var count = Object.keys(this.creditNotesDatasource.data).length;
      indice = 0;
      let jsonArrayObject = [];
      while (indice < count) {
        jsonArrayObject.push({
          N: this.creditNotesDatasource.data[indice].final_nbr,
          Creación: moment(this.creditNotesDatasource.data[indice].finalized_date).format("DD-MM-YYYY"),
          Monto: this.creditNotesDatasource.data[indice].TOTAL,
          Saldo: this.creditNotesDatasource.data[indice].CUSTDFF_BALANCECREDIT,
          Estado: this.creditNotesDatasource.data[indice].status_used ? "PENDIENTE" : "NO DEFINIDO"
        });
        indice = indice + 1;
      }
      indice2 = 0;
      var count2 = Object.keys(this.invoiceDatasource.data).length;
      let jsonArrayObject2 = [];
      while (indice2 < count2) {
        jsonArrayObject2.push({
          N: this.invoiceDatasource.data[indice2].finalNumber,
          Creación: moment(this.invoiceDatasource.data[indice2].finalizedDate).format("DD-MM-YYYY"),
          Monto: this.invoiceDatasource.data[indice2].balance
        });
        indice2 = indice2 + 1;
      }
      //Starting in the second row to avoid overriding and skipping headers
      xlsx/* utils.sheet_add_json */.P6.sheet_add_json(ws, jsonArrayObject, {
        origin: 'A2',
        skipHeader: true
      });
      xlsx/* utils.sheet_add_json */.P6.sheet_add_json(ws2, jsonArrayObject2, {
        origin: 'A2',
        skipHeader: true
      });
      xlsx/* utils.book_append_sheet */.P6.book_append_sheet(wb, ws, 'Notas de Crédito');
      xlsx/* utils.book_append_sheet */.P6.book_append_sheet(wb, ws2, 'Facturación');
      (0,xlsx/* writeFile */.NC)(wb, 'notascreditos-facturas.xlsx');
    }
    cross() {
      if (this.selectedCreditNotes.length && this.selectedInvoices.length) {
        const dialogRef = this.matDialog.open(CreditNotesConfirmComponent, {
          data: {
            creditNotes: this.selectedCreditNotes,
            invoices: this.selectedInvoices,
            creditNotesTotal: this.creditNotesTotal,
            invoicesTotal: this.invoicesTotal
          }
        });
        dialogRef.afterClosed().subscribe(next => {
          if (next) {
            const creditNotes = this.selectedCreditNotes.map(item => item.final_nbr).toString();
            const invoices = this.selectedInvoices.map(item => item.finalNumber).toString();
            const customerId = this.customer ? this.customer.split("/")[0] : '';
            this.store.dispatch((0,credit_notes_actions/* getExecuteCrossing */.Sp)({
              clientId: customerId,
              creditNotesList: creditNotes,
              invoiceList: invoices
            }));
            this.reload();
          }
        });
      } else {
        this.matSnackBar.open("Debe seleccionar al menos una nota crédito y una factura", "", {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        });
      }
    }
    cancel() {
      this.reload();
    }
    downloadBill(billId) {
      this.store.dispatch((0,shared_actions/* getPdfInvoice */.Gs)({
        invoice: billId
      }));
    }
    loadCreditNotes() {
      this.creditNotesPage = this.creditNotesPage + 1;
      if (this.isAgent) {
        if (this.selectedCustomer && this.selectedCustomer.split("/")[1]) {
          this.store.dispatch((0,credit_notes_actions/* getCreditNoteCrosses */.MG)({
            customer: this.base64EncryptionUtilService.encrypt(this.selectedCustomer.split("/")[0]),
            page: this.creditNotesPage
          }));
        } else {
          this.matSnackBar.open("El campo de busqueda de cliente es requerido", "", {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          });
        }
      } else {
        this.store.dispatch((0,credit_notes_actions/* getCreditNoteCrosses */.MG)({
          customer: this.base64EncryptionUtilService.encrypt(this.userInfo.empresa?.id),
          page: this.creditNotesPage
        }));
      }
    }
    loadInvoice() {
      this.invoicePage = this.invoicePage + 1;
      if (this.isAgent) {
        if (this.selectedCustomer && this.selectedCustomer.split("/")[1]) {
          this.store.dispatch((0,credit_notes_actions/* getInvoices */.sA)({
            customer: this.base64EncryptionUtilService.encrypt(this.selectedCustomer.split("/")[0]),
            page: this.invoicePage
          }));
        } else {
          this.matSnackBar.open("El campo de busqueda de cliente es requerido", "", {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          });
        }
      } else {
        this.store.dispatch((0,credit_notes_actions/* getInvoices */.sA)({
          customer: this.base64EncryptionUtilService.encrypt(this.userInfo.empresa?.id),
          page: this.invoicePage
        }));
      }
    }
    selectAllCreditNotes(checked) {
      if (checked) this.creditNotes.map(item => {
        const newItem = Object.assign({}, item);
        if (!newItem.selected) this.store.dispatch((0,credit_notes_actions/* selectCreditNoteCross */.U7)({
          cross: newItem
        }));
        this.store.dispatch((0,credit_notes_actions/* calculateCreditNotesTotal */.uq)());
        return newItem;
      });else this.creditNotes.map(item => {
        const newItem = Object.assign({}, item);
        this.store.dispatch((0,credit_notes_actions/* removeCreditNoteCross */.SX)({
          id: newItem.final_nbr
        }));
        this.store.dispatch((0,credit_notes_actions/* calculateCreditNotesTotal */.uq)());
        return newItem;
      });
    }
    selectAllInvoices(checked) {
      if (checked) {
        this.invoices.map(item => {
          const newItem = Object.assign({}, item);
          if (!newItem.selected) this.store.dispatch((0,credit_notes_actions/* selectInvoice */.xF)({
            invoice: newItem
          }));
          this.store.dispatch((0,credit_notes_actions/* calculateInvoicesTotal */.PH)());
          return newItem;
        });
      } else {
        this.invoices.map(item => {
          const newItem = Object.assign({}, item);
          this.store.dispatch((0,credit_notes_actions/* removeInvoice */.j_)({
            id: newItem.finalNumber
          }));
          this.store.dispatch((0,credit_notes_actions/* calculateInvoicesTotal */.PH)());
          return newItem;
        });
      }
    }
    creditNotesCheckboxChange(event, elementNbr) {
      this.creditNotes.map(item => {
        const newElement = Object.assign({}, item);
        if (item.final_nbr === elementNbr) {
          if (event.checked) {
            this.store.dispatch((0,credit_notes_actions/* selectCreditNoteCross */.U7)({
              cross: newElement
            }));
            this.store.dispatch((0,credit_notes_actions/* calculateCreditNotesTotal */.uq)());
            return newElement;
          } else {
            this.store.dispatch((0,credit_notes_actions/* removeCreditNoteCross */.SX)({
              id: newElement.final_nbr
            }));
            this.store.dispatch((0,credit_notes_actions/* calculateCreditNotesTotal */.uq)());
            return newElement;
          }
        }
        return item;
      });
    }
    invoiceCheckboxChange(event, elementNbr) {
      this.invoices.map(item => {
        const newElement = Object.assign({}, item);
        if (item.finalNumber === elementNbr) {
          if (event.checked) {
            this.store.dispatch((0,credit_notes_actions/* selectInvoice */.xF)({
              invoice: item
            }));
            this.store.dispatch((0,credit_notes_actions/* calculateInvoicesTotal */.PH)());
            return newElement;
          } else {
            this.store.dispatch((0,credit_notes_actions/* removeInvoice */.j_)({
              id: item.finalNumber
            }));
            this.store.dispatch((0,credit_notes_actions/* calculateInvoicesTotal */.PH)());
            return newElement;
          }
        }
        return item;
      });
    }
    applyCreditNotesFilter(value) {
      const inputValue = value.target.value;
      this.creditNotesDatasource.filter = inputValue.trim().toLowerCase();
    }
    applyInvoiceFilter(value) {
      const inputValue = value.target.value;
      this.invoiceDatasource.filter = inputValue.trim().toLowerCase();
    }
  }
  CreditNotesComponent.ɵfac = function CreditNotesComponent_Factory(t) {
    return new (t || CreditNotesComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f), core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L));
  };
  CreditNotesComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: CreditNotesComponent,
    selectors: [["app-credit-notes"]],
    viewQuery: function CreditNotesComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(_c0, 5);
        core/* ɵɵviewQuery */.Gf(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.creditNotesTable = _t.first);
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.invoicesTable = _t.first);
      }
    },
    decls: 140,
    vars: 21,
    consts: function () {
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3dabe66ad8781ee906d54cd2c1295152c8491ce9efdb751a18dd22d308e78d1b$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS_3 = goog.getMsg(" credit.notes.views.actions.button.CANCEL ");
        i18n_2 = MSG_EXTERNAL_3dabe66ad8781ee906d54cd2c1295152c8491ce9efdb751a18dd22d308e78d1b$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS_3;
      } else {
        i18n_2 = "Cancelar";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_acb5c3fc93d5bcbd210d277df148e20cba3cbcf4703537796dad20a5e560216b$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__5 = goog.getMsg(" credit.notes.view.search.result.table.NBR ");
        i18n_4 = MSG_EXTERNAL_acb5c3fc93d5bcbd210d277df148e20cba3cbcf4703537796dad20a5e560216b$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__5;
      } else {
        i18n_4 = "N\xBA";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_63ad4c470833bf1f7886bccd5a52a33be7172c3e5fb7a10f0f8cafac15f38e16$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__7 = goog.getMsg(" credit.notes.view.search.result.table.CREATED ");
        i18n_6 = MSG_EXTERNAL_63ad4c470833bf1f7886bccd5a52a33be7172c3e5fb7a10f0f8cafac15f38e16$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__7;
      } else {
        i18n_6 = "Creaci\xF3n";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_896a19bebab3ca623b61382852b8730659e65dcc69e3f5028f4ce9ff91556b37$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__9 = goog.getMsg(" credit.notes.view.search.result.table.AMOUNT ");
        i18n_8 = MSG_EXTERNAL_896a19bebab3ca623b61382852b8730659e65dcc69e3f5028f4ce9ff91556b37$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__9;
      } else {
        i18n_8 = "Monto";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4701819e476fc10db4334f505513a2cd32c463001eb422505cf07a3306c37467$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__11 = goog.getMsg(" credit.notes.view.search.result.table.BALANCE ");
        i18n_10 = MSG_EXTERNAL_4701819e476fc10db4334f505513a2cd32c463001eb422505cf07a3306c37467$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__11;
      } else {
        i18n_10 = "Saldo";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_46a121441115d268386714b361a93fb05a0f83b913a73c23971488669a305587$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__13 = goog.getMsg(" credit.notes.view.search.result.table.STATUS ");
        i18n_12 = MSG_EXTERNAL_46a121441115d268386714b361a93fb05a0f83b913a73c23971488669a305587$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__13;
      } else {
        i18n_12 = "Estado";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_acb5c3fc93d5bcbd210d277df148e20cba3cbcf4703537796dad20a5e560216b$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__15 = goog.getMsg(" credit.notes.view.search.result.table.NBR ");
        i18n_14 = MSG_EXTERNAL_acb5c3fc93d5bcbd210d277df148e20cba3cbcf4703537796dad20a5e560216b$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__15;
      } else {
        i18n_14 = "N\xBA";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_63ad4c470833bf1f7886bccd5a52a33be7172c3e5fb7a10f0f8cafac15f38e16$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__17 = goog.getMsg(" credit.notes.view.search.result.table.CREATED ");
        i18n_16 = MSG_EXTERNAL_63ad4c470833bf1f7886bccd5a52a33be7172c3e5fb7a10f0f8cafac15f38e16$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__17;
      } else {
        i18n_16 = "Creaci\xF3n";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_896a19bebab3ca623b61382852b8730659e65dcc69e3f5028f4ce9ff91556b37$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__19 = goog.getMsg(" credit.notes.view.search.result.table.AMOUNT ");
        i18n_18 = MSG_EXTERNAL_896a19bebab3ca623b61382852b8730659e65dcc69e3f5028f4ce9ff91556b37$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__19;
      } else {
        i18n_18 = "Monto";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8b8432fb731ce3940cd6eee31bc00d16b1bcff3e0a2e786c8647f804cca6dd6f$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__21 = goog.getMsg(" credit.notes.views.actions.button.MERGE ");
        i18n_20 = MSG_EXTERNAL_8b8432fb731ce3940cd6eee31bc00d16b1bcff3e0a2e786c8647f804cca6dd6f$$SRC_APP_MODULES_CREDIT_NOTES_COMPONENTS_CREDIT_NOTES_CREDIT_NOTES_COMPONENT_TS__21;
      } else {
        i18n_20 = "Cruzar Facturas";
      }
      return [[1, "wrapper"], [1, "header"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64.84 70.61", 1, "icon-title"], ["id", "Capa_1-2"], ["x", ".25", "y", ".25", "width", "64.34", "height", "70.11", 1, "claseunounica"], ["x", "6.43", "y", "29.19", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "20.7", "y", "29.19", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "5.63", "y", "8.26", "width", "53.58", "height", "14.31", 1, "claseunounica"], ["x", "34.98", "y", "29.19", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "49.25", "y", "29.19", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "6.43", "y", "42.47", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "20.7", "y", "42.47", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "34.98", "y", "42.47", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "49.25", "y", "42.47", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "6.43", "y", "55.75", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "20.7", "y", "55.75", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "34.98", "y", "55.75", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "49.25", "y", "55.75", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "9.24", "y", "11.23", "width", "4.49", "height", "8.68", 1, "claseunounica"], ["x", "17.62", "y", "11.23", "width", "4.49", "height", "8.68", 1, "claseunounica"], ["x", "26", "y", "11.23", "width", "4.49", "height", "8.68", 1, "claseunounica"], ["x", "34.37", "y", "11.23", "width", "4.49", "height", "8.68", 1, "claseunounica"], ["points", "42.75 16.02 47.24 11.23 47.24 19.9", 1, "claseunounica"], ["points", "51.13 16.02 55.61 11.23 55.61 19.9", 1, "claseunounica"], [1, "title"], [1, "credit-notes"], [1, "primary-panel"], [1, "credit-notes__searcher"], [4, "ngIf"], [1, "queries__filter"], ["matPrefix", "", 1, "queries__filter-icon"], ["matInput", "", "placeholder", "Ingrese valor para filtrar", 3, "keyup"], ["input", ""], [1, "table-container", 3, "reachedBottom"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["creditNotesTable", "matSort"], ["matColumnDef", "creditNotesSelected"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "final_nbr"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "finalized_date"], ["matColumnDef", "TOTAL"], ["matColumnDef", "CUSTDFF_BALANCECREDIT"], ["matColumnDef", "Estado"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-raised-button", "", "color", "primary", "class", "export-button", 3, "click", 4, "permissions"], [1, "secondary-panel"], ["invoicesTable", "matSort"], ["matColumnDef", "invoiceSelected"], ["matColumnDef", "finalNumber"], ["matColumnDef", "finalizedDate"], ["matColumnDef", "balance"], ["matColumnDef", "bill"], [1, "cross-operation"], [1, "operations"], [1, "selected-items"], [1, "selected-title"], [1, "selected-list-scroll"], [1, "selected-list"], ["class", "selected-list-item", 4, "ngFor", "ngForOf"], [1, "selected-total"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 433.2 216.62", 1, "credit-notes-cross-principal-icon"], ["d", "m17.95,185.84c-9.91,0-17.95-8.04-17.95-17.95s8.04-17.95,17.95-17.95h106.08l103.96-113.33c3.53-3.84,8.35-5.78,13.18-5.78v-.04h113.92c9.91,0,17.95,8.04,17.95,17.95s-8.04,17.95-17.95,17.95h-106.08l-103.18,112.48c-3.29,4.07-8.32,6.67-13.96,6.67H17.95Z", 1, "claseunicaaaaaaaaaaaaa2"], ["points", "355.09 119.15 433.2 167.88 355.09 216.62 355.09 119.15", 1, "claseunicaaaaaaaaaaaaa1"], ["points", "355.09 0 433.2 48.73 355.09 97.47 355.09 0", 1, "claseunicaaaaaaaaaaaaa1"], ["d", "m17.95,66.69c-9.91,0-17.95-8.04-17.95-17.95s8.04-17.95,17.95-17.95h113.92c5.64,0,10.67,2.6,13.96,6.67l103.18,112.48h106.08c9.91,0,17.95,8.04,17.95,17.95s-8.04,17.95-17.95,17.95h-113.92v-.04c-4.83,0-9.65-1.95-13.18-5.78l-103.96-113.33H17.95Z", 1, "claseunicaaaaaaaaaaaaa2"], [1, "actions"], ["mat-flat-button", "", 1, "cancel-button", 3, "click"], i18n_2, ["mat-raised-button", "", "color", "primary", "class", "cross-button", 3, "disabled", "click", 4, "permissions"], [1, "credit-notes__customer-searcher", 3, "controlDisabled", "searcher", "data", "customerSearch"], ["mat-mini-fab", "", "color", "primary", 1, "credit-notes__search-button", 3, "disabled", "click"], ["mat-header-cell", ""], ["color", "primary", 3, "change"], ["mat-cell", ""], ["color", "primary", 3, "checked", "change"], ["mat-header-cell", "", "mat-sort-header", ""], i18n_4, i18n_6, i18n_8, i18n_10, i18n_12, ["mat-header-row", ""], ["mat-row", ""], ["mat-raised-button", "", "color", "primary", 1, "export-button", 3, "click"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 70.83 76.22", 1, "download-invoices-icon"], ["d", "m0,56.89v16.69c0,1.46,1.18,2.64,2.64,2.64h65.55c1.46,0,2.64-1.19,2.64-2.64v-16.69c0-1.46-1.19-2.64-2.64-2.64h-6.45c-1.45,0-2.64,1.19-2.64,2.64v7.58H11.73v-7.58c0-1.46-1.18-2.64-2.64-2.64H2.64c-1.46,0-2.64,1.19-2.64,2.64Zm3.19.55h5.35v8.63c0,.88.71,1.59,1.6,1.59h50.56c.88,0,1.6-.71,1.6-1.59v-8.63h5.35v15.59H3.19v-15.59Z", 1, "cls-1"], ["d", "m25.3,11.13h20.24c1.55,0,2.82-1.26,2.82-2.82V2.82c0-1.55-1.26-2.82-2.82-2.82h-20.24c-1.55,0-2.82,1.26-2.82,2.82v5.5c0,1.55,1.26,2.82,2.82,2.82Zm.38-7.94h19.49v4.75h-19.49V3.19Z", 1, "cls-1"], ["d", "m22.32,26.29h-10.34c-1.7,0-3.18.82-3.77,2.09-.46,1.01-.3,2.13.45,3.01l11.72,13.74h0l11.72,13.74c.75.88,1.96,1.38,3.31,1.38h0c1.36,0,2.57-.5,3.32-1.38l23.44-27.48c.75-.88.92-2.01.45-3.01-.59-1.27-2.06-2.09-3.77-2.09h-10.7v-9.75c0-1.46-1.18-2.64-2.64-2.64h-20.57c-1.45,0-2.64,1.19-2.64,2.64v9.75Zm1.59,3.19c.88,0,1.6-.71,1.6-1.6v-10.8h19.47v10.8c0,.88.72,1.6,1.6,1.6h12.29c.28,0,.5.05.65.11l-23.2,27.2c-.09.11-.43.26-.89.26h0c-.46,0-.8-.15-.89-.26l-11.72-13.74h0l-11.48-13.46c.15-.06.37-.11.65-.11h11.94Z", 1, "cls-1"], i18n_14, i18n_16, i18n_18, [1, "download-bill"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 317.73 416.59", 1, "download-bill-icon", 3, "click"], ["d", "m311.94,85.43h-59.35c-11.18,0-20.28-9.1-20.28-20.28V5.79c0-3.2,2.59-5.79,5.79-5.79s5.79,2.59,5.79,5.79v59.35c0,4.79,3.9,8.7,8.69,8.7h59.35c3.2,0,5.79,2.59,5.79,5.79s-2.59,5.79-5.79,5.79Z", 1, "claseunicadescarganotacredito"], ["d", "m258.77,65.47h51.03L251.86,7.53v51.03c0,3.81,3.1,6.91,6.91,6.91Z", 1, "claseunicadescarganotacredito"], ["d", "m258.77,81.8c-12.82,0-23.24-10.43-23.24-23.24V1.93H14.49C6.49,1.93,0,8.42,0,16.42v385.69c0,8,6.49,14.49,14.49,14.49h286.83c8,0,14.49-6.49,14.49-14.49V81.8h-57.03ZM37.65,55.25h170.95c3.38,0,6.12,2.74,6.12,6.12s-2.74,6.12-6.12,6.12H37.65c-3.38,0-6.12-2.74-6.12-6.12s2.74-6.12,6.12-6.12Zm240.49,288.74H37.65c-3.38,0-6.12-2.74-6.12-6.12s2.74-6.12,6.12-6.12h240.49c3.38,0,6.12,2.74,6.12,6.12s-2.74,6.12-6.12,6.12Zm0-46.08H37.65c-3.38,0-6.12-2.74-6.12-6.12s2.74-6.12,6.12-6.12h240.49c3.38,0,6.12,2.74,6.12,6.12s-2.74,6.12-6.12,6.12Zm0-46.08H37.65c-3.38,0-6.12-2.74-6.12-6.12s2.74-6.12,6.12-6.12h240.49c3.38,0,6.12,2.74,6.12,6.12s-2.74,6.12-6.12,6.12Zm0-46.08H37.65c-3.38,0-6.12-2.74-6.12-6.12s2.74-6.12,6.12-6.12h240.49c3.38,0,6.12,2.74,6.12,6.12s-2.74,6.12-6.12,6.12Zm0-46.08H37.65c-3.38,0-6.12-2.74-6.12-6.12s2.74-6.12,6.12-6.12h240.49c3.38,0,6.12,2.74,6.12,6.12s-2.74,6.12-6.12,6.12Zm0-46.08H37.65c-3.38,0-6.12-2.74-6.12-6.12s2.74-6.12,6.12-6.12h240.49c3.38,0,6.12,2.74,6.12,6.12s-2.74,6.12-6.12,6.12Z", 1, "claseunicadescarganotacredito"], [1, "selected-list-item"], ["mat-raised-button", "", "color", "primary", 1, "cross-button", 3, "disabled", "click"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 433.2 216.62", 1, "cross-button-icon"], ["d", "m17.95,185.84c-9.91,0-17.95-8.04-17.95-17.95s8.04-17.95,17.95-17.95h106.08l103.96-113.33c3.53-3.84,8.35-5.78,13.18-5.78v-.04h113.92c9.91,0,17.95,8.04,17.95,17.95s-8.04,17.95-17.95,17.95h-106.08l-103.18,112.48c-3.29,4.07-8.32,6.67-13.96,6.67H17.95Z", 1, "cls-2"], ["points", "355.09 119.15 433.2 167.88 355.09 216.62 355.09 119.15", 1, "cls-1"], ["points", "355.09 0 433.2 48.73 355.09 97.47 355.09 0", 1, "cls-1"], ["d", "m17.95,66.69c-9.91,0-17.95-8.04-17.95-17.95s8.04-17.95,17.95-17.95h113.92c5.64,0,10.67,2.6,13.96,6.67l103.18,112.48h106.08c9.91,0,17.95,8.04,17.95,17.95s-8.04,17.95-17.95,17.95h-113.92v-.04c-4.83,0-9.65-1.95-13.18-5.78l-103.96-113.33H17.95Z", 1, "cls-2"], i18n_20];
    },
    template: function CreditNotesComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "mat-card")(2, "mat-card-content")(3, "div", 1);
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(4, "svg", 2)(5, "defs")(6, "style");
        core/* ɵɵtext */._uU(7, ".claseunounica{fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(8, "g", 3);
        core/* ɵɵelement */._UZ(9, "rect", 4)(10, "rect", 5)(11, "rect", 6)(12, "rect", 7)(13, "rect", 8)(14, "rect", 9)(15, "rect", 10)(16, "rect", 11)(17, "rect", 12)(18, "rect", 13)(19, "rect", 14)(20, "rect", 15)(21, "rect", 16)(22, "rect", 17)(23, "rect", 18)(24, "rect", 19)(25, "rect", 20)(26, "rect", 21)(27, "polyline", 22)(28, "polyline", 23);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementStart */.TgZ(29, "h2", 24);
        core/* ɵɵtext */._uU(30, "Notas cr\u00E9dito");
        core/* ɵɵelementEnd */.qZA()()()();
        core/* ɵɵelementStart */.TgZ(31, "div", 25)(32, "mat-card")(33, "mat-card-content")(34, "div", 26);
        core/* ɵɵelementContainerStart */.ynx(35);
        core/* ɵɵelementStart */.TgZ(36, "div", 27);
        core/* ɵɵtemplate */.YNc(37, CreditNotesComponent_ng_container_37_Template, 2, 1, "ng-container", 28);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(38, "mat-form-field", 29)(39, "mat-label");
        core/* ɵɵtext */._uU(40, "Filtro");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(41, "mat-icon", 30);
        core/* ɵɵtext */._uU(42, "search");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(43, "input", 31, 32);
        core/* ɵɵlistener */.NdJ("keyup", function CreditNotesComponent_Template_input_keyup_43_listener($event) {
          return ctx.applyCreditNotesFilter($event);
        });
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(45, "ng-scrollbar", 33);
        core/* ɵɵlistener */.NdJ("reachedBottom", function CreditNotesComponent_Template_ng_scrollbar_reachedBottom_45_listener() {
          return ctx.loadCreditNotes();
        });
        core/* ɵɵelementStart */.TgZ(46, "table", 34, 35);
        core/* ɵɵelementContainerStart */.ynx(48, 36);
        core/* ɵɵtemplate */.YNc(49, CreditNotesComponent_th_49_Template, 2, 0, "th", 37);
        core/* ɵɵtemplate */.YNc(50, CreditNotesComponent_td_50_Template, 2, 1, "td", 38);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(51, 39);
        core/* ɵɵtemplate */.YNc(52, CreditNotesComponent_th_52_Template, 3, 0, "th", 40);
        core/* ɵɵtemplate */.YNc(53, CreditNotesComponent_td_53_Template, 2, 1, "td", 38);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(54, 41);
        core/* ɵɵtemplate */.YNc(55, CreditNotesComponent_th_55_Template, 3, 0, "th", 40);
        core/* ɵɵtemplate */.YNc(56, CreditNotesComponent_td_56_Template, 3, 4, "td", 38);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(57, 42);
        core/* ɵɵtemplate */.YNc(58, CreditNotesComponent_th_58_Template, 3, 0, "th", 40);
        core/* ɵɵtemplate */.YNc(59, CreditNotesComponent_td_59_Template, 3, 3, "td", 38);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(60, 43);
        core/* ɵɵtemplate */.YNc(61, CreditNotesComponent_th_61_Template, 3, 0, "th", 40);
        core/* ɵɵtemplate */.YNc(62, CreditNotesComponent_td_62_Template, 3, 3, "td", 38);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(63, 44);
        core/* ɵɵtemplate */.YNc(64, CreditNotesComponent_th_64_Template, 3, 0, "th", 37);
        core/* ɵɵtemplate */.YNc(65, CreditNotesComponent_td_65_Template, 3, 3, "td", 38);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(66, CreditNotesComponent_tr_66_Template, 1, 0, "tr", 45);
        core/* ɵɵtemplate */.YNc(67, CreditNotesComponent_tr_67_Template, 1, 0, "tr", 46);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵtemplate */.YNc(68, CreditNotesComponent_button_68_Template, 11, 0, "button", 47);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵelementStart */.TgZ(69, "mat-card")(70, "mat-card-content")(71, "div", 48)(72, "mat-form-field", 29)(73, "mat-label");
        core/* ɵɵtext */._uU(74, "Filtro");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(75, "mat-icon", 30);
        core/* ɵɵtext */._uU(76, "search");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(77, "input", 31, 32);
        core/* ɵɵlistener */.NdJ("keyup", function CreditNotesComponent_Template_input_keyup_77_listener($event) {
          return ctx.applyInvoiceFilter($event);
        });
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(79, "ng-scrollbar", 33);
        core/* ɵɵlistener */.NdJ("reachedBottom", function CreditNotesComponent_Template_ng_scrollbar_reachedBottom_79_listener() {
          return ctx.loadInvoice();
        });
        core/* ɵɵelementStart */.TgZ(80, "table", 34, 49);
        core/* ɵɵelementContainerStart */.ynx(82, 50);
        core/* ɵɵtemplate */.YNc(83, CreditNotesComponent_th_83_Template, 2, 0, "th", 37);
        core/* ɵɵtemplate */.YNc(84, CreditNotesComponent_td_84_Template, 2, 1, "td", 38);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(85, 51);
        core/* ɵɵtemplate */.YNc(86, CreditNotesComponent_th_86_Template, 3, 0, "th", 40);
        core/* ɵɵtemplate */.YNc(87, CreditNotesComponent_td_87_Template, 2, 1, "td", 38);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(88, 52);
        core/* ɵɵtemplate */.YNc(89, CreditNotesComponent_th_89_Template, 3, 0, "th", 40);
        core/* ɵɵtemplate */.YNc(90, CreditNotesComponent_td_90_Template, 3, 4, "td", 38);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(91, 53);
        core/* ɵɵtemplate */.YNc(92, CreditNotesComponent_th_92_Template, 3, 0, "th", 40);
        core/* ɵɵtemplate */.YNc(93, CreditNotesComponent_td_93_Template, 3, 3, "td", 38);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(94, 54);
        core/* ɵɵtemplate */.YNc(95, CreditNotesComponent_th_95_Template, 2, 0, "th", 37);
        core/* ɵɵtemplate */.YNc(96, CreditNotesComponent_td_96_Template, 10, 0, "td", 38);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(97, CreditNotesComponent_tr_97_Template, 1, 0, "tr", 45);
        core/* ɵɵtemplate */.YNc(98, CreditNotesComponent_tr_98_Template, 1, 0, "tr", 46);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(99, "div", 55)(100, "div", 56)(101, "div", 57)(102, "span", 58);
        core/* ɵɵtext */._uU(103, " Notas credito seleccionadas ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(104, "div", 59)(105, "ul", 60);
        core/* ɵɵtemplate */.YNc(106, CreditNotesComponent_li_106_Template, 2, 1, "li", 61);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵelementStart */.TgZ(107, "div", 57)(108, "span", 58);
        core/* ɵɵtext */._uU(109, " Total Notas credito a cruzar ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(110, "div", 62);
        core/* ɵɵtext */._uU(111);
        core/* ɵɵpipe */.ALo(112, "number");
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(113, "svg", 63)(114, "defs")(115, "style");
        core/* ɵɵtext */._uU(116, ".claseunicaaaaaaaaaaaaa1{fill-rule:evenodd;}.claseunicaaaaaaaaaaaaa1,.claseunicaaaaaaaaaaaaa2{fill:#92b976;stroke-width:0px;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(117, "g", 3);
        core/* ɵɵelement */._UZ(118, "path", 64)(119, "polygon", 65)(120, "polygon", 66)(121, "path", 67);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementStart */.TgZ(122, "div", 56)(123, "div", 57)(124, "span", 58);
        core/* ɵɵtext */._uU(125, " Facturas seleccionadas ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(126, "div", 59)(127, "ul", 60);
        core/* ɵɵtemplate */.YNc(128, CreditNotesComponent_li_128_Template, 2, 1, "li", 61);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵelementStart */.TgZ(129, "div", 57)(130, "span", 58);
        core/* ɵɵtext */._uU(131, " Total Facturas a pagar ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(132, "div", 62);
        core/* ɵɵtext */._uU(133);
        core/* ɵɵpipe */.ALo(134, "number");
        core/* ɵɵelementEnd */.qZA()()()();
        core/* ɵɵelementStart */.TgZ(135, "div", 68)(136, "button", 69);
        core/* ɵɵlistener */.NdJ("click", function CreditNotesComponent_Template_button_click_136_listener() {
          return ctx.cancel();
        });
        core/* ɵɵelementContainerStart */.ynx(137);
        core/* ɵɵi18n */.SDv(138, 70);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(139, CreditNotesComponent_button_139_Template, 13, 1, "button", 71);
        core/* ɵɵelementEnd */.qZA()()()()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(37);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.userInfo);
        core/* ɵɵadvance */.xp6(9);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.creditNotesDatasource);
        core/* ɵɵadvance */.xp6(20);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.creditNotesDisplayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.creditNotesDisplayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(17, _c22, ctx.privileges.NOTA_CRED_DOWN));
        core/* ɵɵadvance */.xp6(12);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.invoiceDatasource);
        core/* ɵɵadvance */.xp6(17);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.invoiceDisplayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.invoiceDisplayedColumns);
        core/* ɵɵadvance */.xp6(8);
        core/* ɵɵproperty */.Q6J("ngForOf", ctx.selectedCreditNotes);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind1 */.lcZ(112, 13, ctx.creditNotesTotal));
        core/* ɵɵadvance */.xp6(17);
        core/* ɵɵproperty */.Q6J("ngForOf", ctx.selectedInvoices);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind1 */.lcZ(134, 15, ctx.invoicesTotal));
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(19, _c22, ctx.privileges.NOTA_CRUZAR_FACT));
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, icon/* MatIcon */.Hw, fesm2020_checkbox/* MatCheckbox */.oG, fesm2020_button/* MatButton */.lW, fesm2020_button/* MatMiniFabButton */.nh, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatPrefix */.qo, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, card/* MatCard */.a8, card/* MatCardContent */.dn, sort/* MatSort */.YE, sort/* MatSortHeader */.nU, permissions_directive/* PermissionsDirective */.$, customer_searcher_component/* CustomerSearcherComponent */.p, ngx_scrollbar/* NgScrollbar */.KC, ngx_scrollbar_reached_event/* NgScrollbarReachedBottom */.kv, common/* DecimalPipe */.JJ, date_format_pipe/* DateFormatPipe */.E, CreditNotesState],
    styles: [".credit-notes[_ngcontent-%COMP%]{width:100%;height:100%;display:grid;grid-template-columns:1fr .7fr;grid-template-rows:1fr;gap:1rem;background-color:#fafafa}.credit-notes__searcher[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.credit-notes__customer-searcher[_ngcontent-%COMP%]{width:100%}.credit-notes__search-button[_ngcontent-%COMP%]{color:#fff!important;margin-bottom:1.25rem}.wrapper[_ngcontent-%COMP%]{width:100%;height:100%;padding:.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;gap:.5rem}.header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.title[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Gilroy-Light;font-weight:300;margin:0;padding-left:1rem;color:#78909c}.icon-title[_ngcontent-%COMP%]{width:1.5rem}.primary-panel[_ngcontent-%COMP%], .secondary-panel[_ngcontent-%COMP%]{padding:1rem}.primary-panel[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto}.credit-notes__title[_ngcontent-%COMP%]{margin-bottom:2rem;display:flex;justify-content:flex-start;align-items:center}.credit-notes__title-text[_ngcontent-%COMP%]{font-weight:300;margin:0}.credit-notes__title-icon[_ngcontent-%COMP%]{width:2rem;margin-right:1rem}.secondary-panel[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:min-content 40% auto auto;row-gap:1rem}.export-button[_ngcontent-%COMP%]{color:#fff!important}.credit-notes-cross-principal-icon[_ngcontent-%COMP%]{width:4rem;justify-self:center;align-self:center}.cross-button-icon[_ngcontent-%COMP%]{width:2rem;margin-right:1rem}.download-invoices-icon[_ngcontent-%COMP%]{width:1.5rem;margin-right:1rem}.download-bill[_ngcontent-%COMP%]{width:100%;color:#fff;display:flex;justify-content:center;align-items:center}.download-bill-icon[_ngcontent-%COMP%]{width:1rem;cursor:pointer}.table-container[_ngcontent-%COMP%]{height:40vh}.queries__filter[_ngcontent-%COMP%]{width:100%}.queries__filter-icon[_ngcontent-%COMP%]{color:#92b975}.selected-items[_ngcontent-%COMP%]{width:16rem;padding:1rem;background-color:#f5f5f5;margin-bottom:.1rem;border:2px rgb(227,227,227) solid;border-radius:5px}.selected-title[_ngcontent-%COMP%]{font-weight:500}.selected-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.selected-list-item[_ngcontent-%COMP%]{background-color:#fff;color:#555;border:.5px rgb(227,227,227) solid;font-size:1rem}.selected-list-item[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.selected-list-scroll[_ngcontent-%COMP%]{height:6rem;overflow-y:scroll}.cross-operation[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr}.selected-items_compact[_ngcontent-%COMP%]{height:5rem!important}.selected-total[_ngcontent-%COMP%]{background-color:#fff;border:1px rgb(227,227,227) solid}.selected-total[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.operations[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.cross-button[_ngcontent-%COMP%]{margin-left:1rem;color:#fff!important}  .mdc-tab__text-label{flex-direction:column!important}  .mdc-data-table__header-cell{text-align:center!important;font-family:Gilroy-ExtraBold;color:#66bb6a;font-size:1rem}  .mdc-data-table__row{background-color:#dfe6e91a!important;border:transparent solid!important;border-bottom:.25rem transparent solid!important}  .mdc-data-table__row:hover{background-color:#7ba0521a!important}  .mdc-data-table__row td{font-family:Gilroy-Light;color:#666!important}  .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}  .success-snackbar .mdc-snackbar__surface{color:#155724!important;background-color:#d4edda!important;border-color:#c3e6cb!important}  .success-snackbar .mdc-snackbar__surface .mdc-button__label{color:#155724!important}  .success-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#155724!important}  .warning-snackbar .mdc-snackbar__surface{color:#856404!important;background-color:#fff3cd!important;border-color:#ffeeba!important}  .warning-snackbar .mdc-snackbar__surface .mdc-button__label{color:#856404!important}  .warning-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#856404!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:transparent!important;--mat-mdc-button-persistent-ripple-color: currentColor !important}"]
  });
  return CreditNotesComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/guard/notifications.guard.ts
var notifications_guard = __webpack_require__(34418);
;// CONCATENATED MODULE: ./src/app/modules/credit-notes/credit-notes-routing.module.ts





const routes = [{
  path: "",
  component: CreditNotesComponent,
  canActivate: [notifications_guard/* NotificationsGuard */.t],
  data: {
    componentName: 'CreditNotesComponent',
    privilegeName: 'NOTA_CRED_BUS'
  }
}];
let CreditNotesRoutingModule = /*#__PURE__*/(() => {
  class CreditNotesRoutingModule {}
  CreditNotesRoutingModule.ɵfac = function CreditNotesRoutingModule_Factory(t) {
    return new (t || CreditNotesRoutingModule)();
  };
  CreditNotesRoutingModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: CreditNotesRoutingModule
  });
  CreditNotesRoutingModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [router/* RouterModule.forChild */.Bz.forChild(routes), router/* RouterModule */.Bz]
  });
  return CreditNotesRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(CreditNotesRoutingModule, {
    imports: [router/* RouterModule */.Bz],
    exports: [router/* RouterModule */.Bz]
  });
})();
// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 9 modules
var shared_module = __webpack_require__(96158);
;// CONCATENATED MODULE: ./src/app/modules/credit-notes/credit-notes.module.ts









let CreditNotesModule = /*#__PURE__*/(() => {
  class CreditNotesModule {}
  CreditNotesModule.ɵfac = function CreditNotesModule_Factory(t) {
    return new (t || CreditNotesModule)();
  };
  CreditNotesModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: CreditNotesModule
  });
  CreditNotesModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [common/* CommonModule */.ez, CreditNotesRoutingModule, shared_module/* SharedModule */.m, ngx_scrollbar/* NgScrollbarModule */.kb, ngx_scrollbar_reached_event/* NgScrollbarReachedModule */.bb]
  });
  return CreditNotesModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(CreditNotesModule, {
    declarations: [CreditNotesComponent, CreditNotesState, CreditNotesConfirmComponent],
    imports: [common/* CommonModule */.ez, CreditNotesRoutingModule, shared_module/* SharedModule */.m, ngx_scrollbar/* NgScrollbarModule */.kb, ngx_scrollbar_reached_event/* NgScrollbarReachedModule */.bb]
  });
})();

/***/ })

}]);