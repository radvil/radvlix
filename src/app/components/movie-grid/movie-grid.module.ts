import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieGridComponent } from './movie-grid.component';



@NgModule({
  declarations: [MovieGridComponent],
  imports: [
    CommonModule
  ],
  exports: [MovieGridComponent]
})
export class MovieGridModule { }
