import { Component, Input, OnChanges } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { CustomDatePipe } from '../../services/formater/custom-date.pipe';

@Component({
  selector: 'app-tranding',
  standalone: true,
  imports: [
    CarouselModule,
    TagModule,
    ButtonModule,
    CustomDatePipe
  ],
  templateUrl: './tranding.component.html',
  styleUrl: './tranding.component.scss',
})
export class TrandingComponent implements OnChanges {
  @Input() data: any;
  
  responsiveOptions: any[] | undefined;

  constructor (
    private router: Router,
  ) {}

  ngOnChanges() {}

  onDetailClick(movie: any) {
    this.router.navigate([`${movie.media_type}/${movie.id}`]);
  }
}
