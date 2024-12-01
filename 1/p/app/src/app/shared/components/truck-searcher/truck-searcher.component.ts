import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, debounceTime, firstValueFrom, mergeMap, of, takeUntil } from 'rxjs';
import { IAgentIdOrNameSearch } from 'src/app/core/interfaces/agent-id-or-name-search.interface';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { getTruckers } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { setSelectedTrucker } from 'src/app/state/shared/shared.actions';

@Component({
  selector: 'app-truck-searcher',
  templateUrl: './truck-searcher.component.html',
  styleUrls: ['./truck-searcher.component.css']
})
export class TruckSearcherComponent {
  public destroy$: Subject<void> = new Subject<void>();
  @Input() public consigneeId: string = "";
  @Input() public valueControl: string | null = null;
  @Input() public disableControl: boolean = false;
  @Input() public formatSelected: boolean = false;
  @Input() public data: string = "";
  @Output() public truckSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() public truckControl: EventEmitter<FormControl> = new EventEmitter<FormControl>();
  @Output() public cleanTrucker: EventEmitter<() => void> = new EventEmitter<() => void>();
  public sharedStore: Observable<IAgentIdOrNameSearch[] | null> = new Observable<IAgentIdOrNameSearch[] | null>();
  public truckSearcherFormControl: FormControl = new FormControl();
  public options: string[] = [];
  public previousValue: string = "";
  public selectedTruck: any = null
  public selectedTruckObject: any = null;

  constructor(
    private readonly store: Store,
    private readonly httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    const validators = !this.formatSelected ? [Validators.required] : [];
    this.truckSearcherFormControl = new FormControl({ value: "", disabled: false }, validators);

    this.cleanTrucker.emit(this.clean.bind(this));
    this.truckControl.emit(this.truckSearcherFormControl);

    this.sharedStore = this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$),
      mergeMap((sharedStore: ISharedStore) => {
        return of(sharedStore.truckers);
      })
    );

    this.truckSearcherFormControl.valueChanges.subscribe({
      next: (value: string) => {
        if (!this.formatSelected){
          if(!value) this.truckSearcherFormControl.setErrors({ truckerFormatInvalid: "truckerFormatInvalid" });
          else this.truckSearcherFormControl.setErrors(null);
        
          if(!value.split("/")[1]) this.truckSearcherFormControl.setErrors({ truckerFormatInvalid: "truckerFormatInvalid" });
          else this.truckSearcherFormControl.setErrors(null);
        }
      },
      error: error => console.error(error)
    });

    this.truckSearcherFormControl.valueChanges.pipe(
      debounceTime(800)
    ).subscribe({
      next: (value: string) => {
        if(value && value.length > 4) {
            this.store.dispatch(getTruckers({ criteria: value, consigneeId: this.consigneeId }));

            if (this.formatSelected){
              this.store.dispatch(setSelectedTrucker({selectedTrucker: value}));
            }
            if(!this.formatSelected) {
              this.validateInput();
            }
            this.truckSearch.emit(value);
        }

        if(!this.formatSelected){
          if(!value) this.truckSearcherFormControl.setErrors({ truckerFormatInvalid: "truckerFormatInvalid" });
          else this.truckSearcherFormControl.setErrors(null);

          if(!value.split("/")[1]) this.truckSearcherFormControl.setErrors({ truckerFormatInvalid: "truckerFormatInvalid" });
          else this.truckSearcherFormControl.setErrors(null);
        }
        
      },
      error: error => console.error(error)
    });
  }

  public clean(): void {
    this.truckSearcherFormControl.reset();
    if(this.formatSelected){
      this.cleanTrucker.emit();
    }
  }

  onTruckSelectd(event: any, truck: { id: string, name: string }) {
    if (event.isUserInput) {
      const selectedValue = truck.id + '/' + truck.name;
      this.selectedTruck = selectedValue;
      this.selectedTruckObject = truck;
      if(!this.formatSelected) {
        this.truckSearcherFormControl.setValue(this.selectedTruck);
        this.validateInput();
      }
      this.truckSearch.emit(this.formatSelected ? this.formatValue(selectedValue) : selectedValue);
    }
  }

  private formatValue(value: string): string {
    const [truckId, truckName] = value.split('/');
    return `${truckName}`;
  }

  onInput(event: Event) {
    if (this.formatSelected){
      const input = event.target as HTMLInputElement;
      const currentValue = input.value;
      this.truckSearch.emit(currentValue);
      if (currentValue < this.previousValue) {
        this.clean();
      }
      this.previousValue = currentValue;
    }
  }

  async validateInput() {
    const inputValue = this.truckSearcherFormControl.value;
  
    if (this.selectedTruck) {
      const validValue = this.selectedTruckObject.id + '/' + this.selectedTruckObject.name;
  
      if (inputValue !== validValue) {
        this.truckSearcherFormControl.setErrors({ truckerFormatInvalid: "truckerFormatInvalid" });
      } else {
        this.truckSearcherFormControl.setErrors(null);
      }
    } else {
      const trucks = await firstValueFrom(this.sharedStore);
      const matchedOption = trucks?.some(truck => 
        (truck.id + '/' + truck.name) === inputValue
      );
  
      if (!matchedOption) {
        this.truckSearcherFormControl.setErrors({ truckerFormatInvalid: "truckerFormatInvalid" });
      } else {
        this.truckSearcherFormControl.setErrors(null);
      }
    }
  
    this.truckControl.emit(this.truckSearcherFormControl);
  }
}
