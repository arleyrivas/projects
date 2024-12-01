"use strict";
(self["webpackChunkbussinessPortal"] = self["webpackChunkbussinessPortal"] || []).push([[651],{

/***/ 48651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "HistoryCrossModule": () => (/* binding */ HistoryCrossModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__(36895);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2020/router.mjs + 5 modules
var router = __webpack_require__(77518);
// EXTERNAL MODULE: ./node_modules/@angular/animations/fesm2020/animations.mjs
var animations = __webpack_require__(37340);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/sort.mjs
var sort = __webpack_require__(96308);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/table.mjs + 2 modules
var table = __webpack_require__(7155);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(50727);
// EXTERNAL MODULE: ./src/app/state/api-gateway/api-gateway.selectors.ts
var api_gateway_selectors = __webpack_require__(75868);
// EXTERNAL MODULE: ./src/app/state/history-cross/history-cross.actions.ts
var history_cross_actions = __webpack_require__(79072);
// EXTERNAL MODULE: ./node_modules/@ngrx/store/fesm2020/ngrx-store.mjs + 4 modules
var ngrx_store = __webpack_require__(55867);
;// CONCATENATED MODULE: ./src/app/state/history-cross/history-selectors.ts

const historyCrossFeatureSelector = (0,ngrx_store/* createFeatureSelector */.ZF)("historyCross");
// EXTERNAL MODULE: ./src/app/state/shared/shared.actions.ts
var shared_actions = __webpack_require__(68438);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs
var core = __webpack_require__(94650);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/snack-bar.mjs
var snack_bar = __webpack_require__(17009);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/icon.mjs
var icon = __webpack_require__(97392);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/button.mjs
var fesm2020_button = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/form-field.mjs
var form_field = __webpack_require__(59549);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/input.mjs + 1 modules
var input = __webpack_require__(44144);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/card.mjs
var card = __webpack_require__(73546);
// EXTERNAL MODULE: ./src/app/modules/services/components/customer-searcher/customer-searcher.component.ts
var customer_searcher_component = __webpack_require__(19243);
// EXTERNAL MODULE: ./node_modules/ngx-scrollbar/fesm2020/ngx-scrollbar.mjs + 3 modules
var ngx_scrollbar = __webpack_require__(52598);
// EXTERNAL MODULE: ./node_modules/ngx-scrollbar/fesm2020/ngx-scrollbar-reached-event.mjs
var ngx_scrollbar_reached_event = __webpack_require__(17876);
;// CONCATENATED MODULE: ./src/app/modules/history-cross/components/history-cross/history-cross.component.ts






















function HistoryCrossComponent_ng_container_33_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "app-customer-searcher", 49);
    core/* ɵɵlistener */.NdJ("customerSearch", function HistoryCrossComponent_ng_container_33_ng_container_1_Template_app_customer_searcher_customerSearch_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r23);
      const ctx_r22 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r22.customerSearch($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "button", 50);
    core/* ɵɵlistener */.NdJ("click", function HistoryCrossComponent_ng_container_33_ng_container_1_Template_button_click_2_listener() {
      core/* ɵɵrestoreView */.CHM(_r23);
      const ctx_r24 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r24.selectCustomer());
    });
    core/* ɵɵelementStart */.TgZ(3, "mat-icon");
    core/* ɵɵtext */._uU(4, "search");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r21 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("controlDisabled", !ctx_r21.isAgent)("searcher", ctx_r21.isAgent)("data", ctx_r21.userInfo.empresa.id + "/" + ctx_r21.userInfo.userName);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("disabled", !ctx_r21.isAgent);
  }
}
function HistoryCrossComponent_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, HistoryCrossComponent_ng_container_33_ng_container_1_Template, 5, 4, "ng-container", 27);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.userInfo.empresa);
  }
}
function HistoryCrossComponent_th_45_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 51);
    core/* ɵɵtext */._uU(1, "Tran");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryCrossComponent_td_46_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r25.transNbr);
  }
}
function HistoryCrossComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 51);
    core/* ɵɵtext */._uU(1, "N\u00B0Fact");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryCrossComponent_td_49_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r26.finalNbr);
  }
}
function HistoryCrossComponent_th_51_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 51);
    core/* ɵɵtext */._uU(1, "Fecha");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryCrossComponent_td_52_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r27.tranDate);
  }
}
function HistoryCrossComponent_th_54_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 51);
    core/* ɵɵtext */._uU(1, "Monto");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryCrossComponent_td_55_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r28.amount);
  }
}
function HistoryCrossComponent_th_57_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 51);
    core/* ɵɵtext */._uU(1, "Saldo");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryCrossComponent_td_58_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r29.balance);
  }
}
function HistoryCrossComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 51);
    core/* ɵɵtext */._uU(1, "Agencia");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryCrossComponent_td_61_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 52);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r30 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r30.agentShip);
  }
}
function HistoryCrossComponent_th_63_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 53);
    core/* ɵɵtext */._uU(1, "Estado");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryCrossComponent_td_64_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 55)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".equis{fill:#ff3838;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 3);
    core/* ɵɵelement */._UZ(6, "path", 56)(7, "path", 57);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
}
function HistoryCrossComponent_td_64_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 58)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".prosoeaaa1{fill:#777677;stroke-width:0px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 3);
    core/* ɵɵelement */._UZ(6, "path", 59)(7, "path", 60);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
}
function HistoryCrossComponent_td_64_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 61)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".cheki{fill:#92b976;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 3);
    core/* ɵɵelement */._UZ(6, "path", 62);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
}
function HistoryCrossComponent_td_64_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-icon");
    core/* ɵɵtext */._uU(1, "keyboard_arrow_down");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryCrossComponent_td_64_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-icon");
    core/* ɵɵtext */._uU(1, "keyboard_arrow_up");
    core/* ɵɵelementEnd */.qZA();
  }
}
function HistoryCrossComponent_td_64_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 52)(1, "div", 54);
    core/* ɵɵtemplate */.YNc(2, HistoryCrossComponent_td_64_ng_container_2_Template, 8, 0, "ng-container", 27);
    core/* ɵɵtemplate */.YNc(3, HistoryCrossComponent_td_64_ng_container_3_Template, 8, 0, "ng-container", 27);
    core/* ɵɵtemplate */.YNc(4, HistoryCrossComponent_td_64_ng_container_4_Template, 7, 0, "ng-container", 27);
    core/* ɵɵtemplate */.YNc(5, HistoryCrossComponent_td_64_mat_icon_5_Template, 2, 0, "mat-icon", 27);
    core/* ɵɵtemplate */.YNc(6, HistoryCrossComponent_td_64_mat_icon_6_Template, 2, 0, "mat-icon", 27);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", element_r31.status === "ERROR");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r31.status === "PROCESO");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r31.status === "PROCESADO");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !element_r31.selected);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r31.selected);
  }
}
function HistoryCrossComponent_td_66_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr", 69)(1, "td", 70);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "td", 70);
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "td", 70);
    core/* ɵɵtext */._uU(6);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(7, "td", 70);
    core/* ɵɵtext */._uU(8);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const creditElement_r39 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(creditElement_r39.finalNbr);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(creditElement_r39.amount);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(creditElement_r39.balance);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(creditElement_r39.status);
  }
}
function HistoryCrossComponent_td_66_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 52)(1, "div", 63)(2, "div", 64)(3, "table", 65)(4, "thead")(5, "tr")(6, "th", 66);
    core/* ɵɵtext */._uU(7, "N\u00B0Nota");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(8, "th", 66);
    core/* ɵɵtext */._uU(9, "Valor Pago");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(10, "th", 66);
    core/* ɵɵtext */._uU(11, "Saldo Actual NC");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(12, "th", 66);
    core/* ɵɵtext */._uU(13, "Estado");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(14, "tr")(15, "th");
    core/* ɵɵelement */._UZ(16, "hr");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(17, "th");
    core/* ɵɵelement */._UZ(18, "hr");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(19, "th");
    core/* ɵɵelement */._UZ(20, "hr");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(21, "th");
    core/* ɵɵelement */._UZ(22, "hr");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(23, "tr");
    core/* ɵɵelement */._UZ(24, "th", 67);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(25, "tbody");
    core/* ɵɵtemplate */.YNc(26, HistoryCrossComponent_td_66_tr_26_Template, 9, 4, "tr", 68);
    core/* ɵɵelementStart */.TgZ(27, "tr");
    core/* ɵɵelement */._UZ(28, "th", 67);
    core/* ɵɵelementEnd */.qZA()()()()()();
  }
  if (rf & 2) {
    const element_r37 = ctx.$implicit;
    const ctx_r17 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵattribute */.uIk("colspan", ctx_r17.displayedColumns.length);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("@detailExpand", element_r37.selected ? "expanded" : "collapsed");
    core/* ɵɵadvance */.xp6(25);
    core/* ɵɵproperty */.Q6J("ngForOf", element_r37.credits);
  }
}
function HistoryCrossComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 71);
  }
}
function HistoryCrossComponent_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "tr", 72);
    core/* ɵɵlistener */.NdJ("click", function HistoryCrossComponent_tr_68_Template_tr_click_0_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r42);
      const row_r40 = restoredCtx.$implicit;
      const ctx_r41 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r41.toggleRow(row_r40));
    });
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const row_r40 = ctx.$implicit;
    core/* ɵɵclassProp */.ekj("example-expanded-row", row_r40.selected);
  }
}
function HistoryCrossComponent_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 73);
  }
}
const _c0 = function () {
  return ["expandedDetail"];
};
let HistoryCrossComponent = /*#__PURE__*/(() => {
  class HistoryCrossComponent {
    constructor(store, matSnackBar) {
      this.store = store;
      this.matSnackBar = matSnackBar;
      this.page = 0;
      this.selectedHistoryCrossInvoice = null;
      this.displayedColumns = [];
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.historyCrossSubscription = new Subscription/* Subscription */.w0();
      this.customer = null;
      this.selectedCustomer = null;
      this.role = null;
      this.isAgent = false;
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).subscribe({
        next: APIGatewatStore => {
          this.userInfo = APIGatewatStore;
          this.isAgent = APIGatewatStore.empresa?.tiposEmpresas.filter(value => value.selected)[0].companyTypeId === "06";
          this.role = this.isAgent ? "AGENT" : "SHIPPER";
          this.selectedCustomer = this.userInfo.empresa?.id + "/" + this.userInfo.userName;
          this.store.dispatch((0,history_cross_actions/* cleanHistoryCrosses */.H9)());
          this.store.dispatch((0,history_cross_actions/* getHistoryCross */.oq)({
            customer: this.selectedCustomer.split("/")[0],
            role: this.role,
            page: 0
          }));
        },
        error: error => console.error(error)
      });
      this.historyCrossSubscription = this.store.select(historyCrossFeatureSelector).subscribe({
        next: store => {
          const initialElement = store.result;
          let finalInvoices = [];
          initialElement.forEach(historyCross => {
            historyCross.invoices.forEach(element => {
              element.agentShip = historyCross.agentShip;
              element.tranDate = historyCross.tranDate;
              element.transNbr = historyCross.transNbr;
              finalInvoices = [...finalInvoices, element];
            });
          });
          this.displayedColumns = ['transNbr', 'finalNbr', 'tranDate', 'amount', 'balance', 'agentShip', 'Estado'];
          this.dataSource = new table/* MatTableDataSource */.by(finalInvoices);
          this.dataSource.sort = this.sort;
          this.dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
              case 'tranDate':
                {
                  let newDate = new Date(item.tranDate);
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
      this.historyCrossSubscription.unsubscribe();
      this.store.dispatch((0,history_cross_actions/* cleanHistoryCrosses */.H9)());
    }
    customerSearch(value) {
      this.customer = value;
      if (!value) {
        this.store.dispatch((0,shared_actions/* cleanCustomer */.n6)());
      }
    }
    selectCustomer() {
      if (this.customer && this.customer.split("/")[1]) {
        this.selectedCustomer = this.customer;
        this.role = "SHIPPER";
        this.page = 0;
        this.store.dispatch((0,history_cross_actions/* cleanHistoryCrosses */.H9)());
        this.store.dispatch((0,history_cross_actions/* getHistoryCross */.oq)({
          customer: this.selectedCustomer?.split("/")[0],
          role: this.role,
          page: this.page
        }));
      } else {
        this.store.dispatch((0,history_cross_actions/* cleanHistoryCrosses */.H9)());
        this.store.dispatch((0,history_cross_actions/* getHistoryCross */.oq)({
          customer: this.userInfo.empresa?.id,
          role: "AGENT",
          page: 0
        }));
      }
    }
    loadMore() {
      if (this.selectedCustomer && this.selectedCustomer?.split("/")[1]) {
        this.page = this.page + 1;
        this.store.dispatch((0,history_cross_actions/* getHistoryCross */.oq)({
          customer: this.selectedCustomer?.split("/")[0],
          role: this.role,
          page: this.page
        }));
      }
    }
    applyFilter(event) {
      const filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    toggleRow(element) {
      element.selected = !element.selected;
    }
  }
  HistoryCrossComponent.ɵfac = function HistoryCrossComponent_Factory(t) {
    return new (t || HistoryCrossComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux));
  };
  HistoryCrossComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: HistoryCrossComponent,
    selectors: [["app-history-cross"]],
    viewQuery: function HistoryCrossComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
      }
    },
    decls: 70,
    vars: 6,
    consts: [[1, "wrapper"], [1, "header"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64.84 70.61", 1, "icon-title"], ["id", "Capa_1-2"], ["x", ".25", "y", ".25", "width", "64.34", "height", "70.11", 1, "claseunounica"], ["x", "6.43", "y", "29.19", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "20.7", "y", "29.19", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "5.63", "y", "8.26", "width", "53.58", "height", "14.31", 1, "claseunounica"], ["x", "34.98", "y", "29.19", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "49.25", "y", "29.19", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "6.43", "y", "42.47", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "20.7", "y", "42.47", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "34.98", "y", "42.47", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "49.25", "y", "42.47", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "6.43", "y", "55.75", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "20.7", "y", "55.75", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "34.98", "y", "55.75", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "49.25", "y", "55.75", "width", "8.93", "height", "8.93", 1, "claseunounica"], ["x", "9.24", "y", "11.23", "width", "4.49", "height", "8.68", 1, "claseunounica"], ["x", "17.62", "y", "11.23", "width", "4.49", "height", "8.68", 1, "claseunounica"], ["x", "26", "y", "11.23", "width", "4.49", "height", "8.68", 1, "claseunounica"], ["x", "34.37", "y", "11.23", "width", "4.49", "height", "8.68", 1, "claseunounica"], ["points", "42.75 16.02 47.24 11.23 47.24 19.9", 1, "claseunounica"], ["points", "51.13 16.02 55.61 11.23 55.61 19.9", 1, "claseunounica"], [1, "title-header"], [1, "history-cross"], [1, "history-cross__searcher"], [4, "ngIf"], [1, "queries__filter"], ["matPrefix", "", 1, "queries__filter-icon"], ["matInput", "", "placeholder", "Ingrese valor para filtrar", 3, "keyup"], ["input", ""], [1, "manage-document", 3, "reachedBottom"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource"], ["invoicesTable", ""], ["matColumnDef", "transNbr"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "finalNbr"], ["matColumnDef", "tranDate"], ["matColumnDef", "amount"], ["matColumnDef", "balance"], ["matColumnDef", "agentShip"], ["matColumnDef", "Estado"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [1, "history-cross__customer-searcher", 3, "controlDisabled", "searcher", "data", "customerSearch"], ["mat-mini-fab", "", "color", "primary", 1, "history-cross__search-button", 3, "disabled", "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "history-cross__table-actions"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 72.98 69.05", 1, "history-cross__icon-x"], ["d", "m68.89,4.5c-3.49-3.78-6.65-6.33-10.43-2.85L1.93,53.76c-3.78,3.49-1.42,6.82,2.06,10.6h0c3.49,3.78,6.78,6.59,10.57,3.1L71.08,15.35c3.78-3.49,1.29-7.07-2.2-10.85Z", 1, "equis"], ["d", "m4.09,4.5C7.58.72,10.74-1.83,14.52,1.65l56.53,52.11c3.78,3.49,1.42,6.82-2.06,10.6h0c-3.49,3.78-6.78,6.59-10.57,3.1L1.89,15.35c-3.78-3.49-1.29-7.07,2.2-10.85Z", 1, "equis"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 413.24 413.24", 1, "history-cross__icon-x"], ["d", "m380.58,143.21l-90.83-11.53c-6.62-.84-9.47-8.86-4.86-13.69l18.28-19.15c-26.66-18.06-60.17-28.85-96.55-28.85-71.89,0-130.18,61.04-130.3,136.4l-76.32-.06C.16,92.34,92.6,0,206.62,0c53.68,0,102.57,20.47,139.31,54.03l14.03-14.7c4.61-4.83,12.75-2.36,13.9,4.21l15.78,90.2c.94,5.4-3.61,10.16-9.05,9.47Z", 1, "prosoeaaa1"], ["d", "m32.65,270.03l90.83,11.53c6.62.84,9.47,8.86,4.86,13.69l-18.28,19.15c26.66,18.06,60.17,28.85,96.55,28.85,71.89,0,130.18-61.04,130.3-136.4l76.32.06c-.16,113.97-92.6,206.32-206.62,206.32-53.68,0-102.57-20.47-139.31-54.03l-14.03,14.7c-4.61,4.83-12.75,2.36-13.9-4.21l-15.78-90.2c-.94-5.4,3.61-10.16,9.05-9.47Z", 1, "prosoeaaa1"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 78.64 61.51", 1, "history-cross__icon-check"], ["d", "m74.54,4.51c-3.5-3.79-6.66-6.35-10.45-2.86L25.34,37.37l-9.78-11.18c-3.39-3.88-6.82-1.67-10.7,1.72-3.88,3.39-6.75,6.69-3.36,10.58l10.1,11.55,8.24,9.43c2.22,2.54,6.1,2.75,8.58.46l9.21-8.49L76.74,15.38c3.79-3.5,1.29-7.08-2.2-10.87Z", 1, "cheki"], [1, "example-element-detail"], [1, "table-border-rounded"], [1, "history-cross__sub-table"], [1, "history-cross__table-header-item", "history-cross__table-body-item__darken"], [1, "history-cross__table-space_min"], ["class", "credits", 4, "ngFor", "ngForOf"], [1, "credits"], [1, "history-cross__table-body-item", "history-cross__table-body-item__darken", "history-cross__table-body-outlined"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]],
    template: function HistoryCrossComponent_Template(rf, ctx) {
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
        core/* ɵɵtext */._uU(30, "Historial de cruces");
        core/* ɵɵelementEnd */.qZA()()()();
        core/* ɵɵelementStart */.TgZ(31, "div", 25)(32, "div", 26);
        core/* ɵɵtemplate */.YNc(33, HistoryCrossComponent_ng_container_33_Template, 2, 1, "ng-container", 27);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(34, "mat-form-field", 28)(35, "mat-label");
        core/* ɵɵtext */._uU(36, "Filtro");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(37, "mat-icon", 29);
        core/* ɵɵtext */._uU(38, "search");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(39, "input", 30, 31);
        core/* ɵɵlistener */.NdJ("keyup", function HistoryCrossComponent_Template_input_keyup_39_listener($event) {
          return ctx.applyFilter($event);
        });
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(41, "ng-scrollbar", 32);
        core/* ɵɵlistener */.NdJ("reachedBottom", function HistoryCrossComponent_Template_ng_scrollbar_reachedBottom_41_listener() {
          return ctx.loadMore();
        });
        core/* ɵɵelementStart */.TgZ(42, "table", 33, 34);
        core/* ɵɵelementContainerStart */.ynx(44, 35);
        core/* ɵɵtemplate */.YNc(45, HistoryCrossComponent_th_45_Template, 2, 0, "th", 36);
        core/* ɵɵtemplate */.YNc(46, HistoryCrossComponent_td_46_Template, 2, 1, "td", 37);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(47, 38);
        core/* ɵɵtemplate */.YNc(48, HistoryCrossComponent_th_48_Template, 2, 0, "th", 36);
        core/* ɵɵtemplate */.YNc(49, HistoryCrossComponent_td_49_Template, 2, 1, "td", 37);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(50, 39);
        core/* ɵɵtemplate */.YNc(51, HistoryCrossComponent_th_51_Template, 2, 0, "th", 36);
        core/* ɵɵtemplate */.YNc(52, HistoryCrossComponent_td_52_Template, 2, 1, "td", 37);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(53, 40);
        core/* ɵɵtemplate */.YNc(54, HistoryCrossComponent_th_54_Template, 2, 0, "th", 36);
        core/* ɵɵtemplate */.YNc(55, HistoryCrossComponent_td_55_Template, 2, 1, "td", 37);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(56, 41);
        core/* ɵɵtemplate */.YNc(57, HistoryCrossComponent_th_57_Template, 2, 0, "th", 36);
        core/* ɵɵtemplate */.YNc(58, HistoryCrossComponent_td_58_Template, 2, 1, "td", 37);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(59, 42);
        core/* ɵɵtemplate */.YNc(60, HistoryCrossComponent_th_60_Template, 2, 0, "th", 36);
        core/* ɵɵtemplate */.YNc(61, HistoryCrossComponent_td_61_Template, 2, 1, "td", 37);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(62, 43);
        core/* ɵɵtemplate */.YNc(63, HistoryCrossComponent_th_63_Template, 2, 0, "th", 44);
        core/* ɵɵtemplate */.YNc(64, HistoryCrossComponent_td_64_Template, 7, 5, "td", 37);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(65, 45);
        core/* ɵɵtemplate */.YNc(66, HistoryCrossComponent_td_66_Template, 29, 3, "td", 37);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(67, HistoryCrossComponent_tr_67_Template, 1, 0, "tr", 46);
        core/* ɵɵtemplate */.YNc(68, HistoryCrossComponent_tr_68_Template, 1, 2, "tr", 47);
        core/* ɵɵtemplate */.YNc(69, HistoryCrossComponent_tr_69_Template, 1, 0, "tr", 48);
        core/* ɵɵelementEnd */.qZA()()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(33);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.userInfo);
        core/* ɵɵadvance */.xp6(9);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.dataSource);
        core/* ɵɵadvance */.xp6(25);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", core/* ɵɵpureFunction0 */.DdM(5, _c0));
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, icon/* MatIcon */.Hw, fesm2020_button/* MatMiniFabButton */.nh, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatPrefix */.qo, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, card/* MatCard */.a8, card/* MatCardContent */.dn, sort/* MatSort */.YE, sort/* MatSortHeader */.nU, customer_searcher_component/* CustomerSearcherComponent */.p, ngx_scrollbar/* NgScrollbar */.KC, ngx_scrollbar_reached_event/* NgScrollbarReachedBottom */.kv],
    styles: [".history-cross[_ngcontent-%COMP%]{width:100%;height:100%;padding:1rem;padding-bottom:0;display:grid;grid-template-columns:1fr;grid-template-rows:auto auto 1fr}.history-cross__customer-searcher[_ngcontent-%COMP%]{width:100%}.history-cross__searcher[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.history-cross__search-button[_ngcontent-%COMP%]{margin-bottom:1.25rem;color:#fff!important}.wrapper[_ngcontent-%COMP%]{width:100%;height:100%;padding:.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;gap:.5rem}.header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.title-header[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Gilroy-Light;margin:0;padding-left:1rem;color:#78909c;font-weight:300}.icon-title[_ngcontent-%COMP%]{width:1.5rem}.title-card[_ngcontent-%COMP%]{width:max-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.queries__filter[_ngcontent-%COMP%]{width:100%}.table-border-rounded[_ngcontent-%COMP%]{width:100%;background-color:#f1f2f6;border-radius:.5rem}.history-cross__table[_ngcontent-%COMP%]{width:100%;border-collapse:separate;border-spacing:0}.history-cross__sub-table[_ngcontent-%COMP%]{width:100%;border-collapse:separate;border-spacing:0;margin:0}.history-cross__table-header[_ngcontent-%COMP%]{background-color:#92b976;color:#fff}.history-cross__table-header-item[_ngcontent-%COMP%]{padding:1rem;font-weight:500;text-align:center}.history-cross__table-body-item[_ngcontent-%COMP%]{text-align:center}.history-cross__table-body-item__darken[_ngcontent-%COMP%]{background-color:#f1f2f6}.history-cross__table-header-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.history-cross__table-header-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.history-cross__table-body-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}.history-cross__table-body-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}.history-cross__table-body-outlined[_ngcontent-%COMP%]:last-child{border-right:1px solid #78909c;border-right:0}.history-cross__sub-table-header-item[_ngcontent-%COMP%]{padding:1rem;font-weight:500;text-align:center}.history-cross__sub-table-header-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.history-cross__sub-table-header-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.history-cross__sub-table-body-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.history-cross__sub-table-body-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.history-cross__table-outlined[_ngcontent-%COMP%]{border:1px solid #78909c}.history-cross__table-space[_ngcontent-%COMP%]{padding:.5rem}.history-cross__table-space_min[_ngcontent-%COMP%]{padding:.25rem}.history-cross__table-body-item[_ngcontent-%COMP%]{padding:1rem}.history-cross__title[_ngcontent-%COMP%]{margin-bottom:1rem;display:flex;justify-content:flex-start;align-content:center}.history-cross__title-text[_ngcontent-%COMP%]{color:#777;margin:0;font-weight:600}.history-cross__thead[_ngcontent-%COMP%]{position:sticky;top:0;left:0}.title-icon[_ngcontent-%COMP%]{width:2rem;margin-right:1rem}.history-cross__icon-check[_ngcontent-%COMP%], .history-cross__icon-x[_ngcontent-%COMP%]{width:2rem}.history-cross__table-actions[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr;justify-items:center;align-items:center}.example-detail-row[_ngcontent-%COMP%]{height:0}.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.example-element-detail[_ngcontent-%COMP%]{overflow:hidden;display:flex}.detail-table[_ngcontent-%COMP%]{background:#b7b7b773;text-align:center}  .mdc-tab__text-label{flex-direction:column!important}  .mdc-data-table__header-cell{text-align:center!important;font-family:Gilroy-ExtraBold;color:#66bb6a;font-size:1rem}  .mdc-data-table__row{background-color:#dfe6e91a!important;border:transparent solid!important;border-bottom:.25rem transparent solid!important}  .mdc-data-table__row:hover{background-color:#7ba0521a!important}  .mdc-data-table__row td{font-family:Gilroy-Light;color:#666!important}  .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}  .success-snackbar .mdc-snackbar__surface{color:#155724!important;background-color:#d4edda!important;border-color:#c3e6cb!important}  .success-snackbar .mdc-snackbar__surface .mdc-button__label{color:#155724!important}  .success-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#155724!important}  .warning-snackbar .mdc-snackbar__surface{color:#856404!important;background-color:#fff3cd!important;border-color:#ffeeba!important}  .warning-snackbar .mdc-snackbar__surface .mdc-button__label{color:#856404!important}  .warning-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#856404!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:transparent!important;--mat-mdc-button-persistent-ripple-color: currentColor !important}"],
    data: {
      animation: [(0,animations/* trigger */.X$)('detailExpand', [(0,animations/* state */.SB)('collapsed', (0,animations/* style */.oB)({
        height: '0px',
        minHeight: '0'
      })), (0,animations/* state */.SB)('expanded', (0,animations/* style */.oB)({
        height: '*'
      })), (0,animations/* transition */.eR)('expanded <=> collapsed', (0,animations/* animate */.jt)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
    }
  });
  return HistoryCrossComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/guard/notifications.guard.ts
var notifications_guard = __webpack_require__(34418);
;// CONCATENATED MODULE: ./src/app/modules/history-cross/history-cross-routing.module.ts





const routes = [{
  path: "",
  component: HistoryCrossComponent,
  canActivate: [notifications_guard/* NotificationsGuard */.t],
  data: {
    componentName: "HistoryCrossComponent",
    privilegeName: "HIST_NOTA_CRED"
  }
}];
let HistoryCrossRoutingModule = /*#__PURE__*/(() => {
  class HistoryCrossRoutingModule {}
  HistoryCrossRoutingModule.ɵfac = function HistoryCrossRoutingModule_Factory(t) {
    return new (t || HistoryCrossRoutingModule)();
  };
  HistoryCrossRoutingModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: HistoryCrossRoutingModule
  });
  HistoryCrossRoutingModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [router/* RouterModule.forChild */.Bz.forChild(routes), router/* RouterModule */.Bz]
  });
  return HistoryCrossRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(HistoryCrossRoutingModule, {
    imports: [router/* RouterModule */.Bz],
    exports: [router/* RouterModule */.Bz]
  });
})();
;// CONCATENATED MODULE: ./src/app/modules/history-cross/pipes/history-cross-status.pipes.ts

