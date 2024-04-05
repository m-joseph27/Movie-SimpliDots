import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';
import { TrandingComponent } from '../../components/tranding/tranding.component';
import { PlayingComponent } from '../../components/playing/playing.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MovieServices } from '../../services/movie.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [
    JumbotronComponent,
    TrandingComponent,
    PlayingComponent,
    FooterComponent,
    HttpClientModule
  ],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',
  providers: [ MovieServices ]
})
export class PlaylistComponent implements OnInit {
  trending: any[] | undefined;
  movies: any[] | undefined;

  constructor(
    private movieServices: MovieServices,
  ) {}

  ngOnInit() {
    this.loadAllMovies();
    this.loadTrandingMovies();
  }

  loadAllMovies() {
    this.movieServices.getAllMovies().subscribe(data => {
      this.movies = data.results;
    });
  }

  loadTrandingMovies() {
    this.movieServices.getTrendingMovies().subscribe(tren => {
      this.trending = tren.results;
    });
  }
}
