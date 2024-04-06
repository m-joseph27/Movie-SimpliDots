import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Film',
        items: [
          {
            label: 'Populer',
            command: () => this.onItemClick('film', 'movie', 'popular')
          },
          {
            separator: true
          },
          {
            label: 'Sedang Diputar',
            command: () => this.onItemClick('film', 'movie', 'now_playing')
          },
          {
            separator: true
          },
          {
            label: 'Mendatang',
            command: () => this.onItemClick('film' ,'movie', 'upcoming')
          },
          {
            separator: true
          },
          {
            label: 'Top Rating',
            command: () => this.onItemClick('film', 'movie', 'top_rated')
          }
        ]
      },
      {
        label: 'Series TV',
        items: [
          {
            label: 'Populer',
            command: () => this.onItemClick('series', 'tv', 'popular')
          },
          {
            separator: true
          },
          {
            label: 'Sedang Tayang',
            command: () => this.onItemClick('series', 'tv', 'airing_today')
          },
          {
            separator: true
          },
          {
            label: 'Tayang Di TV',
            command: () => this.onItemClick('series', 'tv', 'on_the_air')
          },
          {
            separator: true
          },
          {
            label: 'Top Rating',
            command: () => this.onItemClick('series', 'tv', 'top_rated')
          }
        ]
      },
      {
        label: 'Favorite',
        items: [
          {
            label: 'List Favorite',
            command: () => this.onItemClick('favorite', '', '')
          },
        ]
      }
    ];
  }

  onItemClick(movie_type: string, genre: string, type: string) {
    return this.router.navigate([`${movie_type}/${genre}/${type}`]);
  }
}
