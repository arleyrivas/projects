import { Component, EventEmitter, Inject, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IDetachedLoadStore } from 'src/app/core/interfaces/detached-load-store.interface';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { ICausalCancelationAppointment } from 'src/app/core/interfaces/ICausalCancelationAppointment.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { detachedLoadFeatureSelector } from 'src/app/state/detached-load/detached-load.selectors';

@Component({
  selector: 'app-causal-cancellation-dialog',
  templateUrl: './causal-cancellation-dialog.component.html',
  styleUrls: ['./causal-cancellation-dialog.component.css']
})
export class CausalCancellationDialogComponent implements OnInit, OnDestroy {
  public causals: ICausalCancelationAppointment[] = [];
  public destroy$: Subject<void> = new Subject<void>();
  public userInfo!: IAPIGatewayStore;
  @Output() public causalSelected = new EventEmitter<string>();
  public causalSearcherFormControl: FormControl = new FormControl();
  public privilege = '';

  constructor(public dialogRef: MatDialogRef<CausalCancellationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private readonly store: Store,){
      //console.log("diaaaa: ", data.loadType)
      if (data && data.loadType){
        if (data.loadType === 'cc') this.privilege = 'CC_CIT_ELI';
        if (data.loadType === 'cs') this.privilege = 'CS_CIT_ELI';
      }
     

  }

  ngOnInit(): void {
    
    this.causals = [];
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    this.store.select(detachedLoadFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IDetachedLoadStore) => {
        if(result.causalCancellationAppointment){
          const causalOriginal = result.causalCancellationAppointment;
          this.causals = causalOriginal.filter((causal) => {
            return causal.code !== "99";
          });
          
        }
      }})
  }


  confirmSelection() {
    this.dialogRef.close({ result: true, response: this.causalSearcherFormControl.value });
  }

  onCausalSelected(event: any, causal: { code: string; description: string; }) {
    if (event.isUserInput) {
     
      this.causalSearcherFormControl.setValue(causal.code);
      this.causalSelected.emit(causal.code);
    }
  }
  

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
