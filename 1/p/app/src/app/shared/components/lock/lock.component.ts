import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { IContainerizedLoad } from 'src/app/core/interfaces/containerized-load.interface';
import { IDetachedLoadStore } from 'src/app/core/interfaces/detached-load-store.interface';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { ILockDTO } from 'src/app/core/interfaces/lock-dto.interface';
import { ILockRouteData } from 'src/app/core/interfaces/lock-route-data.interface';
import { cleanContainerizedLoad, getContainerizedLoad, setLockUnit, setUnlockUnit } from 'src/app/state/containerized-load/containerized-load.actions';
import {
  cleanDetachedLoad,
  getDetachedLoad,
  setLockUnit as detachedSetLockUnit,
  setUnlockUnit as detachedSetUnlockUnit
} from 'src/app/state/detached-load/detached-load.actions';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { detachedLoadFeatureSelector } from 'src/app/state/detached-load/detached-load.selectors';
import { Location } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { INotificationData } from 'src/app/core/interfaces/notification-data.interface';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.css']
})
export class LockComponent implements OnInit, OnDestroy {

  public storeSubscription: Subscription = new Subscription();
  public routerSubscription: Subscription = new Subscription();
  public userSubscription: Subscription = new Subscription();
  public routeData: ILockRouteData = {
    title: "Titulo",
    action: "Aceptar",
    actionIcon: "lock",
    lock: false,
    detached: false
  };
  public dataSource: Array<any> = [];
  public displayedColumns: Array<string> = [];

  public selectedItems: Array<IContainerizedLoad> = [];
  public cargoLots: Array<IDetachedLoad> = [];
  public validatedCargoLots: number = 0;
  public canSubmit: boolean = false;

  public observationFormControl: FormControl = new FormControl("", [Validators.required]);

  public lastSearch: string = "";

