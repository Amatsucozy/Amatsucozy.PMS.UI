import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AuthenticatedCallbackComponent } from './intermediaries/authenticated-callback/authenticated-callback.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    AuthenticatedCallbackComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  providers: []
})
export class SharedModule {
}
