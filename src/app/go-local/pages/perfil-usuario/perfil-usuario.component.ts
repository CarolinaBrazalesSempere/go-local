import { Component, OnInit } from '@angular/core';
import { AuthService, Usuario } from '../../services/auth.service';
import { UserProfileService } from './user-profile.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private authService: AuthService,
    private userProfile: UserProfileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtener el usuario loggeado
    this.authService.getLoggedInUser().subscribe((user) => {
      this.loggedInUser = user;
      if (user) {
        // Asignar el ID del usuario loggeado al usuario actual
        this.user.idUsuario = user.idUsuario;
        // También puedes asignar otros datos del usuario si los necesitas
        this.user.nombre = user.nombre;
        this.user.apellidos = user.apellidos;
        // Asígnalo a otros campos si es necesario
      }
    });
  }

  onEdit(field: string) {
    this.editingField[field] = !this.editingField[field];
  }

  onSubmit() {
    if (this.loggedInUser && this.loggedInUser.idUsuario) {
      const observer = {
        next: (response: any) => {
          console.log(response);
          this.updateSuccessMessage = 'Perfil actualizado con éxito';

          // Actualizar el localStorage
          localStorage.setItem('userData', JSON.stringify(this.user));
        },
        error: (error: any) => {
          console.error('Error: ', error);
        },
      };

      // Asignar el ID del usuario loggeado al usuario a actualizar
      this.user.idUsuario = this.loggedInUser.idUsuario;
      this.userProfile.onUpdate(this.user).subscribe(observer);
    } else {
      console.error('No hay usuario loggeado');
    }
  }
}
