import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../../environments/environment';

// 3rd parties libs
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

// app states
import { reducers, metaReducers } from './core.state';
import { SettingsEffects } from './settings';

// app utils
import { HttpErrorInterceptor, AppErrorHandler } from './handlers';

// app providers
const PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  { provide: ErrorHandler, useClass: AppErrorHandler }
];

@NgModule({
  providers: [...PROVIDERS],
  imports: [
    HttpClientModule,
    // 3rd parties
    LoadingBarModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([SettingsEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Radvlix',
      logOnly: environment.production
    }),
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
