import {NgModule} from '@angular/core';
import {AuthModule} from 'angular-auth-oidc-client';


@NgModule({
  imports: [AuthModule.forRoot({
    config: {
      authority: 'https://localhost:60000',
      redirectUrl: window.location.origin,
      postLogoutRedirectUri: window.location.origin,
      clientId: 'pms-ui',
      scope: 'openid profile ui sts accounts pms', // 'openid profile ' + your scopes
      responseType: 'code',
      silentRenew: true,
      silentRenewUrl: window.location.origin + '/silent-renew.html',
      renewTimeBeforeTokenExpiresInSeconds: 10,
    }
  })],
  exports: [AuthModule],
})
export class AuthConfigModule {
}
