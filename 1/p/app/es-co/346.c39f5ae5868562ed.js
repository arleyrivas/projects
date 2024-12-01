"use strict";
(self["webpackChunkbussinessPortal"] = self["webpackChunkbussinessPortal"] || []).push([[346],{

/***/ 95346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DocumentalModule": () => (/* binding */ DocumentalModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__(36895);
// EXTERNAL MODULE: ./src/app/state/documental/documental.actions.ts
var documental_actions = __webpack_require__(50668);
// EXTERNAL MODULE: ./src/app/state/pagination/pagination.actions.ts
var pagination_actions = __webpack_require__(64659);
// EXTERNAL MODULE: ./node_modules/@ngrx/store/fesm2020/ngrx-store.mjs + 4 modules
var ngrx_store = __webpack_require__(55867);
;// CONCATENATED MODULE: ./src/app/state/pagination/pagination.selectors.ts

const paginationFeatureSelector = (0,ngrx_store/* createFeatureSelector */.ZF)("pagination");
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(50727);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs
var core = __webpack_require__(94650);
// EXTERNAL MODULE: ./node_modules/ngx-scrollbar/fesm2020/ngx-scrollbar.mjs + 3 modules
var ngx_scrollbar = __webpack_require__(52598);
// EXTERNAL MODULE: ./node_modules/ngx-scrollbar/fesm2020/ngx-scrollbar-reached-event.mjs
var ngx_scrollbar_reached_event = __webpack_require__(17876);
;// CONCATENATED MODULE: ./src/app/state/documental/documental.selectors.ts

const documentalSelector = (0,ngrx_store/* createFeatureSelector */.ZF)("documental");
const selectDocumentations = (0,ngrx_store/* createSelector */.P1)(documentalSelector, state => state.documentations);
// EXTERNAL MODULE: ../node_modules/moment-timezone/index.js
var moment_timezone = __webpack_require__(20079);
// EXTERNAL MODULE: ./src/app/state/api-gateway/api-gateway.selectors.ts
var api_gateway_selectors = __webpack_require__(75868);
// EXTERNAL MODULE: ./node_modules/ngx-spinner/fesm2020/ngx-spinner.mjs
var ngx_spinner = __webpack_require__(68423);
// EXTERNAL MODULE: ./src/app/shared/pipes/date-format.pipe.ts
var date_format_pipe = __webpack_require__(21428);
;// CONCATENATED MODULE: ./src/app/modules/documental/components/document-list/document-list.component.ts










function DocumentListComponent_ng_container_0_div_2_span_40_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(0, "span", 12);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const document_r4 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij("Usuario: ", document_r4.notificador, "");
  }
}
function DocumentListComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 4);
    core/* ɵɵlistener */.NdJ("click", function DocumentListComponent_ng_container_0_div_2_Template_div_click_0_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r8);
      const document_r4 = restoredCtx.$implicit;
      const ctx_r7 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r7.showInformation(document_r4));
    });
    core/* ɵɵelementStart */.TgZ(1, "div", 5)(2, "div", 6)(3, "p", 7);
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "p", 8);
    core/* ɵɵtext */._uU(6);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(7, "p", 9);
    core/* ɵɵtext */._uU(8);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵelementStart */.TgZ(9, "div", 10)(10, "p", 11)(11, "span", 12)(12, "span");
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(13, "svg", 13)(14, "defs")(15, "style");
    core/* ɵɵtext */._uU(16, ".cls-1{fill:#606060;fill-rule:evenodd;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(17, "g", 14);
    core/* ɵɵelement */._UZ(18, "path", 15)(19, "path", 16)(20, "path", 17)(21, "path", 18)(22, "path", 19)(23, "path", 20);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵtext */._uU(24);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(25, "span", 12)(26, "span");
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(27, "svg", 13)(28, "defs")(29, "style");
    core/* ɵɵtext */._uU(30, ".cls-1{fill:#606060;fill-rule:evenodd;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(31, "g", 14);
    core/* ɵɵelement */._UZ(32, "path", 15)(33, "path", 16)(34, "path", 17)(35, "path", 18)(36, "path", 19)(37, "path", 20);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵtext */._uU(38);
    core/* ɵɵpipe */.ALo(39, "dateFormat");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(40, DocumentListComponent_ng_container_0_div_2_span_40_Template, 2, 1, "span", 21);
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const document_r4 = ctx.$implicit;
    const ctx_r3 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵclassProp */.ekj("document_selected", document_r4.id == ctx_r3.documentSelectedID);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵtextInterpolate1 */.hij(" ", document_r4.nbr, " ");
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij(" ", document_r4.companyName, " ");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵclassProp */.ekj("document-rejected", document_r4.estado === "PENDIENTE");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", document_r4.estado, " ");
    core/* ɵɵadvance */.xp6(16);
    core/* ɵɵtextInterpolate1 */.hij(" ", document_r4.pendientes, " ");
    core/* ɵɵadvance */.xp6(14);
    core/* ɵɵtextInterpolate1 */.hij(" ", core/* ɵɵpipeBind2 */.xi3(39, 10, document_r4.lastUploadFileDate, "long"), " ");
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", document_r4.notificador);
  }
}
function DocumentListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 2);
    core/* ɵɵtemplate */.YNc(2, DocumentListComponent_ng_container_0_div_2_Template, 41, 13, "div", 3);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.documentations);
  }
}
function DocumentListComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p", 22);
    core/* ɵɵi18n */.SDv(1, 23);
    core/* ɵɵelementEnd */.qZA();
  }
}
let DocumentListComponent = /*#__PURE__*/(() => {
  class DocumentListComponent {
    constructor(store, ngxSpinnerService) {
      this.store = store;
      this.ngxSpinnerService = ngxSpinnerService;
      this.documentsSubscription = new Subscription/* Subscription */.w0();
      this.documentations = [];
      this.userSubscription = new Subscription/* Subscription */.w0();
      this.documentSelectedID = "";
    }
    ngOnInit() {
      this.documentsSubscription = this.store.select(selectDocumentations).subscribe({
        next: documentations => {
          this.documentations = documentations;
          this.ngxSpinnerService.hide();
        },
        error: error => console.error(error)
      });
      this.userSubscription = this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).subscribe({
        next: user => this.userInfo = user,
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.documentsSubscription.unsubscribe();
    }
    showInformation(document) {
      this.store.dispatch((0,documental_actions/* getDocumentationInformation */.n9)({
        document
      }));
      this.store.dispatch((0,documental_actions/* saveRequestTime */.d4)({
        requestTime: {
          user: this.userInfo.userName,
          name: this.userInfo.nombres,
          date_begin: moment_timezone().tz("America/Bogota").format("YYYY/MM/DD HH:mm:ss"),
          date_end: "",
          end_state: null
        }
      }));
      this.documentSelectedID = document.id;
    }
  }
  DocumentListComponent.ɵfac = function DocumentListComponent_Factory(t) {
    return new (t || DocumentListComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(ngx_spinner/* NgxSpinnerService */.t2));
  };
  DocumentListComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: DocumentListComponent,
    selectors: [["app-document-list"]],
    decls: 3,
    vars: 2,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_08f2c3df976c4948288231d88097f8132908098927b0634b279cc011d1f25bbc$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_LIST_DOCUMENT_LIST_COMPONENT_TS__1 = goog.getMsg(" documental.documentalController.NOT_FOUND ");
        i18n_0 = MSG_EXTERNAL_08f2c3df976c4948288231d88097f8132908098927b0634b279cc011d1f25bbc$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_LIST_DOCUMENT_LIST_COMPONENT_TS__1;
      } else {
        i18n_0 = " documental.documentalController.NOT_FOUND ";
      }
      return [[4, "ngIf", "ngIfElse"], ["notFound", ""], [1, "document-list"], ["class", "document_item", 3, "document_selected", "click", 4, "ngFor", "ngForOf"], [1, "document_item", 3, "click"], [1, "document__left"], [1, "document_information"], [1, "document_code"], [1, "document_name"], [1, "document_state"], [1, "document_date"], [1, "document_date-text"], [1, "document_number"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 79.25 79.26", 1, "icon-item"], ["id", "Capa_1-2"], ["d", "m77.21,24.94c-2.72-2.72-7.13-2.72-9.85,0-.84.84-6.17,6.18-6.99,6.99V13.54c0-1.86-.72-3.61-2.04-4.93l-6.57-6.57c-1.32-1.32-3.07-2.04-4.93-2.04H6.97C3.12,0,0,3.13,0,6.97v65.33c0,3.84,3.12,6.97,6.97,6.97h46.44c3.84,0,6.97-3.13,6.97-6.97v-20.65l16.84-16.85c2.72-2.72,2.72-7.13,0-9.85h0ZM46.44,4.65c.44,0,1.28-.08,2.04.68l6.57,6.57c.74.74.68,1.54.68,2.04h-9.29V4.65h0Zm9.29,67.65c0,1.28-1.04,2.32-2.32,2.32H6.97c-1.28,0-2.32-1.04-2.32-2.32V6.97c0-1.28,1.04-2.32,2.32-2.32h34.83v11.61c0,1.28,1.04,2.32,2.32,2.32h11.61v18.01l-6.85,6.86-3.28,3.28c-.25.25-.45.57-.56.91l-3.28,9.85c-.28.84-.06,1.76.56,2.38.62.62,1.54.84,2.38.56l9.85-3.28c.34-.11.65-.3.91-.56l.28-.28v16h0Zm-5.21-23.93l3.28,3.28-1.25,1.25-4.93,1.64,1.64-4.93,1.25-1.25h0Zm6.57,0l-3.28-3.28c1.75-1.75,9.52-9.52,11.16-11.17l3.28,3.28-11.16,11.17h0Zm16.84-16.85l-2.39,2.4-3.28-3.28,2.39-2.4c.91-.91,2.38-.91,3.28,0,.91.91.91,2.37,0,3.28Z", 1, "cls-1"], ["d", "m44.12,23.22H11.61c-1.28,0-2.32,1.04-2.32,2.32s1.04,2.32,2.32,2.32h32.51c1.28,0,2.32-1.04,2.32-2.32s-1.04-2.32-2.32-2.32Z", 1, "cls-1"], ["d", "m34.83,32.51H11.61c-1.28,0-2.32,1.04-2.32,2.32s1.04,2.32,2.32,2.32h23.22c1.28,0,2.32-1.04,2.32-2.32s-1.04-2.32-2.32-2.32Z", 1, "cls-1"], ["d", "m34.83,41.8H11.61c-1.28,0-2.32,1.04-2.32,2.32s1.04,2.32,2.32,2.32h23.22c1.28,0,2.32-1.04,2.32-2.32s-1.04-2.32-2.32-2.32Z", 1, "cls-1"], ["d", "m34.83,51.09H11.61c-1.28,0-2.32,1.04-2.32,2.32s1.04,2.32,2.32,2.32h23.22c1.28,0,2.32-1.04,2.32-2.32s-1.04-2.32-2.32-2.32Z", 1, "cls-1"], ["d", "m44.12,65.33h-13.93c-1.28,0-2.32,1.04-2.32,2.32s1.04,2.32,2.32,2.32h13.93c1.28,0,2.32-1.04,2.32-2.32s-1.04-2.32-2.32-2.32Z", 1, "cls-1"], ["class", "document_number", 4, "ngIf"], [1, "not-found"], i18n_0];
    },
    template: function DocumentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, DocumentListComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        core/* ɵɵtemplate */.YNc(1, DocumentListComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, core/* ɵɵtemplateRefExtractor */.W1O);
      }
      if (rf & 2) {
        const _r1 = core/* ɵɵreference */.MAs(2);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.documentations.length)("ngIfElse", _r1);
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, date_format_pipe/* DateFormatPipe */.E],
    styles: [".document-list[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.document_item[_ngcontent-%COMP%]{width:100%;height:5rem;padding:.7rem;margin-bottom:.5rem;cursor:pointer;background-color:#eee;border-radius:1rem;display:flex;justify-content:space-between;align-items:center}.icon-item[_ngcontent-%COMP%]{width:1rem}.document_information[_ngcontent-%COMP%]{padding-left:1rem;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.document__left[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.document_icon[_ngcontent-%COMP%], .document_information[_ngcontent-%COMP%]{color:#78909c}.document_code[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;font-size:12px;font-weight:thin;margin:0}.document_name[_ngcontent-%COMP%]{font-size:12px;font-weight:thin}.document_state[_ngcontent-%COMP%]{font-size:12px;font-weight:600;margin:0;color:#92b976}.document-rejected[_ngcontent-%COMP%]{color:#ff3838!important}.document_date-text[_ngcontent-%COMP%]{margin:0;color:#78909c;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start}.document_number[_ngcontent-%COMP%]{font-size:12px;text-align:left;margin:0}.document_selected[_ngcontent-%COMP%]{background-color:#eee}.not-found[_ngcontent-%COMP%]{color:#78909c;font-size:1.3rem;text-align:center;padding:1rem}"]
  });
  return DocumentListComponent;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Observable.js
