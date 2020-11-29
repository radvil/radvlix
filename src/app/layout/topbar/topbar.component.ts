import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectIsStickyHeader } from '../../@core/settings';
import { SearchDialogComponent, FavoritesSheetComponent } from '../../components';
import * as MenuItems from '../menu-items';


@Component({
  selector: 'rad-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent implements OnInit {

  @Output() public onIconClicked = new EventEmitter();
  public isStickyHeader$: Observable<boolean>;
  public menu = MenuItems;

  constructor(
    private store: Store,
    public bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
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
    this.dialog.open(SearchDialogComponent, {
      width: '100vw',
      maxWidth: '100vw',
      maxHeight: '80vh',
      panelClass: ['search-dialog']
    });
  }

  public logoutUser(): void {
    // todo
    console.log('TODO')
  }
}
