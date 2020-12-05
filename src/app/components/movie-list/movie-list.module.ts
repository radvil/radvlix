import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { MovieListComponent } from './movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';



@NgModule({
  declarations: [MovieListComponent, MovieCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    LazyLoadImageModule,
  ],
  exports: [MovieListComponent]
})
export class MovieListModule { }
