// src/app/services/roles.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private apiUrl = 'http://localhost:8083/usuarioRoles'; // Cambia esto por la URL de tu API

  constructor(private http: HttpClient) { }

  getRolesByUserId(idUsuario: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/${idUsuario}/rol`);
  }
}
