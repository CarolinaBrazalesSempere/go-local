import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  // Los valores validados de los input que envia al servicio donde
  // se realizara la busqueda
  inputCountry: string = '';
  inputCity: string = '';
  inputDate: string = '';

  destinationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
    private router: Router
  ) {
    this.destinationForm = this.formBuilder.group({
      searchCountry: ['', Validators.required],
      searchCity: ['', Validators.required],
      searchDate: ['', Validators.required],
    });
  }

  // TODO: Logica del metodo search
  search(): void {
    if (this.destinationForm.valid) {
      const searchCountry = this.destinationForm
        .get('searchCountry')!
        .value.trim();
      const searchCity = this.destinationForm.get('searchCity')!.value.trim();
      const searchDate = this.destinationForm.get('searchDate')!.value.trim();

      this.inputCountry = searchCountry;
      this.inputCity = searchCity;
      this.inputDate = searchDate;
      this.router.navigate(['/destinations'], {
        queryParams: {
          country: searchCountry,
          city: searchCity,
          date: searchDate,
        },
      });
      /* const destination = `${searchCountry} ${searchCity} ${searchDate}`;
      this.searchService.search(destination);
      this.router.navigate(['/destinations']);
      console.log(destination); */
    } else {
      console.log('≽^•⩊•^≼');
    }
  }
}
