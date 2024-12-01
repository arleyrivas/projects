import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { calculateCreditNotesTotal, calculateInvoicesTotal, clean, getCreditNoteCrosses, getExecuteCrossing, getInvoices, removeCreditNoteCross, removeInvoice, selectCreditNoteCross, selectInvoice } from 'src/app/state/credit-notes/credit-notes.actions';
import { creditNotesFeatureSelector } from 'src/app/state/credit-notes/credit-notes.selectors';

import { MatTableDataSource } from '@angular/material/table';

import { utils, WorkBook, writeFile } from "xlsx";
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ICreditNoteCross } from 'src/app/core/interfaces/credit-note-cross.interface';
import { IInvoice } from 'src/app/core/interfaces/invoices.interface';
import { ICreditNotesStore } from 'src/app/core/interfaces/credit-notes-store.interface';
import { Router } from '@angular/router';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { UtilService } from 'src/app/shared/services/util.service';
import { cleanCustomer, cleanPdfFile, cleanPdfInvoice, getPdfInvoice } from 'src/app/state/shared/shared.actions';
import { MatDialog } from '@angular/material/dialog';
import { CreditNotesConfirmComponent } from '../credit-notes-confirm/credit-notes-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { privileges } from 'src/app/core/privileges.enum';
import { MatSort } from '@angular/material/sort';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';

@Component({
  selector: 'app-credit-notes',
  templateUrl: './credit-notes.component.html',
  styleUrls: ['./credit-notes.component.css']
})
export class CreditNotesComponent implements OnInit, OnDestroy {
  @ViewChild("creditNotesTable") creditNotesTable: MatSort = new MatSort();
  @ViewChild("invoicesTable") invoicesTable: MatSort = new MatSort();

  public destroy$: Subject<void> = new Subject<void>();
  public privileges: typeof privileges = privileges;
  public creditNotes: ICreditNoteCross[] = [];
  public invoices: IInvoice[] = [];
  public creditNotesDatasource: any = new MatTableDataSource([]);
  public invoiceDatasource: any = new MatTableDataSource([]);
  public selectedCreditNotes: ICreditNoteCross[] = [];
  public selectedInvoices: IInvoice[] = [];
  public creditNotesPage: number = 0;
  public invoicePage: number = 0;
  public creditNotesTotal: number = 0;
  public invoicesTotal: number = 0;
  public userInfo!: IAPIGatewayStore;
  public customer: string | null = null;
  public selectedCustomer: string | null = null;
  public isAgent: boolean = false;

  public creditNotesDisplayedColumns: string[] = ["creditNotesSelected","final_nbr", "finalized_date",	"TOTAL", "CUSTDFF_BALANCECREDIT", "Estado"];
  public invoiceDisplayedColumns: string[] = ["invoiceSelected", "finalNumber",	"finalizedDate", "balance", "bill"];
  public sharedSubscription: Subscription = new Subscription();
  public creditNotesSubscription: Subscription = new Subscription();

