import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { TrandingComponent } from './components/tranding/tranding.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet,
      MovieComponent,
      NavbarComponent,
      JumbotronComponent,
      TrandingComponent,
      PlaylistComponent,
      RouterModule
    ]
})
export class AppComponent {
  title = 'Test-SimpliDots';
}
