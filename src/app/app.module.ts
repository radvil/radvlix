import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './@core/core.module';
import { LayoutModule } from './layout/layout.module';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		// main
		CoreModule,
		LayoutModule,
		AppRouting,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
