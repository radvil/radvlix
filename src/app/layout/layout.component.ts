import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectEffectiveTheme, selectIsStickyHeader } from '../@core/settings';
import { routeAnimations } from '../@shared';


@Component({
	selector: 'rad-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	animations: [routeAnimations],
	encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  public theme$: Observable<string> = this.store.pipe(select(selectEffectiveTheme));
  public isStickyHeader$: Observable<boolean> = this.store.select(selectIsStickyHeader);

	constructor(
		private store: Store
	) { }

	ngOnInit(): void {
	}
}
