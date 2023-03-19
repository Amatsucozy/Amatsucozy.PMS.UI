import {Component} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {AccountsService} from "../../services/accounts.service";

@Component({
  selector: 'app-secured-views',
  templateUrl: './secured-views.component.html',
  styleUrls: ['./secured-views.component.scss']
})
export class SecuredViewsComponent {
  constructor(private authService: AuthService, private accountsService: AccountsService) {
    this.accountsService.getAccount().subscribe();
  }

  logout() {
    this.authService.logout();
  }
}
