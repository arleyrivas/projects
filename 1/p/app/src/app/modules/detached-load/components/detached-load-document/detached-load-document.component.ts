import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription, distinctUntilChanged, filter, map, of, take, takeUntil } from 'rxjs';
import { Base64EncryptionUtilService } from 'src/app/core/auth/services/base64-encryption-util.service';
import { INbrAgentAndConsigeeDTO } from 'src/app/core/dto/nbr-agent-and-consigee.dto';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IDetachedLoadStore } from 'src/app/core/interfaces/detached-load-store.interface';
import { IDocumentRouteData } from 'src/app/core/interfaces/document-type-file-route.interfaces';
import { UploadFileComponent } from 'src/app/shared/components/upload-file/upload-file.component';
import { Alert, showAlertTime } from 'src/app/shared/utils/alert-utils';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { getDetachedLoad, getUpdateAgentAndConsigneeInHBl } from 'src/app/state/detached-load/detached-load.actions';
import { detachedLoadFeatureSelector } from 'src/app/state/detached-load/detached-load.selectors';

@Component({
  selector: 'app-detached-load-document',
  templateUrl: './detached-load-document.component.html',
  styleUrls: ['./detached-load-document.component.css']
})
export class DetachedLoadDocumentComponent implements OnInit, AfterViewInit {
  @ViewChild('hijo') uploadFileComponent: UploadFileComponent | undefined;
  public destroy$: Subject<void> = new Subject<void>();
  public currentUser!: IAPIGatewayStore;
  alert:Alert = {showAlert:false,message:"",clase:""};

  public routeData: IDocumentRouteData = { documentation_module : '' };
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

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store,
    private readonly router: Router,
    private base64EncryptionUtilService: Base64EncryptionUtilService
  ){}

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
        },
      });
  
  
      this.store
        .select(detachedLoadFeatureSelector)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (result: IDetachedLoadStore) => {
            this.nbr = result.result[0]?.hbl;
  
            this.consignee = (result.result[0]?.consigneeName != null)  ? result.result[0].consigneeName : '' ;
            this.nitConsignee = (result.result[0]?.id != null) ?  result.result[0].id : '';
            this.blHaveConsignee = (result.result[0]?.consigneeName != null);
  
            this.agent = (result.result[0]?.loadAgentName != null)  ? result.result[0].loadAgentName : '' ;
            this.nitAgent = (result.result[0]?.loadAgentId != null) ?  result.result[0].loadAgentId : '';
            this.blHaveAgent = (result.result[0]?.loadAgentId != null);
          },
          error: (error) => console.error(error),
        });
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


    public consigneeValid():Observable<boolean> {

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

            this.store.dispatch(getUpdateAgentAndConsigneeInHBl({ body }));

            return  this.store.select(detachedLoadFeatureSelector)
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
        this.router.navigate(['/', 'carga-suelta']);
        this.store.dispatch(getDetachedLoad({ nbr: this.base64EncryptionUtilService.encrypt(this.nbr) }));
      }
    }
}
