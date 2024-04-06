import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-caster',
  standalone: true,
  imports: [
    CarouselModule
  ],
  templateUrl: './caster.component.html',
  styleUrl: './caster.component.scss'
})
export class CasterComponent {
  @Input() data: any;
  
  responsiveOptions: any[] | undefined;
}
