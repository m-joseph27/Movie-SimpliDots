import { HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PlayingComponent } from '../../components/playing/playing.component';
import { MovieServices } from '../../services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    HttpClientModule,
    PlayingComponent,
    FooterComponent
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
  providers: [ MovieServices ]
})
export class MovieComponent implements OnInit, AfterViewInit {
  allMovies: any = [];
  params: any = {};
  movieStatus: any[] = [];

  constructor(
    private movieServices: MovieServices,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.params = Object.assign(this.route.snapshot.paramMap);
    this.getMovies();
    this.movieStatus = this.route.snapshot.url;
  }

  ngAfterViewInit() {
  }

  getMovies() {
    this.movieServices.getMovies(this.params.params.media_type, this.params.params.id).subscribe(movies => {
      this.allMovies = movies;
    })
  }
}
