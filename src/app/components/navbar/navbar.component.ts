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
            command: () => this.onItemClick('movie', 'popular')
          },
          {
            separator: true
          },
          {
            label: 'Sedang Diputar',
            command: () => this.onItemClick('movie', 'now_playing')
          },
          {
            separator: true
          },
          {
            label: 'Mendatang',
            command: () => this.onItemClick('movie', 'upcoming')
          },
          {
            separator: true
          },
          {
            label: 'Top Rating',
            command: () => this.onItemClick('movie', 'top_rated')
          }
        ]
      },
      {
        label: 'Series TV',
        items: [
          {
            label: 'Populer',
            command: () => this.onItemClick('tv', 'popular')
          },
          {
            separator: true
          },
          {
            label: 'Sedang Tayang',
            command: () => this.onItemClick('tv', 'airing_today')
          },
          {
            separator: true
          },
          {
            label: 'Tayang Di TV',
            command: () => this.onItemClick('tv', 'on_the_air')
          },
          {
            separator: true
          },
          {
            label: 'Top Rating',
            command: () => this.onItemClick('tv', 'top_rated')
          }
        ]
      },
      {
        label: 'Favorite',
        items: [
          {
            label: 'List Favorite',
            command: () => this.onItemClick('favorite', '')
          },
        ]
      }
    ];
  }

  onItemClick(genre: string, type: string) {
    this.router.navigate([`${genre}/${type}`]);
  }
}
