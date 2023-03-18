import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";

export class Guards {
  public static authenticationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return false;
  }
}
