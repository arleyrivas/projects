import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-remove-container-dialog',
  templateUrl: './remove-container-dialog.component.html',
  styleUrls: ['./remove-container-dialog.component.css']
})
export class RemoveContainerDialogComponent {
  public checked: boolean = false;
  public destroy$: Subject<void> = new Subject<void>();
  public userInfo!: IAPIGatewayStore;
  public invalid: boolean = true;
  public booking: string = "";
  public unitNbr: string = "";
 

  constructor( private readonly store: Store,
    public dialogRef: MatDialogRef<RemoveContainerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(data){
      this.booking = data.booking;
      this.unitNbr = data.unitNbr;
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

 

  submit(): void {
    this.dialogRef.close({ success: true}); // cierra el diálogo con resultado positivo
  }

  cancel(): void {
    this.dialogRef.close(false); // cierra el diálogo con resultado negativo
  }
  

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
