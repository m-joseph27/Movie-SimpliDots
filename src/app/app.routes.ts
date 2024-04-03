import { Routes } from '@angular/router';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { MovieComponent } from './pages/movie/movie.component';
import { FilmTVComponent } from './pages/film-tv/film-tv.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SearchedMovieComponent } from './pages/searched-movie/searched-movie.component';

export const routes: Routes = [
  { path: 'home', component: PlaylistComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'series', component: FilmTVComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'search', component: SearchedMovieComponent },
  { path: '**', component: PageNotFoundComponent },
];
