import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = new FormControl("", [
    Validators.required,
    Validators.email,
  ])

  password = new FormControl([
    Validators.required,
    Validators.minLength(6)
  ])

  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  })

  login() {
    console.log(this.loginForm);

  }

}
