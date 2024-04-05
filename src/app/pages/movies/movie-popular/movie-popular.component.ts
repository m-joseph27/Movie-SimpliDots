import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MovieServices } from '../../../services/movie/movie.service';

@Component({
  selector: 'app-movie-popular',
  standalone: true,
  imports: [
    FooterComponent,
  ],
  templateUrl: './movie-popular.component.html',
  styleUrl: './movie-popular.component.scss',
  providers: [ MovieServices ]
})
export class MoviePopularComponent implements OnInit {

  constructor(
    private movieServices: MovieServices,
  ) {}

  ngOnInit() {
    
  }

  // getDetailMovie() {
  //   this.movieServices.getDetailMovie().subscribe(movie => {console.log('movie', movie)});
  // }
}
