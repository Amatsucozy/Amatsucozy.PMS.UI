import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {AuthenticatedCallbackComponent} from "./pages/authenticated-callback/authenticated-callback.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HttpClientModule} from "@angular/common/http";
import {AuthConfigModule} from './auth/auth-config.module';

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
    AuthConfigModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
