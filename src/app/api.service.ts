import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itinerario } from './go-local/interfaces/itinerario';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8083';

  constructor(private http: HttpClient) {}

  buscarItinerariosPorCiudadPaisYFecha(
    nombreCiudad: string,
    nombrePais: string,
    fechaDisponible: Date
  ): Observable<Itinerario[]> {
    return this.http.get<Itinerario[]>(
      `${
        this.baseUrl
      }/itinerario/todos/${nombrePais}/${nombreCiudad}/${fechaDisponible
        .toISOString()
        .slice(0, 10)}`
    );
  }
}
