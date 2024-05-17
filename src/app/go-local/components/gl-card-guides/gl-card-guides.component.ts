import { Component, OnInit } from '@angular/core';
import { Itinerario } from '../../interfaces/itinerario';
import { ApiService } from 'src/app/api.service';

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
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}
}
