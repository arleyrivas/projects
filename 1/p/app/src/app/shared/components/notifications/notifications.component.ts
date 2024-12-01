import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { NotificationsVentanaComponent } from '../notifications-ventana/notifications-ventana.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  sidenavOpen = false;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  dialogOpen = false;
  
  constructor(private dialog: MatDialog){

  }

  public toggleSidenav(): void {
    //console.log("dfadfaf");
    this.sidenavOpen = !this.sidenavOpen;
    this.openDialog();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NotificationsVentanaComponent, {
      width: '750px',
      data: { 
        
       },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      //console.log('El diálogo fue cerrado');
     
    });
  }
 
}
