import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieServices {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}


  getAllMovies(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/now_playing?language=id-ID&page=${page}`);
  }

  getTrendingMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/day?language=en-US`);
  }

  getDetailMovie(media_type: string, movie_id: number | number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${media_type}/${movie_id}?language=en-US`);
  }
}