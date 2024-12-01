import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { administrationFeatureSelector } from 'src/app/state/administration/administration.selector';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { IAdministrationNotification } from 'src/app/core/interfaces/administration-notification.interface';
import { IAdministrationNotificationPrivilegeDTO } from 'src/app/core/dto/administration-notification-privilege.dto';
import { clearPrivilegesNotificableCompany, getPrivilegesNotifiableCompany, updatePrivilegesNotifiableCompany } from 'src/app/state/administration/administration.actions';
import { privileges } from "../../../../core/privileges.enum";
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';

@Component({
  selector: 'app-administration-notification-selected',
  templateUrl: './administration-notification-selected.component.html',
  styleUrls: ['./administration-notification-selected.component.css']
})
export class AdministrationNotificationSelectedComponent implements OnInit {

  public privileges: typeof privileges = privileges;

  public user!: IAPIGatewayStore;
  public notifications: IAdministrationNotification[] = [];
  public selectedNotifications: IAdministrationNotification[] = [];
  public dataSource: MatTableDataSource<IAdministrationNotification> = new MatTableDataSource<IAdministrationNotification>();
  public displayedColumns: string[] = [];
  public destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.store.select(apiGatewayFeatureSelector),
      this.store.select(administrationFeatureSelector)
    ]).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: result => {
        this.user = result[0];
        this.notifications = result[1].notifications;
        this.selectedNotifications = result[1].selectedNotifications;

        this.displayedColumns = ["action", "description", "select"];
        this.dataSource = new MatTableDataSource<IAdministrationNotification>(this.selectedNotifications);
      },
      error: error => console.error(error)
    });
  }

  public submit(): void {
    let notifications = this.notifications.filter(value => value.activo);

    let selectedNotificationActive = this.selectedNotifications.filter(value => value.activo);
    let selectedNotificationInactive = this.selectedNotifications.filter(value => !value.activo);

    const filterPrivilegesActives: string[] = selectedNotificationActive.map(value => value.privilegeName);
    const filterPrivilegesInactives: string[] = selectedNotificationInactive.map(value => value.privilegeName);

    notifications = notifications.filter(value => !filterPrivilegesInactives.includes(value.privilegeName));
    notifications = notifications.filter(value => !filterPrivilegesActives.includes(value.privilegeName));

    const payload: IAdministrationNotificationPrivilegeDTO = {
      companyId: (this.user.empresa?.id as string),
      privilegios: [...notifications.map(value => value.privilegeName), ...filterPrivilegesActives]
    }

    this.store.dispatch(updatePrivilegesNotifiableCompany({ payload }));
    this.store.dispatch(getPrivilegesNotifiableCompany());
    this.store.dispatch(clearPrivilegesNotificableCompany());
  }

  public matCheckboxChange(checked: boolean, privilege: string): void {
    let newData: IAdministrationNotification[] = [...this.selectedNotifications];

    newData = newData.map(value => {
        const newValue: IAdministrationNotification = Object.assign({}, value);

        if(newValue.privilegeName === privilege) newValue.activo = checked;

        return newValue;
    });

    this.selectedNotifications = newData;
    this.dataSource = new MatTableDataSource<IAdministrationNotification>(this.selectedNotifications);
  }

  public cancel(): void {
    this.router.navigate(['/', 'administracion', 'notification']);
    this.store.dispatch(clearPrivilegesNotificableCompany());
  }
}
