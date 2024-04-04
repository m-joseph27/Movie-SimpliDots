import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-movie-popular',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './movie-popular.component.html',
  styleUrl: './movie-popular.component.scss'
})
export class MoviePopularComponent {

}
