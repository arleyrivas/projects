"use strict";
(self["webpackChunkbussinessPortal"] = self["webpackChunkbussinessPortal"] || []).push([[799],{

/***/ 34263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ GeneratePinDisplayItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(96308);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7155);
/* harmony import */ var src_app_modules_containerized_load_components_generate_pin_deactivation_dialog_generate_pin_deactivation_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40786);
/* harmony import */ var src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50175);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77579);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70262);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60515);
/* harmony import */ var src_app_core_privileges_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9862);
/* harmony import */ var src_app_state_api_gateway_api_gateway_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94650);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55867);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17009);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(65412);
/* harmony import */ var src_app_core_auth_services_base64_encryption_util_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(46602);
/* harmony import */ var _services_detached_load_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45788);
/* harmony import */ var src_app_core_auth_services_AESEncryptionUtil_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3056);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(36895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4859);
/* harmony import */ var _shared_directives_permissions_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4344);



















function GeneratePinDisplayItemComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1, "Cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
const _c0 = function (a0) {
  return {
    "subrayado": a0
  };
};
function GeneratePinDisplayItemComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(2, _c0, !element_r12.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(i_r13 + 1);
  }
}
function GeneratePinDisplayItemComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1, "Peso");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function GeneratePinDisplayItemComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(2, _c0, !element_r14.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r14.weight);
  }
}
function GeneratePinDisplayItemComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1, "Cant.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function GeneratePinDisplayItemComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(2, _c0, !element_r15.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r15.quantity);
  }
}
function GeneratePinDisplayItemComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1, "Transportista");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function GeneratePinDisplayItemComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(2, _c0, !element_r16.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r16.shipper.split("/")[1]);
  }
}
function GeneratePinDisplayItemComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(0, "tr", 31);
  }
}
function GeneratePinDisplayItemComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(0, "tr", 32);
  }
}
function GeneratePinDisplayItemComponent_ng_container_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function GeneratePinDisplayItemComponent_ng_container_36_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r21);
      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(1);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r20.deletePin(_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnamespaceSVG"] */ .O4$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(2, "svg", 36)(3, "defs")(4, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(5, ".claseunicatrash{fill:#c0392b;stroke-width:0px;}");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(6, "g", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(7, "path", 37)(8, "path", 38)(9, "path", 39)(10, "rect", 40)(11, "rect", 41)(12, "rect", 42)(13, "rect", 43)(14, "rect", 44)(15, "rect", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
}
const _c1 = function (a0) {
  return [a0];
};
function GeneratePinDisplayItemComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, GeneratePinDisplayItemComponent_ng_container_36_div_1_Template, 16, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("permissions", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(1, _c1, ctx_r11.privileges.CS_IMP_EPI));
  }
}
let GeneratePinDisplayItemComponent = /*#__PURE__*/(() => {
  class GeneratePinDisplayItemComponent {
    constructor(store, matSnackBar, matDialog, base64EncryptionUtilService, detachedLoadService, _AESEncryptionUtilService) {
      this.store = store;
      this.matSnackBar = matSnackBar;
      this.matDialog = matDialog;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.detachedLoadService = detachedLoadService;
      this._AESEncryptionUtilService = _AESEncryptionUtilService;
      this.privileges = src_app_core_privileges_enum__WEBPACK_IMPORTED_MODULE_6__/* .privileges */ .U;
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__/* .MatTableDataSource */ .by();
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__/* .Subject */ .x();
      this.displayedColumns = [];
      this.pinDeleted = true;
      this.canPrint = false;
    }
    ngOnInit() {
      this.store.select(src_app_state_api_gateway_api_gateway_selectors__WEBPACK_IMPORTED_MODULE_1__/* .apiGatewayFeatureSelector */ .o).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      this.displayedColumns = ["id", "weight", "quantity", "shipper"];
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__/* .MatTableDataSource */ .by(this.pin.units);
    }
    ngAfterViewInit() {
      this.ocultarBotones();
    }
    print() {
      window.open(`${location.origin}/portal/api/pin/pdf/${this.pin.pin}`);
    }
    deletePin(buttonElement) {
      this.detachedLoadService.getDetachedLoad(this.base64EncryptionUtilService.encrypt(this.lastSearch)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .mergeMap */ .z)(encryptedLots => {
        let lots = [];
        if (encryptedLots) lots = JSON.parse(this._AESEncryptionUtilService.decrypt(encryptedLots));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(lots);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .catchError */ .K)(error => {
        this.matSnackBar.open("Ha ocurrido un error inesperado en la b\xFAsqueda", "", {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        });
        return rxjs__WEBPACK_IMPORTED_MODULE_12__/* .EMPTY */ .E;
      })).subscribe({
        next: result => {
          const lotsDate = result.filter(item => !item.truck_visit_appt_nbr).length;
          if (lotsDate === result.length) {
            if (this.pinDeleted) {
              const dialogRef = this.matDialog.open(src_app_modules_containerized_load_components_generate_pin_deactivation_dialog_generate_pin_deactivation_dialog_component__WEBPACK_IMPORTED_MODULE_13__/* .GeneratePinDeactivationDialogComponent */ .h, {
                disableClose: true,
                data: {
                  multiple: true
                }
              });
              dialogRef.afterClosed().subscribe({
                next: value => {
                  if (value) {
                    buttonElement.style.display = "none";
                    this.pinDeleted = true;
                    this.canPrint = true;
                    this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_0__/* .getGeneratePinDeactivateTotal */ .GC)({
                      body: {
                        pinNbr: this.pin.pin,
                        id: null,
                        observation: value
                      },
                      hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CS_IMP_EPI")[0].notificable,
                      notificationData: {
                        userId: this.userInfo.empresa?.id,
                        userName: this.userInfo.userName,
                        fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,
                        hbl: this.pin.nbr,
                        consigneeId: result[0].consigneeId,
                        consigneeName: result[0].consigneeName,
                        shipperId: this.pin.units[0].shipper?.split("/")[0],
                        shipperName: this.pin.units[0].shipper?.split("/")[1],
                        operation: "Anular PIN",
                        containers: "",
                        createdAt: "",
                        agent: "",
                        observations: value,
                        container: "",
                        cargoQuantity: this.pin.units.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0),
                        cargoWeigth: this.pin.units.reduce((previousValue, currentValue) => previousValue + currentValue.weight, 0)
                      },
                      privilege: "CS_IMP_EPI"
                    }));
                    this.pin.units.forEach(unit => unit.active = false);
                  }
                },
                error: error => console.error(error)
              });
            }
          } else {
            this.pinDeleted = true;
            buttonElement.style.display = "none";
            this.pinDeleted = true;
            this.canPrint = true;
            this.pin.units.forEach(unit => unit.active = false);
            this.matSnackBar.open("Uno o mas Cargo-lots  tiene cita asociada, no se puede eliminar el pin", "", {
              verticalPosition: "top",
              panelClass: ["error-snackbar"],
              duration: 5000
            });
          }
        }
      });
      //this.store.dispatch(getDetachedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch as string) }));
      /*
      this.store.select(detachedLoadFeatureSelector).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result: IDetachedLoadStore) => {
          const lotsDate = result.result.filter((item) => !item.truck_visit_appt_nbr).length;
                if(lotsDate === result.result.length) {
            if(this.pinDeleted) {
            const dialogRef = this.matDialog.open(GeneratePinDeactivationDialogComponent, {
              disableClose: true,
              data: {
                multiple: true,
              }
            });
                  dialogRef.afterClosed().subscribe({
              next: (value: string) => {
                  if(value) {
                    buttonElement.style.display = "none";
              this.pinDeleted = true;
              this.canPrint = true;
             
              this.store.dispatch(getGeneratePinDeactivateTotal({
                    body: {
                      pinNbr: this.pin.pin,
                      id: null,
                      observation: value
                    },
                    hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CS_IMP_EPI")[0].notificable,
                    notificationData: {
                      userId: this.userInfo.empresa?.id,
                      userName: this.userInfo.userName, // ID Usuario logueado
                      fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, // Nombre y Apellido del usuario logueado
                      hbl: this.pin.nbr, // HBL del PIN eliminado
                      consigneeId: result.result[0].consigneeId,// Identificación del Cliente(Consignee)
                      consigneeName: result.result[0].consigneeName,// Nombre del Cliente(Consignee)
                      shipperId: this.pin.units[0].shipper?.split("/")[0],// Identificador Empresa de transporte a la que fue asociado el PIN
                      shipperName: this.pin.units[0].shipper?.split("/")[1],// Nombre de Empresa de transporte a la que fue asociado el PIN
                      operation: "Anular PIN", // Tipo de transacción,
                      containers: "",
                      createdAt: "",
                      agent: "",
                      observations: value,
                      container: "",
                      cargoQuantity:  this.pin.units.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0),
                      cargoWeigth: this.pin.units.reduce((previousValue, currentValue) => previousValue + currentValue.weight, 0)
                    },
                    privilege: "CS_IMP_EPI"
                  }));
                  this.pin.units.forEach((unit: ICSGeneratePinUnit) => unit.active = false);
                  }
                },
                error: error => console.error(error)
              });
            } else {
              this.pinDeleted = true;
                    this.matSnackBar.open(
                "Uno o mas Cargo-lots  tiene cita asociada, no se puede eliminar el pin",
                "",
                {
                  verticalPosition: "top",
                  panelClass: ["error-snackbar"],
                  duration: 5000
                }
              );
                  }
            this.pinDeleted = false;
                }
                this.destroy$.next();
          this.destroy$.complete();
        },
        error: error => console.error(error)
      });
      */
    }

    ocultarBotones() {
      if (this.pin) this.canPrint = this.pin.units.every(unit => !unit.active);
    }
  }
  GeneratePinDisplayItemComponent.ɵfac = function GeneratePinDisplayItemComponent_Factory(t) {
    return new (t || GeneratePinDisplayItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_ngrx_store__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__/* .MatSnackBar */ .ux), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__/* .MatDialog */ .uw), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(src_app_core_auth_services_base64_encryption_util_service__WEBPACK_IMPORTED_MODULE_17__/* .Base64EncryptionUtilService */ .L), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_services_detached_load_service__WEBPACK_IMPORTED_MODULE_2__/* .DetachedLoadService */ .H), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(src_app_core_auth_services_AESEncryptionUtil_service__WEBPACK_IMPORTED_MODULE_3__/* .AESEncryptionUtilService */ .D));
  };
  GeneratePinDisplayItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: GeneratePinDisplayItemComponent,
    selectors: [["app-generate-pin-display-item"]],
    viewQuery: function GeneratePinDisplayItemComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .Gf(_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__/* .MatSort */ .YE, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.sort = _t.first);
      }
    },
    inputs: {
      pin: "pin",
      lastSearch: "lastSearch"
    },
    decls: 39,
    vars: 6,
    consts: [[1, "generate-pin-display-item"], [1, "generate-pin-display-item__header"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 40.59 25.45", 1, "generate-pin-display-item__truck"], ["id", "Capa_1-2"], [1, "cls-2"], ["id", "s", "d", "M30.88,17.23c-1.58,0-2.97.83-3.75,2.07h-13.38c-.5-.8-1.25-1.42-2.14-1.77V0h28.99v19.3h-5.96c-.79-1.24-2.17-2.07-3.75-2.07Z", 1, "cls-1"], ["id", "s-2", "d", "M40.59,20.97c0,.18-.07.35-.23.49-.15.13-.35.2-.55.2h-4.51c0-.6-.12-1.18-.34-1.7h5.62v1.01Z", 1, "cls-1"], ["id", "s-3", "d", "M26.44,21.66h-12.02c0-.6-.12-1.18-.34-1.7h12.69c-.22.52-.34,1.1-.34,1.7Z", 1, "cls-1"], ["id", "s-4", "d", "M0,11.82v8.01c0,.47.18.94.54,1.3.36.36.83.54,1.3.54h3.72c0-2.45,1.99-4.43,4.43-4.43.25,0,.5.02.74.06V4.63s-2.99.01-4.52.24c-1.53.23-3.13,1.28-4.36,2.51S0,10.21,0,11.82ZM1.29,11.7c0-1.18.45-2.36,1.35-3.26.9-.9,2.08-1.67,3.2-1.84,1.12-.17,3.32-.18,3.32-.18v5.61c0,.15-.05.29-.15.42-.1.12-.23.2-.38.23l-6.57,1.31c-.19.04-.38,0-.54-.13-.16-.13-.24-.32-.24-.51v-1.64Z", 1, "cls-1"], ["id", "s-5", "d", "M27.49,19.96c-.26.51-.4,1.09-.4,1.7,0,2.09,1.69,3.79,3.79,3.79,2.09,0,3.79-1.7,3.79-3.79,0-.61-.14-1.19-.4-1.7-.07-.14-.15-.28-.24-.42-.06-.08-.12-.17-.18-.25-.7-.87-1.76-1.42-2.96-1.42-1.2,0-2.27.56-2.96,1.42-.06.08-.12.16-.18.25-.09.13-.17.27-.24.42ZM28.92,21.66c0-.73.4-1.36.99-1.7.29-.17.62-.26.98-.26s.69.09.98.26c.59.34.99.97.99,1.7,0,1.08-.88,1.96-1.96,1.96s-1.96-.88-1.96-1.96Z", 1, "cls-1"], ["id", "s-6", "d", "M6.2,21.66c0,2.09,1.69,3.79,3.79,3.79,2.09,0,3.79-1.7,3.79-3.79,0-.78-.24-1.51-.64-2.12-.38-.56-.91-1.02-1.53-1.31-.27-.13-.57-.23-.88-.29-.24-.05-.48-.07-.74-.07-2.09,0-3.79,1.69-3.79,3.79ZM8.03,21.66c0-1.08.88-1.96,1.96-1.96.26,0,.51.05.74.14.36.14.66.39.88.7.22.32.35.7.35,1.12,0,1.08-.88,1.96-1.96,1.96-1.08,0-1.96-.88-1.96-1.96Z", 1, "cls-1"], ["id", "white_stripe", "x", "11.6", "y", "1.65", "width", "28.99", "height", ".49", 1, "cls-1"], [1, "generate-pin-display-item__pin-title"], [1, "generate-pin-display-item__pin"], ["mat-table", "", "matSort", "", 1, "generate-pin-display-item__table", 3, "dataSource"], ["table", ""], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-cell__right", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "weight"], ["matColumnDef", "quantity"], ["matColumnDef", "shipper"], ["mat-cell", "", "class", "table-cell__left", 3, "ngClass", 4, "matCellDef"], ["mat-header-row", "", "class", "generate-pin-display-item__row", 4, "matHeaderRowDef"], ["mat-row", "", "class", "generate-pin-display-item__row", 4, "matRowDef", "matRowDefColumns"], [1, "generate-pin-display-item__action"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "generate-pin-display-item__print", 3, "disabled", "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "table-cell__right", 3, "ngClass"], ["mat-cell", "", 1, "table-cell__left", 3, "ngClass"], ["mat-header-row", "", 1, "generate-pin-display-item__row"], ["mat-row", "", 1, "generate-pin-display-item__row"], ["class", "generate-pin-display-item__delete_all", 3, "click", 4, "permissions"], [1, "generate-pin-display-item__delete_all", 3, "click"], ["buttonElement", ""], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 22.99 26.54", 1, "generate-pin-display-item__delete"], ["d", "M16.18,26.54H7.37c-1.67,0-3.11-1.32-3.34-3.06L1.63,5.94c-.02-.14.02-.28.12-.39.09-.11.23-.17.37-.17h18.91c.14,0,.27.06.37.16s.14.24.12.38l-1.98,17.47c-.2,1.79-1.65,3.15-3.35,3.15ZM2.68,6.36l2.32,16.99c.17,1.26,1.19,2.21,2.37,2.21h8.82c1.21,0,2.23-.98,2.37-2.27l1.92-16.92H2.68Z", 1, "claseunicatrash"], ["d", "M22.5,6.36H.49c-.27,0-.49-.22-.49-.49v-3.24c0-.27.22-.49.49-.49h22c.27,0,.49.22.49.49v3.24c0,.27-.22.49-.49.49ZM.99,5.38h21.01v-2.25H.99v2.25Z", 1, "claseunicatrash"], ["d", "M14.17,3.13h-5.35c-.27,0-.49-.22-.49-.49V.49c0-.27.22-.49.49-.49h5.35c.27,0,.49.22.49.49v2.14c0,.27-.22.49-.49.49ZM9.31,2.14h4.36V.99h-4.36v1.15Z", 1, "claseunicatrash"], ["x", "7.35", "y", "21.3", "width", ".99", "height", "2.2", "transform", "translate(-2.68 1.13) rotate(-7.03)", 1, "claseunicatrash"], ["x", "6.43", "y", "8.58", "width", ".99", "height", "12.77", "transform", "translate(-1.78 .96) rotate(-7.03)", 1, "claseunicatrash"], ["x", "14.05", "y", "21.9", "width", "2.2", "height", ".99", "transform", "translate(-8.92 34.72) rotate(-83.04)", 1, "claseunicatrash"], ["x", "9.67", "y", "14.48", "width", "12.77", "height", ".99", "transform", "translate(-.75 29.09) rotate(-83.04)", 1, "claseunicatrash"], ["x", "11.04", "y", "8.63", "width", ".99", "height", "11.18", "transform", "translate(-.1 .08) rotate(-.39)", 1, "claseunicatrash"], ["x", "11.08", "y", "19.82", "width", ".99", "height", "3.67", 1, "claseunicatrash"]],
    template: function GeneratePinDisplayItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnamespaceSVG"] */ .O4$();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(2, "svg", 2)(3, "defs")(4, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(5, ".cls-1{fill:#5ba56b !important;stroke-width:0px;}.cls-2{opacity:.79;}");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(6, "g", 3)(7, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(8, "path", 5)(9, "path", 6)(10, "path", 7)(11, "path", 8)(12, "path", 9)(13, "path", 10)(14, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnamespaceHTML"] */ .kcU();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(16, "Pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(19, "table", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(21, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(22, GeneratePinDisplayItemComponent_th_22_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(23, GeneratePinDisplayItemComponent_td_23_Template, 2, 4, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(24, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(25, GeneratePinDisplayItemComponent_th_25_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(26, GeneratePinDisplayItemComponent_td_26_Template, 2, 4, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(27, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(28, GeneratePinDisplayItemComponent_th_28_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(29, GeneratePinDisplayItemComponent_td_29_Template, 2, 4, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(30, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(31, GeneratePinDisplayItemComponent_th_31_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(32, GeneratePinDisplayItemComponent_td_32_Template, 2, 4, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(33, GeneratePinDisplayItemComponent_tr_33_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(34, GeneratePinDisplayItemComponent_tr_34_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(36, GeneratePinDisplayItemComponent_ng_container_36_Template, 2, 3, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(37, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function GeneratePinDisplayItemComponent_Template_button_click_37_listener() {
          return ctx.print();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(38, "Imprimir");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx.pin.pin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.canPrint);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.canPrint);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgIf */ .O5, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__/* .MatButton */ .lW, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__/* .MatTable */ .BZ, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__/* .MatHeaderCellDef */ .fO, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__/* .MatHeaderRowDef */ .as, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__/* .MatColumnDef */ .w1, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__/* .MatCellDef */ .Dz, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__/* .MatRowDef */ .nj, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__/* .MatHeaderCell */ .ge, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__/* .MatCell */ .ev, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__/* .MatHeaderRow */ .XQ, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__/* .MatRow */ .Gk, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__/* .MatSort */ .YE, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__/* .MatSortHeader */ .nU, _shared_directives_permissions_directive__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsDirective */ .$],
    styles: [".generate-pin-display-item[_ngcontent-%COMP%]{padding:1rem;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;row-gap:1rem}.generate-pin-display-item__header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.generate-pin-display-item__truck[_ngcontent-%COMP%]{width:2.5rem}.generate-pin-display-item__pin-title[_ngcontent-%COMP%]{margin-left:.5rem!important}.generate-pin-display-item__pin-title[_ngcontent-%COMP%], .generate-pin-display-item__pin[_ngcontent-%COMP%]{width:max-content;margin-left:.15rem;background-color:#92b975;border-radius:.25rem;padding:.25rem;color:#fff;font-family:Gilroy-ExtraBold!important;font-size:1.5rem}.generate-pin-display-item__action[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.generate-pin-display-item__delete[_ngcontent-%COMP%]{width:1.25rem;color:#636e72!important}.generate-pin-display-item__delete_all[_ngcontent-%COMP%]{padding:.5rem;border:#c0392b solid 1px;border-radius:.25rem;cursor:pointer}.generate-pin-display-item__print[_ngcontent-%COMP%]{color:#fff!important;font-family:Gilroy-ExtraBold!important}  .generate-pin-display-item__table .mat-mdc-table .mat-mdc-header-cell{color:#666;border:#666666 solid .1rem!important;border-left:0!important;border-top:0!important}  .generate-pin-display-item__table .mat-mdc-table .mat-mdc-header-cell:last-child{border-right:0!important}  .generate-pin-display-item__table .mdc-tab__text-label{flex-direction:column!important}  .generate-pin-display-item__table .mdc-data-table__row{background-color:transparent!important;border:.1rem solid #666666!important;border-left:0!important;border-right:0!important;border-bottom:0!important}  .generate-pin-display-item__table .mdc-data-table__cell{border:.1rem solid #666666!important;border-left:0!important;border-bottom:0!important}  .generate-pin-display-item__table .mdc-data-table__cell:last-child{border:.1rem solid #666666!important;border-right:0!important}  .generate-pin-display-item__table .mdc-data-table__row:hover{background-color:transparent!important}  .generate-pin-display-item__table .mdc-data-table__row td{color:#666!important}  .generate-pin-display-item__table .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .generate-pin-display-item__table .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem;border-bottom:none!important}  .generate-pin-display-item__table .mdc-data-table__row:last-child{border-bottom:none!important}  .generate-pin-display-item__row th{color:#666!important;border-left:.1rem solid;border-color:#666}  .generate-pin-display-item__row th:first-child{border-left:none!important}.subrayado[_ngcontent-%COMP%]{text-decoration:line-through}"]
  });
  return GeneratePinDisplayItemComponent;
})();

