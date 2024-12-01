"use strict";
(self["webpackChunkbussinessPortal"] = self["webpackChunkbussinessPortal"] || []).push([[776],{

/***/ 88776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "QueriesModule": () => (/* binding */ QueriesModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__(36895);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2020/router.mjs + 5 modules
var router = __webpack_require__(77518);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2020/forms.mjs
var fesm2020_forms = __webpack_require__(24006);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/sort.mjs
var sort = __webpack_require__(96308);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/table.mjs + 2 modules
var table = __webpack_require__(7155);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subject.js + 1 modules
var Subject = __webpack_require__(77579);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(50727);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Observable.js
var Observable = __webpack_require__(69751);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(82722);
// EXTERNAL MODULE: ./src/app/state/api-gateway/api-gateway.selectors.ts
var api_gateway_selectors = __webpack_require__(75868);
// EXTERNAL MODULE: ./src/app/state/queries/queries.actions.ts
var queries_actions = __webpack_require__(8988);
// EXTERNAL MODULE: ./src/app/state/queries/queries.selectors.ts
var queries_selectors = __webpack_require__(17399);
// EXTERNAL MODULE: ./src/app/state/shared/shared.actions.ts
var shared_actions = __webpack_require__(68438);
// EXTERNAL MODULE: ./src/app/state/shared/shared.selectors.ts
var shared_selectors = __webpack_require__(13545);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs
var core = __webpack_require__(94650);
// EXTERNAL MODULE: ./node_modules/@ngrx/store/fesm2020/ngrx-store.mjs + 4 modules
var ngrx_store = __webpack_require__(55867);
// EXTERNAL MODULE: ./src/app/core/auth/services/base64-encryption-util.service.ts
var base64_encryption_util_service = __webpack_require__(46602);
// EXTERNAL MODULE: ./src/app/shared/services/util.service.ts
var util_service = __webpack_require__(22203);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/icon.mjs
var icon = __webpack_require__(97392);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/button.mjs
var fesm2020_button = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/form-field.mjs
var form_field = __webpack_require__(59549);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/input.mjs + 1 modules
var input = __webpack_require__(44144);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/select.mjs
var fesm2020_select = __webpack_require__(84385);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/core.mjs + 1 modules
var fesm2020_core = __webpack_require__(3238);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/card.mjs
var card = __webpack_require__(73546);
// EXTERNAL MODULE: ./src/app/shared/directives/permissions.directive.ts
var permissions_directive = __webpack_require__(4344);
;// CONCATENATED MODULE: ./src/app/modules/queries/components/queries/queries.component.ts

























function QueriesComponent_ng_container_0_ng_container_1_ng_container_50_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-option", 42);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const query_r7 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵproperty */.Q6J("value", query_r7);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij("", query_r7.name, " ");
  }
}
const _c4 = function (a0) {
  return [a0];
};
function QueriesComponent_ng_container_0_ng_container_1_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, QueriesComponent_ng_container_0_ng_container_1_ng_container_50_mat_option_1_Template, 2, 2, "mat-option", 41);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const query_r7 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(1, _c4, query_r7.privilege));
  }
}
function QueriesComponent_ng_container_0_ng_container_1_ng_container_53_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0, 45);
    core/* ɵɵelementStart */.TgZ(1, "mat-form-field", 46)(2, "mat-label");
    core/* ɵɵtext */._uU(3);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(4, "input", 47);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const i_r12 = ctx.index;
    const ctx_r10 = core/* ɵɵnextContext */.oxw(4);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r10.selectedOption.parameters[i_r12].title);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("formControlName", i_r12);
  }
}
function QueriesComponent_ng_container_0_ng_container_1_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "form", 43);
    core/* ɵɵtemplate */.YNc(2, QueriesComponent_ng_container_0_ng_container_1_ng_container_53_ng_container_2_Template, 5, 2, "ng-container", 44);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r4 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("formGroup", ctx_r4.parametersForm);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r4.parameters.controls);
  }
}
function QueriesComponent_ng_container_0_ng_container_1_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "mat-form-field", 48)(2, "mat-label");
    core/* ɵɵtext */._uU(3, "Filtro");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(4, "mat-icon", 49);
    core/* ɵɵtext */._uU(5, "search");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "input", 50, 51);
    core/* ɵɵlistener */.NdJ("keyup", function QueriesComponent_ng_container_0_ng_container_1_ng_container_54_Template_input_keyup_6_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r15);
      const ctx_r14 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r14.applyFilter($event));
    });
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
}
function QueriesComponent_ng_container_0_ng_container_1_ng_container_55_ng_container_2_th_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 58);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const column_r19 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(column_r19);
  }
}
function QueriesComponent_ng_container_0_ng_container_1_ng_container_55_ng_container_2_td_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "button", 62);
    core/* ɵɵlistener */.NdJ("click", function QueriesComponent_ng_container_0_ng_container_1_ng_container_55_ng_container_2_td_3_ng_container_1_Template_button_click_1_listener() {
      core/* ɵɵrestoreView */.CHM(_r30);
      const element_r24 = core/* ɵɵnextContext */.oxw().$implicit;
      const column_r19 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r28 = core/* ɵɵnextContext */.oxw(4);
      return core/* ɵɵresetView */.KtG(ctx_r28.downloadPDF(element_r24[column_r19]));
    });
    core/* ɵɵelementStart */.TgZ(2, "mat-icon");
    core/* ɵɵtext */._uU(3, "arrow_downward");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
}
function QueriesComponent_ng_container_0_ng_container_1_ng_container_55_ng_container_2_td_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */._uU(0);
  }
  if (rf & 2) {
    const element_r24 = core/* ɵɵnextContext */.oxw().$implicit;
    const column_r19 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵtextInterpolate */.Oqu(element_r24[column_r19]);
  }
}
function QueriesComponent_ng_container_0_ng_container_1_ng_container_55_ng_container_2_td_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 59);
    core/* ɵɵtemplate */.YNc(1, QueriesComponent_ng_container_0_ng_container_1_ng_container_55_ng_container_2_td_3_ng_container_1_Template, 4, 0, "ng-container", 60);
    core/* ɵɵtemplate */.YNc(2, QueriesComponent_ng_container_0_ng_container_1_ng_container_55_ng_container_2_td_3_ng_template_2_Template, 1, 1, "ng-template", null, 61, core/* ɵɵtemplateRefExtractor */.W1O);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const _r26 = core/* ɵɵreference */.MAs(3);
    const column_r19 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", column_r19 === "reporte")("ngIfElse", _r26);
  }
}
function QueriesComponent_ng_container_0_ng_container_1_ng_container_55_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0)(1, 55);
    core/* ɵɵtemplate */.YNc(2, QueriesComponent_ng_container_0_ng_container_1_ng_container_55_ng_container_2_th_2_Template, 2, 1, "th", 56);
    core/* ɵɵtemplate */.YNc(3, QueriesComponent_ng_container_0_ng_container_1_ng_container_55_ng_container_2_td_3_Template, 4, 2, "td", 57);
    core/* ɵɵelementContainerEnd */.BQk()();
  }
  if (rf & 2) {
    const column_r19 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matColumnDef", column_r19);
  }
}
function QueriesComponent_ng_container_0_ng_container_1_ng_container_55_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 63);
  }
}
function QueriesComponent_ng_container_0_ng_container_1_ng_container_55_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 64);
  }
}
function QueriesComponent_ng_container_0_ng_container_1_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "table", 52);
    core/* ɵɵtemplate */.YNc(2, QueriesComponent_ng_container_0_ng_container_1_ng_container_55_ng_container_2_Template, 4, 1, "ng-container", 39);
    core/* ɵɵtemplate */.YNc(3, QueriesComponent_ng_container_0_ng_container_1_ng_container_55_tr_3_Template, 1, 0, "tr", 53);
    core/* ɵɵtemplate */.YNc(4, QueriesComponent_ng_container_0_ng_container_1_ng_container_55_tr_4_Template, 1, 0, "tr", 54);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r6 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("dataSource", ctx_r6.dataSource);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r6.displayedColumns);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx_r6.displayedColumns);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx_r6.displayedColumns);
  }
}
function QueriesComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 1)(2, "mat-card")(3, "mat-card-content")(4, "div", 2);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(5, "svg", 3)(6, "defs")(7, "style");
    core/* ɵɵtext */._uU(8, ".claseunounica{fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(9, "g", 4);
    core/* ɵɵelement */._UZ(10, "rect", 5)(11, "rect", 6)(12, "rect", 7)(13, "rect", 8)(14, "rect", 9)(15, "rect", 10)(16, "rect", 11)(17, "rect", 12)(18, "rect", 13)(19, "rect", 14)(20, "rect", 15)(21, "rect", 16)(22, "rect", 17)(23, "rect", 18)(24, "rect", 19)(25, "rect", 20)(26, "rect", 21)(27, "rect", 22)(28, "polyline", 23)(29, "polyline", 24);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(30, "h2", 25);
    core/* ɵɵtext */._uU(31, "Consultas");
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(32, "div", 26)(33, "div", 27)(34, "div", 28)(35, "h2", 29);
    core/* ɵɵi18n */.SDv(36, 30);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(37, "svg", 31)(38, "defs")(39, "style");
    core/* ɵɵtext */._uU(40, ".cls-1{fill:#c5c6c8;}.cls-2{fill:#7ba052;}.cls-3{fill:#4b8051;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(41, "g", 4);
    core/* ɵɵelement */._UZ(42, "rect", 32)(43, "rect", 33)(44, "rect", 34);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(45, "div", 35)(46, "mat-form-field", 36)(47, "mat-label");
    core/* ɵɵi18n */.SDv(48, 37);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(49, "mat-select", 38);
    core/* ɵɵlistener */.NdJ("selectionChange", function QueriesComponent_ng_container_0_ng_container_1_Template_mat_select_selectionChange_49_listener() {
      core/* ɵɵrestoreView */.CHM(_r37);
      const ctx_r36 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r36.selectChange());
    });
    core/* ɵɵtemplate */.YNc(50, QueriesComponent_ng_container_0_ng_container_1_ng_container_50_Template, 2, 3, "ng-container", 39);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(51, "button", 40);
    core/* ɵɵlistener */.NdJ("click", function QueriesComponent_ng_container_0_ng_container_1_Template_button_click_51_listener() {
      core/* ɵɵrestoreView */.CHM(_r37);
      const ctx_r38 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r38.submit());
    });
    core/* ɵɵtext */._uU(52, " Buscar ");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵtemplate */.YNc(53, QueriesComponent_ng_container_0_ng_container_1_ng_container_53_Template, 3, 2, "ng-container", 0);
    core/* ɵɵtemplate */.YNc(54, QueriesComponent_ng_container_0_ng_container_1_ng_container_54_Template, 8, 0, "ng-container", 0);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵtemplate */.YNc(55, QueriesComponent_ng_container_0_ng_container_1_ng_container_55_Template, 5, 4, "ng-container", 0);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const queriesStore_r1 = core/* ɵɵnextContext */.oxw().ngIf;
    const ctx_r2 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(49);
    core/* ɵɵproperty */.Q6J("formControl", ctx_r2.selectQueries);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngForOf", queriesStore_r1.queries);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r2.selectedOption && ctx_r2.selectedOption.parameters);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r2.dataSource.data.length);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r2.dataSource.data.length);
  }
}
function QueriesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, QueriesComponent_ng_container_0_ng_container_1_Template, 56, 5, "ng-container", 0);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const queriesStore_r1 = ctx.ngIf;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", queriesStore_r1);
  }
}
let QueriesComponent = /*#__PURE__*/(() => {
  class QueriesComponent {
    constructor(store, base64EncryptionUtilService, utilService) {
      this.store = store;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.utilService = utilService;
      this.destroy$ = new Subject/* Subject */.x();
      this.user = null;
      this.sharedObservable = new Subscription/* Subscription */.w0();
      this.userObservable = new Subscription/* Subscription */.w0();
      this.queriesStore$ = new Observable/* Observable */.y();
      this.selectQueries = new fesm2020_forms/* FormControl */.NI("");
      this.parametersForm = new fesm2020_forms/* FormGroup */.cw({});
      this.selectedOption = null;
      this.dataSource = new table/* MatTableDataSource */.by();
      this.displayedColumns = [];
    }
    ngOnInit() {
      this.sharedObservable = this.store.select(shared_selectors/* sharedFeatureSelector */.x).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(next => {
        if (next.file) {
          window.open(this.utilService.pdfReceipt(next.file));
          this.store.dispatch((0,shared_actions/* cleanPdfInvoice */.I2)());
        }
      });
      this.parametersForm = new fesm2020_forms/* FormGroup */.cw({
        parameters: new fesm2020_forms/* FormArray */.Oe([])
      });
      this.store.dispatch((0,queries_actions/* getAllQueries */.uA)());
      this.userObservable = this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).subscribe({
        next: user => this.user = user,
        error: error => console.error(error)
      });
      this.queriesStore$ = this.store.select(queries_selectors/* queriesFeatureSelector */.w);
      this.queriesStore$.subscribe({
        next: queryStore => {
          if (queryStore.result) {
            if (typeof queryStore.result.result == "string") {
              this.dataSource = new table/* MatTableDataSource */.by(JSON.parse(queryStore.result.result) || []);
              this.displayedColumns = Object.keys(JSON.parse(queryStore.result.result)[0] || []);
            } else {
              this.dataSource = new table/* MatTableDataSource */.by(queryStore.result.result || []);
              this.displayedColumns = Object.keys(queryStore.result.result[0] || []);
            }
            this.dataSource.sort = this.sort;
          }
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.userObservable.unsubscribe();
      this.sharedObservable.unsubscribe();
      this.store.dispatch((0,shared_actions/* cleanPdfFile */.Yd)());
    }
    applyFilter(event) {
      const filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    get parameters() {
      return this.parametersForm.get("parameters");
    }
    addParameter() {
      this.parameters.push(new fesm2020_forms/* FormControl */.NI(""));
    }
    payloadGenerator(query, parameters, id) {
      return {
        "queryName": query.queryName,
        "parameters": id ? this.parameterGenerator([...parameters, id]) : this.parameterGenerator(parameters)
      };
    }
    parameterGenerator(parameters) {
      return parameters.map((parameter, index) => ({
        parameterId: index + 1,
        value: parameter,
        type: "String"
      }));
    }
    selectChange() {
      const context = this;
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.selectedOption = this.selectQueries.value;
      while (this.parameters.length > 0) this.parameters.removeAt(0);
      if (this.selectedOption) this.selectedOption.parameters.forEach(() => context.addParameter());
    }
    submit() {
      let payload;
      const userParameters = this.parametersForm.value.parameters;
      switch (this.selectedOption?.id) {
        case 1:
          payload = this.payloadGenerator(this.selectedOption, ["CONTE", ...userParameters, "USERCONTROLLER"]);
          this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
            payload
          }));
          break;
        case 2:
          payload = this.payloadGenerator(this.selectedOption, ["BO", ...userParameters, "USERCONTROLLER"]);
          this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
            payload
          }));
          break;
        case 3:
          payload = this.payloadGenerator(this.selectedOption, ["BL", ...userParameters, "USERCONTROLLER"]);
          this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
            payload
          }));
          break;
        case 4:
          payload = this.payloadGenerator(this.selectedOption, []);
          this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
            payload
          }));
          break;
        case 5:
          payload = this.payloadGenerator(this.selectedOption, ["USERCONTROLLER"]);
          this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
            payload
          }));
          break;
        case 6:
          payload = this.payloadGenerator(this.selectedOption, [...userParameters]);
          this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
            payload
          }));
          break;
        case 7:
          payload = this.payloadGenerator(this.selectedOption, [...userParameters, this.user?.empresa?.id]);
          this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
            payload
          }));
          break;
        case 8:
          payload = this.payloadGenerator(this.selectedOption, [...userParameters, this.user?.empresa?.id]);
          this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
            payload
          }));
          break;
        case 9:
          this.store.dispatch((0,queries_actions/* getDamageReport */.o1)({
            container: this.base64EncryptionUtilService.encrypt(userParameters[0]),
            id: this.base64EncryptionUtilService.encrypt(this.user?.empresa?.id)
          }));
          break;
        case 10:
          payload = this.payloadGenerator(this.selectedOption, userParameters);
          this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
            payload
          }));
          break;
        case 11:
          payload = this.payloadGenerator(this.selectedOption, userParameters);
          this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
            payload
          }));
          break;
        case 12:
          payload = this.payloadGenerator(this.selectedOption, [...userParameters, this.user?.empresa?.id]);
          this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
            payload
          }));
          break;
        case 13:
          payload = this.payloadGenerator(this.selectedOption, [...userParameters, this.user?.empresa?.id]);
          this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
            payload
          }));
          break;
        default:
          payload = this.payloadGenerator(this.selectedOption, [...userParameters, this.user?.empresa?.id]);
          this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
            payload
          }));
          break;
      }
    }
    downloadPDF(url) {
      this.store.dispatch((0,shared_actions/* getPdfFile */.RU)({
        url
      }));
    }
  }
  QueriesComponent.ɵfac = function QueriesComponent_Factory(t) {
    return new (t || QueriesComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f));
  };
  QueriesComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: QueriesComponent,
    selectors: [["app-queries"]],
    viewQuery: function QueriesComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
      }
    },
    decls: 2,
    vars: 3,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2819faa3e4bb44d00ee833f727b88ae615643503d3c9fe9ab953f4bb57b11197$$SRC_APP_MODULES_QUERIES_COMPONENTS_QUERIES_QUERIES_COMPONENT_TS___1 = goog.getMsg("querys.title.consultas");
        i18n_0 = MSG_EXTERNAL_2819faa3e4bb44d00ee833f727b88ae615643503d3c9fe9ab953f4bb57b11197$$SRC_APP_MODULES_QUERIES_COMPONENTS_QUERIES_QUERIES_COMPONENT_TS___1;
      } else {
        i18n_0 = "Consultas Disponibles";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6a8b996cd348882df7b3408c82de35356936fbc34ebc7971ed825b02897b8d25$$SRC_APP_MODULES_QUERIES_COMPONENTS_QUERIES_QUERIES_COMPONENT_TS___3 = goog.getMsg("querys.title.select");
        i18n_2 = MSG_EXTERNAL_6a8b996cd348882df7b3408c82de35356936fbc34ebc7971ed825b02897b8d25$$SRC_APP_MODULES_QUERIES_COMPONENTS_QUERIES_QUERIES_COMPONENT_TS___3;
      } else {
        i18n_2 = "Seleccionar Consulta";
      }
      return [[4, "ngIf"], [1, "wrapper"], [1, "header"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64.84 70.61", 1, "icon-title"], ["id", "Capa_1-2"], ["x", ".25", "y", ".25", "width", "64.34", "height", "70.11", 1, "claseunounica"], ["x", "6.43", "y", "29.19", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "20.7", "y", "29.19", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "5.63", "y", "8.26", "width", "53.58", "height", "14.31", 1, "claseunounica"], ["x", "34.98", "y", "29.19", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "49.25", "y", "29.19", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "6.43", "y", "42.47", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "20.7", "y", "42.47", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "34.98", "y", "42.47", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "49.25", "y", "42.47", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "6.43", "y", "55.75", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "20.7", "y", "55.75", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "34.98", "y", "55.75", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "49.25", "y", "55.75", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "9.24", "y", "11.23", "width", "4.49", "height", "8.68", 1, "claseunounica"], ["x", "17.62", "y", "11.23", "width", "4.49", "height", "8.68", 1, "claseunounica"], ["x", "26", "y", "11.23", "width", "4.49", "height", "8.68", 1, "claseunounica"], ["x", "34.37", "y", "11.23", "width", "4.49", "height", "8.68", 1, "claseunounica"], ["points", "42.75 16.02 47.24 11.23 47.24 19.9", 1, "claseunounica"], ["points", "51.13 16.02 55.61 11.23 55.61 19.9", 1, "claseunounica"], [1, "title-header"], [1, "queries"], [1, "queries__field"], [1, "title-card"], [1, "card-title"], i18n_0, ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 83.36 1.91", 1, "welcome__line"], ["width", "31.37", "height", "1.91", 1, "cls-2"], ["x", "26.13", "width", "28.61", "height", "1.91", 1, "cls-3"], ["x", "54.74", "width", "28.61", "height", "1.91", 1, "cls-1"], [1, "queries__form"], ["appearance", "fill", 1, "queries__field-form"], i18n_2, [3, "formControl", "selectionChange"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "queries__field-button", 3, "click"], [3, "value", 4, "permissions"], [3, "value"], [3, "formGroup"], ["formArrayName", "parameters", 4, "ngFor", "ngForOf"], ["formArrayName", "parameters"], [1, "queries__parameter-field"], ["matInput", "", "type", "text", 3, "formControlName"], [1, "queries__filter"], ["matPrefix", "", 1, "queries__filter-icon"], ["matInput", "", "placeholder", "Ingrese valor para filtrar", 3, "keyup"], ["input", ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row"]];
    },
    template: function QueriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, QueriesComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        core/* ɵɵpipe */.ALo(1, "async");
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.queriesStore$));
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, icon/* MatIcon */.Hw, fesm2020_button/* MatButton */.lW, fesm2020_button/* MatMiniFabButton */.nh, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatPrefix */.qo, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, fesm2020_select/* MatSelect */.gD, fesm2020_core/* MatOption */.ey, card/* MatCard */.a8, card/* MatCardContent */.dn, sort/* MatSort */.YE, sort/* MatSortHeader */.nU, fesm2020_forms/* ɵNgNoValidate */._Y, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* NgControlStatusGroup */.JL, fesm2020_forms/* FormControlDirective */.oH, fesm2020_forms/* FormGroupDirective */.sg, fesm2020_forms/* FormControlName */.u, fesm2020_forms/* FormArrayName */.CE, permissions_directive/* PermissionsDirective */.$, common/* AsyncPipe */.Ov],
    styles: [".queries[_ngcontent-%COMP%]{padding:0 1rem}.title[_ngcontent-%COMP%]{padding-top:1rem;color:#78909c}.wrapper[_ngcontent-%COMP%]{width:100%;height:100%;padding:.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:auto auto 1fr;gap:.5rem}.header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.title-header[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Gilroy-Light;margin:0;padding-left:1rem;color:#78909c;font-weight:300}.icon-title[_ngcontent-%COMP%]{width:1.5rem}.title-card[_ngcontent-%COMP%]{width:max-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.queries__field[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.queries__report[_ngcontent-%COMP%]{background-color:red}.queries__field-title[_ngcontent-%COMP%]{font-weight:500}.queries__form[_ngcontent-%COMP%]{width:80%;display:flex;justify-content:space-between;align-items:center}.queries__field-form[_ngcontent-%COMP%]{width:100%}.queries__field-button[_ngcontent-%COMP%]{margin-left:.2rem;color:#fff}.queries__parameter-field[_ngcontent-%COMP%]{width:20rem}.queries__filter[_ngcontent-%COMP%]{width:100%}.queries__filter-icon[_ngcontent-%COMP%]{color:#92b975}table[_ngcontent-%COMP%]{width:100%;height:min-content}  .mdc-tab__text-label{flex-direction:column!important}  .mdc-data-table__header-cell{text-align:center!important;font-family:Gilroy-ExtraBold;color:#66bb6a;font-size:1rem}  .mdc-data-table__row{background-color:#dfe6e91a!important;border:transparent solid!important;border-bottom:.25rem transparent solid!important}  .mdc-data-table__row:hover{background-color:#7ba0521a!important}  .mdc-data-table__row td{font-family:Gilroy-Light;color:#666!important}  .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}  .success-snackbar .mdc-snackbar__surface{color:#155724!important;background-color:#d4edda!important;border-color:#c3e6cb!important}  .success-snackbar .mdc-snackbar__surface .mdc-button__label{color:#155724!important}  .success-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#155724!important}  .warning-snackbar .mdc-snackbar__surface{color:#856404!important;background-color:#fff3cd!important;border-color:#ffeeba!important}  .warning-snackbar .mdc-snackbar__surface .mdc-button__label{color:#856404!important}  .warning-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#856404!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:transparent!important;--mat-mdc-button-persistent-ripple-color: currentColor !important}"]
  });
  return QueriesComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/guard/notifications.guard.ts
