import { Directive, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { UtilService } from '../services/util.service';
import { Store } from '@ngrx/store';
import { getValidateHourRestriction, setValidateHourRestriction } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Directive({
  selector: '[hourRestriction]'
})
export class HourRestrictionDirective implements OnInit, OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();
  @Input("hourRestriction") public privilege!: string;
  @Input("hourRestrictionAPIGateway") public apiGateway!: IAPIGatewayStore;
  @Input("hourRestrictionCallback") public callback!: () => void;
  @Input("hourRestrictionIncorrectCallback") public incorrectCallback: () => void = () => {};

  constructor(
    private readonly matSnackbar: MatSnackBar,
    private readonly utilService: UtilService,
    private readonly store: Store
  ) { }

  @HostListener("click")
  public click(): void {
    this.store.dispatch(getValidateHourRestriction({ privilege: this.privilege }));

    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (sharedStore: ISharedStore) => {
        if(sharedStore.hourRestriction) {
          if(sharedStore.hourRestriction === "true") {
              this.store.dispatch(setValidateHourRestriction({ response: {
                error: null,
                result: null,
                success: null
              } }));

              this.callback();

              this.destroy$.next();
              this.destroy$.complete();
          } else if(sharedStore.hourRestriction === "false") {
            if(sharedStore.restrictionMessage) this.matSnackbar.open(sharedStore.restrictionMessage, "", {
              verticalPosition: "top",
              panelClass: ["error-snackbar"],
              duration: 5000
            });

            this.store.dispatch(setValidateHourRestriction({ response: {
              error: null,
              result: null,
              success: null
            } }));

            if(this.incorrectCallback) this.incorrectCallback();

            this.destroy$.next();
            this.destroy$.complete();
          }
        }
      },
      error: error => console.error(error)
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