  public userInfo!: IAPIGatewayStore;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store,
    private readonly location: Location,
    private readonly router: Router,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly _AESEncryptionUtilService: AESEncryptionUtilService,
    private readonly matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });

    this.routerSubscription = this.activatedRoute.data.subscribe({
      next: (data) => {
        this.routeData = data as ILockRouteData;

        if(this.routeData.detached) {
          this.storeSubscription = this.store.select(detachedLoadFeatureSelector).subscribe({
            next: (detachedStore: IDetachedLoadStore) => {
              if(detachedStore.result[0])
                this.lastSearch = detachedStore.result[0].hbl;

                let canlock = 0;
                let allInYard = true;
                let withDate: IDetachedLoad[] = [];
                let detachedWithoutDate: IDetachedLoad[] = [];
                let totalLots: number = detachedStore.result.length;

                if(this.routeData.lock) {
                  detachedStore.result.forEach(lot => {
                    if(lot.truck_license_nbr != null && lot.driver_name != null && lot.requested_time != null) {
                      if(lot.hasHoldConsignee && !lot.holdConsigneeActive) {
                        canlock = canlock + 1;
                        withDate.push(lot);
                      }
                    }
                  });
                } else {
                  detachedStore.result.forEach(lot => {
                    if(lot.truck_license_nbr != null && lot.driver_name != null && lot.requested_time != null) {
                      if(lot.hasHoldConsignee && lot.holdConsigneeActive) {
                        canlock = canlock + 1;
                        withDate.push(lot);
                      }
                    }
                  });
                }

                this.canSubmit = !withDate.length;

                detachedStore.result.forEach(lot => {
                  if(!lot.yard) allInYard = false;
                });

                this.displayedColumns = ["quantity", "nbr", "plate", "driver", "date"];
                if(allInYard) {

                  interface ILockEntry {
                    quantity: number,
                    hbl: string,
                    truck_license_nbr: string,
                    driver_name: string,
                    requested_time: string
                  }

                  const entries: ILockEntry[] = [];
                  let withoutDate: ILockEntry = {
                    quantity: 0,
                    hbl: detachedStore.result[0].hbl,
                    truck_license_nbr: "",
                    driver_name: "",
                    requested_time: ""
                  };

                  let currentDate = "";

                  withDate.forEach(lot => {
                    if(lot.requested_time != currentDate) {
                      currentDate = lot.requested_time ?? "";

                      let index = entries.findIndex(entry => entry.requested_time === lot.requested_time);

                      if(index >= 0) {
                        entries[index].quantity = entries[index].quantity + 1;
                      } else {
                        entries.push({
                          quantity: 1,
                          hbl: lot.hbl,
                          truck_license_nbr: lot.truck_license_nbr ?? "",
                          driver_name: lot.driver_name ?? "",
                          requested_time: lot.requested_time ?? ""
                        });
                      }
                    } else {
                      let index = entries.findIndex(entry => entry.requested_time === lot.requested_time);
                      if(index >= 0) entries[index].quantity = entries[index].quantity + 1;
                    }
                  });

                  if(this.routeData.lock) {
                    detachedStore.result.forEach(lot => {
                      if(!lot.truck_license_nbr && !lot.driver_name && !lot.requested_time) {
                        withoutDate.quantity = withoutDate.quantity + 1;
                        if(withDate.length) totalLots = totalLots - 1;
                        if(lot.hasHoldConsignee && !lot.holdConsigneeActive) {
                          canlock = canlock + 1;
                          detachedWithoutDate.push(lot);
                        }
                      }
                    });

                    if(withoutDate.quantity) entries.push(withoutDate);
                  }

                  if(totalLots === canlock) {
                    this.cargoLots = [...withDate, ...detachedWithoutDate];
                    this.dataSource = entries;
                    this.canSubmit = false;
                  } else {
                    if(this.routeData.lock) {
                      this.matSnackBar.open($localize`:@@9dd55c8ca25564092ce72e9f6098378539856696969a54fdf627a76e1f8ae76b: modules.detached-load.lock.error`, "", {
                        verticalPosition: "top",
                        panelClass: ["error-snackbar"],
                        duration: 5000
                      });
                    } else {
                      this.matSnackBar.open($localize`:@@f1765de45a7fec4a4b5fb68f751431803d87d528288c82c8df4b4f04d96b66c6: modules.detached-load.unlock.error`, "", {
                        verticalPosition: "top",
                        panelClass: ["error-snackbar"],
                        duration: 5000
                      });
                    }

                    this.router.navigate(["/", "carga-suelta"]);

                    this.canSubmit = true;
                  }
                }
            },
            error: error => console.error(error)
          });

          this.storeSubscription.unsubscribe();
        } else {
          this.storeSubscription = this.store.select(containerizedLoadFeatureSelector).subscribe({
            next: (containerizedStore: IContainerizedLoadStore) => {
              if(containerizedStore.result[0])
                this.lastSearch = containerizedStore.result[0].blNumber;

              if(this.routeData.lock) {
                if(!containerizedStore.result.filter(value => value.hasHoldConsignee && !value.holdConsigneeActive).length) {
                  this.router.navigate(["/", "carga-contenerizada"]);
                  this.matSnackBar.open($localize`:@@b081943c6e63833db7df437dc0077b6acf4a35f81da2fd4eac5f2710a50f478f: modules.containerized-load.lock.error`, "", {
                    verticalPosition: "top",
                    panelClass: ["error-snackbar"],
                    duration: 5000
                  })
                }
              } else {
                if(!containerizedStore.result.filter(item => (item.truck_visit_appt_nbr != null) && item.holdConsigneeActive).length) {
                  this.router.navigate(["/", "carga-contenerizada"]);
                  this.matSnackBar.open($localize`:@@8d37257e29a52ed4b2f929d15f903f593a37b1cf146dbe0f9b579fd9afda5b75: modules.containerized-load.unlock.error`, "", {
                    verticalPosition: "top",
                    panelClass: ["error-snackbar"],
                    duration: 5000
                  })
                }
              }

              this.dataSource = this.routeData.lock ?
                containerizedStore.result.filter(item => item.hasHoldConsignee && !item.holdConsigneeActive):
                containerizedStore.result.filter(item => (item.truck_visit_appt_nbr != null) && item.holdConsigneeActive);
              this.displayedColumns = ["selected", "nbr", "plate", "driver", "date"];
            },
            error: error => console.error(error)
          });

          this.storeSubscription.unsubscribe();
        }
      },
      error: error => console.error(error)
    });

    this.routerSubscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  public checkboxSelectAll(event: MatCheckboxChange): void {
    if(event.checked) this.selectedItems = this.dataSource;
    else this.selectedItems = [];

    this.dataSource = this.dataSource.map((value) => {
      const newValue: IContainerizedLoad = Object.assign({}, value);

      newValue.selected = event.checked;

      return newValue;
    });
  }

  public checkboxSelectOne(event: MatCheckboxChange, element: IContainerizedLoad): void {
    if(event.checked) this.selectedItems = [...this.selectedItems, element];
    else this.selectedItems = this.selectedItems.filter(
      (value: IContainerizedLoad) => !(value.unitNbr == element.unitNbr)
    );

    this.dataSource = this.dataSource.map((value) => {
      const newValue: IContainerizedLoad = Object.assign({}, value);

      if((value as IContainerizedLoad).unitNbr == element.unitNbr) {
        newValue.selected = event.checked;
      }

      return newValue;
    });
  }

  public submit(): void {
    if(this.routeData.detached) {
      const units = this.cargoLots
      .map((value) => value.unitNbr)
      .toString();

      const submitData: ILockDTO = {
        "name": null,
        "action": null,
        "id": units,
        "type": null,
        "note": this.observationFormControl.value,
        "service": null
      };

      if(this.routeData.lock) this.store.dispatch(detachedSetLockUnit({
        body: this._AESEncryptionUtilService.encrypt(JSON.stringify(submitData)),
        hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CS_CTA_BLOQ")[0].notificable,
        notificationData: btoa(JSON.stringify({
          userName: this.userInfo.userName,
          units: units,
          note: this.observationFormControl.value,
          HBL: this.lastSearch
        })),
        privilege: "CS_CTA_BLOQ"
      }));
      else this.store.dispatch(detachedSetUnlockUnit({
        body: this._AESEncryptionUtilService.encrypt(JSON.stringify(submitData)),
        hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CS_CTA_DESBL")[0].notificable,
        notificationData: btoa(JSON.stringify({
          userName: this.userInfo.userName,
          units: units,
          note: this.observationFormControl.value,
          HBL: this.lastSearch
        })),
        privilege: "CS_CTA_DESBL"
      }));

    } else {
      const units = this.dataSource
      .filter((value) => value.selected)
      .map((value) => value.unitNbr)
      .toString();

      const submitData: ILockDTO = {
        "name": null,
        "action": null,
        "id": units,
        "type": null,
        "note": this.observationFormControl.value,
        "service": null
      };

      if(this.routeData.lock) this.store.dispatch(setLockUnit({
        body: this._AESEncryptionUtilService.encrypt(JSON.stringify(submitData)),
        hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_CTA_BLOQ")[0].notificable,
        notificationData: btoa(JSON.stringify({
          userName: this.userInfo.userName,
          units: units,
          note: this.observationFormControl.value,
          BL: this.lastSearch
        })),
        privilege: "CC_CTA_BLOQ"
      }));
      else this.store.dispatch(setUnlockUnit({
        body: this._AESEncryptionUtilService.encrypt(JSON.stringify(submitData)),
        hasNotification: this.userInfo.privileges.filter(value => value.privilegeId === "CC_CTA_DESBL")[0].notificable,
        notificationData: btoa(JSON.stringify({
          userName: this.userInfo.userName,
          units: units,
          note: this.observationFormControl.value,
          BL: this.lastSearch
        })),
        privilege: "CC_CTA_DESBL"
      }))
    }

    this.back();
  }

  public back(): void {
    if(this.routeData.detached) {
      this.store.dispatch(cleanDetachedLoad());
      this.router.navigate(["/", this.location.path().split("/")[1]]);
      this.store.dispatch(getDetachedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch) }));
    } else {
      this.store.dispatch(cleanContainerizedLoad());
      this.router.navigate(["/", this.location.path().split("/")[1]]);
      this.store.dispatch(getContainerizedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch) }));
    }
  }
}