var notifications_guard = __webpack_require__(34418);
;// CONCATENATED MODULE: ./src/app/modules/queries/queries-routing.module.ts





const routes = [{
  path: "",
  component: QueriesComponent,
  canActivate: [notifications_guard/* NotificationsGuard */.t],
  data: {
    componentName: "QueriesComponent",
    privilegeName: "S_QRS,consultas"
  }
}];
let QueriesRoutingModule = /*#__PURE__*/(() => {
  class QueriesRoutingModule {}
  QueriesRoutingModule.ɵfac = function QueriesRoutingModule_Factory(t) {
    return new (t || QueriesRoutingModule)();
  };
  QueriesRoutingModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: QueriesRoutingModule
  });
  QueriesRoutingModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [router/* RouterModule.forChild */.Bz.forChild(routes), router/* RouterModule */.Bz]
  });
  return QueriesRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(QueriesRoutingModule, {
    imports: [router/* RouterModule */.Bz],
    exports: [router/* RouterModule */.Bz]
  });
})();
// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 9 modules
var shared_module = __webpack_require__(96158);
;// CONCATENATED MODULE: ./src/app/modules/queries/queries.module.ts





let QueriesModule = /*#__PURE__*/(() => {
  class QueriesModule {}
  QueriesModule.ɵfac = function QueriesModule_Factory(t) {
    return new (t || QueriesModule)();
  };
  QueriesModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: QueriesModule
  });
  QueriesModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [common/* CommonModule */.ez, QueriesRoutingModule, shared_module/* SharedModule */.m]
  });
  return QueriesModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(QueriesModule, {
    declarations: [QueriesComponent],
    imports: [common/* CommonModule */.ez, QueriesRoutingModule, shared_module/* SharedModule */.m]
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

/***/ }),

/***/ 17399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ queriesFeatureSelector)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55867);

const queriesFeatureSelector = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__/* .createFeatureSelector */ .ZF)("queries");

/***/ })

}]);