import { Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { IAdministrationUser } from 'src/app/core/interfaces/administration-user.interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { getCompanyUsers, getUserWithUsernameAndEmail } from 'src/app/state/administration/administration.actions';
import { administrationFeatureSelector } from 'src/app/state/administration/administration.selector';
import { privileges } from "../../../../core/privileges.enum";
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-administration-users',
  templateUrl: './administration-users.component.html',
  styleUrls: ['./administration-users.component.css']
})
export class AdministrationUsersComponent {

  public privileges: typeof privileges = privileges;
  @ViewChild(MatSort) public sort!: MatSort;
  @Input("route") public route: string = "";
  public userInfo!: IAPIGatewayStore;

  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  public displayedColumns: string[] = ["userId", "name", "information"];
  public destroy$: Subject<void> = new Subject<void>();


  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.router.navigate(['/', 'administracion']);

    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });

    this.store.dispatch(getCompanyUsers());

    this.store.select(administrationFeatureSelector).subscribe({
      next: store => {
        this.dataSource = new MatTableDataSource<any>(store.users);
        this.dataSource.sort = this.sort;
      },
      error: error => console.error(error)
    });
  }

  public createUser(): void {
    this.router.navigate(['/', 'administracion', 'user']);
  }

  public selectUser(element: IAdministrationUser): void {
    this.store.dispatch(getUserWithUsernameAndEmail({ user: element.userId, email: element.email }));
  }

  public submit(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
