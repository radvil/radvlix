import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OfflanerService {

  private offlineEvent: Observable<Event>;
  private onlineEvent: Observable<Event>;

  constructor() {
    this.offlineEvent = fromEvent(window, 'offline');
    this.onlineEvent = fromEvent(window, 'online');
  }

  public isOffline(): Observable<boolean> {
    return this.offlineEvent.pipe(
      map(event => event.type == 'offline')
    )
  }

  public isOnline(): Observable<boolean> {
    return this.onlineEvent.pipe(
      map(event => event.type == 'online')
    )
  }

}