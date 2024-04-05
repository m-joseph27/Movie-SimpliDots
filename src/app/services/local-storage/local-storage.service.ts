import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  addMovie(key: string, movie: any): void {
    const movies = this.getItem(key) || [];
    // Cek jika film dengan ID yang sama sudah ada
    const index = movies.findIndex((m: { id: any; }) => m.id === movie.id);
    if (index === -1) {
      movies.push(movie);
      this.setItem(key, movies);
    }
  }

  isMovieAdded(key: string, movieId: number): boolean {
    const movies = this.getItem(key) || [];
    return movies.some((movie: { id: number; }) => movie.id === movieId);
  }
}