  constructor(
    private readonly store: Store,
    private readonly router: Router,
    private readonly utilService: UtilService,
    private readonly matDialog: MatDialog,
    private readonly matSnackBar: MatSnackBar,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService
  ) { }

  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => {
        this.userInfo = APIGatewatStore;
        this.isAgent = APIGatewatStore.empresa?.tiposEmpresas.filter((value) => value.selected)[0].companyTypeId === "06";

        if(!this.isAgent) {
          this.store.dispatch(getCreditNoteCrosses({
            customer: this.base64EncryptionUtilService.encrypt(this.userInfo.empresa?.id as string),
            page: 0
          }));

          this.store.dispatch(getInvoices({
            customer: this.base64EncryptionUtilService.encrypt(this.userInfo.empresa?.id as string),
            page: 0
          }));
        }
      },
      error: error => console.error(error)
    });

    this.store.dispatch(clean());

    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe(next => {
      if(next.file) {
        window.open(this.utilService.pdfReceipt(next.file));
        this.store.dispatch(cleanPdfInvoice());
      }
    });

    this.store.select(creditNotesFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (store: ICreditNotesStore) => {
        this.creditNotes = store.crosses;
        this.invoices = store.invoices;

        this.selectedCreditNotes = store.selectedCrosses;
        this.selectedInvoices = store.selectedInvoices;

        this.creditNotesTotal = store.totalCrosses;
        this.invoicesTotal = store.totalInvoices;

        this.creditNotesDatasource = new MatTableDataSource(this.creditNotes);
        this.invoiceDatasource = new MatTableDataSource(this.invoices);

        this.creditNotesDatasource.sort = this.creditNotesTable;
        this.invoiceDatasource.sort = this.invoicesTable;

        this.creditNotesDatasource.sortingDataAccessor = (item: any, property: any) => {
          switch (property) {
            case 'finalized_date': {
              let newDate = new Date(item.finalized_date);
              return newDate;
            }
            default: {
              return item[property];
            }
          }
        };

        this.invoiceDatasource.sortingDataAccessor = (item: any, property: any) => {
          switch (property) {
            case 'finalizedDate': {
              let newDate = new Date(item.finalizedDate);
              return newDate;
            }
            default: {
              return item[property];
            }
          }
        };
      },
      error: error => console.error(error)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.store.dispatch(cleanPdfFile());
  }

  public customerSearch(value: string): void {
    this.customer = value;

    if(!value) {
      this.store.dispatch(cleanCustomer());
    }
  }

  public selectCustomer(): void {
    if(this.customer && this.customer.split("/")[0]) {
      this.selectedCustomer = this.customer;

      this.store.dispatch(clean());

      this.creditNotesPage = 0;
      this.invoicePage = 0;

      this.store.dispatch(getCreditNoteCrosses({ customer: this.base64EncryptionUtilService.encrypt(this.selectedCustomer.split("/")[0] as string), page: 0 }));
      this.store.dispatch(getInvoices({ customer: this.base64EncryptionUtilService.encrypt(this.selectedCustomer.split("/")[0] as string), page: 0 }));
    } else {
      this.matSnackBar.open(
        "El campo de busqueda de cliente es requerido",
        "",
        {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        }
      );
    }
  }

  public reload(): void {
    this.store.dispatch(clean());

    if(this.isAgent) {
      if(this.selectedCustomer && this.selectedCustomer.split("/")[1]) {
        this.store.dispatch(getCreditNoteCrosses({ customer: this.base64EncryptionUtilService.encrypt(this.selectedCustomer.split("/")[0] as string), page: 0 }));
        this.store.dispatch(getInvoices({ customer: this.base64EncryptionUtilService.encrypt(this.selectedCustomer.split("/")[0] as string), page: 0 }));
      } else {
        this.matSnackBar.open(
          "El campo de busqueda de cliente es requerido",
          "",
          {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          }
        );
      }
    } else {
      this.store.dispatch(getCreditNoteCrosses({ customer: this.base64EncryptionUtilService.encrypt(this.userInfo.empresa?.id as string), page: 0 }));
      this.store.dispatch(getInvoices({ customer: this.base64EncryptionUtilService.encrypt(this.userInfo.empresa?.id as string), page: 0 }));
    }
  }

  public exportAsPDF(): void {

    var indice: number;
    var indice2: number;


    let Heading = [['N', 'Creacion', 'Monto', 'Saldo', 'Estado']];

    let HeadingFaccturacion = [['N', 'Creacion', 'Monto']];

   //Had to create a new workbook and then add the header
    const wb = utils.book_new();
   // const wb2 = utils.book_new();
    const ws = utils.json_to_sheet([]);
    const ws2 = utils.json_to_sheet([]);
    utils.sheet_add_aoa(ws, Heading);
    utils.sheet_add_aoa(ws2, HeadingFaccturacion);

   var count = Object.keys(this.creditNotesDatasource.data).length;
   indice = 0;
   let jsonArrayObject = [];

   while (indice < count) {

      jsonArrayObject.push({
        N:this.creditNotesDatasource.data[indice].final_nbr,
        Creación: moment(this.creditNotesDatasource.data[indice].finalized_date).format("DD-MM-YYYY"),
        Monto:this.creditNotesDatasource.data[indice].TOTAL,
        Saldo:this.creditNotesDatasource.data[indice].CUSTDFF_BALANCECREDIT,
        Estado:this.creditNotesDatasource.data[indice].status_used ? "PENDIENTE" : "NO DEFINIDO"
      });

      indice = indice + 1;

      }

      indice2 = 0;
      var count2 = Object.keys(this.invoiceDatasource.data).length;
      let jsonArrayObject2 = [];

      while (indice2 < count2) {

        jsonArrayObject2.push({
          N:this.invoiceDatasource.data[indice2].finalNumber,
          Creación: moment( this.invoiceDatasource.data[indice2].finalizedDate).format("DD-MM-YYYY"),
          Monto:this.invoiceDatasource.data[indice2].balance
        });

        indice2 = indice2 + 1;

        }

        //Starting in the second row to avoid overriding and skipping headers
    utils.sheet_add_json(ws, jsonArrayObject , { origin: 'A2', skipHeader: true });

    utils.sheet_add_json(ws2, jsonArrayObject2 , { origin: 'A2', skipHeader: true });

    utils.book_append_sheet(wb, ws, 'Notas de Crédito');

    utils.book_append_sheet(wb, ws2, 'Facturación');

    writeFile(wb, 'notascreditos-facturas.xlsx');


  }

  public cross(): void {
    if(this.selectedCreditNotes.length && this.selectedInvoices.length) {
      const dialogRef = this.matDialog.open(CreditNotesConfirmComponent, {
        data: {
          creditNotes: this.selectedCreditNotes,
          invoices: this.selectedInvoices,
          creditNotesTotal: this.creditNotesTotal,
          invoicesTotal: this.invoicesTotal
        }
      });

      dialogRef.afterClosed().subscribe(next => {
        if(next) {
          const creditNotes = this.selectedCreditNotes.map((item: any) => item.final_nbr).toString();
          const invoices = this.selectedInvoices.map((item: any) => item.finalNumber).toString();
          const customerId = this.customer  ? this.customer.split("/")[0] : ''; 

          this.store.dispatch(getExecuteCrossing({ clientId : customerId,  creditNotesList: creditNotes, invoiceList: invoices }));
          this.reload();
        }
      })
    } else {
      this.matSnackBar.open(
        "Debe seleccionar al menos una nota crédito y una factura",
        "",
        {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        }
      );
    }
  }

  public cancel(): void {
    this.reload();
  }

  public downloadBill(billId: string): void {
    this.store.dispatch(getPdfInvoice({ invoice: billId }));
  }

  public loadCreditNotes(): void {
    this.creditNotesPage = this.creditNotesPage + 1;

    if(this.isAgent) {
      if(this.selectedCustomer && this.selectedCustomer.split("/")[1]) {
        this.store.dispatch(getCreditNoteCrosses({ customer: this.base64EncryptionUtilService.encrypt(this.selectedCustomer.split("/")[0] as string), page: this.creditNotesPage }));
      } else {
        this.matSnackBar.open(
          "El campo de busqueda de cliente es requerido",
          "",
          {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          }
        );
      }
    } else {
      this.store.dispatch(getCreditNoteCrosses({ customer: this.base64EncryptionUtilService.encrypt(this.userInfo.empresa?.id as string), page: this.creditNotesPage }));
    }
  }

  public loadInvoice(): void {
    this.invoicePage = this.invoicePage + 1;

    if(this.isAgent) {
      if(this.selectedCustomer && this.selectedCustomer.split("/")[1]) {
        this.store.dispatch(getInvoices({ customer: this.base64EncryptionUtilService.encrypt(this.selectedCustomer.split("/")[0] as string), page: this.invoicePage }));
      } else {
        this.matSnackBar.open(
          "El campo de busqueda de cliente es requerido",
          "",
          {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          }
        );
      }
    } else {
      this.store.dispatch(getInvoices({ customer: this.base64EncryptionUtilService.encrypt(this.userInfo.empresa?.id as string), page: this.invoicePage }));
    }
  }

  public selectAllCreditNotes(checked: boolean): void {
    if(checked) this.creditNotes.map(item => {
      const newItem = Object.assign({}, item);

      if(!newItem.selected) this.store.dispatch(selectCreditNoteCross({ cross: newItem }));

      this.store.dispatch(calculateCreditNotesTotal());

      return newItem;
    });
    else this.creditNotes.map(item => {
      const newItem = Object.assign({}, item);

      this.store.dispatch(removeCreditNoteCross({ id: newItem.final_nbr }));

      this.store.dispatch(calculateCreditNotesTotal());

      return newItem;
    });

  }

  public selectAllInvoices(checked: boolean): void {
    if(checked) {
      this.invoices.map(item => {
        const newItem = Object.assign({}, item);

        if(!newItem.selected) this.store.dispatch(selectInvoice({ invoice: newItem }));

        this.store.dispatch(calculateInvoicesTotal());

        return newItem;
      });
    } else {
      this.invoices.map(item => {
        const newItem = Object.assign({}, item);

        this.store.dispatch(removeInvoice({ id: newItem.finalNumber }));

        this.store.dispatch(calculateInvoicesTotal());

        return newItem;
      });
    }
  }

  public creditNotesCheckboxChange(event: MatCheckboxChange, elementNbr: string): void {
    this.creditNotes.map(item => {
      const newElement = Object.assign({}, item);

      if(item.final_nbr === elementNbr) {

       if(event.checked) {
        this.store.dispatch(selectCreditNoteCross({ cross: newElement }));
        this.store.dispatch(calculateCreditNotesTotal());
        return newElement;

       } else {
        this.store.dispatch(removeCreditNoteCross({ id: newElement.final_nbr }));
        this.store.dispatch(calculateCreditNotesTotal());

        return newElement;
       }

      }

      return item;
    });
  }

  public invoiceCheckboxChange(event: MatCheckboxChange, elementNbr: string): void {
    this.invoices.map(item => {
      const newElement = Object.assign({}, item);

      if(item.finalNumber === elementNbr) {
        if(event.checked) {
          this.store.dispatch(selectInvoice({ invoice: item }));
          this.store.dispatch(calculateInvoicesTotal());

          return newElement;
        } else {
          this.store.dispatch(removeInvoice({ id: item.finalNumber }));
          this.store.dispatch(calculateInvoicesTotal());

          return newElement;
        }
      }

      return item;
    });
  }

  public applyCreditNotesFilter(value: Event): void {
    const inputValue = (value.target as HTMLInputElement).value;

    this.creditNotesDatasource.filter = inputValue.trim().toLowerCase();
  }

  public applyInvoiceFilter(value: Event): void {
    const inputValue = (value.target as HTMLInputElement).value;

    this.invoiceDatasource.filter = inputValue.trim().toLowerCase();
  }


}
