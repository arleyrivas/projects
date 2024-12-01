import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-confirm-delete-container',
  templateUrl: './confirm-delete-container.component.html',
  styleUrls: ['./confirm-delete-container.component.css']
})
export class ConfirmDeleteContainerComponent {
  public message = '';
  public destroy$: Subject<void> = new Subject<void>();
  public userInfo!: IAPIGatewayStore;
  constructor(public dialogRef: MatDialogRef<ConfirmDeleteContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private readonly store: Store,){
     
     

  }

  ngOnInit(): void {
    
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    this.message = $localize `:@@f4803a95874e9455e144a96bd95f7a4944134d106743d27a5ed39f5ddd06bf41: modalAppointment.THE_APPOINTMENT_WILL_BE_CANCELED_CONTAINER`;
    
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
