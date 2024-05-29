import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancelModalService {

  private showModalSource = new Subject<number>();
  showModal$ = this.showModalSource.asObservable();

  showModal(idReserva: number) {
    this.showModalSource.next(idReserva);
  }

}
