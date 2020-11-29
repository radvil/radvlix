import browser from 'browser-detect';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  TitleService,
  LocalStorageService,
  NotificationService,
  OfflanerService,
} from './@shared';
import { changePageAnimationsDisabled } from './@core/settings/settings.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rad-root',
  template: `<rad-layout></rad-layout>`,
})
export class AppComponent implements OnInit, OnDestroy {
  private _subs = new Subscription();

  constructor(
    private titleSrv: TitleService,
    private lsSrv: LocalStorageService,
    private store: Store,
    private offlanerSrv: OfflanerService,
    private notificationrv: NotificationService
  ) {}

  ngOnInit(): void {
    this.titleSrv.setAppTitle();
    this.lsSrv.testLocalStorage();
    this.setOfflineStatus();

    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        changePageAnimationsDisabled({
          pageAnimationsDisabled: true,
        })
      );
    }
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser.name);
  }

  private setOfflineStatus(): void {
    const isOffline = this.offlanerSrv.isOffline();
    const isOnline = this.offlanerSrv.isOnline();

    this._subs.add(
      isOffline.subscribe((_) =>
        this.notificationrv.warn("You're currently offline!")
      )
    );

    this._subs.add(
      isOnline.subscribe((_) =>
        this.notificationrv.success('You back to online!')
      )
    );
  }
}
