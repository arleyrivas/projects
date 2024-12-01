import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { IServiceType } from '../../interfaces/service-type.interface';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { servicesOrderFeatureSelector } from 'src/app/state/service-order/service-order.selectors';
import { Subject, takeUntil } from 'rxjs';
import { IServiceOrderStore } from '../../interfaces/service-order-store.interface';
import { cleanServiceHistory, getServiceHistory, getServiceType, setServiceHistoryInformation, setServiceHistoryPage } from 'src/app/state/service-order/service-order.actions';
import * as moment from 'moment';
import { IServiceHistoryDTO } from '../../interfaces/service-history.dto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-service-history',
  templateUrl: './service-history.component.html',
  styleUrls: ['./service-history.component.css']
})
export class ServiceHistoryComponent implements OnInit {
  public destroy$: Subject<void> = new Subject<void>();
  public serviceTypes: IServiceType[] = [];
  public states: string[] = [];
  public serviceHistoryFormGroup: FormGroup = new FormGroup({});

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly matSnackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getServiceType());
    this.store.dispatch(cleanServiceHistory());

    const serviceHistoryInformation: IServiceHistoryDTO = {
      service: "",
      blhblbook: "",
      container: "",
      state: "",
      dateFrom: moment().subtract(31, "day").toISOString(),
      dateTo: moment().toISOString()
    }

    this.store.dispatch(setServiceHistoryInformation({ serviceInformation: serviceHistoryInformation }));
    this.store.dispatch(setServiceHistoryPage({ page: 0 }));
    this.store.dispatch(getServiceHistory({
      page: 0,
      body: serviceHistoryInformation
    }));

    setTimeout(() => this.router.navigate(["/", "servicios", "history"]), 1000);

    this.store.select(servicesOrderFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (store: IServiceOrderStore) => {
        this.serviceTypes = store.serviceTypes;
        this.states = ["Creado", "Programado", "Realizado", "Cancelado"];
      },
      error: error => console.error(error)
    });

    this.serviceHistoryFormGroup = new FormGroup({
      type: new FormControl({ value: "", disabled: false }, [Validators.required]),
      unit: new FormControl({ value: "", disabled: false }, [Validators.minLength(5), Validators.maxLength(50)]),
      container: new FormControl({ value: "", disabled: false }, [Validators.minLength(11), Validators.maxLength(11),   Validators.pattern(/^[a-zA-Z]{4}[0-9]{7}$/)]),
      state: new FormControl({ value: "", disabled: false }, [Validators.required]),
      from: new FormControl({ value: "", disabled: false }, [Validators.required]),
      to: new FormControl({ value: "", disabled: false }, [Validators.required]),
    });

    this.serviceHistoryFormGroup.controls["type"].setValue("Todos");
    this.serviceHistoryFormGroup.controls["state"].setValue("Todos");
    this.serviceHistoryFormGroup.controls["from"].setValue(moment().subtract(31, "days"));
    this.serviceHistoryFormGroup.controls["to"].setValue(moment());
  }


  public get containerControl(): AbstractControl{
    return this.serviceHistoryFormGroup.controls["container"];
  }

  public get unitControl(): AbstractControl{
    return this.serviceHistoryFormGroup.controls["unit"];
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.serviceHistoryFormGroup.get(fieldName);
    return !!(field?.invalid && (field.dirty || field.touched));
  }

  onInput(fieldName: string) {
    const field = this.serviceHistoryFormGroup.get(fieldName);
    if (field) {
      field.markAsDirty();
      field.markAsTouched();
    }
  }

  public submit(): void {
    if(moment(this.serviceHistoryFormGroup.controls["from"].value).isBefore(this.serviceHistoryFormGroup.controls["to"].value)) {
      if(Math.abs(moment(this.serviceHistoryFormGroup.controls["from"].value).diff(this.serviceHistoryFormGroup.controls["to"].value, "days")) <= 31) {
        this.store.dispatch(cleanServiceHistory());

        const serviceHistoryInformation: IServiceHistoryDTO = {
          service: this.serviceHistoryFormGroup.controls["type"].value === "Todos" ? "" : this.serviceHistoryFormGroup.controls["type"].value,
          blhblbook: this.serviceHistoryFormGroup.controls["unit"].value.trim(),
          container: this.serviceHistoryFormGroup.controls["container"].value.trim(),
          state: this.serviceHistoryFormGroup.controls["state"].value === "Todos" ? "" : this.serviceHistoryFormGroup.controls["state"].value,
          dateFrom: this.serviceHistoryFormGroup.controls["from"].value.toISOString(),
          dateTo: this.serviceHistoryFormGroup.controls["to"].value.toISOString()
        }

        this.store.dispatch(setServiceHistoryInformation({ serviceInformation: serviceHistoryInformation }));
        this.store.dispatch(setServiceHistoryPage({ page: 0 }));
        this.store.dispatch(getServiceHistory({
          page: 0,
          body: serviceHistoryInformation
        }));
      } else {
        this.matSnackbar.open(
          "La diferencia entre las dos fechas debe ser máximo de 31 días",
          "",
          {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          }
        );
      }
    } else {
      this.matSnackbar.open(
        "La fecha desde debe ser igual o anterior a la fecha hasta",
        "",
        {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        }
      );
    }
  }
}
