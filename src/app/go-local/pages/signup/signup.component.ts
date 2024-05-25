import { Component } from '@angular/core';
import { SignupService } from './signup.service';

import { UserSignUp } from '../../interfaces/UserSignUp';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: UserSignUp = {
    nombre: '',
    apellidos: '',
    email: '',
    dni: '',
    telefono: '',
    sobreMi: '',
    username: '',
    contrasena: '',
  };
  constructor(private signUp: SignupService) {}

  onSubmit() {
    this.signUp.onRegister(this.user).subscribe(
      (response) => {
        console.log('True', response);
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }
}
