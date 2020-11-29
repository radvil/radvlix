import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TvsComponent } from './tvs.component';
import { MovieListModule, GhostListModule } from '../../components';

const routes: Routes = [
  {
    path: '',
    component: TvsComponent,
    data: { title: 'TV Series' }
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvsRoutingModule { }


@NgModule({
  declarations: [TvsComponent],
  imports: [
    CommonModule,
    TvsRoutingModule,
    MovieListModule,
    GhostListModule,
  ]
})
export class TvsModule { }