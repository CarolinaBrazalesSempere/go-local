import { Component, Input, OnInit } from '@angular/core';

import { ApiService } from 'src/app/api.service';
import { Ciudad } from '../../interfaces/ciudad';
import { Guia } from '../../interfaces/Guia';
import { Itinerario } from '../../interfaces/itinerario';
import { Reseña } from '../../interfaces/Reseña';
import { Reserva } from '../../interfaces/reserva';
import { ReservaService } from '../../Services/reserva.service';


@Component({
  selector: 'gl-ficha-reserva',
  templateUrl: './ficha-reserva.component.html',
  styleUrls: ['./ficha-reserva.component.css'],
})
export class FichaReservaComponent implements OnInit {
  @Input() idGuia!: number;
  @Input() idCliente!: number;
  guia!: Guia;
  itinerario!: Itinerario;
  reviews: Reseña[] = [];
  ciudad!: Ciudad;
  averageReview: number = 0;
  reservas: Reserva[] = [];
  cancelSuccessMessage : string | null = null;
  isError: boolean = false;

  constructor(
    private apiService: ApiService,
    private reservaService: ReservaService
  ) {}

  ngOnInit(): void {
    this.apiService.getGuiaById(this.idGuia).subscribe((data) => {
      this.guia = data;

      this.apiService.getItinerarioByIdGuia(this.idGuia).subscribe((data) => {
        this.itinerario = data;
      });

      this.apiService.getCiudadByGuiaId(this.idGuia).subscribe((data) => {
        this.ciudad = data;
      });
    });

    this.apiService.getReseñasByGuiaId(this.idGuia).subscribe((data) => {
      this.reviews = data;
    });

    this.apiService
      .getMediaPuntuacionByGuiaId(this.idGuia)
      .subscribe((data) => {
        this.averageReview = data;
      });

    this.apiService.getReservasByUserId(this.idCliente).subscribe((data) => {
      this.reservas = data;
    });
  }

  cancelarReserva(idReserva: number): void {
    this.apiService.deleteReserva(idReserva).subscribe(
      () => {
        this.reservas = this.reservas.filter(
          (reserva) => reserva.idReserva !== idReserva
        );
        this.reservaService.setCancelMessage('Reserva cancelada con éxito');
        this.isError = false;
        setTimeout(() => {
          window.location.reload();
        }, 1000);  // Esperar 1 segundo antes de recargar
      },

      (error) => {
        console.error('Error al cancelar la reserva: ', error);
        this.reservaService.setCancelMessage('Error al cancelar la reserva');
        this.isError = true;
      }
    );
  }
}