/***/ }),

/***/ 6799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DetachedLoadModule": () => (/* binding */ DetachedLoadModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__(36895);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2020/router.mjs + 5 modules
var router = __webpack_require__(77518);
// EXTERNAL MODULE: ./src/app/shared/components/lock/lock.component.ts
var lock_component = __webpack_require__(80524);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs
var core = __webpack_require__(94650);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Observable.js
var Observable = __webpack_require__(69751);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subject.js + 1 modules
var Subject = __webpack_require__(77579);
// EXTERNAL MODULE: ./src/app/state/detached-load/detached-load.actions.ts
var detached_load_actions = __webpack_require__(38013);
// EXTERNAL MODULE: ./src/app/state/detached-load/detached-load.selectors.ts
var detached_load_selectors = __webpack_require__(47293);
// EXTERNAL MODULE: ./src/app/core/privileges.enum.ts
var privileges_enum = __webpack_require__(9862);
// EXTERNAL MODULE: ./src/app/state/api-gateway/api-gateway.selectors.ts
var api_gateway_selectors = __webpack_require__(75868);
// EXTERNAL MODULE: ./src/app/state/shared/shared.actions.ts
var shared_actions = __webpack_require__(68438);
// EXTERNAL MODULE: ./src/app/shared/components/make-appointment/make-appointment.component.ts
var make_appointment_component = __webpack_require__(2192);
// EXTERNAL MODULE: ./src/app/core/auth/services/base64-encryption-util.service.ts
var base64_encryption_util_service = __webpack_require__(46602);
// EXTERNAL MODULE: ./node_modules/@ngrx/store/fesm2020/ngrx-store.mjs + 4 modules
var ngrx_store = __webpack_require__(55867);
// EXTERNAL MODULE: ./src/app/modules/detached-load/services/communication.service.ts
var communication_service = __webpack_require__(97775);
// EXTERNAL MODULE: ./src/app/shared/services/storageservice.service.ts
var storageservice_service = __webpack_require__(91685);
// EXTERNAL MODULE: ./src/app/shared/services/notifications.service.ts
var notifications_service = __webpack_require__(14779);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/icon.mjs
var icon = __webpack_require__(97392);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/tabs.mjs
var tabs = __webpack_require__(3848);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/card.mjs
var card = __webpack_require__(73546);
// EXTERNAL MODULE: ./src/app/shared/components/search/search.component.ts
var search_component = __webpack_require__(89727);
// EXTERNAL MODULE: ./src/app/shared/directives/permissions.directive.ts
var permissions_directive = __webpack_require__(4344);
// EXTERNAL MODULE: ./src/app/shared/directives/hour-restriction.directive.ts
var hour_restriction_directive = __webpack_require__(93419);
// EXTERNAL MODULE: ./src/app/shared/components/vehicle-searcher/vehicle-searcher.component.ts
var vehicle_searcher_component = __webpack_require__(28128);
// EXTERNAL MODULE: ./src/app/state/containerized-load/containerized-load.actions.ts
var containerized_load_actions = __webpack_require__(50175);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/table.mjs + 2 modules
var table = __webpack_require__(7155);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/tooltip.mjs
var tooltip = __webpack_require__(10266);
;// CONCATENATED MODULE: ./src/app/modules/detached-load/components/detached-load-result/detached-load-result.component.ts









