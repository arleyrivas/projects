import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsGuard implements CanActivate {


  constructor(private notificationsPortalService: NotificationsService) {}


  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const componentName = route.data['componentName'];
      const privilegeName = route.data['privilegeName'];
      this.notificationsPortalService.getNotificationByPrivileges(privilegeName);
    return true;
  }
  
}
