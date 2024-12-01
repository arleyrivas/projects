import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { StorageserviceService } from '../../services/storageservice.service';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { getCitasDisponibles, getCitasDisponiblesCC } from 'src/app/state/shared/shared.actions';

@Component({
  selector: 'app-type-transport',
  templateUrl: './type-transport.component.html',
  styleUrls: ['./type-transport.component.css']
})
export class TypeTransportComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("checkbox" ) public checkbox!: MatCheckbox;
  @Input() public data: string = "";
  @Input() public inputPlaceholder: string = " Ingrese el manifiesto de la carga";
  @Input() public indication: string = "N. de Radicado del Manifiesto / N. de Radicado del Viaje Municipal";
  @ViewChild('inputValue') inputElement!: ElementRef;
  @Output() dataTypeTransporte = new EventEmitter<any>();
  @Input() initialInputValue: string[] = [];
  @Input("loadType") public loadType: string = "";
  @Input("siteAppointment") public siteAppointment: string | null = null;
  
  private storageSubscription!: Subscription;
  public transportePrivado = false;
  public typeTransportFormControl: FormControl = new FormControl();
  public userInfo!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>();
  values: string[] = [];
  public isInvalid: boolean = false;
  
  constructor(
    private readonly store: Store,
    private readonly httpClient: HttpClient,
    private readonly router: Router,
    private storageService:StorageserviceService,
  ) { }

  ngOnInit(): void {
    
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    if (this.loadType === 'cs'){
      this.store.dispatch(getCitasDisponibles());
    } else if(this.loadType === 'cc'){
      const siteAppointmentC = this.siteAppointment ? this.siteAppointment: ""
      this.store.dispatch(getCitasDisponiblesCC({siteAppointment: siteAppointmentC}));
    }
    
    this.storageService.setPrivateTransport(false);
    
   

  }


  onInput(event: Event) {
    
  }

  ngAfterViewInit(): void {
    if (this.initialInputValue.length > 0) {
      this.initialInputValue.forEach((value: string) => {
        if (value !== "1"){
          this.processInputValue(value);
          this.storageService.setPrivateTransport(false);
          this.dataTypeTransporte.emit({privado: this.transportePrivado, values: this.values});
        } else{
          if (this.checkbox){
            this.checkbox.checked = true;
            this.transportePrivado = true;
            this.storageService.setPrivateTransport(true);
            this.dataTypeTransporte.emit({privado: this.transportePrivado, values: this.values});
          }
        } 
      });
    }
  }


  public matChecboxTransportePrivado(event: MatCheckboxChange, element: MatCheckbox): void {
    if (event.checked) {
      this.transportePrivado = true;
      this.inputElement.nativeElement.value = ''; 
      this.values = [];
      this.storageService.setPrivateTransport(true);
      this.dataTypeTransporte.emit({privado: this.transportePrivado, values: this.values});
      
    } else{
      this.transportePrivado = false;
      this.storageService.setPrivateTransport(false);
      this.dataTypeTransporte.emit({privado: this.transportePrivado, values: this.values});
    }
  }

  checkEnter(event: KeyboardEvent, inputElement: HTMLInputElement): void {
    if (event.key === ',' || event.key === 'Enter') {
      let inputValue = "";
      if (event.key === ','){
        inputValue = inputElement.value.slice(0, -1); // Elimina la coma del valor
      } else{
        inputValue = inputElement.value
      }
      if (this.values.length === 3){
        return
      }
      this.processInputValue(inputValue);
      if (!this.isInvalid) {
        inputElement.value = '';
      }
      const dataAEnviar = {privado: this.transportePrivado, values: this.values};
      this.dataTypeTransporte.emit(dataAEnviar);
      
      event.preventDefault(); // Evita que la coma se agregue al input
      
    }
  }

  onBlur(event: FocusEvent, inputElement: HTMLInputElement): void {
    let inputValue = inputElement.value;
    if (this.values.length === 3){
      return
    }
    this.processInputValue(inputValue);
    if (!this.isInvalid) {
      inputElement.value = '';
    }
    const dataAEnviar = {privado: this.transportePrivado, values: this.values};
    this.dataTypeTransporte.emit(dataAEnviar);
  }

  public existInValues(value: string): boolean {
    const index = this.values.indexOf(value);
    if (index > -1) {
      return true;
    }
    return false;
  }

  public processInputValue(inputValue: string): void {
    this.isInvalid = false;
    if (inputValue) {
      if (inputValue.length < 8 || isNaN(Number(inputValue))) {
        this.isInvalid = true;
        inputValue = `invalido:${inputValue}`;
      } else {
        if (!this.existInValues(inputValue)) {
          this.values.push(inputValue);
        }
      }
      
    }
  }

  public removeValue(index: number): void {
    const cantidad = this.values.length;
    if (cantidad > 1){
      if (!isNaN(Number(this.values[index]))) {
        
      }
    }else{
      if (!isNaN(Number(this.values[index]))) {
       
      }
    }
    
    this.values.splice(index, 1);
    const dataAEnviar = {privado: this.transportePrivado, values: this.values};
    this.dataTypeTransporte.emit(dataAEnviar);
  }


  ngOnDestroy(): void {
    if (this.storageSubscription) {
      this.storageSubscription.unsubscribe();
    }
    this.destroy$.next();
    this.destroy$.complete();
    
  }
}
