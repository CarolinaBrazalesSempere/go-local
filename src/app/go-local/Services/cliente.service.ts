import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'http://localhost:8083/clientes'; 

  constructor(private http: HttpClient) {}

  getClienteByUserId(userId: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${userId}`);
  }
}
