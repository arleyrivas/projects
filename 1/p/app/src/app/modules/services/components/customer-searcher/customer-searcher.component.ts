import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, debounceTime, firstValueFrom, mergeMap, of, takeUntil } from 'rxjs';
import { ICustomer } from 'src/app/core/dto/customer.dto';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { setSelectedCustomer } from 'src/app/state/services/services.actions';
import { setSelectedCustomer as sharedSetSelectedCustomer } from 'src/app/state/shared/shared.actions';
import { getCustomer } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';

@Component({
  selector: 'app-customer-searcher',
  templateUrl: './customer-searcher.component.html',
  styleUrls: ['./customer-searcher.component.css']
})
export class CustomerSearcherComponent implements OnInit, OnDestroy, OnChanges {
  @Input() public controlDisabled: boolean = false;
  @Input() public searcher: boolean = true;
  @Input() public data: string = "";
  @Input() public agent: string | null = null;
  @Output() public customerSearch: EventEmitter<string> = new EventEmitter<string>();
  @Input() public isAssociateContainer: boolean = false;

  @Input() public formatSelected: boolean = false;
  @Input() public requireValidator: boolean = true;
  @Output() public customerSelected = new EventEmitter<string>();
  @Output() public customerControl: EventEmitter<FormControl> = new EventEmitter<FormControl>();
  @Output() public cleanCustomer: EventEmitter<() => void> = new EventEmitter<() => void>();
  public destroy$: Subject<void> = new Subject<void>();
  public sharedStore: Observable<ICustomer[] | null> = new Observable<ICustomer[] | null>();
  public customerSearcherFormControl: FormControl = new FormControl();
  public previousValue: string = "";
  public selectedCustomer: any = null
  public selectedCustomerObject: any = null;

  constructor(private readonly store: Store, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const validators = this.requireValidator ? [Validators.required] : [];
    this.customerSearcherFormControl = new FormControl({ value: "", disabled: false }, validators);

    this.cleanCustomer.emit(this.clean.bind(this));
    this.customerControl.emit(this.customerSearcherFormControl);


    if(this.controlDisabled) this.customerSearcherFormControl.disable();

    if(this.searcher) {
      this.sharedStore = this.store.select(sharedFeatureSelector).pipe(
        takeUntil(this.destroy$),
        mergeMap((sharedStore: ISharedStore) => {
          return of(sharedStore.customer);
        })
      );

      this.customerSearcherFormControl.valueChanges.pipe(
        debounceTime(800)
      ).subscribe({
        next: (value: string) => {
          if((value) && (value.length > 4)) {
            this.store.dispatch(getCustomer({ idOrName: value, agent: this.agent }));
            this.store.dispatch(setSelectedCustomer({ customer: value }));
            this.store.dispatch(sharedSetSelectedCustomer({ selectedCustomer: value }));
            this.customerSearch.emit(value);
            this.customerSelected.emit(value);
            if(!this.formatSelected) {
              this.validateInput();
            }
          }

          this.customerSearch.emit(value);
        },
        error: error => console.error(error)
      });
    } else {
      this.store.dispatch(sharedSetSelectedCustomer({ selectedCustomer: this.data }));

      this.customerSearcherFormControl.setValue(this.data);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onCustomerSelected(event: any, customer: { agentId: string, agentName: string }) {
    if (event.isUserInput) {
      const selectedValue = customer.agentId + '/' + customer.agentName;
      this.selectedCustomer = selectedValue;
      this.selectedCustomerObject = customer;
      if(!this.formatSelected) {
        this.customerSearcherFormControl.setValue(this.selectedCustomer);
        this.validateInput();
      }
      this.customerSelected.emit(this.formatSelected ? this.formatValue(selectedValue) : selectedValue);
    }
  }

  onInput(event: Event) {
    if (this.formatSelected){
      const input = event.target as HTMLInputElement;
      const currentValue = input.value;
      this.customerSelected.emit(currentValue);
      if (currentValue < this.previousValue) {
        this.clean();
      }
      this.previousValue = currentValue;
    }

  }

  private formatValue(value: string): string {
    const [agentId, agentName] = value.split('/');
    return `${agentName}`;
  }

  public clean(): void {
    this.customerSearcherFormControl.reset();
    if(this.formatSelected){
      this.cleanCustomer.emit();
    }
  }

  async validateInput() {
    const inputValue = this.customerSearcherFormControl.value;
    if (this.selectedCustomer) {
      
      const validValue = this.selectedCustomerObject.agentId + '/' + this.selectedCustomerObject.agentName;
   
      if (inputValue !== validValue) {
        this.customerSearcherFormControl.setErrors({ 'invalidSelection': true });
      } else {
        this.customerSearcherFormControl.setErrors(null);
      }
    } else {
      const customers = await firstValueFrom(this.sharedStore);
      const matchedOption = customers?.some(customer => 
        (customer.agentId + '/' + customer.agentName) === inputValue
      );

      if (!matchedOption) {
        this.customerSearcherFormControl.setErrors({ 'invalidSelection': true });
      } else {
        this.customerSearcherFormControl.setErrors(null);
      }
    }
    this.customerControl.emit(this.customerSearcherFormControl);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['controlDisabled'] && this.isAssociateContainer) {
      // Forzar la actualización visual
      if (this.controlDisabled) {
        this.customerSearcherFormControl.disable();
      } else {
        this.customerSearcherFormControl.enable();
      }
    }
  }


}
