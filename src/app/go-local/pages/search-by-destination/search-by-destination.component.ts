import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/shared/components/search-box/services/search.service';
import { SearchGuide } from '../../interfaces/SearchGuide';

@Component({
  selector: 'app-search-by-destination',
  templateUrl: './search-by-destination.component.html',
  styleUrls: ['./search-by-destination.component.css'],
})
export class SearchByDestinationComponent implements OnInit {
  searchService!: SearchService;
  route!: ActivatedRoute;
  filteredResults: SearchGuide[] = [];
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const country = params['country'];
      const city = params['city'];
      const date = params['date'];

      if (country && city && date) {
        const destination = `${country} ${city} ${date}`;
        this.searchService.search(destination).subscribe((results) => {
          // Filtrar los resultados según la consulta de búsqueda original
          this.filteredResults = results.filter((result) => {
            // Implementa la lógica de filtrado según la concordancia con la consulta
            // Por ejemplo, puedes comparar result.country, result.city y result.date con los parámetros de búsqueda
            return (
              result.country === country &&
              result.city === city &&
              result.date === date
            );
          });
        });
      }
    });
  }
}