var Observable = __webpack_require__(69751);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/map.js
var map = __webpack_require__(54004);
// EXTERNAL MODULE: ./src/app/shared/components/reject-warning-dialog/reject-warning-dialog.component.ts
var reject_warning_dialog_component = __webpack_require__(69304);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/dialog.mjs + 1 modules
var dialog = __webpack_require__(65412);
// EXTERNAL MODULE: ./src/app/core/auth/services/AESEncryptionUtil.service.ts
var AESEncryptionUtil_service = __webpack_require__(3056);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2020/router.mjs + 5 modules
var router = __webpack_require__(77518);
// EXTERNAL MODULE: ./src/app/modules/documental/services/documental.service.ts
var documental_service = __webpack_require__(89844);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/checkbox.mjs
var fesm2020_checkbox = __webpack_require__(56709);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/button.mjs
var fesm2020_button = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/tabs.mjs
var tabs = __webpack_require__(3848);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/card.mjs
var card = __webpack_require__(73546);
// EXTERNAL MODULE: ./src/app/shared/directives/after-if.directive.ts
var after_if_directive = __webpack_require__(15446);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2020/forms.mjs
var fesm2020_forms = __webpack_require__(24006);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/combineLatest.js
var combineLatest = __webpack_require__(39841);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/startWith.js
var startWith = __webpack_require__(68675);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/form-field.mjs
var form_field = __webpack_require__(59549);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/input.mjs + 1 modules
var input = __webpack_require__(44144);
;// CONCATENATED MODULE: ./src/app/modules/documental/components/documental-comment/documental-comment.component.ts












