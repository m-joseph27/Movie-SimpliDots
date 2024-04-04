import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  constructor(
    private router: Router
  ) {}

  playlists = [
    {
      header: 'Advance Card 1',
      subHeader: 'Card Sub Header 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      genre: 'movie/popular'
    },
    {
      header: 'Advance Card 2',
      subHeader: 'Card Sub Header 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      genre: 'movie/popular'
    },
    {
      header: 'Advance Card 3',
      subHeader: 'Card Sub Header 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      genre: 'movie/popular'
    },
    {
      header: 'Advance Card 4',
      subHeader: 'Card Sub Header 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      genre: 'movie/popular'
    },
    {
      header: 'Advance Card 5',
      subHeader: 'Card Sub Header 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      genre: 'movie/popular'
    },
    {
      header: 'Advance Card 6',
      subHeader: 'Card Sub Header 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      genre: 'movie/popular'
    },
    {
      header: 'Advance Card 7',
      subHeader: 'Card Sub Header 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      genre: 'movie/popular'
    },
    {
      header: 'Advance Card 8',
      subHeader: 'Card Sub Header 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!',
      genre: 'movie/popular'
    }
  ];

  onCardClick(event: any) {
    console.log('event', event);
    this.router.navigate([`${event.genre}`])
  }
}
