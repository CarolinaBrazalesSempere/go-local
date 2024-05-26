import { Component } from '@angular/core';
import { authService, Usuario } from '../../services/auth.service';

@Component({
  selector: 'gl-home-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isRotated: boolean = false;
  isCollapsed: boolean = true;
  loggedInUser: Usuario | null = null; // Cambiar a User

  constructor(private authService: authService){}

  rotateChevron() {
    this.isRotated = !this.isRotated;
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.authService.getLoggedInUser()
      .subscribe((user: Usuario | null) => { // Cambiar a User
        this.loggedInUser = user;
      });
  }
}
