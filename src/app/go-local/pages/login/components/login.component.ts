import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  // login(): void {
  //   this.authenticationService.login(this.email, this.password).subscribe(
  //     response => {
  //       localStorage.setItem('token', response.token); // Almacena el token
  //       this.router.navigate(['']); // Redirige a home
  //     },
  //     error => {
  //       this.errorMessage = 'Email o contraseña incorrectos'; // Meter en el html con ngIf
  //     }
  //   );
  // }

  login(): void {
    this.authenticationService.login(this.email, this.password)
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token); // Almacena el token
          this.router.navigate(['']); // Redirige a home
        }),
        catchError(error => {
          this.errorMessage = 'Email o contraseña incorrectos'; // Meter en el html con ngIf
          return of(null);
        })
      )
      .subscribe();
  }

}
