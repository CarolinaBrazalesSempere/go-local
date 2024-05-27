import { Component } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Usuario } from 'src/app/go-local/interfaces/Usuario';
import { authService } from 'src/app/go-local/services/auth.service';
import { RolesService } from 'src/app/go-local/services/roles.service';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  loggedInUser: Usuario | null = null;
  esGuia: boolean = false;

  constructor(private authService: authService, private rolesService: RolesService) {

    this.authService.getLoggedInUser().subscribe(user => {
      this.loggedInUser = user;

    });
  }

  ngOnInit(): void {
    this.authService.getLoggedInUser().subscribe(user => {
      this.loggedInUser = user;
      if (this.loggedInUser) {
        this.isRolGuia().subscribe(isGuia => {
          this.esGuia = isGuia; // Actualiza la propiedad esGuia
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
    map(roles => {
      console.log('Roles del usuario:', roles);
      return roles.includes('ROL_GUIA');
    }),
    catchError(error => {
      console.error('Error obteniendo roles:', error);
      return of(false);
    })
  );
}

  logout(): void {
    this.authService.logout();
  }
}
