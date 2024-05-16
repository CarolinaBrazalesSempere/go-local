import { Component } from '@angular/core';
import { Itinerario } from '../../interfaces/itinerario';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'gl-card-guide-destination',
  templateUrl: './card-guide-destination.component.html',
  styleUrls: ['./card-guide-destination.component.css'],
})
export class CardGuideDestinationComponent {
  itinerarios: Itinerario[] = [];
  // nombreCiudad: string = '';
  // nombrePais: string = '';
  // fechaDisponible: Date = new Date();

  constructor(private apiService: ApiService) { }

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
