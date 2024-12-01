import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { IAppointment } from 'src/app/core/interfaces/appointment.interface';
import { IHistoryAppointmentsParameters } from 'src/app/core/interfaces/history-pin-parameters.interface';
import { ScrollService } from '../../services/scroll.service';
import { Router } from '@angular/router';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { HistorypinstateService } from '../../services/historypinstate.service';
import * as moment from 'moment';
import { cleanHistoryAppointments, getHistoryAppointments, updateAppointmentsParameters } from 'src/app/state/history/history.actions';
import { historyFeatureSelector } from 'src/app/state/history/history.selector';
import { IHistoryStore } from 'src/app/core/interfaces/history.interface';
import { MatSort } from '@angular/material/sort';
import { StorageserviceService } from 'src/app/shared/services/storageservice.service';

import { getDataAppointmentDetail, setDataElementsDetachedLoad } from 'src/app/state/detached-load/detached-load.actions';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { getConfigurationPortal } from 'src/app/state/shared/shared.actions';
import { setDataElementsContainerizedLoad } from 'src/app/state/containerized-load/containerized-load.actions';
import { getDataAppointmentDetail as  getDataAppointmentDetailCC} from 'src/app/state/containerized-load/containerized-load.actions';

@Component({
  selector: 'app-history-appointments',
  templateUrl: './history-appointments.component.html',
  styleUrls: ['./history-appointments.component.css']
})
export class HistoryAppointmentsComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicContainer!: ViewContainerRef;

  public destroy$: Subject<void> = new Subject<void>();
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<IAppointment> = new MatTableDataSource<IAppointment>([])
  public page: number = 0;
  public existData: boolean = false;  
  public detailAppointments: boolean = false;
  public historyAppointmentSubscription: Subscription = new Subscription();
  private storageSubscription!: Subscription;

  public parameters!: IHistoryAppointmentsParameters;
  selectedState: Map<string, boolean> = new Map(); // Mantener el estado seleccionado localmente
  private lastSearch: string | null = null;
  public showCardAppointment: boolean = false;

  constructor(
    private readonly store: Store, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef,
    private scrollService: ScrollService,
    private resolver: ComponentFactoryResolver,
    private historyAppointmentStateService: HistorypinstateService,
    private router: Router,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private storageService:StorageserviceService,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService,
    
  ) { 
   
  }

  ngOnInit(): void {
    this.existData = true;
    this.loadData();
    
  }
  

  public submit(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public standardDateFormat(date: string): string {
    if(date) return moment(date, "DD/MM/YYYY").format("YYYY/MM/DD");
    else return "";
  }

  public getLoadIcon(frghtKind: string, state: string = ''): SafeHtml{
    let svg = '';
    if (state === 'CANCEL' || state === 'USED'){
      state = "0";
    }
    if (frghtKind === "C"){
      if (state != "0"){
        svg =`<svg id="container-carga" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.89 40.65">
        <defs>
        <style>
        .container-carga-1{stroke-width:.5px;fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;}
        .container-carga-2{stroke-width:.25px;fill:#66bb6a;stroke:none ;stroke-linecap:round;stroke-linejoin:round;}
        </style>
        </defs>
        <g id="container-carga-1-2">
        <rect class="container-carga-1" x=".25" y=".25" width="81.39" height="40.15" rx="2.45" ry="2.45"/>
        <rect class="container-carga-2" x="6.9" y="6.62" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="16.87" y="6.94" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="26.94" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="37.01" y="6.52" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="47.68" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="57.88" y="6.52" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2" x="68.07" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        </g></svg>`}
      else{
        svg =`<svg id="container-carga-inactive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.89 40.65">
        <defs>
        <style>
        .container-carga-1-inactive{stroke-width:.5px;fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;}
        .container-carga-2-inactive{stroke-width:.25px;fill:#231f20;stroke:none ;stroke-linecap:round;stroke-linejoin:round;}
        </style>
        </defs>
        <g id="container-carga-1-2">
        <rect class="container-carga-1-inactive" x=".25" y=".25" width="81.39" height="40.15" rx="2.45" ry="2.45"/>
        <rect class="container-carga-2-inactive" x="6.9" y="6.62" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="16.87" y="6.94" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="26.94" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="37.01" y="6.52" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="47.68" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="57.88" y="6.52" width="5.19" height="27.75" rx=".18" ry=".18"/>
        <rect class="container-carga-2-inactive" x="68.07" y="6.78" width="5.19" height="27.75" rx=".18" ry=".18"/>
        </g></svg>`
      }
    } else{
      if (state != "0"){
        svg = `<svg id="cargasuelta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.69 74.74">
        <defs>
        <style>
        .cargasuelta-1{fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;}
        .cargasuelta-2{fill:#66bb6a;}
        </style>
        </defs>
        <g id="cargasuelta_1-2">
        <polygon class="cargasuelta-1" points="39.34 40.15 19.8 53.45 .25 40.15 19.8 26.85 39.34 40.15"/>
        <polygon class="cargasuelta-2" points="58.89 26.85 39.34 40.15 19.8 26.85 39.34 13.55 58.89 26.85"/>
        <polyline class="cargasuelta-1" points="62.34 51.21 62.34 61.19 39.34 74.49 16.34 61.19 16.34 51.21"/>
        <polygon class="cargasuelta-1" points="39.34 13.55 19.8 26.85 .25 13.55 19.8 .25 39.34 13.55"/>
        <polygon class="cargasuelta-1" points="78.44 40.15 58.89 53.45 39.34 40.15 58.89 26.85 78.44 40.15"/>
        <polygon class="cargasuelta-1" points="78.44 13.55 58.89 26.85 39.34 13.55 58.89 .25 78.44 13.55"/>
        <line class="cargasuelta-1" x1="39.34" y1="74.49" x2="39.34" y2="40.15"/>
        </g>
        </svg>`
      }
      else{
        svg = `<svg id="cargasuelta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.69 74.74">
          <defs>
          <style>
          .cargasuelta-1-inactive{fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;stroke-width:.5px;}
          .cargasuelta-2-inactive{fill:#231f20;}
          </style>
          </defs>
          <g id="cargasuelta_1-2">
          <polygon class="cargasuelta-1-inactive" points="39.34 40.15 19.8 53.45 .25 40.15 19.8 26.85 39.34 40.15"/>
          <polygon class="cargasuelta-2-inactive" points="58.89 26.85 39.34 40.15 19.8 26.85 39.34 13.55 58.89 26.85"/>
          <polyline class="cargasuelta-1-inactive" points="62.34 51.21 62.34 61.19 39.34 74.49 16.34 61.19 16.34 51.21"/>
          <polygon class="cargasuelta-1-inactive" points="39.34 13.55 19.8 26.85 .25 13.55 19.8 .25 39.34 13.55"/>
          <polygon class="cargasuelta-1-inactive" points="78.44 40.15 58.89 53.45 39.34 40.15 58.89 26.85 78.44 40.15"/>
          <polygon class="cargasuelta-1-inactive" points="78.44 13.55 58.89 26.85 39.34 13.55 58.89 .25 78.44 13.55"/>
          <line class="cargasuelta-1-inactive" x1="39.34" y1="74.49" x2="39.34" y2="40.15"/>
          </g>
          </svg>`
      }
      
    }
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  
  public onScroll(): void {
    //this.scrollService.loadMore();
    if (this.parameters) {
      this.parameters.page += 1;
      this.parameters.cleanSelectedState = false;
      this.store.dispatch(updateAppointmentsParameters({ parametersAppointments: this.parameters }));
      this.store.dispatch(getHistoryAppointments(this.parameters));
    }
    
  }

  private loadData(){
    this.showCardAppointment = false;
    this.historyAppointmentSubscription = this.store.select(historyFeatureSelector).subscribe({
      next: (store: IHistoryStore) => {
        if (store.parametersAppointments) {
          this.parameters = { ...store.parametersAppointments }; // Guardar los parámetros
          if (this.parameters.cleanSelectedState){
            this.selectedState.clear();
          }
        }
        if (this.detailAppointments){
          this.reloadComponent();
          return
        }
        
        this.detailAppointments = false;
        this.displayedColumns = ['tipoTrx', 'appointmentNbr', 'placa', 'conductor', 'cita', 'state'];
        const initialElement = store.resultAppointments;
        
        
        let historyAppointments: IAppointment[] = [];
        initialElement.forEach(historyAppointment => {
          historyAppointments = [...historyAppointments, historyAppointment]
        })
        this.dataSource.filter = "";
        //const sortedData = historyAppointments.sort((a, b) => Number(b.appointmentNbr) - Number(a.appointmentNbr));
        
       
        this.dataSource.data = historyAppointments;
        if (store.resultAppointments.length > 0) {
          this.existData = true;
        }
        else{
          this.existData = false;
        }
        this.cdr.detectChanges(); 
        
        this.dataSource.sortingDataAccessor = (item: any, property: any) => {
          switch (property) {
            case 'cita': {
              let newDate = new Date(item.cita);
              return newDate;
            }
            default: {
              return item[property];
            }
          }
        }; 
        this.dataSource.sort = this.sort;
        this.cdr.detectChanges();
       
        
      },
      error: error => console.error(error)
    });
    this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
    
      if(action.action === 'showHistoryAppointment'){
        if (action.value){
          this.detailAppointments = true;
          this.showCardAppointment = false;
        }
      }
      
    });
  }

  private reloadComponent(): void {
    this.detailAppointments = false;
    this.loadData();
  }

  public clickAppointment(elemet: any): void {
    this.storageService.showHistoryAppointment(false);
    this.showCardAppointment = true;
    let appointment: string = elemet.appointmentNbr;
    this.storageService.cleanAll();
    let loadType = "cc";
    
   
    if (elemet.tipoTrx === "S"){
      loadType = "cs";
      const encryptedValue = this.aesEncryptionUtilService.encrypt(JSON.stringify(this.makeAppointmentDetail(elemet, loadType)));
      this.store.dispatch(getDataAppointmentDetail({ truckVisitNbr: appointment }));
      this.store.dispatch(setDataElementsDetachedLoad({ elementsDetachedLoad: encryptedValue }));
      this.store.dispatch(getConfigurationPortal());
    }
    else if(elemet.tipoTrx === "C"){
      loadType = "cc";
      const encryptedValue = this.aesEncryptionUtilService.encrypt(JSON.stringify(this.makeAppointmentDetail(elemet, loadType)));
      this.store.dispatch(getDataAppointmentDetailCC({ truckVisitNbr: appointment }));
      this.store.dispatch(setDataElementsContainerizedLoad({ elementsContainerizedLoad: encryptedValue }));
      this.store.dispatch(getConfigurationPortal());
    }
    localStorage.setItem('loadType', loadType);
    
  }

  private makeAppointmentDetail(apointment: IAppointment, loadType: string): any {
    const date = (apointment.cita).split(' ');
    const dateSplit = date[0].split('-');
    const hour = date[1].split(':');
    
    const data = {
      "requested_time": `${dateSplit[0]}-${dateSplit[1]}-${dateSplit[2]} ${hour[0]}:${hour[1]}:00`,
      "truck_visit_appt_nbr": apointment.appointmentNbr, 
      "truckVisit": apointment.appointmentNbr,
      "driver_license_nbr": apointment.license,
      "driver_name": apointment.conductor,
      "truck_license_nbr": apointment.placa,
      "state": apointment.state,
      "siteAppointment": apointment.siteAppointment ? apointment.siteAppointment : "",
      
    }
    return data;
  }

  public getLoadIconState(state: string = ''): SafeHtml{
    let svg = '';
    if (state === 'CANCEL'){
     
      svg =`<svg id="state-cancel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376.49 356.22" width="10" height="10">
      <defs><style>.cancel-1{fill:#333;stroke-width:0px;}</style></defs>
      <g id="state-cancel-2">
      <path class="cancel-1" d="m355.39,23.21c-17.99-19.51-34.3-32.67-53.81-14.71L9.96,277.35c-19.51,17.99-7.35,35.16,10.64,54.68h0c17.99,19.52,35,33.99,54.51,15.99L366.72,79.18c19.52-17.99,6.66-36.46-11.33-55.97Z"/><path class="cancel-1" d="m21.1,23.21C39.09,3.71,55.4-9.46,74.91,8.5l291.62,268.85c19.51,17.99,7.35,35.16-10.64,54.68h0c-17.99,19.52-35,33.99-54.51,15.99L9.77,79.18C-9.76,61.19,3.11,42.72,21.1,23.21Z"/>
      </g>
      </svg>`

       
    } else if (state ===  'USED'){
      svg = `<svg id="state-used" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 413.24 413.24" width="10" height="10">
      <defs><style>.sync-1{fill:#777677;stroke-width:0px;}</style></defs>
      <g id="state-used-2">
      <path class="sync-1" d="m380.58,143.21l-90.83-11.53c-6.62-.84-9.47-8.86-4.86-13.69l18.28-19.15c-26.66-18.06-60.17-28.85-96.55-28.85-71.89,0-130.18,61.04-130.3,136.4l-76.32-.06C.16,92.34,92.6,0,206.62,0c53.68,0,102.57,20.47,139.31,54.03l14.03-14.7c4.61-4.83,12.75-2.36,13.9,4.21l15.78,90.2c.94,5.4-3.61,10.16-9.05,9.47Z"/><path class="sync-1" d="m32.65,270.03l90.83,11.53c6.62.84,9.47,8.86,4.86,13.69l-18.28,19.15c26.66,
      18.06,60.17,28.85,96.55,28.85,71.89,0,130.18-61.04,130.3-136.4l76.32.06c-.16,113.97-92.6,206.32-206.62,206.32-53.68,0-102.57-20.47-139.31-54.03l-14.03,14.7c-4.61,4.83-12.75,2.36-13.9-4.21l-15.78-90.2c-.94-5.4,3.61-10.16,9.05-9.47Z"/>
      </g>
      </svg>`
    } else if (state === 'CREATED'){
      svg = `<svg id="state-create" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.81 67.12" width="10" height="10">
            <defs><style>.simple-check-1{fill:#66bb6a;}</style></defs>
            <g id="state-create-2">
            <path class="simple-check-1" d="m81.34,4.92c-3.81-4.14-7.27-6.93-11.41-3.12L27.66,40.77l-10.67-12.21c-3.7-4.23-7.44-1.83-11.68,1.88-4.24,3.7-7.37,7.3-3.66,11.54l11.02,12.61,9,10.29c2.42,2.77,6.65,3,9.36.5l10.05-9.26,42.67-39.33c4.14-3.81,1.41-7.73-2.4-11.87Z"/>
            </g>
            </svg>` 
    } else if (state === 'EXPIRED'){
      svg = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" width="10" height="10">
       <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> 
       <path d="M2380 5114 c-19 -2 -78 -9 -130 -14 -330 -36 -695 -160 -990 -336 -375 -224 -680 -529 -904 -904 -175 -292 -291 -632 -338 -990 -16 -123 -16 -497 0
        -620 47 -358 163 -698 338 -990 224 -375 529 -680 904 -904 290 -173 639 -293 980 -336 133 -17 375 -23 493 -12 95 8 113 13 149 38 106 75 114 221 18 308 -55
         50 -92 57 -260 49 -951 -40 -1831 573 -2129 1483 -96 294 -130 585 -101 875 25 250 102 523 209 743 207 424 572 790 996 997 524 255 1136 287 1685 86 429 
         -157 802 -450 1055 -827 l63 -95 -308 -5 -308 -5 -43 -30 c-117 -83 -117 -247 0 -330 l43 -30 360 -3 c407 -3 466 3 590 61 182 86 313 252 353 448 13 63 15 
         139 13 431 l-3 355 -27 40 c-41 62 -90 88 -168 88 -78 0 -127 -26 -168 -88 l-27 -40 -3 -310 -3 -309 -51 74 c-88 125 -158 209 -278 332 -394 405 -888 658 
         -1455 747 -124 19 -467 33 -555 23z"/> <path d="M2492 4349 c-45 -13 -108 -80 -121 -126 -7 -25 -11 -297 -11 -808 l0 -770 -380 -380 c-256 -257 -384 -392
          -395 -417 -29 -71 -13 -161 38 -217 52 -56 151 -76 225 -46 41 18 820 787 875 865 l32 45 0 865 0 865 -24 38 c-47 76 -151 113 -239 86z"/> <path d="M4839 
          2250 c-49 -9 -104 -44 -128 -83 -28 -45 -81 -247 -81 -308 0 -96 60 -169 159 -190 44 -9 60 -8 96 6 95 36 118 72 163 250 31 125 32 169 2 225 -39 75 -123 115 -211 100z"/>
           <path d="M4390 1339 c-35 -14 -81 -60 -159 -159 -95 -118 -111 -180 -72 -265 33 -72 102 -115 183 -115 72 0 119 32 206 138 105 129 115 150 110 228 -4 70 -20 98 -82 148 -31 25 
           -47 31 -99 33 -34 2 -73 -2 -87 -8z"/> <path d="M3670 691 c-46 -15 -245 -119 -269 -142 -95 -90 -70 -253 48 -316 76 -40 120 -33 270 42 136 68 166 95 190 164 23 71 5 140 -53 197 
           -54 55 -121 74 -186 55z"/> 
           </g> 
           </svg>`
    }
    
   
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.historyAppointmentSubscription) {
      this.historyAppointmentSubscription.unsubscribe();
    }
    this.store.dispatch(cleanHistoryAppointments());
   
  }

}
