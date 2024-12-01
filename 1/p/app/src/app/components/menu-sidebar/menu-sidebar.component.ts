import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BnNgIdleService } from 'bn-ng-idle';
import { Observable, Subject, combineLatest, mergeMap, of, takeUntil } from 'rxjs';
import { logout } from 'src/app/state/user/user.actions';
import { privileges } from "../../core/privileges.enum";
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { HttpClient } from '@angular/common/http';
import { RoleService } from 'src/app/core/auth/services/role.service';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SelectCompanyTypeDialogComponent } from 'src/app/shared/components/select-company-type-dialog/select-company-type-dialog.component';
import { getBackToInitialUser, getCustomer, getIdleTimeout, getImpersonalizated, setImpersonalizated, setImpersonated } from 'src/app/state/shared/shared.actions';
import { LegalNoticesDialogComponent } from 'src/app/shared/components/legal-notices-dialog/legal-notices-dialog.component';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { UtilService } from 'src/app/shared/services/util.service';
import { SelectCompanyTypeMempDialogComponent } from 'src/app/shared/components/select-company-type-memp-dialog/select-company-type-memp-dialog.component';
import { IImpersonalizated } from 'src/app/core/interfaces/impersonalizated-dto.interface';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.css']
})
export class MenuSidebarComponent implements OnInit {
  public user: Observable<IAPIGatewayStore> = new Observable<IAPIGatewayStore>();
  public shared: Observable<ISharedStore> = new Observable<ISharedStore>();
  public privileges: typeof privileges = privileges;
  public cookieValue: any;
  public companyTypeControl: FormControl = new FormControl();
  public destroy$: Subject<void> = new Subject<void>();
  public sharedDestroy$: Subject<void> = new Subject<void>();
  public impersonated: boolean = false;
  public isMemp: boolean = false;
  public impersonalizated: Observable<IImpersonalizated | null> = new Observable<IImpersonalizated | null>();

  constructor(
    private readonly store: Store,
    private readonly bnNgIdleService: BnNgIdleService,
    private router: Router,
    private readonly httpClient: HttpClient,
    private readonly roleService: RoleService,
    private readonly utilService: UtilService,
    private readonly matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getIdleTimeout());

    this.companyTypeControl = new FormControl();
    this.user = this.store.select(apiGatewayFeatureSelector);
    this.shared = this.store.select(sharedFeatureSelector)
    this.impersonalizated = this.store.select(sharedFeatureSelector).pipe(
      mergeMap((sharedStore: ISharedStore) => {
        return of(sharedStore.Impersonalizated);
      })
    );

    this.store.dispatch(setImpersonated({ impersonated: true }));
    this.store.dispatch(getImpersonalizated());

    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.sharedDestroy$)
    ).subscribe({
      next: (result: ISharedStore) => {
        if(result.idleTimeout) {
          this.bnNgIdleService.startWatching(parseInt(result.idleTimeout)).subscribe({
            next: (isTimeout: boolean) => {
              if(isTimeout) location.href = "/portal/logout";
            },
            error: error => console.error(error)
          });

          this.sharedDestroy$.next();
          this.sharedDestroy$.complete();
        }
      },
      error: error => console.error(error)
    });

    this.cookieValue = this.getCookie('XSRF-TOKEN');

    const interval = setInterval(() => {
      const newValue = this.getCookie('XSRF-TOKEN');

      if (newValue !== this.cookieValue) {
        location.href = "/portal/logout";

        clearInterval(interval);
      }
    }, 1000);


    combineLatest([
      this.user,
      this.shared
    ]).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (stores) => {
        this.impersonated = stores[1].impersonated;

        if(stores[1].impersonated) {
          if(stores[0].empresa) {
            this.isMemp = !!stores[0].privileges.filter((privilege) => privilege.privilegeId === "M_EMP").length;

              if(this.isMemp) {
              const companyTypeDialog = this.matDialog.open(SelectCompanyTypeMempDialogComponent, {
                width: "40rem",
                disableClose: true
              });

              companyTypeDialog.afterClosed().subscribe({
                next: (next: boolean) => {
                  if(next) this.matDialog.open(LegalNoticesDialogComponent, { disableClose: true });
                },
                error: error => console.error(error)
              });
            } else if(stores[0].empresa.tiposEmpresas.length > 1) {
              const companyTypeDialog = this.matDialog.open(SelectCompanyTypeDialogComponent, {
                width: "40rem",
                disableClose: true
              });

              companyTypeDialog.afterClosed().subscribe({
                next: (next: boolean) => {
                  if(next) this.matDialog.open(LegalNoticesDialogComponent, { disableClose: true });
                },
                error: error => console.error(error)
              });
            } else {
              this.matDialog.open(LegalNoticesDialogComponent, { disableClose: true });
            }

            this.destroy$.next();
            this.destroy$.complete();
          }
        }
      },
      error: error => console.error(error)
    });
  }

  public backToInitialUser(): void {
    this.router.navigate(['/']);
    this.store.dispatch(getBackToInitialUser({ isMemp: this.isMemp }));
  }

  public goToModule(module: string): void {
    this.router.navigate(["/", module]).then(() => {
      const currentRoute = this.router.url;

      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() =>
      this.router.navigate([currentRoute])
    );
    });
  }

  public getCookie(value: string): string {
    return document.cookie.split(";").filter(item => {
      const splittedToken = item.split("=");

      if(splittedToken[0].trim() === value) return true;
      return false;
    })[0].split("=")[1];
  }

  public logout(): void {
    this.store.dispatch(logout());
  }
}
