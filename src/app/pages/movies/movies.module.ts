import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MovieListModule, GhostListModule } from '../../components';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    data: { title: 'Movies' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule { }

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MovieListModule,
    GhostListModule,
  ],
})
export class MoviesModule { }
