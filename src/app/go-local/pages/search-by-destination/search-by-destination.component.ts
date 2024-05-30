import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/api.service';
import { Itinerario } from '../../interfaces/itinerario';

@Component({
  selector: 'app-search-by-destination',
  templateUrl: './search-by-destination.component.html',
  styleUrls: ['./search-by-destination.component.css'],
})
export class SearchByDestinationComponent implements OnInit {
  nombreCiudad: string = '';
  nombrePais: string = '';
  fechaDisponible: string = '';
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
        });
    });
  }
}
