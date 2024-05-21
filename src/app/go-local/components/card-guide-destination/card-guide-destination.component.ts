import { Component, OnInit } from '@angular/core';
import { Itinerario } from '../../interfaces/itinerario';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

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
          console.log(this.guias);
        });
    });
  }
}
