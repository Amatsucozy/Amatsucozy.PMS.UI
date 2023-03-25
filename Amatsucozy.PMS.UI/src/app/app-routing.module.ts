import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedCallbackComponent} from "./pages/authenticated-callback/authenticated-callback.component";
import {AuthConfigModule} from "./auth/auth-config.module";
import {AutoLoginPartialRoutesGuard} from "angular-auth-oidc-client";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'challenge'
  },
  {
    path: 'anonymous-views',
    loadChildren: () => import('./pages/anonymous-views/anonymous-views.module').then(m => m.AnonymousViewsModule)
  },
  {
    path: 'secured-views',
    loadChildren: () => import('./pages/secured-views/secured-views.module').then(m => m.SecuredViewsModule),
    canActivate: [AutoLoginPartialRoutesGuard]
  },
  {
    path: 'accounts',
    loadChildren: () => import('./pages/accounts/accounts.module').then(m => m.AccountsModule)
  },
  {
    path: 'challenge',
    component: AuthenticatedCallbackComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
