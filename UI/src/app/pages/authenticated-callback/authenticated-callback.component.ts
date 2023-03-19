import {Component} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Router} from "@angular/router";
import {AccountsService} from "../../services/accounts.service";

@Component({
  selector: 'app-authenticated-callback',
  templateUrl: './authenticated-callback.component.html',
  styleUrls: ['./authenticated-callback.component.scss']
})
export class AuthenticatedCallbackComponent {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.isAuthenticated$.subscribe(
      (authenticated: boolean) => {
        if (!authenticated) {
          this.router.navigate(['/anonymous-views']);
          return;
        }

        this.router.navigate(['/secured-views']);
      }
    )
  }
}
