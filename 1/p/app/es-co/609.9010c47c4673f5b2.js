"use strict";
(self["webpackChunkbussinessPortal"] = self["webpackChunkbussinessPortal"] || []).push([[609],{

/***/ 39820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ ClientMessageAgreementDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94650);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65412);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4859);



let ClientMessageAgreementDialogComponent = /*#__PURE__*/(() => {
  class ClientMessageAgreementDialogComponent {}
  ClientMessageAgreementDialogComponent.ɵfac = function ClientMessageAgreementDialogComponent_Factory(t) {
    return new (t || ClientMessageAgreementDialogComponent)();
  };
  ClientMessageAgreementDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: ClientMessageAgreementDialogComponent,
    selectors: [["app-client-message-agreement-dialog"]],
    decls: 8,
    vars: 0,
    consts: [["mat-dialog-title", "", 1, "client-message-agreement-dialog__title"], [1, "client-message-agreement-dialog__actions"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 1, "client-message-agreement-dialog__action"]],
    template: function ClientMessageAgreementDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(1, "Alerta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(2, "mat-dialog-content")(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(4, " Cliente con Convenio Activo, no debe facturar. La factura ser\u00E1 generada de forma autom\u00E1tica, posterior al retiro/embarque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementStart"] */ .TgZ(5, "mat-dialog-actions", 1)(6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵtext"] */ ._uU(7, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵelementEnd"] */ .qZA()();
      }
    },
    dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__/* .MatDialogClose */ .ZT, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__/* .MatDialogTitle */ .uh, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__/* .MatDialogContent */ .xY, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__/* .MatDialogActions */ .H8, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__/* .MatButton */ .lW],
    styles: [".client-message-agreement-dialog__title[_ngcontent-%COMP%]{background-color:#92b976;color:#fff}.client-message-agreement-dialog__actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.client-message-agreement-dialog__action[_ngcontent-%COMP%]{color:#fff!important}"]
  });
  return ClientMessageAgreementDialogComponent;
})();

/***/ }),

/***/ 40786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ GeneratePinDeactivationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24006);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94650);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4859);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44144);








let GeneratePinDeactivationDialogComponent = /*#__PURE__*/(() => {
  class GeneratePinDeactivationDialogComponent {
    constructor(dialogData) {
      this.dialogData = dialogData;
      this.observationFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .FormControl */ .NI();
      this.message = "";
    }
    ngOnInit() {
      this.observationFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .FormControl */ .NI({
        value: "",
        disabled: false
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .Validators.required */ .kI.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .Validators.minLength */ .kI.minLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .Validators.maxLength */ .kI.maxLength(250)]);
      this.message = this.dialogData.multiple ? "El pin se anulará, Indique el motivo:" : `El Contenedor ${this.dialogData.unit} será eliminado del pin, indique el motivo:`;
    }
  }
  GeneratePinDeactivationDialogComponent.ɵfac = function GeneratePinDeactivationDialogComponent_Factory(t) {
    return new (t || GeneratePinDeactivationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__/* .MAT_DIALOG_DATA */ .WI));
  };
  GeneratePinDeactivationDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: GeneratePinDeactivationDialogComponent,
    selectors: [["app-generate-pin-deactivation-dialog"]],
    decls: 12,
    vars: 5,
    consts: [["mat-dialog-title", "", 1, "generate-pini-deactivation-dialog__header"], ["mat-dialog-content", "", 1, "generate-pini-deactivation-dialog__content"], [1, "generate-pini-deactivation-dialog__message"], [1, "generate-pini-deactivation-dialog__area"], ["matInput", "", "type", "text", 3, "formControl"], ["mat-dialog-actions", "", 1, "generate-pini-deactivation-dialog__actions"], ["mat-raised-button", "", "color", "primary", 1, "generate-pini-deactivation-dialog__action", "generate-pini-deactivation-dialog__submit", 3, "mat-dialog-close", "disabled"], ["mat-raised-button", "", 1, "generate-pini-deactivation-dialog__action", 3, "mat-dialog-close"]],
    template: function GeneratePinDeactivationDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(1, "Alerta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 1)(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(6, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(9, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementStart"] */ .TgZ(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtext"] */ ._uU(11, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelementEnd"] */ .qZA()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("formControl", ctx.observationFormControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("mat-dialog-close", ctx.observationFormControl.value)("disabled", ctx.observationFormControl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵadvance"] */ .xp6(2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("mat-dialog-close", null);
      }
    },
    dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__/* .MatDialogClose */ .ZT, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__/* .MatDialogTitle */ .uh, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__/* .MatDialogContent */ .xY, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__/* .MatDialogActions */ .H8, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__/* .MatButton */ .lW, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__/* .MatFormField */ .KE, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__/* .MatInput */ .Nt, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_0__/* .FormControlDirective */ .oH],
    styles: [".generate-pini-deactivation-dialog__header[_ngcontent-%COMP%]{background-color:#66bb6a;color:#fff}.generate-pini-deactivation-dialog__actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.generate-pini-deactivation-dialog__submit[_ngcontent-%COMP%]{color:#fff!important}.generate-pini-deactivation-dialog__area[_ngcontent-%COMP%]{width:100%}"]
  });
  return GeneratePinDeactivationDialogComponent;
})();

/***/ }),

/***/ 78004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ InvoiceManagementBillingComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24006);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7155);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(29521);
/* harmony import */ var _client_message_agreement_dialog_client_message_agreement_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(39820);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77579);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(82722);
/* harmony import */ var src_app_state_containerized_load_containerized_load_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50091);
/* harmony import */ var src_app_state_detached_load_detached_load_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47293);
/* harmony import */ var src_app_state_queries_queries_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8988);
/* harmony import */ var src_app_state_queries_queries_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17399);
/* harmony import */ var src_app_state_shared_shared_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68438);
/* harmony import */ var src_app_state_shared_shared_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13545);
/* harmony import */ var src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50175);
/* harmony import */ var src_app_state_detached_load_detached_load_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38013);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15439);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_state_api_gateway_api_gateway_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(77518);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(65412);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(55867);
/* harmony import */ var src_app_core_auth_services_base64_encryption_util_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(46602);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(17009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(36895);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(56709);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(4859);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(59549);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(44144);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(99602);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(77331);
/* harmony import */ var _shared_components_agent_searcher_agent_searcher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78010);
/* harmony import */ var _services_components_customer_searcher_customer_searcher_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19243);
































