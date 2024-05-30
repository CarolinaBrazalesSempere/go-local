import { Component } from '@angular/core';

import { Itinerario } from '../../interfaces/itinerario';

@Component({
  selector: 'gl-itinerario-list',
  templateUrl: './itinerario-list.component.html',
  styleUrls: ['./itinerario-list.component.css'],
})
export class ItinerarioListComponent {
  itinerarios: Itinerario[] = [];

  ngOnInit(): void {}
}
