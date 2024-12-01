import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { IAdministrationUser } from 'src/app/core/interfaces/administration-user.interface';
import { Store } from '@ngrx/store';
import { getCompanyUsers } from 'src/app/state/administration/administration.actions';
import { administrationFeatureSelector } from 'src/app/state/administration/administration.selector';
import { Observable } from 'rxjs';
import { IAdministrationStore } from 'src/app/core/interfaces/administration-store';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { privileges } from "../../../../core/privileges.enum";
import { apiGatewayFeatureSelector } from 'src/app/state/api-gateway/api-gateway.selectors';
import { IAPIGatewayStore } from 'src/app/core/interfaces/api-gateway-store.interface';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  public privileges: typeof privileges = privileges;

  public users!: Observable<IAdministrationStore>;
  public user!: Observable<IAPIGatewayStore>;
  public tabs: string[] = ["Acciones", "Notificaciones", "Usuarios", "Segunda Clave", "Restricción IP", "Mi Perfil"];

  public actions: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getCompanyUsers());

    this.users = this.store.select(administrationFeatureSelector);
    this.user = this.store.select(apiGatewayFeatureSelector);
  }

  public selectTab(event: MatTabChangeEvent) {
    switch(this.tabs[event.index]) {

    }
  }
}
