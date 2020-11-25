import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule, PAGE_COMPONENTS } from './pages.routing';
import { MovieListModule, GhostListModule } from '../components';

@NgModule({
  declarations: [...PAGE_COMPONENTS],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MovieListModule,
    GhostListModule,
  ]
})
export class PagesModule { }
