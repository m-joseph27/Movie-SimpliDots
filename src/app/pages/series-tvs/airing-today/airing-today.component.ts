import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-airing-today',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './airing-today.component.html',
  styleUrl: './airing-today.component.scss'
})
export class AiringTodayComponent {

}
