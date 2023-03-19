import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnonymousViewsComponent} from './anonymous-views.component';
import {FixturesComponent} from './fixtures/fixtures.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterOutlet} from "@angular/router";
import {AnonymousViewsRoutingModule} from "./anonymous-views-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    AnonymousViewsComponent,
    FixturesComponent
  ],
  imports: [
    AnonymousViewsRoutingModule,
    CommonModule,
    MatToolbarModule,
    RouterOutlet,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class AnonymousViewsModule {
}
