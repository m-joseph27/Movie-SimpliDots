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
    return this.http.get(`${this.baseUrl}/movie/now_playing?language=en-US&page=${page}`);
  }

  getTrendingMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/day?language=en-US`);
  }

  getDetailMovie(media_type: string, movie_id: number | number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${media_type}/${movie_id}?language=en-US`);
  }

  getCredits(media_type: string, movie_id: number | number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${media_type}/${movie_id}/credits?language=en-US`);
  }

  getMovies(media_type: string, status: string) {
    return this.http.get(`${this.baseUrl}/${media_type}/${status}?language=en-US`);
  }

  searchMovie(query: string) {
    return this.http.get(`${this.baseUrl}/search/multi?query=${query}&language=en-US`);
  }

}
