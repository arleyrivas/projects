import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { getUserWithUsernameAndEmail } from 'src/app/state/administration/administration.actions';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-administration-profile',
  templateUrl: './administration-profile.component.html',
  styleUrls: ['./administration-profile.component.css']
})
export class AdministrationProfileComponent implements OnInit {
  public dataSource: MatTableDataSource<IAPIGatewayStore> = new MatTableDataSource<IAPIGatewayStore>([]);
  public displayedColumns: string[] = ["userName", "nombres", "information"];
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
      next: store => {
        this.dataSource = new MatTableDataSource<IAPIGatewayStore>([store]);
      },
      error: error => console.error(error)
    });
  }

  public selectUser(element: IAPIGatewayStore): void {
    this.store.dispatch(getUserWithUsernameAndEmail({ user: element.userName, email: null }));
  }

  public submit(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
