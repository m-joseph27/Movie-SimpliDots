import { Component, OnInit } from '@angular/core';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';
import { PlayingComponent } from '../../components/playing/playing.component';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [
    JumbotronComponent,
    PlayingComponent,
    FooterComponent
  ],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent implements OnInit{
  favoriteMovies: any[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.loadFavoriteMovies();
  }

  loadFavoriteMovies() {
    this.favoriteMovies = this.localStorageService.getItem('favorites') || [];
  }
}
