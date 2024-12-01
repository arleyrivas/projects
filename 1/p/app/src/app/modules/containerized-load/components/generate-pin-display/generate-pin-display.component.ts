import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IGeneratePinResult, IGeneratePinUnit, pinsResultMockup } from '../generate-pin/generate-pin-mockup.component';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { ITruckPin } from 'src/app/core/interfaces/truck-pin.interface';
import { cleanGeneratePin, getContainerizedLoad, setOperationStuck } from 'src/app/state/containerized-load/containerized-load.actions';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-pin-display',
  templateUrl: './generate-pin-display.component.html',
  styleUrls: ['./generate-pin-display.component.css']
})
export class GeneratePinDisplayComponent implements OnInit, OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();
  @Input() public pins!: IGeneratePinResult[];
  public blNumber: string = "";
  public lastSearch: string | null = "";

  constructor(
    private readonly store: Store,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.store.select(containerizedLoadFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IContainerizedLoadStore) => {
        this.blNumber = result.truckResult[0].blNbr;
        this.lastSearch = result.lastSearch;

        this.pins = result.truckResult.map((value: ITruckPin) => ({
          pin: value.pinNbr,
          units: value.pinContainerized.map((pinValue) => ({
            id: pinValue.id,
            unit: pinValue.unitNbr,
            size: pinValue.twenty ? "20" : "40",
            shipper: pinValue.truckingCompanyNameLDAP,
            active: pinValue.active
          }))
        }));

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
    this.store.dispatch(getContainerizedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch as string) }));
    this.store.dispatch(setOperationStuck({ operationStuck: false }));
  }

  public continue(): void {
    this.router.navigate(["/", "carga-contenerizada"]);
  }
}
