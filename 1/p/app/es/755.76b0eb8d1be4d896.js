"use strict";
(self["webpackChunkbussinessPortal"] = self["webpackChunkbussinessPortal"] || []).push([[755],{

/***/ 86755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AdministrationModule": () => (/* binding */ AdministrationModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__(36895);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2020/router.mjs + 5 modules
var router = __webpack_require__(77518);
// EXTERNAL MODULE: ./src/app/state/administration/administration.actions.ts
var administration_actions = __webpack_require__(51745);
// EXTERNAL MODULE: ./node_modules/@ngrx/store/fesm2020/ngrx-store.mjs + 4 modules
var ngrx_store = __webpack_require__(55867);
;// CONCATENATED MODULE: ./src/app/state/administration/administration.selector.ts

const administrationFeatureSelector = (0,ngrx_store/* createFeatureSelector */.ZF)("administration");
// EXTERNAL MODULE: ./src/app/core/privileges.enum.ts
var privileges_enum = __webpack_require__(9862);
// EXTERNAL MODULE: ./src/app/state/api-gateway/api-gateway.selectors.ts
var api_gateway_selectors = __webpack_require__(75868);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs
var core = __webpack_require__(94650);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/icon.mjs
var icon = __webpack_require__(97392);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/tabs.mjs
var tabs = __webpack_require__(3848);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/card.mjs
var card = __webpack_require__(73546);
// EXTERNAL MODULE: ./src/app/shared/directives/permissions.directive.ts
var permissions_directive = __webpack_require__(4344);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/table.mjs + 2 modules
var table = __webpack_require__(7155);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/sort.mjs
var sort = __webpack_require__(96308);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subject.js + 1 modules
var Subject = __webpack_require__(77579);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(82722);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/button.mjs
var fesm2020_button = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/form-field.mjs
var form_field = __webpack_require__(59549);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/input.mjs + 1 modules
var input = __webpack_require__(44144);
// EXTERNAL MODULE: ./src/app/shared/directives/hour-restriction.directive.ts
var hour_restriction_directive = __webpack_require__(93419);
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-users/administration-users.component.ts



















function AdministrationUsersComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 17);
    core/* ɵɵtext */._uU(1, " Usuario ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUsersComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 18);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r10.userId, " ");
  }
}
function AdministrationUsersComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 17);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 19);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUsersComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 18);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r11.name);
  }
}
function AdministrationUsersComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 20);
  }
}
const _c2 = function (a3) {
  return ["/", "administracion", "user", a3];
};
function AdministrationUsersComponent_td_20_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "a", 23);
    core/* ɵɵlistener */.NdJ("click", function AdministrationUsersComponent_td_20_a_1_Template_a_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r17);
      const element_r12 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r15 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r15.selectUser(element_r12));
    });
    core/* ɵɵtext */._uU(1, " Configurar ");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r13 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵproperty */.Q6J("routerLink", core/* ɵɵpureFunction1 */.VKq(1, _c2, ctx_r13.route));
  }
}
function AdministrationUsersComponent_td_20_a_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "a", 24);
    core/* ɵɵtext */._uU(1, " Configurar ");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r14 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵproperty */.Q6J("routerLink", core/* ɵɵpureFunction1 */.VKq(1, _c2, ctx_r14.route));
  }
}
function AdministrationUsersComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 18);
    core/* ɵɵtemplate */.YNc(1, AdministrationUsersComponent_td_20_a_1_Template, 2, 3, "a", 21);
    core/* ɵɵtemplate */.YNc(2, AdministrationUsersComponent_td_20_a_2_Template, 2, 3, "a", 22);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r12.userId);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r12.userName);
  }
}
function AdministrationUsersComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 25);
  }
}
function AdministrationUsersComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 26);
  }
}
function AdministrationUsersComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "button", 27);
    core/* ɵɵtext */._uU(1, "Crear Usuario");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r9 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵproperty */.Q6J("hourRestriction", "ADM_GU_CU")("hourRestrictionAPIGateway", ctx_r9.userInfo)("hourRestrictionCallback", ctx_r9.createUser.bind(ctx_r9));
  }
}
const _c3 = function (a0) {
  return [a0];
};
let AdministrationUsersComponent = /*#__PURE__*/(() => {
  class AdministrationUsersComponent {
    constructor(store, router) {
      this.store = store;
      this.router = router;
      this.privileges = privileges_enum/* privileges */.U;
      this.route = "";
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.displayedColumns = ["userId", "name", "information"];
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      this.router.navigate(['/', 'administracion']);
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      this.store.dispatch((0,administration_actions/* getCompanyUsers */.sO)());
      this.store.select(administrationFeatureSelector).subscribe({
        next: store => {
          this.dataSource = new table/* MatTableDataSource */.by(store.users);
          this.dataSource.sort = this.sort;
        },
        error: error => console.error(error)
      });
    }
    createUser() {
      this.router.navigate(['/', 'administracion', 'user']);
    }
    selectUser(element) {
      this.store.dispatch((0,administration_actions/* getUserWithUsernameAndEmail */.bJ)({
        user: element.userId,
        email: element.email
      }));
    }
    submit(event) {
      const filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
  AdministrationUsersComponent.ɵfac = function AdministrationUsersComponent_Factory(t) {
    return new (t || AdministrationUsersComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0));
  };
  AdministrationUsersComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationUsersComponent,
    selectors: [["app-administration-users"]],
    viewQuery: function AdministrationUsersComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
      }
    },
    inputs: {
      route: "route"
    },
    decls: 24,
    vars: 6,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6a1e051473d4d73262283b1c07e6501e4fa896242120275adf7cf5d1013bff9f$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_ADMINISTRATION_USERS_COMPONENT_TS__1 = goog.getMsg(" config.views.config-users.NAME ");
        i18n_0 = MSG_EXTERNAL_6a1e051473d4d73262283b1c07e6501e4fa896242120275adf7cf5d1013bff9f$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_ADMINISTRATION_USERS_COMPONENT_TS__1;
      } else {
        i18n_0 = "Nombre";
      }
      return [[1, "administration-users"], [1, "title"], [1, "queries__filter"], ["matPrefix", "", 1, "queries__filter-icon"], ["matInput", "", "placeholder", "Ingrese valor para filtrar", 3, "keyup"], ["input", ""], [1, "administration-users__content"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "userId"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "information"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-raised-button", "", "color", "primary", "class", "administration-users__create", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", 4, "permissions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], i18n_0, ["mat-header-cell", ""], ["class", "show-information", 3, "routerLink", "click", 4, "ngIf"], ["class", "show-information", 3, "routerLink", 4, "ngIf"], [1, "show-information", 3, "routerLink", "click"], [1, "show-information", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""], ["mat-raised-button", "", "color", "primary", 1, "administration-users__create", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback"]];
    },
    template: function AdministrationUsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "h1", 1);
        core/* ɵɵtext */._uU(2, " Usuarios ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(3, "mat-form-field", 2)(4, "mat-label");
        core/* ɵɵtext */._uU(5, "Filtro");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(6, "mat-icon", 3);
        core/* ɵɵtext */._uU(7, "search");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(8, "input", 4, 5);
        core/* ɵɵlistener */.NdJ("keyup", function AdministrationUsersComponent_Template_input_keyup_8_listener($event) {
          return ctx.submit($event);
        });
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(10, "div", 6)(11, "table", 7);
        core/* ɵɵelementContainerStart */.ynx(12, 8);
        core/* ɵɵtemplate */.YNc(13, AdministrationUsersComponent_th_13_Template, 2, 0, "th", 9);
        core/* ɵɵtemplate */.YNc(14, AdministrationUsersComponent_td_14_Template, 2, 1, "td", 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(15, 11);
        core/* ɵɵtemplate */.YNc(16, AdministrationUsersComponent_th_16_Template, 3, 0, "th", 9);
        core/* ɵɵtemplate */.YNc(17, AdministrationUsersComponent_td_17_Template, 2, 1, "td", 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(18, 12);
        core/* ɵɵtemplate */.YNc(19, AdministrationUsersComponent_th_19_Template, 1, 0, "th", 13);
        core/* ɵɵtemplate */.YNc(20, AdministrationUsersComponent_td_20_Template, 3, 2, "td", 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(21, AdministrationUsersComponent_tr_21_Template, 1, 0, "tr", 14);
        core/* ɵɵtemplate */.YNc(22, AdministrationUsersComponent_tr_22_Template, 1, 0, "tr", 15);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(23, AdministrationUsersComponent_button_23_Template, 2, 3, "button", 16);
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(11);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.dataSource);
        core/* ɵɵadvance */.xp6(10);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(4, _c3, ctx.privileges.ADM_GU_CU));
      }
    },
    dependencies: [common/* NgIf */.O5, router/* RouterLink */.rH, icon/* MatIcon */.Hw, fesm2020_button/* MatButton */.lW, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatPrefix */.qo, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, sort/* MatSort */.YE, sort/* MatSortHeader */.nU, permissions_directive/* PermissionsDirective */.$, hour_restriction_directive/* HourRestrictionDirective */.E],
    styles: [".administration-users[_ngcontent-%COMP%]{padding:1rem}.show-information[_ngcontent-%COMP%]{color:#000;cursor:pointer}.administration-users__create[_ngcontent-%COMP%]{color:#fff!important;margin-top:1rem}.administration-users__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end}.title[_ngcontent-%COMP%]{color:#666;margin:0;padding:1rem;padding-left:0;padding-top:0}.queries__filter[_ngcontent-%COMP%]{width:100%}"]
  });
  return AdministrationUsersComponent;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(50727);
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-actions/administration-actions.component.ts
















function AdministrationActionsComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 15);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 16);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationActionsComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 17);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r10.accion);
  }
}
function AdministrationActionsComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 15);
    core/* ɵɵtext */._uU(1, "Descripci\u00F3n");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationActionsComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 17);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r11.descripcion);
  }
}
function AdministrationActionsComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 18);
  }
}
function AdministrationActionsComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 17)(1, "a", 19);
    core/* ɵɵi18n */.SDv(2, 20);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const ctx_r7 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("hourRestriction", "ADMIN_ACTIONS")("hourRestrictionAPIGateway", ctx_r7.userInfo)("hourRestrictionCallback", ctx_r7.configure.bind(ctx_r7, element_r12));
  }
}
function AdministrationActionsComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 21);
  }
}
function AdministrationActionsComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 22);
  }
}
let AdministrationActionsComponent = /*#__PURE__*/(() => {
  class AdministrationActionsComponent {
    constructor(store, router) {
      this.store = store;
      this.router = router;
      this.privileges = privileges_enum/* privileges */.U;
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.displayedColumns = ["accion", "descripcion", "configurate"];
      this.actions = [];
      this.subscription = new Subscription/* Subscription */.w0();
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      this.router.navigate(['/', 'administracion']);
      this.store.dispatch((0,administration_actions/* getActionPrivileges */.Ch)());
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      this.subscription = this.store.select(administrationFeatureSelector).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: store => {
          this.dataSource = new table/* MatTableDataSource */.by(store.actions);
          this.dataSource.sort = this.sort;
          this.actions = store.actions;
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    filter(event) {
      const filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    configure(element) {
      this.router.navigate(['/', 'administracion', 'actions', 'hours']);
      this.store.dispatch((0,administration_actions/* setPrivilegeName */.md)({
        privilege: element
      }));
      this.store.dispatch((0,administration_actions/* getActionPrivilege */.y1)({
        privilege: element.nombre
      }));
    }
  }
  AdministrationActionsComponent.ɵfac = function AdministrationActionsComponent_Factory(t) {
    return new (t || AdministrationActionsComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0));
  };
  AdministrationActionsComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationActionsComponent,
    selectors: [["app-administration-actions"]],
    viewQuery: function AdministrationActionsComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
      }
    },
    decls: 21,
    vars: 3,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_884eb5e05bbb2e2658aa2fba276ed3c236f2aae738241f99bbec61239a23e422$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_ADMINISTRATION_ACTIONS_COMPONENT_TS__1 = goog.getMsg(" config.views.config-notifications.search.PLACE_HOLDER ");
        i18n_0 = MSG_EXTERNAL_884eb5e05bbb2e2658aa2fba276ed3c236f2aae738241f99bbec61239a23e422$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_ADMINISTRATION_ACTIONS_COMPONENT_TS__1;
      } else {
        i18n_0 = "Acci\xF3n";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_744ff4c41d5cd290ea6a3be7dbfe5474f18ead94547d45abdc9044433242f2f2$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_ADMINISTRATION_ACTIONS_COMPONENT_TS__3 = goog.getMsg("config.views.config-search-actions.CONFIG");
        i18n_2 = MSG_EXTERNAL_744ff4c41d5cd290ea6a3be7dbfe5474f18ead94547d45abdc9044433242f2f2$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_ADMINISTRATION_ACTIONS_COMPONENT_TS__3;
      } else {
        i18n_2 = "Configurar";
      }
      return [[1, "administration-actions"], [1, "queries__filter"], ["matPrefix", "", 1, "queries__filter-icon"], ["matInput", "", "placeholder", "Ingrese valor para filtrar", 3, "keyup"], ["input", ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "accion"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["matColumnDef", "configurate"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], i18n_0, ["mat-cell", ""], ["mat-header-cell", ""], [1, "configure-button", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback"], i18n_2, ["mat-header-row", ""], ["mat-row", ""]];
    },
    template: function AdministrationActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
        core/* ɵɵtext */._uU(3, "Filtro");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(4, "mat-icon", 2);
        core/* ɵɵtext */._uU(5, "search");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(6, "input", 3, 4);
        core/* ɵɵlistener */.NdJ("keyup", function AdministrationActionsComponent_Template_input_keyup_6_listener($event) {
          return ctx.filter($event);
        });
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(8, "table", 5, 6);
        core/* ɵɵelementContainerStart */.ynx(10, 7);
        core/* ɵɵtemplate */.YNc(11, AdministrationActionsComponent_th_11_Template, 3, 0, "th", 8);
        core/* ɵɵtemplate */.YNc(12, AdministrationActionsComponent_td_12_Template, 2, 1, "td", 9);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(13, 10);
        core/* ɵɵtemplate */.YNc(14, AdministrationActionsComponent_th_14_Template, 2, 0, "th", 8);
        core/* ɵɵtemplate */.YNc(15, AdministrationActionsComponent_td_15_Template, 2, 1, "td", 9);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(16, 11);
        core/* ɵɵtemplate */.YNc(17, AdministrationActionsComponent_th_17_Template, 1, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(18, AdministrationActionsComponent_td_18_Template, 3, 3, "td", 9);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(19, AdministrationActionsComponent_tr_19_Template, 1, 0, "tr", 13);
        core/* ɵɵtemplate */.YNc(20, AdministrationActionsComponent_tr_20_Template, 1, 0, "tr", 14);
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(8);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.dataSource);
        core/* ɵɵadvance */.xp6(11);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [icon/* MatIcon */.Hw, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatPrefix */.qo, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, sort/* MatSort */.YE, sort/* MatSortHeader */.nU, hour_restriction_directive/* HourRestrictionDirective */.E],
    styles: ["th[_ngcontent-%COMP%]{font-weight:450}.administration-actions[_ngcontent-%COMP%]{padding:1rem 1rem 0;overflow:hidden;display:grid;grid-template-columns:1fr;grid-template-rows:auto;font-family:Gilroy-Light}.configure-button[_ngcontent-%COMP%]{text-decoration:underline;color:#000;cursor:pointer}.table-row[_ngcontent-%COMP%]{height:5rem}.table-column[_ngcontent-%COMP%]{vertical-align:middle}.queries__filter[_ngcontent-%COMP%]{width:100%}"]
  });
  return AdministrationActionsComponent;
})();
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/checkbox.mjs
var fesm2020_checkbox = __webpack_require__(56709);
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-notification/administration-notification.component.ts















function AdministrationNotificationComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 16);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 17);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationNotificationComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 18);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r12.action);
  }
}
function AdministrationNotificationComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 16);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 19);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationNotificationComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 18);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r13.description);
  }
}
function AdministrationNotificationComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 20);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 21);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationNotificationComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 18)(1, "span", 22);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(element_r14.activo ? "ACTIVO" : "INACTIVO");
  }
}
function AdministrationNotificationComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 20);
  }
}
function AdministrationNotificationComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 18)(1, "a", 22)(2, "mat-checkbox", 23);
    core/* ɵɵlistener */.NdJ("change", function AdministrationNotificationComponent_td_21_Template_mat_checkbox_change_2_listener($event) {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r17);
      const element_r15 = restoredCtx.$implicit;
      const ctx_r16 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r16.matCheckboxChange($event.checked, element_r15));
    });
    core/* ɵɵelementEnd */.qZA()()();
  }
}
function AdministrationNotificationComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 24);
  }
}
function AdministrationNotificationComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 25);
  }
}
let AdministrationNotificationComponent = /*#__PURE__*/(() => {
  class AdministrationNotificationComponent {
    constructor(store, router) {
      this.store = store;
      this.router = router;
      this.privileges = privileges_enum/* privileges */.U;
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.displayedColumns = ["action", "description", "state", "select"];
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      this.router.navigate(['/', 'administracion', 'notification']);
      this.store.dispatch((0,administration_actions/* getPrivilegesNotifiableCompany */.A3)());
      this.store.select(administrationFeatureSelector).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: store => {
          this.dataSource = new table/* MatTableDataSource */.by(store.notifications);
          this.dataSource.sort = this.sort;
        },
        error: error => console.error(error)
      });
    }
    applyFilter(event) {
      const filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    matCheckboxChange(checked, notification) {
      if (checked) this.store.dispatch((0,administration_actions/* selectPrivilegesNotificableCompany */.mD)({
        notification
      }));else this.store.dispatch((0,administration_actions/* removePrivilegesNotificableCompany */.Y$)({
        privilegeName: notification.privilegeName
      }));
    }
  }
  AdministrationNotificationComponent.ɵfac = function AdministrationNotificationComponent_Factory(t) {
    return new (t || AdministrationNotificationComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0));
  };
  AdministrationNotificationComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationNotificationComponent,
    selectors: [["app-administration-notification"]],
    viewQuery: function AdministrationNotificationComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
      }
    },
    decls: 24,
    vars: 3,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_884eb5e05bbb2e2658aa2fba276ed3c236f2aae738241f99bbec61239a23e422$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_ADMINISTRATION_NOTIFICATION_COMPONENT_TS__1 = goog.getMsg(" config.views.config-notifications.search.PLACE_HOLDER ");
        i18n_0 = MSG_EXTERNAL_884eb5e05bbb2e2658aa2fba276ed3c236f2aae738241f99bbec61239a23e422$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_ADMINISTRATION_NOTIFICATION_COMPONENT_TS__1;
      } else {
        i18n_0 = "Acci\xF3n";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4d53fd4eaa964acfce4b138f081c10d43099577d33f2860c77edb0a70b0a1c11$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_ADMINISTRATION_NOTIFICATION_COMPONENT_TS__3 = goog.getMsg(" config.views.config-notifications.DESCRIPTION ");
        i18n_2 = MSG_EXTERNAL_4d53fd4eaa964acfce4b138f081c10d43099577d33f2860c77edb0a70b0a1c11$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_ADMINISTRATION_NOTIFICATION_COMPONENT_TS__3;
      } else {
        i18n_2 = "DESCRIPCI\xD3N";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_b6b2e87b5b4f620df7a467ae705d45a4c4fcb622a4c656be7a1758318718f00b$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_ADMINISTRATION_NOTIFICATION_COMPONENT_TS__5 = goog.getMsg(" config.views.config-notifications.INFORMATION ");
        i18n_4 = MSG_EXTERNAL_b6b2e87b5b4f620df7a467ae705d45a4c4fcb622a4c656be7a1758318718f00b$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_ADMINISTRATION_NOTIFICATION_COMPONENT_TS__5;
      } else {
        i18n_4 = "Estado";
      }
      return [[1, "administration-notification"], [1, "queries__filter"], ["matPrefix", "", 1, "queries__filter-icon"], ["matInput", "", "placeholder", "Ingrese valor para filtrar", 3, "keyup"], ["input", ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "action"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "state"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "select"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], i18n_0, ["mat-cell", ""], i18n_2, ["mat-header-cell", ""], i18n_4, [1, "show-information"], ["color", "primary", 3, "change"], ["mat-header-row", ""], ["mat-row", ""]];
    },
    template: function AdministrationNotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
        core/* ɵɵtext */._uU(3, "Filtro");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(4, "mat-icon", 2);
        core/* ɵɵtext */._uU(5, "search");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(6, "input", 3, 4);
        core/* ɵɵlistener */.NdJ("keyup", function AdministrationNotificationComponent_Template_input_keyup_6_listener($event) {
          return ctx.applyFilter($event);
        });
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(8, "table", 5, 6);
        core/* ɵɵelementContainerStart */.ynx(10, 7);
        core/* ɵɵtemplate */.YNc(11, AdministrationNotificationComponent_th_11_Template, 3, 0, "th", 8);
        core/* ɵɵtemplate */.YNc(12, AdministrationNotificationComponent_td_12_Template, 2, 1, "td", 9);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(13, 10);
        core/* ɵɵtemplate */.YNc(14, AdministrationNotificationComponent_th_14_Template, 3, 0, "th", 8);
        core/* ɵɵtemplate */.YNc(15, AdministrationNotificationComponent_td_15_Template, 2, 1, "td", 9);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(16, 11);
        core/* ɵɵtemplate */.YNc(17, AdministrationNotificationComponent_th_17_Template, 3, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(18, AdministrationNotificationComponent_td_18_Template, 3, 1, "td", 9);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(19, 13);
        core/* ɵɵtemplate */.YNc(20, AdministrationNotificationComponent_th_20_Template, 1, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(21, AdministrationNotificationComponent_td_21_Template, 3, 0, "td", 9);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(22, AdministrationNotificationComponent_tr_22_Template, 1, 0, "tr", 14);
        core/* ɵɵtemplate */.YNc(23, AdministrationNotificationComponent_tr_23_Template, 1, 0, "tr", 15);
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(8);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.dataSource);
        core/* ɵɵadvance */.xp6(14);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [icon/* MatIcon */.Hw, fesm2020_checkbox/* MatCheckbox */.oG, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatPrefix */.qo, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, sort/* MatSort */.YE, sort/* MatSortHeader */.nU],
    styles: [".administration-notification[_ngcontent-%COMP%]{padding:1rem 1rem 0}.queries__filter[_ngcontent-%COMP%]{width:100%}"]
  });
  return AdministrationNotificationComponent;
})();
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/dialog.mjs + 1 modules
var dialog = __webpack_require__(65412);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/divider.mjs
var divider = __webpack_require__(44850);
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-ip-dialog/administration-ip-dialog.component.ts





let AdministrationIpDialogComponent = /*#__PURE__*/(() => {
  class AdministrationIpDialogComponent {}
  AdministrationIpDialogComponent.ɵfac = function AdministrationIpDialogComponent_Factory(t) {
    return new (t || AdministrationIpDialogComponent)();
  };
  AdministrationIpDialogComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationIpDialogComponent,
    selectors: [["app-administration-ip-dialog"]],
    decls: 18,
    vars: 2,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_86301872b40e188d1d9368d193393b614a5e22eaff3092c28e929cb8de96143b$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_DIALOG_ADMINISTRATION_IP_DIALOG_COMPONENT_TS_1 = goog.getMsg(" services.views.modal.confirm.label.TITLE ");
        i18n_0 = MSG_EXTERNAL_86301872b40e188d1d9368d193393b614a5e22eaff3092c28e929cb8de96143b$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_DIALOG_ADMINISTRATION_IP_DIALOG_COMPONENT_TS_1;
      } else {
        i18n_0 = "Confirmaci\xF3n";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_bf79964af13a6a9b990031340c468e9c414d363732fbbe3f074a03df50058967$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_DIALOG_ADMINISTRATION_IP_DIALOG_COMPONENT_TS_3 = goog.getMsg(" config.views.config-ip-restriction.delete.MODAL_CONFIRM ");
        i18n_2 = MSG_EXTERNAL_bf79964af13a6a9b990031340c468e9c414d363732fbbe3f074a03df50058967$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_DIALOG_ADMINISTRATION_IP_DIALOG_COMPONENT_TS_3;
      } else {
        i18n_2 = "\xBFEsta seguro que desea remover la(s) IP(s) seleccionadas?";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_DIALOG_ADMINISTRATION_IP_DIALOG_COMPONENT_TS_5 = goog.getMsg(" services.views.modal.confirm.button.ACCEPT ");
        i18n_4 = MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_DIALOG_ADMINISTRATION_IP_DIALOG_COMPONENT_TS_5;
      } else {
        i18n_4 = "Aceptar";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2e62ee290751f01d9ddafa760514fdd398a3da7ef13e4156cbb04e6fa17812b7$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_DIALOG_ADMINISTRATION_IP_DIALOG_COMPONENT_TS_7 = goog.getMsg(" services.views.modal.confirm.button.CANCEL ");
        i18n_6 = MSG_EXTERNAL_2e62ee290751f01d9ddafa760514fdd398a3da7ef13e4156cbb04e6fa17812b7$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_DIALOG_ADMINISTRATION_IP_DIALOG_COMPONENT_TS_7;
      } else {
        i18n_6 = "Cancelar";
      }
      return [["mat-dialog-title", "", 1, "header"], [1, "header__title"], i18n_0, ["mat-dialog-content", ""], i18n_2, ["mat-dialog-actions", ""], [1, "actions"], ["mat-raised-button", "", "color", "primary", 1, "accept-button", 3, "mat-dialog-close"], i18n_4, ["mat-flat-button", "", 3, "mat-dialog-close"], i18n_6];
    },
    template: function AdministrationIpDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "h1", 0)(1, "div", 1)(2, "mat-icon");
        core/* ɵɵtext */._uU(3, "delete");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(4, "span");
        core/* ɵɵi18n */.SDv(5, 2);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵelementStart */.TgZ(6, "div", 3)(7, "p");
        core/* ɵɵi18n */.SDv(8, 4);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelement */._UZ(9, "mat-divider");
        core/* ɵɵelementStart */.TgZ(10, "div", 5)(11, "div", 6)(12, "button", 7);
        core/* ɵɵelementContainerStart */.ynx(13);
        core/* ɵɵi18n */.SDv(14, 8);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(15, "button", 9);
        core/* ɵɵelementContainerStart */.ynx(16);
        core/* ɵɵi18n */.SDv(17, 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(12);
        core/* ɵɵproperty */.Q6J("mat-dialog-close", true);
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵproperty */.Q6J("mat-dialog-close", false);
      }
    },
    dependencies: [icon/* MatIcon */.Hw, dialog/* MatDialogClose */.ZT, dialog/* MatDialogTitle */.uh, dialog/* MatDialogContent */.xY, dialog/* MatDialogActions */.H8, fesm2020_button/* MatButton */.lW, divider/* MatDivider */.d],
    styles: [".header[_ngcontent-%COMP%]{background-color:#66bb6a;color:#fff;display:flex;justify-content:flex-start;align-items:center}.header__title[_ngcontent-%COMP%]{padding-top:1rem;display:flex;justify-content:flex-start;align-items:center}.accept-button[_ngcontent-%COMP%]{color:#fff!important}.actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}"]
  });
  return AdministrationIpDialogComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-ip/administration-ip.component.ts


















