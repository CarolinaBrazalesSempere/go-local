import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CancelModalService } from '../../services/cancel-modal.service';
import { ApiService } from 'src/app/api.service';
import { Reserva } from 'src/app/go-local/interfaces/reserva';

@Component({
  selector: 'app-cancel-modal',
  templateUrl: './cancel-modal.component.html',
  styleUrls: ['./cancel-modal.component.css']
})
export class CancelModalComponent {
  @Input() idGuia!: number;
  @Input() idCliente!: number;
  reservas: Reserva[] = [];
  idReserva!: number; // Variable para almacenar el id de la reserva a cancelar

  @ViewChild('faqsModal') modalElement!: ElementRef;

  constructor(private apiService: ApiService, private cancelModalService: CancelModalService) { }

  ngOnInit() {
    this.cancelModalService.showModal$.subscribe((idReserva: number) => {
      this.idReserva = idReserva; // Almacenar el id de la reserva
      if (this.modalElement) {
        (this.modalElement.nativeElement as HTMLElement).classList.add('show');
      }
    });
  }

  cancelarReserva(): void {
    this.apiService.deleteReserva(this.idReserva).subscribe(() => {
      this.reservas = this.reservas.filter(reserva => reserva.idReserva !== this.idReserva);
      // Aquí puedes cerrar el modal si es necesario
      if (this.modalElement) {
        (this.modalElement.nativeElement as HTMLElement).classList.remove('show');
      }
    });
  }


}
