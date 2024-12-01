import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Subject, Subscription, filter, takeUntil } from 'rxjs';
import { IHistoryPinItem } from 'src/app/core/interfaces/history-pin-item.interface';
import { IHistoryStore } from 'src/app/core/interfaces/history.interface';
import { ITruckPinPinContainerized } from 'src/app/core/interfaces/truck-pin-pin-containerized.interface';
import { ITruckPin } from 'src/app/core/interfaces/truck-pin.interface';
import { historyFeatureSelector } from 'src/app/state/history/history.selector';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatSort } from '@angular/material/sort';
import { ScrollService } from '../../services/scroll.service';
import { IGeneratePinResult } from 'src/app/modules/containerized-load/components/generate-pin/generate-pin-mockup.component';
import { ICSGeneratePinResult, ICSGeneratePinUnit } from 'src/app/modules/detached-load/components/generate-pin/generate-pin-mockup.component';
import { GeneratePinDisplayItemComponent } from 'src/app/modules/containerized-load/components/generate-pin-display-item/generate-pin-display-item.component';
import { HistorypinstateService } from '../../services/historypinstate.service';
import { Router } from '@angular/router';
import { GeneratePinDisplayItemComponent as DetachedLoadGeneratePinDisplayItemComponent } from 'src/app/modules/detached-load/components/generate-pin-display-item/generate-pin-display-item.component';
import { cleanHistoryPin, getHistoryPin, updateParameters } from 'src/app/state/history/history.actions';
import { IHistoryPinParameters } from 'src/app/core/interfaces/history-pin-parameters.interface';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { cleanGeneratePin, getContainerizedLoad, setOperationStuck } from 'src/app/state/containerized-load/containerized-load.actions';
import { getDetachedLoad } from 'src/app/state/detached-load/detached-load.actions';

