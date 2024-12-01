import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICSGeneratePinResult, IGeneratePinResult, IGeneratePinUnit, pinsResultMockup } from '../generate-pin/generate-pin-mockup.component';
import { Store } from '@ngrx/store';
import { detachedLoadFeatureSelector } from 'src/app/state/detached-load/detached-load.selectors';
import { Subject, takeUntil } from 'rxjs';
import { IDetachedLoadStore } from 'src/app/core/interfaces/detached-load-store.interface';
import { ITruckPin } from 'src/app/core/interfaces/truck-pin.interface';
import { Router } from '@angular/router';
import { cleanGeneratePin, getDetachedLoad } from 'src/app/state/detached-load/detached-load.actions';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';

@Component({
  selector: 'app-generate-pin-display',
  templateUrl: './generate-pin-display.component.html',
  styleUrls: ['./generate-pin-display.component.css']
})
export class GeneratePinDisplayComponent implements OnInit, OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();
  public pins!: ICSGeneratePinResult;
  public lastSearch!: string;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
  ) {}

  ngOnInit(): void {
    this.store.select(detachedLoadFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IDetachedLoadStore) => {
        if(result.lastSearch) this.lastSearch = result.lastSearch;

        if(result.truckResult.length) {
          this.pins = {
            nbr: result.truckResult[0].blNbr,
            pin: result.truckResult[0].pinNbr,
            units: result.truckResult[0].pinContainerized.map((value) => ({
              quantity: value.cargoQuantity as number,
              weight: value.cargoWeigth as number,
              destination: value.destination || "Sin Destino",
              shipper: `${value.truckVisitAppointmetId}/${value.truckingCompanyNameLDAP}`,
              active: value.active
            })),
            createdAt: result.truckResult[0].createdAt
          };
        }

        this.destroy$.next();
        this.destroy$.complete();
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    this.store.dispatch(cleanGeneratePin());
    this.store.dispatch(getDetachedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch) }));
  }

  public continue(): void {
    this.router.navigate(["/", "carga-suelta"]);
  }
}
