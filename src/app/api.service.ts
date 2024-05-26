import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Itinerario } from './go-local/interfaces/itinerario';
import { Guia } from './go-local/interfaces/Guia';
import { Reseña } from './go-local/interfaces/Reseña';

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
  getGuiaById(idGuia: number): Observable<Guia> {
    return this.http.get<Guia>(`${this.baseUrl}/guia/${idGuia}`);
  }

  getGuides(): Observable<Guia[]> {
    return this.http.get<Guia[]>(`${this.baseUrl}/guia/todos`);
  }

  getReseñasByGuiaId(idGuia: number): Observable<Reseña[]> {
    return this.http.get<Reseña[]>(`${this.baseUrl}/review/${idGuia}`);
  }
}
