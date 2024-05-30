import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Itinerario } from '../../interfaces/itinerario';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'gl-card-guide-destination',
  templateUrl: './card-guide-destination.component.html',
  styleUrls: ['./card-guide-destination.component.css'],
})
export class CardGuideDestinationComponent implements OnInit {
  itinerarios: Itinerario[] = [];
  nombreCiudad: string = '';
  nombrePais: string = '';
  fechaDisponible: Date = new Date();
  guias: Itinerario[] = [];
  averageReviews: { [key: number]: number } = {};

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.nombreCiudad = params['city'];
      this.nombrePais = params['country'];
      this.fechaDisponible = params['date'];
      this.apiService
        .buscarItinerariosPorCiudadPaisYFecha(
          this.nombreCiudad,
          this.nombrePais,
          new Date(this.fechaDisponible)
        )
        .subscribe((data) => {
          this.guias = data;
          this.guias.forEach((itinerario) => {
            this.apiService
              .getMediaPuntuacionByGuiaId(itinerario.guia.idGuia)
              .subscribe((media) => {
                this.averageReviews[itinerario.guia.idGuia] = media;
              });
          });
        });
    });
  }
}
