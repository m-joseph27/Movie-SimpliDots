import { Component } from '@angular/core';
import { PlayingComponent } from '../../components/playing/playing.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MovieServices } from '../../services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series-tv',
  standalone: true,
  imports: [
    PlayingComponent,
    FooterComponent,
    HttpClientModule,
    ProgressSpinnerModule,
    CommonModule
  ],
  templateUrl: './series-tv.component.html',
  styleUrl: './series-tv.component.scss',
  providers: [ MovieServices ]
})
export class SeriesTvComponent {
  allMovies: any = [];
  params: any = {};
  movieStatus: any[] = [];
  spinning: boolean = true;

  constructor(
    private movieServices: MovieServices,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.params = Object.assign(this.route.snapshot.paramMap);
    this.getMovies();
    this.movieStatus = this.route.snapshot.url;
  }

  getMovies() {
    this.movieServices.getMovies(this.params.params.media_type, this.params.params.id).subscribe(movies => {
      this.allMovies = movies;
      this.spinning = false;
    })
  }
}