function DetachedLoadResultComponent_ng_container_0_li_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "li", 7)(1, "span", 8);
    core/* ɵɵi18n */.SDv(2, 23);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "span");
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r1.vesselVisit.vesselName);
  }
}
function DetachedLoadResultComponent_ng_container_0_th_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 24);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 25);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function DetachedLoadResultComponent_ng_container_0_td_16_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 26);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const i_r21 = ctx.index;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(i_r21 + 1);
  }
}
function DetachedLoadResultComponent_ng_container_0_th_18_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 24);
  }
}
function DetachedLoadResultComponent_ng_container_0_td_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 26);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r22 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r22.unitNbr, " ");
  }
}
function DetachedLoadResultComponent_ng_container_0_th_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 24);
  }
}
function DetachedLoadResultComponent_ng_container_0_td_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 26)(1, "span", 27);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(element_r23.twenty ? "20''" : "40''");
  }
}
function DetachedLoadResultComponent_ng_container_0_th_24_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 24);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 28);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function DetachedLoadResultComponent_ng_container_0_td_25_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 26);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r24.unitSequence, " ");
  }
}
function DetachedLoadResultComponent_ng_container_0_th_27_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 24);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 29);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function DetachedLoadResultComponent_ng_container_0_td_28_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 26);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r25.cargoQuantity, " ");
  }
}
function DetachedLoadResultComponent_ng_container_0_th_30_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 24);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 30);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function DetachedLoadResultComponent_ng_container_0_td_31_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 26);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r26.cargoWeigth, " ");
  }
}
function DetachedLoadResultComponent_ng_container_0_th_33_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 24);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 31);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function DetachedLoadResultComponent_ng_container_0_td_34_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 26);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r27.destination, " ");
  }
}
function DetachedLoadResultComponent_ng_container_0_th_36_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 24);
  }
}
function DetachedLoadResultComponent_ng_container_0_td_37_div_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 36);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r28 = core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r29 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r29.getMessage("detached-load.hasPin", element_r28.truckName));
  }
}
function DetachedLoadResultComponent_ng_container_0_td_37_div_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 37);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r30 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r30.getMessage("detached-load.hasChargeableUnitEvents"));
  }
}
function DetachedLoadResultComponent_ng_container_0_td_37_div_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 37);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r31 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r31.getMessage("detached-load.hasDebt-false"));
  }
}
function DetachedLoadResultComponent_ng_container_0_td_37_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 38);
    core/* ɵɵlistener */.NdJ("click", function DetachedLoadResultComponent_ng_container_0_td_37_div_5_Template_div_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r42);
      const element_r28 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r40 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r40.clickMoney(element_r28));
    });
    core/* ɵɵelement */._UZ(1, "img", 39);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r32 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r32.getMessage("detached-load.hasDebt-true"));
  }
}
function DetachedLoadResultComponent_ng_container_0_td_37_div_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 40);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r28 = core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r33 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r33.getMessage("detached-load.hasHolds", element_r28.holdDescription));
  }
}
function DetachedLoadResultComponent_ng_container_0_td_37_div_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 40);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r34 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r34.getMessage("modules.detached-load.storageDaysOwed"));
  }
}
function DetachedLoadResultComponent_ng_container_0_td_37_div_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 40);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r35 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r35.getMessage("modules.detached-load.yard"));
  }
}
function DetachedLoadResultComponent_ng_container_0_td_37_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 38);
    core/* ɵɵlistener */.NdJ("click", function DetachedLoadResultComponent_ng_container_0_td_37_div_9_Template_div_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r46);
      const element_r28 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r44 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r44.clickAppointment(element_r28));
    });
    core/* ɵɵelement */._UZ(1, "img", 41);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r36 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r36.getMessage("modules.detached-load.truck_visit_appt_nbr"));
  }
}
function DetachedLoadResultComponent_ng_container_0_td_37_div_10_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 42);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r37 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r37.getMessage("modules.detached-load.holdConsigneeActive-true"));
  }
}
function DetachedLoadResultComponent_ng_container_0_td_37_div_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 43);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r38 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r38.getMessage("modules.detached-load.holdConsigneeActive-null"));
  }
}
function DetachedLoadResultComponent_ng_container_0_td_37_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 26)(1, "div", 32);
    core/* ɵɵtemplate */.YNc(2, DetachedLoadResultComponent_ng_container_0_td_37_div_2_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(3, DetachedLoadResultComponent_ng_container_0_td_37_div_3_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(4, DetachedLoadResultComponent_ng_container_0_td_37_div_4_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(5, DetachedLoadResultComponent_ng_container_0_td_37_div_5_Template, 2, 1, "div", 34);
    core/* ɵɵtemplate */.YNc(6, DetachedLoadResultComponent_ng_container_0_td_37_div_6_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(7, DetachedLoadResultComponent_ng_container_0_td_37_div_7_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(8, DetachedLoadResultComponent_ng_container_0_td_37_div_8_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(9, DetachedLoadResultComponent_ng_container_0_td_37_div_9_Template, 2, 1, "div", 34);
    core/* ɵɵtemplate */.YNc(10, DetachedLoadResultComponent_ng_container_0_td_37_div_10_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(11, DetachedLoadResultComponent_ng_container_0_td_37_div_11_Template, 2, 1, "div", 33);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", element_r28.hasPin);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !element_r28.hasChargeableUnitEvents);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !element_r28.hasDebt);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r28.hasDebt);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r28.hasHolds);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r28.hasChargeableUnitEvents || element_r28.hasDebt || element_r28.storageDaysOwed > 0);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !element_r28.yard);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r28.truck_visit_appt_nbr);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r28.hasHoldConsignee && element_r28.holdConsigneeActive);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r28.hasHoldConsignee && !element_r28.holdConsigneeActive);
  }
}
function DetachedLoadResultComponent_ng_container_0_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 44);
  }
}
function DetachedLoadResultComponent_ng_container_0_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 45);
  }
}
function DetachedLoadResultComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
    core/* ɵɵtext */._uU(5);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(6, "ul", 5);
    core/* ɵɵtemplate */.YNc(7, DetachedLoadResultComponent_ng_container_0_li_7_Template, 5, 1, "li", 6);
    core/* ɵɵelementStart */.TgZ(8, "li", 7)(9, "span", 8);
    core/* ɵɵi18n */.SDv(10, 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(11, "span");
    core/* ɵɵtext */._uU(12);
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(13, "table", 10);
    core/* ɵɵelementContainerStart */.ynx(14, 11);
    core/* ɵɵtemplate */.YNc(15, DetachedLoadResultComponent_ng_container_0_th_15_Template, 3, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(16, DetachedLoadResultComponent_ng_container_0_td_16_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(17, 14);
    core/* ɵɵtemplate */.YNc(18, DetachedLoadResultComponent_ng_container_0_th_18_Template, 1, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(19, DetachedLoadResultComponent_ng_container_0_td_19_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(20, 15);
    core/* ɵɵtemplate */.YNc(21, DetachedLoadResultComponent_ng_container_0_th_21_Template, 1, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(22, DetachedLoadResultComponent_ng_container_0_td_22_Template, 3, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(23, 16);
    core/* ɵɵtemplate */.YNc(24, DetachedLoadResultComponent_ng_container_0_th_24_Template, 3, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(25, DetachedLoadResultComponent_ng_container_0_td_25_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(26, 17);
    core/* ɵɵtemplate */.YNc(27, DetachedLoadResultComponent_ng_container_0_th_27_Template, 3, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(28, DetachedLoadResultComponent_ng_container_0_td_28_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(29, 18);
    core/* ɵɵtemplate */.YNc(30, DetachedLoadResultComponent_ng_container_0_th_30_Template, 3, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(31, DetachedLoadResultComponent_ng_container_0_td_31_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(32, 19);
    core/* ɵɵtemplate */.YNc(33, DetachedLoadResultComponent_ng_container_0_th_33_Template, 3, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(34, DetachedLoadResultComponent_ng_container_0_td_34_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(35, 20);
    core/* ɵɵtemplate */.YNc(36, DetachedLoadResultComponent_ng_container_0_th_36_Template, 1, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(37, DetachedLoadResultComponent_ng_container_0_td_37_Template, 12, 10, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵtemplate */.YNc(38, DetachedLoadResultComponent_ng_container_0_tr_38_Template, 1, 0, "tr", 21);
    core/* ɵɵtemplate */.YNc(39, DetachedLoadResultComponent_ng_container_0_tr_39_Template, 1, 0, "tr", 22);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵtextInterpolate1 */.hij("HBL - ", ctx_r0.dataSource[0].nbr, "");
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.vesselVisit.vesselName);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵtextInterpolate2 */.AsE("", ctx_r0.dataSource[0].id, " - ", ctx_r0.dataSource[0].consigneeName, "");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("dataSource", ctx_r0.dataSource);
    core/* ɵɵadvance */.xp6(25);
    core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx_r0.displayedColumns);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx_r0.displayedColumns);
  }
}
let DetachedLoadResultComponent = /*#__PURE__*/(() => {
  class DetachedLoadResultComponent {
    constructor(store, router, communicationService) {
      this.store = store;
      this.router = router;
      this.communicationService = communicationService;
      this.detached = false;
      this.dataSource = {};
      this.vesselVisit = null;
      this.displayedColumns = [];
    }
    ngOnInit() {
      this.displayedColumns = ["cargo", "peso", "cantidad", "dest", "actions"];
      this.store.dispatch((0,detached_load_actions/* getVesselVisit */.kL)({
        vesselVisitID: this.dataSource[0].vesselVisitId
      }));
    }
    getMessage(message, param) {
      switch (message) {
        case "detached-load.hasPin":
          return "Esta unidad fue asignada al transportista " + param + "";
          break;
        case "detached-load.hasChargeableUnitEvents":
          return "Esta unidad no tiene cargos facturables que eviten el retiro";
          break;
        case "detached-load.hasDebt-false":
          return "Esta unidad no tiene deudas que eviten el retiro";
          break;
        case "detached-load.hasDebt-true":
          return "Esta unidad tiene deudas pendientes con el terminal";
          break;
        case "detached-load.hasHolds":
          return "Esta unidad no tiene permisos suficientes para generarle pin (" + param + ")";
          break;
        case "modules.detached-load.storageDaysOwed":
          return "Esta unidad tiene cargos pendientes o deudas, por lo tanto no se le podr\xE1 generar PIN /CITA";
          break;
        case "modules.detached-load.yard":
          return "Esta unidad no est\xE1 en PATIO";
          break;
        case "modules.detached-load.holdConsigneeActive-true":
          return "Esta unidad est\xE1 bloqueada por el importador y no podr\xE1 ser retirada del terminal";
          break;
        case "modules.detached-load.holdConsigneeActive-null":
          return "Esta unidad  puede ser retirada del terminal";
          break;
        case "modules.detached-load.truck_visit_appt_nbr":
          return "Esta unidad tiene una cita asignada";
          break;
        default:
          return "Mensaje no existe.";
          break;
      }
    }
    clickMoney(elemet) {
      localStorage.setItem('unitNbr', elemet.hbl);
      let unitNbr = `BBK|${elemet.unitNbr}|${elemet.hbl}`;
      this.store.dispatch((0,containerized_load_actions/* getDataUnitNbr */.Pe)({
        unitNbr: unitNbr
      }));
      this.router.navigate(['carga-suelta', 'importacion'], {
        state: {
          data: unitNbr
        }
      });
    }
    clickAppointment(elemet) {
      let appointment = elemet.truck_visit_appt_nbr;
      this.store.dispatch((0,detached_load_actions/* getDataAppointmentDetail */.yg)({
        truckVisitNbr: appointment
      }));
      //let appointment: string = elemet.truck_visit_appt_nbr;
      localStorage.setItem('elementsDetachedLoad', JSON.stringify(elemet));
      this.router.navigate(['carga-suelta', 'appointment-creation'], {});
    }
  }
  DetachedLoadResultComponent.ɵfac = function DetachedLoadResultComponent_Factory(t) {
    return new (t || DetachedLoadResultComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(communication_service/* CommunicationService */.O));
  };
  DetachedLoadResultComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: DetachedLoadResultComponent,
    selectors: [["app-detached-load-result"]],
    inputs: {
      detached: "detached",
      dataSource: ["data", "dataSource"],
      vesselVisit: "vesselVisit"
    },
    decls: 1,
    vars: 1,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2396714cd1aed0868ae9131b1528a102751c405cb2654e4cb517eb26233c3fb6$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS__1 = goog.getMsg(" breakbulk.views.search.import.DETAIL_HBL.IMPORTADOR ");
        i18n_0 = MSG_EXTERNAL_2396714cd1aed0868ae9131b1528a102751c405cb2654e4cb517eb26233c3fb6$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS__1;
      } else {
        i18n_0 = "Importador";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_00f17ea336a6e0fe9019507fcc7e3d9ac16434cbb12de7898b1eb1d72afa7a3e$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS___3 = goog.getMsg(" breakbulk.views.search.import.DETAIL_HBL.BUQUE ");
        i18n_2 = MSG_EXTERNAL_00f17ea336a6e0fe9019507fcc7e3d9ac16434cbb12de7898b1eb1d72afa7a3e$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS___3;
      } else {
        i18n_2 = "Buque";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_fb08af264fa02caeaec4cafc748967996d53b5aaf3889563ad3f635dff2b4363$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS___5 = goog.getMsg(" agent.views.agent-import-search.BL_CONTAINERS ");
        i18n_4 = MSG_EXTERNAL_fb08af264fa02caeaec4cafc748967996d53b5aaf3889563ad3f635dff2b4363$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS___5;
      } else {
        i18n_4 = "Contenedores del BL";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_be9ebb72babaa74b4eb37a3ec266a54e0ea92680f5b34a5102299c07a1b8ad2d$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS___7 = goog.getMsg(" config.views.config-users.navbar.CREATE_POSITION_MESSAGE ");
        i18n_6 = MSG_EXTERNAL_be9ebb72babaa74b4eb37a3ec266a54e0ea92680f5b34a5102299c07a1b8ad2d$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS___7;
      } else {
        i18n_6 = "Cargo";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_cd5d9788b2930b86455d795ac8a9bb1d7368b4fbdf63d33809e2555b5e5798c6$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS___9 = goog.getMsg(" breakbulk.views.search.import.DETAIL_HBL.TABLE.CANTIDAD ");
        i18n_8 = MSG_EXTERNAL_cd5d9788b2930b86455d795ac8a9bb1d7368b4fbdf63d33809e2555b5e5798c6$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS___9;
      } else {
        i18n_8 = "Cant.";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_c63a3c299683f6e643faec9c08a123d34f41a0c3064a1535c8119d09c1614363$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS___11 = goog.getMsg(" breakbulk.views.search.import.DETAIL_HBL.TABLE.PESO ");
        i18n_10 = MSG_EXTERNAL_c63a3c299683f6e643faec9c08a123d34f41a0c3064a1535c8119d09c1614363$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS___11;
      } else {
        i18n_10 = "Peso (t)";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_da2209f8a4794cbbe8d674669a5ce58b4843840e53b44c621dbf165698edcddc$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS___13 = goog.getMsg(" breakbulk.views.search.import.DETAIL_HBL.TABLE.DESTINO ");
        i18n_12 = MSG_EXTERNAL_da2209f8a4794cbbe8d674669a5ce58b4843840e53b44c621dbf165698edcddc$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_RESULT_DETACHED_LOAD_RESULT_COMPONENT_TS___13;
      } else {
        i18n_12 = "Dest";
      }
      return [[4, "ngIf"], [1, "load__result"], [1, "load__body"], [1, "load__result-header"], [1, "load__result-title"], [1, "load__container-list"], ["class", "load__container-item", 4, "ngIf"], [1, "load__container-item"], [1, "load__container-item-title"], i18n_0, ["mat-table", "", 3, "dataSource"], ["matColumnDef", "container"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "idContainer"], ["matColumnDef", "inches"], ["matColumnDef", "cargo"], ["matColumnDef", "cantidad"], ["matColumnDef", "peso"], ["matColumnDef", "dest"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 4, "matRowDef", "matRowDefColumns"], i18n_2, ["mat-header-cell", ""], i18n_4, ["mat-cell", ""], [1, "badge"], i18n_6, i18n_8, i18n_10, i18n_12, [1, "load__actions-wrapper"], ["matTooltipPosition", "above", 3, "matTooltip", 4, "ngIf"], ["matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"], ["matTooltipPosition", "above", 3, "matTooltip"], ["src", "assets/icon/camion.svg", 1, "load__container-icon"], ["src", "assets/icon/nube.svg", 1, "load__container-icon"], ["matTooltipPosition", "above", 3, "matTooltip", "click"], ["src", "assets/icon/billete.svg", 1, "load__container-icon"], ["src", "assets/icon/prohibido.svg", 1, "load__container-icon"], ["src", "assets/icon/calendario.svg", 1, "load__container-icon"], ["src", "assets/icon/candado_abierto.svg", 1, "load__container-icon", "load__container-icon_lock"], ["src", "assets/icon/candado_cerrado.svg", 1, "load__container-icon", "load__container-icon_lock"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row"]];
    },
    template: function DetachedLoadResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, DetachedLoadResultComponent_ng_container_0_Template, 40, 7, "ng-container", 0);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", ctx.vesselVisit);
      }
    },
    dependencies: [common/* NgIf */.O5, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, tooltip/* MatTooltip */.gM],
    styles: [".load__result[_ngcontent-%COMP%]{width:100%;margin-top:2rem;background-color:#fff;font-family:Gilroy-light}.load__result-header[_ngcontent-%COMP%]{width:max-content;background-color:#92b975;color:#fff;border-radius:.5rem;padding:.5rem 1.5rem}.load__result-title[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Gilroy-light;margin:0}.load__container-list[_ngcontent-%COMP%]{width:100%;margin-top:.5rem;padding:0;list-style:none;color:#666}.load__container-item[_ngcontent-%COMP%]{width:100%;background-color:#f9f9f9;border-radius:.5rem;padding:.5rem 1.5rem;margin-bottom:.5rem;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr}.load__container-item-title[_ngcontent-%COMP%]{font-size:1.2rem}.badge[_ngcontent-%COMP%]{font-size:12px;padding:.1rem .5rem;background-color:#777;color:#fff;border-radius:10px}.load__container-icon[_ngcontent-%COMP%]{width:1rem;margin-left:.1rem;margin-right:.1rem;cursor:pointer;transition:.25s}.load__container-icon_lock[_ngcontent-%COMP%]{width:.7rem}.load__container-icon[_ngcontent-%COMP%]:hover{color:#95a5a6}.load__actions-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.load__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start}  .mdc-data-table__row{height:40px!important}tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover{background:whitesmoke}"]
  });
  return DetachedLoadResultComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/detached-load/components/detached-load/detached-load.component.ts
























const _c0 = ["makeAppointmentContainer"];
function DetachedLoadComponent_ng_container_0_mat_tab_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 17)(1, "defs");
    core/* ɵɵelement */._UZ(2, "style");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "g", 11);
    core/* ɵɵelement */._UZ(4, "path", 18)(5, "path", 19)(6, "path", 20);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(7, "span");
    core/* ɵɵi18n */.SDv(8, 21);
    core/* ɵɵelementEnd */.qZA();
  }
}
function DetachedLoadComponent_ng_container_0_mat_tab_6_ng_container_14_app_detached_load_result_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-detached-load-result", 23);
  }
  if (rf & 2) {
    const detachedLoad_r1 = core/* ɵɵnextContext */.oxw(3).ngIf;
    core/* ɵɵproperty */.Q6J("data", detachedLoad_r1.result)("vesselVisit", detachedLoad_r1.vesselVisit);
  }
}
function DetachedLoadComponent_ng_container_0_mat_tab_6_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, DetachedLoadComponent_ng_container_0_mat_tab_6_ng_container_14_app_detached_load_result_1_Template, 1, 2, "app-detached-load-result", 22);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    core/* ɵɵnextContext */.oxw();
    const _r9 = core/* ɵɵreference */.MAs(16);
    const detachedLoad_r1 = core/* ɵɵnextContext */.oxw().ngIf;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", detachedLoad_r1.result.length)("ngIfElse", _r9);
  }
}
function DetachedLoadComponent_ng_container_0_mat_tab_6_ng_template_15_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "p", 24);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r14 = core/* ɵɵnextContext */.oxw(4);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r14.notFoundText);
  }
}
function DetachedLoadComponent_ng_container_0_mat_tab_6_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtemplate */.YNc(0, DetachedLoadComponent_ng_container_0_mat_tab_6_ng_template_15_ng_container_0_Template, 3, 1, "ng-container", 0);
  }
  if (rf & 2) {
    const detachedLoad_r1 = core/* ɵɵnextContext */.oxw(2).ngIf;
    core/* ɵɵproperty */.Q6J("ngIf", detachedLoad_r1.firstSearch);
  }
}
function DetachedLoadComponent_ng_container_0_mat_tab_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, DetachedLoadComponent_ng_container_0_mat_tab_6_ng_template_1_Template, 9, 0, "ng-template", 6);
    core/* ɵɵelementStart */.TgZ(2, "div", 7)(3, "h2", 8);
    core/* ɵɵi18n */.SDv(4, 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(5, "svg", 10)(6, "defs")(7, "style");
    core/* ɵɵtext */._uU(8, ".cls-1{fill:#c5c6c8;}.cls-2{fill:#7ba052;}.cls-3{fill:#4b8051;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(9, "g", 11);
    core/* ɵɵelement */._UZ(10, "rect", 12)(11, "rect", 13)(12, "rect", 14);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(13, "app-search", 15);
    core/* ɵɵlistener */.NdJ("submitSearch", function DetachedLoadComponent_ng_container_0_mat_tab_6_Template_app_search_submitSearch_13_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r16 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r16.submit($event));
    })("cleanEmmiter", function DetachedLoadComponent_ng_container_0_mat_tab_6_Template_app_search_cleanEmmiter_13_listener() {
      core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r18 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r18.clean());
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(14, DetachedLoadComponent_ng_container_0_mat_tab_6_ng_container_14_Template, 2, 2, "ng-container", 0);
    core/* ɵɵtemplate */.YNc(15, DetachedLoadComponent_ng_container_0_mat_tab_6_ng_template_15_Template, 1, 1, "ng-template", null, 16, core/* ɵɵtemplateRefExtractor */.W1O);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const detachedLoad_r1 = core/* ɵɵnextContext */.oxw().ngIf;
    core/* ɵɵadvance */.xp6(13);
    core/* ɵɵproperty */.Q6J("hasCleanButton", true);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", detachedLoad_r1.result);
  }
}
function DetachedLoadComponent_ng_container_0_mat_tab_7_ng_template_1__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 30)(1, "g", 31);
    core/* ɵɵelement */._UZ(2, "path", 32)(3, "path", 33)(4, "path", 34)(5, "path", 35)(6, "path", 36)(7, "path", 37)(8, "path", 38);
    core/* ɵɵelementEnd */.qZA()();
  }
}
function DetachedLoadComponent_ng_container_0_mat_tab_7_ng_template_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 39)(1, "g", 31);
    core/* ɵɵelement */._UZ(2, "path", 40)(3, "path", 41)(4, "path", 42)(5, "path", 43)(6, "path", 44)(7, "path", 45)(8, "path", 46)(9, "path", 47)(10, "path", 48)(11, "path", 49)(12, "path", 50)(13, "path", 51);
    core/* ɵɵelementEnd */.qZA()();
  }
}
function DetachedLoadComponent_ng_container_0_mat_tab_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtemplate */.YNc(0, DetachedLoadComponent_ng_container_0_mat_tab_7_ng_template_1__svg_svg_0_Template, 9, 0, "svg", 28);
    core/* ɵɵtemplate */.YNc(1, DetachedLoadComponent_ng_container_0_mat_tab_7_ng_template_1__svg_svg_1_Template, 14, 0, "svg", 29);
    core/* ɵɵelementStart */.TgZ(2, "span");
    core/* ɵɵtext */._uU(3);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r20 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r20.titleTab == "Crear Cita");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r20.titleTab == "Editar Cita");
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r20.titleTab, " ");
  }
}
function DetachedLoadComponent_ng_container_0_mat_tab_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, DetachedLoadComponent_ng_container_0_mat_tab_7_ng_template_1_Template, 4, 3, "ng-template", 6);
    core/* ɵɵelementStart */.TgZ(2, "div", 7)(3, "h2", 8);
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(5, "svg", 25)(6, "defs")(7, "style");
    core/* ɵɵtext */._uU(8, ".cls-1{fill:#c5c6c8;}.cls-2{fill:#7ba052;}.cls-3{fill:#4b8051;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(9, "g", 11);
    core/* ɵɵelement */._UZ(10, "rect", 12)(11, "rect", 13)(12, "rect", 14);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementContainerStart */.ynx(13, 26);
    core/* ɵɵelement */._UZ(14, "app-vehicle-searcher", 27);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r3 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r3.titleTab, " ");
    core/* ɵɵadvance */.xp6(10);
    core/* ɵɵproperty */.Q6J("loadType", ctx_r3.loadType)("origin", ctx_r3.origin);
  }
}
const _c5 = function () {
  return ["/carga-suelta/documents"];
};
function DetachedLoadComponent_ng_container_0_ng_container_9_button_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "button", 57);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 58)(2, "g", 59);
    core/* ɵɵelement */._UZ(3, "path", 60)(4, "path", 61)(5, "path", 62)(6, "path", 63)(7, "path", 64)(8, "path", 65)(9, "path", 66)(10, "path", 67)(11, "path", 68)(12, "path", 69)(13, "path", 70)(14, "path", 71)(15, "path", 72)(16, "path", 73);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelement */._UZ(17, "div", 74);
    core/* ɵɵelementStart */.TgZ(18, "span");
    core/* ɵɵtext */._uU(19, "Documentaci\u00F3n");
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    core/* ɵɵproperty */.Q6J("routerLink", core/* ɵɵpureFunction0 */.DdM(1, _c5));
  }
}
function DetachedLoadComponent_ng_container_0_ng_container_9_button_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "button", 75);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 76)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".billing{fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 11);
    core/* ɵɵelement */._UZ(6, "rect", 77)(7, "rect", 78)(8, "rect", 79)(9, "rect", 80)(10, "rect", 81)(11, "rect", 82)(12, "rect", 83)(13, "rect", 84)(14, "rect", 85)(15, "rect", 86)(16, "rect", 87)(17, "rect", 88)(18, "rect", 89)(19, "rect", 90)(20, "rect", 91)(21, "rect", 92)(22, "rect", 93)(23, "rect", 94)(24, "polyline", 95)(25, "polyline", 96);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelement */._UZ(26, "div", 74);
    core/* ɵɵelementStart */.TgZ(27, "span");
    core/* ɵɵtext */._uU(28, "Facturaci\u00F3n");
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r25 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("hourRestriction", "CS_IMP_FAC")("hourRestrictionAPIGateway", ctx_r25.userInfo)("hourRestrictionCallback", ctx_r25.billing.bind(ctx_r25));
  }
}
function DetachedLoadComponent_ng_container_0_ng_container_9_button_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "button", 75);
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 97)(2, "g", 98);
    core/* ɵɵelement */._UZ(3, "path", 99)(4, "path", 100)(5, "path", 101)(6, "path", 102)(7, "path", 103)(8, "path", 104)(9, "path", 105)(10, "path", 106)(11, "path", 107);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelement */._UZ(12, "div", 74);
    core/* ɵɵelementStart */.TgZ(13, "span");
    core/* ɵɵtext */._uU(14, "Generar Pin");
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r26 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("hourRestriction", "CS_IMP_PIN")("hourRestrictionAPIGateway", ctx_r26.userInfo)("hourRestrictionCallback", ctx_r26.generatePin.bind(ctx_r26));
  }
}
function DetachedLoadComponent_ng_container_0_ng_container_9_button_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "button", 108)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "lock");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(3, "div", 74);
    core/* ɵɵelementStart */.TgZ(4, "span");
    core/* ɵɵi18n */.SDv(5, 109);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r27 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("hourRestriction", "CS_CTA_BLOQ")("hourRestrictionAPIGateway", ctx_r27.userInfo)("hourRestrictionCallback", ctx_r27.blockUnit.bind(ctx_r27));
  }
}
function DetachedLoadComponent_ng_container_0_ng_container_9_button_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "button", 110)(1, "mat-icon");
    core/* ɵɵtext */._uU(2, "lock_open");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(3, "div", 74);
    core/* ɵɵelementStart */.TgZ(4, "span");
    core/* ɵɵi18n */.SDv(5, 111);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r28 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("hourRestriction", "CS_CTA_DESBL")("hourRestrictionAPIGateway", ctx_r28.userInfo)("hourRestrictionCallback", ctx_r28.unlockUnit.bind(ctx_r28));
  }
}
const _c10 = function (a0) {
  return [a0];
};
function DetachedLoadComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 52);
    core/* ɵɵelementContainerStart */.ynx(2);
    core/* ɵɵtemplate */.YNc(3, DetachedLoadComponent_ng_container_0_ng_container_9_button_3_Template, 20, 2, "button", 53);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(4);
    core/* ɵɵtemplate */.YNc(5, DetachedLoadComponent_ng_container_0_ng_container_9_button_5_Template, 29, 3, "button", 54);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵtemplate */.YNc(6, DetachedLoadComponent_ng_container_0_ng_container_9_button_6_Template, 15, 3, "button", 54);
    core/* ɵɵtemplate */.YNc(7, DetachedLoadComponent_ng_container_0_ng_container_9_button_7_Template, 6, 3, "button", 55);
    core/* ɵɵtemplate */.YNc(8, DetachedLoadComponent_ng_container_0_ng_container_9_button_8_Template, 6, 3, "button", 56);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r4 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(5, _c10, ctx_r4.privileges.CS_IMP_DOC));
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(7, _c10, ctx_r4.privileges.CS_IMP_FAC));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(9, _c10, ctx_r4.privileges.CS_IMP_PIN));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(11, _c10, ctx_r4.privileges.CS_CTA_BLOQ));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(13, _c10, ctx_r4.privileges.CS_CTA_DESBL));
  }
}
function DetachedLoadComponent_ng_container_0_ng_template_10_Template(rf, ctx) {}
function DetachedLoadComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 1)(2, "div", 2)(3, "mat-card")(4, "mat-card-content")(5, "mat-tab-group", 3);
    core/* ɵɵlistener */.NdJ("selectedTabChange", function DetachedLoadComponent_ng_container_0_Template_mat_tab_group_selectedTabChange_5_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r30);
      const ctx_r29 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r29.onTabChanged($event));
    });
    core/* ɵɵtemplate */.YNc(6, DetachedLoadComponent_ng_container_0_mat_tab_6_Template, 17, 2, "mat-tab", 0);
    core/* ɵɵtemplate */.YNc(7, DetachedLoadComponent_ng_container_0_mat_tab_7_Template, 15, 3, "mat-tab", 0);
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(8, "div", 4);
    core/* ɵɵtemplate */.YNc(9, DetachedLoadComponent_ng_container_0_ng_container_9_Template, 9, 15, "ng-container", 0);
    core/* ɵɵtemplate */.YNc(10, DetachedLoadComponent_ng_container_0_ng_template_10_Template, 0, 0, "ng-template", null, 5, core/* ɵɵtemplateRefExtractor */.W1O);
    core/* ɵɵelement */._UZ(12, "router-outlet");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const detachedLoad_r1 = ctx.ngIf;
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.verModuloImport);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.verModuloCitas);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", detachedLoad_r1.result[0]);
  }
}
let DetachedLoadComponent = /*#__PURE__*/(() => {
  class DetachedLoadComponent {
    constructor(base64EncryptionUtilService, store, router, communicationService, storageService, cdr, resolver, notificationsPortalService) {
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.store = store;
      this.router = router;
      this.communicationService = communicationService;
      this.storageService = storageService;
      this.cdr = cdr;
      this.resolver = resolver;
      this.notificationsPortalService = notificationsPortalService;
      this.recentHBL = "";
      this.notFoundText = "";
      this.privileges = privileges_enum/* privileges */.U;
      this.detachedLoadStore = new Observable/* Observable */.y();
      this.loadType = "cs";
      this.verModuloCitas = false;
      this.verModuloImport = false;
      this.destroy$ = new Subject/* Subject */.x();
      this.showMakeAppointment = false;
      this.firstLoad = {
        action: "",
        value: 0,
        operation: "",
        id: "",
        hbl: "",
        unds: 0,
        unitNbr: "",
        holdConsigneeActive: false,
        siteAppointment: ""
      };
      this.placa = "";
      this.titleTab = "";
      this.isStorageData = false;
      this.origin = "";
      this.sendData = false;
    }
    ngOnInit() {
      this.detachedLoadStore = this.store.select(detached_load_selectors/* detachedLoadFeatureSelector */.N);
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      //this.notificationsPortalService.getNotificationByPrivileges(this.privileges.CS_IMP_BUS);
      //this.notificationsPortalService.getNotificationByPrivileges(this.privileges.CS_CIT_BUS);
      if (this.hasPermission(this.privileges.CS_IMP_BUS)) {
        this.verModuloImport = true;
      }
      if (this.hasPermission(this.privileges.CS_CIT_BUS)) {
        this.verModuloCitas = true;
        this.titleTab = "Crear Cita";
        let entryInStorage = false;
        const storageData = this.storageService.getData();
        this.storageSubscription = this.storageService.getStorageChanges().subscribe(action => {
          entryInStorage = true;
          if (action.action === 'setCantidadCarga') {
            this.showMakeAppointment = true;
            this.firstLoad = action;
            this.placa = action.placa;
            this.showMakeAppointmentComponent();
          }
          if (action.action === 'viewEditAppointment') {
            this.titleTab = "Editar Cita";
            this.showMakeAppointment = true;
            this.showMakeAppointmentComponent(true);
          }
          if (action.action === 'viewCreateAppointment') {
            this.makeAppointmentRef?.destroy();
            this.makeAppointmentRef = null;
            this.titleTab = "Crear Cita";
          }
          if (action.action === 'continueOperation') {
            this.titleTab = "Crear Cita";
            this.hideMakeAppointment();
          }
          if (action.action === 'cleanAll') {
            this.sendData = true;
          }
          if (action.action === 'cleanValidationPin' && this.titleTab !== 'Editar Cita') {
            this.makeAppointmentRef?.destroy();
            this.makeAppointmentRef = null;
          }
        });
        if (storageData && !entryInStorage) {
          if (storageData.origen === 'history') {
            this.titleTab = "Editar Cita";
            this.showMakeAppointment = true;
            this.origin = storageData.origen;
            this.storageService.setData({
              'origen': storageData.origen
            });
            this.isStorageData = true;
            //this.showMakeAppointmentComponent(true);
          }
        }
      }
    }

    ngOnDestroy() {
      this.store.dispatch((0,detached_load_actions/* cleanDetachedLoad */.Rj)());
      this.store.dispatch((0,shared_actions/* cleanSharedLoad */.zr)());
      if (this.storageSubscription) {
        this.storageSubscription.unsubscribe();
      }
      this.destroy$.next();
      this.destroy$.complete();
    }
    ngAfterViewInit() {
      if (this.isStorageData) {
        this.showMakeAppointment = true;
        this.isStorageData = false;
        this.showMakeAppointmentComponent(true);
      }
    }
    submit(value) {
      this.router.navigate(["/", "carga-suelta"]);
      this.recentHBL = value;
      this.communicationService.updateVerificacion(0);
      this.notFoundText = "No se encontraron resultados para " + this.recentHBL + "";
      this.store.dispatch((0,detached_load_actions/* getDetachedLoad */.fJ)({
        nbr: this.base64EncryptionUtilService.encrypt(value)
      }));
    }
    clean() {
      this.store.dispatch((0,detached_load_actions/* cleanDetachedLoad */.Rj)());
      this.router.navigate(["/", "carga-suelta"]);
    }
    billing() {
      this.router.navigate(['/', 'carga-suelta', 'billing']);
    }
    blockUnit() {
      this.router.navigate(['/', 'carga-suelta', 'lock']);
    }
    unlockUnit() {
      this.router.navigate(['/', 'carga-suelta', 'unlock']);
    }
    generatePin() {
      this.router.navigate(['/', 'carga-suelta', 'generar-pin']);
    }
    lockState(results) {
      return !results.filter(value => !value.holdConsigneeActive).length;
    }
    unlockState(results) {
      if (results.filter(value => value.holdConsigneeActive && value.truck_visit_appt_nbr).length) return false;else return true;
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
    onTabChanged(event) {
      this.storageService.clearStorageValidationPin();
      this.storageService.cleanPlaca();
      this.storageService.cleanValues();
      this.storageService.cleanAll();
      this.showMakeAppointment = false;
      this.hideMakeAppointment();
      this.router.navigate(["/", "carga-suelta"]);
    }
    showMakeAppointmentComponent(destroy = false) {
      if (this.makeAppointmentRef && !destroy) {
        if (this.sendData) {
          this.makeAppointmentRef.instance.placa = this.placa;
          this.makeAppointmentRef.instance.origin = this.origin;
          this.makeAppointmentRef.instance.loadType = this.loadType;
        }
        //this.makeAppointmentRef.instance.firstLoad = this.firstLoad;
        //this.makeAppointmentRef.instance.type = this.titleTab;
        this.sendData = false;
        return;
      }
      // Destruye el componente si ya existe
      if (this.makeAppointmentRef && destroy) {
        this.makeAppointmentRef.destroy();
      }
      // Crea el componente de forma manual
      const factory = this.resolver.resolveComponentFactory(make_appointment_component/* MakeAppointmentComponent */.j);
      this.makeAppointmentRef = this.makeAppointmentContainer.createComponent(factory);
      // Pasar los valores a los @Input del componente
      this.makeAppointmentRef.instance.loadType = this.loadType;
      this.makeAppointmentRef.instance.firstLoad = this.firstLoad;
      this.makeAppointmentRef.instance.placa = this.placa;
      this.makeAppointmentRef.instance.type = this.titleTab;
      this.makeAppointmentRef.instance.origin = this.origin;
    }
    // Método para destruir el componente manualmente
    hideMakeAppointment() {
      if (this.makeAppointmentRef) {
        this.makeAppointmentRef.destroy();
        this.makeAppointmentRef = null;
      }
    }
  }
  DetachedLoadComponent.ɵfac = function DetachedLoadComponent_Factory(t) {
    return new (t || DetachedLoadComponent)(core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(communication_service/* CommunicationService */.O), core/* ɵɵdirectiveInject */.Y36(storageservice_service/* StorageserviceService */.S), core/* ɵɵdirectiveInject */.Y36(core/* ChangeDetectorRef */.sBO), core/* ɵɵdirectiveInject */.Y36(core/* ComponentFactoryResolver */._Vd), core/* ɵɵdirectiveInject */.Y36(notifications_service/* NotificationsService */.T));
  };
  DetachedLoadComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: DetachedLoadComponent,
    selectors: [["app-detached-load"]],
    viewQuery: function DetachedLoadComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(_c0, 5, core/* ViewContainerRef */.s_b);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.makeAppointmentContainer = _t.first);
      }
    },
    decls: 2,
    vars: 3,
    consts: function () {
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_98bc28abe8dd7081c95b208679b16bec807065183df676a47ae47277f5c16474$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_DETACHED_LOAD_COMPONENT_TS___2 = goog.getMsg(" agent.views.agent-import-search.TITLE ");
        i18n_1 = MSG_EXTERNAL_98bc28abe8dd7081c95b208679b16bec807065183df676a47ae47277f5c16474$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_DETACHED_LOAD_COMPONENT_TS___2;
      } else {
        i18n_1 = "Importaci\xF3n";
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_98bc28abe8dd7081c95b208679b16bec807065183df676a47ae47277f5c16474$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_DETACHED_LOAD_COMPONENT_TS____4 = goog.getMsg(" agent.views.agent-import-search.TITLE ");
        i18n_3 = MSG_EXTERNAL_98bc28abe8dd7081c95b208679b16bec807065183df676a47ae47277f5c16474$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_DETACHED_LOAD_COMPONENT_TS____4;
      } else {
        i18n_3 = "Importaci\xF3n";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_a5d527e51193d4a2cfa1829e0a664a18063d2b719a8af16e05b63e43413b43fa$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_DETACHED_LOAD_COMPONENT_TS____7 = goog.getMsg(" agent.views.agent-import-actions.CC_CTA_BLOQ ");
        i18n_6 = MSG_EXTERNAL_a5d527e51193d4a2cfa1829e0a664a18063d2b719a8af16e05b63e43413b43fa$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_DETACHED_LOAD_COMPONENT_TS____7;
      } else {
        i18n_6 = "Bloquear";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9ea0ee84e2462a81760959639dc89e759fc1b95030038f8ae069f88f81dbf2a1$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_DETACHED_LOAD_COMPONENT_TS____9 = goog.getMsg(" agent.views.agent-import-actions.CC_CTA_DESBL ");
        i18n_8 = MSG_EXTERNAL_9ea0ee84e2462a81760959639dc89e759fc1b95030038f8ae069f88f81dbf2a1$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DETACHED_LOAD_DETACHED_LOAD_COMPONENT_TS____9;
      } else {
        i18n_8 = "Desbloquear";
      }
      return [[4, "ngIf"], [1, "detached-load"], [1, "main-panel"], ["mat-stretch-tabs", "false", "mat-align-tabs", "start", 3, "selectedTabChange"], [1, "secondary-panel"], ["makeAppointmentContainer", ""], ["mat-tab-label", ""], [1, "title-card"], [1, "card-title"], i18n_1, ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 83.36 1.91", 1, "welcome__line"], ["id", "Capa_1-2"], ["width", "31.37", "height", "1.91", 1, "cls-2"], ["x", "26.13", "width", "28.61", "height", "1.91", 1, "cls-3"], ["x", "54.74", "width", "28.61", "height", "1.91", 1, "cls-1"], ["inputPlaceholder", "Buscar por HBL", "indication", "(Ingresa el HBL para comenzar a operar)", 3, "hasCleanButton", "submitSearch", "cleanEmmiter"], ["resultFallback", ""], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 70.83 76.22", 1, "containerized-load__tab-icon"], ["d", "m0,56.89v16.69c0,1.46,1.18,2.64,2.64,2.64h65.55c1.46,0,2.64-1.19,2.64-2.64v-16.69c0-1.46-1.19-2.64-2.64-2.64h-6.45c-1.45,0-2.64,1.19-2.64,2.64v7.58H11.73v-7.58c0-1.46-1.18-2.64-2.64-2.64H2.64c-1.46,0-2.64,1.19-2.64,2.64Zm3.19.55h5.35v8.63c0,.88.71,1.59,1.6,1.59h50.56c.88,0,1.6-.71,1.6-1.59v-8.63h5.35v15.59H3.19v-15.59Z", 1, "cls-1"], ["d", "m25.3,11.13h20.24c1.55,0,2.82-1.26,2.82-2.82V2.82c0-1.55-1.26-2.82-2.82-2.82h-20.24c-1.55,0-2.82,1.26-2.82,2.82v5.5c0,1.55,1.26,2.82,2.82,2.82Zm.38-7.94h19.49v4.75h-19.49V3.19Z", 1, "cls-1"], ["d", "m22.32,26.29h-10.34c-1.7,0-3.18.82-3.77,2.09-.46,1.01-.3,2.13.45,3.01l11.72,13.74h0l11.72,13.74c.75.88,1.96,1.38,3.31,1.38h0c1.36,0,2.57-.5,3.32-1.38l23.44-27.48c.75-.88.92-2.01.45-3.01-.59-1.27-2.06-2.09-3.77-2.09h-10.7v-9.75c0-1.46-1.18-2.64-2.64-2.64h-20.57c-1.45,0-2.64,1.19-2.64,2.64v9.75Zm1.59,3.19c.88,0,1.6-.71,1.6-1.6v-10.8h19.47v10.8c0,.88.72,1.6,1.6,1.6h12.29c.28,0,.5.05.65.11l-23.2,27.2c-.09.11-.43.26-.89.26h0c-.46,0-.8-.15-.89-.26l-11.72-13.74h0l-11.48-13.46c.15-.06.37-.11.65-.11h11.94Z", 1, "cls-1"], i18n_3, [3, "data", "vesselVisit", 4, "ngIf", "ngIfElse"], [3, "data", "vesselVisit"], [1, "not-found"], ["id", "crear_cita_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 83.36 1.91", 1, "welcome__line"], [1, "div-crear-cita"], [3, "loadType", "origin"], ["id", "cita_cs", "class", "containerized-load__tab-icon", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 4, "ngIf"], ["id", "cita_cs_edit", "class", "containerized-load__tab-icon", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 4, "ngIf"], ["id", "cita_cs", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 1, "containerized-load__tab-icon"], ["transform", "translate(0.000000,512.000000) scale(0.100000,-0.100000)", "fill", "#000000", "stroke", "none"], ["d", "M735 5035 c-22 -22 -25 -32 -25 -104 l0 -80 -258 -3 -259 -3 -40 -28 c-22 -15 -50 -46 -64 -70 l-24 -42 -3 -1565 -2 -1564 26 -54 c17 -35 40 -62 67 -80 l41 -27 970 -5 971 -5 5 -653 5 -654 24 -19 c23 -19 60 -19 1422 -19 1003 0 1405 3 1422 11 14 6 30 22 36 36 8 17 11 324 11 1069 l0 1045 -176 262 c-97 144 -183 270 -191 279 -10 11 -34 18 -67 20 l-51 3 -5 965 c-5 1054 -2 991 -62 1047 -51 48 -81 53 -338 53 l-240 0 0 70 c0 82 -13 115 -51 131 -23 9 -36 9 -59 -1 -42 -17 -50 -37 -50 -124 l0 -76 -224 0 -224 0 -4 81 c-3 74 -6 83 -31 105 -36 31 -71 31 -102 -1 -22 -22 -25 -32 -25 -105 l0 -80 -230 0 -230 0 0 80 c0 73 -3 83 -25 105 -29 30 -64 32 -98 5 -24 -19 -26 -28 -29 -103 l-3 -82 -227 -3 -228 -2 0 78 c0 52 -5 84 -15 99 -31 44 -111 37 -134 -13 -6 -14 -11 -56 -11 -94 l0 -70 -225 0 -225 0 0 76 c0 71 -2 77 -30 106 -26 25 -36 29 -63 24 -53 -10 -67 -37 -67 -127 l0 -79 -224 0 -223 0 -5 82 c-4 73 -8 84 -32 105 -35 30 -71 29 -101 -2z m-25 -390 c0 -39 -4 -46 -29 -59 -16 -9 -45 -34 -64 -57 -123 -143 -19 -358 173 -359 102 0 194 76 215 178 18 84 -30 189 -105 231 -37 21 -40 25 -40 67 l0 44 230 0 230 0 0 -45 c0 -38 -4 -46 -27 -59 -71 -37 -113 -110 -113 -196 0 -72 22 -122 74 -167 72 -64 191 -71 269 -17 54 37 97 119 97 183 0 68 -39 144 -94 183 -42 29 -46 35 -46 75 l0 43 225 0 225 0 0 -50 c0 -38 -4 -50 -15 -50 -9 0 -35 -19 -58 -43 -135 -134 -54 -362 133 -375 71 -5 120 10 167 51 106 93 96 262 -19 347 -44 32 -48 38 -48 77 l0 43 230 0 230 0 0 -44 c0 -40 -3 -45 -43 -70 -142 -90 -139 -293 6 -376 166 -95 369 50 328 235 -13 58 -63 125 -112 151 -25 13 -29 20 -29 59 l0 45 230 0 230 0 0 -45 c0 -38 -4 -46 -27 -59 -101 -52 -146 -193 -95 -293 26 -50 79 -97 127 -113 61 -20 148 -9 198 26 62 43 100 121 95 196 -5 71 -48 144 -101 173 -35 19 -37 23 -37 68 l0 47 225 0 225 0 0 -43 c0 -39 -4 -45 -47 -77 -116 -85 -126 -254 -20 -347 47 -41 96 -56 167 -51 114 8 192 90 198 207 4 83 -23 140 -91 191 -43 32 -47 38 -47 77 l0 43 235 0 c223 0 235 -1 245 -20 7 -12 9 -118 8 -302 l-3 -283 -2097 -3 -2098 -2 0 293 c0 215 3 296 12 305 9 9 77 12 245 12 l233 0 0 -45z m114 -206 c54 -43 6 -134 -57 -110 -56 21 -59 99 -5 121 32 12 32 12 62 -11z m601 9 c46 -21 46 -95 0 -116 -33 -15 -72 0 -87 33 -18 40 5 78 59 94 1 1 14 -4 28 -11z m638 -20 c20 -23 21 -41 6 -69 -25 -47 -103 -41 -115 8 -19 75 58 119 109 61z m617 -11 c31 -56 -38 -117 -89 -79 -45 33 -37 93 14 112 28 10 57 -2 75 -33z m594 22 c54 -43 6 -134 -57 -110 -56 21 -59 99 -5 121 32 12 32 12 62 -11z m599 10 c53 -24 54 -99 2 -119 -55 -21 -106 30 -85 85 8 21 26 35 57 44 1 1 13 -4 26 -10z m542 -1094 l0 -570 -953 -5 c-628 -3 -955 -8 -960 -15 -4 -6 -77 -114 -162 -240 l-155 -230 -5 118 c-7 166 8 157 -271 157 -216 0 -218 0 -246 -24 l-28 -24 0 -227 0 -227 29 -24 28 -25 224 3 224 3 0 -227 0 -228 -948 0 c-724 0 -951 3 -960 12 -9 9 -12 285 -12 1180 l0 1168 2098 -2 2097 -3 0 -570z m-1064 -730 c6 -5 -26 -333 -33 -340 -3 -3 -217 -4 -476 -3 l-472 3 115 173 115 172 373 0 c206 0 376 -2 378 -5z m329 -2 c0 -5 7 -69 15 -143 8 -74 15 -152 15 -172 l0 -38 -109 0 c-61 0 -112 4 -115 9 -6 8 21 313 29 339 5 13 165 18 165 5z m1027 -163 c62 -91 112 -168 112 -172 1 -5 -212 -8 -473 -8 l-473 0 -12 123 c-7 67 -15 146 -18 175 l-6 52 379 -2 379 -3 112 -165z m-2687 -165 l0 -115 -115 0 -115 0 0 115 0 115 115 0 115 0 0 -115z m1292 -346 l3 -171 29 -25 c35 -30 70 -26 120 12 l34 26 29 -25 c54 -45 95 -43 151 7 l22 20 23 -20 c36 -33 66 -45 98 -38 54 12 59 32 59 217 l0 168 510 0 510 0 0 -950 0 -950 -510 0 -510 0 0 168 c-1 179 -4 193 -53 211 -31 12 -50 7 -94 -27 l-33 -24 -32 24 c-18 13 -41 27 -51 31 -22 8 -65 -8 -94 -35 l-23 -21 -40 28 c-49 34 -93 36 -123 6 -21 -20 -22 -32 -25 -191 l-3 -170 -505 0 -504 0 0 950 0 950 504 0 505 0 3 -171z m408 96 c0 -72 -1 -75 -24 -75 -13 0 -40 -14 -61 -30 -38 -30 -39 -30 -59 -11 -29 25 -61 41 -85 41 -19 0 -21 6 -21 75 l0 75 125 0 125 0 0 -75z m-82 -1650 c20 -14 47 -25 59 -25 22 0 23 -4 23 -75 l0 -75 -125 0 -125 0 0 75 0 75 29 0 c18 0 42 10 58 25 35 30 36 30 81 0z"], ["d", "M842 3447 c-21 -23 -22 -31 -22 -250 0 -214 1 -228 20 -247 19 -19 33 -20 250 -20 217 0 231 1 250 20 19 19 20 33 20 249 l0 230 -26 20 c-25 20 -39 21 -249 21 -219 0 -222 0 -243 -23z m366 -249 l-3 -113 -117 -3 -118 -3 0 116 0 115 120 0 121 0 -3 -112z"], ["d", "M1662 3450 c-30 -29 -34 -63 -30 -284 3 -194 3 -198 27 -217 21 -17 42 -19 252 -19 222 0 229 1 249 22 19 21 20 34 20 245 l0 224 -25 24 -24 25 -224 0 c-209 0 -225 -1 -245 -20z m358 -255 l0 -115 -115 0 -115 0 0 115 0 115 115 0 115 0 0 -115z"], ["d", "M2480 3450 c-29 -29 -31 -49 -28 -272 3 -186 5 -208 22 -227 18 -20 28 -21 251 -21 303 0 275 -27 275 269 l0 222 -25 24 -24 25 -226 0 c-211 0 -226 -1 -245 -20z m360 -255 l0 -115 -115 0 -115 0 0 115 0 115 115 0 115 0 0 -115z"], ["d", "M3300 3450 c-29 -29 -31 -49 -28 -272 3 -186 5 -208 22 -227 18 -20 28 -21 252 -21 l233 0 20 26 c20 25 21 39 21 246 l0 219 -25 24 -24 25 -226 0 c-211 0 -226 -1 -245 -20z m360 -255 l0 -115 -115 0 -115 0 0 115 0 115 115 0 115 0 0 -115z"], ["d", "M846 2549 l-26 -20 0 -233 c0 -224 1 -234 21 -252 19 -18 39 -19 251 -19 229 0 230 0 249 24 17 21 19 42 19 248 l0 224 -25 24 -24 25 -219 0 c-207 0 -221 -1 -246 -21z m364 -254 l0 -115 -120 0 -120 0 0 115 0 115 120 0 120 0 0 -115z"], ["d", "M3230 1634 c-170 -74 -182 -317 -21 -412 l46 -27 320 -3 c357 -3 380 -1 446 56 119 102 103 289 -31 370 l-54 32 -336 0 c-277 -1 -341 -3 -370 -16z m692 -164 c24 -25 29 -36 24 -58 -15 -61 -18 -62 -351 -62 l-304 0 -20 26 c-33 42 -23 96 22 114 12 5 152 9 310 9 l289 1 30 -30z"], ["id", "cita_cs_edit", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 1, "containerized-load__tab-icon"], ["d", "M4264 5109 c-26 -13 -32 -22 -479 -799 -207 -360 -388 -672 -401 -692 l-24 -38 -400 0 -400 0 0 63 c0 73 -20 153 -49 201 -25 41 -98 109 -137 129 -126 64 -294 37 -394 -63 -62 -62 -93 -137 -100 -240 l-5 -85 -251 -3 -251 -2 -8 82 c-9 109 -35 176 -93 237 -69 73 -145 106 -247 106 -194 0 -325 -131 -341 -338 l-7 -87 -162 0 c-136 0 -171 -3 -221 -20 -142 -49 -246 -162 -279 -304 -12 -52 -15 -276 -15 -1457 0 -894 4 -1416 10 -1450 32 -169 170 -307 340 -339 73 -14 3667 -14 3741 0 173 33 314 182 339 362 6 35 10 638 10 1373 l0 1310 340 589 c188 326 340 600 340 614 0 32 -52 82 -85 82 -17 0 -38 -12 -58 -32 -18 -18 -268 -443 -557 -945 l-525 -911 -56 30 c-30 17 -64 37 -73 44 -17 12 33 103 665 1196 407 705 685 1196 687 1215 8 66 -84 110 -136 66 -11 -10 -327 -550 -702 -1200 l-681 -1181 -71 40 c-50 29 -68 45 -65 57 2 9 298 525 656 1146 359 622 655 1144 658 1162 5 26 0 38 -25 63 -39 38 -75 39 -111 3 -14 -16 -321 -538 -680 -1160 -360 -623 -658 -1133 -663 -1133 -13 0 -138 73 -138 80 0 4 273 479 606 1056 333 577 610 1059 615 1072 13 33 -13 90 -46 102 -32 12 -44 12 -71 -1z m-3168 -1288 c23 -10 52 -34 65 -52 23 -33 24 -40 27 -264 3 -227 3 -231 -20 -264 -33 -49 -69 -72 -121 -78 -87 -10 -163 41 -186 124 -13 46 -14 363 -1 417 12 54 38 87 90 114 53 27 92 28 146 3z m1181 8 c15 -5 41 -22 57 -37 51 -48 56 -73 56 -294 0 -184 -2 -205 -21 -245 -44 -92 -171 -122 -252 -60 -62 47 -67 70 -67 308 0 208 1 213 25 254 40 69 129 102 202 74z m-1597 -463 c0 -214 133 -365 330 -374 105 -5 174 22 251 97 67 66 95 131 105 245 l7 76 252 0 253 0 4 -88 c5 -105 30 -165 98 -232 72 -73 128 -95 235 -95 76 0 99 4 146 26 121 57 188 160 197 305 l5 84 348 0 c192 0 349 -2 349 -4 0 -3 -68 -122 -151 -266 -83 -144 -152 -276 -155 -293 -7 -51 -54 -871 -54 -943 0 -79 19 -125 67 -161 46 -35 134 -43 183 -18 64 33 833 545 845 562 7 10 66 110 130 223 65 113 124 214 132 225 11 17 13 -160 11 -1175 l-3 -1195 -25 -49 c-14 -27 -43 -64 -64 -83 -80 -67 50 -63 -1962 -63 -1810 0 -1824 0 -1878 20 -35 14 -68 36 -94 64 -77 83 -72 6 -70 1266 l3 1125 1258 5 1259 5 19 24 c21 26 24 62 8 93 -26 49 10 48 -1314 48 l-1236 0 3 203 c3 202 3 202 32 255 32 57 79 98 135 118 23 9 91 13 189 14 l152 0 0 -44z m2738 -837 c163 -94 307 -178 320 -186 22 -14 18 -17 -136 -118 l-160 -105 -177 102 -177 102 6 40 c3 23 9 107 12 189 4 81 9 147 11 147 2 0 138 -77 301 -171z m-195 -479 c32 -18 56 -35 53 -37 -3 -3 -49 -34 -103 -69 -115 -74 -109 -79 -98 84 l7 103 41 -24 c23 -14 68 -39 100 -57z"], ["d", "M1182 2450 c-30 -29 -34 -60 -30 -302 3 -213 3 -217 27 -242 l24 -26 246 0 c178 1 250 4 262 13 35 27 39 53 39 282 0 236 -6 274 -45 289 -9 3 -126 6 -259 6 -228 0 -243 -1 -264 -20z m398 -275 l0 -125 -130 0 -130 0 0 125 0 125 130 0 130 0 0 -125z"], ["d", "M1992 2450 c-30 -29 -34 -60 -30 -302 3 -213 3 -217 27 -242 l24 -26 247 0 c234 0 247 1 268 20 30 28 38 68 21 99 -26 45 -51 51 -241 51 l-178 0 0 125 0 125 170 0 c187 0 231 9 251 54 14 30 5 70 -21 96 -19 19 -34 20 -268 20 -234 0 -249 -1 -270 -20z"], ["d", "M490 1703 c-8 -3 -25 -15 -37 -26 -23 -20 -23 -24 -23 -269 l0 -249 26 -24 27 -25 244 0 244 0 24 25 25 24 0 249 0 249 -26 24 c-25 24 -27 24 -257 26 -128 1 -239 -1 -247 -4z m360 -293 l0 -130 -125 0 -125 0 0 130 0 130 125 0 125 0 0 -130z"], ["d", "M1203 1695 c-50 -21 -54 -48 -51 -304 l3 -233 28 -24 c28 -24 29 -24 268 -24 l241 0 29 29 29 29 0 231 c0 128 -4 241 -10 256 -11 30 -60 54 -96 47 -13 -2 -33 -16 -44 -30 -18 -23 -20 -41 -20 -208 l0 -184 -130 0 -130 0 0 188 c0 183 -1 189 -22 209 -31 27 -59 33 -95 18z"], ["d", "M2013 1695 c-49 -21 -55 -57 -51 -313 l3 -224 28 -24 c28 -24 29 -24 268 -24 l241 0 29 29 29 29 0 237 c0 150 -4 244 -11 257 -22 41 -65 48 -291 48 -159 -1 -221 -4 -245 -15z m377 -285 l0 -130 -130 0 -130 0 0 123 c0 68 3 127 7 130 3 4 62 7 130 7 l123 0 0 -130z"], ["d", "M3463 1695 c-49 -21 -55 -57 -51 -313 l3 -224 28 -24 c28 -24 29 -24 262 -24 150 0 243 4 258 11 43 19 47 46 47 294 0 229 0 234 -23 260 -32 38 -92 38 -124 0 -22 -25 -23 -33 -23 -211 l0 -184 -130 0 -130 0 0 188 c0 183 -1 189 -22 209 -32 29 -58 34 -95 18z"], ["d", "M2753 1532 c-13 -2 -32 -15 -43 -29 -18 -23 -20 -40 -20 -183 0 -157 0 -157 26 -184 l27 -26 244 0 244 0 24 25 c31 30 33 83 6 116 -19 23 -23 24 -210 27 l-191 3 0 90 c0 60 -5 100 -15 118 -15 31 -55 49 -92 43z"], ["d", "M475 928 c-43 -25 -44 -33 -44 -288 0 -257 1 -264 46 -288 30 -17 466 -17 496 0 45 24 46 31 47 289 0 233 -1 246 -20 267 -44 47 -111 36 -135 -23 -11 -25 -15 -78 -15 -205 l0 -170 -125 0 -125 0 0 170 c0 190 -10 233 -55 250 -33 13 -45 12 -70 -2z"], ["d", "M1200 927 c-47 -24 -50 -44 -48 -299 3 -232 4 -238 26 -260 22 -23 26 -23 272 -23 246 0 250 0 272 23 23 22 23 26 23 272 0 246 0 250 -23 272 -22 22 -28 23 -260 26 -177 2 -243 -1 -262 -11z m380 -287 l0 -130 -130 0 -130 0 0 130 0 130 130 0 130 0 0 -130z"], ["d", "M2013 930 c-47 -19 -53 -52 -53 -292 0 -203 2 -226 20 -255 13 -22 29 -34 52 -38 18 -3 134 -5 256 -3 l224 3 24 28 c24 28 24 29 24 267 0 238 0 239 -24 267 l-24 28 -239 2 c-131 1 -248 -2 -260 -7z m377 -290 l0 -130 -130 0 -130 0 0 130 0 130 130 0 130 0 0 -130z"], ["d", "M2784 930 c-51 -21 -54 -37 -54 -292 0 -236 0 -237 24 -265 l24 -28 251 0 c246 0 251 0 273 22 33 33 30 89 -6 119 -26 23 -32 24 -212 24 l-184 0 0 130 0 130 188 0 189 0 23 25 c32 34 32 87 2 118 -22 21 -29 22 -260 24 -130 1 -247 -2 -258 -7z"], [1, "secondary-panel__actions"], ["class", "load__action", 3, "routerLink", 4, "permissions"], ["class", "load__action", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", 4, "permissions"], ["class", "load__action load__action_lock", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", 4, "permissions"], ["class", "load__action load__action_unlock", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", 4, "permissions"], [1, "load__action", 3, "routerLink"], ["version", "1.0", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 200.000000 261.000000", "preserveAspectRatio", "xMidYMid meet", 1, "button-icon"], ["transform", "translate(0.000000,261.000000) scale(0.100000,-0.100000)", "fill", "#000000", "stroke", "none"], ["d", "M312 2579 c-43 -13 -108 -78 -117 -118 -6 -30 -8 -31 -66 -31 -50 0 -64 -4 -84 -25 l-25 -24 0 -549 c0 -534 1 -549 20 -570 19 -21 20 -35 20 -522 l0 -501 25 -24 c20 -21 34 -25 80 -25 l55 0 0 -55 c0 -46 4 -60 25 -80 l24 -25 811 0 811 0 24 25 25 24 0 1051 0 1051 -25 24 c-20 21 -34 25 -80 25 l-55 0 0 55 c0 46 -4 60 -25 80 l-24 25 -261 0 c-247 0 -261 1 -280 20 -19 19 -33 20 -318 20 l-298 0 -13 35 c-34 94 -144 144 -249 114z m149 -98 c43 -43 38 -51 -35 -51 -69 0 -92 -14 -81 -48 3 -11 16 -23 28 -26 12 -3 190 -6 395 -6 l372 0 0 -520 0 -520 -520 0 -520 0 0 520 0 520 40 0 40 0 0 -197 c0 -224 7 -252 73 -310 75 -66 182 -64 258 4 50 45 69 108 69 225 0 140 -33 193 -121 193 -41 0 -53 -5 -81 -32 -29 -29 -33 -40 -36 -101 -3 -54 -1 -72 13 -85 19 -19 24 -20 45 -7 10 6 17 32 20 77 5 66 6 68 34 71 16 2 32 -2 37 -10 5 -7 9 -60 9 -116 0 -78 -4 -111 -16 -132 -34 -56 -105 -76 -164 -45 -56 29 -60 50 -60 316 l0 241 34 34 c30 30 40 34 86 34 44 0 56 -4 81 -29z m1239 -273 c0 -80 3 -105 17 -120 9 -10 20 -18 24 -18 16 0 39 32 39 56 0 21 4 24 40 24 l40 0 0 -1020 0 -1020 -260 -1 c-143 0 -478 -1 -745 -1 -267 0 -501 1 -520 1 -34 1 -35 2 -35 41 l0 40 536 0 c371 0 542 3 557 11 31 16 356 339 373 371 12 23 14 137 14 711 0 518 -3 686 -12 695 -18 18 -46 14 -58 -7 -6 -13 -10 -244 -10 -680 l0 -660 -156 -3 -156 -3 -24 -28 c-23 -27 -24 -34 -24 -178 l0 -149 -600 0 -600 0 0 480 0 480 511 0 511 0 29 29 29 29 0 511 0 511 240 0 240 0 0 -102z m-140 -1745 c-50 -48 -102 -100 -116 -116 l-24 -29 0 116 0 116 115 0 116 0 -91 -87z"], ["d", "M712 2058 c-16 -16 -15 -33 4 -52 23 -23 225 -23 248 0 19 18 19 20 6 45 -10 17 -22 19 -128 19 -79 0 -122 -4 -130 -12z"], ["d", "M712 1858 c-16 -16 -15 -33 4 -52 23 -23 225 -23 248 0 19 18 19 20 6 45 -10 17 -22 19 -128 19 -79 0 -122 -4 -130 -12z"], ["d", "M272 1658 c-18 -18 -14 -46 7 -58 13 -6 140 -10 345 -10 282 0 327 2 340 16 19 18 19 20 6 45 -10 18 -25 19 -348 19 -250 0 -341 -3 -350 -12z"], ["d", "M1390 2051 c-13 -25 -13 -27 6 -45 34 -35 144 -13 144 28 0 25 -25 36 -82 36 -46 0 -59 -4 -68 -19z"], ["d", "M1396 1854 c-9 -8 -16 -19 -16 -24 0 -23 34 -40 80 -40 66 0 101 35 68 68 -18 18 -113 15 -132 -4z"], ["d", "M1396 1654 c-9 -8 -16 -19 -16 -24 0 -23 34 -40 80 -40 66 0 101 35 68 68 -18 18 -113 15 -132 -4z"], ["d", "M1396 1454 c-9 -8 -16 -19 -16 -24 0 -35 94 -55 141 -30 21 12 25 40 7 58 -18 18 -113 15 -132 -4z"], ["d", "M318 1099 c-21 -12 -23 -40 -6 -57 18 -18 113 -15 132 4 34 33 4 64 -62 64 -26 0 -55 -5 -64 -11z"], ["d", "M596 1094 c-19 -19 -20 -36 -4 -52 17 -17 919 -17 936 0 18 18 14 46 -7 58 -13 6 -177 10 -465 10 -391 0 -446 -2 -460 -16z"], ["d", "M318 899 c-21 -12 -23 -40 -6 -57 18 -18 113 -15 132 4 34 33 4 64 -62 64 -26 0 -55 -5 -64 -11z"], ["d", "M596 894 c-19 -19 -20 -36 -4 -52 17 -17 919 -17 936 0 18 18 14 46 -7 58 -13 6 -177 10 -465 10 -391 0 -446 -2 -460 -16z"], ["d", "M318 699 c-21 -12 -23 -40 -6 -57 18 -18 113 -15 132 4 34 33 4 64 -62 64 -26 0 -55 -5 -64 -11z"], ["d", "M596 694 c-19 -19 -20 -36 -4 -52 17 -17 599 -17 616 0 16 16 15 33 -4 52 -13 14 -55 16 -304 16 -249 0 -291 -2 -304 -16z"], [1, "divider"], [1, "load__action", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback"], ["id", "fact_expo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64.84 70.61", 1, "button-icon"], ["x", ".25", "y", ".25", "width", "64.34", "height", "70.11", 1, "billing"], ["x", "6.43", "y", "29.19", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "20.7", "y", "29.19", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "5.63", "y", "8.26", "width", "53.58", "height", "14.31", 1, "billing"], ["x", "34.98", "y", "29.19", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "49.25", "y", "29.19", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "6.43", "y", "42.47", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "20.7", "y", "42.47", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "34.98", "y", "42.47", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "49.25", "y", "42.47", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "6.43", "y", "55.75", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "20.7", "y", "55.75", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "34.98", "y", "55.75", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "49.25", "y", "55.75", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "9.24", "y", "11.23", "width", "4.49", "height", "8.68", 1, "billing"], ["x", "17.62", "y", "11.23", "width", "4.49", "height", "8.68", 1, "billing"], ["x", "26", "y", "11.23", "width", "4.49", "height", "8.68", 1, "billing"], ["x", "34.37", "y", "11.23", "width", "4.49", "height", "8.68", 1, "billing"], ["points", "42.75 16.02 47.24 11.23 47.24 19.9", 1, "billing"], ["points", "51.13 16.02 55.61 11.23 55.61 19.9", 1, "billing"], ["version", "1.0", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 264.000000 134.000000", "preserveAspectRatio", "xMidYMid meet", 1, "button-icon"], ["transform", "translate(0.000000,134.000000) scale(0.100000,-0.100000)", "fill", "#000000", "stroke", "none"], ["d", "M93 1265 c-17 -7 -36 -22 -42 -34 -7 -11 -11 -83 -11 -176 0 -162 9 -205 45 -219 9 -3 385 -6 836 -6 l820 0 24 25 c25 24 25 27 25 194 0 165 -1 171 -24 198 l-24 28 -541 3 c-370 2 -547 -1 -561 -8 -16 -9 -29 -52 -17 -62 1 -2 247 -5 547 -8 l545 -5 0 -145 0 -145 -797 -3 -798 -2 0 150 0 150 193 2 192 3 3 24 c7 45 -16 51 -207 51 -127 -1 -185 -5 -208 -15z"], ["d", "M2136 1134 c-65 -21 -112 -52 -164 -108 -57 -62 -83 -125 -90 -213 l-5 -73 -889 0 -890 0 -29 -29 c-27 -28 -29 -34 -29 -109 0 -93 19 -127 75 -138 l35 -6 0 -85 c0 -129 16 -149 119 -155 l44 -3 21 -60 c30 -85 56 -97 198 -93 126 4 144 14 172 103 l17 55 55 0 c45 0 59 4 79 25 23 22 25 32 25 120 l0 95 186 0 c189 0 224 6 224 38 0 42 0 42 -597 42 l-573 0 0 60 0 60 898 0 c703 0 902 3 914 13 11 9 17 36 21 100 6 112 38 181 107 236 59 47 120 65 202 59 74 -5 129 -29 178 -78 72 -72 75 -85 78 -372 3 -246 2 -259 -19 -308 -13 -31 -41 -68 -71 -95 -110 -99 -266 -99 -376 0 -63 56 -92 123 -99 224 -3 42 -10 82 -16 89 -13 17 -517 18 -535 0 -18 -18 -14 -46 7 -58 12 -6 108 -10 244 -10 l224 0 6 -66 c16 -204 209 -357 410 -324 118 19 224 99 275 208 l27 57 0 270 0 270 -28 61 c-75 161 -268 250 -431 198z m-1328 -756 l-3 -83 -70 -5 -70 -5 -25 -73 -25 -73 -99 3 -99 3 -21 60 c-30 86 -29 85 -102 85 l-64 0 0 85 0 85 290 0 291 0 -3 -82z"], ["d", "M486 1074 c-21 -20 -20 -27 3 -48 36 -33 83 18 49 52 -16 16 -33 15 -52 -4z"], ["d", "M653 1083 c-18 -6 -16 -48 1 -62 19 -16 56 2 56 27 0 32 -26 48 -57 35z"], ["d", "M812 1078 c-30 -30 11 -85 44 -57 25 21 11 69 -21 69 -6 0 -16 -5 -23 -12z"], ["d", "M972 1078 c-18 -18 -14 -46 9 -58 26 -14 49 3 49 35 0 32 -35 46 -58 23z"], ["d", "M1132 1078 c-18 -18 -14 -46 7 -58 11 -5 22 -10 25 -10 8 0 36 31 36 40 0 13 -30 40 -44 40 -6 0 -17 -5 -24 -12z"], ["d", "M1290 1071 c-18 -34 10 -68 44 -55 35 13 23 74 -14 74 -11 0 -24 -9 -30 -19z"], ["d", "M2174 931 c-23 -10 -52 -34 -65 -52 -24 -34 -24 -37 -24 -271 0 -224 1 -238 21 -265 73 -98 195 -98 268 0 15 20 21 47 24 97 5 75 -5 100 -39 100 -26 0 -39 -30 -39 -89 0 -27 -3 -57 -6 -66 -10 -25 -62 -47 -95 -40 -56 12 -59 28 -59 265 0 213 0 217 23 238 32 30 81 29 112 -3 22 -21 25 -33 25 -95 0 -78 11 -110 38 -110 33 0 42 22 42 100 0 101 -26 156 -90 188 -54 27 -82 27 -136 3z"], [1, "load__action", "load__action_lock", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback"], i18n_6, [1, "load__action", "load__action_unlock", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback"], i18n_8];
    },
    template: function DetachedLoadComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, DetachedLoadComponent_ng_container_0_Template, 13, 3, "ng-container", 0);
        core/* ɵɵpipe */.ALo(1, "async");
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.detachedLoadStore));
      }
    },
    dependencies: [common/* NgIf */.O5, router/* RouterOutlet */.lC, router/* RouterLink */.rH, icon/* MatIcon */.Hw, tabs/* MatTabLabel */.uD, tabs/* MatTab */.uX, tabs/* MatTabGroup */.SP, card/* MatCard */.a8, card/* MatCardContent */.dn, search_component/* SearchComponent */.g, permissions_directive/* PermissionsDirective */.$, hour_restriction_directive/* HourRestrictionDirective */.E, vehicle_searcher_component/* VehicleSearcherComponent */.B, DetachedLoadResultComponent, common/* AsyncPipe */.Ov],
    styles: [".detached-load[_ngcontent-%COMP%]{height:100vh;padding-left:1rem;display:grid;grid-template-columns:.7fr 1fr;grid-template-rows:1fr}.title[_ngcontent-%COMP%]{padding-top:1rem;color:#78909c}.header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.icon-title[_ngcontent-%COMP%]{width:1.5rem}.title-card[_ngcontent-%COMP%]{width:max-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.containerized-load__tab-icon[_ngcontent-%COMP%]{width:1rem}.containerized-load__tab-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{width:1.5rem;fill:#0009}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .containerized-load__tab-icon path, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .containerized-load__tab-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#66bb6a}.main-panel[_ngcontent-%COMP%], .secondary-panel[_ngcontent-%COMP%]{overflow-y:scroll}.secondary-panel[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.secondary-panel__actions[_ngcontent-%COMP%]{padding-bottom:1rem;display:flex;justify-content:flex-start;align-items:center;gap:.1rem}.not-found[_ngcontent-%COMP%]{color:#78909c;font-size:1.3rem;text-align:center;padding:1rem}.load__actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.load__action[_ngcontent-%COMP%]{width:10rem;height:2.5rem;border:0;outline:0;padding:.3rem .6rem;margin-left:.1rem;cursor:pointer;font-family:Gilroy-ExtraBold!important;color:#636e72;background-color:#ececec;display:flex;justify-content:center;align-items:center}.load__action_lock[_ngcontent-%COMP%]{background-color:#fed5d7;color:#f90613}.load__action_unlock[_ngcontent-%COMP%]{background-color:#d9e3da;color:#1f5b29}.load__action[_ngcontent-%COMP%]:disabled{background-color:#b2bec3!important;color:#636e72!important}.load__action[_ngcontent-%COMP%]:disabled   .cls-3[_ngcontent-%COMP%]{fill:#636e72}.load__action[_ngcontent-%COMP%]:disabled   .cls-2[_ngcontent-%COMP%]{stroke:#636e72}.load__action[_ngcontent-%COMP%]:disabled   .cls-1[_ngcontent-%COMP%]{fill:#636e72}  .mdc-tab__text-label{flex-direction:column!important}  .mdc-data-table__header-cell{text-align:center!important;font-family:Gilroy-ExtraBold;color:#66bb6a;font-size:1rem}  .mdc-data-table__row{background-color:#dfe6e91a!important;border:transparent solid!important;border-bottom:.25rem transparent solid!important}  .mdc-data-table__row:hover{background-color:#7ba0521a!important}  .mdc-data-table__row td{font-family:Gilroy-Light;color:#666!important}  .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}  .success-snackbar .mdc-snackbar__surface{color:#155724!important;background-color:#d4edda!important;border-color:#c3e6cb!important}  .success-snackbar .mdc-snackbar__surface .mdc-button__label{color:#155724!important}  .success-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#155724!important}  .warning-snackbar .mdc-snackbar__surface{color:#856404!important;background-color:#fff3cd!important;border-color:#ffeeba!important}  .warning-snackbar .mdc-snackbar__surface .mdc-button__label{color:#856404!important}  .warning-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#856404!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:transparent!important;--mat-mdc-button-persistent-ripple-color: currentColor !important}.button-icon[_ngcontent-%COMP%]{width:24px;height:24px}.divider[_ngcontent-%COMP%]{width:1px;height:24px;background-color:#636362;margin:0 10px}.load__action[_ngcontent-%COMP%]:hover{background-color:#649f3399;color:#000}.load__action[_ngcontent-%COMP%]:focus{background-color:#649f3399;color:#000}.info-retiro-detalle[_ngcontent-%COMP%]{background-color:#7ba052;color:#fff;font-weight:700;width:23%;padding:5px;margin-top:20px}.color-texto[_ngcontent-%COMP%]{color:#456534;font-size:20px}.div-crear-cita[_ngcontent-%COMP%]{overflow-y:hidden!important}  .mat-mdc-tab-body-content{overflow-y:hidden!important}  .mat-mdc-card .mdc-card .mat-card-make-appointment .ng-star-inserted{width:100%}"]
  });
  return DetachedLoadComponent;
})();
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(50727);
// EXTERNAL MODULE: ./src/app/core/auth/services/AESEncryptionUtil.service.ts
var AESEncryptionUtil_service = __webpack_require__(3056);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/dialog.mjs + 1 modules
var dialog = __webpack_require__(65412);
// EXTERNAL MODULE: ./src/app/shared/services/util.service.ts
var util_service = __webpack_require__(22203);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/list.mjs
var list = __webpack_require__(96338);
// EXTERNAL MODULE: ./src/app/shared/components/card-appointment/card-appointment.component.ts
var card_appointment_component = __webpack_require__(52937);
;// CONCATENATED MODULE: ./src/app/modules/detached-load/components/appointment-creation/appointment-creation.component.ts



















