import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/shared/components/search-box/services/search.service';
import { SearchGuide } from '../../interfaces/SearchGuide';
import { Itinerario } from '../../interfaces/itinerario';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-search-by-destination',
  templateUrl: './search-by-destination.component.html',
  styleUrls: ['./search-by-destination.component.css'],
})
export class SearchByDestinationComponent{
  itinerarios: Itinerario[] = [];
  // nombreCiudad: string = '';
  // nombrePais: string = '';
  // fechaDisponible: Date = new Date();
  // filteredResults: SearchGuide[] = [];

  constructor(
    private apiService: ApiService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.apiService.getAllItinerarios().subscribe(data => {
      this.itinerarios = data;
    });

  }

  // buscarItinerarios(): void {
  //   this.apiService.buscarItinerariosPorCiudadPaisYFecha(this.nombreCiudad, this.nombrePais, this.fechaDisponible)
  //     .subscribe(data => {
  //       this.itinerarios = data;
  //     });
  // }
}
