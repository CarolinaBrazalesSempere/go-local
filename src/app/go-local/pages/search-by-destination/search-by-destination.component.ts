import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-search-by-destination',
  templateUrl: './search-by-destination.component.html',
  styleUrls: ['./search-by-destination.component.css'],
})
export class SearchByDestinationComponent implements OnInit {
  nombreCiudad: string = '';
  nombrePais: string = '';
  fechaDisponible: string = '';
  itinerarios: any[] = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtener los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.nombreCiudad = params['city'] || '';
      this.nombrePais = params['country'] || '';
      this.fechaDisponible = params['date'] || '';

      // Llamar al servicio para obtener los itinerarios
      this.apiService.getAllItinerarios().subscribe(data => {
        this.itinerarios = data;
      });
    });
  }
}
