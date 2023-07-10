import {Component, OnInit} from '@angular/core';
import {AccountsService} from "../../services/accounts.service";
import {OidcSecurityService} from "angular-auth-oidc-client";
import {SelectionModel} from "@angular/cdk/collections";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-secured-views',
  templateUrl: './secured-views.component.html',
  styleUrls: ['./secured-views.component.scss']
})
export class SecuredViewsComponent implements OnInit {
  readonly selectedScopes: SelectionModel<string>;
  availableScopes: string[];
  availableEndpoints: string[];
  availableSchemes: string[];
  token: string;
  tokenLifetime: number;
  selectedEndpoint: string;
  selectedScheme: string;
  apiResponse: string;

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private accountsService: AccountsService,
    private httpClient: HttpClient) {
    this.token = '';
    this.tokenLifetime = 60;
    this.availableScopes = [];
    this.availableEndpoints = [
      `${environment.apis.sts}/secured/api/introspection/ping`,
      `${environment.apis.sts}/secured/api/token/forwarding`
    ];
    this.selectedScopes = new SelectionModel<string>(true, []);
    this.selectedEndpoint = this.availableEndpoints[0];
    this.apiResponse = '';
    this.availableSchemes = [
      "Introspection",
      "Introspection1"
    ]
    this.selectedScheme = this.availableSchemes[0];
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

  callIntrospectedApi() {
    this.httpClient.get(`${this.selectedEndpoint}/${this.selectedScheme}`, {
      responseType: 'text',
      headers: {
        'Authorization': `${this.selectedScheme} ${this.token}`
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

  callApi() {
    this.httpClient.get(`${this.selectedEndpoint}`, {
      responseType: 'text',
      headers: {
        'Authorization': `Bearer ${this.token}`
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

  refreshToken() {
    this.oidcSecurityService.forceRefreshSession().subscribe();
  }
}
