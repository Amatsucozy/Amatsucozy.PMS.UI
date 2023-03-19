import {Component} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-secured-views',
  templateUrl: './secured-views.component.html',
  styleUrls: ['./secured-views.component.scss']
})
export class SecuredViewsComponent {
  constructor(private authService: AuthService) {
  }

  logout() {
    this.authService.logout();
  }
}
