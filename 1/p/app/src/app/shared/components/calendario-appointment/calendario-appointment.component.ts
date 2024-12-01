import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatCalendar, MatCalendarView } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { map, Observable, of, Subject, Subscription, takeUntil } from 'rxjs';
import { AppointmentDialogComponent } from '../appointment-dialog/appointment-dialog.component';
import { IDisponibilidadCitas } from 'src/app/core/interfaces/disponibilidad-citas.interface';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { Store } from '@ngrx/store';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { getHorariosDisponibles, getHorariosDisponiblesCC } from 'src/app/state/shared/shared.actions';
import { UtilService } from '../../services/util.service';
import { IHorariosDisponibles } from 'src/app/core/interfaces/storage-cita.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageserviceService } from '../../services/storageservice.service';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-calendario-appointment',
  templateUrl: './calendario-appointment.component.html',
  styleUrls: ['./calendario-appointment.component.css']
})
export class CalendarioAppointmentComponent implements OnInit, OnDestroy {
  public selectedDate: Date | null = null;
  public selectedDateAnt: Date;
  public minDate: Date;
  public maxDate: Date;
  public monthCalendar: string;
  public hasSearchButton: boolean = false;
  @Input("loadType") public loadType: string = "";
  @Input("hblList") public hblList: string[] = [];
  @Input("placa") public placa: string = "";
  @Input("containersList") public containersList: string = '';
  @Input("listUnits") public listUnits: {"id": string, "type": string, "value": number, "holdConsigneeActive": boolean}[] = [];
  @Input("isContainersImport") public isContainersImport = false;
  @Input("isContainersExport") public isContainersExport = false;
  @Input("siteAppointment") public siteAppointment: string | null = null;
  @Input("isHoldConsigneeActive") public isHoldConsigneeActive = false;
  @ViewChild(MatCalendar) calendar!: MatCalendar<Date>;
  @Output() dataToParent = new EventEmitter<any>();
  private stateChangesSubscription!: Subscription;
  public disponibilidadCitas: Observable<IDisponibilidadCitas[] | null> = new Observable<IDisponibilidadCitas[] | null>();
  public destroy$: Subject<void> = new Subject<void>();
  public dataDisponibilidadCitas: IDisponibilidadCitas[] = [];
  public specialDays: string[] = [];
  private specialDaysArray: any[] = [];
  public hourSelected: string = "";
  private storageSubscription!: Subscription;
  private isSelectDate = false;


  constructor(private dateAdapter: DateAdapter<Date>, private dialog: MatDialog, private readonly store: Store,
    private readonly utilService: UtilService, private readonly matSnackBar: MatSnackBar,  private renderer: Renderer2,
    private storageService:StorageserviceService,
    private notificationsPortalService: NotificationsService
  ){
    this.selectedDate = null;
    this.selectedDateAnt = new Date();
    const today = new Date();
    this.minDate = today;
    this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    moment.locale('es');
    this.monthCalendar = moment().locale('es').month(new Date().getMonth()).format('MMMM');
    
  }

