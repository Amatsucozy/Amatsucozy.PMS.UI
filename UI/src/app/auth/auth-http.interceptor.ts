import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, switchMap} from 'rxjs';
import {OidcSecurityService} from "angular-auth-oidc-client";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private oidcSecurityService: OidcSecurityService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.oidcSecurityService.getAuthenticationResult()
      .pipe(
        switchMap(({access_token, token_type}) => {
          const clonedRequest = request.clone({
            headers: access_token ? request.headers.set('Authorization', `${token_type} ${access_token}`) : request.headers
          });

          return next.handle(clonedRequest);
        })
      );
  }
}
