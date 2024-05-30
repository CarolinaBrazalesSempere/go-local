import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from '../services/signup.service';
import { UserSignUp } from '../../../interfaces/UserSignUp';


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

  errorMessages: { [key: string]: string } = {};

  constructor(private signUp: SignupService, private router: Router) {}

  onSubmit() {
    this.errorMessages = this.validateForm();
    if (Object.keys(this.errorMessages).length === 0) {
      const observer = {
        next: (response: any) => {
          console.log('True', response);
        },
        error: (error: any) => {
          this.errorMessages['general'] =
            'Ocurrió un error durante el registro. Por favor, inténtelo de nuevo.';
          console.error('Error', error);
        },
      };

      this.signUp.onRegister(this.user).subscribe(observer);
      this.router.navigate(['/login']);
    }
  }

  validateForm(): { [key: string]: string } {
    const errors: { [key: string]: string } = {};

    if (!this.user.nombre) {
      errors['nombre'] = 'El nombre es obligatorio.';
    }
    if (!this.user.apellidos) {
      errors['apellidos'] = 'Los apellidos son obligatorios.';
    }
    if (!this.user.email) {
      errors['email'] = 'El correo electrónico es obligatorio.';
    }
    if (!this.user.dni) {
      errors['dni'] = 'El DNI es obligatorio.';
    }
    if (!this.user.telefono) {
      errors['telefono'] = 'El teléfono es obligatorio.';
    }
    if (!this.user.username) {
      errors['username'] = 'El nombre de usuario es obligatorio.';
    }
    if (!this.user.contrasena) {
      errors['contrasena'] = 'La contraseña es obligatoria.';
    }

    return errors;
  }
}
