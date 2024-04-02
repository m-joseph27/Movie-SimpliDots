// src/app/movie.service.ts

import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Film 1',
      description: 'Deskripsi film 1',
      favorite: false
    },
    {
      id: 2,
      title: 'Film 2',
      description: 'Deskripsi film 2',
      favorite: false
    },
    {
      id: 3,
      title: 'Film 3',
      description: 'Deskripsi film 1',
      favorite: false
    },
  ];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  toggleFavorite(id: number): void {
    const movie = this.movies.find(m => m.id === id);
    if (movie) {
      movie.favorite = !movie.favorite;
    }
  }
}
