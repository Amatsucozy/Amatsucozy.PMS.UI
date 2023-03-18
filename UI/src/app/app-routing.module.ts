import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "@auth0/auth0-angular";
import {
  AuthenticatedCallbackComponent
} from "./shared/intermediaries/authenticated-callback/authenticated-callback.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'challenge',
    pathMatch: 'full'
  },
  {
    path: 'anonymous-views',
    loadChildren: () => import('./anonymous-views/anonymous-views.module').then(m => m.AnonymousViewsModule)
  },
  {
    path: 'secured-views',
    loadChildren: () => import('./secured-views/secured-views.module').then(m => m.SecuredViewsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'accounts',
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  },
  {
    path: 'challenge',
    component: AuthenticatedCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