function AppointmentCreationComponent_div_0_div_35_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 22)(1, "div", 18);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "div", 19);
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "div", 20);
    core/* ɵɵtext */._uU(6);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(7, "div", 20);
    core/* ɵɵtext */._uU(8);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const el_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(i_r4 + 1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(el_r3.blitem);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(el_r3.cargoWeigth);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(el_r3.qty);
  }
}
function AppointmentCreationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 2)(1, "div", 3);
    core/* ɵɵelementContainerStart */.ynx(2);
    core/* ɵɵelementStart */.TgZ(3, "mat-card", 4)(4, "div", 5)(5, "span", 6);
    core/* ɵɵtext */._uU(6, "Detalle de la cita");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(7, "div", 7)(8, "span", 8)(9, "mat-icon", 9);
    core/* ɵɵtext */._uU(10, "calendar_today");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(11, "div", 10)(12, "p", 11);
    core/* ɵɵtext */._uU(13);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(14, "div", 12)(15, "mat-list", 13)(16, "mat-list-item", 14)(17, "div", 15);
    core/* ɵɵtext */._uU(18);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(19, "mat-list-item", 14)(20, "div", 15);
    core/* ɵɵtext */._uU(21);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(22, "mat-list-item", 14)(23, "div", 15);
    core/* ɵɵtext */._uU(24);
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(25, "div", 16)(26, "div", 17)(27, "div", 18);
    core/* ɵɵtext */._uU(28, "Nro.");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(29, "div", 19);
    core/* ɵɵtext */._uU(30, "HBL");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(31, "div", 20);
    core/* ɵɵtext */._uU(32, "Peso (t).");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(33, "div", 20);
    core/* ɵɵtext */._uU(34, "Unid");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵtemplate */.YNc(35, AppointmentCreationComponent_div_0_div_35_Template, 9, 4, "div", 21);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelement */._UZ(36, "router-outlet");
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(13);
    core/* ɵɵtextInterpolate1 */.hij("D\u00EDa y hora de la cita: ", ctx_r0.retrievedData.requested_time, "");
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵtextInterpolate1 */.hij("Identificador: ", ctx_r0.retrievedData.truck_visit_appt_nbr, "");
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵtextInterpolate2 */.AsE("Conductor: ", ctx_r0.retrievedData.driver_license_nbr, " - ", ctx_r0.retrievedData.driver_name, "");
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵtextInterpolate1 */.hij("Placa: ", ctx_r0.retrievedData.truck_license_nbr, "");
    core/* ɵɵadvance */.xp6(11);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.data);
  }
}
function AppointmentCreationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div");
    core/* ɵɵelement */._UZ(1, "app-card-appointment", 23);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("origen", "carga-suelta");
  }
}
let AppointmentCreationComponent = /*#__PURE__*/(() => {
  class AppointmentCreationComponent {
    constructor(store, communicationService, router, aesEncryptionUtilService, dialog, base64EncryptionUtilService, storageService, utilServices) {
      this.store = store;
      this.communicationService = communicationService;
      this.router = router;
      this.aesEncryptionUtilService = aesEncryptionUtilService;
      this.dialog = dialog;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.storageService = storageService;
      this.utilServices = utilServices;
      this.loadType = "";
      this.subscription = new Subscription/* Subscription */.w0();
      this.verificacion = 0;
      this.canPrint = false;
      this.nbr = "";
      this.privileges = privileges_enum/* privileges */.U;
      this.is_cs_cit_eli = false;
      this.showButtonEditAppointment = false;
      this.showCard = true;
      this.isTransport = false;
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      if (this.hasPermission(this.privileges.CS_CIT_BUS)) {
        this.isTransport = true;
      }
      this.storageSubscription = this.storageService.getStorageChanges().subscribe(action => {
        if (action.action === 'showAppointmentCard' && action.value === false) {
          this.showCard = false;
          this.isTransport = true;
        } else if (action.action === 'showAppointmentCard' && action.value === true) {
          this.showCard = true;
          this.isTransport = true;
        }
      });
      /* this.store.select(apiGatewayFeatureSelector).subscribe({
        next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
       if (this.userInfo && this.userInfo.privileges){
        this.is_cs_cit_eli = this.userInfo.privileges.some((value) => value.privilegeId === 'CS_CIT_ELI');
        this.showButtonEditAppointment = this.userInfo.privileges.some((value) => value.privilegeId === 'CS_CIT_EDI');
      }*/
      if (!this.isTransport) {
        this.loadInfo();
        this.subscription = this.communicationService.verificacion$.subscribe(value => this.verificacion = value);
      }
    }
    ngOnDestroy() {
      if (!this.isTransport && this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    loadInfo() {
      var _this = this;
      return (0,asyncToGenerator/* default */.Z)(function* () {
        //localStorage.setItem('elementsDetachedLoad', '');
        _this.store.select(detached_load_selectors/* selectTruckVisitNbrData */.k).subscribe(truckVisitNbrData => {
          if (truckVisitNbrData) {
            _this.data = truckVisitNbrData;
            let retrieved = localStorage.getItem('elementsDetachedLoad') || "";
            _this.retrievedData = JSON.parse(retrieved);
            // Construye ELEMENT_DATA a partir de la variable data
            //this.buildElementData();
          } else {
            _this.data = null;
            _this.retrievedData = null;
          }
        });
      })();
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
  }
  AppointmentCreationComponent.ɵfac = function AppointmentCreationComponent_Factory(t) {
    return new (t || AppointmentCreationComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(communication_service/* CommunicationService */.O), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(AESEncryptionUtil_service/* AESEncryptionUtilService */.D), core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(storageservice_service/* StorageserviceService */.S), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f));
  };
  AppointmentCreationComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AppointmentCreationComponent,
    selectors: [["app-appointment-creation"]],
    decls: 2,
    vars: 2,
    consts: [["class", "containerized-load", 4, "ngIf"], [4, "ngIf"], [1, "containerized-load"], [1, "main-panel"], [1, "card"], [1, "card-header"], [1, "text-titulo"], [1, "card2"], [1, "span-icon"], [1, "icon-dollar"], [1, "card-content"], [1, "textop"], [2, "padding", "0 10px"], [1, "mat-lista"], [1, "divisores"], [1, "div-datos"], [1, "table"], [1, "row", "row-padding"], [1, "box"], [1, "box2"], [1, "box3"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [3, "origen"]],
    template: function AppointmentCreationComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, AppointmentCreationComponent_div_0_Template, 37, 6, "div", 0);
        core/* ɵɵtemplate */.YNc(1, AppointmentCreationComponent_div_1_Template, 2, 1, "div", 1);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", !ctx.isTransport);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.showCard && ctx.isTransport);
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, router/* RouterOutlet */.lC, icon/* MatIcon */.Hw, list/* MatList */.i$, list/* MatListItem */.Tg, card/* MatCard */.a8, card_appointment_component/* CardAppointmentComponent */.W],
    styles: [".card[_ngcontent-%COMP%]{width:475px;margin:20px;border:none;font-size:12px;font-family:Roboto,sans-serif;color:#666}.card2[_ngcontent-%COMP%]{margin-left:2.5%;width:95%;margin-top:15px}.main-panel[_ngcontent-%COMP%]{height:100vh;overflow-y:scroll;width:100%}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:16px;font-size:16px;background-color:transparent;border-top-left-radius:10px;border-top-right-radius:10px}.card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#666;background-color:#e5e5e5;border:none;border-radius:50px;width:100px;font-size:16px}.card-content[_ngcontent-%COMP%]{margin-left:60px;font-size:14px;height:80px}.table[_ngcontent-%COMP%]{border-spacing:0;width:90%;margin-left:5%;border:none;font-size:12px}.row[_ngcontent-%COMP%]{background-color:#e5e5e5;border-bottom:1px solid transparent;margin-bottom:5px;border-radius:5px;border:1px solid transparent;display:flex;justify-content:space-between;font-size:12px;color:#666}.box[_ngcontent-%COMP%]{flex:1;padding:10px}.box2[_ngcontent-%COMP%]{flex:1;padding:10px;text-align:center}.box3[_ngcontent-%COMP%]{flex:1;padding:10px;text-align:right}.card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:10px;margin-right:5px;margin-bottom:5px}.card-footer__item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.green-button[_ngcontent-%COMP%]{font-weight:700;background-color:#5c753b;color:#fff;margin-left:10px;border-radius:5px;padding:8px 16px;border:transparent;font-size:15px}.superior-button[_ngcontent-%COMP%]{font-size:10px;height:20px;width:120px!important}.header[_ngcontent-%COMP%]{background-color:#e5e5e5;border-bottom:1px solid transparent;margin-top:10px;margin-bottom:10px;border-radius:5px;border:1px solid transparent;display:flex;justify-content:space-between;font-weight:700}.icon-button[_ngcontent-%COMP%]{font-weight:700;display:flex;align-items:center;border:none;border-radius:5px;font-family:Roboto,sans-serif;width:100px;padding:5px}.icon-button-superior[_ngcontent-%COMP%]{font-size:10px;font-weight:700;display:flex;align-items:center;border:none;border-radius:5px;font-family:Roboto,sans-serif;width:150px;padding:5px}.icon-small[_ngcontent-%COMP%]{height:15px;width:20px;font-size:15px;border-right:1.8px solid #000;margin-right:5px}.icon-dollar[_ngcontent-%COMP%]{font-size:50px;margin-top:25px;width:50px;height:50px}.span-icon[_ngcontent-%COMP%]{position:absolute;margin-top:-20px}.text-fecha[_ngcontent-%COMP%]{font-size:12px}.text-titulo[_ngcontent-%COMP%]{font-weight:700;font-size:16px}.divisores[_ngcontent-%COMP%]{font-size:12px;height:30px!important}.mat-lista[_ngcontent-%COMP%]{border-radius:15px;margin-bottom:10px}.mat-list-item.divisores[_ngcontent-%COMP%]{white-space:normal;overflow:visible}.dimension-tabla[_ngcontent-%COMP%]{width:400px!important;color:#666}.mdc-data-table__header-cell[_ngcontent-%COMP%]{color:#666!important}.div-datos[_ngcontent-%COMP%]{color:#666!important;font-size:14px}.mat-divider[_ngcontent-%COMP%]{width:400px!important}.textop[_ngcontent-%COMP%]{margin-left:15px}.delete_appointment_nbr[_ngcontent-%COMP%]{padding:.5rem;border:#c0392b solid 1px;border-radius:.25rem;cursor:pointer}.delete_appointment_nbr_item_delete[_ngcontent-%COMP%], .edit_appointment_nbr_item_edit[_ngcontent-%COMP%]{width:1.98rem;color:#636e72!important;cursor:pointer;margin-top:10px}.espaciado[_ngcontent-%COMP%]{margin-top:10px}.appointment_creation__action[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:10px;margin-right:5px;margin-bottom:5px}.continuar_operacion[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center;padding:.5rem}"]
  });
  return AppointmentCreationComponent;
})();
// EXTERNAL MODULE: ./src/app/state/containerized-load/containerized-load.selectors.ts
var containerized_load_selectors = __webpack_require__(50091);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(82722);
// EXTERNAL MODULE: ./src/app/state/shared/shared.selectors.ts
var shared_selectors = __webpack_require__(13545);
// EXTERNAL MODULE: ./src/app/modules/billing/components/selected-invoice/selected-invoice.component.ts + 1 modules
var selected_invoice_component = __webpack_require__(27530);
// EXTERNAL MODULE: ./src/app/shared/components/invoice-item/invoice-item.component.ts
var invoice_item_component = __webpack_require__(22619);
;// CONCATENATED MODULE: ./src/app/modules/detached-load/components/import/import.component.ts














