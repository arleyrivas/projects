import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgPlural } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, mergeMap, of, takeUntil } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IServiceImoDTO } from 'src/app/core/dto/service-imo.dto';
import { IServicePackagetypesDTO } from 'src/app/core/dto/service-package-types.dto';
import { IServicesStore } from 'src/app/core/interfaces/services-store.interface';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { cleanServicesImo, getServicesImo, getServicesPackagetypes, getServicesSaveHbl } from 'src/app/state/services/services.actions';
import { servicesFeatureSelector } from 'src/app/state/services/services.selector';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { ServicesConfirmComponent } from '../services-confirm/services-confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { privileges } from 'src/app/core/privileges.enum';
import { Router } from '@angular/router';
import { setCustomer } from 'src/app/state/shared/shared.actions';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-services-create-hbl-form',
  templateUrl: './services-create-hbl-form.component.html',
  styleUrls: ['./services-create-hbl-form.component.css']
})
export class ServicesCreateHblFormComponent implements OnInit, OnDestroy {
  public servicesStore: Observable<IServicePackagetypesDTO[]> = new Observable<IServicePackagetypesDTO[]>();
  public privileges: typeof privileges = privileges;
  public serviceIMOStore: Observable<IServiceImoDTO> = new Observable<IServiceImoDTO>();
  public createHblFormGroup: FormGroup = new FormGroup({});
  public createHblDangerousFormControl: FormControl = new FormControl({});
  public destroy$: Subject<void> = new Subject<void>();
  public containers: string[] = [];
  public selectedContainer: string[] = [];
  public selectedBl: string = "";
  public customerNit: string = "";
  public customerName: string = "";
  public customerSearcherInvalidForm: boolean = true;
  public user!: IAPIGatewayStore;
  customerSearcherControl!: FormControl;
  public customerValid: boolean = true;
  public customerAsignned: boolean = false;

  constructor(
    private readonly store: Store,
    private readonly formBuilder: FormBuilder,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly matDialog: MatDialog,
    private readonly router: Router
    ) {}

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (apiGatewayStore: IAPIGatewayStore) => {
        this.user = apiGatewayStore;
      },
      error: error => console.error(error)
    });

    this.store.dispatch(getServicesPackagetypes());

    this.servicesStore = this.store.select(servicesFeatureSelector).pipe(
      mergeMap((serviceStore: IServicesStore) => {
        return of(serviceStore.packageTypes.filter((packageType: IServicePackagetypesDTO) => packageType.description));
      })
    );

    this.store.select(servicesFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (serviceStore: IServicesStore) => {
        if(serviceStore.imo.length) {
          this.createHblFormGroup.controls['IMOClassification'].setValue(serviceStore.imo[0].imo);
          this.createHblFormGroup.controls['IMOName'].setValue(serviceStore.imo[0].name);
        }

        if(serviceStore.selectedCustomer) this.customerNit = serviceStore.selectedCustomer.split("/")[0];
        if(serviceStore.selectedCustomer) this.customerName = serviceStore.selectedCustomer.split("/")[1];
        if(serviceStore.selectedBl) this.selectedBl = serviceStore.selectedBl;

        if(serviceStore.blSearch) this.containers = serviceStore.blSearch.actives;
      },
      error: (error) => console.error(error)
    });

    this.createHblFormGroup = this.formBuilder.group({
      blChild: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      documentNumber: ["", [Validators.required, Validators.min(11660000000000), Validators.max(116699999999999)]],
      packageType: ["", [Validators.required]],
      quantity: ["", [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.min(0), Validators.max(100001)]],
      weight: ["", [Validators.required, Validators.pattern(/^[+-]?(\d*\.)?\d+$/), Validators.min(0), Validators.max(50000)]],
      numberUN: [{ value: "", disabled: true }, [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      IMOClassification: [{ value: "", disabled: true }, [Validators.required]],
      IMOName: [{ value: "", disabled: true }, [Validators.required]]
    });

    this.createHblDangerousFormControl = this.formBuilder.control(false);

    this.createHblDangerousFormControl.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value: boolean): void => {
        if(value) this.createHblFormGroup.controls['numberUN'].enable();
        else {
          this.clean();
          this.createHblFormGroup.controls['numberUN'].disable();
        }
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public submitNumberUN(): void {
    let sendUn = this.toFourDigits(this.createHblFormGroup.controls['numberUN'].value);

    this.store.dispatch(cleanServicesImo());
    this.createHblFormGroup.controls['IMOClassification'].setValue("");
    this.createHblFormGroup.controls['IMOName'].setValue("");

    this.store.dispatch(getServicesImo({ criteria: this.base64EncryptionUtilService.encrypt(sendUn) }));
  }

  public toFourDigits(number: number): string {
    if (number <= 9) {
      return "000" + number;
    } else if (number <= 99) {
      return "00" + number;
    } else if (number <= 999) {
      return "0" + number;
    } else {
      return number + "";
    }
  }

  public clean(): void {
    this.store.dispatch(cleanServicesImo());
    this.createHblFormGroup.controls['numberUN'].setValue("");
    this.createHblFormGroup.controls['IMOClassification'].setValue("");
    this.createHblFormGroup.controls['IMOName'].setValue("");
  }

  public submit(): void {
    this.matDialog.open(ServicesConfirmComponent, {
      width: "60rem",
      data: {
        hbl: this.createHblFormGroup.controls['blChild'].value,
        packageType: this.createHblFormGroup.controls['packageType'].value.id,
        packageTypeName: this.createHblFormGroup.controls['packageType'].value.description,
        weight: this.createHblFormGroup.controls['weight'].value,
        customer: this.customerNit,
        quantity: parseInt(this.createHblFormGroup.controls['quantity'].value),
        containers: this.selectedContainer.toString(),
        customerName: this.customerName,
        unDescription: this.toFourDigits(this.createHblFormGroup.controls['IMOName'].value),
        body: {
          "blNbr": this.selectedBl,
          "hbl": this.createHblFormGroup.controls['blChild'].value,
          "quantity": parseInt(this.createHblFormGroup.controls['quantity'].value),
          "weight": this.createHblFormGroup.controls['weight'].value,
          "shipper": this.customerNit,
          "pack": this.createHblFormGroup.controls['packageType'].value.id,
          "containers": this.selectedContainer.toString(),
          "checkShipper": "False",
          "imdgClass": this.createHblFormGroup.controls['IMOClassification'].value,
          "unNumber": this.toFourDigits(this.createHblFormGroup.controls['numberUN'].value),
          "infoRegisterDian": null,
        }
      },
      disableClose: true
    });
  }

  public cancel(): void {
    this.clean();
    this.store.dispatch(setCustomer({ customer: [] }));
    this.router.navigate(['/', 'servicios']);
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }


  onCustomerControlChange(control: FormControl) {
    this.customerSearcherControl = control;
    
    this.customerSearcherControl.statusChanges.subscribe(status => {
      if (!this.customerSearcherControl.valid && !this.customerAsignned) {
        this.customerValid = false;
      } else{
        this.customerValid = true;
      }
    });
  }
}
