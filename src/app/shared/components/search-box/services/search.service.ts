import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchGuide } from 'src/app/go-local/interfaces/SearchGuide';


@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private url: string = 'https://localhost:8083';

  constructor(private http: HttpClient) {}

  search(destination: string): Observable<SearchGuide[]> {
    console.log('ESTO ES DEL SERVICIO ' + destination);
    return this.http.get<SearchGuide[]>(`${this.url}/destination`);
  }
}
