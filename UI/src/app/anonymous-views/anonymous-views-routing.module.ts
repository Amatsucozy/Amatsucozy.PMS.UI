import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AnonymousViewsComponent} from "./anonymous-views.component";
import {FixturesComponent} from "./fixtures/fixtures.component";

const routes: Routes = [
  {
    path: '',
    component: AnonymousViewsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'fixtures'
      },
      {
        path: 'fixtures',
        component: FixturesComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnonymousViewsRoutingModule {
}
