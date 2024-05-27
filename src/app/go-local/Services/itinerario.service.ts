import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Itinerario } from '../interfaces/itinerario';

@Injectable({
  providedIn: 'root'
})
export class ItinerarioService {
  private apiUrl = 'http://localhost:8083/itinerario';

  constructor(private http: HttpClient) { }

  createItinerario(itinerario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/alta`, itinerario);
  }

  getItinerariosByGuiaId(guiaId: number): Observable<Itinerario[]> {
    const url = `${this.apiUrl}/byUsuario/${guiaId}`;
    return this.http.get<Itinerario[]>(url);
  }
}
