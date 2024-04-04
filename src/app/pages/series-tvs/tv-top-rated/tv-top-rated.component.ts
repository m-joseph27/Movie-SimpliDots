import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-tv-top-rated',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './tv-top-rated.component.html',
  styleUrl: './tv-top-rated.component.scss'
})
export class TvTopRatedComponent {

}
