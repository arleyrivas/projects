import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, mergeMap, Observable, of, Subject, Subscription, takeUntil } from 'rxjs';
import { IAgentIdOrNameSearch } from 'src/app/core/interfaces/agent-id-or-name-search.interface';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { getAgent, getforBooking, getPhysicalContainer, getValidateContainer, getValidateDigitCheck, setSelectedAgent, setValidateDigitCheck } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { UtilService } from '../../services/util.service';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { StorageserviceService } from '../../services/storageservice.service';

@Component({
  selector: 'app-containers-searcher',
  templateUrl: './containers-searcher.component.html',
  styleUrls: ['./containers-searcher.component.css']
})
export class ContainersSearcherComponent implements  OnInit,OnDestroy, OnChanges {
  @Input() public controlDisabled: boolean = false;
  @Input() public searcher: boolean = true;
  @Input() public data: string = "";
  @Input() public agent: string | null = null;
  @Output() public containerSearch: EventEmitter<string> = new EventEmitter<string>(); 
  @Input() public isAssociateContainer: boolean = false;
  public containersFormGroup: FormGroup = new FormGroup({});

  public destroy$: Subject<void> = new Subject<void>();
  public sharedStore: Observable<IAgentIdOrNameSearch[] | null> = new Observable<IAgentIdOrNameSearch[] | null>();
  public containerSearcherFormControl: FormControl = new FormControl();
  public showContainerError = false;
  public showContainerErrorText = "";
  public unitNbrList: string[] = [];
  public isExistUnitNbr = false;
  private storageSubscription!: Subscription;

  constructor(private readonly store: Store, private utilService: UtilService,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private storageService:StorageserviceService,
  ) { }


  ngOnInit(): void {
    this.containersFormGroup = new FormGroup({
      container: new FormControl({ value: "", disabled: this.controlDisabled }, [Validators.required, this.alphaNumericValidator()]),
      
    });
    this.showContainerError = false;
    this.showContainerErrorText = "";

    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: ISharedStore) => {
        if (result){
          if (result.bookingID){
            result.bookingID.forEach((booking) => {
              if(booking.unitNbr){
                if (!this.unitNbrList.includes(booking.unitNbr)){
                  this.unitNbrList.push(booking.unitNbr);
                }
              }
            });
          }
        }}});


    if(this.searcher){
      if (this.searcher) {
        this.containersFormGroup.valueChanges.pipe(
          debounceTime(800),
          takeUntil(this.destroy$)
        ).subscribe({
          next: (value: any) => {
            if (this.containersFormGroup.valid) {
              const containerValue = value.container;
              this.showContainerError = false;
              this.showContainerErrorText = "";
                if(this.unitNbrList.includes(containerValue)){
                  this.isExistUnitNbr = true; 
                }
                if(!this.isExistUnitNbr){
                  this.utilService.getIsInOrderContainer(containerValue).subscribe({
                    next:(response: boolean) => {
                      if(response){
                        this.showContainerError = true;
                        this.showContainerErrorText = $localize `:@@1fecd49ca1353e5ebc140f217b03ef92e7f9158415d0aae587de2a6f2d5da176: export.views.export-preadvice_form.UNIT_ORDER_ERROR`;
                        this.containerSearch.emit("");
                      }else{
                        this.store.dispatch(getPhysicalContainer({ container: containerValue }));
                        this.store.dispatch(getforBooking({ container: containerValue }));
                        this.store.dispatch(getValidateContainer({ container: containerValue }));
                        this.store.dispatch(getValidateDigitCheck({ container: this.base64EncryptionUtilService.encrypt(containerValue) }));
                        this.containerSearch.emit(containerValue);
                      }
                    },
                    error : (error) => {
                      console.error(error)
                    }
                  });
                }
                else{
                  this.showContainerErrorText = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym32: modules.share.containers.search.unit.exist`;
                }
                
            }
                
            else if (this.isAssociateContainer) {
              this.showContainerError = false;
              this.isExistUnitNbr = false;
              this.containerSearch.emit("");
            }
            
          },
          error: error => console.error(error)
        });
      }
    }

    this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
     
      if (action.action === 'cleanAssociateContainerForm'){
        /* this.containersFormGroup.get('container')?.setValue("", { emitEvent: false });
        this.showContainerError = false;
        this.showContainerErrorText = ""; */
        
      }});
  }

  public alphaNumericValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      
      // Expresión regular para validar 4 letras seguidas de 7 números
      const pattern = /^[A-Za-z]{4}\d{7}$/;
      
      // Verifica si el valor cumple con el patrón
      const valid = pattern.test(value);
  
      // Retorna un error si no es válido, o null si es válido
      return valid ? null : { 'alphaNumeric': { value: control.value } };
    };
  }


  get container() {
    return this.containersFormGroup.get('container');
  }

  // Método para convertir el valor a mayúsculas
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.toUpperCase();
    this.containersFormGroup.get('container')?.setValue(input.value, { emitEvent: false });
  }

 ngOnChanges(changes: SimpleChanges) {
    if (changes['controlDisabled'] && this.isAssociateContainer) {
      // Forzar la actualización visual
      if (this.controlDisabled) {
        this.disableForm();
      } else {
        this.enableForm();
      }
    }
  } 

  // Método para deshabilitar el formulario
  disableForm() {
    this.controlDisabled = true;
    this.containersFormGroup.disable();
  }

  // Método para habilitar el formulario
  enableForm() {
    this.controlDisabled = false;
    this.containersFormGroup.enable();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
