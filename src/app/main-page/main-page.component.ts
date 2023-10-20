import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

// declare var Swal: any;

export class MainPageComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';
  nameValid: boolean = true;
  emailValid: boolean = true;
  phoneValid: boolean = true;

  validateName(): boolean {
    this.nameValid = this.name.length >= 2;
    return this.nameValid;
  }

  validateEmail(): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.emailValid = emailRegex.test(this.email);
    return this.emailValid;
  }

  validatePhone(): boolean {
    const phoneRegex = /^[0-9]{10}$/;
    this.phoneValid = phoneRegex.test(this.phone);
    return this.phoneValid;
  }

  submitForm() {
    this.validateName();
    this.validateEmail();
    this.validatePhone();
    if (this.nameValid && this.emailValid && this.phoneValid) {
      this.showSuccessAlert();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Помилка',
        text: 'Будь ласка, заповніть всі обов\'язкові поля.'
      });
    }
  }

  showSuccessAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Успіх!',
      text: 'З вами скоро зв\'яжуться.'
    });
  }

}
