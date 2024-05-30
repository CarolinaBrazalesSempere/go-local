import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  inputCountry: string = '';
  inputCity: string = '';
  inputDate: string = '';
  errorMessage: string = '';

  destinationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService
  ) {
    this.destinationForm = this.formBuilder.group({
      searchCountry: ['', Validators.required],
      searchCity: ['', Validators.required],
      searchDate: ['', Validators.required],
    });
  }

  async search(): Promise<void> {
    if (this.destinationForm.valid) {
      const searchCountry = this.destinationForm
        .get('searchCountry')!
        .value.trim();
      const searchCity = this.destinationForm.get('searchCity')!.value.trim();
      const searchDate = this.destinationForm.get('searchDate')!.value.trim();

      this.inputCountry = searchCountry;
      this.inputCity = searchCity;
      this.inputDate = searchDate;

      const searchDateObj = new Date(searchDate);

      try {
        const itinerarios = await firstValueFrom(
          this.apiService.buscarItinerariosPorCiudadPaisYFecha(
            searchCity,
            searchCountry,
            searchDateObj
          )
        );
        if (itinerarios.length > 0) {
          this.router.navigate(['/destinations'], {
            queryParams: {
              country: searchCountry,
              city: searchCity,
              date: searchDate,
            },
          });
        } else {
          this.errorMessage =
            'Error en algún parámetro de búsqueda, ¡revisa bien y a viajar!';
        }
      } catch (error) {
        console.error('Error en la búsqueda:', error);
      }
    }
  }
}
