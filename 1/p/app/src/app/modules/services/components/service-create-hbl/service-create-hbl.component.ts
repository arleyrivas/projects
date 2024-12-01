import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IServiceBlHbl } from 'src/app/core/dto/service-bl-hbl.dto';
import { IServicesStore } from 'src/app/core/interfaces/services-store.interface';
import { privileges } from 'src/app/core/privileges.enum';
import { cleanContainers, cleanDesignatedOfficial, cleanSaveServiceOrder, cleanSearchedCriteria, cleanServiceAutorityType, cleanServiceOrderInfo, cleanUnit } from 'src/app/state/service-order/service-order.actions';
import { cleanServicesImo, getServicesBl, setSelectedBl, setServicesBl } from 'src/app/state/services/services.actions';
import { servicesFeatureSelector } from 'src/app/state/services/services.selector';
import { setCustomer } from 'src/app/state/shared/shared.actions';

interface IServiceHBL {
  bLNbr: string;
  nbr: string;
  cantidad: string;
  peso: string;
  agente: string;
  lineOp: string;
  visit: string;
  estado: string;
}

interface IServiceCreateHBL {
  cantActive: number;
  cantInactive: number;
  actives: string[];
  inactives: string[];
  vesselVisit: string;
  lineOperator: string;
  hbls: IServiceHBL[];
}

@Component({
  selector: 'app-service-create-hbl',
  templateUrl: './service-create-hbl.component.html',
  styleUrls: ['./service-create-hbl.component.css']
})
export class ServiceCreateHblComponent {
  @ViewChild(MatSort) public sort!: MatSort;
  public privileges: typeof privileges = privileges;
  public destroy$: Subject<void> = new Subject<void>();
  public serviceCreateHBL: IServiceCreateHBL | null = null;
  public dataSource: MatTableDataSource<IServiceHBL> = new MatTableDataSource<any>([]);
  public displayedColumns: string[] = [];

  constructor(
    private readonly store: Store,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly router: Router,
    private readonly matSnackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(cleanSaveServiceOrder());
    this.store.dispatch(cleanDesignatedOfficial());
    this.store.dispatch(cleanContainers());
    this.store.dispatch(cleanServiceAutorityType());
    this.store.dispatch(cleanSearchedCriteria());
    this.store.dispatch(cleanServiceOrderInfo());
    this.store.dispatch(cleanUnit());
    this.router.navigate(['/', 'servicios']);

    this.store.select(servicesFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (servicesStore: IServicesStore): void => {
        this.serviceCreateHBL = servicesStore.blSearch;
        this.displayedColumns = ["nbr", "cantidad", "peso", "estado"];
        this.dataSource = new MatTableDataSource<IServiceHBL>(servicesStore.blSearch?.hbls);
        this.dataSource.sort = this.sort;
      },
      error: error => console.error(error)
    });

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public search(criteria: string): void {
    this.store.dispatch(getServicesBl({ criteria: criteria }));
    this.store.dispatch(setSelectedBl({ bl: criteria }));
  }

  public clean(): void {
    this.store.dispatch(setServicesBl({ searchedBl: null }));
    this.store.dispatch(setSelectedBl({ bl: null }));
    this.store.dispatch(cleanServicesImo());
    this.store.dispatch(setCustomer({ customer: [] }));
    this.router.navigate(['/', 'servicios']);
  }
}
