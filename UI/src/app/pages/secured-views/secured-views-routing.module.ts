import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SecuredViewsComponent} from "./secured-views.component";

const routes: Routes = [
  {
    path: '',
    component: SecuredViewsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'fixtures-management'
      },
      {
        path: 'fixtures-management',
        loadChildren: () => import('./fixtures-management/fixtures-management.module').then(m => m.FixturesManagementModule)
      },
      {
        path: 'financial-management',
        loadChildren: () => import('./financial-management/financial-management.module').then(m => m.FinancialManagementModule)
      },
      {
        path: 'fixtures-management',
        loadChildren: () => import('./players-management/players-management.module').then(m => m.PlayersManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuredViewsRoutingModule {
}
