import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthHttpInterceptor, AuthModule} from '@auth0/auth0-angular';
import {environment} from "../environments/environment";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {AuthenticatedCallbackComponent} from "./pages/authenticated-callback/authenticated-callback.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedCallbackComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMomentDateModule,
    MatProgressSpinnerModule,
    AuthModule.forRoot({
      domain: environment.auth0Domain,
      clientId: environment.auth0ClientId,
      authorizationParams: {
        audience: environment.apis.accounts,
        redirect_uri: environment.auth0RedirectUri,
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.apis.accounts}*`,
            tokenOptions: {
              authorizationParams: {
                audience: environment.apis.accounts,
                scope: ''
              }
            }
          }
        ]
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
