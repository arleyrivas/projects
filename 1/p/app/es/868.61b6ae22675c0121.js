"use strict";
(self["webpackChunkbussinessPortal"] = self["webpackChunkbussinessPortal"] || []).push([[868],{

/***/ 83811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ GeneratePinDisplayItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(96308);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7155);
/* harmony import */ var src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50175);
/* harmony import */ var _generate_pin_deactivation_dialog_generate_pin_deactivation_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40786);
/* harmony import */ var src_app_core_privileges_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9862);
/* harmony import */ var src_app_state_api_gateway_api_gateway_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75868);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77579);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70262);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94650);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(55867);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17009);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(65412);
/* harmony import */ var src_app_core_auth_services_base64_encryption_util_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(46602);
/* harmony import */ var _services_containerized_load_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74953);
/* harmony import */ var src_app_core_auth_services_AESEncryptionUtil_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3056);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(36895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4859);
/* harmony import */ var _shared_directives_permissions_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4344);



















const _c0 = ["multipleButtonElement"];
const _c1 = ["buttonElement"];
function GeneratePinDisplayItemComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r0.pin.pin);
  }
}
function GeneratePinDisplayItemComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
const _c2 = function (a0) {
  return {
    "subrayado": a0
  };
};
function GeneratePinDisplayItemComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(2, _c2, !element_r15.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(i_r16 + 1);
  }
}
function GeneratePinDisplayItemComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1, "Contenedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function GeneratePinDisplayItemComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 34)(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(2, _c2, !element_r17.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r17.unit);
  }
}
function GeneratePinDisplayItemComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1, "Empresa transporte");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function GeneratePinDisplayItemComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(2, _c2, !element_r18.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r18.shipper);
  }
}
function GeneratePinDisplayItemComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1, "Operaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function GeneratePinDisplayItemComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(2, _c2, !element_r19.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r19.operation);
  }
}
function GeneratePinDisplayItemComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(1, "Acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function GeneratePinDisplayItemComponent_td_34_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function GeneratePinDisplayItemComponent_td_34_ng_container_1_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r26);
      const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(1);
      const element_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2).$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r24.deleteUnit(element_r20, _r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnamespaceSVG"] */ .O4$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(2, "svg", 41)(3, "defs")(4, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(5, ".claseunicatrash{fill:#c0392b;stroke-width:0px;}");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(6, "g", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(7, "path", 42)(8, "path", 43)(9, "path", 44)(10, "rect", 45)(11, "rect", 46)(12, "rect", 47)(13, "rect", 48)(14, "rect", 49)(15, "rect", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
}
const _c3 = function (a0) {
  return [a0];
};
function GeneratePinDisplayItemComponent_td_34_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, GeneratePinDisplayItemComponent_td_34_ng_container_1_div_1_Template, 16, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("permissions", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(1, _c3, ctx_r21.privileges.CC_IMP_ECP));
  }
}
function GeneratePinDisplayItemComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(1, GeneratePinDisplayItemComponent_td_34_ng_container_1_Template, 2, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", element_r20.active);
  }
}
function GeneratePinDisplayItemComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(0, "tr", 51);
  }
}
function GeneratePinDisplayItemComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(0, "tr", 52);
  }
}
function GeneratePinDisplayItemComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function GeneratePinDisplayItemComponent_div_38_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵrestoreView"] */ .CHM(_r30);
      const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵreference"] */ .MAs(1);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵresetView"] */ .KtG(ctx_r29.deletePin(_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵnamespaceSVG"] */ .O4$();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(2, "svg", 41)(3, "defs")(4, "style");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(5, ".claseunicatrash{fill:#c0392b;stroke-width:0px;}");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(6, "g", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelement"] */ ._UZ(7, "path", 42)(8, "path", 43)(9, "path", 44)(10, "rect", 45)(11, "rect", 46)(12, "rect", 47)(13, "rect", 48)(14, "rect", 49)(15, "rect", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
}
let GeneratePinDisplayItemComponent = /*#__PURE__*/(() => {
  class GeneratePinDisplayItemComponent {
    constructor(store, matSnackBar, matDialog, base64EncryptionUtilService, contanerizedLoadService, aesService) {
      this.store = store;
      this.matSnackBar = matSnackBar;
      this.matDialog = matDialog;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.contanerizedLoadService = contanerizedLoadService;
      this.aesService = aesService;
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__/* .Subject */ .x();
      this.privileges = src_app_core_privileges_enum__WEBPACK_IMPORTED_MODULE_7__/* .privileges */ .U;
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__/* .MatTableDataSource */ .by([]);
      this.displayedColumns = [];
      this.deletedUnits = 0;
      this.canPrint = false;
      this.unitDeleted = true;
      this.pinDeleted = true;
    }
    ngOnInit() {
      this.store.select(src_app_state_api_gateway_api_gateway_selectors__WEBPACK_IMPORTED_MODULE_1__/* .apiGatewayFeatureSelector */ .o).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      if (this.pin) {
        this.displayedColumns = ["item", "container", "shipper", "action"];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__/* .MatTableDataSource */ .by(this.pin.units);
      }
    }
    ngAfterViewInit() {
      this.ocultarBotones();
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    print() {
      if (this.pin) window.open(`${location.origin}/portal/api/pin/pdf/${this.pin.pin}`);
    }
    deleteUnit(unit, buttonElement) {
      this.contanerizedLoadService.getContainerizedLoad(this.base64EncryptionUtilService.encrypt(this.lastSearch)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .mergeMap */ .z)(encryptedContainers => {
        let containers = [];
        if (encryptedContainers) containers = JSON.parse(this.aesService.decrypt(encryptedContainers));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(containers);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .catchError */ .K)(error => {
        this.matSnackBar.open("Ha ocurrido un error inesperado en la b\xFAsqueda", "", {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        });
        return rxjs__WEBPACK_IMPORTED_MODULE_12__/* .EMPTY */ .E;
      })).subscribe({
        next: result => {
          const container = result.filter(item => item.unitNbr === unit.unit)[0];
          if (!container.truck_visit_appt_nbr) {
            if (!container.truck_visit_appt_nbr) {
              if (this.unitDeleted) {
                const dialogRef = this.matDialog.open(_generate_pin_deactivation_dialog_generate_pin_deactivation_dialog_component__WEBPACK_IMPORTED_MODULE_13__/* .GeneratePinDeactivationDialogComponent */ .h, {
                  disableClose: false,
                  data: {
                    multiple: false,
                    unit: unit.unit
                  }
                });
                dialogRef.afterClosed().subscribe({
                  next: value => {
                    if (!container.truck_visit_appt_nbr) {
                      if (value) {
                        buttonElement.style.display = "none";
                        unit.active = false;
                        this.deletedUnits = this.deletedUnits + 1;
                        const cantUnitsInActive = this.pin.units.filter(item => !item.active).length;
                        if (this.pin.units.length === this.deletedUnits) {
                          this.canPrint = true;
                          this.multipleButtonElement.nativeElement.style.display = "none";
                        } else if (cantUnitsInActive === this.pin.units.length) {
                          this.canPrint = true;
                          this.multipleButtonElement.nativeElement.style.display = "none";
                        }
                        if (this.pin.units.length > 1) {
                          if (this.pin.units.length === this.deletedUnits) this.unitDeleted = false;else this.unitDeleted = true;
                          this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_0__/* .getGeneratePinDeactivatePartial */ .zB)({
                            body: {
                              pinNbr: null,
                              id: unit.id,
                              observation: value
                            },
                            hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_ECP")[0].notificable,
                            notificationData: {
                              userId: this.userInfo.empresa?.id,
                              userName: this.userInfo.userName,
                              fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,
                              hbl: result[0].blNumber,
                              consigneeId: result[0].consigneeId,
                              consigneeName: result[0].consigneeName,
                              shipperId: this.pin.units[0].shipper?.split("/")[0],
                              shipperName: unit.shipper,
                              operation: "Elimina contenedor de PIN",
                              containers: this.pin.units.map(item => item.unit).toString(),
                              observations: value,
                              agent: "",
                              createdAt: "",
                              cargoQuantity: 0,
                              cargoWeigth: 0,
                              container: unit.unit
                            },
                            privilege: "CC_IMP_ECP"
                          }));
                        } else {
                          this.multipleButtonElement.nativeElement.style.display = "none";
                          this.canPrint = true;
                          if (this.pin.units.length === this.deletedUnits) this.unitDeleted = false;else this.unitDeleted = true;
                          this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_0__/* .getGeneratePinDeactivateTotal */ .GC)({
                            body: {
                              pinNbr: this.pin.pin,
                              id: null,
                              observation: value
                            },
                            hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_EPI")[0].notificable,
                            notificationData: {
                              userId: this.userInfo.empresa?.id,
                              userName: this.userInfo.userName,
                              fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,
                              hbl: this.pin.nbr,
                              consigneeId: result[0].consigneeId,
                              consigneeName: result[0].consigneeName,
                              shipperId: this.pin.units[0].id?.toString(),
                              shipperName: this.pin.units[0].shipper,
                              operation: "Anular PIN",
                              container: unit.unit,
                              observations: value,
                              createdAt: "",
                              agent: "",
                              cargoQuantity: 0,
                              cargoWeigth: 0,
                              containers: unit.unit
                            },
                            privilege: "CC_IMP_EPI"
                          }));
                        }
                      } else {
                        this.unitDeleted = true;
                      }
                    }
                  },
                  error: error => console.error(error)
                });
                this.unitDeleted = false;
              }
            }
          } else {
            this.unitDeleted = true;
            buttonElement.style.display = "none";
            unit.active = false;
            this.deletedUnits = this.deletedUnits + 1;
            const cantUnitsInActive = this.pin.units.filter(item => !item.active).length;
            if (this.pin.units.length === this.deletedUnits) {
              this.canPrint = true;
              this.multipleButtonElement.nativeElement.style.display = "none";
            } else if (cantUnitsInActive === this.pin.units.length) {
              this.canPrint = true;
              this.multipleButtonElement.nativeElement.style.display = "none";
            }
            this.matSnackBar.open("El contenedor tiene cita asociada, no se puede eliminar", "", {
              verticalPosition: "top",
              panelClass: ["error-snackbar"],
              duration: 5000
            });
          }
        }
      });
      /* this.store.dispatch(getContainerizedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch as string) }));
              this.store.select(containerizedLoadFeatureSelector).pipe(
         takeUntil(this.destroy$)
       ).subscribe({
         next: (result: IContainerizedLoadStore) => {
           const container = result.result.filter((item) => item.unitNbr === unit.unit)[0];
           if(!container.truck_visit_appt_nbr){
             if(this.unitDeleted) {
               const dialogRef = this.matDialog.open(GeneratePinDeactivationDialogComponent, {
                 disableClose: false,
                 data: {
                   multiple: false,
                   unit: unit.unit
                 }
               });
               console.log("info: ", container.truck_visit_appt_nbr);
               dialogRef.afterClosed().subscribe({
                 next: (value: string) => {
                   if(!container.truck_visit_appt_nbr) {
                     if(value) {
                       buttonElement.style.display = "none";
                       unit.active = false;
                       this.deletedUnits = this.deletedUnits + 1;
                       
                       const cantUnitsInActive = this.pin.units.filter((item) => !item.active).length;
                       if(this.pin.units.length === this.deletedUnits) {
                         this.canPrint = true;
                         this.multipleButtonElement.nativeElement.style.display = "none";
                       } else if(cantUnitsInActive === this.pin.units.length) {
                         this.canPrint = true;
                         this.multipleButtonElement.nativeElement.style.display = "none";
                       }
                              if(this.pin.units.length > 1) {
                                if(this.pin.units.length === this.deletedUnits) this.unitDeleted = false;
                         else this.unitDeleted = true;
                         this.store.dispatch(getGeneratePinDeactivatePartial({
                           body: {
                             pinNbr: null,
                             id: unit.id as number,
                             observation: value
                           },
                           hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_ECP")[0].notificable,
                           notificationData: {
                             userId: this.userInfo.empresa?.id,
                             userName: this.userInfo.userName,// ID Usuario logueado
                             fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,// Nombre y Apellido del usuario logueado
                             hbl: result.result[0].blNumber,// BL del PIN afectado
                             consigneeId: result.result[0].consigneeId,// Identificación del Cliente(Consignee)
                             consigneeName: result.result[0].consigneeName,// Nombre del Cliente(Consignee)
                             shipperId: this.pin.units[0].shipper?.split("/")[0],// Identificador Empresa de transporte a la que fue asociado el PIN
                             shipperName: unit.shipper,// Nombre de Empresa de transporte a la que fue asociado el PIN
                             operation: "Elimina contenedor de PIN", // Tipo de transacción
                             containers: this.pin.units.map((item) => item.unit).toString(),// Lista de contenedores eliminados del PIN (si se elimina el PIN se deben incluir los contenedores que tenía separados por coma)
                             observations: value,
                             agent: "",
                             createdAt: "",
                             cargoQuantity: 0,
                             cargoWeigth: 0,
                             container: unit.unit
                           },
                           privilege: "CC_IMP_ECP"
                         }));
                       } else {
                       this.multipleButtonElement.nativeElement.style.display = "none";
                       this.canPrint = true;
                              if(this.pin.units.length === this.deletedUnits) this.unitDeleted = false;
                       else this.unitDeleted = true;
                       this.store.dispatch(getGeneratePinDeactivateTotal({
                           body: {
                             pinNbr: this.pin.pin,
                             id: null,
                             observation: value
                           },
                           hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_EPI")[0].notificable,
                           notificationData: {
                             userId: this.userInfo.empresa?.id,
                             userName: this.userInfo.userName, // ID Usuario logueado
                             fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, // Nombre y Apellido del usuario logueado
                             hbl: this.pin.nbr, // HBL del PIN eliminado
                             consigneeId: result.result[0].consigneeId,// Identificación del Cliente(Consignee)
                             consigneeName: result.result[0].consigneeName,// Nombre del Cliente(Consignee)
                             shipperId: (this.pin.units[0].id)?.toString(),// Identificador Empresa de transporte a la que fue asociado el PIN
                             shipperName: this.pin.units[0].shipper,// Nombre de Empresa de transporte a la que fue asociado el PIN
                             operation: "Anular PIN", // Tipo de transacción,
                             container: unit.unit,
                             observations: value,
                             createdAt: "",
                             agent: "",
                             cargoQuantity: 0,
                             cargoWeigth: 0,
                             containers: unit.unit,
                             
                           },
                           privilege: "CC_IMP_EPI"
                         }));
                       }
                     }else{
                       this.unitDeleted = true;
                     }
                   }
                   
                 },
                 error: error => console.error(error)
               });
                      this.unitDeleted = false;
             }
           }
           else {
             this.unitDeleted = true;
             buttonElement.style.display = "none";
             unit.active = false;
             this.deletedUnits = this.deletedUnits + 1;
             const cantUnitsInActive = this.pin.units.filter((item) => !item.active).length;
             if(this.pin.units.length === this.deletedUnits) {
               this.canPrint = true;
               this.multipleButtonElement.nativeElement.style.display = "none";
             }else if(cantUnitsInActive === this.pin.units.length) {
               this.canPrint = true;
               this.multipleButtonElement.nativeElement.style.display = "none";
             }
             this.matSnackBar.open(
               "El contenedor tiene cita asociada, no se puede eliminar",
               "",
               {
                 verticalPosition: "top",
                 panelClass: ["error-snackbar"],
                 duration: 20000
               }
             );
           }
             this.destroy$.next();
             this.destroy$.complete();
         },
         error: error => console.error(error)
       });*/
    }

    deletePin(buttonElement) {
      this.contanerizedLoadService.getContainerizedLoad(this.base64EncryptionUtilService.encrypt(this.lastSearch)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__/* .mergeMap */ .z)(encryptedContainers => {
        let containers = [];
        if (encryptedContainers) containers = JSON.parse(this.aesService.decrypt(encryptedContainers));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(containers);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__/* .catchError */ .K)(error => {
        this.matSnackBar.open("Ha ocurrido un error inesperado en la b\xFAsqueda", "", {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        });
        return rxjs__WEBPACK_IMPORTED_MODULE_12__/* .EMPTY */ .E;
      })).subscribe({
        next: result => {
          const pinContainersUnits = this.pin.units.map(item => item.unit);
          const filteredContainers = result.filter(item => pinContainersUnits.includes(item.unitNbr, 0));
          const containersDate = filteredContainers.filter(item => !item.truck_visit_appt_nbr).length;
          if (containersDate === filteredContainers.length) {
            //no hay contenedores con cita
            if (this.pinDeleted) {
              const dialogRef = this.matDialog.open(_generate_pin_deactivation_dialog_generate_pin_deactivation_dialog_component__WEBPACK_IMPORTED_MODULE_13__/* .GeneratePinDeactivationDialogComponent */ .h, {
                disableClose: true,
                data: {
                  multiple: true
                }
              });
              dialogRef.afterClosed().subscribe({
                next: value => {
                  if (value) {
                    //buttonElement.style.display = "none";
                    this.multipleButtonElement.nativeElement.style.display = "none";
                    this.canPrint = true;
                    this.buttonElement.toArray().forEach(result => {
                      result.nativeElement.style.display = "none";
                    });
                    if (this.pin) {
                      this.pin.units.forEach(unit => {
                        unit.active = false;
                      });
                    }
                    this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_0__/* .getGeneratePinDeactivateTotal */ .GC)({
                      body: {
                        pinNbr: this.pin.pin,
                        id: null,
                        observation: value
                      },
                      hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_EPI")[0].notificable,
                      notificationData: {
                        userId: this.userInfo.empresa?.id,
                        userName: this.userInfo.userName,
                        fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,
                        hbl: this.pin.nbr,
                        consigneeId: result[0].consigneeId,
                        consigneeName: result[0].consigneeName,
                        shipperId: this.pin.units[0].id?.toString(),
                        shipperName: this.pin.units[0].shipper,
                        operation: "Anular PIN",
                        containers: this.pin.units.map(value => value.unit).toString(),
                        observations: value,
                        createdAt: "",
                        agent: "",
                        container: "",
                        cargoQuantity: 0,
                        cargoWeigth: 0
                      },
                      privilege: "CC_IMP_EPI"
                    }));
                  }
                }
              });
            }
          } else {
            //hay contenedores con cita
            this.pinDeleted = true;
            this.matSnackBar.open("Uno o mas contenedores tiene cita asociada, no se puede eliminar el pin", "", {
              verticalPosition: "top",
              panelClass: ["error-snackbar"],
              duration: 5000
            });
          }
        }
      });
      /*this.store.dispatch(getContainerizedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch as string) }));
            this.store.select(containerizedLoadFeatureSelector).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result: IContainerizedLoadStore) => {
          if(this.pinDeleted) {
            const dialogRef = this.matDialog.open(GeneratePinDeactivationDialogComponent, {
              disableClose: true,
              data: {
                multiple: true,
              }
            });
                  dialogRef.afterClosed().subscribe({
              next: (value: string) => {
                const pinContainersUnits = this.pin.units.map((item) => item.unit);
                      const filteredContainers = result.result.filter((item) => pinContainersUnits.includes(item.unitNbr, 0));
                const containersDate = filteredContainers.filter((item) => !item.truck_visit_appt_nbr).length;
        
                if(containersDate === filteredContainers.length) {
                  if(value) {
                    buttonElement.style.display = "none";
                    this.multipleButtonElement.nativeElement.style.display = "none";
                    this.canPrint = true;
                    this.buttonElement.toArray().forEach((result: ElementRef<HTMLDivElement>) => {
                      result.nativeElement.style.display = "none";
                    });
                          this.store.dispatch(getGeneratePinDeactivateTotal({
                            body: {
                              pinNbr: this.pin.pin,
                              id: null,
                              observation: value
                            },
                            hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_EPI")[0].notificable,
                            notificationData: {
                              userId: this.userInfo.empresa?.id,
                              userName: this.userInfo.userName, // ID Usuario logueado
                              fullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`, // Nombre y Apellido del usuario logueado
                              hbl: this.pin.nbr, // HBL del PIN eliminado
                              consigneeId: result.result[0].consigneeId,// Identificación del Cliente(Consignee)
                              consigneeName: result.result[0].consigneeName,// Nombre del Cliente(Consignee)
                              shipperId: (this.pin.units[0].id)?.toString(),// Identificador Empresa de transporte a la que fue asociado el PIN
                              shipperName: this.pin.units[0].shipper,// Nombre de Empresa de transporte a la que fue asociado el PIN
                              operation: "Anular PIN", // Tipo de transacción
                              containers: this.pin.units.map(value => value.unit).toString(),
                              observations: value,
                              createdAt: "",
                              agent: "",
                              container: "",
                              cargoQuantity: 0,
                              cargoWeigth: 0
                            },
                            privilege: "CC_IMP_EPI"
                          }));
                  }
                } else {
                    this.pinDeleted = true;
                          this.matSnackBar.open(
                            "Uno o mas contenedores tiene cita asociada, no se puede eliminar el pin",
                            "",
                            {
                              verticalPosition: "top",
                              panelClass: ["error-snackbar"],
                              duration: 5000
                            }
                      );
                }
              },
              error: error => console.error(error)
            });
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
      if (this.canPrint) this.multipleButtonElement.nativeElement.style.display = "none";
    }
  }
  GeneratePinDisplayItemComponent.ɵfac = function GeneratePinDisplayItemComponent_Factory(t) {
    return new (t || GeneratePinDisplayItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_ngrx_store__WEBPACK_IMPORTED_MODULE_14__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__/* .MatSnackBar */ .ux), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__/* .MatDialog */ .uw), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(src_app_core_auth_services_base64_encryption_util_service__WEBPACK_IMPORTED_MODULE_17__/* .Base64EncryptionUtilService */ .L), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(_services_containerized_load_service__WEBPACK_IMPORTED_MODULE_2__/* .ContainerizedLoadService */ .u), _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdirectiveInject"] */ .Y36(src_app_core_auth_services_AESEncryptionUtil_service__WEBPACK_IMPORTED_MODULE_3__/* .AESEncryptionUtilService */ .D));
  };
  GeneratePinDisplayItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: GeneratePinDisplayItemComponent,
    selectors: [["app-generate-pin-display-item"]],
    viewQuery: function GeneratePinDisplayItemComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .Gf(_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__/* .MatSort */ .YE, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵviewQuery"] */ .Gf(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.multipleButtonElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.buttonElement = _t);
      }
    },
    inputs: {
      pin: "pin",
      lastSearch: "lastSearch"
    },
    decls: 41,
    vars: 8,
    consts: [[1, "generate-pin-display-item"], [1, "generate-pin-display-item__header"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 40.59 25.45", 1, "generate-pin-display-item__truck"], ["id", "Capa_1-2"], [1, "cls-2"], ["id", "s", "d", "M30.88,17.23c-1.58,0-2.97.83-3.75,2.07h-13.38c-.5-.8-1.25-1.42-2.14-1.77V0h28.99v19.3h-5.96c-.79-1.24-2.17-2.07-3.75-2.07Z", 1, "cls-1"], ["id", "s-2", "d", "M40.59,20.97c0,.18-.07.35-.23.49-.15.13-.35.2-.55.2h-4.51c0-.6-.12-1.18-.34-1.7h5.62v1.01Z", 1, "cls-1"], ["id", "s-3", "d", "M26.44,21.66h-12.02c0-.6-.12-1.18-.34-1.7h12.69c-.22.52-.34,1.1-.34,1.7Z", 1, "cls-1"], ["id", "s-4", "d", "M0,11.82v8.01c0,.47.18.94.54,1.3.36.36.83.54,1.3.54h3.72c0-2.45,1.99-4.43,4.43-4.43.25,0,.5.02.74.06V4.63s-2.99.01-4.52.24c-1.53.23-3.13,1.28-4.36,2.51S0,10.21,0,11.82ZM1.29,11.7c0-1.18.45-2.36,1.35-3.26.9-.9,2.08-1.67,3.2-1.84,1.12-.17,3.32-.18,3.32-.18v5.61c0,.15-.05.29-.15.42-.1.12-.23.2-.38.23l-6.57,1.31c-.19.04-.38,0-.54-.13-.16-.13-.24-.32-.24-.51v-1.64Z", 1, "cls-1"], ["id", "s-5", "d", "M27.49,19.96c-.26.51-.4,1.09-.4,1.7,0,2.09,1.69,3.79,3.79,3.79,2.09,0,3.79-1.7,3.79-3.79,0-.61-.14-1.19-.4-1.7-.07-.14-.15-.28-.24-.42-.06-.08-.12-.17-.18-.25-.7-.87-1.76-1.42-2.96-1.42-1.2,0-2.27.56-2.96,1.42-.06.08-.12.16-.18.25-.09.13-.17.27-.24.42ZM28.92,21.66c0-.73.4-1.36.99-1.7.29-.17.62-.26.98-.26s.69.09.98.26c.59.34.99.97.99,1.7,0,1.08-.88,1.96-1.96,1.96s-1.96-.88-1.96-1.96Z", 1, "cls-1"], ["id", "s-6", "d", "M6.2,21.66c0,2.09,1.69,3.79,3.79,3.79,2.09,0,3.79-1.7,3.79-3.79,0-.78-.24-1.51-.64-2.12-.38-.56-.91-1.02-1.53-1.31-.27-.13-.57-.23-.88-.29-.24-.05-.48-.07-.74-.07-2.09,0-3.79,1.69-3.79,3.79ZM8.03,21.66c0-1.08.88-1.96,1.96-1.96.26,0,.51.05.74.14.36.14.66.39.88.7.22.32.35.7.35,1.12,0,1.08-.88,1.96-1.96,1.96-1.08,0-1.96-.88-1.96-1.96Z", 1, "cls-1"], ["id", "white_stripe", "x", "11.6", "y", "1.65", "width", "28.99", "height", ".49", 1, "cls-1"], [1, "generate-pin-display-item__pin-title"], [4, "ngIf"], ["mat-table", "", "matSort", "", 1, "generate-pin-display-item__table", 3, "dataSource"], ["table", ""], ["matColumnDef", "item"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-cell__right", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "container"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "shipper"], ["mat-cell", "", "class", "table-cell__left", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "operation"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-row", "", "class", "generate-pin-display-item__row", 4, "matHeaderRowDef"], ["mat-row", "", "class", "generate-pin-display-item__row", 4, "matRowDef", "matRowDefColumns"], [1, "generate-pin-display-item__action"], ["class", "generate-pin-display-item__delete_all", 3, "click", 4, "permissions"], ["mat-raised-button", "", "color", "primary", 1, "generate-pin-display-item__print", 3, "disabled", "click"], [1, "generate-pin-display-item__pin"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "table-cell__right", 3, "ngClass"], ["mat-cell", ""], [1, "generate-pin__unit-size-text", "table-cell__right", 3, "ngClass"], ["mat-cell", "", 1, "table-cell__left", 3, "ngClass"], ["mat-cell", "", 3, "ngClass"], [3, "click", 4, "permissions"], [3, "click"], ["buttonElement", ""], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 22.99 26.54", 1, "generate-pin-display-item__delete"], ["d", "M16.18,26.54H7.37c-1.67,0-3.11-1.32-3.34-3.06L1.63,5.94c-.02-.14.02-.28.12-.39.09-.11.23-.17.37-.17h18.91c.14,0,.27.06.37.16s.14.24.12.38l-1.98,17.47c-.2,1.79-1.65,3.15-3.35,3.15ZM2.68,6.36l2.32,16.99c.17,1.26,1.19,2.21,2.37,2.21h8.82c1.21,0,2.23-.98,2.37-2.27l1.92-16.92H2.68Z", 1, "claseunicatrash"], ["d", "M22.5,6.36H.49c-.27,0-.49-.22-.49-.49v-3.24c0-.27.22-.49.49-.49h22c.27,0,.49.22.49.49v3.24c0,.27-.22.49-.49.49ZM.99,5.38h21.01v-2.25H.99v2.25Z", 1, "claseunicatrash"], ["d", "M14.17,3.13h-5.35c-.27,0-.49-.22-.49-.49V.49c0-.27.22-.49.49-.49h5.35c.27,0,.49.22.49.49v2.14c0,.27-.22.49-.49.49ZM9.31,2.14h4.36V.99h-4.36v1.15Z", 1, "claseunicatrash"], ["x", "7.35", "y", "21.3", "width", ".99", "height", "2.2", "transform", "translate(-2.68 1.13) rotate(-7.03)", 1, "claseunicatrash"], ["x", "6.43", "y", "8.58", "width", ".99", "height", "12.77", "transform", "translate(-1.78 .96) rotate(-7.03)", 1, "claseunicatrash"], ["x", "14.05", "y", "21.9", "width", "2.2", "height", ".99", "transform", "translate(-8.92 34.72) rotate(-83.04)", 1, "claseunicatrash"], ["x", "9.67", "y", "14.48", "width", "12.77", "height", ".99", "transform", "translate(-.75 29.09) rotate(-83.04)", 1, "claseunicatrash"], ["x", "11.04", "y", "8.63", "width", ".99", "height", "11.18", "transform", "translate(-.1 .08) rotate(-.39)", 1, "claseunicatrash"], ["x", "11.08", "y", "19.82", "width", ".99", "height", "3.67", 1, "claseunicatrash"], ["mat-header-row", "", 1, "generate-pin-display-item__row"], ["mat-row", "", 1, "generate-pin-display-item__row"], [1, "generate-pin-display-item__delete_all", 3, "click"], ["multipleButtonElement", ""]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(17, GeneratePinDisplayItemComponent_ng_container_17_Template, 3, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(18, "table", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(20, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(21, GeneratePinDisplayItemComponent_th_21_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(22, GeneratePinDisplayItemComponent_td_22_Template, 2, 4, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(23, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(24, GeneratePinDisplayItemComponent_th_24_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(25, GeneratePinDisplayItemComponent_td_25_Template, 3, 4, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(26, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(27, GeneratePinDisplayItemComponent_th_27_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(28, GeneratePinDisplayItemComponent_td_28_Template, 2, 4, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(29, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(30, GeneratePinDisplayItemComponent_th_30_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(31, GeneratePinDisplayItemComponent_td_31_Template, 2, 4, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerStart"] */ .ynx(32, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(33, GeneratePinDisplayItemComponent_th_33_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(34, GeneratePinDisplayItemComponent_td_34_Template, 2, 1, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(35, GeneratePinDisplayItemComponent_tr_35_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(36, GeneratePinDisplayItemComponent_tr_36_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtemplate"] */ .YNc(38, GeneratePinDisplayItemComponent_div_38_Template, 16, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementStart"] */ .TgZ(39, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵlistener"] */ .NdJ("click", function GeneratePinDisplayItemComponent_Template_button_click_39_listener() {
          return ctx.print();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵtext"] */ ._uU(40, "Imprimir");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵelementEnd"] */ .qZA()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.pin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("permissions", _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵpureFunction1"] */ .VKq(6, _c3, ctx.privileges.CC_IMP_EPI));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx.canPrint);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgClass */ .mk, _angular_common__WEBPACK_IMPORTED_MODULE_19__/* .NgIf */ .O5, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__/* .MatButton */ .lW, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__/* .MatTable */ .BZ, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__/* .MatHeaderCellDef */ .fO, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__/* .MatHeaderRowDef */ .as, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__/* .MatColumnDef */ .w1, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__/* .MatCellDef */ .Dz, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__/* .MatRowDef */ .nj, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__/* .MatHeaderCell */ .ge, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__/* .MatCell */ .ev, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__/* .MatHeaderRow */ .XQ, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__/* .MatRow */ .Gk, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__/* .MatSort */ .YE, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__/* .MatSortHeader */ .nU, _shared_directives_permissions_directive__WEBPACK_IMPORTED_MODULE_4__/* .PermissionsDirective */ .$],
    styles: [".generate-pin-display-item[_ngcontent-%COMP%]{padding:1rem;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;row-gap:1rem}.generate-pin-display-item__header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.generate-pin-display-item__truck[_ngcontent-%COMP%]{width:2.5rem}.generate-pin-display-item__pin-title[_ngcontent-%COMP%]{margin-left:.5rem!important}.generate-pin-display-item__pin-title[_ngcontent-%COMP%], .generate-pin-display-item__pin[_ngcontent-%COMP%]{width:max-content;margin-left:.15rem;background-color:#92b975;border-radius:.25rem;padding:.25rem;color:#fff;font-family:Gilroy-ExtraBold!important;font-size:1.5rem}.generate-pin-display-item__action[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.generate-pin-display-item__delete[_ngcontent-%COMP%]{width:1.25rem;color:#636e72!important;cursor:pointer}.generate-pin-display-item__delete_all[_ngcontent-%COMP%]{padding:.5rem;border:#c0392b solid 1px;border-radius:.25rem}.generate-pin-display-item__print[_ngcontent-%COMP%]{color:#fff!important;font-family:Gilroy-ExtraBold!important}  .generate-pin-display-item__table .mat-mdc-table .mat-mdc-header-cell{color:#666;border:#666666 solid .1rem!important;border-left:0!important;border-top:0!important}  .generate-pin-display-item__table .mat-mdc-table .mat-mdc-header-cell:last-child{border-right:0!important}  .generate-pin-display-item__table .mdc-tab__text-label{flex-direction:column!important}  .generate-pin-display-item__table .mdc-data-table__row{background-color:transparent!important;border:.1rem solid #666666!important;border-left:0!important;border-right:0!important;border-bottom:0!important}  .generate-pin-display-item__table .mdc-data-table__cell{border:.1rem solid #666666!important;border-left:0!important;border-bottom:0!important}  .generate-pin-display-item__table .mdc-data-table__cell:last-child{border:.1rem solid #666666!important;border-right:0!important}  .generate-pin-display-item__table .mdc-data-table__row:hover{background-color:transparent!important}  .generate-pin-display-item__table .mdc-data-table__row td{color:#666!important}  .generate-pin-display-item__table .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .generate-pin-display-item__table .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem;border-bottom:none!important}  .generate-pin-display-item__table .mdc-data-table__row:last-child{border-bottom:none!important}  .generate-pin-display-item__row th{color:#666!important;border-left:.1rem solid;border-color:#666}  .generate-pin-display-item__row th:first-child{border-left:none!important}.subrayado[_ngcontent-%COMP%]{text-decoration:line-through}"]
  });
  return GeneratePinDisplayItemComponent;
})();

/***/ }),

/***/ 48868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ContainerizedLoadModule": () => (/* binding */ ContainerizedLoadModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2020/common.mjs
var common = __webpack_require__(36895);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2020/router.mjs + 5 modules
var router = __webpack_require__(77518);
// EXTERNAL MODULE: ./src/app/shared/components/lock/lock.component.ts
var lock_component = __webpack_require__(80524);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs
var core = __webpack_require__(94650);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subject.js + 1 modules
var Subject = __webpack_require__(77579);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Observable.js
var internal_Observable = __webpack_require__(69751);
// EXTERNAL MODULE: ./src/app/shared/components/shifts-available-dialog/shifts-available-dialog.component.ts
var shifts_available_dialog_component = __webpack_require__(45736);
// EXTERNAL MODULE: ./src/app/state/containerized-load/containerized-load.actions.ts
var containerized_load_actions = __webpack_require__(50175);
// EXTERNAL MODULE: ./src/app/state/containerized-load/containerized-load.selectors.ts
var containerized_load_selectors = __webpack_require__(50091);
// EXTERNAL MODULE: ./src/app/core/privileges.enum.ts
var privileges_enum = __webpack_require__(9862);
// EXTERNAL MODULE: ./src/app/state/api-gateway/api-gateway.selectors.ts
var api_gateway_selectors = __webpack_require__(75868);
// EXTERNAL MODULE: ./src/app/state/shared/shared.actions.ts
var shared_actions = __webpack_require__(68438);
// EXTERNAL MODULE: ./src/app/shared/components/make-appointment/make-appointment.component.ts
var make_appointment_component = __webpack_require__(2192);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/dialog.mjs + 1 modules
var dialog = __webpack_require__(65412);
// EXTERNAL MODULE: ./src/app/core/auth/services/base64-encryption-util.service.ts
var base64_encryption_util_service = __webpack_require__(46602);
// EXTERNAL MODULE: ./node_modules/@ngrx/store/fesm2020/ngrx-store.mjs + 4 modules
var ngrx_store = __webpack_require__(55867);
// EXTERNAL MODULE: ./src/app/modules/containerized-load/services/communication.service.ts
var communication_service = __webpack_require__(60779);
// EXTERNAL MODULE: ./src/app/shared/services/storageservice.service.ts
var storageservice_service = __webpack_require__(91685);
// EXTERNAL MODULE: ./src/app/shared/services/notifications.service.ts
var notifications_service = __webpack_require__(14779);
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
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/table.mjs + 2 modules
var table = __webpack_require__(7155);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/tooltip.mjs
var tooltip = __webpack_require__(10266);
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/containerized-load-result/containerized-load-result.component.ts








function ContainerizedLoadResultComponent_ng_container_0_li_7_Template(rf, ctx) {
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
function ContainerizedLoadResultComponent_ng_container_0_li_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "li", 7)(1, "span", 8);
    core/* ɵɵi18n */.SDv(2, 24);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "span");
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r2.vesselVisit.outVoyNbr);
  }
}
function ContainerizedLoadResultComponent_ng_container_0_th_16_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 26);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_17_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const i_r22 = ctx.index;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(i_r22 + 1);
  }
}
function ContainerizedLoadResultComponent_ng_container_0_th_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 25);
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r23.unitNbr, " ");
  }
}
function ContainerizedLoadResultComponent_ng_container_0_th_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 25);
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_23_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27)(1, "span", 28);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(element_r24.twenty ? "20''" : "40''");
  }
}
function ContainerizedLoadResultComponent_ng_container_0_th_25_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 29);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_26_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r25.unitSequence, " ");
  }
}
function ContainerizedLoadResultComponent_ng_container_0_th_28_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 30);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_29_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r26 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r26.cargoQuantity, " ");
  }
}
function ContainerizedLoadResultComponent_ng_container_0_th_31_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 31);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_32_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r27.cargoWeigth, " ");
  }
}
function ContainerizedLoadResultComponent_ng_container_0_th_34_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 25);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵi18n */.SDv(2, 32);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_35_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r28.destination, " ");
  }
}
function ContainerizedLoadResultComponent_ng_container_0_th_37_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 25);
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_38_div_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 36);
    core/* ɵɵelement */._UZ(1, "img", 37);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r30 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r30.getMessage("modules.containerized-load.hasPin"));
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_38_div_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 36);
    core/* ɵɵelement */._UZ(1, "img", 38);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r31 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r31.getMessage("detached-load.hasChargeableUnitEvents"));
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_38_div_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 36);
    core/* ɵɵelement */._UZ(1, "img", 38);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r32 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r32.getMessage("detached-load.hasDebt-false"));
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_38_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 39);
    core/* ɵɵlistener */.NdJ("click", function ContainerizedLoadResultComponent_ng_container_0_td_38_div_5_Template_div_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r42);
      const element_r29 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r40 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r40.clickMoney(element_r29));
    });
    core/* ɵɵelement */._UZ(1, "img", 40);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r33 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r33.getMessage("detached-load.hasDebt-true"));
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_38_div_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 36);
    core/* ɵɵelement */._UZ(1, "img", 41);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r29 = core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r34 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r34.getMessage("detached-load.hasHolds", element_r29.holdDescription));
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_38_div_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 36);
    core/* ɵɵelement */._UZ(1, "img", 41);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r35 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r35.getMessage("modules.detached-load.storageDaysOwed"));
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_38_div_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 36);
    core/* ɵɵelement */._UZ(1, "img", 41);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r36 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r36.getMessage("modules.detached-load.yard"));
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_38_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 39);
    core/* ɵɵlistener */.NdJ("click", function ContainerizedLoadResultComponent_ng_container_0_td_38_div_9_Template_div_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r46);
      const element_r29 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r44 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r44.clickAppointment(element_r29));
    });
    core/* ɵɵelement */._UZ(1, "img", 42);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r37 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r37.getMessage("modules.detached-load.truck_visit_appt_nbr"));
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_38_div_10_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 36);
    core/* ɵɵelement */._UZ(1, "img", 43);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r38 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r38.getMessage("modules.detached-load.holdConsigneeActive-true"));
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_38_div_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 36);
    core/* ɵɵelement */._UZ(1, "img", 44);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r39 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r39.getMessage("modules.detached-load.holdConsigneeActive-null"));
  }
}
function ContainerizedLoadResultComponent_ng_container_0_td_38_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27)(1, "div", 33);
    core/* ɵɵtemplate */.YNc(2, ContainerizedLoadResultComponent_ng_container_0_td_38_div_2_Template, 2, 1, "div", 34);
    core/* ɵɵtemplate */.YNc(3, ContainerizedLoadResultComponent_ng_container_0_td_38_div_3_Template, 2, 1, "div", 34);
    core/* ɵɵtemplate */.YNc(4, ContainerizedLoadResultComponent_ng_container_0_td_38_div_4_Template, 2, 1, "div", 34);
    core/* ɵɵtemplate */.YNc(5, ContainerizedLoadResultComponent_ng_container_0_td_38_div_5_Template, 2, 1, "div", 35);
    core/* ɵɵtemplate */.YNc(6, ContainerizedLoadResultComponent_ng_container_0_td_38_div_6_Template, 2, 1, "div", 34);
    core/* ɵɵtemplate */.YNc(7, ContainerizedLoadResultComponent_ng_container_0_td_38_div_7_Template, 2, 1, "div", 34);
    core/* ɵɵtemplate */.YNc(8, ContainerizedLoadResultComponent_ng_container_0_td_38_div_8_Template, 2, 1, "div", 34);
    core/* ɵɵtemplate */.YNc(9, ContainerizedLoadResultComponent_ng_container_0_td_38_div_9_Template, 2, 1, "div", 35);
    core/* ɵɵtemplate */.YNc(10, ContainerizedLoadResultComponent_ng_container_0_td_38_div_10_Template, 2, 1, "div", 34);
    core/* ɵɵtemplate */.YNc(11, ContainerizedLoadResultComponent_ng_container_0_td_38_div_11_Template, 2, 1, "div", 34);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", element_r29.hasPin);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !element_r29.hasChargeableUnitEvents);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !element_r29.hasDebt);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r29.hasDebt);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r29.hasHolds);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r29.hasChargeableUnitEvents || element_r29.hasDebt || element_r29.storageDaysOwed > 0);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !element_r29.yard);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r29.truck_visit_appt_nbr);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r29.hasHoldConsignee && element_r29.holdConsigneeActive);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r29.hasHoldConsignee && !element_r29.holdConsigneeActive);
  }
}
function ContainerizedLoadResultComponent_ng_container_0_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 45);
  }
}
function ContainerizedLoadResultComponent_ng_container_0_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 46);
  }
}
function ContainerizedLoadResultComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
    core/* ɵɵtext */._uU(5);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(6, "ul", 5);
    core/* ɵɵtemplate */.YNc(7, ContainerizedLoadResultComponent_ng_container_0_li_7_Template, 5, 1, "li", 6);
    core/* ɵɵtemplate */.YNc(8, ContainerizedLoadResultComponent_ng_container_0_li_8_Template, 5, 1, "li", 6);
    core/* ɵɵelementStart */.TgZ(9, "li", 7)(10, "span", 8);
    core/* ɵɵi18n */.SDv(11, 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(12, "span");
    core/* ɵɵtext */._uU(13);
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(14, "table", 10);
    core/* ɵɵelementContainerStart */.ynx(15, 11);
    core/* ɵɵtemplate */.YNc(16, ContainerizedLoadResultComponent_ng_container_0_th_16_Template, 3, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(17, ContainerizedLoadResultComponent_ng_container_0_td_17_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(18, 14);
    core/* ɵɵtemplate */.YNc(19, ContainerizedLoadResultComponent_ng_container_0_th_19_Template, 1, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(20, ContainerizedLoadResultComponent_ng_container_0_td_20_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(21, 15);
    core/* ɵɵtemplate */.YNc(22, ContainerizedLoadResultComponent_ng_container_0_th_22_Template, 1, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(23, ContainerizedLoadResultComponent_ng_container_0_td_23_Template, 3, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(24, 16);
    core/* ɵɵtemplate */.YNc(25, ContainerizedLoadResultComponent_ng_container_0_th_25_Template, 3, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(26, ContainerizedLoadResultComponent_ng_container_0_td_26_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(27, 17);
    core/* ɵɵtemplate */.YNc(28, ContainerizedLoadResultComponent_ng_container_0_th_28_Template, 3, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(29, ContainerizedLoadResultComponent_ng_container_0_td_29_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(30, 18);
    core/* ɵɵtemplate */.YNc(31, ContainerizedLoadResultComponent_ng_container_0_th_31_Template, 3, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(32, ContainerizedLoadResultComponent_ng_container_0_td_32_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(33, 19);
    core/* ɵɵtemplate */.YNc(34, ContainerizedLoadResultComponent_ng_container_0_th_34_Template, 3, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(35, ContainerizedLoadResultComponent_ng_container_0_td_35_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(36, 20);
    core/* ɵɵtemplate */.YNc(37, ContainerizedLoadResultComponent_ng_container_0_th_37_Template, 1, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(38, ContainerizedLoadResultComponent_ng_container_0_td_38_Template, 12, 10, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵtemplate */.YNc(39, ContainerizedLoadResultComponent_ng_container_0_tr_39_Template, 1, 0, "tr", 21);
    core/* ɵɵtemplate */.YNc(40, ContainerizedLoadResultComponent_ng_container_0_tr_40_Template, 1, 0, "tr", 22);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵtextInterpolate1 */.hij("BL - ", ctx_r0.dataSource[0].blNumber, "");
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.vesselVisit.vesselName);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.vesselVisit.outVoyNbr);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵtextInterpolate2 */.AsE("", ctx_r0.dataSource[0].consigneeId, " - ", ctx_r0.dataSource[0].consigneeName, "");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("dataSource", ctx_r0.dataSource);
    core/* ɵɵadvance */.xp6(25);
    core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx_r0.displayedColumns);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx_r0.displayedColumns);
  }
}
let ContainerizedLoadResultComponent = /*#__PURE__*/(() => {
  class ContainerizedLoadResultComponent {
    constructor(store, router, communicationService) {
      this.store = store;
      this.router = router;
      this.communicationService = communicationService;
      this.dataSource = {};
      this.vesselVisit = null;
      this.displayedColumns = [];
    }
    ngOnInit() {
      this.displayedColumns = ["container", "idContainer", "inches", "actions"];
      this.store.dispatch((0,containerized_load_actions/* getVesselVisit */.kL)({
        vesselVisitID: this.dataSource[0].carrierVisit
      }));
    }
    getMessage(message, param) {
      switch (message) {
        case "modules.containerized-load.hasPin":
          return "Esta unidad fue asignada a un transportista";
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
    getInvoice(invoice) {
      this.store.dispatch((0,containerized_load_actions/* getInvoice */.d5)({
        invoice
      }));
    }
    clickMoney(elemet) {
      this.store.dispatch((0,containerized_load_actions/* cleanDataUnitNbr */.zr)());
      this.store.dispatch((0,containerized_load_actions/* setSelectedUnit */.NM)({
        unit: elemet.unitNbr
      }));
      this.store.dispatch((0,containerized_load_actions/* getDataUnitNbr */.Pe)({
        unitNbr: elemet.unitNbr
      }));
      this.router.navigate(['/', 'carga-contenerizada', 'importacion']);
    }
    clickAppointment(elemet) {
      let appointment = elemet.truck_visit_appt_nbr;
      this.store.dispatch((0,containerized_load_actions/* getDataAppointmentDetail */.yg)({
        truckVisitNbr: appointment
      }));
      this.communicationService.updateVerificacion(1);
      this.router.navigate(['carga-contenerizada', 'appointment-datails'], {});
    }
  }
  ContainerizedLoadResultComponent.ɵfac = function ContainerizedLoadResultComponent_Factory(t) {
    return new (t || ContainerizedLoadResultComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(communication_service/* CommunicationService */.O));
  };
  ContainerizedLoadResultComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ContainerizedLoadResultComponent,
    selectors: [["app-containerized-load-result"]],
    inputs: {
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
        const MSG_EXTERNAL_2396714cd1aed0868ae9131b1528a102751c405cb2654e4cb517eb26233c3fb6$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS__1 = goog.getMsg(" breakbulk.views.search.import.DETAIL_HBL.IMPORTADOR ");
        i18n_0 = MSG_EXTERNAL_2396714cd1aed0868ae9131b1528a102751c405cb2654e4cb517eb26233c3fb6$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS__1;
      } else {
        i18n_0 = "Importador";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_00f17ea336a6e0fe9019507fcc7e3d9ac16434cbb12de7898b1eb1d72afa7a3e$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___3 = goog.getMsg(" breakbulk.views.search.import.DETAIL_HBL.BUQUE ");
        i18n_2 = MSG_EXTERNAL_00f17ea336a6e0fe9019507fcc7e3d9ac16434cbb12de7898b1eb1d72afa7a3e$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___3;
      } else {
        i18n_2 = "Buque";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_69f575cada97836d06e0245f9ea06c331f306523540cf67e2394a8ab1ad25612$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___5 = goog.getMsg(" breakbulk.views.search.import.DETAIL_HBL.NUMERO_VIAJE ");
        i18n_4 = MSG_EXTERNAL_69f575cada97836d06e0245f9ea06c331f306523540cf67e2394a8ab1ad25612$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___5;
      } else {
        i18n_4 = "N\xFAmero de Viaje";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_fb08af264fa02caeaec4cafc748967996d53b5aaf3889563ad3f635dff2b4363$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___7 = goog.getMsg(" agent.views.agent-import-search.BL_CONTAINERS ");
        i18n_6 = MSG_EXTERNAL_fb08af264fa02caeaec4cafc748967996d53b5aaf3889563ad3f635dff2b4363$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___7;
      } else {
        i18n_6 = "Contenedores del BL";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_be9ebb72babaa74b4eb37a3ec266a54e0ea92680f5b34a5102299c07a1b8ad2d$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___9 = goog.getMsg(" config.views.config-users.navbar.CREATE_POSITION_MESSAGE ");
        i18n_8 = MSG_EXTERNAL_be9ebb72babaa74b4eb37a3ec266a54e0ea92680f5b34a5102299c07a1b8ad2d$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___9;
      } else {
        i18n_8 = "Cargo";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_cd5d9788b2930b86455d795ac8a9bb1d7368b4fbdf63d33809e2555b5e5798c6$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___11 = goog.getMsg(" breakbulk.views.search.import.DETAIL_HBL.TABLE.CANTIDAD ");
        i18n_10 = MSG_EXTERNAL_cd5d9788b2930b86455d795ac8a9bb1d7368b4fbdf63d33809e2555b5e5798c6$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___11;
      } else {
        i18n_10 = "Cant.";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_c63a3c299683f6e643faec9c08a123d34f41a0c3064a1535c8119d09c1614363$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___13 = goog.getMsg(" breakbulk.views.search.import.DETAIL_HBL.TABLE.PESO ");
        i18n_12 = MSG_EXTERNAL_c63a3c299683f6e643faec9c08a123d34f41a0c3064a1535c8119d09c1614363$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___13;
      } else {
        i18n_12 = "Peso (t)";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_da2209f8a4794cbbe8d674669a5ce58b4843840e53b44c621dbf165698edcddc$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___15 = goog.getMsg(" breakbulk.views.search.import.DETAIL_HBL.TABLE.DESTINO ");
        i18n_14 = MSG_EXTERNAL_da2209f8a4794cbbe8d674669a5ce58b4843840e53b44c621dbf165698edcddc$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_RESULT_CONTAINERIZED_LOAD_RESULT_COMPONENT_TS___15;
      } else {
        i18n_14 = "Dest";
      }
      return [[4, "ngIf"], [1, "load__result"], [1, "load__body"], [1, "load__result-header"], [1, "load__result-title"], [1, "load__container-list"], ["class", "load__container-item", 4, "ngIf"], [1, "load__container-item"], [1, "load__container-item-title"], i18n_0, ["mat-table", "", 3, "dataSource"], ["matColumnDef", "container"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "idContainer"], ["matColumnDef", "inches"], ["matColumnDef", "cargo"], ["matColumnDef", "cantidad"], ["matColumnDef", "peso"], ["matColumnDef", "dest"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 4, "matRowDef", "matRowDefColumns"], i18n_2, i18n_4, ["mat-header-cell", ""], i18n_6, ["mat-cell", ""], [1, "badge"], i18n_8, i18n_10, i18n_12, i18n_14, [1, "load__actions-wrapper"], ["matTooltipPosition", "above", 3, "matTooltip", 4, "ngIf"], ["matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"], ["matTooltipPosition", "above", 3, "matTooltip"], ["src", "assets/icon/camion.svg", 1, "load__container-icon"], ["src", "assets/icon/nube.svg", 1, "load__container-icon"], ["matTooltipPosition", "above", 3, "matTooltip", "click"], ["src", "assets/icon/billete.svg", 1, "load__container-icon"], ["src", "assets/icon/prohibido.svg", 1, "load__container-icon"], ["src", "assets/icon/calendario.svg", 1, "load__container-icon"], ["src", "assets/icon/candado_abierto.svg", 1, "load__container-icon", "load__container-icon_lock"], ["src", "assets/icon/candado_cerrado.svg", 1, "load__container-icon", "load__container-icon_lock"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row"]];
    },
    template: function ContainerizedLoadResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, ContainerizedLoadResultComponent_ng_container_0_Template, 41, 8, "ng-container", 0);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", ctx.vesselVisit);
      }
    },
    dependencies: [common/* NgIf */.O5, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, tooltip/* MatTooltip */.gM],
    styles: [".load__result[_ngcontent-%COMP%]{width:100%;margin-top:2rem;background-color:#fff;font-family:Gilroy-light}.load__result-header[_ngcontent-%COMP%]{width:max-content;background-color:#92b975;color:#fff;border-radius:.5rem;padding:.5rem 1.5rem}.load__result-title[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Gilroy-light;margin:0}.load__container-list[_ngcontent-%COMP%]{width:100%;margin-top:.5rem;padding:0;list-style:none;color:#666}.load__container-item[_ngcontent-%COMP%]{width:100%;background-color:#f9f9f9;border-radius:.5rem;padding:.5rem 1.5rem;margin-bottom:.5rem;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr}.load__container-item-title[_ngcontent-%COMP%]{font-size:1.2rem}.badge[_ngcontent-%COMP%]{font-size:12px;padding:.1rem .5rem;background-color:#777;color:#fff;border-radius:10px}.load__container-icon[_ngcontent-%COMP%]{width:1rem;margin-left:.1rem;margin-right:.1rem;cursor:pointer;transition:.25s}.load__container-icon_lock[_ngcontent-%COMP%]{width:.7rem}.load__actions-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.load__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start}  .mdc-data-table__row{height:40px!important}tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover{background:whitesmoke}"]
  });
  return ContainerizedLoadResultComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/invoice-management/invoice-management.component.ts



function InvoiceManagementComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr")(1, "td");
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "td");
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "td");
    core/* ɵɵi18n */.SDv(6, 21);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r0.invoice.firstAppointmentImport);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r0.invoice.firstContainerImport);
  }
}
function InvoiceManagementComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr")(1, "td");
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "td");
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "td");
    core/* ɵɵi18n */.SDv(6, 22);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r1.invoice.secondAppointmentImport);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r1.invoice.secondContainerImport);
  }
}
function InvoiceManagementComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr")(1, "td");
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "td");
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "td");
    core/* ɵɵi18n */.SDv(6, 23);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r2.invoice.firstAppointmentExport);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r2.invoice.firstContainerExport);
  }
}
function InvoiceManagementComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr")(1, "td");
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "td");
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "td");
    core/* ɵɵi18n */.SDv(6, 24);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r3 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r3.invoice.secondAppointmentExport);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r3.invoice.secondContainerExport);
  }
}
function InvoiceManagementComponent_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr")(1, "td");
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "td");
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "td");
    core/* ɵɵi18n */.SDv(6, 25);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r4 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r4.invoice.firstAppointmentEdo);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r4.invoice.firstContainerEdo);
  }
}
function InvoiceManagementComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr")(1, "td");
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "td");
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "td");
    core/* ɵɵi18n */.SDv(6, 26);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r5 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r5.invoice.secondAppointmentEdo);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r5.invoice.secondContainerEdo);
  }
}
function InvoiceManagementComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr")(1, "td");
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "td");
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "td");
    core/* ɵɵi18n */.SDv(6, 27);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r6 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r6.invoice.firstAppointmentEro);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r6.invoice.firstContainerEro);
  }
}
function InvoiceManagementComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr")(1, "td");
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "td");
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "td");
    core/* ɵɵi18n */.SDv(6, 28);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r7 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r7.invoice.secondAppointmentEro);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r7.invoice.secondContainerEro);
  }
}
let InvoiceManagementComponent = /*#__PURE__*/(() => {
  class InvoiceManagementComponent {
    constructor() {}
  }
  InvoiceManagementComponent.ɵfac = function InvoiceManagementComponent_Factory(t) {
    return new (t || InvoiceManagementComponent)();
  };
  InvoiceManagementComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: InvoiceManagementComponent,
    selectors: [["app-invoice-management"]],
    inputs: {
      invoice: "invoice"
    },
    decls: 57,
    vars: 13,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1a0d96c586749f9e35e9e0416ea53ac118a5fb8cb2a99b51266341f277253f1a$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__1 = goog.getMsg("history.views.history-truck-list.IMPORT_LABEL");
        i18n_0 = MSG_EXTERNAL_1a0d96c586749f9e35e9e0416ea53ac118a5fb8cb2a99b51266341f277253f1a$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__1;
      } else {
        i18n_0 = "IMPORT";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1a0d96c586749f9e35e9e0416ea53ac118a5fb8cb2a99b51266341f277253f1a$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__3 = goog.getMsg("history.views.history-truck-list.IMPORT_LABEL");
        i18n_2 = MSG_EXTERNAL_1a0d96c586749f9e35e9e0416ea53ac118a5fb8cb2a99b51266341f277253f1a$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__3;
      } else {
        i18n_2 = "IMPORT";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_a861eac85c5b898a58ab4f83674a4a40a9c9a375aa36fce9dfd6506ce1604988$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__5 = goog.getMsg("history.views.history-truck-list.EXPORT_LABEL");
        i18n_4 = MSG_EXTERNAL_a861eac85c5b898a58ab4f83674a4a40a9c9a375aa36fce9dfd6506ce1604988$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__5;
      } else {
        i18n_4 = "EXPORT";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_a861eac85c5b898a58ab4f83674a4a40a9c9a375aa36fce9dfd6506ce1604988$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__7 = goog.getMsg("history.views.history-truck-list.EXPORT_LABEL");
        i18n_6 = MSG_EXTERNAL_a861eac85c5b898a58ab4f83674a4a40a9c9a375aa36fce9dfd6506ce1604988$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__7;
      } else {
        i18n_6 = "EXPORT";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_a861eac85c5b898a58ab4f83674a4a40a9c9a375aa36fce9dfd6506ce1604988$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__9 = goog.getMsg("history.views.history-truck-list.EDO_LABEL");
        i18n_8 = MSG_EXTERNAL_a861eac85c5b898a58ab4f83674a4a40a9c9a375aa36fce9dfd6506ce1604988$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__9;
      } else {
        i18n_8 = "EXPORT";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_a861eac85c5b898a58ab4f83674a4a40a9c9a375aa36fce9dfd6506ce1604988$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__11 = goog.getMsg("history.views.history-truck-list.EDO_LABEL");
        i18n_10 = MSG_EXTERNAL_a861eac85c5b898a58ab4f83674a4a40a9c9a375aa36fce9dfd6506ce1604988$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__11;
      } else {
        i18n_10 = "EXPORT";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3220d5a93f969578f29c3121c91b0b63a911b42884de8c8d19874bd7c0c24c05$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__13 = goog.getMsg("history.views.history-truck-list.ERO_LABEL");
        i18n_12 = MSG_EXTERNAL_3220d5a93f969578f29c3121c91b0b63a911b42884de8c8d19874bd7c0c24c05$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__13;
      } else {
        i18n_12 = "ERO";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3220d5a93f969578f29c3121c91b0b63a911b42884de8c8d19874bd7c0c24c05$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__15 = goog.getMsg("history.views.history-truck-list.ERO_LABEL");
        i18n_14 = MSG_EXTERNAL_3220d5a93f969578f29c3121c91b0b63a911b42884de8c8d19874bd7c0c24c05$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_INVOICE_MANAGEMENT_INVOICE_MANAGEMENT_COMPONENT_TS__15;
      } else {
        i18n_14 = "ERO";
      }
      return [[1, "invoice"], [1, "header"], ["id", "Capa_2", "viewBox", "0 0 81.9 81.75", 1, "header__icon"], ["id", "Capa_1-2"], ["x", "15.26", "y", "1.93", "width", "11.68", "height", "17.96", 1, "cls-1"], ["x", "56.27", "y", "1.93", "width", "10.18", "height", "17.43", 1, "cls-1"], ["x", "1.93", "y", "8.01", "width", "78.27", "height", "71.86", 1, "cls-2"], ["d", "m81.9,9.94c0-1.07-.86-1.93-1.93-1.93h-13.32V1.93c0-1.07-.86-1.93-1.93-1.93h-9.75c-1.07,0-1.93.86-1.93,1.93v6.08h-24.16V1.93c0-1.07-.86-1.93-1.93-1.93h-9.75c-1.07,0-1.93.86-1.93,1.93v6.08H1.93C.87,8.01,0,8.88,0,9.94v69.88c0,1.07.86,1.93,1.93,1.93h78.04c1.07,0,1.93-.86,1.93-1.93V9.94Zm-25.01-6.08h5.89v12.16h-5.89V3.86Zm-37.77,0h5.89v12.16h-5.89V3.86ZM3.86,11.88h11.39v6.08c0,1.07.86,1.93,1.93,1.93h9.75c1.07,0,1.93-.86,1.93-1.93v-6.08h24.16v6.08c0,1.07.86,1.93,1.93,1.93h9.75c1.07,0,1.93-.86,1.93-1.93v-6.08h11.39v11.8H3.86v-11.8Zm74.17,66.02H3.86V27.54h74.17v50.36Z", 1, "cls-3"], ["d", "m13.52,70.17h10.18c1.07,0,1.93-.86,1.93-1.93v-10.18c0-1.07-.86-1.93-1.93-1.93h-10.18c-1.07,0-1.93.86-1.93,1.93v10.18c0,1.07.86,1.93,1.93,1.93Zm1.93-10.18h6.32v6.32h-6.32v-6.32Z", 1, "cls-3"], ["d", "m35.86,49.3h10.18c1.07,0,1.93-.86,1.93-1.93v-10.18c0-1.07-.86-1.93-1.93-1.93h-10.18c-1.07,0-1.93.86-1.93,1.93v10.18c0,1.07.86,1.93,1.93,1.93Zm1.93-10.18h6.32v6.32h-6.32v-6.32Z", 1, "cls-3"], ["d", "m35.86,70.17h10.18c1.07,0,1.93-.86,1.93-1.93v-10.18c0-1.07-.86-1.93-1.93-1.93h-10.18c-1.07,0-1.93.86-1.93,1.93v10.18c0,1.07.86,1.93,1.93,1.93Zm1.93-10.18h6.32v6.32h-6.32v-6.32Z", 1, "cls-3"], ["d", "m58.2,49.3h10.18c1.07,0,1.93-.86,1.93-1.93v-10.18c0-1.07-.86-1.93-1.93-1.93h-10.18c-1.07,0-1.93.86-1.93,1.93v10.18c0,1.07.86,1.93,1.93,1.93Zm1.93-10.18h6.32v6.32h-6.32v-6.32Z", 1, "cls-3"], ["d", "m58.2,70.17h10.18c1.07,0,1.93-.86,1.93-1.93v-10.18c0-1.07-.86-1.93-1.93-1.93h-10.18c-1.07,0-1.93.86-1.93,1.93v10.18c0,1.07.86,1.93,1.93,1.93Zm1.93-10.18h6.32v6.32h-6.32v-6.32Z", 1, "cls-3"], [1, "header__title"], [1, "list"], [1, "list-item"], [1, "list__title"], [1, "list-item", "list-item_double"], [1, "list__title_first"], [1, "footer"], [4, "ngIf"], i18n_0, i18n_2, i18n_4, i18n_6, i18n_8, i18n_10, i18n_12, i18n_14];
    },
    template: function InvoiceManagementComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "mat-card")(1, "mat-card-content")(2, "div", 0)(3, "div", 1);
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(4, "svg", 2)(5, "defs")(6, "style");
        core/* ɵɵtext */._uU(7, ".cls-1{fill:#666666;}.cls-2{fill:#666666;}.cls-3{fill:#fcfcfc;}");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(8, "g", 3);
        core/* ɵɵelement */._UZ(9, "rect", 4)(10, "rect", 5)(11, "rect", 6)(12, "path", 7)(13, "path", 8)(14, "path", 9)(15, "path", 10)(16, "path", 11)(17, "path", 12);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementStart */.TgZ(18, "h2", 13);
        core/* ɵɵtext */._uU(19);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(20, "ul", 14)(21, "li", 15)(22, "span", 16);
        core/* ɵɵtext */._uU(23, "Identificador: ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtext */._uU(24);
        core/* ɵɵelement */._UZ(25, "hr");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(26, "li", 17)(27, "div", 18)(28, "span", 16);
        core/* ɵɵtext */._uU(29, "Conductor: ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtext */._uU(30);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(31, "div")(32, "span", 16);
        core/* ɵɵtext */._uU(33, "Identificaci\u00F3n: ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtext */._uU(34);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(35, "li", 15);
        core/* ɵɵelement */._UZ(36, "hr");
        core/* ɵɵelementStart */.TgZ(37, "span", 16);
        core/* ɵɵtext */._uU(38, "Placa: ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtext */._uU(39);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(40, "table", 19)(41, "thead")(42, "th");
        core/* ɵɵtext */._uU(43, "Nro.");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(44, "th");
        core/* ɵɵtext */._uU(45, "Contenedor");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(46, "th");
        core/* ɵɵtext */._uU(47, "Transacci\u00F3n");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(48, "tbody");
        core/* ɵɵtemplate */.YNc(49, InvoiceManagementComponent_tr_49_Template, 7, 2, "tr", 20);
        core/* ɵɵtemplate */.YNc(50, InvoiceManagementComponent_tr_50_Template, 7, 2, "tr", 20);
        core/* ɵɵtemplate */.YNc(51, InvoiceManagementComponent_tr_51_Template, 7, 2, "tr", 20);
        core/* ɵɵtemplate */.YNc(52, InvoiceManagementComponent_tr_52_Template, 7, 2, "tr", 20);
        core/* ɵɵtemplate */.YNc(53, InvoiceManagementComponent_tr_53_Template, 7, 2, "tr", 20);
        core/* ɵɵtemplate */.YNc(54, InvoiceManagementComponent_tr_54_Template, 7, 2, "tr", 20);
        core/* ɵɵtemplate */.YNc(55, InvoiceManagementComponent_tr_55_Template, 7, 2, "tr", 20);
        core/* ɵɵtemplate */.YNc(56, InvoiceManagementComponent_tr_56_Template, 7, 2, "tr", 20);
        core/* ɵɵelementEnd */.qZA()()()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(19);
        core/* ɵɵtextInterpolate1 */.hij("D\u00EDa y hora de la cita: ", ctx.invoice.appointmentDate, " hs.");
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵtextInterpolate1 */.hij("", ctx.invoice.truckVisitNbr, " ");
        core/* ɵɵadvance */.xp6(6);
        core/* ɵɵtextInterpolate1 */.hij("", ctx.invoice.name, " ");
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵtextInterpolate1 */.hij("", ctx.invoice.license, " ");
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵtextInterpolate1 */.hij("", ctx.invoice.truck, " ");
        core/* ɵɵadvance */.xp6(10);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.invoice.firstAppointmentImport);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.invoice.secondAppointmentImport);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.invoice.firstAppointmentExport);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.invoice.secondAppointmentExport);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.invoice.firstAppointmentEdo);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.invoice.secondAppointmentEdo);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.invoice.firstAppointmentEro);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.invoice.secondAppointmentEro);
      }
    },
    dependencies: [common/* NgIf */.O5, card/* MatCard */.a8, card/* MatCardContent */.dn],
    styles: [".invoice[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;row-gap:2rem}.header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.header__icon[_ngcontent-%COMP%]{width:4rem}.header__title[_ngcontent-%COMP%]{color:#666;font-weight:400;margin:0;margin-left:1rem}.list[_ngcontent-%COMP%]{list-style:none;color:#666;font-size:.9rem}.list-item_double[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.list__title_first[_ngcontent-%COMP%]{margin-right:4rem}.list-item[_ngcontent-%COMP%]{padding-top:1rem;padding-bottom:.25rem}.footer[_ngcontent-%COMP%]{width:100%;color:#666;justify-self:center}.list__title[_ngcontent-%COMP%]{font-weight:500}"]
  });
  return InvoiceManagementComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/booking-load-result/booking-load-result.component.ts









function BookingLoadResultComponent_ng_container_0_li_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "li", 7)(1, "span");
    core/* ɵɵtext */._uU(2, "Buque");
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
function BookingLoadResultComponent_ng_container_0_li_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "li", 7)(1, "span");
    core/* ɵɵtext */._uU(2, "N\u00FAmero de Viaje");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "span");
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r2.vesselVisit.outVoyNbr);
  }
}
function BookingLoadResultComponent_ng_container_0_th_16_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 26)(1, "span");
    core/* ɵɵtext */._uU(2, "ISO CODE");
    core/* ɵɵelementEnd */.qZA()();
  }
}
function BookingLoadResultComponent_ng_container_0_td_17_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r29.isoType);
  }
}
function BookingLoadResultComponent_ng_container_0_th_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 26)(1, "span");
    core/* ɵɵtext */._uU(2, "TOTAL");
    core/* ɵɵelementEnd */.qZA()();
  }
}
function BookingLoadResultComponent_ng_container_0_td_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 28);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r30 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r30.quantity);
  }
}
function BookingLoadResultComponent_ng_container_0_th_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 26)(1, "span");
    core/* ɵɵtext */._uU(2, "DISPONIBLES");
    core/* ɵɵelementEnd */.qZA()();
  }
}
function BookingLoadResultComponent_ng_container_0_td_23_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 28);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r31.availableQuantity);
  }
}
function BookingLoadResultComponent_ng_container_0_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 29);
  }
}
function BookingLoadResultComponent_ng_container_0_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 30);
  }
}
function BookingLoadResultComponent_ng_container_0_th_28_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 26)(1, "span");
    core/* ɵɵtext */._uU(2, "Contenedor del Booking");
    core/* ɵɵelementEnd */.qZA()();
  }
}
function BookingLoadResultComponent_ng_container_0_td_29_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const i_r34 = ctx.index;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(i_r34 + 1);
  }
}
function BookingLoadResultComponent_ng_container_0_th_31_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 26);
  }
}
function BookingLoadResultComponent_ng_container_0_td_32_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r35 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r35.unitNbr, " ");
  }
}
function BookingLoadResultComponent_ng_container_0_th_34_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 26);
  }
}
function BookingLoadResultComponent_ng_container_0_td_35_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27)(1, "span", 31);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r36 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(element_r36.twenty ? "20''" : "40''");
  }
}
function BookingLoadResultComponent_ng_container_0_th_37_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 26);
  }
}
function BookingLoadResultComponent_ng_container_0_td_38_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r37 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r37.unitSequence, " ");
  }
}
function BookingLoadResultComponent_ng_container_0_th_40_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 26);
  }
}
function BookingLoadResultComponent_ng_container_0_td_41_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r38.cargoQuantity, " ");
  }
}
function BookingLoadResultComponent_ng_container_0_th_43_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 26);
  }
}
function BookingLoadResultComponent_ng_container_0_td_44_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r39 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r39.cargoWeigth, " ");
  }
}
function BookingLoadResultComponent_ng_container_0_th_46_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 26);
  }
}
function BookingLoadResultComponent_ng_container_0_td_47_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r40 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r40.destination, " ");
  }
}
function BookingLoadResultComponent_ng_container_0_th_49_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 26);
  }
}
function BookingLoadResultComponent_ng_container_0_td_50_div_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 36);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r42 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r42.getMessage("modules.containerized-load.hasPin"));
  }
}
function BookingLoadResultComponent_ng_container_0_td_50_div_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 37);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r43 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r43.getMessage("detached-load.hasChargeableUnitEvents"));
  }
}
function BookingLoadResultComponent_ng_container_0_td_50_div_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 37);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r44 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r44.getMessage("detached-load.hasDebt-false"));
  }
}
function BookingLoadResultComponent_ng_container_0_td_50_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 38);
    core/* ɵɵlistener */.NdJ("click", function BookingLoadResultComponent_ng_container_0_td_50_div_5_Template_div_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r54);
      const element_r41 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r52 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r52.clickMoney(element_r41));
    });
    core/* ɵɵelement */._UZ(1, "img", 39);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r45 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r45.getMessage("detached-load.hasDebt-true"));
  }
}
function BookingLoadResultComponent_ng_container_0_td_50_div_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 40);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r41 = core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r46 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r46.getMessage("detached-load.hasHolds", element_r41.holdDescription));
  }
}
function BookingLoadResultComponent_ng_container_0_td_50_div_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 40);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r47 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r47.getMessage("modules.detached-load.storageDaysOwed"));
  }
}
function BookingLoadResultComponent_ng_container_0_td_50_div_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 40);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r48 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r48.getMessage("modules.detached-load.yard"));
  }
}
function BookingLoadResultComponent_ng_container_0_td_50_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 38);
    core/* ɵɵlistener */.NdJ("click", function BookingLoadResultComponent_ng_container_0_td_50_div_9_Template_div_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r58);
      const element_r41 = core/* ɵɵnextContext */.oxw().$implicit;
      const ctx_r56 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r56.clickAppointment(element_r41));
    });
    core/* ɵɵelement */._UZ(1, "img", 41);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r49 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r49.getMessage("modules.detached-load.truck_visit_appt_nbr"));
  }
}
function BookingLoadResultComponent_ng_container_0_td_50_div_10_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 42);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r50 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r50.getMessage("modules.detached-load.holdConsigneeActive-true"));
  }
}
function BookingLoadResultComponent_ng_container_0_td_50_div_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 35);
    core/* ɵɵelement */._UZ(1, "img", 43);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r51 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("matTooltip", ctx_r51.getMessage("modules.detached-load.holdConsigneeActive-null"));
  }
}
function BookingLoadResultComponent_ng_container_0_td_50_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 27)(1, "div", 32);
    core/* ɵɵtemplate */.YNc(2, BookingLoadResultComponent_ng_container_0_td_50_div_2_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(3, BookingLoadResultComponent_ng_container_0_td_50_div_3_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(4, BookingLoadResultComponent_ng_container_0_td_50_div_4_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(5, BookingLoadResultComponent_ng_container_0_td_50_div_5_Template, 2, 1, "div", 34);
    core/* ɵɵtemplate */.YNc(6, BookingLoadResultComponent_ng_container_0_td_50_div_6_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(7, BookingLoadResultComponent_ng_container_0_td_50_div_7_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(8, BookingLoadResultComponent_ng_container_0_td_50_div_8_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(9, BookingLoadResultComponent_ng_container_0_td_50_div_9_Template, 2, 1, "div", 34);
    core/* ɵɵtemplate */.YNc(10, BookingLoadResultComponent_ng_container_0_td_50_div_10_Template, 2, 1, "div", 33);
    core/* ɵɵtemplate */.YNc(11, BookingLoadResultComponent_ng_container_0_td_50_div_11_Template, 2, 1, "div", 33);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r41 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", element_r41.hasPin);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !element_r41.hasChargeableUnitEvents);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !element_r41.hasDebt);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r41.hasDebt);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r41.hasHolds);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r41.hasChargeableUnitEvents || element_r41.hasDebt || element_r41.storageDaysOwed > 0);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !element_r41.yard);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r41.truck_visit_appt_nbr);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r41.hasHoldConsignee && element_r41.holdConsigneeActive);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", element_r41.hasHoldConsignee && !element_r41.holdConsigneeActive);
  }
}
function BookingLoadResultComponent_ng_container_0_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 29);
  }
}
function BookingLoadResultComponent_ng_container_0_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 30);
  }
}
function BookingLoadResultComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
    core/* ɵɵtext */._uU(5);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(6, "ul", 5);
    core/* ɵɵtemplate */.YNc(7, BookingLoadResultComponent_ng_container_0_li_7_Template, 5, 1, "li", 6);
    core/* ɵɵtemplate */.YNc(8, BookingLoadResultComponent_ng_container_0_li_8_Template, 5, 1, "li", 6);
    core/* ɵɵelementStart */.TgZ(9, "li", 7)(10, "span");
    core/* ɵɵtext */._uU(11, "Exportador");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(12, "span");
    core/* ɵɵtext */._uU(13);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵelementStart */.TgZ(14, "table", 8);
    core/* ɵɵelementContainerStart */.ynx(15, 9);
    core/* ɵɵtemplate */.YNc(16, BookingLoadResultComponent_ng_container_0_th_16_Template, 3, 0, "th", 10);
    core/* ɵɵtemplate */.YNc(17, BookingLoadResultComponent_ng_container_0_td_17_Template, 2, 1, "td", 11);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(18, 12);
    core/* ɵɵtemplate */.YNc(19, BookingLoadResultComponent_ng_container_0_th_19_Template, 3, 0, "th", 10);
    core/* ɵɵtemplate */.YNc(20, BookingLoadResultComponent_ng_container_0_td_20_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(21, 14);
    core/* ɵɵtemplate */.YNc(22, BookingLoadResultComponent_ng_container_0_th_22_Template, 3, 0, "th", 10);
    core/* ɵɵtemplate */.YNc(23, BookingLoadResultComponent_ng_container_0_td_23_Template, 2, 1, "td", 13);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵtemplate */.YNc(24, BookingLoadResultComponent_ng_container_0_tr_24_Template, 1, 0, "tr", 15);
    core/* ɵɵtemplate */.YNc(25, BookingLoadResultComponent_ng_container_0_tr_25_Template, 1, 0, "tr", 16);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(26, "table", 17);
    core/* ɵɵelementContainerStart */.ynx(27, 18);
    core/* ɵɵtemplate */.YNc(28, BookingLoadResultComponent_ng_container_0_th_28_Template, 3, 0, "th", 10);
    core/* ɵɵtemplate */.YNc(29, BookingLoadResultComponent_ng_container_0_td_29_Template, 2, 1, "td", 11);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(30, 19);
    core/* ɵɵtemplate */.YNc(31, BookingLoadResultComponent_ng_container_0_th_31_Template, 1, 0, "th", 10);
    core/* ɵɵtemplate */.YNc(32, BookingLoadResultComponent_ng_container_0_td_32_Template, 2, 1, "td", 11);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(33, 20);
    core/* ɵɵtemplate */.YNc(34, BookingLoadResultComponent_ng_container_0_th_34_Template, 1, 0, "th", 10);
    core/* ɵɵtemplate */.YNc(35, BookingLoadResultComponent_ng_container_0_td_35_Template, 3, 1, "td", 11);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(36, 21);
    core/* ɵɵtemplate */.YNc(37, BookingLoadResultComponent_ng_container_0_th_37_Template, 1, 0, "th", 10);
    core/* ɵɵtemplate */.YNc(38, BookingLoadResultComponent_ng_container_0_td_38_Template, 2, 1, "td", 11);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(39, 22);
    core/* ɵɵtemplate */.YNc(40, BookingLoadResultComponent_ng_container_0_th_40_Template, 1, 0, "th", 10);
    core/* ɵɵtemplate */.YNc(41, BookingLoadResultComponent_ng_container_0_td_41_Template, 2, 1, "td", 11);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(42, 23);
    core/* ɵɵtemplate */.YNc(43, BookingLoadResultComponent_ng_container_0_th_43_Template, 1, 0, "th", 10);
    core/* ɵɵtemplate */.YNc(44, BookingLoadResultComponent_ng_container_0_td_44_Template, 2, 1, "td", 11);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(45, 24);
    core/* ɵɵtemplate */.YNc(46, BookingLoadResultComponent_ng_container_0_th_46_Template, 1, 0, "th", 10);
    core/* ɵɵtemplate */.YNc(47, BookingLoadResultComponent_ng_container_0_td_47_Template, 2, 1, "td", 11);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(48, 25);
    core/* ɵɵtemplate */.YNc(49, BookingLoadResultComponent_ng_container_0_th_49_Template, 1, 0, "th", 10);
    core/* ɵɵtemplate */.YNc(50, BookingLoadResultComponent_ng_container_0_td_50_Template, 12, 10, "td", 11);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵtemplate */.YNc(51, BookingLoadResultComponent_ng_container_0_tr_51_Template, 1, 0, "tr", 15);
    core/* ɵɵtemplate */.YNc(52, BookingLoadResultComponent_ng_container_0_tr_52_Template, 1, 0, "tr", 16);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵtextInterpolate2 */.AsE("Booking - ", ctx_r0.data[0].nbr, " -- ", ctx_r0.data[0].line, "");
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.vesselVisit.vesselName);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.vesselVisit.outVoyNbr);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵtextInterpolate2 */.AsE("", ctx_r0.data[0].shipperId, " - ", ctx_r0.data[0].shipperName, "");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("dataSource", ctx_r0.dataSourceISO);
    core/* ɵɵadvance */.xp6(10);
    core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx_r0.displayedColumnsISO);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx_r0.displayedColumnsISO);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("dataSource", ctx_r0.dataSource);
    core/* ɵɵadvance */.xp6(25);
    core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx_r0.displayedColumns);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx_r0.displayedColumns);
  }
}
const vesselVisit = {
  "inVoyNbr": "2305E",
  "id": "2303BRAVOX",
  "inCallNumber": 1,
  "outVoyNbr": "2305E",
  "operatorId": "ONE",
  "vesselId": "ONEBRAVO",
  "vesselName": "SEASPAN BRAVO",
  "visitPhase": "INBOUND",
  "serviceId": "NAS",
  "fechaCierreDocumental": 1678806000000,
  "earlyArrival": 1678186800000,
  "eta": 1678878000000,
  "etd": 1679050800000,
  "primeraLinea": 0,
  "ata": 0,
  "ultimaLinea": 0
};
let BookingLoadResultComponent = /*#__PURE__*/(() => {
  class BookingLoadResultComponent {
    constructor(store, router, communicationService) {
      this.store = store;
      this.router = router;
      this.communicationService = communicationService;
      this.data = [];
      this.vesselVisit = null;
      this.displayedColumns = [];
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.displayedColumnsISO = [];
      this.dataSourceISO = new table/* MatTableDataSource */.by([]);
    }
    ngOnInit() {
      this.store.dispatch((0,containerized_load_actions/* getVesselVisit */.kL)({
        vesselVisitID: this.data[0].carrierVisit
      }));
      let dataSource = [];
      let accumulatedDataSource = [];
      dataSource = this.data.map(element => ({
        isoType: element.isoType,
        quantity: element.quantity,
        availableQuantity: element.availableQuantity
      }));
      dataSource.forEach(element => {
        let currentDescription = element.isoType;
        let isAccumulated = false;
        isAccumulated = !!accumulatedDataSource.filter(element => element.isoType === currentDescription).length;
        if (isAccumulated) {
          accumulatedDataSource = accumulatedDataSource.map(accumulatedElement => {
            const newElement = Object.assign({}, accumulatedElement);
            if (accumulatedElement.isoType === element.isoType) {
              newElement.quantity = (parseInt(element.quantity) + parseInt(accumulatedElement.quantity)).toString();
              newElement.availableQuantity = (parseInt(element.availableQuantity) + parseInt(accumulatedElement.availableQuantity)).toString();
            }
            return newElement;
          });
        } else {
          accumulatedDataSource = [...accumulatedDataSource, element];
        }
      });
      this.displayedColumnsISO = ["isoType", "quantity", "availableQuantity"];
      this.dataSourceISO = new table/* MatTableDataSource */.by(accumulatedDataSource);
      this.displayedColumns = ["container", "idContainer", "inches", "actions"];
      this.vesselVisit = vesselVisit;
      this.dataSource = new table/* MatTableDataSource */.by(this.data);
    }
    getMessage(message, param) {
      switch (message) {
        case "modules.containerized-load.hasPin":
          return "Esta unidad fue asignada a un transportista";
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
    clickAppointment(element) {
      let appointment = element.truck_visit_appt_nbr;
      this.store.dispatch((0,containerized_load_actions/* getDataAppointmentDetail */.yg)({
        truckVisitNbr: appointment
      }));
      this.communicationService.updateVerificacion(1);
      this.router.navigate(['carga-contenerizada', 'appointment-datails'], {});
    }
    clickMoney(element) {
      if (element.category === "EXPORT") {
        this.store.dispatch((0,containerized_load_actions/* cleanDataUnitNbr */.zr)());
        this.store.dispatch((0,containerized_load_actions/* setSelectedUnit */.NM)({
          unit: element.unitNbr
        }));
        this.store.dispatch((0,containerized_load_actions/* getDataUnitNbr */.Pe)({
          unitNbr: element.unitNbr
        }));
        this.router.navigate(['/', 'carga-contenerizada', 'exportacion']);
      }
    }
  }
  BookingLoadResultComponent.ɵfac = function BookingLoadResultComponent_Factory(t) {
    return new (t || BookingLoadResultComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(communication_service/* CommunicationService */.O));
  };
  BookingLoadResultComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: BookingLoadResultComponent,
    selectors: [["app-booking-load-result"]],
    inputs: {
      data: "data",
      vesselVisit: "vesselVisit"
    },
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "load__result"], [1, "load__body"], [1, "load__result-header"], [1, "load__result-title"], [1, "load__container-list"], ["class", "load__container-item", 4, "ngIf"], [1, "load__container-item"], ["mat-table", "", 1, "booking-load-result", 3, "dataSource"], ["matColumnDef", "isoType"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "quantity"], ["mat-cell", "", "class", "table-cell__right", 4, "matCellDef"], ["matColumnDef", "availableQuantity"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 4, "matRowDef", "matRowDefColumns"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "container"], ["matColumnDef", "idContainer"], ["matColumnDef", "inches"], ["matColumnDef", "cargo"], ["matColumnDef", "cantidad"], ["matColumnDef", "peso"], ["matColumnDef", "dest"], ["matColumnDef", "actions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "table-cell__right"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row"], [1, "badge"], [1, "load__actions-wrapper"], ["matTooltipPosition", "above", 3, "matTooltip", 4, "ngIf"], ["matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"], ["matTooltipPosition", "above", 3, "matTooltip"], ["src", "assets/icon/camion.svg", 1, "load__container-icon"], ["src", "assets/icon/nube.svg", 1, "load__container-icon"], ["matTooltipPosition", "above", 3, "matTooltip", "click"], ["src", "assets/icon/billete.svg", 1, "load__container-icon"], ["src", "assets/icon/prohibido.svg", 1, "load__container-icon"], ["src", "assets/icon/calendario.svg", 1, "load__container-icon"], ["src", "assets/icon/candado_abierto.svg", 1, "load__container-icon", "load__container-icon_lock"], ["src", "assets/icon/candado_cerrado.svg", 1, "load__container-icon", "load__container-icon_lock"]],
    template: function BookingLoadResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, BookingLoadResultComponent_ng_container_0_Template, 53, 12, "ng-container", 0);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", ctx.vesselVisit);
      }
    },
    dependencies: [common/* NgIf */.O5, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, tooltip/* MatTooltip */.gM],
    styles: [".load__result[_ngcontent-%COMP%]{width:100%;margin-top:2rem;background-color:#fff;font-family:Gilroy-light}.load__result-header[_ngcontent-%COMP%]{width:max-content;background-color:#92b975;color:#fff;border-radius:.5rem;padding:.5rem 1.5rem}.load__result-title[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Gilroy-light;margin:0}.load__container-list[_ngcontent-%COMP%]{width:100%;margin-top:.5rem;margin-bottom:0;padding:0;list-style:none;color:#666}.load__container-item[_ngcontent-%COMP%]{width:100%;background-color:#f9f9f9;border-radius:.5rem;padding:.5rem 1.5rem;margin-bottom:.5rem;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr}.load__container-item-title[_ngcontent-%COMP%]{font-size:1.2rem}.badge[_ngcontent-%COMP%]{font-size:12px;padding:.1rem .5rem;background-color:#777;color:#fff;border-radius:10px}.load__container-icon[_ngcontent-%COMP%]{width:1rem;margin-left:.1rem;margin-right:.1rem;cursor:pointer;transition:.25s}.load__container-icon_lock[_ngcontent-%COMP%]{width:.7rem}.load__actions-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.load__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start}  .mdc-data-table__row{height:40px!important}tr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover{background:whitesmoke}.booking-load-result[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{font-size:.8rem;font-family:Gilroy-Light;background-color:#f9f9f9;color:#6e6e6e!important}.booking-load-result[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}.booking-load-result[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}"]
  });
  return BookingLoadResultComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/containerized-load/containerized-load.component.ts



























const _c0 = ["makeAppointmentContainer"];
function ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 10)(1, "defs");
    core/* ɵɵelement */._UZ(2, "style");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "g", 11);
    core/* ɵɵelement */._UZ(4, "path", 12)(5, "path", 13)(6, "path", 14);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(7, "span");
    core/* ɵɵi18n */.SDv(8, 15);
    core/* ɵɵelementEnd */.qZA();
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_2_ng_container_12_app_containerized_load_result_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-containerized-load-result", 25);
  }
  if (rf & 2) {
    const containerizedLoad_r1 = core/* ɵɵnextContext */.oxw(4).ngIf;
    core/* ɵɵproperty */.Q6J("data", containerizedLoad_r1.result)("vesselVisit", containerizedLoad_r1.vesselVisit);
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_2_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_2_ng_container_12_app_containerized_load_result_1_Template, 1, 2, "app-containerized-load-result", 24);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    core/* ɵɵnextContext */.oxw(2);
    const _r14 = core/* ɵɵreference */.MAs(4);
    const containerizedLoad_r1 = core/* ɵɵnextContext */.oxw().ngIf;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", containerizedLoad_r1.result.length)("ngIfElse", _r14);
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 16)(1, "h2", 17);
    core/* ɵɵi18n */.SDv(2, 18);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(3, "svg", 19)(4, "defs")(5, "style");
    core/* ɵɵtext */._uU(6, ".cls-1{fill:#c5c6c8;}.cls-2{fill:#7ba052;}.cls-3{fill:#4b8051;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(7, "g", 11);
    core/* ɵɵelement */._UZ(8, "rect", 20)(9, "rect", 21)(10, "rect", 22);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(11, "app-search", 23);
    core/* ɵɵlistener */.NdJ("submitSearch", function ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_2_Template_app_search_submitSearch_11_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r21);
      const ctx_r20 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r20.submit($event));
    })("cleanEmmiter", function ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_2_Template_app_search_cleanEmmiter_11_listener() {
      core/* ɵɵrestoreView */.CHM(_r21);
      const ctx_r22 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r22.clean());
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(12, ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_2_ng_container_12_Template, 2, 2, "ng-container", 0);
  }
  if (rf & 2) {
    const containerizedLoad_r1 = core/* ɵɵnextContext */.oxw(2).ngIf;
    core/* ɵɵadvance */.xp6(11);
    core/* ɵɵproperty */.Q6J("hasCleanButton", true);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", containerizedLoad_r1.result);
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "p", 26);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r24 = core/* ɵɵnextContext */.oxw(4);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r24.notFoundText);
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtemplate */.YNc(0, ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_3_ng_container_0_Template, 3, 1, "ng-container", 0);
  }
  if (rf & 2) {
    const containerizedLoad_r1 = core/* ɵɵnextContext */.oxw(2).ngIf;
    core/* ɵɵproperty */.Q6J("ngIf", containerizedLoad_r1.firstSearch);
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_1_Template, 9, 0, "ng-template", 7);
    core/* ɵɵtemplate */.YNc(2, ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_2_Template, 13, 2, "ng-template", 8);
    core/* ɵɵtemplate */.YNc(3, ContainerizedLoadComponent_ng_container_0_mat_tab_6_ng_template_3_Template, 1, 1, "ng-template", null, 9, core/* ɵɵtemplateRefExtractor */.W1O);
    core/* ɵɵelementEnd */.qZA();
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 28)(1, "defs");
    core/* ɵɵelement */._UZ(2, "style");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "g", 11);
    core/* ɵɵelement */._UZ(4, "path", 29)(5, "path", 30)(6, "path", 31);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(7, "span");
    core/* ɵɵi18n */.SDv(8, 32);
    core/* ɵɵelementEnd */.qZA();
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_2_ng_container_12_app_booking_load_result_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-booking-load-result", 25);
  }
  if (rf & 2) {
    const containerizedLoad_r1 = core/* ɵɵnextContext */.oxw(4).ngIf;
    core/* ɵɵproperty */.Q6J("data", containerizedLoad_r1.resultBooking)("vesselVisit", containerizedLoad_r1.vesselVisit);
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_2_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_2_ng_container_12_app_booking_load_result_1_Template, 1, 2, "app-booking-load-result", 24);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    core/* ɵɵnextContext */.oxw(2);
    const _r28 = core/* ɵɵreference */.MAs(4);
    const containerizedLoad_r1 = core/* ɵɵnextContext */.oxw().ngIf;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", containerizedLoad_r1.resultBooking.length)("ngIfElse", _r28);
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 16)(1, "h2", 17);
    core/* ɵɵi18n */.SDv(2, 33);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(3, "svg", 19)(4, "defs")(5, "style");
    core/* ɵɵtext */._uU(6, ".cls-1{fill:#c5c6c8;}.cls-2{fill:#7ba052;}.cls-3{fill:#4b8051;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(7, "g", 11);
    core/* ɵɵelement */._UZ(8, "rect", 20)(9, "rect", 21)(10, "rect", 22);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(11, "app-search", 34);
    core/* ɵɵlistener */.NdJ("submitSearch", function ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_2_Template_app_search_submitSearch_11_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r35);
      const ctx_r34 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r34.submitBooking($event));
    })("cleanEmmiter", function ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_2_Template_app_search_cleanEmmiter_11_listener() {
      core/* ɵɵrestoreView */.CHM(_r35);
      const ctx_r36 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r36.cleanBooking());
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(12, ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_2_ng_container_12_Template, 2, 2, "ng-container", 0);
  }
  if (rf & 2) {
    const containerizedLoad_r1 = core/* ɵɵnextContext */.oxw(2).ngIf;
    core/* ɵɵadvance */.xp6(11);
    core/* ɵɵproperty */.Q6J("hasCleanButton", true);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", containerizedLoad_r1.resultBooking);
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "p", 26);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r38 = core/* ɵɵnextContext */.oxw(4);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r38.notFoundTextB);
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtemplate */.YNc(0, ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_3_ng_container_0_Template, 3, 1, "ng-container", 0);
  }
  if (rf & 2) {
    const containerizedLoad_r1 = core/* ɵɵnextContext */.oxw(2).ngIf;
    core/* ɵɵproperty */.Q6J("ngIf", containerizedLoad_r1.firstSearch);
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_1_Template, 9, 0, "ng-template", 7);
    core/* ɵɵtemplate */.YNc(2, ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_2_Template, 13, 2, "ng-template", 8);
    core/* ɵɵtemplate */.YNc(3, ContainerizedLoadComponent_ng_container_0_mat_tab_7_ng_template_3_Template, 1, 1, "ng-template", null, 27, core/* ɵɵtemplateRefExtractor */.W1O);
    core/* ɵɵelementEnd */.qZA();
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_8_ng_template_1__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 40)(1, "g", 41);
    core/* ɵɵelement */._UZ(2, "path", 42)(3, "path", 43)(4, "path", 44)(5, "path", 45)(6, "path", 46)(7, "path", 47)(8, "path", 48)(9, "path", 49)(10, "path", 50)(11, "path", 51)(12, "path", 52);
    core/* ɵɵelementEnd */.qZA()();
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_8_ng_template_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 53)(1, "g", 54);
    core/* ɵɵelement */._UZ(2, "path", 55)(3, "path", 56)(4, "path", 57)(5, "path", 58)(6, "path", 59)(7, "path", 60)(8, "path", 61)(9, "path", 62)(10, "path", 63)(11, "path", 64)(12, "path", 65)(13, "path", 66);
    core/* ɵɵelementEnd */.qZA()();
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtemplate */.YNc(0, ContainerizedLoadComponent_ng_container_0_mat_tab_8_ng_template_1__svg_svg_0_Template, 13, 0, "svg", 38);
    core/* ɵɵtemplate */.YNc(1, ContainerizedLoadComponent_ng_container_0_mat_tab_8_ng_template_1__svg_svg_1_Template, 14, 0, "svg", 39);
    core/* ɵɵelementStart */.TgZ(2, "span");
    core/* ɵɵtext */._uU(3);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r40 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r40.titleTab == "Crear Cita");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r40.titleTab == "Editar Cita");
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r40.titleTab, " ");
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, ContainerizedLoadComponent_ng_container_0_mat_tab_8_ng_template_1_Template, 4, 3, "ng-template", 7);
    core/* ɵɵelementStart */.TgZ(2, "div", 16)(3, "h2", 17);
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(5, "svg", 35)(6, "defs")(7, "style");
    core/* ɵɵtext */._uU(8, ".cls-1{fill:#c5c6c8;}.cls-2{fill:#7ba052;}.cls-3{fill:#4b8051;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(9, "g", 11);
    core/* ɵɵelement */._UZ(10, "rect", 20)(11, "rect", 21)(12, "rect", 22);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementContainerStart */.ynx(13, 36);
    core/* ɵɵelement */._UZ(14, "app-vehicle-searcher", 37);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r4 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r4.titleTab, " ");
    core/* ɵɵadvance */.xp6(10);
    core/* ɵɵproperty */.Q6J("loadType", ctx_r4.loadType);
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(0, "svg", 73)(1, "g", 54);
    core/* ɵɵelement */._UZ(2, "path", 74)(3, "path", 75)(4, "path", 76)(5, "path", 77)(6, "path", 78)(7, "path", 79)(8, "path", 80);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementStart */.TgZ(9, "span");
    core/* ɵɵi18n */.SDv(10, 81);
    core/* ɵɵelementEnd */.qZA();
  }
}
function ContainerizedLoadComponent_ng_container_0_mat_tab_9_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-tab");
    core/* ɵɵtemplate */.YNc(1, ContainerizedLoadComponent_ng_container_0_mat_tab_9_ng_template_1_Template, 11, 0, "ng-template", 7);
    core/* ɵɵelementStart */.TgZ(2, "div", 16)(3, "h2", 17)(4, "span");
    core/* ɵɵi18n */.SDv(5, 67);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(6, "svg", 35)(7, "defs")(8, "style");
    core/* ɵɵtext */._uU(9, ".asc-1{fill:#c5c6c8;}.asc-2{fill:#7ba052;}.asc-3{fill:#4b8051;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(10, "g", 68);
    core/* ɵɵelement */._UZ(11, "rect", 69)(12, "rect", 70)(13, "rect", 71);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementContainerStart */.ynx(14, 72);
    core/* ɵɵelement */._UZ(15, "app-vehicle-searcher", 37);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    core/* ɵɵadvance */.xp6(15);
    core/* ɵɵproperty */.Q6J("loadType", "asc");
  }
}
const _c13 = function () {
  return ["/carga-contenerizada/documents"];
};
function ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 88);
    core/* ɵɵlistener */.NdJ("click", function ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_2_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r52);
      const ctx_r51 = core/* ɵɵnextContext */.oxw(4);
      return core/* ɵɵresetView */.KtG(ctx_r51.showContentEvent());
    });
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 89)(2, "g", 90);
    core/* ɵɵelement */._UZ(3, "path", 91)(4, "path", 92)(5, "path", 93)(6, "path", 94)(7, "path", 95)(8, "path", 96)(9, "path", 97)(10, "path", 98)(11, "path", 99)(12, "path", 100)(13, "path", 101)(14, "path", 102)(15, "path", 103)(16, "path", 104);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelement */._UZ(17, "div", 105);
    core/* ɵɵelementStart */.TgZ(18, "span");
    core/* ɵɵtext */._uU(19, "Documentaci\u00F3n");
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    core/* ɵɵproperty */.Q6J("routerLink", core/* ɵɵpureFunction0 */.DdM(1, _c13));
  }
}
function ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 106);
    core/* ɵɵlistener */.NdJ("click", function ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_3_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r54);
      const ctx_r53 = core/* ɵɵnextContext */.oxw(4);
      return core/* ɵɵresetView */.KtG(ctx_r53.showContentEvent());
    });
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 107)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".billing{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 11);
    core/* ɵɵelement */._UZ(6, "rect", 108)(7, "rect", 109)(8, "rect", 110)(9, "rect", 111)(10, "rect", 112)(11, "rect", 113)(12, "rect", 114)(13, "rect", 115)(14, "rect", 116)(15, "rect", 117)(16, "rect", 118)(17, "rect", 119)(18, "rect", 120)(19, "rect", 121)(20, "rect", 122)(21, "rect", 123)(22, "rect", 124)(23, "rect", 125)(24, "polyline", 126)(25, "polyline", 127);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelement */._UZ(26, "div", 105);
    core/* ɵɵelementStart */.TgZ(27, "span");
    core/* ɵɵtext */._uU(28, "Facturaci\u00F3n");
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r47 = core/* ɵɵnextContext */.oxw(4);
    core/* ɵɵproperty */.Q6J("hourRestriction", "CC_IMP_FAC")("hourRestrictionAPIGateway", ctx_r47.userInfo)("hourRestrictionCallback", ctx_r47.billing.bind(ctx_r47));
  }
}
function ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 128);
    core/* ɵɵlistener */.NdJ("click", function ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_4_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r56);
      const ctx_r55 = core/* ɵɵnextContext */.oxw(4);
      return core/* ɵɵresetView */.KtG(ctx_r55.showContentEvent());
    });
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 129)(2, "g", 130);
    core/* ɵɵelement */._UZ(3, "path", 131)(4, "path", 132)(5, "path", 133)(6, "path", 134)(7, "path", 135)(8, "path", 136)(9, "path", 137)(10, "path", 138)(11, "path", 139);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelement */._UZ(12, "div", 105);
    core/* ɵɵelementStart */.TgZ(13, "span");
    core/* ɵɵtext */._uU(14, "Generar Pin");
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const containerizedLoad_r1 = core/* ɵɵnextContext */.oxw(3).ngIf;
    const ctx_r48 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵproperty */.Q6J("hourRestriction", "CC_IMP_PIN")("hourRestrictionAPIGateway", ctx_r48.userInfo)("hourRestrictionCallback", ctx_r48.generatePin.bind(ctx_r48))("disabled", containerizedLoad_r1.operationStuck);
  }
}
function ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 140);
    core/* ɵɵlistener */.NdJ("click", function ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_5_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r59);
      const ctx_r58 = core/* ɵɵnextContext */.oxw(4);
      return core/* ɵɵresetView */.KtG(ctx_r58.showContentEvent());
    });
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 141)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".cls-1-lock{opacity:.69;}.cls-2-lock{fill:none;stroke:#f90613;stroke-miterlimit:10;stroke-width:5px;}.cls-3-lock{fill:#f90613;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 11)(6, "g", 142);
    core/* ɵɵelement */._UZ(7, "path", 143)(8, "path", 144);
    core/* ɵɵelementEnd */.qZA()()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelement */._UZ(9, "div", 105);
    core/* ɵɵelementStart */.TgZ(10, "span");
    core/* ɵɵi18n */.SDv(11, 145);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r49 = core/* ɵɵnextContext */.oxw(4);
    core/* ɵɵproperty */.Q6J("hourRestriction", "CC_CTA_BLOQ")("hourRestrictionAPIGateway", ctx_r49.userInfo)("hourRestrictionCallback", ctx_r49.blockUnit.bind(ctx_r49));
  }
}
function ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 146);
    core/* ɵɵlistener */.NdJ("click", function ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_6_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r61);
      const ctx_r60 = core/* ɵɵnextContext */.oxw(4);
      return core/* ɵɵresetView */.KtG(ctx_r60.showContentEvent());
    });
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 147)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".cls-1-unlock{fill:#1f5b29;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 11);
    core/* ɵɵelement */._UZ(6, "path", 148)(7, "path", 149);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelement */._UZ(8, "div", 105);
    core/* ɵɵelementStart */.TgZ(9, "span");
    core/* ɵɵi18n */.SDv(10, 150);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r50 = core/* ɵɵnextContext */.oxw(4);
    core/* ɵɵproperty */.Q6J("hourRestriction", "CC_CTA_DESBL")("hourRestrictionAPIGateway", ctx_r50.userInfo)("hourRestrictionCallback", ctx_r50.unlockUnit.bind(ctx_r50));
  }
}
const _c18 = function (a0) {
  return [a0];
};
function ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0)(1);
    core/* ɵɵtemplate */.YNc(2, ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_2_Template, 20, 2, "button", 83);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵtemplate */.YNc(3, ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_3_Template, 29, 3, "button", 84);
    core/* ɵɵtemplate */.YNc(4, ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_4_Template, 15, 4, "button", 85);
    core/* ɵɵtemplate */.YNc(5, ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_5_Template, 12, 3, "button", 86);
    core/* ɵɵtemplate */.YNc(6, ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_button_6_Template, 11, 3, "button", 87);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r45 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(5, _c18, ctx_r45.privileges.CC_IMP_DOC));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(7, _c18, ctx_r45.privileges.CC_IMP_FAC));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(9, _c18, ctx_r45.privileges.CC_IMP_PIN));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(11, _c18, ctx_r45.privileges.CC_CTA_BLOQ));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(13, _c18, ctx_r45.privileges.CC_CTA_DESBL));
  }
}
function ContainerizedLoadComponent_ng_container_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 82);
    core/* ɵɵtemplate */.YNc(2, ContainerizedLoadComponent_ng_container_0_ng_container_11_ng_container_2_Template, 7, 15, "ng-container", 0);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r6 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r6.isImport);
  }
}
function ContainerizedLoadComponent_ng_container_0_ng_container_12_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 106);
    core/* ɵɵlistener */.NdJ("click", function ContainerizedLoadComponent_ng_container_0_ng_container_12_ng_container_1_button_1_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r66);
      const ctx_r65 = core/* ɵɵnextContext */.oxw(4);
      return core/* ɵɵresetView */.KtG(ctx_r65.showContentEvent());
    });
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 151)(2, "defs")(3, "style");
    core/* ɵɵtext */._uU(4, ".billing{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(5, "g", 11);
    core/* ɵɵelement */._UZ(6, "rect", 108)(7, "rect", 109)(8, "rect", 110)(9, "rect", 111)(10, "rect", 112)(11, "rect", 113)(12, "rect", 114)(13, "rect", 115)(14, "rect", 116)(15, "rect", 117)(16, "rect", 118)(17, "rect", 119)(18, "rect", 120)(19, "rect", 121)(20, "rect", 122)(21, "rect", 123)(22, "rect", 124)(23, "rect", 125)(24, "polyline", 126)(25, "polyline", 127);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelement */._UZ(26, "div", 105);
    core/* ɵɵelementStart */.TgZ(27, "span");
    core/* ɵɵtext */._uU(28, "Facturaci\u00F3n");
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r64 = core/* ɵɵnextContext */.oxw(4);
    core/* ɵɵproperty */.Q6J("hourRestriction", "CC_EXP_FAC")("hourRestrictionAPIGateway", ctx_r64.userInfo)("hourRestrictionCallback", ctx_r64.bookingBilling.bind(ctx_r64));
  }
}
function ContainerizedLoadComponent_ng_container_0_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, ContainerizedLoadComponent_ng_container_0_ng_container_12_ng_container_1_button_1_Template, 29, 3, "button", 84);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r62 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(1, _c18, ctx_r62.privileges.CC_EXP_FAC));
  }
}
function ContainerizedLoadComponent_ng_container_0_ng_container_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelement */._UZ(1, "app-invoice-management", 152);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const containerizedLoad_r1 = core/* ɵɵnextContext */.oxw(2).ngIf;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("invoice", containerizedLoad_r1.selectedInvoice);
  }
}
function ContainerizedLoadComponent_ng_container_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, ContainerizedLoadComponent_ng_container_0_ng_container_12_ng_container_1_Template, 2, 3, "ng-container", 0);
    core/* ɵɵtemplate */.YNc(2, ContainerizedLoadComponent_ng_container_0_ng_container_12_ng_container_2_Template, 2, 1, "ng-container", 0);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const containerizedLoad_r1 = core/* ɵɵnextContext */.oxw().ngIf;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", containerizedLoad_r1.resultBooking.length);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", containerizedLoad_r1.selectedInvoice);
  }
}
function ContainerizedLoadComponent_ng_container_0_ng_template_13_Template(rf, ctx) {}
function ContainerizedLoadComponent_ng_container_0_ng_container_15_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "button", 154);
    core/* ɵɵlistener */.NdJ("click", function ContainerizedLoadComponent_ng_container_0_ng_container_15_button_24_Template_button_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r71);
      const ctx_r70 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r70.navigateToAssociateContainer());
    });
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(1, "svg", 89)(2, "g", 90);
    core/* ɵɵelement */._UZ(3, "path", 91)(4, "path", 92)(5, "path", 93)(6, "path", 94)(7, "path", 95)(8, "path", 96)(9, "path", 97)(10, "path", 98)(11, "path", 99)(12, "path", 100)(13, "path", 101)(14, "path", 102)(15, "path", 103)(16, "path", 104);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelement */._UZ(17, "div", 105);
    core/* ɵɵelementStart */.TgZ(18, "span");
    core/* ɵɵtext */._uU(19, " Asociar Contenedor ");
    core/* ɵɵelementEnd */.qZA()();
  }
}
function ContainerizedLoadComponent_ng_container_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 82);
    core/* ɵɵelementContainerStart */.ynx(2);
    core/* ɵɵelementStart */.TgZ(3, "button", 88);
    core/* ɵɵlistener */.NdJ("click", function ContainerizedLoadComponent_ng_container_0_ng_container_15_Template_button_click_3_listener() {
      core/* ɵɵrestoreView */.CHM(_r73);
      const ctx_r72 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r72.navigateToDocumentationContainer());
    });
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(4, "svg", 89)(5, "g", 90);
    core/* ɵɵelement */._UZ(6, "path", 91)(7, "path", 92)(8, "path", 93)(9, "path", 94)(10, "path", 95)(11, "path", 96)(12, "path", 97)(13, "path", 98)(14, "path", 99)(15, "path", 100)(16, "path", 101)(17, "path", 102)(18, "path", 103)(19, "path", 104);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelement */._UZ(20, "div", 105);
    core/* ɵɵelementStart */.TgZ(21, "span");
    core/* ɵɵtext */._uU(22, "Documentaci\u00F3n");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(23);
    core/* ɵɵtemplate */.YNc(24, ContainerizedLoadComponent_ng_container_0_ng_container_15_button_24_Template, 20, 0, "button", 153);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r10 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(24);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(1, _c18, ctx_r10.privileges.CC_EXP_BAS));
  }
}
function ContainerizedLoadComponent_ng_container_0_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelement */._UZ(1, "router-outlet");
    core/* ɵɵelementContainerEnd */.BQk();
  }
}
function ContainerizedLoadComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 1)(2, "div", 2)(3, "mat-card")(4, "mat-card-content")(5, "mat-tab-group", 3);
    core/* ɵɵlistener */.NdJ("selectedTabChange", function ContainerizedLoadComponent_ng_container_0_Template_mat_tab_group_selectedTabChange_5_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r75);
      const ctx_r74 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r74.onTabChanged($event));
    });
    core/* ɵɵtemplate */.YNc(6, ContainerizedLoadComponent_ng_container_0_mat_tab_6_Template, 5, 0, "mat-tab", 4);
    core/* ɵɵtemplate */.YNc(7, ContainerizedLoadComponent_ng_container_0_mat_tab_7_Template, 5, 0, "mat-tab", 4);
    core/* ɵɵtemplate */.YNc(8, ContainerizedLoadComponent_ng_container_0_mat_tab_8_Template, 15, 2, "mat-tab", 0);
    core/* ɵɵtemplate */.YNc(9, ContainerizedLoadComponent_ng_container_0_mat_tab_9_Template, 16, 1, "mat-tab", 0);
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(10, "div", 5);
    core/* ɵɵtemplate */.YNc(11, ContainerizedLoadComponent_ng_container_0_ng_container_11_Template, 3, 1, "ng-container", 0);
    core/* ɵɵtemplate */.YNc(12, ContainerizedLoadComponent_ng_container_0_ng_container_12_Template, 3, 2, "ng-container", 0);
    core/* ɵɵtemplate */.YNc(13, ContainerizedLoadComponent_ng_container_0_ng_template_13_Template, 0, 0, "ng-template", null, 6, core/* ɵɵtemplateRefExtractor */.W1O);
    core/* ɵɵtemplate */.YNc(15, ContainerizedLoadComponent_ng_container_0_ng_container_15_Template, 25, 3, "ng-container", 0);
    core/* ɵɵtemplate */.YNc(16, ContainerizedLoadComponent_ng_container_0_ng_container_16_Template, 2, 0, "ng-container", 0);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const containerizedLoad_r1 = ctx.ngIf;
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(6);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(8, _c18, ctx_r0.privileges.CC_IMP_BUS));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("permissions", core/* ɵɵpureFunction1 */.VKq(10, _c18, ctx_r0.privileges.CC_EXP_BUS));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.verModuloCitas);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.viewModuleAsociateContainer);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", containerizedLoad_r1.result[0]);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r0.isImport);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.showButtonsAsociateContainer);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.showContent);
  }
}
let ContainerizedLoadComponent = /*#__PURE__*/(() => {
  class ContainerizedLoadComponent {
    constructor(matDialog, base64EncryptionUtilService, store, router, communicationService, storageService, resolver, notificationsPortalService) {
      this.matDialog = matDialog;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.store = store;
      this.router = router;
      this.communicationService = communicationService;
      this.storageService = storageService;
      this.resolver = resolver;
      this.notificationsPortalService = notificationsPortalService;
      this.destroy$ = new Subject/* Subject */.x();
      this.recentBL = "";
      this.notFoundText = "";
      this.notFoundTextB = "";
      this.privileges = privileges_enum/* privileges */.U;
      this.firstSearch = false;
      this.isImport = true;
      this.showContent = false;
      this.containerizedLoadStore = new internal_Observable/* Observable */.y();
      this.loadType = "cc";
      this.verModuloCitas = false;
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
      this.viewModuleAsociateContainer = false;
      this.showButtonsAsociateContainer = false;
      this.origin = "";
      this.isStorageData = false;
      this.siteAppointment = "";
      this.tabPrivilegesAgent = ['CC_IMP_BUS', 'CC_EXP_BUS'];
      this.tabPrivilegesTruck = ['CC_CIT_BUS', 'CC_EXP_BAS'];
    }
    ngOnInit() {
      this.containerizedLoadStore = this.store.select(containerized_load_selectors/* containerizedLoadFeatureSelector */.qO);
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      //this.notificationsPortalService.getNotificationByPrivileges("CC_EXP_ASO");
      this.notificationsPortalService.getNotificationByPrivileges(this.tabPrivilegesTruck[0]);
      this.notificationsPortalService.getNotificationByPrivileges(this.tabPrivilegesAgent[0]);
      if (this.hasPermission(this.privileges.CC_CIT_BUS)) {
        this.verModuloCitas = true;
        this.titleTab = "Crear Cita";
        let entryInStorage = false;
        const storageData = this.storageService.getData();
        this.storageSubscription = this.storageService.getStorageChanges().subscribe(action => {
          entryInStorage = true;
          if (action.action === 'setContenedorType') {
            this.showMakeAppointment = true;
            this.siteAppointment = action.siteAppointment;
            this.showMakeAppointmentComponent();
          }
          if (action.action === 'showAppointmentCard' && action.value === true) {
            this.showContent = true;
            this.showMakeAppointment = false;
          }
          if (action.action === 'appointmentWasCreated') {
            this.showContent = true;
            this.showMakeAppointment = false;
            this.titleTab = "Crear Cita";
            this.makeAppointmentRef?.destroy();
            this.makeAppointmentRef = null;
          }
          if (action.action === 'cleanValidationPin') {
            this.showMakeAppointment = false;
          }
          if (action.action === 'viewEditAppointmentCC') {
            this.showContent = true;
            this.titleTab = "Editar Cita";
            this.showMakeAppointment = true;
            this.showMakeAppointmentComponent(true);
          }
          if (action.action === 'continueOperation') {
            this.titleTab = "Crear Cita";
            this.hideMakeAppointment();
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
          }
        }
      }
      if (this.hasPermission(this.privileges.CC_EXP_BAS)) {
        this.viewModuleAsociateContainer = true;
        this.storageSubscription = this.storageService.getStorageChanges().subscribe(action => {
          let entryInStorage = false;
          entryInStorage = true;
          if (action.action === 'setBooking') {
            this.showButtonsAsociateContainer = true;
          }
          if (action.action === 'cleanValidationPin') {
            this.showButtonsAsociateContainer = false;
            this.showContent = false;
          }
          if (action.action === 'cleanAssociateContainerForm') {
            this.showButtonsAsociateContainer = false;
          }
          if (action.action === 'deleteContainer') {
            this.showButtonsAsociateContainer = false;
          }
        });
      }
    }
    showMakeAppointmentComponent(destroy = false) {
      // Destruye el componente si ya existe
      if (this.makeAppointmentRef && !destroy) {
        return;
      }
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
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
      this.store.dispatch((0,containerized_load_actions/* cleanContainerizedLoad */.it)());
      this.storageService.clearStorageValidationPin();
      this.store.dispatch((0,shared_actions/* cleanSharedLoad */.zr)());
    }
    //metodo para que cuando se cambie de tab se cambie el valor de isImport
    onTabChanged(event) {
      this.showContent = false;
      this.store.dispatch((0,containerized_load_actions/* cleanContainerizedLoad */.it)());
      this.router.navigate(["/", "carga-contenerizada"]);
      this.notificationsPortalService.getNotificationByPrivileges(this.tabPrivilegesTruck[event.index]);
      this.notificationsPortalService.getNotificationByPrivileges(this.tabPrivilegesAgent[event.index]);
      if (event.index === 1) {
        this.isImport = false;
      } else {
        this.isImport = true;
      }
      //transporte
      this.storageService.clearStorageValidationPin();
      //this.storageService
    }

    showContentEvent() {
      this.showContent = true;
    }
    submit(value) {
      this.showContent = true;
      this.router.navigate(["/", "carga-contenerizada"]);
      this.communicationService.updateVerificacion(0);
      this.recentBL = value;
      this.notFoundText = "No se encontraron resultados para " + this.recentBL + "";
      this.store.dispatch((0,containerized_load_actions/* getContainerizedLoad */.M8)({
        nbr: this.base64EncryptionUtilService.encrypt(value)
      }));
    }
    clean() {
      this.store.dispatch((0,containerized_load_actions/* cleanContainerizedLoad */.it)());
      this.router.navigate(["/", "carga-contenerizada"]);
    }
    submitBooking(value) {
      this.showContent = true;
      this.router.navigate(["/", "carga-contenerizada"]);
      this.recentBL = value;
      this.notFoundTextB = "No se encontraron resultados para " + this.recentBL + "";
      this.store.dispatch((0,containerized_load_actions/* getBooking */.lx)({
        nbr: this.base64EncryptionUtilService.encrypt(value)
      }));
    }
    cleanBooking() {
      this.store.dispatch((0,containerized_load_actions/* cleanBooking */.wG)());
      this.router.navigate(["/", "carga-contenerizada"]);
    }
    lockState(results) {
      return !results.filter(value => value.hasHoldConsignee && !value.holdConsigneeActive).length;
    }
    unlockState(results) {
      if (results.filter(value => value.holdConsigneeActive && value.truck_visit_appt_nbr).length) return false;else return true;
    }
    billing() {
      this.router.navigate(['/', 'carga-contenerizada', 'billing']);
    }
    bookingBilling() {
      this.router.navigate(['/', 'carga-contenerizada', 'export', 'billing']);
    }
    blockUnit() {
      this.router.navigate(['/', 'carga-contenerizada', 'lock']);
    }
    unlockUnit() {
      this.router.navigate(['/', 'carga-contenerizada', 'unlock']);
    }
    generatePin() {
      this.router.navigate(['/', 'carga-contenerizada', 'generar-pin']);
    }
    click(emptyIncome) {
      this.matDialog.open(shifts_available_dialog_component/* ShiftsAvailableDialogComponent */.a, {
        width: "45.313rem",
        data: {
          emptyIncome
        }
      });
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
    navigateToAssociateContainer() {
      this.showContent = true;
      this.storageService.setAsoaciateContainer(true);
      this.router.navigate(['/', 'carga-contenerizada', 'associate-container']);
    }
    navigateToDisassociateContainer() {
      this.showContent = true;
      this.storageService.setDisassociateContainer(true);
      this.router.navigate(['/', 'carga-contenerizada', 'disassociate-container']);
    }
    navigateToDocumentationContainer() {
      this.showContent = true;
      this.storageService.setNavigateToContainerDocumentation(true);
      this.store.dispatch((0,containerized_load_actions/* setDocumentationContainer */.dG)({
        documentationContainer: {
          show: true,
          nbr: this.recentBL
        }
      }));
      this.router.navigate(['/', 'carga-contenerizada', 'documents']);
    }
    ngAfterViewInit() {
      if (this.isStorageData) {
        this.showMakeAppointment = true;
        this.isStorageData = false;
        this.showMakeAppointmentComponent(true);
      }
    }
  }
  ContainerizedLoadComponent.ɵfac = function ContainerizedLoadComponent_Factory(t) {
    return new (t || ContainerizedLoadComponent)(core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(communication_service/* CommunicationService */.O), core/* ɵɵdirectiveInject */.Y36(storageservice_service/* StorageserviceService */.S), core/* ɵɵdirectiveInject */.Y36(core/* ComponentFactoryResolver */._Vd), core/* ɵɵdirectiveInject */.Y36(notifications_service/* NotificationsService */.T));
  };
  ContainerizedLoadComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ContainerizedLoadComponent,
    selectors: [["app-containerized-load"]],
    viewQuery: function ContainerizedLoadComponent_Query(rf, ctx) {
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
        const MSG_EXTERNAL_98bc28abe8dd7081c95b208679b16bec807065183df676a47ae47277f5c16474$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS____2 = goog.getMsg(" agent.views.agent-import-search.TITLE ");
        i18n_1 = MSG_EXTERNAL_98bc28abe8dd7081c95b208679b16bec807065183df676a47ae47277f5c16474$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS____2;
      } else {
        i18n_1 = "Importaci\xF3n";
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_98bc28abe8dd7081c95b208679b16bec807065183df676a47ae47277f5c16474$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS____4 = goog.getMsg(" agent.views.agent-import-search.TITLE ");
        i18n_3 = MSG_EXTERNAL_98bc28abe8dd7081c95b208679b16bec807065183df676a47ae47277f5c16474$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS____4;
      } else {
        i18n_3 = "Importaci\xF3n";
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8f726b4d2a7b029065faa0403a1ae75bbd5a377696da7cb4482684eb65a27a8b$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS____6 = goog.getMsg(" export.views.export-search.PAGE_HEADER ");
        i18n_5 = MSG_EXTERNAL_8f726b4d2a7b029065faa0403a1ae75bbd5a377696da7cb4482684eb65a27a8b$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS____6;
      } else {
        i18n_5 = "Exportaci\xF3n";
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8f726b4d2a7b029065faa0403a1ae75bbd5a377696da7cb4482684eb65a27a8b$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS____8 = goog.getMsg(" export.views.export-search.PAGE_HEADER ");
        i18n_7 = MSG_EXTERNAL_8f726b4d2a7b029065faa0403a1ae75bbd5a377696da7cb4482684eb65a27a8b$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS____8;
      } else {
        i18n_7 = "Exportaci\xF3n";
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_eb25635b4841c0e1a407920f012e19977d22c286578a560357acfba8cd13b637$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS___10 = goog.getMsg(" sidebar.TRUCK_EXPORT ");
        i18n_9 = MSG_EXTERNAL_eb25635b4841c0e1a407920f012e19977d22c286578a560357acfba8cd13b637$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS___10;
      } else {
        i18n_9 = "Asociar Contenedor";
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_eb25635b4841c0e1a407920f012e19977d22c286578a560357acfba8cd13b637$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS____12 = goog.getMsg(" sidebar.TRUCK_EXPORT ");
        i18n_11 = MSG_EXTERNAL_eb25635b4841c0e1a407920f012e19977d22c286578a560357acfba8cd13b637$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS____12;
      } else {
        i18n_11 = "Asociar Contenedor";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_a5d527e51193d4a2cfa1829e0a664a18063d2b719a8af16e05b63e43413b43fa$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS_____15 = goog.getMsg(" agent.views.agent-import-actions.CC_CTA_BLOQ ");
        i18n_14 = MSG_EXTERNAL_a5d527e51193d4a2cfa1829e0a664a18063d2b719a8af16e05b63e43413b43fa$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS_____15;
      } else {
        i18n_14 = "Bloquear";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9ea0ee84e2462a81760959639dc89e759fc1b95030038f8ae069f88f81dbf2a1$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS_____17 = goog.getMsg(" agent.views.agent-import-actions.CC_CTA_DESBL ");
        i18n_16 = MSG_EXTERNAL_9ea0ee84e2462a81760959639dc89e759fc1b95030038f8ae069f88f81dbf2a1$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_CONTAINERIZED_LOAD_CONTAINERIZED_LOAD_COMPONENT_TS_____17;
      } else {
        i18n_16 = "Desbloquear";
      }
      return [[4, "ngIf"], [1, "containerized-load"], [1, "main-panel"], ["mat-stretch-tabs", "false", "mat-align-tabs", "start", 3, "selectedTabChange"], [4, "permissions"], [1, "secondary-panel"], ["makeAppointmentContainer", ""], ["mat-tab-label", ""], ["matTabContent", ""], ["resultFallback", ""], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 70.83 76.22", 1, "containerized-load__tab-icon"], ["id", "Capa_1-2"], ["d", "m0,56.89v16.69c0,1.46,1.18,2.64,2.64,2.64h65.55c1.46,0,2.64-1.19,2.64-2.64v-16.69c0-1.46-1.19-2.64-2.64-2.64h-6.45c-1.45,0-2.64,1.19-2.64,2.64v7.58H11.73v-7.58c0-1.46-1.18-2.64-2.64-2.64H2.64c-1.46,0-2.64,1.19-2.64,2.64Zm3.19.55h5.35v8.63c0,.88.71,1.59,1.6,1.59h50.56c.88,0,1.6-.71,1.6-1.59v-8.63h5.35v15.59H3.19v-15.59Z", 1, "cls-1"], ["d", "m25.3,11.13h20.24c1.55,0,2.82-1.26,2.82-2.82V2.82c0-1.55-1.26-2.82-2.82-2.82h-20.24c-1.55,0-2.82,1.26-2.82,2.82v5.5c0,1.55,1.26,2.82,2.82,2.82Zm.38-7.94h19.49v4.75h-19.49V3.19Z", 1, "cls-1"], ["d", "m22.32,26.29h-10.34c-1.7,0-3.18.82-3.77,2.09-.46,1.01-.3,2.13.45,3.01l11.72,13.74h0l11.72,13.74c.75.88,1.96,1.38,3.31,1.38h0c1.36,0,2.57-.5,3.32-1.38l23.44-27.48c.75-.88.92-2.01.45-3.01-.59-1.27-2.06-2.09-3.77-2.09h-10.7v-9.75c0-1.46-1.18-2.64-2.64-2.64h-20.57c-1.45,0-2.64,1.19-2.64,2.64v9.75Zm1.59,3.19c.88,0,1.6-.71,1.6-1.6v-10.8h19.47v10.8c0,.88.72,1.6,1.6,1.6h12.29c.28,0,.5.05.65.11l-23.2,27.2c-.09.11-.43.26-.89.26h0c-.46,0-.8-.15-.89-.26l-11.72-13.74h0l-11.48-13.46c.15-.06.37-.11.65-.11h11.94Z", 1, "cls-1"], i18n_1, [1, "title-card"], [1, "card-title"], i18n_3, ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 83.36 1.91", 1, "welcome__line"], ["width", "31.37", "height", "1.91", 1, "cls-2"], ["x", "26.13", "width", "28.61", "height", "1.91", 1, "cls-3"], ["x", "54.74", "width", "28.61", "height", "1.91", 1, "cls-1"], ["inputPlaceholder", "Buscar por BL \u00F3 Contenedor", "indication", "(Ingrese Contenedor \u00F3 BL y luego presione enter)", 3, "hasCleanButton", "submitSearch", "cleanEmmiter"], [3, "data", "vesselVisit", 4, "ngIf", "ngIfElse"], [3, "data", "vesselVisit"], [1, "not-found"], ["commonFallback", ""], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 77.53 83.42", 1, "containerized-load__tab-icon"], ["d", "m77.53,21.16V2.89c0-1.59-1.3-2.89-2.89-2.89H2.89C1.3,0,0,1.3,0,2.89v18.26c0,1.59,1.3,2.89,2.89,2.89h7.06c1.59,0,2.89-1.3,2.89-2.89v-8.29h51.84v8.29c0,1.59,1.3,2.89,2.89,2.89h7.06c1.59,0,2.89-1.3,2.89-2.89Zm-3.49-.6h-5.86v-9.44c0-.96-.78-1.75-1.75-1.75H11.1c-.97,0-1.75.78-1.75,1.75v9.44H3.49V3.49h70.54v17.06Z", 1, "cls-1"], ["d", "m49.84,71.24h-22.16c-1.7,0-3.08,1.38-3.08,3.08v6.02c0,1.7,1.38,3.08,3.08,3.08h22.16c1.7,0,3.08-1.38,3.08-3.08v-6.02c0-1.7-1.38-3.08-3.08-3.08Zm-.41,8.69h-21.33v-5.2h21.33v5.2Z", 1, "cls-1"], ["d", "m53.1,54.65h11.32c1.87,0,3.49-.9,4.13-2.28.51-1.1.32-2.33-.5-3.3l-12.83-15.04h0l-12.83-15.04c-.82-.96-2.14-1.51-3.63-1.51h0c-1.49,0-2.81.55-3.63,1.51l-25.66,30.08c-.82.96-1,2.2-.5,3.3.64,1.39,2.26,2.28,4.13,2.28h11.71v10.67c0,1.6,1.29,2.89,2.89,2.89h22.52c1.59,0,2.89-1.3,2.89-2.89v-10.67Zm-1.75-3.49c-.96,0-1.75.78-1.75,1.75v11.82h-21.31v-11.82c0-.96-.78-1.75-1.75-1.75h-13.45c-.3,0-.55-.06-.71-.13l25.4-29.77c.1-.12.47-.29.98-.29h0c.5,0,.87.17.97.28l12.83,15.04h0l12.57,14.73c-.17.07-.41.13-.71.13h-13.07Z", 1, "cls-1"], i18n_5, i18n_7, ["inputPlaceholder", "Buscar por un Booking", "indication", "(Ingrese Booking y luego presione enter)", 3, "hasCleanButton", "submitSearch", "cleanEmmiter"], ["id", "crear_cita_cc", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 83.36 1.91", 1, "welcome__line"], [1, "div-crear-cita"], [3, "loadType"], ["id", "cita_cc", "class", "containerized-load__tab-icon", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 517.000000 519.000000", "preserveAspectRatio", "xMidYMid meet", 4, "ngIf"], ["id", "cita_cc_edit", "class", "containerized-load__tab-icon", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 4, "ngIf"], ["id", "cita_cc", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 517.000000 519.000000", "preserveAspectRatio", "xMidYMid meet", 1, "containerized-load__tab-icon"], ["transform", "translate(0.000000,519.000000) scale(0.100000,-0.100000)", "fill", "#000000", "stroke", "none"], ["d", "M800 5017 c-49 -16 -133 -102 -148 -153 -7 -23 -12 -67 -12 -98 l0 -56 -136 0 c-78 0 -154 -5 -178 -12 -55 -16 -138 -99 -154 -154 -17 -60 -17 -3448 0 -3508 16 -55 99 -138 154 -154 31 -9 220 -12 738 -12 l696 0 0 -175 c0 -173 0 -176 25 -200 l24 -25 220 0 220 0 24 -53 c30 -66 81 -118 150 -154 45 -24 64 -28 137 -28 78 0 90 3 148 34 68 37 111 84 143 155 l20 46 489 0 489 0 24 -53 c30 -66 81 -118 150 -154 45 -24 64 -28 137 -28 78 0 90 3 148 34 68 37 111 84 143 155 l20 46 220 0 220 0 24 25 25 24 0 386 c0 221 -4 394 -9 404 -14 25 -283 201 -308 201 -18 0 -25 19 -67 186 -26 102 -58 208 -72 235 -32 64 -86 123 -141 156 l-43 25 0 1195 c0 910 -3 1206 -12 1237 -16 55 -99 138 -154 154 -24 7 -100 12 -178 12 l-136 0 0 56 c0 87 -18 133 -75 189 -63 64 -100 75 -245 75 -145 0 -182 -11 -245 -75 -57 -56 -75 -102 -75 -189 l0 -56 -960 0 -960 0 0 56 c0 31 -5 75 -12 98 -16 55 -99 138 -154 154 -51 15 -266 14 -314 -1z m295 -172 c24 -23 25 -28 25 -175 0 -147 -1 -152 -25 -175 -23 -24 -31 -25 -135 -25 -104 0 -112 1 -135 25 -24 23 -25 28 -25 175 0 147 1 152 25 175 23 24 31 25 135 25 104 0 112 -1 135 -25z m2560 0 c24 -23 25 -28 25 -175 0 -147 -1 -152 -25 -175 -23 -24 -31 -25 -135 -25 -104 0 -112 1 -135 25 -24 23 -25 28 -25 175 0 147 1 152 25 175 23 24 31 25 135 25 104 0 112 -1 135 -25z m-3015 -311 c0 -77 88 -189 166 -212 23 -7 92 -12 154 -12 62 0 131 5 154 12 78 23 166 135 166 212 0 15 78 16 960 16 882 0 960 -1 960 -16 0 -77 88 -189 166 -212 53 -16 255 -16 308 0 78 23 166 135 166 212 0 14 17 16 135 16 131 0 137 -1 160 -25 25 -24 25 -27 25 -200 l0 -175 -1920 0 -1920 0 0 175 c0 173 0 176 25 200 23 24 29 25 160 25 118 0 135 -2 135 -16z m3520 -1464 l0 -920 -160 0 -160 0 0 135 c0 131 -1 137 -25 160 -13 14 -31 25 -40 25 -13 0 -15 20 -15 135 0 156 -9 188 -66 231 -37 29 -38 29 -200 32 -185 4 -214 -4 -262 -66 -26 -34 -27 -40 -30 -184 l-3 -148 -160 0 -159 0 0 135 c0 156 -9 188 -66 231 -37 29 -38 29 -200 32 -185 4 -214 -4 -262 -66 -26 -34 -27 -40 -30 -184 l-3 -148 -160 0 -159 0 0 135 c0 156 -9 188 -66 231 l-37 29 -177 0 c-176 0 -177 0 -212 -27 -62 -48 -70 -77 -66 -262 3 -162 3 -163 32 -200 40 -53 78 -66 191 -66 l95 0 0 -199 0 -199 -108 -4 c-100 -3 -111 -5 -144 -30 -62 -48 -70 -77 -66 -262 3 -162 3 -163 32 -200 40 -53 78 -66 191 -66 l95 0 0 -160 0 -160 -695 0 -696 0 -24 25 -25 24 0 1456 0 1455 1920 0 1920 0 0 -920z m-2320 -480 l0 -120 -120 0 -120 0 0 120 0 120 120 0 120 0 0 -120z m880 0 l0 -120 -120 0 -120 0 0 120 0 120 120 0 120 0 0 -120z m880 0 l0 -120 -120 0 -120 0 0 120 0 120 120 0 120 0 0 -120z m80 -960 l0 -680 -880 0 -880 0 0 680 0 680 880 0 880 0 0 -680z m542 348 c41 -12 120 -75 139 -110 6 -11 30 -96 54 -189 l43 -169 -309 0 -309 0 0 240 0 240 171 0 c103 0 187 -5 211 -12z m-2462 -348 l0 -120 -80 0 -80 0 0 120 0 120 80 0 80 0 0 -120z m2947 -341 l93 -62 0 -138 0 -139 -480 0 -480 0 0 200 0 200 387 0 387 0 93 -61z m-2383 -526 c-14 -16 -37 -52 -51 -80 l-24 -53 -165 0 -164 0 0 80 0 80 215 0 216 0 -27 -27z m1600 0 c-14 -16 -37 -52 -51 -80 l-24 -53 -489 0 -489 0 -21 47 c-12 26 -29 57 -39 68 -10 11 -21 26 -25 33 -6 9 113 12 579 12 l586 0 -27 -27z m876 -53 l0 -80 -165 0 -164 0 -21 47 c-12 26 -29 57 -39 68 -41 46 -44 45 178 45 l211 0 0 -80z m-2177 -14 c103 -43 128 -177 48 -257 -65 -65 -157 -65 -222 0 -124 123 13 325 174 257z m1600 0 c103 -43 128 -177 48 -257 -65 -65 -157 -65 -222 0 -124 123 13 325 174 257z"], ["d", "M655 3816 c-41 -18 -83 -69 -90 -109 -4 -18 -5 -101 -3 -184 3 -165 8 -180 72 -227 25 -19 41 -21 206 -21 165 0 181 2 206 21 67 49 69 58 69 254 0 165 -2 181 -21 206 -48 65 -60 69 -242 71 -124 2 -175 -1 -197 -11z m305 -266 l0 -120 -120 0 -120 0 0 120 0 120 120 0 120 0 0 -120z"], ["d", "M1535 3816 c-41 -18 -83 -69 -90 -109 -4 -18 -5 -101 -3 -184 3 -165 8 -180 72 -227 25 -19 41 -21 206 -21 196 0 205 2 254 69 19 25 21 41 21 206 0 165 -2 181 -21 206 -48 65 -60 69 -242 71 -124 2 -175 -1 -197 -11z m305 -266 l0 -120 -120 0 -120 0 0 120 0 120 120 0 120 0 0 -120z"], ["d", "M2415 3816 c-41 -18 -83 -69 -90 -109 -4 -18 -5 -101 -3 -184 3 -165 8 -180 72 -227 25 -19 41 -21 206 -21 196 0 205 2 254 69 19 25 21 41 21 206 0 165 -2 181 -21 206 -48 65 -60 69 -242 71 -124 2 -175 -1 -197 -11z m305 -266 l0 -120 -120 0 -120 0 0 120 0 120 120 0 120 0 0 -120z"], ["d", "M3295 3816 c-41 -18 -83 -69 -90 -109 -4 -18 -5 -101 -3 -184 3 -165 8 -180 72 -227 25 -19 41 -21 206 -21 165 0 181 2 206 21 67 49 69 58 69 254 0 165 -2 181 -21 206 -48 65 -60 69 -242 71 -124 2 -175 -1 -197 -11z m305 -266 l0 -120 -120 0 -120 0 0 120 0 120 120 0 120 0 0 -120z"], ["d", "M655 2856 c-41 -18 -83 -69 -90 -109 -4 -18 -5 -101 -3 -184 3 -165 8 -180 72 -227 25 -19 41 -21 206 -21 196 0 205 2 254 69 19 25 21 41 21 206 0 165 -2 181 -21 206 -48 65 -60 69 -242 71 -124 2 -175 -1 -197 -11z m305 -266 l0 -120 -120 0 -120 0 0 120 0 120 120 0 120 0 0 -120z"], ["d", "M655 1896 c-41 -18 -83 -69 -90 -109 -4 -18 -5 -101 -3 -184 3 -165 8 -180 72 -227 25 -19 41 -21 206 -21 196 0 205 2 254 69 19 25 21 41 21 206 0 165 -2 181 -21 206 -48 65 -60 69 -242 71 -124 2 -175 -1 -197 -11z m305 -266 l0 -120 -120 0 -120 0 0 120 0 120 120 0 120 0 0 -120z"], ["d", "M2063 2188 c-17 -30 -18 -74 -18 -548 0 -463 2 -519 17 -552 l17 -38 85 0 c96 0 110 8 123 68 10 48 10 986 0 1034 -13 60 -27 68 -122 68 l-84 0 -18 -32z m174 -45 c10 -37 10 -980 0 -1016 -7 -27 -9 -28 -70 -25 l-62 3 -8 49 c-10 62 -5 987 6 1004 5 7 31 12 67 12 56 0 60 -1 67 -27z"], ["d", "M2453 2178 c-17 -30 -18 -74 -18 -548 0 -463 2 -519 17 -552 l17 -38 85 0 c96 0 110 8 123 68 4 20 8 253 8 517 0 264 -4 497 -8 517 -13 60 -27 68 -122 68 l-84 0 -18 -32z m174 -45 c10 -37 10 -980 0 -1016 -7 -27 -9 -28 -70 -25 l-62 3 -8 49 c-10 62 -5 987 6 1004 5 7 31 12 67 12 56 0 60 -1 67 -27z"], ["d", "M2843 2178 c-17 -30 -18 -74 -18 -548 0 -463 2 -519 17 -552 l17 -38 85 0 c96 0 110 8 123 68 4 20 8 253 8 517 0 264 -4 497 -8 517 -13 60 -27 68 -122 68 l-84 0 -18 -32z m174 -45 c10 -37 10 -980 0 -1016 -7 -27 -9 -28 -70 -25 l-62 3 -8 49 c-10 62 -5 987 6 1004 5 7 31 12 67 12 56 0 60 -1 67 -27z"], ["d", "M3293 2168 c-17 -30 -18 -74 -18 -548 0 -463 2 -519 17 -552 l17 -38 85 0 c96 0 110 8 123 68 4 20 8 253 8 517 0 264 -4 497 -8 517 -13 60 -27 68 -122 68 l-84 0 -18 -32z m174 -45 c10 -37 10 -980 0 -1016 -7 -27 -9 -28 -70 -25 l-62 3 -8 49 c-10 62 -5 987 6 1004 5 7 31 12 67 12 56 0 60 -1 67 -27z"], ["id", "cita_cc_edit", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 1, "containerized-load__tab-icon"], ["transform", "translate(0.000000,512.000000) scale(0.100000,-0.100000)", "fill", "#000000", "stroke", "none"], ["d", "M4264 5109 c-26 -13 -32 -22 -479 -799 -207 -360 -388 -672 -401 -692 l-24 -38 -400 0 -400 0 0 63 c0 73 -20 153 -49 201 -25 41 -98 109 -137 129 -126 64 -294 37 -394 -63 -62 -62 -93 -137 -100 -240 l-5 -85 -251 -3 -251 -2 -8 82 c-9 109 -35 176 -93 237 -69 73 -145 106 -247 106 -194 0 -325 -131 -341 -338 l-7 -87 -162 0 c-136 0 -171 -3 -221 -20 -142 -49 -246 -162 -279 -304 -12 -52 -15 -276 -15 -1457 0 -894 4 -1416 10 -1450 32 -169 170 -307 340 -339 73 -14 3667 -14 3741 0 173 33 314 182 339 362 6 35 10 638 10 1373 l0 1310 340 589 c188 326 340 600 340 614 0 32 -52 82 -85 82 -17 0 -38 -12 -58 -32 -18 -18 -268 -443 -557 -945 l-525 -911 -56 30 c-30 17 -64 37 -73 44 -17 12 33 103 665 1196 407 705 685 1196 687 1215 8 66 -84 110 -136 66 -11 -10 -327 -550 -702 -1200 l-681 -1181 -71 40 c-50 29 -68 45 -65 57 2 9 298 525 656 1146 359 622 655 1144 658 1162 5 26 0 38 -25 63 -39 38 -75 39 -111 3 -14 -16 -321 -538 -680 -1160 -360 -623 -658 -1133 -663 -1133 -13 0 -138 73 -138 80 0 4 273 479 606 1056 333 577 610 1059 615 1072 13 33 -13 90 -46 102 -32 12 -44 12 -71 -1z m-3168 -1288 c23 -10 52 -34 65 -52 23 -33 24 -40 27 -264 3 -227 3 -231 -20 -264 -33 -49 -69 -72 -121 -78 -87 -10 -163 41 -186 124 -13 46 -14 363 -1 417 12 54 38 87 90 114 53 27 92 28 146 3z m1181 8 c15 -5 41 -22 57 -37 51 -48 56 -73 56 -294 0 -184 -2 -205 -21 -245 -44 -92 -171 -122 -252 -60 -62 47 -67 70 -67 308 0 208 1 213 25 254 40 69 129 102 202 74z m-1597 -463 c0 -214 133 -365 330 -374 105 -5 174 22 251 97 67 66 95 131 105 245 l7 76 252 0 253 0 4 -88 c5 -105 30 -165 98 -232 72 -73 128 -95 235 -95 76 0 99 4 146 26 121 57 188 160 197 305 l5 84 348 0 c192 0 349 -2 349 -4 0 -3 -68 -122 -151 -266 -83 -144 -152 -276 -155 -293 -7 -51 -54 -871 -54 -943 0 -79 19 -125 67 -161 46 -35 134 -43 183 -18 64 33 833 545 845 562 7 10 66 110 130 223 65 113 124 214 132 225 11 17 13 -160 11 -1175 l-3 -1195 -25 -49 c-14 -27 -43 -64 -64 -83 -80 -67 50 -63 -1962 -63 -1810 0 -1824 0 -1878 20 -35 14 -68 36 -94 64 -77 83 -72 6 -70 1266 l3 1125 1258 5 1259 5 19 24 c21 26 24 62 8 93 -26 49 10 48 -1314 48 l-1236 0 3 203 c3 202 3 202 32 255 32 57 79 98 135 118 23 9 91 13 189 14 l152 0 0 -44z m2738 -837 c163 -94 307 -178 320 -186 22 -14 18 -17 -136 -118 l-160 -105 -177 102 -177 102 6 40 c3 23 9 107 12 189 4 81 9 147 11 147 2 0 138 -77 301 -171z m-195 -479 c32 -18 56 -35 53 -37 -3 -3 -49 -34 -103 -69 -115 -74 -109 -79 -98 84 l7 103 41 -24 c23 -14 68 -39 100 -57z"], ["d", "M1182 2450 c-30 -29 -34 -60 -30 -302 3 -213 3 -217 27 -242 l24 -26 246 0 c178 1 250 4 262 13 35 27 39 53 39 282 0 236 -6 274 -45 289 -9 3 -126 6 -259 6 -228 0 -243 -1 -264 -20z m398 -275 l0 -125 -130 0 -130 0 0 125 0 125 130 0 130 0 0 -125z"], ["d", "M1992 2450 c-30 -29 -34 -60 -30 -302 3 -213 3 -217 27 -242 l24 -26 247 0 c234 0 247 1 268 20 30 28 38 68 21 99 -26 45 -51 51 -241 51 l-178 0 0 125 0 125 170 0 c187 0 231 9 251 54 14 30 5 70 -21 96 -19 19 -34 20 -268 20 -234 0 -249 -1 -270 -20z"], ["d", "M490 1703 c-8 -3 -25 -15 -37 -26 -23 -20 -23 -24 -23 -269 l0 -249 26 -24 27 -25 244 0 244 0 24 25 25 24 0 249 0 249 -26 24 c-25 24 -27 24 -257 26 -128 1 -239 -1 -247 -4z m360 -293 l0 -130 -125 0 -125 0 0 130 0 130 125 0 125 0 0 -130z"], ["d", "M1203 1695 c-50 -21 -54 -48 -51 -304 l3 -233 28 -24 c28 -24 29 -24 268 -24 l241 0 29 29 29 29 0 231 c0 128 -4 241 -10 256 -11 30 -60 54 -96 47 -13 -2 -33 -16 -44 -30 -18 -23 -20 -41 -20 -208 l0 -184 -130 0 -130 0 0 188 c0 183 -1 189 -22 209 -31 27 -59 33 -95 18z"], ["d", "M2013 1695 c-49 -21 -55 -57 -51 -313 l3 -224 28 -24 c28 -24 29 -24 268 -24 l241 0 29 29 29 29 0 237 c0 150 -4 244 -11 257 -22 41 -65 48 -291 48 -159 -1 -221 -4 -245 -15z m377 -285 l0 -130 -130 0 -130 0 0 123 c0 68 3 127 7 130 3 4 62 7 130 7 l123 0 0 -130z"], ["d", "M3463 1695 c-49 -21 -55 -57 -51 -313 l3 -224 28 -24 c28 -24 29 -24 262 -24 150 0 243 4 258 11 43 19 47 46 47 294 0 229 0 234 -23 260 -32 38 -92 38 -124 0 -22 -25 -23 -33 -23 -211 l0 -184 -130 0 -130 0 0 188 c0 183 -1 189 -22 209 -32 29 -58 34 -95 18z"], ["d", "M2753 1532 c-13 -2 -32 -15 -43 -29 -18 -23 -20 -40 -20 -183 0 -157 0 -157 26 -184 l27 -26 244 0 244 0 24 25 c31 30 33 83 6 116 -19 23 -23 24 -210 27 l-191 3 0 90 c0 60 -5 100 -15 118 -15 31 -55 49 -92 43z"], ["d", "M475 928 c-43 -25 -44 -33 -44 -288 0 -257 1 -264 46 -288 30 -17 466 -17 496 0 45 24 46 31 47 289 0 233 -1 246 -20 267 -44 47 -111 36 -135 -23 -11 -25 -15 -78 -15 -205 l0 -170 -125 0 -125 0 0 170 c0 190 -10 233 -55 250 -33 13 -45 12 -70 -2z"], ["d", "M1200 927 c-47 -24 -50 -44 -48 -299 3 -232 4 -238 26 -260 22 -23 26 -23 272 -23 246 0 250 0 272 23 23 22 23 26 23 272 0 246 0 250 -23 272 -22 22 -28 23 -260 26 -177 2 -243 -1 -262 -11z m380 -287 l0 -130 -130 0 -130 0 0 130 0 130 130 0 130 0 0 -130z"], ["d", "M2013 930 c-47 -19 -53 -52 -53 -292 0 -203 2 -226 20 -255 13 -22 29 -34 52 -38 18 -3 134 -5 256 -3 l224 3 24 28 c24 28 24 29 24 267 0 238 0 239 -24 267 l-24 28 -239 2 c-131 1 -248 -2 -260 -7z m377 -290 l0 -130 -130 0 -130 0 0 130 0 130 130 0 130 0 0 -130z"], ["d", "M2784 930 c-51 -21 -54 -37 -54 -292 0 -236 0 -237 24 -265 l24 -28 251 0 c246 0 251 0 273 22 33 33 30 89 -6 119 -26 23 -32 24 -212 24 l-184 0 0 130 0 130 188 0 189 0 23 25 c32 34 32 87 2 118 -22 21 -29 22 -260 24 -130 1 -247 -2 -258 -7z"], i18n_9, ["id", "asc_1-2"], ["width", "31.37", "height", "1.91", 1, "asc-2"], ["x", "26.13", "width", "28.61", "height", "1.91", 1, "asc-3"], ["x", "54.74", "width", "28.61", "height", "1.91", 1, "asc-1"], [1, "div-asociate-container"], ["id", "cita_cc", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 1, "containerized-load__tab-icon"], ["d", "M735 5035 c-22 -22 -25 -32 -25 -104 l0 -80 -258 -3 -259 -3 -40 -28 c-22 -15 -50 -46 -64 -70 l-24 -42 -3 -1565 -2 -1564 26 -54 c17 -35 40 -62 67 -80 l41 -27 970 -5 971 -5 5 -653 5 -654 24 -19 c23 -19 60 -19 1422 -19 1003 0 1405 3 1422 11 14 6 30 22 36 36 8 17 11 324 11 1069 l0 1045 -176 262 c-97 144 -183 270 -191 279 -10 11 -34 18 -67 20 l-51 3 -5 965 c-5 1054 -2 991 -62 1047 -51 48 -81 53 -338 53 l-240 0 0 70 c0 82 -13 115 -51 131 -23 9 -36 9 -59 -1 -42 -17 -50 -37 -50 -124 l0 -76 -224 0 -224 0 -4 81 c-3 74 -6 83 -31 105 -36 31 -71 31 -102 -1 -22 -22 -25 -32 -25 -105 l0 -80 -230 0 -230 0 0 80 c0 73 -3 83 -25 105 -29 30 -64 32 -98 5 -24 -19 -26 -28 -29 -103 l-3 -82 -227 -3 -228 -2 0 78 c0 52 -5 84 -15 99 -31 44 -111 37 -134 -13 -6 -14 -11 -56 -11 -94 l0 -70 -225 0 -225 0 0 76 c0 71 -2 77 -30 106 -26 25 -36 29 -63 24 -53 -10 -67 -37 -67 -127 l0 -79 -224 0 -223 0 -5 82 c-4 73 -8 84 -32 105 -35 30 -71 29 -101 -2z m-25 -390 c0 -39 -4 -46 -29 -59 -16 -9 -45 -34 -64 -57 -123 -143 -19 -358 173 -359 102 0 194 76 215 178 18 84 -30 189 -105 231 -37 21 -40 25 -40 67 l0 44 230 0 230 0 0 -45 c0 -38 -4 -46 -27 -59 -71 -37 -113 -110 -113 -196 0 -72 22 -122 74 -167 72 -64 191 -71 269 -17 54 37 97 119 97 183 0 68 -39 144 -94 183 -42 29 -46 35 -46 75 l0 43 225 0 225 0 0 -50 c0 -38 -4 -50 -15 -50 -9 0 -35 -19 -58 -43 -135 -134 -54 -362 133 -375 71 -5 120 10 167 51 106 93 96 262 -19 347 -44 32 -48 38 -48 77 l0 43 230 0 230 0 0 -44 c0 -40 -3 -45 -43 -70 -142 -90 -139 -293 6 -376 166 -95 369 50 328 235 -13 58 -63 125 -112 151 -25 13 -29 20 -29 59 l0 45 230 0 230 0 0 -45 c0 -38 -4 -46 -27 -59 -101 -52 -146 -193 -95 -293 26 -50 79 -97 127 -113 61 -20 148 -9 198 26 62 43 100 121 95 196 -5 71 -48 144 -101 173 -35 19 -37 23 -37 68 l0 47 225 0 225 0 0 -43 c0 -39 -4 -45 -47 -77 -116 -85 -126 -254 -20 -347 47 -41 96 -56 167 -51 114 8 192 90 198 207 4 83 -23 140 -91 191 -43 32 -47 38 -47 77 l0 43 235 0 c223 0 235 -1 245 -20 7 -12 9 -118 8 -302 l-3 -283 -2097 -3 -2098 -2 0 293 c0 215 3 296 12 305 9 9 77 12 245 12 l233 0 0 -45z m114 -206 c54 -43 6 -134 -57 -110 -56 21 -59 99 -5 121 32 12 32 12 62 -11z m601 9 c46 -21 46 -95 0 -116 -33 -15 -72 0 -87 33 -18 40 5 78 59 94 1 1 14 -4 28 -11z m638 -20 c20 -23 21 -41 6 -69 -25 -47 -103 -41 -115 8 -19 75 58 119 109 61z m617 -11 c31 -56 -38 -117 -89 -79 -45 33 -37 93 14 112 28 10 57 -2 75 -33z m594 22 c54 -43 6 -134 -57 -110 -56 21 -59 99 -5 121 32 12 32 12 62 -11z m599 10 c53 -24 54 -99 2 -119 -55 -21 -106 30 -85 85 8 21 26 35 57 44 1 1 13 -4 26 -10z m542 -1094 l0 -570 -953 -5 c-628 -3 -955 -8 -960 -15 -4 -6 -77 -114 -162 -240 l-155 -230 -5 118 c-7 166 8 157 -271 157 -216 0 -218 0 -246 -24 l-28 -24 0 -227 0 -227 29 -24 28 -25 224 3 224 3 0 -227 0 -228 -948 0 c-724 0 -951 3 -960 12 -9 9 -12 285 -12 1180 l0 1168 2098 -2 2097 -3 0 -570z m-1064 -730 c6 -5 -26 -333 -33 -340 -3 -3 -217 -4 -476 -3 l-472 3 115 173 115 172 373 0 c206 0 376 -2 378 -5z m329 -2 c0 -5 7 -69 15 -143 8 -74 15 -152 15 -172 l0 -38 -109 0 c-61 0 -112 4 -115 9 -6 8 21 313 29 339 5 13 165 18 165 5z m1027 -163 c62 -91 112 -168 112 -172 1 -5 -212 -8 -473 -8 l-473 0 -12 123 c-7 67 -15 146 -18 175 l-6 52 379 -2 379 -3 112 -165z m-2687 -165 l0 -115 -115 0 -115 0 0 115 0 115 115 0 115 0 0 -115z m1292 -346 l3 -171 29 -25 c35 -30 70 -26 120 12 l34 26 29 -25 c54 -45 95 -43 151 7 l22 20 23 -20 c36 -33 66 -45 98 -38 54 12 59 32 59 217 l0 168 510 0 510 0 0 -950 0 -950 -510 0 -510 0 0 168 c-1 179 -4 193 -53 211 -31 12 -50 7 -94 -27 l-33 -24 -32 24 c-18 13 -41 27 -51 31 -22 8 -65 -8 -94 -35 l-23 -21 -40 28 c-49 34 -93 36 -123 6 -21 -20 -22 -32 -25 -191 l-3 -170 -505 0 -504 0 0 950 0 950 504 0 505 0 3 -171z m408 96 c0 -72 -1 -75 -24 -75 -13 0 -40 -14 -61 -30 -38 -30 -39 -30 -59 -11 -29 25 -61 41 -85 41 -19 0 -21 6 -21 75 l0 75 125 0 125 0 0 -75z m-82 -1650 c20 -14 47 -25 59 -25 22 0 23 -4 23 -75 l0 -75 -125 0 -125 0 0 75 0 75 29 0 c18 0 42 10 58 25 35 30 36 30 81 0z"], ["d", "M842 3447 c-21 -23 -22 -31 -22 -250 0 -214 1 -228 20 -247 19 -19 33 -20 250 -20 217 0 231 1 250 20 19 19 20 33 20 249 l0 230 -26 20 c-25 20 -39 21 -249 21 -219 0 -222 0 -243 -23z m366 -249 l-3 -113 -117 -3 -118 -3 0 116 0 115 120 0 121 0 -3 -112z"], ["d", "M1662 3450 c-30 -29 -34 -63 -30 -284 3 -194 3 -198 27 -217 21 -17 42 -19 252 -19 222 0 229 1 249 22 19 21 20 34 20 245 l0 224 -25 24 -24 25 -224 0 c-209 0 -225 -1 -245 -20z m358 -255 l0 -115 -115 0 -115 0 0 115 0 115 115 0 115 0 0 -115z"], ["d", "M2480 3450 c-29 -29 -31 -49 -28 -272 3 -186 5 -208 22 -227 18 -20 28 -21 251 -21 303 0 275 -27 275 269 l0 222 -25 24 -24 25 -226 0 c-211 0 -226 -1 -245 -20z m360 -255 l0 -115 -115 0 -115 0 0 115 0 115 115 0 115 0 0 -115z"], ["d", "M3300 3450 c-29 -29 -31 -49 -28 -272 3 -186 5 -208 22 -227 18 -20 28 -21 252 -21 l233 0 20 26 c20 25 21 39 21 246 l0 219 -25 24 -24 25 -226 0 c-211 0 -226 -1 -245 -20z m360 -255 l0 -115 -115 0 -115 0 0 115 0 115 115 0 115 0 0 -115z"], ["d", "M846 2549 l-26 -20 0 -233 c0 -224 1 -234 21 -252 19 -18 39 -19 251 -19 229 0 230 0 249 24 17 21 19 42 19 248 l0 224 -25 24 -24 25 -219 0 c-207 0 -221 -1 -246 -21z m364 -254 l0 -115 -120 0 -120 0 0 115 0 115 120 0 120 0 0 -115z"], ["d", "M3230 1634 c-170 -74 -182 -317 -21 -412 l46 -27 320 -3 c357 -3 380 -1 446 56 119 102 103 289 -31 370 l-54 32 -336 0 c-277 -1 -341 -3 -370 -16z m692 -164 c24 -25 29 -36 24 -58 -15 -61 -18 -62 -351 -62 l-304 0 -20 26 c-33 42 -23 96 22 114 12 5 152 9 310 9 l289 1 30 -30z"], i18n_11, [1, "secondary-panel__actions"], ["class", "load__action", 3, "routerLink", "click", 4, "permissions"], ["class", "load__action", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", "click", 4, "permissions"], ["class", "load__action", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", "disabled", "click", 4, "permissions"], ["class", "load__action load__action_lock", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", "click", 4, "permissions"], ["class", "load__action load__action_unlock", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", "click", 4, "permissions"], [1, "load__action", 3, "routerLink", "click"], ["version", "1.0", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 200.000000 261.000000", "preserveAspectRatio", "xMidYMid meet", 1, "button-icon"], ["transform", "translate(0.000000,261.000000) scale(0.100000,-0.100000)", "fill", "#000000", "stroke", "none"], ["d", "M312 2579 c-43 -13 -108 -78 -117 -118 -6 -30 -8 -31 -66 -31 -50 0 -64 -4 -84 -25 l-25 -24 0 -549 c0 -534 1 -549 20 -570 19 -21 20 -35 20 -522 l0 -501 25 -24 c20 -21 34 -25 80 -25 l55 0 0 -55 c0 -46 4 -60 25 -80 l24 -25 811 0 811 0 24 25 25 24 0 1051 0 1051 -25 24 c-20 21 -34 25 -80 25 l-55 0 0 55 c0 46 -4 60 -25 80 l-24 25 -261 0 c-247 0 -261 1 -280 20 -19 19 -33 20 -318 20 l-298 0 -13 35 c-34 94 -144 144 -249 114z m149 -98 c43 -43 38 -51 -35 -51 -69 0 -92 -14 -81 -48 3 -11 16 -23 28 -26 12 -3 190 -6 395 -6 l372 0 0 -520 0 -520 -520 0 -520 0 0 520 0 520 40 0 40 0 0 -197 c0 -224 7 -252 73 -310 75 -66 182 -64 258 4 50 45 69 108 69 225 0 140 -33 193 -121 193 -41 0 -53 -5 -81 -32 -29 -29 -33 -40 -36 -101 -3 -54 -1 -72 13 -85 19 -19 24 -20 45 -7 10 6 17 32 20 77 5 66 6 68 34 71 16 2 32 -2 37 -10 5 -7 9 -60 9 -116 0 -78 -4 -111 -16 -132 -34 -56 -105 -76 -164 -45 -56 29 -60 50 -60 316 l0 241 34 34 c30 30 40 34 86 34 44 0 56 -4 81 -29z m1239 -273 c0 -80 3 -105 17 -120 9 -10 20 -18 24 -18 16 0 39 32 39 56 0 21 4 24 40 24 l40 0 0 -1020 0 -1020 -260 -1 c-143 0 -478 -1 -745 -1 -267 0 -501 1 -520 1 -34 1 -35 2 -35 41 l0 40 536 0 c371 0 542 3 557 11 31 16 356 339 373 371 12 23 14 137 14 711 0 518 -3 686 -12 695 -18 18 -46 14 -58 -7 -6 -13 -10 -244 -10 -680 l0 -660 -156 -3 -156 -3 -24 -28 c-23 -27 -24 -34 -24 -178 l0 -149 -600 0 -600 0 0 480 0 480 511 0 511 0 29 29 29 29 0 511 0 511 240 0 240 0 0 -102z m-140 -1745 c-50 -48 -102 -100 -116 -116 l-24 -29 0 116 0 116 115 0 116 0 -91 -87z"], ["d", "M712 2058 c-16 -16 -15 -33 4 -52 23 -23 225 -23 248 0 19 18 19 20 6 45 -10 17 -22 19 -128 19 -79 0 -122 -4 -130 -12z"], ["d", "M712 1858 c-16 -16 -15 -33 4 -52 23 -23 225 -23 248 0 19 18 19 20 6 45 -10 17 -22 19 -128 19 -79 0 -122 -4 -130 -12z"], ["d", "M272 1658 c-18 -18 -14 -46 7 -58 13 -6 140 -10 345 -10 282 0 327 2 340 16 19 18 19 20 6 45 -10 18 -25 19 -348 19 -250 0 -341 -3 -350 -12z"], ["d", "M1390 2051 c-13 -25 -13 -27 6 -45 34 -35 144 -13 144 28 0 25 -25 36 -82 36 -46 0 -59 -4 -68 -19z"], ["d", "M1396 1854 c-9 -8 -16 -19 -16 -24 0 -23 34 -40 80 -40 66 0 101 35 68 68 -18 18 -113 15 -132 -4z"], ["d", "M1396 1654 c-9 -8 -16 -19 -16 -24 0 -23 34 -40 80 -40 66 0 101 35 68 68 -18 18 -113 15 -132 -4z"], ["d", "M1396 1454 c-9 -8 -16 -19 -16 -24 0 -35 94 -55 141 -30 21 12 25 40 7 58 -18 18 -113 15 -132 -4z"], ["d", "M318 1099 c-21 -12 -23 -40 -6 -57 18 -18 113 -15 132 4 34 33 4 64 -62 64 -26 0 -55 -5 -64 -11z"], ["d", "M596 1094 c-19 -19 -20 -36 -4 -52 17 -17 919 -17 936 0 18 18 14 46 -7 58 -13 6 -177 10 -465 10 -391 0 -446 -2 -460 -16z"], ["d", "M318 899 c-21 -12 -23 -40 -6 -57 18 -18 113 -15 132 4 34 33 4 64 -62 64 -26 0 -55 -5 -64 -11z"], ["d", "M596 894 c-19 -19 -20 -36 -4 -52 17 -17 919 -17 936 0 18 18 14 46 -7 58 -13 6 -177 10 -465 10 -391 0 -446 -2 -460 -16z"], ["d", "M318 699 c-21 -12 -23 -40 -6 -57 18 -18 113 -15 132 4 34 33 4 64 -62 64 -26 0 -55 -5 -64 -11z"], ["d", "M596 694 c-19 -19 -20 -36 -4 -52 17 -17 599 -17 616 0 16 16 15 33 -4 52 -13 14 -55 16 -304 16 -249 0 -291 -2 -304 -16z"], [1, "divider"], [1, "load__action", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", "click"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64.84 70.61", 1, "button-icon"], ["x", ".25", "y", ".25", "width", "64.34", "height", "70.11", 1, "billing"], ["x", "6.43", "y", "29.19", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "20.7", "y", "29.19", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "5.63", "y", "8.26", "width", "53.58", "height", "14.31", 1, "billing"], ["x", "34.98", "y", "29.19", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "49.25", "y", "29.19", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "6.43", "y", "42.47", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "20.7", "y", "42.47", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "34.98", "y", "42.47", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "49.25", "y", "42.47", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "6.43", "y", "55.75", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "20.7", "y", "55.75", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "34.98", "y", "55.75", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "49.25", "y", "55.75", "width", "8.93", "height", "8.93", 1, "billing"], ["x", "9.24", "y", "11.23", "width", "4.49", "height", "8.68", 1, "billing"], ["x", "17.62", "y", "11.23", "width", "4.49", "height", "8.68", 1, "billing"], ["x", "26", "y", "11.23", "width", "4.49", "height", "8.68", 1, "billing"], ["x", "34.37", "y", "11.23", "width", "4.49", "height", "8.68", 1, "billing"], ["points", "42.75 16.02 47.24 11.23 47.24 19.9", 1, "billing"], ["points", "51.13 16.02 55.61 11.23 55.61 19.9", 1, "billing"], [1, "load__action", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", "disabled", "click"], ["version", "1.0", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 264.000000 134.000000", "preserveAspectRatio", "xMidYMid meet", 1, "button-icon"], ["transform", "translate(0.000000,134.000000) scale(0.100000,-0.100000)", "fill", "#000000", "stroke", "none"], ["d", "M93 1265 c-17 -7 -36 -22 -42 -34 -7 -11 -11 -83 -11 -176 0 -162 9 -205 45 -219 9 -3 385 -6 836 -6 l820 0 24 25 c25 24 25 27 25 194 0 165 -1 171 -24 198 l-24 28 -541 3 c-370 2 -547 -1 -561 -8 -16 -9 -29 -52 -17 -62 1 -2 247 -5 547 -8 l545 -5 0 -145 0 -145 -797 -3 -798 -2 0 150 0 150 193 2 192 3 3 24 c7 45 -16 51 -207 51 -127 -1 -185 -5 -208 -15z"], ["d", "M2136 1134 c-65 -21 -112 -52 -164 -108 -57 -62 -83 -125 -90 -213 l-5 -73 -889 0 -890 0 -29 -29 c-27 -28 -29 -34 -29 -109 0 -93 19 -127 75 -138 l35 -6 0 -85 c0 -129 16 -149 119 -155 l44 -3 21 -60 c30 -85 56 -97 198 -93 126 4 144 14 172 103 l17 55 55 0 c45 0 59 4 79 25 23 22 25 32 25 120 l0 95 186 0 c189 0 224 6 224 38 0 42 0 42 -597 42 l-573 0 0 60 0 60 898 0 c703 0 902 3 914 13 11 9 17 36 21 100 6 112 38 181 107 236 59 47 120 65 202 59 74 -5 129 -29 178 -78 72 -72 75 -85 78 -372 3 -246 2 -259 -19 -308 -13 -31 -41 -68 -71 -95 -110 -99 -266 -99 -376 0 -63 56 -92 123 -99 224 -3 42 -10 82 -16 89 -13 17 -517 18 -535 0 -18 -18 -14 -46 7 -58 12 -6 108 -10 244 -10 l224 0 6 -66 c16 -204 209 -357 410 -324 118 19 224 99 275 208 l27 57 0 270 0 270 -28 61 c-75 161 -268 250 -431 198z m-1328 -756 l-3 -83 -70 -5 -70 -5 -25 -73 -25 -73 -99 3 -99 3 -21 60 c-30 86 -29 85 -102 85 l-64 0 0 85 0 85 290 0 291 0 -3 -82z"], ["d", "M486 1074 c-21 -20 -20 -27 3 -48 36 -33 83 18 49 52 -16 16 -33 15 -52 -4z"], ["d", "M653 1083 c-18 -6 -16 -48 1 -62 19 -16 56 2 56 27 0 32 -26 48 -57 35z"], ["d", "M812 1078 c-30 -30 11 -85 44 -57 25 21 11 69 -21 69 -6 0 -16 -5 -23 -12z"], ["d", "M972 1078 c-18 -18 -14 -46 9 -58 26 -14 49 3 49 35 0 32 -35 46 -58 23z"], ["d", "M1132 1078 c-18 -18 -14 -46 7 -58 11 -5 22 -10 25 -10 8 0 36 31 36 40 0 13 -30 40 -44 40 -6 0 -17 -5 -24 -12z"], ["d", "M1290 1071 c-18 -34 10 -68 44 -55 35 13 23 74 -14 74 -11 0 -24 -9 -30 -19z"], ["d", "M2174 931 c-23 -10 -52 -34 -65 -52 -24 -34 -24 -37 -24 -271 0 -224 1 -238 21 -265 73 -98 195 -98 268 0 15 20 21 47 24 97 5 75 -5 100 -39 100 -26 0 -39 -30 -39 -89 0 -27 -3 -57 -6 -66 -10 -25 -62 -47 -95 -40 -56 12 -59 28 -59 265 0 213 0 217 23 238 32 30 81 29 112 -3 22 -21 25 -33 25 -95 0 -78 11 -110 38 -110 33 0 42 22 42 100 0 101 -26 156 -90 188 -54 27 -82 27 -136 3z"], [1, "load__action", "load__action_lock", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", "click"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 45.04 63.11", 1, "lock-icon"], [1, "cls-1-lock"], ["d", "m7.58,2.5h29.98c.51,0,.92.41.92.92v27.38H6.66V3.42c0-.51.41-.92.92-.92Z", 1, "cls-2-lock"], ["d", "m42,25.16H3.03c-1.68,0-3.03,1.36-3.03,3.03v31.88c0,1.68,1.36,3.03,3.03,3.03h38.97c1.68,0,3.03-1.36,3.03-3.03v-31.88c0-1.68-1.36-3.03-3.03-3.03Zm-17.33,18.58v9.93h-4.32v-9.93c-1.58-.79-2.67-2.43-2.67-4.32,0-2.67,2.16-4.83,4.83-4.83s4.83,2.16,4.83,4.83c0,1.89-1.09,3.53-2.67,4.32Z", 1, "cls-3-lock"], i18n_14, [1, "load__action", "load__action_unlock", 3, "hourRestriction", "hourRestrictionAPIGateway", "hourRestrictionCallback", "click"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 41.99 68.18", 1, "lock-icon"], ["d", "m39.16,32.81H2.83c-1.56,0-2.83,1.27-2.83,2.83v29.72c0,1.56,1.27,2.83,2.83,2.83h36.33c1.56,0,2.83-1.27,2.83-2.83v-29.72c0-1.56-1.27-2.83-2.83-2.83Zm-16.15,17.32v7.25c0,1.11-.9,2.01-2.01,2.01s-2.01-.9-2.01-2.01v-7.25c-1.48-.74-2.49-2.27-2.49-4.03,0-2.49,2.02-4.51,4.51-4.51s4.51,2.02,4.51,4.51c0,1.76-1.01,3.29-2.49,4.03Z", 1, "cls-1-unlock"], ["d", "m20.84,0C12.41.08,5.67,7.08,5.67,15.52v21.34h5.92V15.33c0-5.24,4.3-9.49,9.55-9.41,5.16.08,9.26,4.39,9.26,9.55v1.79c0,.16.08.3.21.38l3.04,1.89-2.97,1.15c-.17.07-.29.23-.29.42v1.09c0,.48.39.87.87.87h4.17c.48,0,.87-.39.87-.87v-6.86C36.32,6.82,29.36-.08,20.84,0Z", 1, "cls-1-unlock"], i18n_16, ["id", "fact_expo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64.84 70.61", 1, "button-icon"], [3, "invoice"], ["class", "load__action", 3, "click", 4, "permissions"], [1, "load__action", 3, "click"]];
    },
    template: function ContainerizedLoadComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, ContainerizedLoadComponent_ng_container_0_Template, 17, 12, "ng-container", 0);
        core/* ɵɵpipe */.ALo(1, "async");
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.containerizedLoadStore));
      }
    },
    dependencies: [common/* NgIf */.O5, router/* RouterOutlet */.lC, router/* RouterLink */.rH, tabs/* MatTabContent */.Vc, tabs/* MatTabLabel */.uD, tabs/* MatTab */.uX, tabs/* MatTabGroup */.SP, card/* MatCard */.a8, card/* MatCardContent */.dn, search_component/* SearchComponent */.g, permissions_directive/* PermissionsDirective */.$, hour_restriction_directive/* HourRestrictionDirective */.E, vehicle_searcher_component/* VehicleSearcherComponent */.B, ContainerizedLoadResultComponent, InvoiceManagementComponent, BookingLoadResultComponent, common/* AsyncPipe */.Ov],
    styles: [".containerized-load[_ngcontent-%COMP%]{height:100vh;padding-left:1rem;display:grid;grid-template-columns:.7fr 1fr;grid-template-rows:1fr}.containerized-load__tab-icon[_ngcontent-%COMP%]{width:1rem}.containerized-load__tab-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{width:1.5rem;fill:#0009}  .mat-mdc-tab:not(.mat-mdc-tab-disabled).mdc-tab--active .containerized-load__tab-icon path, .mat-mdc-tab-link[_ngcontent-%COMP%]:not(.mat-mdc-tab-disabled).mdc-tab--active   .containerized-load__tab-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:#66bb6a}.title[_ngcontent-%COMP%]{padding-top:1rem;color:#78909c}.header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.icon-title[_ngcontent-%COMP%]{width:1.5rem}.title-card[_ngcontent-%COMP%]{width:max-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.main-panel[_ngcontent-%COMP%], .secondary-panel[_ngcontent-%COMP%]{overflow-y:scroll}.secondary-panel[_ngcontent-%COMP%]{padding:1rem}.secondary-panel__actions[_ngcontent-%COMP%]{padding-bottom:1rem;display:flex;justify-content:flex-start;align-items:center;gap:.1rem}.not-found[_ngcontent-%COMP%]{color:#78909c;font-size:1.3rem;text-align:center;padding:1rem}button[_ngcontent-%COMP%]{color:#fff}.load__actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.load__action[_ngcontent-%COMP%]{width:10rem;height:2.5rem;border:0;outline:0;padding:.3rem .6rem;margin-left:.1rem;cursor:pointer;font-family:Gilroy-ExtraBold!important;color:#636e72;background-color:#ececec;display:flex;justify-content:center;align-items:center}.button-icon[_ngcontent-%COMP%]{width:24px;height:24px}.divider[_ngcontent-%COMP%]{width:1px;height:24px;background-color:#636362;margin:0 10px}.load__action_lock[_ngcontent-%COMP%]{background-color:#fed5d7;color:#f90613}.load__action_unlock[_ngcontent-%COMP%]{background-color:#d9e3da;color:#1f5b29}.load__action[_ngcontent-%COMP%]:disabled{background-color:#b2bec3!important;color:#636e72!important}.load__action[_ngcontent-%COMP%]:disabled   .cls-3[_ngcontent-%COMP%]{fill:#636e72}.load__action[_ngcontent-%COMP%]:disabled   .cls-2[_ngcontent-%COMP%]{stroke:#636e72}.load__action[_ngcontent-%COMP%]:disabled   .cls-1[_ngcontent-%COMP%]{fill:#636e72}.lock-icon[_ngcontent-%COMP%]{width:1rem;margin-right:1rem}  .mdc-tab__text-label{flex-direction:column!important}  .mdc-data-table__header-cell{text-align:center!important;font-family:Gilroy-ExtraBold;color:#66bb6a;font-size:1rem}  .mdc-data-table__row{background-color:#dfe6e91a!important;border:transparent solid!important;border-bottom:.25rem transparent solid!important}  .mdc-data-table__row:hover{background-color:#7ba0521a!important}  .mdc-data-table__row td{font-family:Gilroy-Light;color:#666!important}  .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}  .success-snackbar .mdc-snackbar__surface{color:#155724!important;background-color:#d4edda!important;border-color:#c3e6cb!important}  .success-snackbar .mdc-snackbar__surface .mdc-button__label{color:#155724!important}  .success-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#155724!important}  .warning-snackbar .mdc-snackbar__surface{color:#856404!important;background-color:#fff3cd!important;border-color:#ffeeba!important}  .warning-snackbar .mdc-snackbar__surface .mdc-button__label{color:#856404!important}  .warning-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#856404!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:transparent!important;--mat-mdc-button-persistent-ripple-color: currentColor !important}.load__action[_ngcontent-%COMP%]:hover{background-color:#649f3399;color:#000}.load__action[_ngcontent-%COMP%]:focus{background-color:#649f3399;color:#000}.div-crear-cita[_ngcontent-%COMP%]{overflow-y:hidden!important}  .mat-mdc-tab-body-content{overflow-y:hidden!important}.div-asociate-container[_ngcontent-%COMP%]{overflow-y:hidden!important}"]
  });
  return ContainerizedLoadComponent;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(82722);
// EXTERNAL MODULE: ./src/app/state/shared/shared.selectors.ts
var shared_selectors = __webpack_require__(13545);
// EXTERNAL MODULE: ./src/app/shared/services/util.service.ts
var util_service = __webpack_require__(22203);
// EXTERNAL MODULE: ./src/app/shared/components/invoice-item/invoice-item.component.ts
var invoice_item_component = __webpack_require__(22619);
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/import/import.component.ts











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
    constructor(store, utilService) {
      this.store = store;
      this.utilService = utilService;
      this.privileges = privileges_enum/* privileges */.U;
      this.destroy$ = new Subject/* Subject */.x();
      this.invoices = [];
      this.invoiceBL = "";
    }
    ngOnInit() {
      this.store.select(shared_selectors/* sharedFeatureSelector */.x).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(next => {
        if (next.file) {
          window.open(this.utilService.pdfReceipt(next.file));
          this.store.dispatch((0,shared_actions/* cleanPdfInvoice */.I2)());
        }
      });
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: apiGatewayStore => {
          this.user = apiGatewayStore;
        },
        error: error => console.error(error)
      });
      this.store.select(containerized_load_selectors/* containerizedLoadFeatureSelector */.qO).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          this.invoiceBL = result.selectedUnit;
          this.invoices = result.unitNbrData;
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
  }
  ImportComponent.ɵfac = function ImportComponent_Factory(t) {
    return new (t || ImportComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f));
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
    styles: [".card[_ngcontent-%COMP%]{width:450px;margin:20px;border:none;font-size:14px;font-family:Roboto,sans-serif;color:#666!important}.invoice-item[_ngcontent-%COMP%]{margin-top:1rem}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:16px;background-color:transparent;border-top-left-radius:10px;border-top-right-radius:10px}.card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#666;background-color:#e5e5e5;border:none;border-radius:50px;width:100px}.card-content[_ngcontent-%COMP%]{margin-left:60px;font-size:15px;margin-top:20px;margin-bottom:20px}.table[_ngcontent-%COMP%]{border-spacing:0;width:90%;margin-left:5%;border:none;font-size:12px}.row[_ngcontent-%COMP%]{background-color:#e5e5e5;border-bottom:1px solid transparent;margin-bottom:5px;border-radius:5px;border:1px solid transparent;display:flex;justify-content:space-between;font-size:12px;color:#666}.box[_ngcontent-%COMP%]{flex:1;padding:10px}.box2[_ngcontent-%COMP%]{flex:1;padding:10px;text-align:center}.box3[_ngcontent-%COMP%]{flex:1;padding:10px;text-align:right}.card-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:10px;margin-right:5px;margin-bottom:5px}.green-button[_ngcontent-%COMP%]{font-weight:700;background-color:#5c753b;color:#fff;margin-left:10px;border-radius:5px;padding:8px 16px;border:transparent;font-size:15px}.superior-button[_ngcontent-%COMP%]{font-size:10px;height:20px;width:135px!important}.header[_ngcontent-%COMP%]{background-color:#e5e5e5;border-bottom:1px solid transparent;margin-top:10px;margin-bottom:10px;border-radius:5px;border:1px solid transparent;display:flex;justify-content:space-between;font-weight:700}.icon-button[_ngcontent-%COMP%]{font-weight:700;display:flex;align-items:center;border:none;border-radius:5px;font-family:Roboto,sans-serif;width:100px;padding:5px}.icon-button-superior[_ngcontent-%COMP%]{font-size:10px;font-weight:700;display:flex;align-items:center;border:none;border-radius:5px;font-family:Roboto,sans-serif;width:150px;padding:5px}.icon-small[_ngcontent-%COMP%]{height:15px;width:26px;font-size:18px;border-right:1.2px solid #000;margin-right:5px}.icon-dollar[_ngcontent-%COMP%]{font-size:50px;margin-top:25px;width:40px;height:50px}.span-icon[_ngcontent-%COMP%]{position:absolute;margin-top:0}.text-fecha[_ngcontent-%COMP%]{font-size:12px}.card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#ccc;background-color:#e5e5e5;border:none;border-radius:50px;width:100px;font-size:16px}.text-titulo[_ngcontent-%COMP%]{font-weight:700;font-size:16px}"]
  });
  return ImportComponent;
})();
// EXTERNAL MODULE: ./src/app/modules/containerized-load/components/invoice-management-billing/invoice-management-billing.component.ts
var invoice_management_billing_component = __webpack_require__(78004);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(50727);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/icon.mjs
var icon = __webpack_require__(97392);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/list.mjs
var list = __webpack_require__(96338);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/divider.mjs
var divider = __webpack_require__(44850);
// EXTERNAL MODULE: ./src/app/shared/components/card-appointment/card-appointment.component.ts
var card_appointment_component = __webpack_require__(52937);
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/appointment-creation/appointment-creation.component.ts


















function AppointmentCreationComponent_div_0_th_29_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 30);
    core/* ɵɵtext */._uU(1, "Nro.");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AppointmentCreationComponent_div_0_td_30_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 31);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r12.position);
  }
}
function AppointmentCreationComponent_div_0_th_32_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 32);
    core/* ɵɵtext */._uU(1, "Contenedor");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AppointmentCreationComponent_div_0_td_33_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 33);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r13.container);
  }
}
function AppointmentCreationComponent_div_0_th_35_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 32);
    core/* ɵɵtext */._uU(1, "Tama\u00F1o");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AppointmentCreationComponent_div_0_td_36_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 34)(1, "span", 35);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r14.size, " ");
  }
}
function AppointmentCreationComponent_div_0_th_38_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 36);
    core/* ɵɵtext */._uU(1, "Transacci\u00F3n");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AppointmentCreationComponent_div_0_td_39_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 37);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r15.transaction, " ");
  }
}
function AppointmentCreationComponent_div_0_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 38);
  }
}
function AppointmentCreationComponent_div_0_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 39);
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
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(14, "mat-list", 12)(15, "mat-list-item", 13)(16, "div", 14);
    core/* ɵɵtext */._uU(17);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelement */._UZ(18, "mat-divider");
    core/* ɵɵelementStart */.TgZ(19, "mat-list-item", 13)(20, "div", 14);
    core/* ɵɵtext */._uU(21);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelement */._UZ(22, "mat-divider");
    core/* ɵɵelementStart */.TgZ(23, "mat-list-item", 13)(24, "div", 14);
    core/* ɵɵtext */._uU(25);
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementStart */.TgZ(26, "div", 15)(27, "table", 16);
    core/* ɵɵelementContainerStart */.ynx(28, 17);
    core/* ɵɵtemplate */.YNc(29, AppointmentCreationComponent_div_0_th_29_Template, 2, 0, "th", 18);
    core/* ɵɵtemplate */.YNc(30, AppointmentCreationComponent_div_0_td_30_Template, 2, 1, "td", 19);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(31, 20);
    core/* ɵɵtemplate */.YNc(32, AppointmentCreationComponent_div_0_th_32_Template, 2, 0, "th", 21);
    core/* ɵɵtemplate */.YNc(33, AppointmentCreationComponent_div_0_td_33_Template, 2, 1, "td", 22);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(34, 23);
    core/* ɵɵtemplate */.YNc(35, AppointmentCreationComponent_div_0_th_35_Template, 2, 0, "th", 21);
    core/* ɵɵtemplate */.YNc(36, AppointmentCreationComponent_div_0_td_36_Template, 3, 1, "td", 24);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(37, 25);
    core/* ɵɵtemplate */.YNc(38, AppointmentCreationComponent_div_0_th_38_Template, 2, 0, "th", 26);
    core/* ɵɵtemplate */.YNc(39, AppointmentCreationComponent_div_0_td_39_Template, 2, 1, "td", 27);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵtemplate */.YNc(40, AppointmentCreationComponent_div_0_tr_40_Template, 1, 0, "tr", 28);
    core/* ɵɵtemplate */.YNc(41, AppointmentCreationComponent_div_0_tr_41_Template, 1, 0, "tr", 29);
    core/* ɵɵelementEnd */.qZA()()()();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelement */._UZ(42, "router-outlet");
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(13);
    core/* ɵɵtextInterpolate1 */.hij("D\u00EDa y hora de la cita: ", ctx_r0.data.appointmentDate, "");
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵtextInterpolate1 */.hij("Identificador: ", ctx_r0.data.truckVisitNbr, "");
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵtextInterpolate2 */.AsE("Conductor: ", ctx_r0.data.license, " - ", ctx_r0.data.name, "");
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵtextInterpolate1 */.hij("Placa: ", ctx_r0.data.truck, "");
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("dataSource", ctx_r0.dataSource);
    core/* ɵɵadvance */.xp6(13);
    core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx_r0.displayedColumns);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx_r0.displayedColumns);
  }
}
function AppointmentCreationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div");
    core/* ɵɵelement */._UZ(1, "app-card-appointment", 40);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("origen", "carga-contenerizada");
  }
}
let AppointmentCreationComponent = /*#__PURE__*/(() => {
  class AppointmentCreationComponent {
    constructor(store, communicationService, base64EncryptionUtilService, storageService, utilServices) {
      this.store = store;
      this.communicationService = communicationService;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.storageService = storageService;
      this.utilServices = utilServices;
      this.destroy$ = new Subject/* Subject */.x();
      this.subscription = new Subscription/* Subscription */.w0();
      this.ELEMENT_DATA = [];
      this.verificacion = 0;
      this.displayedColumns = ['position', 'container', 'size', 'transaction'];
      this.dataSource = this.ELEMENT_DATA;
      this.showCard = true;
      this.isTransport = false;
      this.privileges = privileges_enum/* privileges */.U;
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
      if (!this.isTransport) {
        this.loadInfo();
        this.subscription = this.communicationService.verificacion$.subscribe(value => this.verificacion = value);
      }
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
      this.destroy$.next();
      this.destroy$.complete();
      this.data = null;
    }
    loadInfo() {
      this.store.select(containerized_load_selectors/* selectTruckVisitNbrData */.kX).subscribe(truckVisitNbrData => {
        if (truckVisitNbrData) {
          this.data = truckVisitNbrData;
          this.buildElementData();
        }
      });
    }
    buildElementData() {
      // Construye ELEMENT_DATA a partir de la variable data
      this.ELEMENT_DATA = [];
      if (this.data.firstAppointmentExport != null && this.data.firstAppointmentExport != undefined && this.data.firstAppointmentExport != "" && this.data.firstAppointmentExport != 0) {
        let sizeT = 0;
        if (this.data.firstContainerExportTwenty == '1') {
          sizeT = 20;
        } else {
          sizeT = 40;
        }
        let data = {
          position: this.data.firstAppointmentExport,
          container: this.data.firstContainerExport,
          size: sizeT,
          transaction: 'EXPORT'
        };
        this.ELEMENT_DATA.push(data);
      }
      if (this.data.secondAppointmentExport != null && this.data.secondAppointmentExport != undefined && this.data.secondAppointmentExport != "" && this.data.secondAppointmentExport != 0) {
        let sizeT = 0;
        if (this.data.secondContainerExportTwenty == '1') {
          sizeT = 20;
        } else {
          sizeT = 40;
        }
        let data = {
          position: this.data.secondAppointmentExport,
          container: this.data.secondContainerExport,
          size: sizeT,
          transaction: 'EXPORT'
        };
        this.ELEMENT_DATA.push(data);
      }
      if (this.data.firstAppointmentImport != null && this.data.firstAppointmentImport != undefined && this.data.firstAppointmentImport != "" && this.data.firstAppointmentImport != 0) {
        let sizeT = 0;
        if (this.data.firstContainerImportTwenty == '1') {
          sizeT = 20;
        } else {
          sizeT = 40;
        }
        let data = {
          position: this.data.firstAppointmentImport,
          container: this.data.firstContainerImport,
          size: sizeT,
          transaction: 'IMPORT'
        };
        this.ELEMENT_DATA.push(data);
      }
      if (this.data.secondAppointmentImport != null && this.data.secondAppointmentImport != undefined && this.data.secondAppointmentImport != "" && this.data.secondAppointmentImport != 0) {
        let sizeT = 0;
        if (this.data.secondContainerImportTwenty == '1') {
          sizeT = 20;
        } else {
          sizeT = 40;
        }
        let data = {
          position: this.data.secondAppointmentImport,
          container: this.data.secondContainerImport,
          size: sizeT,
          transaction: 'IMPORT'
        };
        this.ELEMENT_DATA.push(data);
      }
      /*
            {
              container: this.data.firstContainerExport,
              position: this.data.secondAppointmentExport,
              size: this.getSize(this.data.firstContainerExportTwenty),
              transaction: 'EXPORT'
            },
            {
              position: this.data.secondAppointmentExport,
              container: this.data.secondContainerExport,
              size: this.getSize(this.data.secondContainerExportTwenty),
              transaction: 'EXPORT'
            },
            {
              position: this.data.firstAppointmentImport,
              container: this.data.firstContainerImport,
              size: this.getSize(this.data.firstContainerImportTwenty),
              transaction: 'IMPORT'
            },
            {
              position: this.data.secondAppointmentImport,
              container: this.data.secondContainerImport,
              size: this.getSize(this.data.secondContainerImportTwenty),
              transaction: 'IMPORT'
            }
          ];*/
      this.ELEMENT_DATA = this.ELEMENT_DATA.filter(item => item.container !== undefined && item.container !== '');
      // Asigna el nuevo ELEMENT_DATA a la fuente de datos
      this.dataSource = this.ELEMENT_DATA;
    }
    getSize(containerTwenty) {
      return containerTwenty === '1' ? "20''" : "40''";
    }
    getTransaction(appointment) {
      return appointment === 'EXPORT' ? 'EXPORT' : 'IMPORT';
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
    return new (t || AppointmentCreationComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(communication_service/* CommunicationService */.O), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(storageservice_service/* StorageserviceService */.S), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f));
  };
  AppointmentCreationComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AppointmentCreationComponent,
    selectors: [["app-appointment-creation"]],
    decls: 2,
    vars: 2,
    consts: [["class", "containerized-load", 4, "ngIf"], [4, "ngIf"], [1, "containerized-load"], [1, "main-panel"], [1, "card"], [1, "card-header"], [1, "text-titulo"], [1, "card2"], [1, "span-icon"], [1, "icon-dollar"], [1, "card-content"], [1, "textop"], [1, "mat-lista"], [1, "divisores"], [1, "div-datos"], [1, "table"], ["mat-table", "", 1, "mat-elevation-z1", "dimension-tabla", "box-s-none", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "class", "tc border-l", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "tc border-l", 4, "matCellDef"], ["matColumnDef", "container"], ["mat-header-cell", "", "class", "tc", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "tc", 4, "matCellDef"], ["matColumnDef", "size"], ["mat-cell", "", "class", "tc", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "transaction"], ["mat-header-cell", "", "class", "tc border-r", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "tc border-r", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "tc", "border-l"], ["mat-cell", "", 1, "tc", "border-l"], ["mat-header-cell", "", 1, "tc"], ["mat-cell", "", 1, "tc"], ["mat-cell", "", 1, "tc", 2, "text-align", "center"], [1, "badge", "badge-new"], ["mat-header-cell", "", 1, "tc", "border-r"], ["mat-cell", "", 1, "tc", "border-r"], ["mat-header-row", ""], ["mat-row", ""], [3, "origen"]],
    template: function AppointmentCreationComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, AppointmentCreationComponent_div_0_Template, 43, 8, "div", 0);
        core/* ɵɵtemplate */.YNc(1, AppointmentCreationComponent_div_1_Template, 2, 1, "div", 1);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", !ctx.isTransport);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.showCard && ctx.isTransport);
      }
    },
    dependencies: [common/* NgIf */.O5, router/* RouterOutlet */.lC, icon/* MatIcon */.Hw, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, list/* MatList */.i$, list/* MatListItem */.Tg, divider/* MatDivider */.d, card/* MatCard */.a8, card_appointment_component/* CardAppointmentComponent */.W],
    styles: [".card[_ngcontent-%COMP%]{width:475px;margin:20px;border:none;font-size:12px;font-family:Roboto,sans-serif;color:#666}.card2[_ngcontent-%COMP%]{margin-left:2.5%;width:95%;margin-top:15px}.main-panel[_ngcontent-%COMP%]{height:100vh;overflow-y:scroll;width:100%}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:16px;font-size:16px;background-color:transparent;border-top-left-radius:10px;border-top-right-radius:10px}.card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#666;background-color:#e5e5e5;border:none;border-radius:50px;width:100px;font-size:16px}.card-content[_ngcontent-%COMP%]{margin-left:60px;font-size:14px;height:80px}.table[_ngcontent-%COMP%]{border-spacing:0;width:90%;border:none;font-size:12px;margin-top:100px;text-align:center}.row[_ngcontent-%COMP%]{background-color:#e5e5e5;border-bottom:1px solid transparent;margin-bottom:5px;border-radius:5px;border:1px solid transparent;display:flex;justify-content:space-between;font-size:12px}.box[_ngcontent-%COMP%]{flex:1;padding:10px}.card-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:10px;margin-right:5px;margin-bottom:5px}.green-button[_ngcontent-%COMP%]{font-weight:700;background-color:#5c753b;color:#fff;margin-left:10px;border-radius:5px;padding:8px 16px;border:transparent;font-size:15px}.superior-button[_ngcontent-%COMP%]{font-size:10px;height:20px;width:120px!important}.header[_ngcontent-%COMP%]{background-color:#e5e5e5;border-bottom:1px solid transparent;margin-top:10px;margin-bottom:10px;border-radius:5px;border:1px solid transparent;display:flex;justify-content:space-between;font-weight:700}.icon-button[_ngcontent-%COMP%]{font-weight:700;display:flex;align-items:center;border:none;border-radius:5px;font-family:Roboto,sans-serif;width:100px;padding:5px}.icon-button-superior[_ngcontent-%COMP%]{font-size:10px;font-weight:700;display:flex;align-items:center;border:none;border-radius:5px;font-family:Roboto,sans-serif;width:150px;padding:5px}.icon-small[_ngcontent-%COMP%]{height:15px;width:20px;font-size:15px;border-right:1.8px solid #000;margin-right:5px}.icon-dollar[_ngcontent-%COMP%]{font-size:50px;margin-top:25px;width:50px;height:50px}.span-icon[_ngcontent-%COMP%]{position:absolute;margin-top:-20px}.text-fecha[_ngcontent-%COMP%]{font-size:12px}.text-titulo[_ngcontent-%COMP%]{font-weight:700;font-size:16px}.divisores[_ngcontent-%COMP%]{font-size:12px;height:30px!important}.mat-lista[_ngcontent-%COMP%]{border:1px}.mat-list-item.divisores[_ngcontent-%COMP%]{white-space:normal;overflow:visible}.dimension-tabla[_ngcontent-%COMP%]{width:400px!important;color:#666}.mdc-data-table__header-cell[_ngcontent-%COMP%]{color:#666!important}.div-datos[_ngcontent-%COMP%]{color:#666!important;font-size:14px}.mat-divider[_ngcontent-%COMP%]{width:400px!important}.textop[_ngcontent-%COMP%]{margin-left:15px}.tc[_ngcontent-%COMP%]{background:#e5e5e5!important;color:#666!important}.border-l[_ngcontent-%COMP%]{border-top-left-radius:30px!important;border-bottom-left-radius:30px!important}.border-r[_ngcontent-%COMP%]{border-top-right-radius:30px!important;border-bottom-right-radius:30px!important}.box-s-none[_ngcontent-%COMP%]{box-shadow:none!important}.box-s-none[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{height:35px!important}.badge-new[_ngcontent-%COMP%]{background-color:#777;color:#fff;border-radius:10px}"]
  });
  return AppointmentCreationComponent;
})();
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
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/upload-documents/UploadDocumentsComponent.ts















const UploadDocumentsComponent_c0 = ["hijo"];
function UploadDocumentsComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "app-customer-searcher", 6);
    core/* ɵɵlistener */.NdJ("customerSearch", function UploadDocumentsComponent_ng_container_3_ng_container_1_Template_app_customer_searcher_customerSearch_1_listener($event) {
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
function UploadDocumentsComponent_ng_container_3_div_2_Template(rf, ctx) {
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
function UploadDocumentsComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, UploadDocumentsComponent_ng_container_3_ng_container_1_Template, 2, 4, "ng-container", 2);
    core/* ɵɵtemplate */.YNc(2, UploadDocumentsComponent_ng_container_3_div_2_Template, 3, 3, "div", 5);
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
function UploadDocumentsComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "app-agent-searcher", 7);
    core/* ɵɵlistener */.NdJ("agentSearch", function UploadDocumentsComponent_ng_container_4_ng_container_1_Template_app_agent_searcher_agentSearch_1_listener($event) {
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
function UploadDocumentsComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, UploadDocumentsComponent_ng_container_4_ng_container_1_Template, 2, 4, "ng-container", 2);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.currentUser.empresa);
  }
}
let UploadDocumentsComponent = /*#__PURE__*/(() => {
  class UploadDocumentsComponent {
    constructor(activatedRoute, store, router, base64EncryptionUtilService, storageService) {
      this.activatedRoute = activatedRoute;
      this.store = store;
      this.router = router;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.storageService = storageService;
      this.destroy$ = new Subject/* Subject */.x();
      this.alert = {
        showAlert: false,
        message: "",
        clase: ""
      };
      this.routeData = {
        documentation_module: ''
      };
      this.routeDataPreview = {
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
      this.documentationContainer = false;
      this.title = "Documentación";
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
          this.routeDataPreview = data;
        }
      });
      this.store.select(containerized_load_selectors/* containerizedLoadFeatureSelector */.qO).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          this.nbr = result.result[0]?.blNumber;
          this.consignee = result.result[0]?.consigneeName != null ? result.result[0].consigneeName : '';
          this.nitConsignee = result.result[0]?.consigneeId != null ? result.result[0].consigneeId : '';
          this.blHaveConsignee = result.result[0]?.consigneeName != null;
          this.agent = result.result[0]?.loadAgentName != null ? result.result[0].loadAgentName : '';
          this.nitAgent = result.result[0]?.loadAgentId != null ? result.result[0].loadAgentId : '';
          this.blHaveAgent = result.result[0]?.loadAgentId != null;
          if (result.setDocumentacionContainer) {
            this.documentationContainer = true;
            this.routeData = {
              documentation_module: 'EXPO_CC'
            };
          } else {
            this.documentationContainer = false;
            this.routeData = this.routeDataPreview;
            this.title = "Documentación";
          }
        },
        error: error => console.error(error)
      });
      this.storageSubscription = this.storageService.getStorageChanges().subscribe(action => {
        if (action.action === 'setNavigateToContainerDocumentation') {
          this.documentationContainer = true;
        }
      });
      this.store.select(shared_selectors/* sharedFeatureSelector */.x).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          if (result) {
            if (result.bookingID) {
              this.nbr = result.bookingID[0].nbr || '';
              this.title = "Domentación para ".concat(this.nbr);
            }
          }
        }
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
      if (this.documentationContainer) {
        return (0,of.of)(true).pipe((0,take/* take */.q)(1));
      }
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
        this.store.dispatch((0,containerized_load_actions/* getUpdateAgentAndConsigneeInBl */.j4)({
          body
        }));
        return this.store.select(containerized_load_selectors/* containerizedLoadFeatureSelector */.qO).pipe((0,filter/* filter */.h)(result => result.loadedCustomer === 'true'), (0,map/* map */.U)(() => true), (0,take/* take */.q)(1));
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
        this.router.navigate(['/', 'carga-contenerizada']);
        this.store.dispatch((0,containerized_load_actions/* getContainerizedLoad */.M8)({
          nbr: this.base64EncryptionUtilService.encrypt(this.nbr)
        }));
      }
    }
  }
  UploadDocumentsComponent.ɵfac = function UploadDocumentsComponent_Factory(t) {
    return new (t || UploadDocumentsComponent)(core/* ɵɵdirectiveInject */.Y36(router/* ActivatedRoute */.gz), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(storageservice_service/* StorageserviceService */.S));
  };
  UploadDocumentsComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: UploadDocumentsComponent,
    selectors: [["app-upload-documents"]],
    viewQuery: function UploadDocumentsComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(UploadDocumentsComponent_c0, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.uploadFileComponent = _t.first);
      }
    },
    decls: 7,
    vars: 6,
    consts: [[1, "documents-load"], [1, "documents-load__title"], [4, "ngIf"], [3, "module", "formValid", "nbr"], ["hijo", ""], [3, "class", 4, "ngIf"], [1, "service-orders-create__customer-searcher", 3, "controlDisabled", "searcher", "agent", "data", "customerSearch"], [1, "service-orders-create__customer-searcher", 3, "controlDisabled", "searcher", "agent", "data", "agentSearch"]],
    template: function UploadDocumentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "h3", 1);
        core/* ɵɵtext */._uU(2);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(3, UploadDocumentsComponent_ng_container_3_Template, 3, 2, "ng-container", 2);
        core/* ɵɵtemplate */.YNc(4, UploadDocumentsComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        core/* ɵɵelement */._UZ(5, "app-upload-file", 3, 4);
        core/* ɵɵelementEnd */.qZA();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵtextInterpolate1 */.hij(" ", ctx.title, " ");
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.currentUser && !ctx.documentationContainer);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.currentUser && !ctx.documentationContainer);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("module", ctx.routeData.documentation_module)("formValid", ctx.consigneeValid.bind(ctx))("nbr", ctx.nbr);
      }
    },
    dependencies: [common/* NgIf */.O5, agent_searcher_component/* AgentSearcherComponent */.Z, customer_searcher_component/* CustomerSearcherComponent */.p, upload_file_component/* UploadFileComponent */.R],
    styles: [".documents-load[_ngcontent-%COMP%]{padding:1rem;padding-top:0;padding-bottom:0;display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto auto;row-gap:1rem}.documents-load__title[_ngcontent-%COMP%]{font-size:1.5rem;color:#78909c}.alerta[_ngcontent-%COMP%]{color:#f44336;padding:-2rem 1rem 1rem;margin-bottom:0rem;border-radius:.2rem;margin-top:-2rem}.exitoso[_ngcontent-%COMP%]{background-color:#9fcf9f;color:#fff;padding:1rem;margin-bottom:1rem;border-radius:.2rem}"]
  });
  return UploadDocumentsComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/enums/documentation-modules.enum.ts
var documentation_modules_enum = __webpack_require__(92666);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(15439);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/button.mjs
var fesm2020_button = __webpack_require__(4859);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/sort.mjs
var sort = __webpack_require__(96308);
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/generate-pin-result-item/generate-pin-result-item.component.ts






function GeneratePinResultItemComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵnamespaceHTML */.kcU();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 23);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij("Pin ", ctx_r0.pin.pin, "");
  }
}
function GeneratePinResultItemComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 24);
    core/* ɵɵtext */._uU(1, "Contenedor");
    core/* ɵɵelementEnd */.qZA();
  }
}
function GeneratePinResultItemComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 25);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r10.unit);
  }
}
function GeneratePinResultItemComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 24);
    core/* ɵɵtext */._uU(1, "Tipo");
    core/* ɵɵelementEnd */.qZA();
  }
}
function GeneratePinResultItemComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 26)(1, "span", 27);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij("", element_r11.size, "''");
  }
}
function GeneratePinResultItemComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 24);
    core/* ɵɵtext */._uU(1, "Transportista");
    core/* ɵɵelementEnd */.qZA();
  }
}
function GeneratePinResultItemComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 25);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r12.shipper);
  }
}
function GeneratePinResultItemComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 28);
  }
}
function GeneratePinResultItemComponent_tr_28_Template(rf, ctx) {
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
      this.displayedColumns = ["unit", "size", "shipper"];
      this.dataSource = new table/* MatTableDataSource */.by(this.pin.units);
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
      pin: "pin"
    },
    decls: 29,
    vars: 4,
    consts: [[1, "generate-pin-result__item"], [1, "generate-pin-result__header"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 40.59 25.45", 1, "generate-pin-result__truck"], ["id", "Capa_1-2"], [1, "cls-2"], ["id", "s", "d", "M30.88,17.23c-1.58,0-2.97.83-3.75,2.07h-13.38c-.5-.8-1.25-1.42-2.14-1.77V0h28.99v19.3h-5.96c-.79-1.24-2.17-2.07-3.75-2.07Z", 1, "cls-1"], ["id", "s-2", "d", "M40.59,20.97c0,.18-.07.35-.23.49-.15.13-.35.2-.55.2h-4.51c0-.6-.12-1.18-.34-1.7h5.62v1.01Z", 1, "cls-1"], ["id", "s-3", "d", "M26.44,21.66h-12.02c0-.6-.12-1.18-.34-1.7h12.69c-.22.52-.34,1.1-.34,1.7Z", 1, "cls-1"], ["id", "s-4", "d", "M0,11.82v8.01c0,.47.18.94.54,1.3.36.36.83.54,1.3.54h3.72c0-2.45,1.99-4.43,4.43-4.43.25,0,.5.02.74.06V4.63s-2.99.01-4.52.24c-1.53.23-3.13,1.28-4.36,2.51S0,10.21,0,11.82ZM1.29,11.7c0-1.18.45-2.36,1.35-3.26.9-.9,2.08-1.67,3.2-1.84,1.12-.17,3.32-.18,3.32-.18v5.61c0,.15-.05.29-.15.42-.1.12-.23.2-.38.23l-6.57,1.31c-.19.04-.38,0-.54-.13-.16-.13-.24-.32-.24-.51v-1.64Z", 1, "cls-1"], ["id", "s-5", "d", "M27.49,19.96c-.26.51-.4,1.09-.4,1.7,0,2.09,1.69,3.79,3.79,3.79,2.09,0,3.79-1.7,3.79-3.79,0-.61-.14-1.19-.4-1.7-.07-.14-.15-.28-.24-.42-.06-.08-.12-.17-.18-.25-.7-.87-1.76-1.42-2.96-1.42-1.2,0-2.27.56-2.96,1.42-.06.08-.12.16-.18.25-.09.13-.17.27-.24.42ZM28.92,21.66c0-.73.4-1.36.99-1.7.29-.17.62-.26.98-.26s.69.09.98.26c.59.34.99.97.99,1.7,0,1.08-.88,1.96-1.96,1.96s-1.96-.88-1.96-1.96Z", 1, "cls-1"], ["id", "s-6", "d", "M6.2,21.66c0,2.09,1.69,3.79,3.79,3.79,2.09,0,3.79-1.7,3.79-3.79,0-.78-.24-1.51-.64-2.12-.38-.56-.91-1.02-1.53-1.31-.27-.13-.57-.23-.88-.29-.24-.05-.48-.07-.74-.07-2.09,0-3.79,1.69-3.79,3.79ZM8.03,21.66c0-1.08.88-1.96,1.96-1.96.26,0,.51.05.74.14.36.14.66.39.88.7.22.32.35.7.35,1.12,0,1.08-.88,1.96-1.96,1.96-1.08,0-1.96-.88-1.96-1.96Z", 1, "cls-1"], ["id", "white_stripe", "x", "11.6", "y", "1.65", "width", "28.99", "height", ".49", 1, "cls-1"], [4, "ngIf"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "unit"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-cell__left", 4, "matCellDef"], ["matColumnDef", "size"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "shipper"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "generate-pin-result__pin"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "table-cell__left"], ["mat-cell", ""], [1, "table-cell__right"], ["mat-header-row", ""], ["mat-row", ""]],
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
        core/* ɵɵtemplate */.YNc(15, GeneratePinResultItemComponent_ng_container_15_Template, 3, 1, "ng-container", 12);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵnamespaceHTML */.kcU();
        core/* ɵɵelementStart */.TgZ(16, "table", 13, 14);
        core/* ɵɵelementContainerStart */.ynx(18, 15);
        core/* ɵɵtemplate */.YNc(19, GeneratePinResultItemComponent_th_19_Template, 2, 0, "th", 16);
        core/* ɵɵtemplate */.YNc(20, GeneratePinResultItemComponent_td_20_Template, 2, 1, "td", 17);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(21, 18);
        core/* ɵɵtemplate */.YNc(22, GeneratePinResultItemComponent_th_22_Template, 2, 0, "th", 16);
        core/* ɵɵtemplate */.YNc(23, GeneratePinResultItemComponent_td_23_Template, 3, 1, "td", 19);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(24, 20);
        core/* ɵɵtemplate */.YNc(25, GeneratePinResultItemComponent_th_25_Template, 2, 0, "th", 16);
        core/* ɵɵtemplate */.YNc(26, GeneratePinResultItemComponent_td_26_Template, 2, 1, "td", 17);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(27, GeneratePinResultItemComponent_tr_27_Template, 1, 0, "tr", 21);
        core/* ɵɵtemplate */.YNc(28, GeneratePinResultItemComponent_tr_28_Template, 1, 0, "tr", 22);
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(15);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.pin);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.dataSource);
        core/* ɵɵadvance */.xp6(11);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [common/* NgIf */.O5, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, sort/* MatSort */.YE, sort/* MatSortHeader */.nU],
    styles: [".generate-pin-result__item[_ngcontent-%COMP%]{background-color:#fff;padding:1rem;border-radius:.5rem;margin-bottom:2rem}.generate-pin-result__header[_ngcontent-%COMP%]{width:max-content;margin-bottom:1rem;padding-bottom:.5rem;border-bottom:1px #636e72 solid;display:flex;justify-content:flex-start;align-items:center}.generate-pin-result__truck[_ngcontent-%COMP%]{width:4rem;margin-right:1rem}.generate-pin-result__pin[_ngcontent-%COMP%]{font-size:2.5rem;font-family:Gilroy-light!important}.generate-pin__unit-size-text[_ngcontent-%COMP%]{color:#fff;background-color:#636e72;padding:.15rem;border-radius:.5rem;font-family:Gilroy-ExtraBold!important}"]
  });
  return GeneratePinResultItemComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/generate-pin-result/generate-pin-result.component.ts







function GeneratePinResultComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "span", 6);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r0.defaultDateformat(ctx_r0.dialogData.pins[0].createdAt));
  }
}
function GeneratePinResultComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "span", 7);
    core/* ɵɵtext */._uU(2, " Se gener\u00F3");
    core/* ɵɵelement */._UZ(3, "br");
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵtextInterpolate1 */.hij(" el PIN para el BL ", ctx_r1.dialogData.pins[0].blNbr, " ");
  }
}
function GeneratePinResultComponent_ng_container_4_app_generate_pin_result_item_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-generate-pin-result-item", 10);
  }
  if (rf & 2) {
    const pin_r4 = ctx.$implicit;
    core/* ɵɵproperty */.Q6J("pin", pin_r4);
  }
}
function GeneratePinResultComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 8);
    core/* ɵɵtemplate */.YNc(2, GeneratePinResultComponent_ng_container_4_app_generate_pin_result_item_2_Template, 1, 1, "app-generate-pin-result-item", 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r2.pins);
  }
}
let GeneratePinResultComponent = /*#__PURE__*/(() => {
  class GeneratePinResultComponent {
    constructor(dialogData) {
      this.dialogData = dialogData;
      this.pins = [];
    }
    ngOnInit() {
      if (this.dialogData.pins.length) this.pins = this.dialogData.pins.map(value => ({
        pin: value.pinNbr,
        units: value.pinContainerized.map(pinValue => ({
          unit: pinValue.unitNbr,
          size: pinValue.twenty ? "20" : "40",
          shipper: pinValue.truckingCompanyNameLDAP,
          active: pinValue.active
        }))
      }));
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
    decls: 9,
    vars: 3,
    consts: [[1, "generate-pin-result__header"], [4, "ngIf"], ["mat-dialog-title", ""], ["mat-dialog-actions", ""], [1, "generate-pin-result__actions"], ["mat-raised-button", "", "mat-dialog-close", "", "color", "primary", 1, "generate-pin-result__submit"], [1, "generate-pin-result__date"], [1, "generate-pin-result__title"], ["mat-dialog-content", "", 1, "generate-pin-result__content"], ["class", "generate-pin-result__result-item", 3, "pin", 4, "ngFor", "ngForOf"], [1, "generate-pin-result__result-item", 3, "pin"]],
    template: function GeneratePinResultComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0);
        core/* ɵɵtemplate */.YNc(1, GeneratePinResultComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(2, "h1", 2);
        core/* ɵɵtemplate */.YNc(3, GeneratePinResultComponent_ng_container_3_Template, 5, 1, "ng-container", 1);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(4, GeneratePinResultComponent_ng_container_4_Template, 3, 1, "ng-container", 1);
        core/* ɵɵelementStart */.TgZ(5, "div", 3)(6, "div", 4)(7, "button", 5);
        core/* ɵɵtext */._uU(8, "Ok");
        core/* ɵɵelementEnd */.qZA()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.dialogData.pins.length);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.dialogData.pins.length);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.pins.length);
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, dialog/* MatDialogClose */.ZT, dialog/* MatDialogTitle */.uh, dialog/* MatDialogContent */.xY, dialog/* MatDialogActions */.H8, fesm2020_button/* MatButton */.lW, GeneratePinResultItemComponent],
    styles: [".generate-pin-result__header[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.generate-pin-result__date[_ngcontent-%COMP%]{color:#92b975;border:#92B975 solid 1px;margin-top:1rem;margin-right:1rem;border-radius:.25rem;padding:.5rem;font-family:Gilroy-light!important;font-size:1.25rem}.generate-pin-result__title[_ngcontent-%COMP%]{color:#92b975;font-family:Gilroy-ExtraBold!important;font-size:1.5rem}.generate-pin-result__content[_ngcontent-%COMP%]{padding:2rem;background-color:#ecf0f1}.generate-pin-result__result-item[_ngcontent-%COMP%]{margin-bottom:1rem}.generate-pin-result__actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.generate-pin-result__submit[_ngcontent-%COMP%]{color:#fff;font-family:Gilroy-light!important}"]
  });
  return GeneratePinResultComponent;
})();
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/snack-bar.mjs
var snack_bar = __webpack_require__(17009);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/checkbox.mjs
var fesm2020_checkbox = __webpack_require__(56709);
// EXTERNAL MODULE: ./src/app/shared/directives/double-factor-authentication.directive.ts
var double_factor_authentication_directive = __webpack_require__(53826);
// EXTERNAL MODULE: ./src/app/shared/components/truck-searcher/truck-searcher.component.ts
var truck_searcher_component = __webpack_require__(31589);
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/generate-pin-truck-unit/generate-pin-truck-unit.component.ts





const generate_pin_truck_unit_component_c0 = ["checkbox"];
let GeneratePinTruckUnitComponent = /*#__PURE__*/(() => {
  class GeneratePinTruckUnitComponent {
    constructor(matSnackBar) {
      this.matSnackBar = matSnackBar;
      this.changeUnit = new core/* EventEmitter */.vpe();
      this.truckValid = true;
    }
    ngAfterViewInit() {
      const newUnit = Object.assign({}, this.unit);
      newUnit.checkbox = this.checkbox;
      this.changeUnit.emit(newUnit);
    }
    addTruckToContainer(value) {
      const newUnit = Object.assign({}, this.unit);
      newUnit.trucker = value;
      this.unit = newUnit;
    }
    matChecboxUnitChange(event, element) {
      const newUnit = Object.assign({}, this.unit);
      if (newUnit.trucker && newUnit.trucker.split("/")[1]) {
        newUnit.selected = event.checked;
        if (this.truckValid) {
          this.changeUnit.emit(newUnit);
        }
      } else {
        this.matSnackBar.open("Error, no ha seleccionado contenedores o uno los seleccionados no tienen empresa de transporte asociada", "", {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        });
        element.checked = false;
      }
    }
    addTruckControl(value) {
      const newUnit = Object.assign({}, this.unit);
      newUnit.control = value;
      newUnit.cleanControl = this.addTruckToContainer.bind(this, "");
      this.unit = newUnit;
      if (value.errors) {
        this.truckValid = false;
      } else {
        this.truckValid = true;
      }
    }
  }
  GeneratePinTruckUnitComponent.ɵfac = function GeneratePinTruckUnitComponent_Factory(t) {
    return new (t || GeneratePinTruckUnitComponent)(core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux));
  };
  GeneratePinTruckUnitComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: GeneratePinTruckUnitComponent,
    selectors: [["app-generate-pin-truck-unit"]],
    viewQuery: function GeneratePinTruckUnitComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(generate_pin_truck_unit_component_c0, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.checkbox = _t.first);
      }
    },
    inputs: {
      unit: "unit",
      customerId: ["consigneeId", "customerId"]
    },
    outputs: {
      changeUnit: "changeUnit"
    },
    decls: 9,
    vars: 4,
    consts: [[1, "generate-pin__unit"], ["color", "primary", 1, "generate-pin__checkbox", 3, "disabled", "change"], ["checkbox", ""], [1, "generate-pin__unit-nbr"], [1, "generate-pin__unit-size"], [1, "generate-pin__unit-size-text"], [3, "consigneeId", "truckSearch", "truckControl"]],
    template: function GeneratePinTruckUnitComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = core/* ɵɵgetCurrentView */.EpF();
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "mat-checkbox", 1, 2);
        core/* ɵɵlistener */.NdJ("change", function GeneratePinTruckUnitComponent_Template_mat_checkbox_change_1_listener($event) {
          core/* ɵɵrestoreView */.CHM(_r1);
          const _r0 = core/* ɵɵreference */.MAs(2);
          return core/* ɵɵresetView */.KtG(ctx.matChecboxUnitChange($event, _r0));
        });
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(3, "span", 3);
        core/* ɵɵtext */._uU(4);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(5, "div", 4)(6, "span", 5);
        core/* ɵɵtext */._uU(7);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(8, "app-truck-searcher", 6);
        core/* ɵɵlistener */.NdJ("truckSearch", function GeneratePinTruckUnitComponent_Template_app_truck_searcher_truckSearch_8_listener($event) {
          return ctx.addTruckToContainer($event);
        })("truckControl", function GeneratePinTruckUnitComponent_Template_app_truck_searcher_truckControl_8_listener($event) {
          return ctx.addTruckControl($event);
        });
        core/* ɵɵelementEnd */.qZA()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("disabled", !ctx.truckValid);
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵtextInterpolate */.Oqu(ctx.unit.unitNbr);
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵtextInterpolate1 */.hij("", ctx.unit.BlData.twenty ? "20" : "40", "''");
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("consigneeId", ctx.customerId);
      }
    },
    dependencies: [fesm2020_checkbox/* MatCheckbox */.oG, truck_searcher_component/* TruckSearcherComponent */.X],
    styles: [".generate-pin__unit[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto auto 1fr;column-gap:1rem}.generate-pin__checkbox[_ngcontent-%COMP%], .generate-pin__unit-nbr[_ngcontent-%COMP%], .generate-pin__unit-size[_ngcontent-%COMP%], .generate-pin__multiple[_ngcontent-%COMP%]{margin:0;text-align:center;vertical-align:middle;font-family:Gilroy-Light;font-size:1rem;display:flex;justify-content:center;align-items:center}.generate-pin__unit-size-text[_ngcontent-%COMP%]{color:#fff;background-color:#636e72;padding:.15rem;border-radius:.5rem;font-family:Gilroy-ExtraBold!important}"]
  });
  return GeneratePinTruckUnitComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/generate-pin/generate-pin.component.ts




















function GeneratePinComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "app-truck-searcher", 18);
    core/* ɵɵlistener */.NdJ("truckSearch", function GeneratePinComponent_ng_container_24_Template_app_truck_searcher_truckSearch_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r4 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r4.multipleTruckSearch($event));
    })("truckControl", function GeneratePinComponent_ng_container_24_Template_app_truck_searcher_truckControl_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r5);
      const ctx_r6 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r6.setTruckFormControl($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("consigneeId", ctx_r1.customerId);
  }
}
function GeneratePinComponent_ng_container_25_app_generate_pin_truck_unit_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "app-generate-pin-truck-unit", 20);
    core/* ɵɵlistener */.NdJ("changeUnit", function GeneratePinComponent_ng_container_25_app_generate_pin_truck_unit_1_Template_app_generate_pin_truck_unit_changeUnit_0_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r9 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r9.addUnit($event));
    });
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const unit_r8 = ctx.$implicit;
    const ctx_r7 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵproperty */.Q6J("unit", unit_r8)("consigneeId", ctx_r7.customerId);
  }
}
function GeneratePinComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, GeneratePinComponent_ng_container_25_app_generate_pin_truck_unit_1_Template, 1, 2, "app-generate-pin-truck-unit", 19);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r2.containersTruck);
  }
}
function GeneratePinComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "button", 21);
    core/* ɵɵtext */._uU(2, " Generar Pin ");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r3 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("appDoubleFactorAuthentication", "CC_IMP_PIN")("appDoubleFactorAPIGateway", ctx_r3.userInfo)("doubleFactorCallback", ctx_r3.submit.bind(ctx_r3))("doubleFactorIncorrectCallback", ctx_r3.cancel.bind(ctx_r3))("disabled", ctx_r3.invalid);
  }
}
let GeneratePinComponent = /*#__PURE__*/(() => {
  class GeneratePinComponent {
    constructor(store, matSnackBar, matDialog, router, base64EncryptionUtilService) {
      this.store = store;
      this.matSnackBar = matSnackBar;
      this.matDialog = matDialog;
      this.router = router;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.destroy$ = new Subject/* Subject */.x();
      this.CCdestroy$ = new Subject/* Subject */.x();
      this.privileges = privileges_enum/* privileges */.U;
      this.containersTruck = [];
      this.containersTruckSelected = [];
      this.invalid = true;
      this.truckValid = true;
      this.truckAsignned = false;
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      this.store.select(containerized_load_selectors/* containerizedLoadFeatureSelector */.qO).pipe((0,takeUntil/* takeUntil */.R)(this.CCdestroy$)).subscribe({
        next: result => {
          if (result.result.length) {
            if (result.result) if (result.result.length) this.customerId = result.result[0].consigneeId;
            let filteredResult = result.result.filter(item => item.yard);
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
              this.containersTruck = filteredResult.map(value => ({
                unitNbr: value.unitNbr,
                trucker: null,
                BlData: value,
                selected: false,
                disabled: false
              }));
              this.CCdestroy$.next();
              this.CCdestroy$.complete();
            } else {
              this.matSnackBar.open("Los contenedores asociados al BL no cumplen las condiciones", "", {
                verticalPosition: "top",
                panelClass: ["error-snackbar"],
                duration: 5000
              });
              this.CCdestroy$.next();
              this.CCdestroy$.complete();
              this.router.navigate(["/", "carga-contenerizada"]);
            }
          }
        },
        error: error => console.error(error)
      });
      this.store.select(containerized_load_selectors/* containerizedLoadFeatureSelector */.qO).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          if (result.truckResult) {
            if (result.truckResult.length) {
              if (result.truckResult[0].pinContainerized) {
                if (result.truckResult[0].pinContainerized.length) {
                  const dialog = this.matDialog.open(GeneratePinResultComponent, {
                    width: "60rem",
                    disableClose: true,
                    data: {
                      pins: result.truckResult
                    }
                  });
                  dialog.afterClosed().subscribe({
                    next: value => {
                      this.router.navigate(["/", "carga-contenerizada", "pin"]);
                    },
                    error: error => console.error(error)
                  });
                }
              }
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
      const validateTruckers = this.containersTruckSelected.filter(value => value.trucker && value.trucker.split("/")[1]).length;
      const containersTruck = this.containersTruckSelected.filter(value => value.selected);
      if (containersTruck.length) {
        if (validateTruckers) {
          this.store.dispatch((0,containerized_load_actions/* setOperationStuck */.ro)({
            operationStuck: true
          }));
          this.store.dispatch((0,containerized_load_actions/* getGeneratePin */.sS)({
            body: [{
              "nbr": containersTruck[0].BlData.blNumber,
              "isUnit": false,
              "isBooking": false,
              "isEdo": false,
              "isEro": false,
              "consignee": containersTruck[0].BlData.consigneeId,
              "unitsTrucks": containersTruck.map(item => ({
                "nbr": item.BlData.unitNbr,
                "truckId": item.trucker ? item.trucker.split("/")[0] : "",
                "truckName": item.trucker ? item.trucker.split("/")[1] : "",
                "twenty": item.BlData.twenty,
                "isoType": item.BlData.isoType
              })),
              "frghtKind": "FCL",
              "isGroup": 0,
              "emailNotification": {
                "name": this.userInfo.userName,
                "mail": null
              }
            }],
            hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_IMP_PIN")[0].notificable,
            privilege: "CC_IMP_PIN",
            notificationData: {
              userId: this.userInfo.empresa?.id,
              userfullName: `${this.userInfo.nombres} ${this.userInfo.apellidos}`,
              bl: containersTruck[0].BlData.blNumber,
              consigneeId: containersTruck[0].BlData.consigneeId,
              consigneeName: containersTruck[0].BlData.consigneeName,
              agent: "",
              truckName: [...new Set(containersTruck.map(item => item.trucker ? item.trucker.split("/")[1] : "").filter(Boolean))].join(", "),
              nbr: containersTruck.map(item => item.BlData.unitNbr).join(", ") // Número de contenedor o contenedores
            }
          }));
        } else {
          this.matSnackBar.open("Error, no ha seleccionado contenedores o uno los seleccionados no tienen empresa de transporte asociada", "", {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          });
        }
      } else {
        this.matSnackBar.open("Debe seleccionar al menos un contenedor para hacer el proceso", "", {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        });
      }
    }
    cancel() {
      this.router.navigate(["/", "carga-contenerizada"]);
    }
    addUnit(unit) {
      const existUnit = this.containersTruckSelected.filter(value => value.unitNbr === unit.unitNbr).length;
      if (existUnit) {
        this.containersTruckSelected = this.containersTruckSelected.map(value => {
          const newValue = Object.assign({}, value);
          if (newValue.unitNbr === unit.unitNbr) {
            newValue.trucker = unit.trucker;
            newValue.selected = unit.selected;
          }
          return newValue;
        });
        this.invalid = !!!this.containersTruckSelected.filter(value => value.selected).length;
      } else {
        this.containersTruckSelected = [...this.containersTruckSelected, unit];
        this.invalid = !!!this.containersTruckSelected.filter(value => value.selected).length;
      }
    }
    multipleTruckSearch(value) {
      this.trucker = value;
    }
    matChecboxMultipleChange(event, checkbox) {
      if (this.trucker && this.trucker.split("/")[1]) {
        if (event.checked) {
          this.containersTruckSelected = this.containersTruckSelected.map(value => {
            const newValue = Object.assign({}, value);
            newValue.trucker = this.trucker;
            newValue.selected = true;
            if (newValue.checkbox) {
              newValue.checkbox.checked = true;
              newValue.checkbox.disabled = true;
            }
            if (newValue.control) {
              newValue.control.disable();
              newValue.control.setValue(newValue.trucker);
            }
            this.truckAsignned = true;
            return newValue;
          });
          this.invalid = !!!this.containersTruckSelected.filter(value => value.selected).length;
          if (!this.invalid && !this.truckValid) {
            this.invalid = true;
          }
        } else {
          this.containersTruckSelected = this.containersTruckSelected.map(value => {
            const newValue = Object.assign({}, value);
            newValue.trucker = null;
            newValue.selected = false;
            if (newValue.checkbox) {
              newValue.checkbox.checked = false;
              newValue.checkbox.disabled = false;
            }
            if (newValue.control) {
              newValue.control.enable();
              newValue.control.setValue(null);
              if (newValue.cleanControl) newValue.cleanControl();
            }
            this.truckAsignned = true;
            return newValue;
          });
          this.invalid = !!!this.containersTruckSelected.filter(value => value.selected).length;
          if (!this.invalid && !this.truckValid) {
            this.invalid = true;
          }
        }
      } else {
        checkbox.checked = false;
        this.matSnackBar.open("Error, no ha seleccionado contenedores o uno los seleccionados no tienen empresa de transporte asociada", "", {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        });
      }
    }
    setTruckFormControl(value) {
      this.truckFormControl = value;
      if (value.errors) {
        this.truckValid = false;
        this.invalid = true;
      } else {
        this.truckValid = true;
      }
      if (this.truckValid) {
        this.invalid = !!!this.containersTruckSelected.filter(value => value.selected).length;
      } else {
        this.invalid = true;
      }
    }
  }
  GeneratePinComponent.ɵfac = function GeneratePinComponent_Factory(t) {
    return new (t || GeneratePinComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L));
  };
  GeneratePinComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: GeneratePinComponent,
    selectors: [["app-generate-pin"]],
    decls: 30,
    vars: 4,
    consts: [[1, "generate-pin"], [1, "title-card"], [1, "card-title"], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 83.36 1.91", 1, "welcome__line"], ["id", "Capa_1-2"], ["width", "31.37", "height", "1.91", 1, "cls-2"], ["x", "26.13", "width", "28.61", "height", "1.91", 1, "cls-3"], ["x", "54.74", "width", "28.61", "height", "1.91", 1, "cls-1"], [1, "generate-pin__caption"], [1, "generate-pin__caption-bold"], [1, "generate-pin__units"], [1, "generate-pin__all-units"], ["color", "primary", 1, "generate-pin__checkbox", 3, "disabled", "change"], ["checkbox", ""], [1, "generate-pin__multiple"], [4, "ngIf"], [1, "generate-pin__actions"], ["mat-flat-button", "", 1, "generate-pin__cancel", 3, "click"], [3, "consigneeId", "truckSearch", "truckControl"], [3, "unit", "consigneeId", "changeUnit", 4, "ngFor", "ngForOf"], [3, "unit", "consigneeId", "changeUnit"], ["mat-raised-button", "", "color", "primary", 1, "generate-pin__submit", 3, "appDoubleFactorAuthentication", "appDoubleFactorAPIGateway", "doubleFactorCallback", "doubleFactorIncorrectCallback", "disabled"]],
    template: function GeneratePinComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r11 = core/* ɵɵgetCurrentView */.EpF();
        core/* ɵɵelementStart */.TgZ(0, "mat-card")(1, "mat-card-content")(2, "div", 0)(3, "div", 1)(4, "h2", 2);
        core/* ɵɵtext */._uU(5, "Generar PIN para el BL");
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
        core/* ɵɵtext */._uU(16, " Para asignar PIN, seleccione la Empresa de transporte por cada contenedor ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtext */._uU(17, " o \"Asignaci\u00F3n M\u00FAltiple\" para asignar la misma Empresa a todos/algunos contenedores ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(18, "div", 10)(19, "div", 11)(20, "mat-checkbox", 12, 13);
        core/* ɵɵlistener */.NdJ("change", function GeneratePinComponent_Template_mat_checkbox_change_20_listener($event) {
          core/* ɵɵrestoreView */.CHM(_r11);
          const _r0 = core/* ɵɵreference */.MAs(21);
          return core/* ɵɵresetView */.KtG(ctx.matChecboxMultipleChange($event, _r0));
        });
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(22, "span", 14);
        core/* ɵɵtext */._uU(23, "Asignaci\u00F3n M\u00FAltiple");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(24, GeneratePinComponent_ng_container_24_Template, 2, 1, "ng-container", 15);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(25, GeneratePinComponent_ng_container_25_Template, 2, 1, "ng-container", 15);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(26, "div", 16)(27, "button", 17);
        core/* ɵɵlistener */.NdJ("click", function GeneratePinComponent_Template_button_click_27_listener() {
          return ctx.cancel();
        });
        core/* ɵɵtext */._uU(28, "Cancelar");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(29, GeneratePinComponent_ng_container_29_Template, 3, 5, "ng-container", 15);
        core/* ɵɵelementEnd */.qZA()()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(20);
        core/* ɵɵproperty */.Q6J("disabled", !ctx.truckValid);
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.customerId);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.customerId);
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.truckFormControl);
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, fesm2020_checkbox/* MatCheckbox */.oG, fesm2020_button/* MatButton */.lW, card/* MatCard */.a8, card/* MatCardContent */.dn, double_factor_authentication_directive/* DoubleFactorAuthenticationDirective */.A, truck_searcher_component/* TruckSearcherComponent */.X, GeneratePinTruckUnitComponent],
    styles: [".generate-pin[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto auto 1fr auto;row-gap:1rem}.generate-pin__caption[_ngcontent-%COMP%]{width:25rem;color:#636e72;font-family:Gilroy-Light;font-size:1.5rem;line-height:1.25}.generate-pin__caption-bold[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important}.generate-pin__all-units[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto 1fr;column-gap:1rem}.generate-pin__unit[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto auto 1fr;column-gap:1rem}.generate-pin__checkbox[_ngcontent-%COMP%], .generate-pin__unit-nbr[_ngcontent-%COMP%], .generate-pin__unit-size[_ngcontent-%COMP%], .generate-pin__multiple[_ngcontent-%COMP%]{margin:0;text-align:center;vertical-align:middle;font-family:Gilroy-Light;font-size:1rem;display:flex;justify-content:center;align-items:center}.generate-pin__unit-size-text[_ngcontent-%COMP%]{color:#fff;background-color:#636e72;padding:.15rem;border-radius:.5rem;font-family:Gilroy-ExtraBold!important}.generate-pin__actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.generate-pin__cancel[_ngcontent-%COMP%]{margin-right:1rem;font-family:Gilroy-Light}.generate-pin__submit[_ngcontent-%COMP%]{color:#fff!important;font-family:Gilroy-Light}.title-card[_ngcontent-%COMP%]{width:max-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#636e72;margin:0}"]
  });
  return GeneratePinComponent;
})();
// EXTERNAL MODULE: ./src/app/modules/containerized-load/components/generate-pin-display-item/generate-pin-display-item.component.ts
var generate_pin_display_item_component = __webpack_require__(83811);
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/generate-pin-display/generate-pin-display.component.ts











function GeneratePinDisplayComponent_ng_container_8_app_generate_pin_display_item_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "app-generate-pin-display-item", 9);
  }
  if (rf & 2) {
    const pin_r2 = ctx.$implicit;
    const ctx_r1 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵproperty */.Q6J("pin", pin_r2)("lastSearch", ctx_r1.lastSearch);
  }
}
function GeneratePinDisplayComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 7);
    core/* ɵɵtemplate */.YNc(2, GeneratePinDisplayComponent_ng_container_8_app_generate_pin_display_item_2_Template, 1, 2, "app-generate-pin-display-item", 8);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.pins);
  }
}
let GeneratePinDisplayComponent = /*#__PURE__*/(() => {
  class GeneratePinDisplayComponent {
    constructor(store, base64EncryptionUtilService, router) {
      this.store = store;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.router = router;
      this.destroy$ = new Subject/* Subject */.x();
      this.blNumber = "";
      this.lastSearch = "";
    }
    ngOnInit() {
      this.store.select(containerized_load_selectors/* containerizedLoadFeatureSelector */.qO).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          this.blNumber = result.truckResult[0].blNbr;
          this.lastSearch = result.lastSearch;
          this.pins = result.truckResult.map(value => ({
            pin: value.pinNbr,
            units: value.pinContainerized.map(pinValue => ({
              id: pinValue.id,
              unit: pinValue.unitNbr,
              size: pinValue.twenty ? "20" : "40",
              shipper: pinValue.truckingCompanyNameLDAP,
              active: pinValue.active
            }))
          }));
          this.destroy$.next();
          this.destroy$.complete();
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
      this.store.dispatch((0,containerized_load_actions/* cleanGeneratePin */.cS)());
      this.store.dispatch((0,containerized_load_actions/* getContainerizedLoad */.M8)({
        nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch)
      }));
      this.store.dispatch((0,containerized_load_actions/* setOperationStuck */.ro)({
        operationStuck: false
      }));
    }
    continue() {
      this.router.navigate(["/", "carga-contenerizada"]);
    }
  }
  GeneratePinDisplayComponent.ɵfac = function GeneratePinDisplayComponent_Factory(t) {
    return new (t || GeneratePinDisplayComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0));
  };
  GeneratePinDisplayComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: GeneratePinDisplayComponent,
    selectors: [["app-generate-pin-display"]],
    inputs: {
      pins: "pins"
    },
    decls: 12,
    vars: 2,
    consts: [[1, "generate-pin-display"], [1, "generate-pin-display__header"], [1, "generate-pin-display__title"], [1, "generate-pin-display__unit"], [4, "ngIf"], [1, "generate-pin-display__actions"], ["mat-raised-button", "", "color", "primary", 1, "generate-pin-display__continue", 3, "click"], [1, "generate-pin-display__content"], [3, "pin", "lastSearch", 4, "ngFor", "ngForOf"], [3, "pin", "lastSearch"]],
    template: function GeneratePinDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "mat-card")(1, "mat-card-content")(2, "div", 0)(3, "div", 1)(4, "span", 2);
        core/* ɵɵtext */._uU(5, " Se gener\u00F3 el PIN para el BL: ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(6, "span", 3);
        core/* ɵɵtext */._uU(7);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵtemplate */.YNc(8, GeneratePinDisplayComponent_ng_container_8_Template, 3, 1, "ng-container", 4);
        core/* ɵɵelementStart */.TgZ(9, "div", 5)(10, "button", 6);
        core/* ɵɵlistener */.NdJ("click", function GeneratePinDisplayComponent_Template_button_click_10_listener() {
          return ctx.continue();
        });
        core/* ɵɵtext */._uU(11, "Continuar Operando");
        core/* ɵɵelementEnd */.qZA()()()()();
      }
      if (rf & 2) {
        core/* ɵɵadvance */.xp6(7);
        core/* ɵɵtextInterpolate1 */.hij(" ", ctx.blNumber, " ");
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.pins.length);
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, fesm2020_button/* MatButton */.lW, card/* MatCard */.a8, card/* MatCardContent */.dn, generate_pin_display_item_component/* GeneratePinDisplayItemComponent */.a],
    styles: [".generate-pin-display[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr auto;row-gap:1rem}.generate-pin-display__header[_ngcontent-%COMP%]{margin-bottom:1rem;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.generate-pin-display__title[_ngcontent-%COMP%]{margin-bottom:.6rem;color:#92b975}.generate-pin-display__unit[_ngcontent-%COMP%]{color:#636e72}.generate-pin-display__unit[_ngcontent-%COMP%], .generate-pin-display__title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;font-size:1.5rem}.generate-pin-display__actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.generate-pin-display__continue[_ngcontent-%COMP%]{color:#fff!important;font-family:Gilroy-light!important}"]
  });
  return GeneratePinDisplayComponent;
})();
// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2020/keycodes.mjs
var keycodes = __webpack_require__(29521);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2020/forms.mjs
var fesm2020_forms = __webpack_require__(24006);
// EXTERNAL MODULE: ./src/app/state/queries/queries.actions.ts
var queries_actions = __webpack_require__(8988);
// EXTERNAL MODULE: ./src/app/modules/containerized-load/components/client-message-agreement-dialog/client-message-agreement-dialog.component.ts
var client_message_agreement_dialog_component = __webpack_require__(39820);
// EXTERNAL MODULE: ./src/app/state/queries/queries.selectors.ts
var queries_selectors = __webpack_require__(17399);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/form-field.mjs
var form_field = __webpack_require__(59549);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/input.mjs + 1 modules
var input = __webpack_require__(44144);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/chips.mjs
var chips = __webpack_require__(77331);
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/invoice-booking-management-billing/invoice-booking-management-billing.component.ts

























const invoice_booking_management_billing_component_c0 = ["containerCheckbox"];
function InvoiceBookingManagementBillingComponent_mat_chip_row_10_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-chip-row", 26);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const unit_r18 = ctx.$implicit;
    core/* ɵɵproperty */.Q6J("editable", false);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", unit_r18, " ");
  }
}
function InvoiceBookingManagementBillingComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "th", 27)(1, "div", 28)(2, "mat-checkbox", 29);
    core/* ɵɵlistener */.NdJ("change", function InvoiceBookingManagementBillingComponent_th_18_Template_mat_checkbox_change_2_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r20);
      const ctx_r19 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r19.matCheckboxSelectAllChange($event));
    });
    core/* ɵɵelementEnd */.qZA()()();
  }
}
function InvoiceBookingManagementBillingComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 30)(1, "div", 31)(2, "mat-checkbox", 29, 32);
    core/* ɵɵlistener */.NdJ("change", function InvoiceBookingManagementBillingComponent_td_19_Template_mat_checkbox_change_2_listener($event) {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r24);
      const element_r21 = restoredCtx.$implicit;
      const ctx_r23 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r23.matCheckboxChange($event, element_r21));
    });
    core/* ɵɵelementEnd */.qZA()()();
  }
}
function InvoiceBookingManagementBillingComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 27);
    core/* ɵɵtext */._uU(1, "N\u00B0");
    core/* ɵɵelementEnd */.qZA();
  }
}
function InvoiceBookingManagementBillingComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const i_r26 = ctx.index;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(i_r26 + 1);
  }
}
function InvoiceBookingManagementBillingComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 27);
    core/* ɵɵtext */._uU(1, "Contenedor");
    core/* ɵɵelementEnd */.qZA();
  }
}
function InvoiceBookingManagementBillingComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r27.unitNbr);
  }
}
function InvoiceBookingManagementBillingComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 27);
    core/* ɵɵtext */._uU(1, "Tipo");
    core/* ɵɵelementEnd */.qZA();
  }
}
function InvoiceBookingManagementBillingComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r28.twenty ? "20''" : "40''");
  }
}
function InvoiceBookingManagementBillingComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 27);
    core/* ɵɵtext */._uU(1, "No. Lotes");
    core/* ɵɵelementEnd */.qZA();
  }
}
function InvoiceBookingManagementBillingComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r29.lots);
  }
}
function InvoiceBookingManagementBillingComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 27);
    core/* ɵɵtext */._uU(1, "Peso(t)");
    core/* ɵɵelementEnd */.qZA();
  }
}
function InvoiceBookingManagementBillingComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r30 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r30.weight);
  }
}
function InvoiceBookingManagementBillingComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 27);
    core/* ɵɵtext */._uU(1, "Cantidad");
    core/* ɵɵelementEnd */.qZA();
  }
}
function InvoiceBookingManagementBillingComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(element_r31.quantity);
  }
}
function InvoiceBookingManagementBillingComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 33);
  }
}
function InvoiceBookingManagementBillingComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 34);
  }
}
let InvoiceBookingManagementBillingComponent = /*#__PURE__*/(() => {
  class InvoiceBookingManagementBillingComponent {
    constructor(router, activatedRoute, matDialog, store, base64EncryptionUtilService, matSnackBar) {
      this.router = router;
      this.activatedRoute = activatedRoute;
      this.matDialog = matDialog;
      this.store = store;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.matSnackBar = matSnackBar;
      this.detached = false;
      this.destroy$ = new Subject/* Subject */.x();
      this.invoiceManagementBillingFormGroup = new fesm2020_forms/* FormGroup */.cw({});
      this.separatorKeysCodes = [keycodes/* ENTER */.K5, keycodes/* COMMA */.OC];
      this.dataSource = new table/* MatTableDataSource */.by([]);
      this.displayedColumns = [];
      this.emails = [];
      this.customerId = "";
      this.customerName = "";
      this.selectedCustomer = "";
      this.selectedContainers = [];
      this.containers = [];
      this.clientMessageAgreement = true;
    }
    ngOnInit() {
      this.store.dispatch((0,containerized_load_actions/* cleanBillingData */.LQ)());
      this.store.dispatch((0,shared_actions/* cleanSelectedCustomer */.mS)());
      this.store.dispatch((0,shared_actions/* cleanSelectedAgent */.Wi)());
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          this.currentUser = result;
        },
        error: error => console.error(error)
      });
      this.store.select(containerized_load_selectors/* containerizedLoadFeatureSelector */.qO).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          this.customerId = result.resultBooking[0].shipperId;
          this.customerName = result.resultBooking[0].shipperName;
          this.containers = result.resultBooking.filter(value => value.yard);
          if (this.customerId) {
            this.store.dispatch((0,queries_actions/* getExecuteQuery */._x)({
              payload: {
                "queryName": "getListEmailBilling",
                "parameters": [{
                  "parameterId": 1,
                  "value": this.customerId,
                  "type": "String"
                }]
              }
            }));
          }
          if (result.resultBooking[0].onAccount) {
            if (this.clientMessageAgreement) {
              this.matDialog.open(client_message_agreement_dialog_component/* ClientMessageAgreementDialogComponent */.A, {
                width: "25rem"
              });
              this.clientMessageAgreement = false;
            }
          }
          this.displayedColumns = ["selected", "number", "unitNbr", "twenty"];
          this.dataSource = new table/* MatTableDataSource */.by(this.containers);
        },
        error: error => console.error(error)
      });
      this.store.select(queries_selectors/* queriesFeatureSelector */.w).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          if (result.result?.result.length) {
            this.emails = result.result.result[0].email_address.split(";");
          }
        },
        error: error => console.error(error)
      });
      this.invoiceManagementBillingFormGroup = new fesm2020_forms/* FormGroup */.cw({
        observations: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }, [fesm2020_forms/* Validators.maxLength */.kI.maxLength(250)])
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
      this.store.dispatch((0,queries_actions/* cleanQueryResult */.w_)());
      this.store.dispatch((0,shared_actions/* cleanCustomer */.n6)());
      this.store.dispatch((0,shared_actions/* cleanSelectedCustomer */.mS)());
    }
    submit() {
      if (this.selectedContainers.length) {
        this.store.dispatch((0,containerized_load_actions/* setSelectedCustomer */.AH)({
          customer: `${this.customerId}/${this.customerName}`
        }));
        this.store.dispatch((0,containerized_load_actions/* setSelectedContainers */.lQ)({
          containers: this.selectedContainers
        }));
        this.store.dispatch((0,containerized_load_actions/* getInvoiceCreate */.v4)({
          body: {
            bkg: this.selectedContainers[0].nbr,
            bl: null,
            customerId: this.customerId,
            date: null,
            units: this.selectedContainers.map(value => value.unitNbr),
            notes: this.invoiceManagementBillingFormGroup.controls["observations"].value
          }
        }));
        this.router.navigate(["/", "carga-contenerizada", "export", "proforma"]);
      }
    }
    cancel() {
      this.store.dispatch((0,queries_actions/* cleanQueryResult */.w_)());
      this.store.dispatch((0,shared_actions/* cleanSelectedCustomer */.mS)());
      let url = this.router.url.split("/");
      url.pop();
      this.router.navigate(url);
    }
    matCheckboxSelectAllChange(event) {
      if (event.checked) {
        this.containersCheckboxes.toArray().forEach(result => {
          result.checked = true;
        });
        this.selectedContainers = this.containers;
      } else {
        this.containersCheckboxes.toArray().forEach(result => {
          result.checked = false;
        });
        this.selectedContainers = [];
      }
    }
    matCheckboxChange(event, container) {
      if (event.checked) {
        this.selectedContainers = [...this.selectedContainers, container];
      } else {
        this.selectedContainers = this.selectedContainers.filter(value => value.unitNbr != container.unitNbr);
      }
    }
  }
  InvoiceBookingManagementBillingComponent.ɵfac = function InvoiceBookingManagementBillingComponent_Factory(t) {
    return new (t || InvoiceBookingManagementBillingComponent)(core/* ɵɵdirectiveInject */.Y36(router/* Router */.F0), core/* ɵɵdirectiveInject */.Y36(router/* ActivatedRoute */.gz), core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux));
  };
  InvoiceBookingManagementBillingComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: InvoiceBookingManagementBillingComponent,
    selectors: [["app-invoice-booking-management-billing"]],
    viewQuery: function InvoiceBookingManagementBillingComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(invoice_booking_management_billing_component_c0, 5);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.containersCheckboxes = _t);
      }
    },
    inputs: {
      detached: "detached"
    },
    decls: 61,
    vars: 9,
    consts: [[1, "invoice-management-billing"], [1, "invoice-management-billing__title"], [1, "invoice-management-billing__controls"], [1, "invoice-management-billing__form-group", 3, "formGroup"], ["appearance", "fill", 1, "example-chip-list"], [3, "disabled"], ["chipGrid", ""], [3, "editable", 4, "ngFor", "ngForOf"], [3, "matChipInputFor", "matChipInputSeparatorKeyCodes"], ["matInput", "", "type", "text", "formControlName", "observations"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "selected"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cel", "", 4, "matCellDef"], ["matColumnDef", "number"], ["matColumnDef", "unitNbr"], ["matColumnDef", "twenty"], ["matColumnDef", "lots"], ["matColumnDef", "weight"], ["matColumnDef", "quantity"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "invoice-management-billing__actions"], ["mat-flat-button", "", 1, "invoice-management-billing__cancel", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "invoice-management-billing__submit", 3, "disabled", "click"], [1, "invoice-management-billing__considerations"], [3, "editable"], ["mat-header-cell", ""], [1, "centered-cell__all"], ["color", "primary", 3, "change"], ["mat-cel", ""], [1, "centered-cell"], ["containerCheckbox", ""], ["mat-header-row", ""], ["mat-row", ""]],
    template: function InvoiceBookingManagementBillingComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0)(1, "h3", 1);
        core/* ɵɵtext */._uU(2, " Facturaci\u00F3n ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(3, "div", 2)(4, "form", 3)(5, "mat-form-field", 4)(6, "mat-label");
        core/* ɵɵtext */._uU(7, "Correo para env\u00EDo de factura electr\u00F3nica");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(8, "mat-chip-grid", 5, 6);
        core/* ɵɵtemplate */.YNc(10, InvoiceBookingManagementBillingComponent_mat_chip_row_10_Template, 2, 2, "mat-chip-row", 7);
        core/* ɵɵelement */._UZ(11, "input", 8);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(12, "mat-form-field")(13, "mat-label");
        core/* ɵɵtext */._uU(14, " Nota ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelement */._UZ(15, "textarea", 9);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(16, "table", 10);
        core/* ɵɵelementContainerStart */.ynx(17, 11);
        core/* ɵɵtemplate */.YNc(18, InvoiceBookingManagementBillingComponent_th_18_Template, 3, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(19, InvoiceBookingManagementBillingComponent_td_19_Template, 4, 0, "td", 13);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(20, 14);
        core/* ɵɵtemplate */.YNc(21, InvoiceBookingManagementBillingComponent_th_21_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(22, InvoiceBookingManagementBillingComponent_td_22_Template, 2, 1, "td", 13);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(23, 15);
        core/* ɵɵtemplate */.YNc(24, InvoiceBookingManagementBillingComponent_th_24_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(25, InvoiceBookingManagementBillingComponent_td_25_Template, 2, 1, "td", 13);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(26, 16);
        core/* ɵɵtemplate */.YNc(27, InvoiceBookingManagementBillingComponent_th_27_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(28, InvoiceBookingManagementBillingComponent_td_28_Template, 2, 1, "td", 13);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(29, 17);
        core/* ɵɵtemplate */.YNc(30, InvoiceBookingManagementBillingComponent_th_30_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(31, InvoiceBookingManagementBillingComponent_td_31_Template, 2, 1, "td", 13);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(32, 18);
        core/* ɵɵtemplate */.YNc(33, InvoiceBookingManagementBillingComponent_th_33_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(34, InvoiceBookingManagementBillingComponent_td_34_Template, 2, 1, "td", 13);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵelementContainerStart */.ynx(35, 19);
        core/* ɵɵtemplate */.YNc(36, InvoiceBookingManagementBillingComponent_th_36_Template, 2, 0, "th", 12);
        core/* ɵɵtemplate */.YNc(37, InvoiceBookingManagementBillingComponent_td_37_Template, 2, 1, "td", 13);
        core/* ɵɵelementContainerEnd */.BQk();
        core/* ɵɵtemplate */.YNc(38, InvoiceBookingManagementBillingComponent_tr_38_Template, 1, 0, "tr", 20);
        core/* ɵɵtemplate */.YNc(39, InvoiceBookingManagementBillingComponent_tr_39_Template, 1, 0, "tr", 21);
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(40, "div", 22)(41, "button", 23);
        core/* ɵɵlistener */.NdJ("click", function InvoiceBookingManagementBillingComponent_Template_button_click_41_listener() {
          return ctx.cancel();
        });
        core/* ɵɵtext */._uU(42, "Cancelar");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(43, "button", 24);
        core/* ɵɵlistener */.NdJ("click", function InvoiceBookingManagementBillingComponent_Template_button_click_43_listener() {
          return ctx.submit();
        });
        core/* ɵɵtext */._uU(44, "Ver Proforma");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(45, "div", 25)(46, "p");
        core/* ɵɵtext */._uU(47, " Por favor tener en cuenta las siguientes recomendaciones: ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(48, "ol")(49, "li");
        core/* ɵɵtext */._uU(50, "El Email y/o dominio, que no tenga respuestas autom\u00E1ticas, bandeja de entrada llena.");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(51, "li");
        core/* ɵɵtext */._uU(52, "Correo y/o correos escritos correctamente en los insumos originales.");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(53, "li");
        core/* ɵɵtext */._uU(54, "ominio del correo debe permitir la recepci\u00F3n de adjuntos en formato .ZIP");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(55, "li");
        core/* ɵɵtext */._uU(56, "Se sugiere que se agreguen los dominios (facturactscolombia@cen.biz, facturactscolombia@amazonses.com)como contactos seguros.");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(57, "li");
        core/* ɵɵtext */._uU(58, "Correo reportado como SPAM, malicioso y/o con virus.");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(59, "p");
        core/* ɵɵtext */._uU(60, " Nota: Nuestro proveedor tecnol\u00F3gico se hace responsable por el env\u00EDo de las notificaciones hacia los correos relacionados por Sociedad Puerto Industrial Aguadulce S.A. en los insumos originales de los documentos y no por la recepci\u00F3n de estas en la bandeja de entrada de estos. Responsable: Tercero Si los correos configurados no son los correctos por favor pida copia de esta factura al correo billing@puertoaguadulce.com y realice la actualizaci\u00F3n de los correos a trav\u00E9s de servicliente@puertoaguadulce.com ");
        core/* ɵɵelementEnd */.qZA()()();
      }
      if (rf & 2) {
        const _r0 = core/* ɵɵreference */.MAs(9);
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵproperty */.Q6J("formGroup", ctx.invoiceManagementBillingFormGroup);
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵproperty */.Q6J("disabled", true);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("ngForOf", ctx.emails);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matChipInputFor", _r0)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("dataSource", ctx.dataSource);
        core/* ɵɵadvance */.xp6(22);
        core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx.displayedColumns);
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵproperty */.Q6J("disabled", ctx.invoiceManagementBillingFormGroup.invalid || !(ctx.selectedContainers.length > 0));
      }
    },
    dependencies: [common/* NgForOf */.sg, fesm2020_checkbox/* MatCheckbox */.oG, fesm2020_button/* MatButton */.lW, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, chips/* MatChipGrid */.RA, chips/* MatChipInput */.oH, chips/* MatChipRow */.z3, fesm2020_forms/* ɵNgNoValidate */._Y, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* NgControlStatusGroup */.JL, fesm2020_forms/* FormGroupDirective */.sg, fesm2020_forms/* FormControlName */.u],
    styles: [".invoice-management-billing[_ngcontent-%COMP%]{padding:1rem;padding-top:0;padding-bottom:0;display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto auto;row-gap:1rem}.invoice-management-billing__title[_ngcontent-%COMP%]{font-size:1.5rem;color:#78909c}.invoice-management-billing__submit[_ngcontent-%COMP%]{color:#fff!important}.invoice-management-billing__form-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto auto}.invoice-management-billing__actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.invoice-management-billing__submit[_ngcontent-%COMP%]{margin-left:1rem}.invoice-management-billing__considerations[_ngcontent-%COMP%]{font-family:Gilroy-Light;color:#636e72}.centered-cell[_ngcontent-%COMP%]{width:100%;padding-left:.8rem;display:block}.centered-cell__all[_ngcontent-%COMP%]{width:100%;display:flex}"]
  });
  return InvoiceBookingManagementBillingComponent;
})();
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/exportacion/exportacion.component.ts











function ExportacionComponent_ng_container_0_ng_container_4_Template(rf, ctx) {
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
function ExportacionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "div", 1)(2, "span", 2);
    core/* ɵɵtext */._uU(3);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵtemplate */.YNc(4, ExportacionComponent_ng_container_0_ng_container_4_Template, 2, 2, "ng-container", 3);
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
let ExportacionComponent = /*#__PURE__*/(() => {
  class ExportacionComponent {
    constructor(store, utilService) {
      this.store = store;
      this.utilService = utilService;
      this.privileges = privileges_enum/* privileges */.U;
      this.destroy$ = new Subject/* Subject */.x();
      this.invoices = [];
      this.invoiceBL = "";
    }
    ngOnInit() {
      this.store.select(shared_selectors/* sharedFeatureSelector */.x).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(next => {
        if (next.file) {
          window.open(this.utilService.pdfReceipt(next.file));
          this.store.dispatch((0,shared_actions/* cleanPdfInvoice */.I2)());
        }
      });
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: apiGatewayStore => {
          this.user = apiGatewayStore;
        },
        error: error => console.error(error)
      });
      this.store.select(containerized_load_selectors/* containerizedLoadFeatureSelector */.qO).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          this.invoiceBL = result.selectedUnit;
          this.invoices = result.unitNbrData;
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
  }
  ExportacionComponent.ɵfac = function ExportacionComponent_Factory(t) {
    return new (t || ExportacionComponent)(core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f));
  };
  ExportacionComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExportacionComponent,
    selectors: [["app-exportacion"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "card-header"], [1, "text-titulo"], [4, "ngFor", "ngForOf"], [1, "invoice-item", 3, "invoice", "user"]],
    template: function ExportacionComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, ExportacionComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", ctx.invoices.length);
      }
    },
    dependencies: [common/* NgForOf */.sg, common/* NgIf */.O5, invoice_item_component/* InvoiceItemComponent */.p]
  });
  return ExportacionComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/components/alert-associate-container/alert-associate-container.component.ts
var alert_associate_container_component = __webpack_require__(31034);
// EXTERNAL MODULE: ./src/app/core/auth/services/AESEncryptionUtil.service.ts
var AESEncryptionUtil_service = __webpack_require__(3056);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/select.mjs
var fesm2020_select = __webpack_require__(84385);
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/core.mjs + 1 modules
var fesm2020_core = __webpack_require__(3238);
// EXTERNAL MODULE: ./src/app/shared/components/containers-searcher/containers-searcher.component.ts
var containers_searcher_component = __webpack_require__(77902);
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/associate-container/associate-container.component.ts

























function AssociateContainerComponent_div_0_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "app-customer-searcher", 17);
    core/* ɵɵlistener */.NdJ("customerControl", function AssociateContainerComponent_div_0_ng_container_5_ng_container_1_Template_app_customer_searcher_customerControl_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r17 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r17.onCustomerControlChange($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r16 = core/* ɵɵnextContext */.oxw(3);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("controlDisabled", !!ctx_r16.customer || !ctx_r16.nitAgent)("searcher", !ctx_r16.customer)("agent", ctx_r16.nitAgent)("data", ctx_r16.nit + "/" + ctx_r16.customer)("isAssociateContainer", true);
  }
}
function AssociateContainerComponent_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, AssociateContainerComponent_div_0_ng_container_5_ng_container_1_Template, 2, 5, "ng-container", 5);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.currentUser.empresa);
  }
}
function AssociateContainerComponent_div_0_mat_error_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r2.showContainerErrorText);
  }
}
function AssociateContainerComponent_div_0_mat_form_field_10_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-form-field", 18)(1, "mat-label");
    core/* ɵɵtext */._uU(2, "Seleccione un tipo de Documento");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "mat-select", 19)(4, "mat-option", 20);
    core/* ɵɵelementContainerStart */.ynx(5);
    core/* ɵɵi18n */.SDv(6, 21);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(7, "mat-option", 22);
    core/* ɵɵelementContainerStart */.ynx(8);
    core/* ɵɵi18n */.SDv(9, 23);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(10, "mat-option", 24);
    core/* ɵɵelementContainerStart */.ynx(11);
    core/* ɵɵi18n */.SDv(12, 25);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(13, "mat-option", 26);
    core/* ɵɵelementContainerStart */.ynx(14);
    core/* ɵɵi18n */.SDv(15, 27);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(16, "mat-option", 28);
    core/* ɵɵelementContainerStart */.ynx(17);
    core/* ɵɵi18n */.SDv(18, 29);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(19, "mat-option", 30);
    core/* ɵɵelementContainerStart */.ynx(20);
    core/* ɵɵi18n */.SDv(21, 31);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA()()();
  }
}
function AssociateContainerComponent_div_0_mat_form_field_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "mat-form-field", 18)(1, "mat-label");
    core/* ɵɵtext */._uU(2, "N\u00FAmero de formulario");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "input", 32);
    core/* ɵɵlistener */.NdJ("input", function AssociateContainerComponent_div_0_mat_form_field_11_Template_input_input_3_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r20);
      const ctx_r19 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r19.onNumberInput($event));
    });
    core/* ɵɵelementEnd */.qZA()();
  }
}
const _c14 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function AssociateContainerComponent_div_0_div_12_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "mat-form-field", 18)(1, "mat-label");
    core/* ɵɵtext */._uU(2, "Tipo de equipo");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "input", 35);
    core/* ɵɵlistener */.NdJ("input", function AssociateContainerComponent_div_0_div_12_mat_form_field_1_Template_input_input_3_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r24);
      const ctx_r23 = core/* ɵɵnextContext */.oxw(3);
      return core/* ɵɵresetView */.KtG(ctx_r23.onInputChange($event));
    });
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r21 = core/* ɵɵnextContext */.oxw(3);
    let tmp_0_0;
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("ngClass", core/* ɵɵpureFunction1 */.VKq(1, _c14, (tmp_0_0 = ctx_r21.associateFormGroup.get("typeEquipment")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["invalid"]));
  }
}
function AssociateContainerComponent_div_0_div_12_mat_checkbox_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-checkbox", 36);
    core/* ɵɵtext */._uU(1, " De Acuerdo ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AssociateContainerComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 33);
    core/* ɵɵtemplate */.YNc(1, AssociateContainerComponent_div_0_div_12_mat_form_field_1_Template, 4, 3, "mat-form-field", 8);
    core/* ɵɵtemplate */.YNc(2, AssociateContainerComponent_div_0_div_12_mat_checkbox_2_Template, 2, 0, "mat-checkbox", 34);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r5 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r5.showTypeEquipment);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r5.showTypeEquipment);
  }
}
function AssociateContainerComponent_div_0_ng_container_13_mat_error_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const error_r26 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(error_r26);
  }
}
function AssociateContainerComponent_div_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵtemplate */.YNc(1, AssociateContainerComponent_div_0_ng_container_13_mat_error_1_Template, 2, 1, "mat-error", 37);
    core/* ɵɵelementContainerEnd */.BQk();
  }
  if (rf & 2) {
    const ctx_r6 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r6.equipmentTypeErrorText);
  }
}
function AssociateContainerComponent_div_0_mat_form_field_14_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-option", 40);
    core/* ɵɵelementContainerStart */.ynx(1);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    core/* ɵɵpropertyInterpolate */.s9C("value", item_r28.reference);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij(" ", item_r28.description, " ");
  }
}
function AssociateContainerComponent_div_0_mat_form_field_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-form-field", 18)(1, "mat-label");
    core/* ɵɵtext */._uU(2, "Seleccione un item");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "mat-select", 38);
    core/* ɵɵtemplate */.YNc(4, AssociateContainerComponent_div_0_mat_form_field_14_mat_option_4_Template, 3, 2, "mat-option", 39);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r7 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r7.filterHazardList);
  }
}
function AssociateContainerComponent_div_0_mat_form_field_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-form-field", 18)(1, "mat-label");
    core/* ɵɵtext */._uU(2, "Peso");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(3, "input", 41);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r8 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("min", ctx_r8.minWeight);
  }
}
function AssociateContainerComponent_div_0_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-error");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r9 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r9.errorWeight, " ");
  }
}
function AssociateContainerComponent_div_0_div_17_mat_checkbox_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "mat-checkbox", 45);
  }
}
function AssociateContainerComponent_div_0_div_17_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-form-field", 18)(1, "mat-label");
    core/* ɵɵtext */._uU(2, "Refrigerado (Temp \u00BA C)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(3, "input", 46);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AssociateContainerComponent_div_0_div_17_mat_checkbox_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-checkbox", 47);
    core/* ɵɵtext */._uU(1, " De Acuerdo ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AssociateContainerComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 42);
    core/* ɵɵtemplate */.YNc(1, AssociateContainerComponent_div_0_div_17_mat_checkbox_1_Template, 1, 0, "mat-checkbox", 43);
    core/* ɵɵtemplate */.YNc(2, AssociateContainerComponent_div_0_div_17_mat_form_field_2_Template, 4, 0, "mat-form-field", 8);
    core/* ɵɵtemplate */.YNc(3, AssociateContainerComponent_div_0_div_17_mat_checkbox_3_Template, 2, 0, "mat-checkbox", 44);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r10 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r10.showFormWeight);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r10.showFormWeight);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r10.showFormWeight);
  }
}
function AssociateContainerComponent_div_0_div_18_mat_checkbox_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "mat-checkbox", 50);
  }
}
function AssociateContainerComponent_div_0_div_18_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-form-field", 18)(1, "mat-label");
    core/* ɵɵtext */._uU(2, "IMO (C\u00F3digo)");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(3, "input", 51);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AssociateContainerComponent_div_0_div_18_mat_checkbox_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-checkbox", 52);
    core/* ɵɵtext */._uU(1, " De Acuerdo ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AssociateContainerComponent_div_0_div_18_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 42);
    core/* ɵɵtemplate */.YNc(1, AssociateContainerComponent_div_0_div_18_mat_checkbox_1_Template, 1, 0, "mat-checkbox", 48);
    core/* ɵɵtemplate */.YNc(2, AssociateContainerComponent_div_0_div_18_mat_form_field_2_Template, 4, 0, "mat-form-field", 8);
    core/* ɵɵtemplate */.YNc(3, AssociateContainerComponent_div_0_div_18_mat_checkbox_3_Template, 2, 0, "mat-checkbox", 49);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r11 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r11.showFormWeight);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r11.showFormWeight);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r11.showFormWeight);
  }
}
function AssociateContainerComponent_div_0_mat_checkbox_19_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-checkbox", 53);
    core/* ɵɵtext */._uU(1, " Sobredimensionado (Dimensiones (cm)) ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AssociateContainerComponent_div_0_div_20_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-form-field", 57)(1, "mat-label");
    core/* ɵɵtext */._uU(2, "Ancho izquierda");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(3, "input", 58);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AssociateContainerComponent_div_0_div_20_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-form-field", 57)(1, "mat-label");
    core/* ɵɵtext */._uU(2, "Ancho derecha");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(3, "input", 59);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AssociateContainerComponent_div_0_div_20_mat_checkbox_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-checkbox", 60);
    core/* ɵɵtext */._uU(1, " De Acuerdo ");
    core/* ɵɵelementEnd */.qZA();
  }
}
function AssociateContainerComponent_div_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 54);
    core/* ɵɵtemplate */.YNc(1, AssociateContainerComponent_div_0_div_20_mat_form_field_1_Template, 4, 0, "mat-form-field", 55);
    core/* ɵɵtemplate */.YNc(2, AssociateContainerComponent_div_0_div_20_mat_form_field_2_Template, 4, 0, "mat-form-field", 55);
    core/* ɵɵtemplate */.YNc(3, AssociateContainerComponent_div_0_div_20_mat_checkbox_3_Template, 2, 0, "mat-checkbox", 56);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r13 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r13.showFormWeight);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r13.showFormWeight);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r13.showFormWeight);
  }
}
function AssociateContainerComponent_div_0_div_21_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-form-field", 57)(1, "mat-label");
    core/* ɵɵtext */._uU(2, "Largo frente");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(3, "input", 63);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AssociateContainerComponent_div_0_div_21_mat_form_field_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-form-field", 57)(1, "mat-label");
    core/* ɵɵtext */._uU(2, "Largo atr\u00E1s");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(3, "input", 64);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AssociateContainerComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 61);
    core/* ɵɵtemplate */.YNc(1, AssociateContainerComponent_div_0_div_21_mat_form_field_1_Template, 4, 0, "mat-form-field", 55);
    core/* ɵɵtemplate */.YNc(2, AssociateContainerComponent_div_0_div_21_mat_form_field_2_Template, 4, 0, "mat-form-field", 55);
    core/* ɵɵelementStart */.TgZ(3, "mat-checkbox", 62);
    core/* ɵɵtext */._uU(4, " De Acuerdo ");
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const ctx_r14 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r14.showFormWeight);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r14.showFormWeight);
  }
}
function AssociateContainerComponent_div_0_mat_form_field_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "mat-form-field", 18)(1, "mat-label");
    core/* ɵɵtext */._uU(2, "Altura");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(3, "input", 65);
    core/* ɵɵelementEnd */.qZA();
  }
}
function AssociateContainerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 1)(1, "h3", 2)(2, "span");
    core/* ɵɵi18n */.SDv(3, 3);
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(4, "app-agent-searcher", 4);
    core/* ɵɵlistener */.NdJ("agentControl", function AssociateContainerComponent_div_0_Template_app_agent_searcher_agentControl_4_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r41);
      const ctx_r40 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r40.onAgentControlChange($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(5, AssociateContainerComponent_div_0_ng_container_5_Template, 2, 1, "ng-container", 5);
    core/* ɵɵelementStart */.TgZ(6, "app-containers-searcher", 6);
    core/* ɵɵlistener */.NdJ("containerSearch", function AssociateContainerComponent_div_0_Template_app_containers_searcher_containerSearch_6_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r41);
      const ctx_r42 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r42.onContainerSearch($event));
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtemplate */.YNc(7, AssociateContainerComponent_div_0_mat_error_7_Template, 2, 1, "mat-error", 5);
    core/* ɵɵelementStart */.TgZ(8, "form", 7);
    core/* ɵɵelementContainerStart */.ynx(9);
    core/* ɵɵtemplate */.YNc(10, AssociateContainerComponent_div_0_mat_form_field_10_Template, 22, 0, "mat-form-field", 8);
    core/* ɵɵtemplate */.YNc(11, AssociateContainerComponent_div_0_mat_form_field_11_Template, 4, 0, "mat-form-field", 8);
    core/* ɵɵtemplate */.YNc(12, AssociateContainerComponent_div_0_div_12_Template, 3, 2, "div", 9);
    core/* ɵɵtemplate */.YNc(13, AssociateContainerComponent_div_0_ng_container_13_Template, 2, 1, "ng-container", 5);
    core/* ɵɵtemplate */.YNc(14, AssociateContainerComponent_div_0_mat_form_field_14_Template, 5, 1, "mat-form-field", 8);
    core/* ɵɵtemplate */.YNc(15, AssociateContainerComponent_div_0_mat_form_field_15_Template, 4, 1, "mat-form-field", 8);
    core/* ɵɵtemplate */.YNc(16, AssociateContainerComponent_div_0_mat_error_16_Template, 2, 1, "mat-error", 5);
    core/* ɵɵtemplate */.YNc(17, AssociateContainerComponent_div_0_div_17_Template, 4, 3, "div", 10);
    core/* ɵɵtemplate */.YNc(18, AssociateContainerComponent_div_0_div_18_Template, 4, 3, "div", 10);
    core/* ɵɵtemplate */.YNc(19, AssociateContainerComponent_div_0_mat_checkbox_19_Template, 2, 0, "mat-checkbox", 11);
    core/* ɵɵtemplate */.YNc(20, AssociateContainerComponent_div_0_div_20_Template, 4, 3, "div", 12);
    core/* ɵɵtemplate */.YNc(21, AssociateContainerComponent_div_0_div_21_Template, 5, 2, "div", 13);
    core/* ɵɵtemplate */.YNc(22, AssociateContainerComponent_div_0_mat_form_field_22_Template, 4, 0, "mat-form-field", 8);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(23, "div", 14)(24, "button", 15);
    core/* ɵɵlistener */.NdJ("click", function AssociateContainerComponent_div_0_Template_button_click_24_listener() {
      core/* ɵɵrestoreView */.CHM(_r41);
      const ctx_r43 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r43.cancel());
    });
    core/* ɵɵtext */._uU(25, "Cancelar");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(26, "button", 16);
    core/* ɵɵlistener */.NdJ("click", function AssociateContainerComponent_div_0_Template_button_click_26_listener() {
      core/* ɵɵrestoreView */.CHM(_r41);
      const ctx_r44 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r44.submit());
    });
    core/* ɵɵtext */._uU(27, " Crear ");
    core/* ɵɵelementEnd */.qZA()()();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    let tmp_15_0;
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("isAssociateContainer", true)("data", ctx_r0.nitAgent + "/" + ctx_r0.agent)("controlDisabled", !!ctx_r0.agent)("searcher", !ctx_r0.agent);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.currentUser);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("isAssociateContainer", true)("controlDisabled", !ctx_r0.nitCustomer);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.showContainerError);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("formGroup", ctx_r0.associateFormGroup);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.showTypeDocument && !ctx_r0.showContainerError);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.showFormNumber && !ctx_r0.showContainerError);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r0.showContainerError);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r0.equipmetTypeValid);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.validateEquipmentsTypeIso && !ctx_r0.showContainerError);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.showFormWeight && !ctx_r0.showContainerError);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ((tmp_15_0 = ctx_r0.associateFormGroup.get("weight")) == null ? null : tmp_15_0.hasError("min")) && !((tmp_15_0 = ctx_r0.associateFormGroup.get("weight")) == null ? null : tmp_15_0.hasError("required")));
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r0.showContainerError);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r0.showContainerError);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.showFormWeight && !ctx_r0.showContainerError);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r0.showContainerError);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", !ctx_r0.showContainerError);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngIf", ctx_r0.showFormWeight && !ctx_r0.showContainerError);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("disabled", !ctx_r0.enableButtonMake || !ctx_r0.isPermission);
  }
}
let AssociateContainerComponent = /*#__PURE__*/(() => {
  class AssociateContainerComponent {
    constructor(matDialog, store, base64EncryptionUtilService, matSnackBar, cdr, utilServices, storageService, aesEncryptionUtilService) {
      this.matDialog = matDialog;
      this.store = store;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.matSnackBar = matSnackBar;
      this.cdr = cdr;
      this.utilServices = utilServices;
      this.storageService = storageService;
      this.aesEncryptionUtilService = aesEncryptionUtilService;
      this.controlDisabled = false;
      this.destroy$ = new Subject/* Subject */.x();
      this.customer = "";
      this.nit = "";
      this.nitAgent = "";
      this.agent = "";
      this.nitCustomer = "";
      this.customerAsignned = false;
      this.agentAsignned = false;
      this.customerValid = true;
      this.agentValid = true;
      this.equipmentTypeList = [];
      this.associateFormGroup = new fesm2020_forms/* FormGroup */.cw({});
      this.showContainerError = false;
      this.showContainerErrorText = "";
      this.continueProcess = true;
      this.showTypeDocument = true;
      this.nitAgentBefore = "";
      this.container = "";
      this.showFormNumber = false;
      this.showTypeEquipment = false;
      this.isErrorDigit = false;
      this.equipmetTypeValid = true;
      this.equipmentTypeErrorText = [];
      this.equipmentTypeValue = "";
      this.equipmentTypePreviousValue = "";
      this.infoBooking = [];
      this.infoBookingPrevious = [];
      this.availableQuantity = 0;
      this.validateEquipmentsTypeIso = false;
      this.archisoList = [];
      this.lengthHazards = 0;
      this.hazardList = [];
      this.hazardListPrevious = [];
      this.filterHazardList = [];
      this.oOGList = [];
      this.showFormWeight = false;
      this.minWeight = 0;
      this.errorWeight = "";
      this.temperatureValue = 0;
      this.imoValue = "";
      this.isImoSelected = false;
      this.isTemperatureControlled = "";
      this.overdimensionLeft = "";
      this.overdimensionRight = "";
      this.overdimensionFront = "";
      this.overdimensionBack = "";
      this.overdimensionTop = "";
      this.showCheckbox = false;
      this.enableButtonMake = false;
      this.isPermission = false;
      this.differences = "";
      this.nbrBooking = "";
      this.isViewComponent = true;
      this.isConteinerValid = false;
      this.isAgentData = false;
      this.isCalled = false;
      this.isCalledAgent = false;
      this.archetype = "";
      this.isCleanForm = false;
      this.physicalContainerId = "";
    }
    ngOnInit() {
      //this.store.dispatch(cleanSelectedCustomer());
      //this.store.dispatch(cleanSelectedAgent());
      this.continueProcess = true;
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          this.currentUser = result;
        },
        error: error => console.error(error)
      });
      this.isPermission = this.hasPermission("CC_EXP_ASO");
      this.associateFormGroup = new fesm2020_forms/* FormGroup */.cw({
        typeDocument: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: this.container === ''
        }, [fesm2020_forms/* Validators.required */.kI.required]),
        formNumber: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }, [fesm2020_forms/* Validators.required */.kI.required]),
        typeEquipment: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }, [fesm2020_forms/* Validators.required */.kI.required]),
        itemIso: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }, [fesm2020_forms/* Validators.required */.kI.required]),
        weight: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }, [fesm2020_forms/* Validators.required */.kI.required]),
        temperature: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: true
        }),
        imo: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: true
        }),
        overdimensionLeft: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: true
        }),
        overdimensionRight: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: true
        }),
        overdimensionFront: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: true
        }),
        overdimensionBack: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: true
        }),
        overdimensionTop: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: true
        }),
        checkboxAcceptTypeEquipment: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }),
        checkBoxAcceptTemperature: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }),
        checkBoxAcceptImo: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }),
        checkBoxAcceptOverdimension: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: false
        }),
        checkBoxTemperature: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: true
        }),
        checkBoxImo: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: true
        }),
        checkBoxOverdimension: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: true
        }),
        checkBoxAcceptOverdimensionTwo: new fesm2020_forms/* FormControl */.NI({
          value: "",
          disabled: true
        })
      });
      this.storageSubscription = this.storageService.getStorageChanges().subscribe(action => {
        if (action.action === 'cleanValidationPin') {
          this.isViewComponent = false;
          this.isAgentData = false;
          this.nitAgent = "";
          this.agent = "";
          this.nitCustomer = "";
          this.customer = "";
          this.isCalled = false;
          this.nitAgentBefore = "";
          this.cleanAll();
          this.isCleanForm = true;
        }
        if (action.action === 'setAsoaciateContainer') {
          this.isViewComponent = true;
        }
      });
      // Escucha los cambios en el select 'typeDocument'
      this.associateFormGroup.get('typeDocument')?.valueChanges.subscribe(value => {
        if (value === '3' || value === '4' || value === '5') {
          this.showFormNumber = true; // Muestra el campo si la opción es válida
          this.showTypeEquipment = true;
          this.enableField('formNumber');
          this.associateFormGroup.get('formNumber')?.setValidators(fesm2020_forms/* Validators.required */.kI.required); // Agrega la validación si es necesario
          this.associateFormGroup.get('formNumber')?.updateValueAndValidity();
        } else {
          this.showFormNumber = false; // Oculta el campo si es 'other' o cualquier otra opción
          this.showTypeEquipment = true;
          this.associateFormGroup.get('formNumber')?.clearValidators(); // Elimina la validación
          this.associateFormGroup.get('formNumber')?.updateValueAndValidity();
        }
        this.evaluationShowButtonMake();
      });
      this.associateFormGroup.get('formNumber')?.valueChanges.subscribe(value => {
        this.evaluationShowButtonMake();
      });
      this.associateFormGroup.get('typeEquipment')?.valueChanges.subscribe(value => {
        if (value !== "" && value.length > 3 && value !== this.equipmentTypePreviousValue && this.isConteinerValid) {
          this.isImoSelected = false;
          this.evaluationEquipmentType(value);
        } else {
          this.equipmentTypeErrorText = [];
          this.validateEquipmentsTypeIso = false;
          this.equipmentTypePreviousValue = "";
          this.showFormWeight = false;
          this.associateFormGroup.patchValue({
            temperature: ""
          });
          this.associateFormGroup.patchValue({
            imo: ""
          });
          this.associateFormGroup.patchValue({
            overdimensionLeft: ""
          });
          this.associateFormGroup.patchValue({
            overdimensionRight: ""
          });
          this.associateFormGroup.patchValue({
            overdimensionFront: ""
          });
          this.associateFormGroup.patchValue({
            overdimensionBack: ""
          });
          this.associateFormGroup.patchValue({
            overdimensionTop: ""
          });
          this.associateFormGroup.patchValue({
            weight: ""
          });
          this.associateFormGroup.patchValue({
            checkBoxTemperature: false
          });
          this.associateFormGroup.patchValue({
            checkBoxImo: false
          });
          this.associateFormGroup.patchValue({
            checkBoxOverdimension: false
          });
          this.associateFormGroup.patchValue({
            checkBoxAcceptTypeEquipment: false
          });
          this.associateFormGroup.patchValue({
            checkBoxAcceptTemperature: false
          });
          this.associateFormGroup.patchValue({
            checkBoxAcceptImo: false
          });
          this.associateFormGroup.patchValue({
            checkBoxAcceptOverdimension: false
          });
          this.evaluationShowButtonMake();
          this.isImoSelected = false;
        }
      });
      this.associateFormGroup.get('itemIso')?.valueChanges.subscribe(value => {
        this.getValueItemIso(value);
        this.weightControl(value);
        this.evaluationShowButtonMake();
      });
      this.associateFormGroup.get('weight')?.valueChanges.subscribe(value => {
        this.evaluationShowButtonMake();
      });
      this.store.select(shared_selectors/* sharedFeatureSelector */.x).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          if (result) {
            if (result.bookingID && (this.infoBooking.length === 0 || this.infoBooking !== result.bookingID)) {
              this.infoBooking = result.bookingID;
              result.bookingID.forEach(booking => {
                if (this.customer === "" && booking.shipperName && booking.shipperId) {
                  this.customer = booking.shipperName;
                  this.nit = booking.shipperId;
                  this.nitCustomer = booking.shipperId;
                  this.customerAsignned = true;
                }
                if (booking.availableQuantity && parseInt(booking.availableQuantity) > this.availableQuantity) {
                  this.availableQuantity = parseInt(booking.availableQuantity);
                }
                const availableQuantityMoment = booking.availableQuantity ? parseInt(booking.availableQuantity) : 0;
                if (booking.archiso && booking.archiso !== "" && !this.archisoList.includes(booking.archiso) && availableQuantityMoment > 0) {
                  this.archisoList.push(booking.archiso);
                }
                if (availableQuantityMoment > 0) {
                  const description = "No posee IMO (Hazards)";
                  if (booking.reference && booking.equipmentType && this.hazardList.some(hazard => hazard.reference === booking.reference) === false) {
                    this.hazardList.push({
                      reference: booking.reference,
                      hazard: [],
                      description: description,
                      eQuipmentType: booking.equipmentType,
                      temperature: booking.tempReqdC ? parseFloat(booking.tempReqdC) : 0,
                      archiso: booking.archiso ? booking.archiso : ""
                    });
                  }
                  this.hazardListPrevious = this.hazardList;
                  if (booking.reference && booking.isOog && (booking.oogLeftCm || booking.oogRightCm || booking.oogBackCm || booking.oogFrontCm || booking.oogTopCm) && this.oOGList.some(oOG => oOG.reference === booking.reference) === false) {
                    this.oOGList.push({
                      reference: booking.reference,
                      overdimensionLeft: booking.oogLeftCm ? parseInt(booking.oogLeftCm) : 0,
                      overdimensionRight: booking.oogRightCm ? parseInt(booking.oogRightCm) : 0,
                      overdimensionBack: booking.oogBackCm ? parseInt(booking.oogBackCm) : 0,
                      overdimensionTop: booking.oogTopCm ? parseInt(booking.oogTopCm) : 0,
                      overdimensionFront: booking.oogFrontCm ? parseInt(booking.oogFrontCm) : 0,
                      archiso: booking.archiso ? booking.archiso : ""
                    });
                  }
                }
                if (booking.equipmentType && availableQuantityMoment > 0) {
                  if (!this.equipmentTypeList.includes(booking.equipmentType)) {
                    this.equipmentTypeList.push(booking.equipmentType);
                  }
                }
              });
            }
            if (result.agent && result.agent.length > 0 && this.agentValid) {
              this.agent = result.agent[0].name;
              this.nitAgent = result.agent[0].id;
              const notes = result.agent[0].notes;
              if (this.nitCustomer !== "" && notes !== "" && this.nitAgent !== this.nitAgentBefore) {
                this.nitAgentBefore = this.nitAgent;
                this.utilServices.getCustomer(this.nitCustomer, this.nitAgent).subscribe({
                  next: result => {
                    if (result) {
                      const decryptedResult = JSON.parse(this.aesEncryptionUtilService.decrypt(result));
                      if (decryptedResult.agentRepresentation && decryptedResult.agentRepresentation.length > 0) {
                        if (decryptedResult.agentRepresentation[0].oea) {
                          this.showTypeDocument = false;
                        }
                      }
                    }
                  },
                  error: error => {
                    console.error(error);
                  }
                });
              }
            }
            if (result.physicalContainer && this.associateFormGroup.get('typeEquipment')?.value === "") {
              this.physicalContainer = result.physicalContainer;
              this.physicalContainerId = result.physicalContainer.id;
              if (result.physicalContainer.type) {
                this.associateFormGroup.patchValue({
                  typeEquipment: result.physicalContainer.type
                });
                this.showContainerErrorText = "";
                this.showContainerError = false;
              } else {
                this.continueProcess = false;
                this.showContainerError = true;
                const message = "No es posible agregar mas contenedores de este tipo al booking";
                const messageTwo = "El Equipment Type ingresado no es v\xE1lido para el booking";
                const combinedMessage = `${message}\n${messageTwo}`;
                this.showContainerErrorText = combinedMessage;
                this.showTypeEquipment = false;
              }
            }
            if (result.hazardsByBooking) {
              this.lengthHazards = result.hazardsByBooking.length;
              if (this.lengthHazards > 0) {
                result.hazardsByBooking.forEach(hazard => {
                  if (hazard.reference !== "" && typeof hazard.reference === 'string') {
                    this.hazardList.forEach(hazardList => {
                      if (hazardList.reference === hazard.reference && hazardList.hazard.length === 0) {
                        hazardList.hazard.push(hazard);
                        hazardList.description = hazard.imdgDescription;
                      }
                    });
                  }
                });
              }
              if (this.continueProcess) {
                if (result.validateContainer !== null && result.digitCheck !== null) {
                  if (result.validateContainer !== 10 && !result.digitCheck) {
                    this.isErrorDigit = true;
                    this.disableField('typeDocument');
                    this.disableField('typeEquipment');
                    const message = "El numero de verificacion es incorrecto intente con";
                    const messageWithNumber = `${message} ${result.validateContainer}`;
                    const messageTwo = "Si el contenedor ingresado es el correcto, por favor comunicarse con servicio al cliente para solicitar aprobaci\xF3n para asociar el contenedor";
                    const combinedMessage = `${messageWithNumber}\n${messageTwo}`;
                    this.showMessage(combinedMessage, "warning");
                    //this.continueProcess = false;
                  } else {
                    this.isErrorDigit = false;
                    this.enableField('typeDocument');
                    this.enableField('typeEquipment');
                  }
                }
              }
            }
          }
        }
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    onCustomerControlChange(control) {
      this.customerSearcherControl = control;
      this.customerSearcherControl.statusChanges.subscribe(status => {
        if (!this.customerSearcherControl.valid && !this.customerAsignned) {
          this.customerValid = false;
          this.isCalled = false;
          this.nitCustomer = "";
        } else {
          this.customerValid = true;
          if (this.customerSearcherControl.value.includes("/") && !this.isCalled) {
            const customerData = this.customerSearcherControl.value.split("/");
            this.isCalled = true;
            this.nitCustomer = customerData[0];
            if (this.nitCustomer !== "" && this.nitAgent !== "") {
              this.utilServices.getCustomer(this.nitCustomer, this.nitAgent).subscribe({
                next: result => {
                  if (result) {
                    const decryptedResult = JSON.parse(this.aesEncryptionUtilService.decrypt(result));
                    if (decryptedResult.agentRepresentation && decryptedResult.agentRepresentation.length > 0) {
                      if (decryptedResult.agentRepresentation[0].oea) {
                        this.showTypeDocument = false;
                      }
                    }
                  }
                },
                error: error => {
                  console.error(error);
                }
              });
            }
          }
        }
      });
    }
    onAgentControlChange(control) {
      this.agentSearcherControl = control;
      this.agentSearcherControl.statusChanges.subscribe(status => {
        if (!this.agentSearcherControl.valid && !this.agentAsignned) {
          this.agentValid = false;
          this.isCalledAgent = false;
          this.nitAgent = "";
          this.nitCustomer = "";
        } else {
          this.agentValid = true;
          if (this.agentSearcherControl.value.includes("/") && !this.isCalledAgent) {
            const customerData = this.agentSearcherControl.value.split("/");
            this.isCalledAgent = true;
            this.nitAgent = customerData[0];
            this.isAgentData = true;
            this.cdr.detectChanges(); // Forzar detección de cambios
          }
        }
      });
    }

    onContainerSearch(container) {
      this.container = container;
      if (container === "") {
        this.cleanAll(true);
      } else {
        this.isConteinerValid = true;
        this.isCleanForm = false;
        this.associateFormGroup.get('typeEquipment')?.patchValue("");
        this.store.dispatch((0,shared_actions/* cleanPhysicalContainer */.$E)());
        this.store.dispatch((0,shared_actions/* cleanValidateContainer */.kZ)());
      }
    }
    enableField(field) {
      this.associateFormGroup.get(field)?.enable();
    }
    disableField(field, isEmit = true) {
      if (isEmit) {
        this.associateFormGroup.get(field)?.disable();
      } else {
        this.associateFormGroup.get(field)?.disable({
          emitEvent: false
        });
      }
    }
    showMessage(message, type) {
      const config = {
        verticalPosition: "top",
        duration: 5000,
        panelClass: [""]
      };
      if (type === "error") {
        config.panelClass = ["error-snackbar"];
      } else if (type === "warning") {
        config.panelClass = ["warning-snackbar"];
      } else if (type === "success") {
        config.panelClass = ["success-snackbar"];
      }
      this.matSnackBar.open(message, "", config);
    }
    onNumberInput(event) {
      const input = event.target;
      if (input.value.length > 14) {
        input.value = input.value.slice(0, 14); // Limita la entrada a los primeros 14 dígitos
      }
    }

    evaluationEquipmentType(value) {
      this.equipmentTypePreviousValue = value;
      this.utilServices.getEquipmentType(value).subscribe({
        next: encryptedResponse => {
          if (encryptedResponse) {
            const result = JSON.parse(this.aesEncryptionUtilService.decrypt(encryptedResponse));
            this.equipmetTypeValid = true;
            //eliminar repetidos de la lista, que sean iguales en todos los campos
            this.filterHazardList = this.hazardList.filter((hazard, index, self) => index === self.findIndex(t => t.reference === hazard.reference && t.description === hazard.description && t.eQuipmentType === hazard.eQuipmentType));
            //this.filterHazardList = this.filterHazardList.filter((hazard) => hazard.eQuipmentType === value.toString());
            this.filterHazardList = this.filterHazardList.filter(hazard => hazard.archiso === result.archetype);
            const filterHazardListFirst = this.filterHazardList;
            if (this.filterHazardList.length > 1) {
              this.filterHazardList = this.filterHazardList.filter(hazard => hazard.eQuipmentType === value.toString());
            }
            if (this.filterHazardList.length === 0 && filterHazardListFirst.length > 1) {
              this.filterHazardList = filterHazardListFirst;
            }
            if (result.reefer && result.reefer.isTemperatureControlled) {
              this.isTemperatureControlled = result.reefer.isTemperatureControlled;
            }
            if (this.availableQuantity > 0) {
              this.store.dispatch((0,shared_actions/* setEquipmentTye */.Lt)({
                response: result
              }));
              if (result.archetype && result.archetype !== "" && this.archisoList.includes(result.archetype)) {
                this.validateEquipmentsTypeIso = true;
                this.minWeight = result.tareWeightKg;
                this.archetype = result.archetype;
                this.associateFormGroup.get('weight')?.setValidators(fesm2020_forms/* Validators.min */.kI.min(this.minWeight)); // Agrega la validación si es necesario
                this.associateFormGroup.get('weight')?.updateValueAndValidity();
                this.getValueTemperature(value.toString());
                //this.getValueOverdimension(value.toString());
                this.getValueOverdimension(result.archetype, value.toString());
                this.enableField('itemIso');
                this.enableField('weight');
                this.getValueItemIso(result.archetype, false);
                this.errorWeight = "El peso debe ser mayor o igual a ";
                if (this.physicalContainer && !this.equipmentTypeList.includes(this.physicalContainer.type)) {
                  this.disableField('typeEquipment', false);
                }
              } else {
                if (this.associateFormGroup.get('typeEquipment')?.value) {
                  this.associateFormGroup.get('typeEquipment')?.setErrors({
                    invalid: true
                  });
                  this.equipmetTypeValid = false;
                  this.equipmentTypeErrorText.push("El Equipment Type ingresado no es v\xE1lido para el booking");
                  this.showFormWeight = false;
                }
              }
            } else {
              this.equipmetTypeValid = false;
              const messageError = "No es posible agregar mas contenedores de este tipo al booking";
              if (!this.isCleanForm) {
                this.equipmentTypeErrorText.push(messageError);
              }
            }
            if ((this.filterHazardList.length === 0 || this.filterHazardList.length === 1 || this.lengthHazards === 0) && this.equipmetTypeValid) {
              this.validateEquipmentsTypeIso = false;
              this.weightControl(this.minWeight);
            } else {
              this.associateFormGroup.patchValue({
                weight: ""
              });
              this.associateFormGroup.patchValue({
                itemIso: ""
              });
            }
            this.associateFormGroup.patchValue({
              weight: this.minWeight
            });
            this.enableField('checkboxAcceptTypeEquipment');
            this.enableField('checkBoxAcceptTemperature');
            this.enableField('checkBoxAcceptImo');
            this.enableField('checkBoxAcceptOverdimension');
          } else {
            this.equipmetTypeValid = false;
            this.equipmentTypeErrorText.push(" El Equipment Type ingresado no es v\xE1lido para el booking");
          }
        },
        error: error => {
          console.error(error);
        }
      });
    }
    onInputChange(event) {
      const input = event.target;
      input.value = input.value.toUpperCase();
      this.associateFormGroup.get('typeEquipment')?.setValue(input.value, {
        emitEvent: false
      });
    }
    weightControl(value) {
      if (value) {
        this.showFormWeight = true;
        this.associateFormGroup.get('weight')?.setValidators(fesm2020_forms/* Validators.required */.kI.required); // Agrega la validación si es necesario
        this.associateFormGroup.get('weight')?.updateValueAndValidity();
      } else {
        this.showFormWeight = false;
        this.associateFormGroup.get('weight')?.clearValidators(); // Elimina la validación
        this.associateFormGroup.get('weight')?.updateValueAndValidity();
      }
    }
    getValueItemIso(value, isSelect = true) {
      if (value !== "" && isSelect) {
        const itemSelected = this.filterHazardList.find(hazard => hazard.reference === value);
        if (itemSelected && itemSelected.description !== "") {
          const descriptionIMO = "No posee IMO (Hazards)";
          if (itemSelected.description.includes(descriptionIMO)) {
            this.isImoSelected = false;
            this.associateFormGroup.patchValue({
              imo: ""
            });
            this.associateFormGroup.patchValue({
              checkBoxImo: false
            });
            const descriptionIMO = "No posee IMO (Hazards)";
            const itemSelected = this.filterHazardList.find(hazard => hazard.description.includes(descriptionIMO));
            if (this.oOGList.length > 0) {
              this.oOGList.forEach(oOG => {
                if (oOG.archiso === itemSelected?.archiso && itemSelected?.reference === oOG.reference) {
                  if (oOG.overdimensionLeft > 0) this.associateFormGroup.patchValue({
                    overdimensionLeft: oOG.overdimensionLeft.toString()
                  });
                  if (oOG.overdimensionRight > 0) this.associateFormGroup.patchValue({
                    overdimensionRight: oOG.overdimensionRight.toString()
                  });
                  if (oOG.overdimensionFront > 0) this.associateFormGroup.patchValue({
                    overdimensionFront: oOG.overdimensionFront.toString()
                  });
                  if (oOG.overdimensionBack > 0) this.associateFormGroup.patchValue({
                    overdimensionBack: oOG.overdimensionBack.toString()
                  });
                  if (oOG.overdimensionTop > 0) this.associateFormGroup.patchValue({
                    overdimensionTop: oOG.overdimensionTop.toString()
                  });
                  this.associateFormGroup.patchValue({
                    checkBoxOverdimension: true
                  });
                }
              });
            }
          } else {
            this.isImoSelected = true;
            this.imoValue = itemSelected.description;
            this.associateFormGroup.patchValue({
              imo: this.imoValue
            });
            this.associateFormGroup.patchValue({
              checkBoxImo: true
            });
            this.associateFormGroup.patchValue({
              overdimensionLeft: ""
            });
            this.associateFormGroup.patchValue({
              overdimensionRight: ""
            });
            this.associateFormGroup.patchValue({
              overdimensionFront: ""
            });
            this.associateFormGroup.patchValue({
              overdimensionBack: ""
            });
            this.associateFormGroup.patchValue({
              overdimensionTop: ""
            });
            this.associateFormGroup.patchValue({
              checkBoxOverdimension: false
            });
          }
        }
      } else if (value !== "" && !isSelect && !this.isImoSelected) {
        const itemSelected = this.filterHazardList.find(hazard => hazard.archiso === value);
        if (itemSelected) {
          this.isImoSelected = true;
          this.imoValue = itemSelected.description;
          const descriptionIMO = "No posee IMO (Hazards)";
          if (this.imoValue !== descriptionIMO) {
            this.associateFormGroup.patchValue({
              imo: this.imoValue
            });
            this.associateFormGroup.patchValue({
              checkBoxImo: true
            });
          }
        }
      }
    }
    getValueTemperature(equipmentTypeValue) {
      if (this.hazardList.length > 0 && this.isTemperatureControlled === "Y") {
        this.hazardList.forEach(hazard => {
          if (hazard.eQuipmentType === equipmentTypeValue) {
            this.temperatureValue = hazard.temperature;
            this.associateFormGroup.patchValue({
              temperature: this.temperatureValue
            });
            this.associateFormGroup.patchValue({
              checkBoxTemperature: true
            });
          }
        });
      } else {
        this.associateFormGroup.patchValue({
          temperature: ""
        });
        this.associateFormGroup.patchValue({
          checkBoxTemperature: false
        });
        this.temperatureValue = 0;
      }
    }
    getValueOverdimension(archiso, equipmentTypeValue) {
      if (this.oOGList.length > 0) {
        this.oOGList.forEach(oOG => {
          const itemB = this.filterHazardList.find(hazard => hazard.eQuipmentType === equipmentTypeValue);
          let isSetOgg = false;
          if (oOG.archiso === archiso && itemB?.reference === oOG.reference) {
            if (oOG.overdimensionLeft > 0) this.associateFormGroup.patchValue({
              overdimensionLeft: oOG.overdimensionLeft.toString()
            });
            if (oOG.overdimensionRight > 0) this.associateFormGroup.patchValue({
              overdimensionRight: oOG.overdimensionRight.toString()
            });
            if (oOG.overdimensionFront > 0) this.associateFormGroup.patchValue({
              overdimensionFront: oOG.overdimensionFront.toString()
            });
            if (oOG.overdimensionBack > 0) this.associateFormGroup.patchValue({
              overdimensionBack: oOG.overdimensionBack.toString()
            });
            if (oOG.overdimensionTop > 0) this.associateFormGroup.patchValue({
              overdimensionTop: oOG.overdimensionTop.toString()
            });
            this.associateFormGroup.patchValue({
              checkBoxOverdimension: true
            });
            isSetOgg = true;
          }
          if (!isSetOgg && !itemB) {
            const descriptionIMO = "No posee IMO (Hazards)";
            const itemSelected = this.filterHazardList.find(hazard => hazard.description.includes(descriptionIMO));
            if (oOG.archiso === archiso && itemSelected?.reference === oOG.reference) {
              if (oOG.overdimensionLeft > 0) this.associateFormGroup.patchValue({
                overdimensionLeft: oOG.overdimensionLeft.toString()
              });
              if (oOG.overdimensionRight > 0) this.associateFormGroup.patchValue({
                overdimensionRight: oOG.overdimensionRight.toString()
              });
              if (oOG.overdimensionFront > 0) this.associateFormGroup.patchValue({
                overdimensionFront: oOG.overdimensionFront.toString()
              });
              if (oOG.overdimensionBack > 0) this.associateFormGroup.patchValue({
                overdimensionBack: oOG.overdimensionBack.toString()
              });
              if (oOG.overdimensionTop > 0) this.associateFormGroup.patchValue({
                overdimensionTop: oOG.overdimensionTop.toString()
              });
              this.associateFormGroup.patchValue({
                checkBoxOverdimension: true
              });
              isSetOgg = true;
            }
          }
        });
      }
    }
    hasPermission(privilegio) {
      const userPrivileges = this.currentUser.privileges.map(value => value.privilegeId);
      let hasPermission = false;
      if (this.currentUser && this.currentUser.privileges) {
        if (userPrivileges.includes(privilegio)) {
          hasPermission = true;
        }
      }
      return hasPermission;
    }
    cancel() {
      this.cleanForm();
    }
    evaluationShowButtonMake() {
      let document = true;
      if (this.showFormNumber) {
        document = this.associateFormGroup.get('formNumber')?.value ? true : false;
      } else if (this.showTypeDocument) {
        document = this.associateFormGroup.get('typeDocument')?.value ? true : false;
      }
      if (this.nitCustomer !== "" && this.nitAgent !== "" && this.container !== "" && this.associateFormGroup.get('typeEquipment')?.value && this.associateFormGroup.get('weight')?.value && this.showFormWeight && document && this.associateFormGroup.get('weight')?.valid) {
        this.enableButtonMake = true;
      } else {
        this.enableButtonMake = false;
      }
    }
    submit() {
      if (this.associateFormGroup.get('checkboxAcceptTypeEquipment')?.value === true && this.associateFormGroup.get('checkBoxAcceptTemperature')?.value === true && this.associateFormGroup.get('checkBoxAcceptImo')?.value === true && this.associateFormGroup.get('checkBoxAcceptOverdimension')?.value === true) {
        this.makeAssociation();
      } else {
        this.openAlert();
      }
    }
    openAlert() {
      if (this.matDialog.openDialogs.length === 0) {
        const dialoReg = this.matDialog.open(alert_associate_container_component/* AlertAssociateContainerComponent */.d, {
          width: "50rem",
          data: {}
        });
        dialoReg.afterClosed().subscribe(result => {
          if (result) {
            if (result.data !== "" && result.success) {
              this.differences = result.data;
              this.makeAssociation();
            }
          } else {}
        });
      }
    }
    getDataOOG() {
      if (this.associateFormGroup.get('overdimensionLeft')?.value || this.associateFormGroup.get('overdimensionRight')?.value || this.associateFormGroup.get('overdimensionFront')?.value || this.associateFormGroup.get('overdimensionBack')?.value || this.associateFormGroup.get('overdimensionTop')?.value) {
        this.associateFormGroup.patchValue({
          checkBoxOverdimension: true
        });
        const ogg = {
          leftCm: this.associateFormGroup.get('overdimensionLeft')?.value,
          rightCm: this.associateFormGroup.get('overdimensionRight')?.value,
          topCm: this.associateFormGroup.get('overdimensionTop')?.value,
          frontCm: this.associateFormGroup.get('overdimensionFront')?.value,
          backCm: this.associateFormGroup.get('overdimensionBack')?.value
        };
        return ogg;
      } else {
        return {};
      }
    }
    cleanForm() {
      this.cleanAll();
      this.associateFormGroup.patchValue({
        checkboxAcceptTypeEquipment: false
      });
      this.isViewComponent = false;
      this.storageService.cleanAssociateContainerForm();
      this.availableQuantity = 0;
      this.isCleanForm = true;
    }
    makeAssociation() {
      //se crea la asociación
      let nbrBooking = "";
      let eqStatus = "";
      let carrierVisit = "";
      let line = "";
      let reference = "";
      let transferTemplateNbr = this.associateFormGroup.get('formNumber')?.value;
      let typeDocument = this.associateFormGroup.get('typeDocument')?.value;
      if (transferTemplateNbr === "") {
        transferTemplateNbr = null;
      }
      if (typeDocument === "" || typeDocument === null) {
        typeDocument = "0";
      }
      if (this.infoBooking.length > 0) {
        let items = [];
        this.infoBooking.forEach(booking => {
          if (booking && booking.nbr && booking.eqStatus && booking.reference) {
            nbrBooking = booking.nbr;
            eqStatus = booking.eqStatus;
            carrierVisit = booking.carrierVisit;
            reference = booking.reference;
            line = booking.line;
            items.push({
              quantity: booking.quantity,
              availableQuantity: booking.availableQuantity,
              equipmentType: booking.equipmentType,
              equipmentTypeDescription: booking.equipmentTypeDescription,
              heightMm: booking.heightMm,
              lengthMm: booking.lengthMm,
              eqIsoGroup: booking.eqIsoGroup,
              isOog: booking.isOog,
              seqNbr: booking.seqNbr,
              archiso: booking.archiso,
              reference: booking.reference,
              reefer: booking.reefer,
              hazards: booking.hazards,
              grossWeight: this.associateFormGroup.get('weight')?.value,
              ogg: {
                oogLeftCm: booking.oogLeftCm,
                oogRightCm: booking.oogRightCm,
                oogTopCm: booking.oogTopCm,
                oogFrontCm: booking.oogFrontCm,
                isOog: booking.isOog
              }
            });
          }
        });
        let reefer = {};
        if (this.temperatureValue > 0 && this.temperatureValue !== null) {
          reefer = {
            tempReq: this.temperatureValue
          };
        }
        let hazard = [];
        if (this.isImoSelected) {
          let listImoValue = this.imoValue.split(" ");
          if (listImoValue[0] !== "" && listImoValue[0] !== "No" && listImoValue[0] !== "N") {
            hazard.push({
              imdg: listImoValue[0]
            });
          }
        }
        let newBooking = {
          nbr: nbrBooking,
          eqStatus: eqStatus,
          carrierVisit: carrierVisit,
          line: line,
          items: items,
          units: [{
            booking: {
              id: nbrBooking
            },
            id: this.container,
            line: line,
            reefer: reefer,
            contents: {
              weightKg: this.associateFormGroup.get('weight')?.value
            },
            container: {
              type: this.associateFormGroup.get('typeEquipment')?.value,
              id: this.container,
              archetype: this.archetype
            },
            hazards: {
              hazard: hazard
            },
            oog: this.getDataOOG()
          }],
          agentId: this.nitAgent,
          shipperId: this.nitCustomer,
          shipperName: this.customer
        };
        this.utilServices.getCreateAssotiation(newBooking, this.base64EncryptionUtilService.encrypt(reference), this.base64EncryptionUtilService.encrypt(transferTemplateNbr), typeDocument).subscribe({
          next: result => {
            if (result) {
              this.showMessage("Contenedor asociado exitosamente\n           ", "success");
              //this.storageService.clearStorageValidationPin();
              //this.storageService.cleanAll();
              this.cleanForm();
            }
          },
          error: error => {
            console.error(error);
          }
        });
      }
    }
    cleanAll(isError = false) {
      this.store.dispatch((0,shared_actions/* cleanValidateDigitCheck */.cY)());
      this.store.dispatch((0,shared_actions/* cleanforBooking */.a3)());
      this.store.dispatch((0,shared_actions/* cleanPhysicalContainer */.$E)());
      this.store.dispatch((0,shared_actions/* cleanValidateContainer */.kZ)());
      this.isConteinerValid = false;
      this.associateFormGroup.get('typeDocument')?.patchValue("");
      this.associateFormGroup.get('typeEquipment')?.patchValue("");
      this.associateFormGroup.get('weight')?.patchValue("");
      this.associateFormGroup.get('itemIso')?.patchValue("");
      this.associateFormGroup.get('formNumber')?.patchValue("");
      this.associateFormGroup.patchValue({
        temperature: ""
      });
      this.associateFormGroup.patchValue({
        imo: ""
      });
      this.associateFormGroup.patchValue({
        overdimensionLeft: ""
      });
      this.associateFormGroup.patchValue({
        overdimensionRight: ""
      });
      this.associateFormGroup.patchValue({
        overdimensionFront: ""
      });
      this.associateFormGroup.patchValue({
        overdimensionBack: ""
      });
      this.associateFormGroup.patchValue({
        overdimensionTop: ""
      });
      this.associateFormGroup.patchValue({
        checkBoxTemperature: false
      });
      this.associateFormGroup.patchValue({
        checkBoxImo: false
      });
      this.associateFormGroup.patchValue({
        checkBoxOverdimension: false
      });
      this.associateFormGroup.patchValue({
        checkBoxAcceptTypeEquipment: false
      });
      this.associateFormGroup.patchValue({
        checkBoxAcceptTemperature: false
      });
      this.associateFormGroup.patchValue({
        checkBoxAcceptImo: false
      });
      this.associateFormGroup.patchValue({
        checkBoxAcceptOverdimension: false
      });
      const weightControl = this.associateFormGroup.get('weight');
      this.minWeight = 0;
      if (weightControl?.disabled) {
        weightControl.enable({
          emitEvent: false
        }); // Habilitar temporalmente
        weightControl.patchValue(""); // Asignar valor
        weightControl.disable({
          emitEvent: false
        }); // Deshabilitar de nuevo
      } else {
        weightControl?.patchValue("");
      }
      if (!isError) {
        this.oOGList = [];
        this.filterHazardList = [];
        this.hazardList = [];
        this.hazardListPrevious = [];
        this.archisoList = [];
      }
      this.disableField('typeDocument');
      this.disableField('typeEquipment');
      this.disableField('formNumber');
      this.disableField('itemIso');
      this.disableField('weight');
      this.disableField('temperature');
      this.disableField('imo');
      this.disableField('overdimensionLeft');
      this.disableField('overdimensionRight');
      this.disableField('overdimensionFront');
      this.disableField('overdimensionBack');
      this.disableField('overdimensionTop');
      this.disableField('checkboxAcceptTypeEquipment');
      this.disableField('checkBoxAcceptTemperature');
      this.disableField('checkBoxAcceptImo');
      this.disableField('checkBoxAcceptOverdimension');
    }
    cleanFields() {
      this.associateFormGroup.get('typeDocument')?.patchValue("");
      this.associateFormGroup.get('typeEquipment')?.patchValue("");
      this.associateFormGroup.patchValue({
        weight: ""
      });
      this.associateFormGroup.get('weight')?.patchValue("");
      this.associateFormGroup.get('itemIso')?.patchValue("");
      this.associateFormGroup.get('formNumber')?.patchValue("");
      this.associateFormGroup.patchValue({
        temperature: ""
      });
      this.associateFormGroup.patchValue({
        imo: ""
      });
      this.associateFormGroup.patchValue({
        overdimensionLeft: ""
      });
      this.associateFormGroup.patchValue({
        overdimensionRight: ""
      });
      this.associateFormGroup.patchValue({
        overdimensionFront: ""
      });
      this.associateFormGroup.patchValue({
        overdimensionBack: ""
      });
      this.associateFormGroup.patchValue({
        overdimensionTop: ""
      });
      this.associateFormGroup.patchValue({
        checkBoxTemperature: false
      });
      this.associateFormGroup.patchValue({
        checkBoxImo: false
      });
      this.associateFormGroup.patchValue({
        checkBoxOverdimension: false
      });
      this.associateFormGroup.patchValue({
        checkBoxAcceptTypeEquipment: false
      });
      this.associateFormGroup.patchValue({
        checkBoxAcceptTemperature: false
      });
      this.associateFormGroup.patchValue({
        checkBoxAcceptImo: false
      });
      this.associateFormGroup.patchValue({
        checkBoxAcceptOverdimension: false
      });
    }
  }
  AssociateContainerComponent.ɵfac = function AssociateContainerComponent_Factory(t) {
    return new (t || AssociateContainerComponent)(core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux), core/* ɵɵdirectiveInject */.Y36(core/* ChangeDetectorRef */.sBO), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f), core/* ɵɵdirectiveInject */.Y36(storageservice_service/* StorageserviceService */.S), core/* ɵɵdirectiveInject */.Y36(AESEncryptionUtil_service/* AESEncryptionUtilService */.D));
  };
  AssociateContainerComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: AssociateContainerComponent,
    selectors: [["app-associate-container"]],
    inputs: {
      controlDisabled: "controlDisabled"
    },
    decls: 1,
    vars: 1,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_eb25635b4841c0e1a407920f012e19977d22c286578a560357acfba8cd13b637$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS__1 = goog.getMsg(" sidebar.TRUCK_EXPORT ");
        i18n_0 = MSG_EXTERNAL_eb25635b4841c0e1a407920f012e19977d22c286578a560357acfba8cd13b637$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS__1;
      } else {
        i18n_0 = "Asociar Contenedor";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym33$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS___3 = goog.getMsg(" modules.containerized.load.associate.containerbooking.type.document.duta ");
        i18n_2 = MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym33$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS___3;
      } else {
        i18n_2 = "Declaraci\xF3n DUTA";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym34$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS___5 = goog.getMsg(" modules.containerized.load.associate.containerbooking.type.document.transit ");
        i18n_4 = MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym34$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS___5;
      } else {
        i18n_4 = "Gu\xEDa de Transito";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym35$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS___7 = goog.getMsg(" modules.containerized.load.associate.containerbooking.type.document.dian ");
        i18n_6 = MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym35$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS___7;
      } else {
        i18n_6 = "Memorial Radicado DIAN";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym36$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS___9 = goog.getMsg(" modules.containerized.load.associate.containerbooking.type.document.plani ");
        i18n_8 = MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym36$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS___9;
      } else {
        i18n_8 = "Planilla de Traslado";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym37$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS___11 = goog.getMsg(" modules.containerized.load.associate.containerbooking.type.document.mov ");
        i18n_10 = MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym37$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS___11;
      } else {
        i18n_10 = "Movimiento de Mercanc\xEDas";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym38$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS___13 = goog.getMsg(" modules.containerized.load.associate.containerbooking.type.document.man ");
        i18n_12 = MSG_EXTERNAL_56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym38$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_ASSOCIATE_CONTAINER_ASSOCIATE_CONTAINER_COMPONENT_TS___13;
      } else {
        i18n_12 = "Planilla de env\xEDo manual";
      }
      return [["class", "associate-container", 4, "ngIf"], [1, "associate-container"], [1, "associate-container__title"], i18n_0, [3, "isAssociateContainer", "data", "controlDisabled", "searcher", "agentControl"], [4, "ngIf"], [3, "isAssociateContainer", "controlDisabled", "containerSearch"], [1, "associate-searcher", 3, "formGroup"], ["class", "", 4, "ngIf"], ["class", "type-equipment-container", 4, "ngIf"], ["class", "type-equipment-container-two", 4, "ngIf"], ["class", "checkbox-overdimension", "formControlName", "checkBoxOverdimension", 4, "ngIf"], ["class", "type-equipment-container-three", 4, "ngIf"], ["class", "type-equipment-container-four", 4, "ngIf"], [1, "button-associate-container"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "generate-pin-display__continue", 3, "disabled", "click"], [1, "service-orders-create__customer-searcher", 3, "controlDisabled", "searcher", "agent", "data", "isAssociateContainer", "customerControl"], [1, ""], ["formControlName", "typeDocument"], ["value", "0"], i18n_2, ["value", "1"], i18n_4, ["value", "2"], i18n_6, ["value", "3"], i18n_8, ["value", "4"], i18n_10, ["value", "5"], i18n_12, ["matInput", "", "formControlName", "formNumber", "maxlength", "14", "type", "number", 3, "input"], [1, "type-equipment-container"], ["class", "checkbox-right", "formControlName", "checkboxAcceptTypeEquipment", 4, "ngIf"], ["matInput", "", "formControlName", "typeEquipment", "maxlength", "4", 3, "ngClass", "input"], ["formControlName", "checkboxAcceptTypeEquipment", 1, "checkbox-right"], [4, "ngFor", "ngForOf"], ["formControlName", "itemIso"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "formControlName", "weight", "type", "number", 3, "min"], [1, "type-equipment-container-two"], ["class", "checkbox-left", "formControlName", "checkBoxTemperature", 4, "ngIf"], ["class", "checkbox-right", "formControlName", "checkBoxAcceptTemperature", 4, "ngIf"], ["formControlName", "checkBoxTemperature", 1, "checkbox-left"], ["matInput", "", "formControlName", "temperature", "type", "number"], ["formControlName", "checkBoxAcceptTemperature", 1, "checkbox-right"], ["class", "checkbox-left", "formControlName", "checkBoxImo", 4, "ngIf"], ["class", "checkbox-right", "formControlName", "checkBoxAcceptImo", 4, "ngIf"], ["formControlName", "checkBoxImo", 1, "checkbox-left"], ["matInput", "", "formControlName", "imo", "type", "text"], ["formControlName", "checkBoxAcceptImo", 1, "checkbox-right"], ["formControlName", "checkBoxOverdimension", 1, "checkbox-overdimension"], [1, "type-equipment-container-three"], ["class", "form-field", 4, "ngIf"], ["class", "checkbox-right-overdimension", "formControlName", "checkBoxAcceptOverdimension", 4, "ngIf"], [1, "form-field"], ["matInput", "", "formControlName", "overdimensionLeft", "type", "text"], ["matInput", "", "formControlName", "overdimensionRight", "type", "text"], ["formControlName", "checkBoxAcceptOverdimension", 1, "checkbox-right-overdimension"], [1, "type-equipment-container-four"], ["formControlName", "checkBoxAcceptOverdimensionTwo", 1, "hidden-checkbox", "checkbox-right-overdimension"], ["matInput", "", "formControlName", "overdimensionFront", "type", "text"], ["matInput", "", "formControlName", "overdimensionBack", "type", "text"], ["matInput", "", "formControlName", "overdimensionTop", "type", "text"]];
    },
    template: function AssociateContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, AssociateContainerComponent_div_0_Template, 28, 23, "div", 0);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", ctx.isViewComponent);
      }
    },
    dependencies: [common/* NgClass */.mk, common/* NgForOf */.sg, common/* NgIf */.O5, fesm2020_checkbox/* MatCheckbox */.oG, fesm2020_button/* MatButton */.lW, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatError */.TO, input/* MatInput */.Nt, fesm2020_select/* MatSelect */.gD, fesm2020_core/* MatOption */.ey, fesm2020_forms/* ɵNgNoValidate */._Y, fesm2020_forms/* DefaultValueAccessor */.Fj, fesm2020_forms/* NumberValueAccessor */.wV, fesm2020_forms/* NgControlStatus */.JJ, fesm2020_forms/* NgControlStatusGroup */.JL, fesm2020_forms/* MaxLengthValidator */.nD, fesm2020_forms/* MinValidator */.qQ, fesm2020_forms/* FormGroupDirective */.sg, fesm2020_forms/* FormControlName */.u, agent_searcher_component/* AgentSearcherComponent */.Z, customer_searcher_component/* CustomerSearcherComponent */.p, containers_searcher_component/* ContainersSearcherComponent */.z],
    styles: [".associate-container[_ngcontent-%COMP%]{padding:1rem;padding-top:0;padding-bottom:0;display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto auto;row-gap:1rem}.associate-container__title[_ngcontent-%COMP%]{font-size:1.5rem;color:#78909c}.associate-container__submit[_ngcontent-%COMP%]{color:#fff!important}.message-error-container[_ngcontent-%COMP%]{display:flex;justify-content:left;margin-bottom:2px;margin-top:2px}.message-error-container-text[_ngcontent-%COMP%]{display:flex;width:70%;flex-direction:column;align-items:flex-start}.associate-searcher[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto auto min-content 1fr}.type-equipment-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;gap:15px}.type-equipment-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:0 1 85%}.type-equipment-container-two[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;gap:15px}.type-equipment-container-two[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:0 1 80%}.checkbox-overdimension[_ngcontent-%COMP%]{margin-top:10px}.type-equipment-container-three[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;gap:15px}.type-equipment-container-three[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1;margin-right:10px}.type-equipment-container-four[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;gap:15px}.type-equipment-container-four[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1;margin-right:10px}.form-field[_ngcontent-%COMP%]:last-of-type{margin-right:0}.checkbox-right-overdimension[_ngcontent-%COMP%]{flex:0 0 14%;margin-left:auto}.hidden-checkbox[_ngcontent-%COMP%]{opacity:0;visibility:visible}.button-associate-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:10px;gap:.5rem}.is-invalid[_ngcontent-%COMP%]{border:1px solid red}"]
  });
  return AssociateContainerComponent;
})();
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(15861);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js
var firstValueFrom = __webpack_require__(83905);
// EXTERNAL MODULE: ./src/app/shared/components/remove-container-dialog/remove-container-dialog.component.ts
var remove_container_dialog_component = __webpack_require__(80252);
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/disassociate-container/disassociate-container.component.ts





















const disassociate_container_component_c0 = ["dynamicContainer"];
function DisassociateContainerComponent_div_0_th_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 17);
    core/* ɵɵtext */._uU(1, "UnitNbr");
    core/* ɵɵelementEnd */.qZA();
  }
}
function DisassociateContainerComponent_div_0_td_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 18);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r12.unitNbr, " ");
  }
}
function DisassociateContainerComponent_div_0_th_14_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 19);
    core/* ɵɵtext */._uU(1, " Tama\u00F1o");
    core/* ɵɵelementEnd */.qZA();
  }
}
function DisassociateContainerComponent_div_0_td_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 18)(1, "span", 20);
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA()();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate */.Oqu(element_r13.twenty ? "20''" : "40''");
  }
}
function DisassociateContainerComponent_div_0_th_17_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 17);
    core/* ɵɵtext */._uU(1, "EquipmentType");
    core/* ɵɵelementEnd */.qZA();
  }
}
function DisassociateContainerComponent_div_0_td_18_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 18);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", element_r14.equipmentType, " ");
  }
}
function DisassociateContainerComponent_div_0_th_20_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "th", 19);
  }
}
function DisassociateContainerComponent_div_0_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "td", 18)(1, "div", 21, 22);
    core/* ɵɵlistener */.NdJ("click", function DisassociateContainerComponent_div_0_td_21_Template_div_click_1_listener() {
      const restoredCtx = core/* ɵɵrestoreView */.CHM(_r18);
      const element_r15 = restoredCtx.$implicit;
      const ctx_r17 = core/* ɵɵnextContext */.oxw(2);
      return core/* ɵɵresetView */.KtG(ctx_r17.deleteContainer(element_r15.unitNbr, element_r15.nbr));
    });
    core/* ɵɵnamespaceSVG */.O4$();
    core/* ɵɵelementStart */.TgZ(3, "svg", 23)(4, "defs")(5, "style");
    core/* ɵɵtext */._uU(6, ".claseunicatrash{fill:#c0392b;stroke-width:0px;}");
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementStart */.TgZ(7, "g", 24);
    core/* ɵɵelement */._UZ(8, "path", 25)(9, "path", 26)(10, "path", 27)(11, "rect", 28)(12, "rect", 29)(13, "rect", 30)(14, "rect", 31)(15, "rect", 32)(16, "rect", 33);
    core/* ɵɵelementEnd */.qZA()()()();
  }
}
function DisassociateContainerComponent_div_0_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 34);
  }
}
function DisassociateContainerComponent_div_0_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "tr", 35);
  }
}
function DisassociateContainerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 1)(1, "mat-form-field", 2)(2, "mat-label");
    core/* ɵɵtext */._uU(3, "Filtro");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(4, "mat-icon", 3);
    core/* ɵɵtext */._uU(5, "search");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "input", 4, 5);
    core/* ɵɵlistener */.NdJ("keyup", function DisassociateContainerComponent_div_0_Template_input_keyup_6_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r21);
      const ctx_r20 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r20.submit($event));
    });
    core/* ɵɵelementEnd */.qZA()();
    core/* ɵɵelementContainerStart */.ynx(8, 6);
    core/* ɵɵelementStart */.TgZ(9, "table", 7);
    core/* ɵɵelementContainerStart */.ynx(10, 8);
    core/* ɵɵtemplate */.YNc(11, DisassociateContainerComponent_div_0_th_11_Template, 2, 0, "th", 9);
    core/* ɵɵtemplate */.YNc(12, DisassociateContainerComponent_div_0_td_12_Template, 2, 1, "td", 10);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(13, 11);
    core/* ɵɵtemplate */.YNc(14, DisassociateContainerComponent_div_0_th_14_Template, 2, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(15, DisassociateContainerComponent_div_0_td_15_Template, 3, 1, "td", 10);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(16, 13);
    core/* ɵɵtemplate */.YNc(17, DisassociateContainerComponent_div_0_th_17_Template, 2, 0, "th", 9);
    core/* ɵɵtemplate */.YNc(18, DisassociateContainerComponent_div_0_td_18_Template, 2, 1, "td", 10);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementContainerStart */.ynx(19, 14);
    core/* ɵɵtemplate */.YNc(20, DisassociateContainerComponent_div_0_th_20_Template, 1, 0, "th", 12);
    core/* ɵɵtemplate */.YNc(21, DisassociateContainerComponent_div_0_td_21_Template, 17, 0, "td", 10);
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵtemplate */.YNc(22, DisassociateContainerComponent_div_0_tr_22_Template, 1, 0, "tr", 15);
    core/* ɵɵtemplate */.YNc(23, DisassociateContainerComponent_div_0_tr_23_Template, 1, 0, "tr", 16);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(9);
    core/* ɵɵproperty */.Q6J("dataSource", ctx_r0.dataSourceBooking);
    core/* ɵɵadvance */.xp6(13);
    core/* ɵɵproperty */.Q6J("matHeaderRowDef", ctx_r0.displayedBookingColumns);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("matRowDefColumns", ctx_r0.displayedBookingColumns);
  }
}
let DisassociateContainerComponent = /*#__PURE__*/(() => {
  class DisassociateContainerComponent {
    constructor(storageService, store, cdr, matDialog, utilServices, base64EncryptionUtilService, matSnackBar) {
      this.storageService = storageService;
      this.store = store;
      this.cdr = cdr;
      this.matDialog = matDialog;
      this.utilServices = utilServices;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.matSnackBar = matSnackBar;
      this.isViewComponent = true;
      this.destroy$ = new Subject/* Subject */.x();
      this.dataSourceBooking = new table/* MatTableDataSource */.by([]);
      this.dataBookingASC = {
        "booking": "",
        "line": "",
        "carrierVisitName": "",
        "inVoyNbr": "",
        "shipper": "",
        "quantity": 0,
        "quantityAvailable": 0,
        "isoCode": []
      };
      this.hidden = false;
      this.listIsoCodes = [];
      this.newBookingASC = [];
      this.dataSourceISO = new table/* MatTableDataSource */.by([]);
      this.bookingASC = [];
      this.storeSubscription = null;
      this.existenDatos = false;
      this.displayedBookingColumns = [];
      this.displayedColumnsISO = [];
      this.bookingSearch = "";
    }
    ngOnInit() {
      this.store.select(api_gateway_selectors/* apiGatewayFeatureSelector */.o).subscribe({
        next: APIGatewatStore => this.userInfo = APIGatewatStore,
        error: error => console.error(error)
      });
      this.storageSubscription = this.storageService.getStorageChanges().subscribe(action => {
        if (action.action === 'deleteContainer') {}
      });
      this.storeSubscription = this.store.select(shared_selectors/* sharedFeatureSelector */.x).pipe((0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe({
        next: result => {
          if (result && result.bookingID) {
            this.bookingASC = result.bookingID;
            this.existenDatos = true;
          }
        }
      });
      this.displayedBookingColumns = ["unitNbr", "twenty", "equipmentType", "carrier"];
      this.displayedColumnsISO = ["isoType", "quantity", "availableQuantity"];
      this.getDataBookingASC(this.bookingASC);
    }
    submit(event) {
      const filterValue = event.target.value;
      this.dataSourceBooking.filter = filterValue.trim().toLowerCase();
    }
    onScroll() {}
    getDataBookingASC(bookingASC) {
      if (bookingASC.length > 0) {
        if (bookingASC[0].nbr) {
          this.dataBookingASC.booking = bookingASC[0].nbr;
          this.dataBookingASC.line = bookingASC[0].line;
          this.dataBookingASC.carrierVisitName = bookingASC[0].carrierVisitName;
          this.dataBookingASC.inVoyNbr = bookingASC[0].inVoyNbr;
          this.dataBookingASC.shipper = `${bookingASC[0].shipperId} -- ${bookingASC[0].shipperName}`;
        }
        let quantity = 0;
        let quantityAvailable = 0;
        bookingASC.forEach(element => {
          if (!element.unitNbr && element.quantity && element.availableQuantity && element.equipmentType && element.equipmentTypeDescription) {
            quantity += parseInt(element.quantity);
            quantityAvailable += parseInt(element.availableQuantity);
            const equipmentType = element.equipmentType;
            const equipmentTypeDescription = element.equipmentTypeDescription;
            const isoCode = {
              'equipmentType': equipmentType,
              'description': `{${equipmentType}} / ${equipmentTypeDescription}`
            };
            const exists = this.listIsoCodes.some(code => code.equipmentType === isoCode.equipmentType && code.description === isoCode.description);
            if (!exists) {
              this.listIsoCodes.push(isoCode);
            }
          }
        });
        this.dataBookingASC.quantity = quantity;
        this.dataBookingASC.quantityAvailable = quantityAvailable;
        this.dataBookingASC.isoCode = this.listIsoCodes;
        let dataSourceBooking = [];
        let accumulatedDataSource = [];
        dataSourceBooking = bookingASC.filter(element => element.unitNbr).map(element => ({
          isoType: element.isoType,
          quantity: element.quantity,
          availableQuantity: element.availableQuantity
        }));
        this.newBookingASC = bookingASC.filter(element => element.unitNbr);
        this.dataSourceISO = new table/* MatTableDataSource */.by(accumulatedDataSource);
        this.dataSourceBooking = new table/* MatTableDataSource */.by(this.newBookingASC);
        this.dataSourceBooking.sort = this.sort;
        this.cdr.detectChanges();
      }
    }
    deleteContainer(unitNbr, booking) {
      var _this = this;
      return (0,asyncToGenerator/* default */.Z)(function* () {
        if (_this.matDialog.openDialogs.length === 0) {
          const dialoReg = _this.matDialog.open(remove_container_dialog_component/* RemoveContainerDialogComponent */.i, {
            width: "50rem",
            data: {
              unitNbr: unitNbr,
              booking: booking
            }
          });
          const resultDialog = yield dialoReg.afterClosed().toPromise();
          if (resultDialog) {
            if (resultDialog.success) {
              const unit = _this.base64EncryptionUtilService.encrypt(unitNbr);
              const body = _this.makeDisassociate(unitNbr);
              const desassociate = yield (0,firstValueFrom/* firstValueFrom */.z)(_this.utilServices.putDesasociateContainer(body, unit));
              if (desassociate && !desassociate.error) {
                _this.showMessage("El contenedor fue cancelado con \xE9xito.", "success");
                _this.storageService.deleteContainer(true);
                _this.isViewComponent = false;
              } else {
                if (desassociate.error.error) {
                  _this.showMessage(desassociate.error.error, "error");
                } else {
                  _this.showMessage(desassociate.error, "error");
                }
              }
            }
          }
        }
      })();
    }
    getItemsBooking() {
      let items = [];
      this.bookingASC.forEach(booking => {
        items.push({
          quantity: booking.quantity,
          availableQuantity: booking.availableQuantity,
          equipmentType: booking.equipmentType,
          equipmentTypeDescription: booking.equipmentTypeDescription,
          heightMm: booking.heightMm,
          lengthMm: booking.lengthMm,
          eqIsoGroup: booking.eqIsoGroup,
          isOog: booking.isOog,
          seqNbr: booking.seqNbr,
          archiso: booking.archiso,
          reefer: booking.reefer,
          reference: booking.reference,
          hazards: booking.hazards,
          grossWeight: booking.grossWeight,
          ogg: {
            oogLeftCm: booking.oogLeftCm,
            oogRightCm: booking.oogRightCm,
            oogTopCm: booking.oogTopCm,
            oogFrontCm: booking.oogFrontCm,
            isOog: booking.isOog
          }
        });
      });
      return items;
    }
    makeInfoContainer(nbr) {
      let elementC = {
        nbr: "",
        eqStatus: "",
        line: "",
        shipperId: "",
        shipperName: "",
        agentId: "",
        carrierVisit: "",
        carrierVisitName: "",
        inVoyNbr: "",
        outVoyNbr: "",
        vesselId: "",
        vesselName: "",
        visitPhase: "",
        portOfLoading: "",
        portOfDischargel: "",
        reference: "",
        quantity: 0,
        availableQuantity: 0,
        equipmentType: "",
        equipmentTypeDescription: "",
        heightMm: 0,
        lengthMm: 0,
        eqIsoGroup: "",
        isOog: "",
        grossWeight: 0,
        oogLeftCm: 0,
        oogRightCm: 0,
        oogTopCm: 0,
        oogFrontCm: 0,
        yard: false,
        departed: false,
        twenty: false,
        hasDebt: false,
        seqNbr: "",
        unitNbr: "",
        transitState: "",
        isoType: "",
        hasChargeableUnitEvents: false,
        category: "",
        hasPin: false,
        hasTruckVisitAppointment: false,
        onAccount: false,
        hasHolds: false,
        pin: "",
        holdDescription: "",
        powerPaidThruDay: "",
        archiso: "",
        tempReqdC: 0,
        units: {},
        items: {}
      };
      this.bookingASC.forEach(element => {
        if (element.unitNbr && element.unitNbr === nbr) {
          let departed = false;
          let hasTruckVisitAppointment = false;
          if (element.departed && (element.departed === 'true' || element.departed === 'Y') || element.departed) {
            departed = true;
          }
          if (element.hasTruckVisitAppointment && (element.hasTruckVisitAppointment === 'true' || element.hasTruckVisitAppointment === 'Y') || element.departed) {
            hasTruckVisitAppointment = true;
          }
          elementC = {
            "nbr": element.nbr ? element.nbr : "",
            "eqStatus": element.eqStatus ? element.eqStatus : "",
            "line": element.line,
            "shipperId": element.shipperId,
            "shipperName": element.shipperName,
            "agentId": element.agentId ? element.agentId : "",
            "carrierVisit": element.carrierVisit,
            "carrierVisitName": element.carrierVisitName,
            "inVoyNbr": element.inVoyNbr,
            "outVoyNbr": element.outVoyNbr,
            "vesselId": element.vesselId,
            "vesselName": element.vesselName,
            "visitPhase": element.visitPhase,
            "portOfLoading": element.portOfLoading,
            "portOfDischargel": element.portOfDischarge1,
            "reference": element.reference,
            "quantity": element.quantity ? parseInt(element.quantity) : 0,
            "availableQuantity": element.availableQuantity ? parseInt(element.availableQuantity) : 0,
            "equipmentType": element.equipmentType,
            "equipmentTypeDescription": element.equipmentTypeDescription,
            "heightMm": element.heightMm,
            "lengthMm": element.lengthMm,
            "eqIsoGroup": element.eqIsoGroup,
            "isOog": element.isOog,
            "grossWeight": element.grossWeight,
            "oogLeftCm": element.oogLeftCm ? parseInt(element.oogLeftCm) : null,
            "oogRightCm": element.oogRightCm ? parseInt(element.oogRightCm) : null,
            "oogTopCm": element.oogTopCm ? parseInt(element.oogTopCm) : null,
            "oogFrontCm": element.oogFrontCm ? parseInt(element.oogFrontCm) : null,
            "yard": element.yard,
            "departed": departed,
            "twenty": element.twenty,
            "hasDebt": element.hasDebt,
            "seqNbr": element.seqNbr,
            "unitNbr": element.unitNbr,
            "transitState": element.transitState,
            "isoType": element.isoType,
            "hasChargeableUnitEvents": element.hasChargeableUnitEvents,
            "category": element.category,
            "hasPin": element.hasPin,
            "hasTruckVisitAppointment": hasTruckVisitAppointment,
            "onAccount": element.onAccount,
            "hasHolds": element.hasHolds,
            "pin": element.pin,
            "holdDescription": element.holdDescription,
            "powerPaidThruDay": element.powerPaidThruDay,
            "archiso": element.archiso,
            "tempReqdC": element.tempReqdC ? parseInt(element.tempReqdC) : null,
            units: {},
            items: {}
          };
        }
      });
      return elementC;
    }
    getUnits() {
      let units = [];
      this.bookingASC.forEach(element => {
        if (element.unitNbr) {
          units.push({
            "id": element.unitNbr,
            "container": {
              "type": element.isoType,
              "id": element.unitNbr
            },
            "category": element.category,
            "truckingCompany": element.truckingCompany ? element.truckingCompany : "",
            "transitState": element.transitState ? element.transitState : ""
          });
        }
      });
      return units;
    }
    makeDisassociate(nbr) {
      let elementC = this.makeInfoContainer(nbr);
      let items = this.getItemsBooking();
      let units = this.getUnits();
      elementC.items = items;
      elementC.units = units;
      return elementC;
    }
    showMessage(message, type) {
      const config = {
        verticalPosition: "top",
        duration: 5000,
        panelClass: [""]
      };
      if (type === "error") {
        config.panelClass = ["error-snackbar"];
      } else if (type === "warning") {
        config.panelClass = ["warning-snackbar"];
      } else if (type === "success") {
        config.panelClass = ["success-snackbar"];
      }
      this.matSnackBar.open(message, "", config);
    }
    ngOnDestroy() {
      if (this.storageSubscription) {
        this.storageSubscription.unsubscribe();
      }
      this.destroy$.next();
      this.destroy$.complete();
    }
  }
  DisassociateContainerComponent.ɵfac = function DisassociateContainerComponent_Factory(t) {
    return new (t || DisassociateContainerComponent)(core/* ɵɵdirectiveInject */.Y36(storageservice_service/* StorageserviceService */.S), core/* ɵɵdirectiveInject */.Y36(ngrx_store/* Store */.yh), core/* ɵɵdirectiveInject */.Y36(core/* ChangeDetectorRef */.sBO), core/* ɵɵdirectiveInject */.Y36(dialog/* MatDialog */.uw), core/* ɵɵdirectiveInject */.Y36(util_service/* UtilService */.f), core/* ɵɵdirectiveInject */.Y36(base64_encryption_util_service/* Base64EncryptionUtilService */.L), core/* ɵɵdirectiveInject */.Y36(snack_bar/* MatSnackBar */.ux));
  };
  DisassociateContainerComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: DisassociateContainerComponent,
    selectors: [["app-disassociate-container"]],
    viewQuery: function DisassociateContainerComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(sort/* MatSort */.YE, 5);
        core/* ɵɵviewQuery */.Gf(disassociate_container_component_c0, 5, core/* ViewContainerRef */.s_b);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.sort = _t.first);
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.dynamicContainer = _t.first);
      }
    },
    decls: 1,
    vars: 1,
    consts: [["clas", "history-pins", 4, "ngIf"], ["clas", "history-pins"], [1, "queries__filter"], ["matPrefix", "", 1, "queries__filter-icon"], ["matInput", "", "placeholder", "Ingrese valor para filtrar", 3, "keyup"], ["input", ""], [1, "manage-history"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "unitNbr"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "twenty"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "equipmentType"], ["matColumnDef", "carrier"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [1, "badge"], [1, "generate-pin-display-item__delete_all", 3, "click"], ["buttonElement", ""], ["id", "Capa_2", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 22.99 26.54", 1, "delete-container-display-item__delete"], ["id", "Capa_1-2"], ["d", "M16.18,26.54H7.37c-1.67,0-3.11-1.32-3.34-3.06L1.63,5.94c-.02-.14.02-.28.12-.39.09-.11.23-.17.37-.17h18.91c.14,0,.27.06.37.16s.14.24.12.38l-1.98,17.47c-.2,1.79-1.65,3.15-3.35,3.15ZM2.68,6.36l2.32,16.99c.17,1.26,1.19,2.21,2.37,2.21h8.82c1.21,0,2.23-.98,2.37-2.27l1.92-16.92H2.68Z", 1, "claseunicatrash"], ["d", "M22.5,6.36H.49c-.27,0-.49-.22-.49-.49v-3.24c0-.27.22-.49.49-.49h22c.27,0,.49.22.49.49v3.24c0,.27-.22.49-.49.49ZM.99,5.38h21.01v-2.25H.99v2.25Z", 1, "claseunicatrash"], ["d", "M14.17,3.13h-5.35c-.27,0-.49-.22-.49-.49V.49c0-.27.22-.49.49-.49h5.35c.27,0,.49.22.49.49v2.14c0,.27-.22.49-.49.49ZM9.31,2.14h4.36V.99h-4.36v1.15Z", 1, "claseunicatrash"], ["x", "7.35", "y", "21.3", "width", ".99", "height", "2.2", "transform", "translate(-2.68 1.13) rotate(-7.03)", 1, "claseunicatrash"], ["x", "6.43", "y", "8.58", "width", ".99", "height", "12.77", "transform", "translate(-1.78 .96) rotate(-7.03)", 1, "claseunicatrash"], ["x", "14.05", "y", "21.9", "width", "2.2", "height", ".99", "transform", "translate(-8.92 34.72) rotate(-83.04)", 1, "claseunicatrash"], ["x", "9.67", "y", "14.48", "width", "12.77", "height", ".99", "transform", "translate(-.75 29.09) rotate(-83.04)", 1, "claseunicatrash"], ["x", "11.04", "y", "8.63", "width", ".99", "height", "11.18", "transform", "translate(-.1 .08) rotate(-.39)", 1, "claseunicatrash"], ["x", "11.08", "y", "19.82", "width", ".99", "height", "3.67", 1, "claseunicatrash"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row"]],
    template: function DisassociateContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, DisassociateContainerComponent_div_0_Template, 24, 3, "div", 0);
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", ctx.bookingASC.length > 0 && !ctx.hidden && ctx.isViewComponent);
      }
    },
    dependencies: [common/* NgIf */.O5, icon/* MatIcon */.Hw, form_field/* MatFormField */.KE, form_field/* MatLabel */.hX, form_field/* MatPrefix */.qo, input/* MatInput */.Nt, table/* MatTable */.BZ, table/* MatHeaderCellDef */.fO, table/* MatHeaderRowDef */.as, table/* MatColumnDef */.w1, table/* MatCellDef */.Dz, table/* MatRowDef */.nj, table/* MatHeaderCell */.ge, table/* MatCell */.ev, table/* MatHeaderRow */.XQ, table/* MatRow */.Gk, sort/* MatSort */.YE, sort/* MatSortHeader */.nU],
    styles: [".wrapper[_ngcontent-%COMP%]{width:100%;height:100%;padding:.5rem;display:grid;grid-template-columns:1fr;grid-template-rows:auto 1fr;gap:.5rem}.header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.title-header[_ngcontent-%COMP%]{font-size:1.2rem;font-family:Gilroy-Light;margin:0;padding-left:1rem;color:#78909c;font-weight:300}.icon-title[_ngcontent-%COMP%]{width:1.5rem}.title-card[_ngcontent-%COMP%]{width:max-content}.card-title[_ngcontent-%COMP%]{font-family:Gilroy-ExtraBold!important;color:#78909c;margin:0}.queries__filter[_ngcontent-%COMP%]{width:100%}.table-border-rounded[_ngcontent-%COMP%]{width:100%;background-color:#f1f2f6;border-radius:.5rem}.history-cross__table[_ngcontent-%COMP%]{width:100%;border-collapse:separate;border-spacing:0}.history-cross__sub-table[_ngcontent-%COMP%]{width:100%;border-collapse:separate;border-spacing:0;margin:0}.history-cross__table-header[_ngcontent-%COMP%]{background-color:#92b976;color:#fff}.history-cross__table-header-item[_ngcontent-%COMP%]{padding:1rem;font-weight:500;text-align:center}.history-cross__table-body-item[_ngcontent-%COMP%]{text-align:center}.history-cross__table-body-item__darken[_ngcontent-%COMP%]{background-color:#f1f2f6}.history-cross__table-header-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.history-cross__table-header-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.history-cross__table-body-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}.history-cross__table-body-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}.history-cross__table-body-outlined[_ngcontent-%COMP%]:last-child{border-right:1px solid #78909c;border-right:0}.history-cross__sub-table-header-item[_ngcontent-%COMP%]{padding:1rem;font-weight:500;text-align:center}.history-cross__sub-table-header-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.history-cross__sub-table-header-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.history-cross__sub-table-body-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.history-cross__sub-table-body-item[_ngcontent-%COMP%]:last-child{border-top-right-radius:.5rem;border-bottom-right-radius:.5rem}.history-cross__table-outlined[_ngcontent-%COMP%]{border:1px solid #78909c}.history-cross__table-space[_ngcontent-%COMP%]{padding:.5rem}.history-cross__table-space_min[_ngcontent-%COMP%]{padding:.25rem}.history-cross__table-body-item[_ngcontent-%COMP%]{padding:1rem}.history-cross__title[_ngcontent-%COMP%]{margin-bottom:1rem;display:flex;justify-content:flex-start;align-content:center}.history-cross__title-text[_ngcontent-%COMP%]{color:#777;margin:0;font-weight:600}.history-cross__thead[_ngcontent-%COMP%]{position:sticky;top:0;left:0}.title-icon[_ngcontent-%COMP%]{width:2rem;margin-right:1rem}.history-cross__icon-check[_ngcontent-%COMP%], .history-cross__icon-x[_ngcontent-%COMP%]{width:2rem}.history-cross__table-actions[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr;justify-items:center;align-items:center}.example-detail-row[_ngcontent-%COMP%]{height:0}.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.example-element-detail[_ngcontent-%COMP%]{overflow:hidden;display:flex}.detail-table[_ngcontent-%COMP%]{background:#b7b7b773;text-align:center}  .mdc-tab__text-label{flex-direction:column!important}  .mdc-data-table__header-cell{text-align:center!important;font-family:Gilroy-ExtraBold;color:#66bb6a;font-size:1rem}  .mdc-data-table__row{background-color:#dfe6e91a!important;border:transparent solid!important;border-bottom:.25rem transparent solid!important}  .mdc-data-table__row:hover{background-color:#7ba0521a!important}  .mdc-data-table__row td{font-family:Gilroy-Light;color:#666!important}  .mdc-data-table__row td:first-child{border-top-left-radius:1rem;border-bottom-left-radius:1rem}  .mdc-data-table__row td:last-child{border-top-right-radius:1rem;border-bottom-right-radius:1rem}  .error-snackbar .mdc-snackbar__surface{color:#721c24!important;background-color:#f8d7da!important;border-color:#f5c6cb!important}  .error-snackbar .mdc-snackbar__surface .mdc-button__label{color:#721c24!important}  .error-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#721c24!important}  .success-snackbar .mdc-snackbar__surface{color:#155724!important;background-color:#d4edda!important;border-color:#c3e6cb!important}  .success-snackbar .mdc-snackbar__surface .mdc-button__label{color:#155724!important}  .success-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#155724!important}  .warning-snackbar .mdc-snackbar__surface{color:#856404!important;background-color:#fff3cd!important;border-color:#ffeeba!important}  .warning-snackbar .mdc-snackbar__surface .mdc-button__label{color:#856404!important}  .warning-snackbar .mdc-snackbar__surface .mat-mdc-snack-bar-label{color:#856404!important}  .mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:transparent!important;--mat-mdc-button-persistent-ripple-color: currentColor !important}.manage-history[_ngcontent-%COMP%]{height:100vh}.history-pins[_ngcontent-%COMP%]{width:100%;height:100%;padding-bottom:0}.hidden-icon[_ngcontent-%COMP%]{background-color:#9d9c9c}  .mdc-data-table__row.active-count-zero{background-color:#ececec!important}  .mat-badge.active-count-zero .mat-badge-content{background-color:#d0d0cf!important;color:#000!important}.badge[_ngcontent-%COMP%]{font-size:12px;padding:.1rem .5rem;background-color:#777;color:#fff;border-radius:10px}.delete-container-display-item__delete[_ngcontent-%COMP%]{width:1.25rem;color:#636e72!important;cursor:pointer}"]
  });
  return DisassociateContainerComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/guard/notifications.guard.ts
var notifications_guard = __webpack_require__(34418);
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/containerized-load-routing.module.ts



















const routes = [{
  path: "",
  component: ContainerizedLoadComponent,
  canActivate: [notifications_guard/* NotificationsGuard */.t],
  data: {
    componentName: 'ContainerizedLoadComponent',
    privilegeName: 'CC,CC_TRUCK'
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
      detached: false,
      componentName: "LockComponent",
      privilegeName: "CC_CTA_BLOQ"
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
      detached: false,
      componentName: "LockComponent",
      privilegeName: "CC_CTA_DESBL"
    }
  }, {
    path: "importacion",
    component: ImportComponent,
    data: {
      detached: false
    }
  }, {
    path: "exportacion",
    component: ExportacionComponent,
    data: {
      detached: false
    }
  }, {
    path: "appointment-datails",
    component: AppointmentCreationComponent
  }, {
    path: "billing",
    component: invoice_management_billing_component/* InvoiceManagementBillingComponent */.N,
    canActivate: [notifications_guard/* NotificationsGuard */.t],
    data: {
      detached: false,
      componentName: "billing",
      privilegeName: "CC_IMP_FAC"
    }
  }, {
    path: "proforma",
    component: invoice_proforma_component/* InvoiceProformaComponent */.x,
    data: {
      detached: false
    }
  }, {
    path: "resume",
    component: invoice_resume_component/* InvoiceResumeComponent */.V,
    data: {
      detached: false
    }
  }, {
    path: "export",
    children: [{
      path: "billing",
      component: InvoiceBookingManagementBillingComponent,
      data: {
        detached: false,
        export: true
      }
    }, {
      path: "proforma",
      component: invoice_proforma_component/* InvoiceProformaComponent */.x,
      data: {
        detached: false,
        export: true
      }
    }, {
      path: "resume",
      component: invoice_resume_component/* InvoiceResumeComponent */.V,
      data: {
        detached: false,
        export: true
      }
    }]
  }, {
    path: "billing",
    component: invoice_management_billing_component/* InvoiceManagementBillingComponent */.N,
    canActivate: [notifications_guard/* NotificationsGuard */.t],
    data: {
      detached: false,
      export: false
    }
  }, {
    path: "proforma",
    component: invoice_proforma_component/* InvoiceProformaComponent */.x,
    data: {
      detached: false,
      export: false
    }
  }, {
    path: "resume",
    component: invoice_resume_component/* InvoiceResumeComponent */.V,
    data: {
      detached: false,
      export: false
    }
  }, {
    path: "documents",
    component: UploadDocumentsComponent,
    canActivate: [notifications_guard/* NotificationsGuard */.t],
    data: {
      documentation_module: documentation_modules_enum/* typesModulesDocumentation.IMPO_CC */.c.IMPO_CC,
      componentName: "UploadDocumentsComponent",
      privilegeName: "CC_IMP_DOC"
    }
  }, {
    path: "generar-pin",
    component: GeneratePinComponent,
    canActivate: [notifications_guard/* NotificationsGuard */.t],
    data: {
      componentName: 'GeneratePinComponent',
      privilegeName: 'CC_IMP_PIN'
    }
  }, {
    path: "pin",
    component: GeneratePinDisplayComponent
  }, {
    path: "associate-container",
    component: AssociateContainerComponent,
    canActivate: [notifications_guard/* NotificationsGuard */.t],
    data: {
      componentName: 'AssociateContainerComponent',
      privilegeName: 'CC_EXP_ASO'
    }
  }, {
    path: "disassociate-container",
    component: DisassociateContainerComponent
  }]
}];
let ContainerizedLoadRoutingModule = /*#__PURE__*/(() => {
  class ContainerizedLoadRoutingModule {}
  ContainerizedLoadRoutingModule.ɵfac = function ContainerizedLoadRoutingModule_Factory(t) {
    return new (t || ContainerizedLoadRoutingModule)();
  };
  ContainerizedLoadRoutingModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ContainerizedLoadRoutingModule
  });
  ContainerizedLoadRoutingModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [router/* RouterModule.forChild */.Bz.forChild(routes), router/* RouterModule */.Bz]
  });
  return ContainerizedLoadRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ContainerizedLoadRoutingModule, {
    imports: [router/* RouterModule */.Bz],
    exports: [router/* RouterModule */.Bz]
  });
})();
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/export/export.component.ts

let ExportComponent = /*#__PURE__*/(() => {
  class ExportComponent {
    constructor() {}
    ngOnInit() {}
  }
  ExportComponent.ɵfac = function ExportComponent_Factory(t) {
    return new (t || ExportComponent)();
  };
  ExportComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExportComponent,
    selectors: [["app-export"]],
    decls: 0,
    vars: 0,
    template: function ExportComponent_Template(rf, ctx) {}
  });
  return ExportComponent;
})();
// EXTERNAL MODULE: ./src/app/shared/shared.module.ts + 9 modules
var shared_module = __webpack_require__(96158);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = __webpack_require__(26063);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm/internal/ReplaySubject.js


class ReplaySubject_ReplaySubject extends Subject/* Subject */.x {
  constructor(_bufferSize = Infinity, _windowTime = Infinity, _timestampProvider = dateTimestampProvider/* dateTimestampProvider */.l) {
    super();
    this._bufferSize = _bufferSize;
    this._windowTime = _windowTime;
    this._timestampProvider = _timestampProvider;
    this._buffer = [];
    this._infiniteTimeWindow = true;
    this._infiniteTimeWindow = _windowTime === Infinity;
    this._bufferSize = Math.max(1, _bufferSize);
    this._windowTime = Math.max(1, _windowTime);
  }
  next(value) {
    const {
      isStopped,
      _buffer,
      _infiniteTimeWindow,
      _timestampProvider,
      _windowTime
    } = this;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    super.next(value);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    const subscription = this._innerSubscribe(subscriber);
    const {
      _infiniteTimeWindow,
      _buffer
    } = this;
    const copy = _buffer.slice();
    for (let i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  }
  _trimBuffer() {
    const {
      _bufferSize,
      _timestampProvider,
      _buffer,
      _infiniteTimeWindow
    } = this;
    const adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      const now = _timestampProvider.now();
      let last = 0;
      for (let i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last = i;
      }
      last && _buffer.splice(0, last + 1);
    }
  }
}
//# sourceMappingURL=ReplaySubject.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/finalize.js
var finalize = __webpack_require__(28746);
;// CONCATENATED MODULE: ./node_modules/ngx-joyride/fesm2020/ngx-joyride.mjs









const ngx_joyride_c0 = function (a0, a1, a2) {
  return {
    "background-color": a0,
    "color": a1,
    "border-color": a2
  };
};
const _c1 = ["*"];
const _c2 = ["stepHolder"];
const _c3 = ["stepContainer"];
function JoyrideStepComponent_joyride_arrow_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelement */._UZ(0, "joyride-arrow", 17);
  }
  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵstyleProp */.Udp("top", ctx_r1.arrowTopPosition, "px")("left", ctx_r1.arrowLeftPosition, "px");
    core/* ɵɵproperty */.Q6J("position", ctx_r1.arrowPosition);
  }
}
function JoyrideStepComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainer */.GkF(0);
  }
}
function JoyrideStepComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵtext */._uU(0);
    core/* ɵɵpipe */.ALo(1, "async");
  }
  if (rf & 2) {
    const ctx_r5 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵtextInterpolate1 */.hij(" ", core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx_r5.text), " ");
  }
}
function JoyrideStepComponent_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainer */.GkF(0);
  }
}
function JoyrideStepComponent_div_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 20);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r13 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(ctx_r13.counter);
  }
}
function JoyrideStepComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div", 18);
    core/* ɵɵtemplate */.YNc(1, JoyrideStepComponent_div_15_ng_container_1_Template, 1, 0, "ng-container", 9);
    core/* ɵɵtemplate */.YNc(2, JoyrideStepComponent_div_15_ng_template_2_Template, 2, 1, "ng-template", null, 19, core/* ɵɵtemplateRefExtractor */.W1O);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const _r12 = core/* ɵɵreference */.MAs(3);
    const ctx_r6 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngTemplateOutlet", ctx_r6.customCounter ? ctx_r6.customCounter : _r12)("ngTemplateOutletContext", ctx_r6.counterData);
  }
}
function JoyrideStepComponent_div_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainer */.GkF(0);
  }
}
function JoyrideStepComponent_div_17_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "joyride-button", 24);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "async");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r16 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵproperty */.Q6J("color", ctx_r16.themeColor);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind1 */.lcZ(2, 2, ctx_r16.prevText));
  }
}
function JoyrideStepComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 21);
    core/* ɵɵlistener */.NdJ("click", function JoyrideStepComponent_div_17_Template_div_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r18);
      const ctx_r17 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r17.prev());
    });
    core/* ɵɵtemplate */.YNc(1, JoyrideStepComponent_div_17_ng_container_1_Template, 1, 0, "ng-container", 22);
    core/* ɵɵtemplate */.YNc(2, JoyrideStepComponent_div_17_ng_template_2_Template, 3, 4, "ng-template", null, 23, core/* ɵɵtemplateRefExtractor */.W1O);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const _r15 = core/* ɵɵreference */.MAs(3);
    const ctx_r7 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngTemplateOutlet", ctx_r7.customPrevButton ? ctx_r7.customPrevButton : _r15);
  }
}
function JoyrideStepComponent_div_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainer */.GkF(0);
  }
}
function JoyrideStepComponent_div_18_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "joyride-button", 27);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "async");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r21 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵproperty */.Q6J("color", ctx_r21.themeColor);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind1 */.lcZ(2, 2, ctx_r21.nextText));
  }
}
function JoyrideStepComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 25);
    core/* ɵɵlistener */.NdJ("click", function JoyrideStepComponent_div_18_Template_div_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r23);
      const ctx_r22 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r22.next());
    });
    core/* ɵɵtemplate */.YNc(1, JoyrideStepComponent_div_18_ng_container_1_Template, 1, 0, "ng-container", 22);
    core/* ɵɵtemplate */.YNc(2, JoyrideStepComponent_div_18_ng_template_2_Template, 3, 4, "ng-template", null, 26, core/* ɵɵtemplateRefExtractor */.W1O);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const _r20 = core/* ɵɵreference */.MAs(3);
    const ctx_r8 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngTemplateOutlet", ctx_r8.customNextButton ? ctx_r8.customNextButton : _r20);
  }
}
function JoyrideStepComponent_ng_template_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainer */.GkF(0);
  }
}
function JoyrideStepComponent_ng_template_19_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "joyride-button", 30);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "async");
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const ctx_r26 = core/* ɵɵnextContext */.oxw(2);
    core/* ɵɵproperty */.Q6J("color", ctx_r26.themeColor);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind1 */.lcZ(2, 2, ctx_r26.doneText));
  }
}
function JoyrideStepComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = core/* ɵɵgetCurrentView */.EpF();
    core/* ɵɵelementStart */.TgZ(0, "div", 28);
    core/* ɵɵlistener */.NdJ("click", function JoyrideStepComponent_ng_template_19_Template_div_click_0_listener() {
      core/* ɵɵrestoreView */.CHM(_r28);
      const ctx_r27 = core/* ɵɵnextContext */.oxw();
      return core/* ɵɵresetView */.KtG(ctx_r27.close());
    });
    core/* ɵɵtemplate */.YNc(1, JoyrideStepComponent_ng_template_19_ng_container_1_Template, 1, 0, "ng-container", 22);
    core/* ɵɵtemplate */.YNc(2, JoyrideStepComponent_ng_template_19_ng_template_2_Template, 3, 4, "ng-template", null, 29, core/* ɵɵtemplateRefExtractor */.W1O);
    core/* ɵɵelementEnd */.qZA();
  }
  if (rf & 2) {
    const _r25 = core/* ɵɵreference */.MAs(3);
    const ctx_r10 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("ngTemplateOutlet", ctx_r10.customDoneButton ? ctx_r10.customDoneButton : _r25);
  }
}
class JoyrideStep {
  constructor() {
    this.title = new ReplaySubject();
    this.text = new ReplaySubject();
  }
}
class JoyrideError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, JoyrideError.prototype);
  }
}
class JoyrideStepDoesNotExist extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, JoyrideStepDoesNotExist.prototype);
  }
}
class JoyrideStepOutOfRange extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, JoyrideStepOutOfRange.prototype);
  }
}
const DEFAULT_THEME_COLOR = '#3b5560';
const STEP_DEFAULT_POSITION = 'bottom';
const DEFAULT_TIMEOUT_BETWEEN_STEPS = 1;
class ObservableCustomTexts {}
const DEFAULT_TEXTS = {
  prev: (0,of.of)('prev'),
  next: (0,of.of)('next'),
  done: (0,of.of)('done'),
  close: (0,of.of)(null)
};
let JoyrideOptionsService = /*#__PURE__*/(() => {
  class JoyrideOptionsService {
    constructor() {
      this.themeColor = DEFAULT_THEME_COLOR;
      this.stepDefaultPosition = STEP_DEFAULT_POSITION;
      this.logsEnabled = false;
      this.showCounter = true;
      this.showPrevButton = true;
      this.stepsOrder = [];
    }
    setOptions(options) {
      this.stepsOrder = options.steps;
      this.stepDefaultPosition = options.stepDefaultPosition ? options.stepDefaultPosition : this.stepDefaultPosition;
      this.logsEnabled = typeof options.logsEnabled !== 'undefined' ? options.logsEnabled : this.logsEnabled;
      this.showCounter = typeof options.showCounter !== 'undefined' ? options.showCounter : this.showCounter;
      this.showPrevButton = typeof options.showPrevButton !== 'undefined' ? options.showPrevButton : this.showPrevButton;
      this.themeColor = options.themeColor ? options.themeColor : this.themeColor;
      this.firstStep = options.startWith;
      this.waitingTime = typeof options.waitingTime !== 'undefined' ? options.waitingTime : DEFAULT_TIMEOUT_BETWEEN_STEPS;
      typeof options.customTexts !== 'undefined' ? this.setCustomText(options.customTexts) : this.setCustomText(DEFAULT_TEXTS);
    }
    getBackdropColor() {
      return this.hexToRgb(this.themeColor);
    }
    getThemeColor() {
      return this.themeColor;
    }
    getStepDefaultPosition() {
      return this.stepDefaultPosition;
    }
    getStepsOrder() {
      return this.stepsOrder;
    }
    getFirstStep() {
      return this.firstStep;
    }
    getWaitingTime() {
      return this.waitingTime;
    }
    areLogsEnabled() {
      return this.logsEnabled;
    }
    isCounterVisible() {
      return this.showCounter;
    }
    isPrevButtonVisible() {
      return this.showPrevButton;
    }
    getCustomTexts() {
      return this.customTexts;
    }
    setCustomText(texts) {
      let prev;
      let next;
      let done;
      let close;
      prev = texts.prev ? texts.prev : DEFAULT_TEXTS.prev;
      next = texts.next ? texts.next : DEFAULT_TEXTS.next;
      done = texts.done ? texts.done : DEFAULT_TEXTS.done;
      close = texts.close ? texts.close : DEFAULT_TEXTS.close;
      this.customTexts = {
        prev: this.toObservable(prev),
        next: this.toObservable(next),
        done: this.toObservable(done),
        close: this.toObservable(close)
      };
    }
    toObservable(value) {
      return value instanceof internal_Observable/* Observable */.y ? value : (0,of.of)(value);
    }
    hexToRgb(hex) {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, (m, r, g, b) => {
        return r + r + g + g + b + b;
      });
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
    }
  }
  JoyrideOptionsService.ɵfac = function JoyrideOptionsService_Factory(t) {
    return new (t || JoyrideOptionsService)();
  };
  JoyrideOptionsService.ɵprov = /* @__PURE__ */core/* ɵɵdefineInjectable */.Yz7({
    token: JoyrideOptionsService,
    factory: JoyrideOptionsService.ɵfac
  });
  return JoyrideOptionsService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const JOYRIDE = 'ngx-joyride:::';
let LoggerService = /*#__PURE__*/(() => {
  class LoggerService {
    constructor(optionService) {
      this.optionService = optionService;
    }
    debug(message, data = "") {
      if (this.optionService.areLogsEnabled()) {
        console.debug(JOYRIDE + message, data);
      }
    }
    info(message, data = "") {
      if (this.optionService.areLogsEnabled()) {
        console.info(JOYRIDE + message, data);
      }
    }
    warn(message, data = "") {
      if (this.optionService.areLogsEnabled()) {
        console.warn(JOYRIDE + message, data);
      }
    }
    error(message, data = "") {
      if (this.optionService.areLogsEnabled()) {
        console.error(JOYRIDE + message, data);
      }
    }
  }
  LoggerService.ɵfac = function LoggerService_Factory(t) {
    return new (t || LoggerService)(core/* ɵɵinject */.LFG(JoyrideOptionsService));
  };
  LoggerService.ɵprov = /* @__PURE__ */core/* ɵɵdefineInjectable */.Yz7({
    token: LoggerService,
    factory: LoggerService.ɵfac
  });
  return LoggerService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const ROUTE_SEPARATOR = '@';
class Step {}
var StepActionType = /*#__PURE__*/(() => {
  (function (StepActionType) {
    StepActionType["NEXT"] = "NEXT";
    StepActionType["PREV"] = "PREV";
  })(StepActionType || (StepActionType = {}));
  return StepActionType;
})();
let JoyrideStepsContainerService = /*#__PURE__*/(() => {
  class JoyrideStepsContainerService {
    constructor(stepOptions, logger) {
      this.stepOptions = stepOptions;
      this.logger = logger;
      this.tempSteps = [];
      this.currentStepIndex = -2;
      this.stepHasBeenModified = new Subject/* Subject */.x();
    }
    getFirstStepIndex() {
      const firstStep = this.stepOptions.getFirstStep();
      const stepIds = this.stepOptions.getStepsOrder();
      let index = stepIds.indexOf(firstStep);
      if (index < 0) {
        index = 0;
        if (firstStep !== undefined) this.logger.warn(`The step ${firstStep} does not exist. Check in your step list if it's present.`);
      }
      return index;
    }
    init() {
      this.logger.info('Initializing the steps array.');
      this.steps = [];
      this.currentStepIndex = this.getFirstStepIndex() - 1;
      let stepIds = this.stepOptions.getStepsOrder();
      stepIds.forEach(stepId => this.steps.push({
        id: stepId,
        step: null
      }));
    }
    addStep(stepToAdd) {
      let stepExist = this.tempSteps.filter(step => step.name === stepToAdd.name).length > 0;
      if (!stepExist) {
        this.logger.info(`Adding step ${stepToAdd.name} to the steps list.`);
        this.tempSteps.push(stepToAdd);
      } else {
        let stepIndexToReplace = this.tempSteps.findIndex(step => step.name === stepToAdd.name);
        this.tempSteps[stepIndexToReplace] = stepToAdd;
      }
    }
    get(action) {
      if (action === StepActionType.NEXT) this.currentStepIndex++;else this.currentStepIndex--;
      if (this.currentStepIndex < 0 || this.currentStepIndex >= this.steps.length) throw new JoyrideStepOutOfRange('The first or last step of the tour cannot be found!');
      const stepName = this.getStepName(this.steps[this.currentStepIndex].id);
      const index = this.tempSteps.findIndex(step => step.name === stepName);
      let stepFound = this.tempSteps[index];
      this.steps[this.currentStepIndex].step = stepFound;
      if (stepFound == null) {
        this.logger.warn(`Step ${this.steps[this.currentStepIndex].id} not found in the DOM. Check if it's hidden by *ngIf directive.`);
      }
      return stepFound;
    }
    getStepRoute(action) {
      let stepID;
      if (action === StepActionType.NEXT) {
        stepID = this.steps[this.currentStepIndex + 1] ? this.steps[this.currentStepIndex + 1].id : null;
      } else {
        stepID = this.steps[this.currentStepIndex - 1] ? this.steps[this.currentStepIndex - 1].id : null;
      }
      let stepRoute = stepID && stepID.includes(ROUTE_SEPARATOR) ? stepID.split(ROUTE_SEPARATOR)[1] : '';
      return stepRoute;
    }
    updatePosition(stepName, position) {
      let index = this.getStepIndex(stepName);
      if (this.steps[index].step) {
        this.steps[index].step.position = position;
        this.stepHasBeenModified.next(this.steps[index].step);
      } else {
        this.logger.warn(`Trying to modify the position of ${stepName} to ${position}. Step not found!Is this step located in a different route?`);
      }
    }
    getStepNumber(stepName) {
      return this.getStepIndex(stepName) + 1;
    }
    getStepsCount() {
      let stepsOrder = this.stepOptions.getStepsOrder();
      return stepsOrder.length;
    }
    getStepIndex(stepName) {
      const index = this.steps.map(step => step.id.includes(ROUTE_SEPARATOR) ? step.id.split(ROUTE_SEPARATOR)[0] : step.id).findIndex(name => stepName === name);
      if (index === -1) throw new JoyrideError(`The step with name: ${stepName} does not exist in the step list.`);
      return index;
    }
    getStepName(stepID) {
      let stepName = stepID && stepID.includes(ROUTE_SEPARATOR) ? stepID.split(ROUTE_SEPARATOR)[0] : stepID;
      return stepName;
    }
  }
  JoyrideStepsContainerService.ɵfac = function JoyrideStepsContainerService_Factory(t) {
    return new (t || JoyrideStepsContainerService)(core/* ɵɵinject */.LFG(JoyrideOptionsService), core/* ɵɵinject */.LFG(LoggerService));
  };
  JoyrideStepsContainerService.ɵprov = /* @__PURE__ */core/* ɵɵdefineInjectable */.Yz7({
    token: JoyrideStepsContainerService,
    factory: JoyrideStepsContainerService.ɵfac
  });
  return JoyrideStepsContainerService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DomRefService = /*#__PURE__*/(() => {
  class DomRefService {
    constructor(platformId) {
      this.platformId = platformId;
      this.fakeDocument = {
        body: {},
        documentElement: {}
      };
      this.fakeWindow = {
        document: this.fakeDocument,
        navigator: {}
      };
    }
    getNativeWindow() {
      if ((0,common/* isPlatformBrowser */.NF)(this.platformId)) return window;else return this.fakeWindow;
    }
    getNativeDocument() {
      if ((0,common/* isPlatformBrowser */.NF)(this.platformId)) return document;else return this.fakeDocument;
    }
  }
  DomRefService.ɵfac = function DomRefService_Factory(t) {
    return new (t || DomRefService)(core/* ɵɵinject */.LFG(core/* PLATFORM_ID */.Lbi));
  };
  DomRefService.ɵprov = /* @__PURE__ */core/* ɵɵdefineInjectable */.Yz7({
    token: DomRefService,
    factory: DomRefService.ɵfac
  });
  return DomRefService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TemplatesService = /*#__PURE__*/(() => {
  class TemplatesService {
    setPrevButton(template) {
      this._prevButton = template;
    }
    getPrevButton() {
      return this._prevButton;
    }
    setNextButton(template) {
      this._nextButton = template;
    }
    getNextButton() {
      return this._nextButton;
    }
    setDoneButton(template) {
      this._doneButton = template;
    }
    getDoneButton() {
      return this._doneButton;
    }
    setCounter(template) {
      this._counter = template;
    }
    getCounter() {
      return this._counter;
    }
  }
  TemplatesService.ɵfac = function TemplatesService_Factory(t) {
    return new (t || TemplatesService)();
  };
  TemplatesService.ɵprov = /* @__PURE__ */core/* ɵɵdefineInjectable */.Yz7({
    token: TemplatesService,
    factory: TemplatesService.ɵfac
  });
  return TemplatesService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const NO_POSITION = 'NO_POSITION';
let JoyrideDirective = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class JoyrideDirective {
    constructor(joyrideStepsContainer, viewContainerRef, domService, router, templateService, platformId) {
      this.joyrideStepsContainer = joyrideStepsContainer;
      this.viewContainerRef = viewContainerRef;
      this.domService = domService;
      this.router = router;
      this.templateService = templateService;
      this.platformId = platformId;
      this.stepPosition = NO_POSITION;
      this.prev = new EventEmitter();
      this.next = new EventEmitter();
      this.done = new EventEmitter();
      this.subscriptions = [];
      this.windowRef = this.domService.getNativeWindow();
      this.step = new JoyrideStep();
    }
    ngAfterViewInit() {
      if (!isPlatformBrowser(this.platformId)) return;
      if (this.prevTemplate) this.templateService.setPrevButton(this.prevTemplate);
      if (this.nextTemplate) this.templateService.setNextButton(this.nextTemplate);
      if (this.doneTemplate) this.templateService.setDoneButton(this.doneTemplate);
      if (this.counterTemplate) this.templateService.setCounter(this.counterTemplate);
      this.step.position = this.stepPosition;
      this.step.targetViewContainer = this.viewContainerRef;
      this.setAsyncFields(this.step);
      this.step.stepContent = this.stepContent;
      this.step.stepContentParams = this.stepContentParams;
      this.step.nextClicked = this.next;
      this.step.prevCliked = this.prev;
      this.step.tourDone = this.done;
      if (!this.name) throw new JoyrideError("All the steps should have the 'joyrideStep' property set with a custom name.");
      this.step.name = this.name;
      this.step.route = this.router.url.substr(0, 1) === '/' ? this.router.url.substr(1) : this.router.url;
      this.step.transformCssStyle = this.windowRef.getComputedStyle(this.viewContainerRef.element.nativeElement).transform;
      this.step.isElementOrAncestorFixed = this.isElementFixed(this.viewContainerRef.element) || this.isAncestorsFixed(this.viewContainerRef.element.nativeElement.parentElement);
      this.joyrideStepsContainer.addStep(this.step);
    }
    ngOnChanges(changes) {
      if (changes['title'] || changes['text']) {
        this.setAsyncFields(this.step);
      }
    }
    isElementFixed(element) {
      return this.windowRef.getComputedStyle(element.nativeElement).position === 'fixed';
    }
    setAsyncFields(step) {
      if (this.title instanceof Observable) {
        this.subscriptions.push(this.title.subscribe(title => {
          step.title.next(title);
        }));
      } else {
        step.title.next(this.title);
      }
      if (this.text instanceof Observable) {
        this.subscriptions.push(this.text.subscribe(text => {
          step.text.next(text);
        }));
      } else {
        step.text.next(this.text);
      }
    }
    isAncestorsFixed(nativeElement) {
      if (!nativeElement || !nativeElement.parentElement) return false;
      let isElementFixed = this.windowRef.getComputedStyle(nativeElement.parentElement).position === 'fixed';
      if (nativeElement.nodeName === 'BODY') {
        return isElementFixed;
      }
      if (isElementFixed) return true;else return this.isAncestorsFixed(nativeElement.parentElement);
    }
    ngOnDestroy() {
      this.subscriptions.forEach(sub => {
        sub.unsubscribe();
      });
    }
  }
  JoyrideDirective.ɵfac = function JoyrideDirective_Factory(t) {
    return new (t || JoyrideDirective)(i0.ɵɵdirectiveInject(JoyrideStepsContainerService), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(DomRefService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(TemplatesService), i0.ɵɵdirectiveInject(PLATFORM_ID));
  };
  JoyrideDirective.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
    type: JoyrideDirective,
    selectors: [["joyrideStep"], ["", "joyrideStep", ""]],
    inputs: {
      name: ["joyrideStep", "name"],
      nextStep: "nextStep",
      title: "title",
      text: "text",
      stepPosition: "stepPosition",
      stepContent: "stepContent",
      stepContentParams: "stepContentParams",
      prevTemplate: "prevTemplate",
      nextTemplate: "nextTemplate",
      doneTemplate: "doneTemplate",
      counterTemplate: "counterTemplate"
    },
    outputs: {
      prev: "prev",
      next: "next",
      done: "done"
    },
    features: [i0.ɵɵNgOnChangesFeature]
  });
  return JoyrideDirective;
})()));
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class JoyrideStepInfo {}
let DocumentService = /*#__PURE__*/(() => {
  class DocumentService {
    constructor(DOMService, platformId) {
      this.DOMService = DOMService;
      if (!(0,common/* isPlatformBrowser */.NF)(platformId)) {
        return;
      }
      this.setDocumentHeight();
      var doc = DOMService.getNativeDocument();
      if (doc && !doc.elementsFromPoint) {
        // IE 11 - Edge browsers
        doc.elementsFromPoint = this.elementsFromPoint.bind(this);
      }
    }
    getElementFixedTop(elementRef) {
      return elementRef.nativeElement.getBoundingClientRect().top;
    }
    getElementFixedLeft(elementRef) {
      return elementRef.nativeElement.getBoundingClientRect().left;
    }
    getElementAbsoluteTop(elementRef) {
      const scrollOffsets = this.getScrollOffsets();
      return elementRef.nativeElement.getBoundingClientRect().top + scrollOffsets.y;
    }
    getElementAbsoluteLeft(elementRef) {
      const scrollOffsets = this.getScrollOffsets();
      return elementRef.nativeElement.getBoundingClientRect().left + scrollOffsets.x;
    }
    setDocumentHeight() {
      this.documentHeight = this.calculateDocumentHeight();
    }
    getDocumentHeight() {
      return this.documentHeight;
    }
    isParentScrollable(elementRef) {
      return this.getFirstScrollableParent(elementRef.nativeElement) !== this.DOMService.getNativeDocument().body;
    }
    isElementBeyondOthers(elementRef, isElementFixed, keywordToDiscard) {
      const x1 = isElementFixed ? this.getElementFixedLeft(elementRef) : this.getElementAbsoluteLeft(elementRef);
      const y1 = isElementFixed ? this.getElementFixedTop(elementRef) : this.getElementAbsoluteTop(elementRef);
      const x2 = x1 + elementRef.nativeElement.getBoundingClientRect().width - 1;
      const y2 = y1 + elementRef.nativeElement.getBoundingClientRect().height - 1;
      const elements1 = this.DOMService.getNativeDocument().elementsFromPoint(x1, y1);
      const elements2 = this.DOMService.getNativeDocument().elementsFromPoint(x2, y2);
      if (elements1.length === 0 && elements2.length === 0) return 1;
      if (this.getFirstElementWithoutKeyword(elements1, keywordToDiscard) !== elementRef.nativeElement || this.getFirstElementWithoutKeyword(elements2, keywordToDiscard) !== elementRef.nativeElement) {
        return 2;
      }
      return 3;
    }
    scrollIntoView(elementRef, isElementFixed) {
      const firstScrollableParent = this.getFirstScrollableParent(elementRef.nativeElement);
      const top = isElementFixed ? this.getElementFixedTop(elementRef) : this.getElementAbsoluteTop(elementRef);
      if (firstScrollableParent !== this.DOMService.getNativeDocument().body) {
        if (firstScrollableParent.scrollTo) {
          firstScrollableParent.scrollTo(0, top - 150);
        } else {
          // IE 11 - Edge browsers
          firstScrollableParent.scrollTop = top - 150;
        }
      } else {
        this.DOMService.getNativeWindow().scrollTo(0, top - 150);
      }
    }
    scrollToTheTop(elementRef) {
      const firstScrollableParent = this.getFirstScrollableParent(elementRef.nativeElement);
      if (firstScrollableParent !== this.DOMService.getNativeDocument().body) {
        if (firstScrollableParent.scrollTo) {
          firstScrollableParent.scrollTo(0, 0);
        } else {
          // IE 11 - Edge browsers
          firstScrollableParent.scrollTop = 0;
        }
      } else {
        this.DOMService.getNativeWindow().scrollTo(0, 0);
      }
    }
    scrollToTheBottom(elementRef) {
      const firstScrollableParent = this.getFirstScrollableParent(elementRef.nativeElement);
      if (firstScrollableParent !== this.DOMService.getNativeDocument().body) {
        if (firstScrollableParent.scrollTo) {
          firstScrollableParent.scrollTo(0, this.DOMService.getNativeDocument().body.scrollHeight);
        } else {
          // IE 11 - Edge browsers
          firstScrollableParent.scrollTop = firstScrollableParent.scrollHeight - firstScrollableParent.clientHeight;
        }
      } else {
        this.DOMService.getNativeWindow().scrollTo(0, this.DOMService.getNativeDocument().body.scrollHeight);
      }
    }
    getFirstScrollableParent(node) {
      const regex = /(auto|scroll|overlay)/;
      const style = (node, prop) => this.DOMService.getNativeWindow().getComputedStyle(node, null).getPropertyValue(prop);
      const scroll = node => regex.test(style(node, 'overflow') + style(node, 'overflow-y') + style(node, 'overflow-x'));
      const scrollparent = node => {
        return !node || node === this.DOMService.getNativeDocument().body ? this.DOMService.getNativeDocument().body : scroll(node) ? node : scrollparent(node.parentNode);
      };
      return scrollparent(node);
    }
    calculateDocumentHeight() {
      const documentRef = this.DOMService.getNativeDocument();
      return Math.max(documentRef.body.scrollHeight, documentRef.documentElement.scrollHeight, documentRef.body.offsetHeight, documentRef.documentElement.offsetHeight, documentRef.body.clientHeight, documentRef.documentElement.clientHeight);
    }
    getScrollOffsets() {
      const winReference = this.DOMService.getNativeWindow();
      const docReference = this.DOMService.getNativeDocument();
      // This works for all browsers except IE versions 8 and before
      if (winReference.pageXOffset != null) return {
        x: winReference.pageXOffset,
        y: winReference.pageYOffset
      };
      // For IE (or any browser) in Standards mode
      if (docReference.compatMode == 'CSS1Compat') return {
        x: docReference.documentElement.scrollLeft,
        y: docReference.documentElement.scrollTop
      };
      // For browsers in Quirks mode
      return {
        x: docReference.body.scrollLeft,
        y: docReference.body.scrollTop
      };
    }
    elementsFromPoint(x, y) {
      var parents = [];
      var parent = void 0;
      do {
        const elem = this.DOMService.getNativeDocument().elementFromPoint(x, y);
        if (elem && parent !== elem) {
          parent = elem;
          parents.push(parent);
          parent.style.pointerEvents = 'none';
        } else {
          parent = false;
        }
      } while (parent);
      parents.forEach(function (parent) {
        return parent.style.pointerEvents = 'all';
      });
      return parents;
    }
    getFirstElementWithoutKeyword(elements, keyword) {
      while (elements[0] && elements[0].classList.toString().includes(keyword)) {
        elements.shift();
      }
      return elements[0];
    }
  }
  DocumentService.ɵfac = function DocumentService_Factory(t) {
    return new (t || DocumentService)(core/* ɵɵinject */.LFG(DomRefService), core/* ɵɵinject */.LFG(core/* PLATFORM_ID */.Lbi));
  };
  DocumentService.ɵprov = /* @__PURE__ */core/* ɵɵdefineInjectable */.Yz7({
    token: DocumentService,
    factory: DocumentService.ɵfac
  });
  return DocumentService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let JoyrideBackdropService = /*#__PURE__*/(() => {
  class JoyrideBackdropService {
    constructor(documentService, optionsService, rendererFactory) {
      this.documentService = documentService;
      this.optionsService = optionsService;
      this.rendererFactory = rendererFactory;
      this.lastXScroll = 0;
      this.lastYScroll = 0;
      this.setRenderer();
    }
    setRenderer() {
      this.renderer = this.rendererFactory.createRenderer(null, null);
    }
    draw(step) {
      this.elementRef = step.targetViewContainer;
      this.targetAbsoluteTop = this.getTargetTotalTop(step);
      this.targetAbsoluteLeft = this.getTargetTotalLeft(step);
      this.currentBackdropContainer = this.renderer.createElement('div');
      this.renderer.addClass(this.currentBackdropContainer, 'backdrop-container');
      this.renderer.setStyle(this.currentBackdropContainer, 'position', 'fixed');
      this.renderer.setStyle(this.currentBackdropContainer, 'top', '0px');
      this.renderer.setStyle(this.currentBackdropContainer, 'left', '0px');
      this.renderer.setStyle(this.currentBackdropContainer, 'width', '100%');
      this.renderer.setStyle(this.currentBackdropContainer, 'height', '100%');
      this.renderer.setStyle(this.currentBackdropContainer, 'z-index', '1000');
      this.renderer.setAttribute(this.currentBackdropContainer, 'id', 'backdrop-' + step.name);
      this.backdropContent = this.renderer.createElement('div');
      this.renderer.addClass(this.backdropContent, 'backdrop-content');
      this.renderer.setStyle(this.backdropContent, 'position', 'relative');
      this.renderer.setStyle(this.backdropContent, 'height', '100%');
      this.renderer.setStyle(this.backdropContent, 'display', 'flex');
      this.renderer.setStyle(this.backdropContent, 'flex-direction', 'column');
      this.renderer.appendChild(this.currentBackdropContainer, this.backdropContent);
      this.backdropTop = this.renderer.createElement('div');
      this.renderer.addClass(this.backdropTop, 'joyride-backdrop');
      this.renderer.addClass(this.backdropTop, 'backdrop-top');
      this.renderer.setStyle(this.backdropTop, 'width', '100%');
      this.renderer.setStyle(this.backdropTop, 'height', this.targetAbsoluteTop - this.lastYScroll + 'px');
      this.renderer.setStyle(this.backdropTop, 'flex-shrink', '0');
      this.renderer.setStyle(this.backdropTop, 'background-color', `rgba(${this.optionsService.getBackdropColor()}, 0.7)`);
      this.renderer.appendChild(this.backdropContent, this.backdropTop);
      this.backdropMiddleContainer = this.renderer.createElement('div');
      this.renderer.addClass(this.backdropMiddleContainer, 'backdrop-middle-container');
      this.renderer.setStyle(this.backdropMiddleContainer, 'height', this.elementRef.element.nativeElement.offsetHeight + 'px');
      this.renderer.setStyle(this.backdropMiddleContainer, 'width', '100%');
      this.renderer.setStyle(this.backdropMiddleContainer, 'flex-shrink', '0');
      this.renderer.appendChild(this.backdropContent, this.backdropMiddleContainer);
      this.backdropMiddleContent = this.renderer.createElement('div');
      this.renderer.addClass(this.backdropMiddleContent, 'backdrop-middle-content');
      this.renderer.setStyle(this.backdropMiddleContent, 'display', 'flex');
      this.renderer.setStyle(this.backdropMiddleContent, 'width', '100%');
      this.renderer.setStyle(this.backdropMiddleContent, 'height', '100%');
      this.renderer.appendChild(this.backdropMiddleContainer, this.backdropMiddleContent);
      this.leftBackdrop = this.renderer.createElement('div');
      this.renderer.addClass(this.leftBackdrop, 'joyride-backdrop');
      this.renderer.addClass(this.leftBackdrop, 'backdrop-left');
      this.renderer.setStyle(this.leftBackdrop, 'flex-shrink', '0');
      this.renderer.setStyle(this.leftBackdrop, 'width', this.targetAbsoluteLeft - this.lastXScroll + 'px');
      this.renderer.setStyle(this.leftBackdrop, 'background-color', `rgba(${this.optionsService.getBackdropColor()}, 0.7)`);
      this.renderer.appendChild(this.backdropMiddleContent, this.leftBackdrop);
      this.targetBackdrop = this.renderer.createElement('div');
      this.renderer.addClass(this.targetBackdrop, 'backdrop-target');
      this.renderer.setStyle(this.targetBackdrop, 'flex-shrink', '0');
      this.renderer.setStyle(this.targetBackdrop, 'width', this.elementRef.element.nativeElement.offsetWidth + 'px');
      this.renderer.appendChild(this.backdropMiddleContent, this.targetBackdrop);
      this.rightBackdrop = this.renderer.createElement('div');
      this.renderer.addClass(this.rightBackdrop, 'joyride-backdrop');
      this.renderer.addClass(this.rightBackdrop, 'backdrop-right');
      this.renderer.setStyle(this.rightBackdrop, 'width', '100%');
      this.renderer.setStyle(this.rightBackdrop, 'background-color', `rgba(${this.optionsService.getBackdropColor()}, 0.7)`);
      this.renderer.appendChild(this.backdropMiddleContent, this.rightBackdrop);
      this.backdropBottom = this.renderer.createElement('div');
      this.renderer.addClass(this.backdropBottom, 'joyride-backdrop');
      this.renderer.addClass(this.backdropBottom, 'backdrop-bottom');
      this.renderer.setStyle(this.backdropBottom, 'width', '100%');
      this.renderer.setStyle(this.backdropBottom, 'height', '100%');
      this.renderer.setStyle(this.backdropBottom, 'background-color', `rgba(${this.optionsService.getBackdropColor()}, 0.7)`);
      this.renderer.appendChild(this.backdropContent, this.backdropBottom);
      this.removeLastBackdrop();
      this.drawCurrentBackdrop();
      this.lastBackdropContainer = this.currentBackdropContainer;
    }
    remove() {
      this.removeLastBackdrop();
    }
    redrawTarget(step) {
      this.targetAbsoluteLeft = this.getTargetTotalLeft(step);
      this.targetAbsoluteTop = this.getTargetTotalTop(step);
      this.handleVerticalScroll(step);
      this.handleHorizontalScroll(step);
    }
    getTargetTotalTop(step) {
      let targetVC = step.targetViewContainer;
      return step.isElementOrAncestorFixed ? this.documentService.getElementFixedTop(targetVC.element) : this.documentService.getElementAbsoluteTop(targetVC.element);
    }
    getTargetTotalLeft(step) {
      let targetVC = step.targetViewContainer;
      return step.isElementOrAncestorFixed ? this.documentService.getElementFixedLeft(targetVC.element) : this.documentService.getElementAbsoluteLeft(targetVC.element);
    }
    redraw(step, scroll) {
      if (this.lastYScroll !== scroll.scrollY) {
        this.lastYScroll = scroll.scrollY;
        if (this.elementRef) {
          this.handleVerticalScroll(step);
        }
      }
      if (this.lastXScroll !== scroll.scrollX) {
        this.lastXScroll = scroll.scrollX;
        if (this.elementRef) {
          this.handleHorizontalScroll(step);
        }
      }
    }
    handleHorizontalScroll(step) {
      let newBackdropLeftWidth = step.isElementOrAncestorFixed ? this.targetAbsoluteLeft : this.targetAbsoluteLeft - this.lastXScroll;
      if (newBackdropLeftWidth >= 0) {
        this.renderer.setStyle(this.leftBackdrop, 'width', newBackdropLeftWidth + 'px');
        this.renderer.setStyle(this.targetBackdrop, 'width', this.elementRef.element.nativeElement.offsetWidth + 'px');
      } else {
        this.handleTargetPartialWidth(newBackdropLeftWidth);
      }
    }
    handleTargetPartialWidth(newBackdropLeftWidth) {
      this.renderer.setStyle(this.leftBackdrop, 'width', 0 + 'px');
      let visibleTargetWidth = this.elementRef.element.nativeElement.offsetWidth + newBackdropLeftWidth;
      if (visibleTargetWidth >= 0) {
        this.renderer.setStyle(this.targetBackdrop, 'width', visibleTargetWidth + 'px');
      } else {
        this.renderer.setStyle(this.targetBackdrop, 'width', 0 + 'px');
      }
    }
    handleVerticalScroll(step) {
      let newBackdropTopHeight = step.isElementOrAncestorFixed ? this.targetAbsoluteTop : this.targetAbsoluteTop - this.lastYScroll;
      if (newBackdropTopHeight >= 0) {
        this.renderer.setStyle(this.backdropTop, 'height', newBackdropTopHeight + 'px');
        this.renderer.setStyle(this.backdropMiddleContainer, 'height', this.elementRef.element.nativeElement.offsetHeight + 'px');
      } else {
        this.handleTargetPartialHeight(newBackdropTopHeight);
      }
    }
    handleTargetPartialHeight(newBackdropTopHeight) {
      this.renderer.setStyle(this.backdropTop, 'height', 0 + 'px');
      let visibleTargetHeight = this.elementRef.element.nativeElement.offsetHeight + newBackdropTopHeight;
      if (visibleTargetHeight >= 0) {
        this.renderer.setStyle(this.backdropMiddleContainer, 'height', visibleTargetHeight + 'px');
      } else {
        this.renderer.setStyle(this.backdropMiddleContainer, 'height', 0 + 'px');
      }
    }
    removeLastBackdrop() {
      if (this.lastBackdropContainer) {
        this.renderer.removeChild(document.body, this.lastBackdropContainer);
        this.lastBackdropContainer = undefined;
      }
    }
    drawCurrentBackdrop() {
      this.renderer.appendChild(document.body, this.currentBackdropContainer);
    }
  }
  JoyrideBackdropService.ɵfac = function JoyrideBackdropService_Factory(t) {
    return new (t || JoyrideBackdropService)(core/* ɵɵinject */.LFG(DocumentService), core/* ɵɵinject */.LFG(JoyrideOptionsService), core/* ɵɵinject */.LFG(core/* RendererFactory2 */.FYo));
  };
  JoyrideBackdropService.ɵprov = /* @__PURE__ */core/* ɵɵdefineInjectable */.Yz7({
    token: JoyrideBackdropService,
    factory: JoyrideBackdropService.ɵfac
  });
  return JoyrideBackdropService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class Scroll {}
let EventListenerService = /*#__PURE__*/(() => {
  class EventListenerService {
    constructor(rendererFactory, DOMService) {
      this.rendererFactory = rendererFactory;
      this.DOMService = DOMService;
      this.scrollEvent = new Subject/* Subject */.x();
      this.resizeEvent = new Subject/* Subject */.x();
      this.renderer = rendererFactory.createRenderer(null, null);
    }
    startListeningScrollEvents() {
      this.scrollUnlisten = this.renderer.listen('document', 'scroll', evt => {
        this.scrollEvent.next({
          scrollX: this.DOMService.getNativeWindow().pageXOffset,
          scrollY: this.DOMService.getNativeWindow().pageYOffset
        });
      });
    }
    startListeningResizeEvents() {
      this.resizeUnlisten = this.renderer.listen('window', 'resize', evt => {
        this.resizeEvent.next(evt);
      });
    }
    stopListeningScrollEvents() {
      this.scrollUnlisten();
    }
    stopListeningResizeEvents() {
      this.resizeUnlisten();
    }
  }
  EventListenerService.ɵfac = function EventListenerService_Factory(t) {
    return new (t || EventListenerService)(core/* ɵɵinject */.LFG(core/* RendererFactory2 */.FYo), core/* ɵɵinject */.LFG(DomRefService));
  };
  EventListenerService.ɵprov = /* @__PURE__ */core/* ɵɵdefineInjectable */.Yz7({
    token: EventListenerService,
    factory: EventListenerService.ɵfac
  });
  return EventListenerService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let JoyrideArrowComponent = /*#__PURE__*/(() => {
  class JoyrideArrowComponent {
    constructor() {
      this.position = 'top';
    }
  }
  JoyrideArrowComponent.ɵfac = function JoyrideArrowComponent_Factory(t) {
    return new (t || JoyrideArrowComponent)();
  };
  JoyrideArrowComponent.ɵcmp = /* @__PURE__ */core/* ɵɵdefineComponent */.Xpm({
    type: JoyrideArrowComponent,
    selectors: [["joyride-arrow"]],
    inputs: {
      position: "position"
    },
    decls: 1,
    vars: 8,
    template: function JoyrideArrowComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "div");
      }
      if (rf & 2) {
        core/* ɵɵclassProp */.ekj("joyride-arrow__top", ctx.position == "top")("joyride-arrow__bottom", ctx.position == "bottom")("joyride-arrow__left", ctx.position == "left")("joyride-arrow__right", ctx.position == "right");
      }
    },
    styles: [".joyride-arrow__top{border-left:11px solid transparent;border-right:11px solid transparent;border-bottom:11px solid #ffffff}.joyride-arrow__bottom{border-left:11px solid transparent;border-right:11px solid transparent;border-top:11px solid #ffffff}.joyride-arrow__right{border-left:11px solid #ffffff;border-bottom:11px solid transparent;border-top:11px solid transparent}.joyride-arrow__left{border-right:11px solid #ffffff;border-top:11px solid transparent;border-bottom:11px solid transparent}\n"],
    encapsulation: 2
  });
  return JoyrideArrowComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let JoyrideCloseButtonComponent = /*#__PURE__*/(() => {
  class JoyrideCloseButtonComponent {}
  JoyrideCloseButtonComponent.ɵfac = function JoyrideCloseButtonComponent_Factory(t) {
    return new (t || JoyrideCloseButtonComponent)();
  };
  JoyrideCloseButtonComponent.ɵcmp = /* @__PURE__ */core/* ɵɵdefineComponent */.Xpm({
    type: JoyrideCloseButtonComponent,
    selectors: [["joy-close-button"]],
    decls: 3,
    vars: 0,
    consts: [["viewBox", "0 0 25 25", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "1", "y1", "24", "x2", "24", "y2", "1", "stroke", "black", "stroke-width", "3"], ["x1", "1", "y1", "1", "x2", "24", "y2", "24", "stroke", "black", "stroke-width", "3"]],
    template: function JoyrideCloseButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(0, "svg", 0);
        core/* ɵɵelement */._UZ(1, "line", 1)(2, "line", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    encapsulation: 2
  });
  return JoyrideCloseButtonComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let JoyrideButtonComponent = /*#__PURE__*/(() => {
  class JoyrideButtonComponent {
    constructor() {
      this.clicked = new core/* EventEmitter */.vpe();
    }
    onClick() {
      this.clicked.emit();
    }
  }
  JoyrideButtonComponent.ɵfac = function JoyrideButtonComponent_Factory(t) {
    return new (t || JoyrideButtonComponent)();
  };
  JoyrideButtonComponent.ɵcmp = /* @__PURE__ */core/* ɵɵdefineComponent */.Xpm({
    type: JoyrideButtonComponent,
    selectors: [["joyride-button"]],
    inputs: {
      color: "color"
    },
    outputs: {
      clicked: "clicked"
    },
    ngContentSelectors: _c1,
    decls: 2,
    vars: 5,
    consts: [[1, "joyride-button", 3, "ngStyle", "mouseleave", "mouseover", "click"]],
    template: function JoyrideButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵprojectionDef */.F$t();
        core/* ɵɵelementStart */.TgZ(0, "button", 0);
        core/* ɵɵlistener */.NdJ("mouseleave", function JoyrideButtonComponent_Template_button_mouseleave_0_listener() {
          return ctx.hover = false;
        })("mouseover", function JoyrideButtonComponent_Template_button_mouseover_0_listener() {
          return ctx.hover = true;
        })("click", function JoyrideButtonComponent_Template_button_click_0_listener() {
          return ctx.onClick();
        });
        core/* ɵɵprojection */.Hsn(1);
        core/* ɵɵelementEnd */.qZA();
      }
      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngStyle", core/* ɵɵpureFunction3 */.kEZ(1, ngx_joyride_c0, ctx.hover ? "#fff" : ctx.color, ctx.hover ? ctx.color : "#fff", ctx.hover ? ctx.color : "transparent"));
      }
    },
    dependencies: [common/* NgStyle */.PC],
    styles: [".joyride-button[_ngcontent-%COMP%]{text-transform:uppercase;border:2px solid transparent;outline:none;padding:6px 12px;font-size:12px;font-weight:700;color:#fff;background-color:#3b5560;cursor:pointer}.joyride-button[_ngcontent-%COMP%]:hover{color:#3b5560;border:2px solid #3b5560;background-color:#fff}"]
  });
  return JoyrideButtonComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const STEP_MIN_WIDTH = 200;
const STEP_MAX_WIDTH = 400;
const CUSTOM_STEP_MAX_WIDTH_VW = 90;
const STEP_HEIGHT = 200;
const ASPECT_RATIO = 1.212;
const DEFAULT_DISTANCE_FROM_MARGIN_TOP = 2;
const DEFAULT_DISTANCE_FROM_MARGIN_LEFT = 2;
const DEFAULT_DISTANCE_FROM_MARGIN_BOTTOM = 5;
const DEFAULT_DISTANCE_FROM_MARGIN_RIGHT = 5;
var KEY_CODE = /*#__PURE__*/(() => {
  (function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
    KEY_CODE[KEY_CODE["ESCAPE_KEY"] = 27] = "ESCAPE_KEY";
  })(KEY_CODE || (KEY_CODE = {}));
  return KEY_CODE;
})();
let JoyrideStepComponent = /*#__PURE__*/(() => {
  class JoyrideStepComponent {
    constructor(injector, stepsContainerService, eventListenerService, documentService, renderer, logger, optionsService, templateService) {
      this.injector = injector;
      this.stepsContainerService = stepsContainerService;
      this.eventListenerService = eventListenerService;
      this.documentService = documentService;
      this.renderer = renderer;
      this.logger = logger;
      this.optionsService = optionsService;
      this.templateService = templateService;
      this.stepWidth = STEP_MIN_WIDTH;
      this.stepHeight = STEP_HEIGHT;
      this.showArrow = true;
      this.arrowSize = ARROW_SIZE;
      this.subscriptions = [];
    }
    ngOnInit() {
      // Need to Inject here otherwise you will obtain a circular dependency
      this.joyrideStepService = this.injector.get(JoyrideStepService);
      this.documentHeight = this.documentService.getDocumentHeight();
      this.subscriptions.push(this.subscribeToResizeEvents());
      this.title = this.step.title.asObservable();
      this.text = this.step.text.asObservable();
      this.setCustomTemplates();
      this.setCustomTexts();
      this.counter = this.getCounter();
      this.isCounterVisible = this.optionsService.isCounterVisible();
      this.isPrevButtonVisible = this.optionsService.isPrevButtonVisible();
      this.themeColor = this.optionsService.getThemeColor();
      if (this.text) this.text.subscribe(val => this.checkRedraw(val));
      if (this.title) this.title.subscribe(val => this.checkRedraw(val));
    }
    ngAfterViewInit() {
      if (this.isCustomized()) {
        this.renderer.setStyle(this.stepContainer.nativeElement, 'max-width', CUSTOM_STEP_MAX_WIDTH_VW + 'vw');
        this.updateStepDimensions();
      } else {
        this.renderer.setStyle(this.stepContainer.nativeElement, 'max-width', STEP_MAX_WIDTH + 'px');
        let dimensions = this.getDimensionsByAspectRatio(this.stepContainer.nativeElement.clientWidth, this.stepContainer.nativeElement.clientHeight, ASPECT_RATIO);
        dimensions = this.adjustDimensions(dimensions.width, dimensions.height);
        this.stepWidth = dimensions.width;
        this.stepHeight = dimensions.height;
        this.renderer.setStyle(this.stepContainer.nativeElement, 'width', this.stepWidth + 'px');
        this.renderer.setStyle(this.stepContainer.nativeElement, 'height', this.stepHeight + 'px');
      }
      this.drawStep();
    }
    checkRedraw(val) {
      if (val != null) {
        // Need to wait that the change is rendered before redrawing
        setTimeout(() => {
          this.redrawStep();
        }, 2);
      }
    }
    isCustomized() {
      return this.step.stepContent || this.templateService.getCounter() || this.templateService.getPrevButton() || this.templateService.getNextButton() || this.templateService.getDoneButton();
    }
    setCustomTexts() {
      const customeTexts = this.optionsService.getCustomTexts();
      this.prevText = customeTexts.prev;
      this.nextText = customeTexts.next;
      this.doneText = customeTexts.done;
    }
    drawStep() {
      let position = this.step.isElementOrAncestorFixed ? 'fixed' : 'absolute';
      this.renderer.setStyle(this.stepHolder.nativeElement, 'position', position);
      this.renderer.setStyle(this.stepHolder.nativeElement, 'transform', this.step.transformCssStyle);
      this.targetWidth = this.step.targetViewContainer.element.nativeElement.getBoundingClientRect().width;
      this.targetHeight = this.step.targetViewContainer.element.nativeElement.getBoundingClientRect().height;
      this.targetAbsoluteLeft = position === 'fixed' ? this.documentService.getElementFixedLeft(this.step.targetViewContainer.element) : this.documentService.getElementAbsoluteLeft(this.step.targetViewContainer.element);
      this.targetAbsoluteTop = position === 'fixed' ? this.documentService.getElementFixedTop(this.step.targetViewContainer.element) : this.documentService.getElementAbsoluteTop(this.step.targetViewContainer.element);
      this.setStepStyle();
    }
    getCounter() {
      let stepPosition = this.stepsContainerService.getStepNumber(this.step.name);
      let numberOfSteps = this.stepsContainerService.getStepsCount();
      this.counterData = {
        step: stepPosition,
        total: numberOfSteps
      };
      return stepPosition + '/' + numberOfSteps;
    }
    setCustomTemplates() {
      this.customContent = this.step.stepContent;
      this.ctx = this.step.stepContentParams;
      this.customPrevButton = this.templateService.getPrevButton();
      this.customNextButton = this.templateService.getNextButton();
      this.customDoneButton = this.templateService.getDoneButton();
      this.customCounter = this.templateService.getCounter();
    }
    keyEvent(event) {
      console.log(event);
      if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
        if (this.isLastStep()) {
          this.close();
        } else {
          this.next();
        }
      } else if (event.keyCode === KEY_CODE.LEFT_ARROW) {
        this.prev();
      } else if (event.keyCode === KEY_CODE.ESCAPE_KEY) {
        this.close();
      }
    }
    prev() {
      this.joyrideStepService.prev();
    }
    next() {
      this.joyrideStepService.next();
    }
    close() {
      this.joyrideStepService.close();
    }
    isFirstStep() {
      return this.stepsContainerService.getStepNumber(this.step.name) === 1;
    }
    isLastStep() {
      return this.stepsContainerService.getStepNumber(this.step.name) === this.stepsContainerService.getStepsCount();
    }
    setStepStyle() {
      switch (this.step.position) {
        case 'top':
          {
            this.setStyleTop();
            break;
          }
        case 'bottom':
          {
            this.setStyleBottom();
            break;
          }
        case 'right':
          {
            this.setStyleRight();
            break;
          }
        case 'left':
          {
            this.setStyleLeft();
            break;
          }
        case 'center':
          {
            this.setStyleCenter();
            break;
          }
        default:
          {
            this.setStyleBottom();
          }
      }
    }
    setStyleTop() {
      this.stepsContainerService.updatePosition(this.step.name, 'top');
      this.topPosition = this.targetAbsoluteTop - DISTANCE_FROM_TARGET - this.stepHeight;
      this.stepAbsoluteTop = this.targetAbsoluteTop - DISTANCE_FROM_TARGET - this.stepHeight;
      this.arrowTopPosition = this.stepHeight;
      this.leftPosition = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
      this.stepAbsoluteLeft = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
      this.arrowLeftPosition = this.stepWidth / 2 - this.arrowSize;
      this.adjustLeftPosition();
      this.adjustRightPosition();
      this.arrowPosition = 'bottom';
      this.autofixTopPosition();
    }
    setStyleRight() {
      this.stepsContainerService.updatePosition(this.step.name, 'right');
      this.topPosition = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
      this.stepAbsoluteTop = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
      this.arrowTopPosition = this.stepHeight / 2 - this.arrowSize;
      this.leftPosition = this.targetAbsoluteLeft + this.targetWidth + DISTANCE_FROM_TARGET;
      this.stepAbsoluteLeft = this.targetAbsoluteLeft + this.targetWidth + DISTANCE_FROM_TARGET;
      this.arrowLeftPosition = -this.arrowSize;
      this.adjustTopPosition();
      this.adjustBottomPosition();
      this.arrowPosition = 'left';
      this.autofixRightPosition();
    }
    setStyleBottom() {
      this.stepsContainerService.updatePosition(this.step.name, 'bottom');
      this.topPosition = this.targetAbsoluteTop + this.targetHeight + DISTANCE_FROM_TARGET;
      this.stepAbsoluteTop = this.targetAbsoluteTop + this.targetHeight + DISTANCE_FROM_TARGET;
      this.arrowTopPosition = -this.arrowSize;
      this.arrowLeftPosition = this.stepWidth / 2 - this.arrowSize;
      this.leftPosition = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
      this.stepAbsoluteLeft = this.targetWidth / 2 - this.stepWidth / 2 + this.targetAbsoluteLeft;
      this.adjustLeftPosition();
      this.adjustRightPosition();
      this.arrowPosition = 'top';
      this.autofixBottomPosition();
    }
    setStyleLeft() {
      this.stepsContainerService.updatePosition(this.step.name, 'left');
      this.topPosition = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
      this.stepAbsoluteTop = this.targetAbsoluteTop + this.targetHeight / 2 - this.stepHeight / 2;
      this.arrowTopPosition = this.stepHeight / 2 - this.arrowSize;
      this.leftPosition = this.targetAbsoluteLeft - this.stepWidth - DISTANCE_FROM_TARGET;
      this.stepAbsoluteLeft = this.targetAbsoluteLeft - this.stepWidth - DISTANCE_FROM_TARGET;
      this.arrowLeftPosition = this.stepWidth;
      this.adjustTopPosition();
      this.adjustBottomPosition();
      this.arrowPosition = 'right';
      this.autofixLeftPosition();
    }
    setStyleCenter() {
      this.renderer.setStyle(this.stepHolder.nativeElement, 'position', 'fixed');
      this.renderer.setStyle(this.stepHolder.nativeElement, 'top', '50%');
      this.renderer.setStyle(this.stepHolder.nativeElement, 'left', '50%');
      this.updateStepDimensions();
      this.renderer.setStyle(this.stepHolder.nativeElement, 'transform', `translate(-${this.stepWidth / 2}px, -${this.stepHeight / 2}px)`);
      this.showArrow = false;
    }
    adjustLeftPosition() {
      if (this.leftPosition < 0) {
        this.arrowLeftPosition = this.arrowLeftPosition + this.leftPosition - DEFAULT_DISTANCE_FROM_MARGIN_LEFT;
        this.leftPosition = DEFAULT_DISTANCE_FROM_MARGIN_LEFT;
      }
    }
    adjustRightPosition() {
      let currentWindowWidth = document.body.clientWidth;
      if (this.stepAbsoluteLeft + this.stepWidth > currentWindowWidth) {
        let newLeftPos = this.leftPosition - (this.stepAbsoluteLeft + this.stepWidth + DEFAULT_DISTANCE_FROM_MARGIN_RIGHT - currentWindowWidth);
        let deltaLeftPosition = newLeftPos - this.leftPosition;
        this.leftPosition = newLeftPos;
        this.arrowLeftPosition = this.arrowLeftPosition - deltaLeftPosition;
      }
    }
    adjustTopPosition() {
      if (this.stepAbsoluteTop < 0) {
        this.arrowTopPosition = this.arrowTopPosition + this.topPosition - DEFAULT_DISTANCE_FROM_MARGIN_TOP;
        this.topPosition = DEFAULT_DISTANCE_FROM_MARGIN_TOP;
      }
    }
    adjustBottomPosition() {
      if (this.stepAbsoluteTop + this.stepHeight > this.documentHeight) {
        let newTopPos = this.topPosition - (this.stepAbsoluteTop + this.stepHeight + DEFAULT_DISTANCE_FROM_MARGIN_BOTTOM - this.documentHeight);
        let deltaTopPosition = newTopPos - this.topPosition;
        this.topPosition = newTopPos;
        this.arrowTopPosition = this.arrowTopPosition - deltaTopPosition;
      }
    }
    autofixTopPosition() {
      if (this.positionAlreadyFixed) {
        this.logger.warn('No step positions found for this step. The step will be centered.');
      } else if (this.targetAbsoluteTop - this.stepHeight - this.arrowSize < 0) {
        this.positionAlreadyFixed = true;
        this.setStyleRight();
      }
    }
    autofixRightPosition() {
      if (this.targetAbsoluteLeft + this.targetWidth + this.stepWidth + this.arrowSize > document.body.clientWidth) {
        this.setStyleBottom();
      }
    }
    autofixBottomPosition() {
      if (this.targetAbsoluteTop + this.stepHeight + this.arrowSize + this.targetHeight > this.documentHeight) {
        this.setStyleLeft();
      }
    }
    autofixLeftPosition() {
      if (this.targetAbsoluteLeft - this.stepWidth - this.arrowSize < 0) {
        this.setStyleTop();
      }
    }
    subscribeToResizeEvents() {
      return this.eventListenerService.resizeEvent.subscribe(() => {
        this.redrawStep();
      });
    }
    redrawStep() {
      this.updateStepDimensions();
      this.drawStep();
    }
    getDimensionsByAspectRatio(width, height, aspectRatio) {
      let calcHeight = (width + height) / (1 + aspectRatio);
      let calcWidth = calcHeight * aspectRatio;
      return {
        width: calcWidth,
        height: calcHeight
      };
    }
    adjustDimensions(width, height) {
      let area = width * height;
      let newWidth = width;
      let newHeight = height;
      if (width > STEP_MAX_WIDTH) {
        newWidth = STEP_MAX_WIDTH;
        newHeight = area / newWidth;
      } else if (width < STEP_MIN_WIDTH) {
        newWidth = STEP_MIN_WIDTH;
        newHeight = STEP_MIN_WIDTH / ASPECT_RATIO;
      }
      return {
        width: newWidth,
        height: newHeight
      };
    }
    updateStepDimensions() {
      this.stepWidth = this.stepContainer.nativeElement.clientWidth;
      this.stepHeight = this.stepContainer.nativeElement.clientHeight;
    }
    ngOnDestroy() {
      this.subscriptions.forEach(subscription => {
        subscription.unsubscribe();
      });
    }
  }
  JoyrideStepComponent.ɵfac = function JoyrideStepComponent_Factory(t) {
    return new (t || JoyrideStepComponent)(core/* ɵɵdirectiveInject */.Y36(core/* Injector */.zs3), core/* ɵɵdirectiveInject */.Y36(JoyrideStepsContainerService), core/* ɵɵdirectiveInject */.Y36(EventListenerService), core/* ɵɵdirectiveInject */.Y36(DocumentService), core/* ɵɵdirectiveInject */.Y36(core/* Renderer2 */.Qsj), core/* ɵɵdirectiveInject */.Y36(LoggerService), core/* ɵɵdirectiveInject */.Y36(JoyrideOptionsService), core/* ɵɵdirectiveInject */.Y36(TemplatesService));
  };
  JoyrideStepComponent.ɵcmp = /* @__PURE__ */core/* ɵɵdefineComponent */.Xpm({
    type: JoyrideStepComponent,
    selectors: [["joyride-step"]],
    viewQuery: function JoyrideStepComponent_Query(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵviewQuery */.Gf(_c2, 7);
        core/* ɵɵviewQuery */.Gf(_c3, 7);
      }
      if (rf & 2) {
        let _t;
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.stepHolder = _t.first);
        core/* ɵɵqueryRefresh */.iGM(_t = core/* ɵɵloadQuery */.CRH()) && (ctx.stepContainer = _t.first);
      }
    },
    hostBindings: function JoyrideStepComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵlistener */.NdJ("keyup", function JoyrideStepComponent_keyup_HostBindingHandler($event) {
          return ctx.keyEvent($event);
        }, false, core/* ɵɵresolveWindow */.Jf7);
      }
    },
    inputs: {
      step: "step"
    },
    decls: 21,
    vars: 17,
    consts: [[1, "joyride-step__holder", 3, "id"], ["stepHolder", ""], ["class", "joyride-step__arrow", 3, "position", "top", "left", 4, "ngIf"], [1, "joyride-step__container"], ["stepContainer", ""], [1, "joyride-step__close", 3, "click"], [1, "joyride-step__header"], [1, "joyride-step__title"], [1, "joyride-step__body"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultContent", ""], [1, "joyride-step__footer"], ["class", "joyride-step__counter-container", 4, "ngIf"], [1, "joyride-step__buttons-container"], ["class", "joyride-step__prev-container joyride-step__button", 3, "click", 4, "ngIf"], ["class", "joyride-step__next-container joyride-step__button", 3, "click", 4, "ngIf", "ngIfElse"], ["doneButton", ""], [1, "joyride-step__arrow", 3, "position"], [1, "joyride-step__counter-container"], ["defaultCounter", ""], [1, "joyride-step__counter"], [1, "joyride-step__prev-container", "joyride-step__button", 3, "click"], [4, "ngTemplateOutlet"], ["defaultPrevButton", ""], [1, "joyride-step__prev-button", 3, "color"], [1, "joyride-step__next-container", "joyride-step__button", 3, "click"], ["defaulNextButton", ""], [3, "color"], [1, "joyride-step__done-container", "joyride-step__button", 3, "click"], ["defaultDoneButton", ""], [1, "joyride-step__done-button", 3, "color"]],
    template: function JoyrideStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0, 1);
        core/* ɵɵtemplate */.YNc(2, JoyrideStepComponent_joyride_arrow_2_Template, 1, 5, "joyride-arrow", 2);
        core/* ɵɵelementStart */.TgZ(3, "div", 3, 4)(5, "joy-close-button", 5);
        core/* ɵɵlistener */.NdJ("click", function JoyrideStepComponent_Template_joy_close_button_click_5_listener() {
          return ctx.close();
        });
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(6, "div", 6)(7, "div", 7);
        core/* ɵɵtext */._uU(8);
        core/* ɵɵpipe */.ALo(9, "async");
        core/* ɵɵelementEnd */.qZA()();
        core/* ɵɵelementStart */.TgZ(10, "div", 8);
        core/* ɵɵtemplate */.YNc(11, JoyrideStepComponent_ng_container_11_Template, 1, 0, "ng-container", 9);
        core/* ɵɵtemplate */.YNc(12, JoyrideStepComponent_ng_template_12_Template, 2, 3, "ng-template", null, 10, core/* ɵɵtemplateRefExtractor */.W1O);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(14, "div", 11);
        core/* ɵɵtemplate */.YNc(15, JoyrideStepComponent_div_15_Template, 4, 2, "div", 12);
        core/* ɵɵelementStart */.TgZ(16, "div", 13);
        core/* ɵɵtemplate */.YNc(17, JoyrideStepComponent_div_17_Template, 4, 1, "div", 14);
        core/* ɵɵtemplate */.YNc(18, JoyrideStepComponent_div_18_Template, 4, 1, "div", 15);
        core/* ɵɵtemplate */.YNc(19, JoyrideStepComponent_ng_template_19_Template, 4, 1, "ng-template", null, 16, core/* ɵɵtemplateRefExtractor */.W1O);
        core/* ɵɵelementEnd */.qZA()()()();
      }
      if (rf & 2) {
        const _r4 = core/* ɵɵreference */.MAs(13);
        const _r9 = core/* ɵɵreference */.MAs(20);
        core/* ɵɵstyleProp */.Udp("top", ctx.topPosition, "px")("left", ctx.leftPosition, "px");
        core/* ɵɵproperty */.Q6J("id", "joyride-step-" + ctx.step.name);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.showArrow);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵstyleProp */.Udp("color", ctx.themeColor);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵtextInterpolate */.Oqu(core/* ɵɵpipeBind1 */.lcZ(9, 15, ctx.title));
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵproperty */.Q6J("ngTemplateOutlet", ctx.customContent ? ctx.customContent : _r4)("ngTemplateOutletContext", ctx.ctx);
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.isCounterVisible);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.isPrevButtonVisible && !ctx.isFirstStep());
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", !ctx.isLastStep())("ngIfElse", _r9);
      }
    },
    dependencies: [JoyrideArrowComponent, JoyrideCloseButtonComponent, JoyrideButtonComponent, common/* NgIf */.O5, common/* NgTemplateOutlet */.tP, common/* AsyncPipe */.Ov],
    styles: [".joyride-step__holder{position:absolute;font-family:Arial,Helvetica,sans-serif;font-size:16px;z-index:1001}.joyride-step__arrow{position:absolute;left:40px;z-index:1002}.joyride-step__container{box-sizing:border-box;position:relative;color:#000;background-color:#fff;display:flex;flex-direction:column;justify-content:space-between;padding:10px;box-shadow:0 0 30px 1px #000}.joyride-step__header{display:flex;align-items:center;padding:8px}.joyride-step__title{font-weight:700;font-size:20px}.joyride-step__close{position:absolute;right:10px;top:10px;width:14px;height:14px;cursor:pointer}.joyride-step__body{text-align:left;padding:10px 8px}.joyride-step__footer{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding-left:8px}.joyride-step__buttons-container{display:flex;flex-direction:row}.joyride-step__button:first-child{margin-right:2.5px}.joyride-step__button:last-child{margin-left:2.5px}.joyride-step__counter{font-weight:700;font-size:14px}.joyride-step__counter-container{margin-right:10px}\n"],
    encapsulation: 2
  });
  return JoyrideStepComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let StepDrawerService = /*#__PURE__*/(() => {
  class StepDrawerService {
    constructor(componentFactoryResolver, appRef, injector) {
      this.componentFactoryResolver = componentFactoryResolver;
      this.appRef = appRef;
      this.injector = injector;
      this.refMap = {};
    }
    draw(step) {
      // 1. Create a component reference from the component
      const ref = this.componentFactoryResolver.resolveComponentFactory(JoyrideStepComponent).create(this.injector);
      // 2. Attach component to the appRef so that it's inside the ng component tree
      this.appRef.attachView(ref.hostView);
      // 3. Get DOM element from component
      const domElem = ref.hostView.rootNodes[0];
      // 4. Append DOM element to the body
      document.body.appendChild(domElem);
      const instance = ref.instance;
      instance.step = step;
      ref.changeDetectorRef.detectChanges();
      step.stepInstance = instance;
      this.refMap[step.name] = ref;
    }
    remove(step) {
      this.appRef.detachView(this.refMap[step.name].hostView);
      this.refMap[step.name].destroy();
    }
  }
  StepDrawerService.ɵfac = function StepDrawerService_Factory(t) {
    return new (t || StepDrawerService)(core/* ɵɵinject */.LFG(core/* ComponentFactoryResolver */._Vd), core/* ɵɵinject */.LFG(core/* ApplicationRef */.z2F), core/* ɵɵinject */.LFG(core/* Injector */.zs3));
  };
  StepDrawerService.ɵprov = /* @__PURE__ */core/* ɵɵdefineInjectable */.Yz7({
    token: StepDrawerService,
    factory: StepDrawerService.ɵfac
  });
  return StepDrawerService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const SCROLLBAR_SIZE = 20;
const DISTANCE_FROM_TARGET = 15;
const ARROW_SIZE = 10;
let JoyrideStepService = /*#__PURE__*/(() => {
  class JoyrideStepService {
    constructor(backDropService, eventListener, stepsContainerService, documentService, DOMService, stepDrawerService, optionsService, router, logger) {
      this.backDropService = backDropService;
      this.eventListener = eventListener;
      this.stepsContainerService = stepsContainerService;
      this.documentService = documentService;
      this.DOMService = DOMService;
      this.stepDrawerService = stepDrawerService;
      this.optionsService = optionsService;
      this.router = router;
      this.logger = logger;
      this.winTopPosition = 0;
      this.winBottomPosition = 0;
      this.stepsObserver = new ReplaySubject_ReplaySubject();
      this.initViewportPositions();
      this.subscribeToScrollEvents();
      this.subscribeToResizeEvents();
    }
    initViewportPositions() {
      this.winTopPosition = 0;
      this.winBottomPosition = this.DOMService.getNativeWindow().innerHeight - SCROLLBAR_SIZE;
    }
    subscribeToScrollEvents() {
      this.eventListener.startListeningScrollEvents();
      this.eventListener.scrollEvent.subscribe(scroll => {
        this.winTopPosition = scroll.scrollY;
        this.winBottomPosition = this.winTopPosition + this.DOMService.getNativeWindow().innerHeight - SCROLLBAR_SIZE;
        if (this.currentStep) this.backDropService.redraw(this.currentStep, scroll);
      });
    }
    subscribeToResizeEvents() {
      this.eventListener.resizeEvent.subscribe(() => {
        if (this.currentStep) this.backDropService.redrawTarget(this.currentStep);
      });
    }
    drawStep(step) {
      step.position = step.position === NO_POSITION ? this.optionsService.getStepDefaultPosition() : step.position;
      this.stepDrawerService.draw(step);
    }
    startTour() {
      this.stepsObserver = new ReplaySubject_ReplaySubject();
      this.stepsContainerService.init();
      this.documentService.setDocumentHeight();
      this.tryShowStep(StepActionType.NEXT);
      this.eventListener.startListeningResizeEvents();
      this.subscribeToStepsUpdates();
      return this.stepsObserver.asObservable();
    }
    close() {
      this.removeCurrentStep();
      this.notifyTourIsFinished();
      this.DOMService.getNativeWindow().scrollTo(0, 0);
      this.eventListener.stopListeningResizeEvents();
      this.backDropService.remove();
    }
    prev() {
      this.removeCurrentStep();
      this.currentStep.prevCliked.emit();
      this.tryShowStep(StepActionType.PREV);
    }
    next() {
      this.removeCurrentStep();
      this.currentStep.nextClicked.emit();
      this.tryShowStep(StepActionType.NEXT);
    }
    navigateToStepPage(action) {
      var _this = this;
      return (0,asyncToGenerator/* default */.Z)(function* () {
        let stepRoute = _this.stepsContainerService.getStepRoute(action);
        if (stepRoute) {
          return yield _this.router.navigate([stepRoute]);
        }
      })();
    }
    subscribeToStepsUpdates() {
      this.stepsContainerService.stepHasBeenModified.subscribe(updatedStep => {
        if (this.currentStep && this.currentStep.name === updatedStep.name) {
          this.currentStep = updatedStep;
        }
      });
    }
    tryShowStep(actionType) {
      var _this2 = this;
      return (0,asyncToGenerator/* default */.Z)(function* () {
        yield _this2.navigateToStepPage(actionType);
        const timeout = _this2.optionsService.getWaitingTime();
        if (timeout > 100) _this2.backDropService.remove();
        setTimeout(() => {
          try {
            _this2.showStep(actionType);
          } catch (error) {
            if (error instanceof JoyrideStepDoesNotExist) {
              _this2.tryShowStep(actionType);
            } else if (error instanceof JoyrideStepOutOfRange) {
              _this2.logger.error('Forcing the tour closure: First or Last step not found in the DOM.');
              _this2.close();
            } else {
              throw new Error(error);
            }
          }
        }, timeout);
      })();
    }
    showStep(actionType) {
      this.currentStep = this.stepsContainerService.get(actionType);
      if (this.currentStep == null) throw new JoyrideStepDoesNotExist('');
      this.notifyStepClicked(actionType);
      // Scroll the element to get it visible if it's in a scrollable element
      this.scrollIfElementBeyondOtherElements();
      this.backDropService.draw(this.currentStep);
      this.drawStep(this.currentStep);
      this.scrollIfStepAndTargetAreNotVisible();
    }
    notifyStepClicked(actionType) {
      let stepInfo = {
        number: this.stepsContainerService.getStepNumber(this.currentStep.name),
        name: this.currentStep.name,
        route: this.currentStep.route,
        actionType
      };
      this.stepsObserver.next(stepInfo);
    }
    notifyTourIsFinished() {
      if (this.currentStep) this.currentStep.tourDone.emit();
      this.stepsObserver.complete();
    }
    removeCurrentStep() {
      if (this.currentStep) this.stepDrawerService.remove(this.currentStep);
    }
    scrollIfStepAndTargetAreNotVisible() {
      this.scrollWhenTargetOrStepAreHiddenBottom();
      this.scrollWhenTargetOrStepAreHiddenTop();
    }
    scrollWhenTargetOrStepAreHiddenBottom() {
      let totalTargetBottom = this.getMaxTargetAndStepBottomPosition();
      if (totalTargetBottom > this.winBottomPosition) {
        this.DOMService.getNativeWindow().scrollBy(0, totalTargetBottom - this.winBottomPosition);
      }
    }
    scrollWhenTargetOrStepAreHiddenTop() {
      let totalTargetTop = this.getMaxTargetAndStepTopPosition();
      if (totalTargetTop < this.winTopPosition) {
        this.DOMService.getNativeWindow().scrollBy(0, totalTargetTop - this.winTopPosition);
      }
    }
    getMaxTargetAndStepBottomPosition() {
      let targetAbsoluteTop = this.documentService.getElementAbsoluteTop(this.currentStep.targetViewContainer.element);
      if (this.currentStep.position === 'top') {
        return targetAbsoluteTop + this.currentStep.stepInstance.targetHeight;
      } else if (this.currentStep.position === 'bottom') {
        return targetAbsoluteTop + this.currentStep.stepInstance.targetHeight + this.currentStep.stepInstance.stepHeight + ARROW_SIZE + DISTANCE_FROM_TARGET;
      } else if (this.currentStep.position === 'right' || this.currentStep.position === 'left') {
        return Math.max(targetAbsoluteTop + this.currentStep.stepInstance.targetHeight, targetAbsoluteTop + this.currentStep.stepInstance.targetHeight / 2 + this.currentStep.stepInstance.stepHeight / 2);
      }
    }
    getMaxTargetAndStepTopPosition() {
      let targetAbsoluteTop = this.documentService.getElementAbsoluteTop(this.currentStep.targetViewContainer.element);
      if (this.currentStep.position === 'top') {
        return targetAbsoluteTop - (this.currentStep.stepInstance.stepHeight + ARROW_SIZE + DISTANCE_FROM_TARGET);
      } else if (this.currentStep.position === 'bottom') {
        return targetAbsoluteTop;
      } else if (this.currentStep.position === 'right' || this.currentStep.position === 'left') {
        return Math.min(targetAbsoluteTop, targetAbsoluteTop + this.currentStep.stepInstance.targetHeight / 2 - this.currentStep.stepInstance.stepHeight / 2);
      }
    }
    scrollIfElementBeyondOtherElements() {
      if (this.isElementBeyondOthers() === 2) {
        this.documentService.scrollToTheTop(this.currentStep.targetViewContainer.element);
      }
      if (this.isElementBeyondOthers() === 2) {
        this.documentService.scrollToTheBottom(this.currentStep.targetViewContainer.element);
      }
      if (this.isElementBeyondOthers() === 1 && this.documentService.isParentScrollable(this.currentStep.targetViewContainer.element)) {
        this.documentService.scrollIntoView(this.currentStep.targetViewContainer.element, this.currentStep.isElementOrAncestorFixed);
      }
      if (this.isElementBeyondOthers() === 1 && this.documentService.isParentScrollable(this.currentStep.targetViewContainer.element)) {
        this.currentStep.targetViewContainer.element.nativeElement.scrollIntoView();
      }
    }
    isElementBeyondOthers() {
      return this.documentService.isElementBeyondOthers(this.currentStep.targetViewContainer.element, this.currentStep.isElementOrAncestorFixed, 'backdrop');
    }
  }
  JoyrideStepService.ɵfac = function JoyrideStepService_Factory(t) {
    return new (t || JoyrideStepService)(core/* ɵɵinject */.LFG(JoyrideBackdropService), core/* ɵɵinject */.LFG(EventListenerService), core/* ɵɵinject */.LFG(JoyrideStepsContainerService), core/* ɵɵinject */.LFG(DocumentService), core/* ɵɵinject */.LFG(DomRefService), core/* ɵɵinject */.LFG(StepDrawerService), core/* ɵɵinject */.LFG(JoyrideOptionsService), core/* ɵɵinject */.LFG(router/* Router */.F0), core/* ɵɵinject */.LFG(LoggerService));
  };
  JoyrideStepService.ɵprov = /* @__PURE__ */core/* ɵɵdefineInjectable */.Yz7({
    token: JoyrideStepService,
    factory: JoyrideStepService.ɵfac
  });
  return JoyrideStepService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let JoyrideService = /*#__PURE__*/(() => {
  class JoyrideService {
    constructor(platformId, stepService, optionsService) {
      this.platformId = platformId;
      this.stepService = stepService;
      this.optionsService = optionsService;
      this.tourInProgress = false;
    }
    startTour(options) {
      if (!(0,common/* isPlatformBrowser */.NF)(this.platformId)) {
        return (0,of.of)(new JoyrideStepInfo());
      }
      if (!this.tourInProgress) {
        this.tourInProgress = true;
        if (options) {
          this.optionsService.setOptions(options);
        }
        this.tour$ = this.stepService.startTour().pipe((0,finalize/* finalize */.x)(() => this.tourInProgress = false));
        this.tour$.subscribe();
      }
      return this.tour$;
    }
    closeTour() {
      if (this.isTourInProgress()) this.stepService.close();
    }
    isTourInProgress() {
      return this.tourInProgress;
    }
  }
  JoyrideService.ɵfac = function JoyrideService_Factory(t) {
    return new (t || JoyrideService)(core/* ɵɵinject */.LFG(core/* PLATFORM_ID */.Lbi), core/* ɵɵinject */.LFG(JoyrideStepService), core/* ɵɵinject */.LFG(JoyrideOptionsService));
  };
  JoyrideService.ɵprov = /* @__PURE__ */core/* ɵɵdefineInjectable */.Yz7({
    token: JoyrideService,
    factory: JoyrideService.ɵfac
  });
  return JoyrideService;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const routerModuleForChild = router/* RouterModule.forChild */.Bz.forChild([]);
let JoyrideModule = /*#__PURE__*/(() => {
  class JoyrideModule {
    static forRoot() {
      return {
        ngModule: JoyrideModule,
        providers: [JoyrideService, JoyrideStepService, JoyrideStepsContainerService, JoyrideBackdropService, EventListenerService, DocumentService, JoyrideOptionsService, StepDrawerService, DomRefService, LoggerService, TemplatesService]
      };
    }
    static forChild() {
      return {
        ngModule: JoyrideModule,
        providers: []
      };
    }
  }
  JoyrideModule.ɵfac = function JoyrideModule_Factory(t) {
    return new (t || JoyrideModule)();
  };
  JoyrideModule.ɵmod = /* @__PURE__ */core/* ɵɵdefineNgModule */.oAB({
    type: JoyrideModule
  });
  JoyrideModule.ɵinj = /* @__PURE__ */core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, routerModuleForChild]]
  });
  return JoyrideModule;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-joyride
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-joyride.mjs.map
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/components/dialog-pay/dialog-pay.component.ts






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
        const MSG_EXTERNAL_ac99f28d8fb2513f331f33bd2af001cddf8744c443f25cea684eaf2d1826d1a1$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__1 = goog.getMsg(" history.views.modalTotalPayment.NUMBER_TH ");
        i18n_0 = MSG_EXTERNAL_ac99f28d8fb2513f331f33bd2af001cddf8744c443f25cea684eaf2d1826d1a1$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__1;
      } else {
        i18n_0 = "N\xB0 Factura";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_960ba100edb65c9f57b6e4aa379d44a8257200e7c9c67b1eaa272c2606042067$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__3 = goog.getMsg(" history.views.modalTotalPayment.COSTO ");
        i18n_2 = MSG_EXTERNAL_960ba100edb65c9f57b6e4aa379d44a8257200e7c9c67b1eaa272c2606042067$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__3;
      } else {
        i18n_2 = "V. Factura";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_562801e13ef8f77874cad3a5d79e1c7aa594c098551a45d80b5a0f5d88f422b7$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__5 = goog.getMsg(" history.views.modalTotalPayment.CREDITO ");
        i18n_4 = MSG_EXTERNAL_562801e13ef8f77874cad3a5d79e1c7aa594c098551a45d80b5a0f5d88f422b7$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__5;
      } else {
        i18n_4 = "Cr\xE9dito";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3e3646a6ad58dd41322e6beff84c28e1e5163f906bf602ff8edbf3c41211e60f$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__7 = goog.getMsg(" history.views.modalTotalPayment.AMOUNT_TH ");
        i18n_6 = MSG_EXTERNAL_3e3646a6ad58dd41322e6beff84c28e1e5163f906bf602ff8edbf3c41211e60f$$SRC_APP_MODULES_CONTAINERIZED_LOAD_COMPONENTS_DIALOG_PAY_DIALOG_PAY_COMPONENT_TS__7;
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
// EXTERNAL MODULE: ./src/app/modules/containerized-load/components/generate-pin-deactivation-dialog/generate-pin-deactivation-dialog.component.ts
var generate_pin_deactivation_dialog_component = __webpack_require__(40786);
;// CONCATENATED MODULE: ./src/app/modules/containerized-load/containerized-load.module.ts






























let ContainerizedLoadModule = /*#__PURE__*/(() => {
  class ContainerizedLoadModule {}
  ContainerizedLoadModule.ɵfac = function ContainerizedLoadModule_Factory(t) {
    return new (t || ContainerizedLoadModule)();
  };
  ContainerizedLoadModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ContainerizedLoadModule
  });
  ContainerizedLoadModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [common/* CommonModule */.ez, ContainerizedLoadRoutingModule, JoyrideModule.forRoot(), shared_module/* SharedModule */.m, services_module.ServicesModule]
  });
  return ContainerizedLoadModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ContainerizedLoadModule, {
    declarations: [ImportComponent, AssociateContainerComponent, AppointmentCreationComponent, ExportComponent, ContainerizedLoadComponent, ContainerizedLoadResultComponent, InvoiceManagementComponent, DialogPayComponent, client_message_agreement_dialog_component/* ClientMessageAgreementDialogComponent */.A, invoice_proforma_component/* InvoiceProformaComponent */.x, invoice_management_billing_component/* InvoiceManagementBillingComponent */.N, UploadDocumentsComponent, GeneratePinComponent, GeneratePinDisplayComponent, generate_pin_display_item_component/* GeneratePinDisplayItemComponent */.a, GeneratePinResultComponent, GeneratePinResultItemComponent, GeneratePinTruckUnitComponent, generate_pin_deactivation_dialog_component/* GeneratePinDeactivationDialogComponent */.h, BookingLoadResultComponent, InvoiceBookingManagementBillingComponent, ExportacionComponent, DisassociateContainerComponent],
    imports: [common/* CommonModule */.ez, ContainerizedLoadRoutingModule, JoyrideModule, shared_module/* SharedModule */.m, services_module.ServicesModule],
    exports: [generate_pin_display_item_component/* GeneratePinDisplayItemComponent */.a, AppointmentCreationComponent]
  });
})();

/***/ })

}]);