const _c0 = ["containerCheckbox"];
function InvoiceManagementBillingComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(1, "app-customer-searcher", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("customerControl", function InvoiceManagementBillingComponent_ng_container_4_ng_container_1_Template_app_customer_searcher_customerControl_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵrestoreView"] */ .CHM(_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵnextContext"] */ .oxw(2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵresetView"] */ .KtG(ctx_r23.onCustomerControlChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("controlDisabled", !!ctx_r22.customer)("searcher", !ctx_r22.customer)("agent", ctx_r22.currentUser.empresa.id)("data", ctx_r22.nit + "/" + ctx_r22.customer);
  }
}
function InvoiceManagementBillingComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(1, InvoiceManagementBillingComponent_ng_container_4_ng_container_1_Template, 2, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.currentUser.empresa);
  }
}
function InvoiceManagementBillingComponent_mat_chip_row_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "mat-chip-row", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const unit_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("editable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate1"] */ .hij(" ", unit_r25, " ");
  }
}
function InvoiceManagementBillingComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 32)(1, "div", 33)(2, "mat-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("change", function InvoiceManagementBillingComponent_th_25_Template_mat_checkbox_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵrestoreView"] */ .CHM(_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵresetView"] */ .KtG(ctx_r26.matCheckboxSelectAllChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
}
function InvoiceManagementBillingComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 35)(1, "div", 36)(2, "mat-checkbox", 34, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("change", function InvoiceManagementBillingComponent_td_26_Template_mat_checkbox_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵrestoreView"] */ .CHM(_r31);
      const element_r28 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵresetView"] */ .KtG(ctx_r30.matCheckboxChange($event, element_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()()();
  }
}
function InvoiceManagementBillingComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1, "N\u00B0");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function InvoiceManagementBillingComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const i_r33 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate"] */ .Oqu(i_r33 + 1);
  }
}
function InvoiceManagementBillingComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1, "Contenedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function InvoiceManagementBillingComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r34.unitNbr);
  }
}
function InvoiceManagementBillingComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function InvoiceManagementBillingComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r35.twenty ? "20''" : "40''");
  }
}
function InvoiceManagementBillingComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1, "No. Lotes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function InvoiceManagementBillingComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r36.lots);
  }
}
function InvoiceManagementBillingComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1, "Peso(t)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function InvoiceManagementBillingComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r37.weight);
  }
}
function InvoiceManagementBillingComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function InvoiceManagementBillingComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r38.quantity);
  }
}
function InvoiceManagementBillingComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ ._UZ(0, "tr", 38);
  }
}
function InvoiceManagementBillingComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ ._UZ(0, "tr", 39);
  }
}
function InvoiceManagementBillingComponent_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceManagementBillingComponent_button_50_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵrestoreView"] */ .CHM(_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵresetView"] */ .KtG(ctx_r40.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1, "Ver Proforma");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r20.invoiceManagementBillingFormGroup.invalid || !(ctx_r20.selectedContainers.length > 0) || !ctx_r20.customerValid);
  }
}
function InvoiceManagementBillingComponent_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceManagementBillingComponent_button_51_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵrestoreView"] */ .CHM(_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵresetView"] */ .KtG(ctx_r42.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(1, "Ver Proforma");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("disabled", ctx_r21.invoiceManagementBillingFormGroup.invalid || !ctx_r21.customerValid);
  }
}
let InvoiceManagementBillingComponent = /*#__PURE__*/(() => {
  class InvoiceManagementBillingComponent {
    constructor(router, activatedRoute, matDialog, store, base64EncryptionUtilService, matSnackBar) {
      this.router = router;
      this.activatedRoute = activatedRoute;
      this.matDialog = matDialog;
      this.store = store;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.matSnackBar = matSnackBar;
      this.detached = false;
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__/* .Subject */ .x();
      this.invoiceManagementBillingFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__/* .FormGroup */ .cw({});
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__/* .MatTableDataSource */ .by([]);
      this.displayedColumns = [];
      this.emails = [];
      this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__/* .ENTER */ .K5, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__/* .COMMA */ .OC];
      this.minDate = new Date();
      this.maxDate = new Date();
      this.customer = "";
      this.nit = "";
      this.selectedCustomer = "";
      this.selectedAgent = "";
      this.selectedContainers = [];
      this.containers = [];
      this.selectedUnits = [];
      this.associateClient = false;
      this.clientMessageAgreement = true;
      this.searchedCustomers = [];
      this.customerValid = true;
      this.customerAsignned = false;
    }
    ngOnInit() {
      this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_6__/* .cleanBillingData */ .LQ)());
      this.store.dispatch((0,src_app_state_detached_load_detached_load_actions__WEBPACK_IMPORTED_MODULE_7__/* .cleanBillingData */ .LQ)());
      this.store.dispatch((0,src_app_state_shared_shared_actions__WEBPACK_IMPORTED_MODULE_4__/* .cleanSelectedCustomer */ .mS)());
      this.store.dispatch((0,src_app_state_shared_shared_actions__WEBPACK_IMPORTED_MODULE_4__/* .cleanSelectedAgent */ .Wi)());
      this.minDate = new Date();
      this.maxDate = new Date();
      this.maxDate.setDate(this.minDate.getDate() + 14);
      this.store.select(src_app_state_api_gateway_api_gateway_selectors__WEBPACK_IMPORTED_MODULE_9__/* .apiGatewayFeatureSelector */ .o).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .takeUntil */ .R)(this.destroy$)).subscribe({
        next: result => {
          this.currentUser = result;
        },
        error: error => console.error(error)
      });
      this.activatedRoute.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .takeUntil */ .R)(this.destroy$)).subscribe({
        next: result => {
          this.detached = result["detached"];
          if (this.detached) {
            this.store.select(src_app_state_detached_load_detached_load_selectors__WEBPACK_IMPORTED_MODULE_1__/* .detachedLoadFeatureSelector */ .N).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .takeUntil */ .R)(this.destroy$)).subscribe({
              next: result => {
                this.customer = result.result[0].consigneeName;
                if (this.customer) {
                  //this.customerValid = true;
                  this.customerAsignned = true;
                }
                this.nit = result.result[0].id;
                this.selectedUnits = result.result;
                this.store.dispatch((0,src_app_state_queries_queries_actions__WEBPACK_IMPORTED_MODULE_2__/* .getExecuteQuery */ ._x)({
                  payload: {
                    "queryName": "getListEmailBilling",
                    "parameters": [{
                      "parameterId": 1,
                      "value": result.result[0].id,
                      "type": "String"
                    }]
                  }
                }));
                if (result.result[0].onAccount) {
                  if (this.clientMessageAgreement) {
                    this.matDialog.open(_client_message_agreement_dialog_client_message_agreement_dialog_component__WEBPACK_IMPORTED_MODULE_18__/* .ClientMessageAgreementDialogComponent */ .A, {
                      width: "25rem"
                    });
                    this.clientMessageAgreement = false;
                  }
                }
                const data = [{
                  lots: result.result.length,
                  weight: result.result.reduce((acc, current) => acc + current.cargoWeigth, 0),
                  quantity: result.result.reduce((acc, current) => acc + current.cargoQuantity, 0)
                }];
                this.displayedColumns = ["lots", "weight", "quantity"];
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__/* .MatTableDataSource */ .by(data);
              },
              error: error => console.error(error)
            });
          } else {
            this.store.select(src_app_state_containerized_load_containerized_load_selectors__WEBPACK_IMPORTED_MODULE_0__/* .containerizedLoadFeatureSelector */ .qO).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .takeUntil */ .R)(this.destroy$)).subscribe({
              next: result => {
                this.customer = result.result[0].consigneeName;
                if (this.customer) {
                  //this.customerValid = true;
                  this.customerAsignned = true;
                }
                this.nit = result.result[0].consigneeId;
                this.associateClient = result.result[0].consigneeName === null;
                this.containers = result.result.filter(value => value.yard);
                if (result.result[0].consigneeId) {
                  this.store.dispatch((0,src_app_state_queries_queries_actions__WEBPACK_IMPORTED_MODULE_2__/* .getExecuteQuery */ ._x)({
                    payload: {
                      "queryName": "getListEmailBilling",
                      "parameters": [{
                        "parameterId": 1,
                        "value": result.result[0].consigneeId,
                        "type": "String"
                      }]
                    }
                  }));
                }
                if (result.result[0].onAccount) {
                  if (this.clientMessageAgreement) {
                    this.matDialog.open(_client_message_agreement_dialog_client_message_agreement_dialog_component__WEBPACK_IMPORTED_MODULE_18__/* .ClientMessageAgreementDialogComponent */ .A, {
                      width: "25rem"
                    });
                    this.clientMessageAgreement = false;
                  }
                }
                this.displayedColumns = ["selected", "number", "unitNbr", "twenty"];
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__/* .MatTableDataSource */ .by(this.containers);
              },
              error: error => console.error(error)
            });
          }
          this.store.select(src_app_state_shared_shared_selectors__WEBPACK_IMPORTED_MODULE_5__/* .sharedFeatureSelector */ .x).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .takeUntil */ .R)(this.destroy$)).subscribe({
            next: result => {
              this.selectedCustomer = result.selectedCustomer;
              this.selectedAgent = result.selectedAgent;
              if (result.customer) {
                this.searchedCustomers = [...this.searchedCustomers, ...result.customer];
              }
              if (this.selectedCustomer) {
                if (this.selectedCustomer.split("/")[1]) {
                  if (this.selectedCustomer.length) {
                    if (this.searchedCustomers.length) {
                      const customer = this.searchedCustomers?.filter(value => value.agentId === this.selectedCustomer.split("/")[0]);
                      if (customer) {
                        if (customer?.length) {
                          if (this.customerSearcherControl.valid) {
                            this.customerValid = true;
                          }
                          if (customer[0].onAccount) {
                            if (this.clientMessageAgreement) {
                              this.matDialog.open(_client_message_agreement_dialog_client_message_agreement_dialog_component__WEBPACK_IMPORTED_MODULE_18__/* .ClientMessageAgreementDialogComponent */ .A, {
                                width: "25rem"
                              });
                              this.clientMessageAgreement = false;
                            }
                            this.searchedCustomers = [];
                          }
                        } else {
                          this.customerValid = false;
                        }
                      }
                    }
                  }
                } else {
                  this.customerValid = false;
                }
              }
              if (!this.emails.length) {
                if (result.selectedCustomer) {
                  if (!!result.selectedCustomer.split("/")[1]) {
                    this.store.dispatch((0,src_app_state_queries_queries_actions__WEBPACK_IMPORTED_MODULE_2__/* .getExecuteQuery */ ._x)({
                      payload: {
                        "queryName": "getListEmailBilling",
                        "parameters": [{
                          "parameterId": 1,
                          "value": result.selectedCustomer.split("/")[0],
                          "type": "String"
                        }]
                      }
                    }));
                  }
                }
              }
            },
            error: error => console.error(error)
          });
          this.store.select(src_app_state_queries_queries_selectors__WEBPACK_IMPORTED_MODULE_3__/* .queriesFeatureSelector */ .w).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__/* .takeUntil */ .R)(this.destroy$)).subscribe({
            next: result => {
              if (result.result?.result.length) {
                this.emails = result.result.result[0].email_address.split(";");
              }
            },
            error: error => console.error(error)
          });
          this.invoiceManagementBillingFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__/* .FormGroup */ .cw({
            estimatedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__/* .FormControl */ .NI({
              value: "",
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__/* .Validators.required */ .kI.required]),
            observations: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__/* .FormControl */ .NI({
              value: "",
              disabled: false
            }, [_angular_forms__WEBPACK_IMPORTED_MODULE_14__/* .Validators.maxLength */ .kI.maxLength(250)])
          });
        },
        error: error => console.error(error)
      });
      if (this.customerAsignned) {
        this.customerValid = true;
      }
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
      this.store.dispatch((0,src_app_state_queries_queries_actions__WEBPACK_IMPORTED_MODULE_2__/* .cleanQueryResult */ .w_)());
      this.store.dispatch((0,src_app_state_shared_shared_actions__WEBPACK_IMPORTED_MODULE_4__/* .cleanCustomer */ .n6)());
      this.store.dispatch((0,src_app_state_shared_shared_actions__WEBPACK_IMPORTED_MODULE_4__/* .cleanSelectedCustomer */ .mS)());
    }
    submit() {
      if (this.detached) {
        if (this.selectedUnits.length) {
          this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_6__/* .getUpdateAgentAndConsigneeInBl */ .j4)({
            body: {
              "blNbr": this.selectedUnits[0].hbl,
              "agentId": this.selectedAgent ? this.selectedAgent.split("/")[1] ? this.selectedAgent.split("/")[0] : null : null,
              "nitConsignee": this.selectedCustomer.split("/")[1] ? this.selectedCustomer.split("/")[0] : null,
              "loadAgentId": null
            }
          }));
          this.store.dispatch((0,src_app_state_detached_load_detached_load_actions__WEBPACK_IMPORTED_MODULE_7__/* .setSelectedCustomer */ .AH)({
            customer: this.selectedCustomer
          }));
          this.store.dispatch((0,src_app_state_detached_load_detached_load_actions__WEBPACK_IMPORTED_MODULE_7__/* .setSelectedUnits */ .rN)({
            units: this.selectedUnits
          }));
          this.store.dispatch((0,src_app_state_detached_load_detached_load_actions__WEBPACK_IMPORTED_MODULE_7__/* .getCreateBreakbulkDraft */ .NV)({
            hbl: this.base64EncryptionUtilService.encrypt(this.selectedUnits[0].hbl)
          }));
          this.store.dispatch((0,src_app_state_detached_load_detached_load_actions__WEBPACK_IMPORTED_MODULE_7__/* .getCreateBreakbulk */ .PA)({
            body: {
              bl: this.selectedUnits[0].hbl,
              customerId: this.selectedCustomer.split("/")[0],
              date: moment__WEBPACK_IMPORTED_MODULE_8__(this.invoiceManagementBillingFormGroup.controls["estimatedDate"].value).toISOString(),
              units: this.selectedUnits.map(value => value.unitNbr),
              notes: this.invoiceManagementBillingFormGroup.controls["observations"].value
            }
          }));
        }
        this.router.navigate(["/", "carga-suelta", "proforma"]);
      } else {
        if (this.selectedContainers.length) {
          this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_6__/* .getUpdateAgentAndConsigneeInBl */ .j4)({
            body: {
              "blNbr": this.selectedContainers[0].blNumber,
              "agentId": this.selectedAgent ? this.selectedAgent.split("/")[1] ? this.selectedAgent.split("/")[0] : null : null,
              "nitConsignee": this.selectedCustomer.split("/")[0] ? this.selectedCustomer.split("/")[0] : null,
              "loadAgentId": null
            }
          }));
          this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_6__/* .setSelectedCustomer */ .AH)({
            customer: this.selectedCustomer
          }));
          this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_6__/* .setSelectedContainers */ .lQ)({
            containers: this.selectedContainers
          }));
          this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_6__/* .getInvoiceCreate */ .v4)({
            body: {
              bkg: null,
              bl: this.selectedContainers[0].blNumber,
              customerId: this.selectedCustomer.split("/")[0],
              date: moment__WEBPACK_IMPORTED_MODULE_8__(this.invoiceManagementBillingFormGroup.controls["estimatedDate"].value).toISOString(),
              units: this.selectedContainers.map(value => value.unitNbr),
              notes: this.invoiceManagementBillingFormGroup.controls["observations"].value
            }
          }));
          this.router.navigate(["/", "carga-contenerizada", "proforma"]);
        } else {
          this.matSnackBar.open("Debe seleccionar al menos un contenedor", "", {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          });
        }
      }
    }
    cancel() {
      this.store.dispatch((0,src_app_state_queries_queries_actions__WEBPACK_IMPORTED_MODULE_2__/* .cleanQueryResult */ .w_)());
      this.store.dispatch((0,src_app_state_shared_shared_actions__WEBPACK_IMPORTED_MODULE_4__/* .cleanSelectedCustomer */ .mS)());
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
    onCustomerControlChange(control) {
      this.customerSearcherControl = control;
      this.customerSearcherControl.statusChanges.subscribe(status => {
        if (!this.customerSearcherControl.valid && !this.customerAsignned) {
          this.customerValid = false;
        } else {
          this.customerValid = true;
        }
      });
    }
  }
  InvoiceManagementBillingComponent.ɵfac = function InvoiceManagementBillingComponent_Factory(t) {
    return new (t || InvoiceManagementBillingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_19__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_19__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__/* .MatDialog */ .uw), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_ngrx_store__WEBPACK_IMPORTED_MODULE_21__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(src_app_core_auth_services_base64_encryption_util_service__WEBPACK_IMPORTED_MODULE_22__/* .Base64EncryptionUtilService */ .L), _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__/* .MatSnackBar */ .ux));
  };
  InvoiceManagementBillingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: InvoiceManagementBillingComponent,
    selectors: [["app-invoice-management-billing"]],
    viewQuery: function InvoiceManagementBillingComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.containersCheckboxes = _t);
      }
    },
    inputs: {
      detached: "detached"
    },
    decls: 68,
    vars: 15,
    consts: [[1, "invoice-management-billing"], [1, "invoice-management-billing__title"], [1, "invoice-management-billing__controls"], [4, "ngIf"], [1, "invoice-management-billing__form-group", 3, "formGroup"], ["appearance", "fill", 1, "example-chip-list"], [3, "disabled"], ["chipGrid", ""], [3, "editable", 4, "ngFor", "ngForOf"], [3, "matChipInputFor", "matChipInputSeparatorKeyCodes"], ["matInput", "", "placeholder", "Fecha Estimada de Retiro", "formControlName", "estimatedDate", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "type", "text", "formControlName", "observations"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "selected"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cel", "", 4, "matCellDef"], ["matColumnDef", "number"], ["matColumnDef", "unitNbr"], ["matColumnDef", "twenty"], ["matColumnDef", "lots"], ["matColumnDef", "weight"], ["matColumnDef", "quantity"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "invoice-management-billing__actions"], ["mat-flat-button", "", 1, "invoice-management-billing__cancel", 3, "click"], ["mat-raised-button", "", "color", "primary", "class", "invoice-management-billing__submit", 3, "disabled", "click", 4, "ngIf"], [1, "invoice-management-billing__considerations"], [1, "service-orders-create__customer-searcher", 3, "controlDisabled", "searcher", "agent", "data", "customerControl"], [3, "editable"], ["mat-header-cell", ""], [1, "centered-cell__all"], ["color", "primary", 3, "change"], ["mat-cel", ""], [1, "centered-cell"], ["containerCheckbox", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-raised-button", "", "color", "primary", 1, "invoice-management-billing__submit", 3, "disabled", "click"]],
    template: function InvoiceManagementBillingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(2, " Facturaci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(4, InvoiceManagementBillingComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ ._UZ(5, "app-agent-searcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(6, "form", 4)(7, "mat-form-field", 5)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(9, "Correo para env\u00EDo de factura electr\u00F3nica");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(10, "mat-chip-grid", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(12, InvoiceManagementBillingComponent_mat_chip_row_12_Template, 2, 2, "mat-chip-row", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ ._UZ(13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ ._UZ(15, "input", 10)(16, "mat-datepicker-toggle", 11)(17, "mat-datepicker", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(19, "mat-form-field")(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(21, " Nota ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelement"] */ ._UZ(22, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(23, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerStart"] */ .ynx(24, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(25, InvoiceManagementBillingComponent_th_25_Template, 3, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(26, InvoiceManagementBillingComponent_td_26_Template, 4, 0, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerStart"] */ .ynx(27, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(28, InvoiceManagementBillingComponent_th_28_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(29, InvoiceManagementBillingComponent_td_29_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerStart"] */ .ynx(30, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(31, InvoiceManagementBillingComponent_th_31_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(32, InvoiceManagementBillingComponent_td_32_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerStart"] */ .ynx(33, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(34, InvoiceManagementBillingComponent_th_34_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(35, InvoiceManagementBillingComponent_td_35_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerStart"] */ .ynx(36, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(37, InvoiceManagementBillingComponent_th_37_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(38, InvoiceManagementBillingComponent_td_38_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerStart"] */ .ynx(39, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(40, InvoiceManagementBillingComponent_th_40_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(41, InvoiceManagementBillingComponent_td_41_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerStart"] */ .ynx(42, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(43, InvoiceManagementBillingComponent_th_43_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(44, InvoiceManagementBillingComponent_td_44_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementContainerEnd"] */ .BQk();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(45, InvoiceManagementBillingComponent_tr_45_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(46, InvoiceManagementBillingComponent_tr_46_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(47, "div", 26)(48, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceManagementBillingComponent_Template_button_click_48_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(49, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(50, InvoiceManagementBillingComponent_button_50_Template, 2, 1, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtemplate"] */ .YNc(51, InvoiceManagementBillingComponent_button_51_Template, 2, 1, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(52, "div", 29)(53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(54, " Por favor tener en cuenta las siguientes recomendaciones: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(55, "ol")(56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(57, "El Email y/o dominio, que no tenga respuestas autom\u00E1ticas, bandeja de entrada llena.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(59, "Correo y/o correos escritos correctamente en los insumos originales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(61, "ominio del correo debe permitir la recepci\u00F3n de adjuntos en formato .ZIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(63, "Se sugiere que se agreguen los dominios (facturactscolombia@cen.biz, facturactscolombia@amazonses.com)como contactos seguros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(65, "Correo reportado como SPAM, malicioso y/o con virus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementStart"] */ .TgZ(66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵtext"] */ ._uU(67, " Nota: Nuestro proveedor tecnol\u00F3gico se hace responsable por el env\u00EDo de las notificaciones hacia los correos relacionados por Sociedad Puerto Industrial Aguadulce S.A. en los insumos originales de los documentos y no por la recepci\u00F3n de estas en la bandeja de entrada de estos. Responsable: Tercero Si los correos configurados no son los correctos por favor pida copia de esta factura al correo billing@puertoaguadulce.com y realice la actualizaci\u00F3n de los correos a trav\u00E9s de servicliente@puertoaguadulce.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵelementEnd"] */ .qZA()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵreference"] */ .MAs(11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵreference"] */ .MAs(18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("formGroup", ctx.invoiceManagementBillingFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.emails);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("matChipInputFor", _r1)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx.detached);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵadvance"] */ .xp6(1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.detached);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_24__/* .NgIf */ .O5, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__/* .MatCheckbox */ .oG, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__/* .MatButton */ .lW, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__/* .MatFormField */ .KE, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__/* .MatLabel */ .hX, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__/* .MatSuffix */ .R9, _angular_material_input__WEBPACK_IMPORTED_MODULE_28__/* .MatInput */ .Nt, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__/* .MatTable */ .BZ, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__/* .MatHeaderCellDef */ .fO, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__/* .MatHeaderRowDef */ .as, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__/* .MatColumnDef */ .w1, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__/* .MatCellDef */ .Dz, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__/* .MatRowDef */ .nj, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__/* .MatHeaderCell */ .ge, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__/* .MatHeaderRow */ .XQ, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__/* .MatRow */ .Gk, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__/* .MatDatepicker */ .Mq, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__/* .MatDatepickerInput */ .hl, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__/* .MatDatepickerToggle */ .nW, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__/* .MatChipGrid */ .RA, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__/* .MatChipInput */ .oH, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__/* .MatChipRow */ .z3, _angular_forms__WEBPACK_IMPORTED_MODULE_14__/* ["ɵNgNoValidate"] */ ._Y, _angular_forms__WEBPACK_IMPORTED_MODULE_14__/* .DefaultValueAccessor */ .Fj, _angular_forms__WEBPACK_IMPORTED_MODULE_14__/* .NgControlStatus */ .JJ, _angular_forms__WEBPACK_IMPORTED_MODULE_14__/* .NgControlStatusGroup */ .JL, _angular_forms__WEBPACK_IMPORTED_MODULE_14__/* .FormGroupDirective */ .sg, _angular_forms__WEBPACK_IMPORTED_MODULE_14__/* .FormControlName */ .u, _shared_components_agent_searcher_agent_searcher_component__WEBPACK_IMPORTED_MODULE_10__/* .AgentSearcherComponent */ .Z, _services_components_customer_searcher_customer_searcher_component__WEBPACK_IMPORTED_MODULE_11__/* .CustomerSearcherComponent */ .p],
    styles: [".invoice-management-billing[_ngcontent-%COMP%]{padding:1rem;padding-top:0;padding-bottom:0;display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto auto;row-gap:1rem}.invoice-management-billing__title[_ngcontent-%COMP%]{font-size:1.5rem;color:#78909c}.invoice-management-billing__submit[_ngcontent-%COMP%]{color:#fff!important}.invoice-management-billing__form-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto auto}.invoice-management-billing__actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.invoice-management-billing__submit[_ngcontent-%COMP%]{margin-left:1rem}.invoice-management-billing__considerations[_ngcontent-%COMP%]{font-family:Gilroy-Light;color:#636e72}.centered-cell[_ngcontent-%COMP%]{width:100%;padding-left:.8rem;display:block}.centered-cell__all[_ngcontent-%COMP%]{width:100%;display:flex}"]
  });
  return InvoiceManagementBillingComponent;
})();

/***/ }),

/***/ 87093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ InvoiceProformaComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7155);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15439);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77579);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82722);
/* harmony import */ var src_app_core_privileges_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9862);
/* harmony import */ var src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50175);
/* harmony import */ var src_app_state_containerized_load_containerized_load_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50091);
/* harmony import */ var src_app_state_detached_load_detached_load_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38013);
/* harmony import */ var src_app_state_detached_load_detached_load_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47293);
/* harmony import */ var src_app_state_queries_queries_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8988);
/* harmony import */ var src_app_state_shared_shared_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68438);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94650);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55867);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77518);
/* harmony import */ var src_app_core_auth_services_base64_encryption_util_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(46602);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(17009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(97392);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4859);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(73546);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(96308);
/* harmony import */ var _shared_directives_permissions_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4344);






















