import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { selectIsStickyHeader } from '../../@core/settings';
import { FavoritesSheetComponent } from '../favorites-sheet/favorites-sheet.component';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import * as MenuItems from '../menu-items';


@Component({
  selector: 'rad-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Output() public onIconClicked = new EventEmitter();
  public isStickyHeader$: Observable<boolean>;
  public menu = MenuItems;
  private subscription = new Subscription();

  constructor(
    private store: Store,
    public bottomSheet: MatBottomSheet,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.isStickyHeader$ = this.store.select(selectIsStickyHeader);
  }

  public sendEventToLayout(): void {
    this.onIconClicked.emit();
  }

  public openFavoritesSheet(): void {
    this.bottomSheet.open(FavoritesSheetComponent);
  }

  public openSearchDialog(): void {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      width: '100vw',
      maxWidth: '100vw',
      maxHeight: '80vh',
      panelClass: ['search-dialog']
    });

    this.subscription.add(
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      })
    );
  }

  public logoutUser(): void {
    // todo
    console.log('TODO')
  }
}
