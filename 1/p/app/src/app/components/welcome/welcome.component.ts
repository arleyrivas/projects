import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public user: Observable<IAPIGatewayStore> = new Observable<IAPIGatewayStore>();

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.user = this.store.select(apiGatewayFeatureSelector);
  }
}
