import { Component } from '@angular/core';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';
import { TrandingComponent } from '../../components/tranding/tranding.component';
import { PlayingComponent } from '../../components/playing/playing.component';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [
    JumbotronComponent,
    TrandingComponent,
    PlayingComponent
  ],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss'
})
export class PlaylistComponent {

}
