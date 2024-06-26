import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CustomDatePipe } from '../../services/formater/custom-date.pipe';

@Component({
  selector: 'app-playing',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    CommonModule,
    CustomDatePipe
  ],
  templateUrl: './playing.component.html',
  styleUrl: './playing.component.scss',
})
export class PlayingComponent {
  @Input() movies: any;

  constructor(
    private router: Router,
  ) {}

  onCardClick(movie: any) {
    this.router.navigate([`movie/${movie.id}`]);
  }
}
