import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { firstValueFrom, Subject, Subscription, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

import { StorageserviceService } from 'src/app/shared/services/storageservice.service';



import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { IContainerizedLoad, IContainerizedTwo } from 'src/app/core/interfaces/containerized-load.interface';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { RemoveContainerDialogComponent } from 'src/app/shared/components/remove-container-dialog/remove-container-dialog.component';
import { UtilService } from 'src/app/shared/services/util.service';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


export interface IBookingISOType {
  isoType: string;
  quantity: string | null;
  availableQuantity: string | null;
}

export interface IBookingUnit{
  id: string;
  container: {
           type:string;
           id:string;
  },
  category: string;
  truckingCompany: string;
  transitState: string;
}

export interface IElementC {
  nbr: string;
  eqStatus: string;
  line: string;
  shipperId: string | null;
  shipperName: string | null;
  agentId: string;
  carrierVisit: string;
  carrierVisitName: string;
  inVoyNbr: string;
  outVoyNbr: string;
  vesselId: string;
  vesselName: string;
  visitPhase: string;
  portOfLoading: string | null;
  portOfDischargel: string | null;
  reference: string | null;
  quantity: number | null;
  availableQuantity: number | null;
  equipmentType: string | null;
  equipmentTypeDescription: string | null;
  heightMm: number | null;
  lengthMm: number | null;
  eqIsoGroup: string  | null;
  isOog: string | null;
  grossWeight: number | null;
  oogLeftCm: number | null;
  oogRightCm: number | null;
  oogTopCm: number | null;
  oogFrontCm: number | null;
  yard: boolean | null;
  departed: boolean | null;
  twenty: boolean;
  hasDebt: boolean;
  seqNbr: string | null;
  unitNbr: string;
  transitState: string | null;
  isoType: string;
  hasChargeableUnitEvents: boolean;
  category: string;
  hasPin: boolean;
  hasTruckVisitAppointment: boolean | null;
  onAccount: boolean;
  hasHolds: boolean;
  pin: string | null;
  holdDescription: string;
  powerPaidThruDay: string | null;
  archiso: string | null;
  tempReqdC: number | null;
  units: object;
  items: object;
}

@Component({
  selector: 'app-disassociate-container',
  templateUrl: './disassociate-container.component.html',
  styleUrls: ['./disassociate-container.component.css']
})
export class DisassociateContainerComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) dynamicContainer!: ViewContainerRef;
  private storageSubscription!: Subscription;
  public userInfo!: IAPIGatewayStore;
  public isViewComponent = true;
  public destroy$: Subject<void> = new Subject<void>();
  public dataSourceBooking: MatTableDataSource<IContainerizedLoad> = new MatTableDataSource<IContainerizedLoad>([]);
  public dataBookingASC: { "booking": string, "line": string,
    "carrierVisitName": string, "inVoyNbr": string, "shipper": string,
    "quantity": number, "quantityAvailable": number, 
    "isoCode": {'equipmentType': string, 'description': string}[]} = { "booking": "", "line": "", "carrierVisitName": "", "inVoyNbr": "" , 
                             "shipper": "", "quantity": 0, "quantityAvailable": 0, "isoCode": []};
  public hidden = false;
  public listIsoCodes: {'equipmentType': string, 'description': string}[] = [];
  public newBookingASC: IContainerizedLoad[] = [];
  public dataSourceISO: MatTableDataSource<IBookingISOType> = new MatTableDataSource<IBookingISOType>([]);
  public bookingASC: IContainerizedLoad[] = [];
  private storeSubscription: Subscription | null = null; 
  public existenDatos: boolean = false;
  public displayedBookingColumns: string[] = [];
  public displayedColumnsISO: string[] = [];
  public bookingSearch: string = "";
  
  constructor(private storageService:StorageserviceService, private readonly store: Store, private cdr: ChangeDetectorRef,
    private readonly matDialog: MatDialog,
    private utilServices: UtilService,
    private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly matSnackBar: MatSnackBar,
  ){}
  
  ngOnInit(): void {
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
      if (action.action === 'deleteContainer'){
       
      }
    });
    
    this.storeSubscription = this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (result: ISharedStore) => {
        if (result && result.bookingID){
          this.bookingASC = result.bookingID;
          this.existenDatos = true;
         
        }
      }
    });
    
    this.displayedBookingColumns = ["unitNbr", "twenty", "equipmentType", "carrier"];
    this.displayedColumnsISO = ["isoType", "quantity", "availableQuantity"];
    this.getDataBookingASC(this.bookingASC);
  }

  public submit(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSourceBooking.filter = filterValue.trim().toLowerCase();
  }

  public onScroll(): void {

  }

  private getDataBookingASC(bookingASC: IContainerizedLoad[]){
    if(bookingASC.length > 0){
      if(bookingASC[0].nbr){
        this.dataBookingASC.booking = bookingASC[0].nbr;
        this.dataBookingASC.line = bookingASC[0].line;
        this.dataBookingASC.carrierVisitName = bookingASC[0].carrierVisitName;
        this.dataBookingASC.inVoyNbr = bookingASC[0].inVoyNbr;
        this.dataBookingASC.shipper = `${bookingASC[0].shipperId} -- ${bookingASC[0].shipperName}`;

      }
      let quantity = 0;
      let quantityAvailable = 0;
      bookingASC.forEach((element) => {
        if (!element.unitNbr && element.quantity && element.availableQuantity && element.equipmentType && element.equipmentTypeDescription){
          quantity += parseInt(element.quantity);
          quantityAvailable += parseInt(element.availableQuantity);
          const equipmentType = element.equipmentType;
          const equipmentTypeDescription = element.equipmentTypeDescription;
          const isoCode = {'equipmentType': equipmentType, 'description': `{${equipmentType}} / ${equipmentTypeDescription}`};
          const exists = this.listIsoCodes.some(code => 
            code.equipmentType === isoCode.equipmentType && 
            code.description === isoCode.description
          );
          if (!exists) {
            this.listIsoCodes.push(isoCode);
          }

        }
      });
      this.dataBookingASC.quantity = quantity;
      this.dataBookingASC.quantityAvailable = quantityAvailable;
      this.dataBookingASC.isoCode = this.listIsoCodes;
      let dataSourceBooking: IBookingISOType[] = [];
      let accumulatedDataSource: IBookingISOType[] = [];

      dataSourceBooking = bookingASC
      .filter((element) => element.unitNbr)
      .map((element) => ({
        isoType: element.isoType,
        quantity: element.quantity,
        availableQuantity: element.availableQuantity
      }));
      this.newBookingASC = bookingASC.filter((element) => element.unitNbr);
      this.dataSourceISO = new MatTableDataSource(accumulatedDataSource);
      this.dataSourceBooking = new MatTableDataSource(this.newBookingASC);
      this.dataSourceBooking.sort = this.sort;
      this.cdr.detectChanges();
      

    }
    
  }

  async deleteContainer(unitNbr:string, booking: string){
    if(this.matDialog.openDialogs.length === 0 ){
      
      const dialoReg = this.matDialog.open(RemoveContainerDialogComponent, {
        width: "50rem",
        data: {unitNbr: unitNbr, booking: booking}
      });
      const resultDialog = await dialoReg.afterClosed().toPromise();
      if (resultDialog){
        if (resultDialog.success){
          
          const unit = this.base64EncryptionUtilService.encrypt(unitNbr);
         
       
          const body = this.makeDisassociate(unitNbr);
         
          const desassociate = await firstValueFrom(this.utilServices.putDesasociateContainer(body, unit));
          
          if (desassociate && !desassociate.error){
            this.showMessage($localize `:@@f30243c26645e1c2101098c8bdae1aa096cde89f9d0ec880e930b9122d608e83: export.ExportCancelPreadviseController.PREADVISE_CANCELLED`, "success");
            this.storageService.deleteContainer(true);
            this.isViewComponent = false;
          }
          else{
            if (desassociate.error.error) {
              this.showMessage(desassociate.error.error, "error");
              
            } else {
              this.showMessage(desassociate.error, "error");
            }
          }
        }
      }
    }
  }

  private getItemsBooking(): IContainerizedTwo[] {
    let items: IContainerizedTwo [] = [];
    this.bookingASC.forEach((booking) => {
      items.push({quantity: booking.quantity, availableQuantity: booking.availableQuantity,
        equipmentType: booking.equipmentType, equipmentTypeDescription: booking.equipmentTypeDescription,
        heightMm: booking.heightMm, lengthMm: booking.lengthMm, eqIsoGroup: booking.eqIsoGroup,
        isOog: booking.isOog, seqNbr: booking.seqNbr, archiso: booking.archiso, reefer: booking.reefer,
        reference: booking.reference,
        hazards: booking.hazards,
        grossWeight: booking.grossWeight,
         ogg: {
          oogLeftCm: booking.oogLeftCm,
          oogRightCm: booking.oogRightCm,
          oogTopCm: booking.oogTopCm,
          oogFrontCm: booking.oogFrontCm,
          isOog: booking.isOog
          },
        
      });
    });
    return items;
  }


  private makeInfoContainer(nbr:string): IElementC{
    let elementC: IElementC = {
      nbr: "",
      eqStatus: "",
      line: "",
      shipperId: "",
      shipperName: "",
      agentId: "",
      carrierVisit: "",
      carrierVisitName: "",
      inVoyNbr: "",
      outVoyNbr: "",
      vesselId: "",
      vesselName: "",
      visitPhase: "",
      portOfLoading: "",
      portOfDischargel: "",
      reference: "",
      quantity: 0,
      availableQuantity: 0,
      equipmentType: "",
      equipmentTypeDescription: "",
      heightMm: 0,
      lengthMm: 0,
      eqIsoGroup: "",
      isOog: "",
      grossWeight: 0,
      oogLeftCm: 0,
      oogRightCm: 0,
      oogTopCm: 0,
      oogFrontCm: 0,
      yard: false,
      departed: false,
      twenty: false,
      hasDebt: false,
      seqNbr: "" ,
      unitNbr: "",
      transitState: "",
      isoType: "",
      hasChargeableUnitEvents: false,
      category: "",
      hasPin: false,
      hasTruckVisitAppointment: false,
      onAccount: false,
      hasHolds: false,
      pin: "",
      holdDescription: "",
      powerPaidThruDay: "",
      archiso: "",
      tempReqdC: 0,
      units: {},
      items: {}
    }
    this.bookingASC.forEach((element) => {
      if (element.unitNbr && element.unitNbr === nbr){
        let departed = false;
        let hasTruckVisitAppointment = false;
        if ((element.departed && (element.departed === 'true' || element.departed === 'Y')) || (element.departed)){
          departed = true;
        }
        if ((element.hasTruckVisitAppointment && (element.hasTruckVisitAppointment === 'true' || element.hasTruckVisitAppointment === 'Y')) || (element.departed)) {
          hasTruckVisitAppointment = true;
        }
        elementC = {
          "nbr": element.nbr ? element.nbr : "",
          "eqStatus": element.eqStatus ? element.eqStatus : "",
          "line": element.line,
          "shipperId": element.shipperId ,
          "shipperName": element.shipperName ,
          "agentId": element.agentId ? element.agentId : "",
          "carrierVisit": element.carrierVisit,
          "carrierVisitName": element.carrierVisitName,
          "inVoyNbr": element.inVoyNbr,
          "outVoyNbr": element.outVoyNbr,
          "vesselId": element.vesselId,
          "vesselName": element.vesselName,
          "visitPhase": element.visitPhase,
          "portOfLoading": element.portOfLoading ,
          "portOfDischargel": element.portOfDischarge1,
          "reference": element.reference,
          "quantity": element.quantity ? parseInt(element.quantity) : 0,
          "availableQuantity": element.availableQuantity ? parseInt(element.availableQuantity) : 0,
          "equipmentType": element.equipmentType,
          "equipmentTypeDescription": element.equipmentTypeDescription,
          "heightMm": element.heightMm,
          "lengthMm": element.lengthMm,
          "eqIsoGroup": element.eqIsoGroup,
          "isOog": element.isOog,
          "grossWeight": element.grossWeight,
          "oogLeftCm": element.oogLeftCm ? parseInt(element.oogLeftCm) : null,
          "oogRightCm": element.oogRightCm ? parseInt(element.oogRightCm) : null,
          "oogTopCm": element.oogTopCm ? parseInt(element.oogTopCm) : null,
          "oogFrontCm": element.oogFrontCm ? parseInt(element.oogFrontCm) : null,
          "yard": element.yard ,
          "departed":departed,
          "twenty": element.twenty,
          "hasDebt": element.hasDebt,
          "seqNbr": element.seqNbr,
          "unitNbr": element.unitNbr,
          "transitState": element.transitState,
          "isoType": element.isoType,
          "hasChargeableUnitEvents": element.hasChargeableUnitEvents,
          "category": element.category,
          "hasPin": element.hasPin,
          "hasTruckVisitAppointment": hasTruckVisitAppointment,
          "onAccount": element.onAccount,
          "hasHolds": element.hasHolds,
          "pin": element.pin,
          "holdDescription": element.holdDescription,
          "powerPaidThruDay": element.powerPaidThruDay,
          "archiso": element.archiso,
          "tempReqdC": element.tempReqdC ? parseInt(element.tempReqdC) : null,
          units: {},
          items: {}

        };
      }
    });

    return elementC;
  }

  private getUnits(): IBookingUnit[]{
    let units : IBookingUnit[] = [];
    this.bookingASC.forEach((element) => {
      if (element.unitNbr){
        units.push({
          "id": element.unitNbr,
          "container": {
            "type": element.isoType,
            "id": element.unitNbr,
          },
          "category": element.category,
          "truckingCompany": element.truckingCompany? element.truckingCompany: "",
          "transitState": element.transitState? element.transitState: "",
        });
      }
    });
    return units;
  }


  private makeDisassociate(nbr:string): IElementC{
    let elementC = this.makeInfoContainer(nbr);
    let items = this.getItemsBooking();
    let units = this.getUnits();
    elementC.items = items;
    elementC.units = units;
    return elementC;

  }

  public showMessage(message: string, type:string): void {
    const config = {
      verticalPosition: "top" as MatSnackBarVerticalPosition,
      duration: 5000,
      panelClass: [""]
    };
    if (type === "error"){
      config.panelClass = ["error-snackbar"];
    }
    else if(type === "warning"){
      config.panelClass = ["warning-snackbar"];
    }
    else if(type === "success"){
      config.panelClass = ["success-snackbar"];
    }
    this.matSnackBar.open(message, "", config);
  }

  ngOnDestroy(): void {
    if (this.storageSubscription) {
      this.storageSubscription.unsubscribe();
    }
   
    this.destroy$.next();
    this.destroy$.complete();

  }
}
