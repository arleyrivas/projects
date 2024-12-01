import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription, distinctUntilChanged, filter, map, of, take, takeUntil } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IContainerizedLoadStore } from 'src/app/core/interfaces/containerized-load-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { containerizedLoadFeatureSelector } from 'src/app/state/containerized-load/containerized-load.selectors';
import { IDocumentRouteData } from 'src/app/core/interfaces/document-type-file-route.interfaces';
import { INbrAgentAndConsigeeDTO } from 'src/app/core/dto/nbr-agent-and-consigee.dto';
import { getContainerizedLoad, getUpdateAgentAndConsigneeInBl } from 'src/app/state/containerized-load/containerized-load.actions';
import { UploadFileComponent } from 'src/app/shared/components/upload-file/upload-file.component';
// import { cleanBillingData as CCcleanBillingData} from 'src/app/state/containerized-load/containerized-load.actions';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { Alert, showAlertTime } from 'src/app/shared/utils/alert-utils';
import { StorageserviceService } from 'src/app/shared/services/storageservice.service';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})
export class UploadDocumentsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('hijo') uploadFileComponent: UploadFileComponent | undefined;
  public destroy$: Subject<void> = new Subject<void>();
  public currentUser!: IAPIGatewayStore;
  alert:Alert = {showAlert:false,message:"",clase:""};

  public routeData: IDocumentRouteData = { documentation_module : '' };
  public routeDataPreview: IDocumentRouteData = { documentation_module : '' };
  public nbr: string = '';

  public consignee: string = '';
  public nitConsignee: string = '';
  public consigneeToSave: boolean = false;
  
  public blHaveConsignee: boolean = false;

  public agent: string = '';
  public nitAgent: string = '';
  public agentToSave: boolean = false;
  
  public blHaveAgent: boolean = false;

  public sizeFilesLoaded: number = 0;
  public finishOperationSon : boolean = false;
  private storageSubscription!: Subscription;
  public documentationContainer: boolean = false;
  public title = "Documentación";
  
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store,
    private readonly router: Router,
    private base64EncryptionUtilService: Base64EncryptionUtilService,
    private storageService:StorageserviceService
  ) { }

  public routerSubscription: Subscription = new Subscription();

 
  ngAfterViewInit(): void {
    if(this.uploadFileComponent){
      this.uploadFileComponent.arraySize$
      .pipe(takeUntil(this.destroy$))
      .subscribe(size => {
        this.sizeFilesLoaded = size;
      });
      this.uploadFileComponent.finish$
      .pipe(takeUntil(this.destroy$))
      .subscribe(finish => {
        this.finishOperationSon = finish;
        
        this.navegatePrincipalScreen();
      })
    }
  }

  ngOnInit(): void {

    this.store
      .select(apiGatewayFeatureSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (result: IAPIGatewayStore) => {
          this.currentUser = result;
        },
        error: (error) => console.log(error)
      });


    this.routerSubscription = this.activatedRoute.data
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (data) => {
        this.routeData = data as IDocumentRouteData;
        this.routeDataPreview = data as IDocumentRouteData;
      },
    });

    this.store
      .select(containerizedLoadFeatureSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (result: IContainerizedLoadStore) => {
          this.nbr = result.result[0]?.blNumber;

          this.consignee = (result.result[0]?.consigneeName != null)  ? result.result[0].consigneeName : '' ;
          this.nitConsignee = (result.result[0]?.consigneeId != null) ?  result.result[0].consigneeId : '';
          this.blHaveConsignee = (result.result[0]?.consigneeName != null);

          this.agent = (result.result[0]?.loadAgentName != null)  ? result.result[0].loadAgentName : '' ;
          this.nitAgent = (result.result[0]?.loadAgentId != null) ?  result.result[0].loadAgentId : '';
          this.blHaveAgent = (result.result[0]?.loadAgentId != null);

          if(result.setDocumentacionContainer){
            this.documentationContainer = true;
            this.routeData = { documentation_module : 'EXPO_CC' };
           
          }else{
            this.documentationContainer = false;
            this.routeData = this.routeDataPreview;
            this.title = "Documentación";
          }
         
        },
        error: (error) => console.error(error),
      });
     
      this.storageSubscription = this.storageService.getStorageChanges().subscribe((action: any) => {
      
        
        if (action.action === 'setNavigateToContainerDocumentation'){
          this.documentationContainer = true;
      
        }
        
       
      });

      this.store.select(sharedFeatureSelector).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (result: ISharedStore) => {
          if (result){
            if (result.bookingID){
              this.nbr = result.bookingID[0].nbr || '';
              this.title = "Domentación para ".concat(this.nbr);
            }
          }}} );
          
  }


  public searchCustomer(value: string) : void {
    this.nitConsignee = value.split('/')[1] ? value.split('/')[0] : '';
    this.consignee = value.split('/')[1] ? value.split('/')[1] : '';
    this.consigneeToSave = true;
  }
   

  public searchAgent(value: string) : void {
    this.nitAgent = value.split('/')[1]? value.split('/')[0]: '';
    this.agent = value.split('/')[1] ? value.split('/')[1] : '';
    this.agentToSave = true;
  }
  
  
public consigneeValid():Observable<boolean>  {

    if(this.documentationContainer){
      return of(true).pipe(take(1));
    }

    if((this.sizeFilesLoaded == 0)){
      return of(false).pipe(take(1));
    }

    if(!(this.blHaveConsignee) && (this.nitConsignee == '')){
      showAlertTime(this.alert, 
        $localize`:@@9550731151441BAE3AAAB1A8048E57E006181F29F57349282CFE79F000000003: module.documental.upload.file.notConsignee.message`,
        'alerta');
        
      return of(false).pipe(take(1));
    }

    if( this.blHaveConsignee && (this.nitAgent == '')){
      return of(true).pipe(take(1));
    }

    if( ( !this.blHaveConsignee || !this.blHaveAgent ) 
      && ( (this.nitConsignee != '') || (this.nitAgent != '') )
      && ( this.consigneeToSave ||  this.agentToSave ) ){

        let body: INbrAgentAndConsigeeDTO = {
          agentId: null,
          blNbr: this.nbr,
          loadAgentId: !this.blHaveAgent ? ( this.nitAgent != '' ? this.nitAgent : null ) : null,
          nitConsignee: !this.blHaveConsignee ? ( this.nitConsignee != '' ? this.nitConsignee : null ) : null
        };

        this.store.dispatch(getUpdateAgentAndConsigneeInBl({ body }));

        return  this.store.select(containerizedLoadFeatureSelector)
        .pipe(
          filter(result => result.loadedCustomer === 'true'), 
          map(() => true),
          take(1)
        )

      }
  
    if(this.sizeFilesLoaded > 0 && this.blHaveConsignee){
      return of(true).pipe(take(1));
    }
    
    return of(false).pipe(take(1));
  
}


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  private navegatePrincipalScreen(): void {
     
    if(this.finishOperationSon){
      this.router.navigate(['/', 'carga-contenerizada']);
      this.store.dispatch(getContainerizedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.nbr) }));
    }
  }

}
