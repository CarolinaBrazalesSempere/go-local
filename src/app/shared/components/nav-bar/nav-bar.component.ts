import { Component } from '@angular/core';
import { AuthService } from '../../../go-local/services/Auth.service';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  loggedInUsername: string = '';

  constructor(private authService: AuthService) {
    this.authService.getLoggedInUsername().subscribe(username => {
      this.loggedInUsername = username;
    });
  }

  isLogged(): boolean {
    return !!this.loggedInUsername;
  }

  logout(): void {
    this.authService.logout();
  }
}
