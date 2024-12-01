/*
  BL SGN1766763 
  HBL OLCL2212035C25
*/

import { Component, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ClientMessageAgreementDialogComponent } from '../client-message-agreement-dialog/client-message-agreement-dialog.component';
import { IContainerizedLoad } from 'src/app/core/interfaces/containerized-load.interface';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { Subject, iif, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { detachedLoadFeatureSelector } from 'src/app/state/detached-load/detached-load.selectors';
import { IDetachedLoadStore } from 'src/app/core/interfaces/detached-load-store.interface';
import { cleanQueryResult, getExecuteQuery } from 'src/app/state/queries/queries.actions';
import { queriesFeatureSelector } from 'src/app/state/queries/queries.selectors';
import { IQueriesStore } from 'src/app/core/interfaces/queries-store.interface';
import { cleanCustomer, cleanSelectedAgent, cleanSelectedCustomer, getAgent, getAllConsignees, getCustomer } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { cleanBillingData as CCcleanBillingData, getCustomerContract, getInvoiceCreate, getUpdateAgentAndConsigneeInBl, setSelectedContainers, setSelectedCustomer } from 'src/app/state/containerized-load/containerized-load.actions';
import { cleanBillingData, getCreateBreakbulk, getCreateBreakbulkDraft, setSelectedUnits, setSelectedCustomer as CSsetSelectedCustomer } from 'src/app/state/detached-load/detached-load.actions';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAgentRepresentationItem } from 'src/app/core/interfaces/agent-representation-item.interface';
import { ICustomer } from 'src/app/core/dto/customer.dto';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';

interface IInvoiceManagementBillingEmaiResultlDTO {
  email_address: string;
}

interface IInvoiceManagementBillingEmailDTO {
  success: string;
  result: IInvoiceManagementBillingEmaiResultlDTO[];
  error: string;
}

