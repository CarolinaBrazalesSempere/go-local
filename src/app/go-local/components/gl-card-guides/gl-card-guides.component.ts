import { Component, OnInit } from '@angular/core';
import { Itinerario } from '../../interfaces/itinerario';
import { ApiService } from 'src/app/api.service';
import { Guia } from '../../interfaces/Guia';

@Component({
  selector: 'gl-card-guides',
  templateUrl: './gl-card-guides.component.html',
  styleUrls: ['./gl-card-guides.component.css'],
})
export class GlCardGuidesComponent implements OnInit {


  guideCity: { [key: number]: string } = {};
  guides: Guia[] = [];
  displayedGuides: Guia[] = [];
  averageReviews: { [key: number]: number } = {};

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getGuides().subscribe(data => {
      this.guides = data.sort((a, b) => a.idGuia - b.idGuia).slice(0, 4);
      this.displayedGuides = this.guides;

      this.guides.forEach(guia => {
        // Carga la ciudad de cada guía
        this.apiService.getCiudadByGuiaId(guia.idGuia).subscribe(ciudad => {
          this.guideCity[guia.idGuia] = ciudad.nombreCiudad;
        });
        // Carga la media de puntuación de cada guía
        this.apiService.getMediaPuntuacionByGuiaId(guia.idGuia).subscribe(media => {
          this.averageReviews[guia.idGuia] = media;
        });
      });
    });
  }
}

