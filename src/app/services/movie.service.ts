import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieServices {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}


  getAllMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/now_playing?language=id-ID&page=1`);
  }

  getTrendingMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/day?language=en-US`);
  }
}
