import { Component, OnInit } from '@angular/core';
import { Guia } from '../../interfaces/Guia';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Itinerario } from '../../interfaces/itinerario';

@Component({
  selector: 'app-ficha-guia',
  templateUrl: './ficha-guia.component.html',
  styleUrls: ['./ficha-guia.component.css'],
})
export class FichaGuiaComponent implements OnInit {
  idGuia: number = 0;
  guia!: Guia;
  itinerario!: Itinerario;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idGuia = +params['idGuia'];
      this.apiService.getGuiaById(this.idGuia).subscribe((data) => {
        this.guia = data;
        console.log(this.guia);

        // Obtener el itinerario asociado al guía
        this.apiService.getItinerarioByIdGuia(this.idGuia).subscribe((itinerario) => {
          this.itinerario = itinerario; // Asignar el itinerario obtenido
        });
      });
    });
  }
}
