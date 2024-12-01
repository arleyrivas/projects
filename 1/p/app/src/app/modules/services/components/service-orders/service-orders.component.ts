import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IServiceTypeInfo } from '../../interfaces/service-type-info.interface';
import { ServiceOrdersService } from '../../services/service-orders.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { IVoidDestinationContainerSelected } from '../../interfaces/void-destination-container-selected.interface';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { IServiceAutorityType } from '../../interfaces/service-autority-type.interface';
import { Router } from '@angular/router';
import { IServiceType } from '../../interfaces/service-type.interface';
import { IRestResult } from 'src/app/core/interfaces/rest-result.interface';
import { Store } from '@ngrx/store';
import { addUnit, changeVoidDestinationUnit, cleanContainers, cleanDesignatedOfficial, cleanSaveServiceOrder, cleanSearchedCriteria, cleanServiceAutorityType, cleanServiceOrderInfo, cleanUnit, getSaveServiceOrder, getServiceAutorityType, getServiceOrderInfo, getServiceType, removeUnit, setSearchedCriteria } from 'src/app/state/service-order/service-order.actions';
import { servicesOrderFeatureSelector } from 'src/app/state/service-order/service-order.selectors';
import { IServiceOrderStore } from '../../interfaces/service-order-store.interface';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { cleanServicesImo, setSelectedBl, setServicesBl } from 'src/app/state/services/services.actions';
import { setCustomer } from 'src/app/state/shared/shared.actions';

