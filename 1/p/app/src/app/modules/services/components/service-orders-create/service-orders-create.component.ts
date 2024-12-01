import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { IVoidDestinationContainerSelected } from "../../interfaces/void-destination-container-selected.interface";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { IServiceAutorityType } from "../../interfaces/service-autority-type.interface";
import { Subject, takeUntil } from "rxjs";
import { IServiceInspectionType } from "../../interfaces/service-inspection-type.interface";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ServiceOrdersConfirmComponent } from "../service-orders-confirm/service-orders-confirm.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { IServiceTypeDesignatedOfficial } from "../../interfaces/service-type-designated-official.interface";
import { MatSort } from "@angular/material/sort";
import { IServiceOrderPayload } from "../../interfaces/service-order-payload.interface";
import { Store } from "@ngrx/store";
import { servicesOrderFeatureSelector } from "src/app/state/service-order/service-order.selectors";
import { IServiceOrderStore } from "../../interfaces/service-order-store.interface";
import { cleanContainers, cleanDesignatedOfficial, cleanSaveServiceOrder, cleanSearchedCriteria, cleanServiceAutorityType, cleanServiceOrderInfo, cleanUnit, getDesignatedOfficial, getSaveServiceOrder, getServiceAutorityType, removeDesignatedOfficial } from "src/app/state/service-order/service-order.actions";
import { ISharedStore } from "src/app/core/interfaces/shared.interface";
import { sharedFeatureSelector } from "src/app/state/shared/shared.selectors";
import { apiGatewayFeatureSelector } from "src/app/state/api-gateway/api-gateway.selectors";
import { IAPIGatewayStore } from "src/app/core/interfaces/api-gateway-store.interface";
import { typesModulesDocumentation } from "src/app/shared/enums/documentation-modules.enum";
import { UploadFileService } from "src/app/shared/components/upload-file/services/upload-file.service";
import { Base64EncryptionUtilService } from "src/app/core/auth/services/base64-encryption-util.service";
import { IDocument } from "src/app/shared/components/upload-file/interfaces/upload-file.interface";

@Component({
    selector: "app-service-order-create",
    templateUrl: "./service-orders-create.component.html",
    styleUrls: ["./service-orders-create.component.css"]
})
export class ServiceOrdersCreateComponent implements OnInit, OnDestroy {
    public destroy$: Subject<void> = new Subject<void>();
    @ViewChild(MatSort) public sort!: MatSort;
    public selectedContainers: IVoidDestinationContainerSelected[] = [];
    public createServiceOrderFormGroup: FormGroup = new FormGroup({});
    public autorityTypes: IServiceAutorityType[] = [];
    public inspectionTypes: IServiceInspectionType[] = [];
    public displayedColumns: string[] = [];
    public dataSource:  MatTableDataSource<IServiceTypeDesignatedOfficial> = new MatTableDataSource<IServiceTypeDesignatedOfficial>([]);
    public designatedOfficial:  IServiceTypeDesignatedOfficial[] = [];
    public BlAndBooking: boolean = false;
    public searchCriteria: string = "";
    public nit: string = "";
    public customerName: string = "";
    public searchOfficialRegex: RegExp = new RegExp(/^\d+$/);
    public currentUser!: IAPIGatewayStore;

    public servicesOrderStoreSelect!: IServiceOrderStore;
    public documentServe: IDocument[] = [];

    public haveDocuments: boolean = false;
    customerSearcherControl!: FormControl;
    public customerValid: boolean = true;
    public customerAsignned: boolean = false;
    constructor(
        private readonly router: Router,
        private readonly matSnackBar: MatSnackBar,
        private readonly matDialog: MatDialog,
        private readonly store: Store,
        private uploadFileService: UploadFileService,
        private base64EncryptionUtilService: Base64EncryptionUtilService,
    ) {}