let DocumentalCommentComponent = /*#__PURE__*/(() => {
  class DocumentalCommentComponent {
    constructor(store) {
      this.store = store;
      this.disabled = false;
      this.comment = new fesm2020_forms/* FormControl */.NI({
        value: "",
        disabled: true
      });
      this.combineSubscription = new Subscription/* Subscription */.w0();
      this.commentSubscription = new Subscription/* Subscription */.w0();
      this.clearEmmiter = new core/* EventEmitter */.vpe();
    }
    checkboxChange(event) {
      event.checked ? this.comment.enable() : this.comment.disable();
      this.store.dispatch((0,documental_actions/* changeNotifyState */.xw)({
        state: event.checked
      }));
    }
    ngOnInit() {
      this.clearEmmiter.emit(this.clear.bind(this));
      this.combineSubscription = (0,combineLatest/* combineLatest */.a)([this.store.select(documentalSelector), this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o)]).subscribe({
        next: result => {
          if (result[0].information) this.information = result[0].information;
          if (result[1]) this.userInfo = result[1];
        }
      });
      this.combineSubscription.unsubscribe();
      this.commentSubscription = this.comment.valueChanges.pipe((0,startWith/* startWith */.O)("")).subscribe({
        next: value => {
          this.store.dispatch((0,documental_actions/* changeComment */.sA)({
            history: {
              user: this.userInfo.nombres,
              date: "",
              note: value
            }
          }));
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.combineSubscription.unsubscribe();
    }
    clear() {
      this.disabled = false;
      this.store.dispatch((0,documental_actions/* changeNotifyState */.xw)({
        state: false
      }));
      this.comment.reset();
    }
  }
  DocumentalCommentComponent.ɵfac = function DocumentalCommentComponent_Factory(t) {
    return new (t || DocumentalCommentComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh));
  };
  DocumentalCommentComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: DocumentalCommentComponent,
    selectors: [["app-documental-comment"]],
    outputs: {
      clearEmmiter: "clearEmmiter"
    },
    decls: 6,
    vars: 2,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_de85a0bc3087d608d3d265daa1b9cc7a7d24c5cb7bda974b2531952fd3d7cefb$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENTAL_COMMENT_DOCUMENTAL_COMMENT_COMPONENT_TS_1 = goog.getMsg(" documental.documentalController.NOT_APPROVE ");
        i18n_0 = MSG_EXTERNAL_de85a0bc3087d608d3d265daa1b9cc7a7d24c5cb7bda974b2531952fd3d7cefb$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENTAL_COMMENT_DOCUMENTAL_COMMENT_COMPONENT_TS_1;
      } else {
        i18n_0 = " documental.documentalController.NOT_APPROVE ";
      }
      return [[1, "documental-comment"], ["color", "primary", 3, "ngModel", "ngModelChange", "change"], i18n_0, [1, "comments"], ["matInput", "", "maxlength", "2000", "placeholder", "Comentarios", 3, "formControl"]];
    },
    template: function DocumentalCommentComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "mat-checkbox", 1);
        core/* ɵɵlistener */.NdJ("ngModelChange", function DocumentalCommentComponent_Template_mat_checkbox_ngModelChange_1_listener($event) {
          return ctx.disabled = $event;
        })("change", function DocumentalCommentComponent_Template_mat_checkbox_change_1_listener($event) {
          return ctx.checkboxChange($event);
        });
        core/* ɵɵelementContainerStart */.ynx(2);
        core/* ɵɵi18n */.SDv(3, 2);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(4, "mat-form-field", 3);
        core/* ɵɵelement */._UZ(5, "textarea", 4);
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngModel", ctx.disabled);
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵproperty */.Q6J("formControl", ctx.comment);
      }
    },
    dependencies: [fesm2020_checkbox/* MatCheckbox */.oG, form_field/* MatFormField */.KE, input/* MatInput */.Nt, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* MaxLengthValidator */.nD, fesm2020_forms/* NgModel */.On, fesm2020_forms/* FormControlDirective */.oH],
    styles: [".documental-comment[_ngcontent-%COMP%]{padding:1rem;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.comments[_ngcontent-%COMP%]{width:100%;height:100%}"]
  });
  return DocumentalCommentComponent;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/mergeMap.js
var mergeMap = __webpack_require__(86099);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/of.js
var of = __webpack_require__(39646);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/icon.mjs
var icon = __webpack_require__(97392);
;// CONCATENATED MODULE: ./src/app/modules/documental/components/documental-history/documental-history.component.ts







function DocumentalHistoryComponent_ng_container_0_ng_container_1_ng_container_2_p_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p", 12);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const historyItem_r6 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", historyItem_r6.note, " ");
  }
}
function DocumentalHistoryComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0, 5);
    core/* ɵɵelementStart */.TgZ(1, "div", 6)(2, "div", 7)(3, "mat-icon");
    core/* ɵɵtext */._uU(4, "person");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "p", 8);
    core/* ɵɵtext */._uU(6);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(7, "div", 9);
    core/* ɵɵtemplate */.YNc(8, DocumentalHistoryComponent_ng_container_0_ng_container_1_ng_container_2_p_8_Template, 2, 1, "p", 10);
    core/* ɵɵelementStart */.TgZ(9, "p", 11);
    core/* ɵɵtext */._uU(10);
    core/* ɵɵpipe */.ALo(11, "dateFormat");
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const historyItem_r6 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵtextInterpolate1 */.hij(" ", historyItem_r6.user, " ");
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", historyItem_r6.note);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij(" ", core/* ɵɵpipeBind2 */.xi3(11, 3, historyItem_r6.date, "long"), " ");
  }
}
function DocumentalHistoryComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 3);
    core/* ɵɵtemplate */.YNc(2, DocumentalHistoryComponent_ng_container_0_ng_container_1_ng_container_2_Template, 12, 6, "ng-container", 4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const history_r3 = core/* ɵɵnextContext */.oxw().ngIf;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngForOf", history_r3);
  }
}
function DocumentalHistoryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, DocumentalHistoryComponent_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 2);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const history_r3 = ctx.ngIf;
    core/* ɵɵnextContext */.oxw();
    const _r1 = core/* ɵɵreference */.MAs(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", history_r3.length)("ngIfElse", _r1);
  }
}
function DocumentalHistoryComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p", 13);
    core/* ɵɵtext */._uU(1, "No hay entradas en el historial");
    core/* ɵɵelementEnd */.qZA();
  }
}
let DocumentalHistoryComponent = /*#__PURE__*/(() => {
  class DocumentalHistoryComponent {
    constructor(store) {
      this.store = store;
      this.history = new Observable/* Observable */.y();
    }
    ngOnInit() {
      this.history = this.store.select(documentalSelector).pipe((0,mergeMap/* mergeMap */.z)(documentalStore => {
        if (documentalStore.information) {
          const observations = JSON.parse(documentalStore.information?.observations);
          if (observations) return (0,of.of)(observations.revision);
          return [];
        } else return [];
      }));
    }
  }
  DocumentalHistoryComponent.ɵfac = function DocumentalHistoryComponent_Factory(t) {
    return new (t || DocumentalHistoryComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh));
  };
  DocumentalHistoryComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: DocumentalHistoryComponent,
    selectors: [["app-documental-history"]],
    decls: 4,
    vars: 3,
    consts: [[4, "ngIf"], ["noEntries", ""], [4, "ngIf", "ngIfElse"], [1, "history"], ["class", "documental-history", 4, "ngFor", "ngForOf"], [1, "documental-history"], [1, "history-item"], [1, "user"], [1, "user__text"], [1, "bottom"], ["class", "description", 4, "ngIf"], [1, "date"], [1, "description"], [1, "no-entries"]],
    template: function DocumentalHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, DocumentalHistoryComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
        core/* ɵɵpipe */.ALo(1, "async");
        core/* ɵɵtemplate */.YNc(2, DocumentalHistoryComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, core/* ɵɵtemplateRefExtractor */.W1O);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.history));
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, icon/* MatIcon */.Hw, common/* AsyncPipe */.Ov, date_format_pipe/* DateFormatPipe */.E],
    styles: [".history[_ngcontent-%COMP%]{width:100%;height:20rem;overflow-y:scroll}.documental-history[_ngcontent-%COMP%]{height:20rem;padding:1rem;overflow-y:auto;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.history-item[_ngcontent-%COMP%]{padding:1rem 0 0 1rem;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.history-item[_ngcontent-%COMP%]:nth-child(odd){background-color:#eee}.user[_ngcontent-%COMP%]{margin-bottom:.8rem;display:flex;justify-content:center;align-items:center}.user__icon[_ngcontent-%COMP%]{color:#777}.user__text[_ngcontent-%COMP%]{margin:0;font-size:1.5rem;font-family:Gilroy-ExtraBold!important;color:#777}.bottom[_ngcontent-%COMP%]{padding-left:1.5rem}.state-icon[_ngcontent-%COMP%]{width:1rem}.description[_ngcontent-%COMP%]{font-size:1rem;position:relative}.date[_ngcontent-%COMP%]{font-size:1rem;font-weight:500}.no-entries[_ngcontent-%COMP%]{color:#78909c;font-size:1.3rem;text-align:center;padding:1rem}"]
  });
  return DocumentalHistoryComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/documental/components/document-information/document-information.component.ts




















