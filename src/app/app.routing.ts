import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, NotAuthGuard } from './services';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'genres',
    loadChildren: () =>
      import('./pages/genres/genres.module').then(
        (m) => m.GenresModule
      )
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(
        (m) => m.LoginModule
      ),
    canActivate: [NotAuthGuard],
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movies/movies.module').then(
        (m) => m.MoviesModule
      )
  },
  {
    path: 'my-profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterModule
      ),
    canActivate: [NotAuthGuard],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then(
        (m) => m.SettingsModule
      )
  },
  {
    path: 'tv-shows',
    loadChildren: () =>
      import('./pages/tvs/tvs.module').then(
        (m) => m.TvsModule
      )
  },
  {
    path: 'movie-detail/:movieId',
    loadChildren: () =>
      import('./pages/movie-detail/movie-detail.module').then(
        (m) => m.MovieDetailModule
      ),
  },
  {
    path: 'credits/:movieIdForCredits',
    loadChildren: () =>
      import('./pages/credits/credits.module').then(
        (m) => m.CreditsModule
      ),
  },
  // {
  //   path: '**',
  //   redirectTo: 'movies'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
})
  ],
  exports: [RouterModule]
})
export class AppRouting { }