function AdministrationIpComponent_ng_container_8_th_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "th", 18)(1, "mat-checkbox", 19);
    core/* ɵɵlistener */.NdJ("change", function AdministrationIpComponent_ng_container_8_th_3_Template_mat_checkbox_change_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r10.matCheckboxChangeSelectAll($event.checked));
    });
    core/* ɵɵelementEnd */.qZA()();
  }
}
function AdministrationIpComponent_ng_container_8_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 20)(1, "mat-checkbox", 21);
    core/* ɵɵlistener */.NdJ("change", function AdministrationIpComponent_ng_container_8_td_4_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r14);
      const element_r12 = restoredCtx.$implicit;
      const ctx_r13 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r13.matCheckboxChange($event.checked, element_r12));
    });
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("checked", element_r12.selected);
  }
}
function AdministrationIpComponent_ng_container_8_th_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 22);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 23);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationIpComponent_ng_container_8_td_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 20);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const ctx_r5 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r5.formatIP(element_r15.address, element_r15.type));
  }
}
function AdministrationIpComponent_ng_container_8_th_9_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 22);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 24);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationIpComponent_ng_container_8_td_10_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 20);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r16.description);
  }
}
function AdministrationIpComponent_ng_container_8_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 25);
  }
}
function AdministrationIpComponent_ng_container_8_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 26);
  }
}
function AdministrationIpComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "table", 6);
    core/* ɵɵelementContainerStart */.ynx(2, 7);
    core/* ɵɵtemplate */.YNc(3, AdministrationIpComponent_ng_container_8_th_3_Template, 2, 0, "th", 8);
    core/* ɵɵtemplate */.YNc(4, AdministrationIpComponent_ng_container_8_td_4_Template, 2, 1, "td", 9);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(5, 10);
    core/* ɵɵtemplate */.YNc(6, AdministrationIpComponent_ng_container_8_th_6_Template, 3, 0, "th", 11);
    core/* ɵɵtemplate */.YNc(7, AdministrationIpComponent_ng_container_8_td_7_Template, 2, 1, "td", 9);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(8, 12);
    core/* ɵɵtemplate */.YNc(9, AdministrationIpComponent_ng_container_8_th_9_Template, 3, 0, "th", 11);
    core/* ɵɵtemplate */.YNc(10, AdministrationIpComponent_ng_container_8_td_10_Template, 2, 1, "td", 9);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵtemplate */.YNc(11, AdministrationIpComponent_ng_container_8_tr_11_Template, 1, 0, "tr", 13);
    core/* ɵɵtemplate */.YNc(12, AdministrationIpComponent_ng_container_8_tr_12_Template, 1, 0, "tr", 14);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(13, "div", 15)(14, "button", 16);
    core/* ɵɵlistener */.NdJ("click", function AdministrationIpComponent_ng_container_8_Template_button_click_14_listener() {
      core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r18 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r18.delete());
    });
    core/* ɵɵelementStart */.TgZ(15, "mat-icon");
    core/* ɵɵtext */._uU(16, "delete");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerStart */.ynx(17);
    core/* ɵɵi18n */.SDv(18, 17);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("dataSource", ctx_r1.dataSource);
    core/* ɵɵadvance */.xp6(10);
    core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx_r1.displayedColumns);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
let AdministrationIpComponent = /*#__PURE__*/(() => {
  class AdministrationIpComponent {
    constructor(store, router, matDialog) {
      this.store = store;
      this.router = router;
      this.matDialog = matDialog;
      this.sort = new sort/* MatSort */.YE();
      this.ips = [];
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.displayedColumns = [];
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      this.router.navigate(['/', 'administracion', 'ip-restriction']);
      this.store.dispatch((0,administration_actions/* getAllIpAddress */.nO)({
        payload: {
          companyId: null,
          action: "SEARCH",
          ips: []
        }
      }));
      this.store.select(administrationFeatureSelector).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: store => {
          this.displayedColumns = ["select", "ip", "description"];
          this.ips = store.address.map((item, index) => {
            const newItem = Object.assign({}, item);
            newItem.id = index;
            return newItem;
          });
          this.dataSource = new table/* MatTableDataSource */.by(this.ips);
          this.dataSource.sort = this.sort;
        },
        error: error => console.error(error)
      });
    }
    matCheckboxChangeSelectAll(checked) {
      if (checked) {
        this.ips = this.ips.map(value => {
          const newValue = Object.assign({}, value);
          newValue.selected = true;
          return newValue;
        });
      } else {
        this.ips = this.ips.map(value => {
          const newValue = Object.assign({}, value);
          newValue.selected = false;
          return newValue;
        });
      }
      this.dataSource = new table/* MatTableDataSource */.by(this.ips);
    }
    matCheckboxChange(checked, element) {
      if (checked) {
        this.ips = this.ips.map(value => {
          const newValue = Object.assign({}, value);
          if (element.id === newValue.id) newValue.selected = true;
          return newValue;
        });
      } else {
        this.ips = this.ips.map(value => {
          const newValue = Object.assign({}, value);
          if (element.id === newValue.id) newValue.selected = false;
          return newValue;
        });
      }
      this.dataSource = new table/* MatTableDataSource */.by(this.ips);
    }
    delete() {
      const matDialog = this.matDialog.open(AdministrationIpDialogComponent);
      matDialog.afterClosed().subscribe({
        next: value => {
          if (value) {
            const payload = {
              action: "DELETE",
              companyId: null,
              ips: this.ips.filter(value => value.selected)
            };
            this.store.dispatch((0,administration_actions/* deleteIpAddress */.GY)({
              payload
            }));
          }
        },
        error: error => console.error(error)
      });
    }
    filter(value) {
      const filterValue = value.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    formatIP(ip, type) {
      const cleanIP = ip.replaceAll("(", "").replaceAll(")", "").replaceAll("\\", "").replace("$", "");
      if (type) {
        const splitedIP = cleanIP.split(".");
        return `${splitedIP[0]}.${splitedIP[1]}.${splitedIP[2]}.${type}`;
      } else return cleanIP;
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
  AdministrationIpComponent.ɵfac = function AdministrationIpComponent_Factory(t) {
    return new (t || AdministrationIpComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw));
  };
  AdministrationIpComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationIpComponent,
    selectors: [["app-administration-ip"]],
    viewQuery: function AdministrationIpComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
      }
    },
    decls: 9,
    vars: 1,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_556808c41efdd6a43f92e7a4eb601e42cbd764217453caeb078f7a4af92a0068$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_ADMINISTRATION_IP_COMPONENT_TS__1 = goog.getMsg(" config.views.config-ip-restriction.actions.REMOVE ");
        i18n_0 = MSG_EXTERNAL_556808c41efdd6a43f92e7a4eb601e42cbd764217453caeb078f7a4af92a0068$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_ADMINISTRATION_IP_COMPONENT_TS__1;
      } else {
        i18n_0 = "Borrar";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_51c5fd94393cda9a1b8fb449ac3021b4178f8426328db357aa5abe635359a929$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_ADMINISTRATION_IP_COMPONENT_TS___3 = goog.getMsg(" config.views.config-ip-restriction.table.IP ");
        i18n_2 = MSG_EXTERNAL_51c5fd94393cda9a1b8fb449ac3021b4178f8426328db357aa5abe635359a929$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_ADMINISTRATION_IP_COMPONENT_TS___3;
      } else {
        i18n_2 = "IP";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_51c5fd94393cda9a1b8fb449ac3021b4178f8426328db357aa5abe635359a929$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_ADMINISTRATION_IP_COMPONENT_TS___5 = goog.getMsg(" config.views.config-ip-restriction.table.DESCRIPTION ");
        i18n_4 = MSG_EXTERNAL_51c5fd94393cda9a1b8fb449ac3021b4178f8426328db357aa5abe635359a929$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_ADMINISTRATION_IP_COMPONENT_TS___5;
      } else {
        i18n_4 = "IP";
      }
      return [[1, "administration-ip"], [1, "queries__filter"], ["matPrefix", "", 1, "queries__filter-icon"], ["matInput", "", "placeholder", "Ingrese valor para filtrar", 3, "keyup"], ["input", ""], [4, "ngIf"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ip"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "description"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "actions"], ["mat-raised-button", "", "color", "primary", 1, "delete-button", 3, "click"], i18n_0, ["mat-header-cell", ""], ["color", "primary", 3, "change"], ["mat-cell", ""], ["color", "primary", 3, "checked", "change"], ["mat-header-cell", "", "mat-sort-header", ""], i18n_2, i18n_4, ["mat-header-row", ""], ["mat-row", ""]];
    },
    template: function AdministrationIpComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
        core/* ɵɵtext */._uU(3, "Filtro");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(4, "mat-icon", 2);
        core/* ɵɵtext */._uU(5, "search");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(6, "input", 3, 4);
        core/* ɵɵlistener */.NdJ("keyup", function AdministrationIpComponent_Template_input_keyup_6_listener($event) {
          return ctx.filter($event);
        });
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵtemplate */.YNc(8, AdministrationIpComponent_ng_container_8_Template, 19, 3, "ng-container", 5);
        core/* ɵɵelementEnd */.qZA();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(8);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.ips.length);
      }
    },
    dependencies: [common/* NgIf */.O5, icon/* MatIcon */.Hw, fesm2020_checkbox/* MatCheckbox */.oG, fesm2020_button/* MatButton */.lW, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatPrefix */.qo, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, sort/* MatSort */.YE, sort/* MatSortHeader */.nU],
    styles: [".administration-ip[_ngcontent-%COMP%]{padding:1rem;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto}.delete-button[_ngcontent-%COMP%]{color:#fff!important}.actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.queries__filter[_ngcontent-%COMP%]{width:100%}"]
  });
  return AdministrationIpComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-profile/administration-profile.component.ts













function AdministrationProfileComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 14);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 15);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationProfileComponent_td_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const element_r9 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r9.userName, " ");
  }
}
function AdministrationProfileComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 16);
    core/* ɵɵtemplate */.YNc(1, AdministrationProfileComponent_td_11_ng_container_1_Template, 2, 1, "ng-container", 17);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r9.userName);
  }
}
function AdministrationProfileComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 14);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 18);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationProfileComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 16);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r12.nombres);
  }
}
function AdministrationProfileComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 19);
  }
}
const _c4 = function () {
  return ["/", "administracion", "user", "notification"];
};
function AdministrationProfileComponent_td_17_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "a", 21);
    core/* ɵɵlistener */.NdJ("click", function AdministrationProfileComponent_td_17_a_1_Template_a_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r17);
      const element_r13 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r15 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r15.selectUser(element_r13));
    });
    core/* ɵɵelementStart */.TgZ(1, "span");
    core/* ɵɵtext */._uU(2, "Configurar");
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    core/* ɵɵproperty */.Q6J("routerLink", core/* ɵɵpureFunction0 */.DdM(1, _c4));
  }
}
function AdministrationProfileComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 16);
    core/* ɵɵtemplate */.YNc(1, AdministrationProfileComponent_td_17_a_1_Template, 3, 2, "a", 20);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r13.userName);
  }
}
function AdministrationProfileComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 22);
  }
}
function AdministrationProfileComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 23);
  }
}
let AdministrationProfileComponent = /*#__PURE__*/(() => {
  class AdministrationProfileComponent {
    constructor(store, router) {
      this.store = store;
      this.router = router;
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.displayedColumns = ["userName", "nombres", "information"];
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      this.router.navigate(['/', 'administracion']);
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: store => {
          this.dataSource = new table/* MatTableDataSource */.by([store]);
        },
        error: error => console.error(error)
      });
    }
    selectUser(element) {
      this.store.dispatch((0,administration_actions/* getUserWithUsernameAndEmail */.bJ)({
        user: element.userName,
        email: null
      }));
    }
    submit(event) {
      const filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
  AdministrationProfileComponent.ɵfac = function AdministrationProfileComponent_Factory(t) {
    return new (t || AdministrationProfileComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0));
  };
  AdministrationProfileComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationProfileComponent,
    selectors: [["app-administration-profile"]],
    decls: 20,
    vars: 3,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1ee1a1a22dbd84cd45210232acda0dd3b3aa5ce09ca8e2d9b27223ee967b23c8$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_ADMINISTRATION_PROFILE_COMPONENT_TS__1 = goog.getMsg(" config.views.config-users.USER ");
        i18n_0 = MSG_EXTERNAL_1ee1a1a22dbd84cd45210232acda0dd3b3aa5ce09ca8e2d9b27223ee967b23c8$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_ADMINISTRATION_PROFILE_COMPONENT_TS__1;
      } else {
        i18n_0 = "Usuarios";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6a1e051473d4d73262283b1c07e6501e4fa896242120275adf7cf5d1013bff9f$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_ADMINISTRATION_PROFILE_COMPONENT_TS__3 = goog.getMsg(" config.views.config-users.NAME ");
        i18n_2 = MSG_EXTERNAL_6a1e051473d4d73262283b1c07e6501e4fa896242120275adf7cf5d1013bff9f$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_ADMINISTRATION_PROFILE_COMPONENT_TS__3;
      } else {
        i18n_2 = "Nombre";
      }
      return [[1, "administration-users"], [1, "queries__filter"], ["matPrefix", "", 1, "queries__filter-icon"], ["matInput", "", "placeholder", "Ingrese valor para filtrar", 3, "keyup"], ["input", ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "userName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombres"], ["matColumnDef", "information"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], i18n_0, ["mat-cell", ""], [4, "ngIf"], i18n_2, ["mat-header-cell", ""], ["class", "show-information", 3, "routerLink", "click", 4, "ngIf"], [1, "show-information", 3, "routerLink", "click"], ["mat-header-row", ""], ["mat-row", ""]];
    },
    template: function AdministrationProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
        core/* ɵɵtext */._uU(3, "Filtro");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(4, "mat-icon", 2);
        core/* ɵɵtext */._uU(5, "search");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(6, "input", 3, 4);
        core/* ɵɵlistener */.NdJ("keyup", function AdministrationProfileComponent_Template_input_keyup_6_listener($event) {
          return ctx.submit($event);
        });
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(8, "table", 5);
        core/* ɵɵelementContainerStart */.ynx(9, 6);
        core/* ɵɵtemplate */.YNc(10, AdministrationProfileComponent_th_10_Template, 3, 0, "th", 7);
        core/* ɵɵtemplate */.YNc(11, AdministrationProfileComponent_td_11_Template, 2, 1, "td", 8);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(12, 9);
        core/* ɵɵtemplate */.YNc(13, AdministrationProfileComponent_th_13_Template, 3, 0, "th", 7);
        core/* ɵɵtemplate */.YNc(14, AdministrationProfileComponent_td_14_Template, 2, 1, "td", 8);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(15, 10);
        core/* ɵɵtemplate */.YNc(16, AdministrationProfileComponent_th_16_Template, 1, 0, "th", 11);
        core/* ɵɵtemplate */.YNc(17, AdministrationProfileComponent_td_17_Template, 2, 1, "td", 8);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(18, AdministrationProfileComponent_tr_18_Template, 1, 0, "tr", 12);
        core/* ɵɵtemplate */.YNc(19, AdministrationProfileComponent_tr_19_Template, 1, 0, "tr", 13);
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(8);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.dataSource);
        core/* ɵɵadvance */.xp6(10);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [common/* NgIf */.O5, router/* RouterLink */.rH, icon/* MatIcon */.Hw, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatPrefix */.qo, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, sort/* MatSort */.YE, sort/* MatSortHeader */.nU],
    styles: [".administration-users[_ngcontent-%COMP%]{padding:1rem}.show-information[_ngcontent-%COMP%]{color:#000;cursor:pointer}.queries__filter[_ngcontent-%COMP%]{width:100%}"]
  });
  return AdministrationProfileComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-second-password-main/administration-second-password-main.component.ts


let AdministrationSecondPasswordMainComponent = /*#__PURE__*/(() => {
  class AdministrationSecondPasswordMainComponent {
    constructor(router) {
      this.router = router;
    }
    ngOnInit() {
      this.router.navigate(['/', 'administracion', 'second-password']);
    }
  }
  AdministrationSecondPasswordMainComponent.ɵfac = function AdministrationSecondPasswordMainComponent_Factory(t) {
    return new (t || AdministrationSecondPasswordMainComponent)(core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0));
  };
  AdministrationSecondPasswordMainComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationSecondPasswordMainComponent,
    selectors: [["app-administration-second-password-main"]],
    decls: 0,
    vars: 0,
    template: function AdministrationSecondPasswordMainComponent_Template(rf, ctx) {}
  });
  return AdministrationSecondPasswordMainComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration/administration.component.ts

