function DocumentInformationComponent_ng_container_0_ng_container_1_li_9_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "li")(1, "span", 29);
    core/* ɵɵi18n */.SDv(2, 30);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const documentStore_r1 = core/* ɵɵnextContext */.oxw(2).ngIf;
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵtextInterpolate1 */.hij(" ", documentStore_r1.information.createdBy, " ");
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_li_10_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "li")(1, "span", 29);
    core/* ɵɵi18n */.SDv(2, 31);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const documentStore_r1 = core/* ɵɵnextContext */.oxw(2).ngIf;
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵtextInterpolate1 */.hij(" ", documentStore_r1.information.companyId, " ");
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_li_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "li")(1, "span", 29);
    core/* ɵɵi18n */.SDv(2, 32);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const documentStore_r1 = core/* ɵɵnextContext */.oxw(2).ngIf;
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵtextInterpolate1 */.hij(" ", documentStore_r1.information.companyName, " ");
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_li_13_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "li")(1, "span", 29);
    core/* ɵɵi18n */.SDv(2, 33);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const documentStore_r1 = core/* ɵɵnextContext */.oxw(2).ngIf;
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵtextInterpolate1 */.hij(" ", documentStore_r1.information.ownerId, " ");
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_li_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "li")(1, "span", 29);
    core/* ɵɵi18n */.SDv(2, 34);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const documentStore_r1 = core/* ɵɵnextContext */.oxw(2).ngIf;
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵtextInterpolate1 */.hij(" ", documentStore_r1.information.owner, " ");
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 38);
    core/* ɵɵlistener */.NdJ("click", function DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_td_3_Template_td_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r24);
      const file_r16 = core/* ɵɵnextContext */.oxw().$implicit;
      const documentStore_r1 = core/* ɵɵnextContext */.oxw(3).ngIf;
      const ctx_r22 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r22.openFile(documentStore_r1.information.id, file_r16.id));
    });
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const file_r16 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(file_r16.fileName);
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 39);
    core/* ɵɵlistener */.NdJ("click", function DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_td_4_Template_td_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r29);
      const file_r16 = core/* ɵɵnextContext */.oxw().$implicit;
      const documentStore_r1 = core/* ɵɵnextContext */.oxw(3).ngIf;
      const ctx_r27 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r27.openFile(documentStore_r1.information.id, file_r16.id));
    });
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const file_r16 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(file_r16.fileName);
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "dateFormat");
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const file_r16 = core/* ɵɵnextContext */.oxw(2).$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind2 */.xi3(2, 1, file_r16.approvedAt, "long"));
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_ng_container_9_ng_container_1_Template, 3, 4, "ng-container", 0);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const file_r16 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", file_r16.approvedAt);
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "dateFormat");
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const file_r16 = core/* ɵɵnextContext */.oxw(2).$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind2 */.xi3(2, 1, file_r16.rejectedAt, "long"));
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_ng_container_10_ng_container_1_Template, 3, 4, "ng-container", 0);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const file_r16 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", file_r16.rejectedAt);
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 40)(1, "mat-checkbox", 41);
    core/* ɵɵlistener */.NdJ("change", function DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_div_12_Template_mat_checkbox_change_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r40);
      const file_r16 = core/* ɵɵnextContext */.oxw().$implicit;
      const document_r14 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r38 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r38.matCheckboxChange($event, document_r14.id, file_r16.id, true, "Approved"));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "mat-checkbox", 41);
    core/* ɵɵlistener */.NdJ("change", function DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_div_12_Template_mat_checkbox_change_2_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r40);
      const file_r16 = core/* ɵɵnextContext */.oxw().$implicit;
      const document_r14 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r42 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r42.matCheckboxChange($event, document_r14.id, file_r16.id, false, "Disapproved"));
    });
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const file_r16 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("checked", file_r16.approved);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("checked", file_r16.rejected);
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr")(1, "td");
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(3, DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_td_3_Template, 2, 1, "td", 35);
    core/* ɵɵtemplate */.YNc(4, DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_td_4_Template, 2, 1, "td", 36);
    core/* ɵɵelementStart */.TgZ(5, "td");
    core/* ɵɵtext */._uU(6);
    core/* ɵɵpipe */.ALo(7, "dateFormat");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(8, "td");
    core/* ɵɵtemplate */.YNc(9, DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_ng_container_9_Template, 2, 1, "ng-container", 0);
    core/* ɵɵtemplate */.YNc(10, DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_ng_container_10_Template, 2, 1, "ng-container", 0);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(11, "td");
    core/* ɵɵtemplate */.YNc(12, DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_div_12_Template, 3, 2, "div", 37);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const file_r16 = ctx.$implicit;
    const document_r14 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(document_r14.fileName.name);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !file_r16.deleted);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", file_r16.deleted);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind2 */.xi3(7, 7, file_r16.createdAt, "long"));
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngIf", file_r16.approved);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", file_r16.rejected);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", !file_r16.deleted);
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_tr_1_Template, 13, 10, "tr", 19);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const document_r14 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngForOf", document_r14.files);
  }
}
function DocumentInformationComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 1);
    core/* ɵɵlistener */.NdJ("appAfterIf", function DocumentInformationComponent_ng_container_0_ng_container_1_Template_div_appAfterIf_1_listener() {
      core/* ɵɵrestoreView */.CHM(_r48);
      const ctx_r47 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r47.updateRejectedWarning());
    });
    core/* ɵɵelementStart */.TgZ(2, "div", 2)(3, "mat-card")(4, "mat-card-content")(5, "h2", 3);
    core/* ɵɵtext */._uU(6);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(7, "div", 4)(8, "ul", 5);
    core/* ɵɵtemplate */.YNc(9, DocumentInformationComponent_ng_container_0_ng_container_1_li_9_Template, 4, 1, "li", 0);
    core/* ɵɵtemplate */.YNc(10, DocumentInformationComponent_ng_container_0_ng_container_1_li_10_Template, 4, 1, "li", 0);
    core/* ɵɵtemplate */.YNc(11, DocumentInformationComponent_ng_container_0_ng_container_1_li_11_Template, 4, 1, "li", 0);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(12, "ul", 6);
    core/* ɵɵtemplate */.YNc(13, DocumentInformationComponent_ng_container_0_ng_container_1_li_13_Template, 4, 1, "li", 0);
    core/* ɵɵtemplate */.YNc(14, DocumentInformationComponent_ng_container_0_ng_container_1_li_14_Template, 4, 1, "li", 0);
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(15, "mat-card")(16, "mat-card-content")(17, "table", 7)(18, "thead")(19, "tr")(20, "th", 8);
    core/* ɵɵi18n */.SDv(21, 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(22, "th", 8);
    core/* ɵɵi18n */.SDv(23, 10);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(24, "th", 8);
    core/* ɵɵi18n */.SDv(25, 11);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(26, "th", 8);
    core/* ɵɵtext */._uU(27, " Fecha de revisi\u00F3n ");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(28, "th", 8)(29, "div", 12);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(30, "svg", 13);
    core/* ɵɵelement */._UZ(31, "defs");
    core/* ɵɵelementStart */.TgZ(32, "g", 14);
    core/* ɵɵelement */._UZ(33, "path", 15);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(34, "svg", 16);
    core/* ɵɵelement */._UZ(35, "defs");
    core/* ɵɵelementStart */.TgZ(36, "g", 14);
    core/* ɵɵelement */._UZ(37, "path", 17)(38, "path", 18);
    core/* ɵɵelementEnd */.qZA()()()()()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(39, "tbody");
    core/* ɵɵtemplate */.YNc(40, DocumentInformationComponent_ng_container_0_ng_container_1_ng_container_40_Template, 2, 1, "ng-container", 19);
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(41, "mat-card")(42, "mat-card-content")(43, "mat-tab-group", 20)(44, "mat-tab", 21)(45, "app-documental-comment", 22);
    core/* ɵɵlistener */.NdJ("clearEmmiter", function DocumentInformationComponent_ng_container_0_ng_container_1_Template_app_documental_comment_clearEmmiter_45_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r48);
      const ctx_r49 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r49.clearComment($event));
    });
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(46, "mat-tab", 23);
    core/* ɵɵelement */._UZ(47, "app-documental-history");
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(48, "div", 24)(49, "button", 25);
    core/* ɵɵlistener */.NdJ("click", function DocumentInformationComponent_ng_container_0_ng_container_1_Template_button_click_49_listener() {
      core/* ɵɵrestoreView */.CHM(_r48);
      const documentStore_r1 = core/* ɵɵnextContext */.oxw().ngIf;
      const ctx_r50 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r50.closeInformation(documentStore_r1.information));
    });
    core/* ɵɵelementContainerStart */.ynx(50);
    core/* ɵɵi18n */.SDv(51, 26);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(52, "button", 27);
    core/* ɵɵlistener */.NdJ("click", function DocumentInformationComponent_ng_container_0_ng_container_1_Template_button_click_52_listener() {
      core/* ɵɵrestoreView */.CHM(_r48);
      const documentStore_r1 = core/* ɵɵnextContext */.oxw().ngIf;
      const ctx_r52 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r52.notify(documentStore_r1.information, documentStore_r1.approved, documentStore_r1.history, documentStore_r1.requestTime, documentStore_r1.rejectWarning));
    });
    core/* ɵɵelementContainerStart */.ynx(53);
    core/* ɵɵi18n */.SDv(54, 28);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const documentStore_r1 = core/* ɵɵnextContext */.oxw().ngIf;
    const ctx_r2 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵtextInterpolate */.Oqu(documentStore_r1.information.nbr);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngIf", documentStore_r1.information.createdBy);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", documentStore_r1.information.companyId);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", documentStore_r1.information.companyName);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", documentStore_r1.information.ownerId);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", documentStore_r1.information.owner);
    core/* ɵɵadvance */.xp6(26);
    core/* ɵɵproperty */.Q6J("ngForOf", documentStore_r1.information.files);
    core/* ɵɵadvance */.xp6(12);
    core/* ɵɵproperty */.Q6J("disabled", ctx_r2.notifyButtonState(documentStore_r1.information.approved, documentStore_r1.approved));
  }
}
function DocumentInformationComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, DocumentInformationComponent_ng_container_0_ng_container_1_Template, 55, 8, "ng-container", 0);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const documentStore_r1 = ctx.ngIf;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", documentStore_r1.information);
  }
}
let DocumentInformationComponent = /*#__PURE__*/(() => {
  class DocumentInformationComponent {
    constructor(store, matDialog, aesService, router, documentalService) {
      this.store = store;
      this.matDialog = matDialog;
      this.aesService = aesService;
      this.router = router;
      this.documentalService = documentalService;
      this.dialogSubscription = new Subscription/* Subscription */.w0();
      this.documentalStore = new Observable/* Observable */.y();
      this.userInfo = {
        user: "",
        name: ""
      };
      this.resetForm = () => {};
    }
    ngOnInit() {
      this.documentalStore = this.store.select(documentalSelector);
      const userSubscription = this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,map/* map */.U)(user => ({
        user: user.userName,
        name: `${user.nombres} ${user.apellidos}`
      }))).subscribe({
        next: user => {
          this.userInfo = user;
        },
        error: error => console.error(error)
      });
      userSubscription.unsubscribe();
      this.updateRejectedWarning();
    }
    ngOnDestroy() {
      if (this.dialogSubscription) this.dialogSubscription.unsubscribe();
    }
    closeInformation(information) {
      this.store.dispatch((0,documental_actions/* addCancelRequestTime */.gO)());
      this.store.dispatch((0,documental_actions/* unlockInformation */.Vj)({
        information
      }));
      this.store.dispatch((0,documental_actions/* closeDocumentationInformation */.Im)());
      this.documentalService.getExecSearch().next(null);
    }
    updateRejectedWarning() {
      this.store.dispatch((0,documental_actions/* SaveRejectedWarning */.b5)());
    }
    matCheckboxChange(event, documentID, id, mode, state) {
      if (mode) this.store.dispatch((0,documental_actions/* changeFileStatus */.MF)({
        id,
        mode: false,
        checked: false
      }));else this.store.dispatch((0,documental_actions/* changeFileStatus */.MF)({
        id,
        mode: true,
        checked: false
      }));
      this.store.dispatch((0,documental_actions/* setUpdateAt */.jd)({
        documentID,
        fileID: id,
        updateAt: Date.now(),
        state
      }));
      this.store.dispatch((0,documental_actions/* changeFileStatus */.MF)({
        id,
        mode,
        checked: event.checked
      }));
      this.updateRejectedWarning();
    }
    notify(information, approve, history, requestTime, rejectedWarning) {
      if (!approve) this.store.dispatch((0,documental_actions/* rejectNoChecked */.XI)());
      if (rejectedWarning && !approve) {
        this.dialogSubscription = this.matDialog.open(reject_warning_dialog_component/* RejectWarningDialogComponent */.m).afterClosed().subscribe(ok => {
          if (ok) this.submit(information, approve, history, requestTime, rejectedWarning);
        });
      } else this.submit(information, approve, history, requestTime, rejectedWarning);
    }
    submit(information, approve, history, requestTime, rejectedWarning) {
      this.store.dispatch((0,documental_actions/* addComment */.Ir)({
        history,
        approve
      }));
      this.store.dispatch((0,documental_actions/* addRequestTime */.Rt)({
        requestTime,
        approve
      }));
      if (!approve) {
        this.store.dispatch((0,documental_actions/* approveInformation */.ao)());
        this.store.dispatch((0,documental_actions/* approveDocumentation */.w9)({
          information
        }));
      } else {
        this.store.dispatch((0,documental_actions/* disapproveInformation */.AQ)());
        this.store.dispatch((0,documental_actions/* disapproveDocumentation */.TZ)({
          information
        }));
      }
      this.resetForm();
      this.store.dispatch((0,documental_actions/* closeDocumentationInformation */.Im)());
      this.store.dispatch((0,documental_actions/* clearRequestTime */.$6)());
    }
    notifyButtonState(approved, checked) {
      if (checked) return false;
      return approved;
    }
    openFile(informationID, fileID) {
      const w = window.open(`${location.origin}/portal/api/documentation/file/${informationID}/${fileID}`, "_blank");
      if (w) w.onload = () => {
        w.document.title = "" + informationID + "-" + fileID + ".pdf";
      };
    }
    clearComment(event) {
      this.resetForm = event;
      this.store.dispatch((0,documental_actions/* clearComment */.ZT)());
    }
    goToModule(module) {
      this.router.navigate(["/", module]).then(() => {
        const currentRoute = this.router.url;
        this.router.navigateByUrl("/", {
          skipLocationChange: true
        }).then(() => this.router.navigate([currentRoute]));
      });
    }
  }
  DocumentInformationComponent.ɵfac = function DocumentInformationComponent_Factory(t) {
    return new (t || DocumentInformationComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw), core/* ɵɵdirectiveInject */.Y36(AESEncryptionUtil_service/* AESEncryptionUtilService */.D), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(documental_service/* DocumentalService */.i));
  };
  DocumentInformationComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: DocumentInformationComponent,
    selectors: [["app-document-information"]],
    decls: 2,
    vars: 3,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_cb8dadb98e6419b0ef165f809d44af37a886ad1dac33ac9f0d535d58f90edf5a$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS___1 = goog.getMsg(" documental.views.detal.table-header.TITTLE ");
        i18n_0 = MSG_EXTERNAL_cb8dadb98e6419b0ef165f809d44af37a886ad1dac33ac9f0d535d58f90edf5a$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS___1;
      } else {
        i18n_0 = " documental.views.detal.table-header.TITTLE ";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_503c24d6bbdf4b59cc968b0fbc74939a13fea6ba3a82efbf3c6a2c2c7809336a$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS___3 = goog.getMsg(" documental.views.detal.table-header.ATTACHED ");
        i18n_2 = MSG_EXTERNAL_503c24d6bbdf4b59cc968b0fbc74939a13fea6ba3a82efbf3c6a2c2c7809336a$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS___3;
      } else {
        i18n_2 = " documental.views.detal.table-header.ATTACHED ";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_ce566e30c180be1fcb07d62d72752ed9b61d69da59d37bf763052da8597cf897$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS___5 = goog.getMsg(" documental.views.detal.table-header.DATE_CREATED ");
        i18n_4 = MSG_EXTERNAL_ce566e30c180be1fcb07d62d72752ed9b61d69da59d37bf763052da8597cf897$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS___5;
      } else {
        i18n_4 = " documental.views.detal.table-header.DATE_CREATED ";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8f47e5190a03c1ca579888de0a7c5ecdce923262e3d0f54e58fc4161fa19b619$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS___7 = goog.getMsg(" agent.views.agent-generate-pin-bl.CANCEL ");
        i18n_6 = MSG_EXTERNAL_8f47e5190a03c1ca579888de0a7c5ecdce923262e3d0f54e58fc4161fa19b619$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS___7;
      } else {
        i18n_6 = " agent.views.agent-generate-pin-bl.CANCEL ";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5bd471346db09380726268dcfa2ff7f06e7df09519ebf9a6b3fe2735b0e3117b$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS___9 = goog.getMsg(" documental.documentalController.NOTIFICATE_AND_CONTINUE_OPERATING ");
        i18n_8 = MSG_EXTERNAL_5bd471346db09380726268dcfa2ff7f06e7df09519ebf9a6b3fe2735b0e3117b$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS___9;
      } else {
        i18n_8 = " documental.documentalController.NOTIFICATE_AND_CONTINUE_OPERATING ";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_263e477590ec4a83c66a15b47462c9c2b93736d499b421e183a808c3ac222a17$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS____11 = goog.getMsg(" documental.documentalController.UPLOAD_BY ");
        i18n_10 = MSG_EXTERNAL_263e477590ec4a83c66a15b47462c9c2b93736d499b421e183a808c3ac222a17$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS____11;
      } else {
        i18n_10 = " documental.documentalController.UPLOAD_BY ";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_be064e88f8370859b7aec01d2e42cc14a9356dcfb85f4d1875b7596d8d885b8b$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS____13 = goog.getMsg(" documental.views.detail.companyId.label ");
        i18n_12 = MSG_EXTERNAL_be064e88f8370859b7aec01d2e42cc14a9356dcfb85f4d1875b7596d8d885b8b$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS____13;
      } else {
        i18n_12 = " documental.views.detail.companyId.label ";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_a1f4a6c72038dc3870e10cba92787480483d949d3b4fd52252048153a8ef0f43$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS____15 = goog.getMsg(" documental.views.detail.companyName.label ");
        i18n_14 = MSG_EXTERNAL_a1f4a6c72038dc3870e10cba92787480483d949d3b4fd52252048153a8ef0f43$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS____15;
      } else {
        i18n_14 = " documental.views.detail.companyName.label ";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_a1aeeb809ed5b27d43a78471e9fd0decd3736ea6c188414996a29a0821e6f8da$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS____17 = goog.getMsg(" documental.views.detail.ownerId.label ");
        i18n_16 = MSG_EXTERNAL_a1aeeb809ed5b27d43a78471e9fd0decd3736ea6c188414996a29a0821e6f8da$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS____17;
      } else {
        i18n_16 = " documental.views.detail.ownerId.label ";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_b0e38ba0f3fb2d5722f19b7e55338d9ff7fb50375b3ddedc838ce5d033b42e96$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS____19 = goog.getMsg(" documental.views.detail.owner.label ");
        i18n_18 = MSG_EXTERNAL_b0e38ba0f3fb2d5722f19b7e55338d9ff7fb50375b3ddedc838ce5d033b42e96$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENT_INFORMATION_DOCUMENT_INFORMATION_COMPONENT_TS____19;
      } else {
        i18n_18 = " documental.views.detail.owner.label ";
      }
      return [[4, "ngIf"], [1, "document-information", 3, "appAfterIf"], [1, "content"], [1, "title"], [1, "information"], [1, "user"], [1, "BL"], [1, "table"], ["scope", "col"], i18n_0, i18n_2, i18n_4, [1, "state-icons"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 78.64 61.51", 1, "approved", "approved__svg"], ["id", "Capa_1-2"], ["d", "m74.54,4.51c-3.5-3.79-6.66-6.35-10.45-2.86L25.34,37.37l-9.78-11.18c-3.39-3.88-6.82-1.67-10.7,1.72-3.88,3.39-6.75,6.69-3.36,10.58l10.1,11.55,8.24,9.43c2.22,2.54,6.1,2.75,8.58.46l9.21-8.49L76.74,15.38c3.79-3.5,1.29-7.08-2.2-10.87Z", 1, "approved"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 72.98 69.05", 1, "rejected", "rejected__svg"], ["d", "m68.89,4.5c-3.49-3.78-6.65-6.33-10.43-2.85L1.93,53.76c-3.78,3.49-1.42,6.82,2.06,10.6h0c3.49,3.78,6.78,6.59,10.57,3.1L71.08,15.35c3.78-3.49,1.29-7.07-2.2-10.85Z", 1, "rejected"], ["d", "m4.09,4.5C7.58.72,10.74-1.83,14.52,1.65l56.53,52.11c3.78,3.49,1.42,6.82-2.06,10.6h0c-3.49,3.78-6.78,6.59-10.57,3.1L1.89,15.35c-3.78-3.49-1.29-7.07,2.2-10.85Z", 1, "rejected"], [4, "ngFor", "ngForOf"], [1, "tab-group"], ["label", "Comentarios"], [3, "clearEmmiter"], ["label", "Historial"], [1, "actions"], ["mat-raised-button", "", 3, "click"], i18n_6, ["mat-raised-button", "", "color", "primary", 1, "notify-button", 3, "disabled", "click"], i18n_8, [1, "informatiom-item"], i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, ["class", "fileName", 3, "click", 4, "ngIf"], ["class", "fileName", "class", "deleted-file", 3, "click", 4, "ngIf"], ["class", "state-checkboxes", 4, "ngIf"], [1, "fileName", 3, "click"], [1, "deleted-file", 3, "click"], [1, "state-checkboxes"], ["color", "primary", 3, "checked", "change"]];
    },
    template: function DocumentInformationComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, DocumentInformationComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        core/* ɵɵpipe */.ALo(1, "async");
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.documentalStore));
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, fesm2020_checkbox/* MatCheckbox */.oG, fesm2020_button/* MatButton */.lW, tabs/* MatTab */.uX, tabs/* MatTabGroup */.SP, card/* MatCard */.a8, card/* MatCardContent */.dn, after_if_directive/* AfterIfDirective */.Y, DocumentalCommentComponent, DocumentalHistoryComponent, common/* AsyncPipe */.Ov, date_format_pipe/* DateFormatPipe */.E],
    styles: [".title[_ngcontent-%COMP%]{padding-left:1rem;padding-top:1rem;color:#92b976;font-weight:400;font-family:Gilroy-ExtraBold!important}.content[_ngcontent-%COMP%]{padding-top:0;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto auto;row-gap:1rem}th[_ngcontent-%COMP%]{color:#777;font-family:Gilroy-ExtraBold}.deleted-file[_ngcontent-%COMP%]{text-decoration:line-through;cursor:pointer}.informatiom-item[_ngcontent-%COMP%]{color:#777;font-family:Gilroy-ExtraBold!important}.table[_ngcontent-%COMP%]{width:100%;background-color:#fff}.capa-2[_ngcontent-%COMP%]{width:1rem}.state-icons[_ngcontent-%COMP%], .state-checkboxes[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-around;align-items:center}.approved[_ngcontent-%COMP%]{fill:#92b976}.rejected[_ngcontent-%COMP%]{fill:#ff3838}.approved__svg[_ngcontent-%COMP%], .rejected__svg[_ngcontent-%COMP%]{width:1.5rem}.user[_ngcontent-%COMP%], .BL[_ngcontent-%COMP%]{padding:0;margin:0;list-style:none}.information[_ngcontent-%COMP%]{padding:1rem;background-color:#fff;overflow:hidden;display:flex;justify-content:space-between;align-items:center}.tab-group[_ngcontent-%COMP%]{background-color:#fff}.actions[_ngcontent-%COMP%]{padding:1rem;display:flex;justify-content:flex-end;align-items:center}.notify-button[_ngcontent-%COMP%]{margin-left:1rem;color:#fff!important}.fileName[_ngcontent-%COMP%]{text-decoration:underline;cursor:pointer}"]
  });
  return DocumentInformationComponent;
})();
// EXTERNAL MODULE: ./src/app/core/auth/services/base64-encryption-util.service.ts
var base64_encryption_util_service = __webpack_require__(46602);
;// CONCATENATED MODULE: ./src/app/modules/documental/components/documental-search/documental-search.component.ts










