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

  // login() {
  //   this.authService.login(this.username, this.password)
  //     .subscribe(
  //       () => {
  //         console.log('Inicio de sesión exitoso');
  //         this.authService.setLoggedInUsername(this.username);
  //         this.router.navigate(['/']);
  //       },
  //       error => {
  //         console.error('Error en el inicio de sesión:', error);
  //         this.errorMessage = 'Usuario o contraseña incorrectos';
  //       }
  //     );
  // }

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        () => {
          console.log('Inicio de sesión exitoso');
          this.authService.setLoggedInUsername(this.username);
          this.router.navigate(['/']);
        },
        error => {
          if (error.status === 401) {
            const errorBody = error.error;
            if (errorBody === 'Usuario incorrecto') {
              this.errorMessage = 'Usuario incorrecto';
            } else {
              this.errorMessage = 'Contraseña incorrecta';
            }
          }
        }
      );
    }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
