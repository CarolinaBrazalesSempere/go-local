import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private apiUrl = 'http://localhost:8083/usuarioRoles';

  constructor(private http: HttpClient) { }

  getRolesByUserId(id: number): Observable<string[]> {
    const url = `${this.apiUrl}/rol/${id}`;
    return this.http.get<string[]>(url);
  }
}