@Component({
  selector: 'app-service-orders',
  templateUrl: './service-orders.component.html',
  styleUrls: ['./service-orders.component.css']
})
export class ServiceOrdersComponent implements OnInit, OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();
  public serviceTypes: IServiceType[] = [];
  public serviceTypeInfo: IServiceTypeInfo[] = [];
  public serviceTypeVoidDestinations: string[] = [];
  public serviceTypeCriteria: string | null = "";
  public searchedCriteria: string | null = null;
  public selectedContainers: IVoidDestinationContainerSelected[] = [];
  public selectedContainersLocal: IVoidDestinationContainerSelected[] = [];
  public autorityTypes: IServiceAutorityType[] = [];
  public serviceTypesFormControl: FormControl = new FormControl();
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<IServiceTypeInfo> = new MatTableDataSource<IServiceTypeInfo>([]);
  public cleanSearch: () => void  = () => {};

  constructor(
    private readonly store: Store,
    private readonly serviceOrdersService: ServiceOrdersService,
    private readonly router: Router,
    private readonly matSnackBar: MatSnackBar,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(setServicesBl({ searchedBl: null }));
    this.store.dispatch(setSelectedBl({ bl: null }));
    this.store.dispatch(cleanServicesImo());
    this.store.dispatch(setCustomer({ customer: [] }));
    this.router.navigate(['/', 'servicios']);

    this.store.dispatch(cleanUnit());
    this.store.dispatch(getServiceType());

    this.store.select(servicesOrderFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (servicesOrderStore: IServiceOrderStore) => {
        this.serviceTypes = servicesOrderStore.serviceTypes;
        if(servicesOrderStore.autorityTypes) this.autorityTypes = servicesOrderStore.autorityTypes?.authorityTypes;
        this.selectedContainers = servicesOrderStore.selectedContainers;

         if(this.serviceTypesFormControl.value && servicesOrderStore.selectedContainers.length) {
          let voidDestinationSelected: number = 0;

          servicesOrderStore.selectedContainers.forEach(value => {
            if(value.voidDestination === null) voidDestinationSelected = voidDestinationSelected + 1;
          });

          if(!voidDestinationSelected) {
            if(
              this.serviceTypesFormControl.value.service === "DESCONSOLIDADO" ||
              this.serviceTypesFormControl.value.service === "VACIADO"
            ) {
              this.selectedContainersLocal = [];

              if(servicesOrderStore.saveResult.length) {
                this.router.navigate(['/', 'servicios', 'resume']);
                this.store.dispatch(cleanUnit());
              } else {
                this.router.navigate(['/', 'servicios', 'create']);
              }
            }
          } else {
            if(
              this.serviceTypesFormControl.value.service === "DESCONSOLIDADO" ||
              this.serviceTypesFormControl.value.service === "VACIADO"
            ) {
                this.router.navigate(['/', 'servicios']);
            }
          }
         }

        if(servicesOrderStore.serviceTypeInfo) this.serviceTypeInfo = servicesOrderStore.serviceTypeInfo;

        if(this.serviceTypeInfo.length) {
          this.displayedColumns = ["selected", "idContainer", "inches", "emptyDestination"];
          this.dataSource = new MatTableDataSource<IServiceTypeInfo>(this.serviceTypeInfo.filter(value => value.Active === 1));
        }
      },
      error: error => console.error(error)
    });

    this.serviceTypeVoidDestinations = ["Free Pool", "Alistamiento (Taller)", "Retiro"];

    this.serviceTypesFormControl = new FormControl({ value: "", disabled: false }, [Validators.required]);
    this.serviceTypesFormControl.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value: string) => {
        this.searchedCriteria = null;

        this.store.dispatch(cleanSaveServiceOrder());
        this.store.dispatch(cleanDesignatedOfficial());
        this.store.dispatch(cleanContainers());
        this.store.dispatch(cleanServiceAutorityType());
        this.store.dispatch(cleanSearchedCriteria());
        this.store.dispatch(cleanServiceOrderInfo());
        this.store.dispatch(cleanUnit());
        this.cleanSearch();

        this.router.navigate(['/', 'servicios']);
      },
      error: (error) => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public search(criteria: string) {
    if(this.serviceTypesFormControl.valid) {
      this.searchedCriteria = criteria;
      this.router.navigate(['/', 'servicios']);

      this.store.dispatch(cleanSaveServiceOrder());
      this.store.dispatch(cleanDesignatedOfficial());
      this.store.dispatch(cleanContainers());
      this.store.dispatch(cleanServiceAutorityType());
      this.store.dispatch(cleanSearchedCriteria());
      this.store.dispatch(cleanServiceOrderInfo());
      this.store.dispatch(cleanUnit());

      this.store.dispatch(setSearchedCriteria({ criteria }))

      this.store.dispatch(getServiceOrderInfo({
        criteria: this.base64EncryptionUtilService.encrypt(criteria),
        serviceType: this.getServiceTypesFormControlValue.service
      }));

    } else {
      this.matSnackBar.open("Campo \"Tipo de Servicio\" requerido", "", {
        verticalPosition: "top",
        duration: 5000,
        panelClass: ["error-snackbar"]
      });
    }
  }

  public cleanSearchFormControl(event: () => void): void {
    this.cleanSearch = event;
  }

  public containerMatCheckboxChange(event: MatCheckboxChange, serviceTypeInfo: IServiceTypeInfo, selectFormControl: FormControl): void {
    if(event.checked) {
      this.store.dispatch(addUnit({
        unit: {
          serviceOrder: this.serviceTypesFormControl.value.service,
          voidDestination: null,
          serviceTypeInfo
        }
      }));

      if(
        this.serviceTypesFormControl.value.service != "DESCONSOLIDADO" &&
        this.serviceTypesFormControl.value.service != "VACIADO"
      ) {
        this.router.navigate(['/', 'servicios', 'create']);
      }

      selectFormControl.enable();
    } else {
      this.store.dispatch(removeUnit({
        unit: {
          serviceOrder: this.serviceTypesFormControl.value.service,
          voidDestination: null,
          serviceTypeInfo
        }
      }));

      selectFormControl.reset();
      selectFormControl.disable();

      if(this.selectedContainers.length < 1) this.router.navigate(['/', 'servicios']);
    }
  }

  public serviceTypeVoidDestinationChange(eventValue: string | null, serviceTypeInfo: IServiceTypeInfo): void {
    this.store.dispatch(changeVoidDestinationUnit({ eventValue, serviceTypeInfo }));

  /*   if(
      this.serviceTypesFormControl.value.service === "DESCONSOLIDADO" ||
      this.serviceTypesFormControl.value.service === "VACIADO"
    ) {
      this.selectedContainersLocal = [];
      this.router.navigate(['/', 'servicios', 'create']);
    } */
  }

  public clean(): void {
    this.searchedCriteria = null;
    this.store.dispatch(cleanSaveServiceOrder());
    this.store.dispatch(cleanDesignatedOfficial());
    this.store.dispatch(cleanContainers());
    this.store.dispatch(cleanServiceAutorityType());
    this.store.dispatch(cleanSearchedCriteria());
    this.store.dispatch(cleanServiceOrderInfo());
    this.store.dispatch(cleanUnit());
    this.serviceTypesFormControl.reset();
  }

  public get getServiceTypesFormControlValue(): IServiceType {
    return this.serviceTypesFormControl.value;
  }

  public getServiceCriteriaTitle(criteriaType: string): string | null {
    return this.serviceOrdersService.getServiceCriteriaTitle(criteriaType);
  }

  public getUnitServiceState(serviceTypeInfo: IServiceTypeInfo[], criteria: number): number {
    return this.serviceOrdersService.getUnitServiceState(serviceTypeInfo, criteria);
  }

  public getServiceCheckboxFormGroup(): FormControl {
    return this.serviceOrdersService.getServiceCheckboxFormGroup();
  }

  public getServiceVoidDestinationFormGroup(): FormControl {
    return this.serviceOrdersService.getServiceVoidDestinationFormGroup();
  }
}
