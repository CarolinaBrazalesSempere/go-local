import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario } from 'src/app/go-local/interfaces/Usuario';
import { LoginData } from 'src/app/go-local/interfaces/loginData';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8083';
  private user?:Usuario;

  constructor(private http:HttpClient) { }

  login(data: LoginData): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseUrl}/login`, data).pipe(
      tap(user => this.user = user)
    );
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }

  getUser(): Usuario | undefined {
    return this.user;
  }

  logout(): void {
    this.user = undefined;
  }

}