@Component({
  selector: 'app-invoice-management-billing',
  templateUrl: './invoice-management-billing.component.html',
  styleUrls: ['./invoice-management-billing.component.css']
})
export class InvoiceManagementBillingComponent implements OnInit, OnDestroy {
  @Input() public detached: boolean = false;
  @ViewChildren("containerCheckbox") public containersCheckboxes!: QueryList<MatCheckbox>;
  public destroy$: Subject<void> = new Subject<void>();
  public invoiceManagementBillingFormGroup: FormGroup = new FormGroup({});
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  public displayedColumns: string[] = [];
  public emails: string[] = [];
  public readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public minDate: Date = new Date();
  public maxDate: Date = new Date();
  public customer: string = "";
  public nit: string = "";
  public selectedCustomer: string = "";
  public selectedAgent: string = "";
  public selectedContainers: IContainerizedLoad[] = [];
  public containers: IContainerizedLoad[] = [];
  public selectedUnits: IDetachedLoad[] = [];
  public associateClient: boolean = false;
  public clientMessageAgreement: boolean = true;
  public searchedCustomers: ICustomer[] = [];
  public currentUser!: IAPIGatewayStore;
  public customerValid: boolean = true;
  public customerAsignned: boolean = false;
  customerSearcherControl!: FormControl;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly matDialog: MatDialog,
    private readonly store: Store,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly matSnackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.store.dispatch(CCcleanBillingData());
    this.store.dispatch(cleanBillingData());
    this.store.dispatch(cleanSelectedCustomer());
    this.store.dispatch(cleanSelectedAgent());

    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.minDate.getDate() + 14);

    this.store.select(apiGatewayFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: IAPIGatewayStore) => {
        this.currentUser = result;
      },
      error: (error) => console.error(error)
    });

    this.activatedRoute.data.pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result) => {
        this.detached = result["detached"];

        if(this.detached) {
          this.store.select(detachedLoadFeatureSelector).pipe(
            takeUntil(this.destroy$)
          ).subscribe({
            next: (result: IDetachedLoadStore) => {
              this.customer = result.result[0].consigneeName;
              if(this.customer){
                //this.customerValid = true;
                this.customerAsignned = true;
              }
              this.nit = result.result[0].id;
              this.selectedUnits = result.result;

              this.store.dispatch(getExecuteQuery({
                payload: {
                  "queryName": "getListEmailBilling",
                  "parameters": [
                    {
                      "parameterId": 1,
                      "value": result.result[0].id,
                      "type": "String"
                    }
                  ]
                }
              }));

              if(result.result[0].onAccount) {
                if(this.clientMessageAgreement) {
                  this.matDialog.open(ClientMessageAgreementDialogComponent, {
                    width: "25rem"
                  });

                  this.clientMessageAgreement = false;
                }
              }

              const data = [
                {
                  lots: result.result.length,
                  weight: result.result.reduce((acc, current) => acc + current.cargoWeigth, 0),
                  quantity: result.result.reduce((acc, current) => acc + current.cargoQuantity, 0),
                }
              ];

              this.displayedColumns = ["lots", "weight", "quantity"];
              this.dataSource = new MatTableDataSource<any>(data);
            },
            error: error => console.error(error)
          });
        } else {
          this.store.select(containerizedLoadFeatureSelector).pipe(
            takeUntil(this.destroy$)
          ).subscribe({
            next: (result: IContainerizedLoadStore) => {
              this.customer = result.result[0].consigneeName;
              if(this.customer){
                //this.customerValid = true;
                this.customerAsignned = true;
              }
              this.nit = result.result[0].consigneeId;
              this.associateClient = result.result[0].consigneeName === null;
              this.containers = result.result.filter(value => value.yard);

              if(result.result[0].consigneeId) {
                this.store.dispatch(getExecuteQuery({
                  payload: {
                    "queryName": "getListEmailBilling",
                    "parameters": [
                      {
                        "parameterId": 1,
                        "value": result.result[0].consigneeId,
                        "type": "String"
                      }
                    ]
                  }
                }));
              }

              if(result.result[0].onAccount) {
                if(this.clientMessageAgreement) {
                  this.matDialog.open(ClientMessageAgreementDialogComponent, {
                    width: "25rem"
                  });

                  this.clientMessageAgreement = false;
                }
              }

              this.displayedColumns = ["selected", "number", "unitNbr", "twenty"];
              this.dataSource = new MatTableDataSource<any>(this.containers);
            },
            error: error => console.error(error)
          });
        }

        this.store.select(sharedFeatureSelector).pipe(
          takeUntil(this.destroy$)
        ).subscribe({
          next: (result: ISharedStore) => {
            this.selectedCustomer = result.selectedCustomer as string;
            this.selectedAgent = result.selectedAgent as string;

              if(result.customer) {
                this.searchedCustomers = [...this.searchedCustomers, ...result.customer];
              }
              if(this.selectedCustomer) {
                if(this.selectedCustomer.split("/")[1]) {
                  if(this.selectedCustomer.length) {
                    if(this.searchedCustomers.length) {
                      const customer = this.searchedCustomers?.filter((value: ICustomer) => value.agentId === this.selectedCustomer.split("/")[0]);
                      if(customer) {
                        if(customer?.length) {
                          if (this.customerSearcherControl.valid) {
                            this.customerValid = true;
                          }
                          if(customer[0].onAccount) {
                            if(this.clientMessageAgreement) {
                              this.matDialog.open(ClientMessageAgreementDialogComponent, {
                                width: "25rem"
                              });

                              this.clientMessageAgreement = false;
                            }

                            this.searchedCustomers = [];
                          }
                        }else{
                          this.customerValid = false;
                        }
                        
                      }
                    }
                  }
                }else{
                  this.customerValid = false;
                }
              }

            if(!this.emails.length) {
              if(result.selectedCustomer) {
                if(!!result.selectedCustomer.split("/")[1]) {
                  this.store.dispatch(getExecuteQuery({
                    payload: {
                      "queryName": "getListEmailBilling",
                      "parameters": [
                        {
                          "parameterId": 1,
                          "value": result.selectedCustomer.split("/")[0],
                          "type": "String"
                        }
                      ]
                    }
                  }));
                }
              }
            }
          },
          error: error => console.error(error)
        });

        this.store.select(queriesFeatureSelector).pipe(
          takeUntil(this.destroy$)
        ).subscribe({
          next: (result: IQueriesStore) => {
            if(result.result?.result.length) {
              this.emails = result.result.result[0].email_address.split(";");
            }
          },
          error: error => console.error(error)
        });

        this.invoiceManagementBillingFormGroup = new FormGroup({
          estimatedDate: new FormControl({ value: "", disabled: false }, [Validators.required]),
          observations: new FormControl({ value: "", disabled: false }, [Validators.maxLength(250)])
        });
      },
      error: error => console.error(error)
    });

    if(this.customerAsignned){
      this.customerValid = true;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    this.store.dispatch(cleanQueryResult());
    this.store.dispatch(cleanCustomer());
    this.store.dispatch(cleanSelectedCustomer());
  }

  public submit(): void {
    if(this.detached) {
      if(this.selectedUnits.length) {
          this.store.dispatch(getUpdateAgentAndConsigneeInBl({ body: {
            "blNbr": this.selectedUnits[0].hbl,
            "agentId": this.selectedAgent ? this.selectedAgent.split("/")[1] ? this.selectedAgent.split("/")[0] : null : null,
            "nitConsignee": this.selectedCustomer.split("/")[1] ? this.selectedCustomer.split("/")[0] : null,
            "loadAgentId":null
          }
        }));

        this.store.dispatch(CSsetSelectedCustomer({
          customer: this.selectedCustomer
        }))

        this.store.dispatch(setSelectedUnits({
        units: this.selectedUnits
      }));

      this.store.dispatch(getCreateBreakbulkDraft({
        hbl: this.base64EncryptionUtilService.encrypt(this.selectedUnits[0].hbl)
      }));

      this.store.dispatch(getCreateBreakbulk({
        body: {
          bl: this.selectedUnits[0].hbl,
          customerId: this.selectedCustomer.split("/")[0],
          date: moment(this.invoiceManagementBillingFormGroup.controls["estimatedDate"].value).toISOString(),
          units: this.selectedUnits.map((value: IDetachedLoad) => value.unitNbr),
          notes: this.invoiceManagementBillingFormGroup.controls["observations"].value
        }
      }));
    }

      this.router.navigate(["/", "carga-suelta", "proforma"]);
    } else {
      if(this.selectedContainers.length) {
          this.store.dispatch(getUpdateAgentAndConsigneeInBl({ body: {
            "blNbr": this.selectedContainers[0].blNumber,
            "agentId": this.selectedAgent ? this.selectedAgent.split("/")[1] ? this.selectedAgent.split("/")[0] : null : null,
            "nitConsignee": this.selectedCustomer.split("/")[0] ? this.selectedCustomer.split("/")[0] : null,
            "loadAgentId":null
          }
        }));

        this.store.dispatch(setSelectedCustomer({
          customer: this.selectedCustomer
        }))

        this.store.dispatch(setSelectedContainers({
          containers: this.selectedContainers
        }))

        this.store.dispatch(getInvoiceCreate({
          body: {
            bkg: null,
            bl: this.selectedContainers[0].blNumber,
            customerId: this.selectedCustomer.split("/")[0],
            date: moment(this.invoiceManagementBillingFormGroup.controls["estimatedDate"].value).toISOString(),
            units: this.selectedContainers.map((value: IContainerizedLoad) => value.unitNbr),
            notes: this.invoiceManagementBillingFormGroup.controls["observations"].value
          }
        }));

        this.router.navigate(["/", "carga-contenerizada", "proforma"]);
      } else {
        this.matSnackBar.open(
          "Debe seleccionar al menos un contenedor",
          "",
          {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          }
        );
      }
    }
  }

  public cancel(): void {
    this.store.dispatch(cleanQueryResult());
    this.store.dispatch(cleanSelectedCustomer());

    let url: string[] = this.router.url.split("/");
    url.pop();

    this.router.navigate(url);
  }

  public matCheckboxSelectAllChange(event: MatCheckboxChange): void {
    if(event.checked) {
      this.containersCheckboxes.toArray().forEach((result: MatCheckbox) => {
        result.checked = true;
      });

      this.selectedContainers = this.containers;
    } else {
      this.containersCheckboxes.toArray().forEach((result: MatCheckbox) => {
        result.checked = false;
      });

      this.selectedContainers = [];
    }
  }

  public matCheckboxChange(event: MatCheckboxChange, container: IContainerizedLoad): void {
    if(event.checked) {
      this.selectedContainers = [...this.selectedContainers, container];
    } else {
      this.selectedContainers = this.selectedContainers.filter((value: IContainerizedLoad) => value.unitNbr != container.unitNbr);
    }
  }

  onCustomerControlChange(control: FormControl) {
    this.customerSearcherControl = control;
    
    this.customerSearcherControl.statusChanges.subscribe(status => {
      if (!this.customerSearcherControl.valid && !this.customerAsignned) {
        this.customerValid = false;
       
      } else{
        this.customerValid = true;
      }
    });
   
    
  }
}
