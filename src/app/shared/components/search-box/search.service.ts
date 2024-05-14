import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private url: string = '';
  constructor(private http: HttpClient) {}

  search(destination: string): Observable<any> {
    return this.http.post<any>(`${this.url}/search`, destination);
  }
}
