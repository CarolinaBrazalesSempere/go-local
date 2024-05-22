import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        () => {
          console.log('Inicio de sesión exitoso');
          // Establecer el nombre de usuario en el AuthService
          this.authService.setLoggedInUsername(this.username);
          // Redirigir al usuario al home después del inicio de sesión exitoso
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error en el inicio de sesión:', error);
          this.errorMessage = 'Usuario o contraseña incorrectos';
        }
      );
  }

  logout() {
    this.authService.logout();
    // Redirigir al usuario a la página de inicio de sesión o a cualquier otra página
    this.router.navigate(['/login']);
  }
}
