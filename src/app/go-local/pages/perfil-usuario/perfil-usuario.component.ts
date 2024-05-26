import { Component, OnInit } from '@angular/core';
import { authService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent{
  usuario: string = '';
  constructor(private authService: authService) {}




}
