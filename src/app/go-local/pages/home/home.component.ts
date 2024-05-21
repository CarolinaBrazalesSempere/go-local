import { Component } from '@angular/core';
import { AuthService } from '../../Services/Auth.service';

@Component({
  selector: 'gl-home-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isRotated: boolean = false;
  isCollapsed: boolean = true;
  username: string | null = null;
  loggedInUsername: string = '';

  constructor(private authService: AuthService){}

  rotateChevron() {
    this.isRotated = !this.isRotated;
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.authService.getLoggedInUsername()
      .subscribe((username: string) => {
        this.loggedInUsername = username;
      });
  }
}