function ImportComponent_ng_container_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelement */._UZ(1, "app-invoice-item", 4);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const invoice_r2 = ctx.$implicit;
    const ctx_r1 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("invoice", invoice_r2)("user", ctx_r1.user.userName);
  }
}
function ImportComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 1)(2, "span", 2);
    core/* ɵɵtext */._uU(3);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵtemplate */.YNc(4, ImportComponent_ng_container_0_ng_container_4_Template, 2, 2, "ng-container", 3);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵtextInterpolate1 */.hij("Facturas de la Unidad: ", ctx_r0.invoiceBL, "");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.invoices);
  }
}
let ImportComponent = /*#__PURE__*/(() => {
  class ImportComponent {
    constructor(store, matDialog, utilService) {
      this.store = store;
      this.matDialog = matDialog;
      this.utilService = utilService;
      this.destroy$ = new Subject/* Subject */.x();
      this.privileges = privileges_enum/* privileges */.U;
      this.invoices = [];
      this.invoiceBL = "";
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: apiGatewayStore => {
          this.user = apiGatewayStore;
        },
        error: error => console.error(error)
      });
      this.store.select(shared_selectors/* sharedFeatureSelector */.x).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(next => {
        if (next.file) {
          window.open(this.utilService.pdfReceipt(next.file));
          this.store.dispatch((0,shared_actions/* cleanPdfInvoice */.I2)());
        }
      });
      this.store.select(detached_load_selectors/* detachedLoadFeatureSelector */.N).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          this.invoiceBL = result.result[0].hbl;
        },
        error: error => console.error(error)
      });
      this.store.select(containerized_load_selectors/* containerizedLoadFeatureSelector */.qO).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          this.invoices = result.unitNbrData;
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    pay(invoice) {
      const payMatDialog = this.matDialog.open(selected_invoice_component/* SelectedInvoiceComponent */.D, {
        data: {
          invoices: invoice,
          invoicesToPay: invoice.map(invoice => ({
            finalNbr: invoice.finalNumber,
            draftNbr: invoice.draftNumber,
            currency: invoice.currency,
            totalTotal: invoice.totalTotal
          })),
          clientID: this.user.userName
        }
      });
    }
    print(invoice) {
      this.store.dispatch((0,shared_actions/* getPdfInvoice */.Gs)({
        invoice: invoice
      }));
    }
  }
  ImportComponent.ɵfac = function ImportComponent_Factory(t) {
    return new (t || ImportComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f));
  };
  ImportComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ImportComponent,
    selectors: [["app-import"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "card-header"], [1, "text-titulo"], [4, "ngFor", "ngForOf"], [1, "invoice-item", 3, "invoice", "user"]],
    template: function ImportComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, ImportComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", ctx.invoices.length);
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, invoice_item_component/* InvoiceItemComponent */.p],
    styles: [".card[_ngcontent-%COMP%]{width:450px;margin:20px;border:none;font-size:14px;font-family:Roboto,sans-serif;color:#666!important}.invoice-item[_ngcontent-%COMP%]{margin-top:1rem}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:16px;background-color:transparent;border-top-left-radius:10px;border-top-right-radius:10px}.card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#666;background-color:#e5e5e5;border:none;border-radius:50px;width:100px}.card-content[_ngcontent-%COMP%]{margin-left:60px;font-size:15px;margin-top:20px;margin-bottom:20px}.table[_ngcontent-%COMP%]{border-spacing:0;width:90%;margin-left:5%;border:none;font-size:12px}.row[_ngcontent-%COMP%]{background-color:#e5e5e5;border-bottom:1px solid transparent;margin-bottom:5px;border-radius:5px;border:1px solid transparent;display:flex;justify-content:space-between;font-size:12px;color:#666}.box[_ngcontent-%COMP%]{flex:1;padding:10px}.box2[_ngcontent-%COMP%]{flex:1;padding:10px;text-align:center}.box3[_ngcontent-%COMP%]{flex:1;padding:10px;text-align:right}.card-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:10px;margin-right:5px;margin-bottom:5px}.green-button[_ngcontent-%COMP%]{font-weight:700;background-color:#5c753b;color:#fff;margin-left:10px;border-radius:5px;padding:8px 16px;border:transparent;font-size:15px}.superior-button[_ngcontent-%COMP%]{font-size:10px;height:20px;width:135px!important}.header[_ngcontent-%COMP%]{background-color:#e5e5e5;border-bottom:1px solid transparent;margin-top:10px;margin-bottom:10px;border-radius:5px;border:1px solid transparent;display:flex;justify-content:space-between;font-weight:700}.icon-button[_ngcontent-%COMP%]{font-weight:700;display:flex;align-items:center;border:none;border-radius:5px;font-family:Roboto,sans-serif;width:100px;padding:5px}.icon-button-superior[_ngcontent-%COMP%]{font-size:10px;font-weight:700;display:flex;align-items:center;border:none;border-radius:5px;font-family:Roboto,sans-serif;width:150px;padding:5px}.icon-small[_ngcontent-%COMP%]{height:15px;width:26px;font-size:18px;border-right:1.2px solid #000;margin-right:5px}.icon-dollar[_ngcontent-%COMP%]{font-size:50px;margin-top:25px;width:40px;height:50px}.span-icon[_ngcontent-%COMP%]{position:absolute;margin-top:0}.text-fecha[_ngcontent-%COMP%]{font-size:12px}"]
  });
  return ImportComponent;
})();
// EXTERNAL MODULE: ./src/app/modules/containerized-load/components/invoice-management-billing/invoice-management-billing.component.ts
var invoice_management_billing_component = __webpack_require__(78004);
// EXTERNAL MODULE: ./src/app/modules/containerized-load/components/invoice-proforma/invoice-proforma.component.ts
var invoice_proforma_component = __webpack_require__(87093);
// EXTERNAL MODULE: ./src/app/shared/components/invoice-resume/invoice-resume.component.ts
var invoice_resume_component = __webpack_require__(16651);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/of.js
var of = __webpack_require__(39646);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/take.js
var take = __webpack_require__(95698);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/filter.js
var filter = __webpack_require__(39300);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/map.js
var map = __webpack_require__(54004);
// EXTERNAL MODULE: ./src/app/shared/utils/alert-utils.ts
var alert_utils = __webpack_require__(86413);
// EXTERNAL MODULE: ./src/app/shared/components/agent-searcher/agent-searcher.component.ts
var agent_searcher_component = __webpack_require__(78010);
// EXTERNAL MODULE: ./src/app/modules/services/components/customer-searcher/customer-searcher.component.ts
var customer_searcher_component = __webpack_require__(19243);
// EXTERNAL MODULE: ./src/app/shared/components/upload-file/upload-file.component.ts
var upload_file_component = __webpack_require__(75288);
;// CONCATENATED MODULE: ./src/app/modules/detached-load/components/detached-load-document/detached-load-document.component.ts













