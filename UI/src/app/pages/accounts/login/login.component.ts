import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  login(): void {
    console.log('login clicked!');
  }
}
