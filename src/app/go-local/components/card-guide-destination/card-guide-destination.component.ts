import { Component } from '@angular/core';
import { Itinerario } from '../../interfaces/itinerario';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'gl-card-guide-destination',
  templateUrl: './card-guide-destination.component.html',
  styleUrls: ['./card-guide-destination.component.css'],
})
export class CardGuideDestinationComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}
}
