import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-cutoff-dialog',
  templateUrl: './cutoff-dialog.component.html',
  styleUrls: ['./cutoff-dialog.component.css']
})
export class CutoffDialogComponent {
  bookingDateValidationList: {early: boolean, documentalValidation: boolean, unitNbr: string}[] = [];
  public destroy$: Subject<void> = new Subject<void>();
  public userInfo!: IAPIGatewayStore;
  public messageText: string = '';
  public mesaageText2: string = '';
  public messageText3: string = '';
  public messageText4: string = '';

  constructor( private readonly store: Store,
    public dialogRef: MatDialogRef<CutoffDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if(data){
      if (data.bookingDateValidationList){
        this.bookingDateValidationList = data.bookingDateValidationList;
      }
      if (this.bookingDateValidationList.length > 0){
        this.bookingDateValidationList = this.bookingDateValidationList.filter(
          (item, index, self) => 
            index === self.findIndex((t) => (
              t.unitNbr === item.unitNbr && t.early === item.early && t.documentalValidation === item.documentalValidation
            ))
        );
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
    this.messageText = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym44: shared.alert.cutoff.dialog.EARLY_ARRIVAL_MSG_1`;
    this.mesaageText2 = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym45: shared.alert.cutoff.dialog.EARLY_ARRIVAL_MSG_2`;
    this.messageText3 = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym46: shared.alert.cutoff.dialog.EARLY_DOCUMENTAL_MSG_1`;
    this.messageText4 = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym55: shared.alert.cutoff.dialog.EARLY_DOCUMENTAL_MSG_2`;


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
