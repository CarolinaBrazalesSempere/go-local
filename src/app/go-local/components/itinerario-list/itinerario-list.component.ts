import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Itinerario } from '../../interfaces/itinerario';

@Component({
  selector: 'app-itinerario-list',
  templateUrl: './itinerario-list.component.html',
  styleUrls: ['./itinerario-list.component.css']
})
export class ItinerarioListComponent {
  itinerarios: Itinerario[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllItinerarios().subscribe(data => {
      this.itinerarios = data;
    });
  }

}
