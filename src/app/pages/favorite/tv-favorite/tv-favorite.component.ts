import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-tv-favorite',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './tv-favorite.component.html',
  styleUrl: './tv-favorite.component.scss'
})
export class TvFavoriteComponent {

}
