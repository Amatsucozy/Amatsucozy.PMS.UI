import {Component, OnInit} from '@angular/core';
import {AccountsService} from "../../services/accounts.service";
import {OidcSecurityService} from "angular-auth-oidc-client";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-secured-views',
  templateUrl: './secured-views.component.html',
  styleUrls: ['./secured-views.component.scss']
})
export class SecuredViewsComponent implements OnInit {
  readonly selectedScopes: SelectionModel<string>;
  availableScopes: string[];
  availableEndpoints: string[];
  token: string;
  tokenLifetime: number;
  selectedEndpoint: string;
  apiResponse: string;

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private accountsService: AccountsService,
    private httpClient: HttpClient) {
    this.token = '';
    this.tokenLifetime = 60;
    this.availableScopes = [];
    this.availableEndpoints = [
      'https://localhost:60000/public/api/introspection/ping'
    ];
    this.selectedScopes = new SelectionModel<string>(true, []);
    this.selectedEndpoint = 'https://localhost:60000/public/api/introspection/ping';
    this.apiResponse = '';
  }

  ngOnInit(): void {
    this.accountsService.getPossibleScopes()
      .subscribe({
        next: v => {
          this.availableScopes = v;
        }
      });
  }

  logout() {
    this.oidcSecurityService.logoffAndRevokeTokens().subscribe();
  }

  toggleScope(scope: string) {
    this.selectedScopes.toggle(scope);
  }

  requestScopes() {
    this.accountsService.requestPersonalAccessToken(this.selectedScopes.selected, this.tokenLifetime)
      .subscribe({
        next: t => {
          this.token = t;
        }
      });
  }

  callApi() {
    this.httpClient.get(this.selectedEndpoint, {
      responseType: 'text',
      headers: {
        'Authorization': `Introspection ${this.token}`
      }
    })
      .subscribe({
        next: v => {
          this.apiResponse = v;
        },
        error: e => {
          this.apiResponse = e.message;
        }
      });
  }
}
