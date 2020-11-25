import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { initStateFromLocalStorage } from './init.reducer';
import { ISettingsState } from './settings/settings.model';

import { settingsReducer } from './settings/settings.reducer';

export const reducers: ActionReducerMap<IAppState> = {
	settings: settingsReducer
};

export const metaReducers: MetaReducer<IAppState>[] = [
	initStateFromLocalStorage
];

export interface IAppState {
	readonly settings: ISettingsState;
}
