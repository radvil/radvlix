import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable, NgZone } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { combineLatest, merge, of } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';

import { AnimationsService, LocalStorageService } from '../../@shared';
import { IState } from './settings.model';
import * as fromActions from './settings.actions';
import * as fromSelectors from './settings.selectors';


export const SETTINGS_KEY = 'SETTINGS';

const INIT = of('vtrx-init-effect-trigger');

@Injectable()
export class SettingsEffects {
	constructor(
		private actions$: Actions,
		private store: Store<IState>,
		private overlayContainer: OverlayContainer,
		private localStorageSrv: LocalStorageService,
		private ngZone: NgZone,
		private animationsSrv: AnimationsService
	) {}

	hour = 0;
	changeHour = this.ngZone.runOutsideAngular(() =>
		setInterval(() => {
			const hour = new Date().getHours();
			if (hour !== this.hour) {
				this.hour = hour;
				this.ngZone.run(() =>
					this.store.dispatch(fromActions.changeHour({ hour }))
				);
			}
		}, 60_000)
	);

	persistSettings = createEffect(
		() =>
			this.actions$.pipe(
				ofType(
					fromActions.changeAutoNightMode,
					fromActions.changeTheme,
					fromActions.changeStickyHeader,
					fromActions.changePageAnimations,
					fromActions.changePageAnimationsDisabled,
					fromActions.changeElementsAnimations
				),
				withLatestFrom(
					this.store.pipe(select(fromSelectors.selectSettingsState))
				),
				tap(([action, settings]) =>
					this.localStorageSrv.setItem(SETTINGS_KEY, settings)
				)
			),
		{ dispatch: false }
	);

	updateTheme = createEffect(
		() =>
			merge(INIT, this.actions$.pipe(ofType(fromActions.changeTheme))).pipe(
				withLatestFrom(
					this.store.pipe(select(fromSelectors.selectEffectiveTheme))
				),
				tap(([action, effectiveTheme]) => {
					const classList = this.overlayContainer.getContainerElement()
						.classList;
					const toRemove = Array.from(classList).filter((item: string) =>
						item.includes('-theme')
					);
					if (toRemove.length) {
						classList.remove(...toRemove);
					}
					classList.add(effectiveTheme);
				})
			),
		{ dispatch: false }
	);

	updateRouteAnimationType = createEffect(
		() =>
			merge(
				INIT,
				this.actions$.pipe(
					ofType(
						fromActions.changeElementsAnimations,
						fromActions.changePageAnimations
					)
				)
			).pipe(
				withLatestFrom(
					combineLatest([
						this.store.pipe(select(fromSelectors.selectPageAnimations)),
						this.store.pipe(select(fromSelectors.selectElementsAnimations))
					])
				),
				tap(([action, [pageAnimations, elementsAnimations]]) =>
					this.animationsSrv.updateRouteAnimationType(
						pageAnimations,
						elementsAnimations
					)
				)
			),
		{ dispatch: false }
	);
}
