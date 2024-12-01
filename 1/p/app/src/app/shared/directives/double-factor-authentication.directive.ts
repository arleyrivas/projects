import { Directive, HostListener, OnInit, Input, OnDestroy } from '@angular/core';
import { DoubleFactorAuthComponent } from '../components/double-factor-auth/double-factor-auth.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { UtilService } from '../services/util.service';
import { Store } from '@ngrx/store';
import { getSecondPassword, getSecondPasswordValidation, getValidateHourRestriction, setSecondPassword, setSecondPasswordValidation, setValidateHourRestriction } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

interface IDoubleFactorResponse {
  action: string;
  data: string;
}

@Directive({
  selector: '[appDoubleFactorAuthentication]'
})
export class DoubleFactorAuthenticationDirective implements OnInit, OnDestroy {
  @Input("appDoubleFactorAuthentication") public privilege!: string;
  @Input("appDoubleFactorAPIGateway") public apiGateway!: IAPIGatewayStore;
  @Input("doubleFactorDestination") public destination: string = "";
  @Input("doubleFactorCallback") public callback: () => void = () => {};
  @Input("doubleFactorIncorrectCallback") public incorrectCallback: () => void = () => {};

  public sharedHourRestrictionSubscription: Subscription = new Subscription();
  public sharedSubscription: Subscription = new Subscription();

  constructor(
    private readonly matDialog: MatDialog,
    private readonly matSnackbar: MatSnackBar,
    private readonly utilService: UtilService,
    private readonly store: Store,
    private readonly router: Router
  ) { }

  @HostListener("click")
  public click(): void {
    const hasDoubleFactor = this.apiGateway.privileges.filter(value => value.privilegeId === this.privilege)[0].dobleFactorAutenticacion;
    
    if(hasDoubleFactor) {
      this.store.dispatch(getSecondPassword({ body: { privilegeId: this.privilege, username: this.apiGateway.userName } }))
    } else {
      this.callback();
    }

    this.sharedSubscription = this.store.select(sharedFeatureSelector).subscribe({
      next: (sharedStore: ISharedStore) => {
        if(hasDoubleFactor) {
          if(sharedStore.secondPasswordValidation) {
            if(sharedStore.secondPasswordValidation.success) {
              const informationDialog = this.matDialog.open(DoubleFactorAuthComponent, {
                width: "45.313rem",
                data: {
                  destination: sharedStore.secondPassword?.result,
                  type: "information"
                },
                disableClose: true
              });

              informationDialog.afterClosed().subscribe({
                next: () => {
                  this.callback();
                  this.store.dispatch(setSecondPasswordValidation({ response: null }));
                },
                error: error => console.error(error)
              });
            } else {
              this.matDialog.open(DoubleFactorAuthComponent, {
                width: "45.313rem",
                data: {
                  destination: this.destination,
                  type: "error",
                  error: sharedStore.secondPasswordValidation.message
                },
                disableClose: true
              });

              if(this.incorrectCallback) this.incorrectCallback();

              this.store.dispatch(setSecondPassword({ response: null }));
            }
          }

          if(sharedStore.secondPassword) {
            if(sharedStore.secondPassword.success) {
              const doubleFactorDialog = this.matDialog.open(DoubleFactorAuthComponent, {
                width: "45.313rem",
                data: {
                  destination: sharedStore.secondPassword.result,
                  type: "standard"
                },
                disableClose: true
              });

              doubleFactorDialog.afterClosed().subscribe({
                next: (value: IDoubleFactorResponse) => {

                  switch(value.action) {
                    case "generate":
                      this.store.dispatch(getSecondPassword({ body: { privilegeId: this.privilege, username: this.apiGateway.userName } }));
                    break;

                    case "validate":

                    this.store.dispatch(getSecondPasswordValidation({
                      body: {
                        action: this.privilege,
                        token: value.data,
                        user: this.apiGateway.userName
                      }
                      }));

                    break;

                    case "cancel":
                      this.matSnackbar.open("Proceso Cancelado", "", {
                        verticalPosition: "top",
                        panelClass: ["error-snackbar"],
                        duration: 5000
                      });

                      if(this.incorrectCallback) this.incorrectCallback();

                      this.store.dispatch(setSecondPassword({ response: null }));
                    break;
                  }
                },
                error: error => console.error(error)
              });
            } else {
              this.matDialog.open(DoubleFactorAuthComponent, {
                width: "45.313rem",
                data: {
                  destination: this.destination,
                  type: "error",
                  error: sharedStore.secondPassword.error
                },
                disableClose: true
              });

              if(this.incorrectCallback) this.incorrectCallback();

              this.store.dispatch(setSecondPassword({ response: null }));
            }
          }
        }
      },
      error: error => console.error(error)
    });
  }

  public goToModule(module: string): void {
    this.router.navigate(["/", module]).then(() => {
      const currentRoute = this.router.url;

      this.router.navigateByUrl("/", { skipLocationChange: true }).then(() =>
      this.router.navigate([currentRoute])
    );
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.sharedSubscription.unsubscribe();
  }
}
