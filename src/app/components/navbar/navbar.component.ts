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
        icon: 'pi pi-fw pi-pencil',
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
      }
    ];
  }

  onItemClick(genre: string, type: string) {
    console.log('eve', genre);
    console.log('type', type);
    this.router.navigate([`${genre}/${type}`]);
  }
}
