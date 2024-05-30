import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/go-local/services/auth.service';
import { Usuario } from 'src/app/go-local/interfaces/Usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.authService.getLoggedInUser().subscribe((user) => {
      if (user) {
        this.router.navigate(['/']);
      }
    });
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (user: Usuario) => {
        if (user) {
          this.authService.setLoggedInUser(user);
          this.router.navigate(['/']);
        } else {
          this.errorMessage = 'No se han recibido datos de usuario.';
        }
      },
      (error) => {
        if (error.status === 401) {
          const errorBody = error.error;
          if (errorBody === 'Usuario incorrecto') {
            this.errorMessage = 'Usuario incorrecto';
          } else {
            this.errorMessage = 'Contraseña incorrecta';
          }
        } else {
          this.errorMessage = 'Error en el servidor.';
        }
      }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