let DocumentalSearchComponent = /*#__PURE__*/(() => {
  class DocumentalSearchComponent {
    constructor(store, base64EncryptionUtilService, documentalService) {
      this.store = store;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.documentalService = documentalService;
      this.search = new fesm2020_forms/* FormControl */.NI("");
      this.searchSubscription = new Subscription/* Subscription */.w0();
    }
    ngOnInit() {
      this.searchSubscription = this.documentalService.getExecSearch().subscribe({
        next: () => {
          this.submit();
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.searchSubscription.unsubscribe();
    }
    submit() {
      const value = this.search.value;
      this.store.dispatch((0,documental_actions/* closeDocumentationInformation */.Im)());
      if (value.length) this.store.dispatch((0,documental_actions/* searchDocumentation */.mm)({
        nbr: this.base64EncryptionUtilService.encrypt(value)
      }));else {
        this.store.dispatch((0,documental_actions/* cleanDocumentations */.kQ)());
        this.store.dispatch((0,pagination_actions/* reset */.mc)());
      }
    }
  }
  DocumentalSearchComponent.ɵfac = function DocumentalSearchComponent_Factory(t) {
    return new (t || DocumentalSearchComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(documental_service/* DocumentalService */.i));
  };
  DocumentalSearchComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: DocumentalSearchComponent,
    selectors: [["app-documental-search"]],
    hostBindings: function DocumentalSearchComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵlistener */.NdJ("keydown.enter", function DocumentalSearchComponent_keydown_enter_HostBindingHandler() {
          return ctx.submit();
        }, false, core/* ɵɵresolveDocument */.evT);
      }
    },
    decls: 8,
    vars: 1,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_b539fc5b1b74e9f3a228c23d0de658cde189ed9adcd0790a5f84ef63800cdf66$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENTAL_SEARCH_DOCUMENTAL_SEARCH_COMPONENT_TS_1 = goog.getMsg(" documental.views.documental-search.BLOCK_HELP_LABEL ");
        i18n_0 = MSG_EXTERNAL_b539fc5b1b74e9f3a228c23d0de658cde189ed9adcd0790a5f84ef63800cdf66$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENTAL_SEARCH_DOCUMENTAL_SEARCH_COMPONENT_TS_1;
      } else {
        i18n_0 = " documental.views.documental-search.BLOCK_HELP_LABEL ";
      }
      return [[1, "documental-search"], [1, "input-form"], ["type", "text", "placeholder", "Buscar por BL, Booking \u00F3 Contenedor", 1, "search-field", 3, "formControl"], [1, "search-field__action", "search-field__search-button", 3, "click"], [1, "search__description"], i18n_0];
    },
    template: function DocumentalSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "div", 1);
        core/* ɵɵelement */._UZ(2, "input", 2);
        core/* ɵɵelementStart */.TgZ(3, "button", 3);
        core/* ɵɵlistener */.NdJ("click", function DocumentalSearchComponent_Template_button_click_3_listener() {
          return ctx.submit();
        });
        core/* ɵɵelementStart */.TgZ(4, "mat-icon");
        core/* ɵɵtext */._uU(5, "search");
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵelementStart */.TgZ(6, "p", 4);
        core/* ɵɵi18n */.SDv(7, 5);
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("formControl", ctx.search);
      }
    },
    dependencies: [icon/* MatIcon */.Hw, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* FormControlDirective */.oH],
    styles: [".documental-search[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.search[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.search-field[_ngcontent-%COMP%]{width:100%;height:2.5rem;background-color:#7ba05233;color:#666;border-top-left-radius:.5rem;border-bottom-left-radius:.5rem;border:none;outline:none;padding:0;padding-left:1rem;font-size:1rem}.search-field__action[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;border:none;outline:none;cursor:pointer;transition:background-color .2s;display:flex;justify-content:center;align-items:center}.search-field__search-button[_ngcontent-%COMP%]{background-color:#92b975;color:#fff;border-top-right-radius:.5rem;border-bottom-right-radius:.5rem;margin-left:.2rem}.search-field__delete-button[_ngcontent-%COMP%]{background-color:#fff;color:#95a5a6;border:1px solid #eceff1;margin-left:.2rem;box-shadow:0 2px #ccc}.search__description[_ngcontent-%COMP%]{font-size:.8rem;padding-top:.2rem;color:#7f8c8d}.input-form[_ngcontent-%COMP%]{width:100%;display:flex}"]
  });
  return DocumentalSearchComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/documental/components/documental/documental.component.ts











