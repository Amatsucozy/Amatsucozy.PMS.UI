import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-authenticated-callback',
  templateUrl: './authenticated-callback.component.html',
  styleUrls: ['./authenticated-callback.component.scss']
})
export class AuthenticatedCallbackComponent {
  constructor(private oidcSecurityService: OidcSecurityService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.oidcSecurityService.checkAuth()
      .subscribe(({isAuthenticated, userData, accessToken, idToken}) => {
        if (!isAuthenticated) {
          this.router.navigate(['/anonymous-views']);
          return;
        }

        this.router.navigate(['/secured-views']);
      });
  }
}
