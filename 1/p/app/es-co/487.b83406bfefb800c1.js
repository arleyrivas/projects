"use strict";
(self["webpackChunkbussinessPortal"] = self["webpackChunkbussinessPortal"] || []).push([[487],{

/***/ 57487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "RequestManagementModule": () => (/* binding */ RequestManagementModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__(36895);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2020/router.mjs + 5 modules
var router = __webpack_require__(77518);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs
var core = __webpack_require__(94650);
;// CONCATENATED MODULE: ./src/app/modules/request-management/components/request-management/request-management.component.ts

let RequestManagementComponent = /*#__PURE__*/(() => {
  class RequestManagementComponent {
    constructor() {}
    ngOnInit() {}
  }
  RequestManagementComponent.ɵfac = function RequestManagementComponent_Factory(t) {
    return new (t || RequestManagementComponent)();
  };
  RequestManagementComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: RequestManagementComponent,
    selectors: [["app-request-management"]],
    decls: 3,
    vars: 0,
    consts: [[1, "request-management"], [1, "welcome__user"]],
    template: function RequestManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "p", 1);
        core/* ɵɵtext */._uU(2, "Modulo de \"Gestion de Solicitudes\".");
        core/* ɵɵelementEnd */.qZA()();
      }
    },
    styles: [".request-management[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.welcome__user[_ngcontent-%COMP%]{font-size:1.875rem;color:var(--primary-color)}"]
  });
  return RequestManagementComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/guard/notifications.guard.ts
var notifications_guard = __webpack_require__(34418);
;// CONCATENATED MODULE: ./src/app/modules/request-management/request-management-routing.module.ts





const routes = [{
  path: "",
  component: RequestManagementComponent,
  canActivate: [notifications_guard/* NotificationsGuard */.t],
  data: {
    componentName: "RequestManagementComponent",
    privilegeName: "REQ_MAN"
  }
}];
let RequestManagementRoutingModule = /*#__PURE__*/(() => {
  class RequestManagementRoutingModule {}
  RequestManagementRoutingModule.ɵfac = function RequestManagementRoutingModule_Factory(t) {
    return new (t || RequestManagementRoutingModule)();
  };
  RequestManagementRoutingModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: RequestManagementRoutingModule
  });
  RequestManagementRoutingModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [router/* RouterModule.forChild */.Bz.forChild(routes), router/* RouterModule */.Bz]
  });
  return RequestManagementRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(RequestManagementRoutingModule, {
    imports: [router/* RouterModule */.Bz],
    exports: [router/* RouterModule */.Bz]
  });
})();
;// CONCATENATED MODULE: ./src/app/modules/request-management/request-management.module.ts




let RequestManagementModule = /*#__PURE__*/(() => {
  class RequestManagementModule {}
  RequestManagementModule.ɵfac = function RequestManagementModule_Factory(t) {
    return new (t || RequestManagementModule)();
  };
  RequestManagementModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: RequestManagementModule
  });
  RequestManagementModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [common/* CommonModule */.ez, RequestManagementRoutingModule]
  });
  return RequestManagementModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(RequestManagementModule, {
    declarations: [RequestManagementComponent],
    imports: [common/* CommonModule */.ez, RequestManagementRoutingModule]
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