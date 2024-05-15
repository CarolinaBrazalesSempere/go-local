import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  private url: string = 'https://localhost8080';

  constructor(private http: HttpClient) {}

  search(destination: string): Observable<any> {
    console.log(destination); // Comprueba que el servicio recibe los parametros de busqueda
    return this.http.post<any>(`${this.url}/search`, destination);
  }
}