function AdministrationComponent_mat_tab_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 7)(1, "defs")(2, "style");
    core/* ɵɵtext */._uU(3, ".cls-1{fill:#333;fill-rule:evenodd;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(4, "g", 8);
    core/* ɵɵelement */._UZ(5, "path", 9);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(6, "span");
    core/* ɵɵtext */._uU(7, " Acciones ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationComponent_mat_tab_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-administration-actions");
  }
}
function AdministrationComponent_mat_tab_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, AdministrationComponent_mat_tab_5_ng_template_1_Template, 8, 0, "ng-template", 4);
    core/* ɵɵtemplate */.YNc(2, AdministrationComponent_mat_tab_5_ng_template_2_Template, 1, 0, "ng-template", 5);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationComponent_mat_tab_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 10)(1, "defs")(2, "style");
    core/* ɵɵtext */._uU(3, ".cls-1{fill:#333;fill-rule:evenodd;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(4, "g", 8);
    core/* ɵɵelement */._UZ(5, "path", 11)(6, "path", 12)(7, "path", 13)(8, "path", 14);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(9, "span");
    core/* ɵɵi18n */.SDv(10, 15);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationComponent_mat_tab_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-administration-notification");
  }
}
function AdministrationComponent_mat_tab_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, AdministrationComponent_mat_tab_6_ng_template_1_Template, 11, 0, "ng-template", 4);
    core/* ɵɵtemplate */.YNc(2, AdministrationComponent_mat_tab_6_ng_template_2_Template, 1, 0, "ng-template", 5);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationComponent_mat_tab_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 16)(1, "defs")(2, "style");
    core/* ɵɵtext */._uU(3, ".cls-1{fill:#333;fill-rule:evenodd;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(4, "g", 8);
    core/* ɵɵelement */._UZ(5, "path", 17)(6, "path", 18)(7, "path", 19);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(8, "span");
    core/* ɵɵi18n */.SDv(9, 20);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationComponent_mat_tab_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-administration-users", 21);
  }
}
function AdministrationComponent_mat_tab_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, AdministrationComponent_mat_tab_7_ng_template_1_Template, 10, 0, "ng-template", 4);
    core/* ɵɵtemplate */.YNc(2, AdministrationComponent_mat_tab_7_ng_template_2_Template, 1, 0, "ng-template", 5);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationComponent_mat_tab_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 22)(1, "defs")(2, "style");
    core/* ɵɵtext */._uU(3, ".cls-1{fill:#333;fill-rule:evenodd;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(4, "g", 8);
    core/* ɵɵelement */._UZ(5, "path", 23)(6, "path", 24)(7, "path", 25)(8, "path", 26)(9, "path", 27)(10, "path", 28)(11, "path", 29)(12, "path", 30)(13, "path", 31)(14, "path", 32);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(15, "span");
    core/* ɵɵi18n */.SDv(16, 33);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationComponent_mat_tab_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-administration-second-password-main");
  }
}
function AdministrationComponent_mat_tab_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, AdministrationComponent_mat_tab_8_ng_template_1_Template, 17, 0, "ng-template", 4);
    core/* ɵɵtemplate */.YNc(2, AdministrationComponent_mat_tab_8_ng_template_2_Template, 1, 0, "ng-template", 5);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationComponent_mat_tab_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-icon");
    core/* ɵɵtext */._uU(1, "dashboard");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "span");
    core/* ɵɵi18n */.SDv(3, 34);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationComponent_mat_tab_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-administration-ip");
  }
}
function AdministrationComponent_mat_tab_9_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, AdministrationComponent_mat_tab_9_ng_template_1_Template, 4, 0, "ng-template", 4);
    core/* ɵɵtemplate */.YNc(2, AdministrationComponent_mat_tab_9_ng_template_2_Template, 1, 0, "ng-template", 5);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 16)(1, "defs")(2, "style");
    core/* ɵɵtext */._uU(3, ".cls-1{fill:#333;fill-rule:evenodd;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(4, "g", 8);
    core/* ɵɵelement */._UZ(5, "path", 17)(6, "path", 18)(7, "path", 19);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(8, "span");
    core/* ɵɵi18n */.SDv(9, 35);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-administration-profile");
  }
}
const _c10 = function (a0) {
  return [a0];
};
let AdministrationComponent = /*#__PURE__*/(() => {
  class AdministrationComponent {
    constructor(router, store) {
      this.router = router;
      this.store = store;
      this.privileges = privileges_enum/* privileges */.U;
      this.tabs = ["Acciones", "Notificaciones", "Usuarios", "Segunda Clave", "Restricción IP", "Mi Perfil"];
      this.actions = false;
    }
    ngOnInit() {
      this.store.dispatch((0,administration_actions/* getCompanyUsers */.sO)());
      this.users = this.store.select(administrationFeatureSelector);
      this.user = this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o);
    }
    selectTab(event) {
      switch (this.tabs[event.index]) {}
    }
  }
  AdministrationComponent.ɵfac = function AdministrationComponent_Factory(t) {
    return new (t || AdministrationComponent)(core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh));
  };
  AdministrationComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationComponent,
    selectors: [["app-administration"]],
    decls: 15,
    vars: 15,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6b67071f9b9d179ae21bf741202d49bab8a3abfb4c707e074e7c197b6e354b16$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ADMINISTRATION_COMPONENT_TS___1 = goog.getMsg(" config.views.config-notifications.PAGE_HEADER ");
        i18n_0 = MSG_EXTERNAL_6b67071f9b9d179ae21bf741202d49bab8a3abfb4c707e074e7c197b6e354b16$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ADMINISTRATION_COMPONENT_TS___1;
      } else {
        i18n_0 = "Notificaciones";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1ee1a1a22dbd84cd45210232acda0dd3b3aa5ce09ca8e2d9b27223ee967b23c8$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ADMINISTRATION_COMPONENT_TS___3 = goog.getMsg(" config.views.config-users.PAGE_HEADER ");
        i18n_2 = MSG_EXTERNAL_1ee1a1a22dbd84cd45210232acda0dd3b3aa5ce09ca8e2d9b27223ee967b23c8$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ADMINISTRATION_COMPONENT_TS___3;
      } else {
        i18n_2 = "Usuarios";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_0ea533a44fd34584298e760d030a4b6ee8f8211ef12cd32e9ecf78d116e5f9ce$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ADMINISTRATION_COMPONENT_TS___5 = goog.getMsg(" config.views.config-second-password_PAGE_HEADER ");
        i18n_4 = MSG_EXTERNAL_0ea533a44fd34584298e760d030a4b6ee8f8211ef12cd32e9ecf78d116e5f9ce$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ADMINISTRATION_COMPONENT_TS___5;
      } else {
        i18n_4 = "Segunda clave";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_fa8efec82d2a748eda705cbd3313bbbfefac82db71289baaea5272c9dbc79192$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ADMINISTRATION_COMPONENT_TS___7 = goog.getMsg(" config.views.config-ip-restriction_PAGE_HEADER ");
        i18n_6 = MSG_EXTERNAL_fa8efec82d2a748eda705cbd3313bbbfefac82db71289baaea5272c9dbc79192$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ADMINISTRATION_COMPONENT_TS___7;
      } else {
        i18n_6 = "Restricci\xF3n IP";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_235d10fe2b0afc701e4e179d8e8d2b9c094d350feb9b8e2fd7d52c101ae72e0f$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ADMINISTRATION_COMPONENT_TS__9 = goog.getMsg(" config.views.config-user.PAGE_HEADER ");
        i18n_8 = MSG_EXTERNAL_235d10fe2b0afc701e4e179d8e8d2b9c094d350feb9b8e2fd7d52c101ae72e0f$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ADMINISTRATION_COMPONENT_TS__9;
      } else {
        i18n_8 = "Mi perfil";
      }
      return [[1, "administration"], [1, "primary-panel"], [3, "selectedTabChange"], [4, "permissions"], ["mat-tab-label", ""], ["matTabContent", ""], [1, "secondary-panel"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 75.9 80.97", 1, "administration__tab-icon"], ["id", "Capa_1-2"], ["d", "m7.12,33.21c3.92,0,7.12-3.19,7.12-7.12,0-.48-.05-.96-.14-1.42l8-4.8c.49.54,1.04,1.03,1.62,1.47v12.27c-.74-.26-1.54-.41-2.37-.41-3.93,0-7.12,3.19-7.12,7.11v15.05c0,3.17,1.23,6.15,3.47,8.39,1.24,1.6,6.01,4.41,6.01,10.93v3.91c0,1.31,1.06,2.37,2.37,2.37h33.21c1.31,0,2.37-1.06,2.37-2.37v-5.32c0-4.44,1.92-7.7,1.99-7.9,1.8-3.6,2.76-7.64,2.76-11.67v-18.12c0-3.92-3.19-7.12-7.12-7.12-.93,0-1.81.18-2.62.5-.82-3.02-3.59-5.25-6.86-5.25-1.82,0-3.49.69-4.75,1.82-1.26-1.13-2.92-1.82-4.74-1.82-.83,0-1.63.15-2.37.41v-2.78c1.92-1.45,3.35-3.44,4.11-5.69l19.77,2.47c.7,3.2,3.55,5.59,6.95,5.59,3.92,0,7.12-3.19,7.12-7.12s-3.2-7.11-7.12-7.11c-2.78,0-5.19,1.6-6.36,3.93l-19.77-2.47c-.47-6.11-5.59-10.95-11.82-10.95-6.54,0-11.86,5.32-11.86,11.86,0,1.36.24,2.69.68,3.94l-8.01,4.81c-1.23-1.02-2.81-1.63-4.53-1.63-3.92,0-7.12,3.19-7.12,7.12s3.19,7.12,7.12,7.12h0Zm61.67-18.98c1.31,0,2.37,1.06,2.37,2.37s-1.06,2.37-2.37,2.37-2.37-1.07-2.37-2.37,1.06-2.37,2.37-2.37h0Zm-28.46,14.23c1.31,0,2.37,1.06,2.37,2.37v9.49c0,1.31,1.06,2.37,2.37,2.37s2.37-1.06,2.37-2.37v-9.49c0-1.31,1.07-2.37,2.37-2.37s2.37,1.06,2.37,2.37v14.23c0,1.31,1.06,2.37,2.37,2.37s2.37-1.06,2.37-2.37v-9.49c0-1.31,1.07-2.37,2.37-2.37s2.37,1.06,2.37,2.37v18.12c0,3.3-.78,6.6-2.25,9.54-.12.31-2.49,4.25-2.49,10.02v2.95h-28.46v-1.54c0-8.81-6.33-12.85-7.4-14.28-1.34-1.34-2.08-3.13-2.08-5.03v-15.05c0-1.31,1.06-2.37,2.37-2.37s2.37,1.06,2.37,2.37v9.49c0,1.31,1.06,2.37,2.37,2.37s2.37-1.06,2.37-2.37V16.6c0-1.27,1.01-2.31,2.27-2.36l.81.1c.97.3,1.67,1.2,1.67,2.26v23.72c0,1.31,1.07,2.37,2.37,2.37s2.37-1.06,2.37-2.37v-9.49c0-1.31,1.06-2.37,2.37-2.37h0ZM30.84,4.75c3.92,0,7.12,3.19,7.12,7.11,0,.82-.15,1.62-.41,2.37-.99-2.78-3.62-4.71-6.64-4.74h-.07c-3.09,0-5.73,1.98-6.71,4.74-.26-.75-.41-1.55-.41-2.37,0-3.92,3.19-7.11,7.12-7.11h0ZM7.12,23.72c1.31,0,2.37,1.06,2.37,2.37s-1.07,2.37-2.37,2.37-2.37-1.06-2.37-2.37,1.06-2.37,2.37-2.37Z", 1, "cls-1"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 84.93 74.64", 1, "administration__tab-icon"], ["d", "m57.39,0c-3.55,0-6.53,2.5-7.28,5.83l-18.34,9.1h-14.34c-3.32,0-6.13,2.17-7.1,5.16-5.85,1.01-10.32,6.12-10.32,12.26s4.46,11.25,10.32,12.26c.72,2.2,2.43,3.96,4.61,4.73v17.85c0,4.11,3.35,7.47,7.47,7.47s7.46-3.35,7.46-7.47v-7.46h2.49c3.63,0,6.65-2.6,7.33-6.03l10.44,5.18c.75,3.33,3.73,5.83,7.28,5.83,4.12,0,7.47-3.35,7.47-7.46V7.46c0-4.11-3.35-7.46-7.47-7.46h0ZM9.95,39.38c-2.89-1.03-4.98-3.79-4.98-7.04s2.08-6.01,4.98-7.04v14.07h0Zm14.93,27.8c0,1.37-1.12,2.49-2.49,2.49s-2.49-1.12-2.49-2.49v-17.42h4.98v17.42h0Zm2.49-22.39h-9.95c-1.37,0-2.49-1.12-2.49-2.49v-19.9c0-1.37,1.12-2.49,2.49-2.49h12.44v24.88h-2.49Zm7.47,7.47c0,1.37-1.12,2.49-2.49,2.49h-2.49v-4.98h1.91l3.07,1.52v.97h0Zm15.09.96l-15.09-7.49v-26.77l15.09-7.49v41.74h0Zm9.95,4.01c0,1.37-1.12,2.49-2.49,2.49s-2.49-1.12-2.49-2.49V7.46c0-1.37,1.12-2.49,2.49-2.49s2.49,1.12,2.49,2.49v49.77Z", 1, "cls-1"], ["d", "m82.44,29.86h-10.12c-1.37,0-2.49,1.11-2.49,2.49s1.11,2.49,2.49,2.49h10.12c1.37,0,2.49-1.12,2.49-2.49s-1.11-2.49-2.49-2.49Z", 1, "cls-1"], ["d", "m83.53,45.04l-10.12-4.98c-1.23-.61-2.73-.1-3.33,1.13-.61,1.23-.1,2.73,1.13,3.33l10.12,4.98c1.24.61,2.72.1,3.33-1.13.61-1.23.09-2.72-1.14-3.33Z", 1, "cls-1"], ["d", "m84.67,16.32c-.61-1.23-2.1-1.74-3.33-1.13l-10.12,4.98c-1.23.61-1.74,2.1-1.13,3.33.61,1.23,2.1,1.74,3.33,1.14l10.12-4.98c1.23-.61,1.74-2.09,1.14-3.33Z", 1, "cls-1"], i18n_0, ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 82.07 82.07", 1, "administration__tab-icon"], ["d", "m41.04,28c1.84,0,3.34,1.5,3.34,3.34s-1.5,3.34-3.34,3.34-3.35-1.5-3.35-3.34,1.5-3.34,3.35-3.34h0Zm0,12.21c4.89,0,8.86-3.98,8.86-8.87s-3.97-8.87-8.86-8.87-8.87,3.98-8.87,8.87,3.98,8.87,8.87,8.87Z", 1, "cls-1"], ["d", "m31.19,54.07c1.21-4.29,5.16-7.45,9.84-7.45s8.63,3.16,9.84,7.45h-19.68Zm9.84-12.98c-8.68,0-15.74,7.06-15.74,15.74,0,1.53,1.24,2.76,2.76,2.76h25.96c1.53,0,2.76-1.24,2.76-2.76,0-8.68-7.06-15.74-15.74-15.74Z", 1, "cls-1"], ["d", "m43.8,71.29v-2.25c0-1.53-1.24-2.76-2.76-2.76s-2.77,1.24-2.77,2.76v2.25c-14.55-1.32-26.17-12.94-27.49-27.49h2.24c1.53,0,2.77-1.24,2.77-2.76s-1.24-2.76-2.77-2.76h-2.24c1.32-14.55,12.94-26.17,27.49-27.49v2.25c0,1.53,1.24,2.76,2.77,2.76s2.76-1.24,2.76-2.76v-2.25c14.55,1.32,26.17,12.94,27.49,27.49h-2.24c-1.52,0-2.76,1.24-2.76,2.76s1.24,2.76,2.76,2.76h2.24c-1.32,14.55-12.94,26.17-27.49,27.49h0Zm35.51-33.01h-2.48c-1.34-17.6-15.44-31.69-33.03-33.04v-2.48c0-1.52-1.24-2.76-2.76-2.76s-2.77,1.24-2.77,2.76v2.48C20.67,6.59,6.59,20.67,5.24,38.28h-2.48c-1.52,0-2.76,1.24-2.76,2.76s1.24,2.76,2.76,2.76h2.48c1.34,17.6,15.43,31.69,33.03,33.04v2.48c0,1.53,1.24,2.76,2.77,2.76s2.76-1.24,2.76-2.76v-2.48c17.6-1.34,31.69-15.43,33.03-33.04h2.48c1.52,0,2.76-1.24,2.76-2.76s-1.24-2.76-2.76-2.76Z", 1, "cls-1"], i18n_2, ["route", "options"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 78.83 78.83", 1, "administration__tab-icon"], ["d", "m74.21,51.36v-2.71c0-8.92-7.25-16.17-16.17-16.17-.78,0-1.56.06-2.31.17V2.31c0-1.28-1.03-2.31-2.31-2.31H2.31C1.03,0,0,1.03,0,2.31v55.58c0,1.28,1.03,2.31,2.31,2.31h34.95v11.7c0,3.82,3.11,6.93,6.93,6.93h27.72c3.82,0,6.93-3.11,6.93-6.93v-14.01c0-3.01-1.93-5.58-4.62-6.53h0Zm-16.17-14.26c6.37,0,11.55,5.18,11.55,11.55v2.31h-4.62v-2.31c0-3.82-3.11-6.93-6.93-6.93s-6.93,3.1-6.93,6.93v2.31h-4.62v-2.31c0-6.37,5.18-11.55,11.55-11.55h0Zm2.31,11.55v2.31h-4.62v-2.31c0-1.27,1.04-2.31,2.31-2.31s2.31,1.03,2.31,2.31h0ZM4.62,4.62h46.5v14.01H4.62V4.62h0Zm0,18.63h46.5v10.8c-1.63.78-3.1,1.81-4.37,3.06H4.62v-13.86h0Zm33.04,32.34H4.62v-13.87h38.82c-.68,1.44-1.16,3.01-1.4,4.64h-2.48c-1.27,0-2.31,1.03-2.31,2.31s1.03,2.31,2.31,2.31h2.31v.4c-1.97.7-3.52,2.26-4.22,4.22h0Zm36.56,16.32c0,1.27-1.03,2.31-2.31,2.31h-27.72c-1.27,0-2.31-1.03-2.31-2.31v-14.01c0-1.27,1.04-2.31,2.31-2.31h27.72c1.27,0,2.31,1.03,2.31,2.31v14.01Z", 1, "cls-1"], ["d", "m58.05,60.2c-1.28,0-2.31,1.03-2.31,2.31v4.78c0,1.27,1.03,2.31,2.31,2.31s2.31-1.03,2.31-2.31v-4.78c0-1.27-1.03-2.31-2.31-2.31Z", 1, "cls-1"], ["d", "m16.16,9.24h-4.62c-1.27,0-2.31,1.03-2.31,2.31s1.03,2.31,2.31,2.31h4.62c1.28,0,2.31-1.03,2.31-2.31s-1.03-2.31-2.31-2.31Z", 1, "cls-1"], ["d", "m30.33,9.24h-4.93c-1.27,0-2.31,1.03-2.31,2.31s1.03,2.31,2.31,2.31h4.93c1.28,0,2.31-1.03,2.31-2.31s-1.03-2.31-2.31-2.31Z", 1, "cls-1"], ["d", "m44.19,9.24h-4.62c-1.27,0-2.31,1.03-2.31,2.31s1.03,2.31,2.31,2.31h4.62c1.28,0,2.31-1.03,2.31-2.31s-1.03-2.31-2.31-2.31Z", 1, "cls-1"], ["d", "m16.16,27.87h-4.62c-1.27,0-2.31,1.03-2.31,2.31s1.03,2.31,2.31,2.31h4.62c1.28,0,2.31-1.03,2.31-2.31s-1.03-2.31-2.31-2.31Z", 1, "cls-1"], ["d", "m30.33,27.87h-4.93c-1.27,0-2.31,1.03-2.31,2.31s1.03,2.31,2.31,2.31h4.93c1.28,0,2.31-1.03,2.31-2.31s-1.03-2.31-2.31-2.31Z", 1, "cls-1"], ["d", "m44.19,27.87h-4.62c-1.27,0-2.31,1.03-2.31,2.31s1.03,2.31,2.31,2.31h4.62c1.28,0,2.31-1.03,2.31-2.31s-1.03-2.31-2.31-2.31Z", 1, "cls-1"], ["d", "m16.16,46.35h-4.62c-1.27,0-2.31,1.03-2.31,2.31s1.03,2.31,2.31,2.31h4.62c1.28,0,2.31-1.03,2.31-2.31s-1.03-2.31-2.31-2.31Z", 1, "cls-1"], ["d", "m30.33,46.35h-4.93c-1.27,0-2.31,1.03-2.31,2.31s1.03,2.31,2.31,2.31h4.93c1.28,0,2.31-1.03,2.31-2.31s-1.03-2.31-2.31-2.31Z", 1, "cls-1"], i18n_4, i18n_6, i18n_8];
    },
    template: function AdministrationComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "div", 1)(2, "mat-card")(3, "mat-card-content")(4, "mat-tab-group", 2);
        core/* ɵɵlistener */.NdJ("selectedTabChange", function AdministrationComponent_Template_mat_tab_group_selectedTabChange_4_listener($event) {
          return ctx.selectTab($event);
        });
        core/* ɵɵtemplate */.YNc(5, AdministrationComponent_mat_tab_5_Template, 3, 0, "mat-tab", 3);
        core/* ɵɵtemplate */.YNc(6, AdministrationComponent_mat_tab_6_Template, 3, 0, "mat-tab", 3);
        core/* ɵɵtemplate */.YNc(7, AdministrationComponent_mat_tab_7_Template, 3, 0, "mat-tab", 3);
        core/* ɵɵtemplate */.YNc(8, AdministrationComponent_mat_tab_8_Template, 3, 0, "mat-tab", 3);
        core/* ɵɵtemplate */.YNc(9, AdministrationComponent_mat_tab_9_Template, 3, 0, "mat-tab", 3);
        core/* ɵɵelementStart */.TgZ(10, "mat-tab");
        core/* ɵɵtemplate */.YNc(11, AdministrationComponent_ng_template_11_Template, 10, 0, "ng-template", 4);
        core/* ɵɵtemplate */.YNc(12, AdministrationComponent_ng_template_12_Template, 1, 0, "ng-template", 5);
        core/* ɵɵelementEnd */.qZA()()()()();
        core/* ɵɵelementStart */.TgZ(13, "div", 6);
        core/* ɵɵelement */._UZ(14, "router-outlet");
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(5, _c10, ctx.privileges.ADMIN_ACTIONS));
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(7, _c10, ctx.privileges.ADMIN_NOTIFICATION));
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(9, _c10, ctx.privileges.ADMIN_USER_MANAGEMENT));
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(11, _c10, ctx.privileges.ADMIN_SECOND_PASS));
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(13, _c10, ctx.privileges.ADMIN_IP_RESTRICTION));
      }
    },
    dependencies: [router/* RouterOutlet */.lC, icon/* MatIcon */.Hw, tabs/* MatTabContent */.Vc, tabs/* MatTabLabel */.uD, tabs/* MatTab */.uX, tabs/* MatTabGroup */.SP, card/* MatCard */.a8, card/* MatCardContent */.dn, permissions_directive/* PermissionsDirective */.$, AdministrationUsersComponent, AdministrationActionsComponent, AdministrationNotificationComponent, AdministrationIpComponent, AdministrationProfileComponent, AdministrationSecondPasswordMainComponent],
    styles: [".administration[_ngcontent-%COMP%]{display:grid;grid-template-columns:.8fr 1.2fr;grid-template-rows:1fr;font-family:Gilroy-Light}.primary-panel[_ngcontent-%COMP%]{padding:1rem;overflow-y:auto}.secondary-panel[_ngcontent-%COMP%]{overflow-y:scroll}.primary-panel[_ngcontent-%COMP%], .secondary-panel[_ngcontent-%COMP%]{height:100vh}.administration__tab-icon[_ngcontent-%COMP%]{width:1rem}.administration__tab-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#0009;stroke:#0009!important}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .mdc-tab__text-label, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .mdc-tab__text-label[_ngcontent-%COMP%]{color:#66bb6a}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .administration__default-icon, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .administration__default-icon[_ngcontent-%COMP%]{color:#66bb6a}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .administration__tab-icon path, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .administration__tab-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#66bb6a;stroke:#66bb6a!important}  .mdc-tab__text-label{flex-direction:column!important}  .mdc-data-table__header-cell{text-align:center!important;font-family:Gilroy-ExtraBold;color:#66bb6a;font-size:1rem}  .mdc-data-table__row{background-color:#dfe6e91a!important;border:transparent solid!important;border-bottom:.25rem transparent solid!important}  .mdc-data-table__row:hover{background-color:#7ba0521a!important}  .mdc-data-table__row td{font-family:Gilroy-Light;color:#666!important}  .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}  .success-snackbar .mdc-snackbar__surface{color:#155724!important;background-color:#d4edda!important;border-color:#c3e6cb!important}  .success-snackbar .mdc-snackbar__surface .mdc-button__label{color:#155724!important}  .success-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#155724!important}  .warning-snackbar .mdc-snackbar__surface{color:#856404!important;background-color:#fff3cd!important;border-color:#ffeeba!important}  .warning-snackbar .mdc-snackbar__surface .mdc-button__label{color:#856404!important}  .warning-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#856404!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:transparent!important;--mat-mdc-button-persistent-ripple-color: currentColor !important}"]
  });
  return AdministrationComponent;
})();
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2020/forms.mjs
var fesm2020_forms = __webpack_require__(24006);
// EXTERNAL MODULE: ./src/app/core/auth/services/base64-encryption-util.service.ts
var base64_encryption_util_service = __webpack_require__(46602);
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-profile-phone/administration-profile-phone.component.ts

















function AdministrationProfilePhoneComponent_ng_container_0_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "h1", 25);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" Mi Perfil ", ctx_r1.user.userName, " ");
  }
}
function AdministrationProfilePhoneComponent_ng_container_0_ng_container_47_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-icon", 29);
    core/* ɵɵtext */._uU(1, "lock");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationProfilePhoneComponent_ng_container_0_ng_container_47_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 30);
    core/* ɵɵlistener */.NdJ("click", function AdministrationProfilePhoneComponent_ng_container_0_ng_container_47_button_6_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r5.updateNotificationPhoneState("true"));
    });
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 31);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationProfilePhoneComponent_ng_container_0_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "mat-form-field")(2, "mat-label");
    core/* ɵɵtext */._uU(3, "Celular segunda clave");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(4, "input", 26);
    core/* ɵɵtemplate */.YNc(5, AdministrationProfilePhoneComponent_ng_container_0_ng_container_47_mat_icon_5_Template, 2, 0, "mat-icon", 27);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(6, AdministrationProfilePhoneComponent_ng_container_0_ng_container_47_button_6_Template, 3, 0, "button", 28);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("readonly", true);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r2.user.shadowFlag === "1");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r2.user.shadowFlag === "0");
  }
}
function AdministrationProfilePhoneComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 1);
    core/* ɵɵtemplate */.YNc(2, AdministrationProfilePhoneComponent_ng_container_0_h1_2_Template, 2, 1, "h1", 2);
    core/* ɵɵelementStart */.TgZ(3, "mat-card")(4, "mat-card-content")(5, "form", 3)(6, "mat-form-field")(7, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(8);
    core/* ɵɵi18n */.SDv(9, 4);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(10, "input", 5);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(11, "mat-form-field")(12, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(13);
    core/* ɵɵi18n */.SDv(14, 6);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(15, "input", 7);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(16, "mat-form-field")(17, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(18);
    core/* ɵɵi18n */.SDv(19, 8);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(20, "input", 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(21, "mat-form-field")(22, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(23);
    core/* ɵɵi18n */.SDv(24, 10);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(25, "input", 11);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(26, "mat-form-field")(27, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(28);
    core/* ɵɵi18n */.SDv(29, 12);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(30, "input", 13);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(31, "mat-form-field")(32, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(33);
    core/* ɵɵi18n */.SDv(34, 14);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(35, "input", 15);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(36, "mat-form-field")(37, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(38);
    core/* ɵɵi18n */.SDv(39, 16);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(40, "input", 17);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(41, "mat-form-field")(42, "mat-label");
    core/* ɵɵelementContainerStart */.ynx(43);
    core/* ɵɵi18n */.SDv(44, 18);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(45, "input", 19);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(46, "div", 20);
    core/* ɵɵtemplate */.YNc(47, AdministrationProfilePhoneComponent_ng_container_0_ng_container_47_Template, 7, 3, "ng-container", 0);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(48, "mat-checkbox", 21);
    core/* ɵɵlistener */.NdJ("click", function AdministrationProfilePhoneComponent_ng_container_0_Template_mat_checkbox_click_48_listener($event) {
      return $event.preventDefault();
    });
    core/* ɵɵtext */._uU(49, " Desea que el usuario reciba correos de notificaci\u00F3n de transacciones? ");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(50, "div", 22)(51, "button", 23);
    core/* ɵɵlistener */.NdJ("click", function AdministrationProfilePhoneComponent_ng_container_0_Template_button_click_51_listener() {
      core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r8.cancel());
    });
    core/* ɵɵelementContainerStart */.ynx(52);
    core/* ɵɵi18n */.SDv(53, 24);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA()()()()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.user);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("formGroup", ctx_r0.profileForm);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("readonly", true);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("readonly", true);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("readonly", true);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("readonly", true);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("readonly", true);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("readonly", true);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("readonly", true);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("readonly", true);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.user);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("checked", "true" === ctx_r0.user.info ? ctx_r0.user.info : false)("disableRipple", true);
  }
}
let AdministrationProfilePhoneComponent = /*#__PURE__*/(() => {
  class AdministrationProfilePhoneComponent {
    constructor(store, router, base64EncryptionUtilService) {
      this.store = store;
      this.router = router;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      this.store.select(administrationFeatureSelector).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: store => {
          this.profileForm = new fesm2020_forms/* FormGroup */.cw({
            username: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required]),
            identification: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^\d+$/)]),
            name: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/)]),
            lastName: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/)]),
            email: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required]),
            phone: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^\d+$/), fesm2020_forms/* Validators.minLength */.kI.minLength(10)]),
            charge: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/)]),
            enterprise: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required]),
            notificationPhone: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required])
          });
          this.user = store.selectedUser.filter(item => item.userName === store.selectedUserName)[0];
          if (this.user) {
            this.usernameControl.setValue(this.user.userName);
            this.identificationControl.setValue(this.user.licencia);
            this.nameControl.setValue(this.user.nombres);
            this.lastNameControl.setValue(this.user.apellidos);
            this.emailControl.setValue(this.user.correo ? "**************************" : "");
            this.phoneControl.setValue(this.user.celular);
            this.chargeControl.setValue(this.user.cargo);
            this.enterpriseControl.setValue(`${this.user.empresa.id} - ${this.user.empresa.nombre}`);
            this.notificationPhoneControl.setValue(this.user.telexNumber);
          }
        },
        error: error => console.error(error)
      });
    }
    updateNotificationPhoneState(lock) {
      const payload = {
        "isLocked": lock,
        "mobileNotification": this.user.telexNumber,
        "username": this.user.userName
      };
      this.store.dispatch((0,administration_actions/* updateNotificationData */.jY)({
        body: payload,
        user: this.user.userName
      }));
    }
    disableUser() {
      const payload = {
        userName: this.user.userName
      };
      this.store.dispatch((0,administration_actions/* disableUser */.B9)({
        body: payload
      }));
      this.cancel();
    }
    submit() {
      const payload = Object.assign({}, this.user);
      payload.userName = this.usernameControl.value;
      payload.licencia = this.identificationControl.value;
      payload.nombres = this.nameControl.value;
      payload.apellidos = this.lastNameControl.value;
      payload.correo = this.user.correo;
      payload.celular = this.phoneControl.value;
      payload.cargo = this.chargeControl.value;
      payload.info = this.user.info;
      payload.telexNumber = this.notificationPhoneControl.value;
      //console.log("hasnotification: ",  this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_EU")[0].notificable);
      //hasNotification:  this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_EU")[0].notificable
      this.store.dispatch((0,administration_actions/* updateUser */.Nq)({
        body: payload,
        hasNotification: true,
        notificationData: this.base64EncryptionUtilService.encrypt(JSON.stringify({
          userName: this.userInfo.userName,
          nit: this.userInfo.empresa?.id,
          fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,
          updatedUserNit: payload.empresa.id,
          updatedUserUserName: payload.userName,
          updatedUserName: payload.nombres,
          updatedUserLastName: payload.apellidos,
          updatedUserEmail: payload.correo,
          updatedUserSecondPasswordPhoneNumber: payload.telexNumber,
          updatedUserPhoneNumber: payload.celular,
          updatedUserNotificable: payload.info,
          updatedUserCharge: payload.cargo // Cargo
        })),

        privilege: "ADM_GU_EU"
      }));
      this.cancel();
    }
    get usernameControl() {
      return this.profileForm.controls["username"];
    }
    get identificationControl() {
      return this.profileForm.controls["identification"];
    }
    get nameControl() {
      return this.profileForm.controls["name"];
    }
    get lastNameControl() {
      return this.profileForm.controls["lastName"];
    }
    get emailControl() {
      return this.profileForm.controls["email"];
    }
    get phoneControl() {
      return this.profileForm.controls["phone"];
    }
    get chargeControl() {
      return this.profileForm.controls["charge"];
    }
    get enterpriseControl() {
      return this.profileForm.controls["enterprise"];
    }
    get NotificationControl() {
      return this.profileForm.controls["Notification"];
    }
    get notificationPhoneControl() {
      return this.profileForm.controls["notificationPhone"];
    }
    cancel() {
      this.router.navigate(['/', 'administracion']);
    }
  }
  AdministrationProfilePhoneComponent.ɵfac = function AdministrationProfilePhoneComponent_Factory(t) {
    return new (t || AdministrationProfilePhoneComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L));
  };
  AdministrationProfilePhoneComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationProfilePhoneComponent,
    selectors: [["app-administration-profile-phone"]],
    decls: 1,
    vars: 1,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_22e9cce7b669515bb28be70f7a5005753d230672468adda491300e39b6dfb014$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__1 = goog.getMsg(" config.views.config-users.navbar.CREATE_NAME_USER_MESSAGE ");
        i18n_0 = MSG_EXTERNAL_22e9cce7b669515bb28be70f7a5005753d230672468adda491300e39b6dfb014$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__1;
      } else {
        i18n_0 = "Nombre de Usuario";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_cd2c25001897a13e3b2c1f4c6e7cd60c38aeb9439a1c5131ab06c613e9b05040$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__3 = goog.getMsg(" config.views.config-users.navbar.CREATE_ID_MESSAGE ");
        i18n_2 = MSG_EXTERNAL_cd2c25001897a13e3b2c1f4c6e7cd60c38aeb9439a1c5131ab06c613e9b05040$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__3;
      } else {
        i18n_2 = "Identificacion";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_fb0753b6e84fcc877ef5528598c9225426314844c7314a95e9224320a3fe5726$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__5 = goog.getMsg(" config.views.config-users.navbar.CREATE_NAME_MESSAGE ");
        i18n_4 = MSG_EXTERNAL_fb0753b6e84fcc877ef5528598c9225426314844c7314a95e9224320a3fe5726$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__5;
      } else {
        i18n_4 = "Nombres";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_d48921b9793740d9e653591761d4eb41e813f28283e937144751ea2510073827$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__7 = goog.getMsg(" config.views.config-users.navbar.CREATE_LAST_NAME_MESSAGE ");
        i18n_6 = MSG_EXTERNAL_d48921b9793740d9e653591761d4eb41e813f28283e937144751ea2510073827$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__7;
      } else {
        i18n_6 = "Apellidos";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_67b2d2fca87d290f283ea26317366092de5d6923a123c2c48f4e5117b86d9796$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__9 = goog.getMsg(" config.views.config-users.navbar.CREATE_MAIL_MESSAGE ");
        i18n_8 = MSG_EXTERNAL_67b2d2fca87d290f283ea26317366092de5d6923a123c2c48f4e5117b86d9796$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__9;
      } else {
        i18n_8 = "Correo Electr\xF3nico";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5b6f13abc3fa41590845f0892acf7ce19153f8ebb63d241034a7f816c2cbb802$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__11 = goog.getMsg(" config.views.config-users.navbar.CREATE_COMPANY_MESSAGE ");
        i18n_10 = MSG_EXTERNAL_5b6f13abc3fa41590845f0892acf7ce19153f8ebb63d241034a7f816c2cbb802$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__11;
      } else {
        i18n_10 = "Empresa";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_be9ebb72babaa74b4eb37a3ec266a54e0ea92680f5b34a5102299c07a1b8ad2d$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__13 = goog.getMsg(" config.views.config-users.navbar.CREATE_POSITION_MESSAGE ");
        i18n_12 = MSG_EXTERNAL_be9ebb72babaa74b4eb37a3ec266a54e0ea92680f5b34a5102299c07a1b8ad2d$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__13;
      } else {
        i18n_12 = "Cargo";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2d28ba41a63e2fa716cce9b1381d37f78a9d5f88557d30038276bcc9efe1745a$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__15 = goog.getMsg(" config.views.config-users.navbar.CREATE_CELPHONE_MESSAGE ");
        i18n_14 = MSG_EXTERNAL_2d28ba41a63e2fa716cce9b1381d37f78a9d5f88557d30038276bcc9efe1745a$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__15;
      } else {
        i18n_14 = "Celular";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__17 = goog.getMsg(" config.views.config-restrictions.CANCEL ");
        i18n_16 = MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS__17;
      } else {
        i18n_16 = "Cancelar";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2452a1703f387dd4c465accfa95396d1f2c4b5604a2d199c37e776ae73723e4d$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS____19 = goog.getMsg(" config.views.config-users-mobile.LOCK ");
        i18n_18 = MSG_EXTERNAL_2452a1703f387dd4c465accfa95396d1f2c4b5604a2d199c37e776ae73723e4d$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_PROFILE_PHONE_ADMINISTRATION_PROFILE_PHONE_COMPONENT_TS____19;
      } else {
        i18n_18 = "Bloquear Celular";
      }
      return [[4, "ngIf"], [1, "administration-profile-phone"], ["class", "title", 4, "ngIf"], [1, "user-form-form", 3, "formGroup"], i18n_0, ["matInput", "", "type", "text", "formControlName", "username", 3, "readonly"], i18n_2, ["matInput", "", "type", "text", "formControlName", "identification", 3, "readonly"], i18n_4, ["matInput", "", "type", "text", "formControlName", "name", 3, "readonly"], i18n_6, ["matInput", "", "type", "text", "formControlName", "lastName", 3, "readonly"], i18n_8, ["matInput", "", "type", "text", "formControlName", "email", 3, "readonly"], i18n_10, ["matInput", "", "type", "text", "formControlName", "enterprise", 3, "readonly"], i18n_12, ["matInput", "", "type", "text", "formControlName", "charge", 3, "readonly"], i18n_14, ["matInput", "", "type", "text", "formControlName", "phone", 3, "readonly"], [1, "user-form-notification"], ["color", "primary", 3, "checked", "disableRipple", "click"], [1, "user-form-actions"], ["mat-flat-button", "", 3, "click"], i18n_16, [1, "title"], ["matInput", "", "type", "text", "formControlName", "notificationPhone", 3, "readonly"], ["matSuffix", "", "class", "user-form-notification-icon", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "class", "submit-button", 3, "click", 4, "ngIf"], ["matSuffix", "", 1, "user-form-notification-icon"], ["mat-flat-button", "", "color", "primary", 1, "submit-button", 3, "click"], i18n_18];
    },
    template: function AdministrationProfilePhoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, AdministrationProfilePhoneComponent_ng_container_0_Template, 54, 13, "ng-container", 0);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", ctx.user);
      }
    },
    dependencies: [common/* NgIf */.O5, icon/* MatIcon */.Hw, fesm2020_checkbox/* MatCheckbox */.oG, fesm2020_button/* MatButton */.lW, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatSuffix */.R9, input/* MatInput */.Nt, card/* MatCard */.a8, card/* MatCardContent */.dn, fesm2020_forms/* ɵNgNoValidate */._Y, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* NgControlStatusGroup */.JL, fesm2020_forms/* FormGroupDirective */.sg, fesm2020_forms/* FormControlName */.u],
    styles: [".administration-profile-phone[_ngcontent-%COMP%]{padding:1rem}.phone-number-title[_ngcontent-%COMP%]{font-size:1rem;color:#78909c}.phone-number-container[_ngcontent-%COMP%]{width:100%;padding:1rem;background-color:#f5f5f5;border-bottom:#bdc3c7 solid 1px;cursor:text;font-size:1rem;margin-bottom:1rem;display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr}.phone-number-container[_ngcontent-%COMP%]:hover{background-color:#ecf0f1}.actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.lock-button[_ngcontent-%COMP%]{margin-right:1rem}.lock-button[_ngcontent-%COMP%], .unlock-button[_ngcontent-%COMP%]{color:#fff!important}.title[_ngcontent-%COMP%]{color:#666;margin:0;padding:1rem;padding-left:0}.create-user-wrapper[_ngcontent-%COMP%]{padding:.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:1fr auto}.submit-button[_ngcontent-%COMP%]{margin:0 .25rem;color:#fff!important}.user-form-notification[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr}.user-form-notification-icon[_ngcontent-%COMP%]{color:#92b975!important}.user-form-actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.user-form-form[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;column-gap:.5rem}"]
  });
  return AdministrationProfilePhoneComponent;
})();
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/snack-bar.mjs
var snack_bar = __webpack_require__(17009);
// EXTERNAL MODULE: ./src/app/shared/directives/double-factor-authentication.directive.ts
var double_factor_authentication_directive = __webpack_require__(53826);
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-actions-hours/administration-actions-hours.component.ts



















function AdministrationActionsHoursComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span", 23);
    core/* ɵɵtext */._uU(1, " Configuraci\u00F3n errada, horario inicial es mayor al horario final ");
    core/* ɵɵelementEnd */.qZA();
  }
}
let AdministrationActionsHoursComponent = /*#__PURE__*/(() => {
  class AdministrationActionsHoursComponent {
    constructor(store, router, matSnackBar, base64EncryptionUtilService) {
      this.store = store;
      this.router = router;
      this.matSnackBar = matSnackBar;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.privileges = privileges_enum/* privileges */.U;
      this.privilege = "";
      this.description = "";
      this.descriptionReal = "";
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      this.store.select(administrationFeatureSelector).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: store => {
          if (store.privilege) {
            this.privilege = store.privilege.nombre;
            this.description = store.privilege.accion;
            this.descriptionReal = store.privilege.descripcion;
          }
          this.mondayFriday = store.selectedAction.filter(value => value.diaRestriccion === "LV")[0];
          this.saturday = store.selectedAction.filter(value => value.diaRestriccion === "S")[0];
          this.sunday = store.selectedAction.filter(value => value.diaRestriccion === "D")[0];
          this.weekFormGroup = new fesm2020_forms/* FormGroup */.cw({
            from: new fesm2020_forms/* FormControl */.NI(this.mondayFriday?.horaDesde || "0", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(0)]),
            to: new fesm2020_forms/* FormControl */.NI(this.mondayFriday?.horaHasta || "0", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(0)])
          });
          this.saturdayFormGroup = new fesm2020_forms/* FormGroup */.cw({
            from: new fesm2020_forms/* FormControl */.NI(this.saturday?.horaDesde || "0", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(0)]),
            to: new fesm2020_forms/* FormControl */.NI(this.saturday?.horaHasta || "0", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(0)])
          });
          this.sundayFormGroup = new fesm2020_forms/* FormGroup */.cw({
            from: new fesm2020_forms/* FormControl */.NI(this.sunday?.horaDesde || "0", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(0)]),
            to: new fesm2020_forms/* FormControl */.NI(this.sunday?.horaHasta || "0", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.minLength */.kI.minLength(0)])
          });
          this.changeFormState(!!this.mondayFriday, this.weekFormGroup);
          this.changeFormState(!!this.saturday, this.saturdayFormGroup);
          this.changeFormState(!!this.sunday, this.sundayFormGroup);
        },
        error: error => console.error(error)
      });
    }
    get weekFromControl() {
      return this.weekFormGroup.controls["from"];
    }
    get weekToControl() {
      return this.weekFormGroup.controls["to"];
    }
    get saturdayFromControl() {
      return this.saturdayFormGroup.controls["from"];
    }
    get saturdayToControl() {
      return this.saturdayFormGroup.controls["to"];
    }
    get sundayFromControl() {
      return this.sundayFormGroup.controls["from"];
    }
    get sundayToControl() {
      return this.sundayFormGroup.controls["to"];
    }
    changeFormState(checked, form) {
      if (checked) {
        form.enable();
      } else {
        form.disable();
      }
    }
    submit(weekTag, saturdayTag, sundayTag) {
      const payload = {
        nit: "",
        privilegios: [{
          privilegio: this.privilege,
          diasRestriccion: []
        }]
      };
      if (weekTag.checked) {
        if (this.weekFromControl.value <= this.weekToControl.value) {
          payload.privilegios[0].diasRestriccion = [...payload.privilegios[0].diasRestriccion, {
            diaRestriccion: "LV",
            horaDesde: this.convertTwoZeros(this.weekFromControl.value),
            horaHasta: this.convertTwoZeros(this.weekToControl.value)
          }];
        } else {
          this.weekFormGroup.setErrors({
            FromFieldIsGreaterThanToField: "Configuración errada, horario inicial es mayor al horario final"
          });
        }
      }
      if (saturdayTag.checked) {
        if (this.saturdayFromControl.value <= this.saturdayToControl.value) {
          payload.privilegios[0].diasRestriccion = [...payload.privilegios[0].diasRestriccion, {
            diaRestriccion: "S",
            horaDesde: this.convertTwoZeros(this.saturdayFromControl.value),
            horaHasta: this.convertTwoZeros(this.saturdayToControl.value)
          }];
        } else this.saturdayFormGroup.setErrors({
          FromFieldIsGreaterThanToField: "Configuración errada, horario inicial es mayor al horario final"
        });
      }
      if (sundayTag.checked) {
        if (this.sundayFromControl.value <= this.sundayToControl.value) {
          payload.privilegios[0].diasRestriccion = [...payload.privilegios[0].diasRestriccion, {
            diaRestriccion: "D",
            horaDesde: this.convertTwoZeros(this.sundayFromControl.value),
            horaHasta: this.convertTwoZeros(this.sundayToControl.value)
          }];
        } else this.sundayFormGroup.setErrors({
          FromFieldIsGreaterThanToField: "Configuración errada, horario inicial es mayor al horario final"
        });
      }
      if (this.weekFormGroup.invalid || this.saturdayFormGroup.invalid || this.sundayFormGroup.invalid) {
        this.matSnackBar.open("Configuración errada, horario inicial es mayor al horario final", "", {
          verticalPosition: "top",
          duration: 3000,
          panelClass: ["error-snackbar"]
        });
      } else {
        this.store.dispatch((0,administration_actions/* saveActionPrivilege */.MZ)({
          payload,
          hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "ADMIN_ACTIONS")[0].notificable,
          notificationData: this.base64EncryptionUtilService.encrypt(JSON.stringify({
            userName: this.userInfo.userName,
            nit: this.userInfo.empresa?.id,
            fullName: this.quitarTildes(`${this.userInfo.nombres} ${this.userInfo.apellidos}`),
            interval: this.layouNotification(payload.privilegios[0]),
            restriccion: this.quitarTildes(this.descriptionReal),
            accion: this.quitarTildes(this.description)
          })),
          privilege: "ADMIN_ACTIONS"
        }));
        this.cancel();
      }
    }
    convertTwoZeros(number) {
      const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const convertedNumber = parseInt(number);
      if (numbers.includes(convertedNumber)) return "0" + convertedNumber;
      return convertedNumber.toString();
    }
    cancel() {
      this.router.navigate(['/', 'administracion']);
    }
    layouNotification(privilegios) {
      let resultado = [];
      const diasSemanaCompleto = {
        "LV": ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
        "S": ["Sabado"],
        "D": ["Domingo"]
      };
      privilegios.diasRestriccion.forEach(restriccion => {
        const dias = diasSemanaCompleto[restriccion.diaRestriccion] || [];
        dias.forEach(dia => {
          resultado.push({
            diaDeLaSemana: dia,
            horaInicio: "".concat(restriccion.horaDesde).concat(":").concat("00"),
            horaFin: "".concat(restriccion.horaHasta).concat(":").concat("00")
          });
        });
      });
      return resultado;
    }
    quitarTildes(texto) {
      return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
  }
  AdministrationActionsHoursComponent.ɵfac = function AdministrationActionsHoursComponent_Factory(t) {
    return new (t || AdministrationActionsHoursComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L));
  };
  AdministrationActionsHoursComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationActionsHoursComponent,
    selectors: [["app-administration-actions-hours"]],
    decls: 57,
    vars: 14,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_afa5a7e94493a3ad27f0d1923c3b443438e311e1a0cdf055322e80eeab1e551b$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_HOURS_ADMINISTRATION_ACTIONS_HOURS_COMPONENT_TS_1 = goog.getMsg(" config.views.config-restrictions.MONDAY_TO_FRIDAY ");
        i18n_0 = MSG_EXTERNAL_afa5a7e94493a3ad27f0d1923c3b443438e311e1a0cdf055322e80eeab1e551b$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_HOURS_ADMINISTRATION_ACTIONS_HOURS_COMPONENT_TS_1;
      } else {
        i18n_0 = "Lunes a Viernes";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_b88f2d3afbea466cbdb91028e9ca7dd7c4bbfb7a639804b5df29d25ef4da4840$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_HOURS_ADMINISTRATION_ACTIONS_HOURS_COMPONENT_TS_3 = goog.getMsg(" config.views.config-restrictions.SATURDAYS ");
        i18n_2 = MSG_EXTERNAL_b88f2d3afbea466cbdb91028e9ca7dd7c4bbfb7a639804b5df29d25ef4da4840$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_HOURS_ADMINISTRATION_ACTIONS_HOURS_COMPONENT_TS_3;
      } else {
        i18n_2 = "S\xE1bados";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_b6c7b4091e27ee7c10d0cdbbf6c8f2d1cff621fd2d2321b2dd89ba520d19d7a8$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_HOURS_ADMINISTRATION_ACTIONS_HOURS_COMPONENT_TS_5 = goog.getMsg(" config.views.config-restrictions.SUNDAYS ");
        i18n_4 = MSG_EXTERNAL_b6c7b4091e27ee7c10d0cdbbf6c8f2d1cff621fd2d2321b2dd89ba520d19d7a8$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_HOURS_ADMINISTRATION_ACTIONS_HOURS_COMPONENT_TS_5;
      } else {
        i18n_4 = "Domingos";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_HOURS_ADMINISTRATION_ACTIONS_HOURS_COMPONENT_TS_7 = goog.getMsg(" services.views.modal.confirm.button.ACCEPT ");
        i18n_6 = MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_HOURS_ADMINISTRATION_ACTIONS_HOURS_COMPONENT_TS_7;
      } else {
        i18n_6 = "Aceptar";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_HOURS_ADMINISTRATION_ACTIONS_HOURS_COMPONENT_TS_9 = goog.getMsg(" config.views.config-restrictions.CANCEL ");
        i18n_8 = MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_ACTIONS_HOURS_ADMINISTRATION_ACTIONS_HOURS_COMPONENT_TS_9;
      } else {
        i18n_8 = "Cancelar";
      }
      return [[1, "administration-actions-hours"], [1, "title"], [1, "table"], ["align", "center"], ["scope", "row"], ["color", "primary", 3, "checked", "change"], ["weekTag", ""], i18n_0, [3, "formGroup"], [1, "number-input"], ["matInput", "", "min", "0", "max", "23", "type", "number", "formControlName", "from"], [1, "hour-divider"], ["matInput", "", "min", "0", "max", "23", "type", "number", "formControlName", "to"], ["saturdayTag", ""], i18n_2, ["sundayTag", ""], i18n_4, [1, "actions"], ["class", "error-message", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "submit-button", 3, "appDoubleFactorAuthentication", "appDoubleFactorAPIGateway", "doubleFactorDestination", "doubleFactorCallback", "doubleFactorIncorrectCallback", "disabled"], i18n_6, ["mat-flat-button", "", 3, "click"], i18n_8, [1, "error-message"]];
    },
    template: function AdministrationActionsHoursComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "mat-card")(2, "mat-card-content")(3, "h1", 1);
        core/* ɵɵtext */._uU(4);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(5, "table", 2)(6, "tbody", 3)(7, "tr")(8, "td", 4)(9, "mat-checkbox", 5, 6);
        core/* ɵɵlistener */.NdJ("change", function AdministrationActionsHoursComponent_Template_mat_checkbox_change_9_listener($event) {
          return ctx.changeFormState($event.checked, ctx.weekFormGroup);
        });
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(11, "td");
        core/* ɵɵi18n */.SDv(12, 7);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(13, "td")(14, "form", 8)(15, "mat-form-field", 9);
        core/* ɵɵelement */._UZ(16, "input", 10);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(17, "span", 11);
        core/* ɵɵtext */._uU(18, "-");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(19, "mat-form-field", 9);
        core/* ɵɵelement */._UZ(20, "input", 12);
        core/* ɵɵelementEnd */.qZA()()()();
        core/* ɵɵelementStart */.TgZ(21, "tr")(22, "td", 4)(23, "mat-checkbox", 5, 13);
        core/* ɵɵlistener */.NdJ("change", function AdministrationActionsHoursComponent_Template_mat_checkbox_change_23_listener($event) {
          return ctx.changeFormState($event.checked, ctx.saturdayFormGroup);
        });
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(25, "td");
        core/* ɵɵi18n */.SDv(26, 14);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(27, "td")(28, "form", 8)(29, "mat-form-field", 9);
        core/* ɵɵelement */._UZ(30, "input", 10);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(31, "span", 11);
        core/* ɵɵtext */._uU(32, "-");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(33, "mat-form-field", 9);
        core/* ɵɵelement */._UZ(34, "input", 12);
        core/* ɵɵelementEnd */.qZA()()()();
        core/* ɵɵelementStart */.TgZ(35, "tr")(36, "td", 4)(37, "mat-checkbox", 5, 15);
        core/* ɵɵlistener */.NdJ("change", function AdministrationActionsHoursComponent_Template_mat_checkbox_change_37_listener($event) {
          return ctx.changeFormState($event.checked, ctx.sundayFormGroup);
        });
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(39, "td");
        core/* ɵɵi18n */.SDv(40, 16);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(41, "td")(42, "form", 8)(43, "mat-form-field", 9);
        core/* ɵɵelement */._UZ(44, "input", 10);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(45, "span", 11);
        core/* ɵɵtext */._uU(46, "-");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(47, "mat-form-field", 9);
        core/* ɵɵelement */._UZ(48, "input", 12);
        core/* ɵɵelementEnd */.qZA()()()()()();
        core/* ɵɵelementStart */.TgZ(49, "div", 17);
        core/* ɵɵtemplate */.YNc(50, AdministrationActionsHoursComponent_span_50_Template, 2, 0, "span", 18);
        core/* ɵɵelementStart */.TgZ(51, "button", 19);
        core/* ɵɵelementContainerStart */.ynx(52);
        core/* ɵɵi18n */.SDv(53, 20);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(54, "button", 21);
        core/* ɵɵlistener */.NdJ("click", function AdministrationActionsHoursComponent_Template_button_click_54_listener() {
          return ctx.cancel();
        });
        core/* ɵɵelementContainerStart */.ynx(55);
        core/* ɵɵi18n */.SDv(56, 22);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA()()()()();
      }
      if (rf & 2) {
        const _r0 = core/* ɵɵreference */.MAs(10);
        const _r1 = core/* ɵɵreference */.MAs(24);
        const _r2 = core/* ɵɵreference */.MAs(38);
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵtextInterpolate1 */.hij(" Restricciones Acci\u00F3n : : ", ctx.description, "");
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("checked", !!ctx.mondayFriday);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.weekFormGroup);
        core/* ɵɵadvance */.xp6(9);
        core/* ɵɵproperty */.Q6J("checked", !!ctx.saturday);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.saturdayFormGroup);
        core/* ɵɵadvance */.xp6(9);
        core/* ɵɵproperty */.Q6J("checked", !!ctx.sunday);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.sundayFormGroup);
        core/* ɵɵadvance */.xp6(8);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.weekFormGroup.errors || ctx.saturdayFormGroup.errors || ctx.sundayFormGroup.errors);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("appDoubleFactorAuthentication", "ADMIN_ACTIONS")("appDoubleFactorAPIGateway", ctx.userInfo)("doubleFactorDestination", "destination")("doubleFactorCallback", ctx.submit.bind(ctx, _r0, _r1, _r2))("doubleFactorIncorrectCallback", ctx.cancel.bind(ctx))("disabled", ctx.weekFormGroup.invalid || ctx.saturdayFormGroup.invalid || ctx.sundayFormGroup.invalid);
      }
    },
    dependencies: [common/* NgIf */.O5, fesm2020_checkbox/* MatCheckbox */.oG, fesm2020_button/* MatButton */.lW, form_field/* MatFormField */.KE, input/* MatInput */.Nt, card/* MatCard */.a8, card/* MatCardContent */.dn, fesm2020_forms/* ɵNgNoValidate */._Y, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NumberValueAccessor */.wV, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* NgControlStatusGroup */.JL, fesm2020_forms/* MinValidator */.qQ, fesm2020_forms/* MaxValidator */.Fd, fesm2020_forms/* FormGroupDirective */.sg, fesm2020_forms/* FormControlName */.u, double_factor_authentication_directive/* DoubleFactorAuthenticationDirective */.A],
    styles: ["td[_ngcontent-%COMP%]{vertical-align:middle}.title[_ngcontent-%COMP%]{color:#666}.actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.hour-divider[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}.number-input[_ngcontent-%COMP%]{width:5rem}.error-message[_ngcontent-%COMP%]{margin-right:1rem;color:#dc3545}.submit-button[_ngcontent-%COMP%]{margin-right:1rem;color:#fff!important}  .mdc-tab__text-label{flex-direction:column!important}  .mdc-data-table__header-cell{text-align:center!important;font-family:Gilroy-ExtraBold;color:#66bb6a;font-size:1rem}  .mdc-data-table__row{background-color:#dfe6e91a!important;border:transparent solid!important;border-bottom:.25rem transparent solid!important}  .mdc-data-table__row:hover{background-color:#7ba0521a!important}  .mdc-data-table__row td{font-family:Gilroy-Light;color:#666!important}  .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}"]
  });
  return AdministrationActionsHoursComponent;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/combineLatest.js
var combineLatest = __webpack_require__(39841);
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-notification-selected/administration-notification-selected.component.ts