let historyCrossStatusPipe = /*#__PURE__*/(() => {
  class historyCrossStatusPipe {
    transform(value, ...args) {
      switch (value) {
        case "ERROR":
          return "close";
          break;
        default:
          return "check";
          break;
      }
    }
  }
  historyCrossStatusPipe.ɵfac = function historyCrossStatusPipe_Factory(t) {
    return new (t || historyCrossStatusPipe)();
  };
  historyCrossStatusPipe.ɵpipe = /*@__PURE__*/core/* ɵɵdefinePipe */.Yjl({
    name: "historyCrossStatus",
    type: historyCrossStatusPipe,
    pure: true
  });
  return historyCrossStatusPipe;
})();
// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 9 modules
var shared_module = __webpack_require__(96158);
;// CONCATENATED MODULE: ./src/app/modules/history-cross/history-cross.module.ts








let HistoryCrossModule = /*#__PURE__*/(() => {
  class HistoryCrossModule {}
  HistoryCrossModule.ɵfac = function HistoryCrossModule_Factory(t) {
    return new (t || HistoryCrossModule)();
  };
  HistoryCrossModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: HistoryCrossModule
  });
  HistoryCrossModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [common/* CommonModule */.ez, HistoryCrossRoutingModule, shared_module/* SharedModule */.m, ngx_scrollbar/* NgScrollbarModule */.kb, ngx_scrollbar_reached_event/* NgScrollbarReachedModule */.bb]
  });
  return HistoryCrossModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(HistoryCrossModule, {
    declarations: [HistoryCrossComponent, historyCrossStatusPipe],
    imports: [common/* CommonModule */.ez, HistoryCrossRoutingModule, shared_module/* SharedModule */.m, ngx_scrollbar/* NgScrollbarModule */.kb, ngx_scrollbar_reached_event/* NgScrollbarReachedModule */.bb]
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