const detached_load_document_component_c0 = ["hijo"];
function DetachedLoadDocumentComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "app-customer-searcher", 6);
    core/* ɵɵlistener */.NdJ("customerSearch", function DetachedLoadDocumentComponent_ng_container_3_ng_container_1_Template_app_customer_searcher_customerSearch_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r5.searchCustomer($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r3 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("controlDisabled", !!ctx_r3.consignee)("searcher", !ctx_r3.consignee)("agent", ctx_r3.currentUser.empresa.id)("data", ctx_r3.nitConsignee + "/" + ctx_r3.consignee);
  }
}
function DetachedLoadDocumentComponent_ng_container_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div")(1, "span");
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r4 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵclassMap */.Tol(ctx_r4.alert.clase);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r4.alert.message);
  }
}
function DetachedLoadDocumentComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, DetachedLoadDocumentComponent_ng_container_3_ng_container_1_Template, 2, 4, "ng-container", 2);
    core/* ɵɵtemplate */.YNc(2, DetachedLoadDocumentComponent_ng_container_3_div_2_Template, 3, 3, "div", 5);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.currentUser.empresa);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.alert.showAlert);
  }
}
function DetachedLoadDocumentComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "app-agent-searcher", 7);
    core/* ɵɵlistener */.NdJ("agentSearch", function DetachedLoadDocumentComponent_ng_container_4_ng_container_1_Template_app_agent_searcher_agentSearch_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r8.searchAgent($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r7 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("controlDisabled", !!ctx_r7.agent)("searcher", !ctx_r7.agent)("agent", ctx_r7.currentUser.empresa.id)("data", ctx_r7.nitAgent + "/" + ctx_r7.agent);
  }
}
function DetachedLoadDocumentComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, DetachedLoadDocumentComponent_ng_container_4_ng_container_1_Template, 2, 4, "ng-container", 2);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.currentUser.empresa);
  }
}
let DetachedLoadDocumentComponent = /*#__PURE__*/(() => {
  class DetachedLoadDocumentComponent {
    constructor(activatedRoute, store, router, base64EncryptionUtilService) {
      this.activatedRoute = activatedRoute;
      this.store = store;
      this.router = router;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.destroy$ = new Subject/* Subject */.x();
      this.alert = {
        showAlert: false,
        message: "",
        clase: ""
      };
      this.routeData = {
        documentation_module: ''
      };
      this.nbr = '';
      this.consignee = '';
      this.nitConsignee = '';
      this.consigneeToSave = false;
      this.blHaveConsignee = false;
      this.agent = '';
      this.nitAgent = '';
      this.agentToSave = false;
      this.blHaveAgent = false;
      this.sizeFilesLoaded = 0;
      this.finishOperationSon = false;
      this.routerSubscription = new Subscription/* Subscription */.w0();
    }
    ngAfterViewInit() {
      if (this.uploadFileComponent) {
        this.uploadFileComponent.arraySize$.pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(size => {
          this.sizeFilesLoaded = size;
        });
        this.uploadFileComponent.finish$.pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(finish => {
          this.finishOperationSon = finish;
          this.navegatePrincipalScreen();
        });
      }
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          this.currentUser = result;
        },
        error: error => console.log(error)
      });
      this.routerSubscription = this.activatedRoute.data.pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: data => {
          this.routeData = data;
        }
      });
      this.store.select(detached_load_selectors/* detachedLoadFeatureSelector */.N).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          this.nbr = result.result[0]?.hbl;
          this.consignee = result.result[0]?.consigneeName != null ? result.result[0].consigneeName : '';
          this.nitConsignee = result.result[0]?.id != null ? result.result[0].id : '';
          this.blHaveConsignee = result.result[0]?.consigneeName != null;
          this.agent = result.result[0]?.loadAgentName != null ? result.result[0].loadAgentName : '';
          this.nitAgent = result.result[0]?.loadAgentId != null ? result.result[0].loadAgentId : '';
          this.blHaveAgent = result.result[0]?.loadAgentId != null;
        },
        error: error => console.error(error)
      });
    }
    searchCustomer(value) {
      this.nitConsignee = value.split('/')[1] ? value.split('/')[0] : '';
      this.consignee = value.split('/')[1] ? value.split('/')[1] : '';
      this.consigneeToSave = true;
    }
    searchAgent(value) {
      this.nitAgent = value.split('/')[1] ? value.split('/')[0] : '';
      this.agent = value.split('/')[1] ? value.split('/')[1] : '';
      this.agentToSave = true;
    }
    consigneeValid() {
      if (this.sizeFilesLoaded == 0) {
        return (0,of.of)(false).pipe((0,take/* take */.q)(1));
      }
      if (!this.blHaveConsignee && this.nitConsignee == '') {
        (0,alert_utils/* showAlertTime */.h)(this.alert, "Debe seleccionar un cliente", 'alerta');
        return (0,of.of)(false).pipe((0,take/* take */.q)(1));
      }
      if (this.blHaveConsignee && this.nitAgent == '') {
        return (0,of.of)(true).pipe((0,take/* take */.q)(1));
      }
      if ((!this.blHaveConsignee || !this.blHaveAgent) && (this.nitConsignee != '' || this.nitAgent != '') && (this.consigneeToSave || this.agentToSave)) {
        let body = {
          agentId: null,
          blNbr: this.nbr,
          loadAgentId: !this.blHaveAgent ? this.nitAgent != '' ? this.nitAgent : null : null,
          nitConsignee: !this.blHaveConsignee ? this.nitConsignee != '' ? this.nitConsignee : null : null
        };
        this.store.dispatch((0,detached_load_actions/* getUpdateAgentAndConsigneeInHBl */.tC)({
          body
        }));
        return this.store.select(detached_load_selectors/* detachedLoadFeatureSelector */.N).pipe((0,filter/* filter */.h)(result => result.loadedCustomer === 'true'), (0,map/* map */.U)(() => true), (0,take/* take */.q)(1));
      }
      if (this.sizeFilesLoaded > 0 && this.blHaveConsignee) {
        return (0,of.of)(true).pipe((0,take/* take */.q)(1));
      }
      return (0,of.of)(false).pipe((0,take/* take */.q)(1));
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    navegatePrincipalScreen() {
      if (this.finishOperationSon) {
        this.router.navigate(['/', 'carga-suelta']);
        this.store.dispatch((0,detached_load_actions/* getDetachedLoad */.fJ)({
          nbr: this.base64EncryptionUtilService.encrypt(this.nbr)
        }));
      }
    }
  }
  DetachedLoadDocumentComponent.ɵfac = function DetachedLoadDocumentComponent_Factory(t) {
    return new (t || DetachedLoadDocumentComponent)(core/* ɵɵdirectiveInject */.Y36(router/* ActivatedRoute */.gz), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L));
  };
  DetachedLoadDocumentComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: DetachedLoadDocumentComponent,
    selectors: [["app-detached-load-document"]],
    viewQuery: function DetachedLoadDocumentComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(detached_load_document_component_c0, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.uploadFileComponent = _t.first);
      }
    },
    decls: 7,
    vars: 5,
    consts: [[1, "documents-load"], [1, "documents-load__title"], [4, "ngIf"], [3, "module", "formValid", "nbr"], ["hijo", ""], [3, "class", 4, "ngIf"], [1, "service-orders-create__customer-searcher", 3, "controlDisabled", "searcher", "agent", "data", "customerSearch"], [1, "service-orders-create__customer-searcher", 3, "controlDisabled", "searcher", "agent", "data", "agentSearch"]],
    template: function DetachedLoadDocumentComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "h3", 1);
        core/* ɵɵtext */._uU(2, " Documentaci\u00F3n ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(3, DetachedLoadDocumentComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
        core/* ɵɵtemplate */.YNc(4, DetachedLoadDocumentComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        core/* ɵɵelement */._UZ(5, "app-upload-file", 3, 4);
        core/* ɵɵelementEnd */.qZA();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.currentUser);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.currentUser);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("module", ctx.routeData.documentation_module)("formValid", ctx.consigneeValid.bind(ctx))("nbr", ctx.nbr);
      }
    },
    dependencies: [common/* NgIf */.O5, agent_searcher_component/* AgentSearcherComponent */.Z, customer_searcher_component/* CustomerSearcherComponent */.p, upload_file_component/* UploadFileComponent */.R],
    styles: [".documents-load[_ngcontent-%COMP%]{padding:1rem;padding-top:0;padding-bottom:0;display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto auto;row-gap:1rem}.documents-load__title[_ngcontent-%COMP%]{font-size:1.5rem;color:#78909c}.alerta[_ngcontent-%COMP%]{color:#f44336;padding:-2rem 1rem 1rem;margin-bottom:0rem;border-radius:.2rem;margin-top:-2rem}.exitoso[_ngcontent-%COMP%]{background-color:#9fcf9f;color:#fff;padding:1rem;margin-bottom:1rem;border-radius:.2rem}"]
  });
  return DetachedLoadDocumentComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/enums/documentation-modules.enum.ts
