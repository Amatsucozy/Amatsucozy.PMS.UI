import {Component} from '@angular/core';
import {AccountsService} from "../../services/accounts.service";
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-secured-views',
  templateUrl: './secured-views.component.html',
  styleUrls: ['./secured-views.component.scss']
})
export class SecuredViewsComponent {
  constructor(private oidcSecurityService: OidcSecurityService, private accountsService: AccountsService) {
    this.accountsService.getAccount().subscribe();
    this.accountsService.getAccountPublic().subscribe();
  }

  logout() {
    this.oidcSecurityService.logoffAndRevokeTokens().subscribe();
  }
}
