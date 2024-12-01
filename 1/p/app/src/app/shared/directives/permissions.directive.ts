import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Directive({
  selector: '[permissions]'
})
export class PermissionsDirective {

  public user!: IAPIGatewayStore;
  public privileges: string[] = [];

  constructor(
    private readonly store: Store,
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef
  ) { }

  @Input()
  set permissions(value: string[]) {
    this.privileges = value;

    this.viewContainerRef.clear();

    this.store.select(apiGatewayFeatureSelector).subscribe({
      next: user => {
        this.user = user;
        this.check();
      },
      error: error => console.error(error)
    });
  }

  public check(): void {
    this.viewContainerRef.clear();

    if(this.hasPermission()) this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  public hasPermission(): boolean {
    const userPrivileges: string[] = this.user.privileges.map(value => value.privilegeId);
    let hasPermission: boolean = false;

    if(this.user && this.user.privileges) {
      for(const permission of this.privileges) {

        if(userPrivileges.includes(permission)) {
          hasPermission = true;
          break;
        }
      }
    }

    return hasPermission;
  }
}
