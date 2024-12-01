import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IParameter } from 'src/app/core/interfaces/parameter.interface';
import { IPayloadParameter } from 'src/app/core/interfaces/payload-parameter.interface';
import { IQueriesStore } from 'src/app/core/interfaces/queries-store.interface';
import { IQueryPayload } from 'src/app/core/interfaces/query-payload.interface';
import { IQueryResult } from 'src/app/core/interfaces/query-result.interface';
import { IQuery } from 'src/app/core/interfaces/query.interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { UtilService } from 'src/app/shared/services/util.service';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { getAllQueries, getDamageReport, getExecuteQuery } from 'src/app/state/queries/queries.actions';
import { queriesFeatureSelector } from 'src/app/state/queries/queries.selectors';
import { cleanPdfFile, cleanPdfInvoice, getPdfFile } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort!: MatSort;
  public destroy$: Subject<void> = new Subject<void>();
  public user: IAPIGatewayStore | null = null;
  public sharedObservable: Subscription = new Subscription();
  public userObservable: Subscription = new Subscription();

  public queriesStore$: Observable<IQueriesStore> = new Observable();
  public selectQueries: FormControl = new FormControl("");
  public parametersForm: FormGroup = new FormGroup({});

  public selectedOption: IQuery | null = null;
  public dataSource: MatTableDataSource<IQueryResult, MatTableDataSourcePaginator> = new MatTableDataSource();
  public displayedColumns: Array<string> = [];
  public isSpecialQuery = false;

  constructor(
    private readonly store: Store,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.sharedObservable = this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe(next => {
      if(next.file) {
        window.open(this.utilService.pdfReceipt(next.file));
        this.store.dispatch(cleanPdfInvoice());
      }
    });

    this.parametersForm = new FormGroup({
      parameters: new FormArray([])
    });

    this.store.dispatch(getAllQueries());

    this.userObservable = this.store.select(apiGatewayFeatureSelector).subscribe({
      next: user => this.user = user,
      error: error => console.error(error)
     });
    
    this.queriesStore$ = this.store.select(queriesFeatureSelector);
    this.queriesStore$.subscribe({
      next: queryStore => {
        if(queryStore.result) {
          
          if (this.selectedOption?.id === 5){
            this.isSpecialQuery = true;
          }else{
            this.isSpecialQuery = false;
          }
          if(typeof queryStore.result.result == "string") {
            
            this.dataSource = new MatTableDataSource((JSON.parse(queryStore.result.result) as IQueryResult[]) || []);
            this.displayedColumns = Object.keys((JSON.parse(queryStore.result.result) as IQueryResult[])[0] || []);
            if(this.selectedOption?.id === 1 || this.selectedOption?.id === 3 || this.selectedOption?.id === 2){
              this.addColumnToQC("SALIDA_TERMINAL", "INGRESO_TERMINAL");
              this.columnRemove("SELLO1");
              this.columnRemove("SELLO2");
              this.addColumnToQC("CLIENTE", "ESTADO");
              this.addColumnToQC("CARGUE", "SALIDA_TERMINAL");
            }
            if(this.selectedOption?.id === 4){
              this.columnRemove("FASE");
            }
          } else {
        
            this.dataSource = new MatTableDataSource((queryStore.result.result as IQueryResult[]) || []);
            this.displayedColumns = Object.keys(queryStore.result.result[0] || []);
            if(this.selectedOption?.id === 1 || this.selectedOption?.id === 3 || this.selectedOption?.id === 2){
              this.addColumnToQC("SALIDA_TERMINAL", "INGRESO_TERMINAL");
              this.columnRemove("SELLO1");
              this.columnRemove("SELLO2");
              this.addColumnToQC("CLIENTE", "ESTADO");
              this.addColumnToQC("CARGUE", "SALIDA_TERMINAL");
            }
            if(this.selectedOption?.id === 4){
              this.columnRemove("FASE");
              this.addColumnToQC("ETD", "CUTOFF");
              this.addColumnToQC("ATA", "ETD");
              this.addColumnToQC("ATD", "ATA");
            }
            if(this.selectedOption?.id === 5){
              this.columnRemove("status");
            }
           
           
            
          }

          this.dataSource.sort = this.sort;
        }
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.userObservable.unsubscribe();
    this.sharedObservable.unsubscribe();
    this.store.dispatch(cleanPdfFile());
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get parameters() {
    return this.parametersForm.get("parameters") as FormArray;
  }

  public addParameter(): void {
    this.parameters.push(new FormControl(""));
  }

  public payloadGenerator(query: IQuery, parameters: Array<string>, id?: string): IQueryPayload {
    return ({
      "queryName": query.queryName,
      "parameters": id ? this.parameterGenerator([...parameters, id]) : this.parameterGenerator(parameters)
    });
  }

  public parameterGenerator(parameters: Array<string>): Array<IPayloadParameter> {
    return parameters.map((parameter, index) => ({
      parameterId: (index + 1),
      value: parameter,
      type: "String"
    }));
  }

  public selectChange(): void {
    const context = this;
    this.dataSource = new MatTableDataSource<IQueryResult, MatTableDataSourcePaginator>([]);

    this.selectedOption = this.selectQueries.value;
    while(this.parameters.length > 0) this.parameters.removeAt(0);
    if(this.selectedOption) this.selectedOption.parameters.forEach(() => context.addParameter());
  }

  public submit(): void {
    let payload: IQueryPayload;
    const userParameters = this.parametersForm.value.parameters;
    
    switch(this.selectedOption?.id) {
      case 1:
        payload = this.payloadGenerator(this.selectedOption as IQuery, ["CONTE", ...userParameters, "USERCONTROLLER"]);
        this.store.dispatch(getExecuteQuery({ payload }))
      break;

      case 2:
        payload = this.payloadGenerator(this.selectedOption as IQuery, ["BO", ...userParameters, "USERCONTROLLER"]);
        this.store.dispatch(getExecuteQuery({ payload }))
      break;

      case 3:
        payload = this.payloadGenerator(this.selectedOption as IQuery, ["BL", ...userParameters, "USERCONTROLLER"]);
        this.store.dispatch(getExecuteQuery({ payload }))
      break;

      case 4:
        payload = this.payloadGenerator(this.selectedOption as IQuery, []);
        this.store.dispatch(getExecuteQuery({ payload }))
      break;

      case 5:
        payload = this.payloadGenerator(this.selectedOption as IQuery, ["USERCONTROLLER"]);
        this.store.dispatch(getExecuteQuery({ payload }))
      break;

      case 6:
        payload = this.payloadGenerator(this.selectedOption as IQuery, [...userParameters]);
        this.store.dispatch(getExecuteQuery({ payload }))
      break;

      case 7:
        payload = this.payloadGenerator(this.selectedOption as IQuery, [...userParameters, this.user?.empresa?.id as string]);
        this.store.dispatch(getExecuteQuery({ payload }))
      break;

      case 8:
        payload = this.payloadGenerator(this.selectedOption as IQuery, [...userParameters, this.user?.empresa?.id as string]);
        this.store.dispatch(getExecuteQuery({ payload }))
      break;

      case 9:
        this.store.dispatch(getDamageReport({
          container: this.base64EncryptionUtilService.encrypt(userParameters[0]),
          id: this.base64EncryptionUtilService.encrypt(this.user?.empresa?.id as string)
        }));
      break;

      case 10:
        payload = this.payloadGenerator(this.selectedOption as IQuery, userParameters);
        this.store.dispatch(getExecuteQuery({ payload }))
      break;

      case 11:
        payload = this.payloadGenerator(this.selectedOption as IQuery, userParameters);
        this.store.dispatch(getExecuteQuery({ payload }))
      break;

      case 12:
        payload = this.payloadGenerator(this.selectedOption as IQuery, [...userParameters, this.user?.empresa?.id as string]);
        this.store.dispatch(getExecuteQuery({ payload }))
      break;

      case 13:
        payload = this.payloadGenerator(this.selectedOption as IQuery, [...userParameters, this.user?.empresa?.id as string]);
        this.store.dispatch(getExecuteQuery({ payload }))
      break;

      default:
        payload = this.payloadGenerator(this.selectedOption as IQuery, [...userParameters, this.user?.empresa?.id as string]);
        this.store.dispatch(getExecuteQuery({ payload }))
      break;
    }
  }

  public downloadPDF(url: string): void {
    this.store.dispatch(getPdfFile({ url }));
  }

  private addColumnToQC(newColum: string, after: string){
    if (this.selectedOption && this.selectedOption.responseColumns) {
      this.selectedOption.responseColumns.forEach(column => {
        
        if (column.id === newColum){
          if (this.displayedColumns.length > 0 && !this.displayedColumns.includes(column.id) && this.displayedColumns.includes(after)) {
            this.columnAdd(column.id, after);
          }
        }
      });
    }
  }

 

  private columnAdd(column: string, nombreColumnaReferencia: string): void {
    const index = this.displayedColumns.indexOf(nombreColumnaReferencia);
    if (index !== -1) {
      // Inserta la nueva columna justo después de la columna de referencia
      this.displayedColumns.splice(index + 1, 0, column);
    } 
  }

  private columnRemove(column: string): void {
    this.displayedColumns = this.displayedColumns.filter(item => item !== column);
  }
}
