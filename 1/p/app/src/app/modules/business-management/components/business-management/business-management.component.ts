import { Component, TemplateRef, Type} from '@angular/core';
import { Store } from '@ngrx/store';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { privileges } from "../../../../core/privileges.enum";

@Component({
  selector: 'app-business-management',
  templateUrl: './business-management.component.html',
  styleUrls: ['./business-management.component.css']
})

export class BusinessManagementComponent {
  public userInfo!: IAPIGatewayStore;
  public privileges: typeof privileges = privileges;


  isSecundTab: boolean = false;
  currentComponent!: Type<any>;
  secondaryContentTemplate!: TemplateRef<any>;
  constructor(
    private readonly store: Store
  ){}


  onComponentChange(component: Type<any>) {
    this.currentComponent = component;
  }
  
  onTabChange(event: any) {
    this.isSecundTab = (event.index == 1) ? true: false;
  }

  onSecondaryContent(template: TemplateRef<any>): void {
    this.secondaryContentTemplate = template;
  }
 

}



