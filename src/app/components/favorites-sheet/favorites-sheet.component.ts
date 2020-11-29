import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';


@Component({
  selector: 'favorites-sheet',
  templateUrl: './favorites-sheet.component.html',
  styleUrls: ['./favorites-sheet.component.scss']
})
export class FavoritesSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<FavoritesSheetComponent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}