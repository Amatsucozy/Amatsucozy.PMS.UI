import {Component} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-anonymous-views',
  templateUrl: './anonymous-views.component.html',
  styleUrls: ['./anonymous-views.component.scss']
})
export class AnonymousViewsComponent {
  isAuthenticated: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {
    this.isAuthenticated = this.authService.isAuthenticated$;
  }

  login() {
    this.authService.loginWithRedirect();
  }

  toSecuredView() {
    this.router.navigate(['/secured-views']);
  }
}