    ngOnInit(): void {
      this.store.select(sharedFeatureSelector).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (sharedStore: ISharedStore) => {
          if(sharedStore.selectedCustomer) {
            this.nit = sharedStore.selectedCustomer.split("/")[0];
            this.customerName = sharedStore.selectedCustomer.split("/")[1];
          }
        },
        error: error => console.error(error)
      });

      this.store.select(apiGatewayFeatureSelector).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result: IAPIGatewayStore) => {
          this.currentUser = result;
        },
        error: (error) => console.error(error)
      });

        this.store.select(servicesOrderFeatureSelector).pipe(
          takeUntil(this.destroy$)
        ).subscribe({
          next: (servicesOrderStore: IServiceOrderStore) => {
            this.servicesOrderStoreSelect = servicesOrderStore;
            if(servicesOrderStore.autorityTypes) this.autorityTypes = servicesOrderStore.autorityTypes?.authorityTypes;
            this.selectedContainers = servicesOrderStore.selectedContainers;
            this.searchCriteria = servicesOrderStore.searchedCriteria as string;

            this.displayedColumns = ["id", "name", "comp_name", "action"];
            this.dataSource = new MatTableDataSource<IServiceTypeDesignatedOfficial>(servicesOrderStore.designatedOfficials);
            this.designatedOfficial = servicesOrderStore.designatedOfficials;
            this.dataSource.sort = this.sort;

            if(this.selectedContainers.length) {
              this.BlAndBooking =
            this.selectedContainers[0].serviceTypeInfo.Type_service.includes("BL")
                ||
            this.selectedContainers[0].serviceTypeInfo.Type_service.includes("BK")
                ? true : false;
              if (this.selectedContainers[0].serviceTypeInfo.Type_service.includes('BL') || this.selectedContainers[0].serviceTypeInfo.Type_service.includes('HB')){
                if (this.selectedContainers[0].serviceTypeInfo.consigneeId){
                  this.customerAsignned = true;
                }
              }
              if (this.selectedContainers[0].serviceTypeInfo.Type_service.includes('BK')){
                if(this.selectedContainers[0].serviceTypeInfo.shipperId){
                  this.customerAsignned = true;
                }
              }
            }
          },
          error: error => console.error(error)
        });

        this.createServiceOrderFormGroup = new FormGroup({
            autority: new FormControl({ value: "", disabled: false }, [Validators.required]),
            inspectionType: new FormControl({ value: "", disabled: true }, [Validators.required]),
            designatedCrew: new FormControl({ value: "", disabled: false }),
            observations: new FormControl({ value: "", disabled: false }, [Validators.required, Validators.minLength(20), Validators.maxLength(500)])
        });

        this.getcreateServiceOrderAutorityFormControl.valueChanges.pipe(
            takeUntil(this.destroy$)
        ).subscribe({
            next: (value: IServiceAutorityType) => { 
                    this.inspectionTypes = value.inspection_type;
                    this.getcreateServiceOrderInspectionTypeFormControl.enable();
            },
            error: error => console.error(error)
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    startCreateSO(){
        if(this.BlAndBooking) {
            let payloads: IServiceOrderPayload[] = [];
            let containers: string[] = [];

            this.selectedContainers.forEach(value => {
                const newPayload: IServiceOrderPayload = {
                    type: "SO",
                    authorizedStaff: this.getcreateServiceOrderInspectionTypeFormControl.value.event_types[0].requires_crew === 'SI' ?
                    this.designatedOfficial.map(value => {
                        return `${value.id}-${value.name}-${value.comp_name}`;
                    }).join("|") : "",
                    nit: this.nit,
                    event: this.getcreateServiceOrderInspectionTypeFormControl.value.event_types[0].event_type,
                    unit: value.serviceTypeInfo.unitNbr,
                    serviceDetails: `Servicio:${value.serviceOrder}${value.voidDestination ? '-Vacío:' + value.voidDestination : "" }--${this.getcreateServiceOrderInspectionTypeFormControl.value.inspection_type === "N/A" ? "" : this.getcreateServiceOrderInspectionTypeFormControl.value.inspection_type}`,
                    userNotes: this.getcreateServiceOrderObservationFormControl.value
                };

                payloads = [...payloads, newPayload];
                containers = [...containers, value.serviceTypeInfo.unitNbr];
            });

            this.matDialog.open(ServiceOrdersConfirmComponent, {
                width: "50rem",
                data:{
                    criteria: this.searchCriteria,
                    customer: this.nit,
                    customerName: this.customerName,
                    serviceType: this.selectedContainers[0].serviceOrder,
                    autorityType: this.getcreateServiceOrderAutorityFormControl.value.authority_type,
                    inspectionType: this.getcreateServiceOrderInspectionTypeFormControl.value.inspection_type,
                    requires_crew: this.getcreateServiceOrderInspectionTypeFormControl.value.event_types[0].requires_crew,
                    container: containers.toString(),
                    containers: containers,
                    crew: this.getcreateServiceOrderInspectionTypeFormControl.value.event_types[0].requires_crew === 'SI' ?
                    this.designatedOfficial.map(value => {
                        return `${value.id}-${value.name}-${value.comp_name}`;
                    }).join("|") : "",
                    officials: this.designatedOfficial,
                    observation: this.getcreateServiceOrderObservationFormControl.value,
                    payloads,
                    BlAndBooking: this.BlAndBooking
                  }
            });
        } else {
            let containers: string[] = [];

            const payloads: IServiceOrderPayload[] = [
                {
                    type: "CSO",
                    authorizedStaff: this.getcreateServiceOrderInspectionTypeFormControl.value.event_types[0].requires_crew === 'SI' ?
                    this.designatedOfficial.map(value => {
                        return `${value.id}-${value.name}-${value.comp_name}`;
                    }).join("|") : "",
                    nit: this.nit,
                    unit: this.selectedContainers[0].serviceTypeInfo.unitNbr,
                    event: this.getcreateServiceOrderInspectionTypeFormControl.value.event_types[0].event_type,
                    serviceDetails: `Servicio:${this.selectedContainers[0].serviceOrder}${this.selectedContainers[0].voidDestination ? '-Vacío:' + this.selectedContainers[0].voidDestination : ""}--${this.getcreateServiceOrderInspectionTypeFormControl.value.inspection_type === "N/A" ? "" : this.getcreateServiceOrderInspectionTypeFormControl.value.inspection_type}`,
                    userNotes: this.getcreateServiceOrderObservationFormControl.value
                }
            ];

            containers = [this.searchCriteria];

            this.matDialog.open(ServiceOrdersConfirmComponent, {
                width: "50rem",
                data:{
                    criteria: this.searchCriteria,
                    customer: this.nit,
                    customerName: this.customerName,
                    serviceType: this.selectedContainers[0].serviceOrder,
                    autorityType: this.getcreateServiceOrderAutorityFormControl.value.authority_type,
                    inspectionType: this.getcreateServiceOrderInspectionTypeFormControl.value.inspection_type,
                    requires_crew: this.getcreateServiceOrderInspectionTypeFormControl.value.event_types[0].requires_crew,
                    container: "N/A",
                    containers: containers,
                    crew: this.getcreateServiceOrderInspectionTypeFormControl.value.event_types[0].requires_crew === 'SI' ?
                    this.designatedOfficial.map(value => {
                        return `${value.id}-${value.name}-${value.comp_name}`;
                    }).join("|") : "",
                    officials: this.designatedOfficial,
                    observation: this.getcreateServiceOrderObservationFormControl.value,
                    payloads,
                    BlAndBooking: this.BlAndBooking
                  }
            });
        }
    }

    public create(): void {

      let requires_documentation: string = this.createServiceOrderFormGroup.controls['autority']?.value?.requires_documentation;

      if(requires_documentation == 'true'){
        let nbr = this.servicesOrderStoreSelect?.searchedCriteria? this.servicesOrderStoreSelect?.searchedCriteria : '';
        
        this.loadExistencialDocumentsForNbr(typesModulesDocumentation.OS_DES_VAC, nbr );

      }else{
        this.startCreateSO();
      }
    
    }

    public deleteDesignated(id: string): void {
      this.store.dispatch(removeDesignatedOfficial({ id }));
    }

    public cancel(): void {
      this.store.dispatch(cleanSaveServiceOrder());
      this.store.dispatch(cleanDesignatedOfficial());
      this.store.dispatch(cleanContainers());
      this.store.dispatch(cleanServiceAutorityType());
      this.store.dispatch(cleanSearchedCriteria());
      this.store.dispatch(cleanServiceOrderInfo());
      this.store.dispatch(cleanUnit());
      this.router.navigate(['/', 'servicios']);
    }

    public submitDesignatedCrew(value: string): void {
        this.store.dispatch(getDesignatedOfficial({ criteria: value }));

        this.getcreateServiceOrderDesignatedCrewFormControl.reset();
    }

    public clean(): void {
        this.getcreateServiceOrderDesignatedCrewFormControl.reset();
    }

    public parseInt(value: string): number {
        return parseInt(value);
    }

    public get getcreateServiceOrderAutorityFormControl(): AbstractControl<IServiceAutorityType> {
        return this.createServiceOrderFormGroup.controls['autority'];
    }


    public loadExistencialDocumentsForNbr(module: string, nbr: string) {
      this.documentServe= [];
      
    
      this.uploadFileService.getFile(module, this.base64EncryptionUtilService.b64EncodeUnicode(nbr))
       .pipe(takeUntil(this.destroy$))
       .subscribe({
        next: (data: string) => {
          this.documentServe = JSON.parse(this.base64EncryptionUtilService.b64DecodeUnicode(data));
          this.validateExistencialDocumentsForNbr();
        },  
        error: error =>{
          console.error(error)
          this.matSnackBar.open(
            $localize`:@@9550731151441BAE3AAXRT048A5DE00618041FKLsF57349282CFE79B00000011: services.save.get.documents.ERROR`,
            "",
            {
              verticalPosition: "top",
              panelClass: ["error-snackbar"],
              duration: 5000
            }
          );
        }
      });
    }


    validateExistencialDocumentsForNbr(){
      let fileFound: number = 0;
      this.documentServe[0]?.files?.forEach((files) => {
        fileFound = fileFound + files.files.length;
      });

      if(fileFound>0){
        this.startCreateSO();
      }else{
        this.matSnackBar.open(
          $localize`:@@9550731151441BAE3AAXRT048A5DE00618041FKLsF57349282CFE79F00000010: services.save.without.documents.ERROR`,
          "",
          {
            verticalPosition: "top",
            panelClass: ["error-snackbar"],
            duration: 5000
          }
        );
      }
    }



    public get getcreateServiceOrderInspectionTypeFormControl(): AbstractControl<IServiceInspectionType> {
        return this.createServiceOrderFormGroup.controls['inspectionType'];
    }

    public get getcreateServiceOrderObservationFormControl(): AbstractControl<string> {
        return this.createServiceOrderFormGroup.controls['observations'];
    }

    public get getcreateServiceOrderDesignatedCrewFormControl(): AbstractControl<string> {
        return this.createServiceOrderFormGroup.controls['designatedCrew'];
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
