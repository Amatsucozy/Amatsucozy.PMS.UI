import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {AuthenticatedCallbackComponent} from "./pages/authenticated-callback/authenticated-callback.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "angular-auth-oidc-client";
import {AuthConfigModule} from "./auth/auth-config.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedCallbackComponent
  ],
  imports: [
    AuthConfigModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMomentDateModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
