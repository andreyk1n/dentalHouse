import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  password: string = '';
  loginValid: boolean = true;
  passwordValid: boolean = true;

  constructor(private router: Router) {}

  validateLogin(): boolean {
    this.loginValid = this.login === 'adminDoctor';
    return this.loginValid;
  }

  validatePassword(): boolean {
    this.passwordValid = this.password === 'adminPassword';
    return this.passwordValid;
  }

  submitForm() {
    this.validateLogin();
    this.validatePassword();

    if (this.loginValid && this.passwordValid) {
      this.router.navigate(['/editDoctors']);
    } else {
      const loginInput = document.getElementById('exampleLoginInput') as HTMLInputElement;
      const passwordInput = document.getElementById('exampleInputPassword1') as HTMLInputElement;

      if (!this.loginValid) {
        loginInput.classList.add('is-invalid');
      }

      if (!this.passwordValid) {
        passwordInput.classList.add('is-invalid');
      }
    }
  }
}
