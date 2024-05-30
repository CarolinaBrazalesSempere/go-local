import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


export interface Usuario {
  idUsuario: number;
  dni: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: number;
  contrasena: string;
  sobreMi: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:8083/login';
  private loggedInUserSubject: BehaviorSubject<Usuario | null> =
    new BehaviorSubject<Usuario | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.loggedInUserSubject.next(JSON.parse(userData));
    }
  }

  login(username: string, password: string): Observable<Usuario> {
    return this.http.post<Usuario>(this.loginUrl, { username, password });
  }

  setLoggedInUser(user: Usuario): void {
    localStorage.setItem('userData', JSON.stringify(user));
    this.loggedInUserSubject.next(user);
  }

  getLoggedInUser(): Observable<Usuario | null> {
    return this.loggedInUserSubject.asObservable();
  }

  logout() {
    localStorage.removeItem('userData');
    this.loggedInUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  updateLoggedInUser(user: Usuario): void {
    localStorage.setItem('userData', JSON.stringify(user));
    this.loggedInUserSubject.next(user);
  }
}
