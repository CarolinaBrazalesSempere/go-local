import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Guia } from 'src/app/go-local/interfaces/Guia';
import { Reseña } from 'src/app/go-local/interfaces/Reseña';
import { Ciudad } from 'src/app/go-local/interfaces/ciudad';
import { Itinerario } from 'src/app/go-local/interfaces/itinerario';


@Component({
  selector: 'shared-tarjeta-guia',
  templateUrl: './tarjeta-guia.component.html',
  styleUrls: ['./tarjeta-guia.component.css']
})
export class TarjetaGuiaComponent implements OnInit {
  @Input() idGuia!: number;
  guia!: Guia;
  itinerario!: Itinerario;
  reviews: Reseña[] = [];
  ciudad!: Ciudad;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getGuiaById(this.idGuia).subscribe((data) => {
      this.guia = data;

      // Obtener el itinerario asociado al guía
      this.apiService.getItinerarioByIdGuia(this.idGuia).subscribe((data) => {
        this.itinerario = data;
      });

      // Obtener la ciudad del guía
      this.apiService.getCiudadByGuiaId(this.idGuia).subscribe((data) => {
        this.ciudad = data;
      });
    });

    // Obtener las reseñas del guía
    this.apiService.getReseñasByGuiaId(this.idGuia).subscribe((data) => {
      this.reviews = data;
    });
  }
}
