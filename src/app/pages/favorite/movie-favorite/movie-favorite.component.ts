import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-movie-favorite',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './movie-favorite.component.html',
  styleUrl: './movie-favorite.component.scss'
})
export class MovieFavoriteComponent {

}
