import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authService {
  private loginUrl = 'http://localhost:8083/login';
  private loggedInUsernameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {

    //Hace que se guarde la sesion incluso refrescando la pagina
    const username = localStorage.getItem('username');
    if (username) {
      this.loggedInUsernameSubject.next(username);
      this.isLoggedInSubject.next(true);
    }
  }
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { username, password }, { responseType: 'text' });
  }

  //Hace que se guarde la sesion incluso refrescando la pagina
  setLoggedInUsername(username: string): void {
    localStorage.setItem('username', username);
    this.loggedInUsernameSubject.next(username);
    this.setIsLoggedIn(true);  // Asegura que el estado de sesión también se actualice
  }

  getLoggedInUsername(): Observable<string> {
    return this.loggedInUsernameSubject.asObservable();
  }

  setIsLoggedIn(isLoggedIn: boolean): void {
    this.isLoggedInSubject.next(isLoggedIn);
  }

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  logout() {
    this.setLoggedInUsername('');
    this.setIsLoggedIn(false);
    this.router.navigate(['/login']);
  }


}
