import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../interfaces/Usuario';


@Component({
  selector: 'gl-home-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isRotated: boolean = false;
  isCollapsed: boolean = true;
  loggedInUser: Usuario | null = null;

  constructor(private authService: AuthService) {}

  rotateChevron() {
    this.isRotated = !this.isRotated;
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.authService.getLoggedInUser().subscribe((user: Usuario | null) => {
      this.loggedInUser = user;
    });
  }
}
