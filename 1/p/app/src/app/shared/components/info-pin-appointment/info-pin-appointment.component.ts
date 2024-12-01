import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { combineLatest, filter, firstValueFrom, Subject, Subscription, take, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IDetachedLoad } from 'src/app/core/interfaces/detached-load.interface';
import { IGroupDetachedLoad } from 'src/app/core/interfaces/group-detached-load.interface';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { StorageserviceService } from '../../services/storageservice.service';
import { getConfigurationPortal, setConfigurationPortal, setItemCheckeados, setItemCheckeadosContenerized } from 'src/app/state/shared/shared.actions';
import { IItemCheckeados, IItemCheckeadosContenerized } from 'src/app/core/interfaces/item-checkeados.interface';
import { cleanAppointmentData, getDataAppointmentDetail, setDataElementsDetachedLoad } from 'src/app/state/detached-load/detached-load.actions';
import { getDataAppointmentDetail as  getDataAppointmentDetailCC} from 'src/app/state/containerized-load/containerized-load.actions';


import { Router } from '@angular/router';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { IContainerizedLoad, IContainerizedTwo } from 'src/app/core/interfaces/containerized-load.interface';
import { setDataElementsContainerizedLoad } from 'src/app/state/containerized-load/containerized-load.actions';
import { CommunicationService } from 'src/app/modules/containerized-load/services/communication.service';
import { UtilService } from '../../services/util.service';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { clean } from 'src/app/state/credit-notes/credit-notes.actions';
import { MatDialog } from '@angular/material/dialog';
import { RemoveContainerDialogComponent } from '../remove-container-dialog/remove-container-dialog.component';
import { IBookingUnit, IElementC } from 'src/app/modules/containerized-load/components/disassociate-container/disassociate-container.component';
import { IContainer } from 'src/app/core/interfaces/data-appointment-cc.interface';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { C } from '@angular/cdk/keycodes';



interface IBookingISOType {
  isoType: string;
  quantity: string | null;
  availableQuantity: string | null;
}

