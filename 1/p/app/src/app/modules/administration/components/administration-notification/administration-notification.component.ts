import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { IAdministrationNotification } from 'src/app/core/interfaces/administration-notification.interface';
import { getPrivilegesNotifiableCompany, removePrivilegesNotificableCompany, selectPrivilegesNotificableCompany } from 'src/app/state/administration/administration.actions';
import { administrationFeatureSelector } from 'src/app/state/administration/administration.selector';
import { privileges } from "../../../../core/privileges.enum";
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-administration-notification',
  templateUrl: './administration-notification.component.html',
  styleUrls: ['./administration-notification.component.css']
})
export class AdministrationNotificationComponent implements OnInit {
  @ViewChild(MatSort) public sort!: MatSort;
  public privileges: typeof privileges = privileges;

  public dataSource: MatTableDataSource<IAdministrationNotification> = new MatTableDataSource<IAdministrationNotification>([]);
  public displayedColumns: string[] = ["action", "description", "state", "select"];
  public destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.router.navigate(['/', 'administracion', 'notification']);
    this.store.dispatch(getPrivilegesNotifiableCompany());

    this.store.select(administrationFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: store => {
        this.dataSource = new MatTableDataSource<IAdministrationNotification>(store.notifications);
        this.dataSource.sort = this.sort;
      },
      error: error => console.error(error)
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public matCheckboxChange(checked: boolean, notification: IAdministrationNotification): void {
    if(checked) this.store.dispatch(selectPrivilegesNotificableCompany({ notification }));
    else this.store.dispatch(removePrivilegesNotificableCompany({ privilegeName: notification.privilegeName }));
  }
}
