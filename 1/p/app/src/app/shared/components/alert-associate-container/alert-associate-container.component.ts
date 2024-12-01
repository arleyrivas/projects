import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-alert-associate-container',
  templateUrl: './alert-associate-container.component.html',
  styleUrls: ['./alert-associate-container.component.css']
})
export class AlertAssociateContainerComponent implements OnInit{
  public checked: boolean = false;
  public destroy$: Subject<void> = new Subject<void>();
  public userInfo!: IAPIGatewayStore;
  public invalid: boolean = true;
  public associateFormGroup: FormGroup = new FormGroup({});
  public messageAlert: string = '';
                


  constructor( private readonly store: Store,
    public dialogRef: MatDialogRef<AlertAssociateContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
   }

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });

    this.associateFormGroup = new FormGroup({
      differences: new FormControl({ value: "", disabled: false,  }, [Validators.required, Validators.minLength(10)]),
    });

    const messageText = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym41: shared.alert.associate.container`;
    this.messageAlert = messageText.replace(/\n/g, '<br/>');
   }

  public onCheck(event: any): void {
    this.checked = event.checked;
  }

  submit(): void {
    this.dialogRef.close({ success: true, data: this.associateFormGroup.get('differences')?.value }); // cierra el diálogo con resultado positivo
  }

  cancel(): void {
    this.dialogRef.close(false); // cierra el diálogo con resultado negativo
  }
  

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
