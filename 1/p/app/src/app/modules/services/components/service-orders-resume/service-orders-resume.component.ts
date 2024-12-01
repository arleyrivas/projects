import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { servicesOrderFeatureSelector } from 'src/app/state/service-order/service-order.selectors';
import { IServiceOrderStore } from '../../interfaces/service-order-store.interface';
import { Router } from '@angular/router';
import { cleanContainers, cleanDesignatedOfficial, cleanSaveServiceOrder, cleanSearchedCriteria, cleanServiceAutorityType, cleanServiceOrderInfo, cleanUnit } from 'src/app/state/service-order/service-order.actions';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { IServiceOrdersPDF } from '../../interfaces/service-orders-pdf.interface';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

export interface IServiceOrderResume {
  unit: string;
  serviceOrder: string | boolean | null;
}

@Component({
  selector: 'app-service-orders-resume',
  templateUrl: './service-orders-resume.component.html',
  styleUrls: ['./service-orders-resume.component.css']
})
export class ServiceOrdersResumeComponent implements OnInit, OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();
  public displayedColumns: string[] = [];
  public dataSource: MatTableDataSource<IServiceOrderResume> = new MatTableDataSource<IServiceOrderResume>([]);
  public dataPDF!: IServiceOrdersPDF | null;
  public orderCreated: string[] = [];

  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.store.select(servicesOrderFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (servicesOrderStore: IServiceOrderStore) => {
        const results: IServiceOrderResume[] = servicesOrderStore.saveResult.map((result, index) => {
          if(result.success === 'true') this.orderCreated = [...this.orderCreated, result.result as string];

          return {
            unit: servicesOrderStore.containers[index],
            serviceOrder: result.success === 'true' ? result.result : result.error
          };
        });

        this.displayedColumns = ["unit", "serviceOrder"];
        this.dataSource = new MatTableDataSource<IServiceOrderResume>(results);

        this.dataPDF = servicesOrderStore.pdfData;
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public continue(): void {
    this.store.dispatch(cleanSaveServiceOrder());
    this.store.dispatch(cleanDesignatedOfficial());
    this.store.dispatch(cleanContainers());
    this.store.dispatch(cleanServiceAutorityType());
    this.store.dispatch(cleanSearchedCriteria());
    this.store.dispatch(cleanUnit());
    this.store.dispatch(cleanServiceOrderInfo());

    this.router.navigate(['/', 'servicios']);
  }

  public print(): void {
    if(this.dataPDF) {
      const pdfDefinition: any = {
        content: [
          {
            columns: [
              [
                /* { text: dataPDF.shipperOrConsignee, style: 'text' }, */
                { text: 'Cordial saludo.', style: 'text1' },
              ],
            ]
          },
          {
            text: [
              { text: 'Se registra la(s) orden(es) de servicio número ' },
              { text: this.orderCreated.toString(), bold: true },
              { text: ' '.concat('con las siguientes configuraciones ingresados por el usuario ','“',this.dataPDF.userCreator,'”'," de la empresa “",this.dataPDF.company,'” el ',this.dataPDF.dateCreation,'.') },
            ],
            alignment: 'justify'
          },
          {
            style: 'table',
            table: {
              widths: ['*', '*'],
              body: [
                [{text: 'INFORMACION', colSpan:2, style:'header'}, {text:''}],
                [{text:[{text:'BL, HBL O BOOKING: ',bold:true},this.dataPDF.nbr]}, {text:[{text:'CLIENTE: ',bold:true},this.dataPDF.client]}],
                [{text:[{text:'SERVICIO: ',bold:true},this.dataPDF.service]}, {text:[{text:'AUTORIDAD: ',bold:true},this.dataPDF.authority]}],
                [{text:[{text:'TIPO DE INSPECCIÓN: ',bold:true},this.dataPDF.typeInspection]}, {text:[{text:'REQUIERE CUADRILLA: ',bold:true},this.dataPDF.crewRequired]}],
                [{text: this.dataPDF.tagContOrHbl, colSpan:2, style:'header'}, {text:''}],
                [{text: this.dataPDF.containers, colSpan:2, alignment: 'left'}, {text:''}],
                [{text: 'USUARIOS AUTORIZADOS PARA EL INGRESO', colSpan: 2, style:'header'}, {text:''}],
                [{ol: this.dataPDF.officials, colSpan:2, alignment:'left'}, {text:''}],
                [{text: 'OBSERVACIONES', colSpan:2, style:'header'}, {text:''}],
                [{text: this.dataPDF.observations, colSpan:2, alignment:'left'}, {text:''}]
              ]
            }
          },
          {
            text: 'Agradecemos su colaboración en esta solicitud, ya que nos permitirá ofrecerle un mejor servicio.',
            style: 'text'
          }
        ],
        styles: {
          text: {
            margin: [0, 15],
            fontSize: 12
          },
          text1: {
              margin: [0,50,0,15],
              fontSize: 12
          },
          header: {
            bold: true,
            color: '#000',
            fontSize: 11,
            alignment: 'center'
          },
          table: {
            margin: [0, 15],
            color: '#666',
            fontSize: 10
          }
        }
      };

      const pdf = pdfMake.createPdf(pdfDefinition);
      pdf.download();
    }
  }
}
