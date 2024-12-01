import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, mergeMap, Observable, of, Subject, takeUntil, map } from 'rxjs';
import { IAgentIdOrNameSearch } from 'src/app/core/interfaces/agent-id-or-name-search.interface';
import { IDriver, IDriverValidation } from 'src/app/core/interfaces/driver.interface';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { getDrivers, getValidacionDriver, getValidacionServiceDriver, setSelectedDriver } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';

@Component({
  selector: 'app-driver-searcher',
  templateUrl: './driver-searcher.component.html',
  styleUrls: ['./driver-searcher.component.css']
})
export class DriverSearcherComponent implements OnInit, OnDestroy {
  @Input() public data: string = "";
  public driverSearcherFormControl: FormControl = new FormControl();
  @Input() public valueControl: string | null = null;
  @Input() public disableControl: boolean = false;
  @Input() public formatSelected: boolean = false;
  @Input() public driverSelectedValue: IDriver | null = null;
  @Input() public loadType: string = "";
  @Input() public type: string = "";
  @Output() public driverControl: EventEmitter<FormControl> = new EventEmitter<FormControl>();
  @Output() public driverSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() public cleanDriver: EventEmitter<() => void> = new EventEmitter<() => void>();
  @Output() public errorDriver: EventEmitter<string> = new EventEmitter<string>();
  public sharedStore: Observable<IDriver[] | null> = new Observable<IDriver[] | null>();
  public destroy$: Subject<void> = new Subject<void>();
  public previousValue: string = "";
  public driverSelected: boolean = false;
  public dataDriverSelected: IDriver | null = null;
  public validationDriver: Observable<IDriverValidation[] | null> = new Observable<IDriverValidation[] | null>();
  public validationServiceDriver: Observable<IDriverValidation[] | null> = new Observable<IDriverValidation[] | null>();

  
  constructor(
    private readonly store: Store,
    private readonly httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    const validators = !this.formatSelected ? [Validators.required] : [];
    this.driverSearcherFormControl = new FormControl({ value: "", disabled: false }, validators);
    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: ISharedStore) => {
        if (result){
          if (this.loadType === 'cs' && this.type === 'Editar Cita' && result.infoApointment){
            this.driverSelectedValue = {cardId: result.infoApointment.driver.cardId, name: result.infoApointment.driver.name, license: result.infoApointment.driver.license, licenseExpiration: 0};
          } else if (this.loadType === 'cc' && this.type === 'Editar Cita' && result.infoAppointmentCC){
            this.driverSelectedValue = {cardId: result.infoAppointmentCC.driver.cardId, name: result.infoAppointmentCC.driver.name, license: result.infoAppointmentCC.driver.license, licenseExpiration: 0};
          }
        }
      }
    });
    const preselectedDriver = this.getPreselectedDriver(); 
    this.cleanDriver.emit(this.clean.bind(this));
    this.driverControl.emit(this.driverSearcherFormControl);
    if (preselectedDriver && preselectedDriver.name !== '') {
      const displayValue = `Nombre: ${preselectedDriver.name} - Licencia: ${preselectedDriver.license} - Card ID: ${preselectedDriver.cardId}`;
      this.driverSearcherFormControl.setValue(displayValue);
    }
    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$),
      map((sharedStore: ISharedStore) => ({
        sharedStore: sharedStore.driver,
        validationDriver: sharedStore.validationDriver,
        validationServiceDriver: sharedStore.validationServiceDriver
      }))
    ).subscribe({
      next: (data: { sharedStore: IDriver[] | null; validationDriver: IDriverValidation[] | null; validationServiceDriver: IDriverValidation[] | null }) => {
        this.sharedStore = of(data.sharedStore);
        this.validationDriver = of(data.validationDriver);
        this.validationServiceDriver = of(data.validationServiceDriver);
        this.validationDriver.subscribe({
          next: (validationDriver: IDriverValidation[] | null) => {
            if (validationDriver && validationDriver.length > 0 && validationDriver[0].data && validationDriver[0].data.length > 0) {
              this.errorDriver.emit("errorDriver");
            }else{
              this.errorDriver.emit("sinError");
            }
          },
          error: error => console.error(error)
        });
        this.validationServiceDriver.subscribe({
          next: (validationServiceDriver: IDriverValidation[] | null) => {
            if (validationServiceDriver && validationServiceDriver.length > 0 && validationServiceDriver[0].data && validationServiceDriver[0].data.length > 0) {
              this.errorDriver.emit("errorDriver");
            }else{
              this.errorDriver.emit("sinError");
            }
          },
          error: error => console.error(error)
        });
        
      },
      error: error => console.error(error)
    });
    



    this.driverSearcherFormControl.valueChanges.subscribe({
      next: (value: string) => {
        if(!value) this.driverSearcherFormControl.setErrors({ driverFormatInvalid: "driverFormatInvalid" });
        else this.driverSearcherFormControl.setErrors(null);
      },
      error: error => console.error(error)
    });

    this.driverSearcherFormControl.valueChanges.pipe(
      debounceTime(800)
    ).subscribe({
      next: (value: string) => {
        if (this.driverSelected) {
          this.driverSelected = false;
          if (value && this.dataDriverSelected){
            this.store.dispatch(getValidacionDriver({ license: this.dataDriverSelected.license }));
            this.store.dispatch(getValidacionServiceDriver({ license: this.dataDriverSelected.license }));
            
          }
         
          return;
        }
        if(value && value.length > 4) {
            this.store.dispatch(getDrivers({ criteria: value }));
            
            this.driverSearch.emit(value);
        }

        if(!value) this.driverSearcherFormControl.setErrors({ driverFormatInvalid: "driverFormatInvalid" });
        else this.driverSearcherFormControl.setErrors(null);
        
      },
      error: error => console.error(error)
    });
  }


  onInput(event: Event) {
    if (this.formatSelected){
      const input = event.target as HTMLInputElement;
      const currentValue = input.value;
      this.driverSearch.emit(currentValue);
      if (currentValue < this.previousValue) {
        this.clean();
      }
      this.previousValue = currentValue;
    }
  }

  onDriverSelected(event: any, driver: IDriver) {
    this.driverSelected = true;
    if (event.isUserInput) {
      const selectedValue = "Nombre: "+ driver.name + ' - Licencia: ' + driver.license + ' - Card ID: ' + driver.cardId;
      this.dataDriverSelected = driver;
      this.driverSearch.emit(selectedValue);
    }
  }

  public clean(): void {
    this.driverSearcherFormControl.reset();
    if(this.formatSelected){
      this.cleanDriver.emit();
    }
  }

  getPreselectedDriver() {
    return {
      name: this.driverSelectedValue?.name || '',
      license: this.driverSelectedValue?.license || '',
      cardId: this.driverSelectedValue?.cardId || ''
    };
  }


  ngOnDestroy(): void {
    
    this.destroy$.next();
    this.destroy$.complete();
    
  }


}
