import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { Guia } from '../../interfaces/Guia';
import { Reseña } from '../../interfaces/Reseña';
import { ApiService } from 'src/app/api.service';
import { Itinerario } from '../../interfaces/itinerario';
import { ReservaService } from '../../Services/reserva.service';
// Asegúrate de importar el servicio

@Component({
  selector: 'app-ficha-guia',
  templateUrl: './ficha-guia.component.html',
  styleUrls: ['./ficha-guia.component.css'],
})
export class FichaGuiaComponent implements OnInit {
  idGuia: number = 0;
  guia!: Guia;
  reviews: Reseña[] = [];
  itinerario!: Itinerario;
  cancelSuccessMessage: string = '';
  isError: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private reservaService: ReservaService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idGuia = +params['idGuia'];
      this.apiService.getGuiaById(this.idGuia).subscribe((data) => {
        this.guia = data;
        this.apiService.getItinerarioByIdGuia(this.idGuia).subscribe((itinerario) => {
            this.itinerario = itinerario;
          });
      });
      this.apiService.getReseñasByGuiaId(this.idGuia).subscribe((data) => {
        this.reviews = data;
      });
    });

    // Suscribirse al observable del mensaje de cancelación
    this.reservaService.message$.subscribe((message) => {
      if (message) {
        this.cancelSuccessMessage = message;
        this.isError = this.cancelSuccessMessage.includes('Error');

        setTimeout(() => {
          this.cancelSuccessMessage = '';
          this.reservaService.limpiarCancelMessage();
        }, 2000); // para que dure solo 2 segundo el mensaje
      }
    });
  }
}
