import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Ciudad } from './go-local/interfaces/ciudad';
import { Guia } from './go-local/interfaces/Guia';
import { Itinerario } from './go-local/interfaces/itinerario';
import { Reseña } from './go-local/interfaces/Reseña';
import { Reserva } from './go-local/interfaces/reserva';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8083';

  constructor(
    private http: HttpClient
  ) {}

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

  getItinerarioByIdGuia(idGuia: number): Observable<Itinerario> {
    return this.http.get<Itinerario>(
      `${this.baseUrl}/itinerario/byGuia/${idGuia}`
    );
  }

  getGuides(): Observable<Guia[]> {
    return this.http.get<Guia[]>(`${this.baseUrl}/guia/todos`);
  }

  getReseñasByGuiaId(idGuia: number): Observable<Reseña[]> {
    return this.http.get<Reseña[]>(`${this.baseUrl}/review/${idGuia}`);
  }

  getMediaPuntuacionByGuiaId(idGuia: number): Observable<number> {
    return this.getReseñasByGuiaId(idGuia).pipe(
      map((resenias) => {
        if (resenias.length === 0) {
          return 0;
        }
        const totalPuntuacion = resenias.reduce((acc, resenia) => {
          if (isNaN(resenia.puntuacion)) {
            return acc;
          }
          return acc + resenia.puntuacion;
        }, 0);
        return totalPuntuacion / resenias.length;
      })
    );
  }

  getCiudadByGuiaId(idGuia: number): Observable<Ciudad> {
    return this.http.get<Ciudad>(`${this.baseUrl}/guia/ciudad/${idGuia}`);
  }

  getAllReservas() : Observable<Reserva[]>{
    return this.http.get<Reserva[]>(`${this.baseUrl}//reserva/todos`)
  }

  getReservasByUserId(userId: number): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${this.baseUrl}/reserva/buscar/${userId}`);
  }

  deleteReserva(idReserva: number): Observable<void> {
    return this.http.delete<void>(
      `${this.baseUrl}/reserva/borrar/${idReserva}`
    );
  }

  
}
