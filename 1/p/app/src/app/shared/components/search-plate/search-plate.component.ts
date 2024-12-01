import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { ITruck } from 'src/app/core/interfaces/truck.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { getDocumentationInformation } from 'src/app/state/documental/documental.actions';
import { cleanPlate, cleanTruck, getCapacityTruck, getPlate, getVehicleDocumentation } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { StorageserviceService } from '../../services/storageservice.service';

@Component({
  selector: 'app-search-plate',
  templateUrl: './search-plate.component.html',
  styleUrls: ['./search-plate.component.css']
})
export class SearchPlateComponent implements OnInit, OnDestroy {
  public searchPlateControl: FormControl = new FormControl();
  @Input() public indication: string = "(Introduce un valor y presione enter)";
  @Input() public hasCleanButton: boolean = false;
  @Input() public hasSearchButton: boolean = true;
  @Input() public inputPlaceholder: string = "Buscar por un valor";
  @Input() public regex!: RegExp;
  @Input() public plateInputValue: string = "";
  @Input("loadType") public loadType: string = "";
  @Output() public submitSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() public cleanEmmiter: EventEmitter<void> = new EventEmitter<void>();
  @Output() public cleanFormControlEmmiter: EventEmitter<() => void> = new EventEmitter<() => void>();
  @Output() public dataStatusChanged = new EventEmitter<{status: boolean, message: string}>(); // Emisor del evento

  obtuvoDatos = true;
  public userInfo!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>();
  public truckInfo!: ITruck;
  private storageSubscription!: Subscription;
  isLimpio = false;
  private plateBefore = ''; 

  constructor(private readonly store: Store, private storageService:StorageserviceService, ) { }

  ngOnInit(): void {
    
    const validators = [Validators.pattern(this.regex)];
    this.searchPlateControl = new FormControl("", validators);
    this.cleanFormControlEmmiter.emit(this.cleanFormControl.bind(this));
    
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    this.searchPlateControl.valueChanges.subscribe({
      next: (value: string) => {
        if (this.plateBefore !== '' && value !== this.plateBefore){
          this.store.dispatch(cleanPlate());
          this.dataStatusChanged.emit({status: false, message: "vacio"});
        }
         if (value && value.length === 6){
          if(this.customValidator(value)){
            this.obtuvoDatos = true;
            
            this.store.dispatch(getPlate({ placa: value }));
            
            this.store.select(sharedFeatureSelector).pipe(
              takeUntil(this.destroy$)
            ).subscribe({
              next: (result: ISharedStore) => {
                
                if (result.truck){
                  if(this.isLimpio === false){
                    if(this.plateInputValue === '' && this.loadType !== 'cc'){
                      this.storageService.clearStorageValidationPin();
                      //this.storageService.cleanValues();
                      this.isLimpio = true;
                    }
                    
                  }
                  this.plateBefore = result.truck.id;
                  this.obtuvoDatos = true;
                  this.dataStatusChanged.emit({status: this.obtuvoDatos, message: "true"});
                  this.truckInfo = result.truck;
                  
                 
                } else{
                  
                  this.obtuvoDatos = false;
                  this.dataStatusChanged.emit({status: this.obtuvoDatos, message: "false"});
                }
                
               
              }});
            
          }else{
            this.obtuvoDatos = false;
            this.dataStatusChanged.emit({status: this.obtuvoDatos, message: "false"});
            this.store.dispatch(cleanPlate());
          }
          
         }else{
          this.obtuvoDatos = true;
          if (value === '') {
            this.store.dispatch(cleanPlate());
            this.dataStatusChanged.emit({status: false, message: "vacio"});
          }
          else if (value && value.length < 6){
            this.store.dispatch(cleanPlate());
          }

         }
        
      },
      error: error => console.error(error)
    });

    if(this.plateInputValue){
      
      this.searchPlateControl.setValue(this.plateInputValue, {emitEvent: true });
    }

    this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
      
      if (action.action === 'cleanValues'){
        this.searchPlateControl.reset();
      }
      if (action.action === 'viewCreateAppointment'){
        
        this.searchPlateControl.reset();
        this.store.dispatch(cleanTruck());
        this.searchPlateControl.setValue(this.plateInputValue, {emitEvent: true });
      }
      
    });

    
  }

  @HostListener("document:keydown.enter")
  public submit(): void {
    this.submitSearch.emit(this.searchPlateControl.value.trim());
  }

  public clean(): void {
    this.searchPlateControl.reset();
    this.cleanEmmiter.emit();
  }

  public cleanFormControl(): void {
    this.searchPlateControl.reset();
  }

  public customValidator(value: string): boolean {
      const regex = /^[a-zA-Z]{3}[0-9]{3}$/;
      const valid = regex.test(value);
      return valid
    
  }

  ngOnDestroy() {
    if (this.storageSubscription) {
      this.storageSubscription.unsubscribe();
    }
    this.destroy$.next();
    this.destroy$.complete();
  }

 

  
}
