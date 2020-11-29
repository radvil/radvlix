import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { FavoritesSheetComponent } from './favorites-sheet.component';


@NgModule({
  declarations: [
    FavoritesSheetComponent,
  ],
  imports: [
    CommonModule,
    MatBottomSheetModule,
  ],
  exports: [
    FavoritesSheetComponent,
  ],
})
export class FavoritesSheetModule { }
