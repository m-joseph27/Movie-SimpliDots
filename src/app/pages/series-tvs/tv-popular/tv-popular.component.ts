import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-tv-popular',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './tv-popular.component.html',
  styleUrl: './tv-popular.component.scss'
})
export class TvPopularComponent {

}
