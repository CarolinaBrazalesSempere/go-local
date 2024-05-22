import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8083/login';
  private loggedInUsernameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.loginUrl, { username, password }, { responseType: 'text' });
  }

  setLoggedInUsername(username: string): void {
    this.loggedInUsernameSubject.next(username);
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
