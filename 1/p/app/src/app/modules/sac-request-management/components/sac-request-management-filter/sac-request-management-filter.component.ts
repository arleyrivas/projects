import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IRequestFilterSac } from 'src/app/core/interfaces/sac-request-management';
import { StatesServiceRequestManagementSAC } from '../../services/StatesServiceRequestManagementSAC.service';

@Component({
  selector: 'app-sac-request-management-filter',
  templateUrl: './sac-request-management-filter.component.html',
  styleUrls: ['./sac-request-management-filter.component.css'],
})
export class SacRequestManagementFilterComponent implements OnInit {
  myForm!: FormGroup;

  requestTypes = [
    { name: 'Todos', value: 'todos' },
    { name: 'Nueva Empresa', value: 'nueva' },
    { name: 'Actualización Datos Empresa', value: 'datosDocumental' },
    { name: 'Solo Documental', value: 'documental' },
  ];

  requestStatus = [
    { name: 'Todas', value: 'todas' },
    { name: 'Pendientes', value: 'pendientes' },
    { name: 'Cerradas', value: 'cerradas' },
  ];

  constructor(
    private fb: FormBuilder,
    private readonly matSnackBar: MatSnackBar,
    private readonly router: Router,
    private statesServiceRequestManagementSAC: StatesServiceRequestManagementSAC
  ) {

    const defaultDates = this.getDefaultDates();

    this.myForm = this.fb.group(
      {
        requestType: [this.requestTypes[0].value, Validators.required],
        requestStatus: [this.requestStatus[0].value, Validators.required],
        startDate: [defaultDates.startDate, Validators.required], 
        endDate: [defaultDates.endDate, Validators.required],               
      },
      {
        validators: this.dateRangeValidator(),
      } 
    );
    this.emmitFormValue();
  }

  ngOnInit(): void {
    this.router.navigate(["/", "gestion-solicitudes-sac", "management"]);
  }
  
  getDefaultDates() {
    const currentDate = new Date();
    const endDate = currentDate.toISOString().split('T')[0];

    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - 7);
    const formattedStartDate = startDate.toISOString().split('T')[0];

    return {
      startDate: formattedStartDate,
      endDate: endDate
    };
  }
  
  dateRangeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const startDate = new Date(control.get('startDate')?.value);
      const endDateValue = control.get('endDate')?.value;
      const endDate = new Date(`${endDateValue}T00:00:00`);  
      // const endDate = new Date(control.get('endDate')?.value);

      if (!startDate || !endDate) {
        return null;
      }

      const timeDiff = endDate.getTime() - startDate.getTime();
      const dayDiff = timeDiff / (1000 * 3600 * 24);

      if (dayDiff > 30) {
        return {
          dateRange:
            'La diferencia entre ambas fechas no puede ser mayor a 30 días.',
        };
      }

      if (startDate > endDate) {
        return {
          dateRange: 'La fecha inicial no puede ser mayor a la fecha final.',
        };
      }

      return null;
    };
  }

  public onSubmit() {
    if (this.myForm.invalid) {
      const errors = this.myForm.errors;

      if (errors) {
        this.matSnackBar.open(`${errors['dateRange']}`, '', {
          verticalPosition: 'top',
          duration: 3000,
          panelClass: ['error-snackbar'],
        });
      }
      return;
    }
    this.emmitFormValue();
  }


  emmitFormValue(){
    let requestFilter: IRequestFilterSac = {
      requestType: this.myForm.get('requestType')?.value, 
      requestStatus: this.myForm.get('requestStatus')?.value, 
      startDate: this.formatDate(this.myForm.get('startDate')?.value),
      endDate: this.formatDate(this.myForm.get('endDate')?.value),
    };
    this.statesServiceRequestManagementSAC.setValueIsUpdateFilterCriterial(requestFilter);
  }
  
  formatDate(date: string): string {
    return new Date(date).toISOString().slice(0, 10);
  }
}
