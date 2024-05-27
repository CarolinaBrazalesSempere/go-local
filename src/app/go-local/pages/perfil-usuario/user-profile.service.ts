import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/Usuario';
import { Observable } from 'rxjs';

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
}
