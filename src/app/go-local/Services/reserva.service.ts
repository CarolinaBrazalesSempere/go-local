import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Itinerario } from '../interfaces/itinerario';
import { Usuario } from '../interfaces/Usuario';
import { HttpClient } from '@angular/common/http';
import { Reserva } from '../interfaces/reserva';

@Injectable({
  providedIn: 'root',
})


//Servicio para manejar la comunicacion entre el componente de "perfil-usuario" y "ficha-reserva"
export class ReservaService {
  private apiUrl = 'http://localhost:8083/reserva/crearNueva';
  constructor(private http: HttpClient) {}

  private messageSource = new BehaviorSubject<string | null>(null);
  message$ = this.messageSource.asObservable();

  setCancelMessage(message: string) {
    this.messageSource.next(message);
  }

  createReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.apiUrl, reserva);
  }

  limpiarCancelMessage() {
    this.messageSource.next(null);
  }

}
