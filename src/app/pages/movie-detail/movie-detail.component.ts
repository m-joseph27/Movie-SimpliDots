import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { MovieServices } from '../../services/movie/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    FooterComponent,
    HttpClientModule,
    CommonModule,
    ButtonModule
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
  providers: [ MovieServices, DatePipe ]
})

export class MovieDetailComponent {
  movieDetail: any = {};
  params: any = {};
  formattedDate: any;

  isAdded: boolean = false;
  itemName = 'favoriteMovie';

  constructor(
    private movieServices: MovieServices,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.params = Object.assign(this.route.snapshot.paramMap);
    this.getDetailMovie();
  }

  checkMovieStatus() {
    this.isAdded = this.localStorageService.isMovieAdded('favorites', this.movieDetail.id);
  }

  addFavorite() {
    this.localStorageService.addMovie('favorites', this.movieDetail);
    this.isAdded = true;
  }

  deleteFavorite() {
    this.localStorageService.removeMovie('favorites', this.movieDetail.id);
    this.isAdded = false;
  }

  getDetailMovie() {
    this.movieServices.getDetailMovie(this.params.params.media_type, this.params.params.id).subscribe(movie => {
      this.movieDetail = Object.assign(movie);
      this.checkMovieStatus();
    });
  }

  // getYear(dateString: string): string {
  //   return dateString.substring(0, 4);
  // }

  formatDate(date: any) {
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }

}