let DocumentalComponent = /*#__PURE__*/(() => {
  class DocumentalComponent {
    constructor(store) {
      this.store = store;
      this.count = 0;
      this.paginationSubscription = new Subscription/* Subscription */.w0();
    }
    ngOnInit() {
      this.paginationSubscription = this.store.select(paginationFeatureSelector).subscribe({
        next: pagination => {
          this.store.dispatch((0,documental_actions/* getAllDocumentation */.Mz)({
            pagination
          }));
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.paginationSubscription.unsubscribe();
      this.store.dispatch((0,documental_actions/* closeDocumentationInformation */.Im)());
      this.store.dispatch((0,documental_actions/* cleanDocumentations */.kQ)());
      this.store.dispatch((0,pagination_actions/* reset */.mc)());
      this.store.dispatch((0,documental_actions/* clearRequestTime */.$6)());
    }
    loadMore() {
      this.store.dispatch((0,pagination_actions/* next */.lp)());
    }
  }
  DocumentalComponent.ɵfac = function DocumentalComponent_Factory(t) {
    return new (t || DocumentalComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh));
  };
  DocumentalComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: DocumentalComponent,
    selectors: [["app-documental"]],
    decls: 16,
    vars: 0,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3d2ac9db5104659d2aa2045c1886845624d2223034d311178c9ed62dd97d1e2b$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENTAL_DOCUMENTAL_COMPONENT_TS_1 = goog.getMsg(" documental.views.documental-search.TITLE ");
        i18n_0 = MSG_EXTERNAL_3d2ac9db5104659d2aa2045c1886845624d2223034d311178c9ed62dd97d1e2b$$SRC_APP_MODULES_DOCUMENTAL_COMPONENTS_DOCUMENTAL_DOCUMENTAL_COMPONENT_TS_1;
      } else {
        i18n_0 = " documental.views.documental-search.TITLE ";
      }
      return [[1, "documental"], [1, "manage-document", 3, "reachedBottom"], [1, "title"], [1, "icon-title"], ["id", "Capa_2", "preserveAspectRatio", "xMinYMin meet", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 68.76 68.76", 1, "icon-title"], ["id", "Capa_1-2"], ["d", "m66.99,58.44l-12.09-12.09c1.14-2.37,1.77-5.01,1.77-7.81,0-4.31-1.51-8.27-4.03-11.38V10.34c0-1.11-.9-2.01-2.01-2.01h-2.02V2.01c0-1.11-.9-2.01-2.01-2.01H2.02C.91,0,0,.9,0,2.01v56.67c0,1.11.91,2.01,2.02,2.01h6.04v2.02c0,1.11.9,2.01,2.01,2.01h40.56c1.11,0,2.01-.9,2.01-2.01v-1.53l5.8,5.8c2.36,2.36,6.18,2.36,8.55,0,2.36-2.36,2.36-6.19,0-8.55h0Zm-14.35-19.9c0,7.77-6.32,14.1-14.1,14.1s-14.1-6.33-14.1-14.1,6.33-14.1,14.1-14.1,14.1,6.32,14.1,14.1h0ZM8.66,20.98c-.37.37-.61.89-.61,1.44v34.24h-4.03V4.03h40.55v4.3h-22.16c-.52,0-1.03.21-1.41.57l-12.35,12.08h0Zm11.75-5.85v5.28h-5.4l5.4-5.28h0Zm28.2,45.57H12.09V24.44h10.34c1.11,0,2.02-.91,2.02-2.02v-10.07h24.17v11.12c-2.88-1.93-6.35-3.06-10.07-3.06-9.99,0-18.13,8.13-18.13,18.13s8.13,18.13,18.13,18.13c2.8,0,5.45-.64,7.81-1.77l2.26,2.26v3.54h0Zm15.53,3.44c-.79.79-2.06.79-2.85,0l-11.43-11.44c1.05-.84,2-1.8,2.85-2.85l11.44,11.44c.79.78.79,2.06,0,2.85Z", 1, "cls-1"], i18n_0, [1, "information-document"]];
    },
    template: function DocumentalComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "ng-scrollbar", 1);
        core/* ɵɵlistener */.NdJ("reachedBottom", function DocumentalComponent_Template_ng_scrollbar_reachedBottom_1_listener() {
          return ctx.loadMore();
        });
        core/* ɵɵelementStart */.TgZ(2, "h1", 2)(3, "span", 3);
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(4, "svg", 4)(5, "defs")(6, "style");
        core/* ɵɵtext */._uU(7, ".cls-1{fill:#92b976;fill-rule:evenodd;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(8, "g", 5);
        core/* ɵɵelement */._UZ(9, "path", 6);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementContainerStart */.ynx(10);
        core/* ɵɵi18n */.SDv(11, 7);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(12, "app-documental-search")(13, "app-document-list");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(14, "div", 8);
        core/* ɵɵelement */._UZ(15, "app-document-information");
        core/* ɵɵelementEnd */.qZA()();
      }
    },
    dependencies: [ngx_scrollbar/* NgScrollbar */.KC, ngx_scrollbar_reached_event/* NgScrollbarReachedBottom */.kv, DocumentListComponent, DocumentInformationComponent, DocumentalSearchComponent],
    styles: [".documental[_ngcontent-%COMP%]{height:100%;padding-left:1rem;display:grid;grid-template-columns:.7fr 1fr;grid-template-rows:1fr;font-family:Gilroy-Light}.title[_ngcontent-%COMP%]{padding-top:1rem;color:#78909c}.manage-document[_ngcontent-%COMP%]{height:100vh}.information-document[_ngcontent-%COMP%]{padding:1rem;height:100vh;overflow-y:auto}  .ng-scroll-content{width:100%!important}.icon-title[_ngcontent-%COMP%]{width:2rem!important;color:#92b976!important;stroke:#92b976}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}  .success-snackbar .mdc-snackbar__surface{color:#155724!important;background-color:#d4edda!important;border-color:#c3e6cb!important}  .success-snackbar .mdc-snackbar__surface .mdc-button__label{color:#155724!important}  .success-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#155724!important}  .warning-snackbar .mdc-snackbar__surface{color:#856404!important;background-color:#fff3cd!important;border-color:#ffeeba!important}  .warning-snackbar .mdc-snackbar__surface .mdc-button__label{color:#856404!important}  .warning-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#856404!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:transparent!important;--mat-mdc-button-persistent-ripple-color: currentColor !important}"]
  });
  return DocumentalComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/guard/notifications.guard.ts
