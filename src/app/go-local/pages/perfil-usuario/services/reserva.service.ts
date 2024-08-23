import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})


//Servicio para manejar la comunicacion entre el componente de "perfil-usuario" y "ficha-reserva"
export class ReservaService {
  private cancelMessageSource = new BehaviorSubject<string | null>(null);
  cancelMessage$ = this.cancelMessageSource.asObservable();

  setCancelMessage(message: string) {
    this.cancelMessageSource.next(message);
  }
}
