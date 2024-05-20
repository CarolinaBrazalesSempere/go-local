import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/go-local/interfaces/loginData';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData: LoginData = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onLogin():void {

    console.log(this.loginData);

    this.authService.login(this.loginData).subscribe({
      next: (user) => {
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error during login', error);
      }
    });
  }


}
