import { Component, OnInit, ViewChild } from '@angular/core';
import { SacRequestService } from '../../services/sac-request.service';
import { Store } from '@ngrx/store';
import { catchError, of, Subject, takeUntil } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  ICustomerApprovedChangeRequest,
  ICustomerApprovedChangeRequestForDataSource,
  IformaValuesChangeApproved,
} from 'src/app/core/interfaces/sac-request-management';
import { IRequestFlow } from 'src/app/core/interfaces/business-management.interface';
import {
  FIELD_RAZON_SOCIAL,
  keyValueMap,
} from 'src/app/shared/constants/app.constants';
import { formatDateTime } from 'src/app/shared/utils/utils';
import { utils, writeFile } from 'xlsx';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';

@Component({
  selector: 'app-sac-request-changes-approved',
  templateUrl: './sac-request-changes-approved.component.html',
  styleUrls: ['./sac-request-changes-approved.component.css'],
})
export class SacRequestChangesApprovedComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;

  selectedRow: any = null;  // Almacena la fila seleccionada

  public destroy$: Subject<void> = new Subject<void>();
  errorMessage: string = '';
  public displayedColumns: string[] = [
    'requestNumber',
    'requestDateTime',
    'nit',
    'fieldChanges',
    'newValue',
    'sacAnalyst',
    'lastUpdateTime',
  ];

  public dataSource: MatTableDataSource<ICustomerApprovedChangeRequestForDataSource> =
    new MatTableDataSource<ICustomerApprovedChangeRequestForDataSource>([]);
  public resultRequest: ICustomerApprovedChangeRequest[] = [];
  public resultRequestForDataSource: ICustomerApprovedChangeRequestForDataSource[] | null = null;

  constructor(
    private sacRequestService: SacRequestService,
    private readonly store: Store,
    private readonly matSnackBar: MatSnackBar,
    private readonly aesEncryptionUtilService: AESEncryptionUtilService
  ) {}

  ngOnInit(): void {
    this.getInfoCustomerApprovedChangeRequest();
  }

  getInfoCustomerApprovedChangeRequest() {
    this.sacRequestService
      .getInfoCustomerApprovedChangeRequest()
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          this.matSnackBar.open(
            $localize`:@@e4f8b902a1c5e85f11a934d86d1d3ab4f9b2c5a011bcF7d8ff3a6b3e29b714Wm3: module.sac.request.management.tab.request.approved`,
            '',
            {
              verticalPosition: 'top',
              panelClass: ['error-snackbar'],
              duration: 5000,
            }
          );
          return of('');
        })
      )
      .subscribe((result) => {

        this.resultRequest = JSON.parse(this.aesEncryptionUtilService.decrypt(result));
        this.resultRequest = this.getAllPropertiesForTable(this.resultRequest);
        this.resultRequestForDataSource = this.getAllPropertiesForDataSource(
          this.resultRequest
        );

        this.dataSource =
          new MatTableDataSource<ICustomerApprovedChangeRequestForDataSource>(
            this.resultRequestForDataSource
          );
        this.dataSource.sort = this.sort;
      });
  }

  getAllPropertiesForTable(
    request: ICustomerApprovedChangeRequest[]
  ): ICustomerApprovedChangeRequest[] {
    request = this.getDataByRequestFlow(request);

    request.forEach((request) => {
      request.updatedClientProperties = this.transformDataToArray(
        request.requestInfo
      );
      request.updatedClientProperties = this.transformKeys(
        request.updatedClientProperties
      );
      if (request.updatedCompany == '') {
        const razonSocial = request.updatedClientProperties.find(
          (item) => item.key === FIELD_RAZON_SOCIAL
        )?.value;
        request.updatedCompany = razonSocial ? razonSocial : '';
      }
    });
    return request;
  }

  getDataByRequestFlow(
    response: ICustomerApprovedChangeRequest[]
  ): ICustomerApprovedChangeRequest[] {
    response.forEach((request) => {
      if (request.requestFlow != null && request.requestFlow) {
        const parsedObject: IRequestFlow[] = JSON.parse(request.requestFlow);
        if (parsedObject.length > 0) {
          const lastItem: IRequestFlow = parsedObject[parsedObject.length - 1];
          request.sacAnalyst = lastItem.user;
          request.lastUpdateTime = lastItem.date;
        }
      }
    });
    return response;
  }

  transformDataToArray(jsonString: string): IformaValuesChangeApproved[] {
    const parsedObject = JSON.parse(jsonString);

    const resultArray: IformaValuesChangeApproved[] = [];

    for (const key in parsedObject) {
      if (parsedObject.hasOwnProperty(key)) {
        // Extraemos el valor de 'new' si esta presente
        const newValue = parsedObject[key].new;
        if (newValue !== null && newValue !== undefined) {
          resultArray.push({
            key: key,
            value: newValue.toString(),
          });
        }
      }
    }
    return resultArray;
  }

  transformKeys(
    dataCustomerChange: IformaValuesChangeApproved[]
  ): IformaValuesChangeApproved[] {
    return dataCustomerChange.map((item) => {
      const newKey = keyValueMap[item.key] || item.key;
      return { key: newKey, value: item.value };
    });
  }

  getAllPropertiesForDataSource(
    request: ICustomerApprovedChangeRequest[]
  ): ICustomerApprovedChangeRequestForDataSource[] {
    let transformedData: ICustomerApprovedChangeRequestForDataSource[] = [];

    request.forEach((item) => {
      item.updatedClientProperties!.forEach((property) => {
        let row: ICustomerApprovedChangeRequestForDataSource = {
          requestNumber: item.requestNumber,
          requestDateTime: item.requestDateTime.slice(0, 16),
          nit: item.nit,
          updatedCompany: item.updatedCompany,
          fieldChanges: property.key,
          newValue: property.value,
          sacAnalyst: item.sacAnalyst,
          lastUpdateTime: formatDateTime(item.lastUpdateTime!),
        };
        transformedData.push(row);
      });
    });

    return transformedData;
  }


   selectRow(row: any): void {
    if (this.selectedRow === row) {
      this.selectedRow = null;
    } else {
      this.selectedRow = row;
    }
  }

  public exportAsExcel(): void {
    let Heading = [ ['Solicitud', 'Fecha Hora Solicitud', 'NIT', 'Nombre', 'Campo', 'Valor'] ];

    // Creamos el libro de trabajo (workbook)
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);

    // Agrego el encabezado
    utils.sheet_add_aoa(ws, Heading);
    let jsonArrayObject;

    if (this.selectedRow) {
      const filteredData: ICustomerApprovedChangeRequestForDataSource [] = this.dataSource.data.filter(item => item.requestNumber === this.selectedRow.requestNumber);

      jsonArrayObject = filteredData.map((item: any) => ({
        Solicitud: item.requestNumber,
        Fecha_Hora_Solicitud: item.requestDateTime,
        NIT: item.nit,
        Nombre: item.updatedCompany,
        Campo: item.fieldChanges,
        Valor: item.newValue,
      }));
      
    }else{
      jsonArrayObject = this.dataSource.data.map((item: any) => ({
        Solicitud: item.requestNumber,
        Fecha_Hora_Solicitud: item.requestDateTime,
        NIT: item.nit,
        Nombre: item.updatedCompany,
        Campo: item.fieldChanges,
        Valor: item.newValue,
      }));
    }

    // agrego datos, comenzando desde la segunda fila
    utils.sheet_add_json(ws, jsonArrayObject, {
      origin: 'A2',
      skipHeader: true,
    });

    // Ajustar el ancho de las columnas segun el contenido mas largo
    ws['!cols'] = [
      {
        wch: Math.max(
          ...jsonArrayObject.map((item) => item.Solicitud.length),
          'Solicitud'.length
        ),
      },
      {
        wch: Math.max(
          ...jsonArrayObject.map((item) => item.Fecha_Hora_Solicitud.length),
          'Fecha Hora Solicitud'.length
        ),
      },
      {
        wch: Math.max(
          ...jsonArrayObject.map((item) => item.NIT.length),
          'NIT'.length
        ),
      },
      {
        wch: Math.max(
          ...jsonArrayObject.map((item) => item.Nombre.length),
          'Nombre'.length
        ),
      },
      {
        wch: Math.max(
          ...jsonArrayObject.map((item) => item.Campo.length),
          'Campo'.length
        ),
      },
      {
        wch: Math.max(
          ...jsonArrayObject.map((item) => item.Valor.length),
          'Valor'.length
        ),
      },
    ];

    utils.book_append_sheet(wb, ws, 'Reporte cliente a actualizar');
    writeFile(wb, 'Reporte cliente a actualizar.xlsx');
  }
}
