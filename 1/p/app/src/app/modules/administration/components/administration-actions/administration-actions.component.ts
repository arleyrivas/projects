import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { IAdministrationActions } from 'src/app/core/interfaces/administration-actions.interface';
import { getActionPrivilege, getActionPrivileges, setPrivilegeName } from 'src/app/state/administration/administration.actions';
import { administrationFeatureSelector } from 'src/app/state/administration/administration.selector';
import { privileges } from "../../../../core/privileges.enum";
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-administration-actions',
  templateUrl: './administration-actions.component.html',
  styleUrls: ['./administration-actions.component.css']
})
export class AdministrationActionsComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) public sort!: MatSort;
  public privileges: typeof privileges = privileges;

  public dataSource: MatTableDataSource<IAdministrationActions> = new MatTableDataSource<IAdministrationActions>([]);
  public displayedColumns: string[] = ["accion", "descripcion", "configurate"];
  public actions: IAdministrationActions[] = [];
  public subscription: Subscription = new Subscription();
  public descripcion!: string;
  public userInfo!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.router.navigate(['/', 'administracion']);
    this.store.dispatch(getActionPrivileges());

    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });

    this.subscription = this.store.select(administrationFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: store => {
        this.dataSource = new MatTableDataSource<IAdministrationActions>(store.actions);
        this.dataSource.sort = this.sort;
        this.actions = store.actions;
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public filter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public configure(element: IAdministrationActions): void {
    this.router.navigate(['/', 'administracion', 'actions', 'hours']);
    this.store.dispatch(setPrivilegeName({ privilege: element }));
    this.store.dispatch(getActionPrivilege({ privilege: element.nombre }));
  }
}
