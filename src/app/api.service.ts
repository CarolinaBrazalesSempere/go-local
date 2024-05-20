import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente o de la red
      console.error('An error occurred:', error.error.message);
    } else {
      // El backend devolvió un código de respuesta no exitoso
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