@Component({
  selector: 'app-history-pin',
  templateUrl: './history-pin.component.html',
  styleUrls: ['./history-pin.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class HistoryPinComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicContainer!: ViewContainerRef;

 

  public destroy$: Subject<void> = new Subject<void>();
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<ITruckPin> = new MatTableDataSource<ITruckPin>([])
  public page: number = 0;
  public existData: boolean = false;  
  public detailPin: boolean = false;
  public historyPinSubscription: Subscription = new Subscription();
  public pin: IGeneratePinResult = {
    pin: "",
    units: []
  }
  public parameters!: IHistoryPinParameters;
  selectedState: Map<string, boolean> = new Map(); // Mantener el estado seleccionado localmente
  private lastSearch: string | null = null;

  constructor(
    private readonly store: Store, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef,
    private scrollService: ScrollService,
    private resolver: ComponentFactoryResolver,
    private historyPinStateService: HistorypinstateService,
    private router: Router,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
   
  ) { 
   
  }

  ngOnInit(): void {
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

  public getActiveCount(pincontainerized: ITruckPinPinContainerized[]): string {
    const valor = pincontainerized.filter(item => item.active).length;
    if (valor > 0) {
      return "+" + valor + "";
    }
    else{
      return "" + valor + "";
    }
    
  }

  public getTamano(twenty: boolean, frghtKind: string): string {
    if (frghtKind === "FCL") {
      if (twenty) {
        return "20'";
      } else{
        return "40'";
      }
    }
    else {
      return "BBK";
    }
    
  }

  public getTipo(element: ITruckPin): string {
    if (element.bkgNbr === null && element.edoNbr === null && element.eroNbr === null) {
      return "IMPO";
    }
    else {
      return "EXPO";
    }
  }

  public getLoadIcon(frghtKind: string, activeCount: string): SafeHtml{
    let svg = '';
    if (frghtKind === "FCL"){
      if (activeCount != "0"){
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
      if (activeCount != "0"){
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
      this.store.dispatch(updateParameters({ parameters: this.parameters }));
      this.store.dispatch(getHistoryPin(this.parameters));
    }
    
  }
  

  public toggleRow(element: any) {
    element.selected = !element.selected;
    const key = `${element.id}-${element.pinContainerized}`; // Utilizar una clave única que combine id y pinContainerized
    this.selectedState.set(key, element.selected); 
  }
 

  public nextStory(element: any){
    if (element.activeCount != "0"){
      if (element.frghtKind === "FCL"){
          const pin: IGeneratePinResult = {
            pin: element.pinNbr,
            units: element.pinContainerized.map((pinValue: ITruckPinPinContainerized) => ({
              id: pinValue.id,
              unit: pinValue.unitNbr,
              size: pinValue.twenty ? "20" : "40",
              shipper: pinValue.truckingCompanyNameLDAP,
              active: pinValue.active
            }))
          };
          this.pin = pin;
          this.detailPin = true;
          this.loadDynamicComponent(this.pin, element.blNbr);
      } else{
        // carga suelta
        const pin: ICSGeneratePinResult = {
          nbr: element.blNbr,
          pin: element.pinNbr,
          units:element.pinContainerized.map((value: ITruckPinPinContainerized) => ({
              quantity: value.cargoQuantity as number,
              weight: value.cargoWeigth as number,
              destination: value.destination || "Sin Destino",
              shipper: `${value.truckVisitAppointmetId}/${value.truckingCompanyNameLDAP}`,
              active: value.active
          })),
          createdAt: element.createdAt
        }
        this.detailPin = true;
        this.loadDynamicComponentDetached(pin, element.blNbr);
      }
    }
   
  }


  private loadDynamicComponent(pin: IGeneratePinResult, blNbr: string): void {
    this.dynamicContainer.clear();
    const factory = this.resolver.resolveComponentFactory(GeneratePinDisplayItemComponent);
    const componentRef = this.dynamicContainer.createComponent(factory);
    componentRef.instance.pin = pin;
    componentRef.instance.lastSearch = blNbr as string;
    this.lastSearch = blNbr;
    this.store.dispatch(getContainerizedLoad({ nbr: this.base64EncryptionUtilService.encrypt(blNbr as string) }));

  }

  private loadDynamicComponentDetached(pin: ICSGeneratePinResult, blNbr: string): void {
    this.dynamicContainer.clear();

    const factory = this.resolver.resolveComponentFactory(DetachedLoadGeneratePinDisplayItemComponent);
    const componentRef = this.dynamicContainer.createComponent(factory);
    componentRef.instance.pin = pin;
    componentRef.instance.lastSearch = blNbr as string;
    this.lastSearch = blNbr;
    this.store.dispatch(getDetachedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch) }));
  }

  private loadData(){
    this.historyPinSubscription = this.store.select(historyFeatureSelector).subscribe({
      next: (store: IHistoryStore) => {
        if (store.parameters) {
          this.parameters = { ...store.parameters }; // Guardar los parámetros
          if (this.parameters.cleanSelectedState){
            this.selectedState.clear();
          }
        }
        if (this.detailPin){
          this.reloadComponent();
          return
        }
        this.detailPin = false;
        this.displayedColumns = ['carga', 'pinNbr', 'blNbr', 'truckingCompanyNameLDAP', 'createdByLDAP', 'formattedDate', 'activeCount'];
        const initialElement = store.result;
        let historyPines: ITruckPin [] = [];
        initialElement.forEach(historyPin => {
          historyPines = [...historyPines, historyPin]
        })
        const resultWithActiveCount = historyPines.map(item => ({
          ...item,
          activeCount: this.getActiveCount(item.pinContainerized),
          formattedDate: this.standardDateFormat(item.createdAt),
          selected: this.selectedState.get(`${item.id}-${item.pinContainerized}`) || false // Restaurar el estado seleccionado
       
        }));
        /*const resultWithActiveCount = store.result.map(item => ({
          ...item,
          activeCount: this.getActiveCount(item.pinContainerized),
          formattedDate: this.standardDateFormat(item.createdAt)
        }));*/
        this.dataSource.data = resultWithActiveCount;
        if (store.result.length > 0) {
          this.existData = true;
        }
        else{
          this.existData = false;
        }
        this.cdr.detectChanges(); 
        
        this.dataSource.sortingDataAccessor = (item: any, property: any) => {
          switch (property) {
            case 'formattedDate': {
              let newDate = new Date(item.formattedDate);
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
  }

  private reloadComponent(): void {
    this.detailPin = false;
    this.loadData();
  }

  getBadgeColor(activeCount: string): string {
    return activeCount === "0" ? 'red' : 'green'; // Cambia los colores según tus necesidades
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.historyPinSubscription) {
      this.historyPinSubscription.unsubscribe();
    }
    this.store.dispatch(cleanHistoryPin());
    //this.store.dispatch(cleanGeneratePin());
    //this.store.dispatch(getContainerizedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.lastSearch as string) }));
    //this.store.dispatch(setOperationStuck({ operationStuck: false }));
  
   
  }

 

}
