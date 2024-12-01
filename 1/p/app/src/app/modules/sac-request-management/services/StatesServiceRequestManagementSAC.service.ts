import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IRequestFilterSac } from 'src/app/core/interfaces/sac-request-management';

@Injectable({
  providedIn: 'root'
})
export class StatesServiceRequestManagementSAC {
  private isUpdateFilterCriterial: BehaviorSubject<IRequestFilterSac | null>;

  constructor() {
    this.isUpdateFilterCriterial = new BehaviorSubject<IRequestFilterSac | null>(null);
  }

  getStateIsUpdateFilterCriterial(): Observable<IRequestFilterSac | null>{
    return this.isUpdateFilterCriterial.asObservable();
  }

  // getter
  getValueIsUpdateFilterCriterial(): IRequestFilterSac | null {
    return this.isUpdateFilterCriterial.getValue();
  }

  // Setter
  setValueIsUpdateFilterCriterial(filter: IRequestFilterSac): void {
    this.isUpdateFilterCriterial.next(filter);
  }
 
  // reset
  resetValueIsUpdateFilterCriterial(): void {
    this.isUpdateFilterCriterial.next(null);
  }

  resetAllProperties(): void{
    this.isUpdateFilterCriterial.next(null);
  }

}
