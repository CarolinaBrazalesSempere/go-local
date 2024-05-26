import { Component } from '@angular/core';
import { Usuario } from 'src/app/go-local/interfaces/Usuario';
import { authService } from 'src/app/go-local/services/auth.service';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  loggedInUser: Usuario | null = null;

  constructor(private authService: authService) {
    this.authService.getLoggedInUser().subscribe(user => {
      this.loggedInUser = user;
    });
  }

  isLogged(): boolean {
    return !!this.loggedInUser;
  }

  logout(): void {
    this.authService.logout();
  }
}
