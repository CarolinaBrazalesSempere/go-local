import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

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
  providedIn: 'root'
})
export class authService {
  private loginUrl = 'http://localhost:8083/login';
  private loggedInUserSubject: BehaviorSubject<Usuario | null> = new BehaviorSubject<Usuario | null>(null);

  constructor(private http: HttpClient, private router: Router) {
    // Hace que se guarde la sesión incluso refrescando la página
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
}
