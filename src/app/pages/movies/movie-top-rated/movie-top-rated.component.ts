import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-movie-top-rated',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './movie-top-rated.component.html',
  styleUrl: './movie-top-rated.component.scss'
})
export class MovieTopRatedComponent {

}