  ngOnInit(): void {
    
    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$),
      map((sharedStore: ISharedStore) => ({
        disponibilidadCitas: sharedStore.disponibilidadCitas,

      }))
    ).subscribe({
      next: (data: { disponibilidadCitas: IDisponibilidadCitas[] | null; }) => {
        this.disponibilidadCitas = of(data.disponibilidadCitas);
        if(this.disponibilidadCitas){
          const citas = this.disponibilidadCitas.pipe().subscribe({
            next: (citas: IDisponibilidadCitas[] | null) => {
              if(citas){
                this.dataDisponibilidadCitas = citas;
                this.specialDays = this.dataDisponibilidadCitas.map(cita => cita.date);
              }
            },
            error: error => console.error(error)
          });
          
        }
        
      },
      error: error => console.error(error)
    });

    this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
        if (action.action === 'setDate'){
          if(!action.value){
            this.selectedDate = null;
            this.dataToParent.emit(null);
          }
        }


    });
  }

  ngAfterViewInit() {
    this.stateChangesSubscription = this.calendar?.stateChanges.subscribe(() => {
      if (moment.isMoment(this.calendar?.activeDate)) {
        this.monthSelected(this.calendar.activeDate);
      }
    });
  }
  public submit(event:any){
    //console.log("event.....", event);
  }

  public onDateSelected(date: moment.Moment) {
 
    this.isSelectDate = false;
    this.selectedDate = date.toDate();
    this.operationDate();
   
  }

  public onCalendarClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const selectedCell = target.closest('.mat-calendar-body-cell-content');
    
    if (selectedCell && this.isSelectDate) {
    
      this.operationDate();
      // Si es el mismo día seleccionado, abre el diálogo igual
      
    }
  }

  private operationDate(){
    if (this.selectedDate){
      this.selectedDateAnt = this.selectedDate;
      //obtener el numero del dia y del mes del selectedDate
      const day = this.selectedDate.getDate();
      const month = this.selectedDate.getMonth() + 1;
      
      if (this.specialDays){
        this.specialDays.forEach((element) => {
          const partes = element.split('-');
          const diaString = partes[0];
          const mesString = partes[1];
          const diaNumero = parseInt(diaString, 10);
          const mesNumero = parseInt(mesString, 10);
          this.specialDaysArray.push({ dia: diaNumero, mes: mesNumero });
        });
        
        if (this.specialDaysArray.some(specialDay => specialDay.dia === day && specialDay.mes === month)){
          const fechaIso8601 = moment(this.selectedDate).toISOString();
          
          if(this.loadType === 'cs'){
            
            this.utilService.getStorageCita({ hblList: this.hblList, dateTva: fechaIso8601 }).subscribe({
              next: (response: any[]) =>{
                this.store.dispatch(getHorariosDisponibles({ data: { date: moment(this.selectedDate).unix(), placa: this.placa } }));
                this.openDialog(this.selectedDate);
              },
              error : (error) => {
                let mensajeError = "Error al consultar el hbl";
                if (error.error.error) {
                  mensajeError = error.error.error;
                }
                this.matSnackBar.open(mensajeError, "",
                  {
                    verticalPosition: "top",
                    panelClass: ["error-snackbar"],
                    duration: 5000
                  }
                );
              }
            });
          }else if(this.loadType === 'cc'){
            const siteAppointmentC = this.siteAppointment ? this.siteAppointment: "";
            this.store.dispatch(getHorariosDisponiblesCC({ data: { date: moment(this.selectedDate).unix(), units: this.containersList, siteAppointment: siteAppointmentC } }));
            this.openDialog(this.selectedDate, this.listUnits);
            this.makeNotificationDoubleCycle();
          }
          
        
        }
      } 
    }
  }


  public openDialog(dateSelect: Date | null, listUnits: {"id": string, "type": string, "value": number}[] = []): void {
    const dialogRef = this.dialog.open(AppointmentDialogComponent, {
      //antes el width era 1500px
      width: this.loadType === 'cs'? '1000px': '1200px',
      data: { 
        loadType: this.loadType,
        dateSelect: dateSelect,
        listUnits: listUnits,
        isContainersExport: this.isContainersExport,
        isContainersImport: this.isContainersImport,
        isHoldConsigneeActive: this.isHoldConsigneeActive
       },
    });
  
    dialogRef.afterClosed().subscribe(result => {
    
      
      if (result && result.selectedSlot){
        this.selectedDate = new Date(this.selectedDate!);
        const data = { fechaSeleccionada:  dateSelect, franjaHorariaSeleccionada: result.selectedSlot.hora };
        this.hourSelected = result.selectedSlot.hora;
        this.isSelectDate = true;
        this.dataToParent.emit(data);
      }else{
        this.selectedDate = null;
        this.dataToParent.emit(null);
      }
      
    });
  }

  isSpecialDay(day: number, month: number, year: number): boolean {
    // Ejemplo: el día 15 de cualquier mes es especial
    return day === 17;
  }

  public onDateCleared(): void {
    this.selectedDate = null;
    this.dataToParent.emit(null);
    
  }
  
  dateClass = (d: Date): string => {
    const day = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    
    // Define tu lógica para los días especiales
    if (this.isSpecialDay(day, month, year)) {
      return 'special-day';
    }
    return '';
  };

  monthSelected(newMonth: moment.Moment) {
    if (newMonth instanceof moment) {
      const month = newMonth.month() + 1;
      this.monthCalendar = moment().locale('es').month(month - 1).format('MMMM');
     
    } 
  }

  private makeNotificationDoubleCycle(){
    if (this.isContainersExport && this.isContainersImport && this.siteAppointment === 'AGUADULCE'){
      this.notificationsPortalService.getNotificationByPrivileges('code_01', '300px', {
        top: '50px',
        right: '50px' 
      });
    }
    
  }

  



  ngOnDestroy() {
    if (this.stateChangesSubscription){
      this.stateChangesSubscription.unsubscribe();
    }
    
  }
}
