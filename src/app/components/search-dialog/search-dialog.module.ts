import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ng materials
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

// 3rd parties
import { LazyLoadImageModule } from 'ng-lazyload-image';

// custom
import { NotFoundCardModule } from '../not-found-card/not-found-card.module';
import { SearchDialogComponent } from './search-dialog.component';
import { SearchGhostComponent } from './search-ghost/search-ghost.component';
import { SearchItemComponent } from './search-item/search-item.component';


@NgModule({
  declarations: [
    SearchDialogComponent, 
    SearchGhostComponent, 
    SearchItemComponent
  ],
  imports: [
    CommonModule,

    // ng materials
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,

    // 3rd parties
    LazyLoadImageModule,

    // custom
    NotFoundCardModule,
  ],
  exports: [
    SearchDialogComponent, 
    SearchGhostComponent,
    SearchItemComponent,
  ]
})
export class SearchDialogModule { }
