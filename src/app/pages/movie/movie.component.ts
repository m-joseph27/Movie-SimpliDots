import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PlayingComponent } from '../../components/playing/playing.component';
import { MovieServices } from '../../services/movie/movie.service';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormatTitlePipe } from '../../services/formater/formatter.pipe';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [
    HttpClientModule,
    PlayingComponent,
    FooterComponent,
    ProgressSpinnerModule,
    CommonModule,
    FormatTitlePipe
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
  providers: [ MovieServices ]
})
export class MovieComponent implements OnInit {
  
  allMovies: any = [];
  params: any = {};
  movieStatus: any;
  spinning: boolean = true;

  constructor(
    private movieServices: MovieServices,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.params = Object.assign(this.route.snapshot.paramMap);
    this.getMovies();

    this.route.params.pipe(
      switchMap(params => {
        this.params = params;
        this.spinning = true;
        this.movieStatus = params['id'];
        return this.movieServices.getMovies(params['media_type'], params['id']);
      })
    ).subscribe((movies: any) => {
      this.allMovies = movies.results;
      this.spinning = false;
    });
  }

  getMovies() {
    this.movieServices.getMovies(this.params.params.media_type, this.params.params.id).subscribe((movies: any) => {
      this.allMovies =  movies.results;
      this.spinning = false;
    });
  }
}
