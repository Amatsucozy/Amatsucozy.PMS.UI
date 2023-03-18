import {Component} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-anonymous-views',
  templateUrl: './anonymous-views.component.html',
  styleUrls: ['./anonymous-views.component.scss']
})
export class AnonymousViewsComponent {
  constructor(private authService: AuthService) {

  }

  login() {
    this.authService.loginWithRedirect();
  }
}
