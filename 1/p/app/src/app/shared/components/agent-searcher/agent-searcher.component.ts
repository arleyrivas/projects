import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, debounceTime, firstValueFrom, mergeMap, of, takeUntil } from 'rxjs';
import { ICustomer } from 'src/app/core/dto/customer.dto';
import { IAgentIdOrNameSearch } from 'src/app/core/interfaces/agent-id-or-name-search.interface';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { getAgent, setSelectedAgent } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';


@Component({
  selector: 'app-agent-searcher',
  templateUrl: './agent-searcher.component.html',
  styleUrls: ['./agent-searcher.component.css']
})
export class AgentSearcherComponent {
  @Input() public controlDisabled: boolean = false;
  @Input() public searcher: boolean = true;
  @Input() public data: string = "";
  @Input() public agent: string | null = null;
  @Output() public agentSearch: EventEmitter<string> = new EventEmitter<string>(); 
  @Input() public isAssociateContainer: boolean = false;
  @Output() public agentControl: EventEmitter<FormControl> = new EventEmitter<FormControl>();

  public destroy$: Subject<void> = new Subject<void>();
  public sharedStore: Observable<IAgentIdOrNameSearch[] | null> = new Observable<IAgentIdOrNameSearch[] | null>();
  public agentSearcherFormControl: FormControl = new FormControl();
  public previousValue: string = "";
  public selectedAgent: any = null
  public selectedAgentObject: any = null;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.agentSearcherFormControl = new FormControl({ value: "", disabled: false });


    if(this.controlDisabled) this.agentSearcherFormControl.disable();

    if(this.searcher){

      this.sharedStore = this.store.select(sharedFeatureSelector).pipe(
        takeUntil(this.destroy$),
        mergeMap((sharedStore: ISharedStore) => {
          return of(sharedStore.agent);
        })
      );
  

      this.agentSearcherFormControl.valueChanges.pipe(
        debounceTime(800)
      ).subscribe({
        next: (value: string) => {
          if(value.length > 4) {
            this.store.dispatch(getAgent({ idOrName: value }));
            this.store.dispatch(setSelectedAgent({ agent: value }));
            this.agentSearch.emit(value);
            if(this.isAssociateContainer){
              this.validateInput();
            }
            
          }
          else if(value.length === 0 && this.isAssociateContainer) {
            this.agentSearch.emit("");
            this.validateInput();
           
          }
        },
        error: error => console.error(error)
      });
    }
    else {
      this.agentSearcherFormControl.setValue(this.data);
    }
  }

  
  onAgentSelected(event: any, agent: { id: string, name: string }) {
    if (event.isUserInput) {
      const selectedValue = agent.id + '/' + agent.name;
      this.selectedAgent = selectedValue;
      this.selectedAgentObject = agent;
      if(this.isAssociateContainer) {
        this.agentSearcherFormControl.setValue(this.selectedAgent);
        this.validateInput();
      }
    }
  }

  async validateInput() {
    const inputValue = this.agentSearcherFormControl.value;
    if (this.selectedAgent) {
      
      const validValue = this.selectedAgentObject.id + '/' + this.selectedAgentObject.name;
      if (inputValue !== validValue) {
        this.agentSearcherFormControl.setErrors({ 'invalidSelection': true });
      } else {
        this.agentSearcherFormControl.setErrors(null);
      }
    } else {
      const agents = await firstValueFrom(this.sharedStore);
      const matchedOption = agents?.some(agent => 
        (agent.id + '/' + agent.name) === inputValue
      );

      if (!matchedOption) {
        this.agentSearcherFormControl.setErrors({ 'invalidSelection': true });
      } else {
        this.agentSearcherFormControl.setErrors(null);
      }
    }
    this.agentControl.emit(this.agentSearcherFormControl);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
