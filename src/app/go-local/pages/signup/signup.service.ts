import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserSignUp } from '../../interfaces/UserSignUp';


@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private apiUrl = 'http://localhost:8083/signup';
  constructor(private http: HttpClient) {}

  onRegister(user: UserSignUp): Observable<UserSignUp> {
    return this.http.post<UserSignUp>(this.apiUrl, user);
  }
}
