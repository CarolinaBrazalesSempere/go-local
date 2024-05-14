import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  // Los valores validados de los input que envia al servicio donde
  // se realizara la busqueda
  inputCountry: string = '';
  inputCity: string = '';
  inputDate: string = '';

  destinationForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.destinationForm = this.formBuilder.group({
      searchCountry: ['', Validators.required],
      searchCity: ['', Validators.required],
      searchDate: ['', Validators.required],
    });
  }

  // TODO: Logica del metodo search
  search() {
    if (this.destinationForm.valid) {
      const searchCountry = this.destinationForm
        .get('searchCountry')!
        .value.trim();
      const searchCity = this.destinationForm.get('searchCity')!.value.trim();
      const searchDate = this.destinationForm.get('searchDate')!.value.trim();

      this.inputCountry = searchCountry;
      this.inputCity = searchCity;
      this.inputDate = searchDate;

      console.log(this.inputCountry);
      console.log(this.inputCity);
      console.log(this.inputDate);
    } else {
      console.log('Formulario no válido');
    }
  }
}
