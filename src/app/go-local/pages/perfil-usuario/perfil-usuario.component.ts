import { Component, OnInit } from '@angular/core';
import { authService } from '../../services/auth.service';
import { Usuario } from '../../interfaces/Usuario';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent{
  loggedInUser: Usuario | null = null;

  constructor(private authService: authService) {
    this.authService.getLoggedInUser().subscribe(user => {
      this.loggedInUser = user;
    });
  }


}