function AdministrationNotificationSelectedComponent_ng_container_1_th_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 15);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 16);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationNotificationSelectedComponent_ng_container_1_td_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 17);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r9.action);
  }
}
function AdministrationNotificationSelectedComponent_ng_container_1_th_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 15);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 18);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationNotificationSelectedComponent_ng_container_1_td_9_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 17);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r10.description);
  }
}
function AdministrationNotificationSelectedComponent_ng_container_1_th_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 15);
  }
}
function AdministrationNotificationSelectedComponent_ng_container_1_td_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 17)(1, "a", 19)(2, "mat-checkbox", 20);
    core/* ɵɵlistener */.NdJ("change", function AdministrationNotificationSelectedComponent_ng_container_1_td_12_Template_mat_checkbox_change_2_listener($event) {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r13);
      const element_r11 = restoredCtx.$implicit;
      const ctx_r12 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r12.matCheckboxChange($event.checked, element_r11.privilegeName));
    });
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("checked", element_r11.activo);
  }
}
function AdministrationNotificationSelectedComponent_ng_container_1_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 21);
  }
}
function AdministrationNotificationSelectedComponent_ng_container_1_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 22);
  }
}
function AdministrationNotificationSelectedComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "mat-card")(2, "mat-card-content")(3, "table", 2);
    core/* ɵɵelementContainerStart */.ynx(4, 3);
    core/* ɵɵtemplate */.YNc(5, AdministrationNotificationSelectedComponent_ng_container_1_th_5_Template, 3, 0, "th", 4);
    core/* ɵɵtemplate */.YNc(6, AdministrationNotificationSelectedComponent_ng_container_1_td_6_Template, 2, 1, "td", 5);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(7, 6);
    core/* ɵɵtemplate */.YNc(8, AdministrationNotificationSelectedComponent_ng_container_1_th_8_Template, 3, 0, "th", 4);
    core/* ɵɵtemplate */.YNc(9, AdministrationNotificationSelectedComponent_ng_container_1_td_9_Template, 2, 1, "td", 5);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(10, 7);
    core/* ɵɵtemplate */.YNc(11, AdministrationNotificationSelectedComponent_ng_container_1_th_11_Template, 1, 0, "th", 4);
    core/* ɵɵtemplate */.YNc(12, AdministrationNotificationSelectedComponent_ng_container_1_td_12_Template, 3, 1, "td", 5);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵtemplate */.YNc(13, AdministrationNotificationSelectedComponent_ng_container_1_tr_13_Template, 1, 0, "tr", 8);
    core/* ɵɵtemplate */.YNc(14, AdministrationNotificationSelectedComponent_ng_container_1_tr_14_Template, 1, 0, "tr", 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(15, "div", 10)(16, "button", 11);
    core/* ɵɵlistener */.NdJ("click", function AdministrationNotificationSelectedComponent_ng_container_1_Template_button_click_16_listener() {
      core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r15 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r15.submit());
    });
    core/* ɵɵelementContainerStart */.ynx(17);
    core/* ɵɵi18n */.SDv(18, 12);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(19, "button", 13);
    core/* ɵɵlistener */.NdJ("click", function AdministrationNotificationSelectedComponent_ng_container_1_Template_button_click_19_listener() {
      core/* ɵɵrestoreView */.CHM(_r16);
      const ctx_r17 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r17.cancel());
    });
    core/* ɵɵelementContainerStart */.ynx(20);
    core/* ɵɵi18n */.SDv(21, 14);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("dataSource", ctx_r0.dataSource);
    core/* ɵɵadvance */.xp6(10);
    core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx_r0.displayedColumns);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx_r0.displayedColumns);
  }
}
let AdministrationNotificationSelectedComponent = /*#__PURE__*/(() => {
  class AdministrationNotificationSelectedComponent {
    constructor(store, router) {
      this.store = store;
      this.router = router;
      this.privileges = privileges_enum/* privileges */.U;
      this.notifications = [];
      this.selectedNotifications = [];
      this.dataSource = new table/* MatTableDataSource */.by();
      this.displayedColumns = [];
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      (0,combineLatest/* combineLatest */.a)([this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o), this.store.select(administrationFeatureSelector)]).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          this.user = result[0];
          this.notifications = result[1].notifications;
          this.selectedNotifications = result[1].selectedNotifications;
          this.displayedColumns = ["action", "description", "select"];
          this.dataSource = new table/* MatTableDataSource */.by(this.selectedNotifications);
        },
        error: error => console.error(error)
      });
    }
    submit() {
      let notifications = this.notifications.filter(value => value.activo);
      let selectedNotificationActive = this.selectedNotifications.filter(value => value.activo);
      let selectedNotificationInactive = this.selectedNotifications.filter(value => !value.activo);
      const filterPrivilegesActives = selectedNotificationActive.map(value => value.privilegeName);
      const filterPrivilegesInactives = selectedNotificationInactive.map(value => value.privilegeName);
      notifications = notifications.filter(value => !filterPrivilegesInactives.includes(value.privilegeName));
      notifications = notifications.filter(value => !filterPrivilegesActives.includes(value.privilegeName));
      const payload = {
        companyId: this.user.empresa?.id,
        privilegios: [...notifications.map(value => value.privilegeName), ...filterPrivilegesActives]
      };
      this.store.dispatch((0,administration_actions/* updatePrivilegesNotifiableCompany */.LG)({
        payload
      }));
      this.store.dispatch((0,administration_actions/* getPrivilegesNotifiableCompany */.A3)());
      this.store.dispatch((0,administration_actions/* clearPrivilegesNotificableCompany */.BT)());
    }
    matCheckboxChange(checked, privilege) {
      let newData = [...this.selectedNotifications];
      newData = newData.map(value => {
        const newValue = Object.assign({}, value);
        if (newValue.privilegeName === privilege) newValue.activo = checked;
        return newValue;
      });
      this.selectedNotifications = newData;
      this.dataSource = new table/* MatTableDataSource */.by(this.selectedNotifications);
    }
    cancel() {
      this.router.navigate(['/', 'administracion', 'notification']);
      this.store.dispatch((0,administration_actions/* clearPrivilegesNotificableCompany */.BT)());
    }
  }
  AdministrationNotificationSelectedComponent.ɵfac = function AdministrationNotificationSelectedComponent_Factory(t) {
    return new (t || AdministrationNotificationSelectedComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0));
  };
  AdministrationNotificationSelectedComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationNotificationSelectedComponent,
    selectors: [["app-administration-notification-selected"]],
    decls: 2,
    vars: 1,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_SELECTED_ADMINISTRATION_NOTIFICATION_SELECTED_COMPONENT_TS__1 = goog.getMsg(" services.views.modal.confirm.button.ACCEPT ");
        i18n_0 = MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_SELECTED_ADMINISTRATION_NOTIFICATION_SELECTED_COMPONENT_TS__1;
      } else {
        i18n_0 = "Aceptar";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_SELECTED_ADMINISTRATION_NOTIFICATION_SELECTED_COMPONENT_TS__3 = goog.getMsg(" config.views.config-restrictions.CANCEL ");
        i18n_2 = MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_SELECTED_ADMINISTRATION_NOTIFICATION_SELECTED_COMPONENT_TS__3;
      } else {
        i18n_2 = "Cancelar";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_884eb5e05bbb2e2658aa2fba276ed3c236f2aae738241f99bbec61239a23e422$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_SELECTED_ADMINISTRATION_NOTIFICATION_SELECTED_COMPONENT_TS___5 = goog.getMsg(" config.views.config-notifications.search.PLACE_HOLDER ");
        i18n_4 = MSG_EXTERNAL_884eb5e05bbb2e2658aa2fba276ed3c236f2aae738241f99bbec61239a23e422$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_SELECTED_ADMINISTRATION_NOTIFICATION_SELECTED_COMPONENT_TS___5;
      } else {
        i18n_4 = "Acci\xF3n";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_4d53fd4eaa964acfce4b138f081c10d43099577d33f2860c77edb0a70b0a1c11$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_SELECTED_ADMINISTRATION_NOTIFICATION_SELECTED_COMPONENT_TS___7 = goog.getMsg(" config.views.config-notifications.DESCRIPTION ");
        i18n_6 = MSG_EXTERNAL_4d53fd4eaa964acfce4b138f081c10d43099577d33f2860c77edb0a70b0a1c11$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_NOTIFICATION_SELECTED_ADMINISTRATION_NOTIFICATION_SELECTED_COMPONENT_TS___7;
      } else {
        i18n_6 = "DESCRIPCI\xD3N";
      }
      return [[1, "administration-notification-selected"], [4, "ngIf"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "select"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "actions"], ["mat-flat-button", "", "color", "primary", 1, "submit-button", 3, "click"], i18n_0, ["mat-flat-button", "", 3, "click"], i18n_2, ["mat-header-cell", ""], i18n_4, ["mat-cell", ""], i18n_6, [1, "show-information"], ["color", "primary", 3, "checked", "change"], ["mat-header-row", ""], ["mat-row", ""]];
    },
    template: function AdministrationNotificationSelectedComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0);
        core/* ɵɵtemplate */.YNc(1, AdministrationNotificationSelectedComponent_ng_container_1_Template, 22, 3, "ng-container", 1);
        core/* ɵɵelementEnd */.qZA();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.selectedNotifications.length);
      }
    },
    dependencies: [common/* NgIf */.O5, fesm2020_checkbox/* MatCheckbox */.oG, fesm2020_button/* MatButton */.lW, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, card/* MatCard */.a8, card/* MatCardContent */.dn],
    styles: [".actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.submit-button[_ngcontent-%COMP%]{margin:0 .25rem;color:#fff!important}"]
  });
  return AdministrationNotificationSelectedComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-user/administration-user.component.ts

















function AdministrationUserComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_38_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_59_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_67_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_68_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_74_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserComponent_mat_error_75_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 31)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
let AdministrationUserComponent = /*#__PURE__*/(() => {
  class AdministrationUserComponent {
    constructor(store, router, base64EncryptionUtilService) {
      this.store = store;
      this.router = router;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.createForm = new fesm2020_forms/* FormGroup */.cw({});
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      this.createForm = new fesm2020_forms/* FormGroup */.cw({
        username: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.maxLength */.kI.maxLength(20), fesm2020_forms/* Validators.pattern */.kI.pattern(/^\S*$/)]),
        identification: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.maxLength */.kI.maxLength(20), fesm2020_forms/* Validators.pattern */.kI.pattern(/^[a-zA-Z0-9]*$/)]),
        name: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.maxLength */.kI.maxLength(20), fesm2020_forms/* Validators.pattern */.kI.pattern(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)]),
        lastName: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.maxLength */.kI.maxLength(20), fesm2020_forms/* Validators.pattern */.kI.pattern(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)]),
        email: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.maxLength */.kI.maxLength(50), fesm2020_forms/* Validators.pattern */.kI.pattern(/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/)]),
        phone: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^\d+$/), fesm2020_forms/* Validators.maxLength */.kI.maxLength(20)]),
        charge: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.maxLength */.kI.maxLength(20), fesm2020_forms/* Validators.pattern */.kI.pattern(/[^\W_]/g)]),
        enterprise: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required]),
        Notification: new fesm2020_forms/* FormControl */.NI(false, [fesm2020_forms/* Validators.required */.kI.required]),
        notificationPhone: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^\d+$/), fesm2020_forms/* Validators.maxLength */.kI.maxLength(20)])
      });
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: store => {
          this.enterpriseControl.setValue(`${store.empresa?.id} - ${store.empresa?.companyName}`);
        },
        error: error => console.error(error)
      });
    }
    get usernameControl() {
      return this.createForm.controls["username"];
    }
    get identificationControl() {
      return this.createForm.controls["identification"];
    }
    get nameControl() {
      return this.createForm.controls["name"];
    }
    get lastNameControl() {
      return this.createForm.controls["lastName"];
    }
    get emailControl() {
      return this.createForm.controls["email"];
    }
    get phoneControl() {
      return this.createForm.controls["phone"];
    }
    get chargeControl() {
      return this.createForm.controls["charge"];
    }
    get enterpriseControl() {
      return this.createForm.controls["enterprise"];
    }
    get NotificationControl() {
      return this.createForm.controls["Notification"];
    }
    get notificationPhoneControl() {
      return this.createForm.controls["notificationPhone"];
    }
    submit() {
      const payload = {
        empresa: {
          id: ""
        },
        userName: this.usernameControl.value,
        licencia: this.identificationControl.value,
        nombres: this.nameControl.value,
        apellidos: this.lastNameControl.value,
        correo: this.emailControl.value,
        celular: this.phoneControl.value,
        cargo: this.chargeControl.value.trim(),
        telexNumber: this.notificationPhoneControl.value,
        info: this.NotificationControl.value,
        activo: "TRUE",
        shadowFlag: "0",
        createdBySAC: false
      };
      this.store.dispatch((0,administration_actions/* createUser */.r4)({
        body: payload,
        hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_CU")[0].notificable,
        notificationData: this.base64EncryptionUtilService.encrypt(JSON.stringify({
          userName: this.userInfo.userName,
          nit: this.userInfo.empresa?.id,
          fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,
          createdUserNit: payload.empresa.id,
          createdUserUserName: payload.userName,
          createdUserName: payload.nombres,
          createdUserLastName: payload.apellidos,
          createdUserEmail: payload.correo,
          createdUserSecondPasswordPhoneNumber: payload.telexNumber,
          createdUserPhoneNumber: payload.celular,
          createdUserNotificable: payload.info,
          createdUserCharge: payload.cargo // Cargo
        })),

        privilege: "ADM_GU_CU"
      }));
    }
    cancel() {
      this.router.navigate(["/", "administracion"]);
    }
  }
  AdministrationUserComponent.ɵfac = function AdministrationUserComponent_Factory(t) {
    return new (t || AdministrationUserComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L));
  };
  AdministrationUserComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationUserComponent,
    selectors: [["app-administration-user"]],
    decls: 87,
    vars: 24,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_22e9cce7b669515bb28be70f7a5005753d230672468adda491300e39b6dfb014$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_1 = goog.getMsg(" config.views.config-users.navbar.CREATE_NAME_USER_MESSAGE ");
        i18n_0 = MSG_EXTERNAL_22e9cce7b669515bb28be70f7a5005753d230672468adda491300e39b6dfb014$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_1;
      } else {
        i18n_0 = "Nombre de Usuario";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_cd2c25001897a13e3b2c1f4c6e7cd60c38aeb9439a1c5131ab06c613e9b05040$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_3 = goog.getMsg(" config.views.config-users.navbar.CREATE_ID_MESSAGE ");
        i18n_2 = MSG_EXTERNAL_cd2c25001897a13e3b2c1f4c6e7cd60c38aeb9439a1c5131ab06c613e9b05040$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_3;
      } else {
        i18n_2 = "Identificacion";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_fb0753b6e84fcc877ef5528598c9225426314844c7314a95e9224320a3fe5726$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_5 = goog.getMsg(" config.views.config-users.navbar.CREATE_NAME_MESSAGE ");
        i18n_4 = MSG_EXTERNAL_fb0753b6e84fcc877ef5528598c9225426314844c7314a95e9224320a3fe5726$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_5;
      } else {
        i18n_4 = "Nombres";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_d48921b9793740d9e653591761d4eb41e813f28283e937144751ea2510073827$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_7 = goog.getMsg(" config.views.config-users.navbar.CREATE_LAST_NAME_MESSAGE ");
        i18n_6 = MSG_EXTERNAL_d48921b9793740d9e653591761d4eb41e813f28283e937144751ea2510073827$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_7;
      } else {
        i18n_6 = "Apellidos";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_67b2d2fca87d290f283ea26317366092de5d6923a123c2c48f4e5117b86d9796$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_9 = goog.getMsg(" config.views.config-users.navbar.CREATE_MAIL_MESSAGE ");
        i18n_8 = MSG_EXTERNAL_67b2d2fca87d290f283ea26317366092de5d6923a123c2c48f4e5117b86d9796$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_9;
      } else {
        i18n_8 = "Correo Electr\xF3nico";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5b6f13abc3fa41590845f0892acf7ce19153f8ebb63d241034a7f816c2cbb802$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_11 = goog.getMsg(" config.views.config-users.navbar.CREATE_COMPANY_MESSAGE ");
        i18n_10 = MSG_EXTERNAL_5b6f13abc3fa41590845f0892acf7ce19153f8ebb63d241034a7f816c2cbb802$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_11;
      } else {
        i18n_10 = "Empresa";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_be9ebb72babaa74b4eb37a3ec266a54e0ea92680f5b34a5102299c07a1b8ad2d$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_13 = goog.getMsg(" config.views.config-users.navbar.CREATE_POSITION_MESSAGE ");
        i18n_12 = MSG_EXTERNAL_be9ebb72babaa74b4eb37a3ec266a54e0ea92680f5b34a5102299c07a1b8ad2d$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_13;
      } else {
        i18n_12 = "Cargo";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2d28ba41a63e2fa716cce9b1381d37f78a9d5f88557d30038276bcc9efe1745a$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_15 = goog.getMsg(" config.views.config-users.navbar.CREATE_CELPHONE_MESSAGE ");
        i18n_14 = MSG_EXTERNAL_2d28ba41a63e2fa716cce9b1381d37f78a9d5f88557d30038276bcc9efe1745a$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_15;
      } else {
        i18n_14 = "Celular";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_17 = goog.getMsg(" services.views.modal.confirm.button.ACCEPT ");
        i18n_16 = MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_17;
      } else {
        i18n_16 = "Aceptar";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_19 = goog.getMsg(" config.views.config-restrictions.CANCEL ");
        i18n_18 = MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_ADMINISTRATION_USER_COMPONENT_TS_19;
      } else {
        i18n_18 = "Cancelar";
      }
      return [[1, "administration-user"], [1, "title"], [1, "create-user-wrapper"], [1, "user-form-form", 3, "formGroup"], [1, "administration-user__input"], i18n_0, ["matInput", "", "type", "text", "formControlName", "username"], ["class", "administration-user-form__form-error", 4, "ngIf"], i18n_2, ["matInput", "", "type", "text", "formControlName", "identification"], i18n_4, ["matInput", "", "type", "text", "formControlName", "name"], i18n_6, ["matInput", "", "type", "text", "formControlName", "lastName"], i18n_8, ["matInput", "", "type", "text", "formControlName", "email"], i18n_10, ["matInput", "", "type", "text", "formControlName", "enterprise", 3, "readonly"], i18n_12, ["matInput", "", "type", "text", "formControlName", "charge"], i18n_14, ["matInput", "", "type", "text", "formControlName", "phone"], [1, "user-form-notification"], ["matInput", "", "type", "text", "formControlName", "notificationPhone"], ["formControlName", "Notification", "color", "primary"], [1, "administration-user-form__required"], [1, "user-form-actions"], ["mat-flat-button", "", "color", "primary", 1, "submit-button", 3, "appDoubleFactorAuthentication", "appDoubleFactorAPIGateway", "doubleFactorDestination", "doubleFactorCallback", "doubleFactorIncorrectCallback", "disabled"], i18n_16, ["mat-flat-button", "", 3, "click"], i18n_18, [1, "administration-user-form__form-error"]];
    },
    template: function AdministrationUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "h1", 1);
        core/* ɵɵtext */._uU(2, " Crear Usuario ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(3, "div", 2)(4, "mat-card")(5, "mat-card-content")(6, "form", 3)(7, "div")(8, "mat-form-field", 4)(9, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(10);
        core/* ɵɵi18n */.SDv(11, 5);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(12, "input", 6);
        core/* ɵɵtemplate */.YNc(13, AdministrationUserComponent_mat_error_13_Template, 4, 0, "mat-error", 7);
        core/* ɵɵtemplate */.YNc(14, AdministrationUserComponent_mat_error_14_Template, 4, 0, "mat-error", 7);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(15, "div")(16, "mat-form-field", 4)(17, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(18);
        core/* ɵɵi18n */.SDv(19, 8);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(20, "input", 9);
        core/* ɵɵtemplate */.YNc(21, AdministrationUserComponent_mat_error_21_Template, 4, 0, "mat-error", 7);
        core/* ɵɵtemplate */.YNc(22, AdministrationUserComponent_mat_error_22_Template, 4, 0, "mat-error", 7);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(23, "div")(24, "mat-form-field", 4)(25, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(26);
        core/* ɵɵi18n */.SDv(27, 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(28, "input", 11);
        core/* ɵɵtemplate */.YNc(29, AdministrationUserComponent_mat_error_29_Template, 4, 0, "mat-error", 7);
        core/* ɵɵtemplate */.YNc(30, AdministrationUserComponent_mat_error_30_Template, 4, 0, "mat-error", 7);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(31, "div")(32, "mat-form-field", 4)(33, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(34);
        core/* ɵɵi18n */.SDv(35, 12);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(36, "input", 13);
        core/* ɵɵtemplate */.YNc(37, AdministrationUserComponent_mat_error_37_Template, 4, 0, "mat-error", 7);
        core/* ɵɵtemplate */.YNc(38, AdministrationUserComponent_mat_error_38_Template, 4, 0, "mat-error", 7);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(39, "div")(40, "mat-form-field", 4)(41, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(42);
        core/* ɵɵi18n */.SDv(43, 14);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(44, "input", 15);
        core/* ɵɵtemplate */.YNc(45, AdministrationUserComponent_mat_error_45_Template, 4, 0, "mat-error", 7);
        core/* ɵɵtemplate */.YNc(46, AdministrationUserComponent_mat_error_46_Template, 4, 0, "mat-error", 7);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(47, "div")(48, "mat-form-field", 4)(49, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(50);
        core/* ɵɵi18n */.SDv(51, 16);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(52, "input", 17);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(53, "div")(54, "mat-form-field", 4)(55, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(56);
        core/* ɵɵi18n */.SDv(57, 18);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(58, "input", 19);
        core/* ɵɵtemplate */.YNc(59, AdministrationUserComponent_mat_error_59_Template, 4, 0, "mat-error", 7);
        core/* ɵɵtemplate */.YNc(60, AdministrationUserComponent_mat_error_60_Template, 4, 0, "mat-error", 7);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(61, "div")(62, "mat-form-field", 4)(63, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(64);
        core/* ɵɵi18n */.SDv(65, 20);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(66, "input", 21);
        core/* ɵɵtemplate */.YNc(67, AdministrationUserComponent_mat_error_67_Template, 4, 0, "mat-error", 7);
        core/* ɵɵtemplate */.YNc(68, AdministrationUserComponent_mat_error_68_Template, 4, 0, "mat-error", 7);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(69, "div", 22)(70, "mat-form-field", 4)(71, "mat-label");
        core/* ɵɵtext */._uU(72, "Celular segunda clave");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(73, "input", 23);
        core/* ɵɵtemplate */.YNc(74, AdministrationUserComponent_mat_error_74_Template, 4, 0, "mat-error", 7);
        core/* ɵɵtemplate */.YNc(75, AdministrationUserComponent_mat_error_75_Template, 4, 0, "mat-error", 7);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(76, "mat-checkbox", 24);
        core/* ɵɵtext */._uU(77, " Desea que el usuario reciba correos de notificaci\u00F3n de transacciones? ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(78, "span", 25);
        core/* ɵɵtext */._uU(79, " Todos los campos con (*) son requeridos ");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(80, "div", 26)(81, "button", 27);
        core/* ɵɵelementContainerStart */.ynx(82);
        core/* ɵɵi18n */.SDv(83, 28);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(84, "button", 29);
        core/* ɵɵlistener */.NdJ("click", function AdministrationUserComponent_Template_button_click_84_listener() {
          return ctx.cancel();
        });
        core/* ɵɵelementContainerStart */.ynx(85);
        core/* ɵɵi18n */.SDv(86, 30);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA()()()()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.createForm);
        core/* ɵɵadvance */.xp6(7);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.usernameControl.errors && ctx.usernameControl.touched && ctx.usernameControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.usernameControl.errors && (ctx.usernameControl.errors["pattern"] || ctx.usernameControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(7);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.identificationControl.errors && ctx.identificationControl.touched && ctx.identificationControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.identificationControl.errors && (ctx.identificationControl.errors["pattern"] || ctx.identificationControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(7);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.nameControl.errors && ctx.nameControl.touched && ctx.nameControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.nameControl.errors && (ctx.nameControl.errors["pattern"] || ctx.nameControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(7);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.lastNameControl.errors && ctx.lastNameControl.touched && ctx.lastNameControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.lastNameControl.errors && (ctx.lastNameControl.errors["pattern"] || ctx.lastNameControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(7);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.emailControl.errors && ctx.emailControl.touched && ctx.emailControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.emailControl.errors && (ctx.emailControl.errors["pattern"] || ctx.emailControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("readonly", true);
        core/* ɵɵadvance */.xp6(7);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.chargeControl.errors && ctx.chargeControl.touched && ctx.chargeControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.chargeControl.errors && (ctx.chargeControl.errors["pattern"] || ctx.chargeControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(7);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.phoneControl.errors && ctx.phoneControl.touched && ctx.phoneControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.phoneControl.errors && (ctx.phoneControl.errors["pattern"] || ctx.phoneControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.notificationPhoneControl.errors && ctx.notificationPhoneControl.touched && ctx.notificationPhoneControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.notificationPhoneControl.errors && (ctx.notificationPhoneControl.errors["pattern"] || ctx.notificationPhoneControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("appDoubleFactorAuthentication", "ADM_GU_CU")("appDoubleFactorAPIGateway", ctx.userInfo)("doubleFactorDestination", "destination")("doubleFactorCallback", ctx.submit.bind(ctx))("doubleFactorIncorrectCallback", ctx.cancel.bind(ctx))("disabled", ctx.createForm.invalid);
      }
    },
    dependencies: [common/* NgIf */.O5, icon/* MatIcon */.Hw, fesm2020_checkbox/* MatCheckbox */.oG, fesm2020_button/* MatButton */.lW, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatError */.TO, input/* MatInput */.Nt, card/* MatCard */.a8, card/* MatCardContent */.dn, fesm2020_forms/* ɵNgNoValidate */._Y, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* NgControlStatusGroup */.JL, fesm2020_forms/* FormGroupDirective */.sg, fesm2020_forms/* FormControlName */.u, double_factor_authentication_directive/* DoubleFactorAuthenticationDirective */.A],
    styles: [".title[_ngcontent-%COMP%]{color:#666;margin:0;padding:1rem}.administration-user-form__required[_ngcontent-%COMP%]{font-size:.7rem;color:#666}.create-user-wrapper[_ngcontent-%COMP%]{padding:.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:1fr auto}.administration-user__input[_ngcontent-%COMP%]{width:100%}.administration-user-form__form-error[_ngcontent-%COMP%]{color:#d63031;margin:0;display:flex;align-items:center}.submit-button[_ngcontent-%COMP%]{margin:0 .25rem;color:#fff!important}.user-form-notification[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr}.user-form-notification-icon[_ngcontent-%COMP%]{color:#92b975!important}.user-form-actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.user-form-form[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;column-gap:1rem}  .default-unselected .mdc-tab:first-child{display:none}.adminsitration__user-options-icon[_ngcontent-%COMP%]{width:1rem}.adminsitration__user-options-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#0009}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .adminsitration__user-options-icon path, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .adminsitration__user-options-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#66bb6a}"]
  });
  return AdministrationUserComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-user-form/administration-user-form.component.ts





















function AdministrationUserFormComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_mat_error_36_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_mat_error_43_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_mat_error_49_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_mat_error_56_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_mat_error_57_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_ng_container_59_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-icon", 32);
    core/* ɵɵtext */._uU(1, "lock");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_ng_container_59_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Requerido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_ng_container_59_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error", 28)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "close");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3, " Campo Invalido ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_ng_container_59_ng_container_8_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 34);
    core/* ɵɵlistener */.NdJ("click", function AdministrationUserFormComponent_ng_container_59_ng_container_8_button_1_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r24);
      const ctx_r23 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r23.updateNotificationPhoneState("true"));
    });
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 35);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_ng_container_59_ng_container_8_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 34);
    core/* ɵɵlistener */.NdJ("click", function AdministrationUserFormComponent_ng_container_59_ng_container_8_button_2_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r26);
      const ctx_r25 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r25.updateNotificationPhoneState("false"));
    });
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 36);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserFormComponent_ng_container_59_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, AdministrationUserFormComponent_ng_container_59_ng_container_8_button_1_Template, 3, 0, "button", 33);
    core/* ɵɵtemplate */.YNc(2, AdministrationUserFormComponent_ng_container_59_ng_container_8_button_2_Template, 3, 0, "button", 33);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r20 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r20.user.shadowFlag === "0");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r20.user.shadowFlag === "1");
  }
}
const _c22 = function (a0) {
  return [a0];
};
function AdministrationUserFormComponent_ng_container_59_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "mat-form-field")(2, "mat-label");
    core/* ɵɵtext */._uU(3, "Celular segunda clave");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(4, "input", 29);
    core/* ɵɵtemplate */.YNc(5, AdministrationUserFormComponent_ng_container_59_mat_icon_5_Template, 2, 0, "mat-icon", 30);
    core/* ɵɵtemplate */.YNc(6, AdministrationUserFormComponent_ng_container_59_mat_error_6_Template, 4, 0, "mat-error", 6);
    core/* ɵɵtemplate */.YNc(7, AdministrationUserFormComponent_ng_container_59_mat_error_7_Template, 4, 0, "mat-error", 6);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(8, AdministrationUserFormComponent_ng_container_59_ng_container_8_Template, 3, 2, "ng-container", 31);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r14 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("readonly", ctx_r14.user.shadowFlag === "1");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r14.user.shadowFlag === "1");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r14.notificationPhoneControl.errors && ctx_r14.notificationPhoneControl.touched && ctx_r14.notificationPhoneControl.errors["required"]);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r14.notificationPhoneControl.errors && (ctx_r14.notificationPhoneControl.errors["pattern"] || ctx_r14.notificationPhoneControl.errors["maxlength"]));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(5, _c22, ctx_r14.privileges.ADM_GU_EU_LOCK_MOBILE));
  }
}
function AdministrationUserFormComponent_button_65_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "button", 37);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 38);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r15 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵproperty */.Q6J("appDoubleFactorAuthentication", "ADM_GU_EU")("appDoubleFactorAPIGateway", ctx_r15.userInfo)("doubleFactorDestination", "destination")("doubleFactorCallback", ctx_r15.submit.bind(ctx_r15))("doubleFactorIncorrectCallback", ctx_r15.cancel.bind(ctx_r15))("disabled", ctx_r15.createForm.invalid);
  }
}
function AdministrationUserFormComponent_button_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 34);
    core/* ɵɵlistener */.NdJ("click", function AdministrationUserFormComponent_button_66_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r28);
      const ctx_r27 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r27.disableUser());
    });
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 39);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
let AdministrationUserFormComponent = /*#__PURE__*/(() => {
  class AdministrationUserFormComponent {
    constructor(router, store, matSnackBar, base64EncryptionUtilService) {
      this.router = router;
      this.store = store;
      this.matSnackBar = matSnackBar;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.privileges = privileges_enum/* privileges */.U;
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      this.createForm = new fesm2020_forms/* FormGroup */.cw({
        username: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.maxLength */.kI.maxLength(20), fesm2020_forms/* Validators.pattern */.kI.pattern(/^\S*$/)]),
        identification: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.maxLength */.kI.maxLength(20), fesm2020_forms/* Validators.pattern */.kI.pattern(/^[a-zA-Z0-9]*$/)]),
        name: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.maxLength */.kI.maxLength(20), fesm2020_forms/* Validators.pattern */.kI.pattern(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)]),
        lastName: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.maxLength */.kI.maxLength(20), fesm2020_forms/* Validators.pattern */.kI.pattern(/^[a-zA-Z_]+( [a-zA-Z_]+)*$/)]),
        email: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.maxLength */.kI.maxLength(50), fesm2020_forms/* Validators.pattern */.kI.pattern(/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/)]),
        phone: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^\d+$/), fesm2020_forms/* Validators.maxLength */.kI.maxLength(20)]),
        charge: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.maxLength */.kI.maxLength(20), fesm2020_forms/* Validators.pattern */.kI.pattern(/[^\W_]/g)]),
        enterprise: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required]),
        Notification: new fesm2020_forms/* FormControl */.NI(false, [fesm2020_forms/* Validators.required */.kI.required]),
        notificationPhone: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^[0-9*]*$/), fesm2020_forms/* Validators.maxLength */.kI.maxLength(20)])
      });
      this.store.select(administrationFeatureSelector).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: store => {
          this.user = store.selectedUser.filter(item => item.userName === store.selectedUserName)[0];
          if (this.user) {
            this.usernameControl.setValue(this.user.userName);
            this.identificationControl.setValue(this.user.licencia);
            this.nameControl.setValue(this.user.nombres.trim());
            this.lastNameControl.setValue(this.user.apellidos.trim());
            this.emailControl.setValue(this.user.correo.trim());
            this.phoneControl.setValue(this.user.celular);
            this.chargeControl.setValue(this.user.cargo.trim());
            this.enterpriseControl.setValue(`${this.user.empresa.id} - ${this.user.empresa.nombre}`);
            this.NotificationControl.setValue("true" === this.user.info ? this.user.info : false);
            this.notificationPhoneControl.setValue(this.user.telexNumber);
          }
        },
        error: error => console.error(error)
      });
    }
    get usernameControl() {
      return this.createForm.controls["username"];
    }
    get identificationControl() {
      return this.createForm.controls["identification"];
    }
    get nameControl() {
      return this.createForm.controls["name"];
    }
    get lastNameControl() {
      return this.createForm.controls["lastName"];
    }
    get emailControl() {
      return this.createForm.controls["email"];
    }
    get phoneControl() {
      return this.createForm.controls["phone"];
    }
    get chargeControl() {
      return this.createForm.controls["charge"];
    }
    get enterpriseControl() {
      return this.createForm.controls["enterprise"];
    }
    get NotificationControl() {
      return this.createForm.controls["Notification"];
    }
    get notificationPhoneControl() {
      return this.createForm.controls["notificationPhone"];
    }
    submit() {
      const payload = Object.assign({}, this.user);
      payload.userName = this.usernameControl.value;
      payload.licencia = this.identificationControl.value;
      payload.nombres = this.nameControl.value;
      payload.apellidos = this.lastNameControl.value;
      payload.correo = this.emailControl.value;
      payload.celular = this.phoneControl.value;
      payload.cargo = this.chargeControl.value.trim();
      payload.info = this.NotificationControl.value;
      if (this.notificationPhoneControl.value.includes("*")) payload.telexNumber = this.user.telexNumber;else if (this.notificationPhoneControl.value.includes("*")) {
        if (this.notificationPhoneControl.value === this.user.telexNumber) {
          payload.telexNumber = this.user.telexNumber;
        } else {
          this.matSnackBar.open("El número de telefono de notificación es invalido", "", {
            verticalPosition: "top",
            duration: 3000,
            panelClass: ["error-snackbar"]
          });
        }
      } else {
        payload.telexNumber = this.notificationPhoneControl.value;
      }
      //console.log("hasnotificacion: ", this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_EU")[0].notificable)
      //has notificacion se pone true, confirmar
      //hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_EU")[0].notificable
      let isActive = payload.activo;
      let celSecondPasswordLock = payload.shadowFlag;
      if (isActive === "TRUE") {
        isActive = "Si";
      } else {
        isActive = "No";
      }
      if (celSecondPasswordLock === "1") {
        celSecondPasswordLock = "Si";
      } else {
        celSecondPasswordLock = "No";
      }
      this.store.dispatch((0,administration_actions/* updateUser */.Nq)({
        body: payload,
        hasNotification: true,
        notificationData: this.base64EncryptionUtilService.encrypt(JSON.stringify({
          userNameLogueado: this.userInfo.userName,
          nit: this.userInfo.empresa?.id,
          userName: payload.userName,
          name: payload.nombres,
          apellidos: payload.apellidos,
          fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,
          updatedUserNit: payload.empresa.id,
          email: payload.correo,
          celularProtegido: payload.telexNumber,
          celular: payload.celular,
          isNotification: payload.info ? "Si" : "No",
          cargo: payload.cargo,
          isActive: isActive,
          cedula: payload.licencia,
          isSecondPasswordSMS: celSecondPasswordLock //celular segunda clave bloqueado, si o no
        })),

        privilege: "ADM_GU_EU"
      }));
    }
    updateNotificationPhoneState(lock) {
      const payload = {
        "isLocked": lock,
        "mobileNotification": this.user.telexNumber,
        "username": this.user.userName
      };
      this.store.dispatch((0,administration_actions/* updateNotificationData */.jY)({
        body: payload,
        user: this.user.userName
      }));
    }
    disableUser() {
      const payload = {
        userName: this.user.userName
      };
      this.store.dispatch((0,administration_actions/* disableUser */.B9)({
        body: payload
      }));
      this.cancel();
    }
    goToModule(module) {
      this.router.navigate(["/", module]).then(() => {
        const currentRoute = this.router.url;
        this.router.navigateByUrl("/administration", {
          skipLocationChange: true
        }).then(() => this.router.navigate([currentRoute]));
      });
    }
    cancel() {
      this.router.navigate(["/", "administracion"]);
    }
  }
  AdministrationUserFormComponent.ɵfac = function AdministrationUserFormComponent_Factory(t) {
    return new (t || AdministrationUserFormComponent)(core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L));
  };
  AdministrationUserFormComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationUserFormComponent,
    selectors: [["app-administration-user-form"]],
    decls: 70,
    vars: 24,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_22e9cce7b669515bb28be70f7a5005753d230672468adda491300e39b6dfb014$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_1 = goog.getMsg(" config.views.config-users.navbar.CREATE_NAME_USER_MESSAGE ");
        i18n_0 = MSG_EXTERNAL_22e9cce7b669515bb28be70f7a5005753d230672468adda491300e39b6dfb014$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_1;
      } else {
        i18n_0 = "Nombre de Usuario";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_cd2c25001897a13e3b2c1f4c6e7cd60c38aeb9439a1c5131ab06c613e9b05040$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_3 = goog.getMsg(" config.views.config-users.navbar.CREATE_ID_MESSAGE ");
        i18n_2 = MSG_EXTERNAL_cd2c25001897a13e3b2c1f4c6e7cd60c38aeb9439a1c5131ab06c613e9b05040$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_3;
      } else {
        i18n_2 = "Identificacion";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_fb0753b6e84fcc877ef5528598c9225426314844c7314a95e9224320a3fe5726$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_5 = goog.getMsg(" config.views.config-users.navbar.CREATE_NAME_MESSAGE ");
        i18n_4 = MSG_EXTERNAL_fb0753b6e84fcc877ef5528598c9225426314844c7314a95e9224320a3fe5726$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_5;
      } else {
        i18n_4 = "Nombres";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_d48921b9793740d9e653591761d4eb41e813f28283e937144751ea2510073827$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_7 = goog.getMsg(" config.views.config-users.navbar.CREATE_LAST_NAME_MESSAGE ");
        i18n_6 = MSG_EXTERNAL_d48921b9793740d9e653591761d4eb41e813f28283e937144751ea2510073827$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_7;
      } else {
        i18n_6 = "Apellidos";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_67b2d2fca87d290f283ea26317366092de5d6923a123c2c48f4e5117b86d9796$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_9 = goog.getMsg(" config.views.config-users.navbar.CREATE_MAIL_MESSAGE ");
        i18n_8 = MSG_EXTERNAL_67b2d2fca87d290f283ea26317366092de5d6923a123c2c48f4e5117b86d9796$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_9;
      } else {
        i18n_8 = "Correo Electr\xF3nico";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5b6f13abc3fa41590845f0892acf7ce19153f8ebb63d241034a7f816c2cbb802$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_11 = goog.getMsg(" config.views.config-users.navbar.CREATE_COMPANY_MESSAGE ");
        i18n_10 = MSG_EXTERNAL_5b6f13abc3fa41590845f0892acf7ce19153f8ebb63d241034a7f816c2cbb802$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_11;
      } else {
        i18n_10 = "Empresa";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_be9ebb72babaa74b4eb37a3ec266a54e0ea92680f5b34a5102299c07a1b8ad2d$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_13 = goog.getMsg(" config.views.config-users.navbar.CREATE_POSITION_MESSAGE ");
        i18n_12 = MSG_EXTERNAL_be9ebb72babaa74b4eb37a3ec266a54e0ea92680f5b34a5102299c07a1b8ad2d$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_13;
      } else {
        i18n_12 = "Cargo";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2d28ba41a63e2fa716cce9b1381d37f78a9d5f88557d30038276bcc9efe1745a$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_15 = goog.getMsg(" config.views.config-users.navbar.CREATE_CELPHONE_MESSAGE ");
        i18n_14 = MSG_EXTERNAL_2d28ba41a63e2fa716cce9b1381d37f78a9d5f88557d30038276bcc9efe1745a$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_15;
      } else {
        i18n_14 = "Celular";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_17 = goog.getMsg(" config.views.config-restrictions.CANCEL ");
        i18n_16 = MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS_17;
      } else {
        i18n_16 = "Cancelar";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2452a1703f387dd4c465accfa95396d1f2c4b5604a2d199c37e776ae73723e4d$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS____19 = goog.getMsg(" config.views.config-users-mobile.LOCK ");
        i18n_18 = MSG_EXTERNAL_2452a1703f387dd4c465accfa95396d1f2c4b5604a2d199c37e776ae73723e4d$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS____19;
      } else {
        i18n_18 = "Bloquear Celular";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_fb27302e87c513116d7ee83a3d59ba7793bbfa690a3eae6627011386eb844d1a$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS____21 = goog.getMsg(" config.views.config-users-mobile.UNLOCK ");
        i18n_20 = MSG_EXTERNAL_fb27302e87c513116d7ee83a3d59ba7793bbfa690a3eae6627011386eb844d1a$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS____21;
      } else {
        i18n_20 = "Desbloquear Celular";
      }
      let i18n_23;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS__24 = goog.getMsg(" services.views.modal.confirm.button.ACCEPT ");
        i18n_23 = MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS__24;
      } else {
        i18n_23 = "Aceptar";
      }
      let i18n_25;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_237a71a05086e04e78765c61475ee15f5973f903f0e247475133613b7207cf32$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS__26 = goog.getMsg(" config.views.config-users.navbar.EDIT_INACTIVE_MESSAGE ");
        i18n_25 = MSG_EXTERNAL_237a71a05086e04e78765c61475ee15f5973f903f0e247475133613b7207cf32$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_FORM_ADMINISTRATION_USER_FORM_COMPONENT_TS__26;
      } else {
        i18n_25 = "Inactivar";
      }
      return [[1, "create-user-wrapper"], [1, "user-form-form", 3, "formGroup"], i18n_0, ["matInput", "", "type", "text", "formControlName", "username", 3, "readonly"], i18n_2, ["matInput", "", "type", "text", "formControlName", "identification"], ["class", "administration-user-form__form-error", 4, "ngIf"], i18n_4, ["matInput", "", "type", "text", "formControlName", "name"], i18n_6, ["matInput", "", "type", "text", "formControlName", "lastName"], i18n_8, ["matInput", "", "type", "text", "formControlName", "email"], i18n_10, ["matInput", "", "type", "text", "formControlName", "enterprise", 3, "readonly"], i18n_12, ["matInput", "", "type", "text", "formControlName", "charge"], i18n_14, ["matInput", "", "type", "text", "formControlName", "phone"], [1, "user-form-notification"], [4, "ngIf"], ["formControlName", "Notification", "color", "primary"], [1, "administration-user-form__required"], [1, "user-form-actions"], ["mat-flat-button", "", "color", "primary", "class", "submit-button", 3, "appDoubleFactorAuthentication", "appDoubleFactorAPIGateway", "doubleFactorDestination", "doubleFactorCallback", "doubleFactorIncorrectCallback", "disabled", 4, "permissions"], ["mat-flat-button", "", "color", "primary", "class", "submit-button", 3, "click", 4, "permissions"], ["mat-flat-button", "", 3, "click"], i18n_16, [1, "administration-user-form__form-error"], ["matInput", "", "type", "text", "formControlName", "notificationPhone", 3, "readonly"], ["matSuffix", "", "class", "user-form-notification-icon", 4, "ngIf"], [4, "permissions"], ["matSuffix", "", 1, "user-form-notification-icon"], ["mat-flat-button", "", "color", "primary", "class", "submit-button", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "submit-button", 3, "click"], i18n_18, i18n_20, ["mat-flat-button", "", "color", "primary", 1, "submit-button", 3, "appDoubleFactorAuthentication", "appDoubleFactorAPIGateway", "doubleFactorDestination", "doubleFactorCallback", "doubleFactorIncorrectCallback", "disabled"], i18n_23, i18n_25];
    },
    template: function AdministrationUserFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "mat-card")(2, "mat-card-content")(3, "form", 1)(4, "mat-form-field")(5, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(6);
        core/* ɵɵi18n */.SDv(7, 2);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(8, "input", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(9, "mat-form-field")(10, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(11);
        core/* ɵɵi18n */.SDv(12, 4);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(13, "input", 5);
        core/* ɵɵtemplate */.YNc(14, AdministrationUserFormComponent_mat_error_14_Template, 4, 0, "mat-error", 6);
        core/* ɵɵtemplate */.YNc(15, AdministrationUserFormComponent_mat_error_15_Template, 4, 0, "mat-error", 6);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(16, "mat-form-field")(17, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(18);
        core/* ɵɵi18n */.SDv(19, 7);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(20, "input", 8);
        core/* ɵɵtemplate */.YNc(21, AdministrationUserFormComponent_mat_error_21_Template, 4, 0, "mat-error", 6);
        core/* ɵɵtemplate */.YNc(22, AdministrationUserFormComponent_mat_error_22_Template, 4, 0, "mat-error", 6);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(23, "mat-form-field")(24, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(25);
        core/* ɵɵi18n */.SDv(26, 9);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(27, "input", 10);
        core/* ɵɵtemplate */.YNc(28, AdministrationUserFormComponent_mat_error_28_Template, 4, 0, "mat-error", 6);
        core/* ɵɵtemplate */.YNc(29, AdministrationUserFormComponent_mat_error_29_Template, 4, 0, "mat-error", 6);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(30, "mat-form-field")(31, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(32);
        core/* ɵɵi18n */.SDv(33, 11);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(34, "input", 12);
        core/* ɵɵtemplate */.YNc(35, AdministrationUserFormComponent_mat_error_35_Template, 4, 0, "mat-error", 6);
        core/* ɵɵtemplate */.YNc(36, AdministrationUserFormComponent_mat_error_36_Template, 4, 0, "mat-error", 6);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(37, "mat-form-field")(38, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(39);
        core/* ɵɵi18n */.SDv(40, 13);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(41, "input", 14);
        core/* ɵɵtemplate */.YNc(42, AdministrationUserFormComponent_mat_error_42_Template, 4, 0, "mat-error", 6);
        core/* ɵɵtemplate */.YNc(43, AdministrationUserFormComponent_mat_error_43_Template, 4, 0, "mat-error", 6);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(44, "mat-form-field")(45, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(46);
        core/* ɵɵi18n */.SDv(47, 15);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(48, "input", 16);
        core/* ɵɵtemplate */.YNc(49, AdministrationUserFormComponent_mat_error_49_Template, 4, 0, "mat-error", 6);
        core/* ɵɵtemplate */.YNc(50, AdministrationUserFormComponent_mat_error_50_Template, 4, 0, "mat-error", 6);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(51, "mat-form-field")(52, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(53);
        core/* ɵɵi18n */.SDv(54, 17);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(55, "input", 18);
        core/* ɵɵtemplate */.YNc(56, AdministrationUserFormComponent_mat_error_56_Template, 4, 0, "mat-error", 6);
        core/* ɵɵtemplate */.YNc(57, AdministrationUserFormComponent_mat_error_57_Template, 4, 0, "mat-error", 6);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(58, "div", 19);
        core/* ɵɵtemplate */.YNc(59, AdministrationUserFormComponent_ng_container_59_Template, 9, 7, "ng-container", 20);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(60, "mat-checkbox", 21);
        core/* ɵɵtext */._uU(61, " Desea que el usuario reciba correos de notificaci\u00F3n de transacciones? ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(62, "span", 22);
        core/* ɵɵtext */._uU(63, " Todos los campos con (*) son requeridos ");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(64, "div", 23);
        core/* ɵɵtemplate */.YNc(65, AdministrationUserFormComponent_button_65_Template, 3, 6, "button", 24);
        core/* ɵɵtemplate */.YNc(66, AdministrationUserFormComponent_button_66_Template, 3, 0, "button", 25);
        core/* ɵɵelementStart */.TgZ(67, "button", 26);
        core/* ɵɵlistener */.NdJ("click", function AdministrationUserFormComponent_Template_button_click_67_listener() {
          return ctx.cancel();
        });
        core/* ɵɵelementContainerStart */.ynx(68);
        core/* ɵɵi18n */.SDv(69, 27);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA()()()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.createForm);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("readonly", true);
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.identificationControl.errors && ctx.identificationControl.touched && ctx.identificationControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.identificationControl.errors && (ctx.identificationControl.errors["pattern"] || ctx.identificationControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.nameControl.errors && ctx.nameControl.touched && ctx.nameControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.nameControl.errors && (ctx.nameControl.errors["pattern"] || ctx.nameControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.lastNameControl.errors && ctx.lastNameControl.touched && ctx.lastNameControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.lastNameControl.errors && (ctx.lastNameControl.errors["pattern"] || ctx.lastNameControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.emailControl.errors && ctx.emailControl.touched && ctx.emailControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.emailControl.errors && (ctx.emailControl.errors["pattern"] || ctx.emailControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("readonly", true);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.enterpriseControl.errors && ctx.enterpriseControl.touched && ctx.enterpriseControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.enterpriseControl.errors && (ctx.enterpriseControl.errors["pattern"] || ctx.enterpriseControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.chargeControl.errors && ctx.chargeControl.touched && ctx.chargeControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.chargeControl.errors && (ctx.chargeControl.errors["pattern"] || ctx.chargeControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.phoneControl.errors && ctx.phoneControl.touched && ctx.phoneControl.errors["required"]);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.phoneControl.errors && (ctx.phoneControl.errors["pattern"] || ctx.phoneControl.errors["maxlength"]));
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.user);
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(20, _c22, ctx.privileges.ADM_GU_EU_SAVE));
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(22, _c22, ctx.privileges.ADM_GU_EU_DISABLE_USER));
      }
    },
    dependencies: [common/* NgIf */.O5, icon/* MatIcon */.Hw, fesm2020_checkbox/* MatCheckbox */.oG, fesm2020_button/* MatButton */.lW, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatError */.TO, form_field/* MatSuffix */.R9, input/* MatInput */.Nt, card/* MatCard */.a8, card/* MatCardContent */.dn, fesm2020_forms/* ɵNgNoValidate */._Y, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* NgControlStatusGroup */.JL, fesm2020_forms/* FormGroupDirective */.sg, fesm2020_forms/* FormControlName */.u, permissions_directive/* PermissionsDirective */.$, double_factor_authentication_directive/* DoubleFactorAuthenticationDirective */.A],
    styles: [".create-user-wrapper[_ngcontent-%COMP%]{padding:.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:1fr auto}.submit-button[_ngcontent-%COMP%]{margin:0 .25rem;color:#fff!important}.administration-user-form__input[_ngcontent-%COMP%]{width:100%}.administration-user-form__form-error[_ngcontent-%COMP%]{color:#d63031;margin:0;display:flex;align-items:center}.user-form-notification[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr}.user-form-notification-icon[_ngcontent-%COMP%]{color:#92b975!important}.user-form-actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.user-form-form[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;column-gap:1rem}"]
  });
  return AdministrationUserFormComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-users-assign-roles/administration-users-assign-roles.component.ts



















function AdministrationUsersAssignRolesComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 19);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 20);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUsersAssignRolesComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 21);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r9 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r9.code);
  }
}
function AdministrationUsersAssignRolesComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 19);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 22);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUsersAssignRolesComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 21);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r10.descripcion);
  }
}
function AdministrationUsersAssignRolesComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 23);
  }
}
function AdministrationUsersAssignRolesComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 21)(1, "mat-checkbox", 24);
    core/* ɵɵlistener */.NdJ("change", function AdministrationUsersAssignRolesComponent_td_20_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r13);
      const element_r11 = restoredCtx.$implicit;
      const ctx_r12 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r12.matCheckboxCheck($event.checked, element_r11));
    });
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("checked", element_r11.selected);
  }
}
function AdministrationUsersAssignRolesComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 25);
  }
}
function AdministrationUsersAssignRolesComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 26);
  }
}
let AdministrationUsersAssignRolesComponent = /*#__PURE__*/(() => {
  class AdministrationUsersAssignRolesComponent {
    constructor(store, router, base64EncryptionUtilService) {
      this.store = store;
      this.router = router;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.apiGatewaySubscription = new Subscription/* Subscription */.w0();
      this.administrationSubscription = new Subscription/* Subscription */.w0();
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.displayedColumns = ["code", "descripcion", "state"];
      this.userRoles = [];
      this.selectedRoles = [];
      this.defaultRoles = [];
      this.adminRole = null;
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      this.apiGatewaySubscription = this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: store => {
          this.userInfo = store;
          this.store.dispatch((0,administration_actions/* getCompanyRoles */.kn)({
            user: store.empresa?.id
          }));
        },
        error: error => console.error(error)
      });
      this.administrationSubscription = this.store.select(administrationFeatureSelector).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: store => {
          const companyRoles = store.companyRoles.filter(item => !item.businessCategory);
          this.defaultRoles = store.companyRoles.filter(item => item.businessCategory === "default");
          this.user = store.selectedUser.filter(item => item.userName === store.selectedUserName)[0];
          const selectedRoles = companyRoles.map(value => {
            const newValue = Object.assign({}, value);
            this.user.roles.forEach(value => {
              if (value.nombre === newValue.nombre) {
                this.selectedRoles = [...this.selectedRoles, newValue];
                newValue.selected = true;
              }
              if (value.nombre === "administrador_portal") this.adminRole = store.companyRoles.filter(item => item.businessCategory === "Admin")[0];
            });
            return newValue;
          });
          this.dataSource = new table/* MatTableDataSource */.by(selectedRoles);
          this.dataSource.sort = this.sort;
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.apiGatewaySubscription.unsubscribe();
      this.administrationSubscription.unsubscribe();
    }
    filter(event) {
      const filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    matCheckboxCheck(checked, role) {
      if (checked) {
        this.selectedRoles = [...this.selectedRoles, role];
      } else {
        this.selectedRoles = this.selectedRoles.filter(value => value.nombre !== role.nombre);
      }
    }
    limpiarCadena(cadena) {
      return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    submit() {
      const payload = {
        userName: this.user.userName,
        correo: this.user.correo,
        roles: [...this.defaultRoles, ...this.selectedRoles]
      };
      if (this.adminRole) payload.roles = [...payload.roles, this.adminRole];
      //hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_AR")[0].notificable
      //console.log("hasnotification: ", this.userInfo.privileges.filter(value => value.privilegeId === "ADM_GU_AR")[0].notificable)
      const rolesUnicos = {};
      payload.roles.forEach(role => {
        role.descripcion = this.limpiarCadena(role.descripcion);
        rolesUnicos[role.nombre] = role;
      });
      const rolesSinDuplicados = Object.values(rolesUnicos);
      this.store.dispatch((0,administration_actions/* assignRoles */.lR)({
        payload,
        hasNotification: true,
        notificationData: this.base64EncryptionUtilService.encrypt(JSON.stringify({
          userNameLogueado: this.userInfo.userName,
          nit: this.userInfo.empresa?.id,
          userName: payload.userName,
          fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,
          roles: rolesSinDuplicados // Roles asignados al usuario
        })),

        privilege: "ADM_GU_AR"
      }));
      this.store.dispatch((0,administration_actions/* setCompanyRoles */.e8)({
        roles: []
      }));
      this.cancel();
    }
    cancel() {
      this.router.navigate(['/', 'administracion']);
    }
  }
  AdministrationUsersAssignRolesComponent.ɵfac = function AdministrationUsersAssignRolesComponent_Factory(t) {
    return new (t || AdministrationUsersAssignRolesComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L));
  };
  AdministrationUsersAssignRolesComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationUsersAssignRolesComponent,
    selectors: [["app-administration-users-assign-roles"]],
    viewQuery: function AdministrationUsersAssignRolesComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
      }
    },
    decls: 30,
    vars: 9,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_ASSIGN_ROLES_ADMINISTRATION_USERS_ASSIGN_ROLES_COMPONENT_TS_1 = goog.getMsg(" services.views.modal.confirm.button.ACCEPT ");
        i18n_0 = MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_ASSIGN_ROLES_ADMINISTRATION_USERS_ASSIGN_ROLES_COMPONENT_TS_1;
      } else {
        i18n_0 = "Aceptar";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_ASSIGN_ROLES_ADMINISTRATION_USERS_ASSIGN_ROLES_COMPONENT_TS_3 = goog.getMsg(" config.views.config-restrictions.CANCEL ");
        i18n_2 = MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_ASSIGN_ROLES_ADMINISTRATION_USERS_ASSIGN_ROLES_COMPONENT_TS_3;
      } else {
        i18n_2 = "Cancelar";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_83c4877793a0831169f92cd1734101c596197ef20c1190ed7dc4c05897da44ab$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_ASSIGN_ROLES_ADMINISTRATION_USERS_ASSIGN_ROLES_COMPONENT_TS__5 = goog.getMsg(" config.views.config-users.navbar.ROLES_NAME_MESSAGE ");
        i18n_4 = MSG_EXTERNAL_83c4877793a0831169f92cd1734101c596197ef20c1190ed7dc4c05897da44ab$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_ASSIGN_ROLES_ADMINISTRATION_USERS_ASSIGN_ROLES_COMPONENT_TS__5;
      } else {
        i18n_4 = "Nombre del rol";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_832d427ea8f11094fc2c563215f68dd24e93ed3736445eae8a7227986220d6ce$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_ASSIGN_ROLES_ADMINISTRATION_USERS_ASSIGN_ROLES_COMPONENT_TS__7 = goog.getMsg(" config.views.config-users.navbar.SECOND_PASSWORD_DESCRIPTION_MESSAGE ");
        i18n_6 = MSG_EXTERNAL_832d427ea8f11094fc2c563215f68dd24e93ed3736445eae8a7227986220d6ce$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_ASSIGN_ROLES_ADMINISTRATION_USERS_ASSIGN_ROLES_COMPONENT_TS__7;
      } else {
        i18n_6 = "Descripci\xF3n";
      }
      return [[1, "title"], [1, "queries__filter"], ["matPrefix", "", 1, "queries__filter-icon"], ["matInput", "", "placeholder", "Ingrese valor para filtrar", 3, "keyup"], ["input", ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "code"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descripcion"], ["matColumnDef", "state"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "assign-roles__actions"], ["mat-flat-button", "", "color", "primary", 1, "submit-button", 3, "appDoubleFactorAuthentication", "appDoubleFactorAPIGateway", "doubleFactorDestination", "doubleFactorCallback", "doubleFactorIncorrectCallback"], i18n_0, ["mat-flat-button", "", 3, "click"], i18n_2, ["mat-header-cell", "", "mat-sort-header", ""], i18n_4, ["mat-cell", ""], i18n_6, ["mat-header-cell", ""], ["color", "primary", 1, "state-checkbox", 3, "checked", "change"], ["mat-header-row", ""], ["mat-row", ""]];
    },
    template: function AdministrationUsersAssignRolesComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "mat-card")(1, "mat-card-content")(2, "h1", 0);
        core/* ɵɵtext */._uU(3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(4, "mat-form-field", 1)(5, "mat-label");
        core/* ɵɵtext */._uU(6, "Filtro");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(7, "mat-icon", 2);
        core/* ɵɵtext */._uU(8, "search");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(9, "input", 3, 4);
        core/* ɵɵlistener */.NdJ("keyup", function AdministrationUsersAssignRolesComponent_Template_input_keyup_9_listener($event) {
          return ctx.filter($event);
        });
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(11, "table", 5);
        core/* ɵɵelementContainerStart */.ynx(12, 6);
        core/* ɵɵtemplate */.YNc(13, AdministrationUsersAssignRolesComponent_th_13_Template, 3, 0, "th", 7);
        core/* ɵɵtemplate */.YNc(14, AdministrationUsersAssignRolesComponent_td_14_Template, 2, 1, "td", 8);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(15, 9);
        core/* ɵɵtemplate */.YNc(16, AdministrationUsersAssignRolesComponent_th_16_Template, 3, 0, "th", 7);
        core/* ɵɵtemplate */.YNc(17, AdministrationUsersAssignRolesComponent_td_17_Template, 2, 1, "td", 8);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(18, 10);
        core/* ɵɵtemplate */.YNc(19, AdministrationUsersAssignRolesComponent_th_19_Template, 1, 0, "th", 11);
        core/* ɵɵtemplate */.YNc(20, AdministrationUsersAssignRolesComponent_td_20_Template, 2, 1, "td", 8);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(21, AdministrationUsersAssignRolesComponent_tr_21_Template, 1, 0, "tr", 12);
        core/* ɵɵtemplate */.YNc(22, AdministrationUsersAssignRolesComponent_tr_22_Template, 1, 0, "tr", 13);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(23, "div", 14)(24, "button", 15);
        core/* ɵɵelementContainerStart */.ynx(25);
        core/* ɵɵi18n */.SDv(26, 16);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(27, "button", 17);
        core/* ɵɵlistener */.NdJ("click", function AdministrationUsersAssignRolesComponent_Template_button_click_27_listener() {
          return ctx.cancel();
        });
        core/* ɵɵelementContainerStart */.ynx(28);
        core/* ɵɵi18n */.SDv(29, 18);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA()()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵtextInterpolate1 */.hij(" Asignar Roles: ", ctx.user.userName, " ");
        core/* ɵɵadvance */.xp6(8);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.dataSource);
        core/* ɵɵadvance */.xp6(10);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("appDoubleFactorAuthentication", "ADM_GU_AR")("appDoubleFactorAPIGateway", ctx.userInfo)("doubleFactorDestination", "destination")("doubleFactorCallback", ctx.submit.bind(ctx))("doubleFactorIncorrectCallback", ctx.cancel.bind(ctx));
      }
    },
    dependencies: [icon/* MatIcon */.Hw, fesm2020_checkbox/* MatCheckbox */.oG, fesm2020_button/* MatButton */.lW, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatPrefix */.qo, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, card/* MatCard */.a8, card/* MatCardContent */.dn, sort/* MatSort */.YE, sort/* MatSortHeader */.nU, double_factor_authentication_directive/* DoubleFactorAuthenticationDirective */.A],
    styles: [".submit-button[_ngcontent-%COMP%]{color:#fff!important;margin-right:1rem}.assign-roles__actions[_ngcontent-%COMP%]{width:100%;padding:1rem;display:flex;justify-content:flex-end;align-items:center}.title[_ngcontent-%COMP%]{color:#666;margin:0;padding:1rem;padding-left:0;padding-top:0}.queries__filter[_ngcontent-%COMP%]{width:100%}"]
  });
  return AdministrationUsersAssignRolesComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-users-reset-password/administration-users-reset-password.component.ts











