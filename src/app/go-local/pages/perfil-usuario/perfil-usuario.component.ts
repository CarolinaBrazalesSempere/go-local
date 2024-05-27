import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../interfaces/Usuario';
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
  ) {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      this.loggedInUser = JSON.parse(storedUser);
    }
    this.authService.getLoggedInUser().subscribe((user) => {
      this.loggedInUser = user;
      if (user) {
        this.user = { ...user };
      }
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.user.idUsuario = +params['idUsuario'];
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
          // Almacenar los datos actualizados en el local storage
          localStorage.setItem('userData', JSON.stringify(this.user));
        },
        error: (error: any) => {
          console.error('Error: ', error);
        },
      };

      this.user.idUsuario = this.loggedInUser.idUsuario;
      this.userProfile.onUpdate(this.user).subscribe(observer);
    } else {
      console.error('No user logged');
    }
  }
}
