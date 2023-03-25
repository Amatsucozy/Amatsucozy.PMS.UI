import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {map, Observable, take} from "rxjs";
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-anonymous-views',
  templateUrl: './anonymous-views.component.html',
  styleUrls: ['./anonymous-views.component.scss']
})
export class AnonymousViewsComponent {
  isAuthenticated: Observable<boolean>;

  constructor(private oidcSecurityService: OidcSecurityService, private router: Router) {
    this.isAuthenticated = this.oidcSecurityService.isAuthenticated$
      .pipe(
        take(1),
        map(authResult => authResult.isAuthenticated)
      );
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  toSecuredView() {
    this.router.navigate(['/secured-views']);
  }
}
