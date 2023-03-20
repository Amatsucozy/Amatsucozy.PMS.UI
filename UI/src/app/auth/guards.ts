import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";
import {OidcSecurityService} from "angular-auth-oidc-client";
import {inject} from "@angular/core";
import {Observable, tap} from "rxjs";

export class Guards {
  static authenticated: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
    const oidcSecurityService = inject(OidcSecurityService);
    return oidcSecurityService.isAuthenticated()
      .pipe(
        tap(isAuthenticated => {
          if (!isAuthenticated) {
            oidcSecurityService.authorize();

            return false;
          }

          return true;
        })
      );
  }
}
