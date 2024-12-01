import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { UtilService } from '../services/util.service';
import { Store } from '@ngrx/store';
import { getPrivilegeNotification } from 'src/app/state/shared/shared.actions';

@Directive({
  selector: '[appNotification]'
})
export class NotificationDirective implements OnInit{

  @Input("appNotification") public privilege!: string;
  @Input("NotificationAPIGateway") public apiGateway!: IAPIGatewayStore;
  @Input("NotificationCallback") public callback!: () => void;
  @Input("NotificationData") public notificationData!: any;

  constructor(
    private readonly utilService: UtilService,
    private readonly store: Store
  ) { }

  @HostListener("click")
  public click(): void {
    const hasNotification = this.apiGateway.privileges.filter(value => value.privilegeId === this.privilege)[0].notificable;

    if(hasNotification) {
      this.store.dispatch(getPrivilegeNotification({
        body: {
          companyId: null,
          mailsNotifications: null,
          notificationInfo: this.notificationData,
          privilegeId: this.privilege
        }
      }));
    }

    if(this.callback) this.callback();
  }

  ngOnInit(): void { }
}
