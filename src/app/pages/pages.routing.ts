import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvComponent } from './tv/tv.component';
import { GenresComponent } from './genres/genres.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MovieComponent,
    data: { title: 'Movies' }
  },
  {
    path: 'movies/:movieId',
    component: MovieDetailComponent,
    data: { title: 'Detail' }
  },
  {
    path: 'genres',
    component: GenresComponent,
    data: { title: 'Genres' }
  },
  {
    path: 'tv-shows',
    component: TvComponent,
    data: { title: 'TV Shows' }
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }

export const PAGE_COMPONENTS = [
  MovieComponent,
  MovieDetailComponent,
  TvComponent,
  GenresComponent,
]
