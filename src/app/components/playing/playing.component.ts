import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-playing',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    CommonModule
  ],
  templateUrl: './playing.component.html',
  styleUrl: './playing.component.scss'
})
export class PlayingComponent {
  @Input() movies: any;

  constructor(
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['movies']) {
      const currentValue = changes['movies'].currentValue;
      if (!currentValue || (Array.isArray(currentValue) && currentValue.length === 0) || (currentValue === Object(currentValue) && Object.keys(currentValue).length === 0)) {
      }
    }
  }

  onCardClick(event: any) {
    this.router.navigate([`${event.genre}`])
  }
}
