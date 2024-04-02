// src/app/movie/movie.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import ini diperlukan untuk directive seperti *ngFor, *ngIf, dll.
import { MatButtonModule } from '@angular/material/button'; // Contoh mengimpor modul button dari Angular Material
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule]
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }

  toggleFavorite(id: number): void {
    this.movieService.toggleFavorite(id);
  }
}
