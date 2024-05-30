import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Usuario } from 'src/app/go-local/interfaces/Usuario';
import { Itinerario } from 'src/app/go-local/interfaces/itinerario';
import { AuthService } from 'src/app/go-local/services/auth.service';
import { RolesService } from 'src/app/go-local/services/roles.service';
import { UserProfileService } from '../services/user-profile.service';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
})
export class PerfilUsuarioComponent implements OnInit {
  loggedInUser: Usuario | null = null;
  user: Usuario = {
    idUsuario: 0,
    nombre: '',
    apellidos: '',
    email: '',
    dni: '',
    telefono: 0,
    sobreMi: '',
    username: '',
    contrasena: '',
  };
  editingField: { [key: string]: boolean } = {
    nombre: false,
    apellidos: false,
    email: false,
    dni: false,
    telefono: false,
    username: false,
    contrasena: false,
  };
  updateSuccessMessage: string | null = null;
  esGuia: boolean = false;
  @Input()
  itinerario!: Itinerario;

  constructor(
    private authService: AuthService,
    private userProfile: UserProfileService,
    private rolesService: RolesService
  ) {}

  ngOnInit(): void {
    this.authService.getLoggedInUser().subscribe((user) => {
      this.loggedInUser = user;
      if (this.loggedInUser) {
        this.user = { ...this.loggedInUser };
        this.checkIfUserIsGuia();
      }
    });
  }

  checkIfUserIsGuia(): void {
    if (!this.loggedInUser) {
      return;
    }

    this.isRolGuia().subscribe((isGuia) => {
      this.esGuia = isGuia;
      if (this.esGuia) {
        this.loadItinerario(this.loggedInUser!.idUsuario);
      }
    });
  }

  isRolGuia(): Observable<boolean> {
    if (!this.loggedInUser) {
      return of(false);
    }

    return this.rolesService.getRolesByUserId(this.loggedInUser.idUsuario).pipe(
      map((roles) => {
        console.log('Roles del usuario:', roles);
        return roles.includes('ROL_GUIA');
      }),
      catchError((error) => {
        console.error('Error obteniendo roles:', error);
        return of(false);
      })
    );
  }

  loadItinerario(idGuia: number): void {
    this.userProfile.getItinerarioByIdUsuario(idGuia).subscribe(
      (itinerario: Itinerario) => {
        this.itinerario = itinerario;
        console.log(this.userProfile.getItinerarioByIdUsuario(idGuia));
      },
      (error) => {
        console.error('Error obteniendo itinerario:', error);
      }
    );
  }

  onEdit(field: string, event: Event) {
    event.preventDefault();
    this.editingField[field] = !this.editingField[field];
  }

  onSubmit() {
    if (this.loggedInUser && this.loggedInUser.idUsuario) {
      const observer = {
        next: (response: Usuario) => {
          this.authService.updateLoggedInUser(response);
          this.loggedInUser = response;
          this.user = { ...response };
          this.updateSuccessMessage = 'Perfil actualizado con éxito';
        },
        error: (error: any) => {
          console.error('Error: ', error);
        },
      };
      this.user.idUsuario = this.loggedInUser.idUsuario;
      this.userProfile.onUpdate(this.user).subscribe(observer);
    } else {
      console.error('No hay usuario loggeado');
    }
  }
}
