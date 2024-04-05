import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tranding',
  standalone: true,
  imports: [
    CarouselModule,
    TagModule,
    ButtonModule
  ],
  templateUrl: './tranding.component.html',
  styleUrl: './tranding.component.scss'
})
export class TrandingComponent implements OnChanges {
  @Input() data: any;
  
  responsiveOptions: any[] | undefined;

  constructor (
    private router: Router
  ) {}

  ngOnChanges() {}

  onDetailClick(movie: any) {
    console.log('mov', movie);
    this.router.navigate([`${movie.media_type}/${movie.id}`]);
  }
}