@Component({
  selector: 'app-info-pin-appointment',
  templateUrl: './info-pin-appointment.component.html',
  styleUrls: ['./info-pin-appointment.component.css']
})
export class InfoPinAppointmentComponent implements OnInit, OnDestroy {
  @Input() public pin: string = "";
  @Input() public hbl: string = "";
  @Input() public booking: string | null = null;
  @Input("loadType") public loadType: string = "";
  @Input("infoPin") public infoPin: IDetachedLoad[] = [];
  @Input("infoPinContanerized") public infoPinContanerized: IContainerizedLoad[] = [];
  @Input("isEditAppointment") public isEditAppointment: boolean = false;
  @Input("plate") public plate: string = "";
  @Input("isPlateValid") public isPlateValid: boolean = false; 
  @Input("bookingASC") public bookingASC: IContainerizedLoad[] = [];
  @Input("origin") public origin: string = "";
  public userInfo!: IAPIGatewayStore;
  public destroy$: Subject<void> = new Subject<void>();
  public dataPin: IGroupDetachedLoad[] = [];
  public dataSource: MatTableDataSource<IDetachedLoad> = new MatTableDataSource<IDetachedLoad>([]);
  public dataSourceContainerized: MatTableDataSource<IContainerizedLoad> = new MatTableDataSource<IContainerizedLoad>([]);
  public displayedColumns: string[] = [];
  public tienePlacaValida = false;
  private storageSubscription!: Subscription;
  public existenDatos = false;
  public placa: string = "";
  checkboxStates: { [key: string]: boolean } = {};
  listCargoWeigth: { [key: string]: number } = {};
  public isViewEditAppointment = false;
  public bloqueoActivado = false;
  public bloqueoTwentyFalse = false;
  public bloqueoExport = false;
  public bloqueoImport = false;
  public listIsoCodes: {'equipmentType': string, 'description': string}[] = [];
  public dataSourceBooking: MatTableDataSource<IContainerizedLoad> = new MatTableDataSource<IContainerizedLoad>([]);
  public dataSourceISO: MatTableDataSource<IBookingISOType> = new MatTableDataSource<IBookingISOType>([]);
  public displayedBookingColumns: string[] = [];
  public displayedColumnsISO: string[] = [];
  public bookingSearch: string = "";
  public hidden = false;
  public newBookingASC: IContainerizedLoad[] = [];
  private storeSubscription: Subscription | null = null; 
  public dataBookingASC: { "booking": string, "line": string,
     "carrierVisitName": string, "inVoyNbr": string, "shipper": string,
     "quantity": number, "quantityAvailable": number, 
     "isoCode": {'equipmentType': string, 'description': string}[]} = { "booking": "", "line": "", "carrierVisitName": "", "inVoyNbr": "" , 
                              "shipper": "", "quantity": 0, "quantityAvailable": 0, "isoCode": []};
  pinDeleted: string = '';
  public isPermissionForDesassociate = false;
  private containersEdit: IContainer[] = [];
  private listSiteAppointmen: string[] = [];
  
  
  
  
  constructor(private readonly store: Store, private storageService:StorageserviceService,
    private cdr: ChangeDetectorRef, private readonly router: Router, private readonly aesEncryptionUtilService: AESEncryptionUtilService,
    private communicationService: CommunicationService, private utilService: UtilService, private readonly base64EncryptionUtilService: Base64EncryptionUtilService,
    private readonly matSnackBar: MatSnackBar,
    private readonly matDialog: MatDialog,
    private utilServices: UtilService,
  ){ }
  ngOnInit(): void {
    
    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: (APIGatewatStore: IAPIGatewayStore) => this.userInfo = APIGatewatStore,
      error: error => console.error(error)
    });
    
    
    this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
     
      if (action.action === 'cleanValidationPin'){
        this.existenDatos = false;
        //revisar esto mas adelante
       
        //if (!action.value){
          this.infoPin = [];
          this.infoPinContanerized = [];
          this.hidden = true;
          this.bookingASC = [];
          if (this.storeSubscription) {
            this.storeSubscription.unsubscribe();
          }
        //}
      }
      if (action.action === 'setPlacaValida'){
        this.tienePlacaValida = action.value;
        this.placa = action.placa;
      }
      if (action.action === 'setCheckedMatCheckbox'){
        this.onCheck(action.value, null, true, action.id);
      }
      if (action.action === 'cleanPlaca' && !this.isEditAppointment){
        this.existenDatos = false;
        this.infoPin = [];
      }
      if (action.action === 'appointmentWasCreated'){
        this.existenDatos = false;
        this.infoPin = [];
        this.infoPinContanerized = [];
       
        this.resetCheckboxStates();

      }
      if (action.action === 'viewEditAppointment'){
        this.existenDatos = false;
        //this.infoPin = [];
        this.isViewEditAppointment = true;
      }
      if (action.action === 'viewCreateAppointment'){
        this.isViewEditAppointment = false;
        this.resetCheckboxStates();
      }
     
      
      if (action.action === 'showAppointmentCard'){
        if(action.value){
          this.resetCheckboxStates();
        }
      }

      if (action.action === 'setBooking'){
        this.hidden = false;
        
      }

      if (action.action === 'cleanAssociateContainerForm'){
        this.hidden = true;
        this.loadData();
      }

      if (action.action === 'deleteContainer'){
        this.hidden = true;
        this.loadData();
      }
      
      if (action.action === 'cleanValidationPinIndividual'){
        if(this.loadType === 'cc'){
          
          this.pinDeleted = action.key;

        }
      }
      if (action.action === 'cleanAll'){
        //if(this.origin === 'history' || (this.isViewEditAppointment)){
          this.resetCheckboxStates();
        //}
      }

      if (action.action === 'viewEditAppointmentCC'){
        this.existenDatos = false;
        //this.infoPin = [];
        this.isViewEditAppointment = true;
        this.infoPin = [];
        this.infoPinContanerized = [];
        this.containersEdit = action.value;
        this.resetCheckboxStates();
      }
      
      this.loadData();
    });
    if(this.isPlateValid && this.plate !== "" && !this.tienePlacaValida){
      this.tienePlacaValida = true;
      this.placa = this.plate;

    }
    this.isPermissionForDesassociate = this.hasPermission("CC_EXP_ASO");
    this.loadData();
  }

  ngAfterViewInit(){
    if(this.loadType === 'cc'){
      this.evaluationCheckBoxesCC(this.pinDeleted);
    }
  }

  
  
  public submit(event: Event): void{
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public onScroll(): void{

  }

  public loadData(): void{
    
    if (this.infoPin.length > 0){
      this.dataPin = [];
      this.displayedColumns = ['agente', 'unitSequence','hbl', 'cargoWeigth', 'cargoQuantity', 'consigneeName'];
      
       /* this.infoPin.map((item) => {
        item.hasChargeableUnitEvents = false;
      
      });  */


      //consultar cuales estan checkeados
      this.store.select(sharedFeatureSelector).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result: ISharedStore) => {
          if (result && result.itemCheckeados){
          
            const itemCheckeados = result.itemCheckeados.find((item: IItemCheckeados) => item.pin === this.pin);
            if (itemCheckeados){
              this.checkboxStates = itemCheckeados.data;
            }
          }
          
        },
        error: error => console.error(error)
      }); 
      this.dataSource.data = this.infoPin;
      
      if (this.origin === 'history'){
        this.tienePlacaValida = true;
      }
      this.existenDatos = true;
    }
    if (this.loadType === 'cc' && this.infoPinContanerized.length > 0){
      this.dataPin = [];
      this.displayedColumns = ['shipperId', 'unitNbr', 'siteAppointment', 'twenty', 'eroNbr'];
      //consultar cuales estan checkeados
      
      this.dataSourceContainerized.data = this.infoPinContanerized;
      this.existenDatos = true;
    }
   
    if (this.loadType === 'cc'){
      this.store.select(sharedFeatureSelector).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result: ISharedStore) => {
          if (result && result.infoAppointmentCC){
            this.containersEdit = result.infoAppointmentCC.containers;
          }
          
        },
        error: error => console.error(error)
      }); 
    }

    if (this.loadType === 'asc'){
      this.existenDatos = false;
      this.bookingASC = [];
      
      this.storeSubscription = this.store.select(sharedFeatureSelector).pipe(
          takeUntil(this.destroy$)
        ).subscribe({
          next: (result: ISharedStore) => {
            if (result && result.bookingID){
              this.bookingASC = result.bookingID;
             
             
            }
          }
        });
      this.existenDatos = true;
      
      this.getDataBookingASC(this.bookingASC);
      this.displayedBookingColumns = ["unitNbr", "twenty", "equipmentType", "forbidden"];
      this.displayedColumnsISO = ["isoType", "quantity", "availableQuantity"];
    }
  }

  public getMessage(message: string, param?: string): string {
    switch(message) {
      case "detached-load.hasPin":
        return $localize`:@@e1f50db714e5d10ebe69f4df7e4a925735e9e56e30fa76a6545a384f9b5fdd50: modules.detached-load.hasPin ${param}:truck:`
      break;

      case "detached-load.hasChargeableUnitEvents":
        return $localize`:@@b8a7ef72fbd82471b4963324c8615ff32aee8971465c8d7fc8485c30d506130c: modules.detached-load.hasChargeableUnitEvents`
      break;

      case "detached-load.hasDebt-false":
        return $localize`:@@0d9a9b4509684ed85e2051f4ed5a93f98f770afa696e67a01cdb377a20a2740e: modules.detached-load.hasDebt-false`
      break;

      case "detached-load.hasDebt-true":
        return $localize`:@@6f4cabe3f87db6c43f394be94d976073a3f76e58245e37fda4179b5243143d17: modules.detached-load.hasDebt-true`
      break;

      case "detached-load.hasHolds":
        return $localize`:@@92134cc80b78bda7ed66345d1693f6528b8922e374debdbfa0e096ee368485d2: modules.detached-load.hasHolds ${param}:hold:`
      break;

      case "modules.detached-load.storageDaysOwed":
        return $localize`:@@72954f713a4d54227807e6491c7e8c13fac702387efd89ffd53a12317f8fc76b: modules.detached-load.storageDaysOwed`
      break;

      case "modules.detached-load.yard":
        return $localize`:@@ef5756dc90602383d1113290a1081fcec763e93921cc6dffdfd8c02dfd8cb6de: modules.detached-load.yard`
      break;

      case "modules.detached-load.holdConsigneeActive-true":
        return $localize`:@@603598fd51e1293ad213343b1b56de4d99564188a3e45767c83a95368466af32: modules.detached-load.holdConsigneeActive-true`
      break;

      case "modules.detached-load.holdConsigneeActive-null":
        return $localize`:@@e00550740b122e20075306f1819786f3bb7a463c1301702c1283c86b0ecad954: modules.detached-load.holdConsigneeActive-null`
      break;

      case "modules.detached-load.truck_visit_appt_nbr":
        return $localize`:@@c7351ea231bf74b23b6525ce3281d9118fa3e90fff00a0b8231af4ffe02847e1: modules.detached-load.truck_visit_appt_nbr`
      break;

      case "modules.contenerized.load.trucking.company.forbidden":
        return $localize`:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym50: modules.contenerized.load.trucking.company.forbidden`
      break;

      case "modules.contenerized.load.desassociate.container":
        return $localize`:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym51: modules.contenerized.load.desassociate.container`

      default:
        return "Mensaje no existe."
      break;
    }
  }


  //funcion para reaccionar al click en el mat-checkbox
  public onCheck(value: boolean, row: IDetachedLoad | null, forUpdate: boolean, id: string){
    this.store.dispatch(cleanAppointmentData());
    this.storageService.showAppointmentCard(false);
    if (!forUpdate){
      if (row){
        if (value){
          this.checkboxStates[row.id + '_' + row.unitSequence] = true;
          this.listCargoWeigth[row.id + '_' + row.unitSequence] = row.cargoWeigth;
          this.storageService.setCantidadCarga(row.cargoWeigth, "add", row.id + '_' + row.unitSequence, row.hbl, row.cargoQuantity, row.unitSequence, this.placa, row.unitNbr, 
            this.origin, row.pinParaEliminar? row.pinParaEliminar: "", row.holdConsigneeActive);
          this.store.dispatch(setItemCheckeados({data: {data: this.checkboxStates, cargoWeigth: this.listCargoWeigth, pin: this.pin, hbl: row.hbl, unds: row.cargoQuantity, 
            unitSequence: row.unitSequence, placa: this.placa, unitNbr: row.unitNbr}}));
        } else{
          this.checkboxStates[row.id + '_' + row.unitSequence] = false;
          this.listCargoWeigth[row.id + '_' + row.unitSequence] = row.cargoWeigth;
          this.storageService.setCantidadCarga(row.cargoWeigth, "substract", row.id + '_' + row.unitSequence, row.hbl, row.cargoQuantity, row.unitSequence, this.placa, row.unitNbr,
            this.origin, row.pinParaEliminar? row.pinParaEliminar: "", row.holdConsigneeActive
          );
          /* this.store.dispatch(setItemCheckeados({data: {data: this.checkboxStates, cargoWeigth: this.listCargoWeigth, pin: this.pin, hbl: row.hbl, unds: row.cargoQuantity,
             unitSequence: row.unitSequence, placa: this.placa, unitNbr: row.unitNbr}}));  */
        }
      }
    
    } else{
      this.cdr.detectChanges();
      this.checkboxStates[id] = value
      this.cdr.detectChanges();
    }
    
  }

  async onCheckContainerized(value: boolean, row: IContainerizedLoad | null, forUpdate: boolean, id: string){
    this.store.dispatch(cleanAppointmentData());
    this.storageService.showAppointmentCard(false);
    if(!forUpdate){
      if(row){
        const respEvaluationSiteAppointment: boolean = await this.evaluationSiteAppointment(row);
        if (!respEvaluationSiteAppointment && value){
          setTimeout(() => {
            this.checkboxStates = { ...this.checkboxStates, [row.unitNbr]: false };
          });
          const message = $localize `:@@a806048df34689a635cd644ff1cc08630a3e1d407bf5619901f2e6473018063c: truck.views._partial-truck-visit-detail.edit.add.location.ERROR`;
          this.showMessage(message, "error");
          return;
        }
        
        const respEvaluationOEA: boolean = await this.evaluationOEA(row, value);
       
        if (!respEvaluationOEA){
          setTimeout(() => {
            this.checkboxStates = { ...this.checkboxStates, [row.unitNbr]: false };
          });
          const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym6: modules.contanerized.load.appointment.cc.sae ${row.unitNbr}`;
          this.showMessage(message, "error");
          return;
        }
        const respEvaluationReefer: boolean = await this.evaluationReefer(row, value);
        if (!respEvaluationReefer){
          setTimeout(() => {
            this.checkboxStates = { ...this.checkboxStates, [row.unitNbr]: false };
          });
          const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym7: modules.contanerized.load.appointment.cc.temperature ${row.unitNbr}`;
          this.showMessage(message, "error");
          return;
        }

        const respEvaluationHazard: boolean = await this.evaluationHazard(row, value);
        if (!respEvaluationHazard){
          setTimeout(() => {
            this.checkboxStates = { ...this.checkboxStates, [row.unitNbr]: false };
          });
          const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym8: modules.contanerized.load.appointment.cc.security ${row.unitNbr}`;
          this.showMessage(message, "error");
          return;
        } 
        const type = row.twenty ? 20 : 40;
        const category = row.bookingNbr ? 'ingreso' : 'retiro';
        const pinOrBooking = row.pinParaEliminar ? row.pinParaEliminar : row.bookingNbr;
        const isoType = row.isoType;
        const retiro = row.retiro ? true : false;
        const edoNbr = row.edoNbr ?  row.edoNbr: null;
        const eroNbr = row.eroNbr ? row.eroNbr: null;
        const line = row.line;
       
        const respEvaluationAddSubstractContainer: boolean = await this.evaluationAddSubstractContainer(type, row.bookingNbr ? 'income' : 'withdrawal', value ? "add": "substract", id, pinOrBooking);
        if (!respEvaluationAddSubstractContainer){
          setTimeout(() => {
            this.checkboxStates = { ...this.checkboxStates, [row.unitNbr]: false };
          });
          return;
        }
       
        if(value){
          this.checkboxStates[row.unitNbr] = true;
          const isHoldConsigneeActive = row.holdConsigneeActive ? row.holdConsigneeActive: false;
          this.storageService.setContenedorType(type, "add", id, category, pinOrBooking, isoType, retiro, edoNbr, eroNbr, line, row.siteAppointment, isHoldConsigneeActive);
         
          this.store.dispatch(setItemCheckeadosContenerized({data: {data: this.checkboxStates, pin: row.pinParaEliminar, booking: row.bookingNbr, category: category}}));
          
        }else{
          this.checkboxStates[row.unitNbr] = false;
          const isHoldConsigneeActive = row.holdConsigneeActive ? row.holdConsigneeActive: false;
          this.storageService.setContenedorType(type, "substract", id, category, pinOrBooking, isoType, retiro, edoNbr, eroNbr, line, row.siteAppointment, isHoldConsigneeActive);
         
        }
      }
    } else{
      this.cdr.detectChanges();
      this.checkboxStates[id] = value;
      this.cdr.detectChanges();
    }
  }

  public resetCheckboxStates(): void {
    Object.keys(this.checkboxStates).forEach(key => {
      this.checkboxStates[key] = false;
    });
    this.storageService.setResetItemCheckeados(true);
   
  }

  public clickAppointment(elemet: any): void {
   
    if(this.isEditAppointment){
      return;
    }
    
    //let appointment: string = elemet.truck_visit_appt_nbr;
    //localStorage.setItem('elementsDetachedLoad', encryptedValue);
    localStorage.setItem('loadType', this.loadType);
    this.resetCheckboxStates();
    if (this.loadType === 'cc'){
      this.storageService.showAppointmentCard(true);
      let appointment: string = elemet.truckVisit;
      this.storageService.cleanAll();
      this.store.dispatch(getDataAppointmentDetailCC({ truckVisitNbr: appointment }));
      const encryptedValue = this.aesEncryptionUtilService.encrypt(JSON.stringify(elemet));
      this.store.dispatch(setDataElementsContainerizedLoad({ elementsContainerizedLoad: encryptedValue }));
      this.store.dispatch(getConfigurationPortal());
      this.store.select(containerizedLoadFeatureSelector).pipe(filter(response => typeof response.truckVisitNbrData === 'object'),take(1)).subscribe((response) =>{
        if (response.truckVisitNbrData && response.truckVisitNbrData.appointmentDate){
          if (response.truckVisitNbrData.createdByLDAP && response.truckVisitNbrData.companyIdLdap){
            const companyUser = this.userInfo.empresa?.id;
            if (companyUser === response.truckVisitNbrData.companyIdLdap){
              this.router.navigate(['carga-contenerizada', 'appointment-datails'], {});
            }else{
              this.router.navigate(['carga-contenerizada']);
            }
          }else{
            this.router.navigate(['carga-contenerizada', 'appointment-datails'], {});
          }
         
         
          
          
          
          
        }
      });
      
    } else{
      this.storageService.showAppointmentCard(true);
      let appointment: string = elemet.truck_visit_appt_nbr;
      this.storageService.cleanAll();
      this.store.dispatch(getDataAppointmentDetail({ truckVisitNbr: appointment }));
      const encryptedValue = this.aesEncryptionUtilService.encrypt(JSON.stringify(elemet));
      this.store.dispatch(getConfigurationPortal());
      this.store.dispatch(setDataElementsDetachedLoad({ elementsDetachedLoad: encryptedValue }));
      this.router.navigate(['carga-suelta', 'appointment-creation'], {});
    }
  }

  async evaluationOEA(row:IContainerizedLoad | null , value:boolean): Promise<boolean> {
    let respt = false;
    if (!value){
      return true;
    }
    if(row){
      
      if(row.oea && row.oea === "OEA"){
        //no se exige planilla de traslado
        respt = true;
      }else{
        //se exige planilla de traslado
          if (row.bookingNbr){
            const validationPlanilla = await firstValueFrom(this.utilService.getValidationPlanilla(this.base64EncryptionUtilService.encrypt((row.bookingNbr)), row.unitNbr));  
            if (validationPlanilla && Array.isArray(validationPlanilla) && validationPlanilla.length > 0){
              validationPlanilla.forEach((element: any) => {
                if (element.name && element.name === "".concat(row.unitNbr).concat(".pdf")){
                  respt = true;
                }
              }
              );
            }
          }else{
            respt = true;
          }
        }
      }
    return respt;
  }

  async evaluationReefer(row:IContainerizedLoad | null, value:boolean ): Promise<boolean> {
    let respt = false;
    if (!value){
      return true;
    }
    if(row){
      if(!row.isReefer){
        //no se exige carta de temperatura
        respt = true;
      }else{
        //se exige carta de temperatura
          if (row.bookingNbr){
            const validationReefer = await firstValueFrom(this.utilService.getValidationReefer());
            if (validationReefer){
              const validationPlanilla = await firstValueFrom(this.utilService.getValidationPlanilla(this.base64EncryptionUtilService.encrypt((row.bookingNbr)), row.unitNbr));
              if (validationPlanilla && Array.isArray(validationPlanilla) && validationPlanilla.length > 0){
                validationPlanilla.forEach((element: any) => {
                  if (element.name && element.name === "T_".concat(row.unitNbr).concat(".pdf")){
                    respt = true;
                  }
                }
                );
              }
            }else{
              respt = true;
            }
            
          }else{
            respt = true;
          }
        }
      }
    return respt;
  }

  async evaluationHazard(row:IContainerizedLoad | null, value:boolean): Promise<boolean> {
    let respt = false;
    if (!value){
      return true;
    }
    if(row){
      if(!row.isHazard){
        //no se exige carta de temperatura
        respt = true;
      }else{
        //se exige carta de temperatura
          if (row.bookingNbr){
            
            const validationSecurity = await firstValueFrom(this.utilService.getValidationSecurity());
            if (validationSecurity){
              const validationPlanilla = await firstValueFrom(this.utilService.getValidationPlanilla(this.base64EncryptionUtilService.encrypt((row.bookingNbr)), row.unitNbr));
              if (validationPlanilla && Array.isArray(validationPlanilla) && validationPlanilla.length > 0){
                validationPlanilla.forEach((element: any) => {
                  if (element.name && element.name === "S_".concat(row.unitNbr).concat(".pdf")){
                    respt = true;
                  }
                }
                );
              }
            }else{
              respt = true;
            }
          }else{
            respt = true;
          }
        }
      }
    return respt;
  }

  async evaluationAddSubstractContainer(size:number, category: string, operation: string, id:string, pinOrBooking:string | null = null): Promise<boolean>{
    
    let totalIncome = 0;
    let totalWithdrawal = 0;
    let response = false;
    //obtener cantidad total de ingreso actual
    this.storageService.getContainersSelected().forEach((element) => {
      if (element.type === "income"){
        totalIncome += element.size;
      }
    });

    //obtener cantidad total de retiro actual
    this.storageService.getContainersSelected().forEach((element) => {
      if (element.type === "withdrawal"){
        totalWithdrawal += element.size;
      }
    });

    let newTotalIncome = 0;
    let newTotalWithdrawal = 0;
    
   
    if (this.containersEdit.length > 0){
      const valueExistWithdrawal = this.containersEdit.filter(item => item.transation === 'IMPORT').reduce((acc, item) => acc + item.size, 0);
      
      const valueExistIncome = this.containersEdit.filter(item => item.transation === 'EXPORT').reduce((acc, item) => acc + item.size, 0);
      
      totalIncome += valueExistIncome;
      totalWithdrawal += valueExistWithdrawal;
    }

    if (category === 'income'){
      if (operation === 'add'){
        newTotalIncome = totalIncome + size;
      }
    }
    if (category === 'withdrawal'){
      if (operation === 'add'){
        newTotalWithdrawal = totalWithdrawal + size;
      }
    }
    
    if (category === 'income' && operation === 'add'){
      if (newTotalIncome <= 40){
        if (operation === 'add'){
          response = true;
          this.storageService.addContainerSelected(id, size,category, pinOrBooking);
        }
      }else{
        const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym49: modules.contanerized.load.appointment.cc.limit.income`;
        this.showMessage(message, "error");
      }
    }
    if (category === 'withdrawal' && operation === 'add'){
      if (newTotalWithdrawal <= 40){
        if (operation === 'add'){
          response = true;
          this.storageService.addContainerSelected(id, size,category, pinOrBooking);
        }
      }else{
        const message = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym43: modules.contanerized.load.appointment.cc.limit.withdrawal`;
        this.showMessage(message, "error");
      } 
    }
    
    if (operation === 'substract'){
      response = true;
      const newContainersSelected =  this.storageService.getContainersSelected().filter((element) => element.id !== id);
      this.storageService.setContainersSelected(newContainersSelected);
    }
    
    return response;
  }

  async evaluationSiteAppointment(row: IContainerizedLoad): Promise<boolean>{
    
    if (this.storageService.getContainersSelected().length === 0){
      this.storageService.clearSiteAppointment();
    }
    const listSiteAppointment = this.storageService.getSiteAppointment();
    if(row.siteAppointment){
      if (listSiteAppointment.length > 0 && !listSiteAppointment.includes(row.siteAppointment)){
        return false
      }
      this.storageService.addSiteAppointment(row.siteAppointment);
      
      return true;
    }
    return false;
    
  }



  showMessage(message: string, type:string): void {
    if (type === "error"){
      this.matSnackBar.open(
        message,
        "",
        {
          verticalPosition: "top",
          panelClass: ["error-snackbar"],
          duration: 5000
        }
      );
    }
  }


  private getDataBookingASC(bookingASC: IContainerizedLoad[]){
    if(bookingASC.length > 0){
      if(bookingASC[0].nbr){
        this.dataBookingASC.booking = bookingASC[0].nbr;
        this.dataBookingASC.line = bookingASC[0].line;
        this.dataBookingASC.carrierVisitName = bookingASC[0].carrierVisitName;
        this.dataBookingASC.inVoyNbr = bookingASC[0].inVoyNbr;
        if(bookingASC[0].shipperId){
          this.dataBookingASC.shipper = `${bookingASC[0].shipperId} -- ${bookingASC[0].shipperName}`;}
        else{
          this.dataBookingASC.shipper = "";
        }

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
      const companyUser = this.userInfo.empresa?.id;
      
      //agregar a newBookingASC si pertene a la empresa que esta logueada, si no pertenece forbidden se pone en true, si no en false
      if (Array.isArray(this.newBookingASC) && companyUser) {
        this.newBookingASC = this.newBookingASC.map((element) => ({
          ...element,
          forbidden: element.truckingCompany !== companyUser ? true : false
        }));
        
      } 
       
     
      this.dataSourceISO = new MatTableDataSource(accumulatedDataSource);
      this.dataSourceBooking = new MatTableDataSource(this.newBookingASC);
      

    }
    
  }
  

  public getMessageBooking(equipmentType: string): string {
    const element = this.bookingASC.find((element) => element.equipmentType === equipmentType);
    let quantity = 0;
    let quantityAvailable = 0;
    this.bookingASC.forEach((element) => {
      if (element.equipmentType === equipmentType){
        if (element.quantity && element.availableQuantity){
          quantity += parseInt(element.quantity);
          quantityAvailable += parseInt(element.availableQuantity);
        }
      }
    });
    if (!element){
      return "";
    }
    let message = "";
    if (element.quantity && quantity > 0){
      const messageQ = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym22: modules.containerized.load.associate.containerbooking.booking.QUANTITY_LABEL`;
      const messageWithQuantity = `${messageQ} ${quantity}`;
      message = message.concat(' ', messageWithQuantity);
    }
    if (element.equipmentType && quantityAvailable > 0){
      const messageA = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym23: modules.containerized.load.associate.containerbooking.booking.QUANTITY_AVAILABLE`;
      const messageWithQuantityAvailable = `${messageA} ${quantityAvailable}`;
      message = message.concat(' ', messageWithQuantityAvailable);
    }
    if (element.isOog == 'Y'){
      const messageO = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym24: modules.containerized.load.associate.containerbooking.booking.OOG_LABEL`;
      const messageWithO = `${messageO} ${element.isOog}`;
      message = message.concat(' ', messageWithO);
    }
    if (element.ventRequiredUnit){
      const messageR = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym25: modules.containerized.load.associate.containerbooking.booking.VENT_REQUIRED_UNIT_LABEL ${element.ventRequiredUnit}`;
      message = message.concat(' ', messageR);
    }
    if (element.tempReqdC){
      const messageT = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym26:modules.containerized.load.associate.containerbooking.booking.REQUIRED_TEMP_LABEL`;
      const messageWithT = `${messageT} ${element.tempReqdC}`;
      message = message.concat(' ', messageWithT);
    }
    if (element.ventRequiredValue){
      const messageV = $localize `:@@56a1f6e921cde24fb4931a712c7a91c3e9d0831a112jE5b2acc6d2c38b6749Ym27: modules.containerized.load.associate.containerbooking.booking.VENT_REQUIRED_LABEL ${element.ventRequiredValue}`;
      const messageWithV = `${messageV}  ${element.ventRequiredValue}`;
      message = message.concat(' ', messageWithV);
    }

    return message;
  }

  evaluationCheckBoxesCC(pinOrBookingDeleted: string){

    let containersSelected = this.storageService.getContainersSelected();
   
    containersSelected = containersSelected.filter((element) => element.pinOrBooking !== pinOrBookingDeleted);
    if (containersSelected && containersSelected.length > 0){
      this.storageService.setContainersSelected(containersSelected);
      
      this.checkboxStates = {};
      containersSelected.forEach((row) => {
        this.checkboxStates = { ...this.checkboxStates, [row.id]: true };
      });

      this.cdr.detectChanges(); 
    
    }
    
  }

  async desassociateContainer(unitNbr:string, booking: string){
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

  public hasPermission(privilegio: string): boolean {
    const userPrivileges: string[] = this.userInfo.privileges.map(value => value.privilegeId);
    let hasPermission: boolean = false;
    if(this.userInfo && this.userInfo.privileges) {
      if(userPrivileges.includes(privilegio)) {
        hasPermission = true;
      }
    }
    return hasPermission;
  }
 

  ngOnDestroy(): void {
    if (this.storageSubscription) {
      this.storageSubscription.unsubscribe();
    }
    this.infoPin = [];
    this.destroy$.next();
    this.destroy$.complete();

  }


  


}
