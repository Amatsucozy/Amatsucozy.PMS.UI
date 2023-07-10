import {NgModule} from '@angular/core';
import {AbstractSecurityStorage, AuthModule} from 'angular-auth-oidc-client';
import {environment} from "../../environments/environment";
import {Constants} from "../constants/constants";
import {AuthLocalStorageService} from "./auth-local-storage.service";

@NgModule({
  imports: [AuthModule.forRoot({
    config: {
      authority: environment.apis.sts,
      redirectUrl: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      clientId: 'ui.client',
      scope: 'openid profile auth badges', // 'openid profile ' + your scopes
      responseType: 'code',
      secureRoutes: [
        `${environment.apis.sts}/${Constants.routeTypes.secured}/`,
        `${environment.apis.accounts}/${Constants.routeTypes.secured}/`,
        `${environment.apis.pms}/${Constants.routeTypes.secured}/`
      ],
      silentRenew: true,
      silentRenewUrl: window.location.origin + '/silent-renew.html',
      renewTimeBeforeTokenExpiresInSeconds: 10
    }
  })],
  exports: [AuthModule],
  providers: [
    {
      provide: AbstractSecurityStorage,
      useClass: AuthLocalStorageService
    }
  ]
})
export class AuthConfigModule {
}
