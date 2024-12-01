import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { IHorariosDisponibles, IHorariosDisponiblesCC } from 'src/app/core/interfaces/storage-cita.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';

@Component({
  selector: 'app-appointment-dialog',
  templateUrl: './appointment-dialog.component.html',
  styleUrls: ['./appointment-dialog.component.css']
})
export class AppointmentDialogComponent implements OnInit, OnDestroy {
  public userInfo!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>();
  public horariosDisponiblesDefinitivos: IHorariosDisponibles[] = [];
  public horariosDisponiblesDefinitivosCC: IHorariosDisponiblesCC[] = [];
  public horasDisponibles: string[] = [];
  public columna1: {hora: string, icono: string}[] = [];
  public columna2: {hora: string, icono: string}[] = [];
  public isNowDay = false;
  public horaEIcono:  {hora: string, icono: string}[] = [];
  public selectedSlot: any = null;
  public loadType = "";
  public listUnits: {"id": string, "type": string, "value": number, "holdConsigneeActive": boolean}[] = [];
  public isContainersImport = false;
  public isContainersExport = false;
  public isHoldConsigneeActive = false;
  public columnaCC1: {hora: string, icono: string, icono2: string, icono3: string, icono4: any[]}[] = [];
  //public columnaCC2: {hora: string, icono: string, icono2: string, icono3: string, icono4: any[]}[] = [];
  public horaEIconoCC: {hora: string, icono: string, icono2: string, icono3: string, icono4: any[]}[] = [];
  colspanValue = 3;
  public lineas: string[] = [];
  private capacitySubscription!: Subscription;
  horarios: string[] = [
    "00:00 a 00:59",
    "01:00 a 01:59",
    "02:00 a 02:59",
    "03:00 a 03:59",
    "04:00 a 04:59",
    "05:00 a 05:59",
    "06:00 a 06:59",
    "07:00 a 07:59",
    "08:00 a 08:59",
    "09:00 a 09:59",
    "10:00 a 10:59",
    "11:00 a 11:59",
   
    

  ];
  horariosDos: string[] = [
    "12:00 a 12:59",
    "13:00 a 13:59",
    "14:00 a 14:59",
    "15:00 a 15:59",
    "16:00 a 16:59",
    "17:00 a 17:59",
    "18:00 a 18:59",
    "19:00 a 19:59",
    "20:00 a 20:59",
    "21:00 a 21:59",
    "22:00 a 22:59",
    "23:00 a 23:59"
  ];

  constructor(public dialogRef: MatDialogRef<AppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private readonly store: Store,){
     
      if(data.dateSelect){
        this.loadType = data.loadType;
        this.listUnits = data.listUnits;
        this.isContainersExport = data.isContainersExport;
        this.isContainersImport = data.isContainersImport;
        this.isHoldConsigneeActive = data.isHoldConsigneeActive;
        //eliminar repetidos
        this.listUnits = this.listUnits.filter((item, index, self) =>
          index === self.findIndex((t) => (
            t.id === item.id && t.type === item.type
          ))
        );
       
        const dateSelect = new Date(data.dateSelect);
        const today = new Date();
        if(dateSelect.getDate() === today.getDate() && dateSelect.getMonth() === today.getMonth() && dateSelect.getFullYear() === today.getFullYear()){
          this.isNowDay = true;
        }
      }

  }

 

