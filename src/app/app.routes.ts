import { Routes } from '@angular/router';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SearchedMovieComponent } from './pages/searched-movie/searched-movie.component';
import { NowPlayingComponent } from './pages/movies/now-playing/now-playing.component';
import { UpComingComponent } from './pages/movies/up-coming/up-coming.component';
import { MovieTopRatedComponent } from './pages/movies/movie-top-rated/movie-top-rated.component';
import { MoviePopularComponent } from './pages/movies/movie-popular/movie-popular.component';
import { AiringTodayComponent } from './pages/series-tvs/airing-today/airing-today.component';
import { OnTheAirComponent } from './pages/series-tvs/on-the-air/on-the-air.component';
import { TvPopularComponent } from './pages/series-tvs/tv-popular/tv-popular.component';
import { TvTopRatedComponent } from './pages/series-tvs/tv-top-rated/tv-top-rated.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PlaylistComponent },
  { path: 'movie/popular', component: MoviePopularComponent },
  { path: 'movie/now_playing', component: NowPlayingComponent },
  { path: 'movie/upcoming', component: UpComingComponent },
  { path: 'movie/top_rated', component: MovieTopRatedComponent },
  { path: 'tv/popular', component: TvPopularComponent },
  { path: 'tv/airing_today', component: AiringTodayComponent },
  { path: 'tv/on_the_air', component: OnTheAirComponent },
  { path: 'tv/top_rated', component: TvTopRatedComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'search', component: SearchedMovieComponent },
  { path: '**', component: PageNotFoundComponent },
];