function InvoiceProformaComponent_ng_container_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(1, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate1"] */ .hij(" Fecha estimada de retiro ", ctx_r1.estimatedDate, " ");
  }
}
function InvoiceProformaComponent_ng_container_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(2, " Cliente: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx_r2.selectedCustomer);
  }
}
function InvoiceProformaComponent_ng_container_0_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(1, "Contenedor / HBL");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function InvoiceProformaComponent_ng_container_0_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r15.container);
  }
}
function InvoiceProformaComponent_ng_container_0_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(1, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function InvoiceProformaComponent_ng_container_0_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r16.description);
  }
}
function InvoiceProformaComponent_ng_container_0_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function InvoiceProformaComponent_ng_container_0_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate"] */ .Oqu(element_r17.quantity);
  }
}
function InvoiceProformaComponent_ng_container_0_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(1, "$COP");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
  }
}
function InvoiceProformaComponent_ng_container_0_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "td", 26)(1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA()();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(3, 1, element_r18.amount));
  }
}
function InvoiceProformaComponent_ng_container_0_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(0, "tr", 28);
  }
}
function InvoiceProformaComponent_ng_container_0_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelement"] */ ._UZ(0, "tr", 29);
  }
}
function InvoiceProformaComponent_ng_container_0_ng_container_38_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceProformaComponent_ng_container_0_ng_container_38_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵrestoreView"] */ .CHM(_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵresetView"] */ .KtG(ctx_r21.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(1, " Confirmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r20.charges);
  }
}
const _c0 = function (a0) {
  return [a0];
};
function InvoiceProformaComponent_ng_container_0_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(1, InvoiceProformaComponent_ng_container_0_ng_container_38_button_1_Template, 2, 1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("permissions", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpureFunction1"] */ .VKq(1, _c0, ctx_r13.privileges.CC_IMP_FAC_CON));
  }
}
function InvoiceProformaComponent_ng_container_0_ng_container_39_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceProformaComponent_ng_container_0_ng_container_39_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵrestoreView"] */ .CHM(_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw(3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵresetView"] */ .KtG(ctx_r24.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(1, " Confirmar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("disabled", !ctx_r23.charges);
  }
}
function InvoiceProformaComponent_ng_container_0_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(1, InvoiceProformaComponent_ng_container_0_ng_container_39_button_1_Template, 2, 1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("permissions", _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpureFunction1"] */ .VKq(1, _c0, ctx_r14.privileges.CS_IMP_FAC_CON));
  }
}
function InvoiceProformaComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵgetCurrentView"] */ .EpF();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(1, "mat-card")(2, "mat-card-content")(3, "div", 1)(4, "div", 2)(5, "span", 3)(6, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(7, "attach_money");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(8, "div", 5)(9, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(10, "Facturaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(11, InvoiceProformaComponent_ng_container_0_ng_container_11_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(12, InvoiceProformaComponent_ng_container_0_ng_container_12_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(13, "div", 7)(14, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerStart"] */ .ynx(15, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(16, InvoiceProformaComponent_ng_container_0_th_16_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(17, InvoiceProformaComponent_ng_container_0_td_17_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerEnd"] */ .BQk();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerStart"] */ .ynx(18, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(19, InvoiceProformaComponent_ng_container_0_th_19_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(20, InvoiceProformaComponent_ng_container_0_td_20_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerEnd"] */ .BQk();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerStart"] */ .ynx(21, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(22, InvoiceProformaComponent_ng_container_0_th_22_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(23, InvoiceProformaComponent_ng_container_0_td_23_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerEnd"] */ .BQk();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerStart"] */ .ynx(24, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(25, InvoiceProformaComponent_ng_container_0_th_25_Template, 2, 0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(26, InvoiceProformaComponent_ng_container_0_td_26_Template, 4, 3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerEnd"] */ .BQk();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(27, InvoiceProformaComponent_ng_container_0_tr_27_Template, 1, 0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(28, InvoiceProformaComponent_ng_container_0_tr_28_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(29, "div", 17)(30, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(31, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(32, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipe"] */ .ALo(34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementStart"] */ .TgZ(35, "div", 20)(36, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵlistener"] */ .NdJ("click", function InvoiceProformaComponent_ng_container_0_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵrestoreView"] */ .CHM(_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵresetView"] */ .KtG(ctx_r26.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtext"] */ ._uU(37, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(38, InvoiceProformaComponent_ng_container_0_ng_container_38_Template, 2, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(39, InvoiceProformaComponent_ng_container_0_ng_container_39_Template, 2, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementEnd"] */ .qZA()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r0.export);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.selectedCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtextInterpolate"] */ .Oqu(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵpipeBind1"] */ .lcZ(34, 8, ctx_r0.invoiceProforma.totalTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r0.detached);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.detached);
  }
}
let InvoiceProformaComponent = /*#__PURE__*/(() => {
  class InvoiceProformaComponent {
    constructor(store, activatedRoute, base64EncryptionUtilService, router, matSnackBar) {
      this.store = store;
      this.activatedRoute = activatedRoute;
      this.base64EncryptionUtilService = base64EncryptionUtilService;
      this.router = router;
      this.matSnackBar = matSnackBar;
      this.privileges = src_app_core_privileges_enum__WEBPACK_IMPORTED_MODULE_9__/* .privileges */ .U;
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__/* .Subject */ .x();
      this.detached = false;
      this.export = false;
      this.invoiceProforma = null;
      this.selectedContainers = [];
      this.selectedUnits = [];
      this.selectedCustomer = null;
      this.estimatedDate = "";
      this.charges = true;
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__/* .MatTableDataSource */ .by([]);
      this.displayedColumns = [];
    }
    ngOnInit() {
      this.activatedRoute.data.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .takeUntil */ .R)(this.destroy$)).subscribe({
        next: value => {
          this.detached = value["detached"];
          this.export = value["export"];
          if (this.detached) {
            this.store.select(src_app_state_detached_load_detached_load_selectors__WEBPACK_IMPORTED_MODULE_4__/* .detachedLoadFeatureSelector */ .N).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .takeUntil */ .R)(this.destroy$)).subscribe({
              next: result => {
                this.invoiceProforma = result.invoiceProforma;
                this.selectedUnits = result.selectedUnits;
                this.selectedCustomer = result.selectedCustomer?.split("/")[1];
                this.estimatedDate = moment__WEBPACK_IMPORTED_MODULE_0__(result.invoiceProforma?.paidThruDay).format("YYYY-MM-DD");
                if (this.invoiceProforma) {
                  if (this.invoiceProforma.error) {
                    this.matSnackBar.open(this.invoiceProforma?.error, "", {
                      verticalPosition: "top",
                      panelClass: ["error-snackbar"],
                      duration: 5000
                    });
                    this.router.navigate(["/", "carga-suelta"]);
                    this.store.dispatch((0,src_app_state_detached_load_detached_load_actions__WEBPACK_IMPORTED_MODULE_3__/* .cleanBillingData */ .LQ)());
                    this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_1__/* .cleanBillingData */ .LQ)());
                    this.store.dispatch((0,src_app_state_shared_shared_actions__WEBPACK_IMPORTED_MODULE_6__/* .cleanSelectedCustomer */ .mS)());
                    this.store.dispatch((0,src_app_state_shared_shared_actions__WEBPACK_IMPORTED_MODULE_6__/* .cleanSelectedAgent */ .Wi)());
                    this.charges = false;
                  }
                  let dataSource = [];
                  let accumulatedDataSource = [];
                  dataSource = this.invoiceProforma.charges.charge.map(element => ({
                    container: result.result[0].hbl,
                    description: element.description,
                    quantity: element.quantity.toString(),
                    amount: (element.amount + element.taxes.tax[0].amount).toString()
                  }));
                  dataSource.forEach(element => {
                    let currentDescription = element.description;
                    let isAccumulated = false;
                    isAccumulated = !!accumulatedDataSource.filter(element => element.description === currentDescription).length;
                    if (isAccumulated) {
                      accumulatedDataSource = accumulatedDataSource.map(accumulatedElement => {
                        const newElement = Object.assign({}, accumulatedElement);
                        if (accumulatedElement.description === element.description) {
                          newElement.quantity = (parseInt(element.quantity) + parseInt(accumulatedElement.quantity)).toString();
                          newElement.amount = (parseInt(element.amount) + parseInt(accumulatedElement.amount)).toString();
                        }
                        return newElement;
                      });
                    } else {
                      accumulatedDataSource = [...accumulatedDataSource, element];
                    }
                  });
                  this.displayedColumns = ["container", "description", "quantity", "amount"];
                  this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__/* .MatTableDataSource */ .by(accumulatedDataSource);
                }
              },
              error: error => console.error(error)
            });
          } else {
            this.store.select(src_app_state_containerized_load_containerized_load_selectors__WEBPACK_IMPORTED_MODULE_2__/* .containerizedLoadFeatureSelector */ .qO).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__/* .takeUntil */ .R)(this.destroy$)).subscribe({
              next: result => {
                this.invoiceProforma = result.invoiceProforma;
                this.selectedContainers = result.selectedContainers;
                this.selectedCustomer = result.selectedCustomer?.split("/")[1];
                this.estimatedDate = moment__WEBPACK_IMPORTED_MODULE_0__(result.invoiceProforma?.paidThruDay).format("Y/MM/DD");
                if (this.invoiceProforma) {
                  if (this.invoiceProforma.error) {
                    this.matSnackBar.open(this.invoiceProforma?.error, "", {
                      verticalPosition: "top",
                      panelClass: ["error-snackbar"],
                      duration: 5000
                    });
                    this.router.navigate(["/", "carga-contenerizada"]);
                    this.store.dispatch((0,src_app_state_detached_load_detached_load_actions__WEBPACK_IMPORTED_MODULE_3__/* .cleanBillingData */ .LQ)());
                    this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_1__/* .cleanBillingData */ .LQ)());
                    this.store.dispatch((0,src_app_state_shared_shared_actions__WEBPACK_IMPORTED_MODULE_6__/* .cleanSelectedCustomer */ .mS)());
                    this.store.dispatch((0,src_app_state_shared_shared_actions__WEBPACK_IMPORTED_MODULE_6__/* .cleanSelectedAgent */ .Wi)());
                    this.charges = false;
                  }
                  let dataSource = [];
                  let accumulatedDataSource = [];
                  dataSource = this.invoiceProforma.charges.charge.map(element => ({
                    container: element.entityId,
                    description: element.description,
                    quantity: element.quantity.toString(),
                    amount: (element.amount + element.taxes.tax[0].amount).toString()
                  }));
                  dataSource.forEach(element => {
                    let currentContainer = element.container;
                    let currentDescription = element.description;
                    let isAccumulated = false;
                    isAccumulated = !!accumulatedDataSource.filter(element => {
                      if (element.container === currentContainer) {
                        if (element.description === currentDescription) return true;else return false;
                      } else return false;
                    }).length;
                    if (isAccumulated) {
                      accumulatedDataSource = accumulatedDataSource.map(accumulatedElement => {
                        const newElement = Object.assign({}, accumulatedElement);
                        if (accumulatedElement.description === element.description) {
                          newElement.quantity = (parseInt(element.quantity) + parseInt(accumulatedElement.quantity)).toString();
                          newElement.amount = (parseInt(element.amount) + parseInt(accumulatedElement.amount)).toString();
                        }
                        return newElement;
                      });
                    } else {
                      accumulatedDataSource = [...accumulatedDataSource, element];
                    }
                  });
                  this.displayedColumns = ["container", "description", "quantity", "amount"];
                  this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__/* .MatTableDataSource */ .by(accumulatedDataSource);
                }
              },
              error: error => console.error(error)
            });
          }
        },
        error: error => console.error(error)
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    submit() {
      if (this.detached) {
        this.store.dispatch((0,src_app_state_detached_load_detached_load_actions__WEBPACK_IMPORTED_MODULE_3__/* .getFinalizeBbkInvoice */ .Pi)({
          breakbulkDraft: this.invoiceProforma?.draftNumber.toString()
        }));
        this.router.navigate(["/", "carga-suelta", "resume"]);
      } else {
        this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_1__/* .getFinalizeInvoice */ .Q9)({
          body: this.invoiceProforma
        }));
        if (this.export) {
          this.router.navigate(["/", "carga-contenerizada", "export", "resume"]);
        } else {
          this.router.navigate(["/", "carga-contenerizada", "resume"]);
        }
      }
    }
    cancel() {
      if (this.detached) {
        this.store.dispatch((0,src_app_state_queries_queries_actions__WEBPACK_IMPORTED_MODULE_5__/* .cleanQueryResult */ .w_)());
        this.store.dispatch((0,src_app_state_shared_shared_actions__WEBPACK_IMPORTED_MODULE_6__/* .cleanSelectedCustomer */ .mS)());
        if (this.selectedUnits.length > 0 && !this.selectedUnits[0].consigneeName) {
          this.store.dispatch((0,src_app_state_detached_load_detached_load_actions__WEBPACK_IMPORTED_MODULE_3__/* .getUpdateConsigneeCancelDraftBbk */ .ET)({
            nbr: this.base64EncryptionUtilService.encrypt(this.selectedUnits[0].hbl)
          }));
        }
        this.store.dispatch((0,src_app_state_detached_load_detached_load_actions__WEBPACK_IMPORTED_MODULE_3__/* .getCancelProformaDetachedLoad */ .MX)({
          breakbulkDraft: this.invoiceProforma?.draftNumber.toString(),
          message: ""
        }));
        this.router.navigate(["/", "carga-suelta", "billing"]);
      } else {
        this.store.dispatch((0,src_app_state_queries_queries_actions__WEBPACK_IMPORTED_MODULE_5__/* .cleanQueryResult */ .w_)());
        this.store.dispatch((0,src_app_state_shared_shared_actions__WEBPACK_IMPORTED_MODULE_6__/* .cleanSelectedCustomer */ .mS)());
        if (!this.export) {
          if (this.selectedContainers.length > 0 && !this.selectedContainers[0].consigneeName) {
            this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_1__/* .getUpdateAgentAndConsigneeInBl */ .j4)({
              body: {
                agentId: null,
                blNbr: this.export ? this.selectedContainers[0].nbr : this.selectedContainers[0].blNumber,
                loadAgentId: null,
                nitConsignee: ""
              }
            }));
          }
          this.store.dispatch((0,src_app_state_containerized_load_containerized_load_actions__WEBPACK_IMPORTED_MODULE_1__/* .getCancelProformaContainerizedLoad */ .e8)({
            body: this.invoiceProforma
          }));
          this.router.navigate(["/", "carga-contenerizada", "billing"]);
        } else {
          this.router.navigate(["/", "carga-contenerizada", "export", "billing"]);
        }
      }
    }
  }
  InvoiceProformaComponent.ɵfac = function InvoiceProformaComponent_Factory(t) {
    return new (t || InvoiceProformaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_ngrx_store__WEBPACK_IMPORTED_MODULE_13__/* .Store */ .yh), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_14__/* .ActivatedRoute */ .gz), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(src_app_core_auth_services_base64_encryption_util_service__WEBPACK_IMPORTED_MODULE_15__/* .Base64EncryptionUtilService */ .L), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_router__WEBPACK_IMPORTED_MODULE_14__/* .Router */ .F0), _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__/* .MatSnackBar */ .ux));
  };
  InvoiceProformaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵdefineComponent"] */ .Xpm({
    type: InvoiceProformaComponent,
    selectors: [["app-invoice-proforma"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "invoice-proforma"], [1, "invoice-proforma__header"], [1, "span-icon"], [1, "icon-dollar"], [1, "invoice-proforma__header-text"], [1, "invoice-proforma__title"], [1, "invoice-proforma__resume"], ["mat-table", "", "matSort", "", 1, "invoice-proforma__table", 3, "dataSource"], ["matColumnDef", "container"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "quantity"], ["matColumnDef", "amount"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "invoice-proforma__total"], [1, "invoice-proforma__total-title"], [1, "invoice-proforma__total-value"], [1, "invoice-proforma__actions"], ["mat-flat-button", "", 1, "invoice-proforma__cancel", 3, "click"], [1, "invoice-proforma__estimated-date"], [1, "invoice-proforma__consignee"], [1, "invoice-proforma__consignee-value"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "invoice-amount"], ["mat-header-row", ""], ["mat-row", ""], ["mat-raised-button", "", "color", "primary", "class", "invoice-proforma__submit", 3, "disabled", "click", 4, "permissions"], ["mat-raised-button", "", "color", "primary", 1, "invoice-proforma__submit", 3, "disabled", "click"]],
    template: function InvoiceProformaComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵtemplate"] */ .YNc(0, InvoiceProformaComponent_ng_container_0_Template, 40, 10, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.invoiceProforma);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__/* .NgIf */ .O5, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__/* .MatIcon */ .Hw, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__/* .MatButton */ .lW, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__/* .MatTable */ .BZ, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__/* .MatHeaderCellDef */ .fO, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__/* .MatHeaderRowDef */ .as, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__/* .MatColumnDef */ .w1, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__/* .MatCellDef */ .Dz, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__/* .MatRowDef */ .nj, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__/* .MatHeaderCell */ .ge, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__/* .MatCell */ .ev, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__/* .MatHeaderRow */ .XQ, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__/* .MatRow */ .Gk, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__/* .MatCard */ .a8, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__/* .MatCardContent */ .dn, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__/* .MatSort */ .YE, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__/* .MatSortHeader */ .nU, _shared_directives_permissions_directive__WEBPACK_IMPORTED_MODULE_7__/* .PermissionsDirective */ .$, _angular_common__WEBPACK_IMPORTED_MODULE_17__/* .DecimalPipe */ .JJ],
    styles: [".invoice-proforma[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-template-rows:auto auto auto 1fr auto;row-gap:1rem}.invoice-amount[_ngcontent-%COMP%]{width:100%;text-align:right;display:block}.invoice-proforma__title[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:2rem;font-family:Gilroy-Light;color:#636e72}.invoice-proforma__estimated-date[_ngcontent-%COMP%]{font-size:1.5rem;font-family:Gilroy-Light;color:#636e72}.invoice-proforma__consignee[_ngcontent-%COMP%]{font-size:1rem;font-family:Gilroy-Light;color:#636e72}.invoice-proforma__total[_ngcontent-%COMP%]{width:100%;padding:1rem;display:flex;justify-content:space-between;align-items:center}.invoice-proforma__total-title[_ngcontent-%COMP%], .invoice-proforma__total-value[_ngcontent-%COMP%]{font-size:1rem;font-family:Gilroy-Light;color:#636e72}.invoice-proforma__actions[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-end;align-items:center}.invoice-proforma__submit[_ngcontent-%COMP%]{color:#fff!important;margin-left:1rem}.icon-dollar[_ngcontent-%COMP%]{color:#636e72;margin-right:2rem;font-size:70px;width:50px;height:60px}.invoice-proforma__header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:flex-start}.invoice-proforma__header-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}"]
  });
  return InvoiceProformaComponent;
})();

/***/ }),

/***/ 86413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ showAlertTime)
/* harmony export */ });
function showAlertTime(alert, message, clase) {
  alert.message = message;
  alert.showAlert = true;
  alert.clase = clase;
  setTimeout(() => {
    alert.showAlert = false;
  }, 4000);
}

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