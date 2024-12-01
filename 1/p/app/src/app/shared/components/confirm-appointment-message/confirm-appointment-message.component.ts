import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { getSecondPassword } from 'src/app/state/shared/shared.actions';

@Component({
  selector: 'app-confirm-appointment-message',
  templateUrl: './confirm-appointment-message.component.html',
  styleUrls: ['./confirm-appointment-message.component.css']
})
export class ConfirmAppointmentMessageComponent implements OnInit, OnDestroy{
  public checked: boolean = false;
  public destroy$: Subject<void> = new Subject<void>();
  public userInfo!: IAPIGatewayStore;
  public invalid: boolean = true;
  public privilege: string = "CS_CIT_CRE"
  public loadType = "";
  constructor( private readonly store: Store,
    public dialogRef: MatDialogRef<ConfirmAppointmentMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(data){
      this.loadType = data.loadType;
      if(this.loadType === "cc"){
        this.privilege = "CC_CIT_CRE";
      }
    }
   }

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
  }

  public onCheck(event: any): void {
    this.checked = event.checked;
  }

  submit(): void {
    
    this.dialogRef.close(true); // cierra el diálogo con resultado positivo
  }

  cancel(): void {
    this.dialogRef.close(false); // cierra el diálogo con resultado negativo
  }
 

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
