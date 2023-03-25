import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecuredViewsComponent} from './secured-views.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SecuredViewsRoutingModule} from "./secured-views-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {AccountsService} from "../../services/accounts.service";


@NgModule({
  declarations: [
    SecuredViewsComponent
  ],
  imports: [
    SecuredViewsRoutingModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    AccountsService
  ]
})
export class SecuredViewsModule {
}
