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
  averageReview: number = 0;

  constructor(private apiService: ApiService) {}

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

    this.apiService.getMediaPuntuacionByGuiaId(this.idGuia).subscribe((data) => {
      this.averageReview = data;
    });
  }
}
