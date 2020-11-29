import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GenresComponent } from './genres.component';
import { GhostListModule } from 'src/app/components';

const routes: Routes = [
  {
    path: '',
    component: GenresComponent,
    data: { title: 'All Genres' }
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }


@NgModule({
  declarations: [GenresComponent],
  imports: [
    CommonModule,
    GenresRoutingModule,
    GhostListModule,
  ]
})
export class GenresModule { }