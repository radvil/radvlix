import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./pages/pages.module').then(
				(m) => m.PagesModule
			)
	},
	{
		path: 'settings',
		loadChildren: () =>
			import('./pages/settings/settings.module').then(
				(m) => m.SettingsModule
			)
	},
	{
		path: '**',
		redirectTo: 'about'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			useHash: false,
			scrollPositionRestoration: 'enabled',
		})
	],
	exports: [RouterModule]
})
export class AppRouting {}
