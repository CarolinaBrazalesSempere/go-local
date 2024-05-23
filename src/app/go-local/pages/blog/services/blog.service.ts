import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostBlog } from 'src/app/go-local/interfaces/PostBlog';

@Injectable({providedIn: 'root'})
export class BlogService {

  private baseUrl = 'http://localhost:8083/blog';

  constructor(private http: HttpClient) { }

  getBlogEntries(): Observable<PostBlog[]> {
    // return this.http.get<PostBlog[]>(this.baseUrl);
    return this.http.get<PostBlog[]>(`${this.baseUrl}/todos`);
  }

  getBlogEntryById(id: number): Observable<PostBlog> {
    // return this.http.get<PostBlog>(`${this.baseUrl}/articulo/${id}`);
    return this.http.get<PostBlog>(`${this.baseUrl}/${id}`);
  }

}
