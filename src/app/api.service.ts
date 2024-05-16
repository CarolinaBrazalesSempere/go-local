import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itinerario } from './go-local/interfaces/itinerario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8083'; // URL de tu backend Spring Boot

  constructor(private http: HttpClient) { }

  getAllItinerarios(): Observable<Itinerario[]> {
    return this.http.get<Itinerario[]>(`${this.baseUrl}/itinerario/todos`);
  }

  buscarItinerariosPorCiudadPaisYFecha(nombreCiudad: string, nombrePais: string, fechaDisponible: Date): Observable<Itinerario[]> {
    // Construir los parámetros de la solicitud
    let params = new HttpParams();
    params = params.append('nombreCiudad', nombreCiudad);
    params = params.append('nombrePais', nombrePais);
    params = params.append('fechaDisponible', fechaDisponible.toISOString().slice(0, 10));

    // Realizar la solicitud HTTP GET
    return this.http.get<Itinerario[]>(`${this.baseUrl}/porBusqueda`, { params: params });
  }
}
