import {NgModule} from '@angular/core';
import {AuthModule} from 'angular-auth-oidc-client';
import {environment} from "../../environments/environment";
import {Constants} from "../constants/constants";

@NgModule({
  imports: [AuthModule.forRoot({
    config: {
      authority: 'https://localhost:60000',
      redirectUrl: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      clientId: 'pms-ui',
      scope: 'openid profile sts accounts pms', // 'openid profile ' + your scopes
      responseType: 'code',
      secureRoutes: [
        `${environment.apis.sts}${Constants.routeTypes.secured}/`,
        `${environment.apis.accounts}${Constants.routeTypes.secured}/`,
        `${environment.apis.pms}${Constants.routeTypes.secured}/`
      ],
      silentRenew: true,
      silentRenewUrl: window.location.origin + '/silent-renew.html',
      renewTimeBeforeTokenExpiresInSeconds: 10,
    }
  })],
  exports: [AuthModule],
})
export class AuthConfigModule {
}
