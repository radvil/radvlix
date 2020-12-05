import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { SearchDialogComponent, FavoritesSheetComponent } from '../../components';
import { NotificationService } from 'src/app/@shared';
import { AuthService } from 'src/app/services';
import { selectIsStickyHeader } from '../../@core/settings';
import * as MenuItems from '../menu-items';


@Component({
  selector: 'rad-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {

  @Output() public onIconClicked = new EventEmitter();
  public isStickyHeader$: Observable<boolean>;
  public isLoggedIn$: Observable<boolean>;
  public menu = MenuItems;

  constructor(
    private _store: Store,
    private _authSrv: AuthService,
    private _notification: NotificationService,
    public bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.isStickyHeader$ = this._store.select(selectIsStickyHeader);
    this.isLoggedIn$ = this._authSrv.user$.pipe(map(user => !!user));
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
    this._authSrv.signOut()
      .then(_ => this._notification.success('You are now logged out'))
      .catch(err => this._notification.error(`Something went wrong!\n${err.message}`));
  }
}
