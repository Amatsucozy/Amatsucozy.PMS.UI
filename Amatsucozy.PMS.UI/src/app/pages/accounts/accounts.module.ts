import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountsComponent} from './accounts.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MatCardModule} from "@angular/material/card";
import {RouterOutlet} from "@angular/router";
import {AccountsRoutingModule} from "./accounts-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AccountsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AccountsRoutingModule,
    CommonModule,
    MatCardModule,
    RouterOutlet,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AccountsModule {
}
