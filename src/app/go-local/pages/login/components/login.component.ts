import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/go-local/interfaces/Usuario';
import { AuthService } from 'src/app/go-local/services/auth.service';

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
        this.router.navigate(['/']); // Redirecciona si el usuario está autenticado
      }
    });
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (user: Usuario) => {
        if (user) {
          this.authService.setLoggedInUser(user); // Almacena los detalles del usuario en el servicio de autenticación
          this.router.navigate(['/']); // Redirecciona al inicio después del inicio de sesión exitoso
        } else {
          // Manejar el caso en que no se reciban datos de usuario
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
    this.authService.logout(); // Maneja el cierre de sesión
    this.router.navigate(['/login']); // Redirecciona al usuario a la página de inicio de sesión
  }
}
