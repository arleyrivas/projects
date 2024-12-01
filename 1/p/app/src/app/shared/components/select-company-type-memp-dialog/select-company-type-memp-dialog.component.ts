import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subject, Subscription, combineLatest, debounceTime, mergeMap, of, takeUntil } from 'rxjs';
import { ICompanyType } from 'src/app/core/interfaces/company-type.interface';
import { SelectCompanyTypeDialogComponent } from '../select-company-type-dialog/select-company-type-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { logout } from 'src/app/state/user/user.actions';
import { getCompaniesByTypeAndFilter, getCompanyTypeList, getSwitchUser } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { ICompany } from 'src/app/core/interfaces/company.interface';

@Component({
  selector: 'app-select-company-type-memp-dialog',
  templateUrl: './select-company-type-memp-dialog.component.html',
  styleUrls: ['./select-company-type-memp-dialog.component.css']
})
export class SelectCompanyTypeMempDialogComponent {
  public destroy$: Subject<void> = new Subject<void>();
  public sharedStore: Observable<ICompany[]> = new Observable<ICompany[]>();
  public companyTypeFormControl: FormControl = new FormControl();
  public companyFormControl: FormControl = new FormControl();
  public companyId: string = "";
  public companyName: string = "";
  public companyTypes: ICompanyType[] = [];
  public companies: ICompany[] = [];

  constructor(
    private readonly matDialogRef: MatDialogRef<SelectCompanyTypeDialogComponent>,
    private readonly matSnackBar: MatSnackBar,
    private readonly store: Store
    ) { }

  ngOnInit(): void {
    this.store.dispatch(getCompanyTypeList());

    this.sharedStore = this.store.select(sharedFeatureSelector).pipe(
      mergeMap((store: ISharedStore) => {
        return of(store.companies);
      })
    );

    combineLatest([
      this.store.select(apiGatewayFeatureSelector),
      this.store.select(sharedFeatureSelector)
    ]).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (stores) => {
        if(stores[0].empresa) {
          this.companyId = stores[0].empresa.id;
          this.companyName = stores[0].empresa.companyName;
          this.companyTypes = stores[0].empresa.tiposEmpresas;
        }

        this.companyTypes = stores[1].companyTypes;
        this.companies = stores[1].companies;
      },
      error: error => console.error(error)
    });

    this.companyTypeFormControl = new FormControl("", [Validators.required]);
    this.companyFormControl = new FormControl({ value: "", disabled: true }, [Validators.required, Validators.minLength(5)]);

    this.companyTypeFormControl.valueChanges.subscribe({
      next: (value: string) => {
        if(this.companyTypeFormControl.valid) this.companyFormControl.enable();
        else this.companyFormControl.disable();
      },
      error: error => console.error(error)
    });

    this.companyFormControl.valueChanges.pipe(
      debounceTime(800)
    ).subscribe({
      next: (value: string) => {
        if(value.length > 4) {
          this.store.dispatch(getCompaniesByTypeAndFilter({
            companyType: this.companyTypeFormControlValue.companyTypeId,
            filter: value,
            validate: true
          }));
        }
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public get companyTypeFormControlValue(): ICompanyType {
    return this.companyTypeFormControl.value;
  }

  public get companyFormControlValue(): string {
    return this.companyFormControl.value;
  }

  public logout(): void {
    this.store.dispatch(logout());
    this.matDialogRef.close(false);
  }

  public submit(): void {
    const companyTypeSelected: ICompany = this.companies.filter(value => value.companyName === this.companyFormControlValue)[0];

    if(!companyTypeSelected) {
      this.matSnackBar.open("Empresa ingresada no valida", "",
        {
          verticalPosition: "top",
          duration: 3000,
          panelClass: ["error-snackbar"]
        }
      );
    } else {
      if(!this.companyTypeFormControlValue) {
        this.matSnackBar.open("Debe seleccionar el tipo de empresa como desea iniciar sesión", "",
              {
                verticalPosition: "top",
                duration: 3000,
                panelClass: ["error-snackbar"]
              }
            );
      } else {
        this.store.dispatch(getSwitchUser({ companyId: companyTypeSelected.companyId, companyName: companyTypeSelected.companyName, companyType: this.companyTypeFormControlValue.companyTypeId, companyTypeName: this.companyTypeFormControlValue.companyTypeName }));
        this.matDialogRef.close(true);
      }
    }
  }
}