var documentation_modules_enum = __webpack_require__(92666);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(15439);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/button.mjs
var fesm2020_button = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/sort.mjs
var sort = __webpack_require__(96308);
;// CONCATENATED MODULE: ./src/app/modules/detached-load/components/generate-pin-result-item/generate-pin-result-item.component.ts





function GeneratePinResultItemComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵtext */._uU(1, "Cargo");
    core/* ɵɵelementEnd */.qZA();
  }
}
function GeneratePinResultItemComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 26);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const i_r14 = ctx.index;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(i_r14 + 1);
  }
}
function GeneratePinResultItemComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵtext */._uU(1, "Peso");
    core/* ɵɵelementEnd */.qZA();
  }
}
function GeneratePinResultItemComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 26);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r15.weight);
  }
}
function GeneratePinResultItemComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵtext */._uU(1, "Cant");
    core/* ɵɵelementEnd */.qZA();
  }
}
function GeneratePinResultItemComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 26);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r16.quantity);
  }
}
function GeneratePinResultItemComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵtext */._uU(1, "Dest");
    core/* ɵɵelementEnd */.qZA();
  }
}
function GeneratePinResultItemComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r17.destination);
  }
}
function GeneratePinResultItemComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵtext */._uU(1, "Transportista");
    core/* ɵɵelementEnd */.qZA();
  }
}
function GeneratePinResultItemComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r18.shipper);
  }
}
function GeneratePinResultItemComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 28);
  }
}
function GeneratePinResultItemComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 29);
  }
}
let GeneratePinResultItemComponent = /*#__PURE__*/(() => {
  class GeneratePinResultItemComponent {
    constructor() {
      this.displayedColumns = [];
      this.dataSource = new table/* MatTableDataSource */.by([]);
    }
    ngOnInit() {
      this.displayedColumns = ["id", "weight", "quantity", "shipper"];
      this.dataSource = new table/* MatTableDataSource */.by(this.pin);
      this.dataSource.sort = this.sort;
    }
  }
  GeneratePinResultItemComponent.ɵfac = function GeneratePinResultItemComponent_Factory(t) {
    return new (t || GeneratePinResultItemComponent)();
  };
  GeneratePinResultItemComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: GeneratePinResultItemComponent,
    selectors: [["app-generate-pin-result-item"]],
    viewQuery: function GeneratePinResultItemComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
      }
    },
    inputs: {
      pinNumber: "pinNumber",
      pin: "pin"
    },
    decls: 36,
    vars: 4,
    consts: [[1, "generate-pin-result__item"], [1, "generate-pin-result__header"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 40.59 25.45", 1, "generate-pin-result__truck"], ["id", "Capa_1-2"], [1, "cls-2"], ["id", "s", "d", "M30.88,17.23c-1.58,0-2.97.83-3.75,2.07h-13.38c-.5-.8-1.25-1.42-2.14-1.77V0h28.99v19.3h-5.96c-.79-1.24-2.17-2.07-3.75-2.07Z", 1, "cls-1"], ["id", "s-2", "d", "M40.59,20.97c0,.18-.07.35-.23.49-.15.13-.35.2-.55.2h-4.51c0-.6-.12-1.18-.34-1.7h5.62v1.01Z", 1, "cls-1"], ["id", "s-3", "d", "M26.44,21.66h-12.02c0-.6-.12-1.18-.34-1.7h12.69c-.22.52-.34,1.1-.34,1.7Z", 1, "cls-1"], ["id", "s-4", "d", "M0,11.82v8.01c0,.47.18.94.54,1.3.36.36.83.54,1.3.54h3.72c0-2.45,1.99-4.43,4.43-4.43.25,0,.5.02.74.06V4.63s-2.99.01-4.52.24c-1.53.23-3.13,1.28-4.36,2.51S0,10.21,0,11.82ZM1.29,11.7c0-1.18.45-2.36,1.35-3.26.9-.9,2.08-1.67,3.2-1.84,1.12-.17,3.32-.18,3.32-.18v5.61c0,.15-.05.29-.15.42-.1.12-.23.2-.38.23l-6.57,1.31c-.19.04-.38,0-.54-.13-.16-.13-.24-.32-.24-.51v-1.64Z", 1, "cls-1"], ["id", "s-5", "d", "M27.49,19.96c-.26.51-.4,1.09-.4,1.7,0,2.09,1.69,3.79,3.79,3.79,2.09,0,3.79-1.7,3.79-3.79,0-.61-.14-1.19-.4-1.7-.07-.14-.15-.28-.24-.42-.06-.08-.12-.17-.18-.25-.7-.87-1.76-1.42-2.96-1.42-1.2,0-2.27.56-2.96,1.42-.06.08-.12.16-.18.25-.09.13-.17.27-.24.42ZM28.92,21.66c0-.73.4-1.36.99-1.7.29-.17.62-.26.98-.26s.69.09.98.26c.59.34.99.97.99,1.7,0,1.08-.88,1.96-1.96,1.96s-1.96-.88-1.96-1.96Z", 1, "cls-1"], ["id", "s-6", "d", "M6.2,21.66c0,2.09,1.69,3.79,3.79,3.79,2.09,0,3.79-1.7,3.79-3.79,0-.78-.24-1.51-.64-2.12-.38-.56-.91-1.02-1.53-1.31-.27-.13-.57-.23-.88-.29-.24-.05-.48-.07-.74-.07-2.09,0-3.79,1.69-3.79,3.79ZM8.03,21.66c0-1.08.88-1.96,1.96-1.96.26,0,.51.05.74.14.36.14.66.39.88.7.22.32.35.7.35,1.12,0,1.08-.88,1.96-1.96,1.96-1.08,0-1.96-.88-1.96-1.96Z", 1, "cls-1"], ["id", "white_stripe", "x", "11.6", "y", "1.65", "width", "28.99", "height", ".49", 1, "cls-1"], [1, "generate-pin-result__pin"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-cell__right", 4, "matCellDef"], ["matColumnDef", "weight"], ["matColumnDef", "quantity"], ["matColumnDef", "destination"], ["mat-cell", "", "class", "table-cell__left", 4, "matCellDef"], ["matColumnDef", "shipper"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "table-cell__right"], ["mat-cell", "", 1, "table-cell__left"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function GeneratePinResultItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "div", 1);
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(2, "svg", 2)(3, "defs")(4, "style");
        core/* ɵɵtext */._uU(5, ".cls-1{fill:#5ba56b;stroke-width:0px;}.cls-2{opacity:.79;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(6, "g", 3)(7, "g", 4);
        core/* ɵɵelement */._UZ(8, "path", 5)(9, "path", 6)(10, "path", 7)(11, "path", 8)(12, "path", 9)(13, "path", 10)(14, "rect", 11);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementStart */.TgZ(15, "div", 12);
        core/* ɵɵtext */._uU(16);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(17, "table", 13, 14);
        core/* ɵɵelementContainerStart */.ynx(19, 15);
        core/* ɵɵtemplate */.YNc(20, GeneratePinResultItemComponent_th_20_Template, 2, 0, "th", 16);
        core/* ɵɵtemplate */.YNc(21, GeneratePinResultItemComponent_td_21_Template, 2, 1, "td", 17);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(22, 18);
        core/* ɵɵtemplate */.YNc(23, GeneratePinResultItemComponent_th_23_Template, 2, 0, "th", 16);
        core/* ɵɵtemplate */.YNc(24, GeneratePinResultItemComponent_td_24_Template, 2, 1, "td", 17);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(25, 19);
        core/* ɵɵtemplate */.YNc(26, GeneratePinResultItemComponent_th_26_Template, 2, 0, "th", 16);
        core/* ɵɵtemplate */.YNc(27, GeneratePinResultItemComponent_td_27_Template, 2, 1, "td", 17);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(28, 20);
        core/* ɵɵtemplate */.YNc(29, GeneratePinResultItemComponent_th_29_Template, 2, 0, "th", 16);
        core/* ɵɵtemplate */.YNc(30, GeneratePinResultItemComponent_td_30_Template, 2, 1, "td", 21);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(31, 22);
        core/* ɵɵtemplate */.YNc(32, GeneratePinResultItemComponent_th_32_Template, 2, 0, "th", 16);
        core/* ɵɵtemplate */.YNc(33, GeneratePinResultItemComponent_td_33_Template, 2, 1, "td", 21);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(34, GeneratePinResultItemComponent_tr_34_Template, 1, 0, "tr", 23);
        core/* ɵɵtemplate */.YNc(35, GeneratePinResultItemComponent_tr_35_Template, 1, 0, "tr", 24);
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(16);
        core/* ɵɵtextInterpolate1 */.hij("Pin ", ctx.pinNumber, "");
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.dataSource);
        core/* ɵɵadvance */.xp6(17);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, sort/* MatSort */.YE, sort/* MatSortHeader */.nU],
    styles: [".generate-pin-result__item[_ngcontent-%COMP%]{background-color:#fff;padding:1rem;border-radius:.5rem;margin-bottom:2rem}.generate-pin-result__header[_ngcontent-%COMP%]{width:max-content;margin-bottom:1rem;padding-bottom:.5rem;border-bottom:1px #636e72 solid;display:flex;justify-content:flex-start;align-items:center}.generate-pin-result__truck[_ngcontent-%COMP%]{width:4rem;margin-right:1rem}.generate-pin-result__pin[_ngcontent-%COMP%]{font-size:2.5rem;font-family:Gilroy-light!important}.generate-pin__unit-size-text[_ngcontent-%COMP%]{color:#fff;background-color:#636e72;padding:.15rem;border-radius:.5rem;font-family:Gilroy-ExtraBold!important}"]
  });
  return GeneratePinResultItemComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/detached-load/components/generate-pin-result/generate-pin-result.component.ts






let GeneratePinResultComponent = /*#__PURE__*/(() => {
  class GeneratePinResultComponent {
    constructor(dialogData) {
      this.dialogData = dialogData;
    }
    ngOnInit() {
      this.pins = {
        pin: this.dialogData.pins.pinNbr,
        nbr: this.dialogData.pins.blNbr,
        createdAt: this.dialogData.pins.createdAt,
        units: this.dialogData.pins.pinContainerized.map(value => ({
          quantity: value.cargoQuantity,
          weight: value.cargoWeigth,
          destination: value.destination || "Sin Destino",
          shipper: value.truckingCompanyNameLDAP
        }))
      };
    }
    defaultDateformat(date) {
      return moment(date, "DD-MM-YYYY").format("YYYY/MM/DD");
    }
  }
  GeneratePinResultComponent.ɵfac = function GeneratePinResultComponent_Factory(t) {
    return new (t || GeneratePinResultComponent)(core/* ɵɵdirectiveInject */.Y36(dialog/* MAT_DIALOG_DATA */.WI));
  };
  GeneratePinResultComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: GeneratePinResultComponent,
    selectors: [["app-generate-pin-result"]],
    decls: 14,
    vars: 4,
    consts: [[1, "generate-pin-result__header"], [1, "generate-pin-result__date"], ["mat-dialog-title", ""], [1, "generate-pin-result__title"], ["mat-dialog-content", "", 1, "generate-pin-result__content"], [1, "generate-pin-result__result-item", 3, "pinNumber", "pin"], ["mat-dialog-actions", ""], [1, "generate-pin-result__actions"], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", 1, "generate-pin-result__submit"]],
    template: function GeneratePinResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "span", 1);
        core/* ɵɵtext */._uU(2);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(3, "h1", 2)(4, "span", 3);
        core/* ɵɵtext */._uU(5, " Se gener\u00F3");
        core/* ɵɵelement */._UZ(6, "br");
        core/* ɵɵtext */._uU(7);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(8, "div", 4);
        core/* ɵɵelement */._UZ(9, "app-generate-pin-result-item", 5);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(10, "div", 6)(11, "div", 7)(12, "button", 8);
        core/* ɵɵtext */._uU(13, "Ok");
        core/* ɵɵelementEnd */.qZA()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵtextInterpolate */.Oqu(ctx.defaultDateformat(ctx.pins.createdAt));
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵtextInterpolate1 */.hij(" el PIN para el HBL: ", ctx.pins.nbr, " ");
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("pinNumber", ctx.pins.pin)("pin", ctx.pins.units);
      }
    },
    dependencies: [dialog/* MatDialogClose */.ZT, dialog/* MatDialogTitle */.uh, dialog/* MatDialogContent */.xY, dialog/* MatDialogActions */.H8, fesm2020_button/* MatButton */.lW, GeneratePinResultItemComponent],
    styles: [".generate-pin-result__header[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.generate-pin-result__date[_ngcontent-%COMP%]{color:#92b975;border:#92B975 solid 1px;margin-top:1rem;margin-right:1rem;border-radius:.25rem;padding:.5rem;font-family:Gilroy-light!important;font-size:1.25rem}.generate-pin-result__title[_ngcontent-%COMP%]{color:#92b975;font-family:Gilroy-ExtraBold!important;font-size:1.5rem}.generate-pin-result__content[_ngcontent-%COMP%]{padding:2rem;background-color:#ecf0f1}.generate-pin-result__result-item[_ngcontent-%COMP%]{margin-bottom:1rem}.generate-pin-result__actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.generate-pin-result__submit[_ngcontent-%COMP%]{color:#fff;font-family:Gilroy-light!important}"]
  });
  return GeneratePinResultComponent;
})();
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/snack-bar.mjs
var snack_bar = __webpack_require__(17009);
// EXTERNAL MODULE: ./src/app/shared/directives/double-factor-authentication.directive.ts
var double_factor_authentication_directive = __webpack_require__(53826);
// EXTERNAL MODULE: ./src/app/shared/components/truck-searcher/truck-searcher.component.ts
var truck_searcher_component = __webpack_require__(31589);
;// CONCATENATED MODULE: ./src/app/modules/detached-load/components/generate-pin/generate-pin.component.ts





















function GeneratePinComponent_ng_container_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "app-truck-searcher", 23);
    core/* ɵɵlistener */.NdJ("truckSearch", function GeneratePinComponent_ng_container_18_ng_container_1_Template_app_truck_searcher_truckSearch_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r12 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r12.unitTruckSearch($event));
    })("truckControl", function GeneratePinComponent_ng_container_18_ng_container_1_Template_app_truck_searcher_truckControl_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r14 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r14.setTruckFormControl($event));
    })("cleanTrucker", function GeneratePinComponent_ng_container_18_ng_container_1_Template_app_truck_searcher_cleanTrucker_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r15 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r15.clean($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r11 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("consigneeId", ctx_r11.lots[0].id);
  }
}
function GeneratePinComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, GeneratePinComponent_ng_container_18_ng_container_1_Template, 2, 1, "ng-container", 11);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.lots.length);
  }
}
function GeneratePinComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 24);
    core/* ɵɵtext */._uU(1, "Tot Cargo");
    core/* ɵɵelementEnd */.qZA();
  }
}
function GeneratePinComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 25);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const i_r17 = ctx.index;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(i_r17 + 1);
  }
}
function GeneratePinComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 24);
    core/* ɵɵtext */._uU(1, "Peso");
    core/* ɵɵelementEnd */.qZA();
  }
}
function GeneratePinComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 25);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r18.weight);
  }
}
function GeneratePinComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 24);
    core/* ɵɵtext */._uU(1, "Cantidad");
    core/* ɵɵelementEnd */.qZA();
  }
}
function GeneratePinComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 25);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r19.quantity);
  }
}
function GeneratePinComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 26);
  }
}
function GeneratePinComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 27);
  }
}
function GeneratePinComponent_ng_container_35_button_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "button", 29);
    core/* ɵɵtext */._uU(1, " Generar Pin ");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r21 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵproperty */.Q6J("appDoubleFactorAuthentication", "CS_IMP_PIN")("appDoubleFactorAPIGateway", ctx_r21.userInfo)("doubleFactorCallback", ctx_r21.submit.bind(ctx_r21))("doubleFactorIncorrectCallback", ctx_r21.cancel.bind(ctx_r21))("disabled", ctx_r21.truckFormControl.invalid || !ctx_r21.truckValid);
  }
}
const generate_pin_component_c0 = function (a0) {
  return [a0];
};
function GeneratePinComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, GeneratePinComponent_ng_container_35_button_1_Template, 2, 5, "button", 28);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r10 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(1, generate_pin_component_c0, ctx_r10.privileges.CS_IMP_PIN));
  }
}
let GeneratePinComponent = /*#__PURE__*/(() => {
  class GeneratePinComponent {
    constructor(store, matDialog, matSnackBar, router, base64EncryptionUtilService) {
      this.store = store;
      this.matDialog = matDialog;
      this.matSnackBar = matSnackBar;
      this.router = router;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.destroy$ = new Subject/* Subject */.x();
      this.privileges = privileges_enum/* privileges */.U;
      this.dataSource = new table/* MatTableDataSource */.by();
      this.displayedColumns = [];
      this.showUnits = false;
      this.multipletrucker = "";
      this.unitTrucker = "";
      this.multipleChecked = false;
      this.unitChecked = false;
      this.truckValid = true;
      this.cleanTruckerFunction = () => {};
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      this.store.select(detached_load_selectors/* detachedLoadFeatureSelector */.N).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          if (result.truckResult) {
            if (result.truckResult.length) {
              if (result.truckResult[0].pinContainerized) {
                if (result.truckResult[0].pinContainerized.length) {
                  const dialog = this.matDialog.open(GeneratePinResultComponent, {
                    width: "60rem",
                    disableClose: true,
                    data: {
                      pins: result.truckResult[0]
                    }
                  });
                  dialog.afterClosed().subscribe({
                    next: value => {
                      this.router.navigate(["/", "carga-suelta", "pin"]);
                    },
                    error: error => console.error(error)
                  });
                }
              }
            }
          }
          this.lots = result.result;
          if (this.lots.length) {
            let filteredResult = this.lots.filter(item => item.yard);
            filteredResult = filteredResult.filter(item => !item.hasHolds);
            filteredResult = filteredResult.filter(item => !item.hasPin);
            filteredResult = filteredResult.filter(item => !item.truck_visit_appt_nbr);
            filteredResult.forEach(value => {
              if (!value.onAccount) {
                if (value.hasChargeableUnitEvents || value.hasDebt || value.storageDaysOwed != 0) {
                  filteredResult = filteredResult.filter(item => item.unitNbr != value.unitNbr);
                }
              }
            });
            if (filteredResult.length) {
              this.lots = filteredResult;
              this.displayedColumns = ["no", "weight", "quantity"];
              this.dataSource = new table/* MatTableDataSource */.by(filteredResult.map(value => ({
                quantity: value.cargoQuantity,
                weight: value.cargoWeigth
              })));
            } else {
              this.matSnackBar.open("Los lots asociados al HBL no cumplen las condiciones", "", {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              });
              this.router.navigate(["/", "carga-suelta"]);
            }
          }
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
      this.store.dispatch((0,shared_actions/* cleanTruckers */.oX)());
    }
    submit() {
      if (this.trucker) {
        if (this.trucker.split("/")[1]) {
          this.store.dispatch((0,detached_load_actions/* getGeneratePin */.sS)({
            body: [{
              "nbr": this.lots[0].nbr,
              "isUnit": false,
              "isBooking": false,
              "isEdo": false,
              "isEro": false,
              "consignee": this.lots[0].id,
              "unitsTrucks": this.lots.map(item => ({
                "nbr": item.unitNbr,
                "truckId": this.trucker.split("/")[0],
                "truckName": this.trucker.split("/")[1],
                "twenty": false,
                "isoType": "",
                "quantity": 0,
                "commodity": "",
                "cargoQuantity": item.cargoQuantity,
                "cargoWeigth": item.cargoWeigth,
                "destination": null,
                "truckVisitAppointmetId": null
              })),
              "frghtKind": "BBK",
              "isGroup": 0,
              "emailNotification": {
                "name": this.userInfo.userName,
                "mail": null
              }
            }],
            hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CS_IMP_PIN")[0].notificable,
            privilege: "CS_IMP_PIN",
            notificationData: {
              userId: this.userInfo.empresa?.id,
              createdByLDAP: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,
              blNbr: this.lots[0].hbl,
              consigneeId: this.lots[0].consigneeId,
              consigneeName: this.lots[0].consigneeName,
              truckId: this.trucker.split("/")[1],
              truckingCompanyNameLDAP: this.trucker.split("/")[1],
              totalLots: this.lots.length,
              cargoWeigth: this.lots.reduce((previousValue, currentValue) => previousValue + currentValue.cargoWeigth, 0),
              cargoQuantity: this.lots.reduce((previousValue, currentValue) => previousValue + currentValue.cargoQuantity, 0),
              createdByCompanyNameLDAP: ""
            }
          }));
        } else {
          this.matSnackBar.open("Error, no ha seleccionado empresa de transporte", "", {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          });
        }
      } else {
        this.matSnackBar.open("Error, no ha seleccionado empresa de transporte", "", {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        });
      }
    }
    cancel() {
      this.router.navigate(["/", "carga-suelta"]);
    }
    unitTruckSearch(value) {
      this.trucker = value;
    }
    clean(value) {
      this.cleanTruckerFunction = value;
    }
    toggleShowUnits() {
      this.showUnits = !this.showUnits;
    }
    setTruckFormControl(value) {
      this.truckFormControl = value;
      if (value.errors) {
        this.truckValid = false;
      } else {
        this.truckValid = true;
      }
    }
  }
  GeneratePinComponent.ɵfac = function GeneratePinComponent_Factory(t) {
    return new (t || GeneratePinComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L));
  };
  GeneratePinComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: GeneratePinComponent,
    selectors: [["app-generate-pin"]],
    decls: 36,
    vars: 5,
    consts: [[1, "generate-pin"], [1, "title-card"], [1, "card-title"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 83.36 1.91", 1, "welcome__line"], ["id", "Capa_1-2"], ["width", "31.37", "height", "1.91", 1, "cls-2"], ["x", "26.13", "width", "28.61", "height", "1.91", 1, "cls-3"], ["x", "54.74", "width", "28.61", "height", "1.91", 1, "cls-1"], [1, "generate-pin__caption"], [1, "generate-pin__caption-bold"], [1, "generate-pin__units"], [4, "ngIf"], ["mat-table", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "no"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-cell__right", 4, "matCellDef"], ["matColumnDef", "weight"], ["matColumnDef", "quantity"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "generate-pin__actions"], ["mat-flat-button", "", 1, "generate-pin__cancel", 3, "click"], [3, "consigneeId", "truckSearch", "truckControl", "cleanTrucker"], ["mat-header-cell", ""], ["mat-cell", "", 1, "table-cell__right"], ["mat-header-row", ""], ["mat-row", ""], ["mat-raised-button", "", "color", "primary", "class", "generate-pin__submit", 3, "appDoubleFactorAuthentication", "appDoubleFactorAPIGateway", "doubleFactorCallback", "doubleFactorIncorrectCallback", "disabled", 4, "permissions"], ["mat-raised-button", "", "color", "primary", 1, "generate-pin__submit", 3, "appDoubleFactorAuthentication", "appDoubleFactorAPIGateway", "doubleFactorCallback", "doubleFactorIncorrectCallback", "disabled"]],
    template: function GeneratePinComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "mat-card")(1, "mat-card-content")(2, "div", 0)(3, "div", 1)(4, "h2", 2);
        core/* ɵɵtext */._uU(5, "Generar PIN para el HBL");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(6, "svg", 3)(7, "defs")(8, "style");
        core/* ɵɵtext */._uU(9, ".cls-1{fill:#c5c6c8;}.cls-2{fill:#7ba052;}.cls-3{fill:#4b8051;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(10, "g", 4);
        core/* ɵɵelement */._UZ(11, "rect", 5)(12, "rect", 6)(13, "rect", 7);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementStart */.TgZ(14, "p", 8)(15, "span", 9);
        core/* ɵɵtext */._uU(16, " Para asignar PIN seleccione la Empresa de transporte. ");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(17, "div", 10);
        core/* ɵɵtemplate */.YNc(18, GeneratePinComponent_ng_container_18_Template, 2, 1, "ng-container", 11);
        core/* ɵɵelementStart */.TgZ(19, "table", 12, 13);
        core/* ɵɵelementContainerStart */.ynx(21, 14);
        core/* ɵɵtemplate */.YNc(22, GeneratePinComponent_th_22_Template, 2, 0, "th", 15);
        core/* ɵɵtemplate */.YNc(23, GeneratePinComponent_td_23_Template, 2, 1, "td", 16);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(24, 17);
        core/* ɵɵtemplate */.YNc(25, GeneratePinComponent_th_25_Template, 2, 0, "th", 15);
        core/* ɵɵtemplate */.YNc(26, GeneratePinComponent_td_26_Template, 2, 1, "td", 16);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(27, 18);
        core/* ɵɵtemplate */.YNc(28, GeneratePinComponent_th_28_Template, 2, 0, "th", 15);
        core/* ɵɵtemplate */.YNc(29, GeneratePinComponent_td_29_Template, 2, 1, "td", 16);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(30, GeneratePinComponent_tr_30_Template, 1, 0, "tr", 19);
        core/* ɵɵtemplate */.YNc(31, GeneratePinComponent_tr_31_Template, 1, 0, "tr", 20);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(32, "div", 21)(33, "button", 22);
        core/* ɵɵlistener */.NdJ("click", function GeneratePinComponent_Template_button_click_33_listener() {
          return ctx.cancel();
        });
        core/* ɵɵtext */._uU(34, "Cancelar");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(35, GeneratePinComponent_ng_container_35_Template, 2, 3, "ng-container", 11);
        core/* ɵɵelementEnd */.qZA()()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(18);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.lots);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.dataSource);
        core/* ɵɵadvance */.xp6(11);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.truckFormControl);
      }
    },
    dependencies: [common/* NgIf */.O5, fesm2020_button/* MatButton */.lW, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, card/* MatCard */.a8, card/* MatCardContent */.dn, permissions_directive/* PermissionsDirective */.$, double_factor_authentication_directive/* DoubleFactorAuthenticationDirective */.A, truck_searcher_component/* TruckSearcherComponent */.X],
    styles: [".generate-pin[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto auto 1fr auto;row-gap:1rem}.generate-pin__caption[_ngcontent-%COMP%]{width:25rem;color:#636e72;font-family:Gilroy-Light;font-size:1.5rem;line-height:1.25}.generate-pin__caption-bold[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important}.generate-pin__all-units[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto 1fr;column-gap:1rem}.generate-pin__unit[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto 1fr auto;column-gap:1rem}.generate-pin__unit-nbr_destination[_ngcontent-%COMP%]{margin-left:.25rem!important}.generate-pin__destination[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.generate-pin__data-display[_ngcontent-%COMP%]{margin-bottom:1rem;color:#fff}.generate-pin__checkbox[_ngcontent-%COMP%], .generate-pin__unit-nbr[_ngcontent-%COMP%], .generate-pin__unit-size[_ngcontent-%COMP%], .generate-pin__multiple[_ngcontent-%COMP%]{margin:0;text-align:center;vertical-align:middle;font-family:Gilroy-Light;font-size:1rem;display:flex;justify-content:center;align-items:center}.generate-pin__unit-size-text[_ngcontent-%COMP%]{color:#fff;background-color:#636e72;padding:.15rem;border-radius:.5rem;font-family:Gilroy-ExtraBold!important}.generate-pin__actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.generate-pin__cancel[_ngcontent-%COMP%]{margin-right:1rem;font-family:Gilroy-Light}.generate-pin__submit[_ngcontent-%COMP%]{color:#fff!important;font-family:Gilroy-Light}.title-card[_ngcontent-%COMP%]{width:max-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#636e72;margin:0}"]
  });
  return GeneratePinComponent;
})();
// EXTERNAL MODULE: ./src/app/modules/detached-load/components/generate-pin-display-item/generate-pin-display-item.component.ts
var generate_pin_display_item_component = __webpack_require__(34263);
;// CONCATENATED MODULE: ./src/app/modules/detached-load/components/generate-pin-display/generate-pin-display.component.ts











function GeneratePinDisplayComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "span", 8);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r0.pins.nbr, " ");
  }
}
let GeneratePinDisplayComponent = /*#__PURE__*/(() => {
  class GeneratePinDisplayComponent {
    constructor(store, router, base64EncryptionUtilService) {
      this.store = store;
      this.router = router;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.destroy$ = new Subject/* Subject */.x();
    }
    ngOnInit() {
      this.store.select(detached_load_selectors/* detachedLoadFeatureSelector */.N).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          if (result.lastSearch) this.lastSearch = result.lastSearch;
          if (result.truckResult.length) {
            this.pins = {
              nbr: result.truckResult[0].blNbr,
              pin: result.truckResult[0].pinNbr,
              units: result.truckResult[0].pinContainerized.map(value => ({
                quantity: value.cargoQuantity,
                weight: value.cargoWeigth,
                destination: value.destination || "Sin Destino",
                shipper: `${value.truckVisitAppointmetId}/${value.truckingCompanyNameLDAP}`,
                active: value.active
              })),
              createdAt: result.truckResult[0].createdAt
            };
          }
          this.destroy$.next();
          this.destroy$.complete();
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
      this.store.dispatch((0,detached_load_actions/* cleanGeneratePin */.cS)());
      this.store.dispatch((0,detached_load_actions/* getDetachedLoad */.fJ)({
        nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch)
      }));
    }
    continue() {
      this.router.navigate(["/", "carga-suelta"]);
    }
  }
  GeneratePinDisplayComponent.ɵfac = function GeneratePinDisplayComponent_Factory(t) {
    return new (t || GeneratePinDisplayComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L));
  };
  GeneratePinDisplayComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: GeneratePinDisplayComponent,
    selectors: [["app-generate-pin-display"]],
    decls: 12,
    vars: 3,
    consts: [[1, "generate-pin-display"], [1, "generate-pin-display__header"], [1, "generate-pin-display__title"], [4, "ngIf"], [1, "generate-pin-display__content"], [3, "pin", "lastSearch"], [1, "generate-pin-display__actions"], ["mat-raised-button", "", "color", "primary", 1, "generate-pin-display__continue", 3, "click"], [1, "generate-pin-display__unit"]],
    template: function GeneratePinDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "mat-card")(1, "mat-card-content")(2, "div", 0)(3, "div", 1)(4, "span", 2);
        core/* ɵɵtext */._uU(5, " Se gener\u00F3 el PIN para el HBL: ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(6, GeneratePinDisplayComponent_ng_container_6_Template, 3, 1, "ng-container", 3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(7, "div", 4);
        core/* ɵɵelement */._UZ(8, "app-generate-pin-display-item", 5);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(9, "div", 6)(10, "button", 7);
        core/* ɵɵlistener */.NdJ("click", function GeneratePinDisplayComponent_Template_button_click_10_listener() {
          return ctx.continue();
        });
        core/* ɵɵtext */._uU(11, "Continuar Operando");
        core/* ɵɵelementEnd */.qZA()()()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.pins.nbr);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("pin", ctx.pins)("lastSearch", ctx.lastSearch);
      }
    },
    dependencies: [common/* NgIf */.O5, fesm2020_button/* MatButton */.lW, card/* MatCard */.a8, card/* MatCardContent */.dn, generate_pin_display_item_component/* GeneratePinDisplayItemComponent */.a],
    styles: [".generate-pin-display[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;row-gap:1rem}.generate-pin-display__header[_ngcontent-%COMP%]{margin-bottom:1rem;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.generate-pin-display__title[_ngcontent-%COMP%]{margin-bottom:.6rem;color:#92b975}.generate-pin-display__unit[_ngcontent-%COMP%]{color:#636e72}.generate-pin-display__unit[_ngcontent-%COMP%], .generate-pin-display__title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;font-size:1.5rem}.generate-pin-display__actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.generate-pin-display__continue[_ngcontent-%COMP%]{color:#fff!important;font-family:Gilroy-light!important}"]
  });
  return GeneratePinDisplayComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/guard/notifications.guard.ts
var notifications_guard = __webpack_require__(34418);
;// CONCATENATED MODULE: ./src/app/modules/detached-load/detached-load-routing.module.ts















const routes = [{
  path: "",
  component: DetachedLoadComponent,
  canActivate: [notifications_guard/* NotificationsGuard */.t],
  data: {
    componentName: 'DetachedLoadComponent',
    privilegeName: 'CS,CS_CIT_BUS,CS_IMP_BUS'
  },
  children: [{
    path: "lock",
    component: lock_component/* LockComponent */.n,
    canActivate: [notifications_guard/* NotificationsGuard */.t],
    data: {
      title: "Bloquear",
      action: "Bloquear",
      actionIcon: "lock",
      lock: true,
      detached: true,
      componentName: "LockComponent",
      privilegeName: "CS_CTA_BLOQ"
    }
  }, {
    path: "unlock",
    component: lock_component/* LockComponent */.n,
    canActivate: [notifications_guard/* NotificationsGuard */.t],
    data: {
      title: "Desbloquear",
      action: "Desbloquear",
      actionIcon: "lock_open",
      lock: false,
      detached: true,
      componentName: "LockComponent",
      privilegeName: "CS_CTA_DESBL"
    }
  }, {
    path: "appointment-creation",
    component: AppointmentCreationComponent
  }, {
    path: "importacion",
    component: ImportComponent,
    data: {
      detached: true
    }
  }, {
    path: "billing",
    component: invoice_management_billing_component/* InvoiceManagementBillingComponent */.N,
    canActivate: [notifications_guard/* NotificationsGuard */.t],
    data: {
      detached: true,
      componentName: "InvoiceManagementBillingComponent",
      privilegeName: "CS_IMP_FAC"
    }
  }, {
    path: "proforma",
    component: invoice_proforma_component/* InvoiceProformaComponent */.x,
    data: {
      detached: true
    }
  }, {
    path: "resume",
    component: invoice_resume_component/* InvoiceResumeComponent */.V,
    data: {
      detached: true
    }
  }, {
    path: "documents",
    component: DetachedLoadDocumentComponent,
    canActivate: [notifications_guard/* NotificationsGuard */.t],
    data: {
      documentation_module: documentation_modules_enum/* typesModulesDocumentation.IMPO_CS */.c.IMPO_CS,
      componentName: "DetachedLoadDocumentComponent",
      privilegeName: "CS_IMP_DOC"
    }
  }, {
    path: "generar-pin",
    component: GeneratePinComponent,
    canActivate: [notifications_guard/* NotificationsGuard */.t],
    data: {
      componentName: 'GeneratePinComponent',
      privilegeName: 'CS_IMP_PIN'
    }
  }, {
    path: "pin",
    component: GeneratePinDisplayComponent
  }]
}];
let DetachedLoadRoutingModule = /*#__PURE__*/(() => {
  class DetachedLoadRoutingModule {}
  DetachedLoadRoutingModule.ɵfac = function DetachedLoadRoutingModule_Factory(t) {
    return new (t || DetachedLoadRoutingModule)();
  };
  DetachedLoadRoutingModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: DetachedLoadRoutingModule
  });
  DetachedLoadRoutingModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [router/* RouterModule.forChild */.Bz.forChild(routes), router/* RouterModule */.Bz]
  });
  return DetachedLoadRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(DetachedLoadRoutingModule, {
    imports: [router/* RouterModule */.Bz],
    exports: [router/* RouterModule */.Bz]
  });
})();
// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 9 modules
var shared_module = __webpack_require__(96158);
;// CONCATENATED MODULE: ./src/app/modules/detached-load/components/dialog-pay/dialog-pay.component.ts






function DialogPayComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 16);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 17);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function DialogPayComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 18);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r10.finalNumber);
  }
}
function DialogPayComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 16);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 19);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function DialogPayComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 18);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "currency");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind1 */.lcZ(2, 1, element_r11.totalTotal));
  }
}
function DialogPayComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 16);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 20);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function DialogPayComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 18);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "currency");
    core/* ɵɵpipe */.ALo(3, "currency");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind1 */.lcZ(2, 1, element_r12.credits) || core/* ɵɵpipeBind1 */.lcZ(3, 3, 0));
  }
}
function DialogPayComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 16);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 21);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function DialogPayComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 18);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "currency");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind1 */.lcZ(2, 1, element_r13.totalTotal));
  }
}
function DialogPayComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 22);
  }
}
function DialogPayComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 23);
  }
}
let DialogPayComponent = /*#__PURE__*/(() => {
  class DialogPayComponent {
    constructor(data) {
      this.data = data;
      this.displayedColumns = ["invoice", "account", "credit", "amount"];
      this.dataSource = [];
      this.total = 0;
    }
    ngOnInit() {
      this.dataSource.push(this.data.fac.fac);
      this.total = this.dataSource.reduce((acc, item) => acc = acc + parseFloat(item.totalTotal), 0);
    }
  }
  DialogPayComponent.ɵfac = function DialogPayComponent_Factory(t) {
    return new (t || DialogPayComponent)(core/* ɵɵdirectiveInject */.Y36(dialog/* MAT_DIALOG_DATA */.WI));
  };
  DialogPayComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: DialogPayComponent,
    selectors: [["app-dialog-pay"]],
    decls: 26,
    vars: 5,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_ac99f28d8fb2513f331f33bd2af001cddf8744c443f25cea684eaf2d1826d1a1$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__1 = goog.getMsg(" history.views.modalTotalPayment.NUMBER_TH ");
        i18n_0 = MSG_EXTERNAL_ac99f28d8fb2513f331f33bd2af001cddf8744c443f25cea684eaf2d1826d1a1$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__1;
      } else {
        i18n_0 = "N\xB0 Factura";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_960ba100edb65c9f57b6e4aa379d44a8257200e7c9c67b1eaa272c2606042067$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__3 = goog.getMsg(" history.views.modalTotalPayment.COSTO ");
        i18n_2 = MSG_EXTERNAL_960ba100edb65c9f57b6e4aa379d44a8257200e7c9c67b1eaa272c2606042067$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__3;
      } else {
        i18n_2 = "V. Factura";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_562801e13ef8f77874cad3a5d79e1c7aa594c098551a45d80b5a0f5d88f422b7$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__5 = goog.getMsg(" history.views.modalTotalPayment.CREDITO ");
        i18n_4 = MSG_EXTERNAL_562801e13ef8f77874cad3a5d79e1c7aa594c098551a45d80b5a0f5d88f422b7$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__5;
      } else {
        i18n_4 = "Cr\xE9dito";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3e3646a6ad58dd41322e6beff84c28e1e5163f906bf602ff8edbf3c41211e60f$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__7 = goog.getMsg(" history.views.modalTotalPayment.AMOUNT_TH ");
        i18n_6 = MSG_EXTERNAL_3e3646a6ad58dd41322e6beff84c28e1e5163f906bf602ff8edbf3c41211e60f$$SRC_APP_MODULES_DETACHED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__7;
      } else {
        i18n_6 = "Monto";
      }
      return [["mat-dialog-content", "", 1, "content"], [1, "content-h"], [1, "content-c"], [1, "content"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "invoice"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "account"], ["matColumnDef", "credit"], ["matColumnDef", "amount"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns", "matRowDefSticky"], [1, "content-b"], ["mat-button", "", "mat-dialog-close", "", 1, "color-w"], ["mat-button", "", 1, "btn-v", "color-w"], ["mat-header-cell", ""], i18n_0, ["mat-cell", ""], i18n_2, i18n_4, i18n_6, ["mat-header-row", ""], ["mat-row", ""]];
    },
    template: function DialogPayComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "div", 1)(2, "h1");
        core/* ɵɵtext */._uU(3, "Factura Seleccionada para Pago");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(4, "div", 2)(5, "div", 3)(6, "table", 4);
        core/* ɵɵelementContainerStart */.ynx(7, 5);
        core/* ɵɵtemplate */.YNc(8, DialogPayComponent_th_8_Template, 3, 0, "th", 6);
        core/* ɵɵtemplate */.YNc(9, DialogPayComponent_td_9_Template, 2, 1, "td", 7);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(10, 8);
        core/* ɵɵtemplate */.YNc(11, DialogPayComponent_th_11_Template, 3, 0, "th", 6);
        core/* ɵɵtemplate */.YNc(12, DialogPayComponent_td_12_Template, 3, 3, "td", 7);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(13, 9);
        core/* ɵɵtemplate */.YNc(14, DialogPayComponent_th_14_Template, 3, 0, "th", 6);
        core/* ɵɵtemplate */.YNc(15, DialogPayComponent_td_15_Template, 4, 5, "td", 7);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(16, 10);
        core/* ɵɵtemplate */.YNc(17, DialogPayComponent_th_17_Template, 3, 0, "th", 6);
        core/* ɵɵtemplate */.YNc(18, DialogPayComponent_td_18_Template, 3, 3, "td", 7);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(19, DialogPayComponent_tr_19_Template, 1, 0, "tr", 11);
        core/* ɵɵtemplate */.YNc(20, DialogPayComponent_tr_20_Template, 1, 0, "tr", 12);
        core/* ɵɵelementEnd */.qZA()()();
        core/* ɵɵelementStart */.TgZ(21, "div", 13)(22, "button", 14);
        core/* ɵɵtext */._uU(23, "Cancelar");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(24, "button", 15);
        core/* ɵɵtext */._uU(25, "Pagar");
        core/* ɵɵelementEnd */.qZA()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.dataSource);
        core/* ɵɵadvance */.xp6(13);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.displayedColumns)("matRowDefSticky", true);
      }
    },
    dependencies: [dialog/* MatDialogClose */.ZT, dialog/* MatDialogContent */.xY, fesm2020_button/* MatButton */.lW, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, common/* CurrencyPipe */.H9],
    styles: [".content[_ngcontent-%COMP%]{padding:0!important}.content-h[_ngcontent-%COMP%]{color:#fff;background:#92b975;height:30px;padding:0 20px}.content-c[_ngcontent-%COMP%]{display:block;padding:10px;margin-bottom:10px}.content-b[_ngcontent-%COMP%]{display:block;padding:10px 10px 0;float:right}.color-w[_ngcontent-%COMP%]{color:#fff!important}.btn-v[_ngcontent-%COMP%]{margin-left:10px;background:#92b975}"]
  });
  return DialogPayComponent;
})();
// EXTERNAL MODULE: ./src/app/modules/services/services.module.ts + 14 modules
var services_module = __webpack_require__(73102);
;// CONCATENATED MODULE: ./src/app/modules/detached-load/detached-load.module.ts
















let DetachedLoadModule = /*#__PURE__*/(() => {
  class DetachedLoadModule {}
  DetachedLoadModule.ɵfac = function DetachedLoadModule_Factory(t) {
    return new (t || DetachedLoadModule)();
  };
  DetachedLoadModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: DetachedLoadModule
  });
  DetachedLoadModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [common/* CommonModule */.ez, DetachedLoadRoutingModule, shared_module/* SharedModule */.m, services_module.ServicesModule]
  });
  return DetachedLoadModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(DetachedLoadModule, {
    declarations: [ImportComponent, AppointmentCreationComponent, DetachedLoadComponent, DetachedLoadResultComponent, DialogPayComponent, DetachedLoadDocumentComponent, GeneratePinComponent, GeneratePinDisplayComponent, generate_pin_display_item_component/* GeneratePinDisplayItemComponent */.a, GeneratePinResultComponent, GeneratePinResultItemComponent],
    imports: [common/* CommonModule */.ez, DetachedLoadRoutingModule, shared_module/* SharedModule */.m, services_module.ServicesModule],
    exports: [generate_pin_display_item_component/* GeneratePinDisplayItemComponent */.a, AppointmentCreationComponent]
  });
})();

/***/ })

}]);