function AdministrationUsersResetPasswordComponent_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 7);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r1.user.userName, " ");
  }
}
function AdministrationUsersResetPasswordComponent_ng_container_0_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 14);
    core/* ɵɵlistener */.NdJ("click", function AdministrationUsersResetPasswordComponent_ng_container_0_button_28_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r3 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r3.submit());
    });
    core/* ɵɵtext */._uU(1, " Resetear ");
    core/* ɵɵelementEnd */.qZA();
  }
}
const _c12 = function (a0) {
  return [a0];
};
function AdministrationUsersResetPasswordComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "mat-card")(2, "mat-card-content")(3, "h1", 1);
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "p");
    core/* ɵɵi18n */.SDv(6, 2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(7, "div", 3)(8, "div")(9, "label");
    core/* ɵɵi18n */.SDv(10, 4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(11, AdministrationUsersResetPasswordComponent_ng_container_0_div_11_Template, 2, 1, "div", 5);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(12, "div")(13, "label");
    core/* ɵɵi18n */.SDv(14, 6);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(15, "div", 7);
    core/* ɵɵtext */._uU(16);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(17, "div")(18, "label");
    core/* ɵɵi18n */.SDv(19, 8);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(20, "div", 7);
    core/* ɵɵtext */._uU(21);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(22, "div")(23, "label");
    core/* ɵɵi18n */.SDv(24, 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(25, "div", 7);
    core/* ɵɵtext */._uU(26);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵelementStart */.TgZ(27, "div", 10);
    core/* ɵɵtemplate */.YNc(28, AdministrationUsersResetPasswordComponent_ng_container_0_button_28_Template, 2, 0, "button", 11);
    core/* ɵɵelementStart */.TgZ(29, "button", 12);
    core/* ɵɵlistener */.NdJ("click", function AdministrationUsersResetPasswordComponent_ng_container_0_Template_button_click_29_listener() {
      core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r5.cancel());
    });
    core/* ɵɵelementContainerStart */.ynx(30);
    core/* ɵɵi18n */.SDv(31, 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵtextInterpolate1 */.hij(" Reseteo de Contrase\u00F1a: ", ctx_r0.user.userName, " ");
    core/* ɵɵadvance */.xp6(7);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.user.userName);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r0.user.correo, " ");
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r0.user.nombres, " ");
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r0.user.apellidos, " ");
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(6, _c12, ctx_r0.privileges.ADM_GU_RC_RESET));
  }
}
let AdministrationUsersResetPasswordComponent = /*#__PURE__*/(() => {
  class AdministrationUsersResetPasswordComponent {
    constructor(store, router) {
      this.store = store;
      this.router = router;
      this.privileges = privileges_enum/* privileges */.U;
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      this.store.select(administrationFeatureSelector).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: store => {
          this.user = store.selectedUser.filter(item => item.userName === store.selectedUserName)[0];
        },
        error: error => console.error(error)
      });
    }
    submit() {
      this.store.dispatch((0,administration_actions/* resetUserPassword */.h8)({
        user: this.user.userName
      }));
    }
    cancel() {
      this.router.navigate(['/', 'administracion']);
    }
  }
  AdministrationUsersResetPasswordComponent.ɵfac = function AdministrationUsersResetPasswordComponent_Factory(t) {
    return new (t || AdministrationUsersResetPasswordComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0));
  };
  AdministrationUsersResetPasswordComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationUsersResetPasswordComponent,
    selectors: [["app-administration-users-reset-password"]],
    decls: 1,
    vars: 1,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_a723167163d1a58df765ee4faa7543a333f3ac3308e2b59a71e1e8601ad2669c$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_RESET_PASSWORD_ADMINISTRATION_USERS_RESET_PASSWORD_COMPONENT_TS__1 = goog.getMsg(" config.views.config-users.navbar.RESET_PASSWORD_GENERAL_MESSAGE ");
        i18n_0 = MSG_EXTERNAL_a723167163d1a58df765ee4faa7543a333f3ac3308e2b59a71e1e8601ad2669c$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_RESET_PASSWORD_ADMINISTRATION_USERS_RESET_PASSWORD_COMPONENT_TS__1;
      } else {
        i18n_0 = "El sistema enviar\xE1 un correo con la notificaci\xF3n para realizar el reinicio de la contrase\xF1a.";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_cd09e4b6daeec5f7493606683f946bddce7a0b86ad84d070521cb3f39042b5bb$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_RESET_PASSWORD_ADMINISTRATION_USERS_RESET_PASSWORD_COMPONENT_TS__3 = goog.getMsg(" config.views.config-users.navbar.RESET_PASSWORD_NAME_USER_MESSAGE ");
        i18n_2 = MSG_EXTERNAL_cd09e4b6daeec5f7493606683f946bddce7a0b86ad84d070521cb3f39042b5bb$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_RESET_PASSWORD_ADMINISTRATION_USERS_RESET_PASSWORD_COMPONENT_TS__3;
      } else {
        i18n_2 = "Nombre de Usuario";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_a16f100db7ea0a3ddcab04c025b5d8433ae92343ee0aa0c162d5766af015dd30$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_RESET_PASSWORD_ADMINISTRATION_USERS_RESET_PASSWORD_COMPONENT_TS__5 = goog.getMsg(" request.management.views.new.label.MAIL ");
        i18n_4 = MSG_EXTERNAL_a16f100db7ea0a3ddcab04c025b5d8433ae92343ee0aa0c162d5766af015dd30$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_RESET_PASSWORD_ADMINISTRATION_USERS_RESET_PASSWORD_COMPONENT_TS__5;
      } else {
        i18n_4 = "Correo electr\xF3nico";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_fb0753b6e84fcc877ef5528598c9225426314844c7314a95e9224320a3fe5726$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_RESET_PASSWORD_ADMINISTRATION_USERS_RESET_PASSWORD_COMPONENT_TS__7 = goog.getMsg(" config.views.config-users.navbar.CREATE_NAME_MESSAGE ");
        i18n_6 = MSG_EXTERNAL_fb0753b6e84fcc877ef5528598c9225426314844c7314a95e9224320a3fe5726$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_RESET_PASSWORD_ADMINISTRATION_USERS_RESET_PASSWORD_COMPONENT_TS__7;
      } else {
        i18n_6 = "Nombres";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_d48921b9793740d9e653591761d4eb41e813f28283e937144751ea2510073827$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_RESET_PASSWORD_ADMINISTRATION_USERS_RESET_PASSWORD_COMPONENT_TS__9 = goog.getMsg(" config.views.config-users.navbar.CREATE_LAST_NAME_MESSAGE ");
        i18n_8 = MSG_EXTERNAL_d48921b9793740d9e653591761d4eb41e813f28283e937144751ea2510073827$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_RESET_PASSWORD_ADMINISTRATION_USERS_RESET_PASSWORD_COMPONENT_TS__9;
      } else {
        i18n_8 = "Apellidos";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_RESET_PASSWORD_ADMINISTRATION_USERS_RESET_PASSWORD_COMPONENT_TS__11 = goog.getMsg(" config.views.config-restrictions.CANCEL ");
        i18n_10 = MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USERS_RESET_PASSWORD_ADMINISTRATION_USERS_RESET_PASSWORD_COMPONENT_TS__11;
      } else {
        i18n_10 = "Cancelar";
      }
      return [[4, "ngIf"], [1, "title"], i18n_0, [1, "user-data"], i18n_2, ["class", "phone-number-container", 4, "ngIf"], i18n_4, [1, "phone-number-container"], i18n_6, i18n_8, [1, "user-form-actions"], ["mat-flat-button", "", "color", "primary", "class", "submit-button", 3, "click", 4, "permissions"], ["mat-flat-button", "", 3, "click"], i18n_10, ["mat-flat-button", "", "color", "primary", 1, "submit-button", 3, "click"]];
    },
    template: function AdministrationUsersResetPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, AdministrationUsersResetPasswordComponent_ng_container_0_Template, 32, 8, "ng-container", 0);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", ctx.user);
      }
    },
    dependencies: [common/* NgIf */.O5, fesm2020_button/* MatButton */.lW, card/* MatCard */.a8, card/* MatCardContent */.dn, permissions_directive/* PermissionsDirective */.$],
    styles: [".phone-number-container[_ngcontent-%COMP%]{width:100%;padding:1rem;background-color:#f5f5f5;color:#666;border-bottom:#bdc3c7 solid 1px;cursor:text;font-size:1rem;margin-bottom:1rem;display:grid;grid-template-columns:1fr;grid-template-rows:1fr}.title[_ngcontent-%COMP%]{color:#666}.user-form-actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.submit-button[_ngcontent-%COMP%]{margin:0 .25rem;color:#fff!important}.user-data[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;column-gap:1rem}"]
  });
  return AdministrationUsersResetPasswordComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-user-options/administration-user-options.component.ts








function AdministrationUserOptionsComponent_mat_tab_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 6)(1, "defs")(2, "style");
    core/* ɵɵtext */._uU(3, ".cls-1{fill:#333;fill-rule:evenodd;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(4, "g", 7);
    core/* ɵɵelement */._UZ(5, "path", 8)(6, "path", 9)(7, "path", 10)(8, "path", 11);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(9, "span");
    core/* ɵɵi18n */.SDv(10, 12);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserOptionsComponent_mat_tab_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-administration-user-form");
  }
}
function AdministrationUserOptionsComponent_mat_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab", 3);
    core/* ɵɵtemplate */.YNc(1, AdministrationUserOptionsComponent_mat_tab_1_ng_template_1_Template, 11, 0, "ng-template", 4);
    core/* ɵɵtemplate */.YNc(2, AdministrationUserOptionsComponent_mat_tab_1_ng_template_2_Template, 1, 0, "ng-template", 5);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserOptionsComponent_mat_tab_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 14)(1, "defs")(2, "style");
    core/* ɵɵtext */._uU(3, ".cls-1{fill:#333;fill-rule:evenodd;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(4, "g", 7);
    core/* ɵɵelement */._UZ(5, "path", 15)(6, "path", 16)(7, "path", 17);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(8, "span");
    core/* ɵɵi18n */.SDv(9, 18);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserOptionsComponent_mat_tab_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-administration-users-assign-roles");
  }
}
function AdministrationUserOptionsComponent_mat_tab_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab", 13);
    core/* ɵɵtemplate */.YNc(1, AdministrationUserOptionsComponent_mat_tab_2_ng_template_1_Template, 10, 0, "ng-template", 4);
    core/* ɵɵtemplate */.YNc(2, AdministrationUserOptionsComponent_mat_tab_2_ng_template_2_Template, 1, 0, "ng-template", 5);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserOptionsComponent_mat_tab_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 20)(1, "defs")(2, "style");
    core/* ɵɵtext */._uU(3, ".cls-1,.cls-2{fill:#333;}.cls-2{fill-rule:evenodd;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(4, "g", 7);
    core/* ɵɵelement */._UZ(5, "path", 21)(6, "path", 22)(7, "circle", 23);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(8, "span");
    core/* ɵɵi18n */.SDv(9, 24);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AdministrationUserOptionsComponent_mat_tab_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-administration-users-reset-password");
  }
}
function AdministrationUserOptionsComponent_mat_tab_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab", 19);
    core/* ɵɵtemplate */.YNc(1, AdministrationUserOptionsComponent_mat_tab_3_ng_template_1_Template, 10, 0, "ng-template", 4);
    core/* ɵɵtemplate */.YNc(2, AdministrationUserOptionsComponent_mat_tab_3_ng_template_2_Template, 1, 0, "ng-template", 5);
    core/* ɵɵelementEnd */.qZA();
  }
}
const _c6 = function (a0) {
  return [a0];
};
let AdministrationUserOptionsComponent = /*#__PURE__*/(() => {
  class AdministrationUserOptionsComponent {
    constructor() {
      this.privileges = privileges_enum/* privileges */.U;
    }
    ngOnInit() {
      this.createForm = new fesm2020_forms/* FormGroup */.cw({
        username: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^[a-z\s\u00E0-\u00FC\u00f1\u00d1]*$/i)]),
        identification: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^\d+$/)]),
        name: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required]),
        lastName: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required]),
        email: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/)]),
        phone: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^\d+$/)]),
        charge: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required]),
        enterprise: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required]),
        Notification: new fesm2020_forms/* FormControl */.NI(false, [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern(/^\d+$/)]),
        notificationPhone: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required])
      });
    }
    submit() {}
  }
  AdministrationUserOptionsComponent.ɵfac = function AdministrationUserOptionsComponent_Factory(t) {
    return new (t || AdministrationUserOptionsComponent)();
  };
  AdministrationUserOptionsComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationUserOptionsComponent,
    selectors: [["app-administration-user-options"]],
    decls: 4,
    vars: 9,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5b8df98a9594728a9547a3107a0174e924a58fa891244dc42dc850284d01ec32$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_OPTIONS_ADMINISTRATION_USER_OPTIONS_COMPONENT_TS___1 = goog.getMsg(" config.views.config-users.navbar.EDIT_PLACE_HOLDER_MESSAGE ");
        i18n_0 = MSG_EXTERNAL_5b8df98a9594728a9547a3107a0174e924a58fa891244dc42dc850284d01ec32$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_OPTIONS_ADMINISTRATION_USER_OPTIONS_COMPONENT_TS___1;
      } else {
        i18n_0 = "Editar Usuario";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_27ea1585343f7a52912b2902d53591efce388f4388295fbb2f319417eac23086$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_OPTIONS_ADMINISTRATION_USER_OPTIONS_COMPONENT_TS___3 = goog.getMsg(" config.views.config-users.navbar.ROLES_PLACE_HOLDER_MESSAGE ");
        i18n_2 = MSG_EXTERNAL_27ea1585343f7a52912b2902d53591efce388f4388295fbb2f319417eac23086$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_OPTIONS_ADMINISTRATION_USER_OPTIONS_COMPONENT_TS___3;
      } else {
        i18n_2 = "Asignar roles";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_c09a7f73d702946ce78ddf53dbdb45a04929719584f6bb97967338baa8b41968$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_OPTIONS_ADMINISTRATION_USER_OPTIONS_COMPONENT_TS___5 = goog.getMsg(" config.views.config-users.navbar.RESET_PASSWORD_PLACE_HOLDER_MESSAGE ");
        i18n_4 = MSG_EXTERNAL_c09a7f73d702946ce78ddf53dbdb45a04929719584f6bb97967338baa8b41968$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_USER_OPTIONS_ADMINISTRATION_USER_OPTIONS_COMPONENT_TS___5;
      } else {
        i18n_4 = "Reseteo de Contrase\xF1a";
      }
      return [["label", "Editar Usuario", 4, "permissions"], ["label", "Asignar Roles", 4, "permissions"], ["label", "Reseteo de Clave", 4, "permissions"], ["label", "Editar Usuario"], ["mat-tab-label", ""], ["matTabContent", ""], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 76.07 76.07", 1, "adminsitration__user-options-icon"], ["id", "Capa_1-2"], ["d", "m62.05,18.48c-.87-.88-2.28-.88-3.15,0l-.65.65v-3.53c0-3.69-3-6.69-6.69-6.69h-13.67c-1.23,0-2.23,1-2.23,2.23s1,2.23,2.23,2.23h13.67c1.23,0,2.23,1,2.23,2.23v3.53l-.65-.65c-.87-.88-2.28-.88-3.15,0-.87.87-.87,2.28,0,3.15l4.46,4.46c.43.44,1.01.65,1.58.65s1.14-.22,1.58-.65l4.46-4.46c.87-.87.87-2.28,0-3.15Z", 1, "cls-1"], ["d", "m33.43,62.55h-13.37c-1.23,0-2.23-1-2.23-2.23v-3.53l.65.65c.87.87,2.28.87,3.15,0,.88-.87.88-2.28,0-3.15l-4.46-4.46c-.87-.87-2.28-.87-3.15,0l-4.46,4.46c-.87.87-.87,2.28,0,3.15.87.87,2.28.87,3.15,0l.65-.65v3.53c0,3.69,3,6.69,6.69,6.69h13.37c1.23,0,2.23-1,2.23-2.23s-1-2.23-2.23-2.23Z", 1, "cls-1"], ["d", "m25.24,19.46c2.29-2.04,3.73-5.01,3.73-8.32,0-6.15-5-11.14-11.14-11.14S6.69,5,6.69,11.14c0,3.3,1.45,6.27,3.74,8.32C4.28,22.3,0,28.56,0,35.81v6.69c0,1.23,1,2.23,2.23,2.23h31.2c1.23,0,2.23-1,2.23-2.23v-6.69c0-7.25-4.28-13.51-10.42-16.35h0Zm-7.41-15c3.69,0,6.69,3,6.69,6.69s-3,6.69-6.69,6.69-6.69-3-6.69-6.69,3-6.69,6.69-6.69h0Zm13.37,35.81H4.46v-4.46c0-7.45,6-13.52,13.37-13.52s13.37,6.07,13.37,13.52v4.46Z", 1, "cls-1"], ["d", "m65.67,50.8c2.28-2.04,3.73-5.01,3.73-8.3,0-6.15-5-11.14-11.14-11.14s-11.14,5-11.14,11.14c0,3.3,1.44,6.26,3.72,8.3-6.14,2.82-10.41,9.03-10.41,16.21v6.83c0,1.23,1,2.23,2.23,2.23h31.2c1.23,0,2.23-1,2.23-2.23v-6.83c0-7.19-4.27-13.39-10.41-16.21h0Zm-7.42-14.99c3.68,0,6.68,3,6.68,6.69s-3,6.69-6.68,6.69-6.69-3-6.69-6.69,3-6.69,6.69-6.69h0Zm13.37,35.81h-26.74v-4.61c0-7.37,6-13.37,13.37-13.37s13.37,6,13.37,13.37v4.61Z", 1, "cls-1"], i18n_0, ["label", "Asignar Roles"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 61.74 81.05", 1, "adminsitration__user-options-icon"], ["d", "m30.87,23.91c-3.93,0-7.13,3.2-7.13,7.12s3.2,7.12,7.13,7.12,7.13-3.2,7.13-7.12-3.2-7.12-7.13-7.12h0Zm0,9.5c-1.31,0-2.38-1.07-2.38-2.38s1.07-2.38,2.38-2.38,2.37,1.06,2.37,2.38-1.07,2.38-2.37,2.38Z", 1, "cls-1"], ["d", "m50.88,34.36l-3.44-1.99c.07-.86.07-1.76,0-2.68l3.44-1.99c1.14-.66,1.52-2.11.87-3.24l-4.75-8.23c-.66-1.14-2.11-1.53-3.25-.87l-3.44,1.99c-.74-.51-1.51-.96-2.32-1.35v-3.97c0-1.31-1.07-2.38-2.38-2.38h-9.5c-1.31,0-2.38,1.06-2.38,2.38v3.97c-.81.38-1.58.83-2.32,1.35l-3.45-1.99c-1.13-.66-2.59-.27-3.24.87l-4.75,8.22c-.66,1.13-.27,2.59.87,3.24l3.45,1.99c-.07.86-.07,1.76,0,2.68l-3.45,1.99c-1.14.65-1.53,2.1-.87,3.24l4.75,8.22c.66,1.14,2.11,1.52,3.24.87l3.45-1.99c.74.51,1.51.96,2.32,1.35v3.97c0,1.31,1.06,2.37,2.38,2.37h9.5c1.31,0,2.38-1.06,2.38-2.37v-3.97c.81-.39,1.58-.83,2.32-1.35l3.44,1.99c1.14.65,2.59.27,3.25-.87l4.75-8.22c.66-1.14.27-2.59-.87-3.24h0Zm-8.34-5.49c.26,1.37.27,2.88,0,4.33-.19.99.27,1.99,1.14,2.49l2.76,1.6-2.38,4.11-2.76-1.6c-.87-.5-1.97-.4-2.73.26-1.11.96-2.38,1.68-3.75,2.17-.95.33-1.59,1.23-1.59,2.24v3.19h-4.75v-3.19c0-1-.64-1.9-1.58-2.24-1.38-.48-2.64-1.21-3.76-2.17-.76-.65-1.86-.75-2.73-.26l-2.77,1.6-2.38-4.11,2.76-1.6c.88-.51,1.33-1.5,1.15-2.49-.26-1.37-.27-2.88,0-4.33.19-.99-.27-2-1.15-2.5l-2.76-1.6,2.38-4.11,2.77,1.6c.87.5,1.96.4,2.73-.25,1.12-.96,2.38-1.69,3.76-2.17.94-.34,1.58-1.23,1.58-2.24v-3.19h4.75v3.19c0,1.01.64,1.9,1.59,2.24,1.37.48,2.64,1.22,3.75,2.17.77.65,1.86.75,2.73.25l2.76-1.6,2.38,4.11-2.76,1.6c-.87.5-1.33,1.51-1.14,2.5Z", 1, "cls-1"], ["d", "m30.87,0C13.85,0,0,13.92,0,31.02c-.04,9,3.85,17.52,10.69,23.39,3.77,3.24,5.93,8.01,5.93,13.11v8.79c0,2.62,2.13,4.75,4.75,4.75h19c2.62,0,4.75-2.13,4.75-4.75v-8.79c0-5.08,2.15-9.86,5.91-13.11,6.8-5.88,10.71-14.39,10.71-23.38C61.74,13.92,47.9,0,30.87,0h0Zm9.5,76.3h-19c0-9.48.07-9.93-.23-12.03h19.47c-.3,2.09-.23,2.54-.23,12.03h0Zm7.56-25.49c-2.75,2.36-4.82,5.37-6.1,8.71h-21.94c-1.28-3.34-3.36-6.35-6.12-8.72-5.78-4.96-9.07-12.16-9.03-19.77,0-14.49,11.72-26.28,26.12-26.28s26.12,11.79,26.12,26.28c0,7.6-3.3,14.81-9.06,19.78Z", 1, "cls-1"], i18n_2, ["label", "Reseteo de Clave"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 77.43 77.13", 1, "adminsitration__user-options-icon"], ["d", "m75.16,58.98h-2.42V21.93c0-2.08-1.7-3.78-3.78-3.78h-9.99v-6.8c0-.86-.48-1.64-1.25-2.03L39.66.24c-.64-.32-1.4-.32-2.04,0l-18.06,9.08c-.77.39-1.25,1.17-1.25,2.03v6.8h-9.85c-2.08,0-3.78,1.7-3.78,3.78v37.06h-2.42c-1.25,0-2.27,1.02-2.27,2.27v9.08c0,3.75,3.05,6.8,6.8,6.8h63.82c3.76,0,6.81-3.05,6.81-6.8v-9.08c0-1.26-1.01-2.27-2.27-2.27h0ZM22.85,12.74l15.79-7.93,15.8,7.93v18.08c0,10.29-7.63,13.57-15.73,18.68-8.19-5.12-15.86-8.36-15.86-18.72V12.74h0Zm-13.63,9.94h9.09v8.1c0,13.5,10.85,18.1,19.2,23.31.74.46,1.68.46,2.42,0,8.51-5.36,19.05-9.95,19.05-23.27v-8.14h9.24v36.3h-19.06c-.96,0-1.82.6-2.14,1.51l-.97,2.73h-14.66l-.98-2.73c-.32-.91-1.18-1.51-2.14-1.51H9.22V22.69h0Zm63.67,47.64c0,1.25-1.02,2.27-2.27,2.27H6.8c-1.25,0-2.27-1.02-2.27-2.27v-6.81h22.15l.97,2.73c.33.9,1.18,1.5,2.14,1.5h17.84c.96,0,1.82-.6,2.14-1.5l.98-2.73h22.14v6.81Z", 1, "cls-2"], ["d", "m38.71,27.22c1.25,0,2.27-1.02,2.27-2.27v-9.08c0-1.25-1.01-2.27-2.27-2.27s-2.27,1.02-2.27,2.27v9.08c0,1.25,1.02,2.27,2.27,2.27Z", 1, "cls-2"], ["cx", "38.71", "cy", "34.1", "r", "2.27", 1, "cls-1"], i18n_4];
    },
    template: function AdministrationUserOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "mat-tab-group");
        core/* ɵɵtemplate */.YNc(1, AdministrationUserOptionsComponent_mat_tab_1_Template, 3, 0, "mat-tab", 0);
        core/* ɵɵtemplate */.YNc(2, AdministrationUserOptionsComponent_mat_tab_2_Template, 3, 0, "mat-tab", 1);
        core/* ɵɵtemplate */.YNc(3, AdministrationUserOptionsComponent_mat_tab_3_Template, 3, 0, "mat-tab", 2);
        core/* ɵɵelementEnd */.qZA();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(3, _c6, ctx.privileges.ADM_GU_EU));
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(5, _c6, ctx.privileges.ADM_GU_AR));
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(7, _c6, ctx.privileges.ADM_GU_RC));
      }
    },
    dependencies: [tabs/* MatTabContent */.Vc, tabs/* MatTabLabel */.uD, tabs/* MatTab */.uX, tabs/* MatTabGroup */.SP, permissions_directive/* PermissionsDirective */.$, AdministrationUserFormComponent, AdministrationUsersAssignRolesComponent, AdministrationUsersResetPasswordComponent],
    styles: [".create-user[_ngcontent-%COMP%]{height:100%}.adminsitration__user-options-icon[_ngcontent-%COMP%]{width:1rem}.adminsitration__user-options-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#0009}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .adminsitration__user-options-icon path, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .adminsitration__user-options-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#66bb6a}"]
  });
  return AdministrationUserOptionsComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-second-password/administration-second-password.component.ts
















