import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllConsignees } from './state/shared/shared.actions';
import { sharedFeatureSelector } from './state/shared/shared.selectors';
import { ISharedStore } from './core/interfaces/shared.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { getPayuGateway } from './state/payu/payu.actions';
import { payuFeatureSelector } from './state/payu/payu.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sidenavOpen = false;
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry
      .addSvgIcon("agent_searcher", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/SVG/agencia.svg"))
      .addSvgIcon("customer_searcher", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/SVG/usuarios.svg"))
      .addSvgIcon("truck_searcher", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/SVG/transporte verde.svg"))
      .addSvgIcon("container_searcher", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/SVG/carga contenerizada.svg"))
  }

  ngOnInit(): void {}

  

  public toggleSidenav(): void {
    this.sidenavOpen = !this.sidenavOpen;
  }
}