var notifications_guard = __webpack_require__(34418);
;// CONCATENATED MODULE: ./src/app/modules/documental/documental-routing.module.ts





const routes = [{
  path: "",
  component: DocumentalComponent,
  canActivate: [notifications_guard/* NotificationsGuard */.t],
  data: {
    componentName: "DocumentalComponent",
    privilegeName: "DOC_BUS"
  }
}];
let DocumentalRoutingModule = /*#__PURE__*/(() => {
  class DocumentalRoutingModule {}
  DocumentalRoutingModule.ɵfac = function DocumentalRoutingModule_Factory(t) {
    return new (t || DocumentalRoutingModule)();
  };
  DocumentalRoutingModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: DocumentalRoutingModule
  });
  DocumentalRoutingModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [router/* RouterModule.forChild */.Bz.forChild(routes), router/* RouterModule */.Bz]
  });
  return DocumentalRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(DocumentalRoutingModule, {
    imports: [router/* RouterModule */.Bz],
    exports: [router/* RouterModule */.Bz]
  });
})();
// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 9 modules
var shared_module = __webpack_require__(96158);
// EXTERNAL MODULE: ./node_modules/@ngrx/effects/fesm2020/ngrx-effects.mjs + 5 modules
var ngrx_effects = __webpack_require__(10493);
// EXTERNAL MODULE: ./src/app/state/documental/documental.effects.ts
var documental_effects = __webpack_require__(14890);
;// CONCATENATED MODULE: ./src/app/modules/documental/documental.module.ts















