import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

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

  ngOnInit() {
    this.items = [
      {
        label: 'Movie',
        items: [
          {
            label: 'Populer',
          },
          {
            separator: true
          },
          {
            label: 'Sedang Diputar',
          },
          {
            separator: true
          },
          {
            label: 'Mendatang',
          },
          {
            separator: true
          },
          {
            label: 'Top Rating'
          }
        ]
      },
      {
        label: 'Series TV',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Populer',
          },
          {
            separator: true
          },
          {
            label: 'Sedang Tayang',
          },
          {
            separator: true
          },
          {
            label: 'Tayang Di TV',
          },
          {
            separator: true
          },
          {
            label: 'Top Rating'
          }
        ]
      },
      {
        label: 'Orang',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Orang Populer',
            icon: 'pi pi-fw pi-user-plus'
          },
        ]
      },
    ];
  }

  onItemClick(event: any) {
    console.log(event);
  }
}
