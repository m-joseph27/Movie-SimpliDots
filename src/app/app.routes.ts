import { Routes } from '@angular/router';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SeriesTvComponent } from './pages/series-tv/series-tv.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PlaylistComponent },
  { path: ':media_type/:id', component: MovieDetailComponent, pathMatch: 'full' },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'film/:media_type/:id', component: MovieComponent },
  { path: 'series/:media_type/:id', component: SeriesTvComponent },
  { path: '**', component: PageNotFoundComponent },
];
