import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { privileges } from 'src/app/core/privileges.enum';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { Subject, iif, takeUntil } from 'rxjs';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import * as moment from 'moment';
import { cleanHistoryAppointments, cleanHistoryPin, getHistoryAppointments, getHistoryPin, saveAppointmentsParameters, saveParameters } from 'src/app/state/history/history.actions';
import { cleanSelectedCustomer, cleanSelectedTrucker } from 'src/app/state/shared/shared.actions';
import { ScrollService } from '../../services/scroll.service';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAdministrationActions } from 'src/app/core/interfaces/administration-actions.interface';
import { getActionPrivilege, setPrivilegeName } from 'src/app/state/administration/administration.actions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HistorypinstateService } from '../../services/historypinstate.service';
import { StorageserviceService } from 'src/app/shared/services/storageservice.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public privileges: typeof privileges = privileges;
  public userInfo!: IAPIGatewayStore;
  public customerNit:string = '';
  public truckerNit:string = '';
  public destroy$: Subject<void> = new Subject<void>();
  public historyPinsFormGroup: FormGroup = new FormGroup({});
  public historyAppointmentsFormGroup: FormGroup = new FormGroup({});
  public customerId: string | null = null; 
  public truckerId: string | null = null;
  public bl: string | null = null;
  public hbl: string | null = null;
  public frghtKind: string | null = null;
  public trucker!: string;
  public plate: string | null = null;
  public appointmentNbr: string | null = null;
  public page: number = 1;
  public isInCurrentComponent: boolean = false;
  
  public data = {
    "consigneeId": this.customerId,
    "company": this.truckerId,
    "tipo": "",
    "state": 0,
    "fromDate": "",
    "toDate": "",
    "bl": this.bl,
    "hbl": this.hbl,
    "frghtKind": this.frghtKind,
    "page": this.page,
    "cleanSelectedState": true
  }
  public dataAppointments = {
    "frghtKind": this.frghtKind,
    "plate": this.plate,
    "appointmentNbr": this.appointmentNbr,
    "fromDate": "",
    "toDate": "",
    "page": this.page,
    "cleanSelectedState": true

  }
  public cleanCustomerFunction: () => void = () => {};
  public cleanTruckerFunction: () => void = () => {};
  constructor(private readonly store: Store, private scrollService: ScrollService,
    private readonly router: Router, private readonly matSnackbar: MatSnackBar, private historyPinStateService: HistorypinstateService,
    private readonly matSnackBar: MatSnackBar, private storageService:StorageserviceService,) { }

  ngOnInit(): void {
    this.isInCurrentComponent = true;
    this.matSnackBar.dismiss();
    this.store.dispatch(cleanSelectedCustomer());
    this.store.dispatch(cleanSelectedTrucker());
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    if  (this.hasPermission(this.privileges.HIS_CIT)){
      this.navigateToHistoryAppointmentsComponent();
    }
    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: ISharedStore) => {
        if (result.selectedCustomer){
          const [customerId, customerName] = result.selectedCustomer.split('/');
          if (customerName){
            this.customerNit = `${customerName}`;
          }
          
        }
        if (result.selectedTrucker){
          const [truckerId, truckerName] = result.selectedTrucker.split('/');
          if (truckerName){
            this.truckerNit = `${truckerName}`;
          }
        }
       
      }});

    this.historyPinsFormGroup = new FormGroup({
      blHbl: new FormControl({ value: "", disabled: false }, [Validators.minLength(5), Validators.maxLength(50)]),
      loadType: new FormControl('ALL'),
      stady: new FormControl('ALL'),
      from: new FormControl({ value: "", disabled: false }, [Validators.required]),
      to: new FormControl({ value: "", disabled: false }, [Validators.required])
    });
    this.historyAppointmentsFormGroup = new FormGroup({
      loadType: new FormControl('ALL'),
      from : new FormControl({ value: "", disabled: false }, [Validators.required]),
      to: new FormControl({ value: "", disabled: false }, [Validators.required]),
      appointmentNbr: new FormControl({ value: "", disabled: false }, [Validators.minLength(4), Validators.maxLength(10),  Validators.pattern(/^[0-9]*$/)]),
      plate: new FormControl({ value: "", disabled: false }, [Validators.minLength(6), Validators.maxLength(6), this.plateValidator]),

    });
    this.historyPinsFormGroup.controls["from"].setValue(moment().subtract(31, "day").format("YYYY-MM-DD"));
    this.historyPinsFormGroup.controls["to"].setValue(moment().format("YYYY-MM-DD"));
    this.historyAppointmentsFormGroup.controls["from"].setValue(moment().format("YYYY-MM-DD"));
    this.historyAppointmentsFormGroup.controls["to"].setValue(moment().add(15, "day").format("YYYY-MM-DD"));
    this.scrollService.loadMore$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.loadMore();
    });
    
  }

  onCustomerSelected(selectedValue: string) {
    const [customerId, customerName] = selectedValue.split('/');
    if (customerName) {
      this.customerId = customerId;
      this.customerNit = customerName;
      this.page = 1;
    }
  }

  onTruckSelectd(selectedValue: string) {
    const [truckId, truckName] = selectedValue.split('/');
    if (truckName) {
      
      this.truckerId = truckId;
      this.truckerNit = truckName;
      this.page = 1;
    }
  }

  public datePickerChange(event: any, historyAppointments: boolean = false): void {
    let cantDiffDays = 31;
    let form = this.historyPinsFormGroup;
    if(historyAppointments){
      form = this.historyAppointmentsFormGroup;
      cantDiffDays = 15;
    }
    const fromDateControl = form.controls["from"];
    const toDateControl = form.controls["to"];
    const fromDate = moment(fromDateControl.value);
    const value = form.controls["from"].value;
    const toDateValue = toDateControl.value ? moment(toDateControl.value) : null;
    if (toDateValue) {
      const diffDays = toDateValue.diff(fromDate, 'days');
      if (diffDays > cantDiffDays) {
        const newToDate = fromDate.add(cantDiffDays, "days").format("YYYY-MM-DD");
        toDateControl.setValue(newToDate);
      }
    } else {
      const newToDate = fromDate.add(cantDiffDays, "days").format("YYYY-MM-DD");
      toDateControl.setValue(newToDate);
    }
  }

  
  public toDatePickerChange(event: any,  historyAppointments: boolean = false): void {
    let cantDiffDays = 31;
    let form = this.historyPinsFormGroup;
    if(historyAppointments){
      form = this.historyAppointmentsFormGroup;
      cantDiffDays = 15;
    }
    const fromDateControl = form.controls["from"];
    const toDateControl = form.controls["to"];
    const toDate = moment(toDateControl.value);
  
    // Verificar si el control "from" ya tiene un valor
    const fromDateValue = fromDateControl.value ? moment(fromDateControl.value) : null;
  
    // Si ya hay un valor en "from", calcular la diferencia
    if (fromDateValue) {

      const diffDays = toDate.diff(fromDateValue, 'days');
      if (diffDays > cantDiffDays) {
        // Si la diferencia es mayor a 31 días, ajustar la fecha "from" para que sea 31 días antes de "to"
        const newFromDate = toDate.subtract(cantDiffDays, "days").format("YYYY-MM-DD");
        fromDateControl.setValue(newFromDate);
      }
    } else {
      // Si no hay valor en "from", ajustar la fecha "from" para que sea 31 días antes de "to"
      const newFromDate = toDate.subtract(cantDiffDays, "days").format("YYYY-MM-DD");
      fromDateControl.setValue(newFromDate);
    }
  }
  public multipleTruckSearch(value: string): void {
    this.trucker = value;
  }

  public search(): void {
    this.page = 1;
    if(moment(this.historyPinsFormGroup.controls["from"].value).isBefore(this.historyPinsFormGroup.controls["to"].value)){
      let blHbl = this.historyPinsFormGroup.get('blHbl')?.value || null;
      let loadType = this.historyPinsFormGroup.get('loadType')?.value || null;
      let stady = this.historyPinsFormGroup.get('stady')?.value || null;
      let fromDate = moment(this.historyPinsFormGroup.get("from")?.value).toISOString();
      let toDate = moment(this.historyPinsFormGroup.get("to")?.value).toISOString();
      
      // Ajusta la hora de la fecha a las 23:59:59
      let endOfDay = moment(toDate).utc().set({
        hour: 23,
        minute: 59,
        second: 59,
        millisecond: 0
      }).toISOString();
      
      
      let bl = null;
      let hbl = null;
      let frghtKind: string | null = "";
      if (loadType === "1"){
        //hbl = blHbl;
        frghtKind = "BBK";
      }
      else if (loadType === "0"){
        //bl = blHbl;
        frghtKind = "FCL";
      }
      else{
        //bl = blHbl;
        //hbl = blHbl;
        frghtKind = null;
      }

      this.data.consigneeId = this.customerId;
      this.data.company = this.truckerId;
      this.data.tipo = loadType;
      this.data.state = parseInt(stady);
      this.data.fromDate = fromDate;
      this.data.toDate = endOfDay;
      this.data.bl = bl;
      this.data.hbl = blHbl;
      this.data.frghtKind = frghtKind;
      this.data.page = this.page;

      //this.store.dispatch(reloadComponent());
      this.store.dispatch(saveParameters({ data: this.data }));
      this.store.dispatch(cleanHistoryPin());
      this.store.dispatch(getHistoryPin(this.data));
      
    
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

  public clean(value: () => void): void {
    this.cleanCustomerFunction = value;
    this.customerId = null;
    this.customerNit = '';
    this.store.dispatch(cleanSelectedCustomer());
  }

  public cleanTrucker(value: () => void): void{
    this.cleanTruckerFunction = value;
    this.truckerId = null;
    this.truckerNit = '';
    this.store.dispatch(cleanSelectedTrucker());
  }

 
  public loadMore(): void {
    this.data.page += 1;
    this.store.dispatch(getHistoryPin(this.data));
  }

  public configure( historyAppointments: boolean = false): void {
    if (historyAppointments){
      
      if (!this.isInCurrentComponent) {
        return; // Salir si no estás en el componente correcto
      }
      this.router.navigate(['/', 'historial', 'history-appointments']);
    }else{
      this.router.navigate(['/', 'historial', 'history-pin']);
    }
    
   
  }

  public navigateToHistoryPinComponent(): void {
    this.historyPinStateService.shouldReloadComponent = true;
    this.router.navigate(['/', 'historial', 'history-pin']);
  }

  public plateValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || ''; // Maneja casos donde el valor es null o undefined
    if (!value) {
      return null;
    }
    const platePattern = /^[A-Za-z]{3}[0-9]{3}$/;
    const isValid = platePattern.test(value);
    return isValid ? null : { invalidPlate: true };
  }

  public searchAppointments(): void {
    this.page = 1;
    if(moment(this.historyAppointmentsFormGroup.controls["from"].value).isBefore(this.historyAppointmentsFormGroup.controls["to"].value)){
      this.dataForHistoryAppointmentsComponent();
      this.store.dispatch(saveAppointmentsParameters({ data: this.dataAppointments }));
      this.store.dispatch(cleanHistoryAppointments());
      this.store.dispatch(getHistoryAppointments(this.dataAppointments));
      this.storageService.showHistoryAppointment(true);
      
    }else {
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

  public hasPermission(privilegio: string): boolean {
    const userPrivileges: string[] = this.userInfo.privileges.map(value => value.privilegeId);
    let hasPermission: boolean = false;
    if(this.userInfo && this.userInfo.privileges) {
      if(userPrivileges.includes(privilegio)) {
        hasPermission = true;
      }
    }
    return hasPermission;
  }

  public dataForHistoryAppointmentsComponent(addDays: boolean = false, cantDays = 0): void {
      let plate = this.historyAppointmentsFormGroup.get('plate')?.value || null;
      let appointmentNbr = this.historyAppointmentsFormGroup.get('appointmentNbr')?.value || null;
      let loadType = this.historyAppointmentsFormGroup.get('loadType')?.value || null;
      let fromDate = moment(this.historyAppointmentsFormGroup.get("from")?.value).toISOString();
      let toDate = moment(this.historyAppointmentsFormGroup.get("to")?.value).toISOString();
      let frghtKind: string | null = "";
      if (loadType === "1"){
        //hbl = blHbl;
        frghtKind = "S";
      }
      else if (loadType === "0"){
        //bl = blHbl;
        frghtKind = "C";
      }
      else{
        //bl = blHbl;
        //hbl = blHbl;
        frghtKind = null;
      }
      this.dataAppointments.frghtKind = frghtKind;
      this.dataAppointments.plate = plate;
      this.dataAppointments.appointmentNbr = appointmentNbr;
      if (addDays){
        toDate = moment(toDate).add(cantDays, 'days').toISOString();
      }
      this.dataAppointments.fromDate = new Date(fromDate).toISOString().split('T')[0];
      this.dataAppointments.toDate =  new Date(toDate).toISOString().split('T')[0];
      this.dataAppointments.page = this.page;
  }

  public navigateToHistoryAppointmentsComponent(): void {
    this.dataForHistoryAppointmentsComponent(true, 15);
    this.dataAppointments.page = 1;
    this.store.dispatch(saveAppointmentsParameters({ data: this.dataAppointments }));
    this.store.dispatch(cleanHistoryAppointments());
    this.store.dispatch(getHistoryAppointments(this.dataAppointments));
    this.router.navigate(['/', 'historial', 'history-appointments']);
  }
  

  ngOnDestroy() {
    this.isInCurrentComponent = false;
    this.destroy$.next();
    this.destroy$.complete();
  }

}