  ngOnInit(): void {
    
    this.columna1 = [];
    this.columna2 = [];
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: ISharedStore) => {
        if (this.loadType === 'cs'){
          if(result.horariosDisponibles && result.horariosDisponibles.length > 0){
          
            const horariosDisponibles = result.horariosDisponibles;
            this.horariosDisponiblesDefinitivos = horariosDisponibles.filter((item, index, self) => self.findIndex(t => t.start_date_f === item.start_date_f) === index);
            this.formatearPresentacion();
          }
      }else if(this.loadType === 'cc'){
          if(result.horariosDisponiblesCC && result.horariosDisponiblesCC.length > 0){
            const horariosDisponibles = result.horariosDisponiblesCC;
           
            this.horariosDisponiblesDefinitivosCC = horariosDisponibles.filter((item, index, self) => self.findIndex(t => t.appt_hour === item.appt_hour) === index);
           
            this.formatearPresentacion();
          }
        }
      }})
  }


  //metodo para formatear la fecha 
  formatearPresentacion(): void{
    this.horasDisponibles = [];
    this.horaEIcono = [];
    this.columna1 = [];
    this.columna2 = [];
    this.lineas = [];
    if (this.loadType === 'cs'){
      this.horariosDisponiblesDefinitivos.forEach(element => {
        const aray_fecha = element.start_date_f.split(":");
        const fecha = ""+aray_fecha[0]+":"+aray_fecha[1] + " a " + aray_fecha[0]+ ":59";
        //si fecha ya esta no la agrego
        if(this.horasDisponibles.includes(fecha)){
          return;
        }
        const icono = this.determinarIcono(aray_fecha[0], 'cs');
        if(icono === "not_available"){
          return;
        }
       
        this.horasDisponibles.push(fecha);
        
        this.horaEIcono.push({hora: fecha, icono: icono});
      });
     
      //const mid = Math.ceil(this.horaEIcono.length / 2);
      this.columna1 = this.horaEIcono;
      //this.columna1 = this.horaEIcono.slice(0, mid);
      //this.columna2 = this.horaEIcono.slice(mid);
    }else if(this.loadType === 'cc'){
      
      this.horaEIconoCC = [];
      this.horariosDisponiblesDefinitivosCC.forEach(element => {
        const array_fecha = element.appt_hour.split(":");
        const fecha = ""+array_fecha[0]+":"+array_fecha[1] + " a " + array_fecha[0]+ ":59";
        if(this.horasDisponibles.includes(fecha)){
          return;
        }
       if (this.isNowDay){
        const horaNumero = parseInt(array_fecha[0], 10);
        
        
        
        let isHoldConsigneeActiveCC = false;
        this.listUnits.forEach((unitC =>{
          if(unitC.holdConsigneeActive){
            isHoldConsigneeActiveCC = true;
          };
        }));
        let horaActual = new Date().getHours();
        
        if (isHoldConsigneeActiveCC){
          horaActual = horaActual +3;
          if (horaNumero <= horaActual){
            return;
          }
         
        }
       }
        
        this.horasDisponibles.push(fecha);
        
        const icono = this.determinarIconoCC(element.retiro, element.retiroDTA, element.ingreso, element.contenedores);
        this.horaEIconoCC.push({hora: fecha, icono: icono[0], icono2: icono[1], icono3: icono[2], icono4: icono[3]});
        if (Array.isArray(element.contenedores) && element.contenedores.length > 0){
          element.contenedores.forEach(contenedor => {
            if (!this.lineas.includes(contenedor.tipo)){
              this.lineas.push(contenedor.tipo);
            }
          });
        }
        
        

      });
      //const mid = Math.ceil(this.horaEIconoCC.length / 2);
      this.columnaCC1 = this.horaEIconoCC;
      //this.columnaCC1 = this.horaEIconoCC.slice(0, mid);
      //this.columnaCC2 = this.horaEIconoCC.slice(mid);
    
    }
    
  }

  //metodo para determinar el icono segun la hora
  determinarIcono(hora: string, type:string): string{
    
    const horaNumero = parseInt(hora, 10);
    if(this.isNowDay){
      let horaActual = new Date().getHours();
      if (type === 'cs'){
        horaActual = horaActual + 2;
      }
      if (this.isHoldConsigneeActive){
        horaActual = horaActual +1;
      }
      
      if(horaNumero <= horaActual){
        return "not_available"
      }else{
        return "availability"
      }
    }
    return "availability";
  }

  determinarIconoCC(retiro: number, dta: number, ingreso: number, contenedores: any): any[]{
    let icono1 = '';
    let icono2 = '';
    let icono3 = '';
    let iconoVacios: string[] = []; 
    

    let icono4 = '';
    if (retiro === 0){
      icono1 = "not_available";
    } else if(retiro === 1){
      icono1 = "warning";
    } else if(retiro > 1){
      icono1 = "availability"
    }

    if (dta === 0){
      icono2 = "not_available";
    } else if(dta === 1){
      icono2 = "warning";
    } else if(dta > 1){
      icono2 = "availability"
    }

    if (ingreso === 0){
      icono3 = "not_available";
    } else if(ingreso === 1){
      icono3 = "warning";
    } else if(ingreso > 1){
      icono3 = "availability"     
    }
    if (Array.isArray(contenedores) && contenedores.length > 0){
      contenedores.forEach(contenedor => {
        let valor = contenedor.valor;
        if (typeof contenedor.valor === 'string'){
          valor = parseInt(contenedor.valor);
        }
        if (valor === 0){
          icono4 = 'not_available';
        } else if(valor === 1){
          icono4 = 'warning';
        } else if(valor > 1){
          icono4 = 'availability';
        }
        
        iconoVacios.push(icono4);
      });
    }

    return [icono1, icono2, icono3, iconoVacios];

  }
  
  

  selectSlot(slot: any) {
    this.selectedSlot = slot;
  }

  isSelected(slot: any): boolean {
    return this.selectedSlot === slot;
  }

  confirmSelection() {
    this.dialogRef.close({ result: true, selectedSlot: this.selectedSlot });
  }

  renderIcon(index: number): any {
    if (index % 3 === 0) {
      return 'check';
    } else if (index % 3 === 1) {
      return 'x';
    } else {
      return 'alert';
    }
  }

  public isSlotNotAvailable(slot: any): boolean {
    return slot.icono === 'not_available' &&
           slot.icono2 === 'not_available' &&
           slot.icono3 === 'not_available' &&
           Array.isArray(slot.icono4) && 
           slot.icono4.every((icon: string) => icon !== undefined && icon === 'not_available');
  }

  public isSlotSelectable(slot: any): boolean {
    return (slot.icono !== 'not_available' || 
            slot.icono2 !== 'not_available' || 
            slot.icono3 !== 'not_available' || 
            (Array.isArray(slot.icono4) && slot.icono4.some((icon: string) => icon !== 'not_available')));
  }



  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.listUnits = [];
    this.isHoldConsigneeActive = false;
    this.lineas = [];
    this.horariosDisponiblesDefinitivosCC = [];
  }
}
