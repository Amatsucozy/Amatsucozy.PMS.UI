import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecuredViewsComponent} from './secured-views.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SecuredViewsRoutingModule} from "./secured-views-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {AccountsService} from "../../services/accounts.service";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    SecuredViewsComponent
  ],
  imports: [
    SecuredViewsRoutingModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ClipboardModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [
    AccountsService
  ]
})
export class SecuredViewsModule {
}
