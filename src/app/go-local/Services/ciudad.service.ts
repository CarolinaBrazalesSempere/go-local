import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../interfaces/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private baseUrl = 'http://localhost:8083'; // URL de tu backend Spring Boot

  constructor(private http: HttpClient) { }

  getAllCiudades(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(`${this.baseUrl}/ciudad/todos`);
  }
}
