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

  itinerarios: Itinerario[] = [];
  nombreCiudad: string = '';
  nombrePais: string = '';
  fechaDisponible: Date = new Date();
  guides: Guia[] = [];
  displayedGuides: Guia[] = [];

  constructor(private apiService: ApiService) {}

  // ngOnInit(): void {
  //   this.apiService.getGuides().subscribe(data => {
  //     this.guides = data;
  //   });
  // }

  ngOnInit(): void {
    this.apiService.getGuides().subscribe(data => {
      this.guides = data.sort((a, b) => a.idGuia - b.idGuia).slice(0, 4);
      this.displayedGuides = this.guides;
    });
  }

}
