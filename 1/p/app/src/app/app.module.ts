import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CookieInterceptor } from "./core/interceptors/cookie.interceptor";

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EffectsModule } from '@ngrx/effects';
import { BUSINESS_PORTAL_EFFECTS, BUSINESS_PORTAL_REDUCERS } from './state/app.state';
import { PermissionsDirective } from './shared/directives/permissions.directive';
import { BnNgIdleService } from 'bn-ng-idle';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuSidebarComponent,
    HomeComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(BUSINESS_PORTAL_REDUCERS),
    EffectsModule.forRoot(BUSINESS_PORTAL_EFFECTS),
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
  ],
 
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CookieInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    BnNgIdleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
