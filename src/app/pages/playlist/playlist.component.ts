import { Component, OnInit } from '@angular/core';
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
  constructor(
    private movieServices: MovieServices,
  ) {}

  // movies;
  trending: any[] | undefined;
  movies: any[] | undefined;

  ngOnInit() {
    this.loadAllMovies();
    this.loadTrandingMovies();
  }

  loadAllMovies() {
    this.movieServices.getAllMovies().subscribe(data => {
      this.movies?.push(data);
    });
  }

  loadTrandingMovies() {
    this.movieServices.getTrendingMovies().subscribe(tren => {
      // this.trending?.push(tren.results);
      this.trending = tren.results;
    });
  }
}
