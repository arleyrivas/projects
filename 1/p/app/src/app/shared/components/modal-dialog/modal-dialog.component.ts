import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit, OnDestroy{
  public checked: boolean = false;
  public destroy$: Subject<void> = new Subject<void>();
  public userInfo!: IAPIGatewayStore;
  public invalid: boolean = true;
  public loadType = "";
  public message = "";
  constructor( private readonly store: Store,
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(data.message){
      this.message = data.message;
    }
   }

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });

    //this.message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym53: shared.modal.dialog.badly.created.quote`;
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
