import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';


  //Hace que se guarde la sesion incluso refrescando la pagina
  constructor(private authService: authService, private router: Router) {
    this.authService.getIsLoggedIn().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/']);
      }
    });
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      () => {
        this.authService.setLoggedInUsername(this.username);
        this.router.navigate(['/']);
      },
      (error) => {
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
