import { Injectable } from '@angular/core';
import { UtilService } from './util.service';
import { AESEncryptionUtilService } from 'src/app/core/auth/services/AESEncryptionUtil.service';
import { INotificationsPortal } from 'src/app/core/interfaces/notifications-portal.interface';
import { Store } from '@ngrx/store';
import { setNotificationsPortal } from 'src/app/state/shared/shared.actions';
import { sharedFeatureSelector } from 'src/app/state/shared/shared.selectors';
import { Subject, takeUntil } from 'rxjs';
import { ISharedStore } from 'src/app/core/interfaces/shared.interface';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsDialogComponent } from '../components/notifications-dialog/notifications-dialog.component';
import { distinctUntilChanged, take } from 'rxjs/operators';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';



@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  public destroy$: Subject<void> = new Subject<void>();
  public isDialogOpen: boolean = false;
  public userInfo!: IAPIGatewayStore;

  constructor(private utilServices: UtilService, private readonly aesEncryptionUtilService: AESEncryptionUtilService,
    private readonly store: Store, private dialog: MatDialog
  ) { }


  public makeListNotificationsString(list: any): void{
    if (Array.isArray(list) && list.length > 0) {
      let privilesString = list.map(item => item.privilegeId).join(',');
      if (privilesString.length > 0){
        const newElement = 'code_01';
        privilesString += `,${newElement}`;
        this.utilServices.getNotificationsPortal(privilesString).subscribe({
          next: (response) => {
            const decryptedValue = this.aesEncryptionUtilService.decrypt(response);
            if (decryptedValue){
              const data: INotificationsPortal[] = JSON.parse(decryptedValue);
              const formattedData = data.map(item  => {
                return {
                  ...item, 
                  message: this.formattedText(item.message) 
                };
              });
              if (formattedData.length > 0){
                this.store.dispatch(setNotificationsPortal({response: formattedData}));
              }
            }
          },
          error: (error) => {
            console.error('error get notifications:', error);
          }
        });
        
       
      }
    }

  }

  public formattedText(message: string): string{
    const formattedText = message
    .replace(/\*(.*?)\*/g, '<strong>$1</strong>')  // Negrita
    .replace(/#k#(.*?)#k#/g, '<i>$1</i>')      // Cursiva
    .replace(/--(.*?)--/g, '<del>$1</del>')        // Tachado
    .replace(/#h1#(.*?)#h1#/g, '<h1>$1</h1>')      // Títulos H1
    .replace(/#h2#(.*?)#h2#/g, '<h2>$1</h2>')      // Títulos H2
    .replace(/#h3#(.*?)#h3#/g, '<h3>$1</h3>')      // Títulos H3
    .replace(/- (.*?)(\n|$)/g, '<li>$1</li>')      // Listas
    .replace(/\\n/g, '<br>')                       // Salto de línea       
    return formattedText;
  }


  public getNotificationByPrivileges(privilege: string, width: string = '750px', position?: {top: string, right: string}) {
   
    
    this.store.select(sharedFeatureSelector).pipe(
      takeUntil(this.destroy$),
      take(1)
    ).subscribe({
      next: (result: ISharedStore) => {
        if (result && result.notificationsPortal && result.notificationsPortal.length > 0) {
          result.notificationsPortal.forEach((item) => {
            if (privilege.includes(",")){
                const arrayPrivilege = privilege.split(",");
                
                arrayPrivilege.forEach((itemPrivilege) => {
    
                  if (item.privilegess.split(',').includes(itemPrivilege)) {
                    const startDateString = item.start_date.replace(' ', 'T');
                    const startDateObject = new Date(startDateString);
                    const endDateString = item.end_date.replace(' ', 'T');
                    const endDateObject = new Date(endDateString);
                    const currentDate = new Date();
                    if (startDateObject <= currentDate && endDateObject >= currentDate) {
                      if (item.type_modal === "1" && !this.isDialogOpen) {
                        this.isDialogOpen = true;
                        this.openDialog(item.message);
                      }
                    }
                  }
                });
            }else{
              if (item.privilegess.split(',').includes(privilege)) {
                const startDateString = item.start_date.replace(' ', 'T');
                const startDateObject = new Date(startDateString);
                const endDateString = item.end_date.replace(' ', 'T');
                const endDateObject = new Date(endDateString);
                const currentDate = new Date();
                if (startDateObject <= currentDate && endDateObject >= currentDate) {
                  if (item.type_modal === "1" && !this.isDialogOpen) {
                    this.isDialogOpen = true;
                    if (position)
                      { this.openDialog(item.message, width, true, position); }
                    else {
                      this.openDialog(item.message);
                    }
                    
                  }
                }
              }
            }
            
          });
        }
      }
    });
  }


  public getModal(message: string){

  }

  public openDialog(message: string, width: string = '750px', includePosition: boolean = false, position?: {top: string, right: string} ): void {
    const dialogRef = this.dialog.open(NotificationsDialogComponent, {
      width: width,
      data: { 
          message: message
       },
      ...(includePosition && {
        position : position
      })
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpen = false;
      
    });
  }

  
}
