import { Component } from '@angular/core';
import { Guia } from '../../interfaces/Guia';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-ficha-guia',
  templateUrl: './ficha-guia.component.html',
  styleUrls: ['./ficha-guia.component.css']
})
export class FichaGuiaComponent {
  idGuia: number | undefined;
  guia: Guia | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idGuia = +params['idGuia']; // El operador + convierte el string a número
      this.loadGuia();
    });
  }

  loadGuia(): void {
    if (this.idGuia !== undefined) {
      this.apiService.getGuiaById(this.idGuia).subscribe(data => {
        this.guia = data;
      });
    }
  }
}
