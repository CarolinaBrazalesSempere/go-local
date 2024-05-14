import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {

  // Los valores que recibe de los input del html
  searchCountry = new FormControl('');
  searchCity = new FormControl('');
  searchDate = new FormControl('');

  // Los valores validados de los input que envia al componente donde
  // se mostrara la busqueda. Puede ser necesario utilizar @Output
  inputCountry?: string | null;
  inputCity?: string | null;
  inputDate?: string | null;

  constructor() {}

  // TODO: Logica del metodo search
  search() {

    const searchCountry = this.searchCountry.value!.trim();
    const searchCity = this.searchCity.value!.trim();
    const searchDate = this.searchDate.value!.trim();

    if (searchCountry.length >= 3 && searchCity.length >= 3 && searchDate.length >= 3) {

      this.inputCountry = searchCountry;
      this.inputCity = searchCity;
      this.inputDate = searchDate;

      console.log(this.inputCountry);
      console.log(this.inputCity);
      console.log(this.inputDate);

    }

  }

}
