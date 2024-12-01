import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { Subject, takeUntil } from 'rxjs';
import { servicesOrderFeatureSelector } from 'src/app/state/service-order/service-order.selectors';
import { IServiceOrderStore } from '../../interfaces/service-order-store.interface';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { IServiceHistoryItem } from '../../interfaces/service-history-item.interface';
import { getServiceHistory, setServiceHistoryPage } from 'src/app/state/service-order/service-order.actions';
import { IServiceHistoryDTO } from '../../interfaces/service-history.dto';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-service-history-table',
  templateUrl: './service-history-table.component.html',
  styleUrls: ['./service-history-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: "none" })),
      state('expanded', style({ height: '*', display: "table-row" })),
      transition('expanded <=> collapsed', animate('1ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ServiceHistoryTableComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  public destroy$: Subject<void> = new Subject<void>();
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<IServiceHistoryItem> = new MatTableDataSource<IServiceHistoryItem>([]);
  public page: number = 0;
  public serviceHistoryInformation!: IServiceHistoryDTO | null;
  public existData: boolean = false; 
  expandedElement: IServiceHistoryItem | null = null;

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.store.select(servicesOrderFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (store: IServiceOrderStore) => {
        this.page = store.historyPage;
        this.serviceHistoryInformation = store.historyInformation;
        this.displayedColumns = ['bl_hbl_booking', 'id_cliente', 'nombre_cliente', 'nombre_cliente_dos']
        
        if (store.history.length > 0){
            this.existData = true;
        } else{
            this.existData = false;
        }
        
        store.history.forEach((element: IServiceHistoryItem) => {
          element.mostrar = false;
          element.icono_expand = "keyboard_arrow_down"
         
        });
        this.dataSource = new MatTableDataSource<IServiceHistoryItem>(store.history);
        this.cdr.detectChanges();
        this.dataSource.sort = this.sort;
        this.cdr.detectChanges();
      
      },
      error: error => console.error(error)
    });
  }
  

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public toggleRow(element: any) {
    element.selected = !element.selected;
    element.mostrar = !element.mostrar;
    if (element.mostrar){
      element.icono_expand = "keyboard_arrow_up";
    } else {
      element.icono_expand = "keyboard_arrow_down";
    }
   
  
  }

  public mostrarRow(element: any) {
    element.mostrar = !element.mostrar;
    if (element.mostrar){
      element.icono_expand = "keyboard_arrow_up";
    } else {
      element.icono_expand = "keyboard_arrow_down";
    }
  }

  public loadMore(event: any): void {
    this.page = this.page + 1;

    this.store.dispatch(setServiceHistoryPage({ page: this.page }));

    this.store.dispatch(getServiceHistory({
      page: this.page,
      body: this.serviceHistoryInformation as IServiceHistoryDTO
    }));
  }

  public standardDateFormat(date: number): string {
    if(date) return moment(date).format("Y/MM/DD HH:mm:ss");
    else return "";
  }

  isExpansionDetailRow = (i: number, row: IServiceHistoryItem) => row.hasOwnProperty('detailRow');


}
