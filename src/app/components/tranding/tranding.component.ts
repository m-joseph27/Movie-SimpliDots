import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

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
  movies = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
  ];
  
  responsiveOptions: any[] | undefined;

  constructor () {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      const currentValue = changes['data'].currentValue;
      if (!currentValue || (Array.isArray(currentValue) && currentValue.length === 0) || (currentValue === Object(currentValue) && Object.keys(currentValue).length === 0)) {
        console.log('Data @Input kosong atau tidak terdefinisi');
      } else {
        console.log('Data @Input ada');
        console.log('data', this.data);
      }
    }
  }

  getSeverity(status: string): any {
    switch (status) {
      case '42.489':
        return 'success';
      case '42.482':
        return 'warning';
      case '42.481':
        return 'danger';
    }
  }
}