let AdministrationSecondPasswordComponent = /*#__PURE__*/(() => {
  class AdministrationSecondPasswordComponent {
    constructor(store, router, matSnackBar, base64EncryptionUtilService) {
      this.store = store;
      this.router = router;
      this.matSnackBar = matSnackBar;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.dataSource = new table/* MatTableDataSource */.by();
      this.displayedColumns = ["description", "state"];
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      this.emailControl = new fesm2020_forms/* FormControl */.NI(false);
      this.smsControl = new fesm2020_forms/* FormControl */.NI(false);
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          this.user = result;
          this.store.dispatch((0,administration_actions/* getSecondPasswordMethod */.VG)({
            nit: result.empresa?.id
          }));
          this.store.select(administrationFeatureSelector).subscribe({
            next: store => {
              if (store.secondPassword) {
                this.secondPasswordConfig = store.secondPassword;
                this.emailControl.setValue(store.secondPassword.isSecondPasswordMail === "true" ? true : false);
                this.smsControl.setValue(store.secondPassword.isSecondPasswordSMS === "true" ? true : false);
              }
            },
            error: error => console.error(error)
          });
        },
        error: error => console.error(error)
      });
    }
    submit() {
      const payload = {
        idCompany: this.secondPasswordConfig.idCompany,
        isSecondPasswordSMS: this.smsControl.value,
        isSecondPasswordMail: this.emailControl.value
      };
      if (this.smsControl.value || this.emailControl.value) {
        //por el momento voy a ponerlo hasnotificacion como True, luego ya hay que recibirlo de admin
        //hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "ADMIN_SECOND_PASS")[0].notificable
        this.store.dispatch((0,administration_actions/* updateSecondPasswordMethod */.Vt)({
          payload,
          nit: this.user.empresa?.id,
          hasNotification: true,
          notificationData: this.base64EncryptionUtilService.encrypt(JSON.stringify({
            userName: this.user.userName,
            nit: this.userInfo.empresa?.id,
            fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,
            isSecondPasswordMail: payload.isSecondPasswordMail ? "Activo" : "Inactivo",
            isSecondPasswordSMS: payload.isSecondPasswordSMS ? "Activo" : "Inactivo"
          })),
          privilege: "ADMIN_SECOND_PASS"
        }));
      } else {
        this.matSnackBar.open("Debe configurar por lo menos un método de notificación de segunda clave", "", {
          verticalPosition: "top",
          duration: 3000,
          panelClass: ["error-snackbar"]
        });
      }
    }
    cancel() {
      this.store.dispatch((0,administration_actions/* getSecondPasswordMethod */.VG)({
        nit: this.user.empresa?.id
      }));
    }
  }
  AdministrationSecondPasswordComponent.ɵfac = function AdministrationSecondPasswordComponent_Factory(t) {
    return new (t || AdministrationSecondPasswordComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L));
  };
  AdministrationSecondPasswordComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationSecondPasswordComponent,
    selectors: [["app-administration-second-password"]],
    decls: 30,
    vars: 8,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_SECOND_PASSWORD_ADMINISTRATION_SECOND_PASSWORD_COMPONENT_TS_1 = goog.getMsg(" services.views.modal.confirm.button.ACCEPT ");
        i18n_0 = MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_SECOND_PASSWORD_ADMINISTRATION_SECOND_PASSWORD_COMPONENT_TS_1;
      } else {
        i18n_0 = "Aceptar";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_SECOND_PASSWORD_ADMINISTRATION_SECOND_PASSWORD_COMPONENT_TS_3 = goog.getMsg(" config.views.config-restrictions.CANCEL ");
        i18n_2 = MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_SECOND_PASSWORD_ADMINISTRATION_SECOND_PASSWORD_COMPONENT_TS_3;
      } else {
        i18n_2 = "Cancelar";
      }
      return [[1, "administration-second-password"], [1, "title"], [1, "table"], ["scope", "col"], ["color", "primary", 3, "formControl"], [1, "actions"], ["mat-raised-button", "", "color", "primary", 1, "submit-button", 3, "disabled", "appDoubleFactorAuthentication", "appDoubleFactorAPIGateway", "doubleFactorDestination", "doubleFactorCallback", "doubleFactorIncorrectCallback"], i18n_0, ["mat-flat-button", "", 3, "click"], i18n_2];
    },
    template: function AdministrationSecondPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "h1", 1);
        core/* ɵɵtext */._uU(2, " Configuraci\u00F3n m\u00E9todo de env\u00EDo de segunda clave ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(3, "mat-card")(4, "mat-card-content")(5, "table", 2)(6, "thead")(7, "tr")(8, "th", 3);
        core/* ɵɵtext */._uU(9, "Descripci\u00F3n");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(10, "th", 3);
        core/* ɵɵtext */._uU(11, "Estado");
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵelementStart */.TgZ(12, "tbody")(13, "tr")(14, "td");
        core/* ɵɵtext */._uU(15, " Env\u00EDo de Segunda Clave V\u00EDa Correo Electr\u00F3nico ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(16, "td");
        core/* ɵɵelement */._UZ(17, "mat-checkbox", 4);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(18, "tr")(19, "td");
        core/* ɵɵtext */._uU(20, " Env\u00EDo de Segunda Clave v\u00EDa SMS ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(21, "td");
        core/* ɵɵelement */._UZ(22, "mat-checkbox", 4);
        core/* ɵɵelementEnd */.qZA()()()();
        core/* ɵɵelementStart */.TgZ(23, "div", 5)(24, "button", 6);
        core/* ɵɵelementContainerStart */.ynx(25);
        core/* ɵɵi18n */.SDv(26, 7);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(27, "button", 8);
        core/* ɵɵlistener */.NdJ("click", function AdministrationSecondPasswordComponent_Template_button_click_27_listener() {
          return ctx.cancel();
        });
        core/* ɵɵelementContainerStart */.ynx(28);
        core/* ɵɵi18n */.SDv(29, 9);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA()()()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(17);
        core/* ɵɵproperty */.Q6J("formControl", ctx.emailControl);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("formControl", ctx.smsControl);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("disabled", !(ctx.emailControl.value || ctx.smsControl.value))("appDoubleFactorAuthentication", "ADMIN_SECOND_PASS")("appDoubleFactorAPIGateway", ctx.userInfo)("doubleFactorDestination", "destination")("doubleFactorCallback", ctx.submit.bind(ctx))("doubleFactorIncorrectCallback", ctx.cancel.bind(ctx));
      }
    },
    dependencies: [fesm2020_checkbox/* MatCheckbox */.oG, fesm2020_button/* MatButton */.lW, card/* MatCard */.a8, card/* MatCardContent */.dn, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* FormControlDirective */.oH, double_factor_authentication_directive/* DoubleFactorAuthenticationDirective */.A],
    styles: [".administration-second-password[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;row-gap:1rem}th[_ngcontent-%COMP%]{font-weight:450}.title[_ngcontent-%COMP%]{color:#666;margin:0;padding:1rem;padding-left:0}.actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.submit-button[_ngcontent-%COMP%]{margin-right:1rem;color:#fff!important}  .mdc-tab__text-label{flex-direction:column!important}  .mdc-data-table__header-cell{text-align:center!important;font-family:Gilroy-ExtraBold;color:#66bb6a;font-size:1rem}  .mdc-data-table__row{background-color:#dfe6e91a!important;border:transparent solid!important;border-bottom:.25rem transparent solid!important}  .mdc-data-table__row:hover{background-color:#7ba0521a!important}  .mdc-data-table__row td{font-family:Gilroy-Light;color:#666!important}  .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}"]
  });
  return AdministrationSecondPasswordComponent;
})();
;// CONCATENATED MODULE: ./src/app/shared/custom-validators.ts
class CustomValidators {
  constructor() {}
  static ip(control) {
    if (!control.value) return null;
    if (control.value.split(".").length === 4) return null;
    return {
      dotError: true
    };
  }
}
// EXTERNAL MODULE: ./src/app/shared/services/util.service.ts
var util_service = __webpack_require__(22203);
;// CONCATENATED MODULE: ./src/app/modules/administration/components/administration-ip-options/administration-ip-options.component.ts














function AdministrationIpOptionsComponent_p_41_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p", 21);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r0.rangeFormGroup.getError("initialValueGreaterThanDestination"));
  }
}
let AdministrationIpOptionsComponent = /*#__PURE__*/(() => {
  class AdministrationIpOptionsComponent {
    constructor(store, router, utilService) {
      this.store = store;
      this.router = router;
      this.utilService = utilService;
      this.staticFormGroup = new fesm2020_forms/* FormGroup */.cw({});
      this.rangeFormGroup = new fesm2020_forms/* FormGroup */.cw({});
    }
    ngOnInit() {
      this.staticFormGroup = new fesm2020_forms/* FormGroup */.cw({
        description: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required]),
        ip: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'), CustomValidators.ip])
      });
      this.rangeFormGroup = new fesm2020_forms/* FormGroup */.cw({
        description: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required]),
        ipFrom: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'), CustomValidators.ip]),
        ipTo: new fesm2020_forms/* FormControl */.NI("", [fesm2020_forms/* Validators.required */.kI.required, fesm2020_forms/* Validators.pattern */.kI.pattern('(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'), CustomValidators.ip])
      });
    }
    get staticDescriptionControl() {
      return this.staticFormGroup.controls["description"];
    }
    get staticIpControl() {
      return this.staticFormGroup.controls["ip"];
    }
    get rangeDescriptionControl() {
      return this.rangeFormGroup.controls["description"];
    }
    get rangeIpFromControl() {
      return this.rangeFormGroup.controls["ipFrom"];
    }
    get rangeIpToControl() {
      return this.rangeFormGroup.controls["ipTo"];
    }
    staticSubmit() {
      const ip = this.staticIpControl.value.split(".");
      const payload = {
        companyId: null,
        action: "INSERT",
        ips: [{
          address: `(${ip[0]})\\.(${ip[1]})\\.(${ip[2]})\\.(${ip[3]})$`,
          description: this.staticDescriptionControl.value,
          type: null
        }]
      };
      this.store.dispatch((0,administration_actions/* createIpAddress */.Ud)({
        payload
      }));
      this.staticFormGroup.reset();
    }
    rangeSubmit() {
      const ipFrom = this.rangeIpFromControl.value.split(".");
      const ipTo = this.rangeIpToControl.value.split(".");
      if (parseInt(ipFrom[ipFrom.length - 1]) < parseInt(ipTo[ipTo.length - 1])) {
        const payload = {
          companyId: null,
          action: "INSERT",
          ips: [{
            address: `(${ipFrom[0]})\\.(${ipFrom[1]})\\.(${ipFrom[2]})\\.(${this.utilService.getRegularExpression(ipFrom[3], ipTo[3])})$`,
            description: this.rangeDescriptionControl.value,
            type: `(${ipFrom[3]}|${ipTo[3]})`
          }]
        };
        this.store.dispatch((0,administration_actions/* createIpAddress */.Ud)({
          payload
        }));
        this.rangeFormGroup.reset();
      } else {
        this.rangeFormGroup.setErrors({
          initialValueGreaterThanDestination: "El rango de IPs ingresadas está mal registrado, la IP Inicio, debe ser menor a la IP final"
        });
      }
    }
    goToModule(module) {
      this.router.navigate(["/", module]).then(() => {
        const currentRoute = this.router.url;
        this.router.navigateByUrl("/administration", {
          skipLocationChange: true
        }).then(() => this.router.navigate([currentRoute]));
      });
    }
    cancel() {
      this.goToModule("administracion");
    }
  }
  AdministrationIpOptionsComponent.ɵfac = function AdministrationIpOptionsComponent_Factory(t) {
    return new (t || AdministrationIpOptionsComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f));
  };
  AdministrationIpOptionsComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AdministrationIpOptionsComponent,
    selectors: [["app-administration-ip-options"]],
    decls: 49,
    vars: 5,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_e6eeaf21e9d10e3e6899a89904b45745fd5c1b35ce70c0801c472d822911ed5d$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_OPTIONS_ADMINISTRATION_IP_OPTIONS_COMPONENT_TS_1 = goog.getMsg(" config.views.config-ip-restriction.table.DESCRIPTION ");
        i18n_0 = MSG_EXTERNAL_e6eeaf21e9d10e3e6899a89904b45745fd5c1b35ce70c0801c472d822911ed5d$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_OPTIONS_ADMINISTRATION_IP_OPTIONS_COMPONENT_TS_1;
      } else {
        i18n_0 = "DESCRIPCI\xD3N";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8e8d6f2a821ea1535d3d3643a8116d53d895ef9f1c547366b27b0bd26099d0ef$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_OPTIONS_ADMINISTRATION_IP_OPTIONS_COMPONENT_TS_3 = goog.getMsg(" config.views.config-ip-restriction.actions.STATIC_IP ");
        i18n_2 = MSG_EXTERNAL_8e8d6f2a821ea1535d3d3643a8116d53d895ef9f1c547366b27b0bd26099d0ef$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_OPTIONS_ADMINISTRATION_IP_OPTIONS_COMPONENT_TS_3;
      } else {
        i18n_2 = "IP Est\xE1tica";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_OPTIONS_ADMINISTRATION_IP_OPTIONS_COMPONENT_TS_5 = goog.getMsg(" services.views.modal.confirm.button.ACCEPT ");
        i18n_4 = MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_OPTIONS_ADMINISTRATION_IP_OPTIONS_COMPONENT_TS_5;
      } else {
        i18n_4 = "Aceptar";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_OPTIONS_ADMINISTRATION_IP_OPTIONS_COMPONENT_TS_7 = goog.getMsg(" config.views.config-restrictions.CANCEL ");
        i18n_6 = MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_OPTIONS_ADMINISTRATION_IP_OPTIONS_COMPONENT_TS_7;
      } else {
        i18n_6 = "Cancelar";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_OPTIONS_ADMINISTRATION_IP_OPTIONS_COMPONENT_TS_9 = goog.getMsg(" services.views.modal.confirm.button.ACCEPT ");
        i18n_8 = MSG_EXTERNAL_ebc94295e02cb01e14000f384f6a174c059c0f68181bec11d3a0b1228457f92e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_OPTIONS_ADMINISTRATION_IP_OPTIONS_COMPONENT_TS_9;
      } else {
        i18n_8 = "Aceptar";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_OPTIONS_ADMINISTRATION_IP_OPTIONS_COMPONENT_TS_11 = goog.getMsg(" config.views.config-restrictions.CANCEL ");
        i18n_10 = MSG_EXTERNAL_c1c9c168b17220c3bd35feec14abe106f2915d8c0a0d75264c91c8b63584171e$$SRC_APP_MODULES_ADMINISTRATION_COMPONENTS_ADMINISTRATION_IP_OPTIONS_ADMINISTRATION_IP_OPTIONS_COMPONENT_TS_11;
      } else {
        i18n_10 = "Cancelar";
      }
      return [[1, "administration-ip-options"], ["label", "IP Estatica"], [1, "static-ip"], [1, "static-form", 3, "formGroup"], i18n_0, ["formControlName", "description", "matInput", "", "type", "text"], i18n_2, ["placeholder", "___.___.___.___", "formControlName", "ip", "matInput", "", "type", "text"], [1, "actions"], ["mat-flat-button", "", "color", "primary", 1, "submit-button", 3, "disabled", "click"], i18n_4, ["mat-flat-button", "", 3, "click"], i18n_6, ["label", "IP Rango"], [1, "static-ip", 3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "description"], ["placeholder", "___.___.___.___", "matInput", "", "type", "text", "formControlName", "ipFrom"], ["placeholder", "___.___.___.___", "matInput", "", "type", "text", "formControlName", "ipTo"], ["class", "error", 4, "ngIf"], i18n_8, i18n_10, [1, "error"]];
    },
    template: function AdministrationIpOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "mat-tab-group")(2, "mat-tab", 1)(3, "mat-card")(4, "mat-card-content")(5, "div", 2)(6, "form", 3)(7, "mat-form-field")(8, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(9);
        core/* ɵɵi18n */.SDv(10, 4);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(11, "input", 5);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(12, "mat-form-field")(13, "mat-label");
        core/* ɵɵelementContainerStart */.ynx(14);
        core/* ɵɵi18n */.SDv(15, 6);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(16, "input", 7);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(17, "div", 8)(18, "button", 9);
        core/* ɵɵlistener */.NdJ("click", function AdministrationIpOptionsComponent_Template_button_click_18_listener() {
          return ctx.staticSubmit();
        });
        core/* ɵɵelementContainerStart */.ynx(19);
        core/* ɵɵi18n */.SDv(20, 10);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(21, "button", 11);
        core/* ɵɵlistener */.NdJ("click", function AdministrationIpOptionsComponent_Template_button_click_21_listener() {
          return ctx.cancel();
        });
        core/* ɵɵelementContainerStart */.ynx(22);
        core/* ɵɵi18n */.SDv(23, 12);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA()()()()()();
        core/* ɵɵelementStart */.TgZ(24, "mat-tab", 13)(25, "mat-card")(26, "mat-card-content")(27, "div", 2)(28, "form", 14)(29, "mat-form-field")(30, "mat-label");
        core/* ɵɵtext */._uU(31, "Descripci\u00F3n");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(32, "input", 15);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(33, "mat-form-field")(34, "mat-label");
        core/* ɵɵtext */._uU(35, "IP Inicio");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(36, "input", 16);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(37, "mat-form-field")(38, "mat-label");
        core/* ɵɵtext */._uU(39, "IP Final");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(40, "input", 17);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(41, AdministrationIpOptionsComponent_p_41_Template, 2, 1, "p", 18);
        core/* ɵɵelementStart */.TgZ(42, "div", 8)(43, "button", 9);
        core/* ɵɵlistener */.NdJ("click", function AdministrationIpOptionsComponent_Template_button_click_43_listener() {
          return ctx.rangeSubmit();
        });
        core/* ɵɵelementContainerStart */.ynx(44);
        core/* ɵɵi18n */.SDv(45, 19);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(46, "button", 11);
        core/* ɵɵlistener */.NdJ("click", function AdministrationIpOptionsComponent_Template_button_click_46_listener() {
          return ctx.cancel();
        });
        core/* ɵɵelementContainerStart */.ynx(47);
        core/* ɵɵi18n */.SDv(48, 20);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementEnd */.qZA()()()()()()()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.staticFormGroup);
        core/* ɵɵadvance */.xp6(12);
        core/* ɵɵproperty */.Q6J("disabled", ctx.staticFormGroup.invalid);
        core/* ɵɵadvance */.xp6(10);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.rangeFormGroup);
        core/* ɵɵadvance */.xp6(13);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.rangeFormGroup.invalid);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("disabled", ctx.rangeFormGroup.invalid);
      }
    },
    dependencies: [common/* NgIf */.O5, fesm2020_button/* MatButton */.lW, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, tabs/* MatTab */.uX, tabs/* MatTabGroup */.SP, input/* MatInput */.Nt, card/* MatCard */.a8, card/* MatCardContent */.dn, fesm2020_forms/* ɵNgNoValidate */._Y, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* NgControlStatusGroup */.JL, fesm2020_forms/* FormGroupDirective */.sg, fesm2020_forms/* FormControlName */.u],
    styles: [".static-ip[_ngcontent-%COMP%]{padding:1rem;display:grid;grid-template-columns:1fr;grid-template-rows:1fr auto}.static-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.submit-button[_ngcontent-%COMP%]{margin:0 .25rem;color:#fff!important}.error[_ngcontent-%COMP%]{color:#e74c3c}"]
  });
  return AdministrationIpOptionsComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/administration/administration-routing.module.ts











const routes = [{
  path: "",
  component: AdministrationComponent,
  children: [{
    path: "actions/hours",
    component: AdministrationActionsHoursComponent
  }, {
    path: "notification",
    component: AdministrationNotificationSelectedComponent
  }, {
    path: "user",
    component: AdministrationUserComponent
  }, {
    path: "user/notification",
    component: AdministrationProfilePhoneComponent
  }, {
    path: "user/options",
    component: AdministrationUserOptionsComponent
  }, {
    path: "second-password",
    component: AdministrationSecondPasswordComponent
  }, {
    path: "ip-restriction",
    component: AdministrationIpOptionsComponent
  }]
}];
let AdministrationRoutingModule = /*#__PURE__*/(() => {
  class AdministrationRoutingModule {}
  AdministrationRoutingModule.ɵfac = function AdministrationRoutingModule_Factory(t) {
    return new (t || AdministrationRoutingModule)();
  };
  AdministrationRoutingModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: AdministrationRoutingModule
  });
  AdministrationRoutingModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [router/* RouterModule.forChild */.Bz.forChild(routes), router/* RouterModule */.Bz]
  });
  return AdministrationRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(AdministrationRoutingModule, {
    imports: [router/* RouterModule */.Bz],
    exports: [router/* RouterModule */.Bz]
  });
})();
// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 9 modules
var shared_module = __webpack_require__(96158);
;// CONCATENATED MODULE: ./src/app/modules/administration/administration.module.ts






















let AdministrationModule = /*#__PURE__*/(() => {
  class AdministrationModule {}
  AdministrationModule.ɵfac = function AdministrationModule_Factory(t) {
    return new (t || AdministrationModule)();
  };
  AdministrationModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: AdministrationModule
  });
  AdministrationModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [common/* CommonModule */.ez, AdministrationRoutingModule, shared_module/* SharedModule */.m]
  });
  return AdministrationModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(AdministrationModule, {
    declarations: [AdministrationComponent, AdministrationUsersComponent, AdministrationUserOptionsComponent, AdministrationUserFormComponent, AdministrationUsersAssignRolesComponent, AdministrationUsersResetPasswordComponent, AdministrationUserComponent, AdministrationSecondPasswordComponent, AdministrationActionsComponent, AdministrationActionsHoursComponent, AdministrationNotificationComponent, AdministrationNotificationSelectedComponent, AdministrationIpComponent, AdministrationIpOptionsComponent, AdministrationProfilePhoneComponent, AdministrationProfileComponent, AdministrationIpDialogComponent, AdministrationSecondPasswordMainComponent],
    imports: [common/* CommonModule */.ez, AdministrationRoutingModule, shared_module/* SharedModule */.m]
  });
})();

/***/ })

}]);