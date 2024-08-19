import { Component } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { AuthService } from 'src/app/go-local/services/auth.service';
import { RolesService } from 'src/app/go-local/Services/roles.service';
import { Usuario } from 'src/app/go-local/interfaces/Usuario';


@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  loggedInUser: Usuario | null = null;
  esGuia: boolean = false;

  constructor(
    private authService: AuthService,
    private rolesService: RolesService
  ) {
    this.authService.getLoggedInUser().subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  ngOnInit(): void {
    this.authService.getLoggedInUser().subscribe((user) => {
      this.loggedInUser = user;
      if (this.loggedInUser) {
        this.isRolGuia().subscribe((isGuia) => {
          this.esGuia = isGuia;
        });
      }
    });
  }

  isLogged(): boolean {
    return !!this.loggedInUser;
  }

  isRolGuia(): Observable<boolean> {
    if (!this.loggedInUser) {
      return of(false);
    }

    return this.rolesService.getRolesByUserId(this.loggedInUser.idUsuario).pipe(
      map((roles) => {
        return roles.includes('ROL_GUIA');
      }),
      catchError((error) => {
        return of(false);
      })
    );
  }

  logout(): void {
    this.authService.logout();
  }
}
