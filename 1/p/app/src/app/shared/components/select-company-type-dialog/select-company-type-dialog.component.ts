import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ICompanyTypePrivilegesDTO } from 'src/app/core/dto/company-type-privileges.dto';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { ICompanyType } from 'src/app/core/interfaces/company-type.interface';
import { ICompany } from 'src/app/core/interfaces/company.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { getSwitchUser } from 'src/app/state/shared/shared.actions';
import { logout } from 'src/app/state/user/user.actions';

@Component({
  selector: 'app-select-company-type-dialog',
  templateUrl: './select-company-type-dialog.component.html',
  styleUrls: ['./select-company-type-dialog.component.css']
})
export class SelectCompanyTypeDialogComponent implements OnInit, OnDestroy {

  public userSubscription: Subscription = new Subscription();
  public companyTypeFormControl: FormControl = new FormControl();
  public companyFormControl: FormControl = new FormControl();
  public companyId: string = "";
  public companyName: string = "";
  public companyTypes!: ICompanyType[];
  // public companies: ICompany[] = companyMockup;

  constructor(
    private readonly matDialogRef: MatDialogRef<SelectCompanyTypeDialogComponent>,
    private readonly matSnackBar: MatSnackBar,
    private readonly store: Store
    ) { }

  ngOnInit(): void {
    this.userSubscription = this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (apiGatewayStore: IAPIGatewayStore) => {
        if(apiGatewayStore.empresa) {
          this.companyId = apiGatewayStore.empresa.id;
          this.companyName = apiGatewayStore.empresa.companyName;
          this.companyTypes = apiGatewayStore.empresa.tiposEmpresas;
        }
      },
      error: error => console.error(error)
    });
    this.companyTypeFormControl = new FormControl("", [Validators.required]);
    this.companyFormControl = new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  public get companyTypeFormControlValue(): string {
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
    if(!this.companyTypeFormControlValue) {
      this.matSnackBar.open("Debe seleccionar el tipo de empresa como desea iniciar sesión", "",
            {
              verticalPosition: "top",
              duration: 3000,
              panelClass: ["error-snackbar"]
            }
          );
    } else {
      this.store.dispatch(getSwitchUser({ companyId: this.companyId, companyName: this.companyName, companyType: this.companyTypeFormControlValue, companyTypeName: null}));
      this.matDialogRef.close(true);
    }
  }
}
