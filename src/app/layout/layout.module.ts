import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ng materials
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

// 3rd parties
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

// custom
import { GhostGridModule, NotFoundCardModule, MovieGridModule} from '../components';

import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FavoritesSheetComponent } from './favorites-sheet/favorites-sheet.component';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';

@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    FavoritesSheetComponent,
    SearchDialogComponent,
  ],
  entryComponents: [FavoritesSheetComponent, SearchDialogComponent],
  imports: [
    CommonModule,
    RouterModule,

    // ng materials
    MatButtonModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,

    // 3rd parties
    FontAwesomeModule,
    LoadingBarRouterModule,

    // custom
    GhostGridModule,
    NotFoundCardModule,
    MovieGridModule,
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
