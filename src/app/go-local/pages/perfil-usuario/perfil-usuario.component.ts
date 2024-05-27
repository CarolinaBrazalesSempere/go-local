import { Component, OnInit } from '@angular/core';
import { AuthService, Usuario } from '../../services/auth.service';
import { UserProfileService } from './user-profile.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Itinerario } from '../../interfaces/itinerario';

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

  constructor(
    private authService: AuthService,
    private userProfile: UserProfileService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // Obtener el usuario loggeado
    this.authService.getLoggedInUser().subscribe((user) => {
      this.loggedInUser = user;
      if (user) {
        // Asignar el ID del usuario loggeado al usuario actual
        this.user.idUsuario = user.idUsuario;
        this.user.nombre = user.nombre;
        this.user.apellidos = user.apellidos;
        this.user.email = user.email;
        this.user.dni = user.dni;
        this.user.telefono = user.telefono;
        this.user.sobreMi = user.sobreMi;
        this.user.username = user.username;
        this.user.contrasena = user.contrasena;

        // Verificar si el usuario es guía
        this.apiService.getItinerarioByIdGuia(user.idUsuario).subscribe(
          (itinerario: Itinerario) => {
            // Si se recibe un itinerario, significa que el usuario es guía
            this.esGuia = true;
          },
          (error) => {
            // Si hay un error o no se recibe un itinerario, el usuario no es guía
            this.esGuia = false;
          }
        );
      }
    });
  }

  onEdit(field: string, event: Event) {
    event.preventDefault();
    this.editingField[field] = !this.editingField[field];
  }

  onSubmit() {
    if (this.loggedInUser && this.loggedInUser.idUsuario) {
      const observer = {
        next: (response: Usuario) => {
          // Actualizar el localStorage y el usuario loggeado
          this.authService.updateLoggedInUser(response);
          this.loggedInUser = response;
          this.user = { ...response };
          this.updateSuccessMessage = 'Perfil actualizado con éxito';
        },
        error: (error: any) => {
          console.error('Error: ', error);
        },
      };

      // Asignar el id del usuario loggeado al usuario a actualizar
      this.user.idUsuario = this.loggedInUser.idUsuario;
      this.userProfile.onUpdate(this.user).subscribe(observer);
    } else {
      console.error('No hay usuario loggeado');
    }
  }
}
