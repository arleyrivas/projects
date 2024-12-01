import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { mergeMap, Observable, of } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {

  private user!: IUser;

  constructor(private readonly store: Store) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.store.select(apiGatewayFeatureSelector).pipe(
      mergeMap(user => of(this.check(route, user)))
    );
  }

  public check(route: ActivatedRouteSnapshot, user: IAPIGatewayStore): boolean {
    let hasPermission = false;
    const userPrivileges = user.privileges.map(value => value.privilegeId);
    const privileges = route.data['permissions'] as string[];

    for(const permission of privileges) {
      if(userPrivileges.includes(permission)) {
        hasPermission = true;
        break;
      }
    }

    return hasPermission;
  }
}
