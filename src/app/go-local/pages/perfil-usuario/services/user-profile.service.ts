import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Itinerario } from 'src/app/go-local/interfaces/itinerario';
import { Usuario } from 'src/app/go-local/interfaces/Usuario';


@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private apiUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) {}

  onUpdate(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      `${this.apiUrl}/user-profile/${user.idUsuario}`,
      user
    );
  }

  getUserById(idUser: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/user/${idUser}`);
  }

  getItinerarioByIdUsuario(idUsuario: number): Observable<Itinerario> {
    return this.http.get<Itinerario>(
      `${this.apiUrl}/itinerario/byUsuario/${idUsuario}`
    );
  }
}