let DocumentalModule = /*#__PURE__*/(() => {
  class DocumentalModule {}
  DocumentalModule.ɵfac = function DocumentalModule_Factory(t) {
    return new (t || DocumentalModule)();
  };
  DocumentalModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: DocumentalModule
  });
  DocumentalModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [common/* CommonModule */.ez, DocumentalRoutingModule, shared_module/* SharedModule */.m, ngrx_effects/* EffectsModule.forFeature */.sQ.forFeature([documental_effects/* DocumentalEffects */.n]), ngx_scrollbar/* NgScrollbarModule */.kb, ngx_scrollbar_reached_event/* NgScrollbarReachedModule */.bb]
  });
  return DocumentalModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(DocumentalModule, {
    declarations: [DocumentalComponent, DocumentListComponent, DocumentInformationComponent, DocumentalCommentComponent, DocumentalSearchComponent, DocumentalHistoryComponent],
    imports: [common/* CommonModule */.ez, DocumentalRoutingModule, shared_module/* SharedModule */.m, ngrx_effects/* EffectsFeatureModule */.cL, ngx_scrollbar/* NgScrollbarModule */.kb, ngx_scrollbar_reached_event/* NgScrollbarReachedModule */.bb]
  });
})();

/***/ }),

/***/ 34418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ NotificationsGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94650);
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14779);


let NotificationsGuard = /*#__PURE__*/(() => {
  class NotificationsGuard {
    constructor(notificationsPortalService) {
      this.notificationsPortalService = notificationsPortalService;
    }
    canActivate(route) {
      const componentName = route.data['componentName'];
      const privilegeName = route.data['privilegeName'];
      this.notificationsPortalService.getNotificationByPrivileges(privilegeName);
      return true;
    }
  }
  NotificationsGuard.ɵfac = function NotificationsGuard_Factory(t) {
    return new (t || NotificationsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵinject"] */ .LFG(_services_notifications_service__WEBPACK_IMPORTED_MODULE_0__/* .NotificationsService */ .T));
  };
  NotificationsGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineInjectable"] */ .Yz7({
    token: NotificationsGuard,
    factory: NotificationsGuard.ɵfac,
    providedIn: 'root'
  });
  return NotificationsGuard;
})();

/***/ })

}]);