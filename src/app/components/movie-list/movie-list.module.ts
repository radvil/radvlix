import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { MovieListComponent } from './movie-list.component';



@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    LazyLoadImageModule,
  ],
  exports: [MovieListComponent]
})
export class MovieListModule { }
